import "dotenv/config";
import mongoose from "mongoose";
import { seedDatabase } from "./index";

const run = async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI is not defined in environment");

    await mongoose.connect(uri);
    console.log("MongoDB connected");

    await seedDatabase();

    await mongoose.disconnect();
    console.log("MongoDB disconnected");
};

run().catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
});
