import React from 'react'
import "./navbar.css"
import { FaShopify } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
const navbar = () => {
    return (
        <div className='nav'>
            <div className='top-nav'>
                <div className="logo">
                    <span>V-Shop</span>
                    <FaShopify />
                </div>
                <form className='search-box'>
                    <input type="text" placeholder='Search Items..' />
                    <button><IoMdSearch /></button>
                </form>
                <div className="cart-box">
                    <IoMdCart />
                    <span>0</span>
                </div>
            </div>
            <div className="bottom-nav">
                <li>Home</li>
                <li>Shop</li>
                <li>Cart</li>
                <li>Contact</li>
            </div>
        </div>
    )
}

export default navbar