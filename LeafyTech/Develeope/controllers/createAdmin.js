import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import userModel from "../models/userModel.js";
import { hashPassword } from "../utils/passwordUtils.js";

export const createAdmin = async (req, res) => {
    const isFirstAccount = (await userModel.countDocuments()) === 0;
    req.body.role = isFirstAccount ? "admin" : "user";

    // hashedPassord
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: "user created" });
};