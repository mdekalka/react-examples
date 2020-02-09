import React from "react"
import { Provider } from 'react-redux'

import { store } from "./store"

export const ProductsReduxToolkit = () => {
  return (
    <Provider store={store}>
      <div>Products list</div>
    </Provider>
  )
}
