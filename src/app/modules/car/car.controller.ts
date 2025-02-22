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

const deleteCarData = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params
    const deletedCar = await CarServices.deleteCarDataFromDB(carId)

    if (!deletedCar) {
      res.status(404).json({
        message: 'Car cannot found',
        success: false,
      })
    } else
      res.status(200).json({
        success: true,
        message: 'Car data deleted successfully',
        data: {},
      })
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting car',
      success: false,
      error: Error,
    })
  }
}

const updateCarData = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params
    const updateData = req.body

    const updatedCar = await CarServices.updateCarInDB(carId, updateData)

    if (!updatedCar) {
      res.status(404).json({
        status: false,
        message: 'Car is not found',
      })
    } else
      res.status(200).json({
        status: true,
        message: 'Car data updated successfully',
        data: updatedCar,
      })
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      message: 'Error updating car',
      success: false,
      error: err.message,
    })
  }
}

export const CarControllers = {
  createCar,
  getAllCars,
  getSingleCar,
  deleteCarData,
  updateCarData,
}
