"use client";

import { useState } from "react";
import { Mail, CheckCircle, XCircle } from "lucide-react";

export default function HeroSection() {
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
      id="newsletter"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(20, 185, 185, 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container-max-w text-center relative z-10">
        {/* Icon with glow effect */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 glass-strong glow-teal">
          <Mail className="w-10 h-10 text-teal-400" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="text-white">DONT MISS OUR</span>
          <br />
          <span className="text-teal-400 glow-teal">DAILY ALPHA</span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Subscribe to our newsletter and never miss out on the latest crypto
          insights, market analysis, and exclusive trading tips delivered
          straight to your inbox.
        </p>

        {/* Newsletter form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto glass-strong p-4 shadow-2xl glow-teal"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              className="flex-1 px-6 py-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-800/80 backdrop-blur-sm border border-gray-700 focus:border-teal-400 transition-all duration-300"
              required
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary px-8 py-4 text-lg font-semibold whitespace-nowrap"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>

        {/* Status message */}
        {message && (
          <div
            className={`mt-6 text-base font-semibold flex items-center justify-center gap-2 ${
              status === "success" ? "text-teal-300" : "text-red-400"
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

        <p className="mt-8 text-sm text-gray-400 max-w-2xl mx-auto">
          Free forever. No spam. Unsubscribe anytime.
          <br />
          Join thousands of crypto enthusiasts who trust our daily insights.
        </p>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
            <span>10,000+ Subscribers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
            <span>Daily Insights</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
            <span>Expert Analysis</span>
          </div>
        </div>
      </div>
    </section>
  );
}
