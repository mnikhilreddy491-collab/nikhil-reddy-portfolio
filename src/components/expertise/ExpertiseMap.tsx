import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Network, Eye, EyeOff } from 'lucide-react';
import { TECH_CATEGORIES, TECH_PROJECT_MAP, PROJECTS } from '../../data/portfolioData';
import { NeumorphicCard } from '../ui/NeumorphicCard';

export const ExpertiseMap: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Get active projects mapping to the hovered technology
  const activeProjects = hoveredTech ? (TECH_PROJECT_MAP[hoveredTech] || []) : [];

  const handleTechHover = (tech: string | null) => {
    setHoveredTech(tech);
  };

  const getIconForCategory = (id: string) => {
    switch (id) {
      case 'app':
        return <Globe className="w-4 h-4 text-neu-accent" />;
      case 'backend':
        return <Network className="w-4 h-4 text-neu-accent" />;
      case 'ai':
        return <Cpu className="w-4 h-4 text-neu-accent" />;
      case 'infra':
        return <Database className="w-4 h-4 text-neu-accent" />;
      default:
        return <Cpu className="w-4 h-4 text-neu-accent" />;
    }
  };

  return (
    <section id="expertise" className="py-20 bg-neu-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex items-baseline gap-4 mb-16 border-b border-neu-border/50 pb-4">
          <span className="text-4xl md:text-6xl font-black text-neu-accent/30 font-mono">03</span>
          <h2 className="text-3xl md:text-5xl font-black text-neu-text tracking-tighter">TECHNICAL EXPERTISE</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Categorized Skill Lists */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {TECH_CATEGORIES.map((cat) => (
              <NeumorphicCard key={cat.id} className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-neu-bg rounded-lg shadow-neu-pressed-sm border border-white">
                      {getIconForCategory(cat.id)}
                    </div>
                    <h3 className="text-sm font-black text-neu-text uppercase tracking-wide">{cat.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const isHovered = hoveredTech === skill;
                      const isDimmed = hoveredTech && !isHovered && !activeProjects.includes(skill);

                      return (
                        <div
                          key={skill}
                          onMouseEnter={() => handleTechHover(skill)}
                          onMouseLeave={() => handleTechHover(null)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all duration-200 select-none cursor-crosshair ${
                            isHovered
                              ? 'bg-neu-accent text-white border-neu-accent shadow-md scale-102'
                              : isDimmed
                                ? 'bg-neu-surface text-neutral-300 border-neu-border/10 opacity-40'
                                : 'bg-neu-surface text-neu-text border-neu-border/30 shadow-neu-flat-sm'
                          }`}
                        >
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </NeumorphicCard>
            ))}
          </div>

          {/* Right Column: Interactive System Relationship Canvas */}
          <div className="lg:col-span-5 text-left">
            <NeumorphicCard className="p-8 h-full flex flex-col justify-between border border-neu-border/30">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-neu-accent tracking-widest uppercase">RELATIONSHIP MAP</span>
                  {hoveredTech ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-neu-accent">
                      <Eye className="w-3.5 h-3.5" /> ACTIVE LINK
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-neu-textMuted">
                      <EyeOff className="w-3.5 h-3.5" /> HOVER TO TRACE
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black text-neu-text uppercase">
                    {hoveredTech ? `TECHNOLOGY: ${hoveredTech}` : 'INTERACTIVE CAPABILITY ENGINE'}
                  </h3>
                  
                  <p className="text-xs text-neu-textMuted leading-relaxed">
                    Hovering over a language or tool highlights all architectural systems where I have implemented it in real codebases.
                  </p>
                </div>

                {/* Display Connected Projects */}
                <div className="border-t border-neu-border/30 pt-6 space-y-4">
                  <span className="text-[10px] font-black text-neu-text tracking-widest uppercase block mb-3">IMPLEMENTED SYSTEMS</span>
                  
                  <div className="flex flex-col gap-3 min-h-[140px]">
                    {hoveredTech ? (
                      activeProjects.length > 0 ? (
                        PROJECTS.filter(p => activeProjects.includes(p.id)).map(p => (
                          <motion.div
                            key={p.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-3 bg-neutral-100/60 border border-neu-border/20 rounded-xl flex items-center justify-between"
                          >
                            <div>
                              <span className="text-xs font-black text-neu-text uppercase block">{p.title}</span>
                              <span className="text-[10px] text-neu-textMuted mt-0.5 block">{p.category}</span>
                            </div>
                            <span className="text-[10px] font-mono text-neu-accent font-black uppercase">LINKED</span>
                          </motion.div>
                        ))
                      ) : (
                        <p className="text-xs text-neu-textMuted italic font-mono pt-4">No completed systems registered for this tech block.</p>
                      )
                    ) : (
                      <div className="flex flex-col gap-2">
                        {PROJECTS.map(p => (
                          <div 
                            key={p.id}
                            className="p-3 bg-neu-surface border border-neu-border/20 rounded-xl opacity-60 flex items-center justify-between"
                          >
                            <span className="text-xs font-black text-neu-text uppercase">{p.title}</span>
                            <span className="text-[9px] font-mono text-neu-textMuted">{p.category}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </NeumorphicCard>
          </div>

        </div>

      </div>
    </section>
  );
};
