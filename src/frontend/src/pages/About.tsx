import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";

const capabilities = [
  "Bulk SMS Gateway with real-time delivery reports",
  "Cloud telephony: IVR, virtual receptionist, click-to-call",
  "Missed call services for marketing and lead generation",
  "WhatsApp Business API integration",
  "Email marketing campaigns with analytics",
  "Lead Management System (LMS)",
  "API integration with CRM and core banking",
  "Dedicated 24/7 customer support",
];

export default function About() {
  return (
    <div>
      <section
        className="relative min-h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/assets/site-images/about-us.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 py-20 text-white text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Empowering businesses with unified messaging since 2010
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0CB4CE] font-semibold text-sm uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                HS Value Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                HS Value Services (hisarsms.com) is a premier unified messaging
                platform headquartered in Hisar, Haryana, India. We provide SMS,
                Voice, Email, and WhatsApp solutions to enterprises across
                India.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over a decade of experience, we have served 500+ enterprise
                clients and delivered millions of messages reliably every day.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {capabilities.map((c) => (
                  <div key={c} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{c}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button
                  className="bg-primary text-white hover:bg-primary/90"
                  data-ocid="about.cta.button"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Story
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2010, HS Value Services started as a small SMS
                reseller in Hisar, Haryana. Over the years, we expanded to cloud
                telephony, email marketing, WhatsApp Business API, and lead
                management solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today, we are one of the leading telecom service providers in
                Northern India, trusted by banks, hospitals, educational
                institutions, e-commerce companies, and government agencies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to make enterprise-grade communication technology
                accessible and affordable for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 gradient-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <Link to="/contact">
            <Button
              className="bg-white text-primary font-bold hover:bg-white/90 px-8"
              data-ocid="about.bottom_cta.button"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
