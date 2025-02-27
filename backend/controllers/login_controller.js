import UserModel from '../models/user_model.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken';
dotenv.config();


export async function signUp(req ,resp) {
    const user = req.body;
    const salt = await  bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    await UserModel.create(user);
    resp.status(201).json({message: "User created successfully"});
}
export async function signIn(req ,resp) {
    const user= await UserModel.findOne({"email": req.body.email});
    if(user) {
      const result= await bcrypt.compare(req.body.password,user.password);
      if(result) {
        // generer le token
       const jwtToken=await jwt.sign({"email":user.email},process.env.SECRET_KEY);
       resp.status(200).json({jwtToken});
       return;
    }
    }

    resp.status(401).json({message: "login ou password incorrect"});

}
export default UserModel;