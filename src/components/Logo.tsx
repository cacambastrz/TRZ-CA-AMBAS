import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'color',
  showSubtitle = true,
}) => {
  // Brand colors:
  // Navy: #0D2340
  // Orange: #DE722B
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric Rhombus Emblem */}
      <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
        {/* Outer Orange Rhombus */}
        <div
          className="absolute inset-0 bg-[#DE722B] rounded-sm transform rotate-45 shadow-sm transition-transform hover:scale-105"
        />
        {/* Inner Navy Diamond / Cut */}
        <div
          className={`absolute inset-1.5 transform rotate-45 flex items-center justify-center ${
            isLight ? 'bg-[#0D2340]' : 'bg-[#0D2340]'
          }`}
        >
          {/* Subtle geometric line representing skip container ribs */}
          <div className="w-4 h-0.5 bg-[#DE722B] transform -rotate-45 mb-1" />
        </div>
        {/* Lettermark 'T' glyph inside */}
        <span className="relative z-10 font-black text-white text-xs tracking-tighter transform -translate-y-0.5">
          TRZ
        </span>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-tight text-xl ${
              isLight ? 'text-white' : 'text-[#0D2340]'
            }`}
          >
            TRZ
          </span>
          <span className="font-extrabold text-[#DE722B] text-xl tracking-tight">
            CAÇAMBAS
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`text-[9.5px] uppercase font-bold tracking-widest mt-0.5 ${
              isLight ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Entulho & Obras
          </span>
        )}
      </div>
    </div>
  );
};
