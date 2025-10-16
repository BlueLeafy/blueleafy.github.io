import express from "express";
import { addProduct, getAllProducts, getSingleProduct } from "../controllers/productController.js";
import { validateProductInput } from "../middleware/validationMiddleware.js";
import upload from "../multer/multerConfig.js";

const router = express.Router();

// Create/Add new
router.post("/crea-prodotto",
    // Multer
    upload.fields([
        { name: "images", maxCount: 10 },
        { name: "videos", maxCount: 5 }
    ]),
    validateProductInput,
    addProduct);

// Get all products
router.get("/prodotti", getAllProducts);
// get on product
router.get("/prodotti/:id", getSingleProduct);

export default router;