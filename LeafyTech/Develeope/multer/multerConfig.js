// multerConfig.js
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Store in public/uploads for easy access
        const uploadDir = path.join(process.cwd(), "public/uploads/");

        // Ensure directory exists
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        console.log(`${uploadDir}`);
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        // Create unique filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const originalName = file.originalname.replace(/\s+/g, '-').toLowerCase();
        const filename = "product-" + originalName;
        console.log(filename);
        cb(null, filename);
    }
});

// File filter (optional)


// uplaod
const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    }
});

export default upload;