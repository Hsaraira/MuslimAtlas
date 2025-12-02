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
      <div className="w-full max-w-5xl text-center">
        {/* Logo + title */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <svg
            className="w-16 h-16 text-ma-navy"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <h1 className="text-6xl md:text-7xl font-bold text-ma-navy">
            Muslim Atlas
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-ma-navy mb-12">
          Find masjids, halal food, and Muslim businesses near you.
        </p>

        {/* Search bar */}
        <div className="w-full max-w-3xl mx-auto mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              type="text"
              className="w-full bg-white border border-gray-200 rounded-full pl-14 pr-14 py-4 text-base text-ma-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ma-accent focus:border-transparent shadow-sm hover:shadow-md transition-all"
              placeholder="Search for masjids, halal food, or businesses..."
            />

            <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
              <button
                type="button"
                className="text-gray-400 hover:text-ma-navy transition-colors"
                aria-label="Voice search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <nav className="flex items-center justify-center gap-10 text-lg text-ma-navy">
          {categories.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="hover:underline"
            >
              {category.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  )
}
