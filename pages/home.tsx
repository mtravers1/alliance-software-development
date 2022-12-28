import React from "react"
import { Header } from "../component/header";
import { Top } from "../component/home/top";
import styled from "styled-components";
import Learn from "../component/home/learnmore";
import { Howitworks } from "../component/home/howitworks";
import { Simpleprocess } from "../component/home/processsimple";
import { Getstarted } from "../component/home/getstarted";
import { Footer } from "../component/footer";

const Home = ()=>{
    const Button2Function = () => {
        alert();
      };
      const Button1Function = () => {
        alert(``);
      };
    return(
        
        <div>
            <Header/>
            <div style={{ width:"fit-content", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Top/>
            <Learn/>
            <div style={{marginTop:"100px"}}>
            <BackgroundRootRootRootRoot>
      <NewGroup>
        <Text1>Find the perfect domain name</Text1>
        <Paragraph>
          Enter your select domain name and choose any extension name in the
          next step (choose between .com, .online, .tech, .site, .net, and more)
        </Paragraph>
      </NewGroup>
      <Container>
        <Text2>Search your domain name</Text2>
        <FlexRow>
          <Button2 onClick={(e) => Button2Function()}>
            <Text3>Com</Text3>
            <ArrowChevronDown
              src={`https://file.rendit.io/n/fdBVqrSuX2i0KdtTouBh.svg`}
            />
          </Button2>
          <Button1 onClick={(e) => Button1Function()}>
            <ActiveButton>Search</ActiveButton>
          </Button1>
        </FlexRow>
      </Container>
    </BackgroundRootRootRootRoot>
    </div>
    <Howitworks/>
    <ValueRootRootRootdir>
      <NewGroupdir>
        <Group2dir>
          <Text1dir>
            View our Full App
            <br />
            Directory
          </Text1dir>
          <Paragraphdir>
            Our suite includes many full scale appliations and software for
            hundreds of different uses and benifits. Click the link to view our
            full directory and see how Alliance Software & Development can help
            you scale your business today!
          </Paragraphdir>
        </Group2dir>
        <Button1dir onClick={() => Button1Function()}>
          <ActiveButtondir>Learn More</ActiveButtondir>
        </Button1dir>
      </NewGroupdir>
      <Illustrationdir />
    </ValueRootRootRootdir>
    <Simpleprocess/>
    </div>
    <ValueRootRootRootsupport>
      <NewGroupsupport>
        <Group2support>
          <Text1support>24/7 Customer Support</Text1support>
          <Text2support>information</Text2support>
        </Group2support>
        <Button1support onClick={() => Button1Function()}>
          <ActiveButtonsupport>Learn More</ActiveButtonsupport>
        </Button1support>
      </NewGroupsupport>
      <Illustrationsupport />
    </ValueRootRootRootsupport>
    <Getstarted/>
    <Footer/>

            </div>

        // </div>
    )
    
}

export default Home;

const BackgroundRootRootRootRoot = styled.div`

  width:fit-content;
  height: 432px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
padding: 0px 104px;
border-radius: 16px;
background-color: #f1bc01;
// justify-content:center
`;
const NewGroup = styled.div`
gap: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Text1 = styled.div`
width: 1024px;
color: #ffffff;
font-size: 64px;
font-weight: 700;
font-family: Inter;
line-height: 88px;
text-align: center;
`;
const Paragraph = styled.div`
width: 608px;
font-size: 16px;
font-family: Inter;
line-height: 32px;
text-align: center;
`;
const Container = styled.div`
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
const Text2 = styled.div`
color: #7f7f7f;
font-size: 16px;
font-family: Inter;
line-height: 32px;
text-align: center;
white-space: nowrap;
`;
const FlexRow = styled.div`
gap: 16px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
const Button2 = styled.button`
width: 118px;
gap: 8px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
padding-top: 11px;
padding-bottom: 11px;
border-width: 0px;
border-radius: 8px;
border-top-width: 1px;
border-right-width: 1px;
border-bottom-width: 1px;
border-left-width: 1px;
border-style: solid;
border-color: #7f7f7f;
box-sizing: content-box;
background: none;
cursor: pointer;
&: hover {
  opacity: 70%;
} ;
`;
const Text3 = styled.div`
width: 56px;
color: #7f7f7f;
font-size: 14px;
font-family: Inter;
line-height: 24px;
`;
const ArrowChevronDown = styled.img`
width: 24px;
height: 24px;
`;
const Button1 = styled.button`
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
background-color: #f1bc01;
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




const ValueRootRootRootdir = styled.div`
  width: 1232px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin:100px
`;
const NewGroupdir = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Group2dir = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1dir = styled.div`
  width: 608px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
`;
const Paragraphdir = styled.div`
  width: 608px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
`;

const ActiveButtondir = styled.div`
  font-size: 14px;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const Illustrationdir = styled.div`
  width: 504px;
  height: 480px;
  border-radius: 8px;
  background-color: #ebebeb;
`;

const Button1dir = styled.button`
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










const ValueRootRootRootsupport = styled.div`
//   width: 1232px;
margin:auto;
width:fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:100px;
margin:0px;

`;
const NewGroupsupport = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Group2support = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1support = styled.div`
  width: 608px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
`;
const Text2support = styled.div`
  width: 608px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
`;
const Button1support = styled.button`
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

const ActiveButtonsupport = styled.div`
  font-size: 14px;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const Illustrationsupport = styled.div`
  width: 504px;
  height: 480px;
  border-radius: 8px;
  background-color: #ebebeb;
`;

