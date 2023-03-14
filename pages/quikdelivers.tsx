import React from "react";
import Header from "../component/header";
import styles from "./upcoming.module.css"
import { Quiksessionent, Quiksessionbussiness, QuikEngineer } from "../component/apps/quiksession";
import Stickman from "../component/apps/stickman";
import { Quikdollars, Quikcarry} from "../component/apps/quik";
import Tip from "../public/tipin.png"
import Image from "next/image";
import {Tips} from "../component/apps/tip"
const Deliver = ()=>{
    return(
        <div className={styles.upcoming}>
           <div style={{width:1400}}>
           <Header />
           </div>
           
            <div className="flex">

                <span className="flex">
                    <span>
                        <Image src={Tip} height={200} width={700} alt="logo"/>
                    </span>
                    <span>
                    <h1 className=" font-bold">Quik Delivers for Drivers</h1>

                <p>
                Quik Delivers is an app constructed to deliver efficient ordering and delivery services to 
customers. The solution is designed to meet the needs of numerous customers and 
smoothen business operations. It comes with modern features that bind up your 
customers and give you an edge over competitors. 
                </p>
                <span className="flex justify-between">
                        <Image src={Tip} height={200} width={200} alt="logo"/>
                        <Image src={Tip} height={200} width={200} alt="logo"/>
                        <Image src={Tip} height={200} width={200} alt="logo"/>

                    </span>
                
                
                </span>
                
                </span>
            
            </div>
       
           
            <div className="flex">

                <span className="flex flex-row-reverse">
                    <span>
                        <Image src={Tip} height={200} width={700} alt="logo"/>
                    </span>
                    <span>
                    <h1 className=" font-bold">Quik Delivers </h1>

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
                        <Image src={Tip} height={200} width={200} alt="logo"/>
                        <Image src={Tip} height={200} width={200} alt="logo"/>
                        <Image src={Tip} height={200} width={200} alt="logo"/>

                    </span>
                
                
                </span>
                
                </span>
            
           
          
          


        
</div>
<div className="flex">

                <span className="flex ">
                    <span className="w-1/3">
                        <Image src={Tip} height={200} width={700} alt="logo"/>
                    </span>
                    <span className="w-1/3">
                    <h1 className="text-center font-bold mb-20">Quik Delivers for Business</h1>

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
                        <Image src={Tip} height={200} width={500} alt="logo"/>
                      

                    </span>
                
                </span>
            
            </div>
           
        </div>
    )
}

export default Deliver