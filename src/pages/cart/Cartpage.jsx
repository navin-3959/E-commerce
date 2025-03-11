import React from 'react'
import "./cartpage.css"
import Cartcard from '../../components/cart/Cart'
import { useSelector } from 'react-redux'
import ec from "../../assets/emptycart.png"
const Cartpage = () => {
  let items = useSelector(state => state)
 let total =  items.cart.reduce((a,b)=>a+b.price,0)
  return (
    <div className='cart'>
      {items.cart.length <= 0 ? <div className='empty-cart'>
        <h1>Empty cart</h1>
        <img src={ec} />
      </div> :<div className="cartcard-section">
        {items.cart.map((item)=>(<Cartcard name={item.name} price={item.price} image={item.image} id={item.id}/>))}
        </div>}
      <div className="price-section">
        <span>Total Product : {items.cart.length}</span>
        <span>Total Price : {total}</span>
      </div>
    </div>
  )
}

export default Cartpage