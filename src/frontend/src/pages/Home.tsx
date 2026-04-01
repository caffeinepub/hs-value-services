import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building,
  MessageSquare,
  Phone,
  Users,
} from "lucide-react";

const voiceServices = [
  {
    title: "HelloConnect",
    subtitle: "Virtual Receptionist",
    icon: "/assets/site-images/icon2.png",
    href: "/virtual-receptionist",
    desc: "Single voice number for your business with automated call forwarding and IVR.",
  },
  {
    title: "Missed Hello",
    subtitle: "Missed Call Service",
    icon: "/assets/site-images/icon-1.png",
    href: "/missed-call",
    desc: "Capture leads and run campaigns with missed call marketing.",
  },
  {
    title: "Click-2-Call",
    subtitle: "Web Click to Call",
    icon: "/assets/site-images/icon2-1.png",
    href: "/click-2-call",
    desc: "Connect customers to your team instantly with a click on your website.",
  },
  {
    title: "IVR / Dialer",
    subtitle: "Cloud Telephony",
    icon: "/assets/site-images/ivr.png",
    href: "/ivr-dialer",
    desc: "Hosted cloud telephony with customized IVR for incoming and outgoing calls.",
  },
  {
    title: "Voice SMS",
    subtitle: "Bulk Voice Broadcasts",
    icon: "/assets/site-images/promotional-sms.png",
    href: "/voice-sms",
    desc: "Send bulk voice messages directly to your customers' phones.",
  },
  {
    title: "Toll Free",
    subtitle: "1800 Number",
    icon: "/assets/site-images/banner-mac.png",
    href: "/toll-free",
    desc: "Professional toll-free number with automated IVR and call forwarding.",
  },
];

const smsServices = [
  {
    title: "Bulk SMS",
    img: "/assets/site-images/sms.png",
    href: "/bulk-sms",
    desc: "Send millions of SMS messages to your customers instantly.",
  },
  {
    title: "OTP / SMS Alert",
    img: "/assets/site-images/bulk-sms-udaipur.png",
    href: "/otp-sms-alert",
    desc: "Real-time OTP and transactional SMS alerts via fastest route.",
  },
  {
    title: "Promotional SMS",
    img: "/assets/site-images/promotional-sms.png",
    href: "/bulk-sms",
    desc: "Run large-scale promotional SMS campaigns effortlessly.",
  },
  {
    title: "Transactional SMS",
    img: "/assets/site-images/sms-icon-blue-300x300.png",
    href: "/otp-sms-alert",
    desc: "Reliable transactional messages for banking, e-commerce, and more.",
  },
];

const stats = [
  { label: "Enterprise Clients", value: "500+", icon: Building },
  { label: "SMS Delivered Daily", value: "10M+", icon: MessageSquare },
  { label: "Voice Calls Handled", value: "1M+", icon: Phone },
  { label: "Happy Customers", value: "1000+", icon: Users },
];

export default function Home() {
  return (
    <div>
      <section
        className="relative min-h-[560px] flex items-center"
        style={{
          backgroundImage: "url('/assets/site-images/banner-digialya.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-ocid="home.hero.section"
      >
        <div className="absolute inset-0 bg-[#0d2a3a]/80" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-white">
              <p className="text-[#0CB4CE] font-semibold text-sm uppercase tracking-widest mb-3">
                HS Value Services
              </p>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-5">
                Unified Messaging Platform.
                <br />
                <span className="text-[#0CB4CE]">Digital Marketing</span>{" "}
                &ndash; Using SMS, Voice And Email
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-xl leading-relaxed">
                HS VALUE SERVICES is a highly scalable, hosted unified messaging
                platform for Enterprises.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link to="/contact">
                  <Button
                    className="bg-[#0CB4CE] hover:bg-[#0CB4CE]/90 text-white font-bold px-6"
                    data-ocid="home.hero.cta.button"
                  >
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary"
                    data-ocid="home.hero.about.button"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/assets/site-images/hashtag-tribe-home-banner3-devices.png"
                alt="HS Value Services Platform"
                className="max-w-sm md:max-w-md w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-8" data-ocid="home.stats.section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-white">
                <s.icon className="w-8 h-8 mx-auto mb-2 text-[#0CB4CE]" />
                <p className="font-heading text-3xl font-bold">{s.value}</p>
                <p className="text-sm text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-white"
        data-ocid="home.voice_services.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#0CB4CE] font-semibold text-sm uppercase tracking-widest mb-2">
              Our Services
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Offer: Voice Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cloud telephony and voice communication solutions
              for businesses of all sizes across India.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {voiceServices.map((s, i) => (
              <Link
                key={s.href + s.title}
                to={s.href as "/"}
                data-ocid={`home.voice_service.item.${i + 1}`}
              >
                <div className="group bg-white rounded-xl p-6 shadow-card border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center h-full">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={s.icon}
                      alt={s.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0CB4CE] uppercase tracking-wide mb-2">
                    {s.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-muted/30"
        data-ocid="home.sms_services.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#0CB4CE] font-semibold text-sm uppercase tracking-widest mb-2">
              Messaging
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              SMS Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reliable bulk SMS, OTP, and promotional messaging services with
              real-time delivery reports.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smsServices.map((s, i) => (
              <Link
                key={s.href + s.title}
                to={s.href as "/"}
                data-ocid={`home.sms_service.item.${i + 1}`}
              >
                <div className="group bg-white rounded-xl p-6 shadow-card border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center h-full">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-16 h-16 object-contain mx-auto mb-4"
                  />
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-white"
        data-ocid="home.digital_services.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#0CB4CE] font-semibold text-sm uppercase tracking-widest mb-2">
              Digital
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Email &amp; WhatsApp Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                to: "/email-services",
                img: "/assets/site-images/email_marketing_campaingns.png",
                title: "Email Services",
                desc: "Reliable Email service for apps and marketing campaigns with templates and analytics.",
                ocid: "home.email_service.card",
              },
              {
                to: "/waba",
                img: "/assets/site-images/whatsapp.png",
                title: "WhatsApp Business API",
                desc: "Official WhatsApp Business API for automated messaging, OTPs, and customer engagement.",
                ocid: "home.whatsapp_service.card",
              },
              {
                to: "/lms",
                img: "/assets/site-images/lms.png",
                title: "Lead Management",
                desc: "Capture, manage, and distribute leads with our powerful LMS platform.",
                ocid: "home.lms_service.card",
              },
            ].map((item) => (
              <Link key={item.to} to={item.to as "/"} data-ocid={item.ocid}>
                <div className="group bg-white rounded-xl p-8 shadow-card border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center h-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 object-contain mx-auto mb-4"
                  />
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-teal" data-ocid="home.cta.section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Join 500+ enterprises that trust HS Value Services for their
            communication needs.
          </p>
          <Link to="/contact">
            <Button
              className="bg-white text-primary font-bold hover:bg-white/90 px-10 py-4 text-base"
              data-ocid="home.bottom_cta.button"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
