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
        await Event.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleEvents = events.map(event => {
            return {...event, user: adminUser} 
        })
        await Event.insertMany(sampleEvents)

        console.log('Data imported!')
        process.exit(1)

}   catch (error){
    console.error(`Error: ${error.message}`)
    process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await Event.deleteMany()
        await User.deleteMany()    

        console.log('Data destroyed!')
        process.exit(1)
        
    } catch (error){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
if (process.argv[2] === '-d'){
    destroyData()
} else {
    importData()
}