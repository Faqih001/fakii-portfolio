import { ArrowRight, Code, Database, Brain, Shield, Award, ExternalLink, Quote, TrendingUp, TrendingDown, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import AnimatedCounter from "@/components/AnimatedCounter";

const Home = () => {
  const skills = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "React, Next.js, Node.js, Python, Flutter, TypeScript, PHP/Laravel",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Machine Learning, TensorFlow, Prompt Engineering, Workflow Automation",
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Data & Systems",
      description: "PostgreSQL, MongoDB, Power BI, DHIS2, OpenMRS, API Integration",
      color: "text-primary-light"
    },
    {
      icon: Shield,
      title: "DevOps & Security",
      description: "Git, Docker, AWS, Firebase, JWT/OAuth, Testing & QA",
      color: "text-accent"
    }
  ];

  const featuredProjects = [
    {
      title: "Guriflex – Real Estate Marketplace",
      role: "Lead Full-Stack Developer",
      category: "Real Estate",
      badge: "Featured",
      dateRange: "Mar 2023 - Aug 2023",
      challenge: "Guriflex Real Estate needed a professional digital platform to showcase properties, streamline buyer-seller interactions, and establish credibility in Kenya's competitive real estate market where most transactions still relied on manual processes and lacked transparency.",
      whatIDid: [
        "Built Next.js marketplace with advanced search and filtering capabilities for property discovery",
        "Integrated IntaSend payment gateway for secure property transactions and deposits",
        "Developed admin panel for property verification and listing management",
        "Implemented responsive design optimized for mobile property browsing experience"
      ],
      results: [
        { metric: "500+", label: "Properties Listed", icon: "up" },
        { metric: "150%", label: "Online Inquiries Increase", icon: "up" },
        { metric: "85%", label: "Customer Satisfaction", icon: "up" },
        { metric: "30%", label: "Faster Transaction Time", icon: "down" },
        { metric: "2000+", label: "Monthly Visitors", icon: "up" },
        { metric: "95%", label: "Listing Accuracy", icon: "up" }
      ],
      techStack: ["Next.js", "Tailwind CSS", "MongoDB Atlas", "IntaSend", "TypeScript"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Kulthum Limited",
      role: "Full-Stack Developer",
      category: "Corporate",
      badge: "Featured",
      dateRange: "Dec 2023 - Feb 2024",
      challenge: "Kulthum Limited's diversified operations across construction, catering, and waste management lacked a unified digital platform for client communication, project tracking, and service management, leading to operational silos and communication inefficiencies.",
      whatIDid: [
        "Built multi-service platform with dedicated dashboards for each division",
        "Developed client portal for project tracking and service requests",
        "Implemented reporting system for cross-departmental operations insights",
        "Created service management workflows optimized for diverse operations"
      ],
      results: [
        { metric: "60%", label: "Operational Efficiency Gain", icon: "up" },
        { metric: "100+", label: "Active Clients", icon: "up" },
        { metric: "3", label: "Divisions Integrated", icon: "up" },
        { metric: "45%", label: "Reduced Response Time", icon: "down" },
        { metric: "500+", label: "Projects Tracked", icon: "up" },
        { metric: "92%", label: "Client Retention Rate", icon: "up" }
      ],
      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      color: "from-blue-700 to-indigo-800"
    },
    {
      title: "Cardiff Global Limited (CGL)",
      role: "Full-Stack Developer",
      category: "Corporate",
      badge: "Featured",
      dateRange: "Sep 2023 - Nov 2023",
      challenge: "Cardiff Global Limited needed a professional digital presence to showcase their logistics and security services across East & Central Africa and establish credibility with enterprise clients in a competitive B2B market.",
      whatIDid: [
        "Developed Next.js corporate website with service showcase and project portfolio",
        "Built responsive design optimized for mobile and desktop viewing",
        "Integrated contact forms and client testimonial management system",
        "Implemented SEO optimization for improved search engine visibility"
      ],
      results: [
        { metric: "200%", label: "Web Traffic Growth", icon: "up" },
        { metric: "45+", label: "B2B Inquiries Monthly", icon: "up" },
        { metric: "90%", label: "Mobile User Satisfaction", icon: "up" },
        { metric: "65%", label: "Increase in RFQ Submissions", icon: "up" },
        { metric: "15+", label: "Countries Reached", icon: "up" },
        { metric: "88%", label: "Lead Conversion Rate", icon: "up" }
      ],
      techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      color: "from-gray-700 to-gray-900"
    },
    {
      title: "Parent Assignment Helper",
      role: "Full-Stack Developer",
      category: "Education",
      badge: "Featured",
      dateRange: "Apr 2024 - Jun 2024",
      challenge: "Parents struggled to keep track of their children's multiple assignments across different subjects, leading to missed deadlines and decreased academic performance during remote learning. The challenge was creating an intuitive system that worked for both tech-savvy and non-technical parents.",
      whatIDid: [
        "Developed assignment tracking system with Firebase real-time database for instant updates",
        "Built parent dashboard for progress monitoring and automated notifications",
        "Implemented deadline reminders and performance reporting features",
        "Created student profiles with multi-subject assignment organization"
      ],
      results: [
        { metric: "500+", label: "Families Registered", icon: "up" },
        { metric: "40%", label: "Increase in On-Time Submissions", icon: "up" },
        { metric: "85%", label: "Parent Engagement Rate", icon: "up" },
        { metric: "30%", label: "Reduction in Missed Deadlines", icon: "down" },
        { metric: "1500+", label: "Assignments Tracked", icon: "up" },
        { metric: "92%", label: "User Satisfaction Score", icon: "up" }
      ],
      techStack: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-12 md:pt-0 pb-24 md:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <Badge variant="secondary" className="inline-flex items-center space-x-2 px-4 py-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span>Available for New Opportunities</span>
                </Badge>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight">
                  <span className="block">Fakii</span>
                  <span className="block text-background/90">Mohammed</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-background/80 font-light max-w-2xl">
                  Software/Full-Stack Engineer Driving Digital Transformation Through Innovation
                </p>
                
                <p className="text-lg text-background/70 max-w-2xl">
                  Based in Kenya | 4+ years experience in FinTech, Healthcare IT, AI Solutions & Digital Systems
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" variant="secondary" className="group">
                  <Link to="/projects">
                    Explore My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/10 border-background/30 text-background hover:bg-background hover:text-primary">
                  <Link to="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>

            {/* Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-glow to-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20">
                  <img
                    src="/lovable-uploads/bbbaf73d-05a0-421e-b604-c65ba14c4f25.png"
                    alt="Fakii Mohammed - Professional Portrait"
                    className="w-80 h-96 object-cover rounded-2xl shadow-2xl filter grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-32 md:pt-24 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="mb-4">About Me</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Passionate About Building Digital Solutions That Matter
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a motivated technology professional with 4+ years of hands-on experience in software development, 
                  systems analysis, data workflows, and emerging technologies, I specialize in creating innovative digital 
                  solutions that drive real-world impact. My expertise spans full-stack development, AI tools, automation, 
                  and smart digital solutions across FinTech, healthcare IT systems, and social impact initiatives.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Experience Highlights</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Leading digital transformation initiatives with UN-HABITAT, USAID, and Argon Finance across Kenya and Uganda</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Deployed national health information systems (KHIS/DHIS2, OpenMRS, eCHIS, iHRIS) supporting healthcare delivery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Developed AliXe FinTech/Agri-trading platform recognized with Best FinTech Innovation Award</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Expertise in AI-driven solutions, workflow automation, and user-centered design for social impact</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <Button asChild variant="outline" className="group">
                  <Link to="/resume">
                    View Full Resume
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="text-center space-y-2">
                    <AnimatedCounter target={4} suffix="+" className="text-3xl font-bold text-primary" />
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </Card>
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="text-center space-y-2">
                    <AnimatedCounter target={20} suffix="+" className="text-3xl font-bold text-primary" />
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </Card>
              </div>
              <div className="space-y-6 sm:mt-12">
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="text-center space-y-2">
                    <AnimatedCounter target={10} suffix="+" className="text-3xl font-bold text-primary" />
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                </Card>
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="text-center space-y-2">
                    <AnimatedCounter target={7} className="text-3xl font-bold text-primary" />
                    <div className="text-sm text-muted-foreground">Organizations Served</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By & Stats */}
      <section className="py-16 bg-gradient-to-br from-sky-50 via-teal-50 to-sky-100 border-y border-border/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trusted by teams */}
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-6">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-medium">Guriflex</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-medium">Kulthum Limited</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-medium">Cardiff Global Limited</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-medium">UN-HABITAT</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-medium">USAID</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="border border-border/20 rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
              <AnimatedCounter target={4} suffix="+" className="text-5xl font-bold text-primary mb-2" />
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="border border-border/20 rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
              <AnimatedCounter target={20} suffix="+" className="text-5xl font-bold text-primary mb-2" />
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="border border-border/20 rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
              <AnimatedCounter target={7} className="text-5xl font-bold text-primary mb-2" />
              <div className="text-sm text-muted-foreground">Organizations Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">Technical Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable, and secure digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300`}>
                    <skill.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies & Tools Grid */}
          <Card className="p-8 shadow-elegant">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">🔧 Technologies & Tools</h3>
                <p className="text-muted-foreground">My comprehensive tech stack</p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {/* Operating Systems */}
                <img src="https://img.shields.io/badge/OS-Windows-informational?style=flat&logo=windows&logoColor=white&color=2bbc8a" alt="Windows" className="h-7" />
                <img src="https://img.shields.io/badge/OS-Linux-informational?style=flat&logo=linux&logoColor=white&color=2bbc8a" alt="Linux" className="h-7" />
                <img src="https://img.shields.io/badge/OS-Ubuntu-informational?style=flat&logo=ubuntu&logoColor=white&color=2bbc8a" alt="Ubuntu" className="h-7" />

                {/* Editors */}
                <img src="https://img.shields.io/badge/Editor-Visual_Studio_Code-informational?style=flat&logo=visualstudiocode&logoColor=white&color=2bbc8a" alt="VS Code" className="h-7" />
                
                {/* Languages */}
                <img src="https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=2bbc8a" alt="JavaScript" className="h-7" />
                <img src="https://img.shields.io/badge/Code-TypeScript-informational?style=flat&logo=typescript&logoColor=white&color=2bbc8a" alt="TypeScript" className="h-7" />
                <img src="https://img.shields.io/badge/Code-Python-informational?style=flat&logo=python&logoColor=white&color=2bbc8a" alt="Python" className="h-7" />
                <img src="https://img.shields.io/badge/Code-PHP-informational?style=flat&logo=php&logoColor=white&color=2bbc8a" alt="PHP" className="h-7" />
                <img src="https://img.shields.io/badge/Code-Dart-informational?style=flat&logo=dart&logoColor=white&color=2bbc8a" alt="Dart" className="h-7" />
                <img src="https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=html5&logoColor=white&color=2bbc8a" alt="HTML5" className="h-7" />
                <img src="https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=css3&logoColor=white&color=2bbc8a" alt="CSS3" className="h-7" />
                
                {/* Frontend Frameworks */}
                <img src="https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&logoColor=white&color=2bbc8a" alt="React" className="h-7" />
                <img src="https://img.shields.io/badge/Code-Next.js-informational?style=flat&logo=nextdotjs&logoColor=white&color=2bbc8a" alt="Next.js" className="h-7" />
                <img src="https://img.shields.io/badge/Code-Vue.js-informational?style=flat&logo=vuedotjs&logoColor=white&color=2bbc8a" alt="Vue.js" className="h-7" />
                <img src="https://img.shields.io/badge/Code-Flutter-informational?style=flat&logo=flutter&logoColor=white&color=2bbc8a" alt="Flutter" className="h-7" />
                <img src="https://img.shields.io/badge/Code-Tailwind_CSS-informational?style=flat&logo=tailwindcss&logoColor=white&color=2bbc8a" alt="Tailwind CSS" className="h-7" />
                <img src="https://img.shields.io/badge/Code-Bootstrap-informational?style=flat&logo=bootstrap&logoColor=white&color=2bbc8a" alt="Bootstrap" className="h-7" />
                <img src="https://img.shields.io/badge/Code-SASS-informational?style=flat&logo=sass&logoColor=white&color=2bbc8a" alt="SASS" className="h-7" />
                <img src="https://img.shields.io/badge/Code-Redux-informational?style=flat&logo=redux&logoColor=white&color=2bbc8a" alt="Redux" className="h-7" />
                
                {/* Backend Frameworks */}
                <img src="https://img.shields.io/badge/Code-Node.js-informational?style=flat&logo=nodedotjs&logoColor=white&color=2bbc8a" alt="Node.js" className="h-7" />
                <img src="https://img.shields.io/badge/Code-Express.js-informational?style=flat&logo=express&logoColor=white&color=2bbc8a" alt="Express.js" className="h-7" />
                <img src="https://img.shields.io/badge/Code-Laravel-informational?style=flat&logo=laravel&logoColor=white&color=2bbc8a" alt="Laravel" className="h-7" />
                <img src="https://img.shields.io/badge/Code-FastAPI-informational?style=flat&logo=fastapi&logoColor=white&color=2bbc8a" alt="FastAPI" className="h-7" />
                <img src="https://img.shields.io/badge/Code-Django-informational?style=flat&logo=django&logoColor=white&color=2bbc8a" alt="Django" className="h-7" />
                <img src="https://img.shields.io/badge/Code-GraphQL-informational?style=flat&logo=graphql&logoColor=white&color=2bbc8a" alt="GraphQL" className="h-7" />
                
                {/* Databases */}
                <img src="https://img.shields.io/badge/Tools-PostgreSQL-informational?style=flat&logo=postgresql&logoColor=white&color=2bbc8a" alt="PostgreSQL" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-MySQL-informational?style=flat&logo=mysql&logoColor=white&color=2bbc8a" alt="MySQL" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-MongoDB-informational?style=flat&logo=mongodb&logoColor=white&color=2bbc8a" alt="MongoDB" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-Supabase-informational?style=flat&logo=supabase&logoColor=white&color=2bbc8a" alt="Supabase" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-SQLite-informational?style=flat&logo=sqlite&logoColor=white&color=2bbc8a" alt="SQLite" className="h-7" />
                
                {/* Cloud & DevOps */}
                <img src="https://img.shields.io/badge/Cloud-AWS-informational?style=flat&logo=amazonaws&logoColor=white&color=2bbc8a" alt="AWS" className="h-7" />
                <img src="https://img.shields.io/badge/Cloud-Firebase-informational?style=flat&logo=firebase&logoColor=white&color=2bbc8a" alt="Firebase" className="h-7" />
                <img src="https://img.shields.io/badge/Cloud-Vercel-informational?style=flat&logo=vercel&logoColor=white&color=2bbc8a" alt="Vercel" className="h-7" />
                <img src="https://img.shields.io/badge/Cloud-DigitalOcean-informational?style=flat&logo=digitalocean&logoColor=white&color=2bbc8a" alt="DigitalOcean" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-Docker-informational?style=flat&logo=docker&logoColor=white&color=2bbc8a" alt="Docker" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=git&logoColor=white&color=2bbc8a" alt="Git" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=github&logoColor=white&color=2bbc8a" alt="GitHub" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-GitHub_Actions-informational?style=flat&logo=githubactions&logoColor=white&color=2bbc8a" alt="GitHub Actions" className="h-7" />
                
                {/* AI & ML */}
                <img src="https://img.shields.io/badge/AI-TensorFlow-informational?style=flat&logo=tensorflow&logoColor=white&color=2bbc8a" alt="TensorFlow" className="h-7" />
                <img src="https://img.shields.io/badge/AI-PyTorch-informational?style=flat&logo=pytorch&logoColor=white&color=2bbc8a" alt="PyTorch" className="h-7" />
                <img src="https://img.shields.io/badge/AI-Scikit_Learn-informational?style=flat&logo=scikitlearn&logoColor=white&color=2bbc8a" alt="Scikit-Learn" className="h-7" />
                
                {/* Design & Analytics */}
                <img src="https://img.shields.io/badge/Tools-Figma-informational?style=flat&logo=figma&logoColor=white&color=2bbc8a" alt="Figma" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-Adobe_XD-informational?style=flat&logo=adobexd&logoColor=white&color=2bbc8a" alt="Adobe XD" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-Power_BI-informational?style=flat&logo=powerbi&logoColor=white&color=2bbc8a" alt="Power BI" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-Tableau-informational?style=flat&logo=tableau&logoColor=white&color=2bbc8a" alt="Tableau" className="h-7" />
                
                {/* Testing */}
                <img src="https://img.shields.io/badge/Tools-Jest-informational?style=flat&logo=jest&logoColor=white&color=2bbc8a" alt="Jest" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-Cypress-informational?style=flat&logo=cypress&logoColor=white&color=2bbc8a" alt="Cypress" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-Postman-informational?style=flat&logo=postman&logoColor=white&color=2bbc8a" alt="Postman" className="h-7" />
                
                {/* Shell */}
                <img src="https://img.shields.io/badge/Shell-Bash-informational?style=flat&logo=gnu-bash&logoColor=white&color=2bbc8a" alt="Bash" className="h-7" />
                
                {/* Healthcare IT */}
                <img src="https://img.shields.io/badge/Healthcare-DHIS2-informational?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAERSURBVCiRpZKxSgNBEIa/vb29S0IuIAhBsRGx0MbSRrSwsbGxEVsLH8BCfANfwM5GtLKwEOy0tRQLQbAQJBaCgiBBrnLZ3Z3xck44UYP+1cD8/8zszGj0ZvKo7f4D7y2y5SN5cqJB4F6h7f4DfqWQ/WHzOugHvi+uO4+v+w+1Y6EQVTQK3SvU9fB19fF1/wEXXeDZ8nz5fpgHvi+uO4/vNdcOg1rQvULb/Qf8SiH7w+Y10A88X193Hl/3H2rHQiGqaBQ=&logoColor=white&color=2bbc8a" alt="DHIS2" className="h-7" />
                <img src="https://img.shields.io/badge/Healthcare-OpenMRS-informational?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAERSURBVCiRpZKxSgNBEIa/vb29S0IuIAhBsRGx0MbSRrSwsbGxEVsLH8BCfANfwM5GtLKwEOy0tRQLQbAQJBaCgiBBrnLZ3Z3xck44UYP+1cD8/8zszGj0ZvKo7f4D7y2y5SN5cqJB4F6h7f4DfqWQ/WHzOugHvi+uO4+v+w+1Y6EQVTQK3SvU9fB19fF1/wEXXeDZ8nz5fpgHvi+uO4/vNdcOg1rQvULb/Qf8SiH7w+Y10A88X113Hl/3H2rHQiGqaBQ=&logoColor=white&color=2bbc8a" alt="OpenMRS" className="h-7" />
                <img src="https://img.shields.io/badge/Healthcare-FHIR-informational?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAERSURBVCiRpZKxSgNBEIa/vb29S0IuIAhBsRGx0MbSRrSwsbGxEVsLH8BCfANfwM5GtLKwEOy0tRQLQbAQJBaCgiBBrnLZ3Z3xck44UYP+1cD8/8zszGj0ZvKo7f4D7y2y5SN5cqJB4F6h7f4DfqWQ/WHzOugHvi+uO4+v+w+1Y6EQVTQK3SvU9fB19fF1/wEXXeDZ8nz5fpgHvi+uO4/vNdcOg1rQvULb/Qf8SiH7w+Y10A88X113Hl/3H2rHQiGqaBQ=&logoColor=white&color=2bbc8a" alt="FHIR" className="h-7" />
                
                {/* Project Management */}
                <img src="https://img.shields.io/badge/Tools-Jira-informational?style=flat&logo=jira&logoColor=white&color=2bbc8a" alt="Jira" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-Trello-informational?style=flat&logo=trello&logoColor=white&color=2bbc8a" alt="Trello" className="h-7" />
                <img src="https://img.shields.io/badge/Tools-Asana-informational?style=flat&logo=asana&logoColor=white&color=2bbc8a" alt="Asana" className="h-7" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4 text-sm font-semibold">🏆 Award-Winning Portfolio</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Transformative Projects That <span className="text-primary">Drive Real Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proven track record of delivering enterprise-grade solutions across FinTech, Healthcare IT, and AgriTech sectors—serving 1000+ users, processing millions in transactions, and improving operational efficiency by up to 80%
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden border">
                <CardHeader className="space-y-4 pb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="destructive" className="text-xs bg-pink-600 hover:bg-pink-700 border-0">
                      {project.category}
                    </Badge>
                    <Badge variant="secondary" className="text-xs bg-primary text-primary-foreground border-0">
                      {project.badge}
                    </Badge>
                  </div>
                  
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Building className="h-3 w-3 mr-1" />
                      <span>{project.role}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{project.dateRange}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* The Challenge */}
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">THE CHALLENGE</h4>
                    <p className="text-sm text-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  
                  {/* What I Did */}
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">WHAT I DID</h4>
                    <ul className="space-y-1.5">
                      {project.whatIDid.map((item, idx) => (
                        <li key={idx} className="text-sm text-foreground flex items-start">
                          <span className="text-primary mr-2 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Results */}
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">RESULTS</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="border border-border rounded-lg p-3 text-center hover:border-primary/50 transition-colors">
                          <div className="flex items-center justify-center gap-1 text-xl font-bold text-primary mb-1">
                            {result.metric}
                            {result.icon === "up" ? (
                              <TrendingUp className="h-4 w-4 text-green-500" />
                            ) : (
                              <TrendingDown className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs hover:border-primary hover:text-primary transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">WHAT PEOPLE SAY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Client <span className="text-primary">Testimonials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 - Guriflex */}
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 space-y-6">
                <Quote className="w-12 h-12 text-primary" />
                <p className="text-muted-foreground leading-relaxed italic">
                  "Fakii built our real estate platform with exceptional attention to detail. 
                  The property listing system is intuitive, and our clients love the seamless 
                  search experience. He delivered ahead of schedule, and the platform has 
                  significantly increased our online inquiries and improved our market presence."
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    AA
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Abdirahim Abdullahi</p>
                    <p className="text-sm text-muted-foreground">CEO, Guriflex Real Estate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 - Kulthum Limited */}
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 space-y-6">
                <Quote className="w-12 h-12 text-primary" />
                <p className="text-muted-foreground leading-relaxed italic">
                  "We engaged Fakii to develop our corporate platform and internal dashboards. 
                  His technical expertise and understanding of our diverse operations—from 
                  construction to waste management—was impressive. The system has streamlined 
                  workflows and improved interdepartmental communication across our teams."
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    AS
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ali Said Ali</p>
                    <p className="text-sm text-muted-foreground">CEO, Kulthum Limited</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 - Cardiff Global Limited */}
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 space-y-6">
                <Quote className="w-12 h-12 text-primary" />
                <p className="text-muted-foreground leading-relaxed italic">
                  "Fakii transformed our digital presence across East & Central Africa. 
                  He built a robust website that showcases our logistics and security services 
                  professionally. His work ethic, responsiveness, and ability to deliver 
                  complex solutions on time made him an invaluable partner for our growth."
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    AM
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ahmed Mohamed</p>
                    <p className="text-sm text-muted-foreground">CEO, Cardiff Global Limited</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Build Something Amazing Together?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative projects that make a real difference. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/lab-challenges">
                  Explore Lab Challenges
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;