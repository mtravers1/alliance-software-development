import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
export const Getstarted = ({}) => {
  const Button1Function = () => {
    alert(`was clicked`);
  };

  const [getstarted, setGetstarted]=useState([
    {title:"Let’s start something magical with Alliance!", 
    button:"Get started"}
  ]) 

  // useEffect(()=>{
  //   const fetchdata=async()=>{
  //     try{
  //       let res = await fetch('localhost:3000/getstarted')
  //       let data = await res.json()
  //       setGetstarted(data)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   (async()=>fetchdata())
  // },[])
  // useEffect(()=>{
  //   fetch('localhost:3000/getstarted')
  //   .then(res=>{
  //     return res.json()
  //   })
  //   .then(data=>{
  //     setGetstarted(data)
  //   })
  // },[])
  return (
    <NewRootRootRootRoot style={{width:"fit-content", margin:"50px"}}>
      <Background>
        {getstarted.map(get => (
            <>
            <Paragraph>{get.title}</Paragraph>
        <Button1 onClick={(e) => Button1Function()}>
          <ActiveButton>
           {get.button}
          </ActiveButton>
        </Button1>
            </>
        ))}
        
      </Background>
    </NewRootRootRootRoot>
  );
};

const NewRootRootRootRoot = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  margin:auto;
`;
const Background = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 80px 104px 88px 104px;
  border-radius: 16px;
  background-color: #f7fafe;
`;
const Paragraph = styled.div`
  width: 1024px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
`;
const Button1 = styled.button`
  height: 48px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  margin: 0px 426px 0px 0px;
  padding: 0px;
  padding-right: 40px;
  padding-left: 40px;
  border-width: 0px;
  border-radius: 8px;
  box-sizing: content-box;
  background-color: #555555;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ActiveButton = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  line-height: 24px;
  white-space: pre-wrap;
`;
