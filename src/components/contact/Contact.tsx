import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { NeumorphicButton } from '../ui/NeumorphicButton';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-20 bg-neu-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
        
        {/* Section Heading */}
        <div className="flex items-baseline gap-4 mb-16 border-b border-neu-border/50 pb-4">
          <span className="text-4xl md:text-6xl font-black text-neu-accent/30 font-mono">06</span>
          <h2 className="text-3xl md:text-5xl font-black text-neu-text tracking-tighter">GET IN TOUCH</h2>
        </div>

        <NeumorphicCard className="p-8 md:p-12 border border-neu-border/30 relative overflow-hidden bg-neu-surface">
          <div className="max-w-3xl space-y-8">
            <span className="text-xs font-mono text-neu-accent tracking-widest uppercase block mb-1">COLLABORATION & PROJECTS</span>
            
            <h3 className="text-4xl md:text-6xl font-black text-neu-text tracking-tighter leading-none uppercase">
              LET'S BUILD <br />
              <span className="text-neu-accent">SOMETHING USEFUL.</span>
            </h3>

            <p className="text-md text-neu-textMuted leading-relaxed max-w-xl">
              Whether it is a complex software system, an AI-powered product, or an idea that needs to become real, I am interested in meaningful technical challenges. Reach out via email or connect on professional networks.
            </p>

            {/* Social CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <NeumorphicButton
                variant="accent"
                onClick={() => window.location.href = `mailto:${PERSONAL_INFO.email}`}
                className="text-sm px-6 py-4 flex items-center gap-2 group"
                ariaLabel="Send an email to Munnangi Venkata Nikhil Reddy"
              >
                <Mail className="w-4 h-4" />
                GET IN TOUCH
              </NeumorphicButton>

              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold rounded-xl px-6 py-4 text-sm bg-neu-surface text-neu-text border border-neu-border/40 shadow-neu-flat hover:shadow-neu-flat-hover hover:text-neu-accent transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4 mr-2 text-neu-accent" />
                LINKEDIN
              </a>

              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold rounded-xl px-6 py-4 text-sm bg-neu-surface text-neu-text border border-neu-border/40 shadow-neu-flat hover:shadow-neu-flat-hover hover:text-neu-accent transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                GITHUB
              </a>
            </div>
          </div>
        </NeumorphicCard>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-neu-border/30 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-neu-textMuted gap-4">
          <div className="flex items-center gap-1.5 uppercase font-mono tracking-wider">
            © {currentYear} {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-1 uppercase tracking-wider">
            MADE WITH <Heart className="w-3.5 h-3.5 text-neu-accent fill-neu-accent animate-pulse" /> USING REACT & TS
          </div>
        </footer>

      </div>
    </section>
  );
};
export default Contact;
