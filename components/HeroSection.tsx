"use client";

import { useState } from "react";
import { CheckCircle, XCircle, Rocket, Shield, TrendingUp, Sparkles } from "lucide-react";

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
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-blue-50 to-orange-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-300/30 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating particles effect - using fixed positions to avoid hydration errors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-float" style={{ left: '10%', top: '20%', animationDelay: '0s', animationDuration: '8s' }} />
        <div className="absolute w-1 h-1 bg-sky-400/40 rounded-full animate-float" style={{ left: '25%', top: '60%', animationDelay: '1s', animationDuration: '10s' }} />
        <div className="absolute w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-float" style={{ left: '40%', top: '15%', animationDelay: '2s', animationDuration: '12s' }} />
        <div className="absolute w-1 h-1 bg-sky-400/40 rounded-full animate-float" style={{ left: '55%', top: '75%', animationDelay: '0.5s', animationDuration: '9s' }} />
        <div className="absolute w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-float" style={{ left: '70%', top: '30%', animationDelay: '1.5s', animationDuration: '11s' }} />
        <div className="absolute w-1 h-1 bg-sky-400/40 rounded-full animate-float" style={{ left: '85%', top: '50%', animationDelay: '2.5s', animationDuration: '13s' }} />
        <div className="absolute w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-float" style={{ left: '15%', top: '80%', animationDelay: '3s', animationDuration: '7s' }} />
        <div className="absolute w-1 h-1 bg-sky-400/40 rounded-full animate-float" style={{ left: '30%', top: '40%', animationDelay: '3.5s', animationDuration: '14s' }} />
        <div className="absolute w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-float" style={{ left: '45%', top: '90%', animationDelay: '4s', animationDuration: '6s' }} />
        <div className="absolute w-1 h-1 bg-sky-400/40 rounded-full animate-float" style={{ left: '60%', top: '10%', animationDelay: '4.5s', animationDuration: '15s' }} />
        <div className="absolute w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-float" style={{ left: '75%', top: '65%', animationDelay: '0.2s', animationDuration: '8s' }} />
        <div className="absolute w-1 h-1 bg-sky-400/40 rounded-full animate-float" style={{ left: '90%', top: '25%', animationDelay: '1.2s', animationDuration: '10s' }} />
        <div className="absolute w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-float" style={{ left: '5%', top: '55%', animationDelay: '2.2s', animationDuration: '12s' }} />
        <div className="absolute w-1 h-1 bg-sky-400/40 rounded-full animate-float" style={{ left: '20%', top: '35%', animationDelay: '2.7s', animationDuration: '9s' }} />
        <div className="absolute w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-float" style={{ left: '35%', top: '70%', animationDelay: '3.2s', animationDuration: '11s' }} />
        <div className="absolute w-1 h-1 bg-sky-400/40 rounded-full animate-float" style={{ left: '50%', top: '45%', animationDelay: '3.7s', animationDuration: '13s' }} />
        <div className="absolute w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-float" style={{ left: '65%', top: '85%', animationDelay: '4.2s', animationDuration: '7s' }} />
        <div className="absolute w-1 h-1 bg-sky-400/40 rounded-full animate-float" style={{ left: '80%', top: '15%', animationDelay: '4.7s', animationDuration: '14s' }} />
        <div className="absolute w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-float" style={{ left: '95%', top: '70%', animationDelay: '0.8s', animationDuration: '6s' }} />
        <div className="absolute w-1 h-1 bg-sky-400/40 rounded-full animate-float" style={{ left: '12%', top: '48%', animationDelay: '1.8s', animationDuration: '15s' }} />
      </div>

      <div className="container-max-w relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-sky-500/10 backdrop-blur-md border border-orange-300/30">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-700 font-medium">Presales Platform 2025</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              <span className="text-gray-900">
                Find The Next
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-sky-600 to-orange-600 animate-gradient">
                100x Crypto Gem
              </span>
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              Discover verified crypto presales before they explode. Join thousands of smart investors getting early access to the most promising projects.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-orange-200/50 shadow-lg shadow-orange-100/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-xs text-gray-600">Verified Projects</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 backdrop-blur-sm border border-sky-200/50 shadow-lg shadow-sky-100/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-xs text-gray-600">Security First</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Newsletter form */}
          <div className="lg:ml-auto">
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-sky-400 to-orange-500 rounded-3xl blur opacity-25"></div>

              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-orange-200/50 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Get Early Access</h3>
                    <p className="text-sm text-gray-600">Join our exclusive community</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-5 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-sky-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Subscribing..." : "Get Free Alerts 🚀"}
                  </button>
                </form>

                {/* Status message */}
                {message && (
                  <div
                    className={`mt-4 p-3 rounded-lg flex items-center gap-2 ${
                      status === "success"
                        ? "bg-green-50 border border-green-200 text-green-700"
                        : "bg-red-50 border border-red-200 text-red-700"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{message}</span>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No spam</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Unsubscribe anytime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
