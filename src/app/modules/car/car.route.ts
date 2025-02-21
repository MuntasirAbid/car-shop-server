import express from 'express'
import { CarControllers } from './car.controller'

const router = express.Router()

//will call controller
router.post('/cars', CarControllers.createCar)
router.get('/cars', CarControllers.getAllCars)
router.get('/cars/:carId', CarControllers.getSingleCar)

export const CarRoutes = router
