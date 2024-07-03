import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
  const {username, email, password, firstname, middlename, lastname } = req.body;
  
  if(!username || !email || !password || username === '' || email === '' || password === ''){
    next(errorHandler(400, 'All fields are required'));
  }
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    firstname,
    middlename,
    lastname,
    username,
    email,
    password: hashPassword,
  });
  try{
    await newUser.save();
    res.json("Signup successful");
  
  }catch(error){
    next(error);
  }

}
export const signin = async (req, res, next) => {
  const {username, password} =  req.body;

  if(!username || !password || username === '' || password === ''){
    next(errorHandler(400, 'all fields are required'));
  }

  try{
    const validUser = await User.findOne({username});
    if(!validUser){
      return next(errorHandler(404, 'User not found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword){
      return next(errorHandler(400, 'Invalid password'));
    }

    const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET, { expiresIn: '1d'});
    const {password: pass, ...rest} = validUser._doc;

    res.status(200).cookie('access_token', token, {httpOnly: true}).json(rest);

  }catch(error){
    next(error);
  }
}