import React from "react"
import { Link } from 'react-router-dom';
import Nftcard from "../components/nftCard";
import Users from "../components/axios"

// Home 컨탠츠 없음 
const Home = () => {

  return (
    <div className="home">
        <h1>홈</h1>
        <h1>홈</h1>
        <Link to="profile"> 소개 </Link>
        <p>가장 먼저 보여지는 페이지입니다.</p>
        <Nftcard></Nftcard>
    </div>

    
  );
};

export default Home;
