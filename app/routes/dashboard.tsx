// app/routes/dashboard.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "~/utils/supabaseClient"; // Your existing client
import toast from "react-hot-toast"; // For notifications

export default function Dashboard() {
  const [userData, setUserData] = useState<{
    domain?: string;
    emails?: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [emailToReset, setEmailToReset] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login?message=Please log in to access dashboard");
        return;
      }

      // Fetch user profile (domain, etc.)
      const { data, error } = await supabase
        .from("users")
        .select("domain") // Add 'emails' array if storing list
        .eq("id", session.user.id)
        .single();

      if (error) {
        toast.error(error.message);
      } else {
        setUserData(data);
      }
      setLoading(false);
    }
    checkSession();
  }, [navigate]);

  const handleReset = async () => {
    if (!newPassword || !emailToReset) return toast.error("Fill all fields");

    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return;

    const res = await fetch("/.netlify/functions/reset-client-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({
        email: emailToReset,
        newPassword,
        domain: userData?.domain,
      }),
    });

    if (!res.ok) {
      const { error } = await res.json();
      toast.error(error || "Reset failed");
    } else {
      toast.success("Password reset!");
      setNewPassword("");
    }
  };

  if (loading)
    return <div className="flex justify-center py-20">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Client Dashboard</h1>

      {/* Quick Links */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <a
          href={`https://${userData?.domain || "yourdomain"}/webmail`}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-blue-100 rounded-lg hover:bg-blue-200 text-center font-medium"
        >
          Access My Webmail
        </a>
        {/* More links: billing, support, etc. */}
      </div>

      {/* Email Reset Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Reset Email Password</h2>
        <p className="text-gray-600 mb-6">
          Enter the email and new password below.
        </p>

        <div className="space-y-4 max-w-md">
          <input
            type="email"
            value={emailToReset}
            onChange={(e) => setEmailToReset(e.target.value)}
            placeholder="info@yourdomain.co.za"
            className="w-full p-3 border rounded"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password (min 8 chars)"
            className="w-full p-3 border rounded"
          />
          <button
            onClick={handleReset}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
