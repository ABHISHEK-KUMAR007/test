const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['detonator', 'draglines', 'electricShovel', 'explosives', 'wheelDozer']
  },
  specifications: {
    type: Map,
    of: Number,
    required: true
  }
});

const vendorSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  services: [serviceSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Vendor', vendorSchema);