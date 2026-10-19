import express from "express";
import cors from "cors";
import connectDb from "./Config/db.js";
import ShoppingRoutes from "./Routes/ShoppingRoutes.js"
import dotenv from "dotenv";
dotenv.config();
const app=express();
connectDb();
app.use(express.json());
app.use(cors());
app.use("/api/Products",ShoppingRoutes);
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
  console.log(`Server is running on PORT ${PORT}`);
})