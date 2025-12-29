import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import AuroraBackground from '@/components/AuroraBackground';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  contact: z.string().min(5, 'Please enter a valid email or WhatsApp number'),
  projectType: z.string().min(1, 'Please select a project type'),
  deadline: z.date().optional(),
  budgetRange: z.string().optional(),
  ideaDescription: z.string().min(20, 'Please describe your idea in at least 20 characters'),
});

type FormData = z.infer<typeof formSchema>;

const Build = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      contact: '',
      projectType: '',
      budgetRange: '',
      ideaDescription: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('project_submissions').insert({
        name: data.name,
        contact: data.contact,
        project_type: data.projectType,
        deadline: data.deadline?.toISOString().split('T')[0],
        budget_range: data.budgetRange || null,
        idea_description: data.ideaDescription,
      });

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <AuroraBackground isStatic />
        
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
          <div className="glass-strong rounded-3xl p-12 max-w-md text-center animate-fade-in-up">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-cyan))] flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-foreground" />
            </div>
            <h2 className="font-display text-2xl font-bold mb-3">
              We've received your idea <Rocket className="inline w-6 h-6" />
            </h2>
            <p className="text-muted-foreground mb-8">
              We'll contact you within 24 hours.
            </p>
            <Link to="/">
              <Button variant="outline" className="border-border/50 hover:bg-secondary">
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground isStatic />
      
      <main className="relative z-10 px-6 py-12 max-w-2xl mx-auto">
        {/* Back Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </Link>
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Have an idea? <span className="gradient-text">We'll build it.</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            From concept to prototype.
          </p>
        </div>
        
        {/* Form */}
        <div className="glass-strong rounded-3xl p-8 animate-fade-in-up-delayed">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Contact */}
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email / WhatsApp *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your@email.com or +91 XXXXXXXXXX" 
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Project Type */}
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-secondary/50 border-border/50">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="student">Student Project</SelectItem>
                        <SelectItem value="biomedical">Biomedical</SelectItem>
                        <SelectItem value="ai">AI / Machine Learning</SelectItem>
                        <SelectItem value="iot">IoT / Embedded</SelectItem>
                        <SelectItem value="startup">Startup MVP</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Deadline */}
              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Deadline (Optional)</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal bg-secondary/50 border-border/50",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a deadline</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Budget Range */}
              <FormField
                control={form.control}
                name="budgetRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Range (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-secondary/50 border-border/50">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                        <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                        <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                        <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                        <SelectItem value="above-50k">Above ₹50,000</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Idea Description */}
              <FormField
                control={form.control}
                name="ideaDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Describe Your Idea *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your project idea, requirements, and any specific features you need..."
                        className="bg-secondary/50 border-border/50 focus:border-primary min-h-[120px] resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-cyan))] hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? 'Submitting...' : 'Build My Project'}
              </Button>
              
              {/* Timeline Promise */}
              <p className="text-center text-sm text-muted-foreground/70">
                Response within 24 hours • Delivery timeline discussed upfront
              </p>
            </form>
          </Form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Build;
