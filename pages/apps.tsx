import React from "react";
import { Quiksessionent, Quiksessionbussiness, QuikEngineer } from "../component/apps/quiksession";
import Stickman from "../component/apps/stickman";
import { Quikdollars, Quikcarry} from "../component/apps/quik";
import Header from "../component/header";
const Apps = ()=>{
    return(
        <div >
            <Header/>
            <Quiksessionent/>
            <Quiksessionbussiness/>
            <QuikEngineer/>
            <Stickman/>
            <Quikdollars/>
            <Quikcarry/>


        </div>
    )
}

export default Apps