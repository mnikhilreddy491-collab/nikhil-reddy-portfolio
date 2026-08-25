import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Calendar } from 'lucide-react';
import { TIMELINE } from '../../data/portfolioData';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { BuildProcess } from './BuildProcess';
import type { Milestone } from '../../types';

export const TimelineSection: React.FC = () => {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(TIMELINE[0].id);

  const activeMilestone = TIMELINE.find(m => m.id === selectedMilestoneId) || TIMELINE[0];

  const getIconForMilestone = (category: Milestone['category']) => {
    switch (category) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-neu-accent" />;
      case 'academic':
        return <GraduationCap className="w-4 h-4 text-neu-accent" />;
      case 'project':
        return <Code className="w-4 h-4 text-neu-accent" />;
      default:
        return <Briefcase className="w-4 h-4 text-neu-accent" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-neu-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex items-baseline gap-4 mb-16 border-b border-neu-border/50 pb-4">
          <span className="text-4xl md:text-6xl font-black text-neu-accent/30 font-mono">05</span>
          <h2 className="text-3xl md:text-5xl font-black text-neu-text tracking-tighter">CAREER TIMELINE</h2>
        </div>

        {/* Build Process Component Insertion */}
        <BuildProcess />

        {/* Career Timeline Interactive Sub-Section */}
        <div className="space-y-8 text-left mt-20">
          <h3 className="text-xl font-black text-neu-text uppercase tracking-tight mb-8 border-l-4 border-neu-accent pl-4">
            MILESTONES & GROWTH
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Timeline Left: Year Node Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {TIMELINE.map((m) => {
                const isSelected = m.id === selectedMilestoneId;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMilestoneId(m.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 outline-none text-left select-none ${
                      isSelected
                        ? 'bg-neu-surface border-neu-accent shadow-neu-pressed text-neu-accent'
                        : 'bg-neu-surface border-neu-border/30 hover:border-neu-accent/30 shadow-neu-flat text-neu-text hover:text-neu-accent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg border ${isSelected ? 'bg-neu-accent/15 border-neu-accent text-neu-accent' : 'bg-neu-bg border-neu-border/20 text-neu-textMuted'}`}>
                        {getIconForMilestone(m.category)}
                      </div>
                      <div>
                        <span className="font-mono text-[9px] opacity-60 block uppercase">{m.category}</span>
                        <h4 className="font-black text-sm tracking-wide">{m.year}</h4>
                      </div>
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${isSelected ? 'bg-red-100 text-neu-accent' : 'bg-neutral-100 text-neutral-500'}`}>
                      {m.year}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Timeline Right: Expandable Node Details Card */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <NeumorphicCard className="p-8 h-full flex flex-col justify-between border border-neu-border/30 bg-neu-surface">
                    <div className="space-y-6">
                      
                      {/* Sub-header */}
                      <div className="flex justify-between items-start flex-wrap gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <Calendar className="w-3.5 h-3.5 text-neu-accent" />
                            <span className="text-[10px] font-mono text-neu-accent uppercase tracking-wider">{activeMilestone.year} milestone</span>
                          </div>
                          <h4 className="text-2xl font-black text-neu-text uppercase leading-none">{activeMilestone.title}</h4>
                          <span className="text-xs font-semibold text-neu-textMuted block mt-1.5">{activeMilestone.subtitle}</span>
                        </div>
                        
                        <span className="text-xs font-mono font-black uppercase px-3 py-1.5 bg-neu-bg text-neu-text border border-neu-border/30 rounded-lg">
                          {activeMilestone.category.toUpperCase()}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-neu-textMuted leading-relaxed">
                        {activeMilestone.description}
                      </p>

                      {/* Tech tags */}
                      <div className="space-y-2 pt-4 border-t border-neu-border/30">
                        <span className="text-[9px] font-black text-neu-text tracking-widest uppercase block">TECHNOLOGY DOMAIN</span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeMilestone.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold bg-neu-bg text-neu-text border border-neu-border/20 px-2.5 py-1 rounded">
                              {tag}
                            </span>
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

      </div>
    </section>
  );
};
export default TimelineSection;
