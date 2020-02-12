import { createSlice } from "@reduxjs/toolkit"

import { initialState } from './reducer'

// Slices are used instead of <createReducer, createAction> to combine both in one
// https://redux-toolkit.js.org/tutorials/intermediate-tutorial
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsLoading: (state) => {
      state.meta.fetching = true
    },
    fetchProductsSuccess: (state, action) => {
      state.products = action.payload
      state.meta.error = null
      state.meta.fetching = false
    },
    fetchProductsError: (state, action) => {
      state.meta.error = action.payload
      state.meta.fetching = false
    },
  
    addProductSuccess: (state, action) => {
      // Actually, in real world you should be more specific and get data by named property like: <action.payload.products/action.payload.id>
      state.products.push(action.payload)
    },
  
    removeProductSuccess: (state, action) => {
      state.products = state.products.filter(({ id }) => id !== action.payload)
    }
  }
})

export const { actions, reducer } = productsSlice