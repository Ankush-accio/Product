import React from 'react'
import { Search, ShoppingCart, User} from "lucide-react";


const Navbar = () => {
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
            <button className='flex sm:w-[25vw] md:w-[15vw] h-[6vh] sm:h-[6.5vh] md:h-[7vh] items-center justify-center gap-3 sm:gap-3'>
                  <ShoppingCart className=" text-white hover:text-black w-5 h-5 sm:w-6 sm:h-6" />
                  <h1 className='text-xl sm:text-lg md:text-xl '>Cart</h1>
                  <User className=" text-white hover:text-black w-5 h-5 sm:w-6 sm:h-6" />
            </button>
        </div>


    </div>
  )
}

export default Navbar