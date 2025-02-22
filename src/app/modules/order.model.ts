import mongoose, { Schema } from 'mongoose'
import { Order } from './order/order.interface'

const OrderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const OrderModel = mongoose.model<Order>('Order', OrderSchema)
