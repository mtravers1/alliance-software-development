import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
export const Findname = ({}) => {

  const [findname, setFindname]=useState([{
    title:"How to Find the Ideal Name for a Domain",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,purus sit amet luctus vene",
    box1:"01", box1d:"Know your audience", box1c:"", box1ff:"", box1s:"", box1ds:"",
    box2:"02", box2d:"Research Keywords", box2c:"", box2s:"", box2ds:"",
    box3:"03", box3d:"Less and Simple", box3c:"", box3s:"", box3ds:"",
    box4:"04", box4d:"Be the first", box4c:"", box4s:"", box4ds:"",
    bottomimg:""
    

  }])
  
  // const API_URL='http://localhost/8000/findname'
  // useEffect(()=>{
  //   const fetchdata = async()=>{
  //     try{
  //       let res = await fetch(API_URL)
  //       let data = await res.json()
  //       setFindname(data)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   (async()=>fetchdata())()
  // })
  return (
    <StepRootRootRoot style={{marginTop:"100px"}}>
      {findname.map((f)=>(
        <>
        <Text1>{f.title}</Text1>
      <Paragraph>
        {f.description}
      </Paragraph>
      <NewGroup>
        <Container3 style={{backgroundColor:f.box1c}}>
          <Text2>{f.box1}</Text2>
          <Text3>{f.box1d}</Text3>
        </Container3>
        <Container2 style={{backgroundColor:f.box2c}}>
          <Text4>{f.box2}</Text4>
          <Text3>{f.box2d}</Text3>
        </Container2>
        <Container2 style={{backgroundColor:f.box3c}}>
          <Text6>{f.box3}</Text6>
          <Text3>{f.box3d}</Text3>
        </Container2>
        <Container2 style={{backgroundColor:f.box4c}}>
          <Text8>{f.box4}</Text8>
          <Text3>{f.box4d}</Text3>
        </Container2>
      </NewGroup>
      <Illustration />

  <span style={{width:"1232px", height:"480px", borderRadius:"8px", backgroundColor: "#ebebeb" }}>
    {f.bottomimg}
  </span>
        </>
      ))}
      {/* <Text1>How to Find the Ideal Name for a Domain</Text1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus vene
      </Paragraph>
      <NewGroup>
        <Container3>
          <Text2>01</Text2>
          <Text3>Know Your Audience</Text3>
        </Container3>
        <Container2>
          <Text4>02</Text4>
          <Text3>Research Keywords</Text3>
        </Container2>
        <Container2>
          <Text6>03</Text6>
          <Text3>Less and Simple</Text3>
        </Container2>
        <Container2>
          <Text8>04</Text8>
          <Text3>Be the First</Text3>
        </Container2>
      </NewGroup>
      <Illustration /> */}
    </StepRootRootRoot>
  );
};

const Text3 = styled.div`
  width: 248px;
  color: #e6e6e6;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
`;
const Container2 = styled.div`
  height: 168px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  border-radius: 16px;
  background-color: #ffffff;
`;
const StepRootRootRoot = styled.div`
  height: 992px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  width: 1024px;
  margin: 0px 0px 24px 0px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
`;
const Paragraph = styled.div`
  width: 608px;
  margin: 0px 0px 40px 0px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
`;
const NewGroup = styled.div`
  width: 1232px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 40px 0px;
`;
const Container3 = styled.div`
  height: 168px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  border-radius: 16px;
  background-color: #555555;
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
  white-space: nowrap;
`;
const Text4 = styled.div`
  align-self: flex-end;
  margin: 0px 81px 0px 0px;
  color: #7f7f7f;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
  white-space: nowrap;
`;
const Text6 = styled.div`
  align-self: flex-end;
  margin: 0px 80px 0px 0px;
  color: #7f7f7f;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
  white-space: nowrap;
`;
const Text8 = styled.div`
  color: #7f7f7f;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
  white-space: nowrap;
`;
const Illustration = styled.div`
  width: 1232px;
  height: 480px;
  border-radius: 8px;
  background-color: #ebebeb;
`;
