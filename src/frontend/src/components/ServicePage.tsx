import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";

interface Feature {
  img?: string;
  title: string;
  description: string;
}
interface ServicePageProps {
  heroStyle?: React.CSSProperties;
  heroClassName?: string;
  title: string;
  subtitle?: string;
  description: string;
  heroImage?: string;
  heroImageAlt?: string;
  features: Feature[];
  children?: React.ReactNode;
}

export default function ServicePage({
  heroStyle,
  heroClassName = "gradient-orange-red",
  title,
  subtitle,
  description,
  heroImage,
  heroImageAlt,
  features,
  children,
}: ServicePageProps) {
  return (
    <div>
      <section className={`py-16 md:py-24 ${heroClassName}`} style={heroStyle}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-white">
              <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-shadow">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl font-medium mb-4 opacity-90">
                  {subtitle}
                </p>
              )}
              <p className="text-lg opacity-90 leading-relaxed mb-6">
                {description}
              </p>
              <Link to="/contact">
                <Button
                  className="bg-white text-primary font-semibold hover:bg-white/90"
                  data-ocid="service.cta.button"
                >
                  Get Started
                </Button>
              </Link>
            </div>
            {heroImage && (
              <div className="flex-1 flex justify-center">
                <img
                  src={heroImage}
                  alt={heroImageAlt ?? title}
                  className="max-h-64 md:max-h-80 object-contain drop-shadow-xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-card flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                data-ocid={`service.feature.item.${i + 1}`}
              >
                {feature.img ? (
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-16 h-16 object-contain mb-4"
                  />
                ) : (
                  <CheckCircle className="w-12 h-12 text-primary mb-4" />
                )}
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {children}
      <section className="py-16 gradient-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Contact us today to learn more about how HS Value Services can help
            your business grow.
          </p>
          <Link to="/contact">
            <Button
              className="bg-white text-primary font-bold hover:bg-white/90 px-8 py-3"
              data-ocid="service.bottom_cta.button"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
