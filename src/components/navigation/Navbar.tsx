import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { NeumorphicButton } from '../ui/NeumorphicButton';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onQuickViewOpen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuickViewOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERTISE', href: '#expertise' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection observer in raw scroll for section highlights
      const sections = ['hero', 'work', 'about', 'expertise', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled 
          ? 'bg-neu-bg/85 backdrop-blur-md border-b border-neu-border/30 py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Name */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="text-lg font-black tracking-widest text-neu-text hover:text-neu-accent transition-colors duration-200"
        >
          {PERSONAL_INFO.name.toUpperCase()}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.label} className="relative group">
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm font-bold tracking-wider transition-colors duration-200 py-2 flex items-center gap-0.5 ${
                      isActive ? 'text-neu-accent' : 'text-neu-textMuted hover:text-neu-text'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span 
                        layoutId="activeIndicator"
                        className="inline-block text-xs font-semibold ml-0.5 text-neu-accent"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        ↗
                      </motion.span>
                    )}
                  </a>
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neu-accent transition-all duration-300 group-hover:w-full" />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center space-x-3 ml-4">
            <NeumorphicButton
              variant="secondary"
              onClick={onQuickViewOpen}
              className="text-xs py-2 px-4 shadow-neu-flat-sm hover:shadow-neu-flat-sm-hover"
              ariaLabel="Open Recruiter Quick View"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5 text-neu-accent" />
              QUICK VIEW
            </NeumorphicButton>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-neu-text hover:bg-neutral-200 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-neu-bg border-b border-neu-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-6 flex flex-col items-stretch">
              <ul className="space-y-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={`block text-md font-black tracking-wider py-2 border-b border-neu-border/30 flex justify-between items-center ${
                          isActive ? 'text-neu-accent' : 'text-neu-text'
                        }`}
                      >
                        {link.label}
                        <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-neu-accent' : 'text-neutral-300'}`} />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-col gap-3 pt-2">
                <NeumorphicButton
                  variant="secondary"
                  onClick={() => {
                    setIsOpen(false);
                    onQuickViewOpen();
                  }}
                  className="w-full text-sm"
                >
                  <FileText className="w-4 h-4 mr-2 text-neu-accent" />
                  QUICK VIEW
                </NeumorphicButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
