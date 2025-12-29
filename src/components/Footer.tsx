import { Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-6 z-20">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground/70">
        <a 
          href="mailto:vaibhavkiran.work@gmail.com" 
          className="flex items-center gap-2 hover:text-[hsl(var(--gradient-gold))] transition-colors duration-300 group"
        >
          <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>vaibhavkiran.work@gmail.com</span>
        </a>
        <span className="hidden sm:inline text-muted-foreground/30">•</span>
        <a 
          href="https://wa.me/917736605542" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[hsl(var(--gradient-gold))] transition-colors duration-300 group"
        >
          <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>+91 7736605542</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
