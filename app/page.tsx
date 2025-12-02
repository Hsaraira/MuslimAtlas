"use client"

import Link from "next/link"
import { CATEGORIES } from "@/lib/constants"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ma-bg flex items-center justify-center">
      <section className="max-w-3xl w-full px-4 text-center">
        <div className="flex flex-col items-center gap-4 md:gap-5">
          {/* Logo + title */}
          <div className="flex items-center gap-2">
            <span className="text-3xl md:text-4xl" aria-hidden="true">
              🌙
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ma-navy">
              Muslim Atlas
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-sm md:text-lg text-ma-muted max-w-xl">
            Find masjids, halal food, and Muslim businesses near you.
          </p>

          {/* Search bar */}
          <div className="mt-2 w-full max-w-2xl bg-white border border-ma-border shadow-lg rounded-full flex items-center gap-3 px-4 py-2.5 md:py-3.5">
            {/* left search icon */}
            <svg
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M11 4a7 7 0 015.292 11.708l3 3a1 1 0 01-1.414 1.414l-3-3A7 7 0 1111 4z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* input */}
            <input
              type="text"
              className="flex-1 bg-transparent outline-none text-sm md:text-base text-ma-navy placeholder:text-gray-400"
              placeholder="Search for masjids, halal food, or businesses..."
            />

            {/* right location icon */}
            <button
              type="button"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-ma-border text-gray-400 hover:text-ma-navy hover:border-ma-accent transition"
              aria-label="Use my location"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 4v2m0 12v2m8-8h-2M6 12H4m13.657-5.657l-1.414 1.414M7.757 16.243l-1.414 1.414m0-11.314l1.414 1.414M16.243 16.243l1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Categories row */}
          <nav className="mt-2 flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-ma-navy">
            {CATEGORIES.map((category) => (
              <Link
                key={category.value}
                href={`/browse?category=${category.slug}`}
                className="group relative pb-0.5 outline-none hover:text-ma-accent focus-visible:text-ma-accent"
              >
                <span>{category.label}</span>
                <span className="pointer-events-none absolute left-0 -bottom-0.5 h-0.5 w-0 bg-ma-accent transition-[width] duration-150 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  )
}
