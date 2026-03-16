import { createClient } from "@supabase/supabase-js";

export const handler = async (event) => {
  // 1. Guard: Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // 2. Auth: Verify the Dashboard User via Supabase JWT
  const authHeader = event.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return { statusCode: 401, body: JSON.stringify({ error: "Unauthorized" }) };
  }
  const token = authHeader.split(" ")[1];

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
  );

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Invalid session" }),
    };
  }

  // 3. Data: Get stored cPanel credentials for THIS user
  const { data: settings, error: settingsError } = await supabase
    .from("user_cpanel_settings")
    .select("cpanel_username, cpanel_api_token, server_hostname")
    .eq("user_id", user.id)
    .single();

  if (settingsError || !settings) {
    return {
      statusCode: 403,
      body: JSON.stringify({
        error: "cPanel settings not found for this user.",
      }),
    };
  }

  // 4. Input: Parse the email and new password
  const { email, newPassword } = JSON.parse(event.body || "{}");
  if (!email || !newPassword || newPassword.length < 10) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Email and password (min 10 chars) required.",
      }),
    };
  }

  // 5. Logic: Split email into user and domain for cPanel API
  const [emailUser, emailDomain] = email.split("@");
  const host = settings.server_hostname;

  // 6. API: Call cPanel UAPI
  const params = new URLSearchParams({
    email: emailUser,
    domain: emailDomain,
    password: newPassword,
  });

  const apiUrl = `https://${host}:2083/execute/Email/passwd_pop?${params.toString()}`;

  try {
    // This 'fetch' is now the native Node.js version
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `cpanel ${settings.cpanel_username}:${settings.cpanel_api_token}`,
      },
    });

    const result = await response.json();

    // cPanel UAPI returns status: 1 for success
    if (result.status !== 1) {
      console.error("cPanel Error:", result.errors);
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: result.errors?.[0] || "cPanel failed to update password.",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Successfully updated password for ${email}`,
      }),
    };
  } catch (err) {
    console.error("Network/Server Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Could not connect to the hosting server.",
      }),
    };
  }
};
