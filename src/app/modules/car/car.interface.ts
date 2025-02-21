import { Schema, model, connect } from 'mongoose'

export type Car = {
  brand: string
  model: string
  year: number
  price: number
  category: string
  description: string
  quantity: number
  inStock: boolean
}
