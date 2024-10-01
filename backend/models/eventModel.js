import mongoose from 'mongoose'

const commentSchema = mongoose.Schema ({ //added if want to build Comments component on each event
    commenterName: {
        type: String,
        required: true
    },
    comment: {
        type: String
    }
},{
    timestamps: true
})

const venueSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

const eventSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    venue: venueSchema,
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    comments: [commentSchema]
}, {
    timestamps: true

})

const Event = mongoose.model('events', eventSchema)
export default Event