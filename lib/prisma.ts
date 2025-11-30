import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

// Prisma Client singleton for Next.js
// Prevents multiple instances in development due to hot reloading
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
