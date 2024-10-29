import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

import './Iphone.css'
import{link}from'react-router-dom'

function Iphone() {

const [iphoneInfo,setIphone]=useState([])

useEffect(()=>{
fetch('http://localhost:777/iphones/iphones')
.then(response=> response.json)
.then((data)=>{
    setIphone(data.products)
})

fetchData();
},[])

// console.log(iphoneInfo);

  return (
    <>
    <div className="product_wrapper">
{iphoneInfo.map((product)=>(
    <div key={product.product_id} className='product_card'>
        <img src={product.product_img} alt={product.product_name} className="product-image"/>
<div className="product-content">
<h2>{product.product_name}</h2> 
<p>{product.product_brief_description}</p>
<p>{product.starting_price}</p>
<p>{product.price_range}</p>
<Link to={product.product_link} target="blank" rel="noopener noreferrer">Learn more</Link>
</div>
</div>
))}

    </div>
    </>
  )
}

export default Iphone