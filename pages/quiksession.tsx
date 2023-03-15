import React from "react";
import { Quiksessionent, Quiksessionbussiness, QuikEngineer } from "../component/apps/quiksession";
import Header from "../component/header";
const Quiksession= ()=>{
    return(
        <div>
            <Header/>
            <div className="items-center ">
                <div style={{boxShadow:"10px"}} className="border-black border rounded-3xl m-12 w-3/4 flex items-center justify-around drop-shadow-2xl	">
            <QuikEngineer/>
            </div>
            <div className="border-black border rounded-3xl m-12 w-3/4 flex-end justify-around drop-shadow-2xl">
            

            <Quiksessionbussiness/>
            </div>

            <div className="border-black border rounded-3xl m-12 w-3/4 flex items-center justify-around drop-shadow-2xl">

            <Quiksessionent/>
            </div>
            </div>


        </div>
    )
}
export default Quiksession