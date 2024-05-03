const express = require('express');
const router = express.Router();
const uploadExcel = require('../multerConfig'); // Import multer configuration
const { addCostingSheet } = require('../controllers/costingSheetController');


router.post('/upload', uploadExcel.any(), addCostingSheet);

module.exports = router;
