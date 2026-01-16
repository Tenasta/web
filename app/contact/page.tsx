"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { siteConstants } from "@/lib/content";

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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Info */}
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
              Contact
            </p>
            <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
              Let&apos;s talk about your challenges
            </h1>
            <p className="mb-12 text-xl text-muted-foreground">
              Whether you have a specific project in mind or just want to
              explore how I might help, I&apos;m happy to chat.
            </p>

            {/* Options */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Book a 30-minute call</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Free intro call to discuss your situation and see if
                    there&apos;s a fit.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#">Schedule on Calendly</a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Email directly</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    For quick questions or if you prefer async communication.
                  </p>
                  <a
                    href={`mailto:${siteConstants.contact.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {siteConstants.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Response time</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours on business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-xl border border-border bg-card p-8">
            <h2 className="mb-6 text-xl font-semibold">Send a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium"
                >
                  Company
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
                  What are you interested in?
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select an option</option>
                  <option value="audit">Readiness Audit</option>
                  <option value="sprint">Embedded Sprint</option>
                  <option value="launch">Launch Support</option>
                  <option value="custom">Something else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Tell me about your situation
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="What's blocking you? What are you trying to achieve? The more context, the better I can help."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button size="lg" type="submit" className="w-full">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
