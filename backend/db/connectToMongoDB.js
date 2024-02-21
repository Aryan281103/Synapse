import mongoose from "mongoose";

export const connectToMongoDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to mongoDB")
    } catch (error) {
        console.log("Error connecting to mongoDB",error.message);
    }
}    