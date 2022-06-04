import mongoose from "mongoose";
const productSchema =new mongoose.Schema({
    name:{
      type:String,
      required:true
    }
});
export default mongoose.model("Angular",productSchema);