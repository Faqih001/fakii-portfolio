import { Shield, Brain, Code, ChevronDown, ChevronUp, Clock, Target, Trophy } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const LabChallenges = () => {
  const [openChallenge, setOpenChallenge] = useState<number | null>(1);

  const challenges = [
    {
      id: 1,
      title: "National Health Systems Integration (KHIS/DHIS2, OpenMRS, eCHIS, iHRIS)",
      category: "Healthcare IT",
      difficulty: "Expert",
      duration: "12 months",
      problemStatement: "Assess and integrate multiple national health information systems to enhance data management, interoperability, and workflow efficiency across healthcare facilities in Kenya.",
      approach: "Led comprehensive system assessment and integration of KHIS/DHIS2, OpenMRS, eCHIS, and iHRIS platforms. Worked with global cross-functional teams to identify integration challenges, validate APIs, and ensure seamless data exchange while maintaining compliance with healthcare standards.",
      tools: ["DHIS2", "OpenMRS", "FHIR", "HL7", "Postman", "Docker", "PostgreSQL", "REST APIs", "Jira"],
      keyFindings: [
        "Successfully integrated 4 major health information systems serving 100+ facilities",
        "Achieved 95% data accuracy across integrated systems",
        "Reduced data entry time by 60% through interoperability",
        "Validated 200+ API endpoints for secure data exchange",
        "Established real-time data synchronization protocols"
      ],
      mitigations: [
        "Implemented comprehensive API validation and testing frameworks",
        "Created detailed integration documentation and SOPs",
        "Established automated monitoring for system health",
        "Developed training programs for 500+ healthcare workers",
        "Built fallback mechanisms for offline data capture"
      ],
      lessonsLearned: "Large-scale health system integration requires careful coordination between technical teams, healthcare providers, and government stakeholders. API validation and thorough documentation are critical for sustainable integration. User training and change management are as important as technical implementation.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      images: ["System architecture diagram", "API validation results", "Integration dashboard", "Data flow visualization"]
    },
    {
      id: 2,
      title: "MamaShub - Maternal Health Digital Platform (MOH 216)",
      category: "Healthcare Innovation",
      difficulty: "Expert",
      duration: "8 months",
      problemStatement: "Digitize Kenya's Mother-Child Booklet (MOH 216) to improve maternal and child health outcomes through better data capture, continuity of care, and real-time health monitoring.",
      approach: "Built a comprehensive maternal health platform using Google Open Health Stack and OpenMRS standards. Implemented FHIR-compliant data models for ANC/PNC visits, designed offline-first mobile interfaces, and created analytics dashboards for healthcare providers and policymakers.",
      tools: ["React", "OpenMRS", "FHIR", "Node.js", "PostgreSQL", "PWA", "Firebase", "Maps API", "Chart.js"],
      keyFindings: [
        "Successfully digitized all 45+ health indicators from MOH 216 booklet",
        "Achieved 100% FHIR compliance for health data interoperability",
        "Reduced maternal health data loss by 78% through digital tracking",
        "Enabled real-time risk identification for high-risk pregnancies",
        "Supported 1000+ health workers in pilot deployment"
      ],
      mitigations: [
        "Implemented offline-first architecture for areas with poor connectivity",
        "Created user-friendly interfaces for low-literacy healthcare workers",
        "Built comprehensive data validation to ensure quality",
        "Established privacy controls compliant with GDPR and local regulations",
        "Developed training materials in English and Swahili"
      ],
      lessonsLearned: "Building for maternal health in resource-constrained settings requires deep understanding of healthcare workflows and cultural contexts. Offline functionality and user-centered design are critical for adoption. Collaboration with Ministry of Health and frontline workers is essential for sustainable impact.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-pink-500 to-rose-600",
      images: ["Digital booklet interface", "ANC/PNC data capture", "Analytics dashboard", "Offline sync workflow"]
    },
    {
      id: 3,
      title: "AliXe FinTech/Agri-Trading Platform - Best Innovation Award Winner",
      category: "FinTech Innovation",
      difficulty: "Advanced",
      duration: "10 weeks",
      problemStatement: "Develop a comprehensive FinTech/agri-trading platform connecting smallholder farmers with buyers, providing transparent pricing, secure transactions, and supply chain optimization for financial inclusion.",
      approach: "Built a full-stack MERN application with user-centered design principles. Implemented secure authentication, real-time marketplace features, integrated payment gateways, and created data-driven dashboards. Conducted extensive usability testing with farmers, traders, and SMEs to iterate on features.",
      tools: ["React", "Node.js", "Express", "MongoDB", "JWT", "WebSocket", "Payment APIs", "Maps API", "Chart.js"],
      keyFindings: [
        "Won Best FinTech Innovation Award at Central Rift Innovation Week 2023",
        "Onboarded 200+ farmers and 50+ buyers in pilot phase",
        "Facilitated $50K+ in agricultural transactions",
        "Reduced price information asymmetry by 45%",
        "Achieved 92% user satisfaction in usability testing"
      ],
      mitigations: [
        "Implemented secure payment gateway integration with transaction validation",
        "Created simple, intuitive interfaces for users with varying tech literacy",
        "Built offline order collection for areas with poor connectivity",
        "Established dispute resolution workflow and escrow services",
        "Developed comprehensive user guides and training materials"
      ],
      lessonsLearned: "Building for financial inclusion requires deep understanding of target users' constraints and needs. Mobile-first design and offline capabilities are crucial for agricultural contexts. Real-world pilot testing with end users reveals insights that theoretical testing cannot capture. Innovation awards validate market need but sustainable adoption requires ongoing user support.",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      images: ["Marketplace interface", "Transaction flow", "Farmer dashboard", "Award ceremony"]
    },
    {
      id: 4,
      title: "AI-Powered Data Analytics & Workflow Automation",
      category: "AI & Automation",
      difficulty: "Advanced",
      duration: "Ongoing",
      problemStatement: "Leverage AI tools and automation to optimize data workflows, improve decision-making, and enhance operational efficiency across multiple client projects in health, education, and public sectors.",
      approach: "Implemented AI-assisted development and analysis workflows using GPT models, created automated data processing pipelines, built intelligent dashboards with predictive analytics, and developed workflow automation solutions for project management and data tracking systems.",
      tools: ["Python", "ChatGPT API", "Power BI", "Google Workspace APIs", "Zapier", "n8n", "Pandas", "Scikit-learn", "TensorFlow"],
      keyFindings: [
        "Reduced data processing time by 70% through automation",
        "Improved decision-making accuracy with AI-powered insights",
        "Created 15+ automated workflows eliminating manual repetitive tasks",
        "Generated real-time KPI tracking dashboards for 5+ organizations",
        "Achieved 85%+ accuracy in predictive analytics models"
      ],
      mitigations: [
        "Implemented data validation and quality checks in automation pipelines",
        "Created fallback mechanisms for AI-powered workflows",
        "Established human review processes for critical decisions",
        "Built comprehensive logging and monitoring systems",
        "Developed user training for AI tool adoption"
      ],
      lessonsLearned: "AI tools are force multipliers when properly integrated into existing workflows. Automation should augment, not replace, human expertise. Prompt engineering and AI tool selection are critical skills. Data quality and validation remain paramount even with AI assistance. Change management and training are essential for AI adoption.",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600",
      images: ["Automation workflow diagram", "AI-powered dashboard", "Process optimization results", "Predictive analytics"]
    },
    {
      id: 5,
      title: "Web Accessibility & User-Centered Design Implementation",
      category: "UX/Accessibility",
      difficulty: "Intermediate",
      duration: "6 months",
      problemStatement: "Ensure digital solutions are accessible to all users including those with disabilities, following WCAG 2.1 AA standards while maintaining excellent user experience across diverse user groups in healthcare and public sector applications.",
      approach: "Conducted comprehensive accessibility audits, implemented WCAG 2.1 AA standards across multiple projects, performed usability testing with diverse user groups, created accessible component libraries, and trained development teams on accessibility best practices.",
      tools: ["WAVE", "axe DevTools", "NVDA", "VoiceOver", "Lighthouse", "Figma", "React", "ARIA", "Tailwind CSS"],
      keyFindings: [
        "Achieved WCAG 2.1 AA compliance across 10+ applications",
        "Improved accessibility scores from 65% to 95% average",
        "Reduced user task completion time by 40% through UX improvements",
        "Increased user satisfaction scores by 35%",
        "Enabled 1000+ users with disabilities to access healthcare services"
      ],
      mitigations: [
        "Implemented semantic HTML and proper ARIA labels",
        "Created high-contrast themes and keyboard navigation support",
        "Built responsive designs supporting multiple devices and screen sizes",
        "Established accessibility testing in CI/CD pipeline",
        "Developed accessibility guidelines and component documentation"
      ],
      lessonsLearned: "Accessibility is not optional—it's essential for inclusive digital solutions. Early accessibility consideration is more cost-effective than retrofitting. Testing with real users with disabilities provides invaluable insights. Accessibility improvements often benefit all users. Developer education and team buy-in are critical for sustainable accessibility practices.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-600",
      images: ["Accessibility audit report", "WCAG compliance checklist", "User testing session", "Before/after comparisons"]
    }
  ];

  const toggleChallenge = (id: number) => {
    setOpenChallenge(openChallenge === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Lab Challenges
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world technical challenges solved through innovative approaches and hands-on implementation. 
            These projects showcase expertise across healthcare IT integration, AI-powered automation, 
            FinTech innovation, and user-centered design with measurable impact.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <Trophy className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700 dark:text-green-400">5</div>
              <div className="text-sm text-muted-foreground">Challenges Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">95%</div>
              <div className="text-sm text-muted-foreground">Average Success Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-purple-500/10 to-pink-600/10 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">36+</div>
              <div className="text-sm text-muted-foreground">Months Total Duration</div>
            </CardContent>
          </Card>
        </div>

        {/* Challenges Timeline */}
        <div className="space-y-6">
          {challenges.map((challenge, index) => (
            <Card 
              key={challenge.id} 
              className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Collapsible open={openChallenge === challenge.id}>
                <CollapsibleTrigger asChild>
                  <CardHeader 
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => toggleChallenge(challenge.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${challenge.color} text-white flex-shrink-0`}>
                          {challenge.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge variant="secondary">{challenge.category}</Badge>
                            <Badge variant={
                              challenge.difficulty === "Expert" ? "destructive" :
                              challenge.difficulty === "Advanced" ? "default" : "outline"
                            }>
                              {challenge.difficulty}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {challenge.duration}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl font-semibold mb-2">
                            {challenge.title}
                          </CardTitle>
                          <CardDescription className="text-sm leading-relaxed">
                            {challenge.problemStatement}
                          </CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="flex-shrink-0 ml-4">
                        {openChallenge === challenge.id ? 
                          <ChevronUp className="w-4 h-4" /> : 
                          <ChevronDown className="w-4 h-4" />
                        }
                      </Button>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0 space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        {/* Approach */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                            Approach & Methodology
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {challenge.approach}
                          </p>
                        </div>

                        {/* Tools Used */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                            Tools & Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {challenge.tools.map((tool) => (
                              <Badge key={tool} variant="outline" className="text-xs">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Findings */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                            Key Findings & Results
                          </h4>
                          <ul className="space-y-2">
                            {challenge.keyFindings.map((finding, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                                {finding}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {/* Solutions Implemented */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                            Solutions & Mitigations
                          </h4>
                          <ul className="space-y-2">
                            {challenge.mitigations.map((mitigation, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                                {mitigation}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Screenshots/Visuals */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                            Documentation & Visuals
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {challenge.images.map((image, idx) => (
                              <div key={idx} className="p-3 bg-muted/50 rounded-lg border border-border">
                                <div className="text-xs font-medium text-muted-foreground">{image}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Lessons Learned */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                            Lessons Learned
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed italic">
                            "{challenge.lessonsLearned}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto bg-gradient-primary text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Next Challenge?</h3>
              <p className="mb-6 opacity-90">
                I'm always looking for new technical challenges and research opportunities. 
                Let's collaborate on innovative solutions!
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LabChallenges;