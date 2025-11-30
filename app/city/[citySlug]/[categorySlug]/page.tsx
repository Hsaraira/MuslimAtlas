import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getCategoryBySlug, getCategoryByValue, CATEGORIES } from "@/lib/constants"
import { MapPin, Plus, ChevronRight } from "lucide-react"
import { ListingStatus } from "@prisma/client"

interface CityCategoryPageProps {
  params: Promise<{
    citySlug: string
    categorySlug: string
  }>
}

export default async function CityCategoryPage({ params }: CityCategoryPageProps) {
  const { citySlug, categorySlug } = await params

  // Map category slug to enum value
  const categoryInfo = getCategoryBySlug(categorySlug)
  if (!categoryInfo) {
    notFound()
  }

  // Fetch city and filtered listings
  const city = await prisma.city.findUnique({
    where: { slug: citySlug },
    include: {
      listings: {
        where: {
          status: ListingStatus.APPROVED,
          category: categoryInfo.value,
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

  // Get all categories with counts for sidebar
  const categoryCounts = await prisma.listing.groupBy({
    by: ['category'],
    where: {
      cityId: city.id,
      status: ListingStatus.APPROVED,
    },
    _count: true,
  })

  const categoriesWithCounts = CATEGORIES.map((cat) => ({
    ...cat,
    count: categoryCounts.find((c) => c.category === cat.value)?._count || 0,
  }))

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-stone-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <Link href="/" className="hover:text-green-700">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href={`/city/${citySlug}`} className="hover:text-green-700">
              {city.name}
            </Link>
            <ChevronRight size={14} />
            <span className="text-stone-900 font-medium">{categoryInfo.label}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              {categoryInfo.label} in {city.name}
            </h1>
            <p className="text-lg md:text-xl text-stone-600 mb-6">
              {categoryInfo.description} in {city.name}, {city.region || city.country}.
            </p>
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <MapPin size={16} />
              <span>
                {city.listings.length} {city.listings.length === 1 ? 'place' : 'places'} found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content with sidebar */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-stone-200 p-6 sticky top-4">
                <h2 className="font-semibold text-stone-900 mb-4">Categories</h2>
                <nav className="space-y-2">
                  {categoriesWithCounts.map((cat) => (
                    <Link
                      key={cat.value}
                      href={`/city/${citySlug}/${cat.slug}`}
                      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                        cat.value === categoryInfo.value
                          ? 'bg-green-50 text-green-700 font-medium'
                          : cat.count > 0
                          ? 'text-stone-700 hover:bg-stone-50'
                          : 'text-stone-400 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{cat.label}</span>
                        <span className="text-xs">{cat.count}</span>
                      </div>
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-stone-200">
                  <Link
                    href={`/city/${citySlug}`}
                    className="text-sm text-green-700 hover:text-green-800 font-medium"
                  >
                    ê All categories
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main content - Listings */}
            <div className="lg:col-span-3">
              {city.listings.length === 0 ? (
                <div className="bg-white rounded-lg border border-stone-200 p-12 text-center">
                  <p className="text-lg text-stone-600 mb-4">
                    No {categoryInfo.label.toLowerCase()} listings yet in {city.name}.
                  </p>
                  <p className="text-sm text-stone-500 mb-6">
                    Be the first to add one!
                  </p>
                  <Button asChild>
                    <Link href="/add-listing">
                      <Plus className="mr-2" size={16} />
                      Add a listing
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {city.listings.map((listing) => {
                    const catInfo = getCategoryByValue(listing.category)
                    return (
                      <Link key={listing.id} href={`/listing/${listing.slug}`}>
                        <Card hoverable className="p-6 h-full flex flex-col">
                          <div className="flex items-start justify-between mb-3">
                            <Badge variant="category" className="text-xs">
                              {catInfo?.label || listing.category}
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

                          <p className="text-sm text-stone-600 mb-3 line-clamp-3 flex-grow">
                            {listing.description}
                          </p>

                          <div className="space-y-2">
                            {listing.addressLine1 && (
                              <div className="flex items-start text-xs text-stone-500">
                                <MapPin size={12} className="mr-1 mt-0.5 flex-shrink-0" />
                                <span className="line-clamp-1">
                                  {listing.addressLine1}
                                  {listing.addressLine2 && `, ${listing.addressLine2}`}
                                </span>
                              </div>
                            )}

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
                                {listing.tags.length > 3 && (
                                  <span className="text-xs px-2 py-1 text-stone-500">
                                    +{listing.tags.length - 3} more
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Suggest a place CTA */}
      <section className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-3">
            Know a {categoryInfo.label.toLowerCase()} spot we're missing in {city.name}?
          </h2>
          <p className="text-stone-600 mb-6">
            Help the community by suggesting a place to add.
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
