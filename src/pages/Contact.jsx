import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (form.message.trim().length < 10)
      e.message = "Tell me a bit more (10+ chars).";
    return e;
  }

  function onSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    // Mailto fallback (no backend). Change the email
    const to = "cyberheavenllc@gmail.com";
    const subject = `Project inquiry — ${form.name}`;
    const body = `${form.message}\n\n- ${form.name}\n${form.email}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <motion.section
      className="container-xl py-12 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      <header className="mb-10 md:mb-14">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Contact
        </h1>
        <p className="text-white/60 mt-2 max-w-2xl">
          Studio, black label-precision work, minimal surface. Tell me about
          your project
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-5">
        {/* Form */}
        <div className="md:col-span-3">
          <form onSubmit={onSubmit} noValidate className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-white/80">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-noir-900 text-ash px-4 py-3
                                    outline-none ring-0 focus:ring-2 focus:ring-white/20 placeholder:text-white/40"
                placeholder="Jane Doe"
                aria-invalid={Boolean(errors.name) || undefined}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-white/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-noir-900 text-ash px-4 py-3
                                    outline-none ring-0 focus:ring-2 focus:ring-white/20 placeholder:text-white/40"
                placeholder="jane@company.com"
                aria-invalid={Boolean(errors.email) || undefined}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-white/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                rows={6}
                className="mt-2 w-full rounded-xl border border-white/10 bg-noir-900 text-ash px-4 py-3
                                    outline-none ring-0 focus:ring-2 focus:ring-white/20 placeholder:text-white/40"
                placeholder="A short brief, timeline, and goals.."
                aria-invalid={Boolean(errors.message) || undefined}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-noir-800
                                    px-5 py-3 text-sm font-medium tracking-wide transition-colors hover:bg-noir-700
                                    focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Send
              </button>
              {sent && (
                <span className="text-sm text-emerald-400">
                  Opening your email client...
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Contact details / sidebar */}
        <aside className="md:col-span-2 rounded-2xl border border-white/10 bg-noir-900 p-6">
          <h2 className="text-sm font-medium tracking-wide">Direct</h2>
          <a
            href="mailto:cyberheavenllc@gmail.com"
            className="mt-2 inline-block underline decoration-white/20 hover:decoration-white"
          >
            cyberheavenllc@gmail.com
          </a>

          <div className="mt-6 text-sm text-white/60 space-y-1">
            <p>WPB, FL</p>
            <p>Mon-Sun 7am-7pm</p>
          </div>

          <div className="mt-6 text-sm text-white/60 space-y-1">
            <p className="text-white/80">Elsewhere</p>
            <ul className="space-y-1">
              <li>
                <a
                  className="underline decoration-white/20 hover:decoration-white"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="underline decoration-white/20 hover:decoration-white"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  className="underline decoration-white/20 hover:decoration-white"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}
