"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { CATEGORIES } from "@/lib/constants"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Apple style: clean, minimal, spacious */}
      <section className="pt-24 pb-32 px-6 w-full">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Simple, bold headline - no gradients, no gimmicks */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]"
          >
            Find your community.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-16 font-normal leading-relaxed"
          >
            Discover masjids, halal restaurants, and Muslim-owned businesses near you.
          </motion.p>

          {/* Clean search bar - minimal, functional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for masjids, halal food, and more"
                className="w-full h-14 pl-14 pr-6 rounded-full border border-gray-200 focus:border-gray-400 outline-none transition-colors text-base bg-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories - Grid with minimal cards */}
      <section className="py-20 px-6 bg-gray-50 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CATEGORIES.map((category, i) => (
              <motion.div
                key={category.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link href={`/browse?category=${category.slug}`}>
                  <div className="group relative bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full border border-gray-100">
                    <div className="text-4xl mb-4">
                      {category.value === "MASJID" && "🕌"}
                      {category.value === "HALAL_FOOD" && "🍽️"}
                      {category.value === "BUSINESS" && "🏪"}
                      {category.value === "EDUCATION_PROGRAM" && "📚"}
                      {category.value === "ONLINE_ONLY" && "💻"}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {category.label}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA - no loud colors */}
      <section className="py-32 px-6 w-full">
        <div className="max-w-3xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
              List your business.
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Help Muslims discover your masjid, restaurant, or business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/add-listing">
                <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                  Get started
                </button>
              </Link>

              <Link href="/browse">
                <button className="px-8 py-3 border border-gray-300 text-gray-900 rounded-full font-medium hover:border-gray-400 transition-colors">
                  Browse listings
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
