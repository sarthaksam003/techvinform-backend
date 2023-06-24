import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cors from "cors";

// exporting the express app for usage in server.js
export const app = express();

//linking the environment variables from the .env file
config({ path: "./data/config.env" });

//using middleware to extract input from the post request in req.body
app.use(express.json());

//to enable cross origin resource sharing and establish what methods are permitted when using the API
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//hooking up the app with the router that has actions that can be done with the user's form data
app.use("/formdata", userRouter);

//To test if the backend is running or not
app.get("/", (req, res) => {
  res.send("App is running");
});
