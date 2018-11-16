var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); 
}


var cardDeck = document.getElementsByClassName('card-deck')[0];
var data = [{ img: 
    "./img/b.jpg", 
    title: "Test titre", 
    para: "Encore tu test", 
    smallText: "Rien que du test",
    Price: 50 + " €" }, 
    { img: "./img/b.jpg", 
    title: "Test titre", 
    para: "Toujours du test", 
    smallText: "Capich ?",
    Price: 250 + " €"}];

cardDeck.innerHTML += data.map(function(el, index, arr) {
    return "<div class='card'><img class='card-img-top' src=" 
    + el.img + 
    " alt='Card image cap'><div class='card-body'><h4 class='card-title' > " 
    + el.title +
    "</h4 ><p class='card-text' > " 
    + el.para +
    "</p ><p class='card-text' > <small class='text-muted'>" 
    + el.smallText +
    "</small></p ><p class='card-text' > " 
    + el.Price +
    "</p ></div ></div >"
})