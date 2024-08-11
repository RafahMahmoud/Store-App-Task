
const express = require('express');
const axios = require('axios');
var cors = require('cors');
const app = express();


app.use(cors())
app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
