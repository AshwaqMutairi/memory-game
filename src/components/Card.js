const Card = (props) => {
  const card = props.card;

  return (
    <section className="CardsTable">
      <div className="CardShape">
        <img alt={card.key} src={card.image} />
        <img alt={card.key} src={card.backImage} />
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgLdZDnAICyslXZCzYlkOdyX3GWhdUohfQA05x8-H4tTxTcveRRJqF7aSTg1ubih7Kog&usqp=CAU" /> */}
      </div>
    </section>
  );
};

export default Card;
