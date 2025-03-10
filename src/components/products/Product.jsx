import React from 'react'
import "./product.css"
const Product = ({name,image,price}) => {
  return (
    <div className='products'>
        <img src={image} alt="" />
        <div className="product-details">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            <button>Add +</button>
        </div>
        </div>
  )
}

export default Product