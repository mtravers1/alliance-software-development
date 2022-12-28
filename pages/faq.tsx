import React from "react";
import styled from "styled-components";
import { Hosting } from "../component/Faq/hosting";
import { Questions } from "../component/Faq/questions";
import { Footer } from "../component/footer";
import { Header } from "../component/header";


const Faq = ()=>{
    const Button = ()=>{
        return ('')
    }
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <Header/>
            <div>
            <HeroRootRootRoot style={{marginTop:"100px", marginBottom:"100px"}}>
      <NewGroup>
        <Text1>How can we Help?</Text1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
          aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Paragraph>
      </NewGroup>
      <Illustration />
    </HeroRootRootRoot>
  
            </div>
            <div>
                <Questions/>
            </div>
            <div>
            <TabsRootRootRootl style={{marginTop:"100px"}}>
      <NewGroupl style={{marginTop:"50px"}}>
        <Text1l>Hosting</Text1l>
        <Activelabell />
      </NewGroupl>
      <Text2l>Payments</Text2l>
      <Text2l>Services</Text2l>
      <Text2l>Refund</Text2l>
      <Text2l>Contact</Text2l>
    </TabsRootRootRootl>

            </div>
            <Hosting/>
            <div style={{marginTop:"100px"}}>
            <BackgroundRootRootRootc>
      <Paragraphc>
        If you have more questions <br />
        please contact us
      </Paragraphc>
      <Button1c onClick={() => Button()}>
        <ActiveButtonc>Contact Us</ActiveButtonc>
      </Button1c>
    </BackgroundRootRootRootc>
            </div>
        <Footer/>
        </div>
    )
}
export default Faq;


const BackgroundRootRootRootc = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 80px 104px 88px 104px;
  border-radius: 16px;
  background-color: #f7fafe;
`;
const Paragraphc = styled.div`
  width: 1024px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
`;
const Button1c = styled.button`
  height: 48px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  margin: 0px 426px 0px 0px;
  padding: 0px;
  padding-right: 42.5px;
  padding-left: 42.5px;
  border-width: 0px;
  border-radius: 8px;
  box-sizing: content-box;
  background-color: #555555;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ActiveButtonc = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
















const Text2l = styled.div`
  color: #e6e6e6;
  font-size: 24px;
  font-family: Inter;
  line-height: 32px;
  white-space: nowrap;
`;
const TabsRootRootRootl = styled.div`
  width: 662px;
  display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`;
const NewGroupl = styled.div`
gap: 6px;
display: flex;
flex-direction: column;
justify-content: center;
align-self: center;
align-items: center;
`;
const Text1l = styled.div`
color: #2e2e2e;
font-size: 24px;
font-family: Inter;
line-height: 32px;
white-space: nowrap;
`;
const Activelabell = styled.div`
width: 80px;
height: 2px;
background-color: #555555;
`;












const BackgroundRootRootRoot1 = styled.div`
  height: 432px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 104px;
  border-radius: 16px;
  background-color: #555555;
`;
const NewGroup1 = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text2 = styled.div`
  width: 1024px;
  color: #ffffff;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
`;
const Paragraph1 = styled.div`
  width: 608px;
  color: #e6e6e6;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
`;
const Container1 = styled.div`
  width: 784px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 7px 7px 7px 23px;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #cccccc;
  background-color: #ffffff;
`;
const Text11 = styled.div`
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  white-space: nowrap;
`;
const Button11 = styled.button`
  height: 48px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  padding-right: 36.5px;
  padding-left: 36.5px;
  border-width: 0px;
  border-radius: 8px;
  box-sizing: content-box;
  background-color: #555555;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ActiveButton1 = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;


const HeroRootRootRoot = styled.div`
  width: 1232px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const NewGroup = styled.div`
  gap: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  margin: 80px 0px 0px 0px;
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
`;
const Illustration = styled.div`
  width: 504px;
  height: 520px;
  border-radius: 8px;
  background-color: #ebebeb;
`;
