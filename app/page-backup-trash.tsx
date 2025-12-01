import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CATEGORIES } from "@/lib/constants"
import { MapPin, Search } from "lucide-react"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Muslim Atlas
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Find masjids, halal food, and Muslim-friendly businesses in your city or while you travel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg">
                <Link href="/browse">
                  <MapPin className="mr-2" size={20} />
                  Find places near me
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/browse">
                  <Search className="mr-2" size={20} />
                  Browse by city
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Shortcuts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What are you looking for?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <Link key={category.value} href={`/browse?category=${category.slug}`}>
                <Card hoverable className="p-6 h-full">
                  <Badge variant="category" className="mb-3">
                    {category.label}
                  </Badge>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* For Businesses CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Own a masjid, halal spot, or Muslim business?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Get a clean, shareable page where Muslims can find you.
          </p>
          <Button size="lg" variant="secondary">
            <Link href="/add-listing">
              List your business for free
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
