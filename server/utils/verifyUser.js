import jwt  from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if(!token){
    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if(err){
      return next(errorHandler(401, 'Unauthorized'))
    }
    req.user = user;
    next();
  })
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) return next(err);
    if (req.user.role !== 'admin') {
      return next(errorHandler(403, 'Forbidden'));
    }
    next();
  });
};