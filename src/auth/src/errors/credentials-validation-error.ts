import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

class CredentialsValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Invalid Credentials Parameters");
 
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, CredentialsValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }

}
export { CredentialsValidationError as CredentialsValidationError };

 