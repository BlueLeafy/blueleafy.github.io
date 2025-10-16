import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    // Infos (Searchable fields)
    name: { type: String, index: "text" },
    brand: { type: String, index: true },
    company: { type: String, index: true },
    applications: [{
        type: String,
        trim: true,
        lowercase: true
    }],
    parameters: [{
        type: String,
        trim: true,
        lowercase: true
    }],
    // Descriptions (not search needed)
    description: {
        type: String,
        maxlength: [2000, "Products name cannot exceed 2000 characters"]
    },
    shortDescription: {
        type: String,
        maxlength: [500, "Short description cannot exceed 500 characters"]
    },
    // SEO meta title and descriptions
    SEO: {
        metaTitle: {
            type: String,
            maxlength: [255, "Meta title cannot exceed 255 characters"]
        },
        metaDescription: {
            type: String,
            maxlength: [500, "Meta descritpion cannot exceed 500 characters"]
        },
        slug: {
            type: String,
            lowercase: true,
        },
        canonicalUrl: String
    },
    // File .MD for product details
    markdownFile: {
        url: String,
        filename: String
    },
    // File docs
    docsFile: [
        {
            url: String,
            filename: String,
            extension: String,
            category: {
                type: String,
                enum: ["note tecniche", "schede prodotto", "articoli", "approfondimenti", "presentazioni"]
            }
        }
    ],
    // Media
    media: {
        images: [
            {
                url: String,
                altText: String,
                captionText: String
            }
        ],
        videos: [
            {
                url: String,
                thumbnail: String,
                type: {
                    type: String,
                    enum: ["youtube", "vimeo", "direct"] // details on these options
                }
            }
        ]
    }

}, {
    timestamps: true,
});

export default mongoose.model("Product", ProductSchema);