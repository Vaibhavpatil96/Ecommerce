import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGODB_URI){
    throw new Error(
        "Please provide the MONGODB_URI in env file"
    )
}

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connection established!")
    } catch (error) {
        console.log("MongoDB connection error!", error);
        process.exit(1);
    }
}

export default connectDB;