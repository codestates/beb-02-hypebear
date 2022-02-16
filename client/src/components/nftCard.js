import React, { useState, useEffect } from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from 'axios';
import './nftCard.css'
  


const Nftcard = () => {

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          // 주소 하드코딩
          'http://34.87.171.217/account/0x23235D96903585B18c79A975646D019688fE5b2F'
          // 더미데이터
          // 'https://jsonplaceholder.typicode.com/users' 
          // 'https://jsonplaceholder.typicode.com/posts'
        );
        console.log(response);

        let data =  response.data["metadata"]
        console.log(data);
        setUsers(data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
        console.log(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  return (
    <div>
      {users.map(user => (
      <Card className="cardContainer">
        <CardBody >
          <div className="imgBox">
            <img
              src={user.image}
              alt="no img"
              className="nftImg"
            />
          </div>
          <div>
            <CardText className="tokenName">{user.name}</CardText>
          </div>

          <div className="descriptionBox">
            <CardText className="description">
             {user.description}
            </CardText>
          </div>

          <div>
            <CardText></CardText>
            <div>
              <CardText className="externalUrl">
               {user.body}
              </CardText>
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
  
export default Nftcard;