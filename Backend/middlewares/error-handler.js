const errorHandlerMiddleware = (err, req, res, next)=>{
    try {
        if(err) {
            res.status(res.statusCode).send({message : err.message})
        } else {
            res.status(500).send({message : 'Something went wrong, please try again!'});
        }
    } catch (e) {
        console.log(e);
        throw new Error('Crashed');
    }
}

module.exports = errorHandlerMiddleware;