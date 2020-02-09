import { createReducer } from "@reduxjs/toolkit"

import {fetchProductsLoading, fetchProductsSuccess, fetchProductsError} from "./actions"
import { Product } from "./types"

interface State {
  products: Product[]
  meta: {
    fetching: boolean,
    error: string | null
  }
}

const initialState: State  = {
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
  }
})