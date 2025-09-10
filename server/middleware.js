const jwt = require('jsonwebtoken');
const { User } = require('./models');


const authMiddleware = async (req, res, next) => {
const token = req.headers.authorization?.split(' ')[1];
if(!token) return res.status(401).json({ message: 'No token' });
try{
const payload = jwt.verify(token, process.env.JWT_SECRET);
req.user = await User.findById(payload.id).select('-password');
next();
}catch(err){
return res.status(401).json({ message: 'Invalid token' });
}
}


module.exports = { authMiddleware };