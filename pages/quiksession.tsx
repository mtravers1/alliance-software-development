import React from "react";
import { Quiksessionent, Quiksessionbussiness, QuikEngineer } from "../component/apps/quiksession";
import Header from "../component/header";
const Quiksession= ()=>{
    return(
        <div>
            <Header/>
            <div className="items-center ">
                <div className="border-black border rounded-3xl m-12 w-3/4 flex items-center justify-around">
            <QuikEngineer/>
            </div>
            <div className="border-black border rounded-3xl m-12 w-3/4 flex-end justify-around">
            

            <Quiksessionbussiness/>
            </div>

            <div className="border-black border rounded-3xl m-12 w-3/4 flex items-center justify-around">

            <Quiksessionent/>
            </div>
            </div>


        </div>
    )
}
export default Quiksession