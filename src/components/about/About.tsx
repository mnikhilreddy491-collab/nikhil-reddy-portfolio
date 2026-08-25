import React from 'react';
import { Target, Layers, Cpu, Eye, Compass, Activity } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const About: React.FC = () => {
  const operatingValues = [
    { icon: <Compass className="w-5 h-5 text-neu-accent" />, title: 'UNDERSTAND', desc: 'Clarify the root problem, constraints, and operational goals before selecting frameworks.' },
    { icon: <Layers className="w-5 h-5 text-neu-accent" />, title: 'ARCHITECT', desc: 'Design microservices, API schemas, and data structures focused on modular durability.' },
    { icon: <Cpu className="w-5 h-5 text-neu-accent" />, title: 'BUILD', desc: 'Implement production-quality code, maintaining high test coverage and strict typing standards.' },
    { icon: <Activity className="w-5 h-5 text-neu-accent" />, title: 'IMPROVE', desc: 'Measure system metrics, analyze database queries, and iteratively optimize bottlenecks.' }
  ];

  return (
    <section id="about" className="py-20 bg-neu-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading with Large Number */}
        <div className="flex items-baseline gap-4 mb-16 border-b border-neu-border/50 pb-4">
          <span className="text-4xl md:text-6xl font-black text-neu-accent/30 font-mono">01</span>
          <h2 className="text-3xl md:text-5xl font-black text-neu-text tracking-tighter">ABOUT IDENTITY</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Operational Focus */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <p className="text-2xl md:text-3xl font-bold text-neu-text leading-snug tracking-tight">
              I am a Computer Science and Artificial Intelligence engineer focused on building complete, production-ready software systems.
            </p>
            
            <p className="text-md text-neu-textMuted leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-xs font-black text-neu-accent uppercase tracking-wider mb-3">Core Focus</h3>
                <ul className="space-y-2 text-sm font-bold text-neu-text">
                  <li className="flex items-center gap-2"><Target className="w-4 h-4 text-neutral-400" /> Full-Stack Development</li>
                  <li className="flex items-center gap-2"><Target className="w-4 h-4 text-neutral-400" /> Artificial Intelligence</li>
                  <li className="flex items-center gap-2"><Target className="w-4 h-4 text-neutral-400" /> Data Processing Pipelines</li>
                  <li className="flex items-center gap-2"><Target className="w-4 h-4 text-neutral-400" /> SaaS Product Infrastructure</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-black text-neu-accent uppercase tracking-wider mb-3">Current Interests</h3>
                <ul className="space-y-2 text-sm font-bold text-neu-text">
                  <li className="flex items-center gap-2"><Eye className="w-4 h-4 text-neutral-400" /> AI-Powered Developer Tooling</li>
                  <li className="flex items-center gap-2"><Eye className="w-4 h-4 text-neutral-400" /> Layer-wise Neural Visualizations</li>
                  <li className="flex items-center gap-2"><Eye className="w-4 h-4 text-neutral-400" /> Telemetry Waterfall Spectrograms</li>
                  <li className="flex items-center gap-2"><Eye className="w-4 h-4 text-neutral-400" /> High-Performance Render Canvas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Operating Engine Status & Core Values */}
          <div className="lg:col-span-5 space-y-6">
            <NeumorphicCard className="text-left relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-black text-neu-text tracking-wider uppercase">OPERATING ENGINE</span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-neu-accent">
                  <span className="w-2 h-2 rounded-full bg-neu-accent mr-1.5 animate-pulse" />
                  BUILDING
                </span>
              </div>

              <div className="space-y-6">
                {operatingValues.map((val, idx) => (
                  <div key={val.title} className="flex gap-4 items-start">
                    <div className="p-2.5 bg-neu-bg rounded-lg shadow-neu-pressed-sm border border-white">
                      {val.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-neu-text tracking-wide flex items-center gap-2">
                        <span className="text-xs font-mono text-neu-accent">0{idx + 1}</span> {val.title}
                      </h4>
                      <p className="text-xs text-neu-textMuted mt-1 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </NeumorphicCard>
          </div>

        </div>
      </div>
    </section>
  );
};
