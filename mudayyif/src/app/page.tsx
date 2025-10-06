"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-creamPistachio text-darkAzure font-sans">
      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-8 py-6 bg-white/90 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/homepage/logo.svg" alt="Imagine Abu Dhabi Logo" width={48} height={48} className="w-12 h-12" />
        </div>
        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <a href="/masaken" className="text-darkAzure font-semibold hover:text-azure transition">Masaken</a>
          <div className="relative">
            <button
              className="text-darkAzure font-semibold hover:text-azure transition flex items-center gap-1"
              onClick={() => setDropdownOpen((open) => !open)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
            >
              Abu Dhabi
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white rounded-xl shadow-lg py-2 z-50 border border-creamPistachio animate-fade-in">
                <a href="/islands" className="block px-4 py-2 text-darkAzure hover:bg-creamPistachio rounded transition">Islands</a>
                <a href="/landmarks" className="block px-4 py-2 text-darkAzure hover:bg-creamPistachio rounded transition">Landmarks</a>
                <a href="/culture" className="block px-4 py-2 text-darkAzure hover:bg-creamPistachio rounded transition">Culture</a>
              </div>
            )}
          </div>
        </div>
        {/* Login */}
        <div>
          <button className="bg-darkAzure text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-azure transition">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] pt-40 pb-20 px-6 text-center bg-gradient-to-br from-azure via-creamPistachio to-white">
        <div className="bg-white/80 rounded-3xl shadow-lg px-10 py-14 max-w-3xl w-full flex flex-col items-center">
          <h1 className="text-6xl font-extrabold mb-8 tracking-tight text-darkAzure drop-shadow-lg">Imagine Abu Dhabi</h1>
          <p className="text-2xl max-w-2xl mx-auto text-azure font-medium mb-10">
            Welcome to the future of Abu Dhabi. Discover culture, experiences, and opportunities in a city that inspires.
          </p>
          <button className="bg-darkAzure text-white px-8 py-4 rounded-full shadow-xl hover:bg-azure transition text-lg font-semibold tracking-wide">
            Explore Now
          </button>
        </div>
      </section>
    </div>
  );
}
