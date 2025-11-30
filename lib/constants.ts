import { ListingCategory, type CategoryInfo } from "./types"

export const CATEGORIES: CategoryInfo[] = [
  {
    value: ListingCategory.MASJID,
    label: "Masjids & Prayer Spaces",
    slug: "masjids-prayer-spaces",
    description: "Find local masjids, prayer rooms, and Islamic centers for salah and community gatherings"
  },
  {
    value: ListingCategory.HALAL_FOOD,
    label: "Halal Food",
    slug: "halal-food",
    description: "Discover halal restaurants, cafés, groceries, and food businesses"
  },
  {
    value: ListingCategory.BUSINESS,
    label: "Muslim Businesses & Services",
    slug: "muslim-businesses",
    description: "Support Muslim-owned businesses and find Muslim-friendly professional services"
  },
  {
    value: ListingCategory.EDUCATION_PROGRAM,
    label: "Education & Programs",
    slug: "education-programs",
    description: "Explore Islamic schools, weekend programs, Quran classes, and youth activities"
  },
  {
    value: ListingCategory.ONLINE_ONLY,
    label: "Online Only",
    slug: "online-services",
    description: "Access online Islamic courses, e-commerce, and virtual services"
  }
]

export const CATEGORY_TAGS: Record<ListingCategory, string[]> = {
  [ListingCategory.MASJID]: [
    "jumuah-available",
    "womens-space",
    "parking-available",
    "wheelchair-accessible",
    "wudu-facilities",
    "quran-classes",
    "youth-programs"
  ],
  [ListingCategory.HALAL_FOOD]: [
    "fully-halal",
    "no-alcohol",
    "late-night",
    "delivery-available",
    "dine-in",
    "takeout",
    "catering"
  ],
  [ListingCategory.BUSINESS]: [
    "health-therapy",
    "legal-finance",
    "real-estate",
    "education",
    "tech-services",
    "event-planning",
    "consulting"
  ],
  [ListingCategory.EDUCATION_PROGRAM]: [
    "weekend-school",
    "hifdh",
    "youth-programs",
    "arabic-classes",
    "islamic-studies",
    "summer-camp"
  ],
  [ListingCategory.ONLINE_ONLY]: [
    "quran-classes",
    "islamic-courses",
    "ecommerce",
    "consulting",
    "coaching",
    "software-tools"
  ]
}

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return CATEGORIES.find(cat => cat.slug === slug)
}

export function getCategoryByValue(value: ListingCategory): CategoryInfo | undefined {
  return CATEGORIES.find(cat => cat.value === value)
}
