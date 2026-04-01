import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    group: "SMS Services",
    items: [
      { label: "Bulk SMS", href: "/bulk-sms" },
      { label: "OTP / SMS Alert", href: "/otp-sms-alert" },
      { label: "Voice SMS", href: "/voice-sms" },
    ],
  },
  {
    group: "Voice Services",
    items: [
      { label: "Virtual Receptionist", href: "/virtual-receptionist" },
      { label: "Missed Call", href: "/missed-call" },
      { label: "Click 2 Call", href: "/click-2-call" },
      { label: "IVR / Dialer", href: "/ivr-dialer" },
      { label: "Toll Free Number", href: "/toll-free" },
    ],
  },
  {
    group: "Digital Services",
    items: [
      { label: "Email Services", href: "/email-services" },
      { label: "WhatsApp Business API", href: "/waba" },
      { label: "Lead Management", href: "/lms" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setServicesOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/assets/site-images/New-Logo-HS-1.png"
            alt="HS Value Services"
            className="h-12 w-auto"
          />
        </Link>
        <nav
          className="hidden lg:flex items-center gap-6"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            data-ocid="nav.home.link"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            data-ocid="nav.about.link"
          >
            About
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              onClick={() => setServicesOpen((o) => !o)}
              type="button"
              aria-expanded={servicesOpen}
              data-ocid="nav.services.toggle"
            >
              Services{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border border-border p-4 w-[560px] grid grid-cols-3 gap-4 z-50"
                data-ocid="nav.services.dropdown"
              >
                {services.map((group) => (
                  <div key={group.group}>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      {group.group}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            to={item.href as "/"}
                            className="block text-sm text-foreground hover:text-primary hover:bg-muted px-2 py-1 rounded transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/contact"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            data-ocid="nav.contact.link"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://hisarsms.com/login.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              data-ocid="header.login.button"
            >
              Login
            </Button>
          </a>
          <Link to="/contact">
            <Button
              size="sm"
              className="bg-primary text-white hover:bg-primary/90"
              data-ocid="header.register.button"
            >
              Register
            </Button>
          </Link>
        </div>
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen((o) => !o)}
          type="button"
          aria-label="Toggle menu"
          data-ocid="header.mobile_menu.toggle"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      {mobileOpen && (
        <div
          className="lg:hidden bg-white border-t border-border px-4 py-4 space-y-3"
          data-ocid="header.mobile_menu.panel"
        >
          <Link
            to="/"
            className="block py-2 font-semibold text-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 font-semibold text-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <button
            className="flex items-center gap-1 py-2 font-semibold text-foreground w-full text-left"
            type="button"
            onClick={() => setMobileServicesOpen((o) => !o)}
          >
            Services{" "}
            <ChevronDown
              className={`w-4 h-4 ml-auto transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 space-y-4">
              {services.map((group) => (
                <div key={group.group}>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    {group.group}
                  </p>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href as "/"}
                      className="block py-1.5 text-sm text-foreground hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
          <Link
            to="/contact"
            className="block py-2 font-semibold text-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <div className="flex gap-2 pt-2">
            <a
              href="https://hisarsms.com/login.php"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary text-primary"
              >
                Login
              </Button>
            </a>
            <Link
              to="/contact"
              className="flex-1"
              onClick={() => setMobileOpen(false)}
            >
              <Button size="sm" className="w-full bg-primary text-white">
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
