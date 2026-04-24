// app/routes/dashboard.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "~/utils/supabaseClient";
import toast from "react-hot-toast";

interface Service {
  id: string;
  service_name: string;
  service_type: "hosting" | "compliance";
  status: "pending" | "active";
  domain?: string;
  document_url?: string;
}

export default function Dashboard() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [emailToReset, setEmailToReset] = useState("");
  const [resetDomain, setResetDomain] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadDashboardData() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/login?message=Please log in to access dashboard");
        return;
      }

      // Fetch all services linked to this user
      const { data: servicesData, error } = await supabase
        .from("user_services")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("Could not load services");
      } else {
        setServices(servicesData || []);
      }

      setLoading(false);
    }

    loadDashboardData();
  }, [navigate]);

  const handleReset = async () => {
    if (!newPassword || !emailToReset || !resetDomain) {
      return toast.error("Please fill in all fields and select a domain");
    }

    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return;

    const res = await fetch("/.netlify/functions/reset-email-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({
        email: emailToReset,
        newPassword,
        domain: resetDomain,
      }),
    });

    if (!res.ok) {
      const { error } = await res.json();
      toast.error(error || "Reset failed");
    } else {
      toast.success("Password reset successfully!");
      setNewPassword("");
      setEmailToReset("");
      setResetDomain(null);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center py-20">Loading dashboard...</div>
    );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Client Dashboard</h1>
        <p className="text-gray-600">
          Manage your business services and hosting environment.
        </p>
      </header>

      <section className="space-y-6 mb-12">
        <h2 className="text-xl font-semibold border-b pb-2">Your Services</h2>

        {services.length === 0 ? (
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <p className="text-gray-500">
              No active or pending services found.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-4 flex justify-between items-center bg-gray-50/50">
                  <div>
                    <h3 className="font-bold text-lg">
                      {service.service_name}
                    </h3>
                    {service.domain && (
                      <p className="text-sm text-blue-600 font-mono">
                        {service.domain}
                      </p>
                    )}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      service.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {service.status === "active" ? "● Active" : "○ Pending"}
                  </span>
                </div>

                <div className="p-4">
                  {service.service_type === "hosting" ? (
                    service.status === "active" ? (
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={`https://${service.domain}/webmail`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-100"
                        >
                          Access Webmail
                        </a>
                        <button
                          onClick={() => {
                            setResetDomain(service.domain || null);
                            window.scrollTo({
                              top: document.body.scrollHeight,
                              behavior: "smooth",
                            });
                          }}
                          className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-900"
                        >
                          Manage Emails
                        </button>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 italic">
                        Account provisioning is in progress. We will email you
                        once your server is ready.
                      </p>
                    )
                  ) : (
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">
                        {service.status === "active"
                          ? "Compliance documents are ready for download."
                          : "Processing with CIPC/SARS. Estimated 3-5 business days."}
                      </p>
                      {service.document_url && (
                        <a
                          href={service.document_url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          Download Certificate
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Email Reset Section - Only shows if a hosting domain is selected */}
      {resetDomain && (
        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg mt-12 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-semibold">
              Email Password Reset: {resetDomain}
            </h2>
            <button
              onClick={() => setResetDomain(null)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="email"
              value={emailToReset}
              onChange={(e) => setEmailToReset(e.target.value)}
              placeholder="e.g. info@yourdomain.co.za"
              className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password (min 10 chars)"
              className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleReset}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition-colors"
            >
              Update Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
