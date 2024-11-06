import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables (optional, if using dotenv)
dotenv.config();

// MongoDB connection string from environment variables
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING; // Ensure this is set in your .env file

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

// Update function
const updateCountInStock = async () => {
  const db = mongoose.connection;
  try {
    const result = await db.collection('events').updateMany(
      {
        $or: [
          { countInStock: { $exists: false } },  // If countInStock doesn't exist
          { countInStock: null }                 // If countInStock is explicitly null
        ]
      },
      { $set: { countInStock: 2 } }  // Set to your desired default value
    );
    console.log(`${result.modifiedCount} events updated with default countInStock`);
  } catch (error) {
    console.error('Failed to update events', error);
  } finally {
    mongoose.disconnect();
  }
};

// Main function to run the script
const main = async () => {
  await connectDB();      // Connect to the database
  await updateCountInStock();  // Update the events collection
};

main(); // Run the script
