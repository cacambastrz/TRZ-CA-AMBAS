import React from 'react';
import { TRZ_ASSETS } from '../utils/assets.ts';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'color',
}) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {variant === 'light' ? (
        <div className="bg-white/95 px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center">
          <img
            src={TRZ_ASSETS.logo}
            alt="TRZ Caçambas"
            className="h-9 sm:h-10 w-auto object-contain"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <img
          src={TRZ_ASSETS.logo}
          alt="TRZ Caçambas"
          className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};
