import { Request, Response } from 'express'
import { OrderServices } from './order.service'

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body
    const order = await OrderServices.createOrderIntoDB(orderData)

    res.status(201).json({
      status: true,
      message: 'Order created successfully',
      data: order,
    })
  } catch (error) {
    res.status(400).json({
      status: false,
      message: (error as Error).message,
    })
  }
}

const getTotalRevenue = async (_req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderServices.getTotalRevenueFromDB()

    res.status(200).json({
      status: true,
      message: 'Revenue calculated successfully',
      data: { totalRevenue },
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: (error as Error).message,
    })
  }
}

export const OrderController = {
  createOrder,
  getTotalRevenue,
}
