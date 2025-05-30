'use client';
import Footer from "./components/footer";
import Header from "./components/header";
import HorAnimation from "./components/horAnimation";
import Journey from "./components/Journey";
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.classList.add('animate-in');
      
      // Set timeout to match animation duration
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 2500); // Adjust this to match your longest animation

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Intro Animation - will unmount after completion */}
      {!animationComplete && (
        <div 
          ref={containerRef}
          className="fixed inset-0 z-50 bg-black pointer-events-none opacity-0"
        >
          {/* Vertical Lines */}
          <div className="absolute inset-0 flex justify-between h-full w-full px-[10%]">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-px h-full bg-gradient-to-b from-transparent via-white/70 to-transparent origin-top transform scale-y-0"
                style={{
                  animation: `lineGrow 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards ${i * 0.15}s`,
                  left: `${20 + (i * 15)}%`
                }}
              />
            ))}
          </div>

          {/* Horizontal Scan Line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent transform -translate-y-full" 
            style={{
              animation: `scanDown 2s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.5s`
            }}
          />

          {/* Center Pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-white/30 transform scale-0"
              style={{
                animation: `pulseOut 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards 1s`
              }}
            />
          </div>
        </div>
      )}

      {/* Main Content - always visible but initially hidden */}
      <div className={`relative ${!animationComplete ? 'opacity-0' : 'opacity-100 animate-fadeIn'}`}>  
        <Header />
        <HorAnimation />
        <Journey />
        <Footer />
      </div>

  

    </div>
  );
}