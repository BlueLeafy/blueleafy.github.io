// controllers/userControllers.js
import { StatusCodes } from "http-status-codes";
import User from "../models/userModel";

export const getCurrentlyUser = async(req, res) => {
    const user = await User.findOne({_id: req.user.userId});
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({user: userWithoutPassword});
}