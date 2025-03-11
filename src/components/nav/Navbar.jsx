/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import "./navbar.css"
import { FaShopify } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const navbar = () => {
    let items  = useSelector(state=>state)

    console.log(items)
    return (
        <div className='nav'>
            <div className='top-nav'>
            <Link to="/"><div className="logo">
                    <span>V-Shop</span>
                    <FaShopify />
                </div></Link>
                <form className='search-box'>
                    <input type="text" placeholder='Search Items..' />
                    <button><IoMdSearch /></button>
                </form>
                <Link to="/cart"><div className="cart-box">
                    <IoMdCart />
                    <span>{items.cart.length}</span>
                </div>
                </Link>
            </div>
            <div className="bottom-nav">
                <Link to="/"> <li>Home</li></Link>
                <Link to="/shop"><li>Shop</li></Link>
                <Link to="/cart"><li>Cart</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </div>
        </div>
    )
}

export default navbar