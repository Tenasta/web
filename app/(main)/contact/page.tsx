"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { siteConstants, contactContent } from "@/lib/content";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI mockup only - no backend integration
    console.log("Form submitted:", formData);
    alert("This is a UI mockup. Form submission is not implemented.");
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
                        <a
                          href={`mailto:${siteConstants.contact.email}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {siteConstants.contact.email}
                        </a>
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

              <Button size="lg" type="submit" className="w-full">
                {contactContent.form.submitButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
