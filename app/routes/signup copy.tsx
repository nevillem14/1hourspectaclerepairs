import { Form, redirect, useActionData } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router";
import { supabase } from "~/utils/supabaseClient";

type ActionData = { error?: string };

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  const {
    data: { user },
    error: signUpError,
  } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    },
  });

  if (signUpError) {
    return { error: signUpError.message };
  }

  if (!user) {
    return { error: "No user returned after signup" };
  }

  // Create / update profile row
  const { error: profileError } = await supabase.from("users").upsert({
    id: user.id,
    first_name: firstName,
    last_name: lastName,
    app_info: {
      registered_from: "wsdxi",
      used_apps: ["wsdxi"],
    },
  });

  if (profileError) {
    return { error: profileError.message };
  }

  // For better UX, you could sign the user in automatically here
  // await supabase.auth.signInWithPassword({ email, password })

  return redirect("/login?message=Account created — please log in");
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
