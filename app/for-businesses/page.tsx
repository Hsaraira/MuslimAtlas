import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, TrendingUp, Share2, BarChart } from "lucide-react"

export default function ForBusinessesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-700 to-green-800 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Found by Muslims Worldwide
          </h1>
          <p className="text-xl md:text-2xl text-green-50 mb-8 max-w-3xl mx-auto">
            Muslim Atlas helps your masjid, halal business, or Muslim service reach the global Ummah with a clean, shareable page.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/add-listing">
              List Your Business for Free
            </Link>
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            Why List on Muslim Atlas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100 text-green-700">
                      <Users size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">
                      Reach Your Community
                    </h3>
                    <p className="text-stone-600">
                      Connect with Muslims searching for masjids, halal food, and trusted services in your area.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100 text-green-700">
                      <Share2 size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">
                      Easy to Share
                    </h3>
                    <p className="text-stone-600">
                      Get a clean, mobile-friendly page that's easy to share on WhatsApp, social media, and with your community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100 text-green-700">
                      <TrendingUp size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">
                      Grow Your Reach
                    </h3>
                    <p className="text-stone-600">
                      Appear in search results when Muslims look for services in your city or category.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100 text-green-700">
                      <BarChart size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">
                      Track Your Impact
                    </h3>
                    <p className="text-stone-600">
                      See how many people view your listing and click through to your website or contact you.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-4 text-center">
            What's Included (Free)
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
            Every basic listing on Muslim Atlas includes:
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {[
                  "Clean, mobile-friendly listing page",
                  "Category badge and location visibility",
                  "Contact information (phone, email, website)",
                  "Description and features/tags",
                  "Map integration (coming soon)",
                  "Social sharing buttons",
                  "Basic analytics (views and clicks)",
                  "Ownership and halal badges"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Future Premium */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Premium Features (Coming Soon)
          </h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            We're working on optional premium features for businesses that want extra visibility. Basic listings will always stay free.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="bg-stone-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-stone-900 mb-2">
                  Featured Placement
                </h3>
                <p className="text-sm text-stone-600">
                  Appear at the top of search results in your city
                </p>
              </CardContent>
            </Card>
            <Card className="bg-stone-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-stone-900 mb-2">
                  Photo Gallery
                </h3>
                <p className="text-sm text-stone-600">
                  Showcase your space with multiple photos
                </p>
              </CardContent>
            </Card>
            <Card className="bg-stone-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-stone-900 mb-2">
                  Priority Support
                </h3>
                <p className="text-sm text-stone-600">
                  Fast-tracked verification and updates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-green-50">
            It takes about 2-3 minutes to create your listing.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/add-listing">
              Add Your Listing Now
            </Link>
          </Button>
          <p className="mt-6 text-sm text-green-100">
            Free forever. No credit card required.
          </p>
        </div>
      </section>
    </div>
  )
}
