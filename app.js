const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const costingRoutes = require('./routes/costingRoutes');
const sequelize = require('./database/connection')
// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/costing', costingRoutes);

// Error handling middleware
sequelize.sync().then(()=>{
    console.log("model is sync with database");
}).catch((err)=>{
    console.log("error while connecting with database",err)
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
