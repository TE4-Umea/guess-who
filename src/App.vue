<template>
    <div class="grid">
        <div v-for="(character, index) in characters" :key="index" v-on:click="character.isHidden = !character.isHidden">
            <div v-if="!character.isHidden">
                <p>{{ character.name }}</p>
                <p>{{ character.text }}</p>
            </div>
        </div>
    </div>
    <input>
</template>

<script>
import { getCharactersFromDatabase } from "./data.js"

export default {
    async data() {
        const characters = await getCharactersFromDatabase();
        characters.forEach(character => {
            character.isHidden = false
            character.text = character.name.substring(0, 2)
        })

        // await fetch(`http://jupiter.umea-ntig.se:3008/api/dish/`, {
        //     method: 'GET',
        //     headers: {
        //         authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdW5kbWFya2hqYWxtYXJAZ21haWwuY29tIiwiaWF0IjoxNzAyNDU1MTAzfQ.O9LhDq-P1jFVwDlToU8p_VUrRjsqQ60R1bybCa0B9yI',
        //     },
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result)
        //         characters = result
        //     }).catch(err => {
        //         console.log(err)
        //     });

        return {
            characters
            // characters: [
            //     { name: "Leo", text: "Le", isHidden: false },
            //     { name: "Loke", text: "Lo", isHidden: false },
            //     { name: "Hjalmar", text: "Hj", isHidden: false },
            //     { name: "Alexander", text: "Al", isHidden: false },
            // ]
        };
    },
};
</script>

<style>
.grid {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
}

.grid div {
    border: 4px solid red;
    text-align: center;
}
</style>