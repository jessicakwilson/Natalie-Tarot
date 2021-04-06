/*eslint-env browser*/

/*global console*/
/*eslint no-console: "off"*/
console.log("hello world");

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
    card.classList.toggle("selected");
    console.log("selected ", card.id);
}

cards.forEach(function (c) {
    c.onclick = OnCardClick;
});


var nextButton = document.getElementById("NextButton");
nextButton.onclick = function() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
}

var backButton = document.getElementById("BackButton");
backButton.onclick = function() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}