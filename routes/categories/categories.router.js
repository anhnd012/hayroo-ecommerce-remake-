const express = require('express');
const multer = require('multer');

const categoriesRouter = express.Router();

const { addCategory, deleteCategory, updateCategory } = require('../../controllers/categories.controller');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads/categories");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
});


const upload = multer({storage: storage});

categoriesRouter.post('/', upload.any(), addCategory);
categoriesRouter.delete('/:cate_id', deleteCategory);
categoriesRouter.put('/:cate_id',upload.any() ,updateCategory);

module.exports = categoriesRouter