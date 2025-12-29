import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface GlassButtonProps {
  to: string;
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

const GlassButton = ({ to, children, subtitle, className }: GlassButtonProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "group relative flex flex-col items-center justify-center px-12 py-6 min-w-[200px]",
        "glass rounded-2xl",
        "transition-all duration-500 ease-out",
        "hover:scale-105 hover:bg-[hsl(var(--glass-bg)/0.8)]",
        "hover:shadow-[0_0_60px_-10px_hsl(var(--gradient-gold)/0.5)]",
        "hover:border-[hsl(var(--glass-border)/0.3)]",
        className
      )}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] gradient-border">
        <div className="w-full h-full rounded-2xl bg-background" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-2xl font-display font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
          {children}
        </span>
        {subtitle && (
          <span className="mt-2 text-sm text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
            {subtitle}
          </span>
        )}
      </div>
    </Link>
  );
};

export default GlassButton;
