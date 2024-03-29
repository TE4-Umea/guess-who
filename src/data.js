import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getCharactersFromDatabase() {
    // const characters = await prisma.character.findMany({})
    const charactersTemp = [
        {
            id: 1,
            name: 'Gandalf the gray',
            image: 'gandalf.png',
            gender: 'M',
            skinColor: 'white',
            hair: 'long',
            hairColor: 'gray',
            eyes: 'blue',
            facialHair: true,
            mustache: true,
            beard: true,
            hat: true,
            glasses: false
        },
        {
            id: 2,
            name: 'Frodo',
            image: 'frodo.png',
            gender: 'M',
            skinColor: 'white',
            hair: 'short',
            hairColor: 'brown',
            eyes: 'blue',
            facialHair: false,
            mustache: false,
            beard: false,
            hat: false,
            glasses: false
        },
        {
            id: 3,
            name: 'Sam',
            image: 'sam.png',
            gender: 'M',
            skinColor: 'white',
            hair: 'short',
            hairColor: 'brown',
            eyes: 'brown',
            facialHair: false,
            mustache: false,
            beard: false,
            hat: false,
            glasses: false
        },
        {
            id: 4,
            name: 'Aragorn',
            image: 'aragorn.png',
            gender: 'M',
            skinColor: 'white',
            hair: 'long',
            hairColor: 'brown',
            eyes: 'brown',
            facialHair: true,
            mustache: true,
            beard: true,
            hat: false,
            glasses: false
        },
        {
            id: 5,
            name: 'Galadriel',
            image: 'galadriel.png',
            gender: 'F',
            skinColor: 'white',
            hair: 'long',
            hairColor: 'blonde',
            eyes: 'blue',
            facialHair: false,
            mustache: false,
            beard: false,
            hat: false,
            glasses: false
        },
        {
            id: 6,
            name: 'Arwen',
            image: 'arwen.png',
            gender: 'F',
            skinColor: 'white',
            hair: 'long',
            hairColor: 'brown',
            eyes: 'blue',
            facialHair: false,
            mustache: false,
            beard: false,
            hat: false,
            glasses: false
        },
        {
            id: 7,
            name: 'Legolas',
            image: 'legolas.png',
            gender: 'M',
            skinColor: 'white',
            hair: 'long',
            hairColor: 'blonde',
            eyes: 'blue',
            facialHair: false,
            mustache: false,
            beard: false,
            hat: false,
            glasses: false
        },
        {
            id: 8,
            name: 'Gimli',
            image: 'gimli.png',
            gender: 'M',
            skinColor: 'white',
            hair: 'long',
            hairColor: 'brown',
            eyes: 'brown',
            facialHair: true,
            mustache: true,
            beard: true,
            hat: true,
            glasses: false
        },
        {
            id: 9,
            name: 'Gollum',
            image: 'gollum.png',
            gender: 'M',
            skinColor: 'white',
            hair: 'bald',
            hairColor: 'none',
            eyes: 'blue',
            facialHair: false,
            mustache: false,
            beard: false,
            hat: false,
            glasses: false
        },
        {
            id: 10,
            name: 'Boromir',
            image: 'boromir.png',
            gender: 'M',
            skinColor: 'white',
            hair: 'short',
            hairColor: 'brown',
            eyes: 'brown',
            facialHair: true,
            mustache: true,
            beard: true,
            hat: false,
            glasses: false
        },
        {
            id: 11,
            name: 'Elrond',
            image: 'elrond.png',
            gender: 'M',
            skinColor: 'white',
            hair: 'long',
            hairColor: 'brown',
            eyes: 'blue',
            facialHair: false,
            mustache: false,
            beard: false,
            hat: false,
            glasses: false
        },
        {
            id: 12,
            name: 'Eowyn',
            image: 'eowyn.png',
            gender: 'F',
            skinColor: 'white',
            hair: 'long',
            hairColor: 'blonde',
            eyes: 'blue',
            facialHair: false,
            mustache: false,
            beard: false,
            hat: false,
            glasses: false
        },
        {
            id: 13,
            name: 'Bilbo (old)',
            image: 'bilbo.png',
            gender: 'M',
            skinColor: 'white',
            hair: 'short',
            hairColor: 'white',
            eyes: 'blue',
            facialHair: false,
            mustache: false,
            beard: false,
            hat: false,
            glasses: false
        }
    ]

    // console.log(characters)
    return charactersTemp
}

// getCharactersFromDatabase()