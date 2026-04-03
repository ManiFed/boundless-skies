import { Link } from "react-router-dom";
import {
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
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroSky from "@/assets/hero-sky.jpg";

const Index = () => {
  return (
    <Layout>
      {/* HERO — full-bleed with background image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroSky}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        <div className="relative z-10 mx-auto max-w-site px-4 text-center text-white pt-20">
          <h1 className="mb-6 text-5xl font-black leading-[1.1] md:text-7xl lg:text-8xl animate-fade-up">
            Astronomy & nature,
            <br />
            <span className="text-gradient">without barriers.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl animate-fade-up animation-delay-200" style={{ fontFamily: "'Inter', sans-serif" }}>
            Boundless Skies Alliance creates inclusive experiences that bring the wonders of the night sky and the natural world to everyone.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up animation-delay-400">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light text-base px-8 py-6 rounded-full shadow-lg shadow-accent/25 font-semibold">
              <Link to="/about">Explore Programs</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6 rounded-full backdrop-blur-sm font-semibold">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>

        <a
          href="#mission"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </section>

      {/* QUICK MISSION */}
      <section id="mission" className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Our Mission</p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            Everyone deserves to look up and wonder
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            Boundless Skies Alliance removes the barriers that prevent people with disabilities from experiencing astronomy and nature—building community through shared discovery under open skies.
          </p>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="mx-auto max-w-site">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Upcoming</p>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Next Event</h2>
          </div>

          <div className="mx-auto max-w-2xl rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 md:p-10 backdrop-blur-sm">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent" style={{ fontFamily: "'Inter', sans-serif" }}>
              Featured Event
            </div>
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">Walk MS Outreach Event</h3>
            <div className="mb-5 flex flex-col gap-3 text-primary-foreground/70 sm:flex-row sm:gap-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                May 3, 2026
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                Glen Island Park, New Rochelle, NY
              </span>
            </div>
            <p className="mb-7 text-primary-foreground/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              An accessible birdwatching and community outreach event designed for all abilities. Join us for guided nature observation, adaptive equipment demos, and connection with fellow nature enthusiasts.
            </p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-gold-light rounded-full px-6 font-semibold">
              <Link to="/contact">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section-padding">
        <div className="mx-auto max-w-site">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Programs</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">What We Do</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Telescope, title: "Accessible Stargazing", desc: "Telescope sessions designed for seated viewing, with adaptive mounts and guided experiences for all abilities." },
              { icon: TreePine, title: "Nature Programs", desc: "Guided nature walks, birdwatching events, and outdoor programs with accessibility built in from the start." },
              { icon: Accessibility, title: "Adaptive Equipment", desc: "Specialized tools and equipment that make astronomical and nature observation possible for everyone." },
              { icon: Users, title: "Community Outreach", desc: "Partnerships with schools, organizations, and communities to spread inclusive science education." },
            ].map((item) => (
              <Card key={item.title} className="group border-0 bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-7 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY IN ACTION */}
      <section className="section-padding bg-cream">
        <div className="mx-auto grid max-w-site items-center gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Built-in, not bolted on</p>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Accessibility in Action
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
              Every event, every program, and every piece of equipment is designed with inclusion at its core—not as an afterthought.
            </p>
            <ul className="space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              {[
                "Seated viewing positions at every event",
                "Simplified, intuitive controls on all equipment",
                "Shared experiences that bring people together",
                "Guided sessions for every experience level",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-gold-light rounded-full px-6 font-semibold">
              <Link to="/accessibility">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-sm rounded-3xl bg-primary overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
              <div className="relative text-center text-primary-foreground p-8">
                <Accessibility className="mx-auto mb-4 h-24 w-24 opacity-80" />
                <p className="text-xl font-bold">Inclusion by Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CALLOUT */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Partnerships</p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Building an Alliance</h2>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            We're stronger together. Boundless Skies Alliance partners with organizations that share our commitment to accessible science and nature.
          </p>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {["Astronomy Clubs", "Nature Groups", "Schools", "Equipment Manufacturers"].map((type) => (
              <span
                key={type}
                className="rounded-full border border-accent/30 bg-accent/5 px-6 py-2.5 text-sm font-medium text-foreground"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {type}
              </span>
            ))}
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light text-base px-8 py-6 rounded-full shadow-lg shadow-accent/20 font-semibold">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="relative section-padding overflow-hidden">
        <img
          src={heroSky}
          alt=""
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-site text-center text-white">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Get Involved</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
            Whether you want to participate, volunteer, or support our mission—there's a place for you under the boundless sky.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light text-base px-8 py-6 rounded-full font-semibold">
              <Link to="/contact">
                <Heart className="mr-2 h-5 w-5" /> Join Us
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light text-base px-8 py-6 rounded-full font-semibold">
              <Link to="/contact">
                <HandHeart className="mr-2 h-5 w-5" /> Volunteer
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6 rounded-full backdrop-blur-sm font-semibold">
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
