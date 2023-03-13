import React from "react";
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





export function Quiksessionent (){
    return(
        <div className={styles.quikent}>
            <div>
                <span className="flex ">
                <Image objectFit="none" alt="logo" src={ent} height={200} width={200}/>
                <p className="flex items-center" style={{alignItems:"center"}}>
                QuikSession<br/>
                Entertainment Booking App
                </p>
                </span>
                <span>
                    <span>
                        <p>
                            QuikSession was built to make it ease for Artists to find and book music studios anytime anywhere
                        
                            This app is positioning itself to fulfill the needs of aspiring artists looking to break into the industry
                        </p>
                    </span>

                    <span className="flex">
                        
                    <span>
                    <h1>Some of the great features of QuikSessions are:</h1>
                    <ul>
                        <li>
                            See the schedule of a studion you want to book 
                        </li>
                        <li>See all the studios in your local area</li>
                        <li>See a list of engineers for a particular studio and their pricing and avilability</li>
                        
                        <li>Price of the engineer you choose will be added to the booking of the studio</li>
                        <li>You can see your booking history</li>
                        <li>You can book a Dj for an Event</li>
                        <li>You can book a film crew for a video shoot</li>
                        <li>Make your payment through the app</li>
                    
                    </ul>
                    </span>
                    <span className="flex justify-between">
                    <Image  alt="logo1" src={ent1} height={200} width={300}/>
                    <Image  alt="logo2" src={ent2} height={200} width={300}/>
                    <Image  alt="logo3" src={ent3} height={200} width={300}/>

                    </span>
                    </span>
                </span>
            </div>

        </div>
    )
}

export function Quiksessionbussiness (){
    return(
        <div className={styles.quikent}>
                        <div>
                <span className="flex">
                <Image objectFit="none" alt="logo" src={bus} height={200} width={200}/>
                <p className="flex items-center" style={{alignItems:"center"}}>
                QuikSession<br/>
                For Business App
                </p>
                </span>
                <span>
                    <span>
                        <p>
                            If you are a music studio owner, and you want to simplify the booking process and guaranteed to get paid then The QuikSession App for Business is your best tool
                        </p>
                        
                    </span>
                    <span className="flex flex-row-reverse justify-between">
                        <span className="flex">
                    <Image  alt="logo1" src={bus1} height={200} width={300}/>
                    
                    </span>
                    
                    <span className="ml-12">
                    <h1>Some of the features of the App are:</h1>
                    <ul>
                        <li>
                            Set your avilability with a modern booking calendar
                        </li>
                        <li>Sync you iCal, Outlook, or Google calendar with the booking calendar</li>
                        <li>List as many spaces, and services as you want</li>
                        
                        <li>Set your prices</li>
                        <li>Accept or Decline requests from Endingeers who may want to work at your studio</li>
                        <li>Customize your own cancellation policy</li>
                        <li>Collect your payments through the app</li>
                    
                    </ul>
                    </span>
                    </span>
                </span>
            </div>
            
        </div>
    )
}

export function QuikEngineer (){
    return(
        <div className={styles.quikent}>
                     <div>
                <span className="flex">
                <Image alt="logo" src={qe} height={200} width={200}/>
                <p className="flex items-center" style={{alignItems:"center"}}>
                QuikEngineer<br/>
                QuikSession App for Entertainment
                </p>
                </span>
                <span className="flex">
                     <span className="w-1/2"> 
                        <p>
                            Now professional music studion engineers can now provide their services to more than one music studio with ease with QuikEngineer
                        </p>
                        <p>
                            Are you ready to bring your musical vision to life and create unforgettable songs that will capitvate your audience?
                        </p>
                        <p>A studio engineer <b>records, mises, snd masters the sound that creates songs, spoken word, and movie scores.</b>If your focus
                        is on music recording, you may work with artists and performs in the production of a single track or
                        \an album, using specialized microphones and equipment to realize their artistic vision</p>
                    </span>
                    <span>
                        <span className="flex ">
                    <Image  alt="logo1" src={eng} height={200} width={300}/>
                    <Image  alt="logo1" src={eng1} height={200} width={300}/>

                    </span>
                    
                    
                    </span>
                </span>
            </div>
            

        </div>
    )
}