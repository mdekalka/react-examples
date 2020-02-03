import React, { useState } from "react"

import { ContextProvider, useContextState, CartActions } from "../../hooks"

const NestedComponent = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const { state, dispatch } = useContextState()

  const resetState = () => {
    setTitle("")
    setPrice(0)
  }

  const onItemAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !price) {
      return
    }

    dispatch({ type: CartActions.addToCart, cartItem: { id: Math.random(), title, price } })
    resetState()
  }

  const onItemChange = (id: number) => {
    if (!title || !price) {
      return
    }

    dispatch({ type: CartActions.replaceProductInCart, cartItem: { id, title, price } })
    resetState()
  }

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => setPrice(+e.target.value)

  return (
    <div>
        <h5>Cart items</h5>
        <ul>
          {state.cartItems.map(item => (
            <li key={item.id}>
              <div>{item.title} --- {item.price}</div>
              <button onClick={() => dispatch({ type: CartActions.removeFromCart, id: item.id })}>remove item</button>
              <button onClick={() => onItemChange(item.id)}>change item</button>
            </li>
          ))}
        </ul>

        <form onSubmit={onItemAdd}>
          <div>
            <input type="text" name="title" value={title} onChange={onTitleChange} />
          </div>
          <div>
            <input type="number" name="price" value={price} onChange={onPriceChange} />
          </div>
          <button type="submit">add item</button>
        </form>

        <button onClick={() => dispatch({ type: CartActions.clearCart })}>clear cart</button>
    </div>
  )
}

export const WithHookContext = () => {
  return (
    <ContextProvider>
      <div>
        <h4>Imagine this is a deep nested components tree...</h4>
        <NestedComponent />
      </div>
    </ContextProvider>
  )
}
