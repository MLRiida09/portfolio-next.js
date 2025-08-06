import React from 'react';
import Image from 'next/image';

const Card = ({ 
  variant = 'default', 
  data = {},
  className = '',
  onClick,
  children 
}) => {
  const {
    icon,
    iconDark,  // For theme switching in About section
    title,
    description,
    link,
    bgImage // For work cards if needed
  } = data;

  // Base styles that apply to all variants
  const baseStyles = "group relative bg-white border border-gray-300 rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-gray-500 hover:shadow-xl hover:shadow-gray-200 overflow-hidden";
  
  // Variant-specific styles
  const variantStyles = {
    // About section cards (info cards)
    about: "p-6",
    
    // Services section cards
    services: "px-6 py-8",
    
    // Contact section cards
    contact: "px-6 py-8",
    
    // Default variant
    default: "p-6"
  };

  // Background gradient overlay
  const backgroundOverlay = variant === 'about' 
    ? "absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    : variant === 'contact'
    ? "absolute inset-0 bg-gradient-to-br from-SubtleHoverLight via-transparent to-CardHoverLight opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    : "absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500";

  // Icon container styles
  const getIconContainerStyles = () => {
    switch (variant) {
      case 'about':
        return "relative z-10 w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300";
      case 'services':
        return "relative z-10 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300";
      case 'contact':
        return "relative z-10 w-16 h-16 bg-gradient-to-br from-SubtleHoverLight to-CardHoverLight rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-CardHoverLight group-hover:to-SubtleHoverLight transition-all duration-300";
      default:
        return "relative z-10 w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300";
    }
  };

  // Decorative circle styles
  const getDecorativeCircleStyles = () => {
    switch (variant) {
      case 'about':
        return "absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500";
      case 'services':
        return "absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500";
      case 'contact':
        return "absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-SubtleHoverLight to-CardHoverLight rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500";
      default:
        return "absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500";
    }
  };

  // Title styles
  const getTitleStyles = () => {
    switch (variant) {
      case 'about':
        return "text-lg font-semibold font-ovo text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300";
      case 'services':
        return "text-xl font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300";
      case 'contact':
        return "text-xl font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300 font-ovo";
      default:
        return "text-lg font-semibold font-ovo text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300";
    }
  };

  // Description styles
  const getDescriptionStyles = () => {
    switch (variant) {
      case 'about':
        return "text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300";
      case 'services':
        return "text-sm text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300";
      case 'contact':
        return "text-sm text-TextHoverLight leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300 font-ovo";
      default:
        return "text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300";
    }
  };

  // Handle card click
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else if (link && link !== '#') {
      if (link.startsWith('mailto:') || link.startsWith('tel:')) {
        window.location.href = link;
      } else {
        window.open(link, '_blank');
      }
    }
  };

  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={handleCardClick}
    >
      {/* Background overlay */}
      <div className={backgroundOverlay}></div>
      
      {/* Icon container */}
      {icon && (
        <div className={getIconContainerStyles()}>
          <Image 
            src={iconDark || icon} 
            alt={title || 'icon'} 
            width={variant === 'about' ? 28 : 32} 
            height={variant === 'about' ? 28 : 32}
            className={variant === 'about' ? 'w-7 h-7' : 'w-8 h-8'}
          />
        </div>
      )}
      
      {/* Content */}
      <div className='relative z-10'>
        {title && (
          <h4 className={getTitleStyles()}>
            {title}
          </h4>
        )}
        
        {description && (
          <p className={getDescriptionStyles()}>
            {description}
          </p>
        )}
        
        {/* Action link for services and contact */}
        {(variant === 'services' || variant === 'contact') && link && (
          <a 
            href={link} 
            className='inline-flex items-center gap-2 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-all duration-300 group-hover:gap-3 font-ovo'
            onClick={(e) => e.stopPropagation()}
          >
            {variant === 'services' ? 'Read More' : 'Contact Now'}
            <svg 
              className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </a>
        )}
        
        {/* Custom children content */}
        {children}
      </div>
      
      {/* Decorative circle */}
      <div className={getDecorativeCircleStyles()}></div>
    </div>
  );
};

export default Card;