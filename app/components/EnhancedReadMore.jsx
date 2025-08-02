"use client";

import React, { useState, useEffect, useRef } from 'react';

const EnhancedReadMore = ({ 
  children, 
  maxLength = 300,
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dotsRef = useRef(null);

  // Split content into preview and full text
  const text = typeof children === 'string' ? children : '';
  const previewText = text.slice(0, maxLength);
  const remainingText = text.slice(maxLength);

  const toggleReadMore = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsExpanded(!isExpanded);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  // Add ripple effect
  const handleDotsClick = (e) => {
    const dots = dotsRef.current;
    if (!dots) return;

    const ripple = document.createElement('span');
    const rect = dots.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(139, 60, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: rippleEffect 0.6s linear;
      pointer-events: none;
      z-index: 10;
    `;
    
    dots.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.remove();
      }
    }, 600);

    toggleReadMore();
  };

  useEffect(() => {
    // Add custom animations that Tailwind doesn't provide
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rippleEffect {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
      
      @keyframes pulseCustom {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }
      
      @keyframes slideInFade {
        0% {
          opacity: 0;
          max-height: 0;
          transform: translateY(-20px) scale(0.95);
        }
        50% {
          opacity: 0.7;
          transform: translateY(-5px) scale(0.98);
        }
        100% {
          opacity: 1;
          max-height: 1000px;
          transform: translateY(0) scale(1);
        }
      }
      
      @keyframes slideOutFade {
        0% {
          opacity: 1;
          max-height: 1000px;
          transform: translateY(0) scale(1);
        }
        50% {
          opacity: 0.3;
          transform: translateY(-5px) scale(0.98);
        }
        100% {
          opacity: 0;
          max-height: 0;
          transform: translateY(-20px) scale(0.95);
        }
      }
      
      .dots-custom {
        animation: pulseCustom 2s infinite;
      }
      
      .dots-custom:hover {
        animation: none;
      }
      
      .expanding {
        animation: slideInFade 0.6s ease-out forwards;
      }
      
      .collapsing {
        animation: slideOutFade 0.4s ease-in forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.remove();
      }
    };
  }, []);

  // Return early if no remaining text
  if (!remainingText) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className}>
      {previewText}
      {!isExpanded && (
        <span 
          ref={dotsRef}
          className="dots-custom text-gray-600 font-bold cursor-pointer transition-all duration-500 ease-out px-2 py-1 rounded relative inline-block hover:bg-purple-100 hover:text-purple-600 hover:scale-110 hover:rotate-1 hover:shadow-lg hover:shadow-purple-300 active:scale-90"
          onClick={handleDotsClick}
          title="Click to read more"
        >
          ...
        </span>
      )}
      
      <span 
        className={`
          transition-all duration-700 ease-out overflow-hidden block
          ${isExpanded 
            ? 'opacity-100 max-h-screen translate-y-0' 
            : 'opacity-0 max-h-0 -translate-y-2'
          }
          ${isAnimating ? (isExpanded ? 'expanding' : 'collapsing') : ''}
        `}
      >
        {remainingText}
        <span 
          className="cursor-pointer text-purple-600 font-bold underline relative transition-all duration-300 ease-out ml-2 hover:text-pink-500 hover:-translate-y-0.5 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-purple-600 before:to-pink-500 before:transition-all before:duration-300 hover:before:w-full"
          onClick={toggleReadMore}
        >
          Read less
        </span>
      </span>
    </div>
  );
};

export default EnhancedReadMore;