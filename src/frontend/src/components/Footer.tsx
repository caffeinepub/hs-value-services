import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;
  return (
    <footer className="relative">
      <div
        className="relative py-12"
        style={{
          backgroundImage:
            "url('/assets/site-images/computer-coffee-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0d2a3a]/90" />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-heading font-bold text-lg mb-4 border-b border-[#0CB4CE] pb-2">
                About Us
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                HS Value Services is a highly scalable, hosted unified messaging
                platform for Enterprises, providing SMS, Voice and Email
                services across India.
              </p>
              <Link
                to="/about"
                className="text-[#0CB4CE] text-sm hover:underline"
              >
                Read More &rarr;
              </Link>
            </div>
            <div>
              <h3 className="text-white font-heading font-bold text-lg mb-4 border-b border-[#0CB4CE] pb-2">
                Important Links
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "OTP / SMS Alert", href: "/otp-sms-alert" },
                  { label: "Toll Free Number", href: "/toll-free" },
                  { label: "Email Services", href: "/email-services" },
                  { label: "Voice SMS", href: "/voice-sms" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Registration", href: "/contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href as "/"}
                      className="text-gray-300 text-sm hover:text-[#0CB4CE] transition-colors"
                    >
                      &rarr; {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-heading font-bold text-lg mb-4 border-b border-[#0CB4CE] pb-2">
                More Links
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Bulk SMS", href: "/bulk-sms" },
                  { label: "Click 2 Call", href: "/click-2-call" },
                  { label: "IVR / Dialer", href: "/ivr-dialer" },
                  { label: "Missed Call", href: "/missed-call" },
                  { label: "Terms & Conditions", href: "/terms" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href as "/"}
                      className="text-gray-300 text-sm hover:text-[#0CB4CE] transition-colors"
                    >
                      &rarr; {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-heading font-bold text-lg mb-4 border-b border-[#0CB4CE] pb-2">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#0CB4CE] shrink-0" />
                  <span>
                    Shop No. 76, 2nd Floor, Saini School Complex, Mohalla
                    Sainiyan, Hisar, Haryana - 125001, India
                  </span>
                </li>
                <li className="flex gap-2 text-gray-300 text-sm">
                  <Phone className="w-4 h-4 mt-0.5 text-[#0CB4CE] shrink-0" />
                  <a href="tel:+917286811000" className="hover:text-[#0CB4CE]">
                    +91-7286811000
                  </a>
                </li>
                <li className="flex gap-2 text-gray-300 text-sm">
                  <Mail className="w-4 h-4 mt-0.5 text-[#0CB4CE] shrink-0" />
                  <a
                    href="mailto:support@hisarsms.com"
                    className="hover:text-[#0CB4CE]"
                  >
                    support@hisarsms.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/917015092100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#0CB4CE] transition-colors"
                  >
                    <img
                      src="/assets/site-images/whatsapp.png"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0868a9] py-3">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white text-sm">
            Copyright &copy;2010-{year} HS Value Services. All Rights Reserved.
          </p>
          <p className="text-white/70 text-xs">
            Built with &hearts; using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
      <a
        href="https://wa.me/917015092100"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
        data-ocid="whatsapp.floating.button"
      >
        <img
          src="/assets/site-images/whatsapp.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </footer>
  );
}
