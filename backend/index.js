dotenv.config();
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import urlRoutes from "./routes/url.routes.js";
import { getUrl } from "./controllers/url.controller.js";


const app = express();

app.use(express.json());
app.use(cors({ 
  origin: `${process.env.FRONTEND_URL}`, 
  methods: ["GET", "POST"] 
}));

app.use("/api",urlRoutes);
app.get("/:shortID", getUrl);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running on port 2000");
  });
});
