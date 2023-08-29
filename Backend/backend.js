const { app, express } = require('./route.global');
const { router } = require('./task.route');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./db');
const errorHandlerMiddleware  = require('./middlewares/error-handler');
const {loginRouter} = require('./login.route');
require('express-async-errors');
// app.use(json())
app.use(cors())
app.use(express.json());
app.use('/login', loginRouter);
app.use('/users', router);
app.use(errorHandlerMiddleware);

const start = () => { 
    connectDB('mongodb+srv://ingalemanish7:HWD6Gg3Wqqg3HEqQ@cluster0.s8axzyz.mongodb.net/?retryWrites=true&w=majority').then(()=>{
            app.listen(8080, console.log('Your first backend project!!'));
        }).catch((error)=>{
            console.log(error);
            console.log('Error Found')
        });
}

start();