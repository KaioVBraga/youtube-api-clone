interface IGlobalError {
  message: string;
  statusCode: number;
}

class GlobalError implements IGlobalError {
  message: string;
  statusCode: number;

  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default GlobalError;
