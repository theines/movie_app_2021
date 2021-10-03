const quotes = [
    {
        quote:"Try again. Fail again. Fail better.",
        author:"Samuel Beckett"
    },
    {
        quote:"When you look long into an abyss, The abyss looks into you.",
        author:"Friedrich Nietzsche"
    },
    {
        quote:"All that glitters is not gold.",
        author:"W. Shakespeare"
    },
    {
        quote:"The irrationality of a thing is not an argument against it's existence, Rather, a condition of it.",
        author:"Friedrich Nietzsche"
    },
    {
        quote:"Whatever is begun in anger, ends in shame.",
        author:"B. Franklin"
    },
    {
        quote:"The man being is a blind man who dreams that he can see.",
        author:"Hebbel"
    },
    {
        quote:"His own character is the arbiter of every one’s fortune.",
        author:"P. Syrus"
    },
    {
        quote:"Act as men of thought; think as men of action.",
        author:"H. Bergson"
    },
    {
        quote:"Slow but sure wins the race.",
        author:"S. Smiles"
    },
    {
        quote:"Nothing great was ever achieved without enthusiasm.",
        author:"R. W. Emerson"
    }

]
//grab first. querySelector니까 #붙이기
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//reason for choosing floor rather than round is just because
//i do not need the last number
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;