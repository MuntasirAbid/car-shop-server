import express, { Application } from 'express'
import cors from 'cors'
import { CarRoutes } from './app/modules/car/car.route'
import { OrderRoutes } from './app/modules/order/order.routes'

const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

app.use('/api', CarRoutes, OrderRoutes)

export default app
