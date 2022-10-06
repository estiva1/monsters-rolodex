import { Component } from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log("render");
    const { kitties } = this.props;

    return (
      <div className="card-list">
        {kitties.map((kitty) => {
          return <Card kitty={kitty} />;
        })}
      </div>
    );
  }
}

export default CardList;
