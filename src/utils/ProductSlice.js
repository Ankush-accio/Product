import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "cart",
    initialState : {product : [{
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
],
cart : []
},
    reducers : {
        addToCart: (state, action) => {
        const product = action.payload; 
        const foundItem = state.cart.find(item => item.id === product.id);

        if (foundItem) {
          foundItem.quantity += 1; 
        } else {
          state.cart.push({ ...product, quantity: 1 }); 
        }},

       removeFromCart: (state, action) => {
         const productId = action.payload;
         state.cart = state.cart.filter(item => item.id !== productId);
       },


        increaseFromCart: (state, action) => {
          const productId = action.payload;
          const item = state.cart.find(item => item.id === productId);
          if (item) {
            item.quantity += 1;
            }
        },


        decreaseFromCart: (state, action) => {
          const productId = action.payload;
          const item = state.cart.find(item => item.id === productId);
          if (item) {
            if (item.quantity > 1) {
              item.quantity -= 1;
            } else {
            state.cart = state.cart.filter(item => item.id !== productId);
           } 
          }
        }
  }
})

export default productSlice.reducer
export const {addToCart , removeFromCart, increaseFromCart , decreaseFromCart} = productSlice.actions