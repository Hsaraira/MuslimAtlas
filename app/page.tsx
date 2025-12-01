"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Search, MapPin } from "lucide-react"
import { CATEGORIES } from "@/lib/constants"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ma-bg">
      {/* Hero Section - Centered search-first layout */}
      <section className="min-h-screen bg-ma-bg flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center">
          {/* Logo and Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl">🌙</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-ma-navy">
              Muslim Atlas
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-base md:text-lg text-ma-muted max-w-xl"
          >
            Find masjids, halal food, and Muslim businesses near you.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 w-full max-w-2xl bg-white border border-ma-border shadow-lg rounded-full flex items-center gap-3 px-4 py-3 md:py-4"
          >
            <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for masjids, halal food, or businesses..."
              className="flex-1 bg-transparent outline-none text-sm md:text-base text-ma-navy placeholder:text-gray-400"
            />
            <MapPin className="w-5 h-5 text-gray-400 cursor-pointer hover:text-ma-accent transition-colors flex-shrink-0" />
          </motion.div>

          {/* Category links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-ma-navy"
          >
            {CATEGORIES.map((category) => (
              <Link
                key={category.value}
                href={`/browse?category=${category.slug}`}
                className="cursor-pointer hover:text-ma-accent transition-colors relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 hover:after:w-full after:bg-ma-accent after:transition-all after:duration-300"
              >
                {category.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  )
}
