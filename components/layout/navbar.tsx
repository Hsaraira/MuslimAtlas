"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 w-full">
      <div className="w-full px-6">
        <div className="flex justify-between items-center h-14 max-w-7xl mx-auto">
          {/* Logo - Simple, clean */}
          <Link
            href="/"
            className="text-base font-semibold text-gray-900 tracking-tight"
          >
            Muslim Atlas
          </Link>

          {/* Desktop Navigation - Minimal spacing */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/browse"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Browse
            </Link>
            <Link
              href="/add-listing"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Add Listing
            </Link>
            <Link
              href="/for-businesses"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              For Businesses
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 space-y-1">
            <Link
              href="/browse"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse
            </Link>
            <Link
              href="/add-listing"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Add Listing
            </Link>
            <Link
              href="/for-businesses"
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Businesses
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
