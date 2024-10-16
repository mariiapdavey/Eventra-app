import express from 'express'
import { getEventById, getEvents } from '../controllers/eventController.js'

const router = express.Router()

// @desc Fetch all events
// @route GET /api/events
// @access public
router.get('/', getEvents)

// @desc Fetch single event
// @route GET /api/events/:id
// @access public
router.get('/:id' , getEventById)

export default router