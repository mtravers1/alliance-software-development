import React from "react";
import { Quiksessionent, Quiksessionbussiness, QuikEngineer } from "../component/apps/quiksession";
import Header from "../component/header";
import Image from "next/image";
import ent from "/public/quiksessionent.png"
import ent1 from "/public/quiksession1.png"
import ent2 from "/public/quiksession2.png"
import ent3 from "/public/quiksession3.png"
import bus from "/public/quiksessionbus.png"
import bus1 from "/public/bus1.png"
import eng from "/public/eng.png"
import eng1 from "/public/eng1.png"
import qe from "/public/quikengineer.png"
import styles from "./quiksession.module.css"
const Quiksession= ()=>{
    return(
        <div>
            <Header/>
            <div className="items-center flex flex-col">
                <div style={{}} className="border-black border rounded-3xl m-12 w-3/4 flex items-center  drop-shadow-2xl	">
            <QuikEngineer/>
            </div>
            <div className="border-black border rounded-3xl m-12 w-3/4 flex-end drop-shadow-2xl">
            

            <Quiksessionbussiness/>
            </div>

            <div className="border-black border rounded-3xl m-12 w-3/4 flex items-center  drop-shadow-2xl">

            <Quiksessionent/>
            </div>
            </div>


        </div>
    )
}
export default Quiksession