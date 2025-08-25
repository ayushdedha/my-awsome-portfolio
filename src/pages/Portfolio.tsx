import { useState, useEffect } from "react";
import { Menu, X, Download, ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import profileImage from "@/assets/profile-hero.jpg";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "services", "portfolio", "contact"];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "PinkUnicornAlgorithms",
      period: "Jan 2025 - July 2025",
      description: "Developed SaaS platforms and desktop security software (DBS, Parental Control System). Built responsive web portals, designed UI/UX with Figma, delivered client-focused solutions."
    },
    {
      title: "AI & Humanoids Intern",
      company: "KMicro Tech, Inc.",
      period: "May 2024 - Oct 2024",
      description: "Worked on Figma layouts, Wix Studio websites, market research on AI video generation."
    }
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "Git & GitHub", level: 90 }
  ];

  const projects = [
    {
      title: "Data Block Solution (DBS)",
      description: "Cybersecurity system app + web portal to block USB, browser upload, clipboard, printing, etc., ensuring data security for organizations.",
      tech: ["C#", ".NET", "React", "Node.js"],
      image: "/api/placeholder/400/250"
    },
    {
      title: "Real Estate Platform",
      description: "Fully functional real-estate platform with backend and admin features.",
      tech: ["React", "Node.js", "MySQL", "Express.js"],
      image: "/api/placeholder/400/250"
    },
    {
      title: "Freelance Web Projects",
      description: "Various websites developed with both frontend and backend implementation.",
      tech: ["React", "JavaScript", "CSS", "Node.js"],
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient">AC</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src={profileImage}
                alt="Ayush Choudhary"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 hero-float"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Ayush Choudhary</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Building modern, scalable, and secure web solutions with a passion for clean code and exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollTo("portfolio")}
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                size="lg"
              >
                View Portfolio
              </Button>
              <Button
                onClick={() => scrollTo("contact")}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate Full Stack Web Developer currently pursuing my B.Tech at Amity University Noida (Batch 2021–2025). 
                I specialize in building web-based projects with expertise in both frontend and backend technologies.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With experience in modern frameworks and technologies, I create scalable, secure, and user-friendly web applications 
                that solve real-world problems.
              </p>
              <Button className="bg-gradient-to-r from-primary to-primary-glow">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="absolute left-2 top-4 w-0.5 h-16 bg-border"></div>
                  <h4 className="font-semibold">B.Tech - Amity University Noida</h4>
                  <p className="text-muted-foreground">2021 - 2025 | CGPA: 8.19</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="absolute left-2 top-4 w-0.5 h-16 bg-border"></div>
                  <h4 className="font-semibold">12th - Bal Bhavan Public School</h4>
                  <p className="text-muted-foreground">2020 | 84.6%</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <h4 className="font-semibold">10th - Bal Bhavan Public School</h4>
                  <p className="text-muted-foreground">2018 | 82.6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line"></div>
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-primary mb-2">{exp.title}</h3>
                        <h4 className="text-lg font-medium mb-2">{exp.company}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Skills & Expertise</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8">Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["React", "Node.js", "TypeScript", "JavaScript", "Tailwind CSS", "Express.js", "MySQL", "Git", "Figma", "C#", ".NET"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card border border-primary/20 rounded-lg text-sm font-medium hover:border-primary/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-6">
                  <ExternalLink className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Full Stack Development</h3>
                <p className="text-muted-foreground">Complete web application development from frontend to backend with modern technologies.</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Github className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
                <p className="text-muted-foreground">Modern and intuitive user interface design using Figma and latest design principles.</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Responsive Development</h3>
                <p className="text-muted-foreground">Scalable and responsive websites that work perfectly on all devices and screen sizes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <div className="aspect-video bg-muted"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're looking for a full-stack developer or need help with a specific project, 
                let's discuss how we can work together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>ayush@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 123456789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span>linkedin.com/in/ayush-choudhary</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-primary" />
                  <span>github.com/ayush</span>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Your Email" type="email" />
                  </div>
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" rows={5} />
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-glow">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Ayush Choudhary. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;