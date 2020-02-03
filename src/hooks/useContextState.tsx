import React, { createContext, useContext, useReducer, Reducer, Dispatch } from "react"

interface Product {
  id: number
  title: string
  price: number
}

interface State {
  cartItems: Product[]
}

export enum CartActions {
  addToCart = "addToCart",
  removeFromCart = "removeFromCart",
  replaceProductInCart = "replaceProductInCart",
  clearCart = "clearCart"
}

interface AddToCart {
  type: typeof CartActions.addToCart,
  cartItem: Product
}

interface RemoveFromCart {
  type: typeof CartActions.removeFromCart,
  id: number
}

interface ReplaceProductInCart {
  type: typeof CartActions.replaceProductInCart,
  cartItem: Product
}

interface ClearCart {
  type: typeof CartActions.clearCart
}

type Actions = AddToCart | RemoveFromCart | ReplaceProductInCart | ClearCart

const initialState = {
  cartItems: [
    { id: 1, title: "milk", price: 20 },
    { id: 2, title: "apples", price: 15 },
    { id: 3, title: "meat", price: 45 }
  ]
}

const Context = createContext<{ state: State, dispatch: Dispatch<Actions>}>({
  state: initialState,
  dispatch: () => {}
});

const reducer: Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case CartActions.addToCart:
      return {...state, cartItems: [...state.cartItems, action.cartItem]}

    case CartActions.removeFromCart:
      return {...state, cartItems: state.cartItems.filter(({ id }) => id !== action.id )}

    case CartActions.replaceProductInCart:
        return {...state, cartItems: state.cartItems.map(item => item.id === action.cartItem.id ? action.cartItem : item )}

    case CartActions.clearCart:
        return {...state, cartItems: []}

    default: return state
  }
}

export const ContextProvider = ({ children }: { children?: React.ReactNode}) => {
  const [state, dispatch] = useReducer<Reducer<State, Actions>>(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export const useContextState = () => useContext(Context)