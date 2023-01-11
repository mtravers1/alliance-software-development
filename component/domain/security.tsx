import React from "react";
import styled from "styled-components";
import { useState,useEffect } from "react";

export const Security = ({}) => {
  const Button1Function = () => {
    alert(`was clicked`);

  };

  const [securtity, setSecurity]=useState([
    {
    title:"The Best Speed & Security Hosting",
    titlesize:"",
    descriptionsize:"",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit viverra turpis eu. Pellentesque scelerisque nec enim tempus netus mi proin viverra eu. Auctor neque, amet, eget elit. Libero nascetur porttitor mattis urna et consectetur. Placerat vulputate eget nam habitasse. Faucibus tristique nisl, libero quis cursus eu faucibus vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas quis orci. Ultricies scelerisque donec sagittis ante tristique cursus elementum.",
    button:"Learn More",
    buttoncolor:"",
    img:""
    }
  ])

  // const URL_API='http://localhost:8000'

  // useEffect(()=>{
  //   let fetchdata = async()=>{
  //     try{
  //       let res = await fetch(URL_API)
  //       let data = await res.json()
  //       setSecurity(data)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   (async()=> fetchdata())()
  // })

  return (
    <ValueRootRootRoot style={{marginTop:"100px", marginBottom:"100px"}}>
      {securtity.map((s)=>(
        <>
        <NewGroup>
        <Text1 style={{fontSize:s.titlesize}}>{s.title}</Text1>
        <Paragraph style={{fontSize:s.descriptionsize}}>
          {s.description}
        </Paragraph>
        <Button1 style={{backgroundColor:s.buttoncolor}} onClick={() => Button1Function()}>
          <ActiveButton>{s.button}</ActiveButton>
        </Button1>
      </NewGroup>
      <span
      style={{
        width: "504px",
        height: "480px",
        borderRadius: "8px",
        backgroundColor: "#ebebeb"
      }}>{s.img}</span>
        </>
      ))}
      {/* <NewGroup>
        <Text1>The Best Speed & Security Hosting</Text1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit
          viverra turpis eu. Pellentesque scelerisque nec enim tempus netus mi
          proin viverra eu. Auctor neque, amet, eget elit. Libero nascetur
          porttitor mattis urna et consectetur. Placerat vulputate eget nam
          habitasse. Faucibus tristique nisl, libero quis cursus eu faucibus
          vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas quis
          orci. Ultricies scelerisque donec sagittis ante tristique cursus
          elementum.
        </Paragraph>
        <Button1 onClick={() => Button1Function()}>
          <ActiveButton>Learn More</ActiveButton>
        </Button1>
      </NewGroup>
      <Illustration /> */}
    </ValueRootRootRoot>
  );
};

const ValueRootRootRoot = styled.div`
  width: 1232px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const NewGroup = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  width: 608px;
  margin: 0px 0px 24px 0px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
`;
const Paragraph = styled.div`
  width: 608px;
  margin: 0px 0px 40px 0px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
`;
const Button1 = styled.button`
  height: 46px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  padding: 0px;
  padding-right: 41px;
  padding-left: 41px;
  border-width: 0px;
  border-radius: 8px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #000000;
  box-sizing: content-box;
  background: none;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  } ;
`;
const ActiveButton = styled.div`
  font-size: 14px;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const Illustration = styled.div`
  width: 504px;
  height: 480px;
  border-radius: 8px;
  background-color: #ebebeb;
`;
