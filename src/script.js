const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const newIdea = await prisma.idea.create({
    data: {
      type: 'Hobbies',
      name: 'Wood pecking',
      description: 'Kill time productively',
    },
  })
  console.log(newIdea)
  const allIdeas = await prisma.idea.findMany()
  console.log(allIdeas)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
