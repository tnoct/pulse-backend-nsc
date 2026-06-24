import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from "./routes";
import cors from "./middlewares/cors";
import "dotenv/config";

const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

app.use("/api", cors, routes);
const port = process.env.NODE_PORT;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

export default app;
