import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-cyan-700 bg-clip-text text-transparent mb-2">
              Muslim Atlas
            </h3>
            <p className="text-sm text-gray-600">
              Find masjids, halal food, and Muslim-friendly businesses wherever you are.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/browse"
                  className="text-gray-600 hover:text-cyan-600 transition-colors"
                >
                  Browse
                </Link>
              </li>
              <li>
                <Link
                  href="/add-listing"
                  className="text-gray-600 hover:text-cyan-600 transition-colors"
                >
                  Add Listing
                </Link>
              </li>
              <li>
                <Link
                  href="/for-businesses"
                  className="text-gray-600 hover:text-cyan-600 transition-colors"
                >
                  For Businesses
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-cyan-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/halal-policy"
                  className="text-gray-600 hover:text-cyan-600 transition-colors"
                >
                  Halal & Content Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-cyan-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-cyan-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-cyan-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Muslim Atlas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
