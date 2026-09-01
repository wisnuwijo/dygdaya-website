import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconSize?: number;
  showText?: boolean;
  className?: string;
  asLink?: boolean;
}

export const DygdayaIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = '',
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center bg-black overflow-hidden rounded-[6px] border border-[#262626] shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src="/assets/logo-1.jpg"
        alt="Dygdaya Logo"
        width={size}
        height={size}
        className="object-contain w-full h-full"
        priority
      />
    </div>
  );
};

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  iconSize,
  showText = true,
  className = '',
  asLink = true,
}) => {
  const iconSizes = {
    sm: 38,
    md: 46,
    lg: 60,
    xl: 80,
  };

  const currentSize = iconSize ?? iconSizes[size];

  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <DygdayaIcon size={currentSize} />
      {showText && (
        <div className="flex flex-col">
          <span className="font-sans font-bold tracking-tight text-[#ededed] text-base leading-none">
            DYGDAYA
          </span>
          <span className="font-mono text-[9.5px] uppercase tracking-widest text-[#888888] leading-tight mt-1">
            TECHNOLOGY
          </span>
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center transition-opacity hover:opacity-85 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0070f3]"
        aria-label="Dygdaya Technology"
      >
        {content}
      </Link>
    );
  }

  return content;
};
