import express from 'express';
import vendorController from '../controller/vendorController.js'; // Don't forget to add the .js extension

const router = express.Router();

router.post('/register', vendorController.registerVendor);
router.get('/all', vendorController.getAllVendors);

export default router;
