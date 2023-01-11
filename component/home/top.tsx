import React from "react";
import styled from "styled-components";
import { useState,useEffect } from "react";
import { ReactNode } from "react";
import data from '/data/db.json'
interface header{

    id:number
    headertitle:string
    subheader:string
    headerbutton:string
    headerimg:string
    headtitlecolor:string
    headsie:string
    subsize:string
    buttonsize:string
    buttoncolor:string
    fontcolor:string
  }


export const Top = ({}) => {
  const Button1Function = () => {
    alert(` was clicked`);
  };

//   const [header,setHeader]=useState([{
//     id:1,
//     headertitle:" It’s time to bring your concept to reality with ASD",
//     headersub:"Anything you can imagine can be built for you by our world class team",
//     headerbutton:"Get Started Today!",
//     headerimg:""
// }])


const [header, setHeader]=useState(data.header)

          //     const API_URL='http://localhost:8000/header'

          //   useEffect(()=>{
          //     const fetchdata = async ()=>{

          //     try{
            
          //       const res= await fetch(API_URL)
          //       const data=res.json()
          //       console.log(data)
          //       setHeader(await data)
                
          //     }
          //     catch(err){
          //       console.log(err)
          //     }
          //   }

          //   (async ()=> await fetchdata())()

          // },[])
        



          
            

            //   useEffect(()=>{
            //   fetch('http://localhost:3000/header')
            //   .then(res=>{
            //     return res.json()
            //   }).then(data =>{
            //     console.log(data)
            //     // setHeader(data)
            //   })
            // }, []);
            // fetch('localhost:3000/uniquefeatures',{
            //   method:'Get',
            //   headers:{"Content-Type":"application/json"},
            //   body:JSON.stringify(data)

            // }).then(()=>{
            //   console.log('newdata')
            // })
            console.log(setHeader)
            
  return (
    <>

    <HeroRootRootRoot >
      <NewGroup>
       
         
        { header.map((head: {
            [x: string]: ReactNode;
            headertitle: ReactNode; id: React.Key | null | undefined; 
}) =>(
            <><Group2 key={head.id}>
                <Paragraph >
                {/* <Paragraph style={{color:head.headtitlecolor, fontSize:head.headsize}}> */}

                  {head.headertitle}
                </Paragraph>
                {/* <Paragraph1 style={{color:head.subcolor, fontSize:head.subcolor}}> */}
                <Paragraph1>
              
                    {head.headersub}
                </Paragraph1>
            </Group2>
            <Button1 onClick={() => Button1Function()}>
            {/* <Button1  onClick={() => Button1Function()} style={{backgroundColor:head.buttonbackground}} > */}

                    <ActiveButton >{head.headerbutton}</ActiveButton>
                    {/* <ActiveButton style={{fontSize:head.buttonsize, color:head.buttoncolor}} >{head.headerbutton}</ActiveButton> */}

               
                </Button1></> 
      
        )) }
        
      </NewGroup>
      <Illustration />
    </HeroRootRootRoot>
    </>
  );
};

const HeroRootRootRoot = styled.div`
style={{paddingTop:"50px"}}
  width: 1232px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom:100px;
  margin-top:20px
  margin:auto
`;
const NewGroup = styled.div`
  gap: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Group2:any = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Paragraph = styled.div`
  width: 608px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
`;
const Paragraph1 = styled.div`
  width: 608px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
`;
const Button1 = styled.button`
  height: 48px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  padding: 0px;
  padding-right: 17px;
  padding-left: 17px;
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
  white-space: nowrap;
`;
const Illustration = styled.div`
  width: 504px;
  height: 520px;
  border-radius: 8px;
  background-color: #ebebeb;
`;
