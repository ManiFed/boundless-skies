import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/accessibility", label: "Accessibility" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Star
            className={`h-7 w-7 transition-colors ${scrolled ? "text-accent" : "text-accent"}`}
            fill="hsl(var(--gold))"
          />
          <span
            className={`text-lg font-bold tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-background"
            }`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Boundless Skies
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                location.pathname === link.to
                  ? scrolled
                    ? "bg-accent text-accent-foreground"
                    : "bg-background/20 text-background backdrop-blur-sm"
                  : scrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    : "text-background/80 hover:text-background hover:bg-background/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className={`md:hidden ${scrolled ? "" : "text-background hover:bg-background/10"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {mobileOpen && (
        <nav className="glass mx-4 mb-4 rounded-2xl p-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-xl px-5 py-3.5 text-base font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
