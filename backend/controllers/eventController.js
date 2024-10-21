import asyncHandler from 'express-async-handler'
import Event from '../models/eventModel.js'

export const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({})
  res.json(events);
})

export const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event) {
    res.json(event);
  } else {
    res.status(404);
    throw new Error('Event not found');
  }
})
//removed duplicate export of getEventByID 