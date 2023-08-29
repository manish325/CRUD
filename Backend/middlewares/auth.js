const customApiError = require('./../errors/custom');
const StatusCodes = require('http-status-codes');

const authenticate = (req, res, next)=>{
    token = req.headers.authorization;
    if(!token || token.split(' ')[0]!=='Bearer') {
        res.status(StatusCodes.StatusCodes.UNAUTHORIZED);
        throw new customApiError('Access denied');
    }
     else {
        next();
     }
}

module.exports = authenticate;