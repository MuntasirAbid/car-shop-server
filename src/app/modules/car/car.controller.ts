import { Request, Response } from 'express'
import { CarServices } from './car.service'

const createCar = async (req: Request, res: Response) => {
  try {
    const { car: carData } = req.body

    const result = await CarServices.createCarIntoDB(carData)

    res.status(200).json({
      success: true,
      message: 'Car is created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.getAllCarsFromDB()

    res.status(200).json({
      success: true,
      message: 'Cars retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const CarControllers = {
  createCar,
  getAllCars,
}
