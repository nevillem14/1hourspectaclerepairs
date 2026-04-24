import {
  Form,
  redirect,
  useActionData,
  useSearchParams,
} from "react-router-dom";
import type { ActionFunctionArgs } from "react-router";
import { supabase } from "~/utils/supabaseClient";

type ActionData = { error?: string };

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  if (!user) {
    return { error: "Login failed" };
  }

  // Update used_apps
  const { data: profile } = await supabase
    .from("users")
    .select("app_info")
    .eq("id", user.id)
    .single();

  if (profile) {
    const appInfo = profile.app_info ?? {};
    const usedApps: string[] = appInfo.used_apps ?? [];
    if (!usedApps.includes("wsdxi")) {
      await supabase
        .from("users")
        .update({
          app_info: {
            ...appInfo,
            used_apps: [...usedApps, "wsdxi"],
          },
        })
        .eq("id", user.id);
    }
  }

  return redirect("/dashboard"); // or wherever you want after login
}

export default function Login() {
  const actionData = useActionData() as ActionData | undefined;
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");

  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Log In</h1>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <Form method="post" className="space-y-5">
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
          Log In
        </button>
      </Form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
