const express = require('express');
const connection = require('./db')
const cors = require('cors')


const app = express();

app.use(cors());

app.get('/categories/:id', async (req, res) => {
    const { id } = req.params;
    const [result, feild] = await connection.promise().execute(`select * from products join categories on products.product_category = categories.cat_id where categories.cat_title = '${id}'`);
    return res.json(result)
})

app.get('/brands/:brand/:cat', async (req, res) => {
    const { cat } = req.params;
    const { brand } = req.params;
    const [result, feild] = await connection.promise().execute(`select * from products join categories on products.product_category = categories.cat_id where products.product_brand = '${brand}' and categories.cat_title = '${cat}'`);
    return res.json(result)
})

app.get('/brands', async (req, res) => {
    const [result, feild] = await connection.promise().execute(`select distinct product_brand from products`);
    return res.json(result)
})

app.get('/products/:id', async (req, res) => {
     const { id } = req.params;
    const [[result], feild] = await connection.promise().execute(`select * from products join categories on products.product_category = categories.cat_id where products.product_model = '${id}'`);
    return res.json(result)
})















app.listen(5000, console.log('express server connected'))