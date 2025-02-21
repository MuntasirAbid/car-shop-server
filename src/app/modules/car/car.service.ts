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

export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
}
