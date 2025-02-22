import { model, Schema } from 'mongoose'
import { Car } from './car/car.interface'

const carSchema = new Schema<Car>(
  {
    brand: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    year: { type: Number, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, trim: true },
    inStock: { type: Boolean, required: true, trim: true },
  },
  { timestamps: true },
)

export const CarModel = model<Car>('Car', carSchema)
