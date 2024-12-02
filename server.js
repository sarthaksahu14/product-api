require("dotenv").config();
const express = require('express');
const cors = require('cors'); 
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

const app = express();
const port = process.env.port || 3005;

app.use(cors());  

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome, to my API!!');
});

app.use("/products", products_routes);

app.listen(port, async () => {
  await connectDB(process.env.MONGODB_URL);
  console.log(`Server running on http://localhost:${port}`);
});

