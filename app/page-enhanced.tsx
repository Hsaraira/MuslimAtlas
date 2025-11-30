import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CATEGORIES } from "@/lib/constants"
import { MapPin, Search, TrendingUp, Clock, Users, Sparkles } from "lucide-react"

export default function HomePage() {
  // Category emojis mapping
  const categoryEmojis = ["🕌", "🍖", "💼", "📚", "🌐"]

  return (
    <div>
      {/* Enhanced Hero Section with Psychology */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-20 md:py-28 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.4\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Users size={16} className="text-green-100" />
              <span className="text-sm font-medium text-white">
                Join 50,000+ Muslims finding halal businesses
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Halal Food & Masjids
              <br />
              <span className="text-green-100">Wherever You Are</span>
            </h1>

            <p className="text-xl md:text-2xl text-green-50 mb-10 leading-relaxed">
              The trusted directory for Muslims to discover verified halal restaurants,
              prayer spaces, and Muslim-owned businesses in their city.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                variant="secondary"
                className="group shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/browse">
                  <MapPin className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Find Halal Near Me
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-lg"
                asChild
              >
                <Link href="/browse">
                  <Search className="mr-2" size={20} />
                  Explore by City
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-green-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                <span>12 new listings today</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={14} />
                <span>Community-verified halal status</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={14} />
                <span>Growing daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Added - FOMO Section */}
      <section className="py-12 bg-gradient-to-b from-green-50 to-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="text-green-700" size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-stone-900">
                  Recently Added
                </h2>
                <p className="text-sm text-stone-600">
                  Don't miss new listings in your area
                </p>
              </div>
            </div>
            <Link
              href="/browse"
              className="text-green-700 hover:text-green-800 font-medium text-sm flex items-center gap-1 group"
            >
              View all
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Halal Guys DC", type: "Halal Food", city: "Washington DC", badge: "NEW", time: "2 hours ago" },
              { name: "Masjid Al-Islam", type: "Masjid", city: "Silver Spring", badge: "NEW", time: "5 hours ago" },
              { name: "Zabiha Market", type: "Halal Grocery", city: "Falls Church", badge: "NEW", time: "1 day ago" }
            ].map((item, i) => (
              <Link key={i} href="/browse">
                <Card
                  hoverable
                  className="p-4 group border-green-100 hover:border-green-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="muslim-owned" className="text-xs animate-pulse">
                      {item.badge}
                    </Badge>
                    <span className="text-xs text-stone-500">{item.time}</span>
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-1 group-hover:text-green-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-stone-600 mb-1">{item.type}</p>
                  <div className="flex items-center text-xs text-stone-500">
                    <MapPin size={12} className="mr-1" />
                    {item.city}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Shortcuts with Icons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
              What are you looking for?
            </h2>
            <p className="text-lg text-stone-600">
              Browse by category to find exactly what you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category, index) => (
              <Link key={category.value} href={`/browse?category=${category.slug}`}>
                <Card
                  hoverable
                  className="p-6 h-full group hover:border-green-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <Badge
                        variant="category"
                        className="text-sm group-hover:scale-105 transition-transform"
                      >
                        {category.label}
                      </Badge>
                      <div className="text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        {categoryEmojis[index]}
                      </div>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed group-hover:text-stone-700">
                      {category.description}
                    </p>
                    <div className="mt-4 text-green-700 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Explore now
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities with Stats */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
              Popular Cities
            </h2>
            <p className="text-lg text-stone-600">
              Thousands of Muslims are discovering halal options in these cities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Washington DC", count: 245, trending: true },
              { name: "New York", count: 382, trending: true },
              { name: "London", count: 198, trending: false },
              { name: "Dubai", count: 156, trending: false },
              { name: "Toronto", count: 167, trending: true },
              { name: "Chicago", count: 143, trending: false },
              { name: "Los Angeles", count: 234, trending: false },
              { name: "Houston", count: 128, trending: false }
            ].map((city) => {
              const citySlug = city.name.toLowerCase().replace(/\s+/g, "-")
              return (
                <Link key={city.name} href={`/city/${citySlug}`}>
                  <Card
                    hoverable
                    className="p-6 text-center group hover:border-green-300 hover:shadow-md transition-all"
                  >
                    {city.trending && (
                      <div className="flex justify-center mb-2">
                        <Badge variant="default" className="text-xs bg-orange-100 text-orange-700 border-orange-200">
                          🔥 Trending
                        </Badge>
                      </div>
                    )}
                    <h3 className="font-semibold text-stone-900 group-hover:text-green-700 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-stone-600 mt-1">
                      <span className="font-medium text-green-700">{city.count}+</span> listings
                    </p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced For Businesses CTA */}
      <section className="relative py-20 bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <Sparkles size={16} className="text-yellow-300" />
            <span className="text-sm font-medium">Free forever • No credit card required</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Own a masjid, halal spot, or Muslim business?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-green-50 leading-relaxed max-w-2xl mx-auto">
            Get discovered by thousands of Muslims searching for halal options.
            Join our growing community today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-lg hover:shadow-xl transition-all group"
              asChild
            >
              <Link href="/add-listing">
                <Sparkles className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                List Your Business Free
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/for-businesses">
                Learn More
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-green-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span>Free listing forever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span>Reach 50K+ Muslims</span>
              </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                ✓
              </div>
              <span>Get verified badge</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
