import React from 'react';
import Link from 'next/link';
import { FaucetBalance } from './FaucetBalance';

export const HeaderLogo: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-4 space-y-6">
      <Link 
        href="https://fallenones.xyz" 
        className="group relative inline-block text-center py-8"
      >
        {/* Main Title Container */}
        <div className="relative">
          {/* Main Title */}
          <h1 className="text-8xl md:text-9xl font-spicy-rice relative animate-title-float">
            {/* Shadow layer - Now with exact matching positioning */}
            <span className="absolute -z-10 blur-sm text-green-950/40 translate-x-[6px] translate-y-[6px]">
              Free PEPE
            </span>
            
            {/* Main text with gradient */}
            <span className="relative bg-gradient-to-b from-green-300 via-lime-400 to-green-500 text-transparent bg-clip-text animate-gradient">
              Free PEPE
            </span>
          </h1>

          {/* Animated highlight lines */}
          <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50 group-hover:opacity-100 transition-all duration-500 animate-line-float" />
          <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-30 group-hover:opacity-75 transition-all duration-500 delay-100 animate-line-float-slow" />
        </div>
      </Link>

      {/* Balance display */}
      <div className="w-full max-w-md transform hover:scale-[1.02] transition-transform duration-300">
        <FaucetBalance />
      </div>
    </div>
  );
};
