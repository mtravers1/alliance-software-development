import React from "react";
import { Quiksessionent, Quiksessionbussiness, QuikEngineer } from "../component/apps/quiksession";
import Header from "../component/header";
const Quiksession= ()=>{
    return(
        <div>
            <Header/>
            <QuikEngineer/>
            <Quiksessionbussiness/>
            <Quiksessionent/>

        </div>
    )
}
export default Quiksession