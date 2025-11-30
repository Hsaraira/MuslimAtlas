// Re-export Prisma enums
export {
  ListingCategory,
  OwnershipType,
  OwnershipVerification,
  HalalStatus,
  ListingStatus,
  UserRole
} from "@prisma/client"

// Frontend-specific types
export interface CategoryInfo {
  value: ListingCategory
  label: string
  slug: string
  description: string
}

import { ListingCategory } from "@prisma/client"
