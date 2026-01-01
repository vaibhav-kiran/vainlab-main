import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface GlassButtonProps {
  to: string;
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const GlassButton = ({ to, children, subtitle, className, variant = 'primary' }: GlassButtonProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "group relative flex flex-col items-center justify-center px-12 py-6 min-w-[220px] overflow-hidden",
        "glass rounded-2xl",
        "transition-all duration-300 ease-out",
        "hover:scale-105 active:scale-100",
        variant === 'primary' 
          ? "hover:shadow-[0_0_60px_-10px_hsl(var(--gradient-gold)/0.6)]"
          : "hover:shadow-[0_0_60px_-10px_hsl(var(--gradient-gold)/0.6)]",
        "active:glow-pulse",
        "light-sweep",
        className
      )}
    >
      {/* Gradient border */}
      <div className={cn(
        "absolute inset-0 rounded-2xl transition-opacity duration-500 p-[1px]",
        variant === 'primary'
          ? "opacity-20 group-hover:opacity-100 gradient-border"
          : "opacity-20 group-hover:opacity-100 gradient-border"
      )}>
        <div className="w-full h-full rounded-2xl bg-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <span className={cn(
          "text-2xl font-display font-semibold transition-all duration-300",
          variant === 'primary'
            ? "text-foreground group-hover:gradient-text"
            : "text-foreground/80 group-hover:text-foreground"
        )}>
          {children}
        </span>
        {subtitle && (
          <div className="h-6 mt-1 overflow-hidden">
            <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-full">
              <span className="text-sm text-muted-foreground/60">{subtitle}</span>
              <span className="text-sm text-muted-foreground mt-1">{subtitle}</span>
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default GlassButton;