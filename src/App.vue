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

// just nu kan vi inte använda oss av async/await, vilket vi behöver för att hämta data från databasen(api?). 
export default {
    data() {
        let chars = []
        getCharactersFromDatabase().then(data => {
            chars = data
            console.log(chars)
        })
        chars.forEach(character => {
            character.isHidden = false
            // character.text = character.name.substring(0, 2)
        })

        return {
            characters: chars
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