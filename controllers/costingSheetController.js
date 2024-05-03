const Costing = require('../models/Costing');
const Trim = require('../models/Trim');
const XLSX = require('xlsx');
const fs = require('fs');

const addCostingSheet = async (req, res) => {
  try {
    const excelPath = req.files[0].path;
    const workbook = XLSX.readFile(excelPath);

    const costingSheet = workbook.Sheets[workbook.SheetNames[0]];
    const trimSheet = workbook.Sheets[workbook.SheetNames[1]];

    const costingData = XLSX.utils.sheet_to_json(costingSheet, { header: 1 });
    const trimData = XLSX.utils.sheet_to_json(trimSheet, { header: 1 });

   
    if (costingData.length === 0 || trimData.length === 0) {
      throw new Error('Costing and/or trim data not found in Excel file');
    }

 
    const costingColumns = costingData.slice(1);
    await Promise.all(
      costingColumns.map(async (row) => {
        try {
          const [no, fabric, , , , , , duty, cur, price, cons, inr] = row;
          await Costing.create({ no, fabric, duty, cur, price, cons, inr });
        } catch (error) {
          console.error('Error creating costing record:', error);
        }
      })
    );

    // Process trim data
    const trimColumns = trimData.slice(1);
    await Promise.all(
      trimColumns.map(async (row) => {
        try {
          const [no, code, trimDetails, , duty, cur, price, consp, inr] = row;
          await Trim.create({ no, code, trimDetails, duty, cur, price, consp, inr });
        } catch (error) {
          console.error('Error creating trim record:', error);
        }
      })
    );

    fs.unlinkSync(excelPath);

    res.status(200).json({ message: 'Costing sheet uploaded successfully' });
  } catch (error) {
    console.error('Error uploading costing sheet:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { addCostingSheet };