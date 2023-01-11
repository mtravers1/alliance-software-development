
import React, { useEffect } from "react"
import styled from "styled-components"
import { useState } from "react";
import data from '/data/db.json'

interface domainhostin{
  id:number
  img:string
  title:string
  descriptions:string
  foot:string
}
interface uniquefeatures{
  id:number
  img:string
  title:string
  descriptions:string
  foot:string
}
const Learn= ()=>{
    const Text2Function = () => {
        alert();
      };
      const ArrowChevronRight2Function = () => {
        alert(``);
      };

    //   const [uniquefeatures, setUniquefeatures]= useState([
    //     {id:1, img:"", title:"New Unique Features", descriptions:"Lorem ipsum dolor sit amet, consecte tur adipiscing elit ut aliquam.", foot:"learn more" }
    //  ])
     const [uniquefeatures, setUniquefeatures]= useState(data.uniquefeatures)

     const [domainhosting, setDomainhosting]= useState([
        {id:1, img:"", title:"Domain Hosting", descriptions:"Lorem ipsum dolor sit amet, consecte tur adipiscing elit ut aliquam.", foot:"learn more" }
     ])
    // const [domainhosting, setDomainhosting]= useState(data.domainhosting)

    //  const [intergration, setIntergration]= useState([
    //     {id:1, img:"", title:"Intergration", descriptions:"Lorem ipsum dolor sit amet, consecte tur adipiscing elit ut aliquam.", foot:"learn more" }
    //  ])
    const [intergration, setIntergration]= useState(data.intergration)

    //  useEffect(()=>{
    //   const fetchdata=async()=>{
    //     try{
    //       let res = await fetch('http://localhost:8000/uniquefeatures')
    //       let res1 =await fetch('http://localhost:8000/domainhosting')
    //       let res2 = await fetch('http://localhost:8000/intergration')
    //       let data = await res.json()
    //       let data1= await res1.json()
    //       let data2 = await res2.json()
    //       setUniquefeatures(data)
    //       setIntergration(data2)
    //       setDomainhosting(data1)
    //     }catch(err){
    //       console.log(err)
    //     }
    //   }
    //   (async()=>fetchdata())
    //  },[])




    //  useEffect(()=>{
    //   fetch('http://localhost:8000/uniquefeatures')
    //   .then(res=>{
    //     return res.json()
    //   })
    //   .then(data=>{
    //     setUniquefeatures(data)
    //   })
    //  },[])
    //  useEffect(()=>{
    //   fetch('http://localhost:8000/domainhosting')
    //   .then(res=>{
    //     return res.json()
    //   })
    //   .then(data=>{
    //     setDomainhosting(data)
    //   })
    //  },[])
    //  useEffect(()=>{
    //   fetch('http://localhost:8000/intergration')
    //   .then(res=>{
    //     return res.json()
    //   })
    //   .then(data=>{
    //     setIntergration(data)
    //   })
    //  },[])
    return(
<ValueRootRootRoot style={{paddingTop:"50px"}}>

    {uniquefeatures.map((unique:uniquefeatures,index:any)=>(
        <>
            <IconPlaceholder2
            src={`https://file.rendit.io/n/9GXiNiatoAlid9X61UMQ.svg`}
            key={index} />
            <NewGroup3>
                <Group9>
                    <Text1>{unique.title}</Text1>
                    <Paragraph>
                        {unique.descriptions}
                    </Paragraph>
                </Group9>
                <Group10>
                    <Text2 onClick={() => Text2Function()}>{unique.foot}</Text2>
                    <ArrowChevronRight2
                        // src={`https://file.rendit.io/n/4Y62m9iPZ48gltaG1Ue6.svg`}
                        onClick={() => ArrowChevronRight2Function()} />
                </Group10>
            </NewGroup3>
        </>

    ))}
      {domainhosting.map((domain:domainhostin, index: any)=>(
           
           <><IconPlaceholder2
            src={`https://file.rendit.io/n/9GXiNiatoAlid9X61UMQ.svg`}
          key={domain.id}/>
          <NewGroup3>
            <Group9>
              <Text1>{domain.title}</Text1>
              <Paragraph>
                {domain.descriptions}
              </Paragraph>
            </Group9>
            <Group10>
              <Text2 onClick={(e) => Text2Function()}>{domain.foot}</Text2>
              <ArrowChevronRight2
                onClick={(e) => ArrowChevronRight2Function()}
              />
            </Group10>
          </NewGroup3>
          </>
      ))}
      {intergration.map((inter: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; descriptions: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; foot: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=>(
        <>
        <IconPlaceholder2
        src={`https://file.rendit.io/n/9GXiNiatoAlid9X61UMQ.svg`}
      key={inter.id}/>
      <NewGroup3>
        <Group9>
          <Text1>{inter.title}</Text1>
          <Paragraph>
            {inter.descriptions}
       </Paragraph>
        </Group9>
        <Group10>
          <Text2 onClick={(e) => Text2Function()}>{inter.foot}</Text2>
          <ArrowChevronRight2
        // src={`https://file.rendit.io/n/9GXiNiatoAlid9X61UMQ.svg`}
        onClick={(e) => ArrowChevronRight2Function()}
          />
        </Group10>
      </NewGroup3>
        </>
      ))}
      
    </ValueRootRootRoot>
    )
}
export default Learn;


const IconPlaceholder2 = styled.img`
  width: 80px;
  height: 80px;
  align-self: flex-start;
`;
const NewGroup3 = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
const Group9 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  width: 304px;
  color: #2e2e2e;
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  line-height: 32px;
`;
const Paragraph = styled.div`
  width: 304px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
`;
const Group10 = styled.div`
  width: 304px;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Text2 = styled.button`
  padding: 0px;
  color: #555555;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
  border-width: 0px;
  box-sizing: content-box;
  background: none;
  cursor: pointer;
`;
const ArrowChevronRight2 = styled.button`
  width: 24px;
  height: 24px;
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  background-color: transparent;
  background: none;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/4Y62m9iPZ48gltaG1Ue6.svg");
  cursor: pointer;
  &: hover {
    opacity: 70%;
  } ;
`;
const ValueRootRootRoot = styled.div`
//   width: 1232px;
// width:fit-content;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;