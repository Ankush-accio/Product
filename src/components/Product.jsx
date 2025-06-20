import React, { useEffect, useState } from 'react'


const Poroduct = () => { 
  useEffect(()=>{
    AllHandlerFn()
  } ,[])
const [val , setVal] = useState([])
const [price , setPrice] = useState(500)

const[data ,setData] = useState( [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww", 
    category: "Clothing",
    description: "Comfortable and lightweight running shoes."
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 149,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZHBob25lfGVufDB8fDB8fHww", 
    category: "Electronics",
    description: "High-quality wireless sound with long battery life."
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    rating: 4.2,
    image: "https://media.istockphoto.com/id/2153974167/photo/hiking-background-and-backback-in-nature-for-adventure-explore-and-fitness-with-equipment.webp?a=1&b=1&s=612x612&w=0&k=20&c=rxva-2rh-oSzFrRgqwTIqKjxb5uRXaG3pjrhuixqhpk=", 
    category: "Accessories",
    description: "Spacious and durable backpack for everyday use."
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D", 
    category: "Electronics",
    description: "Track your fitness and notifications on the go."
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VuZ2xhc3N8ZW58MHx8MHx8fDA%3D", 
    category: "Accessories",
    description: "Stylish sunglasses for sunny days."
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1614008247224-a9b185e63cfd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpZ2l0YWwlMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D", 
    category: "Electronics",
    description: "Capture moments in high resolution."
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    rating: 4.0,
    image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VCUyMHNoaXJ0fGVufDB8fDB8fHww", 
    category: "Clothing",
    description: "Soft and breathable cotton T‑shirt."
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D", 
    category: "Electronics",
    description: "Latest smartphone with powerful performance."
  }
]
)
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
                 <div key={items.id} className="max-w-[250px] bg-white rounded-lg shadow-md p-4">
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