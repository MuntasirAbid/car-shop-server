import { Request, Response } from 'express'
import { CarServices } from './car.service'
import carValidationSchema from './car.validation'
import { ZodError } from 'zod'

const createCar = async (req: Request, res: Response) => {
  try {
    const { car: carData } = req.body

    //data validation using zod

    const validationData = carValidationSchema.parse(carData)

    const result = await CarServices.createCarIntoDB(validationData)

    res.status(200).json({
      success: true,
      message: 'Car is created successfully',
      data: result,
    })
  } catch (error) {
    if (error instanceof ZodError) {
      // Extract validation errors
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.format(), // Structured Zod error
      })
    } else
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      })
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
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params
    const result = await CarServices.getSingleCarFromDB(carId)

    res.status(200).json({
      success: true,
      message: 'Car retrieved successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

export const CarControllers = {
  createCar,
  getAllCars,
  getSingleCar,
}
