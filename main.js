/* load cards from json */
var data;
fetch("cards.json").then(
    response => { 
        return response.json();
    }).then(
        d => data = d);

/* Random integer in range [0, max) */
function randint(max) {
    return Math.floor(Math.random() * max);
}

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
    overlay.classList.add("clickToExit");
    
    var cardFront = document.getElementById("CardFront");
    var cardTitle = document.getElementById("CardTitle");
    var cardDesc = document.getElementById("CardDescription");
    
    // card was already selected
    if (alreadySelectedCards[cardNum] !== undefined) {
        cardFront.style.backgroundImage = "url('" + alreadySelectedCards[cardNum].img + "')";
        card.style.backgroundImage = "url('" + alreadySelectedCards[cardNum].img + "')";
        
        cardTitle.textContent = alreadySelectedCards[cardNum].title;
        cardDesc.textContent = alreadySelectedCards[cardNum].description;
        return;
    }
    
    // randomly choose a card
    var chosenCard = randint(data.length);
    cardFront.style.backgroundImage = "url('" + data[chosenCard].img + "')";
    card.style.backgroundImage = "url('" + data[chosenCard].img + "')";
    
    cardTitle.textContent = data[chosenCard].title;
    cardDesc.textContent = data[chosenCard].description;
    
    alreadySelectedCards[cardNum] = data[chosenCard];  // keep track of chosen cards
    data.splice(chosenCard, 1);  // remove card from options
}

cards.forEach(c => {
    c.onclick = OnCardClick;
});

function hideOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    overlay.classList.remove("clickToExit");
}

var overlay = document.getElementById("overlay");
overlay.onclick = function() {
    if (overlay.classList.contains("clickToExit")) {
        hideOverlay();
    }
}

var backButton = document.getElementById("BackButton");
backButton.onclick = hideOverlay;

var resetButton = document.getElementById("ResetButton");
resetButton.onclick = function() {
    alreadySelectedCards.forEach(c => {
        if (c !== undefined) {
            data.push(c);
        }
    })
    alreadySelectedCards = [];
    
    cards.forEach(c => {
        c.style.backgroundImage = "url(images/back-cover.jpg)";
    })
}