import mongoose from "mongoose" ; 

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    // A unique slug for the product. Slug is a typically a URL-friendly version of the product name 

    slug: {
        type: String,
        required: true,
    },
    description: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    // The category of the product (ObjectId, refers to the 'Category' model). The ObjectId links to another MongoDB collection (Categories) to represent the category of this product

    category: {
        type: mongoose.ObjectId,
        ref: 'Category',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },

    // Photo of the product (Buffer for storing binary data). Buffer is used to store the image, and contentType specifies the type of the image

    photo: {
        data: Buffer,
        contentType: String
    },

    // Shipping information, represents whether the product requires shipping (true or false)

    shipping: {
        type: Boolean,
    }
}, {timestamps: true} )

// Enable timestamps to automatically add 'createdAt' and 'updatedAt' fields

export default mongoose.model('Products', productSchema) ; 