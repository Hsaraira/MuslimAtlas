// Category types
export enum ListingCategory {
  MASJID = "MASJID",
  HALAL_FOOD = "HALAL_FOOD",
  BUSINESS = "BUSINESS",
  EDUCATION_PROGRAM = "EDUCATION_PROGRAM",
  ONLINE_ONLY = "ONLINE_ONLY"
}

// Ownership types
export enum OwnershipType {
  MUSLIM_OWNED = "MUSLIM_OWNED",
  NON_MUSLIM_OWNED = "NON_MUSLIM_OWNED",
  UNKNOWN = "UNKNOWN"
}

export enum OwnershipVerification {
  SELF_DECLARED = "SELF_DECLARED",
  COMMUNITY_VERIFIED = "COMMUNITY_VERIFIED",
  NONE = "NONE"
}

// Halal status
export enum HalalStatus {
  FULLY_HALAL = "FULLY_HALAL",
  PARTIALLY_HALAL = "PARTIALLY_HALAL",
  NOT_HALAL = "NOT_HALAL",
  UNKNOWN = "UNKNOWN"
}

// Listing status
export enum ListingStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED"
}

// User roles
export enum UserRole {
  USER = "USER",
  OWNER = "OWNER",
  ADMIN = "ADMIN"
}

// Types for frontend
export interface Listing {
  id: string
  slug: string
  name: string
  category: ListingCategory
  description: string
  isOnline: boolean

  websiteUrl?: string
  phone?: string
  email?: string
  whatsappNumber?: string

  addressLine1?: string
  addressLine2?: string
  cityName?: string
  stateRegion?: string
  country?: string
  latitude?: number
  longitude?: number

  ownershipType: OwnershipType
  ownershipVerification: OwnershipVerification
  halalStatus: HalalStatus
  muslimFocus: boolean
  halalCertified: boolean

  tags: string[]
  status: ListingStatus

  createdAt: Date
  updatedAt: Date
}

export interface City {
  id: string
  slug: string
  name: string
  country: string
  region?: string
}

export interface CategoryInfo {
  value: ListingCategory
  label: string
  slug: string
  description: string
}
