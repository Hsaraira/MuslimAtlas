import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-ma-bg border-t border-ma-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-ma-navy mb-4 uppercase tracking-wider">Browse</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/browse"
                  className="text-ma-muted hover:text-ma-navy transition-colors"
                >
                  All Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/add-listing"
                  className="text-ma-muted hover:text-ma-navy transition-colors"
                >
                  Add Listing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-ma-navy mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-ma-muted hover:text-ma-navy transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/for-businesses"
                  className="text-ma-muted hover:text-ma-navy transition-colors"
                >
                  For Businesses
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-ma-navy mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-ma-muted hover:text-ma-navy transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-ma-muted hover:text-ma-navy transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-ma-navy mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-ma-muted hover:text-ma-navy transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  href="/halal-policy"
                  className="text-ma-muted hover:text-ma-navy transition-colors"
                >
                  Halal Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ma-border">
          <p className="text-xs text-ma-muted">&copy; {new Date().getFullYear()} Muslim Atlas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
