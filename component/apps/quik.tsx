import React from "react";
import dollars from "/public/quikdollars.png"
import Image from "next/image";
import qe from "/public/quikengineer.png"
import carry from "/public/quikcar.png"
import driver from "public/quikdrivers.png"
import qc1 from "/public/quikcarry.png"

export function Quikdollars(){
    return(
        <div className="mt-12">
            <div className="">
             <span className="flex">
                <Image alt="logo" src={dollars} height={200} width={200}/>
                <p className="flex items-center" style={{alignItems:"center"}}>
                QuikDollars<br/>
                QuikSession App for Entertainment
                </p>
                </span>
                <span className="ml-6">
                    <span className="ml-6">
                        <h1><b>Easy to use</b></h1>
                        <p>
                            It's a fast and secure way to send funds on the fly.<br/>The Quik Dollar money Transfer
                            app for Andriod and Apple is a safe, convenient, and easy-to-use tool that can be used to transfer money USA or Abroad.
                            It allows you to send money from the US to almost anywhere in the world, and youn can pay with a ban account.
                            You have to download the app to complete account registration. 95% of our transfers are ready in minutes

                                        </p>
                                            <h1><b>ENDLESS OPTIONS</b></h1>
                                        <p>Sending money is so easy and fast with us. Plus, you can get regular updates and track your money every step o the way, all on the go with the QuikDollar money tranfer appl. ASave your reciever's details to your resend list and make repeated monehy transfers fast through the app.

                                            Send your money with confidence thanks to our encrypted identity verified Know now your Customer(KYC). We use industy-leading technology to protect your money.
                                        </p>
                        </span>
                    <span>
                        <span className="flex">

                    </span>
                    
                    
                    </span>
                </span>
            </div>
           
        </div>
    )
}

export function Quikcarry(){
    return(
        <div>
              <div className="">
             <span className="flex">
                <Image alt="logo" src={carry} height={200} width={200}/>
                <p className="flex items-center" style={{alignItems:"center"}}>
                QuikCarry<br/>
                </p>
                </span>
                <span className="ml-6 flex align-center" >

                    <span className="ml-6">
                        <p>
                        Quik Carry aims to keep its prices lower than any of the other ride-sharing apps in the marketplace.



                                        </p>
                                          
                                        <p>Quik Carry app is a platform providing online services to its users and ride-hailing companies. Customers can book rides through their smartphones, drivers can get ride requests from an app or panel, and taxi managing niches can operate the business tasks online.
</p>
                        </span>
                        <Image alt="logo" src={qc1} height={400} width={800}/>

                </span>
            </div>
            <div className="">
            <span className="flex">
                <Image alt="logo" src={driver} height={200} width={200}/>
                <p className="flex items-center" style={{alignItems:"center"}}>
                QuikCarry<br/>
                For Drivers
                </p>
                </span>
                <span className="ml-6">
                    <span className="ml-6">
                        <p>
                        Quik Carry for Drivers is aiming to be the best experience for any driver who is doing ridesharing today!!!

Quik Carry app is a platform providing online services to its users and ride-hailing companies. Customers can book rides through their smartphones, drivers can get ride requests from an app or panel, and taxi managing niches can operate the business tasks online.

Some of the benefits of Partnering with Quik Carry are:
1. The first month the driver gets 100% of the revenue from each trip.
2. After that the driver splits 50% or more of the revenue with Quik Carry


                                        </p>
                                      
                        </span>
                    <span>
                        <span className="flex">

                    </span>
                    
                    
                    </span>
                </span>
            </div>
        </div>
    )
}