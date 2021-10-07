import React from "react";
import Card from "./Card";
import { useState } from "react";
import cards from "../Cards";

const CardList = () => {
  let checkingArray = [];

  const cardsArray = cards.map((element) => <Card card={element} />);
  const randomArray = shuffle(cardsArray);

  const cardPlay = document.querySelectorAll(".CardShape");
  cardPlay.forEach((card) => card.addEventListener("click", flipCard));

  return <div className="CardsTable">{randomArray}</div>;
};

function flipCard() {
  this.classList.toggle("flip");

  console.log("i was clicked");
  console.log(this);
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function sameCards(card1, card2) {
  if (card1.image === card2.image) {
    return true;
  } else {
    return false;
  }
}

export default CardList;
