import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Cpu, Database, Server, Cloud, ChevronRight, Check } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';

interface ArchLayer {
  id: string;
  name: string;
  icon: React.ReactNode;
  summary: string;
  technologies: string[];
  practices: string[];
}

export const ArchitectureCanvas: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>('frontend');

  const layers: ArchLayer[] = [
    {
      id: 'frontend',
      name: 'Frontend Presentation',
      icon: <Monitor className="w-5 h-5" />,
      summary: 'Responsive, highly optimized visual environments. Prioritizes state consistency, semantic layouts, and fluid 60 FPS telemetry canvas layers.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Cytoscape.js', 'Plotly.js', 'Streamlit'],
      practices: ['Web Worker offloading', 'OffscreenCanvas rendering', 'Responsive grids', 'ARIA compliance', 'SEO head parameters']
    },
    {
      id: 'api',
      name: 'API & Orchestration',
      icon: <Server className="w-5 h-5" />,
      summary: 'Secure microservices parsing JSON payloads and handling real-time WebSockets connections. Designed with strict route validations and authentication gates.',
      technologies: ['Python', 'FastAPI', 'Node.js', 'Express', 'WebSockets', 'JWT Authentication'],
      practices: ['Pydantic data models', 'Idempotent routing', 'Redis rate-limiting', 'Asynchronous task queues']
    },
    {
      id: 'data',
      name: 'Data & Persistence',
      icon: <Database className="w-5 h-5" />,
      summary: 'Relational and document storage structures optimized for throughput and indexing accuracy. Employs caching and write buffers to manage telemetry ingestion.',
      technologies: ['PostgreSQL', 'MongoDB', 'Supabase', 'Redis', 'SQL Alchemy'],
      practices: ['Write-behind queue buffering', 'Foreign key cascades', 'Transactional integrity ledgers', 'Query optimization']
    },
    {
      id: 'ai',
      name: 'AI & Analytical Engine',
      icon: <Cpu className="w-5 h-5" />,
      summary: 'Predictive modeling, attribution analysis, and mathematical calculations. Focuses on deep learning pipelines and explainable attributions.',
      technologies: ['PyTorch', 'NumPy', 'SciPy', 'OpenCV', 'Explainable AI Attributions'],
      practices: ['Wasserstein Distance drift evaluation', 'Layer-wise attribution mapping', 'Real-time classification', 'Multi-stage container loading']
    },
    {
      id: 'deployment',
      name: 'DevOps & Deployment',
      icon: <Cloud className="w-5 h-5" />,
      summary: 'Isolated environment orchestration and automated pipeline runners ensuring fast, risk-free release cycles.',
      technologies: ['Docker', 'GitHub Actions', 'Linux Shell', 'Cloud Providers', 'Docker SDK'],
      practices: ['Multi-stage build shrinking', 'Automated CI/CD lint jobs', 'Isolated sandbox volumes', 'Structured log files']
    }
  ];

  const activeLayer = layers.find(l => l.id === activeLayerId) || layers[0];

  return (
    <section id="architecture" className="py-20 bg-neu-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex items-baseline gap-4 mb-16 border-b border-neu-border/50 pb-4">
          <span className="text-4xl md:text-6xl font-black text-neu-accent/30 font-mono">04</span>
          <h2 className="text-3xl md:text-5xl font-black text-neu-text tracking-tighter">HOW I BUILD</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Stack Layers Visualizer */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-left justify-center">
            <span className="text-[10px] font-mono text-neu-accent tracking-widest uppercase mb-2 block">ARCHITECTURE STACK</span>
            
            <div className="flex flex-col gap-3 relative">
              {layers.map((layer, idx) => {
                const isActive = layer.id === activeLayerId;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`flex justify-between items-center p-5 rounded-2xl transition-all duration-300 outline-none select-none ${
                      isActive 
                        ? 'bg-neu-surface border-r-4 border-neu-accent shadow-neu-pressed text-neu-accent' 
                        : 'bg-neu-surface border border-neu-border/30 hover:border-neu-accent/30 shadow-neu-flat text-neu-text hover:text-neu-accent'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl border ${isActive ? 'bg-neu-accent/15 border-neu-accent text-neu-accent' : 'bg-neu-bg border-neu-border/30 text-neu-textMuted'}`}>
                        {layer.icon}
                      </div>
                      <div>
                        <span className="font-mono text-[9px] opacity-60 block">LAYER 0{idx + 1}</span>
                        <h3 className="font-black text-sm tracking-wide uppercase">{layer.name}</h3>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-neu-accent' : 'text-neutral-300'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Layer Spec Panel */}
          <div className="lg:col-span-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <NeumorphicCard className="p-8 h-full flex flex-col justify-between border border-neu-border/30">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <span className="text-[10px] font-mono text-neu-accent tracking-widest uppercase block mb-1">LAYER INTEGRITY SPECIFICATION</span>
                      <h3 className="text-2xl font-black text-neu-text uppercase">{activeLayer.name}</h3>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-neu-textMuted leading-relaxed">
                      {activeLayer.summary}
                    </p>

                    {/* Technology blocks */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-neu-text tracking-widest uppercase block">TECHNOLOGIES</span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeLayer.technologies.map(tech => (
                          <span key={tech} className="text-xs font-bold bg-neu-bg text-neu-text px-3 py-1.5 rounded-lg border border-neu-border/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Best practices checklist */}
                    <div className="space-y-2 pt-4 border-t border-neu-border/30">
                      <span className="text-[10px] font-black text-neu-text tracking-widest uppercase block">ENGINEERING STANDARDS</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {activeLayer.practices.map(prac => (
                          <div key={prac} className="flex gap-2 items-center text-xs font-semibold text-neu-text">
                            <Check className="w-3.5 h-3.5 text-neu-accent shrink-0" />
                            {prac}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </NeumorphicCard>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
