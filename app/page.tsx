"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Search, MapPin, Star } from "lucide-react"
import { CATEGORIES } from "@/lib/constants"

const ease = [0.22, 1, 0.36, 1] as const

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Floating Gradient Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by 25,000+ Muslims worldwide</span>
            </div>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-center mb-6"
          >
            <span className="block bg-gradient-to-br from-gray-900 via-cyan-700 to-cyan-600 bg-clip-text text-transparent">
              Discover Muslim Life
            </span>
            <span className="block bg-gradient-to-br from-gray-900 via-cyan-700 to-cyan-600 bg-clip-text text-transparent">
              Near You
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Find masjids, halal restaurants, and Muslim-friendly businesses wherever you are
          </motion.p>

          {/* Search Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="max-w-4xl mx-auto rounded-3xl shadow-2xl shadow-cyan-500/10 border border-gray-100 bg-white/80 backdrop-blur-sm p-8"
          >
            <div className="grid md:grid-cols-[1fr,auto,auto] gap-4 mb-6">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search masjids, halal food, businesses..."
                  className="w-full h-16 pl-14 pr-6 rounded-2xl border-2 border-gray-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all text-lg"
                />
              </div>

              {/* Location Input */}
              <div className="relative md:w-64">
                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="City or ZIP code"
                  className="w-full h-16 pl-14 pr-6 rounded-2xl border-2 border-gray-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all text-lg"
                />
              </div>

              {/* Search Button */}
              <button className="h-16 px-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-200">
                Search
              </button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 mr-2 py-2">Quick filters:</span>
              {["Masjid", "Halal Food", "Prayer Space", "Nearby"].map((filter, i) => (
                <motion.button
                  key={filter}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05, ease }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-cyan-50 text-gray-700 hover:text-cyan-700 text-sm font-medium transition-colors border border-transparent hover:border-cyan-200"
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16"
          >
            {[
              { number: "5,000+", label: "Listings" },
              { number: "300+", label: "Cities" },
              { number: "25K+", label: "Members" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-br from-cyan-600 to-cyan-700 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-gray-900">Explore by Category</h2>
            <p className="text-lg text-gray-600">Find exactly what you need in your community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category, i) => (
              <motion.div
                key={category.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <Link href={`/browse?category=${category.slug}`}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.2, ease }}
                    className="group relative h-full rounded-3xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
                  >
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="text-5xl mb-4"
                      >
                        {category.value === "MASJID" && "🕌"}
                        {category.value === "HALAL_FOOD" && "🍽️"}
                        {category.value === "BUSINESS" && "🏪"}
                        {category.value === "EDUCATION_PROGRAM" && "📚"}
                        {category.value === "ONLINE_ONLY" && "💻"}
                      </motion.div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {category.label}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="rounded-3xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-12 text-center shadow-2xl shadow-cyan-500/20"
          >
            <h2 className="text-white mb-4">List Your Business</h2>
            <p className="text-cyan-50 text-lg mb-8 max-w-2xl mx-auto">
              Own a masjid, halal restaurant, or Muslim-friendly business? Join our community and help Muslims discover you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="/add-listing">
                  <button className="px-8 py-4 rounded-xl bg-white text-cyan-700 font-semibold shadow-lg hover:shadow-xl transition-all">
                    Get Started for Free
                  </button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="/browse">
                  <button className="px-8 py-4 rounded-xl bg-cyan-600 text-white font-semibold border-2 border-white/20 hover:bg-cyan-500 transition-all">
                    Browse Listings
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
