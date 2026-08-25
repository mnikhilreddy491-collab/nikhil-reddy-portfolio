import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Layers, Cpu, ShieldCheck, Send, RefreshCw, ChevronRight } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';

interface ProcessStep {
  id: string;
  name: string;
  icon: React.ReactNode;
  summary: string;
  details: string;
}

export const BuildProcess: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('understand');

  const steps: ProcessStep[] = [
    {
      id: 'understand',
      name: 'Understand',
      icon: <Compass className="w-5 h-5" />,
      summary: 'Define requirements and parameters.',
      details: 'Identify user pain points, budget constraints, scaling thresholds, and success criteria. Prioritize a clear problem specification over code implementation.'
    },
    {
      id: 'architect',
      name: 'Architect',
      icon: <Layers className="w-5 h-5" />,
      summary: 'Design boundary limits and flow.',
      details: 'Model entities, define REST/GraphQL/WebSocket API boundaries, map data ingestion limits, select appropriate caching stores, and chart topological structures.'
    },
    {
      id: 'build',
      name: 'Build',
      icon: <Cpu className="w-5 h-5" />,
      summary: 'Implement modular runtime code.',
      details: 'Write cleanly typed modules in TypeScript or Python, enforce separation of concerns, integrate middlewares, and ensure configurations are injected via environments.'
    },
    {
      id: 'test',
      name: 'Test',
      icon: <ShieldCheck className="w-5 h-5" />,
      summary: 'Verify limits and border states.',
      details: 'Write automated unit and integration suites to validate behaviors. Conduct payload size assertions and run integration scripts inside mock virtual boundaries.'
    },
    {
      id: 'deploy',
      name: 'Deploy',
      icon: <Send className="w-5 h-5" />,
      summary: 'Automate build container release.',
      details: 'Bundle code inside lightweight container registries (Docker), define environment checks, configure automated lint jobs, and execute blue-green rollouts.'
    },
    {
      id: 'improve',
      name: 'Improve',
      icon: <RefreshCw className="w-5 h-5" />,
      summary: 'Observe metrics and refine loads.',
      details: 'Query logs, measure system latencies, trace bottlenecks via diagnostic graphs, optimize database queries, and continuously iterate systems.'
    }
  ];

  const activeStep = steps.find(s => s.id === activeStepId) || steps[0];

  return (
    <div className="mb-20">
      {/* Sub Heading */}
      <h3 className="text-xl font-black text-neu-text uppercase tracking-tight text-left mb-8 border-l-4 border-neu-accent pl-4">
        FROM IDEA TO PRODUCTION // THE ENGINE LIFECYCLE
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Step buttons */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {steps.map((step, idx) => {
            const isActive = step.id === activeStepId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 outline-none select-none ${
                  isActive
                    ? 'bg-neu-surface border-neu-accent shadow-neu-pressed text-neu-accent'
                    : 'bg-neu-surface border-neu-border/30 hover:border-neu-accent/30 shadow-neu-flat text-neu-text hover:text-neu-accent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg border ${isActive ? 'bg-neu-accent/15 border-neu-accent text-neu-accent' : 'bg-neu-bg border-neu-border/20 text-neu-textMuted'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] opacity-60 block">STEP 0{idx + 1}</span>
                    <h4 className="font-black text-xs uppercase tracking-wider">{step.name}</h4>
                  </div>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-neu-accent' : 'text-neutral-300'}`} />
              </button>
            );
          })}
        </div>

        {/* Step details Spec Panel */}
        <div className="lg:col-span-5 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <NeumorphicCard className="p-8 h-full flex flex-col justify-between border border-neu-border/30 bg-neu-surface">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-neu-accent/10 border border-neu-accent/20 rounded-xl text-neu-accent">
                      {activeStep.icon}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-neu-accent uppercase">ENGINEERING CYCLE STATE</span>
                      <h4 className="text-md font-black text-neu-text uppercase">{activeStep.name}</h4>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-neu-text tracking-wide mt-2">
                    {activeStep.summary}
                  </p>

                  <p className="text-xs text-neu-textMuted leading-relaxed">
                    {activeStep.details}
                  </p>
                </div>
              </NeumorphicCard>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
