import { Star, Eye, Lightbulb, Target, Heart } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="mx-auto max-w-site text-center">
          <Star className="mx-auto mb-4 h-10 w-10 text-accent" fill="hsl(var(--gold))" />
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Boundless Skies</h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">
            Building a world where curiosity knows no limits and the sky belongs to everyone.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <Target className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Boundless Skies Alliance exists to make astronomy and nature truly accessible. We create programs, partnerships, and tools that remove barriers—physical, sensory, and cognitive—so every person can experience the wonder of the natural world and the night sky.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <Eye className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">The Problem</h2>
          </div>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            For millions of people living with disabilities, experiencing astronomy and nature isn't just difficult—it's often impossible. The barriers are real:
          </p>
          <ul className="space-y-4 text-foreground">
            <li className="rounded-lg border border-border bg-card p-4">
              <strong>Mobility barriers</strong> — Most telescope setups require standing, bending, and navigating uneven terrain that excludes wheelchair users and those with limited mobility.
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              <strong>Equipment barriers</strong> — Standard astronomical equipment has complex controls not designed for adaptive use, excluding many potential observers.
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              <strong>Knowledge barriers</strong> — Science education often lacks accessible formats, leaving people with cognitive or sensory disabilities without pathways to participation.
            </li>
          </ul>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">The Solution</h2>
          </div>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Boundless Skies does things differently. We don't retrofit accessibility onto existing programs—we build it into the foundation of everything we do.
          </p>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Our events feature seated viewing stations, adaptive telescope mounts, screen-based observing for shared experiences, and guided programs with simplified instructions that welcome participants of every ability level.
            </p>
            <p className="leading-relaxed">
              We partner with astronomy clubs, nature organizations, schools, and equipment manufacturers to build an alliance of accessibility—creating a network that amplifies impact far beyond what any single organization could achieve.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDING STORY */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <Heart className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
          </div>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            Boundless Skies Alliance was born from a simple realization: the universe doesn't have barriers—but our access to it does. Founded in New Rochelle, New York, our organization grew from personal experience with the gaps in accessible science programming.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            What started as community stargazing sessions has grown into a mission to transform how astronomy and nature are shared—proving that inclusion isn't just possible, it's better for everyone.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <Star className="mx-auto mb-4 h-10 w-10 text-accent" fill="hsl(var(--gold))" />
          <h2 className="mb-6 text-3xl font-bold text-foreground">Our Vision</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We envision a future where accessible astronomy and nature programs exist in every community—where alliances of organizations, educators, and enthusiasts work together to ensure that everyone, everywhere, can look up and feel connected to the universe around them.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
