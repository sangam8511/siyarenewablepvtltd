import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Star,
  Building2,
  Factory,
  Sun,
  TrendingUp,
  Award,
  MapPin,
} from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
import projectRooftop from "@/assets/project-rooftop.jpg";
import projectGround from "@/assets/project-ground.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

const Index = () => {
  const services = [
    {
      icon: Sun,
      title: "Solar Power Plant Design",
      description:
        "Complete engineering and design solutions for utility-scale and commercial solar installations.",
    },
    {
      icon: Factory,
      title: "Turnkey EPC Projects",
      description:
        "End-to-end EPC services from planning to commissioning with guaranteed performance.",
    },
    {
      icon: Building2,
      title: "Rooftop Solar",
      description:
        "Industrial and commercial rooftop solar solutions with quick ROI and maximum efficiency.",
    },
    {
      icon: TrendingUp,
      title: "Project Consultation",
      description:
        "Expert techno-commercial consultation and solar financing options.",
    },
  ];

  const stats = [
    { value: "50+", label: "MW Installed" },
    { value: "100+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const projects = [
    {
      image: projectRooftop,
      title: "Commercial Rooftop - Ranchi",
      capacity: "500 kW",
      type: "Commercial",
    },
    {
      image: projectGround,
      title: "Ground Mount - Patna",
      capacity: "2 MW",
      type: "Industrial",
    },
    {
      image: projectIndustrial,
      title: "Industrial Complex - Lucknow",
      capacity: "1.5 MW",
      type: "Industrial",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Industries",
      text: "Siya Renewable transformed our energy costs. The installation was seamless and the team was highly professional.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Sharma Textiles",
      text: "Outstanding service! Our 500 kW rooftop system has exceeded performance expectations.",
      rating: 5,
    },
    {
      name: "Amit Verma",
      company: "Verma Foods",
      text: "Best decision we made. ROI achieved in just 4 years with reliable support from the team.",
      rating: 5,
    },
  ];

  const advantages = [
    "Local expertise in Jharkhand, UP & Bihar",
    "Faster project execution",
    "Personalized design solutions",
    "Comprehensive after-sales support",
    "Competitive pricing",
    "Quality assured components",
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Solar power plant at sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Leading Solar EPC in Eastern India
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Power Your Future with{" "}
              <span className="text-primary">Clean Solar Energy</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Siya Renewable delivers turnkey solar power solutions across
              Jharkhand, Uttar Pradesh & Bihar. From design to commissioning, we
              power industries with sustainable energy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Button asChild variant="hero" size="xl">
                <Link to="/calculator" className="gap-2">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/projects">View Our Projects</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-12 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">25 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">Quick Installation</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm">MNRE Approved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Solar Energy Solutions
            </h2>
            <p className="text-muted-foreground">
              From planning to commissioning, we offer comprehensive solar EPC
              services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services" className="gap-2">
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Local Solar Partner
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Siya Renewable stands apart with deep local expertise in
                Jharkhand, UP & Bihar. Unlike large national players, we offer
                personalized attention, faster execution, and reliable
                after-sales support right at your doorstep.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm text-foreground">{advantage}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg">
                <Link to="/about" className="gap-2">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-3" />
              <img
                src={projectIndustrial}
                alt="Solar installation team at work"
                className="relative rounded-2xl shadow-strong w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-strong">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-card-foreground">
                      500+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Happy Clients
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Solar Installations
            </h2>
            <p className="text-muted-foreground">
              Explore our portfolio of successful solar projects across Eastern
              India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-semibold text-primary-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Capacity: {project.capacity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects" className="gap-2">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-secondary-foreground/70">
              Don't just take our word for it - hear from businesses that have
              made the switch to solar with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Get a free, no-obligation quote for your solar project. Our
              experts will design a custom solution that fits your energy needs
              and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="secondary"
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/calculator" className="gap-2">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="hero-outline"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium">
                Serving Jharkhand, Uttar Pradesh & Bihar
              </span>
            </div>
            <div className="h-8 w-px bg-border hidden md:block" />
            <div className="text-muted-foreground text-sm">
              Head Office: Ranchi, Jharkhand
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
