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
export default {
    data() {
        return {
            characters: [
                { name: "Leo", text: "Le", isHidden: false },
                { name: "Loke", text: "Lo", isHidden: false },
                { name: "Hjalmar", text: "Hj", isHidden: false },
                { name: "Alexander", text: "Al", isHidden: false },
            ]
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