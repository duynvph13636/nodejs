import mongoose ,{ObjectId} from "mongoose";

const productSchema =new mongoose.Schema({
    name:{
      type:String,
      required:true
    }
    // price:{
    //     type:Number,
    //     required:true
    // },
    // image:{
    //     type:String,
    //     required:true
    // },
    // categoryId:{
    //   type:ObjectId,
    //   ref:"Categories"
    // }
});
export default mongoose.model("Product",productSchema);