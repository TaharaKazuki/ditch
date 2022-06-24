import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import path from 'path'

import userRouter from './routes/user'

dotenv.config({ path: path.resolve(__dirname, './config/config.env') })

const port = 8000

const app = express()

app.use(morgan('dev'))
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/users', userRouter)

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.info(`server running ${port}`))
  })
  .catch((error) => console.info(`${error} did not connect`))
