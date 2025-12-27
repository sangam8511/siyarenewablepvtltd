import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sun,
  Factory,
  Building2,
  TrendingUp,
  Wrench,
  FileText,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Wallet,
} from "lucide-react";
import projectGround from "@/assets/project-ground.jpg";
import projectRooftop from "@/assets/project-rooftop.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: "Solar Power Plant Design & Installation",
      description:
        "Comprehensive engineering, procurement, and construction services for utility-scale and commercial solar power plants.",
      image: projectGround,
      features: [
        "Site assessment and feasibility studies",
        "Custom system design and engineering",
        "High-efficiency solar panels and inverters",
        "Grid connection and commissioning",
        "Performance monitoring systems",
      ],
    },
    {
      icon: Factory,
      title: "Turnkey EPC Solar Projects",
      description:
        "End-to-end EPC solutions from planning to commissioning with guaranteed performance and single-point accountability.",
      image: projectIndustrial,
      features: [
        "Complete project management",
        "Regulatory approvals and permits",
        "Quality assured components",
        "Timely project delivery",
        "Performance guarantees",
      ],
    },
    {
      icon: Building2,
      title: "Rooftop Solar for Industries & Commercial",
      description:
        "Transform your unused rooftop space into a power-generating asset with our industrial and commercial rooftop solutions.",
      image: projectRooftop,
      features: [
        "Structural assessment and design",
        "Optimal panel layout for maximum generation",
        "Net metering assistance",
        "Minimal operational disruption",
        "Quick ROI (3-5 years)",
      ],
    },
    {
      icon: TrendingUp,
      title: "Project Consultation & Financing",
      description:
        "Expert techno-commercial consultation and assistance with solar financing options including loans and subsidies.",
      image: projectGround,
      features: [
        "Energy audit and consumption analysis",
        "ROI and payback calculations",
        "Government subsidy guidance",
        "Bank loan facilitation",
        "Investment structuring",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Free site visit and energy assessment",
    },
    {
      step: "02",
      title: "Design",
      description: "Custom system design and proposal",
    },
    {
      step: "03",
      title: "Approval",
      description: "Permits and financing arrangement",
    },
    {
      step: "04",
      title: "Installation",
      description: "Professional installation by experts",
    },
    {
      step: "05",
      title: "Commissioning",
      description: "Grid connection and handover",
    },
    {
      step: "06",
      title: "Support",
      description: "Ongoing maintenance and monitoring",
    },
  ];

  const benefits = [
    {
      icon: Wallet,
      title: "Reduce Energy Costs",
      description: "Cut electricity bills by up to 90%",
    },
    {
      icon: Shield,
      title: "25-Year Warranty",
      description: "Long-term performance guarantee",
    },
    {
      icon: Clock,
      title: "Quick ROI",
      description: "Payback period of 3-5 years",
    },
    {
      icon: Zap,
      title: "Energy Independence",
      description: "Protect against rising tariffs",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Complete Solar Energy <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              From design to commissioning, we offer comprehensive solar EPC
              services tailored to your specific needs. Serving industries and
              businesses across Jharkhand, UP & Bihar.
            </p>
            <Button asChild size="lg">
              <Link to="/calculator" className="gap-2">
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/calculator" className="gap-2">
                      Request Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div
                      className={`absolute -inset-4 bg-primary/5 rounded-3xl ${
                        index % 2 === 0 ? "rotate-3" : "-rotate-3"
                      }`}
                    />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative rounded-2xl shadow-strong w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Go Solar with Siya Renewable
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground">
              Our streamlined process ensures your solar project is completed
              efficiently and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="relative bg-card p-6 rounded-xl shadow-soft group hover:shadow-medium transition-all"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Additional Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <Wrench className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                O&M Services
              </h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive operation and maintenance services to ensure
                optimal system performance throughout its lifetime.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <FileText className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Documentation Support
              </h3>
              <p className="text-muted-foreground text-sm">
                Complete assistance with regulatory approvals, net metering
                applications, and subsidy documentation.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Performance Monitoring
              </h3>
              <p className="text-muted-foreground text-sm">
                Remote monitoring systems to track energy generation and system
                performance in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a customized solar solution designed for your specific needs and
            budget.
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
      </section>
    </main>
  );
};

export default Services;
