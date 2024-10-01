import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import errorHandler from './middleware/errorMiddleware.js'
import eventRoutes from './routes/eventRoutes.js'

const app = express()
dotenv.config()
connectDB()

app.use('/api/events', eventRoutes)

app.use(errorHandler)

app.listen(8000, console.log('Server is now running on port 8000'))