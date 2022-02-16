import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import axios from "axios";
import "./nftCard.css";

const nftHome = () => {
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 cards 를 초기화하고
        setError(null);
        setCards(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          // 주소 하드코딩
          "http://34.87.171.217/account/0x23235D96903585B18c79A975646D019688fE5b2F"
        );

        let data = response.data["metadata"];
        setCards(data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchCards();
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!cards) return null;

  return (
    <div>
      {cards.map((card) => (
        <Card className="cardContainer">
          <CardBody>
            <div className="imgBox">
              <img
                src={card.image}
                onerror="this.style.display='none'"
                className="nftImg"
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

export default nftHome;
