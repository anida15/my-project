import React from 'react';
import ImageHelper from './helper/imageHelper';
 

 
const Card = ({
    hostel,
    addtoCart= true,
    removeFromCart=false

}) => {

                
         const cartName = hostel ? hostel.name : "A Of Hostel";
         const cartDescription = hostel ? hostel.description : "Details about the hostel";
         const cartPrice = hostel ? hostel.price : "The price of the hostel";
         
  

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead"> Hostel Name: 
        <div className="text-warning">
         {cartName}

        </div>
        
        </div>
        <div className="card-body">
          <ImageHelper hostel={hostel}/>
          <br/>
          <p className="btn btn-success rounded  btn-sm px-4">
            {cartDescription}
          </p>
          <br/>
           
          <p className="btn btn-success rounded  btn-sm px-4"> 
          Per Month </p>
          <br/>
          <p className="btn btn-success rounded  btn-sm px-4">Ksh. {cartPrice }</p>
           
        </div>
      </div>
    );
  };

 
export default Card;