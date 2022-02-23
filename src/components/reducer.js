import React, { } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "REMOVE_ITEM":
            const new_array = state.item.filter(item => {
                return item.id !== action.payload;
            });
            return { ...state, item: new_array };  // It means return state as it is and modify 'item' property

        case 'INCREMENT':
            console.log('increment');
            const incrementedItem = state.item.map((curr, index) => {
                if (curr.id === action.payload) {
                    return { ...curr, quantity: curr.quantity + 1 }
                }
                return curr;
            }).map(curr => {                                
                return { ...curr, totalPrice: curr.quantity * Number(curr.price) }
            })
            return { ...state, item: incrementedItem };

        case 'DECREMENT':
            console.log('decrement');
            const decrementedItem = state.item.map(curr => {
                if (curr.id === action.payload) {
                    return { ...curr, quantity: curr.quantity - 1 }
                }
                return curr;
            }).filter(curr => { return Number(curr.quantity) !== 0 }).map(curr => {
                return { ...curr, totalPrice: curr.quantity * Number(curr.price) }
            });

            return { ...state, item: decrementedItem };

        case "CLEAR_CART":
            return { ...state, item: [], totalAmount: 0, totalItem: 0 }

        case "GET_TOTAL":
            let totalItems = state.item.reduce((sum,curr)=>{ 
                return sum+=curr.quantity;
            },0);
            let totalAmounts = state.item.reduce((sum,curr)=>{ 
                return sum+=Number(curr.totalPrice);
            },0);
            return { ...state, totalAmount: totalAmounts, totalItem: totalItems }
        default:
            return state;
    }

    // if(action.type === 'REMOVE_ITEM'){
    //     //remove using filter method

    // }else if(action.type === 'CLEAR_CART'){
    //     return {...state,item:[], totalAmount:0, totalItem:0}
    // }else if(action.type === 'CLEAR_CART'){
    //     return {...state,item:[], totalAmount:0, totalItem:0}
    // }else if(action.type === 'CLEAR_CART'){
    //     return {...state,item:[], totalAmount:0, totalItem:0}
    // }else if(action.type === 'GET_TOTAL'){
    //     return {...state, totalAmount:0, totalItem:state.item.length}
    // }
    // return state;
}
export default reducer;