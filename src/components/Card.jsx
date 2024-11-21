

import React, { useState } from "react";
import Modal from "./Modal";
 const Card=({book})=>{
    const[show,setShow]=useState(false);
    const[bookItem,setItem]=useState();

    return(
        <>
        {
            book.map((item)=>{
                let thumnail=item.volumeInfo.imageLinks&&item.volumeInfo.imageLinks.smallThumbnail;   
                let amount=item.saleInfo.listPrice&&item.saleInfo.listPrice.amount;         
                if(thumnail!=undefined){
                    return(
                        <>
                        <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                        <img src={thumnail} alt="" />
                        <div className="bottom">
                            <h3 className="title">{item.volumeInfo.title}</h3>
                            <p className="amount">&#8377;{amount}</p>
                        </div>
                     </div>
                     <Modal show={show}item={bookItem}/>
                     </>
                    )}
                
                
                
            })
         }
                 </>
                
        
    );
}
export default Card