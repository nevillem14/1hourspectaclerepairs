import React from "react";

export default function Advertisement() {
  return (
    <div className="min-h-screen bg-[#cfe6f3] flex flex-col items-center justify-center p-6 font-sans text-[#1a2b3c]">
      {/* Container */}
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/50">
        {/* Header / Logo Section */}
        <div className="p-8 flex flex-col items-center border-b border-gray-200">
          <img
            src="https://wsdxi.co.za/logo.png"
            alt="WSDXI Logo"
            className="h-16 mb-4 object-contain"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-center uppercase tracking-tight">
            Winter Shadow Designs (WSDXI)
          </h1>
          <p className="text-red-600 font-semibold mt-2">
            This Service is Currently Unavailable
          </p>
        </div>

        {/* Main Content: 2-Column Layout */}
        <div className="flex flex-col md:flex-row items-center p-8 gap-12">
          {/* Left Side: Phone Mockup Representation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-64 h-[450px] bg-[#1a2b3c] rounded-[3rem] border-[8px] border-[#2c3e50] shadow-xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2c3e50] rounded-b-2xl"></div>
              <div className="p-4 pt-12 text-white text-sm text-center">
                <p className="font-bold mb-4">Ready to Launch Your Website?</p>
                <div className="w-full h-32 bg-blue-500/20 rounded-lg mb-4"></div>
                <p className="text-xs opacity-70">
                  Professional Design. Seamless Experience.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Services List */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-[#1a2b3c]">
              Your All-in-One Business Launchpad
            </h2>

            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <span className="text-3xl text-blue-600">🌐</span>
                <div>
                  <p className="font-bold text-lg">Professional Website</p>
                  <p className="text-sm text-gray-600">
                    Custom designs tailored to your brand.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-3xl text-blue-600">📧</span>
                <div>
                  <p className="font-bold text-lg">Custom Business Email</p>
                  <p className="text-sm text-gray-600">
                    Look professional with your own domain.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-3xl text-blue-600">📄</span>
                <div>
                  <p className="font-bold text-lg">CIPC & Tax Compliance</p>
                  <p className="text-sm text-gray-600">
                    We handle the paperwork for you.
                  </p>
                </div>
              </li>
            </ul>

            {/* Pricing Box */}
            <div className="bg-[#1a2b3c] text-white p-6 rounded-xl text-center">
              <p className="text-sm uppercase tracking-widest opacity-80">
                Starting from
              </p>
              <p className="text-4xl font-black my-1">R200/mo</p>
              <p className="text-xs opacity-70">(Billed Annually)</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 text-center border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4">
            If you are the owner of this domain, please contact support to
            resolve your account status.
          </p>
          <a
            href="https://wsdxi.co.za"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
          >
            Visit WSDXI.CO.ZA
          </a>
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Winter Shadow Designs (WSDXI)
      </p>
    </div>
  );
}
