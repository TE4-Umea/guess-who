import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getCharactersFromDatabase() {
    const characters = await prisma.character.findMany({})
    console.log(characters)
    return characters
}

getCharactersFromDatabase()