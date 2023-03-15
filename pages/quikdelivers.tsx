import React from "react";
import Header from "../component/header";
import styles from "./upcoming.module.css"
import { Quiksessionent, Quiksessionbussiness, QuikEngineer } from "../component/apps/quiksession";
import Stickman from "../component/apps/stickman";
import { Quikdollars, Quikcarry} from "../component/apps/quik";
import Tip from "../public/tipin.png"
import Image from "next/image";
import qd1 from "../public/qd1.png"
import {Tips} from "../component/apps/tip"
import qddrivers from "../public/qdfordivers.png"
import qdbusiness from "../public/qdforbusiness.png"
import qd from "../public/qd1.png"
import qd2 from "../public/qd2.png"
import qd3 from "../public/qd3.png"
import qd4 from "../public/qd4.png"
import qd5 from "../public/qd5.png"
import qd6 from "../public/qd6.png"
import quikdeliver from "../public/quikdelivers.png"
import deliver from "../public/quikdeliverman.png"











const Deliver = ()=>{
    return(
        <div className={styles.upcoming}>
           <div style={{width:1400}}>
           <Header />
           </div>
           
            <div className="flex">

                <span className="flex">
                    <span className="mr-24">
                        <Image src={qddrivers} height={200} width={700} alt="logo"/>
                    </span>
                    <span>
                    <h1 className=" font-bold border-b-black  border-b-2 text-3xl text-right">Quik Delivers for Drivers</h1>

                <p>
                Quik Delivers is an app constructed to deliver efficient ordering and delivery services to 
customers. The solution is designed to meet the needs of numerous customers and 
smoothen business operations. It comes with modern features that bind up your 
customers and give you an edge over competitors. 
                </p>
                <span className="flex justify-between">
                        <Image src={qd3} height={200} width={200} alt="logo"/>
                        <Image src={qd2} height={200} width={200} alt="logo"/>
                        <Image src={qd4} height={200} width={200} alt="logo"/>

                    </span>
                
                
                </span>
                
                </span>
            
            </div>
       
           
            <div className="flex">

                <span className="flex flex-row-reverse">
                    <span>
                        <Image src={quikdeliver} height={200} width={700} alt="logo"/>
                    </span>
                    <span className="mr-24" >
                    <h1 className=" font-bold border-b-black  border-b-2 text-3xl">Quik Delivers </h1>

                <p>
                Quik Delivers is an app constructed to deliver efficient ordering and delivery 
services to customers. The solution is designed to meet the needs of numerous 
customers and smoothen business operations. It comes with modern features that 
bind up your customers and give you an edge over competitors. 
                </p>
                <span className="flex justify-between text-green-300">
                <p>
                    Browse Restaurants, <br/>Stores Near By
                </p>
                <p>Check Your Order Status</p>
                </span>
                <span className="flex justify-between">
                        <Image src={qd4} height={200} width={200} alt="logo"/>
                        <Image src={qd2} height={200} width={200} alt="logo"/>
                        <Image src={qd3} height={200} width={200} alt="logo"/>

                    </span>
                
                
                </span>
                
                </span>
            
           
          
          


        
</div>
<div className="flex">

                <span className="flex ">
                    <span className="w-1/3">
                        <Image src={qdbusiness} height={200} width={700} alt="logo"/>
                    </span>
                    <span className="w-1/3 p-12">
                    <h1 className=" font-bold border-b-black  border-b-2 text-3xl text-center">Quik Delivers for Business</h1>

                <p>
                Quik Delivers is an app constructed to 
deliver efficient ordering and delivery 
services to customers. The solution is 
designed to meet the needs of numerous 
customers and smoothen business 
operations. It comes with modern 
features that bind up your customers 
and give you an edge over competitors. 
                </p>
                
                
                
                </span>
                <span className="flex ">
                        <Image src={deliver} height={200} width={500} alt="logo"/>
                      

                    </span>
                
                </span>
            
            </div>
           
        </div>
    )
}

export default Deliver