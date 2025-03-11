import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import "./cartcard.css"
import { useDispatch } from 'react-redux';
import { Removeitem } from '../../redux/cartslice';
const Cart = ({name,price,image,id}) => {
    let dispatch = useDispatch()
    return (
        <div className='cartcard'>
            <div className="left-card">
                <img src={image}
                    alt="" />
            
            <div className="name-price">
                <span>{name}</span>
                <span>{price}</span>
            </div>
            </div>
            <div className="right-card">
                <button onClick={()=>{
                    dispatch(Removeitem(id))
                }}>Remove <MdOutlineDelete /></button>
            </div>
        </div>
    )
}

export default Cart