import { CustomError } from "./custom-error";

const errorMessage = "Route Not Found"
class NotFoundError extends CustomError {
  statusCode = 404;
  reason = errorMessage;

  constructor() {
    super(errorMessage);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason  }];
  }
}

export { NotFoundError as NotFoundError };
