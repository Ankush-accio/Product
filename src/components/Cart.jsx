import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { decreaseFromCart, increaseFromCart, removeFromCart } from '../utils/ProductSlice';

const Cart = () => {
  const data = useSelector((store) => store.example.cart);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let totalPrice = 0;
  for (let item of data) {
    totalPrice += item.price * item.quantity;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 h-[75vh] overflow-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {data.length === 0 ? (
        <>
        <p className="text-center text-gray-500">Your cart is empty.</p>
        <p onClick={()=> navigate("/")} className=' flex mx-auto text-blue-600 hover:text-blue-800 justify-center cursor-pointer'>Go to shopping </p>
        </>
      ) : (
        data.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-4 rounded-md mb-4 shadow-md">
            
            <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg"/>
            
            <div className="flex-1 ml-4">
              <h2 className="text-xl font-semibold ">{item.title}</h2>
              <p className="text-gray-600">Price: ${item.price}</p>
              <div className="flex items-center mt-2 gap-2">
                <button onClick={()=>dispatch(decreaseFromCart(item.id))}
                 className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                <input type="text" value={item.quantity} readOnly className="w-12 text-center border rounded"/>
                <button onClick={()=>dispatch(increaseFromCart(item.id))}
                 className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
              </div>
            </div>

            <div className="text-right">
              <p className="">Total: ${item.price * item.quantity}</p>
              <button onClick={()=>dispatch(removeFromCart(item.id))}
               className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">X</button>
            </div>
          </div>
        ))
      )}


      {data.length > 0 && (
        <div className="text-right mt-6">
          <h2 className="text-2xl font-bold">Total Price: ₹{totalPrice}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
