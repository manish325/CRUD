const login = require("./login.controller");
const router = require('express').Router();
router.post('/', login);

module.exports = {
    loginRouter : router
};