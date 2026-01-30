export const contactContent = {
  meta: {
    title: "Contact",
    description:
      "Get in touch to discuss your technical challenges. Book a call or send a message.",
  },
  hero: {
    badge: "Contact",
    title: "Let's talk about what's getting in the way",
    description:
      "Whether you're stuck on something, shipping has stalled, or launch is coming and you need honest feedback - a short conversation can clarify what's actually going on and whether I can help.",
  },
  contactOptions: [
    {
      icon: "Calendar",
      title: "Book a 30-minute call",
      description:
        "A free intro call to understand your situation, surface blockers, and decide on sensible next steps.",
      buttonText: "Schedule on Calendly",
      buttonHref: "https://calendly.com/nickmartink/30-minute-call",
    },
    {
      icon: "Mail",
      title: "Email directly",
      description: "For quick questions or if you prefer async communication.",
    },
    {
      icon: "Clock",
      title: "Response time",
      description:
        "I typically respond within 24 hours on business days. If it's a good fit, I'll suggest next steps.",
    },
  ],
  form: {
    title: "Send a message",
    fields: {
      name: {
        label: "Name",
        placeholder: "",
        required: true,
      },
      email: {
        label: "Email",
        placeholder: "",
        required: true,
      },
      company: {
        label: "Company",
        placeholder: "",
        required: false,
      },
      service: {
        label: "What are you interested in?",
        placeholder: "Select an option",
        required: false,
        options: [
          { value: "", label: "Select an option" },
          { value: "audit", label: "Getting unstuck / delivery issues" },
          { value: "risk", label: "Technical risk or complexity" },
          { value: "launch", label: "Launch Support" },
          { value: "AI", label: "AI / platform decisions" },
          { value: "custom", label: "Something else" },
        ],
      },
      message: {
        label: "Tell me about your situation",
        placeholder:
          "What's currently slowing you down or creating uncertainty? What are you trying to achieve in the next 1-3 months?",
        required: true,
        rows: 5,
      },
    },
    submitButton: "Send Message",
  },
};
