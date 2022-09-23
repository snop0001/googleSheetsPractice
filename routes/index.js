import express from 'express';
import { getGoogleSheet } from '../controllers/googleSheetController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/googleSheet',getGoogleSheet);

export default router;
