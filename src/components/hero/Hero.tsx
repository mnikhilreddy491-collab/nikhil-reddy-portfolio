import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { NeumorphicButton } from '../ui/NeumorphicButton';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate normalized position between -0.5 and 0.5
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  const parallaxFrame = shouldReduceMotion ? { x: 0, y: 0 } : { x: mousePosition.x * -15, y: mousePosition.y * -15 };
  const parallaxPortrait = shouldReduceMotion ? { x: 0, y: 0 } : { x: mousePosition.x * -8, y: mousePosition.y * -8 };
  const parallaxAccent = shouldReduceMotion ? { x: 0, y: 0 } : { x: mousePosition.x * 35, y: mousePosition.y * 35 };

  const handleExploreClick = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      const topOffset = 80;
      const elementPosition = workSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden py-12 md:py-20 bg-neu-bg"
    >


      {/* Background Bold Editorial Number */}
      <div className="absolute top-0 right-10 text-[20vw] font-black text-neu-shadowDark/15 select-none pointer-events-none leading-none z-0">
        SRB
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Editorial Typography & Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Metadata Block Header */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 border-l-2 border-neu-accent pl-4">
            <div>
              <span className="text-[10px] font-black text-neu-accent tracking-wider block">FOCUS</span>
              <span className="text-xs font-black text-neu-text tracking-wider uppercase">Full-Stack Development</span>
            </div>
            <div className="h-6 w-px bg-neu-border/50 hidden sm:block" />
            <div>
              <span className="text-[10px] font-black text-neu-accent tracking-wider block">SPECIALIZATION</span>
              <span className="text-xs font-black text-neu-text tracking-wider uppercase">AI & Data Systems</span>
            </div>
          </div>

          {/* Staggered Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-neu-text tracking-tighter leading-[0.9] mb-6">
            <span className="block text-neu-text/95">I BUILD COMPLETE</span>
            <span className="block text-neu-accent font-black">DIGITAL SYSTEMS.</span>
          </h1>

          {/* Subtitle / Positioning */}
          <p className="text-lg md:text-xl font-medium text-neu-textMuted max-w-xl mb-8 leading-relaxed">
            {PERSONAL_INFO.title}. Building intelligent applications, production-ready software systems, and data platforms.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <NeumorphicButton
              variant="accent"
              onClick={handleExploreClick}
              className="text-sm px-6 py-4 flex items-center gap-2 group"
            >
              EXPLORE MY WORK
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </NeumorphicButton>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 text-neu-textMuted">
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-neu-accent transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-neu-accent transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="hover:text-neu-accent transition-colors duration-200"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Side: Portrait Image in Asymmetric Neumorphic Composition */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-6">
          {/* Underlying Dark Charcoal Offset Plate */}
          <motion.div 
            animate={parallaxAccent}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="absolute w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] bg-neu-text rounded-[24px] z-0 -rotate-6 shadow-md opacity-90"
          />

          {/* Underlying Offset Neumorphic Plate */}
          <motion.div 
            animate={parallaxFrame}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="absolute w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] bg-neu-surface rounded-[24px] shadow-neu-flat border border-neu-border/30 z-0 origin-center rotate-3"
          />

          {/* Underlying Offset Accent Box (Crimson Angle) */}
          <motion.div 
            animate={parallaxAccent}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="absolute w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] bg-neu-accent rounded-[24px] z-0 -rotate-3"
          />

          {/* Portrait Container Frame */}
          <motion.div 
            animate={parallaxPortrait}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] bg-neutral-200 rounded-[24px] overflow-hidden border-4 border-white shadow-lg z-10"
          >
            <img 
              src={PERSONAL_INFO.portraitUrl} 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-102"
              loading="eager"
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            
            {/* Corner Crop Marks for Editorial Aesthetic */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/40 pointer-events-none" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/40 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/40 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/40 pointer-events-none" />
          </motion.div>

          {/* Technical Data Metadata Overlay */}
          <div className="absolute -bottom-2 -right-4 bg-neu-text text-white text-[10px] font-mono px-3 py-1.5 rounded-md z-20 shadow-md">
            COORDINATES // 16.10.19.N // 2026
          </div>
          
          {/* Subtle Bounding Box Banners */}
          <div className="absolute -top-3 right-8 bg-neu-border text-[8px] font-mono px-2 py-0.5 rounded text-neu-textMuted tracking-wider select-none pointer-events-none z-0">
            BOUNDING_BOX // 320x400
          </div>
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 font-mono text-[9px] text-neu-accent tracking-widest uppercase origin-center rotate-90 select-none pointer-events-none hidden sm:block">
            SYSTEM LAYER // 01
          </div>
        </div>
      </div>
    </section>
  );
};
