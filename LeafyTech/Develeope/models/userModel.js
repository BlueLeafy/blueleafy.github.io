import mongoose from "mongoose";
import {AUTH_ROLE} from "../utils/constants.js"

const UserSchema = new mongoose.Schema({
    // Basic
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    // Person infos
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    // Profile
    avatar: {
        type: String
    },
    // Contact infos
    phone: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }, 
    isActive: {
        type: Boolean,
        default: false
    },
    passwordChangedAt: Date
}, {
    timestamps: true
});

export default mongoose.model("User", UserSchema);