import User from "../models/user";
import jwt from "jsonwebtoken";
export const Signup = async (request, response) => {
  const { name, email, password } = request.body;
  try {
    const exitUser = await User.findOne({ email }).exec();
    if (exitUser) {
      return response.json({ message: "email da ton tai" });
    }
    const user = await new User({ email, name, password }).save();
    response.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    response.status(400).json({ message: "signup that bai" });
  }
};
export const Signin = async(request, response) => {
    const {email,password}= request.body;
    try {
       const user = await User.findOne({email}).exec();
       if(!user){
         return response.json({message:"email khong ton tai"})
       }
       if(!user.authenticatepass(password)){
        return response.json({message:"mat khau khong chinh xac"})
       }
       const token = jwt.sign({_id:user._id},"123456",{expiresIn:"1d"});
       response.json({
         token,
         user:{
           _id:user._id,
           email:user.email,
           name:user.name
         }
       })
    } catch (error) {
      console.log(error);
    }
};
