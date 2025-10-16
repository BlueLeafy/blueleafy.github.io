// middleware/authMiddleware.js
import { UnauthenticatedError, UnauthorizedError } from "../utils/customErrors.js";
import { verifyJWT } from "jsonwebtoken";

// Authenticate User
export const authenticateUser = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) throw new UnauthenticatedError("Authentication falied!");
    try {
        const { userId, role } = verifyJWT(token);
        req.user = { userId, role };
        next();
    } catch (error) {
        throw new UnauthenticatedError("Authetication invalid!");
    }
}

// check how to user htis
const protectAdminRoutes = (req, res, next) => {
    // Check if user is authenticated AND has admin role
    if (!req.session.user || req.session.user.role !== "admin") {
        return res.status(403).json({ error: error })
    }
    next();
};

module.exports = { protectAdminRoutes };