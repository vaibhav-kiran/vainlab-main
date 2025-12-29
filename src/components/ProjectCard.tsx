import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  name: string;
  description: string;
  tags: string[];
  price: string;
}

const tagColors: Record<string, string> = {
  'AI': 'from-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-blue))]',
  'IoT': 'from-[hsl(var(--gradient-cyan))] to-[hsl(var(--gradient-blue))]',
  'Biomedical': 'from-[hsl(var(--gradient-pink))] to-[hsl(var(--gradient-purple))]',
  'Python': 'from-[hsl(200,80%,50%)] to-[hsl(180,80%,50%)]',
  'Arduino': 'from-[hsl(180,80%,50%)] to-[hsl(160,80%,50%)]',
  'React': 'from-[hsl(190,80%,60%)] to-[hsl(210,80%,60%)]',
  'TensorFlow': 'from-[hsl(30,80%,55%)] to-[hsl(50,80%,55%)]',
  'Raspberry Pi': 'from-[hsl(340,80%,55%)] to-[hsl(320,80%,55%)]',
  'Node.js': 'from-[hsl(140,60%,45%)] to-[hsl(120,60%,45%)]',
};

const ProjectCard = ({ name, description, tags, price }: ProjectCardProps) => {
  return (
    <div className="group relative glass-strong rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_hsl(var(--gradient-purple)/0.3)]">
      {/* Subtle gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] gradient-border">
        <div className="w-full h-full rounded-2xl bg-background" />
      </div>
      
      <div className="relative z-10">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${tagColors[tag] || 'from-muted to-muted'} text-foreground font-medium`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <span className="text-lg font-semibold text-foreground">{price}</span>
          <Button 
            className="bg-gradient-to-r from-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-blue))] hover:opacity-90 text-foreground font-medium"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
