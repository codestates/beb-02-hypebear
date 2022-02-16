import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './nftCard.css'
import Users from './axios';
  
const Nftcard = () => {
  return (
    <div>
      <Card>
        <CardBody className="cardContainer">
          <div className="imgBox">
            <img
              src={
                "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/JQ_HusUnDX9WANSKsVQP4CzcfV8.jpg"
              }
              alt="no img"
              className="nftImg"
            />
          </div>
          <div>
            <CardText className="tokenName">Dave Starbelly</CardText>
          </div>

          <div className="descriptionBox">
            <CardText className="description">
              "Friendly OpenSea Creature that enjoys long swims in the ocean."
            </CardText>
          </div>

          <div>
            <CardText></CardText>
            <div>
              <CardText className="externalUrl">
                https://example.com/?token_id=3
              </CardText>
            </div>
          </div>
          <div className="buttonBox">
            <Button className="nftButton">Details</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Nftcard;