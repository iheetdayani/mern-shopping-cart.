import axios from "axios";

const API_URL="http://localhost:5000/api/Products";
export const GetAllProducts=async()=>{
  try{
   const response=await axios.get(API_URL);
   return response.data;
  }catch(error){
    console.log(error);
    throw error;
  }
}