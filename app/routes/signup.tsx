import { Form, redirect, useActionData } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router";
import { supabase } from "~/utils/supabaseClient";

type ActionData = { error?: string };

export async function action({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const firstName = formData.get("firstName")?.toString(); // Get names from form
    const lastName = formData.get("lastName")?.toString();

    if (!email || !password) return { error: "Missing fields" };

    const result = await supabase.auth.signUp({
      email,
      password,
      options: {
        // 1. Pass the metadata for your public.users table trigger
        data: {
          first_name: firstName,
          last_name: lastName,
          app: "wsdxi", // Optional: helps identify where the user came from
        },
        // 2. Tell Supabase to send them to /verified after email confirmation
        emailRedirectTo: `${new URL(request.url).origin}/verified`,
      },
    });

    if (result.error) return { error: result.error.message };

    // Redirect to the new success screen instead of login
    // Pass the email in the URL so the next page can use it for resending
    return redirect(`/verify-email?email=${encodeURIComponent(email)}`);
  } catch (err) {
    console.error("signup crash:", err);
    return { error: String(err) };
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
