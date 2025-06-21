import {configureStore} from "@reduxjs/toolkit"
import productSliceReducer  from "./ProductSlice"
import { addToCart } from "./ProductSlice"

const store = configureStore({
    reducer : {
        example : productSliceReducer
    }
})

export default store