import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-transparent text-center">
      <div className="container mx-auto">
        <p className="font-bold text-lg gradient-text">VAIN LABS</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="mailto:vaibhavkiran.work@gmail.com" className="text-muted-foreground hover:text-primary">
            <Mail />
          </a>
          <a href="https://wa.me/917736605542" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <MessageCircle />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Linkedin />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Github />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;