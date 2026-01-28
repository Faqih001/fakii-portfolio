import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Code, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MamaShub - Maternal Health Platform (MOH 216)",
      description: "Maternal and child health platform built on Google Open Health Stack to digitize the Mother-Child Booklet (MOH 216), supporting ANC/PNC data capture, reporting, and continuity of care.",
      technologies: ["React", "OpenMRS", "FHIR", "Node.js", "Healthcare IT"],
      features: [
        "Digital Mother-Child Booklet",
        "ANC/PNC data capture",
        "Patient record management",
        "Reporting and analytics",
        "Continuity of care tracking",
        "FHIR standards compliance"
      ],
      category: "Healthcare",
      github: "https://github.com/Faqih001/mamashub-web",
      icon: <Shield className="w-6 h-6" />,
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 2,
      title: "AliXe FinTech/Agri-Trading Application",
      description: "Award-winning FinTech/Agri-trading platform with user-centered workflows, secure transactions, and real-time data capture for financial inclusion.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "WebSocket"],
      features: [
        "User authentication & authorization",
        "Secure financial transactions",
        "Real-time analytics dashboard",
        "Payment gateway integration",
        "Agri-trading marketplace",
        "Mobile-responsive design"
      ],
      award: "Best FinTech Innovation Award",
      category: "FinTech",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "KenyaEMR / OpenMRS 3.x (O3)",
      description: "Contributions to KenyaEMR/OpenMRS supporting national health information systems, interoperability, testing, and deployments across healthcare facilities.",
      technologies: ["OpenMRS", "React", "APIs", "Web Services", "Jira", "Docker"],
      features: [
        "Hospital system integration",
        "Secure data exchange protocols",
        "API validation and testing",
        "User training programs",
        "Standard Operating Procedures",
        "Bug tracking and resolution"
      ],
      category: "Healthcare",
      liveUrl: "https://uat.kenyahmis.org/openmrs/spa/login",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      title: "eCHIS - Community Health Information System",
      description: "Community health data integration project supporting frontline health workers and national reporting with real-time data capture.",
      technologies: ["React", "Node.js", "DHIS2", "APIs", "Mobile Integration"],
      features: [
        "Community health worker support",
        "Real-time data capture",
        "National reporting integration",
        "Mobile-first design",
        "Offline functionality",
        "Data synchronization"
      ],
      category: "Healthcare",
      github: "https://github.com/Faqih001/echis-2.0-integration",
      icon: <Shield className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 5,
      title: "iHRIS Kenya",
      description: "Human Resource Information System for health workforce management, deployment tracking, and reporting across healthcare facilities.",
      technologies: ["Vue.js", "Node.js", "FHIR", "MongoDB", "APIs"],
      features: [
        "Health workforce management",
        "Deployment tracking",
        "Training management",
        "Performance reporting",
        "Certificate management",
        "FHIR integration"
      ],
      category: "Healthcare",
      liveUrl: "https://v5-demo.ihris.org/",
      github: "https://github.com/Faqih001/iHRIS-Kenya",
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      title: "DamuKE - National Blood Management",
      description: "National blood donation and transfusion management platform supporting donor-to-recipient workflows and inventory tracking.",
      technologies: ["React", "Laravel", "MySQL", "SMS Integration"],
      features: [
        "Donor registration & management",
        "Blood inventory tracking",
        "Transfusion workflow",
        "SMS notifications",
        "Hospital integration",
        "Reporting dashboard"
      ],
      category: "Healthcare",
      liveUrl: "https://damuke.health.go.ke/",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-600"
    },
    {
      id: 7,
      title: "Agri-Senti WebApp",
      description: "Agri-tech platform connecting farmers with buyers to optimize supply chains, pricing transparency, and market access.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Maps API"],
      features: [
        "Farmer-buyer marketplace",
        "Real-time pricing",
        "Supply chain optimization",
        "Market analytics",
        "Geo-location services",
        "Mobile responsive"
      ],
      category: "AgriTech",
      liveUrl: "https://nakuru-agri-senti-webapp.vercel.app/landing",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-600 to-lime-600"
    },
    {
      id: 8,
      title: "Project Management System (PMS)",
      description: "Enterprise-grade workflow and collaboration platform with task dashboards, role-based access control, audit logs, and reporting.",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "WebSocket"],
      features: [
        "Task management dashboard",
        "Role-based access control",
        "Audit logs & tracking",
        "Real-time collaboration",
        "Reporting & analytics",
        "Project timeline views"
      ],
      category: "Enterprise",
      liveUrl: "https://argon-pms.vercel.app/",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 9,
      title: "Jira Vision Dashboard",
      description: "Real-time task and workflow management dashboard with analytics, performance metrics, and data visualization.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Jira API", "Charts.js"],
      features: [
        "Real-time task tracking",
        "Performance metrics",
        "Data visualization",
        "Sprint analytics",
        "Team collaboration",
        "Custom reporting"
      ],
      category: "Enterprise",
      liveUrl: "https://v0-jiravision-dashboard.vercel.app/",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 10,
      title: "Medicare254",
      description: "Digital healthcare platform for secure patient record management with role-based access control and compliance-ready workflows.",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "HIPAA Compliance"],
      features: [
        "Patient record management",
        "Role-based access control",
        "Appointment scheduling",
        "Prescription management",
        "Billing integration",
        "HIPAA compliance"
      ],
      category: "Healthcare",
      liveUrl: "https://medicare254.vercel.app/",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-teal-600"
    },
    {
      id: 11,
      title: "Ovarian Cyst ML Diagnostic API",
      description: "Machine learning–powered health diagnostics solution with data preprocessing, inference pipelines, and result visualization.",
      technologies: ["Python", "TensorFlow", "Streamlit", "Scikit-learn", "Pandas"],
      features: [
        "ML-powered diagnostics",
        "Data preprocessing",
        "Inference pipelines",
        "Result visualization",
        "Interactive UI",
        "Model evaluation"
      ],
      category: "AI/ML",
      liveUrl: "https://ovarian-cyst-ml-api.streamlit.app/",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 12,
      title: "Mental Health Portal – Kenya",
      description: "Public digital platform providing mental health information, resources, and access to services for Kenyan citizens.",
      technologies: ["React", "Laravel", "MySQL", "CMS Integration"],
      features: [
        "Mental health resources",
        "Service directory",
        "Crisis helpline",
        "Information articles",
        "Professional directory",
        "Appointment booking"
      ],
      category: "Healthcare",
      liveUrl: "https://mental.health.go.ke/",
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 13,
      title: "RUSH (Akvo RTMIS)",
      description: "Real-time monitoring information system for water, sanitation, hygiene, and public infrastructure projects.",
      technologies: ["React", "Python", "PostgreSQL", "Django", "Maps API"],
      features: [
        "Real-time monitoring",
        "Infrastructure tracking",
        "Data collection",
        "Geographic visualization",
        "Reporting dashboard",
        "Mobile data capture"
      ],
      category: "Public Sector",
      liveUrl: "https://rtmis.akvo.org/",
      icon: <Database className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 14,
      title: "Web Capture Tool (PWA)",
      description: "Offline-friendly progressive web app for structured data capture in field operations with sync capabilities.",
      technologies: ["React", "PWA", "IndexedDB", "Service Workers", "Sync API"],
      features: [
        "Offline data capture",
        "Progressive web app",
        "Data synchronization",
        "Form validation",
        "Photo capture",
        "GPS tagging"
      ],
      category: "Tools",
      liveUrl: "https://structure-web-capture-tool.vercel.app/",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 15,
      title: "Parent Assignment Helper",
      description: "Education support platform for parents and learners with assignment tracking and progress monitoring.",
      technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      features: [
        "Assignment tracking",
        "Progress monitoring",
        "Parent dashboard",
        "Student profiles",
        "Deadline reminders",
        "Performance reports"
      ],
      category: "Education",
      liveUrl: "https://parent-assignment-helper.vercel.app/",
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 16,
      title: "AmiTech Donation Platform",
      description: "Secure donation platform with real-time Mpesa payments, transaction validation, and donor tracking.",
      technologies: ["React", "Node.js", "Mpesa API", "MongoDB", "Express"],
      features: [
        "Mpesa integration",
        "Real-time payments",
        "Transaction validation",
        "Donor tracking",
        "Receipt generation",
        "Admin dashboard"
      ],
      category: "FinTech",
      liveUrl: "https://amitech-donations.onrender.com/",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 17,
      title: "CryptoBuddy – Analytics Platform",
      description: "Cryptocurrency analytics and portfolio tracking system with dashboards and data aggregation from multiple exchanges.",
      technologies: ["Python", "Streamlit", "Pandas", "APIs", "Charts"],
      features: [
        "Portfolio tracking",
        "Price analytics",
        "Market trends",
        "Exchange integration",
        "Real-time updates",
        "Performance charts"
      ],
      category: "FinTech",
      liveUrl: "https://cryptobuddy254.streamlit.app/",
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 18,
      title: "Guriflex – Real Estate Marketplace",
      description: "Real estate marketplace for buying, renting, and selling properties in Kenya with verified listings and secure payments.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB Atlas", "IntaSend", "TypeScript"],
      features: [
        "Property listings",
        "Advanced search filters",
        "User dashboard",
        "Admin management panel",
        "Secure payment integration",
        "Property verification"
      ],
      category: "Real Estate",
      liveUrl: "https://guriflex.co.ke/",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 19,
      title: "Cardiff Global Limited (CGL)",
      description: "Corporate website supporting logistics, security, and infrastructure services across East & Central Africa.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      features: [
        "Service showcase",
        "Project portfolio",
        "Contact forms",
        "Company information",
        "Client testimonials",
        "Responsive design"
      ],
      category: "Corporate",
      liveUrl: "https://www.cgl-support.com/",
      icon: <Database className="w-6 h-6" />,
      color: "from-gray-700 to-gray-900"
    },
    {
      id: 20,
      title: "Kulthum Limited",
      description: "Corporate platform and dashboards for diversified operations including construction, catering, and waste management.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      features: [
        "Service management",
        "Operations dashboard",
        "Client portal",
        "Project tracking",
        "Reporting system",
        "Multi-service platform"
      ],
      category: "Corporate",
      liveUrl: "https://www.kulthumlimited.co.ke/",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-700 to-indigo-800"
    }
  ];

  const categories = ["All", "Healthcare", "FinTech", "AgriTech", "Enterprise", "AI/ML", "Public Sector", "Education", "Tools", "Real Estate", "Corporate"];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  // Filtered projects based on selected category
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions across FinTech, Healthcare IT, and Real Estate. 
            Each project demonstrates my commitment to building scalable, secure, and user-centric applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={"hover-scale" + (selectedCategory === category ? " ring-2 ring-primary" : "")}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group hover-scale transition-all duration-300 shadow-card hover:shadow-glow border-0 bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
                {project.award && (
                  <Badge variant="default" className="w-fit mt-2">
                    🏆 {project.award}
                  </Badge>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-medium text-sm mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-medium text-sm mb-3 text-foreground">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  {project.liveUrl && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Live
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {!project.liveUrl && !project.github && (
                    <Button size="sm" variant="outline" className="flex-1" disabled>
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto bg-gradient-primary text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
              <p className="mb-6 opacity-90">
                I'm always excited to work on innovative projects and contribute to open-source initiatives.
                Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://github.com/Faqih001" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub Profile
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <Link to="/contact">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;