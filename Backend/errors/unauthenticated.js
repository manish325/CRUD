import { customApiError } from "./custom";

const { StatusCodes } = require("http-status-codes");

export class unauthenticated extends customApiError {
    constructor(message) {
        super(message);
        // this.statusCode = StatusCodes.UNAUTHORIZED;
    }

}