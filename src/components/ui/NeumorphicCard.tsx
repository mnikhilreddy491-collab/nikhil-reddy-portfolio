import React from 'react';
import { motion } from 'framer-motion';

interface NeumorphicCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const NeumorphicCard: React.FC<NeumorphicCardProps> = ({
  children,
  className = '',
  hoverable = false,
  onClick
}) => {
  const isClickable = !!onClick;

  return (
    <motion.div
      onClick={onClick}
      className={`bg-neu-surface border border-neu-border/30 rounded-2xl p-6 transition-all duration-300 ${
        isClickable ? 'cursor-pointer select-none' : ''
      } ${
        hoverable 
          ? 'shadow-neu-flat hover:shadow-neu-flat-hover hover:-translate-y-0.5' 
          : 'shadow-neu-flat'
      } ${className}`}
      whileTap={isClickable ? { scale: 0.98, boxShadow: 'var(--tw-shadow-neu-pressed)' } : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </motion.div>
  );
};
