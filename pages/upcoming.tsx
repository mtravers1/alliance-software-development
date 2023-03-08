import React from "react";
import Header from "../component/header";
import styles from "./upcoming.module.css"
const Upcoming = ()=>{
    return(
        <div className={styles.upcoming}>
           <div style={{width:1400}}>
           <Header />
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

        </div>
    )
}

export default Upcoming