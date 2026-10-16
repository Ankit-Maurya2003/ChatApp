import express from "express";
import dotenv from "dotenv";
import { Connect } from "./database/db.js";
import user from "./routes/user.js";
import Message from "./routes/messageroute.js";
import cors from 'cors'
import cookieParser from "cookie-parser";
import { app, server } from "./socketIO/server.js";

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://chat-app-first-23.vercel.app",
    ],
    credentials: true,
  })
);
const port = process.env.PORT || 4001;
Connect();

app.use("/user", user);
app.use("/sendUser",Message);


server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
