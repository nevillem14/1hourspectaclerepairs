// app/routes/verify-email.tsx
import { useSearchParams } from "react-router";
import { supabase } from "~/utils/supabaseClient";
import { useState } from "react";
import { toast } from "react-hot-toast"; // You have this in your package.json!

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [loading, setLoading] = useState(false);

  const handleResend = async () => {
    if (!email) return;
    setLoading(true);

    const { error } = await supabase.auth.resend({
      type: "signup",
      email: email,
      options: {
        emailRedirectTo: `${window.location.origin}/verified`,
      },
    });

    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Verification email resent!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="text-blue-600 mb-4 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Check your email
        </h1>
        <p className="text-gray-600 mb-6">
          We've sent a verification link to{" "}
          <span className="font-semibold">{email}</span>.
        </p>

        <button
          onClick={handleResend}
          disabled={loading || !email}
          className="text-blue-600 hover:text-blue-800 font-medium disabled:opacity-50"
        >
          {loading ? "Sending..." : "Didn't get the email? Click to resend"}
        </button>

        <div className="mt-8 border-t pt-4">
          <a href="/login" className="text-sm text-gray-500 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}
