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


const Quikcurry= ()=>{
    return(
        <><div >
                <Header />
            <span className="flex ">
                <Image alt="logo" src={carry} height={200} width={200} />
                <p className="flex items-center" style={{ alignItems: "center" }}>
                    QuikCarry<br />
                </p>
            </span>
            <span className="ml-6 flex align-center">

                <span className="ml-6 w-1/2 flex-wrap">
                    <p>
                        Quik Carry aims to keep its prices lower than any of the other ride-sharing apps in the marketplace.



                    </p>

                    <p>Quik Carry app is a platform providing online services to its users and ride-hailing companies. Customers can book rides through their smartphones, drivers can get ride requests from<br/> an app or panel, and taxi managing niches can operate the business tasks online.
                    </p>
                    <br/>
                </span>
                <Image alt="logo" src={qc1} height={300} width={400} />

            </span>
        </div><div className="">
                <span className="flex">
                    <Image alt="logo" src={driver} height={200} width={200} />
                    <p className="flex items-center" style={{ alignItems: "center" }}>
                        QuikCarry<br />
                        For Drivers
                    </p>
                </span>
                <span className="ml-6">
                    <span className="ml-6">
                        <p>
                            Quik Carry for Drivers is aiming to be the best experience for any driver who is doing ridesharing today!!!
                            <br/>
                            Quik Carry app is a platform providing online services to its users and ride-hailing companies. Customers can book rides through their smartphones, drivers can get ride requests from an app or panel, <br/>and taxi managing niches can operate the business tasks online.

                            Some of the benefits of Partnering with Quik Carry are:
                           <br/> 1. The first month the driver gets 100% of the revenue from each trip.
                            2. After that the driver splits 50% or more of the revenue with Quik Carry


                        </p>

                    </span>
                    <span>
                        <span className="flex">

                        </span>


                    </span>
                </span>
            </div></>
        

 
    )
}
export default Quikcurry