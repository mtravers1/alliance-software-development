import React from "react";
import Image from "next/image";
import stick from "/public/stick.png"
import stick1 from "/public/stick1.png"
import car1 from "/public/car1.png"
import car2 from "/public/car2.png"
import car3 from "/public/car3.png"
import car4 from "/public/car4.png"
import car5 from "/public/car5.png"
import car6 from "/public/car6.png"
import Header from "../component/header";
import styles from "./stickman.module.css"

const Stickman = ()=>{
    return(
        <div >
            <Header/>
            <div className={styles.stickman}>
            <div className="flex justify-center" >
            <span className="flex ">
                <Image objectFit="none" alt="logo" src={stick} height={200} width={200}/>
                
                
                </span>
            </div>
            
            <div className="border-t rounded-2xl w-3/4 ml-60 border-black items-center justify-center flex flex-col" style={{background:"white"}}>
                {/* <Image alt="" src={stick1} height={200} width={200}/> */}
                <p className="flex justify-center font-bold" style={{alignItems:"center"}}>
                StickMan VIP is
                the Premiere
                Vehicle rental tourist app!

                </p>
               <span className="w-3/4">
                <p>Stickman VIP allows its customers to rent cars and other vehicles with ease.<br/>
                Whether you are looking to rent a group of specialized vehicles or a sing model Stickman VIP can fulfill any need.</p>
                <h1>Stickman VIP allows users to rent ANYTHING!!!</h1>
                <span className="flex flex-wrap ">
                <Image alt="" src={car1} height={300} width={200}/>
                {/* <Image alt="" src={car2} height={200} width={300}/> */}
                <Image alt="" src={car2} height={200} width={200}/>
                <Image alt="" src={car4} height={200} width={300}/>
                {/* <Image alt="" src={car5} height={200} width={300}/> */}
                <Image alt="" src={car6} height={200} width={300}/>

                </span>
                <span className="text-center">
                    <h1>ANYWHERE WITH STICKMAN RENTALS</h1>
                    <p>With over 2,200 locations worldwide, you can stay mobile with <b>STICKMAN</b> when you travel domestically or internationally,
                    Find the perfect vehicle for your needs, from sporty compact to refined luxury. Our reowned customer srvice will ensure you find the right solution for your requirements.</p>
                </span>
                </span>
            </div>
            </div>
        </div>
    )
}

export default Stickman