import React from "react"
import { useState, useEffect } from "react"; //우선 여기까지
import erc721Abi from "../HB721Abi";
import TokenList from '../components/TokenList'
import {
    Card,
    CardText,
    CardBody,
    Button,
  } from "reactstrap";
  import "../components/nftCard.css";


// Profile 초안

const Profile = ({nfts}) => {

    if (nfts === null) {
        return (
            <div>
                no nft
            </div>
        )
    }

    return (
        <div className="profile">
{nfts.map((nft) => (
        <Card className="cardContainer">
          <CardBody>
            <div className="imgBox">
              <img
                src={nft.image}
                onerror="this.style.display='none'"
                className="nftImg"
                alt="none"
              />
            </div>
            <div>
              <CardText className="tokenName">{nft.name}</CardText>
            </div>

            <div className="descriptionBox">
              <CardText className="description">{nft.description}</CardText>
            </div>

            <div>
              <CardText></CardText>
              <div>
                <CardText className="externalUrl">{nft.body}</CardText>
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
}


export default Profile;
