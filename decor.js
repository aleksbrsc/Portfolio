// picks a random image from decor folder to add to the page 
var images = [
    "images/decor/mr-punch-horse.svg",
    "images/decor/diving-suit-horse.svg",
    "images/decor/duel.svg",
    "images/decor/pantagruel1.svg",
    "images/decor/pantagruel2.svg",
    "images/decor/pantagruel3.svg",
    "images/decor/pantagruel4.svg"
];
var randomIndex = Math.floor(Math.random() * images.length);
var randomImage = images[randomIndex];
var picture = document.getElementById('picture');
picture.src = randomImage;

