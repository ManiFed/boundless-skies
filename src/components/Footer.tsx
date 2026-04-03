import { Star, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-site px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <Star className="h-6 w-6 text-accent" fill="hsl(var(--gold))" />
              <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Boundless Skies
              </span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70 max-w-xs">
              Making astronomy and nature accessible to everyone, regardless of ability. Based in New Rochelle, NY.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Navigate</h4>
            <nav className="flex flex-col gap-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/accessibility", label: "Accessibility" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-primary-foreground/70 hover:text-accent transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <a href="mailto:info@boundlessskies.org" className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                info@boundlessskies.org
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4" />
                New Rochelle, NY
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Boundless Skies Alliance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
