import React from 'react'
import {useParams} from "react-router-dom"
import {useSelector , useDispatch} from "react-redux"
import { addToCart, decreaseFromCart, increaseFromCart } from '../utils/ProductSlice'

const ProductDetail = () => {
  const data = useSelector((store) => store.example.product)
  const dispatch = useDispatch()

   const {id} = useParams()
   const product = data.find((items) => items.id == parseInt(id))

  return (
    <div className='h-full'>
    <div className="flex flex-col lg:flex-row items-center gap-10 p-6 max-w-6xl mx-auto mt-10 ">
      
   
      <div className="w-full max-w-md">
        <img src={product.image} alt={product.title} className="w-full h-auto rounded-xl shadow-lg"/>
      </div>

      <div className="w-full max-w-xl">
        <h2 className="text-2xl mb-3">{product.title}</h2>
        <p className="text-lg text-gray-700 mb-2">$ {product.price}</p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-sm mb-1">Category: {product.category}</p>
        <p className='text-gray-600'>Quantity : <button onClick={()=> {dispatch(increaseFromCart(product.id))}}>+</button> <button  onClick={()=> dispatch(decreaseFromCart(product.id))}>-</button></p>
        <p className="text-sm">Rating: ⭐ {product.rating}</p>
        <button  onClick={()=>{(dispatch(addToCart({id : product.id , title : product.title , price : product.price , image : product.image})))}}
         className="mt-6 px-6 py-2 bg-[#0858A9] text-white rounded-lg hover:bg-[#002D61] transition-all">Add to Cart</button>

      </div>
    </div>
    <div className="max-w-[40vw] mx-auto">
         <h4 className="text-lg font-medium mb-2">Leave a Review</h4>
        <textarea rows="3" className="w-full p-3 border rounded-md" placeholder="Write your review here..."/>
        <button className="mt-3 px-5 py-2 bg-[#0858A9] text-white rounded-md hover:bg-[#002D61] transition-all">Submit Review</button>
    </div>
    </div>
  )
}

export default ProductDetail