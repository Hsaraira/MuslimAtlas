import { PrismaClient, ListingCategory, OwnershipType, OwnershipVerification, HalalStatus, ListingStatus } from '@prisma/client'
import { config } from 'dotenv'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

config()

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Starting seed...')

  // Create Cities
  const washingtonDC = await prisma.city.upsert({
    where: { slug: 'washington-dc' },
    update: {},
    create: {
      slug: 'washington-dc',
      name: 'Washington DC',
      country: 'USA',
      region: 'District of Columbia',
    },
  })

  const fallsChurch = await prisma.city.upsert({
    where: { slug: 'falls-church' },
    update: {},
    create: {
      slug: 'falls-church',
      name: 'Falls Church',
      country: 'USA',
      region: 'Virginia',
    },
  })

  const silverSpring = await prisma.city.upsert({
    where: { slug: 'silver-spring' },
    update: {},
    create: {
      slug: 'silver-spring',
      name: 'Silver Spring',
      country: 'USA',
      region: 'Maryland',
    },
  })

  console.log('Cities created')

  // Create Tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: 'jumuah-available' },
      update: {},
      create: { name: 'Jumuah Available', slug: 'jumuah-available' },
    }),
    prisma.tag.upsert({
      where: { slug: 'womens-space' },
      update: {},
      create: { name: "Women's Space", slug: 'womens-space' },
    }),
    prisma.tag.upsert({
      where: { slug: 'parking-available' },
      update: {},
      create: { name: 'Parking Available', slug: 'parking-available' },
    }),
    prisma.tag.upsert({
      where: { slug: 'halal-certified' },
      update: {},
      create: { name: 'Halal Certified', slug: 'halal-certified' },
    }),
    prisma.tag.upsert({
      where: { slug: 'zabiha' },
      update: {},
      create: { name: 'Zabiha', slug: 'zabiha' },
    }),
    prisma.tag.upsert({
      where: { slug: 'prayer-space' },
      update: {},
      create: { name: 'Prayer Space', slug: 'prayer-space' },
    }),
    prisma.tag.upsert({
      where: { slug: 'family-friendly' },
      update: {},
      create: { name: 'Family Friendly', slug: 'family-friendly' },
    }),
  ])

  console.log('Tags created')

  // Create Listings
  const darAlHijrah = await prisma.listing.upsert({
    where: { slug: 'dar-al-hijrah-islamic-center' },
    update: {},
    create: {
      slug: 'dar-al-hijrah-islamic-center',
      name: 'Dar Al-Hijrah Islamic Center',
      category: ListingCategory.MASJID,
      description: 'One of the largest Islamic centers in the Washington DC area, offering daily prayers, educational programs, and community services.',
      cityId: fallsChurch.id,
      cityName: 'Falls Church',
      stateRegion: 'Virginia',
      country: 'USA',
      addressLine1: '3159 Row Street',
      latitude: 38.8553,
      longitude: -77.1706,
      ownershipType: OwnershipType.MUSLIM_OWNED,
      ownershipVerification: OwnershipVerification.COMMUNITY_VERIFIED,
      muslimFocus: true,
      status: ListingStatus.APPROVED,
      websiteUrl: 'https://www.daralhijrah.org',
      phone: '(703) 536-1030',
    },
  })

  await prisma.listingTag.createMany({
    data: [
      { listingId: darAlHijrah.id, tagId: tags.find(t => t.slug === 'jumuah-available').id },
      { listingId: darAlHijrah.id, tagId: tags.find(t => t.slug === 'womens-space').id },
      { listingId: darAlHijrah.id, tagId: tags.find(t => t.slug === 'parking-available').id },
      { listingId: darAlHijrah.id, tagId: tags.find(t => t.slug === 'family-friendly').id },
    ],
    skipDuplicates: true,
  })

  const adamsCenterDC = await prisma.listing.upsert({
    where: { slug: 'adams-center-dc' },
    update: {},
    create: {
      slug: 'adams-center-dc',
      name: 'ADAMS Center (All Dulles Area Muslim Society)',
      category: ListingCategory.MASJID,
      description: 'Large Islamic community center serving the DC metro area with daily prayers, Islamic school, and youth programs.',
      cityId: silverSpring.id,
      cityName: 'Silver Spring',
      stateRegion: 'Maryland',
      country: 'USA',
      addressLine1: '46903 Sugarland Road',
      latitude: 39.0156,
      longitude: -77.4653,
      ownershipType: OwnershipType.MUSLIM_OWNED,
      ownershipVerification: OwnershipVerification.COMMUNITY_VERIFIED,
      muslimFocus: true,
      status: ListingStatus.APPROVED,
      websiteUrl: 'https://www.adamscenter.org',
      phone: '(703) 433-1325',
    },
  })

  await prisma.listingTag.createMany({
    data: [
      { listingId: adamsCenterDC.id, tagId: tags.find(t => t.slug === 'jumuah-available').id },
      { listingId: adamsCenterDC.id, tagId: tags.find(t => t.slug === 'womens-space').id },
      { listingId: adamsCenterDC.id, tagId: tags.find(t => t.slug === 'parking-available').id },
      { listingId: adamsCenterDC.id, tagId: tags.find(t => t.slug === 'family-friendly').id },
    ],
    skipDuplicates: true,
  })

  const halalGuys = await prisma.listing.upsert({
    where: { slug: 'the-halal-guys-dc' },
    update: {},
    create: {
      slug: 'the-halal-guys-dc',
      name: 'The Halal Guys',
      category: ListingCategory.HALAL_FOOD,
      description: 'Famous halal food cart serving authentic Middle Eastern cuisine including chicken and gyro over rice.',
      cityId: washingtonDC.id,
      cityName: 'Washington DC',
      stateRegion: 'District of Columbia',
      country: 'USA',
      addressLine1: '1140 Connecticut Ave NW',
      latitude: 38.9046,
      longitude: -77.0411,
      ownershipType: OwnershipType.MUSLIM_OWNED,
      ownershipVerification: OwnershipVerification.SELF_DECLARED,
      halalStatus: HalalStatus.FULLY_HALAL,
      halalCertified: true,
      status: ListingStatus.APPROVED,
      websiteUrl: 'https://thehalalguys.com',
      phone: '(202) 888-9999',
    },
  })

  await prisma.listingTag.createMany({
    data: [
      { listingId: halalGuys.id, tagId: tags.find(t => t.slug === 'halal-certified').id },
      { listingId: halalGuys.id, tagId: tags.find(t => t.slug === 'zabiha').id },
      { listingId: halalGuys.id, tagId: tags.find(t => t.slug === 'family-friendly').id },
    ],
    skipDuplicates: true,
  })

  const sakina = await prisma.listing.upsert({
    where: { slug: 'sakina-halal-grill' },
    update: {},
    create: {
      slug: 'sakina-halal-grill',
      name: 'Sakina Halal Grill',
      category: ListingCategory.HALAL_FOOD,
      description: 'Fresh halal Mediterranean cuisine with a modern twist. Specializing in gyros, kabobs, and authentic Middle Eastern dishes.',
      cityId: washingtonDC.id,
      cityName: 'Washington DC',
      stateRegion: 'District of Columbia',
      country: 'USA',
      addressLine1: '1700 M Street NW',
      latitude: 38.9054,
      longitude: -77.0392,
      ownershipType: OwnershipType.MUSLIM_OWNED,
      ownershipVerification: OwnershipVerification.COMMUNITY_VERIFIED,
      halalStatus: HalalStatus.FULLY_HALAL,
      halalCertified: true,
      status: ListingStatus.APPROVED,
      websiteUrl: 'https://sakinagrill.com',
      phone: '(202) 775-0333',
    },
  })

  await prisma.listingTag.createMany({
    data: [
      { listingId: sakina.id, tagId: tags.find(t => t.slug === 'halal-certified').id },
      { listingId: sakina.id, tagId: tags.find(t => t.slug === 'zabiha').id },
      { listingId: sakina.id, tagId: tags.find(t => t.slug === 'prayer-space').id },
      { listingId: sakina.id, tagId: tags.find(t => t.slug === 'family-friendly').id },
    ],
    skipDuplicates: true,
  })

  const yusufMarket = await prisma.listing.upsert({
    where: { slug: 'yusuf-halal-market' },
    update: {},
    create: {
      slug: 'yusuf-halal-market',
      name: 'Yusuf Halal Market',
      category: ListingCategory.BUSINESS,
      description: 'Full-service halal grocery store offering fresh zabiha meat, Middle Eastern groceries, and imported products.',
      cityId: fallsChurch.id,
      cityName: 'Falls Church',
      stateRegion: 'Virginia',
      country: 'USA',
      addressLine1: '7111 Columbia Pike',
      latitude: 38.8567,
      longitude: -77.1453,
      ownershipType: OwnershipType.MUSLIM_OWNED,
      ownershipVerification: OwnershipVerification.COMMUNITY_VERIFIED,
      halalStatus: HalalStatus.FULLY_HALAL,
      halalCertified: true,
      status: ListingStatus.APPROVED,
      phone: '(703) 942-4410',
    },
  })

  await prisma.listingTag.createMany({
    data: [
      { listingId: yusufMarket.id, tagId: tags.find(t => t.slug === 'halal-certified').id },
      { listingId: yusufMarket.id, tagId: tags.find(t => t.slug === 'zabiha').id },
      { listingId: yusufMarket.id, tagId: tags.find(t => t.slug === 'parking-available').id },
    ],
    skipDuplicates: true,
  })

  console.log('Listings created')
  console.log('Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
