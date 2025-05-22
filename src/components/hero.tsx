"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-20 px-4 bg-white text-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Welcome to HRIS System
      </h1>
      <p className="text-gray-600 mb-6">
        Empowering HR teams for streamlined operations.
      </p>
      <Link
        href="/dashboard"
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
      >
        Get Started
      </Link>
    </section>
  );
}
