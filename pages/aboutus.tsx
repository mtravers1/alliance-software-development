import React from "react";
import styled from "styled-components";
import { Reviews } from "../component/aboutus/reviews";
import { Story } from "../component/aboutus/story";
import { Getstarted } from "../component/getstarted";
import Header from "../component/header";
import { Footer } from "../component/footer";
import styles from './aboutus.module.css'
const Aboutus = ()=>{
    return (
        




        <div className={styles.about} >
        <Header/>
       
        <div className="items-center flex">
            <div className={styles.abouthead} style={{marginTop:"100px", marginBottom:"100px"}}>
      <NewGroup className="">
  
        <h1>About Alliance Software & Development</h1>
        <p>
        Alliance Software Development aka ASD was founded on September 9th 2018 when Rashad “Quik V” Campbell was introduced to Amen Moja Ra by his father Glen “Stickman” Campbell.
Quik had a vision to build an app that artists could use to book music studios anytime anywhere. That was the birth of our first app QuikSession. When no one believed Quik’s vision he always believed in himself. And when the right person came along like Amen and he listened to Quik’s idea it just made sense. And with that idea and his charisma the inspiration for a software company was born.
Amen Moja Ra has over 20 years of experience building software and websites for some of the worlds most well known fortune 500 companies. Amen Moja Ra has work for Accenture, AOL, Care-first/Blue Cross Blue Shield, IBM, Marriott, FAA, NASA, Wells Fargo, Bank of America, The Veterans Administration, and Sonesta Hotels, just to name a few. His goal is to build software that connects to people.
Stickman is the type of guy who cares about the future. He strives hard to make alliances, and wants the best for everyone. His biggest goal is to see ASD as the world’s leader in Software Development, E-Commerce, Charity, and Social Influencing.
Alliance Software Development is changing the world, changing lives, and hopes to change you for the better. We will never compromise doing the right thing for convince for anyone or anything no matter what. (edited)
        </p>
      </NewGroup>
      <Illustration />
    </div>
        </div>
        <Story/>
        <div className="flex justify-center">
          
        <BackgroundRootRootRoota style={{marginTop:"100px", marginBottom:"100px"}}>
      <NewGroupa style={{display:"flex", justifyContent:"items-center"}}>
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
        <h1>20k</h1>
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