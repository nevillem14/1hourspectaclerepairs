import React, { useState, useRef, useEffect } from "react";

const DomainChecker = () => {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchCount, setSearchCount] = useState(0);

  // Load count from localStorage
  useEffect(() => {
    const count = parseInt(localStorage.getItem("searchCount") ?? "0") || 0;
    setSearchCount(count);
  }, []);

  const updateSearchCount = () => {
    const newCount = searchCount + 1;
    setSearchCount(newCount);
    localStorage.setItem("searchCount", newCount.toString());
  };

  const checkDomain = async () => {
    setLoading(true);
    setResult(""); // clear previous result

    //removed recaptcha code
    //let token = "";
    // if (searchCount >= 5) {
    //   try {
    //     if (recaptchaRef.current) {
    //       const recaptchaToken = await recaptchaRef.current.executeAsync();
    //       recaptchaRef.current.reset();
    //       if (!recaptchaToken) {
    //         setResult("❌ reCAPTCHA failed to provide a token");
    //         setLoading(false);
    //         return;
    //       }
    //       token = recaptchaToken;
    //     } else {
    //       setResult("❌ reCAPTCHA not loaded");
    //       setLoading(false);
    //       return;
    //     }
    //   } catch {
    //     setResult("❌ reCAPTCHA failed or cancelled");
    //     setLoading(false);
    //     return;
    //   }
    // }

    try {
      /*const res = await fetch(`http://localhost:5000/check?domain=${domain}`);*/
      const res = await fetch("https://whois-api-285z.onrender.com/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //removed recaptcha
        //body: JSON.stringify({ domain, token }),
        body: JSON.stringify({ domain }),
      });

      const data = await res.json();

      if (data.available === false) {
        setResult(`${data.domain} is already registered ❌`);
      } else {
        setResult(`${data.domain} is available ✅`);
      }

      //removed recaptcha code
      //updateSearchCount();
    } catch {
      setResult("❗ Error checking domain");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md text-center">
      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value.trim().toLowerCase())}
        placeholder="Enter .co.za domain"
        className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        onClick={checkDomain}
        disabled={loading || !domain}
        className={`w-full py-2 text-white rounded-md transition ${
          loading || !domain
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Checking..." : "Check"}
      </button>

      {/* //removed recaptcha code 
      searchCount >= 5 && (
        <ReCAPTCHA
          sitekey="6LenPmUrAAAAAPPcEPkOMtko2tIzZw1vX1FcI-Qj"
          size="invisible"
          ref={recaptchaRef}
        />
      )*/}

      {/* Spinner */}
      {loading && (
        <div className="flex justify-center mt-4">
          <div className="h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && result && <p className="mt-4 text-lg">{result}</p>}
    </div>
  );
};

export default DomainChecker;
// This component allows users to input a .co.za domain and check its availability..
