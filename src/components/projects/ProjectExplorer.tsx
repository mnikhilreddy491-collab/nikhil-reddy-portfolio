import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, ArrowLeft, Layers, ShieldAlert, CheckCircle2, Search, Settings } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { PROJECTS } from '../../data/portfolioData';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { NeumorphicButton } from '../ui/NeumorphicButton';

export const ProjectExplorer: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'engineering' | 'challenges' | 'outcome'>('overview');
  const [hoveredStageId, setHoveredStageId] = useState<string | null>(null);
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);

  const activeProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  const handleProjectSelect = (id: string) => {
    setSelectedProjectId(id);
    setActiveTab('overview');
    setHoveredStageId(null);
  };

  return (
    <section id="work" className="py-20 bg-neu-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex items-baseline gap-4 mb-16 border-b border-neu-border/50 pb-4">
          <span className="text-4xl md:text-6xl font-black text-neu-accent/30 font-mono">02</span>
          <h2 className="text-3xl md:text-5xl font-black text-neu-text tracking-tighter">SELECTED WORK</h2>
        </div>

        <AnimatePresence mode="wait">
          {!isFocusMode ? (
            /* Explorer View */
            <motion.div 
              key="explorer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Column: Project Selector Panel */}
              <div className="lg:col-span-4 flex flex-col gap-4 text-left">
                <span className="text-xs font-black text-neu-accent tracking-widest uppercase mb-2 block">PROJECT REGISTRY</span>
                <div className="flex flex-col gap-3">
                  {PROJECTS.map((proj) => {
                    const isSelected = proj.id === selectedProjectId;
                    return (
                      <button
                        key={proj.id}
                        onClick={() => handleProjectSelect(proj.id)}
                        className={`text-left p-5 rounded-2xl transition-all duration-300 outline-none flex justify-between items-center ${
                          isSelected 
                            ? 'bg-neu-surface border-l-4 border-neu-accent shadow-neu-pressed text-neu-accent' 
                            : 'bg-neu-surface border border-neu-border/30 hover:border-neu-accent/30 shadow-neu-flat text-neu-text hover:text-neu-accent'
                        }`}
                      >
                        <div>
                          <h3 className="font-black text-sm tracking-wide">{proj.title.toUpperCase()}</h3>
                          <span className="text-[11px] font-mono text-neu-textMuted mt-0.5 block">{proj.category}</span>
                        </div>
                        {isSelected && <ArrowRight className="w-4 h-4 text-neu-accent" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Dynamic Project Dashboard */}
              <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                <NeumorphicCard className="flex-1 flex flex-col justify-between p-8 border border-neu-border/30">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div>
                        <span className="text-[10px] font-mono text-neu-accent tracking-widest uppercase block mb-1">PROJECT DETAILS // SYSTEM OVERVIEW</span>
                        <h3 className="text-3xl font-black text-neu-text tracking-tighter uppercase">{activeProject.title}</h3>
                        <span className="text-sm font-semibold text-neu-textMuted mt-0.5 block">{activeProject.category}</span>
                      </div>
                      
                      <div className="flex space-x-3">
                        {activeProject.githubUrl && (
                          <a 
                            href={activeProject.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 bg-neu-surface rounded-xl shadow-neu-flat hover:text-neu-accent transition-all duration-200 border border-neu-border/30"
                            aria-label="GitHub Repository"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {activeProject.demoUrl && (
                          <a 
                            href={activeProject.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 bg-neu-surface rounded-xl shadow-neu-flat hover:text-neu-accent transition-all duration-200 border border-neu-border/30"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-md text-neu-textMuted leading-relaxed">
                      {activeProject.shortDescription}
                    </p>

                    {/* Interactive Conceptual System Diagram */}
                    <div className="space-y-4 pt-4 border-t border-neu-border/30">
                      <span className="text-[11px] font-black text-neu-text tracking-widest uppercase block">CONCEPTUAL DATA FLOW (HOVER NODES)</span>
                      
                      {/* Flex Pipeline */}
                      <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-3">
                        {activeProject.diagram.map((stage, idx) => (
                          <React.Fragment key={stage.id}>
                            {/* Node */}
                            <div
                              onMouseEnter={() => setHoveredStageId(stage.id)}
                              onMouseLeave={() => setHoveredStageId(null)}
                              className={`p-3.5 rounded-xl text-xs font-bold border transition-all duration-300 select-none cursor-help flex-1 text-center ${
                                hoveredStageId === stage.id
                                  ? 'bg-neu-accent text-white border-neu-accent shadow-md scale-102'
                                  : 'bg-neu-surface text-neu-text border-neu-border/40 shadow-neu-flat-sm'
                              }`}
                            >
                              <div className="font-mono text-[10px] opacity-75 mb-0.5">0{idx + 1}</div>
                              {stage.name}
                            </div>
                            {/* Connector Arrow */}
                            {idx < activeProject.diagram.length - 1 && (
                              <span className="text-neu-border/60 text-lg font-black hidden md:inline">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Info Panel for Hovered Pipeline Stage */}
                      <div className="h-16 flex items-center bg-neutral-100/50 border border-neu-border/20 rounded-xl px-4 py-2 mt-4 text-xs transition-colors duration-200">
                        {hoveredStageId ? (
                          <p className="text-neu-text font-medium leading-normal animate-fadeIn">
                            <strong>{activeProject.diagram.find(s => s.id === hoveredStageId)?.name}: </strong>
                            {activeProject.diagram.find(s => s.id === hoveredStageId)?.description}
                          </p>
                        ) : (
                          <p className="text-neu-textMuted font-mono italic">
                            * Hover over the pipeline stages to inspect the system flow.
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {activeProject.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1.5 bg-neu-bg rounded-lg text-xs font-bold text-neu-text border border-neu-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Deep Case Study Action */}
                  <div className="pt-8 border-t border-neu-border/30 flex justify-end">
                    <NeumorphicButton
                      variant="primary"
                      onClick={() => setIsFocusMode(true)}
                      className="text-xs px-6 py-3.5 flex items-center gap-2 group"
                    >
                      GO DEEPER // VIEW CASE STUDY
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </NeumorphicButton>
                  </div>
                </NeumorphicCard>
              </div>
            </motion.div>
          ) : (
            /* Focus Mode (Case Study Panel) */
            <motion.div
              key="case-study"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full text-left"
            >
              {/* Back Button */}
              <button
                onClick={() => setIsFocusMode(false)}
                className="inline-flex items-center gap-2 text-xs font-black text-neu-accent tracking-widest uppercase hover:underline mb-8 outline-none"
              >
                <ArrowLeft className="w-4 h-4" />
                BACK TO REGISTER
              </button>

              <NeumorphicCard className="p-8 md:p-12 border border-neu-border/30">
                {/* Header */}
                <div className="border-b border-neu-border/40 pb-6 mb-8 flex justify-between items-start flex-wrap gap-6">
                  <div>
                    <span className="text-xs font-mono text-neu-accent tracking-widest block mb-1">ENGINEERING CASE STUDY</span>
                    <h3 className="text-4xl md:text-5xl font-black text-neu-text tracking-tighter uppercase">{activeProject.title}</h3>
                    <span className="text-md font-semibold text-neu-textMuted mt-1 block">{activeProject.category} — {activeProject.role}</span>
                  </div>
                  
                  {/* External Links */}
                  <div className="flex space-x-3">
                    {activeProject.githubUrl && (
                      <a 
                        href={activeProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-4 py-2.5 bg-neu-surface rounded-xl shadow-neu-flat text-xs font-bold hover:text-neu-accent transition-all duration-200 border border-neu-border/30"
                      >
                        <GithubIcon className="w-4 h-4" />
                        GITHUB REPO
                      </a>
                    )}
                    {activeProject.demoUrl && (
                      <a 
                        href={activeProject.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-4 py-2.5 bg-neu-surface rounded-xl shadow-neu-flat text-xs font-bold hover:text-neu-accent transition-all duration-200 border border-neu-border/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                        LIVE WORK
                      </a>
                    )}
                  </div>
                </div>

                {/* Case Study Tabs */}
                <div className="flex border-b border-neu-border/30 overflow-x-auto gap-2 mb-8 no-scrollbar">
                  {(['overview', 'architecture', 'engineering', 'challenges', 'outcome'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-xs font-black tracking-widest uppercase py-3.5 px-6 border-b-2 transition-all duration-200 outline-none flex items-center gap-2 ${
                        activeTab === tab 
                          ? 'border-neu-accent text-neu-accent' 
                          : 'border-transparent text-neu-textMuted hover:text-neu-text'
                      }`}
                    >
                      {tab === 'overview' && <Search className="w-3.5 h-3.5" />}
                      {tab === 'architecture' && <Layers className="w-3.5 h-3.5" />}
                      {tab === 'engineering' && <Settings className="w-3.5 h-3.5" />}
                      {tab === 'challenges' && <ShieldAlert className="w-3.5 h-3.5" />}
                      {tab === 'outcome' && <CheckCircle2 className="w-3.5 h-3.5" />}
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Case Study Detail Content Area */}
                <div className="min-h-[220px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6 max-w-4xl"
                    >
                      {activeTab === 'overview' && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-black text-neu-text uppercase">Executive Summary</h4>
                          <p className="text-md text-neu-textMuted leading-relaxed">{activeProject.fullDescription}</p>
                          <p className="text-md text-neu-textMuted leading-relaxed">{activeProject.detailTabs.overview}</p>
                        </div>
                      )}

                      {activeTab === 'architecture' && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-black text-neu-text uppercase">Infrastructure & Design Decisions</h4>
                          <p className="text-md text-neu-textMuted leading-relaxed">{activeProject.detailTabs.architecture}</p>
                          {/* Conceptual flow representation */}
                          <div className="p-6 bg-neutral-100 rounded-2xl border border-neu-border/20 mt-4">
                            <span className="text-[10px] font-mono text-neu-accent uppercase block mb-4">SYSTEM PIPELINE DATAFLOW</span>
                            <div className="flex flex-col gap-4">
                              {activeProject.diagram.map((s, idx) => (
                                <div key={s.id} className="flex gap-4 items-center">
                                  <div className="w-8 h-8 rounded-full bg-neu-accent/15 text-neu-accent flex items-center justify-center font-mono font-black text-xs shrink-0">
                                    0{idx + 1}
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-black text-neu-text uppercase">{s.name}</h5>
                                    <p className="text-xs text-neu-textMuted mt-0.5">{s.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'engineering' && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-black text-neu-text uppercase">Core Implementation Details</h4>
                          <p className="text-md text-neu-textMuted leading-relaxed">{activeProject.detailTabs.engineering}</p>
                        </div>
                      )}

                      {activeTab === 'challenges' && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-black text-neu-text uppercase">Technical Obstacles & Solutions</h4>
                          <p className="text-md text-neu-textMuted leading-relaxed">{activeProject.detailTabs.challenges}</p>
                        </div>
                      )}

                      {activeTab === 'outcome' && (
                        <div className="space-y-4">
                          <h4 className="text-lg font-black text-neu-text uppercase">Results & Key Outcomes</h4>
                          <p className="text-md text-neu-textMuted leading-relaxed">{activeProject.detailTabs.outcome}</p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Back Link */}
                <div className="pt-8 mt-8 border-t border-neu-border/40 flex justify-between items-center flex-wrap gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.technologies.map(t => (
                      <span key={t} className="text-[11px] font-mono font-bold bg-neu-bg text-neu-text px-2.5 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <NeumorphicButton
                    variant="secondary"
                    onClick={() => setIsFocusMode(false)}
                    className="text-xs px-5 py-2.5"
                  >
                    CLOSE FOCUS VIEW
                  </NeumorphicButton>
                </div>
              </NeumorphicCard>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
