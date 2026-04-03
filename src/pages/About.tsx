import { Eye, Lightbulb, Target, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import heroSky from "@/assets/hero-sky.jpg";

const About = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative flex items-center justify-center overflow-hidden py-32 md:py-40">
        <img src={heroSky} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-site px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">About Boundless Skies</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
            Building a world where curiosity knows no limits and the sky belongs to everyone.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            Boundless Skies Alliance exists to make astronomy and nature truly accessible. We create programs, partnerships, and tools that remove barriers—physical, sensory, and cognitive—so every person can experience the wonder of the natural world and the night sky.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
              <Eye className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">The Problem</h2>
          </div>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            For millions of people living with disabilities, experiencing astronomy and nature isn't just difficult—it's often impossible.
          </p>
          <div className="space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            {[
              { title: "Mobility barriers", desc: "Most telescope setups require standing, bending, and navigating uneven terrain that excludes wheelchair users." },
              { title: "Equipment barriers", desc: "Standard equipment has complex controls not designed for adaptive use, excluding many potential observers." },
              { title: "Knowledge barriers", desc: "Science education often lacks accessible formats, leaving people without pathways to participation." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <strong className="text-foreground">{item.title}</strong>
                <span className="text-muted-foreground"> — {item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
              <Lightbulb className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">The Solution</h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            <p>
              We don't retrofit accessibility onto existing programs—we build it into the foundation of everything we do.
            </p>
            <p>
              Our events feature seated viewing stations, adaptive telescope mounts, screen-based observing for shared experiences, and guided programs with simplified instructions that welcome participants of every ability level.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDING STORY */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
              <Heart className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            <p>
              Boundless Skies Alliance was born from a simple realization: the universe doesn't have barriers—but our access to it does. Founded in New Rochelle, New York, our organization grew from personal experience with the gaps in accessible science programming.
            </p>
            <p>
              What started as community stargazing sessions has grown into a mission to transform how astronomy and nature are shared—proving that inclusion isn't just possible, it's better for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative section-padding overflow-hidden">
        <img src={heroSky} alt="" loading="lazy" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Looking ahead</p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Vision</h2>
          <p className="text-lg leading-relaxed text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
            We envision a future where accessible astronomy and nature programs exist in every community—where alliances of organizations, educators, and enthusiasts work together to ensure that everyone, everywhere, can look up and feel connected to the universe around them.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
