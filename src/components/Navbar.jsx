import React, { useState } from 'react'
import { Search, ShoppingCart, User} from "lucide-react";
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const data = useSelector((store) => store.example.cart)
  const productData = useSelector((store) => store.example.product)
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState("");
  
  const filteredProducts = productData.filter(item =>
  item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  let countOfQuantity = 0
  for(let item of data){
    countOfQuantity += item.quantity
  }

  return (
    <div className='bg-[#0858A8] flex justify-between text-white h-[10vh] items-center p-10 '>
        <div className='md:text-3xl text-2xl lg:text-4xl'>
        <h1>Logo</h1>
        </div>


        <div className='border-white flex items-center relative '>
            <Search className='absolute left-4' />
            <input onChange={(e) => setSearchText(e.target.value)} value={searchText}
             className='w-[40vw] sm:w-[20vw] lg:w-[40vw] border rounded-xl p-3 pl-13' type="text" placeholder='Search for products...' />

            {searchText && (
              <div className="absolute top-full mt-2 w-full max-h-60 overflow-y-auto bg-white text-black rounded shadow-md z-50">
                {filteredProducts.length === 0 ? (
                <p className="p-4">No products found.</p>
                ) : (filteredProducts.map((item) => 
                (<div key={item.id} className="flex items-center gap-4 p-3 border-b hover:bg-gray-100 cursor-pointer">
                   <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <h2 className="text-sm font-medium">{item.title}</h2>
                      <p className="text-xs text-gray-700">$ {item.price}</p>
                  </div>
              </div>
                ))
              )}
            </div>
              )}
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