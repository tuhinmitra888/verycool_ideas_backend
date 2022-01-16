const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
