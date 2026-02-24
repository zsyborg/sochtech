"use client";

import Link from 'next/link';
import React from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';

export default function HomeIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main role="main" className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Home Layout Variations</h1>
        <p className="mb-6 text-gray-400">Choose a layout variation for the Home page:</p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-gray-900/40 rounded-lg">
            <h3 className="font-semibold text-lg">Home 1 — Split</h3>
            <p className="text-sm text-gray-400 my-3">Left-aligned hero with right-side visual and feature tiles.</p>
            <Link href="/home/variation-1" className="text-cyan-400 hover:underline">View</Link>
          </div>

          <div className="p-6 bg-gray-900/40 rounded-lg">
            <h3 className="font-semibold text-lg">Home 2 — Centered</h3>
            <p className="text-sm text-gray-400 my-3">Centered hero and stacked sections (the existing centered layout).</p>
            <Link href="/home/variation-2" className="text-cyan-400 hover:underline">View</Link>
          </div>

          <div className="p-6 bg-gray-900/40 rounded-lg">
            <h3 className="font-semibold text-lg">Home 3 — Mosaic</h3>
            <p className="text-sm text-gray-400 my-3">Mosaic grid with cards and asymmetrical hero.</p>
            <Link href="/home/variation-3" className="text-cyan-400 hover:underline">View</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}