import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();


export const comparePassword =  (password,hashedPassword)=>{ // fonction pour comparer le mot de passe avec le mot de passe hashé
    return  bcrypt.compare(password, hashedPassword);
     
}


export const hashPassword = async (password)=>{ // fonction pour hasher le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword;
}

export  const Creatjwt = (user)=>{ // fonction pour créer le token
const token = jwt.sign({id:user.id,username:user.username},process.env.SECRET_KEY,{expiresIn:'1h'});
return token; // retourne le token
}
export const protection =(req,res,next)=>{
const bearer = req.headers.authorization;
if(!bearer){
    res.status(401)
    res.json ({message:"Unauthorized"});
    return;
}
const [,token] = bearer.split(' ');// extrait le token du bearer juste le token l'autre partie est ignorée
if(!token){
    res.status(401)
    res.json ({message:"Unauthorized"});
    return;
}
try{
const decoded = jwt.verify(token,process.env.SECRET_KEY) // vérifie le token
req.user=decoded;
console.log(decoded); 

next();

}catch(err){
    console.error(err)
    res.status(401)
    res.json ({message:"Unauthorized"});
    return;


}
}
