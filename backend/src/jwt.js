import jwt from "jsonwebtoken";

const SECRET = 'kai-will-make-tony-rich';
export const generateToken = (email) => jwt.sign({ email, }, SECRET, { algorithm: 'HS256'});
export const verifyToken = (token) => jwt.verify(token, SECRET).email;