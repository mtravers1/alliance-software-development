import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { AnyAaaaRecord } from "dns";
import { useEffect } from "react";
interface process{
    title:string
    description:string
    button:string
}


export const Simpleprocess= ({}) => {
  const Button1Function = () => {
    alert(` was clicked`);

    const [process, setProcess]=useState(
        {id:1,
        title:"We Make this process simple", 
        description:"Having a website should’nt be a hassle. We make it as simple as possible by doing all of the work for you. Once you choose us, we will walk you the entire process step by step and tailor your site to your every needs! Find out for yourself by clicking the link belw to get started!" , 
        button:"Get Started"}
        )

  //       useEffect(()=>{
  //         const fetchdata= async()=>{

  //         try{
  //             let res = await fetch('')
  //             let data = await res.json()
  //             setProcess(data)
  //           }catch(err){
  //             console.log(err)
  //         }
  //         }
  //         (async ()=> await fetchdata())
  //       }

  //       ),[]
        
  // };
  return (
    <NewRootRootRootRoot>
      <Background>
        <Illustration />
        <FlexColumn>
            {Object.keys(process).map((pro:any)=>(
                <>
                <FlexColumn1 key={pro.id}>
            <Text1>{pro.title}</Text1>
            <Paragraph>
              {pro.description}
            </Paragraph>
          </FlexColumn1>
          <Button1 onClick={() => Button1Function()}>
            <ActiveButton>{pro.button}</ActiveButton>
          </Button1>
                </>
            ))}
          
        </FlexColumn>
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
  padding:100px;
  background-color: rgba(0, 0, 0, 0);
`;
const Background = styled.div`
  width: 1340px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 120px 14px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/3iGZYOzkUjpxOkjtDjZL.png");
`;
const Illustration = styled.div`
  width: 504px;
  height: 480px;
  border-radius: 8px;
  background-color: #ebebeb;
//   margin-right:0px;
position:relative;
left:100px

`;
const FlexColumn = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const FlexColumn1 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  width: 608px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
`;
const Paragraph = styled.div`
  width: 608px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  white-space: pre-wrap;
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
  padding-right: 40px;
  padding-left: 40px;
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
}
