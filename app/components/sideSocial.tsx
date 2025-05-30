'use client';
import React from 'react';
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
  return (
    <div className="fixed right-4 top-1/3 z-50 flex flex-col space-y-4 bg-white/10 p-2 rounded-lg backdrop-blur-sm shadow-md">
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
  );
};

export default SideSocial;
