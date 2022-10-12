import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ kitties }) => (
  <div className="card-list">
    {kitties.map((kitty) => {
      return <Card key={kitty.id} kitty={kitty} />;
    })}
  </div>
);

export default CardList;
