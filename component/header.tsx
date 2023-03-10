import React from "react";
import styles from './header.module.css';
import Link from "next/link";
import data from '../data/db.json'
import { useState,useEffect } from "react";
import { useRouter } from 'next/router'


interface header{
  nav1:string
  nav2:string
  nav3:string
  nav4:string
  nav5:string
  navbutton:string
  size:string
  color:string
  ffamily:string
  navbuttoncolor:string
}


const Header = ({}) => {

  const router=useRouter()

const [nav, setNav]=useState(data.nav)
//   const API_URL='http://localhost:8000/nav'
//   useEffect(()=>{
//     const fetchdata = async()=>{
//       try{
//         let res = await fetch(API_URL)
//         let data = await res.json()
//         setNav(data)
//       }catch(err){
//         console.log(err)
//       }
//     }
//   (async()=>fetchdata())()
//   },[])

  const quik = ()=>{
    router.push('/upcoming')

  }

  return (
    <div className={styles.head}>
  
      {nav.map((h:header)=>(
        <>

        <div className={"flex justify-between "} >
        {/* <Link href="./"> */}
          
          <img className={styles.img} src={`https://file.rendit.io/n/LWKypLKsROHg9A8UFfGE.png`} />
        
        {/* </Link> */}
        <span className="flex justify-between" style={{fontSize:h.size, color:h.color, fontFamily:h.ffamily}}>
        <Link href="./apps">Apps</Link>
            <select name="apps" id="Apps" >
              
           
              <option value="quik">
              {/* {h.nav1} */}
              Apps
                </option>
                <option onClick={quik}>
                  
                 QuikSession
                </option>
                <option>
                  Quik Delivers
                </option>
                <option>
                  Quik Dollars
                </option>
                <option>
                  StickMan VIP
                </option>
                <option>
                  Quik Carry
                </option>

                </select>
                </span>
        
        <span  style={{fontSize:h.size, color:h.color, fontFamily:h.ffamily, marginLeft:25, marginRight:25}}>
            <select className="border-8" >
            <option>{h.nav2}</option>
            <option>
              Iphone/Andriod
            </option>
            <option>
              Ipad/Tablet
            </option>

            </select>
            </span>
      
        <span style={{fontSize:h.size, color:h.color, fontFamily:h.ffamily}}><Link href="./upcoming">{h.nav3}</Link></span>
        <span style={{fontSize:h.size, color:h.color, fontFamily:h.ffamily}}><Link href="./aboutus">{h.nav4}</Link></span>
        <span style={{fontSize:h.size, color:h.color, fontFamily:h.ffamily}}>{h.nav5}</span>
     
      </div>
      </>
      ))}
       
      {/* <Container>

        <Link href="./"><Image1 src={`https://file.rendit.io/n/LWKypLKsROHg9A8UFfGE.png`} /></Link>
        <Text1>
            <option>Hosting
                </option></Text1>
        
        <ArrowChevronDown
          src={`https://file.rendit.io/n/b4AmT9sRKKNjCNguc5XR.svg`}
        />
        <Text1>
            <option>Domain</option></Text1>
        <ArrowChevronDown
          src={`https://file.rendit.io/n/b4AmT9sRKKNjCNguc5XR.svg`}
        />
        <Text3>Email</Text3>
        <Text3>Website Builder</Text3>
        <Text5>Pricing</Text5>
        <Button1 >
          <Link href="./login"><ActiveButton>Login</ActiveButton></Link>
        </Button1>
      </Container> */}
    </div>
  );
};

export default Header