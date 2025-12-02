"use client"

import Link from "next/link"

export default function HomePage() {
  const categories = [
    { label: "Masjids", href: "/browse?category=masjids-prayer-spaces" },
    { label: "Halal Food", href: "/browse?category=halal-food" },
    { label: "Businesses", href: "/browse?category=muslim-businesses" },
    { label: "Online", href: "/browse?category=online-services" },
  ]

  return (
    <main className="min-h-screen bg-ma-bg flex items-center justify-center px-6">
      <div className="w-full max-w-4xl text-center">
        {/* Logo + title */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-5xl" aria-hidden="true">🌙</span>
          <h1 className="text-5xl md:text-6xl font-semibold text-ma-navy">
            Muslim Atlas
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg text-ma-navy mb-12">
          Find masjids, halal food, and Muslim businesses near you.
        </p>

        {/* Search bar */}
        <div className="w-full max-w-2xl mx-auto bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-300 flex items-center gap-3 px-5 py-3 mb-10">
          <svg
            className="w-5 h-5 text-gray-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-sm text-ma-navy placeholder:text-gray-400"
            placeholder="Search for masjids, halal food, or businesses..."
          />

          <svg
            className="w-5 h-5 text-gray-400 flex-shrink-0 cursor-pointer hover:text-ma-navy transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </div>

        {/* Categories */}
        <nav className="flex items-center justify-center gap-8 text-lg text-ma-navy font-medium">
          {categories.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="hover:text-ma-accent transition-colors"
            >
              {category.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  )
}
