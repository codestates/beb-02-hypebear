import React, {useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import Profile from './view/profile'
import Send from './view/Send'
import Create from './view/Create'
import axios from "axios";
import './styles/App.scss';
import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'

import Web3 from 'web3'

// App Router 연동
const App = () => {
    const [sideSize, setSideSize] = useState(false);
    const [account, setAccount] = useState('');
    const [web3, setWeb3] = useState();
    const [searchAccount, setSearchAccount] = useState('');
    const [cards, setCards] = useState(null);

    const handleResizeSide = (checked) => {
        setSideSize(checked)
        console.log(sideSize);
    }


    //  web3 설정
    //  window.ethereum은 공급자 객체이기 때문에 web3.js를 사용.
    useEffect(() => {
        if (typeof window.ethereum !== "undefined") { // window.ethereum이 있다면
            try {
                const web = new Web3(window.ethereum);  // 새로운 web3 객체를 만든다
                setWeb3(web);
            } catch (err) {
                console.log(err);
            }
        }
    }, []);

    // 지갑 연결
    const connectWallet = async () => {
        var accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        console.log(accounts)
    };
    
    const setSearch = async (value) => {
        setSearchAccount(value);
        if (!value) return;
        const domain = `http://34.87.171.217/account/${value}`;
        const response = await axios.get(domain);
        console.log(response);
        let data = response.data["metadata"];
        console.log(data);
        setCards(data);
    }
    
    return (
        <div className="main app"> 
            <Sidebar sideSize={sideSize} connectWallet={connectWallet} account={account}/>
            <div className="screen">
                <Header className="head" handleResizeSide={handleResizeSide} sideSize={sideSize} setSearch={setSearch} />
                    <Routes>
                        <Route path="/" element={<Home
                            sideSize={sideSize}
                            setSideSize={setSideSize}
                            searchAccount={searchAccount}
                            cards={cards}
                        />} />
                    <Route path="/profile" element={<Profile account={account} web3={web3}/>} />
                    <Route path="/send" onClick={connectWallet} element={<Send account={account} web3={web3} connectWallet={connectWallet}/>} />
                    <Route path="/create" element={<Create account={account} web3={web3} />} />
                </Routes>
                <Footer className="footer"/>
            </div>
        </div>
    );
};

export default App;
