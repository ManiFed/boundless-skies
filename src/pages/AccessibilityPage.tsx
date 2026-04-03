import {
  Accessibility,
  Move,
  Eye,
  Brain,
  Lightbulb,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroSky from "@/assets/hero-sky.jpg";

const AccessibilityPage = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative flex items-center justify-center overflow-hidden py-32 md:py-40">
        <img src={heroSky} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-site px-4 text-center text-white">
          <Accessibility className="mx-auto mb-4 h-12 w-12 text-accent" />
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">Accessibility in Action</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
            Accessibility isn't an add-on—it's the foundation of everything we build.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Our Philosophy</p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Designed for Everyone</h2>
          <p className="text-lg leading-relaxed text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            We don't make programs and then try to make them accessible. We start with accessibility and build outward. Every event, every piece of equipment, and every experience is designed from the ground up to welcome everyone.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-site">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>How it works</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">How We Make It Work</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Move, title: "Mobility", items: [
                  "Seated viewing positions at every station",
                  "Stable, wheelchair-accessible mounts",
                  "Accessible site layouts and pathways",
                  "Adjustable equipment heights",
                ],
              },
              {
                icon: Eye, title: "Visual", items: [
                  "Screen-based observing for shared viewing",
                  "High-contrast displays and materials",
                  "Assisted viewing tools and magnification",
                  "Audio descriptions of celestial objects",
                ],
              },
              {
                icon: Brain, title: "Cognitive", items: [
                  "Simple, clear instructions for all activities",
                  "Guided, step-by-step experiences",
                  "Sensory-friendly environments",
                  "Patient, trained facilitators",
                ],
              },
            ].map((cat) => (
              <Card key={cat.title} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                    <cat.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-foreground">{cat.title}</h3>
                  <ul className="space-y-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* REAL EXAMPLES */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Real world</p>
            <h2 className="text-3xl font-bold text-foreground">In Practice</h2>
          </div>
          <div className="space-y-5" style={{ fontFamily: "'Inter', sans-serif" }}>
            {[
              { title: "Community Stargazing Events", desc: "Our public sessions feature telescopes with screen displays so everyone can see what's being observed—no awkward eyepiece positioning required." },
              { title: "Adaptive Equipment Demos", desc: "We showcase and lend specialized equipment—from motorized mounts to tablet-connected telescopes—that removes traditional barriers." },
              { title: "Nature Walk Programs", desc: "Guided birdwatching with accessible trails, simplified identification guides, and patient facilitators who ensure every participant can engage fully." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="mb-2 text-lg font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="relative section-padding overflow-hidden">
        <img src={heroSky} alt="" loading="lazy" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <Lightbulb className="mx-auto mb-4 h-10 w-10 text-accent" />
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Future Development</h2>
          <p className="mb-8 text-lg leading-relaxed text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
            We're constantly innovating. Our roadmap includes new adaptive tools, VR experiences for homebound participants, and a national network of accessible astronomy programs.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light text-base px-8 py-6 rounded-full font-semibold shadow-lg shadow-accent/25">
            <Link to="/contact">
              Join Our Mission <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AccessibilityPage;
