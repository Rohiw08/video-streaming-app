class ApiResponse {
    constructor(
        satusCode,
        data,
        message = "Success",
    ){
        this.statusCode = statusCode < 400;
        this.data = data;
        this.message = message;
        this.success = true;
    }
}