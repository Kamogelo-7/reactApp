import Button from "./Button";
import Cardimages from "./Cardimages";
const CardItems = ({ imageURL, title, cardInfo, btnClick }) => {
  return (
    <div className="card">
      <Cardimages imageURL={imageURL} />
      <h1>{title}</h1>
      <p>{cardInfo}</p>
      <Button btnClick={btnClick} />
    </div>
  );
};

export default CardItems;
