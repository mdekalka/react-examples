import { Product } from "./types"

export const delay = (ms: number = 1500) => new Promise((resolve) => setTimeout(resolve, ms))

let products = [
  { id: 1, type: "Jewelery", price: 1232 },
  { id: 2, type: "Toys", price: 3464 },
  { id: 3, type: "Games", price: 6437 },
  { id: 4, type: "Health", price: 4323 },
  { id: 5, type: "Industrial", price: 2343 }
]

export const getProducts = async () => {
  await delay()

  return [...products]
}

export const createProduct = async (product: Product) => {
  await delay()

  products.push(product)
  return products
}

export const deleteProduct = async (productId: number) => {
  await delay()

  products = products.filter(({ id }) => id !== productId )

  return products
}
