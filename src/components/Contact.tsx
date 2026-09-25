"use client";

import { useEffect, useRef, useState } from "react";
import { Button, Input, Textarea } from "./ui";

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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#F2F2F2] py-24 sm:py-32 overflow-hidden"
    >
      {/* Accent blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#A6D934]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#96D901]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`reveal ${visible ? "visible" : ""} text-center max-w-2xl mx-auto`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#A6D934] mb-4 font-[family-name:var(--font-poppins)]">
            Get in touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight font-[family-name:var(--font-anton)] uppercase">
            Let&apos;s build something{" "}
            <span className="text-[#A6D934]">
              great
            </span>
          </h2>
          <p className="mt-5 text-[#0A0A0A]/70 text-lg leading-relaxed font-[family-name:var(--font-poppins)]">
            Tell us about your project and we&apos;ll get back within 24 hours.
          </p>
        </div>

        {/* Card */}
        <div
          className={`reveal ${visible ? "visible" : ""} mt-14 rounded-3xl border border-[#0A0A0A]/10 bg-white backdrop-blur-sm p-6 sm:p-10 shadow-xl`}
          style={{ transitionDelay: visible ? "150ms" : "0ms" }}
        >
          {status === "sent" ? (
            <div className="text-center py-12">
              <div className="animate-pop mx-auto w-16 h-16 rounded-full bg-[#A6D934] flex items-center justify-center shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0A0A0A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#0A0A0A] font-[family-name:var(--font-poppins)]">
                Message sent!
              </h3>
              <p className="mt-2 text-[#0A0A0A]/70 font-[family-name:var(--font-poppins)]">
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
                <Input
                  label="Name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  error={errors.name}
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@studio.com"
                  error={errors.email}
                />
              </div>

              <Textarea
                label="Message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project…"
                error={errors.message}
              />

              {/* Submit */}
              <div className="flex items-center justify-between gap-4 pt-2">
               
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === "sending"}
                  loading={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
