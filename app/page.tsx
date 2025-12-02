"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Search, MapPin } from "lucide-react"
import { CATEGORIES } from "@/lib/constants"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ma-bg flex items-center justify-center px-4">
      <div className="w-full max-w-xl flex flex-col items-center text-center">
        {/* Logo and Brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2 mb-2"
        >
          <span className="text-3xl">🌙</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-ma-navy">
            Muslim Atlas
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-base text-ma-navy mb-8"
        >
          Find masjids, halal food, and Muslim businesses near you.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full bg-white rounded-full shadow-sm border border-gray-200 flex items-center gap-3 px-5 py-3.5 mb-5"
        >
          <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search for masjids, halal food, or businesses..."
            className="flex-1 bg-transparent outline-none text-sm text-ma-navy placeholder:text-gray-400"
          />
          <MapPin className="w-4 h-4 text-gray-400 cursor-pointer hover:text-ma-accent transition-colors flex-shrink-0" />
        </motion.div>

        {/* Category links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-ma-navy"
        >
          {CATEGORIES.map((category) => (
            <Link
              key={category.value}
              href={`/browse?category=${category.slug}`}
              className="hover:text-ma-accent transition-colors"
            >
              {category.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
