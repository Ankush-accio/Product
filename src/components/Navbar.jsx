import React from 'react'
import { Search, ShoppingCart, User} from "lucide-react";
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const data = useSelector((store) => store.example.cart)
  const navigate = useNavigate()

  let countOfQuantity = 0
  for(let item of data){
    countOfQuantity += item.quantity
  }

  return (
    <div className='bg-[#0858A8] flex justify-between text-white h-[10vh] items-center p-10 '>
        <div className='text-4xl'>
        <h1>Logo</h1>
        </div>


        <div className='border-white flex items-center relative '>
            <Search className='absolute left-4' />
            <input className='w-[40vw] sm:w-[20vw] lg:w-[40vw] border rounded-xl p-3 pl-13' type="text" placeholder='Search for products...' />
        </div>


        <div className='bg-[#002B5A] rounded-2xl '>
            <button className='flex sm:w-[25vw] md:w-[12vw] h-[6vh] sm:h-[6.5vh] md:h-[7vh] items-center justify-center gap-3 sm:gap-3'>
                <div className='flex relative h-10 w-10 items-center'>
                  {data.length > 0 && <div className='h-[20px] w-[20px] bg-red-700 rounded-full absolute right-1 top-0.5 text-white text-center text-sm '>{countOfQuantity}</div>}
                  <ShoppingCart onClick={()=> navigate("/cart")}
                   className=" text-white hover:text-black w-10 h-10 sm:w-6 sm:h-6" />
                </div>
                  <h1 onClick={()=> navigate("/cart")} className='text-xl sm:text-lg md:text-xl'>Cart</h1>
                  <User  onClick={()=> navigate("/")} className=" text-white hover:text-black w-5 h-5 sm:w-6 sm:h-6" />
            </button>
        </div>


    </div>
  )
}

export default Navbar