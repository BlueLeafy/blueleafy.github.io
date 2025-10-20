// productController.js
import { StatusCodes } from "http-status-codes";
import Product from "../models/productModel.js";

// CRUD

// Create
export const addProduct = async (req, res) => {
    console.log(req.body);
    console.log(typeof req.files);

    console.log(req.files);


    if (req.files) {
        console.log(Object.keys(req.files));

        Object.keys(req.files).forEach(fieldName => {
            console.log(fieldName);
            console.log(Array.isArray(req.files[fieldName]));

        })
    }


    // Upload files
    // Images
    const images = [];
    if (req.files && req.files.images) {
        req.files.images.forEach(file => {
            images.push({
                url: `/uploads/${file.filename}`, // Relative path for web access
                altText: req.body.imageAltText?.[file.originalname] || file.originalname,
                captionText: req.body.imageCapiton?.[file.originalname] || ''
            });
        });
    }
    // Videos
    const videos = [];
    if (req.files && req.files.videos) {
        // For upload video files
        videos.push({
            url: `/uploads/${file.filename}`,
            thumbnail: req.body.videoThumbnail?.[file.originalname] || '',
            type: "direct" // Since it is uploaded
        });
    };

    // Split appications and parameters keywords by ';'
    const applications = req.body.applications ? req.body.applications.split(';').map(item => item.trim()).filter(item => item) : [];
    const parameters = req.body.parameters ? req.body.parameters.split(';').map(item => item.trim()).filter(item => item) : [];

    // Store the applications and products formed keywords
    const productData = {
        ...req.body,
        applications,
        parameters,
        media: {
            images,
            videos
        }
    }

    // Request create product
    const product = await Product.create(productData);
    res.status(StatusCodes.OK).json({ msg: "Added product!" });
};


// Read
export const getAllProducts = async (req, res) => {
    // FILTER by params
    const { search, company, applications, parameters, sort } = req.query; // add sorting

    const queryObj = {};

    // Filters
    if (company && company !== "all" && company.trim() !== '') {
        queryObj.company = company;
    }

    if (applications && applications !== "all" && applications.trim() !== '') {
        queryObj.applications = applications;
    }

    if (parameters && parameters !== "all" && parameters.trim() !== '') {
        queryObj.parameters = parameters;
    }

    // Filters only for admin

    // Sort
    const sortOptions = {
        "a-z": "position",
        "z-a": "-position"
    };

    const sortKey = sortOptions[sort] || sortOptions["a-z"];

    // Search
    if (search && search.trim() !== '') {
        queryObj.$or = [
            { name: { $regex: search, $options: 'i' } },
            { brand: { $regex: search, $options: 'i' } },
            { company: { $regex: search, $options: 'i' } },
            { applications: { $regex: search, $options: 'i' } },
            { parameters: { $regex: search, $options: 'i' } },
        ];
    };

    // how to show result
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // get filtered prodcts (for display)
    const products = await Product.find(queryObj).sort(sortKey).skip(skip).limit(limit);
    // count how many results
    const totalProducts = await Product.countDocuments(queryObj);
    const numOfPages = Math.ceil(totalProducts / limit);
    
    // Get all products for filter options (without pagination / filters)
    const allProducts = await Product.find({}).select("company applications parameters").lean();

    res.status(StatusCodes.OK).json({ products, totalProducts, currentPage: page, numOfPages, allProducts });
};

// Get single product
export const getSingleProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(StatusCodes.OK).json({ product });
}