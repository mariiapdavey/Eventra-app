import express from 'express'
import dotenv from 'dotenv'
import events from './data/Events.js'
import connectDB from './config/db.js'

const app = express()
dotenv.config()
connectDB()

app.get('/api/events', (req, res) => {
    res.json(events)
})

app.get('/api/event/:id', (req, res) => {
    const event = events.find(e => e._id === req.params.id)
    res.json(event)
})

app.listen(8000, console.log('Server is now running on port 8000'))