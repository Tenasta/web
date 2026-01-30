"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ObfuscatedEmail } from "@/components/shared/obfuscated-email";
import { siteConstants, contactContent } from "@/lib/content";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [submittedName, setSubmittedName] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [formLoadTime, setFormLoadTime] = useState<number>(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Capture when form loads for time-based bot detection
  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          honeypot,
          formLoadTime,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Success - reset form and show success message
      setSubmitStatus("success");
      setSubmittedName(formData.name);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
      setHoneypot("");
      setFormLoadTime(Date.now());
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const iconMap = {
    Calendar,
    Mail,
    Clock,
  };

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Info */}
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
              {contactContent.hero.badge}
            </p>
            <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
              {contactContent.hero.title}
            </h1>
            <p className="mb-12 text-xl text-muted-foreground">
              {contactContent.hero.description}
            </p>

            {/* Options */}
            <div className="space-y-6">
              {contactContent.contactOptions.map((option, index) => {
                const Icon =
                  iconMap[option.icon as keyof typeof iconMap] || Mail;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-lg border border-border bg-card p-6"
                  >
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">{option.title}</h3>
                      <p className="mb-3 text-sm text-muted-foreground">
                        {option.description}
                      </p>
                      {option.buttonText && option.buttonHref && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={option.buttonHref}>{option.buttonText}</a>
                        </Button>
                      )}
                      {option.icon === "Mail" && (
                        <ObfuscatedEmail className="text-sm text-primary hover:underline" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-xl border border-border bg-card p-8">
            <h2 className="mb-6 text-xl font-semibold">
              {contactContent.form.title}
            </h2>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                <p className="font-semibold">
                  Thanks{submittedName ? ` ${submittedName}` : ""}, your message was sent
                  successfully!
                </p>
                <p className="text-sm">
                  We will get back to you as soon as possible.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
                <p className="font-semibold">Failed to send message</p>
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    {contactContent.form.fields.name.label}
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required={contactContent.form.fields.name.required}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    {contactContent.form.fields.email.label}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required={contactContent.form.fields.email.required}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium"
                >
                  {contactContent.form.fields.company.label}
                </label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium"
                >
                  {contactContent.form.fields.service.label}
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {contactContent.form.fields.service.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  {contactContent.form.fields.message.label}
                </label>
                <Textarea
                  id="message"
                  rows={contactContent.form.fields.message.rows}
                  placeholder={contactContent.form.fields.message.placeholder}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required={contactContent.form.fields.message.required}
                />
              </div>

              {/* Honeypot field - hidden from users but visible to bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <Input
                  id="website"
                  name="website"
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <Button
                size="lg"
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : contactContent.form.submitButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
