import express from 'express'
import { CarControllers } from './car.controller'

const router = express.Router()

//will call controller
router.post('/cars', CarControllers.createCar)

export const CarRoutes = router
