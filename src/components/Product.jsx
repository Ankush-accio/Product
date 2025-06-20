import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"


const Poroduct = ({data}) => { 
  useEffect(()=>{
    AllHandlerFn()
  } ,[])

const navigate = useNavigate()
const [val , setVal] = useState([])
const [price , setPrice] = useState(500)


  function AllHandlerFn (){
    let filteredData = data.filter((items)=>{
      return items
    })
    setVal(filteredData)
  }

  function ElecHandlerFn (){
    let filteredData = data.filter((items)=>{
      return items.category === "Electronics"
    })
    setVal(filteredData)
  }


  function ClothHandlerFn (){
    let filteredData = data.filter((items)=>{
      return items.category === 'Clothing'
    })
    setVal(filteredData)
  }


  function HomeHandlerFn (){
    let filteredData = data.filter((items)=>{
      return items.category === "Home"
    })
    setVal(filteredData)
  }

  function PriceHandlerFn (newPrice){
    let filteredData = data.filter((items)=>{
      return items.price <= newPrice
    })
    setVal(filteredData)
  }
  

  function cardClickhandler(id){
    navigate(`/product/${id}`)
  }

  return (
    <div className='flex bg-[#f3f4f8dd] h-[90vh] w-full overflow-auto'>
        <div className="left p-10 ">

          <div className="bg-[#0858A9] text-white rounded-2xl p-4 w-full md:w-[250px]">
        <h2 className="text-2xl mb-4">Filters</h2>

        <div className="mb-6">
          <h3 className="mb-2 text-xl">Category</h3>

          <div className="flex flex-col gap-2">

            <label><input onClick={AllHandlerFn} type="radio" name="category"   defaultChecked /> All</label>
            <label><input onClick={ElecHandlerFn} type="radio" name="category"   /> Electronics</label>
            <label><input onClick={ClothHandlerFn} type="radio" name="category"   /> Clothing</label>
            <label><input onClick={HomeHandlerFn} type="radio" name="category"   /> Home</label>

          </div>
        </div>

        <div>
          <h3 className="mb-2">Price</h3>
          <div className="flex items-center gap-2">
            <span>0</span>
            <input type="range" min="0" max="1000" className="w-full" value={price}  onChange={(e) => {
              const newPrice = Number(e.target.value)
              setPrice(newPrice)
              PriceHandlerFn(newPrice)
            }} />
            <span>1000</span>
          </div>
        </div>
      </div>





         <div className="bg-[#FFFFFF] rounded-2xl p-4 w-full md:w-[250px] mt-5">
        <h2 className="text-2xl mb-4">Cacyroy</h2>

        <div className="mb-6">
          <div className="flex flex-col gap-2">

            <label><input onClick={AllHandlerFn} type="radio" name="category"  /> All</label>
            <label><input onClick={ElecHandlerFn} type="radio" name="category" /> Electronics</label>
            <label><input onClick={ClothHandlerFn} type="radio" name="category" /> Clothing</label>
            <label><input onClick={HomeHandlerFn} type="radio" name="category" /> Home</label>

          </div>
        </div>

        <div>
          <h3 className="mb-2">Price</h3>
          <div className="flex items-center gap-2">
            <input type="number" min="0" max="10000" value={price}
            onChange={(e) => {
              const newPrice = Number(e.target.value)
              console.log(newPrice)
              setPrice(newPrice)
              PriceHandlerFn(newPrice)
            }}
            
            className="w-full border border-gray-300 rounded-md" />
          </div>
        </div>
      </div>

        </div>


        <div className='right p-5 pt-10 overflow-auto'>
          <h1 className='text-3xl font-bold'>Product Listing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
              { val.length ? val.map((items) =>{
                return(
                 <div 
                  onClick={() => cardClickhandler(items.id)}
                 key={items.id} className="max-w-[250px] bg-white rounded-lg shadow-md p-4">
                    <img src={items.image} alt={"This is an image of " + items.title} className="w-full h-40 object-cover rounded-md"/>
                    <h1 className="mt-2 text-lg font-semibold text-gray-800">{items.title}</h1>
                    <h1 className="text-gray-600">${items.price}</h1>
                    <h1 className="text-yellow-500">⭐ {items.rating} / 5</h1>
                    <button className="mt-3 w-full bg-[#0858A9] text-white py-2 rounded-xl hover:bg-blue-700 transition"> Add to Cart</button>
                  </div> 
                )
              }) : <h1 className='font-bold text-3xl text-gray-500 mt-5 justify-center'>No Product</h1>
              }
            </div>
       </div> 
    </div>
  )
}

export default Poroduct