import { CustomError } from "./custom-error";

const errorMessage = "Error Connecting To Database";

class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = errorMessage;

  constructor() {
    super(errorMessage);

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}


export { DatabaseConnectionError as DatabaseConnectionError };

