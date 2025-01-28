
import React from "react"
export default function  Product({Products}){
    let price = `${Products.price}$` 
    return(
    
    <div>

<h1 className='productTiltle' >{Products.title}</h1>
<div className='productimage'>
<img   className="image" src={Products.image}/> 
</div>
<h3 className='productTiltle'>{price}</h3>  
<h3>Description:</h3>
   <p> {Products.description}</p>
       
    </div>
    

        )
}