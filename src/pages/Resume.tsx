import { Download, Calendar, MapPin, Award, GraduationCap, Briefcase, Code, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  const workExperience = [
    {
      title: "IT Support & Systems Analyst",
      company: "USAID Digital Health Ecosystem Project",
      location: "Nakuru, Kenya",
      duration: "Feb 2024 – Jan 2025",
      type: "Contract",
      responsibilities: [
        "Developed comprehensive Standard Operating Procedures (SOPs) for healthcare IT systems",
        "Led deployment and integration of KenyaEMR across multiple hospital systems",
        "Managed network configurations and ensured secure data exchange protocols",
        "Conducted system training for healthcare professionals and IT staff",
        "Implemented API validation processes for healthcare data interoperability",
        "Collaborated with international teams to enhance digital health infrastructure"
      ],
      technologies: ["KenyaEMR", "APIs", "Web Services", "Jira", "Network Security", "Healthcare IT"]
    },
    {
      title: "IT Technician",
      company: "MOWASSCO (Molo Water and Sanitation Company)",
      location: "Molo, Kenya",
      duration: "2022 – 2024",
      type: "Full-time",
      responsibilities: [
        "Maintained and optimized IT infrastructure for water management systems",
        "Provided technical support for SCADA and water monitoring systems",
        "Implemented cybersecurity measures to protect critical infrastructure",
        "Developed automated reporting systems for water quality monitoring",
        "Trained staff on new technologies and security protocols"
      ],
      technologies: ["SCADA Systems", "Network Management", "Cybersecurity", "Database Management"]
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