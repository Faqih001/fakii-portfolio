import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Code, Database, Shield, Building, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MamaShub - Maternal Health Platform (MOH 216)",
      role: "Lead Full-Stack Developer",
      dateRange: "Jan 2023 - Present",
      description: "Maternal and child health platform built on Google Open Health Stack to digitize the Mother-Child Booklet (MOH 216), supporting ANC/PNC data capture, reporting, and continuity of care.",
      challenge: "Kenya's maternal and child healthcare faced critical gaps in data continuity and standardization across health facilities, with paper-based booklets prone to loss and inconsistent record-keeping.",
      whatIDid: [
        "Architected platform on Google Open Health Stack using React and OpenMRS",
        "Implemented FHIR standards for seamless data interoperability",
        "Developed ANC/PNC modules with real-time data validation"
      ],
      results: [
        { metric: "1000+", label: "Health Workers Using", trend: "up" },
        { metric: "45+", label: "Indicators Digitized", trend: "up" },
        { metric: "80%", label: "Data Entry Time Saved", trend: "down" },
        { metric: "100%", label: "MOH 216 Compliance", trend: "up" },
        { metric: "50K+", label: "Patient Records Managed", trend: "up" },
        { metric: "95%", label: "User Satisfaction", trend: "up" }
      ],
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
      title: "AliXe FinTech",
      role: "Chief Technology Officer",
      dateRange: "Aug 2022 - Dec 2023",
      description: "Digital restaurant discovery, menu, booking and analytics platform connecting diners with restaurants while enabling menu management and business insights for owners.",
      challenge: "Diners struggled to discover accurate menus, availability, and reliable booking options, while restaurants lacked digital booking, menu management and analytics tools to understand customer behavior.",
      whatIDid: [
        "Led technical architecture and built the full-stack platform",
        "Implemented restaurant discovery, digital menus and real-time table booking",
        "Built analytics dashboards for booking trends, menu performance and customer insights"
      ],
      results: [
        { metric: "1000+", label: "Restaurants Listed", trend: "up" },
        { metric: "50K+", label: "Monthly Users", trend: "up" },
        { metric: "80%", label: "Reservation Conversion", trend: "up" },
        { metric: "30%", label: "Faster Booking Flow", trend: "down" },
        { metric: "85%", label: "Repeat Diners", trend: "up" },
        { metric: "95%", label: "Owner Satisfaction", trend: "up" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "WebSocket"],
      features: [
        "Restaurant discovery & search",
        "Digital menus & item management",
        "Table booking & reservation management",
        "Booking analytics & reporting",
        "Ratings & reviews",
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
      role: "Integration Engineer",
      dateRange: "Jun 2021 - Dec 2022",
      description: "Contributions to KenyaEMR/OpenMRS supporting national health information systems, interoperability, testing, and deployments across healthcare facilities.",
      challenge: "Fragmented health information systems across Kenya created data silos, compromising patient care continuity and limiting effective national health reporting.",
      whatIDid: [
        "Led API integration across multiple national health systems",
        "Developed middleware for real-time data synchronization",
        "Trained 500+ healthcare workers on integrated workflows"
      ],
      results: [
        { metric: "100+", label: "Facilities Integrated", trend: "up" },
        { metric: "95%", label: "Data Accuracy", trend: "up" },
        { metric: "200+", label: "API Endpoints Validated", trend: "up" },
        { metric: "60%", label: "Duplicate Records Reduced", trend: "down" },
        { metric: "500+", label: "Healthcare Workers Trained", trend: "up" },
        { metric: "99%", label: "System Uptime", trend: "up" }
      ],
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
      role: "Backend Integration Specialist",
      dateRange: "Mar 2021 - Aug 2021",
      description: "Community health data integration project supporting frontline health workers and national reporting with real-time data capture.",
      challenge: "Community health workers in remote areas needed a mobile-first system for real-time data capture with offline functionality and seamless synchronization with national DHIS2 reporting systems.",
      whatIDid: [
        "Developed mobile-first data capture interfaces with offline capabilities",
        "Integrated eCHIS with DHIS2 for national health reporting",
        "Implemented robust data synchronization protocols for field operations"
      ],
      results: [
        { metric: "500+", label: "CHWs Onboarded", trend: "up" },
        { metric: "90%", label: "Offline Reliability", trend: "up" },
        { metric: "85%", label: "Data Sync Success", trend: "up" },
        { metric: "70%", label: "Faster Reporting", trend: "up" },
        { metric: "10K+", label: "Daily Records Captured", trend: "up" },
        { metric: "92%", label: "Field Worker Satisfaction", trend: "up" }
      ],
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
      role: "Full-Stack Developer",
      dateRange: "Sep 2020 - Feb 2021",
      description: "Human Resource Information System for health workforce management, deployment tracking, and reporting across healthcare facilities.",
      challenge: "Kenya's health sector lacked centralized visibility into workforce deployment, training, and performance data across 47 counties, hindering effective human resource planning and management.",
      whatIDid: [
        "Built Vue.js frontend with FHIR-compliant data models for HR management",
        "Developed deployment tracking and certificate management modules",
        "Integrated performance reporting dashboards for stakeholders"
      ],
      results: [
        { metric: "5000+", label: "Health Workers Tracked", trend: "up" },
        { metric: "75%", label: "Deployment Efficiency", trend: "up" },
        { metric: "47", label: "Counties Covered", trend: "up" },
        { metric: "60%", label: "Time Saved in HR Planning", trend: "down" },
        { metric: "98%", label: "Data Accuracy", trend: "up" },
        { metric: "85%", label: "Training Completion Rate", trend: "up" }
      ],
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
      role: "Backend Developer",
      dateRange: "Oct 2022 - Mar 2023",
      description: "National blood donation and transfusion management platform supporting donor-to-recipient workflows and inventory tracking.",
      challenge: "Kenya's blood transfusion services faced critical challenges with inventory management, donor engagement, and hospital coordination, leading to supply shortages and inefficiencies in emergency situations.",
      whatIDid: [
        "Built Laravel backend for donor registration and blood inventory tracking",
        "Integrated SMS notification system for donor alerts and reminders",
        "Developed transfusion workflow modules with hospital integration"
      ],
      results: [
        { metric: "10K+", label: "Donors Registered", trend: "up" },
        { metric: "50+", label: "Hospitals Connected", trend: "up" },
        { metric: "95%", label: "Emergency Response Rate", trend: "up" },
        { metric: "40%", label: "Supply Shortage Reduction", trend: "down" },
        { metric: "100K+", label: "Lives Impacted", trend: "up" },
        { metric: "88%", label: "Donor Retention Rate", trend: "up" }
      ],
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
      role: "Full-Stack Developer",
      dateRange: "Jan 2023 - Jun 2023",
      description: "Agri-tech platform connecting farmers with buyers to optimize supply chains, pricing transparency, and market access.",
      challenge: "Nakuru County farmers struggled with market access and price discovery, while buyers faced challenges sourcing reliable agricultural products, leading to supply chain inefficiencies and unfair pricing.",
      whatIDid: [
        "Developed farmer-buyer marketplace with real-time pricing algorithms",
        "Integrated geo-location services for localized market connections",
        "Built analytics dashboard for market trends and supply chain insights"
      ],
      results: [
        { metric: "300+", label: "Farmers Connected", trend: "up" },
        { metric: "35%", label: "Price Improvement", trend: "up" },
        { metric: "80%", label: "Buyer Satisfaction", trend: "up" },
        { metric: "50%", label: "Faster Market Access", trend: "up" },
        { metric: "KES 5M+", label: "Trade Value Monthly", trend: "up" },
        { metric: "90%", label: "Platform Reliability", trend: "up" }
      ],
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
      role: "Lead Full-Stack Developer",
      dateRange: "Jul 2023 - Dec 2023",
      description: "Enterprise-grade workflow and collaboration platform with task dashboards, role-based access control, audit logs, and reporting.",
      challenge: "Argon Finance needed a comprehensive project management solution to track deliverables across multiple teams, ensure accountability, and maintain compliance with audit requirements for financial operations.",
      whatIDid: [
        "Built enterprise-grade PMS with TypeScript for type safety and scalability",
        "Implemented role-based access control with granular permissions",
        "Developed real-time collaboration features using WebSocket technology"
      ],
      results: [
        { metric: "15+", label: "Teams Onboarded", trend: "up" },
        { metric: "70%", label: "Task Completion Rate", trend: "up" },
        { metric: "100%", label: "Audit Compliance", trend: "up" },
        { metric: "55%", label: "Communication Time Saved", trend: "down" },
        { metric: "500+", label: "Projects Managed", trend: "up" },
        { metric: "95%", label: "Team Satisfaction", trend: "up" }
      ],
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
      role: "Frontend Developer",
      dateRange: "Feb 2024 - Apr 2024",
      description: "Real-time task and workflow management dashboard with analytics, performance metrics, and data visualization.",
      challenge: "Development teams struggled with data-driven decision-making due to fragmented Jira metrics and lack of visual insights into sprint performance, burndown rates, and team productivity.",
      whatIDid: [
        "Integrated Jira API for real-time task and sprint data aggregation",
        "Built interactive dashboards with Charts.js for performance metrics",
        "Developed custom reporting features for stakeholder insights"
      ],
      results: [
        { metric: "10+", label: "Teams Using Platform", trend: "up" },
        { metric: "50%", label: "Reporting Time Saved", trend: "down" },
        { metric: "95%", label: "Sprint Visibility", trend: "up" },
        { metric: "30%", label: "Faster Decision Making", trend: "up" },
        { metric: "98%", label: "Data Accuracy", trend: "up" },
        { metric: "85%", label: "User Adoption Rate", trend: "up" }
      ],
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
      role: "Full-Stack Developer",
      dateRange: "May 2024 - Aug 2024",
      description: "Digital healthcare platform for secure patient record management with role-based access control and compliance-ready workflows.",
      challenge: "Private healthcare clinics in Kenya needed affordable, HIPAA-compliant digital record management systems with integrated appointment scheduling and billing to compete with larger hospital chains.",
      whatIDid: [
        "Developed secure patient record management with JWT authentication",
        "Implemented HIPAA-compliant data handling and encryption protocols",
        "Built appointment scheduling and prescription management modules"
      ],
      results: [
        { metric: "20+", label: "Clinics Onboarded", trend: "up" },
        { metric: "100%", label: "HIPAA Compliance", trend: "up" },
        { metric: "90%", label: "Patient Satisfaction", trend: "up" },
        { metric: "65%", label: "Admin Time Reduced", trend: "down" },
        { metric: "5000+", label: "Patient Records", trend: "up" },
        { metric: "99.9%", label: "System Uptime", trend: "up" }
      ],
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
      role: "ML Engineer",
      dateRange: "Sep 2024 - Nov 2024",
      description: "Machine learning–powered health diagnostics solution with data preprocessing, inference pipelines, and result visualization.",
      challenge: "Healthcare providers needed cost-effective AI-assisted diagnostic tools to improve early detection of ovarian cysts, reducing misdiagnosis rates and improving patient outcomes in resource-limited settings.",
      whatIDid: [
        "Trained TensorFlow model on medical imaging data for cyst classification",
        "Built data preprocessing pipeline with Scikit-learn for robust inference",
        "Developed interactive Streamlit UI for result visualization and reporting"
      ],
      results: [
        { metric: "92%", label: "Diagnostic Accuracy", trend: "up" },
        { metric: "80%", label: "Time Reduction", trend: "down" },
        { metric: "500+", label: "Scans Analyzed", trend: "up" },
        { metric: "95%", label: "Provider Satisfaction", trend: "up" },
        { metric: "85%", label: "Early Detection Rate", trend: "up" },
        { metric: "70%", label: "Cost Reduction", trend: "down" }
      ],
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
      role: "Full-Stack Developer",
      dateRange: "Dec 2021 - May 2022",
      description: "Public digital platform providing mental health information, resources, and access to services for Kenyan citizens.",
      challenge: "Stigma and lack of accessible information hindered mental health awareness in Kenya, while citizens struggled to find qualified professionals and emergency crisis support services.",
      whatIDid: [
        "Developed public-facing portal with CMS for mental health resources",
        "Built professional directory with appointment booking integration",
        "Integrated crisis helpline features for emergency mental health support"
      ],
      results: [
        { metric: "50K+", label: "Monthly Visitors", trend: "up" },
        { metric: "200+", label: "Professionals Listed", trend: "up" },
        { metric: "85%", label: "User Engagement Rate", trend: "up" },
        { metric: "40%", label: "Increase in Service Access", trend: "up" },
        { metric: "24/7", label: "Crisis Support Available", trend: "up" },
        { metric: "90%", label: "Resource Satisfaction", trend: "up" }
      ],
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
      role: "Full-Stack Developer",
      dateRange: "Jun 2022 - Nov 2022",
      description: "Real-time monitoring information system for water, sanitation, hygiene, and public infrastructure projects.",
      challenge: "USAID and UN-HABITAT projects lacked real-time visibility into WASH infrastructure deployment, making it difficult to track project progress, impact, and resource allocation across multiple counties.",
      whatIDid: [
        "Built real-time monitoring dashboard with Django backend and React frontend",
        "Integrated Maps API for geographic visualization of infrastructure projects",
        "Developed mobile data capture interfaces for field data collection"
      ],
      results: [
        { metric: "1000+", label: "Projects Monitored", trend: "up" },
        { metric: "85%", label: "Data Accuracy", trend: "up" },
        { metric: "30+", label: "Counties Covered", trend: "up" },
        { metric: "70%", label: "Faster Impact Assessment", trend: "up" },
        { metric: "50K+", label: "Beneficiaries Tracked", trend: "up" },
        { metric: "95%", label: "Stakeholder Satisfaction", trend: "up" }
      ],
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
      role: "Frontend Developer",
      dateRange: "Jan 2024 - Mar 2024",
      description: "Offline-friendly progressive web app for structured data capture in field operations with sync capabilities.",
      challenge: "Field teams in remote areas with unreliable internet connectivity needed robust data capture tools that work offline and automatically sync when connection is restored.",
      whatIDid: [
        "Built PWA with Service Workers for offline-first functionality",
        "Implemented IndexedDB for local data storage and sync mechanisms",
        "Developed photo capture and GPS tagging for comprehensive field data"
      ],
      results: [
        { metric: "95%", label: "Offline Reliability", trend: "up" },
        { metric: "60%", label: "Data Collection Speed", trend: "up" },
        { metric: "100%", label: "Sync Success Rate", trend: "up" },
        { metric: "75%", label: "Field Team Efficiency", trend: "up" },
        { metric: "10K+", label: "Records Captured", trend: "up" },
        { metric: "92%", label: "User Satisfaction", trend: "up" }
      ],
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
      title: "HomeworkHelper - AI-Powered Homework Assistant",
      role: "Full-Stack Developer",
      dateRange: "Apr 2024 - Jun 2024",
      description: "HomeworkHelper is an AI-powered educational platform that helps Kenyan students with their homework by providing step-by-step explanations and learning guidance. Built with modern web technologies and integrated with Google Gemini AI.",
      challenge: "Parents struggled to keep track of their children's multiple assignments across different subjects, leading to missed deadlines and decreased academic performance during remote learning. The challenge was creating an intuitive system that worked for both tech-savvy and non-technical parents.",
      whatIDid: [
        "Integrated Google Gemini for AI-powered homework assistance",
        "Built image analysis to accept homework photos and extract questions",
        "Implemented multi-subject support with adaptive learning flows",
        "Designed responsive UI for parents and students; added secure auth and progress tracking",
        "Implemented Supabase backend and payment integrations (IntaSend / Mpesa / Airtel Money)",
        "Built pricing tiers with daily renewable questions and analytics dashboards"
      ],
      results: [
        { metric: "3K+", label: "Students Supported", trend: "up" },
        { metric: "50K+", label: "Questions Answered", trend: "up" },
        { metric: "85%", label: "User Satisfaction", trend: "up" },
        { metric: "75%", label: "Homework Completion Increase", trend: "up" },
        { metric: "95%", label: "AI Suggestion Accuracy", trend: "up" },
        { metric: "92%", label: "Parent Adoption Rate", trend: "up" }
      ],
      technologies: ["React", "Node.js", "Supabase", "Google Gemini", "IntaSend", "Mpesa", "TypeScript"],
      features: [
        "AI-Powered Assistance (Google Gemini)",
        "Multi-Subject Support",
        "Image Analysis (upload homework photos)",
        "Flexible Pricing: Free, family plans, pay-per-use",
        "Daily Renewable Questions",
        "Secure Authentication & Progress Tracking"
      ],
      category: "Education",
      liveUrl: "https://homeworkhelper.example.com",
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 16,
      title: "AmiTech Donation Platform",
      role: "Full-Stack Developer",
      dateRange: "Jul 2024 - Sep 2024",
      description: "Secure donation platform with real-time Mpesa payments, transaction validation, and donor tracking.",
      challenge: "Non-profit organizations needed a secure, transparent donation platform with mobile money integration to increase donor engagement and automate receipt generation for tax purposes.",
      whatIDid: [
        "Integrated Mpesa API for seamless mobile money transactions",
        "Built real-time payment validation and donor tracking system",
        "Developed automated receipt generation and admin dashboard"
      ],
      results: [
        { metric: "KES 5M+", label: "Donations Processed", trend: "up" },
        { metric: "99.5%", label: "Transaction Success", trend: "up" },
        { metric: "1500+", label: "Donors Registered", trend: "up" },
        { metric: "90%", label: "Donor Retention Rate", trend: "up" },
        { metric: "50+", label: "Organizations Supported", trend: "up" },
        { metric: "95%", label: "Platform Reliability", trend: "up" }
      ],
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
      role: "Data Engineer",
      dateRange: "Oct 2023 - Dec 2023",
      description: "Cryptocurrency analytics and portfolio tracking system with dashboards and data aggregation from multiple exchanges.",
      challenge: "Cryptocurrency investors in Kenya needed consolidated portfolio tracking across multiple exchanges with real-time price analytics and market trend insights to make informed trading decisions.",
      whatIDid: [
        "Built data aggregation pipeline with Pandas for multi-exchange integration",
        "Developed interactive Streamlit dashboards for portfolio analytics",
        "Implemented real-time price tracking and performance visualization"
      ],
      results: [
        { metric: "1000+", label: "Active Users", trend: "up" },
        { metric: "5", label: "Exchanges Integrated", trend: "up" },
        { metric: "24/7", label: "Real-Time Tracking", trend: "up" },
        { metric: "88%", label: "User Satisfaction", trend: "up" },
        { metric: "50+", label: "Cryptocurrencies Tracked", trend: "up" },
        { metric: "99%", label: "Data Accuracy", trend: "up" }
      ],
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
      role: "Lead Full-Stack Developer",
      dateRange: "Mar 2023 - Aug 2023",
      description: "Real estate marketplace for buying, renting, and selling properties in Kenya with verified listings and secure payments.",
      challenge: "Guriflex Real Estate needed a professional digital platform to showcase properties, streamline buyer-seller interactions, and establish credibility in Kenya's competitive real estate market.",
      whatIDid: [
        "Built Next.js marketplace with advanced search and filtering capabilities",
        "Integrated IntaSend payment gateway for secure property transactions",
        "Developed admin panel for property verification and listing management"
      ],
      results: [
        { metric: "500+", label: "Properties Listed", trend: "up" },
        { metric: "150%", label: "Online Inquiries", trend: "up" },
        { metric: "85%", label: "Customer Satisfaction", trend: "up" },
        { metric: "30%", label: "Transaction Time Reduced", trend: "down" },
        { metric: "2000+", label: "Monthly Visitors", trend: "up" },
        { metric: "95%", label: "Listing Accuracy", trend: "up" }
      ],
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
      role: "Full-Stack Developer",
      dateRange: "Sep 2023 - Nov 2023",
      description: "Corporate website supporting logistics, security, and infrastructure services across East & Central Africa.",
      challenge: "Cardiff Global Limited needed a professional digital presence to showcase their logistics and security services across East & Central Africa and establish credibility with enterprise clients.",
      whatIDid: [
        "Developed Next.js corporate website with service showcase and portfolio",
        "Built responsive design optimized for mobile and desktop viewing",
        "Integrated contact forms and client testimonial management system"
      ],
      results: [
        { metric: "200%", label: "Web Traffic Growth", trend: "up" },
        { metric: "45+", label: "B2B Inquiries/Month", trend: "up" },
        { metric: "90%", label: "Mobile Satisfaction", trend: "up" },
        { metric: "65%", label: "RFQ Submissions Increase", trend: "up" },
        { metric: "15+", label: "Countries Reached", trend: "up" },
        { metric: "88%", label: "Lead Conversion Rate", trend: "up" }
      ],
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
      role: "Full-Stack Developer",
      dateRange: "Dec 2023 - Feb 2024",
      description: "Corporate platform and dashboards for diversified operations including construction, catering, and waste management.",
      challenge: "Kulthum Limited's diversified operations (construction, catering, waste management) lacked a unified digital platform for client communication, project tracking, and service management across departments.",
      whatIDid: [
        "Built multi-service platform with dedicated dashboards for each division",
        "Developed client portal for project tracking and service requests",
        "Implemented reporting system for cross-departmental operations insights"
      ],
      results: [
        { metric: "60%", label: "Operational Efficiency", trend: "up" },
        { metric: "100+", label: "Active Clients", trend: "up" },
        { metric: "3", label: "Divisions Integrated", trend: "up" },
        { metric: "45%", label: "Response Time Reduced", trend: "down" },
        { metric: "500+", label: "Projects Tracked", trend: "up" },
        { metric: "92%", label: "Client Retention Rate", trend: "up" }
      ],
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
            Enterprise Solutions That <span className="text-primary">Scale & Deliver</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From award-winning FinTech platforms to national health systems serving 100+ facilities—explore a portfolio of production-ready applications trusted by organizations across Kenya, Uganda, and East Africa.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group hover-scale transition-all duration-300 shadow-card hover:shadow-glow border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <Badge variant="destructive" className="text-xs bg-pink-600 hover:bg-pink-700 border-0">
                    {project.category}
                  </Badge>
                  {project.award && (
                    <Badge variant="secondary" className="text-xs bg-primary text-primary-foreground border-0">
                      🏆 {project.award}
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-2">
                  {project.role && (
                    <div className="flex items-center text-xs text-muted-foreground mb-1">
                      <Building className="h-3 w-3 mr-1" />
                      <span>{project.role}</span>
                    </div>
                  )}
                  {project.dateRange && (
                    <div className="text-xs text-muted-foreground mb-2">{project.dateRange}</div>
                  )}
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* Challenge Section (if available) */}
                {project.challenge && (
                  <div>
                    <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-wider mb-2">THE CHALLENGE</h4>
                    <p className="text-sm text-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}
                
                {/* What I Did Section (if available) */}
                {project.whatIDid && project.whatIDid.length > 0 && (
                  <div>
                    <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-wider mb-2">WHAT I DID</h4>
                    <ul className="space-y-1.5">
                      {project.whatIDid.map((item, idx) => (
                        <li key={idx} className="text-sm text-foreground flex items-start">
                          <span className="text-primary mr-2 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Results Section (if available) */}
                {project.results && project.results.length > 0 && (
                  <div>
                    <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-wider mb-3">RESULTS</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="border border-border rounded-lg p-2.5 text-center hover:border-primary/50 transition-colors">
                          <div className="flex items-center justify-center gap-1 text-lg font-bold text-primary mb-1">
                            {result.metric}
                            {result.trend === "up" ? (
                              <TrendingUp className="h-3 w-3 text-green-500" />
                            ) : result.trend === "down" ? (
                              <TrendingDown className="h-3 w-3 text-green-500" />
                            ) : null}
                          </div>
                          <div className="text-xs text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description (fallback if no challenge) */}
                {!project.challenge && (
                  <CardDescription className="text-sm text-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-wider mb-2">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs hover:border-primary hover:text-primary transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-medium text-xs text-muted-foreground mb-2">Key Features</h4>
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
                <div className="flex gap-2 pt-2">
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