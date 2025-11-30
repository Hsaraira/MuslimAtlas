import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-green-800 mb-2">
              Muslim Atlas
            </h3>
            <p className="text-sm text-stone-600">
              Find masjids, halal food, and Muslim-friendly businesses wherever you are.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-stone-900 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/browse"
                  className="text-stone-600 hover:text-green-800 transition-colors"
                >
                  Browse
                </Link>
              </li>
              <li>
                <Link
                  href="/add-listing"
                  className="text-stone-600 hover:text-green-800 transition-colors"
                >
                  Add Listing
                </Link>
              </li>
              <li>
                <Link
                  href="/for-businesses"
                  className="text-stone-600 hover:text-green-800 transition-colors"
                >
                  For Businesses
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-stone-900 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-stone-600 hover:text-green-800 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/halal-policy"
                  className="text-stone-600 hover:text-green-800 transition-colors"
                >
                  Halal & Content Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone-600 hover:text-green-800 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-stone-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-stone-600 hover:text-green-800 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-stone-600 hover:text-green-800 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-200 text-center text-sm text-stone-600">
          <p>&copy; {new Date().getFullYear()} Muslim Atlas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
