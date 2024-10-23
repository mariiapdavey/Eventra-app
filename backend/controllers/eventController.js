import asyncHandler from 'express-async-handler'
import Event from '../models/eventModel.js'

//removed duplicate export
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({})
  res.json(events);
})

//removed duplicate export
const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event) {
    res.json(event);
  } else {
    res.status(404);
    throw new Error('Event not found');
  }
})

export {getEvents, getEventById}
//readded export functions because they are imported in eventRoutes.js