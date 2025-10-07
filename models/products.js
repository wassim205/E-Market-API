const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    // category: {
    //     type: String,
    //     reference: {
    //         model: "category",
    //         key: "id"
    //     }
    // },
    imageUrl: String,
}, {
    timestamps: true
});


module.exports = mongoose.model('Product', productSchema);