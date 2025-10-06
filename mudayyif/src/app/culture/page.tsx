"use client";

import React from "react";
import Image from "next/image";

export default function CulturePage() {
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
          <a href="/culture" className="text-azure font-semibold">Culture</a>
        </div>
        <div>
          <button className="bg-darkAzure text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-azure transition">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-8 text-center text-darkAzure">Emirati Culture</h1>
          <p className="text-xl text-center text-azure mb-12 max-w-3xl mx-auto">
            Immerse yourself in the rich tapestry of Emirati culture, from traditional arts and crafts to modern cultural expressions.
          </p>
          
          {/* Culture Sections */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Traditional Arts */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-darkAzure">Traditional Arts</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-azure rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-darkAzure">Calligraphy</h4>
                    <p className="text-gray-600">The art of beautiful writing, deeply rooted in Islamic tradition and Emirati heritage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-azure rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-darkAzure">Pottery & Ceramics</h4>
                    <p className="text-gray-600">Traditional craftsmanship passed down through generations of Emirati artisans.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-azure rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-darkAzure">Textile Weaving</h4>
                    <p className="text-gray-600">Intricate patterns and designs that tell stories of the desert and sea.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Culture */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-darkAzure">Modern Expressions</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-darkAzure rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-darkAzure">Contemporary Art</h4>
                    <p className="text-gray-600">Local and international artists creating works that bridge tradition and innovation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-darkAzure rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-darkAzure">Music & Performance</h4>
                    <p className="text-gray-600">From traditional folk music to modern concerts and theatrical performances.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-darkAzure rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-darkAzure">Literature & Poetry</h4>
                    <p className="text-gray-600">Emirati writers and poets sharing stories of the past and visions of the future.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Events */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold mb-8 text-center text-darkAzure">Cultural Events & Festivals</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-azure rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🎭</span>
                </div>
                <h4 className="font-semibold text-darkAzure mb-2">Abu Dhabi Festival</h4>
                <p className="text-gray-600 text-sm">Annual celebration of arts, music, and cultural exchange.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-darkAzure rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">📚</span>
                </div>
                <h4 className="font-semibold text-darkAzure mb-2">Abu Dhabi Book Fair</h4>
                <p className="text-gray-600 text-sm">International literary festival promoting reading and publishing.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-azure rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🎨</span>
                </div>
                <h4 className="font-semibold text-darkAzure mb-2">Art Abu Dhabi</h4>
                <p className="text-gray-600 text-sm">Contemporary art fair showcasing regional and international artists.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
