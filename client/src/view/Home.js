import React from "react"
import { Link } from 'react-router-dom';
import Nftcard from "../components/nftCard";
import {
  Card,
  CardText,
  CardBody,
  Button,
} from "reactstrap";
import "../components/nftCard.css";

// Home 컨탠츠 없음 
const Home = ({cards}) => {
    if (cards === null) {
        return (
            <div>
            </div>
        )
    }
  return (
    <div className="home">
      
      {cards.map((card) => (
        <Card className="cardContainer">
          <CardBody>
            <div className="imgBox">
              <img
                src={card.image}
                onerror="this.style.display='none'"
                className="nftImg"
                alt="none"
              />
            </div>
            <div>
              <CardText className="tokenName">{card.name}</CardText>
            </div>

            <div className="descriptionBox">
              <CardText className="description">{card.description}</CardText>
            </div>

            <div>
              <CardText></CardText>
              <div>
                <CardText className="externalUrl">{card.body}</CardText>
              </div>
            </div>
            <div className="buttonBox">
              <Button className="nftButton">Details</Button>
            </div>
          </CardBody>
        </Card>
      ))}

    </div>
  );
};

export default Home;
