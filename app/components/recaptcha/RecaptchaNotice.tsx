// File: Recaptcha.tsx
export default function RecaptchaNotice() {
  return (
    <div className="text-white/30 text-sm mx-auto px-4 py-4">
      <div>
        <p className="text-xs text-gray-500 mt-4 text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </div>
  );
}
