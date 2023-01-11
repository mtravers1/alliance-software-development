import React, { useEffect } from "react";
import { Header } from "../component/header";
import styled from "styled-components";
import { Findname } from "../component/domain/findname";
import { Security } from "../component/domain/security";
import { Getstarted } from "../component/getstarted";
import { Footer } from "../component/footer";
import { useState } from "react";
const Finddomain = ()=>{
  const [perfectdomain, setPerfectdomain]=useState([
    {id:1, 
    backgroundcolor:"", 
    titlecolor:"", 
    titlesize:"", 
    title:"Find the perfect domain name", 
    dcolor:"", 
    dsize:"", 
    dcfont:"", 
    description:"Enter you select domain name and choose any extenion name in the next step", 
    buttoncolor:"green", 
    button:"Search", 
    img:""}
    ])

    const [viewdir, setViewdir]=useState([
      {title:"View our Full App Directory",
      titlesize:"",
      titlecolor:"",
      description:"Our suite includes many full scale appliations and software for hundreds of different uses and benifits. Click the link to view our full directory and see how Alliance Software & Development can help",
      button:"",
      buttoncolor:"",
      img:"",
      }
    ])
    const Button2Function=()=>{
        return('')
    }
    const Button1Function = ()=>{
        return('')
    }

    // const API_URL='http://localhost800/viewdir'

    // useEffect(()=>{
    //   const fetchdata= async()=>{
    //     try{
    //       let res = await fetch(API_URL)
    //       let data = await res.json()
    //       setViewdir(data)
    //     }catch(err){
    //       console.log(err)
    //     }
    //     (async()=>fetchdata())()
    //   }
    // })
    return(
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <div >
            <Header/>
            
            {perfectdomain.map((p,index:any)=>(
                <div  key={index}>
                              <BackgroundRootRootRootRoot style={{backgroundColor:p.backgroundcolor, marginTop:"100px"}}>

                 <NewGroup  >
                <Text1 style={{color:p.titlecolor, fontSize:p.titlesize}} >{p.title}</Text1>
                <Paragraph style={{color:p.dcfont, fontSize:p.dsize}}>
               {p.description}
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
                <Button1 style={{backgroundColor:p.buttoncolor}} onClick={(e) => Button1Function()}>
                  <ActiveButton>{p.button}</ActiveButton>
                </Button1>
              </FlexRow>
            </Container>
            </BackgroundRootRootRootRoot>

                </div>
               
              ))}
      {/* <NewGroup>
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
      </Container> */}
    </div>
    <Findname/>
    <div>
    <NewRootRootRootRootname style={{marginTop:"100px"}}>
      <Backgroundname>
        <Illustrationname />
        <FlexColumnname>
          <Text1name>Already have a Name Domain?</Text1name>
          <Paragraphname>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit
            viverra turpis eu. Pellentesque scelerisque nec enim tempus netus mi
            proin viverra eu. Auctor neque, amet, eget elit. Libero nascetur
            porttitor mattis urna et consectetur. Placerat vulputate eget nam
            habitasse. Faucibus tristique nisl, libero quis cursus eu faucibus
            vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas
            quis orci. Ultricies scelerisque donec sagittis ante tristique
            cursus elementum.
          </Paragraphname>
          <Button1name onClick={(e) => Button1Function()}>
            <ActiveButtonname>Transfer Domain</ActiveButtonname>
          </Button1name>
        </FlexColumnname>
      </Backgroundname>
    </NewRootRootRootRootname>
    </div>
    <Security/>
    <div>
        <Getstarted/>
    </div>
    <Footer/>
    </div>


     
    )
}

export default Finddomain;


const BackgroundRootRootRootRoot = styled.div`
    margin:auto;
    
  width:fit-content;
  height: 432px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
padding: 0px 104px;
border-radius: 16px;
background: #555555;
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
background: #555555;
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


const NewRootRootRootRootname = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
`;
const Backgroundname = styled.div`
  width: 1232px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 120px 104px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/hmHDlS3qQCF3UbkPezF8.png");
`;
const Illustrationname = styled.div`
  width: 504px;
  height: 480px;
  border-radius: 8px;
  background-color: #ebebeb;
`;
const FlexColumnname = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1name = styled.div`
  width: 608px;
  margin: 0px 0px 24px 0px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
`;
const Paragraphname = styled.div`
  width: 608px;
  margin: 0px 0px 40px 0px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
`;
const Button1name = styled.button`
  height: 46px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  padding: 0px;
  padding-right: 24.5px;
  padding-left: 24.5px;
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
const ActiveButtonname = styled.div`
  font-size: 14px;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
