import { useState } from "react";

const Card = (props) => {
  const checkingArray = props.checkingArray;
  const card = props.card;

  const [cardFace, setCardFace] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgLdZDnAICyslXZCzYlkOdyX3GWhdUohfQA05x8-H4tTxTcveRRJqF7aSTg1ubih7Kog&usqp=CAU"
  );

  return (
    // <section className="CardsTable">
    <div className="CardShape">
      {/* <img alt={card.key} src={card.image} /> */}
      <img
        onClick={() => {
          setCardFace(card.image);
        }}
        alt={card.key}
        src={cardFace}
      />
      {/*       props.checkingArray.push(card); console.log(chekingArray); */}
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgLdZDnAICyslXZCzYlkOdyX3GWhdUohfQA05x8-H4tTxTcveRRJqF7aSTg1ubih7Kog&usqp=CAU" /> */}
    </div>
    // </section>
  );
};

export default Card;

// props.checkingArray.push(card);
