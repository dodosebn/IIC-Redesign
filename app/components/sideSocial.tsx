'use client';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa6';

const SocialLinks = [
  { href: 'https://www.facebook.com/ideaiscapital', icon: <FaFacebookF />, label: 'Facebook' },
  { href: 'https://x.com/Ideaiscapital', icon: <FaXTwitter />, label: 'X' },
  { href: 'https://instagram.com/ideaiscapital', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://linkedin.com/company/ideaiscapital/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
  { href: 'https://www.tiktok.com/@ideaiscapital', icon: <FaTiktok />, label: 'TikTok' },
];

const SideSocial = () => {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div>
      {/* Toggle Button: only on mobile */}
      <div className="absolute top-5 right-4 z-50 md:hidden">
        {!showSocial && (
          <button
            onClick={() => setShowSocial(true)}
            className="bg-[#f1f1f1] text-xl font-bold text-[#000] px-4 py-2 rounded-full shadow-lg"
          >
            SM
          </button>
        )}
      </div>

      {/* Mobile View: Show only when showSocial is true */}
      {showSocial && (
        <div className="absolute right-4 top-8 z-50 flex flex-col space-y-4 bg-white/10 p-3 rounded-lg backdrop-blur-sm shadow-md md:hidden">
          <button
            onClick={() => setShowSocial(false)}
            className="self-center text-black bg-white p-2 rounded-full"
            aria-label="Close Social Links"
          >
            <FaTimes />
          </button>

          {SocialLinks.map(({ href, icon, label }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
              aria-label={label}
            >
              {icon}
              <span className="absolute right-full mr-3 hidden group-hover:inline text-sm bg-black text-white px-2 py-1 rounded">
                {label}
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Desktop View: Always show */}
      <div className="hidden md:fixed  md:bg-white/10 md:p-3 md:rounded-lg md:backdrop-blur-sm shadow-md md:flex md:flex-col md:space-y-4 md:right-4 md:top-1/4 md:z-50">
        {SocialLinks.map(({ href, icon, label }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-white hover:text-black transition-all duration-300"
            aria-label={label}
          >
            {icon}
            <span className="absolute right-full mr-3 hidden group-hover:inline text-sm bg-black text-white px-2 py-1 rounded">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideSocial;
