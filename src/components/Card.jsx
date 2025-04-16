import CardItems from "./CardItems";
const Card = () => {
  return (
    <div className="wrapper">
      <CardItems
        title={"Express.js"}
        cardInfo={"40% usage"}
        imageURL={"/images/Express.png"}
        btnClick={"Clicked!"}
      />
      <CardItems
        title={"JavaScript"}
        cardInfo={"80% usage"}
        imageURL={"/images/JavaScript-logo.png"}
        btnClick={"Clicked!"}
      />
      <CardItems
        title={"Ejs"}
        cardInfo={"30% usage"}
        imageURL={"/images/ejs_400x400.png"}
        btnClick={"Clicked!"}
      />
      <CardItems
        title={"PostgreSQL"}
        cardInfo={"30% usage"}
        imageURL={"/images/PostgreSQL-Logo.wine.png"}
        btnClick={"Clicked!"}
      />
    </div>
  );
};

export default Card;
