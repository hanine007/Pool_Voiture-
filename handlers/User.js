import prisma from "../db.js";
import { comparePassword, Creatjwt, hashPassword } from "../modules/auth.js";

export const creatUser =async(req,res)=>{
   const user = await prisma.user.create({
    data:{
        username:req.body.username,
        password: hashPassword(req.body.password),
        type:req.body.type
    }

   })
  

   
   const token = Creatjwt(user)
    res.json({token :token,
        data: user,
        
    },)

}
export const signin = async (req,res )=>{
 const user = await prisma.user.findUnique({
    where:{
        username:req.body.username
    }
 })  
 const validation = await comparePassword(req.body.password,user.password)
    if(!validation){
       res.status(401)
         res.json({message:"Invalid username or password"})
         return
}
const token = Creatjwt(user)
    res.json({token :token,
        message:"User Signed in"
    },)
}