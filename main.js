/*eslint-env browser*/

/*global console*/
/*eslint no-console: "off"*/

/* Random integer in range [0, max) */
function randint(max) {
    return Math.floor(Math.random() * max);
}

var imageNames = [
    "0-the-fool-2.0.jpg",
    "1-the-magician-new.jpg",
    "2-high-priestess-2.0.jpg",
    "3-the-empress-final.jpg",
    "4-emperor-4.0.jpg",
    "5-hierophant-final3.jpg",
    "6-the-lovers-1.0.jpg",
    "7-the-chariot-3.2.jpg",
    "8-strength.jpg",
    "9-the-hermit-final.jpg",
    "10-wheel-of-fortune-FINAL.jpg",
    "11-justice-2.1.jpg",
    "12-hanged-man-2.2.jpg",
    "13-death-3.1.jpg",
    "14-temperance-3.0-final.jpg",
    "15-the-devil.jpg",
    "16-the-tower-final.jpg",
    "17-the-star-3.5.jpg",
    "18-the-moon.jpg",
    "19-the-sun-2.2-final.jpg",
    "20-judgement-2.1.jpg",
    "21-the-world-final.jpg"
];

var alreadySelectedCards = [];

var cards = [
    document.getElementById("card1"),
    document.getElementById("card2"),
    document.getElementById("card3"),
    document.getElementById("card4"),
    document.getElementById("card5"),
    document.getElementById("card6"),
    document.getElementById("card7"),
    document.getElementById("card8"),
    document.getElementById("card9"),
    document.getElementById("card10"),
    document.getElementById("card11"),
    document.getElementById("card12"),
    document.getElementById("card13"),
    document.getElementById("card14"),
    document.getElementById("card15"),
    document.getElementById("card16"),
    document.getElementById("card17"),
    document.getElementById("card18"),
    document.getElementById("card19"),
    document.getElementById("card20"),
    document.getElementById("card21"),
    document.getElementById("card22")
];

function OnCardClick(e) {
    var card = e.target;
    var cardNum = cards.indexOf(card);
    
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    
    var cardFront = document.getElementById("CardFront");
    
    // card was already selected
    if (alreadySelectedCards[cardNum] !== undefined) {  
        cardFront.style.backgroundImage = "url(" + "'images/" + alreadySelectedCards[cardNum] + "')";
        card.style.backgroundImage = "url(" + "'images/" + alreadySelectedCards[cardNum] + "')";
        return;
    }
    
    // randomly choose a card
    var chosenCard = randint(imageNames.length);  
    cardFront.style.backgroundImage = "url(" + "'images/" + imageNames[chosenCard] + "')";
    card.style.backgroundImage = "url(" + "'images/" + imageNames[chosenCard] + "')";
    
    alreadySelectedCards[cardNum] = imageNames[chosenCard];  // keep track of chosen cards
    imageNames.splice(chosenCard, 1);  // remove card from options
}

cards.forEach(function (c) {
    c.onclick = OnCardClick;
});

function hideOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

var backButton = document.getElementById("BackButton");
backButton.onclick = hideOverlay;