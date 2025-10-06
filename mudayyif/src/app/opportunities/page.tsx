"use client";

import React from "react";
import Image from "next/image";

export default function OpportunitiesPage() {
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
          <a href="/experiences" className="text-darkAzure font-semibold hover:text-azure transition">Experiences</a>
          <a href="/opportunities" className="text-azure font-semibold">Opportunities</a>
        </div>
        <div>
          <button className="bg-darkAzure text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-azure transition">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-8 text-center text-darkAzure">Opportunities in Abu Dhabi</h1>
          <p className="text-xl text-center text-azure mb-12 max-w-3xl mx-auto">
            Discover the endless opportunities that Abu Dhabi offers for business, investment, career growth, and personal development.
          </p>
          
          {/* Opportunity Categories */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Business Opportunities */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-darkAzure">Business & Investment</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-azure rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-darkAzure">Free Zones</h4>
                    <p className="text-gray-600">Establish your business in world-class free zones with 100% foreign ownership.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-azure rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-darkAzure">Investment Incentives</h4>
                    <p className="text-gray-600">Benefit from tax exemptions, streamlined processes, and government support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-azure rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-darkAzure">Strategic Location</h4>
                    <p className="text-gray-600">Access to global markets with world-class infrastructure and connectivity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-darkAzure">Career & Employment</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-darkAzure rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-darkAzure">Diverse Industries</h4>
                    <p className="text-gray-600">Opportunities in energy, finance, technology, healthcare, and more.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-darkAzure rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-darkAzure">Competitive Packages</h4>
                    <p className="text-gray-600">Attractive salaries, benefits, and tax-free income for expatriates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-darkAzure rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-darkAzure">Professional Growth</h4>
                    <p className="text-gray-600">Access to training, development programs, and international exposure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Sectors */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold mb-8 text-center text-darkAzure">Key Economic Sectors</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-azure rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <h4 className="font-semibold text-darkAzure mb-2">Energy & Petrochemicals</h4>
                <p className="text-gray-600 text-sm">Leading global energy hub with innovative sustainability initiatives.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-darkAzure rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🏦</span>
                </div>
                <h4 className="font-semibold text-darkAzure mb-2">Financial Services</h4>
                <p className="text-gray-600 text-sm">Regional financial center with world-class banking and investment services.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-azure rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🚀</span>
                </div>
                <h4 className="font-semibold text-darkAzure mb-2">Technology & Innovation</h4>
                <p className="text-gray-600 text-sm">Emerging tech hub with focus on AI, blockchain, and smart city solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
