import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { CarRoutes } from './app/modules/car/car.route'

const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

app.use('/api', CarRoutes)

app.get('/', (req: Request, res: Response) => {
  const a = 10
  res.send(a)
})

export default app
