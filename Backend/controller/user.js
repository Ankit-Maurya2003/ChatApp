import User from '../models/user.js';
import bcrypt from 'bcrypt';
import createTokenAndSaveCookie from '../jwt/genrateToken.js'
export const signup = async(req,res) =>{
const{fullname,email,password,confirmpassword} = req.body;
try {
    if(password !== confirmpassword){
    return res.status(400).json({error:"password not match"})
}
const user = await User.findOne({email});
if(user){
    return res.status(400).json({error:"user already registered"})
}
const hashPassword = await bcrypt.hash(password,10)
const newUser = await new User({
    fullname,
    email,
    password:hashPassword

})
await newUser.save();
if(newUser){
    createTokenAndSaveCookie(newUser._id,res);
    res.status(201).json({message:"user create Successfull ...", newUser:{
 
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email
        
    }})
}


    
} catch (error) {
    console.log(error);
    res.status(500).json({error:"internal Server Error"})

    
    
}


}
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        // User nahi mila
        if (!user) {
            return res.status(400).json({
                error: "Invalid user credential"
            });
        }

        // Password check
        const isMatch = await bcrypt.compare(password, user.password);

        // Password match nahi hua
        if (!isMatch) {
            return res.status(400).json({
                error: "Invalid user credential"
            });
        }

        // Token generate
        createTokenAndSaveCookie(user._id, res);

        res.status(200).json({
            message: "Login successful.....",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
export const logout = async(req,res)=>{
    try {
        res.clearCookie("jwt"
           
        );
        res.status(201).json({message:"User Logout Successfull....."})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"})
        
        
    }
}
export const allUser = async(req,res)=>{
    try {
        const logedIn = req.user._id;
        const fillterUser = await User.find({_id:{$ne:logedIn},}).select("-password");
        res.status(201).json(fillterUser);
        
    } catch (error) {
        console.log("Error All User controller:" + error);
        
        
    }
}