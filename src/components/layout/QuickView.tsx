import React from 'react';
import { X, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { PERSONAL_INFO, TECH_CATEGORIES, PROJECTS, TIMELINE } from '../../data/portfolioData';

interface QuickViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickView: React.FC<QuickViewProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Prevent scroll when modal is active
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-neu-bg/90 backdrop-blur-md overflow-y-auto">
      {/* Modal Card wrapper */}
      <div className="relative w-full max-w-4xl bg-neu-surface border border-neu-border rounded-3xl shadow-neu-flat max-h-[90vh] overflow-y-auto flex flex-col text-left">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-neu-surface border-b border-neu-border/50 px-6 py-4 flex justify-between items-center z-10">
          <div>
            <span className="text-[10px] font-mono text-neu-accent tracking-widest uppercase">RECRUITER QUICK VIEW</span>
            <h3 className="text-lg font-black text-neu-text tracking-tight uppercase">MUNNANGI VENKATA NIKHIL REDDY — CV</h3>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-neu-text text-white text-xs font-bold rounded-xl hover:bg-neutral-800 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              PDF RESUME
            </a>
            <button
              onClick={onClose}
              className="p-2 bg-neu-bg hover:bg-neutral-200 border border-neu-border/20 rounded-xl text-neu-text transition-colors outline-none"
              aria-label="Close CV Quick View"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body Contents */}
        <div className="p-6 md:p-10 space-y-10 flex-1">
          {/* Header Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-neu-border/30">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-black text-neu-text tracking-tighter uppercase">{PERSONAL_INFO.name}</h2>
              <p className="text-sm font-semibold text-neu-accent uppercase mt-1">{PERSONAL_INFO.title}</p>
              <p className="text-xs text-neu-textMuted mt-3 leading-relaxed max-w-xl">{PERSONAL_INFO.bio}</p>
            </div>
            
            {/* Quick Contact info */}
            <div className="space-y-2.5 font-mono text-xs text-neu-text">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neu-accent shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-4 h-4 text-neu-accent shrink-0" />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline truncate max-w-[200px]">LinkedIn Profile</a>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-neu-accent shrink-0" />
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline truncate max-w-[200px]">GitHub Repository</a>
              </div>
              <div className="pt-2">
                <span className="text-[10px] text-neu-textMuted uppercase block">Education</span>
                <span className="font-bold text-xs">B.Tech in Computer Science (AI)</span>
              </div>
            </div>
          </div>

          {/* Skill Blocks */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-neu-text uppercase tracking-widest border-l-4 border-neu-accent pl-3">TECHNICAL SKILLS</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {TECH_CATEGORIES.map(cat => (
                <div key={cat.id} className="p-4 bg-neu-bg rounded-2xl border border-neu-border/20 text-xs">
                  <h5 className="font-black text-neu-text uppercase mb-2">{cat.title}</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map(s => (
                      <span key={s} className="bg-white text-neu-textMuted px-2 py-1 rounded font-semibold border border-neu-border/10">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Systems / Projects Summary */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-neu-text uppercase tracking-widest border-l-4 border-neu-accent pl-3">PROJECT DOCK</h4>
            <div className="space-y-4">
              {PROJECTS.map(p => (
                <div key={p.id} className="p-5 bg-neu-bg rounded-2xl border border-neu-border/20">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <div>
                      <h5 className="font-black text-sm text-neu-text uppercase">{p.title}</h5>
                      <span className="text-[10px] font-mono text-neu-accent uppercase block mt-0.5">{p.category} // {p.role}</span>
                    </div>
                  </div>
                  <p className="text-xs text-neu-textMuted leading-relaxed mb-3">{p.shortDescription}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.technologies.map(t => (
                      <span key={t} className="text-[9px] font-mono font-bold bg-white text-neu-text px-2 py-0.5 rounded border border-neu-border/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Experience milestones */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-neu-text uppercase tracking-widest border-l-4 border-neu-accent pl-3">EXPERIENCE TIMELINE</h4>
            <div className="border-l border-neu-border/60 ml-3 pl-6 space-y-6">
              {TIMELINE.map(m => (
                <div key={m.id} className="relative">
                  {/* Timeline dot */}
                  <span className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full bg-neu-bg border-2 border-neu-accent flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-neu-accent" />
                  </span>
                  
                  <div>
                    <span className="font-mono text-xs text-neu-accent font-black">{m.year}</span>
                    <h5 className="font-black text-xs text-neu-text uppercase mt-0.5">{m.title}</h5>
                    <span className="text-[10px] text-neu-textMuted block">{m.subtitle}</span>
                    <p className="text-xs text-neu-textMuted mt-1 leading-relaxed max-w-xl">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
export default QuickView;
