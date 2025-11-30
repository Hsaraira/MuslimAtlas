const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Checking database...\n');
  
  const cityCount = await prisma.city.count();
  const listingCount = await prisma.listing.count();
  
  console.log(`Cities: ${cityCount}`);
  console.log(`Listings: ${listingCount}`);
  
  if (cityCount > 0) {
    const cities = await prisma.city.findMany({ take: 5 });
    console.log('\nSample cities:');
    cities.forEach(c => console.log(`  - ${c.name} (${c.slug})`));
  }
  
  if (listingCount > 0) {
    const listings = await prisma.listing.findMany({ take: 5 });
    console.log('\nSample listings:');
    listings.forEach(l => console.log(`  - ${l.name} (${l.category})`));
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
