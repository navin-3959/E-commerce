import React from 'react'
import "./shop.css"
import { FaShopify } from "react-icons/fa";

import { category } from '../../../Category'
import { useState } from 'react'
import { dummydata } from '../../../dummydata'
import Product from '../../../components/products/Product'
const Shop = () => {
    const [cat, setcat] = useState(dummydata)
    
        function filterproduct(category) {
            if(category === "All"){
                setcat(dummydata)
            }
            else{
            const updatedata = dummydata.filter((item) => 
                (item.category === category)
            )
            setcat(updatedata);
        }}
    return (
        <div className='shop'>
            <div className="heading">
                <span>shop</span>
                 <FaShopify />
            </div>
            <div className="category-section">

                {category.map((item) => (
                    <div className='category-card' key={item.id} onClick={() => filterproduct(item.name)} >
                        <img src={item.image} alt="" />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
            <div className="product-section">
                {cat.map((item) => (
                    <Product key={item.id} name={item.name} image={item.image} price={item.price} id={item.id} />
                ))}


            </div>
        </div>
    )
}

export default Shop