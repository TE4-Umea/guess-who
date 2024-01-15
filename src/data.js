const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports.getCharactersFromDatabase = async () => {
    const characters = await prisma.character.findMany({})
    console.log(characters)
    return characters
}