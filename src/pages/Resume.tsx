import React from "react";
import { Download, Calendar, MapPin, Award, GraduationCap, Briefcase, Code, CheckCircle, User, Globe, Heart, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Resume = () => {
  const personalInfo = {
    name: "Fakii Mohammed Mwapore",
    title: "Full-Stack Developer & AI/ML Specialist",
    passport: "AK1835541",
    id: "36784658",
    phone: "(+254) 741140250",
    email: "fakiiahmad001@gmail.com",
    website: "https://fakii-portfolio-g5p1.vercel.app",
    linkedin: "Fakii Mohammed",
    address: "Kenyatta National Hospital, 20723-00202, Nairobi, Kenya",
    nationality: "Kenyan",
    gender: "Male",
    location: "Nairobi, Kenya"
  };

  const about = `Results-driven Full-Stack Developer and AI/ML Specialist with 4+ years of experience delivering scalable digital solutions for public sector, healthcare, fintech, and international development organizations (USAID, UN-Habitat, IEBC). 

Expert in architecting production-grade applications using React, Next.js, TypeScript, Node.js, and healthcare standards (FHIR, OpenMRS, DHIS2). Proven track record of improving efficiency, data accuracy, and user adoption through innovative, user-centered systems.`;

  const achievements = [
    {
      title: "Digital Health Transformation",
      description: "Successfully deployed and integrated national health information systems (KHIS/DHIS2, OpenMRS, eCHIS, iHRIS) supporting healthcare delivery across multiple facilities",
      year: "2024-2025"
    },
    {
      title: "Best FinTech Innovation Award",
      description: "AliXe FinTech/Agri-Trading Application - Recognized for outstanding innovation in financial technology and agricultural trading",
      year: "2023"
    },
    {
      title: "International Collaboration Excellence",
      description: "Led cross-functional teams across Kenya, Uganda, and international organizations delivering impactful digital solutions",
      year: "2022-2025"
    },
    {
      title: "Open Source Contributions",
      description: "Active contributor to healthcare IT projects including MamaShub, KenyaEMR, and iHRIS platforms",
      year: "2023-2025"
    }
  ];

  const workExperience = [
    {
      title: "Full-Stack Developer & IT Consultant",
      company: "Self-Employed (Contract Engagements)",
      location: "Nairobi, Kenya",
      duration: "May 2026 - Present",
      type: "Contract / Remote",
      responsibilities: [
        "Architected and delivered scalable full-stack platforms using Next.js, TypeScript, and Prisma, improving operational efficiency by 60% for multiple clients",
        "Led digital transformation initiatives implementing cloud architecture (AWS/Azure) and CI/CD pipelines, achieving 99%+ uptime",
        "Developed secure SaaS applications with role-based access, subscription management, and analytics dashboards",
        "Produced comprehensive SOPs, user guides, and training materials for seamless knowledge transfer"
      ],
      technologies: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Prisma", "AWS", "Azure"]
    },
    {
      title: "ICT Clerk - Voter Registration",
      company: "Independent Electoral and Boundaries Commission (IEBC)",
      location: "Mombasa, Kenya",
      duration: "April 2026 - May 2026",
      type: "Contract / On-site",
      responsibilities: [
        "Managed KIEMS kits and ICT infrastructure supporting seamless voter registration with zero downtime",
        "Resolved 100% of technical incidents same-day while ensuring strict data security and compliance",
        "Trained registration officials on digital tools, improving operational efficiency"
      ],
      technologies: ["KIEMS Kits", "Electoral Systems", "Data Security"]
    },
    {
      title: "Full-Stack Developer & Digital Transformation Consultant",
      company: "UN-Habitat",
      location: "Nairobi, Kenya",
      duration: "July 2025 - October 2025",
      type: "Remote",
      responsibilities: [
        "Designed and implemented responsive web applications with RESTful API integrations accelerating reporting cycles",
        "Enhanced platform accessibility (WCAG 2.1 AA) and mobile-first design for broader reach",
        "Conducted comprehensive testing and produced technical documentation for long-term governance"
      ],
      technologies: ["React", "Next.js", "TypeScript", "REST APIs", "Cypress"]
    },
    {
      title: "Full-Stack Developer (FinTech)",
      company: "Argon Finance Limited",
      location: "Kampala, Uganda (Remote)",
      duration: "February 2025 - June 2025",
      type: "Remote",
      responsibilities: [
        "Redesigned platform architecture reducing page load time by 40% and supporting 1,000+ users",
        "Built secure financial workflows while applying OWASP best practices",
        "Established CI/CD pipelines and reusable component libraries"
      ],
      technologies: ["React", "Next.js", "FinTech", "OWASP"]
    },
    {
      title: "Full-Stack Developer & Integration Engineer",
      company: "USAID HealthIT Programme",
      location: "Nakuru, Kenya",
      duration: "February 2024 - January 2025",
      type: "Remote/Hybrid",
      responsibilities: [
        "Implemented FHIR/OpenHIE interoperability across KenyaEMR, DHIS2, eCHIS, and iHRIS reducing duplicate data entry",
        "Enhanced KenyaEMR frontend and supported successful multi-county rollouts with zero critical defects",
        "Led user training and developed SOPs adopted by Ministry of Health"
      ],
      technologies: ["OpenMRS", "DHIS2", "FHIR", "React", "Healthcare IT"]
    },
    {
      title: "Lead Full-Stack Developer & Innovator",
      company: "CRIW (Centre for Research, Innovation & Welfare)",
      location: "Nakuru, Kenya",
      duration: "August 2023 - November 2023",
      type: "Contract",
      responsibilities: [
        "Delivered award-winning AliXe FinTech platform from concept to production",
        "Improved platform usability by 35% through iterative UAT and stakeholder collaboration"
      ],
      technologies: ["React", "Node.js", "MongoDB", "FinTech"]
    },
    {
      title: "IT Support / Systems Engineer",
      company: "Mombasa Water Supply & Sanitation Company",
      location: "Mombasa, Kenya",
      duration: "September 2021 - November 2021",
      type: "On-site",
      responsibilities: [
        "Provided comprehensive hardware/software support and developed SOPs to improve operational efficiency",
        "Conducted system audits and supported successful system rollouts"
      ],
      technologies: ["IT Support", "System Administration"]
    }
  ];

  const education = [
    {
      degree: "Software Engineering with AI Specialisation",
      institution: "Power Learn Project",
      location: "Nairobi, Kenya",
      duration: "Jan 2025 - Sept 2025",
      details: "Comprehensive full-stack development with AI integration, modern web technologies, databases, and scalable system architecture",
      eqf: "Level 5"
    },
    {
      degree: "Bachelor of Information Technology",
      institution: "Kabarak University",
      location: "Nakuru, Kenya",
      duration: "2018 - 2021",
      details: "Software Development, Database Systems, Networking, Cybersecurity, Web Technologies, and Agile Project Management",
      eqf: "Level 6"
    },
    {
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      institution: "Moi Forces Academy",
      location: "Mombasa, Kenya",
      duration: "2014 - 2017",
      details: "Mathematics, Sciences, Computer Studies, and Business Studies",
      eqf: "Level 3"
    }
  ];

  const certifications = [
    "AI Fundamentals Certificate - IBM (2026)",
    "Software Engineering with AI Specialisation - Power Learn Project (2025)",
    "Introduction to ITIL® v4 - Simplilearn (2025)",
    "Cybersecurity Essentials - Cisco Networking Academy (2025)",
    "FinTech Innovation Certificate - Kabarak University (2023)",
    "Figma UI/UX Design Professional Certificate - Udemy (2024)",
    "React JS - Udemy (2022)",
    "Certified ScrumMaster (CSM) – Scrum Alliance",
    "Professional Scrum Master I (PSM I) – Scrum.org",
    "DHIS2 Academy Certificates (Fundamentals & Analytics)",
    "Google UX Design Professional Certificate – Coursera",
    "Microsoft Power BI Data Analyst Certification"
  ];

  const technicalSkills = {
    "Frontend Development": ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Vue.js", "HTML5", "CSS3", "Figma", "Chart.js"],
    "Backend Development": ["Node.js", "Express.js", "Python", "PHP (Laravel)", "FastAPI", "Django", "RESTful APIs"],
    "Databases & Analytics": ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "DHIS2", "Power BI", "Prisma", "Pandas"],
    "Healthcare Systems": ["OpenMRS", "KenyaEMR", "eCHIS", "iHRIS", "FHIR", "OpenHIE", "KHIS/DHIS2", "MOH 216"],
    "AI/ML & Data Science": ["TensorFlow", "Scikit-learn", "Google Gemini", "Prompt Engineering", "Streamlit"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "GitHub Actions", "CI/CD", "Vercel", "Netlify"],
    "Security & Quality": ["OWASP", "JWT", "WCAG Accessibility", "Jest", "Cypress", "ITIL v4"]
  };

  const softSkills = [
    "Stakeholder Management & Requirements Analysis", "Agile/Scrum/Kanban Methodologies", "Technical Documentation & SOP Development",
    "User Training & Change Management", "Cross-Functional Team Collaboration", "Problem Solving & Systems Thinking",
    "Digital Transformation Strategy", "Client Advisory & Consulting", "Accessibility (WCAG) & Inclusive Design",
    "Remote & Distributed Team Leadership", "Business Analysis & Process Optimization", "Risk Management & Cybersecurity Awareness",
    "Mentorship & Knowledge Transfer", "Public Sector Project Coordination", "Interoperability & Systems Integration",
    "User-Centered Design Thinking", "Performance Monitoring & KPI Tracking", "Vendor & Donor Coordination",
    "Adaptability in Fast-Paced Environments", "Continuous Learning & Technology Adoption"
  ];

  // Featured Projects Preview (8 projects)
  const featuredProjects = [
    { title: "MamaShub - Maternal Health Platform", category: "Healthcare", description: "National MOH 216 digitization with OpenMRS & FHIR", tech: "React, OpenMRS, FHIR" },
    { title: "AliXe FinTech Platform", category: "FinTech", description: "Award-winning restaurant discovery & booking system", tech: "React, Node.js, MongoDB" },
    { title: "KenyaEMR / OpenMRS 3.x", category: "Healthcare", description: "National health system integrations & enhancements", tech: "React, FHIR, OpenMRS" },
    { title: "Digi Farms - Digital Agriculture", category: "AgriTech", description: "AI-powered farm management & marketplace", tech: "Next.js, TypeScript, Prisma" },
    { title: "KiiBridge AI Interview Platform", category: "AI/ML", description: "Gemini-powered mock interview simulator", tech: "Next.js, Gemini AI" },
    { title: "Project Management System (PMS)", category: "Enterprise", description: "Enterprise-grade task tracking with RBAC", tech: "React, TypeScript, PostgreSQL" },
    { title: "KiiBridge Stock Tracker", category: "FinTech", description: "Real-time AI-powered stock intelligence", tech: "Next.js, Finnhub, Gemini" },
    { title: "eCHIS - Community Health System", category: "Healthcare", description: "Offline-first community health platform", tech: "React, Node.js, DHIS2" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12 md:py-20 border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                <Badge variant="outline">Full-Stack Developer</Badge>
                <Badge variant="secondary">AI/ML Specialist</Badge>
                <Badge variant="secondary">Digital Health Expert</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-2">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium">{personalInfo.title}</p>
            </div>

            <Button size="lg" className="group w-full sm:w-auto mx-auto md:mx-0" asChild>
              <a href="https://drive.google.com/file/d/1ysqaokWIvzC1akSzx47VFg4lSUncmIPa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
                Download Full CV (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-10 overflow-x-auto">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* About */}
          <TabsContent value="about" className="space-y-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <User className="h-6 w-6" /> Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none text-lg leading-relaxed">
                {about}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experience */}
          <TabsContent value="experience" className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-7 w-7 text-primary" />
              <h2 className="text-3xl font-bold">Professional Experience</h2>
            </div>
            {workExperience.map((job, index) => (
              <Card key={index} className="shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary mt-1">{job.company}</CardDescription>
                    </div>
                    <div className="text-right space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center justify-end gap-2"><Calendar className="h-4 w-4" /> {job.duration}</div>
                      <div className="flex items-center justify-end gap-2"><MapPin className="h-4 w-4" /> {job.location}</div>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Projects Tab with Preview */}
          <TabsContent value="projects" className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Code className="h-7 w-7 text-primary" />
                <h2 className="text-3xl font-bold">Featured Projects</h2>
              </div>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to="/projects">
                  View All Projects <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs whitespace-nowrap">{project.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm mb-6 flex-1">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <p className="text-xs text-muted-foreground mb-4">{project.tech}</p>
                      <Button size="sm" variant="outline" className="w-full" asChild>
                        <Link to="/projects">View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button size="lg" asChild>
                <Link to="/projects">
                  Explore All Projects →
                </Link>
              </Button>
            </div>
          </TabsContent>

          {/* Skills */}
          <TabsContent value="skills" className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code className="h-7 w-7 text-primary" />
                <h2 className="text-3xl font-bold">Technical Skills</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle>{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-sm">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6" /> Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {softSkills.map((skill, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-px flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Education + Achievements */}
          <TabsContent value="education" className="space-y-12">
            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-7 w-7 text-primary" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              {education.map((edu, i) => (
                <Card key={i} className="mb-8">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription className="text-primary text-lg">{edu.institution}</CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground text-right">
                        {edu.duration}<br />{edu.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.details}</p>
                    <Badge className="mt-4" variant="secondary">{edu.eqf}</Badge>
                  </CardContent>
                </Card>
              ))}
            </section>

            {/* Key Achievements */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <Award className="h-7 w-7 text-primary" />
                <h2 className="text-3xl font-bold">Key Achievements</h2>
              </div>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="shadow-md hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <Badge variant="outline">{achievement.year}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {achievement.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-7 w-7 text-primary" />
                <h2 className="text-3xl font-bold">Certifications</h2>
              </div>
              <Card>
                <CardContent className="pt-8">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-5 text-sm">
                    {certifications.map((cert, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;