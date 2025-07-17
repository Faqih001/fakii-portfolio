import { Shield, Brain, Code, ChevronDown, ChevronUp, Clock, Target, Trophy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const LabChallenges = () => {
  const [openChallenge, setOpenChallenge] = useState<number | null>(1);

  const challenges = [
    {
      id: 1,
      title: "Cybersecurity CTF Challenge",
      category: "Cybersecurity",
      difficulty: "Advanced",
      duration: "3 weeks",
      problemStatement: "Identify and mitigate vulnerabilities in a simulated hospital network environment, ensuring HIPAA compliance and data protection.",
      approach: "Conducted comprehensive vulnerability assessments using industry-standard tools, applied ITSM best practices, and implemented multi-layered security measures including network segmentation and intrusion detection systems.",
      tools: ["Nmap", "Wireshark", "Metasploit", "Burp Suite", "OWASP ZAP", "Splunk"],
      keyFindings: [
        "Identified 15 critical vulnerabilities in network infrastructure",
        "Discovered unencrypted patient data transmission",
        "Found weak authentication mechanisms in legacy systems",
        "Located multiple SQL injection vulnerabilities"
      ],
      mitigations: [
        "Implemented network segmentation for patient data",
        "Deployed end-to-end encryption protocols",
        "Upgraded authentication to multi-factor systems",
        "Established comprehensive logging and monitoring"
      ],
      lessonsLearned: "The importance of proactive security measures and incident response planning in healthcare environments. Regular security assessments are crucial for maintaining patient data confidentiality.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-600",
      images: ["Network topology", "Vulnerability scan results", "Security dashboard"]
    },
    {
      id: 2,
      title: "AI-Driven Vaccine Demand Forecasting",
      category: "Artificial Intelligence",
      difficulty: "Expert",
      duration: "6 weeks",
      problemStatement: "Develop a machine learning model to predict short-term vaccine demand using historical healthcare data, improving supply chain efficiency and reducing waste.",
      approach: "Built an LSTM neural network model using TensorFlow, incorporating multiple data sources including seasonal patterns, demographic data, and historical vaccination rates. Implemented feature engineering and hyperparameter optimization.",
      tools: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook", "Matplotlib"],
      keyFindings: [
        "Achieved 87% accuracy in 30-day demand forecasting",
        "Identified seasonal patterns affecting vaccination rates",
        "Discovered correlation between demographic factors and vaccine uptake",
        "Reduced forecasting error by 34% compared to traditional methods"
      ],
      mitigations: [
        "Implemented cross-validation to prevent overfitting",
        "Used ensemble methods for improved robustness",
        "Applied data augmentation for limited historical data",
        "Created confidence intervals for prediction uncertainty"
      ],
      lessonsLearned: "Handling time-series healthcare data requires careful consideration of seasonal patterns and external factors. Model interpretability is crucial for healthcare applications to gain stakeholder trust.",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600",
      images: ["Model architecture", "Accuracy graphs", "Data preprocessing pipeline"]
    },
    {
      id: 3,
      title: "API Validation for KenyaEMR Integration",
      category: "Healthcare IT",
      difficulty: "Intermediate",
      duration: "4 weeks",
      problemStatement: "Validate and test APIs for secure data exchange between KenyaEMR and external healthcare systems, ensuring interoperability and data integrity.",
      approach: "Developed comprehensive API testing strategy using both manual and automated testing approaches. Created detailed test cases covering authentication, data validation, error handling, and performance testing.",
      tools: ["Postman", "Python", "Pytest", "Newman", "JMeter", "Swagger", "JSON Schema"],
      keyFindings: [
        "Validated 45+ API endpoints across multiple modules",
        "Identified and resolved 12 critical data validation issues",
        "Optimized API response times by 40%",
        "Established automated regression testing pipeline"
      ],
      mitigations: [
        "Implemented comprehensive input validation",
        "Added rate limiting and authentication checks",
        "Created detailed error response documentation",
        "Established monitoring and alerting systems"
      ],
      lessonsLearned: "API validation in healthcare requires rigorous testing of edge cases and error scenarios. Automation is essential for maintaining data quality during system integrations.",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      images: ["API test results", "Response time graphs", "Error handling examples"]
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
            Exploring complex technical challenges through hands-on experimentation and research. 
            These projects demonstrate problem-solving skills across cybersecurity, AI/ML, and healthcare IT.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <Trophy className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700 dark:text-green-400">3</div>
              <div className="text-sm text-muted-foreground">Challenges Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">87%</div>
              <div className="text-sm text-muted-foreground">Average Success Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-purple-500/10 to-pink-600/10 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">13</div>
              <div className="text-sm text-muted-foreground">Weeks Total Duration</div>
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
              <Button size="lg" variant="secondary">
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LabChallenges;