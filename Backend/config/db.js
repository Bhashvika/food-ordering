import mongoose from "mongoose";
export const connectDB=async ()=>{
     await mongoose.connect('mongodb+srv://bhashvika:9618487809@cluster0.992fxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
     .then(()=>console.log("database connected"))
}
