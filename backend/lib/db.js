import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
	try {
		console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
		console.log("Current working directory:", process.cwd());
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connecting to MONGODB", error.message);
		process.exit(1);
	}
};
