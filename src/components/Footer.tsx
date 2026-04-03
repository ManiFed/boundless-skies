import { Star, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-site px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2 text-lg font-bold">
              <Star className="h-5 w-5" fill="currentColor" />
              Boundless Skies Alliance
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Making astronomy and nature accessible to everyone, regardless of ability.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm opacity-80">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
              <Link to="/accessibility" className="hover:opacity-100 transition-opacity">Accessibility</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Contact</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@boundlessskies.org</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New Rochelle, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Boundless Skies Alliance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
