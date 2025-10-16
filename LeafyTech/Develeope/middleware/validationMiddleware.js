// validationMiddleware.js
import { body, param, validationResult } from "express-validator";
import mongoose from "mongoose";
import { AUTH_ROLE } from "../utils/constants.js";
import User from "../models/userModel.js";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../utils/customErrors.js";

const withValidatorErrors = (validateValues) => {
    return [validateValues,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                if (errorMessages[0].startsWith("no job")) {
                    throw new NotFoundError(errorMessages);
                }
                if (errorMessages[0].startsWith("not authorized")) {
                    throw new UnauthorizedError("not authorized to access this route");
                }
                throw new BadRequestError(errorMessages);
            }

            next();
        }];
};

// Add product input valideiotn
export const validateProductInput = withValidatorErrors([
    // general infos
    body("name").notEmpty().withMessage("name is required"),
    body("brand").notEmpty().withMessage("brand is required"),
    body("company").notEmpty().withMessage("company is required"),
    body("applications").notEmpty().withMessage("At least one application is required"),
    body("parameters").notEmpty().withMessage("Parameter required at least 1"),
    body("description").notEmpty().withMessage("Description is required"),
    body("shortDescription").notEmpty().withMessage("Short description is required"),
    // SEO to add?
]);

// Register validation // r!! egister frontend required inputs !!
export const validateRegisterInput = withValidatorErrors([
    body("username").notEmpty().withMessage("username is required"),
    body("email").notEmpty().withMessage("email is required")
        .isEmail().withMessage("invalid email format")
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) throw new BadRequestError("email already exists");
        }),
    body("password").notEmpty().withMessage("password is required")
        .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body("firstName").notEmpty().withMessage("first name is required"),
    body("lastName").notEmpty().withMessage("last name is required")
])