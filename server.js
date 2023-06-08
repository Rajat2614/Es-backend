const express = require('express');
require('dotenv').config();
const newsRoute = require("./routes/newsRoute");
const cors =require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use('/api/news',newsRoute);

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Mock API server is running on http://localhost:${PORT}/api/news/getNews`);
});






