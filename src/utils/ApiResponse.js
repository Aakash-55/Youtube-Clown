class ApiResponse {
    constructor(statusCode, data , message  = "Success"){
        this.statusCode = statusCode
        this.Data = data
        this.message = message
        this.success = statusCode < 400 
    }
}