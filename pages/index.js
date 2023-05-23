import React, { useState, useEffect } from "react";
import web3Modal, { providers } from "web3modal";
import { ethers } from "ethers";
import imageEth from "../ether.png";
import creator from "../creator.png";
const index = () => {
  const [crrentAccount, setCrrentAccount] = useState("");
  const [connect, setConnet] = useState(false);
  const [balance, setBalance] = useState("");

  const failMessage = "Please install MetaMask & connect your MetaMask";

  const successMessage = "Your Account Successfully Conneted to MetaMask";

  const INFURA_ID = "44d405783a7e4393acc3922f7bebcf51";
  const provider = new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${INFURA_ID}`
  );

  const checkItWalletConnected= async()=>{
    if(!window.ethereum) return;
    const accounts=await window.ethereum.request({method:"eth_accounts"})
    // console.log(accounts);

    if(accounts.length){
      setCrrentAccount(accounts[0])
    }else{
      console.log("fail")
    }
    
    const address="0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5";
    const balance=await provider.getBalance(address);
    
    const showBalance=`${ethers.utils.formatEther(balance)}`
    console.log(showBalance);
  };

  checkItWalletConnected();

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
};

export default index;
