// controllers/adminControllers.js
import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import { comparePassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../utils/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

// Login
export const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    const isValidUser = user && (await comparePassword(req.body.password, user.password));
    if (!isValidUser) throw new UnauthenticatedError("Invalid credentials");

    const token = createJWT({ userId: user._id, role: user.role });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
    });
    res.status(StatusCodes.OK).json({ user, token });
}

// Logout
export const logout = async (req, res) => {
    res.status(StatusCodes.OK).json({ msg: "logged out!" })
}

// Get all users (only admin can access this)
export const getAllUsers = async (req, res) => {
    const users = await User.find(req.users);
    res.status(StatusCodes.OK).json({ users });
}

// Read user by id (logged user)
export const getUser = async (req, res) => {
    const user = await User.findOne({_id: req.user.userId});
    res.status(StatusCodes.OK).json({ user });
};

// Update


// Delete