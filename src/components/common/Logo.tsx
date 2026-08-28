import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 group select-none ${className}`}>
      <img 
        src={logoImg} 
        alt="VAM VORA Technologies" 
        className={`h-9 sm:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
          variant === 'light' ? 'brightness-0 invert' : ''
        }`} 
      />
    </Link>
  );
};

export default Logo;


