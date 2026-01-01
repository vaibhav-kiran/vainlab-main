import { cn } from "@/lib/utils";

interface FrostedGlassBoxProps {
  children: React.ReactNode;
  className?: string;
}

const FrostedGlassBox = ({ children, className }: FrostedGlassBoxProps) => {
  return (
    <div className={cn("frosted-glass-box", className)}>
      {children}
    </div>
  );
};

export default FrostedGlassBox;
