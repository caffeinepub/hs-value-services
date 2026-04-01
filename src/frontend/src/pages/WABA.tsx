import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Automated Alerts & OTPs",
    desc: "Send automated transactional messages, OTPs, and notifications through WhatsApp.",
  },
  {
    title: "2-Way Conversations",
    desc: "Enable real-time two-way customer conversations with chatbot and live agent support.",
  },
  {
    title: "CRM Integration",
    desc: "Sync all WhatsApp interactions with your CRM for a unified customer view.",
  },
  {
    title: "Broadcast Messages",
    desc: "Send promotional messages and updates to opted-in customer lists at scale.",
  },
  {
    title: "Analytics Dashboard",
    desc: "Track message delivery, read receipts, and customer engagement in real-time.",
  },
  {
    title: "Template Messages",
    desc: "Pre-approved message templates for business notifications and transactional messages.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "\u20b92,999",
    period: "/month",
    features: [
      "1,000 messages/month",
      "2-way messaging",
      "Basic analytics",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "\u20b97,999",
    period: "/month",
    features: [
      "10,000 messages/month",
      "Chatbot integration",
      "CRM integration",
      "Priority support",
      "Template messages",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited messages",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "24/7 support",
    ],
    featured: false,
  },
];

export default function WABA() {
  return (
    <div>
      <section className="py-24" style={{ background: "#075E54" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-white">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Official WhatsApp Business API
              </h1>
              <p className="text-xl text-white/90 mb-4">Powered by HisarSMS</p>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Connect with your customers on the world's most popular
                messaging platform. Use the official WhatsApp Business API for
                automated notifications, customer support, and marketing
                campaigns.
              </p>
              <Link to="/contact">
                <Button
                  className="bg-white text-[#075E54] font-bold hover:bg-white/90"
                  data-ocid="waba.cta.button"
                >
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/assets/site-images/whatsapp.png"
                alt="WhatsApp Business API"
                className="max-h-64 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6 text-center">
            What is WhatsApp Business API?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg text-center">
            The WhatsApp Business API allows medium and large businesses to
            communicate with their customers at scale. Unlike the regular
            WhatsApp Business app, the API enables programmatic messaging,
            automation, chatbots, and integration with existing business
            systems.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-10 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-6 shadow-card text-center"
                data-ocid={`waba.feature.item.${i + 1}`}
              >
                <CheckCircle className="w-10 h-10 text-[#075E54] mx-auto mb-3" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-10 text-center">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border-2 p-8 flex flex-col ${plan.featured ? "border-primary shadow-xl scale-105" : "border-border shadow-card"}`}
              >
                {plan.featured && (
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    className={`w-full ${plan.featured ? "bg-primary text-white" : "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white"}`}
                    data-ocid="waba.plan.button"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
