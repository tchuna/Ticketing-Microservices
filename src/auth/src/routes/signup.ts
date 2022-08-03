import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { CredentialsValidationError } from "../errors/credentials-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new CredentialsValidationError(errors.array());
    }

    console.log("Creating a user...");
    throw new DatabaseConnectionError();

    res.send({});
  }
);

export { router as signupRouter };
