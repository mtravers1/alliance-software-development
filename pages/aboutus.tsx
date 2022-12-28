import React from "react";
import styled from "styled-components";
import { Reviews } from "../component/aboutus/reviews";
import { Story } from "../component/aboutus/story";
import { Getstarted } from "../component/getstarted";
import { Header } from "../component/header";
import { Footer } from "../component/footer";

const Aboutus = ()=>{
    return (
        




        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <Header/>
        <div>
            <HeroRootRootRoot style={{marginTop:"100px", marginBottom:"100px"}}>
      <NewGroup>
        <Text1>About Alliance Software & Development</Text1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
          aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
          <br />
          <br />
          rttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
          aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Paragraph>
      </NewGroup>
      <Illustration />
    </HeroRootRootRoot>
        </div>
        <Story/>
        <div>
        <BackgroundRootRootRoota style={{marginTop:"100px", marginBottom:"100px"}}>
      <NewGroupa>
        <Text1a>2k</Text1a>
        <Text2a>Web Installed</Text2a>
      </NewGroupa>
      <NewGroup1a>
        <Text1a>20M+</Text1a>
        <ActiveUsersa>Active Users </ActiveUsersa>
      </NewGroup1a>
      <NewGroup2a>
        <K2>1k </K2>
        <Text2a>New User Sign up everyday</Text2a>
      </NewGroup2a>
      <NewGroup3a>
        <Text1>20k</Text1>
        <Text2a>Happy Users</Text2a>
      </NewGroup3a>
    </BackgroundRootRootRoota>
        </div>
        <Reviews/>
        <div>
        <WorldDataRootRootRoot style={{marginTop:"100px", marginBottom:"100px"}}>
      <Text1b>Hostingan Cover Around the World</Text1b>
      <Paragraphb>
        Enter your select domain name and choose any extension name in the next
        step (choose between .com, .online, .tech, .site, .net, and more)
      </Paragraphb>
      <FlexColumn>
        <Avatar src={`https://file.rendit.io/n/xVah8unMa3MJwdTau0sg.svg`} />
      </FlexColumn>
    </WorldDataRootRootRoot>
  
        </div>
        <Getstarted/>
        <Footer/>
        </div>
    )
}

export default Aboutus;


const WorldDataRootRootRoot = styled.div`
  height: 864px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1b = styled.div`
  width: 1024px;
  margin: 0px 0px 24px 0px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
`;
const Paragraphb = styled.div`
  width: 608px;
margin: 0px 0px 40px 0px;
color: #7f7f7f;
font-size: 16px;
font-family: Inter;
line-height: 32px;
text-align: center;
`;
const FlexColumn = styled.div`
gap: 0px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 72px 156px 104px 156px;
background-size: cover;
background-image: url("https://file.rendit.io/n/pPdK2Chs8boHO4YeQyd7.svg");
`;
const Avatar = styled.img`
width: 920px;
height: 384px;
`;




const Text1a = styled.div`
  color: #ffffff;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
  white-space: nowrap;
`;
const Text2a = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
  white-space: nowrap;
`;
const BackgroundRootRootRoota = styled.div`
  width: 1154px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 80px 84px 80px 94px;
  border-radius: 16px;
  background-color: #555555;
`;
const NewGroupa = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 174px 0px 0px;
`;
const NewGroup1a = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 113px 0px 0px;
`;
const ActiveUsersa = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 45px;
  color: #ffffff;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
  white-space: pre-wrap;
`;
const NewGroup2a = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 146px 0px 0px;
`;
const K2 = styled.div`
  align-self: flex-end;
  margin: 0px 70px 0px 0px;
  color: #ffffff;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
  white-space: pre-wrap;
`;
const NewGroup3a = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;






















const HeroRootRootRoot = styled.div`
  width: 1232px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const NewGroup = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  margin: 0px 0px 76px 0px;
`;
const Text1 = styled.div`
  width: 608px;
  color: #2e2e2e;
  font-size: 48px;
  font-weight: 700;
  font-family: Inter;
  line-height: 63.98400115966797px;
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