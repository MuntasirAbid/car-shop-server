import { CarModel } from '../car.model'
import { OrderModel } from '../order.model'
import { Order } from './order.interface'

const createOrderIntoDB = async (order: Order) => {
  // Find the car in DB
  const car = await CarModel.findById(order.car)
  if (!car) {
    throw new Error('Car not found')
  }

  // Check if enough stock is available
  if (car.quantity < order.quantity) {
    throw new Error('Not enough stock available')
  }

  // Calculate total price
  order.totalPrice = car.price * order.quantity

  // Create the order
  const result = await OrderModel.create(order)

  // Update car stock
  car.quantity -= order.quantity
  if (car.quantity === 0) {
    car.inStock = false
  }
  await car.save()

  return result
}

const getTotalRevenueFromDB = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ])

  return result.length > 0 ? result[0].totalRevenue : 0
}

export const OrderServices = {
  createOrderIntoDB,
  getTotalRevenueFromDB,
}
