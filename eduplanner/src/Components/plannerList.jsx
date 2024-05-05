import { useState } from "react";
import plannerstyles from "../Components/planner.module.css"


function PlannerList({subject,hour}){

    const [hourcount,Sethourcount] =  useState(hour)
    // console.log(hourcount);


    function increaseCount(){
        
        let  newHour = parseInt(hourcount)+1;

        Sethourcount(newHour)
        // console.log(hourcount);
    }

    function decreaseCount(){

        if(hourcount === 0){
            return;
        }

        let  newHour = parseInt(hourcount)-1;

        Sethourcount(newHour)
    }

    return(
       <div className={plannerstyles.showadd}>
            <p>{subject} -</p>
            <p>{hourcount} <span>hour</span></p>
           <div>
           <button style={{cursor:"pointer" , backgroundColor:"green",color:"white",marginRight:"10px"}} onClick={increaseCount}>+</button>
            <button style={{cursor:"pointer" , backgroundColor:"red",color:"white",marginRight:"10px"}} onClick={decreaseCount}>-</button>
           </div>
       </div>

    )
}

export default PlannerList;