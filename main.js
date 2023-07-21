let cards = ["A","2","3","4","5","6","7","8","9","J","Q","K"];
let palo = ["♦","♥","♠","♣"];
let contcard = Math.floor(Math.random()*cards.length);
let contpalo = Math.floor(Math.random()*palo.length);
let numero = document.querySelector(".card-num");
let fig = document.querySelectorAll(".palo")

if (contpalo > 1) {
    document.querySelector('.card-num').classList.remove('text-danger');
    document.querySelector('.card-num').classList.add('text-dark');
    fig.forEach(element => {
        element.classList.remove('text-danger');
        element.classList.add('text-dark');
    });
} else {
    document.querySelector('.card-num').classList.remove('text-dark');
    document.querySelector('.card-num').classList.add('text-danger');
    fig.forEach(element => {
        element.classList.remove('text-dark');
        element.classList.add('text-danger');
    });
}

numero.innerHTML = cards[contcard];
fig.forEach(element => {
    element.innerHTML = palo[contpalo];
});

