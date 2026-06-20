import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Code, Database, Shield, Building, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MamaShub - Maternal Health Platform (MOH 216)",
      roles: ["Full-Stack Developer", "Software Developer / Engineer", "Backend Developer"],
      dateRange: "Jan 2023 - Present",
      description: "Led the end-to-end development of a national-scale maternal and child health platform on Google Open Health Stack, fully digitizing the MOH 216 Mother-Child Booklet for seamless ANC/PNC data capture, reporting, and care continuity.",
      challenge: "Paper-based systems led to data loss, inconsistent records, and poor continuity of care across Kenyan health facilities.",
      whatIDid: [
        "Architected and built a scalable full-stack platform using React and OpenMRS integrated with FHIR standards for seamless data interoperability",
        "Developed comprehensive ANC/PNC modules with real-time validation and automated reporting to eliminate manual errors",
        "Implemented secure patient record management and continuity-of-care tracking systems serving thousands of mothers and children"
      ],
      results: [
        { metric: "1000+", label: "Health Workers Using", trend: "up" },
        { metric: "50K+", label: "Patient Records Managed", trend: "up" },
        { metric: "80%", label: "Data Entry Time Saved", trend: "down" },
        { metric: "100%", label: "MOH 216 Compliance", trend: "up" },
        { metric: "95%", label: "User Satisfaction", trend: "up" },
        { metric: "45+", label: "Indicators Digitized", trend: "up" }
      ],
      technologies: ["React", "OpenMRS", "FHIR", "Node.js", "Healthcare IT"],
      features: ["Digital Mother-Child Booklet", "ANC/PNC data capture", "Patient record management", "Reporting and analytics"],
      categories: ["Healthcare"],
      github: "https://github.com/Faqih001/mamashub-web",
      icon: <Shield className="w-6 h-6" />,
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 2,
      title: "AliXe FinTech",
      roles: ["Full-Stack Developer", "Software Developer / Engineer", "CTO"],
      dateRange: "Aug 2022 - Dec 2023",
      description: "Designed and led the development of a full-stack digital restaurant discovery, menu, booking, and analytics platform.",
      challenge: "Restaurants and diners lacked reliable digital tools for menus, real-time booking, and business insights.",
      whatIDid: [
        "Led technical architecture and full-stack development (React, Node.js, MongoDB) delivering a scalable production platform",
        "Implemented real-time table booking, digital menus, and WebSocket features that significantly improved user experience",
        "Built comprehensive analytics dashboards providing actionable insights for restaurant owners"
      ],
      results: [
        { metric: "1000+", label: "Restaurants Listed", trend: "up" },
        { metric: "50K+", label: "Monthly Users", trend: "up" },
        { metric: "80%", label: "Reservation Conversion", trend: "up" },
        { metric: "95%", label: "Owner Satisfaction", trend: "up" },
        { metric: "85%", label: "Repeat Diners", trend: "up" },
        { metric: "30%", label: "Faster Booking Flow", trend: "down" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "WebSocket"],
      features: ["Restaurant discovery", "Digital menus", "Real-time booking", "Analytics dashboard"],
      categories: ["FinTech"],
      award: "Best FinTech Innovation Award",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "KenyaEMR / OpenMRS 3.x (O3)",
      roles: ["Integration Engineer", "Full-Stack Developer", "Software Developer / Engineer", "Backend Developer"],
      dateRange: "Jun 2021 - Dec 2022",
      description: "Contributed significantly to Kenya's national health information system through integrations, enhancements, and deployments.",
      challenge: "Fragmented health systems created data silos affecting patient care and national reporting.",
      whatIDid: [
        "Led API integrations across multiple national health systems with robust middleware for real-time synchronization",
        "Developed and executed comprehensive testing and validation processes improving overall system reliability",
        "Trained healthcare workers and established SOPs for successful adoption across facilities"
      ],
      results: [
        { metric: "100+", label: "Facilities Integrated", trend: "up" },
        { metric: "95%", label: "Data Accuracy", trend: "up" },
        { metric: "500+", label: "Healthcare Workers Trained", trend: "up" },
        { metric: "99%", label: "System Uptime", trend: "up" },
        { metric: "200+", label: "API Endpoints Validated", trend: "up" },
        { metric: "60%", label: "Duplicate Records Reduced", trend: "down" }
      ],
      technologies: ["OpenMRS", "React", "APIs", "Web Services", "Jira", "Docker"],
      features: ["System integration", "Secure data exchange", "API validation", "User training"],
      categories: ["Healthcare"],
      liveUrl: "https://uat.kenyahmis.org/openmrs/spa/login",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      title: "eCHIS - Community Health Information System",
      roles: ["Backend Developer", "Full-Stack Developer", "Software Developer / Engineer", "Integration Engineer"],
      dateRange: "Mar 2021 - Aug 2021",
      description: "Developed community health data integration platform with offline capabilities and national DHIS2 synchronization.",
      challenge: "Community health workers needed reliable mobile-first tools for offline data capture and national reporting.",
      whatIDid: [
        "Built mobile-first data capture interfaces with robust offline functionality using React and Node.js",
        "Integrated the system with DHIS2 for seamless national health reporting",
        "Implemented reliable data synchronization protocols for field operations in low-connectivity areas"
      ],
      results: [
        { metric: "500+", label: "CHWs Onboarded", trend: "up" },
        { metric: "90%", label: "Offline Reliability", trend: "up" },
        { metric: "85%", label: "Data Sync Success", trend: "up" },
        { metric: "10K+", label: "Daily Records Captured", trend: "up" },
        { metric: "92%", label: "Field Worker Satisfaction", trend: "up" },
        { metric: "70%", label: "Faster Reporting", trend: "up" }
      ],
      technologies: ["React", "Node.js", "DHIS2", "APIs", "Mobile Integration"],
      features: ["Offline data capture", "National reporting", "Mobile-first design", "Data synchronization"],
      categories: ["Healthcare"],
      github: "https://github.com/Faqih001/echis-2.0-integration",
      icon: <Shield className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 5,
      title: "iHRIS Kenya",
      roles: ["Full-Stack Developer", "Software Developer / Engineer", "Frontend Developer"],
      dateRange: "Sep 2020 - Feb 2021",
      description: "Developed a comprehensive Human Resource Information System for health workforce management across Kenya.",
      challenge: "Lack of centralized visibility into health workforce deployment, training, and performance across 47 counties.",
      whatIDid: [
        "Built Vue.js frontend with FHIR-compliant data models for efficient HR management",
        "Developed deployment tracking, certificate management, and performance reporting modules",
        "Integrated dashboards providing real-time insights to stakeholders and county governments"
      ],
      results: [
        { metric: "5000+", label: "Health Workers Tracked", trend: "up" },
        { metric: "47", label: "Counties Covered", trend: "up" },
        { metric: "98%", label: "Data Accuracy", trend: "up" },
        { metric: "75%", label: "Deployment Efficiency", trend: "up" },
        { metric: "85%", label: "Training Completion Rate", trend: "up" },
        { metric: "60%", label: "Time Saved in HR Planning", trend: "down" }
      ],
      technologies: ["Vue.js", "Node.js", "FHIR", "MongoDB", "APIs"],
      features: ["Health workforce management", "Deployment tracking", "Performance reporting", "FHIR integration"],
      categories: ["Healthcare"],
      liveUrl: "https://v5-demo.ihris.org/",
      github: "https://github.com/Faqih001/iHRIS-Kenya",
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      title: "DamuKE - National Blood Management",
      roles: ["Backend Developer", "Full-Stack Developer", "Software Developer / Engineer"],
      dateRange: "Oct 2022 - Mar 2023",
      description: "Built national blood donation and transfusion management platform with donor-to-recipient workflows and inventory tracking.",
      challenge: "Critical challenges in blood inventory management, donor engagement, and hospital coordination leading to supply shortages.",
      whatIDid: [
        "Developed Laravel backend for donor registration, inventory tracking, and transfusion workflows",
        "Integrated SMS notification system for donor alerts and real-time reminders",
        "Implemented hospital integration modules ensuring seamless supply chain coordination"
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
      features: ["Donor management", "Blood inventory tracking", "Transfusion workflow", "SMS notifications"],
      categories: ["Healthcare"],
      liveUrl: "https://damuke.health.go.ke/",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-600"
    },
    {
      id: 7,
      title: "Agri-Senti WebApp",
      roles: ["Full-Stack Developer", "Software Developer / Engineer"],
      dateRange: "Jan 2023 - Jun 2023",
      description: "Built agri-tech marketplace connecting farmers with buyers for optimized supply chains and better market access.",
      challenge: "Farmers faced limited market access and price transparency while buyers struggled with reliable sourcing.",
      whatIDid: [
        "Developed full-stack farmer-buyer marketplace with real-time pricing algorithms using React and Node.js",
        "Integrated geo-location services for localized connections and supply chain optimization",
        "Built analytics dashboard for market trends and performance insights"
      ],
      results: [
        { metric: "300+", label: "Farmers Connected", trend: "up" },
        { metric: "35%", label: "Price Improvement", trend: "up" },
        { metric: "80%", label: "Buyer Satisfaction", trend: "up" },
        { metric: "50%", label: "Faster Market Access", trend: "up" },
        { metric: "KES 5M+", label: "Monthly Trade Value", trend: "up" },
        { metric: "90%", label: "Platform Reliability", trend: "up" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Maps API"],
      features: ["Farmer-buyer marketplace", "Real-time pricing", "Geo-location services", "Market analytics"],
      categories: ["AgriTech"],
      liveUrl: "https://nakuru-agri-senti-webapp.vercel.app/landing",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-600 to-lime-600"
    },
    {
      id: 8,
      title: "Project Management System (PMS)",
      roles: ["Lead Full-Stack Developer", "Software Developer / Engineer", "Full-Stack Developer"],
      dateRange: "Jul 2023 - Dec 2023",
      description: "Enterprise-grade project management and collaboration platform with task tracking, RBAC, and audit capabilities.",
      challenge: "Need for comprehensive workflow tracking, accountability, and audit compliance in financial operations.",
      whatIDid: [
        "Led development of TypeScript-based full-stack PMS with role-based access control and real-time collaboration",
        "Implemented audit logs, task dashboards, and WebSocket-powered team features",
        "Built reporting and timeline views ensuring full compliance and visibility"
      ],
      results: [
        { metric: "15+", label: "Teams Onboarded", trend: "up" },
        { metric: "70%", label: "Task Completion Rate", trend: "up" },
        { metric: "100%", label: "Audit Compliance", trend: "up" },
        { metric: "500+", label: "Projects Managed", trend: "up" },
        { metric: "95%", label: "Team Satisfaction", trend: "up" },
        { metric: "55%", label: "Communication Time Saved", trend: "down" }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "WebSocket"],
      features: ["Task management", "Role-based access", "Real-time collaboration", "Audit logs"],
      categories: ["Enterprise"],
      liveUrl: "https://argon-pms.vercel.app/",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 9,
      title: "Jira Vision Dashboard",
      roles: ["Frontend Developer", "Full-Stack Developer", "Software Developer / Engineer"],
      dateRange: "Feb 2024 - Apr 2024",
      description: "Real-time Jira analytics dashboard with performance metrics and data visualization for development teams.",
      challenge: "Teams lacked consolidated visual insights into sprint performance and productivity metrics.",
      whatIDid: [
        "Integrated Jira API and built interactive dashboards using Next.js and Charts.js",
        "Developed custom reporting and sprint analytics features for stakeholders",
        "Created responsive UI delivering real-time task tracking and performance visibility"
      ],
      results: [
        { metric: "10+", label: "Teams Using Platform", trend: "up" },
        { metric: "50%", label: "Reporting Time Saved", trend: "down" },
        { metric: "95%", label: "Sprint Visibility", trend: "up" },
        { metric: "98%", label: "Data Accuracy", trend: "up" },
        { metric: "85%", label: "User Adoption Rate", trend: "up" },
        { metric: "30%", label: "Faster Decision Making", trend: "up" }
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Jira API", "Charts.js"],
      features: ["Real-time tracking", "Performance metrics", "Sprint analytics", "Data visualization"],
      categories: ["Enterprise"],
      liveUrl: "https://jiravision.vercel.app/",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 10,
      title: "Medicare254",
      roles: ["Full-Stack Developer", "Software Developer / Engineer", "Backend Developer"],
      dateRange: "May 2024 - Aug 2024",
      description: "Secure digital healthcare platform for patient records, appointments, and billing with HIPAA compliance.",
      challenge: "Private clinics needed affordable, compliant digital record and appointment management systems.",
      whatIDid: [
        "Developed secure full-stack platform with JWT authentication and role-based access control",
        "Implemented HIPAA-compliant data handling, encryption, and prescription management",
        "Built appointment scheduling and billing modules for streamlined clinic operations"
      ],
      results: [
        { metric: "20+", label: "Clinics Onboarded", trend: "up" },
        { metric: "100%", label: "HIPAA Compliance", trend: "up" },
        { metric: "90%", label: "Patient Satisfaction", trend: "up" },
        { metric: "5000+", label: "Patient Records", trend: "up" },
        { metric: "99.9%", label: "System Uptime", trend: "up" },
        { metric: "65%", label: "Admin Time Reduced", trend: "down" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "JWT", "HIPAA Compliance"],
      features: ["Patient record management", "Appointment scheduling", "Billing integration", "HIPAA compliance"],
      categories: ["Healthcare"],
      liveUrl: "https://medicare254.vercel.app/",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-teal-600"
    },
    {
      id: 11,
      title: "Ovarian Cyst ML Diagnostic API",
      roles: ["Machine Learning Engineer", "AI Engineer", "Data Scientist", "Full-Stack Developer"],
      dateRange: "Sep 2024 - Nov 2024",
      description: "Machine learning-powered diagnostic tool for ovarian cyst detection using medical imaging data.",
      challenge: "Need for cost-effective AI tools to improve early detection in resource-limited healthcare settings.",
      whatIDid: [
        "Trained TensorFlow models on medical imaging datasets achieving high classification accuracy",
        "Built complete data preprocessing pipeline with Scikit-learn and inference engine",
        "Developed interactive Streamlit UI for result visualization and clinical reporting"
      ],
      results: [
        { metric: "92%", label: "Diagnostic Accuracy", trend: "up" },
        { metric: "500+", label: "Scans Analyzed", trend: "up" },
        { metric: "85%", label: "Early Detection Rate", trend: "up" },
        { metric: "80%", label: "Time Reduction", trend: "down" },
        { metric: "95%", label: "Provider Satisfaction", trend: "up" },
        { metric: "70%", label: "Cost Reduction", trend: "down" }
      ],
      technologies: ["Python", "TensorFlow", "Streamlit", "Scikit-learn", "Pandas"],
      features: ["ML diagnostics", "Image analysis", "Result visualization", "Clinical reporting"],
      categories: ["AI/ML", "Healthcare"],
      liveUrl: "https://ovarian-cyst-ml-api.streamlit.app/",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 12,
      title: "Mental Health Portal – Kenya",
      roles: ["Full-Stack Developer", "Software Developer / Engineer"],
      dateRange: "Dec 2021 - May 2022",
      description: "Public digital platform providing mental health resources, professional directory, and crisis support.",
      challenge: "Stigma and limited access to mental health information and services in Kenya.",
      whatIDid: [
        "Developed full-stack portal with CMS for content management and resource library",
        "Built professional directory with appointment booking and crisis helpline integration",
        "Implemented user-friendly interface to increase awareness and service access"
      ],
      results: [
        { metric: "50K+", label: "Monthly Visitors", trend: "up" },
        { metric: "200+", label: "Professionals Listed", trend: "up" },
        { metric: "85%", label: "User Engagement", trend: "up" },
        { metric: "40%", label: "Service Access Increase", trend: "up" },
        { metric: "90%", label: "Resource Satisfaction", trend: "up" },
        { metric: "24/7", label: "Crisis Support", trend: "up" }
      ],
      technologies: ["React", "Laravel", "MySQL", "CMS Integration"],
      features: ["Mental health resources", "Professional directory", "Crisis helpline", "Appointment booking"],
      categories: ["Healthcare"],
      liveUrl: "https://mental.health.go.ke/",
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 13,
      title: "RUSH (Akvo RTMIS)",
      roles: ["Full-Stack Developer", "Software Developer / Engineer"],
      dateRange: "Jun 2022 - Nov 2022",
      description: "Real-time monitoring system for WASH and public infrastructure projects across multiple counties.",
      challenge: "Lack of real-time visibility into infrastructure project progress and impact.",
      whatIDid: [
        "Built full-stack real-time monitoring dashboard using Django and React",
        "Integrated mapping services for geographic visualization of projects",
        "Developed mobile data capture tools for field teams"
      ],
      results: [
        { metric: "1000+", label: "Projects Monitored", trend: "up" },
        { metric: "30+", label: "Counties Covered", trend: "up" },
        { metric: "85%", label: "Data Accuracy", trend: "up" },
        { metric: "50K+", label: "Beneficiaries Tracked", trend: "up" },
        { metric: "95%", label: "Stakeholder Satisfaction", trend: "up" },
        { metric: "70%", label: "Faster Impact Assessment", trend: "up" }
      ],
      technologies: ["React", "Python", "PostgreSQL", "Django", "Maps API"],
      features: ["Real-time monitoring", "Geographic visualization", "Mobile data capture", "Reporting dashboard"],
      categories: ["Public Sector"],
      liveUrl: "https://rtmis.akvo.org/",
      icon: <Database className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 14,
      title: "Web Capture Tool (PWA)",
      roles: ["Frontend Developer", "Full-Stack Developer", "Software Developer / Engineer"],
      dateRange: "Jan 2024 - Mar 2024",
      description: "Offline-first Progressive Web App for structured field data capture with automatic synchronization.",
      challenge: "Field teams needed robust tools for data collection in areas with unreliable internet.",
      whatIDid: [
        "Developed PWA with Service Workers and IndexedDB for full offline functionality",
        "Implemented photo capture, GPS tagging, and form validation features",
        "Built reliable sync mechanisms ensuring 100% data integrity upon reconnection"
      ],
      results: [
        { metric: "95%", label: "Offline Reliability", trend: "up" },
        { metric: "100%", label: "Sync Success Rate", trend: "up" },
        { metric: "10K+", label: "Records Captured", trend: "up" },
        { metric: "75%", label: "Field Team Efficiency", trend: "up" },
        { metric: "92%", label: "User Satisfaction", trend: "up" },
        { metric: "60%", label: "Data Collection Speed", trend: "up" }
      ],
      technologies: ["React", "PWA", "IndexedDB", "Service Workers", "Sync API"],
      features: ["Offline data capture", "Photo & GPS tagging", "Automatic sync", "Form validation"],
      categories: ["Tools"],
      liveUrl: "https://structure-web-capture-tool.vercel.app/",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 15,
      title: "HomeworkHelper - AI-Powered Homework Assistant",
      roles: ["Full-Stack Developer", "AI Engineer", "Software Developer / Engineer"],
      dateRange: "Apr 2024 - Jun 2024",
      description: "AI-powered educational platform providing step-by-step homework assistance using Google Gemini.",
      challenge: "Parents and students struggled with tracking and completing assignments during remote learning.",
      whatIDid: [
        "Integrated Google Gemini AI for intelligent homework assistance and image analysis",
        "Built full-stack platform with Supabase backend, payment integration, and progress tracking",
        "Developed responsive UI with multi-subject support and adaptive learning flows"
      ],
      results: [
        { metric: "3K+", label: "Students Supported", trend: "up" },
        { metric: "50K+", label: "Questions Answered", trend: "up" },
        { metric: "85%", label: "User Satisfaction", trend: "up" },
        { metric: "75%", label: "Homework Completion Increase", trend: "up" },
        { metric: "95%", label: "AI Accuracy", trend: "up" },
        { metric: "92%", label: "Parent Adoption", trend: "up" }
      ],
      technologies: ["React", "Node.js", "Supabase", "Google Gemini", "Mpesa", "TypeScript"],
      features: ["AI Homework Help", "Image Analysis", "Progress Tracking", "Payment Integration"],
      categories: ["AI/ML", "Education"],
      liveUrl: "https://parent-assignment-helper.vercel.app/",
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 16,
      title: "AmiTech Donation Platform",
      roles: ["Full-Stack Developer", "Software Developer / Engineer", "Backend Developer"],
      dateRange: "Jul 2024 - Sep 2024",
      description: "Secure mobile money donation platform with real-time payments and donor management.",
      challenge: "Non-profits needed transparent, automated donation processing with receipt generation.",
      whatIDid: [
        "Integrated Mpesa API for seamless real-time payment processing and validation",
        "Built full-stack platform with donor tracking, receipt automation, and admin dashboard",
        "Implemented secure transaction flows ensuring high reliability and user trust"
      ],
      results: [
        { metric: "KES 5M+", label: "Donations Processed", trend: "up" },
        { metric: "99.5%", label: "Transaction Success", trend: "up" },
        { metric: "1500+", label: "Donors Registered", trend: "up" },
        { metric: "90%", label: "Donor Retention", trend: "up" },
        { metric: "50+", label: "Organizations Supported", trend: "up" },
        { metric: "95%", label: "Platform Reliability", trend: "up" }
      ],
      technologies: ["React", "Node.js", "Mpesa API", "MongoDB", "Express"],
      features: ["Mpesa Payments", "Donor Tracking", "Receipt Generation", "Admin Dashboard"],
      categories: ["FinTech"],
      liveUrl: "https://amitech-donations.onrender.com/",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 17,
      title: "CryptoBuddy – Analytics Platform",
      roles: ["Data Engineer", "Machine Learning Engineer", "AI Engineer", "Full-Stack Developer"],
      dateRange: "Oct 2023 - Dec 2023",
      description: "Cryptocurrency portfolio tracking and analytics platform with multi-exchange integration.",
      challenge: "Investors needed consolidated real-time insights across multiple exchanges.",
      whatIDid: [
        "Built data aggregation pipelines using Pandas for multi-exchange market data",
        "Developed interactive Streamlit dashboards with real-time price tracking and AI summaries",
        "Implemented portfolio performance visualization and alert systems"
      ],
      results: [
        { metric: "1000+", label: "Active Users", trend: "up" },
        { metric: "5", label: "Exchanges Integrated", trend: "up" },
        { metric: "50+", label: "Cryptocurrencies Tracked", trend: "up" },
        { metric: "99%", label: "Data Accuracy", trend: "up" },
        { metric: "88%", label: "User Satisfaction", trend: "up" },
        { metric: "24/7", label: "Real-Time Tracking", trend: "up" }
      ],
      technologies: ["Python", "Streamlit", "Pandas", "APIs", "Charts"],
      features: ["Portfolio Tracking", "Price Analytics", "Market Trends", "Real-time Updates"],
      categories: ["FinTech", "AI/ML"],
      liveUrl: "https://cryptobuddy254.streamlit.app/",
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 18,
      title: "Guriflex – Real Estate Marketplace",
      roles: ["Lead Full-Stack Developer", "Full-Stack Developer", "Software Developer / Engineer"],
      dateRange: "Mar 2023 - Aug 2023",
      description: "Professional real estate marketplace for property listings, search, and secure transactions in Kenya.",
      challenge: "Need for credible digital platform to connect buyers, sellers, and verified listings.",
      whatIDid: [
        "Led Next.js full-stack development with advanced search, filtering, and property management",
        "Integrated secure payment gateway and admin verification workflows",
        "Built responsive user and admin dashboards for seamless marketplace operations"
      ],
      results: [
        { metric: "500+", label: "Properties Listed", trend: "up" },
        { metric: "150%", label: "Online Inquiries", trend: "up" },
        { metric: "85%", label: "Customer Satisfaction", trend: "up" },
        { metric: "2000+", label: "Monthly Visitors", trend: "up" },
        { metric: "95%", label: "Listing Accuracy", trend: "up" },
        { metric: "30%", label: "Transaction Time Reduced", trend: "down" }
      ],
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "IntaSend", "TypeScript"],
      features: ["Property listings", "Advanced search", "Secure payments", "Admin verification"],
      categories: ["Real Estate"],
      liveUrl: "https://guriflex.co.ke/",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 19,
      title: "Cardiff Global Limited (CGL)",
      roles: ["Full-Stack Developer", "Software Developer / Engineer", "Frontend Developer"],
      dateRange: "Sep 2023 - Nov 2023",
      description: "Corporate website showcasing logistics, security, and infrastructure services across East & Central Africa.",
      challenge: "Need for professional digital presence to attract enterprise clients.",
      whatIDid: [
        "Developed modern Next.js corporate website with responsive design and service showcases",
        "Implemented contact forms, portfolio sections, and testimonial management",
        "Optimized for mobile and SEO to maximize reach across multiple countries"
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
      features: ["Service showcase", "Project portfolio", "Contact forms", "Responsive design"],
      categories: ["Corporate"],
      liveUrl: "https://www.cgl-support.com/",
      icon: <Database className="w-6 h-6" />,
      color: "from-gray-700 to-gray-900"
    },
    {
      id: 20,
      title: "Kulthum Limited",
      roles: ["Full-Stack Developer", "Software Developer / Engineer"],
      dateRange: "Dec 2023 - Feb 2024",
      description: "Unified corporate platform and dashboards for construction, catering, and waste management divisions.",
      challenge: "Diversified operations lacked integrated digital platform for client and project management.",
      whatIDid: [
        "Built multi-division platform with dedicated dashboards using React and Node.js",
        "Developed client portals for project tracking and service requests",
        "Implemented cross-departmental reporting and analytics system"
      ],
      results: [
        { metric: "60%", label: "Operational Efficiency", trend: "up" },
        { metric: "100+", label: "Active Clients", trend: "up" },
        { metric: "500+", label: "Projects Tracked", trend: "up" },
        { metric: "92%", label: "Client Retention", trend: "up" },
        { metric: "45%", label: "Response Time Reduced", trend: "down" },
        { metric: "3", label: "Divisions Integrated", trend: "up" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      features: ["Service management", "Client portal", "Project tracking", "Analytics reporting"],
      categories: ["Corporate"],
      liveUrl: "https://www.kulthumlimited.co.ke/",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-700 to-indigo-800"
    },
    {
      id: 21,
      title: "Digi Farms — Digital Agriculture Platform",
      roles: ["Chief Technology Officer", "Lead Full-Stack Developer", "Full-Stack Developer", "AI Engineer"],
      dateRange: "Nov 2025 - Mar 2026",
      description: "Comprehensive digital agriculture platform for farm management, marketplace, diagnostics, and financing.",
      challenge: "Smallholder farmers lacked integrated tools for management, sales, and access to finance.",
      whatIDid: [
        "Led architecture and full-stack development using Next.js, TypeScript, and Prisma",
        "Built marketplace with Stripe payments, farm profiles, and ML crop diagnostics",
        "Implemented role-based auth, loan workflows, and comprehensive analytics dashboards"
      ],
      results: [
        { metric: "1,000+", label: "Farms Listed", trend: "up" },
        { metric: "25K+", label: "Monthly Users", trend: "up" },
        { metric: "60%", label: "Marketplace Conversion", trend: "up" },
        { metric: "90%+", label: "Owner Satisfaction", trend: "up" },
        { metric: "30%", label: "Faster Order Flow", trend: "down" },
        { metric: "95%", label: "Platform Reliability", trend: "up" }
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Google Maps", "NextAuth"],
      features: ["Farm management", "Marketplace & payments", "ML diagnostics", "Loan workflows"],
      categories: ["AgriTech", "AI/ML"],
      liveUrl: "https://digi-farms.vercel.app/",
      icon: <Code className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 22,
      title: "KiiBridge Stock Tracker",
      roles: ["Full-Stack Developer", "AI Engineer", "Data Engineer", "Software Developer / Engineer"],
      dateRange: "May 2026 - Present",
      description: "AI-powered stock market intelligence platform with real-time tracking, alerts, and insights.",
      challenge: "Retail investors needed consolidated real-time data and actionable AI insights.",
      whatIDid: [
        "Built real-time platform using Next.js, Finnhub API, and AI-powered summaries",
        "Implemented watchlists, price alerts, and automated notification workflows",
        "Developed secure authentication and admin dashboard for platform management"
      ],
      results: [
        { metric: "10K+", label: "Stocks Indexed", trend: "up" },
        { metric: "95%", label: "Alert Accuracy", trend: "up" },
        { metric: "5K+", label: "Alerts Delivered", trend: "up" },
        { metric: "99.9%", label: "Workflow Reliability", trend: "up" },
        { metric: "40%", label: "Decision Time Reduced", trend: "down" },
        { metric: "88%", label: "User Satisfaction", trend: "up" }
      ],
      technologies: ["Next.js", "TypeScript", "MongoDB", "Finnhub", "Gemini AI"],
      features: ["Real-time tracking", "AI summaries", "Watchlists & alerts", "Performance analytics"],
      categories: ["AI/ML", "FinTech"],
      github: "https://github.com/Faqih001/kiibridge-stock-tracker-app",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 23,
      title: "KiiBridge Converso AI Tutor",
      roles: ["Full-Stack Developer", "AI Engineer", "Software Developer / Engineer"],
      dateRange: "May 2026 - Present",
      description: "AI-powered SaaS learning platform with voice tutors, subscriptions, and personalized sessions.",
      challenge: "Students required adaptive, scalable personalized tutoring experiences.",
      whatIDid: [
        "Built full-stack SaaS LMS using Next.js and Supabase with Clerk auth",
        "Integrated Vapi voice AI agents for interactive tutoring sessions",
        "Implemented subscription management and learning analytics dashboards"
      ],
      results: [
        { metric: "500+", label: "Learning Sessions", trend: "up" },
        { metric: "90%", label: "Student Engagement", trend: "up" },
        { metric: "4.8/5", label: "Tutor Rating", trend: "up" },
        { metric: "75%", label: "Session Retention", trend: "up" },
        { metric: "100%", label: "Platform Availability", trend: "up" },
        { metric: "85%", label: "User Satisfaction", trend: "up" }
      ],
      technologies: ["Next.js", "Supabase", "Clerk", "Vapi", "Tailwind CSS"],
      features: ["AI Voice Tutors", "Subscription Billing", "Session History", "Learning Analytics"],
      categories: ["AI/ML", "Education"],
      github: "https://github.com/Faqih001/kiibridge-saas-app",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 24,
      title: "KiiBridge AI Interview Platform",
      roles: ["Full-Stack Developer", "AI Engineer", "Software Developer / Engineer"],
      dateRange: "Apr 2026 - Present",
      description: "AI-powered mock interview simulator with personalized feedback and performance tracking.",
      challenge: "Job seekers needed realistic practice and actionable feedback before real interviews.",
      whatIDid: [
        "Developed AI interview simulator using Gemini for speech and text evaluation",
        "Built personalized scoring, feedback engine, and analytics dashboard",
        "Implemented interview history and progress tracking features"
      ],
      results: [
        { metric: "1K+", label: "Mock Interviews", trend: "up" },
        { metric: "88%", label: "User Satisfaction", trend: "up" },
        { metric: "65%", label: "Confidence Increase", trend: "up" },
        { metric: "500+", label: "Users Prepared", trend: "up" },
        { metric: "90%", label: "Feedback Quality", trend: "up" },
        { metric: "85%", label: "Completion Rate", trend: "up" }
      ],
      technologies: ["Next.js", "TypeScript", "Firebase", "Gemini AI", "Tailwind CSS"],
      features: ["Mock Interviews", "AI Feedback", "Performance Analytics", "Interview History"],
      categories: ["AI/ML"],
      github: "https://github.com/Faqih001/kiibridge-ai-interview-platform",
      icon: <Code className="w-6 h-6" />,
      color: "from-violet-500 to-purple-600"
    },
    {
      id: 25,
      title: "KiiBridge Expense Tracker",
      roles: ["Frontend Developer", "Full-Stack Developer", "Software Developer / Engineer"],
      dateRange: "Mar 2026 - Present",
      description: "Modern personal finance app for expense tracking, budgeting, and financial insights.",
      challenge: "Users needed better tools to understand spending patterns and achieve financial goals.",
      whatIDid: [
        "Built responsive dashboard with interactive charts using Chart.js",
        "Implemented expense categorization, budgeting, and goal tracking features",
        "Developed comprehensive reporting and trend analysis system"
      ],
      results: [
        { metric: "95%", label: "Budget Tracking Accuracy", trend: "up" },
        { metric: "40%", label: "Financial Awareness Increase", trend: "up" },
        { metric: "1K+", label: "Transactions Managed", trend: "up" },
        { metric: "90%", label: "User Satisfaction", trend: "up" },
        { metric: "85%", label: "Goal Achievement Rate", trend: "up" },
        { metric: "70%", label: "Time Saved on Tracking", trend: "down" }
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      features: ["Expense Tracking", "Budget Planning", "Savings Goals", "Financial Analytics"],
      categories: ["FinTech"],
      github: "https://github.com/Faqih001/kiibridge-expense-tracker",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 26,
      title: "KiiBridge Banking Platform",
      roles: ["Full-Stack Developer", "Software Developer / Engineer", "Backend Developer"],
      dateRange: "Feb 2026 - Present",
      description: "Modern digital banking platform with account management, transactions, and security features.",
      challenge: "Need for secure, user-friendly digital banking experiences with strong compliance.",
      whatIDid: [
        "Developed secure full-stack banking workflows with account and transaction management",
        "Implemented authentication, financial analytics, and integration with external services",
        "Built responsive interfaces ensuring excellent user experience across devices"
      ],
      results: [
        { metric: "99.9%", label: "Platform Security", trend: "up" },
        { metric: "5K+", label: "Transactions Simulated", trend: "up" },
        { metric: "98%", label: "Data Integrity", trend: "up" },
        { metric: "95%", label: "User Satisfaction", trend: "up" },
        { metric: "90%", label: "System Uptime", trend: "up" },
        { metric: "85%", label: "Adoption Rate", trend: "up" }
      ],
      technologies: ["Next.js", "Appwrite", "Plaid", "Dwolla", "TypeScript"],
      features: ["Account Management", "Transaction History", "Secure Authentication", "Financial Insights"],
      categories: ["FinTech"],
      github: "https://github.com/Faqih001/kiibridge-banking-app",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 27,
      title: "Brainwave AI SaaS Platform",
      roles: ["Full-Stack Developer", "AI Engineer", "Software Developer / Engineer"],
      dateRange: "Jan 2026 - Present",
      description: "Modern AI SaaS platform offering content generation, automation, and subscription services.",
      challenge: "Businesses needed accessible AI tools to automate content and workflows.",
      whatIDid: [
        "Built complete SaaS architecture with authentication, subscriptions, and usage tracking",
        "Integrated OpenAI for intelligent content generation and workflow automation",
        "Developed admin dashboards and multi-tenant features for scalability"
      ],
      results: [
        { metric: "2K+", label: "Generated Outputs", trend: "up" },
        { metric: "90%", label: "Automation Success", trend: "up" },
        { metric: "70%", label: "Time Saved", trend: "down" },
        { metric: "95%", label: "User Satisfaction", trend: "up" },
        { metric: "85%", label: "Retention Rate", trend: "up" },
        { metric: "99%", label: "Platform Uptime", trend: "up" }
      ],
      technologies: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS", "Stripe"],
      features: ["AI Content Generation", "Workflow Automation", "Subscription Management", "Analytics Dashboard"],
      categories: ["AI/ML"],
      github: "https://github.com/Faqih001/brainwave-ai-saas",
      icon: <Code className="w-6 h-6" />,
      color: "from-fuchsia-500 to-pink-600"
    },
    {
      id: 28,
      title: "KiiBridge Job Portal",
      roles: ["Full-Stack Developer", "AI Engineer", "Software Developer / Engineer"],
      dateRange: "Jun 2026 - Present",
      description: "AI-powered recruitment platform with intelligent matching, application tracking, and analytics.",
      challenge: "Fragmented hiring processes with poor candidate-job matching and visibility.",
      whatIDid: [
        "Built end-to-end recruitment platform with role-based dashboards for employers and candidates",
        "Implemented AI-powered matching engine and application tracking system",
        "Developed analytics and performance reporting features"
      ],
      results: [
        { metric: "1K+", label: "Applications Managed", trend: "up" },
        { metric: "85%", label: "Matching Accuracy", trend: "up" },
        { metric: "60%", label: "Hiring Time Reduced", trend: "down" },
        { metric: "90%", label: "User Satisfaction", trend: "up" },
        { metric: "95%", label: "Platform Reliability", trend: "up" },
        { metric: "80%", label: "Candidate Engagement", trend: "up" }
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
      features: ["Job Listings", "AI Candidate Matching", "Application Tracking", "Analytics Dashboard"],
      categories: ["AI/ML", "Enterprise"],
      github: "https://github.com/Faqih001/kiibridge-job-portal",
      icon: <Building className="w-6 h-6" />,
      color: "from-slate-600 to-slate-800"
    }
  ];

  const categories = [
    "All",
    "AI/ML",
    "Healthcare",
    "FinTech",
    "AgriTech",
    "Enterprise",
    "Public Sector",
    "Education",
    "Tools",
    "Real Estate",
    "Corporate"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => (project.categories || []).includes(selectedCategory));

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 leading-tight">
            Full-Stack Developer <span className="text-primary">+ AI/ML Specialist</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering production-grade, scalable full-stack applications and intelligent AI solutions that drive measurable impact for enterprises and organizations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`hover-scale text-sm md:text-base px-5 py-2 transition-all ${selectedCategory === category ? "ring-2 ring-primary" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-16">
          {filteredProjects.map((project, index) => {
            const projectCategories = project.categories || [];
            return (
              <Card
                key={project.id}
                className="group hover-scale transition-all duration-300 shadow-card hover:shadow-glow border h-full flex flex-col animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projectCategories.map((cat, idx) => (
                      <Badge key={idx} variant="destructive" className="text-xs bg-pink-600 hover:bg-pink-700 border-0">
                        {cat}
                      </Badge>
                    ))}
                    {project.award && (
                      <Badge variant="secondary" className="text-xs bg-primary text-primary-foreground border-0">
                        🏆 {project.award}
                      </Badge>
                    )}
                  </div>

                  {project.roles && project.roles.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.roles.map((role, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs font-medium border-primary/30 bg-primary/5 text-primary hover:bg-primary/10">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="space-y-2">
                    {project.dateRange && <div className="text-xs text-muted-foreground">{project.dateRange}</div>}
                    <CardTitle className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col space-y-5 text-sm">
                  {project.challenge && (
                    <div>
                      <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-wider mb-2">THE CHALLENGE</h4>
                      <p className="text-foreground leading-relaxed">{project.challenge}</p>
                    </div>
                  )}

                  {project.whatIDid && project.whatIDid.length > 0 && (
                    <div>
                      <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-wider mb-2">WHAT I DID</h4>
                      <ul className="space-y-2 text-foreground">
                        {project.whatIDid.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2 flex-shrink-0 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.results && project.results.length > 0 && (
                    <div>
                      <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-wider mb-3">KEY RESULTS & IMPACT</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="border border-border rounded-lg p-3 text-center hover:border-primary/50 transition-colors">
                            <div className="flex items-center justify-center gap-1 text-base font-bold text-primary mb-1">
                              {result.metric}
                              {result.trend === "up" ? <TrendingUp className="h-3.5 w-3.5 text-green-500" /> : <TrendingDown className="h-3.5 w-3.5 text-green-500" />}
                            </div>
                            <div className="text-xs text-muted-foreground leading-tight">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-auto">
                    <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-wider mb-2">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs hover:border-primary hover:text-primary transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 mt-auto">
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" /> Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto animate-fade-in">
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build High-Impact Solutions?</h3>
              <p className="mb-8 opacity-90 text-base md:text-lg">
                Experienced Full-Stack & AI/ML Specialist delivering scalable, secure systems that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://github.com/Faqih001" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" /> GitHub Profile
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20 text-white" asChild>
                  <Link to="/contact">
                    <ExternalLink className="w-5 h-5 mr-2" /> Get In Touch
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