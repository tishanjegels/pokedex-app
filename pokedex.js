function logic() {

    // First thing to do is get input from user
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");


    // Will only give objects
    console.log(name + " - " + type + " - " + region + " region") // remove once you have clear understanding


    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;


    // Can log them since they are now pure Strings
    console.log(name + " - " + type + " - " + region + " region") // remove once you have clear understanding

    /*-----------------------------------------------
     * Add your solution code here
     *---------------------------------------------*/

    /* --- Part 1 : Create pokemon data Object --- */

    // Use If to ensure input validation (ensure input fields are !empty)
    if (name == '' && type == '' & region == '') {

        alert("the fields are empty");
    } else {
        return;
    }

    // Create pokemon object here (const pokemon) using user input Strings 
    const pokemon = [
        {
            name: "Mewtwo",
            type: "Psychic",
            region: "Generation I",
        },
        {
            name: "Pikachu",
            type: "Electric",
            region: "Generation I",
        },
        {
            name: "Dragonair",
            type: "Dragon",
            region: "Generation I",
        },
        {
            name: "Flareon",
            type: "Fire",
            region: "Generation I",
        },
        {
            name: "Blastoise",
            type: "Water",
            region: "Generation I",
        },
        {
            name: "Typhlosion",
            type: ["Fire , Ghost"],
            region: "Generation II",
        },
        {
            name: "Miltank",
            type: "Normal",
            region: "Generation II",
        },
        {
            name: "Smoochum",
            type: ["Ice , Psychic"],
            region: "Generation II",
        },
        {
            name: "Kingdra",
            type: ["Water , Dragon"],
            region: "Generation II",
        },
        {
            name: "Granbull",
            type: "Fairy",
            region: "Generation II",
        },
        {
            name: "Sceptile",
            type: "Grass",
            region: "Generation III",
        },
        {
            name: "Jirachi",
            type: ["Steel , Psychic"],
            region: "Generation III",
        },
        {
            name: "Linoone",
            type: ["Dark , Normal"],
            region: "Generation III",
        },
        {
            name: "Cardevoir",
            type: ["Psychic , Fairy"],
            region: "Generation III",
        },
        {
            name: "Noespass",
            type: "Rock",
            region: "Generation III",
        },
        {
            name: "Burmy",
            type: "Bug",
            region: "Generation IV",
        },
        {
            name: "Happing",
            type: "Normal",
            region: "Generation IV",
        },
        {
            name: "Skrupi",
            type: ["Poison, Bug"],
            region: "Generation IV",
        },
        {
            name: "Weavile",
            type: ["dark , Ice"],
            region: "Generation IV",
        },
        {
            name: "Rotom",
            type: ["Electric , Fire"],
            region: "Generation IV",
        },
        {
            name: "Simisage",
            type: "Grass",
            region: "Generation V",
        },
        {
            name: "Blitze",
            type: "Electric",
            region: "Generation V",
        },
        {
            name: "Drilbur",
            type: "Ground",
            region: "Generation V",
        },
        {
            name: "Timburr",
            type: "Fighting",
            region: "Generation V",
        },
        {
            name: "Klink",
            type: "Steel",
            region: "Generation V",
        },
        {
            name: "Vivillon",
            type: ["Bug , Flying"],
            region: "Generation VI",
        },
        {
            name: "Daublade",
            type: ["Steel , Ghost"],
            region: "Generation VI",
        },
        {
            name: "Malamar",
            type: ["Dark , Psychic"],
            region: "Generation VI",
        },
        {
            name: "Dragalge",
            type: ["Poison , Dragon"],
            region: "Generation VI",
        },
        {
            name: "Aurorus",
            type: ["Rock , Ice"],
            region: "Generation VI",
        },
        {
            name: "Primarina",
            type: ["Water , Fairy"],
            region: "Generation VII",
        },
        {
            name: "Rockruff",
            type: "Rock",
            region: "Generation VII",
        },
        {
            name: "Lurantis",
            type: "Grass",
            region: "Generation VII",
        },
        {
            name: "Komala",
            type: "Normal",
            region: "Generation VII",
        },
        {
            name: "Zeraora",
            type: "Electric",
            region: "Generation VII",
        },
        {
            name: "Glastrier",
            type: "Ice",
            region: "Generation VIII",
        },
        {
            name: "Kubfu",
            type: "Fighting",
            region: "Generation VIII",
        },
        {
            name: "Cufant",
            type: "Steel",
            region: "Generation VIII",
        },
        {
            name: "Cursola",
            type: "Ghost",
            region: "Generation VIII",
        },
        {
            name: "Nickit",
            type: "Dark",
            region: "Generation VIII",
        },
    ]


    // Create a span element (const pokemonData) and put the pokemon objects properties inside of it

    const pokemonData = document.createElement("SPAN");


    /* --- Part 2 : Creating other DOM Objects --- */

    // Create HTML li element here (const pokedexEntry)

    const pokedexEntry = document.createElement("li");


    // Give pokedexEntry (li) a new class equal to the "type" property of the pokemon object




    // Creating a preview button (using a Template Literal)
    // this code is for an html form that will Google search the name of the pokemon
    const previewButton = `
            <form action="http://google.com/search" target="_blank">
                <input name="q" hidden value="${name}">
                <input type="submit">
            </form>
        `


    /* --- Part 3 : Add things into the DOM --- */

    // Firstly append pokemonData to the innerHTML of pokedexEntry


    // Secondly append the previewButton to innerHTML of pokedexEntry


    // Lastly we will get the ul List element that is meant to contain all pokedex entries
    // The we will append pokedexEntry to the innerHTML of the pokedexEntries ul element


    /*-----------------------------------------------
     * Solution must be above this comment
     *---------------------------------------------*/
}
