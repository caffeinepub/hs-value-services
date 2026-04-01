import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitting(false);
  }

  return (
    <div>
      <section
        className="relative min-h-[300px] flex items-center"
        style={{
          backgroundImage: "url('/assets/site-images/contactus.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container mx-auto px-4 py-16 text-white text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">
            Contact Us
          </h1>
          <p className="text-xl text-white/90">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              className="bg-white rounded-2xl p-8 shadow-card"
              data-ocid="contact.form.panel"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="mb-1.5 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      data-ocid="contact.name.input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-1.5 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      data-ocid="contact.email.input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="mb-1.5 block">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91-XXXXXXXXXX"
                      data-ocid="contact.phone.input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="mb-1.5 block">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      data-ocid="contact.subject.input"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="mb-1.5 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us more about your requirements..."
                    data-ocid="contact.message.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-white hover:bg-primary/90 font-semibold"
                  data-ocid="contact.submit.button"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        Shop No. 76, 2nd Floor, Saini School Complex, Mohalla
                        Sainiyan, Hisar, Haryana - 125001, India
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a
                        href="tel:+917286811000"
                        className="text-sm text-primary hover:underline"
                      >
                        +91-7286811000
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a
                        href="mailto:support@hisarsms.com"
                        className="text-sm text-primary hover:underline"
                      >
                        support@hisarsms.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="rounded-2xl overflow-hidden shadow-card"
                data-ocid="contact.map.panel"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.2871725529926!2d75.7261463148399!3d29.156208666937545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391233279e794541%3A0x40b813c4162dbd82!2sHS+VALUE+SERVICES+(+Bulk+SMS+Services+)!5e0!3m2!1sen!2sin!4v1540110967465"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="HS Value Services Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
