import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDatabase from "./config/database.js";
import connectToCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// app configuration
const app = express();
const port = process.env.PORT || 8000;

// this is to handle the cors error when trying to access the API for different domain
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

// middlewares configuration
// this is the middleware provided by Express which will read the request body and convert it into JS object
app.use(express.json());

// this is to read the cookies in the response sent
app.use(cookieParser());

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// connect to cloudinary
connectToCloudinary();

// connect to DB and server start
connectToDatabase()
  .then(() => {
    console.log("Connected to the database successfully");
    app.listen(port, () => {
      console.log("Server is running on http://localhost: " + port);
    });
  })
  .catch((err) => {
    console.error("Database connection failed");
    console.error(err);
  });
