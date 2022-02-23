import React, {useContext} from 'react';
import {CartContext} from './cart';

const Items = ({id, title, description, price, img, quantity, totalPrice}) => {
    // const  = props.item_data;
    const {removeItem,increment, decrement} = useContext(CartContext);
    return (
        <>
            <div className='items-info'>
                <div className='product-img'>
                    <img src={img} alt="image" />
                </div>

                <div className='title'>
                    <h2>{title}</h2>
                    <p>Black color</p>
                </div>

                <div className='add-minus-quantity'>
                    <i className='fas fa-minus minus' onClick={()=>{decrement(id)}}/>
                    <input type="text" placeholder={quantity} readOnly/>
                    {/* <span>{quantity}</span> */}
                    <i className='fas fa-plus add' onClick={()=>{increment(id)}}/>
                </div>

                <div className='price'>
                    <h3>{totalPrice}</h3>
                </div>

                <div className='remove-item'>
                    <i className='fas fa-trash-alt remove' onClick={()=>{removeItem(id)}}/>
                </div>
            </div>
            <hr /> <br />
        </>
    );
}
export default Items;