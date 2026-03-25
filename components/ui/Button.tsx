import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  size = 'md',
  isLoading,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center font-bold tracking-wide uppercase transition-all duration-300 rounded focus:outline-none";
  
  const variants = {
    primary: "bg-npt-red text-white hover:bg-red-600 shadow-[0_0_20px_rgba(208,0,0,0.4)] hover:shadow-[0_0_30px_rgba(208,0,0,0.6)] border border-transparent",
    secondary: "bg-white text-npt-black hover:bg-gray-200 border border-white hover:border-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    outline: "border border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-npt-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-10 py-5 text-base"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      <span className="relative z-10 flex items-center">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes} 
      disabled={isLoading}
      {...props}
    >
      {content}
    </motion.button>
  );
};