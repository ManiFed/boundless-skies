import {
  Star,
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

const AccessibilityPage = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="mx-auto max-w-site text-center">
          <Accessibility className="mx-auto mb-4 h-10 w-10 text-accent" />
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Accessibility in Action</h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">
            Accessibility isn't an add-on—it's the foundation of everything we build.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground">Our Philosophy</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            At Boundless Skies Alliance, we don't make programs and then try to make them accessible. We start with accessibility and build outward. Every event, every piece of equipment, and every experience is designed from the ground up to welcome everyone—regardless of physical, sensory, or cognitive ability.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-site">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground">How We Make It Work</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Mobility */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                  <Move className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-foreground">Mobility</h3>
                <ul className="space-y-3">
                  {[
                    "Seated viewing positions at every station",
                    "Stable, wheelchair-accessible mounts",
                    "Accessible site layouts and pathways",
                    "Adjustable equipment heights",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Visual */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-foreground">Visual</h3>
                <ul className="space-y-3">
                  {[
                    "Screen-based observing for shared viewing",
                    "High-contrast displays and materials",
                    "Assisted viewing tools and magnification",
                    "Audio descriptions of celestial objects",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Cognitive */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                  <Brain className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-foreground">Cognitive</h3>
                <ul className="space-y-3">
                  {[
                    "Simple, clear instructions for all activities",
                    "Guided, step-by-step experiences",
                    "Sensory-friendly environments",
                    "Patient, trained facilitators",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* REAL EXAMPLES */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <Star className="h-8 w-8 text-accent" fill="hsl(var(--gold))" />
            <h2 className="text-3xl font-bold text-foreground">In Practice</h2>
          </div>
          <div className="space-y-6 text-muted-foreground">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-foreground">Community Stargazing Events</h3>
              <p className="leading-relaxed">
                Our public stargazing sessions feature telescopes with screen displays so everyone can see what's being observed—no awkward eyepiece positioning required. Seated stations and stable mounts ensure comfortable viewing for all.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-foreground">Adaptive Equipment Demos</h3>
              <p className="leading-relaxed">
                We showcase and lend specialized equipment—from motorized mounts to tablet-connected telescopes—that removes traditional barriers to astronomical observation.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-foreground">Nature Walk Programs</h3>
              <p className="leading-relaxed">
                Guided birdwatching and nature observation with accessible trails, simplified identification guides, and patient facilitators who ensure every participant can engage fully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-3xl text-center">
          <Lightbulb className="mx-auto mb-4 h-10 w-10 text-accent" />
          <h2 className="mb-6 text-3xl font-bold text-foreground">Future Development</h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            We're constantly innovating. Our roadmap includes development of new adaptive tools, partnerships with accessibility researchers, virtual reality experiences for homebound participants, and a national network of accessible astronomy programs.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light text-lg px-8 py-6">
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
