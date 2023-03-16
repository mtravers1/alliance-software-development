import React from "react";
import { Quiksessionent, Quiksessionbussiness, QuikEngineer } from "../component/apps/quiksession";
import Header from "../component/header";
import { Quikcarry } from "../component/apps/quik";
import Image from "next/image";
import qe from "/public/quikengineer.png"
import carry from "/public/quikcar.png"
import driver from "public/quikdrivers.png"
import qc1 from "/public/quikcarry.png"
import styles from "./upcoming.module.css"
import qc2 from "/public/qc1.jpg"
import qc3 from "/public/qc2.jpg"
import qc4 from "/public/qc3.jpg"
import qc5 from "/public/qc5.jpg"
import qcman from "/public/qc6.jpg" 



const Quikcurry= ()=>{
    return(
        <><div className="w-screen">
                <Header />
                <div className="flex flex-col">
                
            <span className="align-center items-center flex flex-col ">

                <span className=" flex-wrap items-center border-black border w-3/4 rounded-2xl">
                <span className="flex justify-center  ">
                <Image alt="logo" src={carry} height={200} width={200} />
                
            </span>
            <p className="flex items-center justify-center font-bold text-2xl text-purple-600" style={{ alignItems: "center" }}>
                    QuikCarry<br />
                </p>
                    <p className="text-grey-700 font-bold">
                        Quik Carry aims to keep its prices lower than any of the other ride-sharing apps in the marketplace.



                    </p>

                    <p className="text-grey-500 font-bold">Quik Carry app is a platform providing online services to its users and ride-hailing companies. Customers can book rides through their smartphones, drivers can get ride requests from<br/> an app or panel, and taxi managing niches can operate the business tasks online.
                    </p>
                    <br/>
                
                <span className="top-3.5 flex justify-around flex-wrap">
                <Image alt="logo" src={qcman} height={300} width={400} />
                <Image alt="logo" src={qc1} height={200} width={700} />

                </span>
                </span>
            </span>
        </div><div className="flex flex-col justify-center items-center align-center border-black mt-24">
                <div className="border-black border w-3/4 rounded-2xl align-center ">
                <span className="align-center items-center flex flex-col  ">

                    <Image alt="logo" src={driver} height={200} width={200} />
                    <p className="flex items-center font-bold text-2xl" style={{ alignItems: "center" }}>
                        QuikCarry<br />
                        For Drivers
                    </p>
                </span>
                <span className="flex">
                    <span className="">
                        <p>
                            Quik Carry for Drivers is aiming to be the best experience for any driver who is doing ridesharing today!!!
                            <br/>
                            Quik Carry app is a platform providing online services to its users and ride-hailing companies. Customers can book rides through their smartphones, drivers can get ride requests from an app or panel, <br/>and taxi managing niches can operate the business tasks online.

                            Some of the benefits of Partnering with Quik Carry are:
                           <br/> 1. The first month the driver gets 100% of the revenue from each trip.
                            2. After that the driver splits 50% or more of the revenue with Quik Carry


                        </p>

                    
                    <span>
                        <span className="flex justify-between flex-wrap">
                        <Image alt="logo" src={qc2} height={200} width={200} />
                        <Image alt="logo" src={qc3} height={200} width={200} />
                        <Image alt="logo" src={qc3} height={200} width={200} />
                        <Image alt="logo" src={qc2} height={200} width={200} />

                        </span>
                        </span>



                    </span>
                </span>
                </div>
                </div>
            </div></>
        

 
    )
}
export default Quikcurry