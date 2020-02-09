import { createAction, Dispatch } from "@reduxjs/toolkit"

import { getProducts } from "./api"
import { Product } from "./types"

export const fetchProductsLoading = createAction("FETCH_PRODUCTS_LOADING")
export const fetchProductsSuccess = createAction<Product[]>("FETCH_PRODUCTS_SUCCESS", )
export const fetchProductsError = createAction<string>("FETCH_PRODUCTS_ERROR")

export const fetchProducts = () => async (dispatch: Dispatch) => {
  dispatch(fetchProductsLoading())

  try {
    const products = await getProducts()
    dispatch(fetchProductsSuccess(products))
  } catch (e) {
    dispatch(fetchProductsError(e.message))
  }
}
