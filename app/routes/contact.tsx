import React, { useState } from "react";

// Main Contact Page Component
const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handles changes to form input fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    // Simulate an API call
    try {
      // In a real application, you would make a fetch or axios call here
      console.log("Form data to be submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
      setStatus("Message sent successfully! Thank you.");
      setFormData({ fullName: "", email: "", message: "" }); // Clear the form
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // SVG for a send icon
  const SendIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-2"
    >
      <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"></path>
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name field */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3
                         focus:border-blue-500 focus:ring-blue-500 outline-none
                         transition duration-150 ease-in-out"
            />
          </div>

          {/* Email field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3
                         focus:border-blue-500 focus:ring-blue-500 outline-none
                         transition duration-150 ease-in-out"
            />
          </div>

          {/* Message field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3
                         focus:border-blue-500 focus:ring-blue-500 outline-none
                         transition duration-150 ease-in-out"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center py-3 px-4
                          border border-transparent rounded-lg shadow-sm
                          text-base font-medium text-white
                          ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                          transition duration-150 ease-in-out`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <SendIcon />}
            </button>
          </div>
        </form>

        {/* Status message */}
        {status && (
          <p
            className={`mt-4 text-center text-sm ${status.includes("Success") ? "text-green-600" : "text-red-600"}`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
