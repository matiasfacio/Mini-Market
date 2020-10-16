import React, { createContext, useReducer } from 'react';
import Products from '../data/Products'

export const GlobalContext = createContext();


const reducerProducts = (state, action) => {
   
    switch (action.type) {
        case 'ADD':
            return {
                    ...state, 
                    ProductsAvailable: [...state.ProductsAvailable, action.newItem]
            }

        case 'AVAILABLE':
            return { 
                    ...state, 
                    ProductsAvailable: state.ProductsAvailable.map((t, index) => {
                    return index === action.index ? {...t, available: !t.available}: t
            })}

        case 'ADD_CART':
            return {
                    ...state, 
                    Cart: [...state.Cart, state.ProductsAvailable[action.index]],
                    CountCart: state.CountCart + state.ProductsAvailable[action.index].price
            }
        
        case 'DEL_CART':               
            return {
                    ...state, 
                    CountCart: state.CountCart - state.ProductsAvailable[state.ProductsAvailable.indexOf(action.t)].price,
                    Cart: state.Cart.filter((t,index) => { return index !== action.index})
                }
        
        case 'EMPTY_CART':
            return {
                    ...state,
                    Cart: [],
                    CountCart: 0
            }


        case 'INFO_ITEM':
            return {
                    ...state,
                    ProductsAvailable: state.ProductsAvailable.map((t,index) => {
                        return index === action.index ? {...t, display: !t.display} : t
                    })
            }
        
        case 'CLEAR_INFO':
            return {
                    ...state,
                    ProductsAvailable: state.ProductsAvailable.map(t => {
                        return {...t, display: false}
                    })
            }

        default: return state
    }
}

const GlobalContextFunction = (props) => {

    const [{ProductsAvailable, Cart, CountCart} , dispatch] = useReducer(reducerProducts, {ProductsAvailable:Products.map(t => {
        return {...t, available: false, display: false}
    }), Cart: [], CountCart: 0})

    console.log(ProductsAvailable, Cart)

    return (
        <GlobalContext.Provider value = {{ProductsAvailable, Cart, CountCart, dispatch}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextFunction
