import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

export const Howitworks = ({}) => {
  const Button1Function = () => {
    alert(` was clicked`);
  };

  const [howitwork, setHowitwork]=useState([
    {id:1, title:"How it works", description:"", pricing:"Pricing", title1:"Custom Site Design and Hosting",
     desciption1:"This includes you site design and hosting services:", 
     rate:"$1000 @ $ 89.99/mo", select:"Select", option1:"1 Website", option2:"Continious Updates", option3:"1 Domain Name", option4:"Feature", option5:"1 Email account", option6:"Feature"}
  ])
  useEffect(()=>{
    fetch('http://localhost:8000/howitworks')
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      setHowitwork(data)
    })
   },[])
                     
  return (
    <BackgroundRootRootRoot style={{marginTop:"50px"}}>
      <Container>
        {howitwork.map(how=>(
            <>
             <HowItWorks>{how.title}</HowItWorks>
        <Paragraph>
          {how.description}
        </Paragraph>
        <Container1>
          <Text1>{how.pricing}</Text1>
        </Container1>
        <Text2>{how.title1}</Text2>
        <FlexColumn>
          <Text3>{how.rate}</Text3>
          <Paragraph1>
            {how.desciption1}
          </Paragraph1>
        </FlexColumn>
        <Button1 onClick={() => Button1Function()}>
          <ActiveButton>{how.select}</ActiveButton>
        </Button1>
        <FlexRow>
          <FlexRow1>
            <Checkmark
              src={`https://file.rendit.io/n/cMg6teKqMuozqvxy8480.svg`}
            />
            <Text4>{how.option1}</Text4>
          </FlexRow1>
          <FlexRow1>
            <Checkmark
              src={`https://file.rendit.io/n/cMg6teKqMuozqvxy8480.svg`}
            />
            <Text4>{how.option2}</Text4>
          </FlexRow1>
        </FlexRow>
        <FlexRow3>
          <FlexRow1>
            <Checkmark
              src={`https://file.rendit.io/n/cMg6teKqMuozqvxy8480.svg`}
            />
            <Text4>{how.option3}</Text4>
          </FlexRow1>
          <FlexRow1>
            <Checkmark
              src={`https://file.rendit.io/n/cMg6teKqMuozqvxy8480.svg`}
            />
            <Text4>{how.option4}</Text4>
          </FlexRow1>
        </FlexRow3>
        <FlexRow6>
          <FlexRow1>
            <Checkmark
              src={`https://file.rendit.io/n/cMg6teKqMuozqvxy8480.svg`}
            />
            <Text4>{how.option5}</Text4>
          </FlexRow1>
          <FlexRow1>
            <Checkmark
              src={`https://file.rendit.io/n/cMg6teKqMuozqvxy8480.svg`}
            />
            <Text4>{how.option5}</Text4>
          </FlexRow1>
        </FlexRow6>
            </>
        ))}

        {/* <HowItWorks>How it Works </HowItWorks>
        <Paragraph>
          Enter your select domain name and choose any extension name in the
          next step (choose between .com, .online, .tech, .site, .net, and more)
        </Paragraph>
        <Container1>
          <Text1>Pricing</Text1>
        </Container1>
        <Text2>Custom Site Design & Hosting</Text2>
        <FlexColumn>
          <Text3>$1000 @ $89.99/mo</Text3>
          <Paragraph1>
            This includes your site design and hosting services!
          </Paragraph1>
        </FlexColumn>
        <Button1 onClick={() => Button1Function()}>
          <ActiveButton>Select</ActiveButton>
        </Button1>
        <FlexRow>
          <FlexRow1>
            <Checkmark
              src={`https://file.rendit.io/n/cMg6teKqMuozqvxy8480.svg`}
            />
            <Text4>1 Website</Text4>
          </FlexRow1>
          <FlexRow1>
            <Checkmark
              src={`https://file.rendit.io/n/cMg6teKqMuozqvxy8480.svg`}
            />
            <Text4>Continious Updates</Text4>
          </FlexRow1>
        </FlexRow>
        <FlexRow3>
          <FlexRow1>
            <Checkmark
              src={`https://file.rendit.io/n/cMg6teKqMuozqvxy8480.svg`}
            />
            <Text4>1 Domain Name</Text4>
          </FlexRow1>
          <FlexRow1>
            <Checkmark
              src={`https://file.rendit.io/n/cMg6teKqMuozqvxy8480.svg`}
            />
            <Text4>Feature</Text4>
          </FlexRow1>
        </FlexRow3>
        <FlexRow6>
          <FlexRow1>
            <Checkmark
              src={`https://file.rendit.io/n/cMg6teKqMuozqvxy8480.svg`}
            />
            <Text4>1 Email account</Text4>
          </FlexRow1>
          <FlexRow1>
            <Checkmark
              src={`https://file.rendit.io/n/cMg6teKqMuozqvxy8480.svg`}
            />
            <Text4>Feature</Text4>
          </FlexRow1>
        </FlexRow6> */}
      </Container>
    </BackgroundRootRootRoot>
  );
};

const FlexRow1 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Checkmark = styled.img`
  width: 24px;
  height: 24px;
`;
const Text4 = styled.div`
  width: 256px;
  color: #7f7f7f;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24px;
`;
const BackgroundRootRootRoot = styled.div`
width:fit-content;
// width:100%;
// position:relative;
// left:-40px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding:150px;
  background-color: #f7fafe;
`;
const Container = styled.div`
  height: 859px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 32px 0px;
  border-radius: 8px;
  background-color: #ffffff;
`;
const HowItWorks = styled.div`
  width: 1024px;
  align-self: flex-end;
  margin: 0px 55px 16px 0px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
  white-space: pre-wrap;
`;
const Paragraph = styled.div`
  width: 608px;
  align-self: flex-end;
  margin: 0px 263px 33px 0px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
`;
const Container1 = styled.div`
//   height: 23px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 36.2px 0px;
  padding: 12px 68.2px 11px 68px;
  border-radius: 8px;
  background-color: #f1bc01;
`;
const Text1 = styled.div`
  width: 999px;
  height: 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
`;
const Text2 = styled.div`
  width: 999px;
  height: 23px;
  margin: 0px 0px 11.5px 0px;
  color: #2e2e2e;
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
`;
const FlexColumn = styled.div`
  width: 999px;
  height: 109px;
  position: relative;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 35.9px 0px;
  padding: 0px 68.1px;
`;
const Text3 = styled.div`
  width: 999px;
  height: 63.1px;
  left: 68px;
  top: 45.5px;
  position: absolute;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
`;
const Paragraph1 = styled.div`
  width: 999px;
  height: 45.9px;
  position: relative;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
`;
const Button1 = styled.button`
  height: 34.42718505859375px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  margin: 0px 0px 51.6px 68px;
  padding: 0px;
  padding-right: 478px;
  padding-left: 478px;
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
const FlexRow = styled.div`
  width: 847px;
  gap: 52px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 36px 0px;
  padding: 0px 144px;
`;
const FlexRow3 = styled.div`
  width: 847px;
  gap: 55px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 36px 0px;
  padding: 0px 144px;
`;
const FlexRow6 = styled.div`
  width: 847px;
  gap: 55px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 144px;
`;
