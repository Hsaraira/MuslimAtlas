"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-700 bg-clip-text text-transparent hover:from-cyan-700 hover:to-cyan-800 transition-all"
          >
            Muslim Atlas
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/browse"
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Browse
            </Link>
            <Link
              href="/add-listing"
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Add Listing
            </Link>
            <Link
              href="/for-businesses"
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              For Businesses
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all font-medium"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-cyan-600"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/browse"
              className="block text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse
            </Link>
            <Link
              href="/add-listing"
              className="block text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Add Listing
            </Link>
            <Link
              href="/for-businesses"
              className="block text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Businesses
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
