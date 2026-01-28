import { Download, Calendar, MapPin, Award, GraduationCap, Briefcase, Code, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  const workExperience = [
    {
      title: "Full Stack Developer/Data Analyst",
      company: "Freelance - Remote",
      location: "Kenya",
      duration: "October 2025 - Present",
      type: "Remote",
      responsibilities: [
        "Design and improve digital systems for project management, data tracking, and workflow automation using AI tools",
        "Collaborate with teams to identify challenges and translate needs into practical solutions",
        "Analyze and organize data to generate actionable insights and track key outcomes",
        "Build accessible dashboards and interfaces that make information easy to understand",
        "Create user guides, SOPs, and training materials ensuring reliable, user-friendly solutions",
        "Optimize processes for efficiency and usability through testing and feedback"
      ],
      technologies: ["AI Tools", "Google Workspace", "React", "Node.js", "Python", "Data Analytics", "Dashboard Development"]
    },
    {
      title: "Communication/Full Stack Developer",
      company: "UN-HABITAT - PLGS",
      location: "Kenya",
      duration: "July 2025 - October 2025",
      type: "Remote",
      responsibilities: [
        "Assessed and improved digital systems for data management, tracking, and reporting",
        "Worked remotely with international, cross-functional teams to identify operational challenges",
        "Translated operational challenges into practical, technology-driven workflow improvements",
        "Analyzed program data to generate actionable insights and optimize processes",
        "Developed user guides, SOPs, and release notes for system adoption",
        "Collaborated in meetings to provide feedback and support inclusive, participatory project outcomes"
      ],
      technologies: ["Digital Systems", "Data Management", "Workflow Automation", "Cross-functional Collaboration", "Documentation"]
    },
    {
      title: "Full Stack Developer/IT Support",
      company: "Argon Finance (Fintech for Financial Inclusion) – Remote",
      location: "Uganda",
      duration: "February 2025 – June 2025",
      type: "Remote",
      responsibilities: [
        "Evaluated and improved digital systems for onboarding, contracting, time-tracking, and data management",
        "Researched and implemented AI and automation solutions to streamline workflows",
        "Collaborated with product owners, backend teams, and stakeholders to translate requirements",
        "Built accessible dashboards and interfaces to provide clear insights and enhance KPI tracking",
        "Developed user guides and training materials to support adoption and sustainable use",
        "Enhanced operations efficiency for underserved users in financial inclusion programs"
      ],
      technologies: ["FinTech", "AI", "Automation", "Dashboard Development", "React", "Node.js", "API Integration"]
    },
    {
      title: "Systems Developer/IT Support",
      company: "USAID (Digital Health Ecosystem) – Remote/Hybrid",
      location: "Kenya",
      duration: "February 2024 – January 2025",
      type: "Remote/Hybrid",
      responsibilities: [
        "Assessed national health information systems (KHIS/DHIS2, OpenMRS, eCHIS, iHRIS) to enhance data management",
        "Improved system interoperability and workflow efficiency across health platforms",
        "Worked with global, cross-functional teams to identify challenges and support KPI tracking",
        "Compiled and analyzed program data, validated APIs, and ensured seamless system integration",
        "Produced user guides, SOPs, and training materials for sustainable adoption",
        "Enabled efficient onboarding and reliable use of community-focused health platforms"
      ],
      technologies: ["KHIS/DHIS2", "OpenMRS", "eCHIS", "iHRIS", "Healthcare IT", "API Validation", "System Integration"]
    },
    {
      title: "Innovator/Full Stack Developer",
      company: "CRIW (Central Rift Innovation Week) – Kenya",
      location: "Kenya",
      duration: "September 2023 – November 2023",
      type: "Contract",
      responsibilities: [
        "Led development of the AliXe fintech/agri-trading platform with user-centered workflows",
        "Collaborated with SMEs, traders, and stakeholders to gather feedback and iterate solutions",
        "Implemented strong data capture and reporting functionalities",
        "Conducted usability and regression testing to ensure quality",
        "Created guides and training materials to support adoption and minimize post-deployment issues",
        "Focused on innovative, practical solutions improving user experience and system efficiency"
      ],
      technologies: ["FinTech", "Agri-Tech", "React", "Node.js", "MongoDB", "User-Centered Design"]
    },
    {
      title: "Full Stack Developer / Data Analyst",
      company: "Freelance – Remote",
      location: "Remote",
      duration: "January 2022 – August 2023",
      type: "Remote",
      responsibilities: [
        "Supported clients in health, education, agri-tech, and public-sector projects",
        "Evaluated digital systems and implemented automated workflows using AI and emerging tools",
        "Collaborated with international teams to gather requirements and analyze program data",
        "Generated insights for KPI tracking and impact measurement",
        "Built accessible dashboards and reporting interfaces for social impact initiatives",
        "Developed user guides, SOPs, and training materials ensuring sustainable use"
      ],
      technologies: ["AI Tools", "React", "Node.js", "Python", "Data Analytics", "Dashboard Development", "Automation"]
    },
    {
      title: "IT Support / Systems Engineer",
      company: "Mombasa Water Supply & Sanitation Company – Kenya",
      location: "Kenya",
      duration: "September 2021 – November 2021",
      type: "On-site",
      responsibilities: [
        "Provided IT support by assessing hardware, software, and data systems",
        "Performed audits and created SOPs to improve efficiency and knowledge sharing",
        "Collaborated with teams to gather requirements and troubleshoot technical issues",
        "Supported system rollouts while ensuring data integrity",
        "Developed foundational skills in digital system assessment and documentation",
        "Contributed to practical, user-centered improvements in public service environment"
      ],
      technologies: ["IT Support", "System Administration", "SOPs", "Hardware/Software", "Public Sector Systems"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Kabarak University",
      location: "Nakuru, Kenya",
      duration: "2019 – 2023",
      details: "Specialized in Software Development, Database Systems, and Network Security"
    }
  ];

  const certifications = [
    "IT Service Management (ITSM) Certified",
    "Cybersecurity Fundamentals",
    "MERN Stack Development",
    "Healthcare IT Systems",
    "API Development & Integration"
  ];

  const technicalSkills = {
    "Frontend Development": ["React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript"],
    "Backend Development": ["Node.js", "Express", "Laravel", "PHP", "Python", "RESTful APIs"],
    "Databases": ["MongoDB", "MySQL", "PostgreSQL", "MongoDB Atlas"],
    "AI & Machine Learning": ["TensorFlow", "Python", "LSTM Models", "Data Analytics", "Scikit-learn"],
    "DevOps & Tools": ["Git", "GitHub", "Postman", "Jira", "Docker", "Vercel"],
    "Cybersecurity": ["Network Security", "Vulnerability Assessment", "ITSM", "Penetration Testing"]
  };

  const softSkills = [
    "Team Leadership & Collaboration",
    "Project Management",
    "Technical Documentation",
    "Client Communication",
    "Problem Solving",
    "Cross-cultural Communication"
  ];

  const achievements = [
    {
      title: "Best FinTech Innovation Award",
      description: "AliXe FinTech Application - Recognized for outstanding innovation in financial technology",
      year: "2024"
    },
    {
      title: "Healthcare Digital Transformation",
      description: "Successfully deployed KenyaEMR across 15+ healthcare facilities",
      year: "2024"
    },
    {
      title: "Community Developer Advocate",
      description: "Mentored 20+ junior developers in full-stack development",
      year: "2023-2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-subtle py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="mb-4">Professional Resume</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Resume
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive overview of my professional journey, skills, and achievements
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1Cz6UdDhUXvvWeimgEb0MtPaXo81mnCzE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="group" asChild>
                <span>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV PDF
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* Academic Background */}
          <section className="space-y-8">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className="space-y-8">
            <div className="flex items-center space-x-3">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-3 md:space-y-0">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="text-primary font-medium text-lg">
                          {job.company}
                        </CardDescription>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center text-sm text-muted-foreground md:justify-end">
                          <Calendar className="h-4 w-4 mr-2" />
                          {job.duration}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground md:justify-end">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-3 text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-8">
            <div className="flex items-center space-x-3">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(technicalSkills).map(([category, skills], index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Soft Skills */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Certifications */}
          <section className="space-y-8">
            <div className="flex items-center space-x-3">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
            </div>
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Key Achievements */}
          <section className="space-y-8">
            <div className="flex items-center space-x-3">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Key Achievements</h2>
            </div>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <Badge variant="outline">{achievement.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {achievement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;