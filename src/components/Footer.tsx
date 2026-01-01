import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 bg-transparent text-center border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-bold text-xl sm:text-2xl gradient-text mb-6">VAIN LABS</p>
        <div className="flex justify-center gap-6 sm:gap-8">
          <a 
            href="mailto:vaibhavkiran.work@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://wa.me/917736605542" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://www.github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;