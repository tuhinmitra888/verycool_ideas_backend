function postedBy(parent, args, context) {
  return context.prisma.idea.findUnique({ where: { id: parent.id } }).postedBy()
}

module.exports = {
  postedBy,
}
