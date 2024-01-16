<template>
    <div class="grid">
        <article v-for="(character, index) in characters">
            <div v-on:click="character.isHidden = !character.isHidden" v-if="!character.isHidden">
                <img :src="character.image">
                <p>{{ character.name }}</p>
                <p>{{ character.text }}</p>
            </div>
            <div v-else class="hiddenCard">
            </div>
        </article>
    </div>

    <div id="searchField">
        <input type="text" id="myInput" onkeyup="search()" placeholder="Search for questions.." />
        <ul id="myUL">
            <li v-for="(question, index) in  questions " :key="index" v-on:click="">
                <a v-on:click="() => { runScript(question.command) }">
                    <p>{{ question.text }}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { getCharactersFromDatabase } from "./data.js";

export default {
    data() {
        return {
            characters: [
                // remove contents later
                { name: "Leo", text: "Le", image: "leooberg.png", swag: false, isHidden: false },
                { name: "Loke", text: "BOOY GOT THAT VIRUS", image: "lokeoberg.png", swag: false, isHidden: false },
                { name: "Hjalmar", text: "Hj", image: "vue.svg", swag: false, isHidden: false },
                { name: "Alexander", text: "Al", image: "alex.jpg", swag: true, isHidden: false },
                { name: "Leo", text: "Le", image: "leooberg.png", swag: false, isHidden: false },
                { name: "Loke", text: "BOOY GOT THAT VIRUS", image: "lokeoberg.png", swag: true, isHidden: false },
                { name: "Hjalmar", text: "Hj", image: "vue.svg", swag: false, isHidden: false },
                { name: "Alexander", text: "Al", image: "alex.jpg", swag: true, isHidden: false },
            ],
            questions: [
                { text: "har han swag?", command: "characters.map(character => { if (!character.swag) { character.isHidden = true } })" },
                { text: "innehåller hans namn L?", command: "characters.map(character => { character.isHidden = !character.isHidden })" },
            ]
        };
    },
    methods: {
        valert(at) {
            alert(at);
        },
        search() {
            // Declare variables
            let input, filter, ul, li, a, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName("li");

            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) == 0) {
                    li[i].style.display = "";
                    li[i].classList.add("active");
                } else {
                    li[i].style.display = "none";
                    li[i].classList.remove("active");
                }
            }
        },
        runScript(script) {
            eval(script);
        },
        funcSoulBrother() { }
    },
    mounted() {
        // this seems to be the best way to get data from the database, as async+await or .then doesn't work in the data() function
        getCharactersFromDatabase().then((characters) => {
            this.characters = characters;
        });
    }
};
</script>

<style>
#searchField {
    text-align: center;
}

#myInput {
    background-image: url('https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png');
    /* Add a search icon to input */
    background-position: 10px 12px;
    /* Position the search icon */
    background-repeat: no-repeat;
    /* Do not repeat the icon image */
    background-size: 20px;
    /* Full-width */
    font-size: 16px;
    /* Increase font-size */
    padding: 12px 20px 12px 40px;
    /* Add some padding */
    border: 1px solid #ddd;
    /* Add a grey border */
    /*margin-bottom: 12px; /* Add some space below the input */
    width: 25%;
}

#myUL {
    /* Remove default list styling */
    width: 28.4%;
    list-style-type: none;
    padding: 0px;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
}

#myUL li a {
    border: 1px solid #ddd;
    /* Add a border to all links */
    margin-top: -1px;
    /* Prevent double borders */
    /* Grey background color */
    padding: 12px;
    /* Add some padding */
    padding-right: 50px;
    text-decoration: none;
    /*Seth was here*/
    /* Remove default text underline */
    font-size: 18px;
    /* Increase the font-size */
    display: block;
    /* Make it into a block element to fill the whole list */
    size: 100%;
}

#myUL li:hover {
    background-color: #505050;
    /* Add a hover effect to all links, except for headers */
}

a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
}

a:hover {
    color: #535bf2;
}

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
    min-height: 100px;
}

.grid img {
    width: 80%;
    height: auto;
}

.hiddenCard {
    height: 100vw;
}
</style>