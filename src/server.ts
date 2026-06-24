import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { connectDB } from "./config/db";
import routes from "./routes";
import cors from "./middlewares/cors";

const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

app.use("/api", cors, routes);

const port = process.env.NODE_PORT;

const startServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
};

startServer();

export default app;
