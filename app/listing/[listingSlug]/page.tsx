import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TagChip } from "@/components/ui/tag-chip"
import { MapPin, Phone, Mail, Globe, Share2, Flag } from "lucide-react"
import Link from "next/link"

// Dummy data for now
const DUMMY_LISTING = {
  name: "Dar Al-Hijrah Islamic Center",
  slug: "dar-al-hijrah-mosque",
  category: "Masjids & Prayer Spaces",
  description: "A welcoming Islamic center serving the Northern Virginia community since 1983. We offer daily prayers, Jumu'ah services, Islamic education programs for all ages, and community events. Our facility includes separate prayer spaces for men and women, wudu facilities, a library, and classrooms.",

  // Location
  addressLine1: "3159 Row Street",
  addressLine2: "",
  cityName: "Falls Church",
  stateRegion: "Virginia",
  country: "USA",
  latitude: 38.8462,
  longitude: -77.1628,

  // Contact
  phone: "+1 (703) 536-1030",
  email: "info@daralhijrah.org",
  websiteUrl: "https://daralhijrah.org",
  whatsappNumber: null,

  // Ownership & Halal
  ownershipType: "MUSLIM_OWNED",
  ownershipVerification: "COMMUNITY_VERIFIED",
  halalStatus: "NOT_APPLICABLE",
  muslimFocus: true,
  halalCertified: false,

  // Tags
  tags: ["jumuah-available", "womens-space", "parking-available", "youth-programs", "quran-classes"],

  // Meta
  createdAt: "2024-01-15",
  viewCount: 1245
}

export default function ListingDetailPage({ params }: { params: { listingSlug: string } }) {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
                {DUMMY_LISTING.name}
              </h1>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="category">
                  {DUMMY_LISTING.category}
                </Badge>

                {DUMMY_LISTING.ownershipVerification === "COMMUNITY_VERIFIED" && (
                  <Badge
                    variant="verified"
                    withTooltip
                    tooltipText="This business has been verified by the Muslim Atlas community as Muslim-owned. We focus on honest labels about ownership and do not make theological judgments."
                  >
                    Muslim-owned (verified)
                  </Badge>
                )}

                {DUMMY_LISTING.ownershipVerification === "SELF_DECLARED" && (
                  <Badge
                    variant="muslim-owned"
                    withTooltip
                    tooltipText="This business has identified itself as Muslim-owned. Muslim Atlas does not judge anyone's faith; we focus on honest labels about ownership."
                  >
                    Muslim-owned (self-declared)
                  </Badge>
                )}

                {DUMMY_LISTING.halalCertified && (
                  <Badge
                    variant="halal-certified"
                    withTooltip
                    tooltipText="This business has halal certification. Please verify directly if you have strict requirements."
                  >
                    Halal Certified
                  </Badge>
                )}

                {DUMMY_LISTING.muslimFocus && DUMMY_LISTING.ownershipType !== "MUSLIM_OWNED" && (
                  <Badge
                    variant="muslim-friendly"
                    withTooltip
                    tooltipText="This business is designed for or primarily serves Muslims, though it may not be Muslim-owned."
                  >
                    Muslim-friendly
                  </Badge>
                )}
              </div>

              {/* Location */}
              <div className="flex items-center text-stone-600">
                <MapPin size={18} className="mr-2" />
                <span>
                  {DUMMY_LISTING.addressLine1}, {DUMMY_LISTING.cityName}, {DUMMY_LISTING.stateRegion}, {DUMMY_LISTING.country}
                </span>
              </div>
            </div>

            {/* Share Button */}
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Flag size={16} className="mr-2" />
                Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-stone-900 mb-4">
                  About
                </h2>
                <p className="text-stone-700 leading-relaxed whitespace-pre-line">
                  {DUMMY_LISTING.description}
                </p>

                {/* Tags */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-stone-700 mb-3">
                    Features
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {DUMMY_LISTING.tags.map((tag) => (
                      <TagChip key={tag} label={tag.replace(/-/g, " ")} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-stone-900 mb-4">
                  Location
                </h2>
                <div className="bg-stone-100 rounded-lg h-64 flex items-center justify-center text-stone-500">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-2 text-stone-400" />
                    <p>Map integration coming soon</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-stone-700">
                    {DUMMY_LISTING.addressLine1}
                    {DUMMY_LISTING.addressLine2 && <><br />{DUMMY_LISTING.addressLine2}</>}
                    <br />
                    {DUMMY_LISTING.cityName}, {DUMMY_LISTING.stateRegion} {DUMMY_LISTING.country}
                  </p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Open in Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {DUMMY_LISTING.websiteUrl && (
                    <a
                      href={DUMMY_LISTING.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-700 hover:text-green-800 transition-colors"
                    >
                      <Globe size={18} className="mr-3" />
                      <span className="text-sm">Visit Website</span>
                    </a>
                  )}

                  {DUMMY_LISTING.phone && (
                    <a
                      href={`tel:${DUMMY_LISTING.phone}`}
                      className="flex items-center text-green-700 hover:text-green-800 transition-colors"
                    >
                      <Phone size={18} className="mr-3" />
                      <span className="text-sm">{DUMMY_LISTING.phone}</span>
                    </a>
                  )}

                  {DUMMY_LISTING.email && (
                    <a
                      href={`mailto:${DUMMY_LISTING.email}`}
                      className="flex items-center text-green-700 hover:text-green-800 transition-colors"
                    >
                      <Mail size={18} className="mr-3" />
                      <span className="text-sm">{DUMMY_LISTING.email}</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Share Card */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-4">
                  Share this listing
                </h2>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Share2 size={16} className="mr-2" />
                    Share on WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Share2 size={16} className="mr-2" />
                    Copy Link
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="bg-stone-50">
              <CardContent className="p-6">
                <p className="text-xs text-stone-600 leading-relaxed">
                  Information is provided by the business and the community. Muslim Atlas does not independently guarantee halal status or make theological judgments about ownership. Please verify directly if you have specific requirements.
                </p>
                <Link href="/halal-policy" className="text-xs text-green-700 hover:text-green-800 mt-2 inline-block">
                  Read our policy →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
