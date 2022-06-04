
import expressJWT from "express-jwt";
 
export const checkAuth =(request,response,next)=>{
const isAdmin = true;
if(isAdmin){
    console.log("xin chao admin");
    next();
}else{
    console.log("Ban khong co quyen truy cap");
}
}

export const requireSignin = expressJWT({
    secret:"123456",
    algorithms:["HS256"],
    requestProperty:"auth"
})

export const isAuth = (request,response,next)=>{
    console.log(request.auth);
    console.log(request.profile);
    const user= request.profile._id==request.auth._id;
    if(!user){
        return response.status(400).json({message:"ban khong co quyen truy cap"});
    }
    next();
}
export const isAdmin = (request,response,next)=>{
    if(request.profile.role==0){
        return response.status(400).json({message:"ban khong phai la admin"});
    }
    next();
}