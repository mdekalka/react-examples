import React, { useState } from "react"
import { Provider } from 'react-redux'

import { store } from "./store"
import { Product } from "./types"

interface Props {
  products: Product[]
}

const ProductsPanel = ({ products }: Props) => {
  const [form, setForm] = useState({ type: "", price: 0, })

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(form => ({
      ...form,
      [e.target.name]: e.target.value
    }))
  }

  const onProductCreate = () => {

  }


  return (
    <div>
      <h4>Products</h4>
      {products.map(product => (
        <div>
          <h6>{product.type} --- { product.price}</h6>
          <button onClick={() => {}}>delete product</button>
        </div>
      ))}

      <form onSubmit={onProductCreate}>
        <div>
          <input type="text" name="type" value={form.type} onChange={onHandleChange} />
        </div>
        <div>
          <input type="number" name="type" value={form.price} onChange={onHandleChange} />
        </div>
        <button type="submit">add product</button>
      </form>
    </div>
  )
}

export const ProductsReduxToolkit = () => {
  return (
    <Provider store={store}>
      {/* <ProductsPanel /> */}
    </Provider>
  )
}
