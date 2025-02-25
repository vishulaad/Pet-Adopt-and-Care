import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";
import Alltrainer from "./Alltrainer";
import SaveTrainer from "./SaveTrainer";
import TrainerCards from "./TrainerCards";
import Trainer from "./Trainer";
 
const cardInfo = [
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James",
      text: "THE GOAT",
    },
];
const MoreDeets = () => {
  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>Trainer:{this.props.trainer.name}</Card.Title>
          <Card.Text>
            Trainning Center:{this.props.trainer.center_name}
            Address : {this.props.trainer.address}
            Phone No : {this.props.trainer.phone}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;
