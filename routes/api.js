const express = require('express');

const userRouter = require('./users/users.router');
const productRouter = require('./products/products.router');
const categoriesRouter = require('./categories/categories.router');
const homeRouter = require('./home/home.router');

const api = express.Router();

api.use('/users', userRouter);
api.use('/products', productRouter);
api.use('/categories', categoriesRouter);
api.use('/', homeRouter);

module.exports = api;