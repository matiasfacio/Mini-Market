import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Form = () => {

    const { ProductsAvailable, dispatch} = useContext(GlobalContext)
    const [newItem, setNewItem] = useState({name: '', id: ProductsAvailable.length+2, stock: 0, description: '', price: 0, available: false})


    return (       
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
    </form> );
}
 
export default Form;