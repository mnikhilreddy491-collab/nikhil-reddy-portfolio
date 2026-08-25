import React from 'react';
import { motion } from 'framer-motion';

interface NeumorphicButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({
  children,
  className = '',
  variant = 'secondary',
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl px-5 py-3 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-neu-accent/50 focus-visible:ring-offset-2';
  
  let variantStyles = '';
  let tapAnimation = {};

  if (variant === 'secondary') {
    variantStyles = 'bg-neu-surface text-neu-text border border-neu-border/40 shadow-neu-flat hover:shadow-neu-flat-hover hover:text-neu-accent';
    tapAnimation = { scale: 0.97, boxShadow: 'inset 3px 3px 6px #e0e0de, inset -3px -3px 6px #ffffff' };
  } else if (variant === 'primary') {
    // Charcoal Dark button
    variantStyles = 'bg-neu-text text-white shadow-md hover:bg-neutral-800 hover:-translate-y-0.5';
    tapAnimation = { scale: 0.97 };
  } else if (variant === 'accent') {
    // Crimson button
    variantStyles = 'bg-neu-accent text-white shadow-neu-accent-flat hover:bg-red-700 hover:-translate-y-0.5';
    tapAnimation = { scale: 0.97, boxShadow: 'inset 4px 4px 8px #9b1c1c, inset -4px -4px 8px #ef4444' };
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : tapAnimation}
    >
      {children}
    </motion.button>
  );
};
