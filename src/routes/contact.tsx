import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Catalina Foodie's House" },
      {
        name: "description",
        content:
          "Visit us at 12 Carpenter Street, Kuching — open Tue–Sun, 7am to 2pm. Questions about a big order or catering? Send us a message.",
      },
      { property: "og:title", content: "Contact Us — Catalina Foodie's House" },
      {
        property: "og:description",
        content:
          "Visit us at 12 Carpenter Street, Kuching — open Tue–Sun, 7am to 2pm. Questions about a big order or catering? Send us a message.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type Errors = { name?: string; email?: string; message?: string };

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = "Please tell us your name.";
    if (!email.trim()) next.email = "We need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn't look quite right.";
    if (!message.trim()) next.message = "Don't forget your message!";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setSent(false);
    }
  };

  return (
    <main className="flex-1">
      <section className="bg-secondary/35">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:py-16">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Questions about a big order or catering? Send us a message.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-5 lg:py-20">
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Visit or call
          </h2>
          <div className="mt-6 space-y-5">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-butter text-lg">
                🏠
              </span>
              <div>
                <p className="font-semibold text-foreground">Find us</p>
                <p className="text-sm text-muted-foreground">
                  12 Carpenter Street
                  <br />
                  Kuching, Sarawak
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-butter text-lg">
                🕖
              </span>
              <div>
                <p className="font-semibold text-foreground">Opening hours</p>
                <p className="text-sm text-muted-foreground">
                  Open Tue–Sun, 7am – 2pm
                  <br />
                  Closed on Mondays
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-butter text-lg">
                📞
              </span>
              <div>
                <p className="font-semibold text-foreground">Call us</p>
                <p className="text-sm text-muted-foreground">
                  +60 82-XXX XXX
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-3xl bg-secondary/40 p-6">
            <p className="font-display text-lg font-semibold text-foreground">
              Big orders & catering
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Planning a party or an office lunch? Give us at least a day's
              notice and we'll have the bamboo steamer ready.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl bg-card p-6 shadow-warm ring-1 ring-border sm:p-8 lg:col-span-3"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs font-semibold text-destructive">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs font-semibold text-destructive">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you have in mind…"
                className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs font-semibold text-destructive">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-warm transition-colors hover:bg-crust sm:w-auto sm:px-10"
            >
              Send message
            </button>
            {sent && (
              <p className="rounded-2xl bg-butter/60 px-4 py-3 text-sm font-semibold text-butter-foreground">
                Terima kasih! Your message is in — we'll get back to you soon.
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}
