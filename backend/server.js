import express from 'express'
import events from './data/Events.js'

const app = express()

app.get('/api/events', (req, res) => {
    res.json(events)
})

app.get('/api/event/:id', (req, res) => {
    const event = events.find(e => e._id === req.params.id)
    res.json(event)
})

app.listen(8000, console.log('Server is now running on port 8000'))