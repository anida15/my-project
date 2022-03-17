import React, { useState ,useEffect} from "react";
import { getHostel } from "./helper/coreapicalls";

import Base from "./Base";
import "../style.css";
import Card from "./Homehostel";
 

 
 
 

export default function Home (){

    const [hostel,setHostel] = useState([]);
    const [error, setError] = useState(false)

    const loadAllHostels= () => {
        getHostel()
        .then(data =>{
            if (data.error){
                setError(data.error)
                console.log(error)
            }else{
                setHostel(data);
            }
        });

    };
     
    useEffect(()=>{
        loadAllHostels()

    });

return(

    

    <Base title="HOME PAGE " description="Welcome to hostel booking">

    
 <div>
     <div className="row">
         {hostel.map((hostel,index)=>{
             return(
                 <div key={index} className="col-4 mb-4">
           

                <Card hostel={hostel}/>

                
                  
                 </div>
             );
         })}

     </div>
     <p>Over the next 5 years, The Government&nbsp; of H.E Uhuru Kenyatta will create<br/>
     <strong>500,000 new home owners</strong> through the facilitation of <br/>
     affordable housing; and a home ownership programme that will ensure every working<br/>
     family can afford a decent home by injecting low-cost into the housing sector.<br/> 
     Reforms will be undertaken to lower the cost of construction and improve accessibility<br/>
      of affordable mortgages.</p>
     
     
     </div>
    
      
     

     
     
    </Base>



); 
   
}