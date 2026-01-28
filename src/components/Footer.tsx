import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FM</span>
              </div>
              <span className="font-inter font-semibold text-lg">Fakii Mohammed</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Innovative Full-Stack Developer & AI Enthusiast driving digital transformation
              in Kenya's healthcare and fintech sectors.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>fakiiahmad001@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+254 741 140 250</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Nakuru, Kenya
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/fakii-mohammed-a96a84213/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-glow"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Faqih001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-glow"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Fakii Mohammed. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Available for collaboration • Mon–Fri, 9 AM–5 PM EAT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;