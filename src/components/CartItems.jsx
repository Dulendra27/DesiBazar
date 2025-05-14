import { useContext } from "react"
import {productsContext } from "./Function"

export default function CartItems(){
    const {cart,removeFromCart,updateQuantity}= useContext(productsContext)
   let total = 0;
    for(let i= 0; i < cart.length; i++){
        total += cart[i].price * cart[i].quantity;
    }
return(
    <>
 <div className="cart-container">
      {cart.map((select)=>
        (
      <div className='add-item' key={select.id} >
             <img src={select.image} alt="" className='add-img'/>
              <p className='add-name'>{select.title}</p>
              <p className='add-price'>PRICE : ${select.price}</p>
              <p>Quantity: 
                <button onClick={()=> updateQuantity(select.id,select.quantity + 1)} className="increase-btn">+</button>
                 {select.quantity} 
                 <button onClick={()=> updateQuantity(select.id,select.quantity - 1)} className="decrease-btn">-</button>
              </p>
              <button className="cart-remove" onClick={()=> removeFromCart(select.id)}>Remove</button>
       </div>
       )
        )}
        <div className="cartTotal-container">
      <div className="total-container">
       <p className="total">Total = </p>
       <p className="total-price">${total}</p>
       </div>
       </div>
        </div>
    </>
)





}