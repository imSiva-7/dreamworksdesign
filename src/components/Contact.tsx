"use client";

import { useEffect, useRef, useState } from "react";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function validate(values: typeof form): Errors {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) {
      e.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      e.email = "That email doesn't look right.";
    }
    if (!values.message.trim()) {
      e.message = "Don't be shy — say hello.";
    } else if (values.message.trim().length < 10) {
      e.message = "A little more detail helps (10+ characters).";
    }
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear that field's error as the user types
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setStatus("sending");
    // Simulated API call — replace with a real endpoint later
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });

    // Reset back to idle after a few seconds
    setTimeout(() => setStatus("idle"), 4000);
  }

  const inputBase =
    "w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-400/60 focus:bg-white/[0.05]";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-slate-950 py-24 sm:py-32 overflow-hidden"
    >
      {/* Accent blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`reveal ${visible ? "visible" : ""} text-center max-w-2xl mx-auto`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-4">
            Get in touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              great
            </span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg leading-relaxed">
            Tell us about your project and we&apos;ll get back within 24 hours.
          </p>
        </div>

        {/* Card */}
        <div
          className={`reveal ${visible ? "visible" : ""} mt-14 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 sm:p-10`}
          style={{ transitionDelay: visible ? "150ms" : "0ms" }}
        >
          {status === "sent" ? (
            <div className="text-center py-12">
              <div className="animate-pop mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                Message sent!
              </h3>
              <p className="mt-2 text-slate-400">
                Thanks for reaching out — we&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className={`grid gap-5 ${shake ? "animate-shake" : ""}`}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={`${inputBase} ${
                      errors.name ? "border-red-400/60" : ""

                    }`
               }
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@studio.com"
                    className={`${inputBase} ${
                      errors.email ? "border-red-400/60" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project…"
                  className={`${inputBase} resize-none ${
                    errors.message ? "border-red-400/60" : ""
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="text-xs text-slate-500">
                  We reply to every message. No spam, ever.
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-slate-900 font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-slate-900/30 border-t-slate-900 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}