import mongoose from "mongoose";

let isDBConnected = false;

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
        isDBConnected = true; // Update status
    } catch (error) {
        console.error(`Error: ${error.message}`);
        isDBConnected = false; // Update status
        process.exit(1); // Exit the process on connection failure
    }
};

export const getDBStatus = () => isDBConnected;
