import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  CheckCircle,
  Lightbulb,
  Handshake,
} from "lucide-react";
import projectIndustrial from "@/assets/project-industrial.jpg";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Embracing cutting-edge solar technology to deliver maximum efficiency and ROI.",
    },
    {
      icon: Handshake,
      title: "Trust",
      description:
        "Building long-term relationships through transparency and reliable service.",
    },
    {
      icon: Heart,
      title: "Sustainability",
      description:
        "Committed to creating a cleaner, greener future for generations to come.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Striving for the highest quality in every project, big or small.",
    },
  ];

  const milestones = [
    { year: "2008", title: "Company Founded", description: "Siya Renewable established in Ranchi, Jharkhand" },
    { year: "2012", title: "First MW Installation", description: "Completed first megawatt-scale solar project" },
    { year: "2016", title: "Regional Expansion", description: "Expanded operations to UP and Bihar" },
    { year: "2020", title: "50 MW Milestone", description: "Crossed 50 MW of total installed capacity" },
    { year: "2024", title: "100+ Projects", description: "Successfully completed over 100 solar installations" },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                About Siya Renewable
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
                Powering Eastern India's <span className="text-primary">Solar Revolution</span>
              </h1>
              <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                Founded by Ravi Pandey with a vision to bring clean, affordable
                solar energy to Jharkhand, Uttar Pradesh, and Bihar, Siya
                Renewable has grown to become the region's trusted solar EPC
                partner.
              </p>
              <Button asChild size="lg">
                <Link to="/contact" className="gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3" />
              <img
                src={projectIndustrial}
                alt="Siya Renewable team at work"
                className="relative rounded-2xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                The Vision of Ravi Pandey
              </h2>
            </div>

            <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-soft">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    Ravi Pandey, Founder & MD
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Ravi Pandey started Siya Renewable in 2008 with a simple
                      belief: Eastern India deserves access to reliable,
                      affordable solar energy. Growing up in Jharkhand, he
                      witnessed firsthand the power challenges faced by local
                      industries and communities.
                    </p>
                    <p>
                      With over 15 years of experience in the renewable energy
                      sector, Ravi has led the company from a small consultancy
                      to one of the region's most trusted solar EPC providers.
                      His hands-on approach and commitment to quality have
                      earned Siya Renewable the trust of over 500 clients across
                      three states.
                    </p>
                    <p>
                      "Our mission is not just to install solar panels, but to
                      build lasting partnerships that help businesses thrive
                      while contributing to a sustainable future."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To accelerate India's transition to clean energy by delivering
                world-class solar solutions that are accessible, affordable, and
                built to last.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Eastern India's most trusted solar energy partner, powering
                a million homes and businesses with clean, renewable energy by
                2030.
              </p>
            </div>

            {/* Purpose */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Our Purpose
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating a sustainable future where clean energy powers growth,
                prosperity, and environmental stewardship for generations.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-xl"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Key Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h4 className="font-semibold text-foreground mb-1">
                    {milestone.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Why Choose Siya Renewable
            </h2>
            <p className="text-secondary-foreground/70">
              We stand out from the competition with our unique combination of
              local expertise and professional execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Deep local expertise in Jharkhand, UP & Bihar",
              "Faster project execution than national players",
              "Personalized design solutions for every project",
              "Direct access to senior leadership",
              "Comprehensive after-sales support",
              "Competitive pricing without quality compromise",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card p-6 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-card-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you transition to clean, affordable
            solar energy.
          </p>
          <Button
            asChild
            variant="secondary"
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link to="/contact" className="gap-2">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
