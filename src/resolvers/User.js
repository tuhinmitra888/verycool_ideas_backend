function ideas(parent, args, context) {
  return context.prisma.user.findUnique({ where: { id: parent.id } }).ideas()
}

module.exports = {
  ideas,
}
