import { CarModel } from '../car.model'
import { Car } from './car.interface'

const createCarIntoDB = async (car: Car) => {
  const result = await CarModel.create(car)
  return result
}

//function to get all existing car data from DB
const getAllCarsFromDB = async () => {
  const result = await CarModel.find()
  return result
}

//function to get a single car data from DB
const getSingleCarFromDB = async (carId: string) => {
  try {
    const result = await CarModel.findById(carId)
    return result
  } catch (error) {
    console.log(error)
  }
}

//function to delete a specific car data from DB
const deleteCarDataFromDB = async (carId: string) => {
  try {
    const result = await CarModel.findByIdAndDelete(carId)
    return result
  } catch (error) {
    throw new Error('Error deleting car')
  }
}

export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
  getSingleCarFromDB,
  deleteCarDataFromDB,
}
