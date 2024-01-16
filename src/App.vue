<template>
    <div class="grid">
        <article v-for="(character, index) in characters">
            <div v-on:click="character.isHidden = !character.isHidden" v-if="!character.isHidden">
                <img :src="character.imgSrc">
                <p>{{ character.name }}</p>
                <p>{{ character.text }}</p>
            </div>
            <div v-else class="hiddenCard">
            </div>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            characters: [
                { name: "Leo", text: "Le", imgSrc: "../src/assets/leooberg.png", isHidden: false },
                { name: "Loke", text: "BOOY GOT THAT VIRUS", imgSrc: "../src/assets/lokeoberg.png", isHidden: false },
                { name: "Hjalmar", text: "Hj", imgSrc: "../src/assets/vue.svg", isHidden: false },
                { name: "Alexander", text: "Al", imgSrc: "../src/assets/alex.jpg", isHidden: false },
                { name: "Leo", text: "Le", imgSrc: "../src/assets/leooberg.png", isHidden: false },
                { name: "Loke", text: "BOOY GOT THAT VIRUS", imgSrc: "../src/assets/lokeoberg.png", isHidden: false },
                { name: "Hjalmar", text: "Hj", imgSrc: "../src/assets/vue.svg", isHidden: false },
                { name: "Alexander", text: "Al", imgSrc: "../src/assets/alex.jpg", isHidden: false },
            ]
        };
    },
};
</script>

<style>
.grid {
    width: 92vw;
    margin-left: auto;
    margin-right: auto;

    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-auto-rows: 1fr;
    gap: 2%;
}

.grid div {
    min-width: 20vw;
    height: 100%;

    border: 4px solid red;

    text-align: center;
}

.grid img {
    width: 80%;
    height: auto;
}

.hiddenCard {
    height: 100vw;
}
</style>