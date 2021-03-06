import { createAction, Dispatch } from "@reduxjs/toolkit"

import { getProducts, createProduct, deleteProduct } from "./api"
import { Product } from "./types"
import { actions } from './slice'

export const fetchProductsLoading = createAction("FETCH_PRODUCTS_LOADING")
export const fetchProductsSuccess = createAction<Product[]>("FETCH_PRODUCTS_SUCCESS")
export const fetchProductsError = createAction<string>("FETCH_PRODUCTS_ERROR")

export const addProductSuccess = createAction<Product>("ADD_PRODUCT_SUCCESS")
export const removeProductSuccess = createAction<number>("REMOVE_PRODUCT_SUCCESS")

export const fetchProducts = () => async (dispatch: Dispatch) => {
  dispatch(actions.fetchProductsLoading())

  try {
    const products = await getProducts()
    dispatch(actions.fetchProductsSuccess(products))
  } catch (e) {
    dispatch(actions.fetchProductsError(e.message))
  }
}

export const addProduct = (product: Product) => async (dispatch: Dispatch) => {
  await createProduct(product)

  dispatch(actions.addProductSuccess(product))
}

export const removeProduct = (id: number) => async (dispatch: Dispatch) => {
  await deleteProduct(id)

  dispatch(actions.removeProductSuccess(id))
}
