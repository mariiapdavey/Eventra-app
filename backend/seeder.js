import dotenv from 'dotenv'
import connectDB from './config/db.js'
import Event from './models/eventModel.js'
import events from './data/Events.js'
import users from './data/users.js'
import User from './models/userModel.js'

dotenv.config()
connectDB()

const importData = async () => {
    try {


}   catch (error){
    console.error(`Error: ${error.message}`)
    process.exit(1)
    }
}