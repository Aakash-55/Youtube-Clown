class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something Went Wrong ",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.date = null
        this.success = false;
        this.errors = errors

        if (statck) {
            this.stack = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}