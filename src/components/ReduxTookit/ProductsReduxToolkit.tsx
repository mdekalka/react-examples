import React, { useState, useEffect, useCallback } from "react"
import { Provider, useDispatch, useSelector } from 'react-redux'

import { store } from "./store"
import { Product } from "./types"
import { State } from "./reducer"
import { fetchProducts, addProduct, removeProduct } from "./actions"

interface Props {
  products: Product[]
  onProductRemove: (id: number) => void
  onProductAdd: (product: Product) => void
}

const initialState = {
  type: "",
  price: 0
}

const ProductsPanel = ({ products, onProductRemove, onProductAdd }: Props) => {
  const [form, setForm] = useState(initialState)

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e

    setForm(form => ({
      ...form,
      [target.name]: target.value
    }))
  }

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.type || !form.price) {
      return
    }

    onProductAdd({ id: Math.random(), type: form.type, price: +form.price})
    setForm(initialState)
  }

  return (
    <div>
      <h4>Products</h4>
      {products.map(product => (
        <div key={product.id}>
          <div>{product.type} --- { product.price}</div>
          <button onClick={() => onProductRemove(product.id)}>delete product</button>
        </div>
      ))}

      <br/>
      <br/>
      <br/>

      <form onSubmit={onHandleSubmit}>
        <div>
          <input type="text" name="type" value={form.type} onChange={onHandleChange} />
        </div>
        <div>
          <input type="number" name="price" value={form.price} onChange={onHandleChange} />
        </div>
        <button type="submit">add product</button>
      </form>
    </div>
  )
}

const ProductsContainer = () => {
  const products = useSelector((state: State) => state.products)
  const dispatch = useDispatch()
  const { fetching, error } = useSelector((state: State) => state.meta)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const onProductRemove = useCallback((id: number) => {
    dispatch(removeProduct(id))
  }, [dispatch])

  const onProductAdd = useCallback((product: Product) => {
    dispatch(addProduct(product))
  }, [dispatch])

  if (fetching) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <ProductsPanel
        products={products}
        onProductRemove={onProductRemove}
        onProductAdd={onProductAdd}
      />
    </div>
  )
}

export const ProductsReduxToolkit = () => {
  return (
    <Provider store={store}>
      <ProductsContainer />
    </Provider>
  )
}
