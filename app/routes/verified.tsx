// app/routes/verified.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "~/utils/supabaseClient"; // Adjust this path to your supabase client file

export default function VerifiedPage() {
  const [message, setMessage] = useState("Finalizing your verification...");
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for the moment Supabase processes the URL token
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        setMessage("Email verified successfully! Redirecting...");
        setTimeout(() => navigate("/dashboard"), 2000);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{message}</h1>
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  );
}
