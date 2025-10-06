"use client";

import React from "react";
import Image from "next/image";

export default function ExperiencesPage() {
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
          <a href="/landmarks" className="text-darkAzure font-semibold hover:text-azure transition">Landmarks</a>
          <a href="/culture" className="text-darkAzure font-semibold hover:text-azure transition">Culture</a>
          <a href="/experiences" className="text-azure font-semibold">Experiences</a>
        </div>
        <div>
          <button className="bg-darkAzure text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-azure transition">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-8 text-center text-darkAzure">Abu Dhabi Experiences</h1>
          <p className="text-xl text-center text-azure mb-12 max-w-3xl mx-auto">
            Immerse yourself in unforgettable experiences that showcase the best of Abu Dhabi's culture, adventure, and luxury.
          </p>
          
          {/* Experience Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cultural Experiences */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-azure to-darkAzure flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Cultural Heritage</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-darkAzure">Traditional Experiences</h4>
                <p className="text-gray-600 mb-4">Discover authentic Emirati culture through traditional crafts, music, and cuisine.</p>
                <button className="bg-azure text-white px-4 py-2 rounded-full hover:bg-darkAzure transition">Explore</button>
              </div>
            </div>

            {/* Adventure Experiences */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-darkAzure to-azure flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Adventure & Nature</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-darkAzure">Outdoor Adventures</h4>
                <p className="text-gray-600 mb-4">From desert safaris to water sports, experience Abu Dhabi's natural beauty.</p>
                <button className="bg-azure text-white px-4 py-2 rounded-full hover:bg-darkAzure transition">Explore</button>
              </div>
            </div>

            {/* Luxury Experiences */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-azure to-creamPistachio flex items-center justify-center">
                <h3 className="text-2xl font-bold text-darkAzure">Luxury & Wellness</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-darkAzure">Premium Services</h4>
                <p className="text-gray-600 mb-4">Indulge in world-class spas, fine dining, and exclusive luxury experiences.</p>
                <button className="bg-azure text-white px-4 py-2 rounded-full hover:bg-darkAzure transition">Explore</button>
              </div>
            </div>

            {/* Entertainment Experiences */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-creamPistachio to-azure flex items-center justify-center">
                <h3 className="text-2xl font-bold text-darkAzure">Entertainment</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-darkAzure">World-Class Entertainment</h4>
                <p className="text-gray-600 mb-4">Enjoy theme parks, concerts, and world-renowned entertainment venues.</p>
                <button className="bg-azure text-white px-4 py-2 rounded-full hover:bg-darkAzure transition">Explore</button>
              </div>
            </div>

            {/* Shopping Experiences */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-darkAzure to-azure flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Shopping & Markets</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-darkAzure">Retail Therapy</h4>
                <p className="text-gray-600 mb-4">From traditional souks to luxury malls, discover unique shopping experiences.</p>
                <button className="bg-azure text-white px-4 py-2 rounded-full hover:bg-darkAzure transition">Explore</button>
              </div>
            </div>

            {/* Food & Dining */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-azure to-darkAzure flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Culinary Delights</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-darkAzure">Food & Dining</h4>
                <p className="text-gray-600 mb-4">Savor authentic Emirati cuisine and international flavors from world-class chefs.</p>
                <button className="bg-azure text-white px-4 py-2 rounded-full hover:bg-darkAzure transition">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
