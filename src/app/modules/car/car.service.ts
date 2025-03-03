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
    console.log(error)
    throw new Error('Error deleting car')
  }
}

//function to update data in DB collection
const updateCarInDB = async (carId: string, updateData: Partial<Car>) => {
  try {
    const result = await CarModel.findByIdAndUpdate(carId, updateData, {
      new: true,
      runValidators: true,
    })
    return result
  } catch (error) {
    console.log(error)
    throw new Error('Error updating car')
  }
}

export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
  getSingleCarFromDB,
  deleteCarDataFromDB,
  updateCarInDB,
}
