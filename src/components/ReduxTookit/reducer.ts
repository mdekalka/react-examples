import { createReducer } from "@reduxjs/toolkit"

import {
  fetchProductsLoading,
  fetchProductsSuccess,
  fetchProductsError,
  addProductSuccess,
  removeProductSuccess
} from "./actions"
import { Product } from "./types"

export interface State {
  products: Product[]
  meta: {
    fetching: boolean,
    error: string | null
  }
}

export const initialState: State  = {
  products: [],
  meta: {
    fetching: false,
    error: null,
  }
}

export const reducer = createReducer(initialState, {
  [fetchProductsLoading.type]: (state) => {
    state.meta.fetching = true
  },

  [fetchProductsSuccess.type]: (state, action) => {
    state.products = action.payload
    state.meta.error = null
    state.meta.fetching = false
  },

  [fetchProductsError.type]: (state, action) => {
    state.meta.error = action.payload
    state.meta.fetching = false
  },

  [addProductSuccess.type]: (state, action) => {
    // Actually, in real world you should be more specific and get data by named property like: <action.payload.products/action.payload.id>
    state.products.push(action.payload)
  },

  [removeProductSuccess.type]: (state, action) => {
    state.products = state.products.filter(({ id }) => id !== action.payload)
  }
})

