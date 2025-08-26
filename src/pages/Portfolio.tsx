import { useState, useEffect, useRef } from "react";
import { Menu, X, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import profileImage from "@/assets/9.jpg";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_hgh6yz4',
        'template_rodp4jz',
        formRef.current,
        'e-DOxvZ0az-4gHjIv'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      formRef.current.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      title: "Modern Company Website & Branding",
      company: `<>CodeWeave`,
      period: "September 2025",
      description: "Designed and developed a modern, responsive company website for CodeWeave, focusing on clean UI and smooth user experience. Alongside the website, I also created the company’s logo, ensuring consistent branding and a professional identity across digital platforms"
    },
    {
      title: "Real Estate Property Management Website",
      company: "Property Shell",
      period: "July 2025 - August 2025",
      description: "Developed a full-stack real estate platform with an interactive frontend and a secure backend. The website allows users to browse, search, and filter property listings with ease, while providing an efficient backend for managing listings, user data, and transactions."
    },
    {
      title: "Software Engineer",
      company: "PinkUnicornAlgorithms",
      period: "Jan 2025 - June 2025",
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
      // video: "/src/assets/dbs1.mp4",
      image: "/src/assets/dbs.png",
      code: "https://github.com/harshitpanwar1327/Diffrent-Portal"
    },
    {
      title: "Real Estate Platform",
      description: "Fully functional real-estate platform with backend and admin features.",
      tech: ["React", "Node.js", "MySQL", "Express.js"],
      // video: "/src/assets/estate.mp4",
      image: "/src/assets/real-estate.png",
      code: "https://github.com/harshitpanwar1327/Real-Estate"
    },
    {
      title: "Freelance Web Projects",
      description: "Various websites developed with both frontend and backend implementation.",
      tech: ["React", "JavaScript", "CSS", "Node.js"],
      // video: "/src/assets/freelance.mp4",
      image: "/src/assets/freelancer.png"
    }
  ];

  // Particle system for background
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDuration = Math.random() * 10 + 10 + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      const particlesContainer = document.querySelector('.particles');
      if (particlesContainer) {
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
          particle.remove();
        }, 20000);
      }
    };

    const interval = setInterval(createParticle, 300);
    
    // Create initial particles
    for (let i = 0; i < 50; i++) {
      setTimeout(createParticle, i * 100);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-gradient">AC</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg glass"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 glass rounded-lg p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left py-3 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
          <div className="particles"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Profile Section */}
            <div className="mb-12 hero-slide-up">
              <div className="relative inline-block">
                <img
                  src={profileImage}
                  alt="Ayush Choudhary"
                  className="w-56 h-56 md:w-64 md:h-64 rounded-full mx-auto object-cover border-4 border-primary/30 hero-float hero-pulse"
                />
                <div className="absolute -bottom-4 -right-4 glass rounded-full p-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              <div className="hero-slide-up-delay-1">
                <h1 className="text-6xl md:text-8xl font-bold mb-4">
                  <span className="text-gradient">Ayush</span>
                  <br />
                  <span className="text-gradient">Choudhary</span>
                </h1>
              </div>

              <div className="hero-slide-up-delay-2">
                <div className="glass rounded-2xl p-6 max-w-2xl mx-auto mb-8">
                  <h2 className="text-2xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    Full Stack Web Developer
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Crafting digital experiences with modern technologies. 
                    Specializing in scalable web solutions that bridge creativity and functionality.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="hero-slide-up-delay-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
                  <div className="glass rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">1+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">8.19</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Location and Availability */}
              <div className="hero-slide-up-delay-2">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Noida, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Available for freelance</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hero-slide-up-delay-3">
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Button
                    onClick={() => scrollTo("portfolio")}
                    size="lg"
                    className="btn-modern bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View My Work
                  </Button>
                  <Button
                    onClick={() => scrollTo("contact")}
                    variant="outline"
                    size="lg"
                    className="btn-modern border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl glass"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Let's Connect
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="hero-slide-up-delay-3">
                <div className="flex justify-center space-x-6">
                  <a href="https://github.com/ayushdedha" className="p-3 glass rounded-xl hover:bg-primary/10 transition-all duration-300 group">
                    <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  
                  <div className="p-3 glass rounded-xl hover:bg-primary/10 transition-all duration-300 group" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="ayush-choudhary-4698b6259" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/ayush-choudhary-4698b6259?trk=profile-badge"><Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" /></a></div>
                  
                  <a href="mailto:ayushdedha23@gmail.com" className="p-3 glass rounded-xl hover:bg-primary/10 transition-all duration-300 group">
                    <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>

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
                I'm a passionate Full Stack Web Developer. 
                I specialize in building web-based projects with expertise in both frontend and backend technologies.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With experience in modern frameworks and technologies, I create scalable, secure, and user-friendly web applications 
                that solve real-world problems.
              </p>
              <Button className="btn-modern bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl" asChild>
                <a href="/resume.pdf" download="Ayush_Choudhary_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
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
                <div className="aspect-video bg-muted">{project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    controls
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.image || "/fallback.png"} // fallback image
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}</div>
                <CardContent className="p-6 flex-col">
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
                  <div className="flex">
                    <Button size="sm" variant="outline" className="flex-1 btn-modern border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8 font-semibold glass" onClick={() => project.code && window.open(project.code, "_blank")} disabled={!project.code}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
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
                  <span>ayushdedha23@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 9311201990</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span>www.linkedin.com/in/ayush-choudhary-4698b6259</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-primary" />
                  <span>https://github.com/ayushdedha</span>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      name="name"
                      placeholder="Your Name" 
                      required 
                    />
                    <Input 
                      name="email"
                      placeholder="Your Email" 
                      type="email" 
                      required 
                    />
                  </div>
                  <Input 
                    name="subject"
                    placeholder="Subject" 
                    required 
                  />
                  <Textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows={5} 
                    required 
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary-glow"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
            © 2025 Ayush Choudhary. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;