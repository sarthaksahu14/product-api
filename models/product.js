const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  brand: {
    type: String, 
    required: true
  },
  product_name: {
    type: String,
    required: true
  },

  product_image: {  
    type: String,
    required: true,
  },
  launch_date: {
    type: Date,
    required: true
  },
  availability: {
    type: String,
    enum: ['Available', 'Unavailable'],
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  battery_capacity: {
    type: String,
    required: true
  },
  screen_size: {
    type: String,
    required: true
  },
  os: {
    type: String,
    required: true
  }
});



module.exports = mongoose.model("Product", productSchema);

