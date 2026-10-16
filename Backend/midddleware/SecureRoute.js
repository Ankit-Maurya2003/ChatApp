import User from "../models/user.js";
import  jwt  from "jsonwebtoken";
const SecureRoute = async(req,res,next)=>{
try {
    const token = req.cookies.jwt;
    if(!token){
        return res.status(401).json({error:"Not token find"})
    }
    const decoded = jwt.verify(token,process.env.JWT_TOKEN);
    if(!decoded){
        return res.status(401).json({error:"invalid token"})
    }
    const user = await User.findById(decoded.userId).select("-password");
    if(!user){
        return res.status(401).json({error:"No user authoried"})
    }
    req.user = user;
    next();
} catch (error) {
    console.log("Error in SecureRoute:"+error);
    res.status(500).json({error: "Internal Server error"})
    
    
}

}
export default SecureRoute;