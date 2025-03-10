import React from 'react'
import bg from "../../assets/bg0.gif"
import Navbar from '../../components/nav/navbar'
import "./Home.css"
import { category } from '../../Category'
import Product from '../../components/products/Product'
import { useState } from 'react'
import { dummydata } from '../../dummydata'
const Home = () => {

    const [cat, setcat] = useState(dummydata)

    function filterproduct(category) {
        const updatedata = dummydata.filter((item) => 
            (item.category === category)
        )
        setcat(updatedata);
    }

    return (
        <div className='home'>

            <div className='hero-bg'>
                <img src={bg} alt="" />
            </div>
            <div className="category-section">

                {category.slice(0, 5).map((item) => (
                    <div className='category-card' key={item.id} onClick={()=>filterproduct(item.name)} >
                        <img src={item.image} alt="" />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
            <h1>Trending Products </h1>
            <div className="product-section">
                {cat.slice(0, 7).map((item) => (
                    <Product key={item.id} name={item.name} image={item.image} price={item.price} />
                ))}


            </div>
        </div>
    )
}

export default Home