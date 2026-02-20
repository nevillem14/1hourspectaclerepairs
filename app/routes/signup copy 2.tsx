import { Form, redirect, useActionData } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router";
import { supabase } from "~/utils/supabaseClient";

type ActionData = { error?: string };

export async function action({ request }: ActionFunctionArgs) {
  try {
    console.log("Signup action started");

    const formData = await request.formData();
    console.log("Form data received");

    const email = formData.get("email");
    const password = formData.get("password");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    if (!email || !password) {
      return { error: "Email and password are required" };
    }

    console.log("Calling supabase.auth.signUp with:", { email });

    console.log("Calling supabase.auth.signUp with:", { email });

    const {
      data: { user },
      error: signUpError,
    } = await supabase.auth.signUp({
      email: email as string,
      password: password as string,
      options: {
        data: {
          first_name: firstName as string | undefined,
          last_name: lastName as string | undefined,
          registered_from: "wsdxi",
        },
      },
    });

    console.log("Signup response:", { userId: user?.id, error: signUpError });

    if (signUpError) {
      console.error("Supabase signup error:", signUpError);
      return { error: signUpError.message };
    }

    if (!user) {
      return { error: "No user returned after signup" };
    }

    console.log("Signup successful, redirecting");

    // ───────────────────────────────────────────────
    // IMPORTANT: DO NOT insert or upsert into "users" here!
    // The trigger `on_auth_user_created` already creates the row automatically
    // ───────────────────────────────────────────────

    return redirect("/login?message=Account created — please log in");
  } catch (err: any) {
    console.error("CRASH in signup action:", err);
    return {
      error: err.message || "Internal server error during signup",
    };
  }
}

export default function Signup() {
  const actionData = useActionData() as ActionData | undefined;

  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Create Account</h1>

      <Form method="post" className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            name="firstName"
            type="text"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            name="lastName"
            type="text"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            name="password"
            type="password"
            required
            minLength={6}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {actionData?.error && (
          <div className="text-red-600 text-sm">{actionData.error}</div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700"
        >
          Sign Up
        </button>
      </Form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          Log in
        </a>
      </p>
    </div>
  );
}
