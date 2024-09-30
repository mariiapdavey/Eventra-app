import express from 'express'
import dotenv from 'dotenv'
import events from './data/Events.js'
import connectDB from './config/db.js'
import errorHandler from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()
connectDB()

app.get('/api/events', (req, res) => {
    res.json(events)
})

app.use(errorHandler)

app.listen(8000, console.log('Server is now running on port 8000'))