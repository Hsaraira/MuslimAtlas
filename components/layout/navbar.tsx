"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-green-800 hover:text-green-700 transition-colors"
          >
            Muslim Atlas
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/browse"
              className="text-stone-700 hover:text-green-800 transition-colors font-medium"
            >
              Browse
            </Link>
            <Link
              href="/add-listing"
              className="text-stone-700 hover:text-green-800 transition-colors font-medium"
            >
              Add Listing
            </Link>
            <Link
              href="/for-businesses"
              className="text-stone-700 hover:text-green-800 transition-colors font-medium"
            >
              For Businesses
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-medium"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-green-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/browse"
              className="block text-stone-700 hover:text-green-800 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse
            </Link>
            <Link
              href="/add-listing"
              className="block text-stone-700 hover:text-green-800 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Add Listing
            </Link>
            <Link
              href="/for-businesses"
              className="block text-stone-700 hover:text-green-800 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Businesses
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-medium text-center"
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
