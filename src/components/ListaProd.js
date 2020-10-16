import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import '../App.css'


function ListaProd() {
    const { ProductsAvailable, Cart, CountCart, dispatch} = useContext(GlobalContext)
    
    const [newItem, setNewItem] = useState({name: '', id: ProductsAvailable.length+2, stock: 0, description: '', price: 0, available: false})

    

    return (
        <div>
            <div className ="title"><h1>Mini Market</h1></div>
            <div className = "_listsDisplay">
                
                <div className = "_listaProducts">
                    <div className = "title_list">
                        <h2>Products</h2>
                        <p>*our products with love*</p>
                    </div>
                    <div className = "producto" style = {{marginBottom: 20}}>
                        <div className ="producto_id" style = {{fontSize: '1.2rem'}}>ID</div>
                        <div className ="producto_name" style = {{fontSize: '1.2rem'}}>NAME</div>
                        <div className ="producto_price" style = {{fontSize: '1.2rem'}}>PRICE</div>
                    </div>
                    <br/>
                    <div className = "container_list">
                        {ProductsAvailable.map((t, index) => {
                        return <div key={index} className = 'producto'>
                                    <div className ="producto_id">{t.id})</div> 
                                    <div className ="producto_name">{t.name}</div>
                                    <div className = "producto_price">€ {(t.price.toFixed(2))}</div>
                                    <button className = "producto_button_available" style = {{backgroundColor: !t.available ? 'red': 'green'}} onClick = {()=> dispatch({type: 'AVAILABLE', index})}>{t.available ? 'Deactivate': 'Activate'}</button>
                                    {t.available ? <button  className = "producto_button_add" onClick = {()=> dispatch({type: 'ADD_CART', index})}>ADD</button> : ''}
                                    <button className = "producto_display_info" style = {{textDecoration: t.display ? 'line-through': 'none', border: t.display ? '2px red solid': 'none'}}onClick = {() => {dispatch({type: 'CLEAR_INFO'}); dispatch({type: 'INFO_ITEM', index})}}>INFO</button>
                                </div>
                        })}
                    </div>
                <br />

                

                <form className = "_form" onSubmit = {(e)=> {
                    e.preventDefault()
                    dispatch({type:'ADD', newItem})
                    setNewItem({name: '', id: ProductsAvailable.length+2, stock: 0, description: '', price: 0, available: false})
                }}> 

                    <div className = "flex_form">
                    <div>
                        <label>
                            <h2>Add New Product</h2>
                            <p>* Form for adding new products *</p>
                        </label><br/>
                        <label>
                            Name:
                        </label>
                        <input type = "text" value={newItem.name} onChange={e => setNewItem({...newItem,name: e.target.value})}/><br/>
                        <label>
                            Id:
                        </label>
                        <input type = "number"value={ProductsAvailable.length +2} onChange={e => setNewItem({...newItem,id: ProductsAvailable.length +2})}/><br/>
                        <label>
                            Stock:
                        </label>
                        <input type = "text" value={newItem.stock} onChange={e => setNewItem({...newItem,stock: parseInt(e.target.value)})}/><br/>
                        <label>
                            Price:
                        </label>
                        <input type = "text" value={newItem.price} onChange={e => setNewItem({...newItem,price: parseInt(e.target.value)})}/><br/>
                        <label>
                            Description:
                        </label>
                        <input type = "text" value={newItem.description} onChange={e => setNewItem({...newItem,description: e.target.value})}/><br/>
                    </div>

                    <div>
                        <input className = "button_submit" type = 'submit' value='Submit'/><br/>
                    </div>

                    </div>
                </form>

                
                </div>

                <div className = "container_right">
                    <div className = "cart">
                        <div style = {{marginBottom: 20}}><h2>Cart</h2></div>
                        <div className = "button_empty_cart">
                            <button onClick = {()=> dispatch({type: 'EMPTY_CART'})}>Empty Cart</button>
                        </div>
                        <div className = "container-cart">
                            <div className = "displayCart">
                                <div className = "cart_id">Item</div>
                                <div className = "cart_name" style = {{textAlign: 'center'}}>Name</div>
                                <div className = "cart_price">Price</div>
                                <div className = "cart_cantidad" style = {{textAlign: 'center'}}>Quantity</div>
                                <div className = "cart_price_total" style = {{textAlign: 'right'}}>Total</div>
                            </div>
                            <hr/>
                            <div>
                                {Cart.map((t, index) => {

                                    return t.quantity !== 0 ? <div key = {index} className = "displayCart">
                                            <div className = "cart_id">{t.id} </div>
                                            <div className = "cart_name">{t.name} </div>
                                            <div className = "cart_price">€ {t.price}</div>
                                            <div className = "cart_cantidad">{t.quantity}<button onClick = { ()=> dispatch({type: 'UPDATE_CART_INC', index})}>+</button><button onClick = { ()=> dispatch({type: 'UPDATE_CART_DEC', index})}>-</button></div>
                                            <div className = "cart_price_total">€ {t.price * t.quantity}.- </div>
                                            <div className = "cart_button_del">
                                                <button style = {{padding: 5}}onClick = {()=> dispatch({type:'DEL_CART', t, index })}>Del</button>
                                            </div>
                                        </div>
                                    : ''
                                })}
                            </div>
                        </div>
                        <div style = {{marginTop: 20}}>
                            {CountCart === 0 ? <div style = {{marginBottom: 10, fontSize: '1rem'}}>* No items in your Cart yet *</div>: null}
                            <hr/>
                            <div className = "cart_subtotal">Subtotal: {(CountCart/1.19).toFixed(2)}.-€ </div>
                            <div className = "cart_vat">VAT (19%): {(CountCart - (CountCart / 1.19)).toFixed(2)}.- € </div>
                            <div className = "cart_total">Total: {CountCart}.- €</div>
                        </div>
                    </div>
                    <div className = "product_information">
                        <h2>Product Information</h2>
                        <p>* please, choose an item from the list *</p>
                        <div className = "list_description">
                        <div className = "button_clear_infos">
                            <button onClick = {()=> dispatch({type: 'CLEAR_INFO'})}>Clear</button>
                        </div>
                        {ProductsAvailable.map((t,index) => {
                            return t.display ? <div className ="product_description">* {t.description}</div>: ''
                        })}
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaProd
