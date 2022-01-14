function ideas(parent, args, context) {
  return context.prisma.idea.findMany()
}

module.exports = {
  ideas,
}
