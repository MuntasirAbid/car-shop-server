import { CarModel } from '../car.model'
import { Car } from './car.interface'

const createCarIntoDB = async (car: Car) => {
  const result = await CarModel.create(car)
  return result
}

const getAllCarsFromDB = async () => {
  const result = await CarModel.find()
  return result
}

const getSingleCarFromDB = async (carId: string) => {
  try {
    const result = await CarModel.findById(carId)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
  getSingleCarFromDB,
}
