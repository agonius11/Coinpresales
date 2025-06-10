"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
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
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full mb-4">
            <Mail className="w-8 h-8" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          DAILY CRYPTO INSIGHTS
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Get the alpha you won't find in the news, delivered straight to your
          inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Subscribing..." : "Become an Insider"}
            </button>
          </div>
        </form>

        {message && (
          <div
            className={`mt-4 text-sm ${
              status === "success" ? "text-green-300" : "text-red-300"
            }`}
          >
            {message}
          </div>
        )}

        <p className="mt-4 text-sm text-blue-200">
          Free Daily Newsletter — Takes Just 3 Minutes to Read
        </p>
      </div>
    </section>
  );
}
