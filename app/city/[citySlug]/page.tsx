import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CATEGORIES, getCategoryByValue } from "@/lib/constants"
import { MapPin, Plus } from "lucide-react"
import { ListingStatus } from "@prisma/client"

interface CityPageProps {
  params: Promise<{
    citySlug: string
  }>
}

export default async function CityPage({ params }: CityPageProps) {
  const { citySlug } = await params

  // Fetch city and all approved listings for this city
  const city = await prisma.city.findUnique({
    where: { slug: citySlug },
    include: {
      listings: {
        where: {
          status: ListingStatus.APPROVED,
        },
        include: {
          tags: {
            include: {
              tag: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  })

  if (!city) {
    notFound()
  }

  // Group listings by category for quick links
  const listingsByCategory = CATEGORIES.map((category) => ({
    ...category,
    count: city.listings.filter((l) => l.category === category.value).length,
  }))

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              Muslim places in {city.name}
            </h1>
            <p className="text-lg md:text-xl text-stone-600 mb-6">
              Find masjids, halal food, and Muslim businesses in {city.name}, {city.region || city.country}.
            </p>
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <MapPin size={16} />
              <span>{city.listings.length} {city.listings.length === 1 ? 'place' : 'places'} listed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-stone-700 uppercase tracking-wide mb-4">
            Browse by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {listingsByCategory.map((category) => (
              <Link
                key={category.value}
                href={`/city/${citySlug}/${category.slug}`}
                className={`block p-4 rounded-lg border transition-all ${
                  category.count > 0
                    ? 'border-stone-200 hover:border-green-300 hover:bg-green-50'
                    : 'border-stone-100 bg-stone-50 opacity-60 cursor-not-allowed'
                }`}
              >
                <div className="font-medium text-stone-900 text-sm mb-1">
                  {category.label}
                </div>
                <div className="text-xs text-stone-500">
                  {category.count} {category.count === 1 ? 'place' : 'places'}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {city.listings.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-stone-600 mb-4">
                No listings yet in {city.name}.
              </p>
              <Button asChild>
                <Link href="/add-listing">
                  <Plus className="mr-2" size={16} />
                  Add the first listing
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.listings.map((listing) => {
                const categoryInfo = getCategoryByValue(listing.category)
                return (
                  <Link key={listing.id} href={`/listing/${listing.slug}`}>
                    <Card hoverable className="p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="category" className="text-xs">
                          {categoryInfo?.label || listing.category}
                        </Badge>
                        {listing.ownershipVerification === 'COMMUNITY_VERIFIED' && (
                          <Badge variant="verified" className="text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>

                      <h3 className="font-semibold text-lg text-stone-900 mb-2 line-clamp-2">
                        {listing.name}
                      </h3>

                      <p className="text-sm text-stone-600 mb-3 line-clamp-2 flex-grow">
                        {listing.description}
                      </p>

                      <div className="flex items-center text-xs text-stone-500 mb-3">
                        <MapPin size={12} className="mr-1" />
                        <span>
                          {listing.cityName}, {listing.country}
                        </span>
                      </div>

                      {listing.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {listing.tags.slice(0, 3).map((lt) => (
                            <span
                              key={lt.id}
                              className="text-xs px-2 py-1 bg-stone-100 text-stone-600 rounded"
                            >
                              {lt.tag.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </Card>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Suggest a place CTA */}
      <section className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-3">
            Missing a masjid or halal spot in {city.name}?
          </h2>
          <p className="text-stone-600 mb-6">
            Help the community by suggesting a place we should add.
          </p>
          <Button size="lg" asChild>
            <Link href="/add-listing">
              <Plus className="mr-2" size={20} />
              Suggest a place
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
