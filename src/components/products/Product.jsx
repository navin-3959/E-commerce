import React from 'react';
import './product.css';
import { useDispatch } from 'react-redux';
import { Additem } from '../../redux/cartslice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ name, image, price, id }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(Additem({ name, image, price, id }));

        // Show toast notification
        toast.success(`${name} added to cart! 🛒`, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
        });
    };

    return (
        <div className='products'>
            <img src={image} alt={name} />
            <div className="product-details">
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
                <button onClick={handleAddToCart}>Add +</button>
            </div>
        </div>
    );
};

export default Product;
