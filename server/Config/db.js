import mongoose from "mongoose";
const connectDb=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected SuccessFully");
  }catch(error){
    console.log(error);
    console.log("Error while connect with database");
  }
}
export default connectDb;