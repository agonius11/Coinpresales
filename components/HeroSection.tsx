"use client";

import { useState } from "react";
import { Mail, CheckCircle, XCircle } from "lucide-react"; // Import more icons

export default function HeroSection() {
  // Renamed component
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Thank you for subscribing! Check your email for confirmation."
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error: unknown) {
      setStatus("error");
      if (error instanceof Error) {
        setMessage(error.message || "Network error. Please try again.");
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
      console.error("Fetch error:", error);
    }

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <section
      id="newsletter" // Add ID for direct linking
      className="bg-gradient-to-br from-teal-700 via-teal-500 to-green-300 text-white py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background shapes/patterns for uniqueness */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          fill="none"
          viewBox="0 0 1440 600"
        >
          <circle
            cx="100"
            cy="200"
            r="80"
            fill="currentColor"
            className="text-teal-400 blur-3xl opacity-30"
          ></circle>
          <circle
            cx="1200"
            cy="400"
            r="120"
            fill="currentColor"
            className="text-green-400 blur-3xl opacity-30"
          ></circle>
          <polygon
            points="720,50 900,250 540,250"
            fill="currentColor"
            className="text-teal-300 blur-3xl opacity-20"
          ></polygon>
        </svg>
      </div>

      <div className="container-max-w text-center relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-700/50 backdrop-blur-sm rounded-full mb-6 border border-teal-600">
          <Mail className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
          DAILY <span className="text-orange-400">ALPHA</span> DELIVERED
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white/80 max-w-3xl mx-auto leading-relaxed">
          Unlock exclusive crypto insights, market analysis, and trading tips
          you won&apos;t find anywhere else. Stay ahead of the curve.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto glass p-3 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address..."
              className="flex-1 px-5 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/80 backdrop-blur-sm border border-white/30"
              required
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary" // Use custom class
            >
              {status === "loading" ? (
                "Subscribing..."
              ) : (
                <>
                  <Mail className="w-5 h-5 mr-2" /> Become an Insider
                </>
              )}
            </button>
          </div>
        </form>

        {message && (
          <div
            className={`mt-6 text-base font-semibold flex items-center justify-center gap-2 ${
              status === "success" ? "text-green-300" : "text-red-300"
            }`}
          >
            {status === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <XCircle className="w-5 h-5" />
            )}
            {message}
          </div>
        )}

        <p className="mt-6 text-sm text-white/70">
          Free. No spam. Unsubscribe anytime. Daily reads take just 3 minutes.
        </p>
      </div>
    </section>
  );
}
