import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔍 Checking Muslim Atlas database...\n')

  try {
    const cityCount = await prisma.city.count()
    const listingCount = await prisma.listing.count()
    const userCount = await prisma.user.count()
    const tagCount = await prisma.tag.count()

    console.log('📊 Database Stats:')
    console.log(`   Cities: ${cityCount}`)
    console.log(`   Listings: ${listingCount}`)
    console.log(`   Users: ${userCount}`)
    console.log(`   Tags: ${tagCount}\n`)

    if (cityCount > 0) {
      const cities = await prisma.city.findMany({ take: 5 })
      console.log('🏙️  Sample Cities:')
      cities.forEach(c => console.log(`   - ${c.name}, ${c.country} (${c.slug})`))
      console.log()
    } else {
      console.log('⚠️  No cities found in database\n')
    }

    if (listingCount > 0) {
      const listings = await prisma.listing.findMany({ take: 5, where: { status: 'APPROVED' } })
      console.log('📍 Sample Listings:')
      listings.forEach(l => console.log(`   - ${l.name} [${l.category}]`))
      console.log()
    } else {
      console.log('⚠️  No listings found in database\n')
    }

    console.log('✅ Database check complete!')
  } catch (error) {
    console.error('❌ Database error:', error)
  }
}

main()
  .finally(() => prisma.$disconnect())
