import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import adminRouters from "./routes/adminRoutes.js";
import productRoutes from "./routes/productRoutes.js";
// multer set up
import path from "path";
import { fileURLToPath } from "url";
// middlewares
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import cookieParser from "cookie-parser";


const PORT = process.env.PORT || 3001;
const db = process.env.MONGODB_URI;

const app = express();
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(express.json());
// end setup

app.get('/', (req,res) => {
    res.send("Helelo there");
})

// Admin
app.use("/api/admin",  adminRouters);
// Product
app.use("/api/admin/dashboard/", productRoutes);

// uploads files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// "Not found" middlware
app.use((req, res) => {
    res.status(404).json({msg: "Oops! Page not found"});
})

// "Error" middleware
app.use(errorHandlerMiddleware);

// last
try {
    await mongoose.connect(db);
    app.listen(PORT, () => {
        console.log(`${PORT} connected ok`);
    });
} catch (error) {
    console.error(error);
    process.exit(1);
}