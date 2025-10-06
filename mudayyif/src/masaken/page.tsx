'use client';

import React, { useEffect, useState } from 'react';

interface Property {
  "Project Name": string;
  Developer: string;
  Area: string;
  "Price (AED)": string;
  Latitude: number;
  Longitude: number;
  "Image URL": string;
  Tags: string;
}

export default function MasakenPage() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetch('/data/masaken_demo_50_projects.json')
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <main className="min-h-screen bg-[#EFF6F2] text-[#125b50] font-sans">
      {/* Hero Section */}
      <section className="relative px-6 py-48 text-center bg-gradient-to-b from-[#D7DFD2] to-[#EFF6F2] rounded-b-3xl shadow-lg mb-12 overflow-hidden min-h-[900px] md:min-h-[1000px] lg:min-h-[1100px] fade-in">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-b-3xl z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/hero-bg.mp4"
          />
          {/* No overlay for maximum clarity */}
        </div>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[400px] w-full">
          <div className="w-full max-w-4xl px-8 py-12 bg-white/20 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center mx-auto mt-32">
            <h1 className="text-5xl font-extrabold mb-16 tracking-tight text-[#125b50] drop-shadow-lg text-center">Find the Life That Fits You</h1>
            <p className="text-2xl mb-12 max-w-3xl mx-auto text-[#4A8767] font-medium text-center">
              <span className="font-bold">Masaken</span> is your emotionally intelligent real estate matchmaker. Whether you're a national, resident, or investor, let us match your lifestyle to the perfect property in Abu Dhabi.
            </p>
            <button className="bg-[#125b50] text-white px-8 py-4 rounded-full shadow-xl hover:bg-[#4A8767] transition text-lg font-semibold tracking-wide relative overflow-hidden group">
              <span className="relative z-10">Try the Masaken Matchmaker</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#4A8767] to-[#125b50] opacity-0 group-hover:opacity-60 transition-all duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative bg-gradient-to-br from-[#EFF6F2] via-[#D7DFD2] to-[#E8E2D1] py-16 px-6 text-center rounded-3xl mx-4 mb-16 shadow-md fade-in overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 hero-animated-gradient opacity-60 rounded-3xl pointer-events-none" />
        <h2 className="relative text-3xl font-bold mb-8 text-[#125b50] z-10">How It Works</h2>
        <div className="relative flex flex-col md:flex-row justify-center gap-12 mt-6 z-10">
          <div className="flex-1 bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow hover:shadow-lg transition glass-card fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4A8767]/20 text-[#4A8767] text-2xl">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l-3-3m3 3l3-3"/></svg>
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#4A8767]">1. Tell us about you</h3>
            <p className="text-[#125b50]">Answer a few quick questions about your life, needs, and vision.</p>
          </div>
          <div className="flex-1 bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow hover:shadow-lg transition glass-card fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4A8767]/20 text-[#4A8767] text-2xl">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m0 0l-3-3m3 3l3-3"/></svg>
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#4A8767]">2. See your lifestyle preview</h3>
            <p className="text-[#125b50]">We'll describe what life could feel like in your matched locations.</p>
          </div>
          <div className="flex-1 bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow hover:shadow-lg transition glass-card fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4A8767]/20 text-[#4A8767] text-2xl">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#4A8767]">3. Get your matches</h3>
            <p className="text-[#125b50]">Top properties tailored to your lifestyle and goals.</p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-white px-6 py-20 text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-[#4A8767]">Coming Soon</h2>
        <div className="text-lg text-[#4A8767] mb-8">
          Lifestyle profiles, AI chatbot, and match previews are in development.
        </div>
        <div id="masaken-chatbot-container" className="relative w-full max-w-xl mx-auto rounded-3xl p-8 bg-[#F8F8F5] shadow-lg overflow-hidden mt-8">
          <div className="relative z-10 flex flex-col items-center justify-center">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#D7DFD2]/60 text-[#125b50] text-3xl mb-4 shadow-lg">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            </span>
            <p className="text-xl text-[#4A8767] italic text-center font-medium">
              Masaken Matchmaker AI coming soon. You’ll be able to talk to an assistant here.
            </p>
          </div>
        </div>
      </section>

      {/* Property Listings Section */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-96 flex-shrink-0 mb-10 lg:mb-0 px-0 ml-16 mr-0 flex items-start mt-0 pt-16">
          <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-0">
            <h2 className="text-2xl font-bold mb-6 text-[#125b50]">Search & Filters</h2>
            {/* Search by Area */}
            <div className="mb-4 flex justify-center mt-4">
              <input type="text" placeholder="Search by area" className="w-11/12 rounded-xl border border-[#D7DFD2] px-8 py-2 focus:outline-none focus:ring-2 focus:ring-[#125b50]" />
            </div>
            {/* Price Range */}
            <div className="mb-4">
              <label className="block text-[#125b50] font-semibold mb-2">Price Range (AED)</label>
              <div className="flex gap-2">
                <input type="number" placeholder="Min" className="w-1/2 rounded-xl border border-[#D7DFD2] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#125b50]" />
                <input type="number" placeholder="Max" className="w-1/2 rounded-xl border border-[#D7DFD2] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#125b50]" />
              </div>
            </div>
            {/* Developer */}
            <div className="mb-4">
              <label className="block text-[#125b50] font-semibold mb-2">Developer</label>
              <input type="text" placeholder="Search by developer" className="w-full rounded-xl border border-[#D7DFD2] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#125b50]" />
            </div>
            {/* Property Type */}
            <div className="mb-4">
              <label className="block text-[#125b50] font-semibold mb-2">Property Type</label>
              <select className="w-full rounded-xl border border-[#D7DFD2] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#125b50]">
                <option value="">Select type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>
            {/* Completion Date */}
            <div className="mb-4">
              <label className="block text-[#125b50] font-semibold mb-2">Completion Date</label>
              <input type="date" className="w-full rounded-xl border border-[#D7DFD2] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#125b50]" />
            </div>
            {/* Budget Calculator */}
            <div className="mb-4">
              <label className="block text-[#125b50] font-semibold mb-2">Budget (AED)</label>
              <input type="number" placeholder="Enter your budget" className="w-full rounded-xl border border-[#D7DFD2] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#125b50]" />
              {/* TODO: Integrate deposit/instalment logic here. Show calculated minimum deposit required for each property and filter accordingly. */}
              <p className="text-xs text-[#4A8767] mt-2">We'll only show properties you can afford based on deposit and payment plan.</p>
            </div>
            <button className="w-full bg-[#125b50] text-white rounded-xl py-3 font-semibold mt-4 hover:bg-[#4A8767] transition">Apply Filters</button>
          </div>
        </aside>
        {/* Property Cards Section (existing code) */}
        <section className="bg-white py-16 px-4 md:px-10 lg:px-10 xl:px-16 fade-in parallax-bg flex-1 mx-auto">
          <h2 className="text-4xl font-extrabold text-left lg:mr-32 text-[#125b50] mb-24 tracking-tight">Discover Featured Properties in Abu Dhabi</h2>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property, index) => (
              <div key={index} className="card-effect float-anim bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col border border-[#4A8767] h-[520px] w-full max-w-md mx-auto p-6" style={{ animationDelay: `${0.1 * (index % 10)}s` }}>
                <img
                  src={
                    property["Image URL"] && (property["Image URL"].startsWith("http") || property["Image URL"].startsWith("/"))
                      ? property["Image URL"]
                      : `https://source.unsplash.com/400x300/?abu-dhabi,real-estate`
                  }
                  alt={property["Project Name"]}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#125b50] mb-1 truncate">{property["Project Name"]}</h3>
                    <p className="text-sm text-[#4A8767] mb-2">by {property.Developer}</p>
                    <p className="mt-1 text-[#4A8767] font-semibold text-lg">
                      AED {Number(property["Price (AED)"].replace(/,/g, "")).toLocaleString()}
                    </p>
                    <p className="text-sm text-[#4A8767] mt-1">Area: {property.Area}</p>
                    <p className="text-xs text-[#4A8767] mt-2">Tags: {property.Tags}</p>
                  </div>
                  {!property["Image URL"]?.startsWith("http") && !property["Image URL"]?.startsWith("/") && (
                    <p className="text-xs text-red-500 mt-2 italic">Image fallback applied</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}