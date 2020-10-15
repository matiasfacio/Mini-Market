import React, { useReducer } from 'react'
import Products from '../data/Products'
import '../App.css'

const reducerProducts = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'ADD':
            return {
                    ...state, 
                    ProductsAvailable: [...state.ProductsAvailable, action.NewItem]
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
                    Cart: [...state.Cart, state.ProductsAvailable[action.index]]
                    }

        default: return state
    }
}

function ListaProducts(){
    const [{ProductsAvailable, Cart} , dispatch] = useReducer(reducerProducts, {ProductsAvailable:Products.map(t => {
        return {...t, available: false}
    }), Cart: []})

    console.log(ProductsAvailable)
    console.log('cart: ', Cart)

    return(
        <div>
            <h1>lista de productos</h1>
            <div className = "_listaProducts">
            {ProductsAvailable.map((t, index) => {
                return <div key={index}>
                            <div style={{minWidth: 45, display: 'inline-block', color: 'lightblue'}}>{t.id})</div> 
                            <div style= {{minWidth: 300, display: 'inline-block'}}>{t.name}</div>
                            <div style = {{minWidth: 80, display:'inline-block'}}>€ {t.price}</div>
                            <button style = {{marginLeft: 150, maxWidth: 100, color: 'white', backgroundColor: !t.available ? 'red': 'green'}} onClick = {()=> dispatch({type: 'AVAILABLE', index})}>{t.available ? 'Make it not available': 'make it available'}</button>
                            <button style = {{marginLeft: 50}} onClick = {()=> dispatch({type: 'ADD_CART', index})}>ADD</button>
                        </div>
            })}
            <br />
            <button onClick = {()=> dispatch({type: 'ADD', NewItem: {id: ProductsAvailable.length+1, name: 'dog', price: 100, description: 'beautiful cat eater', available: false} })}>Add new product</button>
            </div>
        </div>
    )
}

export default ListaProducts
