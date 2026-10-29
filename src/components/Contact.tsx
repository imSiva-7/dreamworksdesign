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
      { threshold: 0.15 },
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      const firstError = Object.keys(validation)[0];
      document.getElementById(firstError)?.focus();
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setStatus("sending");

    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });

  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-canvas py-10 sm:py-20 overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-hover/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div
          className={`reveal ${visible ? "visible" : ""} text-center max-w-2xl mx-auto`}
        >
          <span className="inline-block text-xl font-semibold tracking-[0.2em] uppercase text-accent-ink mb-4 font-[family-name:var(--font-poppins)]">
            Get in touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight font-[family-name:var(--font-anton)] uppercase">
            Let&apos;s build something{" "}
            <span className="text-accent-ink">great</span>
          </h2>
          <p className="mt-5 text-ink/70 text-lg leading-relaxed font-[family-name:var(--font-poppins)]">
            Try the form interaction below. This concept demo validates your details without sending or storing them.
          </p>
        </div>

        <div
          className={`reveal ${visible ? "visible" : ""} mt-14 rounded-3xl border border-ink/10 bg-surface backdrop-blur-sm p-6 sm:p-10 shadow-xl`}
          style={{ transitionDelay: visible ? "150ms" : "0ms" }}
        >
          {status === "sent" ? (
            <div role="status" className="text-center py-12">
              <div className="animate-pop mx-auto w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--text-dark)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-ink font-[family-name:var(--font-poppins)]">
                Demo complete!
              </h3>
              <p className="mt-2 text-ink/70 font-[family-name:var(--font-poppins)]">
                Your details passed validation. This demo has not sent a message.
              </p>
              <Button type="button" variant="outline" className="mt-6" onClick={() => setStatus("idle")}>Try again</Button>
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
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  error={errors.name}
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
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
                required
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
                  {status === "sending" ? "Checking…" : "Try demo form"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
