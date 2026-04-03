import { Link } from "react-router-dom";
import {
  Star,
  Telescope,
  TreePine,
  Accessibility,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Heart,
  HandHeart,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[10%] top-[20%] h-1 w-1 rounded-full bg-accent animate-pulse" />
          <div className="absolute left-[25%] top-[40%] h-1.5 w-1.5 rounded-full bg-accent animate-pulse delay-300" />
          <div className="absolute left-[50%] top-[15%] h-1 w-1 rounded-full bg-accent animate-pulse delay-500" />
          <div className="absolute left-[70%] top-[30%] h-2 w-2 rounded-full bg-accent animate-pulse delay-700" />
          <div className="absolute left-[85%] top-[50%] h-1 w-1 rounded-full bg-accent animate-pulse delay-100" />
          <div className="absolute left-[40%] top-[60%] h-1.5 w-1.5 rounded-full bg-accent animate-pulse delay-200" />
          <div className="absolute left-[60%] top-[70%] h-1 w-1 rounded-full bg-accent animate-pulse delay-400" />
          <div className="absolute left-[15%] top-[75%] h-1 w-1 rounded-full bg-accent animate-pulse delay-600" />
        </div>

        <div className="relative mx-auto max-w-site px-4 py-24 md:py-32 text-center">
          <Star className="mx-auto mb-6 h-12 w-12 text-accent" fill="hsl(var(--gold))" />
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Astronomy and nature
            <br />
            <span className="text-accent">without barriers</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed opacity-90 md:text-xl">
            Boundless Skies Alliance creates inclusive experiences that bring the wonders of the night sky and the natural world to everyone.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light text-lg px-8 py-6">
              <Link to="/about">Explore Programs</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* QUICK MISSION */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Our Mission</h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            We believe that everyone deserves to look up and wonder. Boundless Skies Alliance removes the barriers that prevent people with disabilities from experiencing astronomy and nature—building community through shared discovery under open skies.
          </p>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="section-padding">
        <div className="mx-auto max-w-site">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground">Join us at our next community gathering</p>
          </div>

          <Card className="mx-auto max-w-2xl border-2 border-accent/30 shadow-lg">
            <CardContent className="p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent-foreground">
                <Star className="h-4 w-4 text-accent" fill="hsl(var(--gold))" />
                Featured Event
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Walk MS Outreach Event</h3>
              <div className="mb-4 flex flex-col gap-2 text-muted-foreground sm:flex-row sm:gap-6">
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  May 3, 2026
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Glen Island Park, New Rochelle, NY
                </span>
              </div>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                An accessible birdwatching and community outreach event designed for all abilities. Join us for guided nature observation, adaptive equipment demos, and connection with fellow nature enthusiasts.
              </p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-gold-light">
                <Link to="/contact">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-site">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">What We Do</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Telescope, title: "Accessible Stargazing", desc: "Telescope sessions designed for seated viewing, with adaptive mounts and guided experiences for all abilities." },
              { icon: TreePine, title: "Inclusive Nature Programs", desc: "Guided nature walks, birdwatching events, and outdoor programs with accessibility built in from the start." },
              { icon: Accessibility, title: "Adaptive Equipment", desc: "Specialized tools and equipment that make astronomical and nature observation possible for everyone." },
              { icon: Users, title: "Community Outreach", desc: "Partnerships with schools, organizations, and communities to spread inclusive science education." },
            ].map((item) => (
              <Card key={item.title} className="border-0 shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY IN ACTION */}
      <section className="section-padding">
        <div className="mx-auto grid max-w-site items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Accessibility in Action
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Accessibility is built into everything we do—not added as an afterthought. Every event, every program, and every piece of equipment is designed with inclusion at its core.
            </p>
            <ul className="space-y-4">
              {[
                "Seated viewing positions at every event",
                "Simplified, intuitive controls on all equipment",
                "Shared experiences that bring people together",
                "Guided sessions for every experience level",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-gold-light">
              <Link to="/accessibility">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-primary p-12">
            <div className="text-center text-primary-foreground">
              <Accessibility className="mx-auto mb-4 h-20 w-20 opacity-80" />
              <p className="text-lg font-semibold opacity-90">Inclusion by Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CALLOUT */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Building an Alliance</h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            We're stronger together. Boundless Skies Alliance partners with organizations that share our commitment to accessible science and nature.
          </p>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {["Astronomy Clubs", "Nature Groups", "Schools", "Equipment Manufacturers"].map((type) => (
              <span
                key={type}
                className="rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-medium text-foreground"
              >
                {type}
              </span>
            ))}
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light text-lg px-8 py-6">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="mx-auto max-w-site text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Get Involved</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed opacity-90">
            Whether you want to participate, volunteer, or support our mission—there's a place for you under the boundless sky.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light text-lg px-8 py-6">
              <Link to="/contact">
                <Heart className="mr-2 h-5 w-5" /> Join Us
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light text-lg px-8 py-6">
              <Link to="/contact">
                <HandHeart className="mr-2 h-5 w-5" /> Volunteer
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" /> Contact
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
