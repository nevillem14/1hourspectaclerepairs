import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { supabase } from "~/utils/supabaseClient";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const message = searchParams.get("message");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Perform the sign-in on the CLIENT side
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      // 2. Update used_apps (Optional logic)
      const { data: profile } = await supabase
        .from("users")
        .select("app_info")
        .eq("id", data.user.id)
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
            .eq("id", data.user.id);
        }
      }

      toast.success("Login successful!");

      // 3. Redirect to dashboard
      // We use a small timeout to ensure Supabase has persisted the session
      setTimeout(() => {
        navigate("/dashboard");
      }, 100);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 px-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">Log In</h1>

      {message && (
        <div className="mb-4 p-3 bg-blue-50 text-blue-700 rounded border border-blue-200">
          {message}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700 transition-colors ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
