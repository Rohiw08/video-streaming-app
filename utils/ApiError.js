class ApiError extends Error {
    constructor(
        data,
        statusCode,
        success,
        message = "Something went wrong",
        error = [],
        stack = "",
    ) {
        super(message);
        this.status = statusCode;
        this.error = error;
        this.message = message;
        this.data = null;
        this.success = false;

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constuctor);
        }
    }
};

export {ApiError}