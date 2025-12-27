import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Zap, Calendar, Eye } from "lucide-react";
import projectRooftop from "@/assets/project-rooftop.jpg";
import projectGround from "@/assets/project-ground.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import heroSolar from "@/assets/hero-solar.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Commercial", "Industrial", "Utility"];

  const projects = [
    {
      id: 1,
      title: "Commercial Rooftop - Ranchi",
      location: "Ranchi, Jharkhand",
      capacity: "500 kW",
      type: "Commercial",
      year: "2024",
      image: projectRooftop,
      description:
        "Rooftop solar installation for a commercial complex, reducing electricity costs by 80%.",
    },
    {
      id: 2,
      title: "Ground Mount Plant - Patna",
      location: "Patna, Bihar",
      capacity: "2 MW",
      type: "Utility",
      year: "2023",
      image: projectGround,
      description:
        "Large-scale ground-mounted solar power plant serving the local grid.",
    },
    {
      id: 3,
      title: "Industrial Complex - Lucknow",
      location: "Lucknow, UP",
      capacity: "1.5 MW",
      type: "Industrial",
      year: "2023",
      image: projectIndustrial,
      description:
        "Complete solar solution for a manufacturing facility with 24/7 operations.",
    },
    {
      id: 4,
      title: "Textile Factory - Varanasi",
      location: "Varanasi, UP",
      capacity: "800 kW",
      type: "Industrial",
      year: "2023",
      image: heroSolar,
      description:
        "Solar power plant for a major textile manufacturer, achieving energy independence.",
    },
    {
      id: 5,
      title: "Shopping Mall - Dhanbad",
      location: "Dhanbad, Jharkhand",
      capacity: "350 kW",
      type: "Commercial",
      year: "2022",
      image: projectRooftop,
      description:
        "Rooftop solar installation powering one of the largest malls in the region.",
    },
    {
      id: 6,
      title: "Solar Farm - Muzaffarpur",
      location: "Muzaffarpur, Bihar",
      capacity: "5 MW",
      type: "Utility",
      year: "2022",
      image: projectGround,
      description:
        "Utility-scale solar farm contributing clean energy to the state grid.",
    },
    {
      id: 7,
      title: "Steel Plant - Jamshedpur",
      location: "Jamshedpur, Jharkhand",
      capacity: "3 MW",
      type: "Industrial",
      year: "2022",
      image: projectIndustrial,
      description:
        "Hybrid solar solution for a steel manufacturing plant with high energy demands.",
    },
    {
      id: 8,
      title: "IT Park - Noida",
      location: "Noida, UP",
      capacity: "1.2 MW",
      type: "Commercial",
      year: "2021",
      image: projectRooftop,
      description:
        "Multi-building solar installation for a major IT park campus.",
    },
    {
      id: 9,
      title: "Agricultural Processing - Gorakhpur",
      location: "Gorakhpur, UP",
      capacity: "600 kW",
      type: "Industrial",
      year: "2021",
      image: heroSolar,
      description:
        "Solar power for food processing and cold storage facilities.",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);

  const stats = [
    { value: "50+", label: "MW Installed" },
    { value: "100+", label: "Projects" },
    { value: "3", label: "States Covered" },
    { value: "500+", label: "Happy Clients" },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Featured <span className="text-primary">Solar Projects</span>
            </h1>
            <p className="text-lg text-secondary-foreground/80">
              Explore our portfolio of successful solar installations across
              Jharkhand, Uttar Pradesh, and Bihar. Each project represents our
              commitment to quality and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
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

      {/* Filter & Projects */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-primary-foreground/90 text-secondary"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {project.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-primary" />
                      {project.capacity}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Want Your Project Featured Here?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and start your solar
            journey today.
          </p>
          <Button
            asChild
            variant="secondary"
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link to="/calculator" className="gap-2">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Projects;
