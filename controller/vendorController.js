// controllers/vendorController.js
import Vendor from "../models/Vendor";

exports.registerVendor = async (req, res) => {
  try {
    const { companyName, registrationNumber, address, services } = req.body;

    // Transform services data to match schema
    const transformedServices = Object.entries(services).map(([type, specs]) => ({
      type,
      specifications: new Map(Object.entries(specs))
    }));

    const vendor = new Vendor({
      companyName,
      registrationNumber,
      address,
      services: transformedServices
    });

    await vendor.save();

    res.status(201).json({
      success: true,
      message: 'Vendor registered successfully',
      data: vendor
    });
  } catch (error) {
    if (error.code === 11000) { // Duplicate key error
      return res.status(400).json({
        success: false,
        message: 'Business registration number already exists'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error registering vendor',
      error: error.message
    });
  }
};

exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.status(200).json({
      success: true,
      data: vendors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching vendors',
      error: error.message
    });
  }
};