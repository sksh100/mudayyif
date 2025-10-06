"use client";

import React from "react";
import Image from "next/image";

export default function LandmarksPage() {
  return (
    <div className="min-h-screen bg-creamPistachio text-darkAzure font-sans">
      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-8 py-6 bg-white/90 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
        <div className="flex items-center gap-2">
          <Image src="/homepage/logo.svg" alt="Imagine Abu Dhabi Logo" width={48} height={48} className="w-12 h-12" />
        </div>
        <div className="flex items-center gap-8">
          <a href="/" className="text-darkAzure font-semibold hover:text-azure transition">Home</a>
          <a href="/masaken" className="text-darkAzure font-semibold hover:text-azure transition">Masaken</a>
          <a href="/islands" className="text-darkAzure font-semibold hover:text-azure transition">Islands</a>
          <a href="/landmarks" className="text-azure font-semibold">Landmarks</a>
          <a href="/culture" className="text-darkAzure font-semibold hover:text-azure transition">Culture</a>
        </div>
        <div>
          <button className="bg-darkAzure text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-azure transition">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-8 text-center text-darkAzure">Iconic Landmarks</h1>
          <p className="text-xl text-center text-azure mb-12 max-w-3xl mx-auto">
            Explore Abu Dhabi's most iconic landmarks that showcase the perfect blend of traditional heritage and modern innovation.
          </p>
          
          {/* Landmarks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sheikh Zayed Mosque */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-azure to-darkAzure flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Sheikh Zayed Mosque</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-darkAzure">Architectural Marvel</h4>
                <p className="text-gray-600 mb-4">One of the world's largest mosques, featuring stunning Islamic architecture and craftsmanship.</p>
                <button className="bg-azure text-white px-4 py-2 rounded-full hover:bg-darkAzure transition">Learn More</button>
              </div>
            </div>

            {/* Louvre Abu Dhabi */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-darkAzure to-azure flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Louvre Abu Dhabi</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-darkAzure">Universal Museum</h4>
                <p className="text-gray-600 mb-4">A masterpiece of modern architecture showcasing art and culture from around the world.</p>
                <button className="bg-azure text-white px-4 py-2 rounded-full hover:bg-darkAzure transition">Learn More</button>
              </div>
            </div>

            {/* Qasr Al Hosn */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-azure to-creamPistachio flex items-center justify-center">
                <h3 className="text-2xl font-bold text-darkAzure">Qasr Al Hosn</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-darkAzure">Historic Fort</h4>
                <p className="text-gray-600 mb-4">The oldest stone building in Abu Dhabi, representing the city's rich heritage and history.</p>
                <button className="bg-azure text-white px-4 py-2 rounded-full hover:bg-darkAzure transition">Learn More</button>
              </div>
            </div>

            {/* Emirates Palace */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-darkAzure to-azure flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Emirates Palace</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-darkAzure">Luxury Hotel</h4>
                <p className="text-gray-600 mb-4">A symbol of Arabian hospitality and luxury, set against the backdrop of the Arabian Gulf.</p>
                <button className="bg-azure text-white px-4 py-2 rounded-full hover:bg-darkAzure transition">Learn More</button>
              </div>
            </div>

            {/* Etihad Towers */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-azure to-darkAzure flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Etihad Towers</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-darkAzure">Modern Skyline</h4>
                <p className="text-gray-600 mb-4">Five iconic towers that define Abu Dhabi's modern skyline and architectural ambition.</p>
                <button className="bg-azure text-white px-4 py-2 rounded-full hover:bg-darkAzure transition">Learn More</button>
              </div>
            </div>

            {/* Heritage Village */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-creamPistachio to-azure flex items-center justify-center">
                <h3 className="text-2xl font-bold text-darkAzure">Heritage Village</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-darkAzure">Cultural Experience</h4>
                <p className="text-gray-600 mb-4">A living museum showcasing traditional Emirati life, crafts, and cultural heritage.</p>
                <button className="bg-azure text-white px-4 py-2 rounded-full hover:bg-darkAzure transition">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
