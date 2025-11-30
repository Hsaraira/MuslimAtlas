import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Card } from "@/components/ui/card"
import { MapPin, ChevronRight } from "lucide-react"
import { CATEGORIES } from "@/lib/constants"
import { ListingStatus } from "@prisma/client"

export default async function BrowsePage() {
  // Fetch all cities with listing counts
  const cities = await prisma.city.findMany({
    include: {
      listings: {
        where: {
          status: ListingStatus.APPROVED,
        },
        select: {
          id: true,
          category: true,
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  })

  // Enrich cities with counts
  const citiesWithCounts = cities.map((city) => ({
    ...city,
    totalListings: city.listings.length,
    categoryCounts: CATEGORIES.map((cat) => ({
      category: cat,
      count: city.listings.filter((l) => l.category === cat.value).length,
    })),
  }))

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              Browse by City
            </h1>
            <p className="text-lg md:text-xl text-stone-600">
              Explore masjids, halal food, and Muslim businesses in cities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {citiesWithCounts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-stone-600 mb-4">
                No cities added yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {citiesWithCounts.map((city) => (
                <Link key={city.id} href={`/city/${city.slug}`}>
                  <Card hoverable className="p-6 h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h2 className="text-xl font-bold text-stone-900 mb-1">
                          {city.name}
                        </h2>
                        <div className="flex items-center text-sm text-stone-500">
                          <MapPin size={14} className="mr-1" />
                          <span>
                            {city.region && `${city.region}, `}
                            {city.country}
                          </span>
                        </div>
                      </div>
                      <ChevronRight size={20} className="text-stone-400" />
                    </div>

                    <div className="mt-4 pt-4 border-t border-stone-200">
                      <div className="text-sm font-medium text-stone-900 mb-2">
                        {city.totalListings} {city.totalListings === 1 ? 'place' : 'places'}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-stone-600">
                        {city.categoryCounts
                          .filter((cc) => cc.count > 0)
                          .slice(0, 4)
                          .map((cc) => (
                            <div key={cc.category.value} className="flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-600 mr-1.5"></span>
                              <span>
                                {cc.count} {cc.category.label}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">
            What are you looking for?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <div key={category.value} className="p-6 rounded-lg border border-stone-200 bg-stone-50">
                <h3 className="font-semibold text-stone-900 mb-2">
                  {category.label}
                </h3>
                <p className="text-sm text-stone-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
