import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import {useState} from 'react'
export const Footer = ({}) => {



    const [foot, setFoot]=useState([
        {img:'', title:'Service', option1:'Domain', title2:'Hosting', title3:'Company', option2:'About', option3:'Contact Us',
        title4:'Help', option4:'FAQ', option5:'Help support'}
    ])
    // useEffect(()=>{
    //   const fetchdata = async()=>{
    //     try{
    //       let res=await fetch('')
    //       let data = await res.json()
    //       setFoot(data)
    //     }catch(err){
    //       console.log(err)
    //     }
    //   }
    //   (async()=>fetchdata())
    // },[])
  return (
    <BackgroundRootRootRoot style={{marginTop:"100px"}}>
        {foot.map(fo=>(
            <>
            <Image1 src={`https://file.rendit.io/n/GIF32LejnQa5LtJZD6yt.png`} />
            <NewGroup>
              <Text1>{fo.title}</Text1>
              <Link href="./finddomain"><Text2>{fo.option1}</Text2></Link>
            </NewGroup>
            <Text3>{fo.title2}</Text3>
            <NewGroup1>
              <Text4>{fo.title3}</Text4>
              <Link href="./aboutus"><Text5>{fo.option3}</Text5></Link>
              <Text6>{fo.option3}</Text6>
            </NewGroup1>
            <NewGroup2>
              <Text4>{fo.title4}</Text4>
              <Link href="./faq"><Text5>{fo.option4}</Text5></Link>
              <Text6>{fo.option5}</Text6>
            </NewGroup2>
            </>
        ))}
      
    </BackgroundRootRootRoot>
  );
};

const Text4 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const Text5 = styled.div`
  color: #e6e6e6;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  white-space: nowrap;
`;
const Text6 = styled.div`
  align-self: center;
  color: #e6e6e6;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  white-space: nowrap;
`;
const BackgroundRootRootRoot = styled.div`
//   width: 1221px;
margin:auto;
width:fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 80px 115px 320px 104px;
  background-color: #f1bc01;
`;
const Image1 = styled.img`
  width: 81px;
  height: 85px;
  margin: 0px 335px 0px 0px;
`;
const NewGroup = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 177px 0px 0px;
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const Text2 = styled.div`
  align-self: flex-start;
  color: #e6e6e6;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  white-space: nowrap;
`;
const Text3 = styled.div`
  margin: 0px 202px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const NewGroup1 = styled.div`
  height: 136px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  align-items: flex-start;
  margin: 0px 120px 0px 0px;
`;
const NewGroup2 = styled.div`
  height: 136px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  align-items: flex-start;
`;
