import React from "react";
import Header from "../component/header";
import styles from "./upcoming.module.css"
import { Quiksessionent, Quiksessionbussiness, QuikEngineer } from "../component/apps/quiksession";
import Stickman from "../component/apps/stickman";
import { Quikdollars, Quikcarry} from "../component/apps/quik";
import Tip from "../public/tipin.png"
import Image from "next/image";
const Upcoming = ()=>{
    return(
        <div className={styles.upcoming}>
           <div style={{width:1400}}>
           <Header />
           </div>
           
            <div>
            <h1 className="text-center font-bold">Future Development Project</h1>

                <span className="flex">
                    <span>
                        <Image src={Tip} height={200} width={400} alt="logo"/>
                    </span>
                    <span>
                <p>This groundbreaking app now allows Bartenders, Dance Club Security Guards, and Dancers to recieve their tips electronically from patrons. NO MORE ATMs. The inconvenience and security issues of having to go to an ATM when a crowded club are not eliminated with the Tip In App.</p>
                <ul className="justify-start flex flex-col">
                    <li>
                        Tip in App
                    </li>
                    <li>
                        Tip in App for Business
                    </li>
                    <li>
                        Tip in App for Entertainers
                    </li>
                    <li>
                        I Demand Beauti
                    </li>
                    <li>
                        I Demand Beauti for Business
                    </li>
                </ul>
                </span>
                </span>
            
            </div>


        

            <div className="flex justify-center mt-6 flex-col">
                <span>
                <h1 className="text-center">Quik Assistant</h1>
                <h2 className="text-center">24/7 Customer Service Coming Soon</h2>
                </span>

                <div className="flex mt-12">
                    <span className="w-1/2 bg-slate-300	rounded border-black border h-96">

                    </span>
                    <p className="flex w-1/2">
                    ASD is changing way how user get assistance with their challenges and issues with apps. All of ASD Apps, Quik Influence Product Owners, and Private Websites will be utilizing Quik Assistant.
Imagine requesting a ride with Quik Carry our Ride Sharing app and the driver doesn’t 
speak the same language as you. Well Quik Assistant takes over by helping you communicate with that driver either with a video or voice call with you and the driver to ensure a smooth trip.
Quik Assistant is just making apps we build make sense to the users who use them.
                    </p>

                </div>
               
                {/* <p className="">ASD is changing way how user get assistance with their challenges and issues with apps. All of ASD Apps, Quik Influence Product Owners, and Private Websites will be utilizing Quik Assistant.
Imagine requesting a ride with Quik Carry our Ride Sharing app 
and the driver doesn’t speak the same language as you. Well Quik Assistant takes over by helping you communicate with that driver either with a video or voice call with you and the driver to ensure a smooth trip.
Quik Assistant is just making apps we build make sense to the 
users who use them.</p> */}
            </div>
            <div>
            <Quiksessionent/>
            <Quiksessionbussiness/>
            <QuikEngineer/>
            <Stickman/>
            <Quikdollars/>
            <Quikcarry/>

            </div>
        </div>
    )
}

export default Upcoming