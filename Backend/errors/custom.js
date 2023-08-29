const {StatusCodes} = require('http-status-codes');
class customApiError extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = customApiError;