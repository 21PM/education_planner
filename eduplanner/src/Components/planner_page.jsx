import { useState } from "react";
import PlannerList from "./plannerList";
import plannerstyles from "../Components/planner.module.css"

function PlannerPage (){

    const [subject,setSubject] = useState("");
    const [hour,SetHour] = useState("");

    const [student,setData] = useState([]);

    console.log(student);
    


function addSubject(e){
    setSubject(e.target.value);
    // console.log(subject);
}

function addHour(e){
    
    SetHour(e.target.value);
    // console.log(hour);


}

function Additem(){
    
    if(subject != "" && hour!= ""){ 

        let obj = {
            subject,
            hour
        }

        //************* */ using push *********************
        // {let newstudent = student.slice();
        // newstudent.push(obj);

        // setData(newstudent)}

        // ******************using spread *****************~
        setData([...student,obj])
        
        setSubject("");
        SetHour("");

    }
    else{
        alert("please fill all the details")
    }
   
  

}


    return(
       <div>
          <h1 style={{textAlign:"center"}}>Education Planner</h1>
        <div className={plannerstyles.mainDIv}>
        <input type='text' placeholder='subject' value={subject} onChange={addSubject}></input>
         <input type='number'  placeholder='Hours' value={hour} onChange={addHour}></input>
        <button onClick={Additem}>Add</button>
        </div>  
        <div className={plannerstyles.showadded}>
        {
            student.map((ele,i)=>{
                    return(
                        <>
                           <PlannerList key={i} subject={ele.subject} hour={ele.hour}/>
                        </>
                    )
            })
        }
        </div>
        </div>
    )
}


export default PlannerPage;