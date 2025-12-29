import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AuroraBackground from '@/components/AuroraBackground';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

const projects = [
  {
    name: 'Smart Health Monitor',
    description: 'IoT-based health monitoring system with real-time vitals tracking and mobile app integration.',
    tags: ['IoT', 'Biomedical', 'Arduino'],
    price: '₹4,999',
  },
  {
    name: 'AI Crop Disease Detector',
    description: 'Machine learning model that identifies crop diseases from leaf images with 95% accuracy.',
    tags: ['AI', 'TensorFlow', 'Python'],
    price: '₹3,499',
  },
  {
    name: 'Smart Home Automation',
    description: 'Complete home automation system with voice control, scheduling, and energy monitoring.',
    tags: ['IoT', 'Raspberry Pi', 'Node.js'],
    price: '₹5,999',
  },
  {
    name: 'Gesture Recognition System',
    description: 'Real-time hand gesture recognition for contactless device control using computer vision.',
    tags: ['AI', 'Python', 'TensorFlow'],
    price: '₹4,499',
  },
  {
    name: 'ECG Analysis Dashboard',
    description: 'Web-based ECG signal analysis tool with arrhythmia detection and PDF report generation.',
    tags: ['Biomedical', 'React', 'Python'],
    price: '₹6,499',
  },
  {
    name: 'Weather Station IoT',
    description: 'Wireless weather monitoring station with cloud data logging and trend analysis.',
    tags: ['IoT', 'Arduino', 'Node.js'],
    price: '₹2,999',
  },
];

const Buy = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground isStatic />
      
      <main className="relative z-10 px-6 py-12 max-w-7xl mx-auto">
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
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Ready-Made <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Perfect for students, hackathons, and quick deployments.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        {/* Coming Soon */}
        <div className="text-center py-12 border-t border-border/30">
          <p className="text-muted-foreground/70 text-lg">
            More projects coming soon...
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Buy;
