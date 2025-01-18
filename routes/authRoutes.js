import express from 'express';
const router = express.Router();
import { signup, login } from '../controller/authController.js';
import { protect, authorize } from '../middleware/auth.js';

router.post('/signup', signup);
router.post('/login', login);

// Protected routes example
router.get('/vendor/dashboard', protect, authorize('vendor'), (req, res) => {
  res.json({ message: 'Vendor dashboard' });
});

router.get('/miningDashboard', protect, authorize('miner'), (req, res) => {
  res.json({ message: 'Miner dashboard' });
});

export default router;
