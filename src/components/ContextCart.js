import React, { useState, useEffect, useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Items from './items';
import { CartContext } from './cart';

const Contextcart = () => {
    const { item, clearCart, totalItem, totalAmount } = useContext(CartContext)  

    return (
        <>
            <header>
                <div className='continue-shopping'>
                    <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3> continue shopping </h3>
                </div>

                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p> {totalItem} </p>
                </div>
            </header>

            <section className='main-cart-section'>
                <h1>shopping Cart</h1>
                <p className='total-items'>You have <span className='total-items-count'> {totalItem} </span> items in shopping cart</p>


                <div className='cart-items'>
                    <div className='cart-items-container'>
                        <Scrollbars>
                            {
                                item.map((val) => {
                                    return <Items {...val} key={val.id} />
                                })
                            }
                        </Scrollbars>
                    </div>
                </div>

                <div className='card-total'>
                    <h3>Cart Total : <span> {totalAmount}rs </span></h3>
                    <button>checkout</button>
                    <button className='clear-cart' onClick={() => { clearCart(); }}>Clear cart</button>
                </div>
            </section>
        </>
    );
}

export default Contextcart;
