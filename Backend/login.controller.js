const jwt  = require('jsonwebtoken');
const ERROR = require('./errors/custom');
const {StatusCodes} = require('http-status-codes');
const login = (req, res)=>{
    console.log('inside login controller')
    const { username , password} = req.body;

    if(!username || !password) {
        throw new ERROR('Please Provide Email and password');
    }

    else {
        const token = jwt.sign({username, password}, '1234', {expiresIn : '30d'});
        res.status(StatusCodes.CREATED).send({
            message : 'User created Successfully',
            token : token
        })
    }

}

module.exports = login;