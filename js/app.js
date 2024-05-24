/*
  For at aktivere et kort, tilføj en css class med navnet active
  eks. object.classList.add("active"); . men husk også at fjerne class hvis 
  kortet ikke matcher. .classList.remove("active");
*/

// Step 1. Tilføj click event på alle kort holder elemente <figure>.
let cards = document.querySelectorAll(".card");
let firstCard = "";

// Indbyg en score som giver + point ved korret match, og - point ved forkert.
let scoreElement = document.querySelector("#score");
let score = 0;

for (let index = 0; index < cards.length; index++) {
  cards[index].addEventListener("click", (data) => {
    // Step 2. Tilføj check om 2 billeder som er aktive matcher.
    if (firstCard === "") {
      firstCard = data.target;
      data.target.classList.add("active");
    } else {
      if (firstCard.children[0].src === data.target.children[0].src) {
        data.target.classList.add("active");
        firstCard = "";
        score += 10;
        scoreElement.innerText = score;
      } else {
        firstCard.classList.remove("active");
        firstCard = "";
        score -= 4;
        scoreElement.innerText = score;
      }
    }
  });
}

// Indbyg en reset knap så spillet kan genstrate.
let restartBtn = document.querySelector(".btn");

for (let index = 0; index < cards.length; index++) {
  restartBtn.addEventListener("click", (data) => {
    cards[index].classList.remove("active");
    score = 0;
    scoreElement.innerText = score;
  });
}

// Udskriv billeder i tilfældig rækkefølge.
const memoryGameImgs = [
  "https://picsum.photos/seed/memory_1/300/300",
  "https://picsum.photos/seed/memory_2/300/300",
  "https://picsum.photos/seed/memory_3/300/300",
  "https://picsum.photos/seed/memory_4/300/300",
  "https://picsum.photos/seed/memory_5/300/300",
  "https://picsum.photos/seed/memory_6/300/300",
  "https://picsum.photos/seed/memory_1/300/300",
  "https://picsum.photos/seed/memory_2/300/300",
  "https://picsum.photos/seed/memory_3/300/300",
  "https://picsum.photos/seed/memory_4/300/300",
  "https://picsum.photos/seed/memory_5/300/300",
  "https://picsum.photos/seed/memory_6/300/300",
];

// 4. Når spillet er forbi, brug confetti.js til at vise confetti på skærmen. Mere info her : https://github.com/abelmoricz/abelmoricz.github.io/tree/9eac02160de7bb57170441a441db96b36e8341d8/confetti.js-master
