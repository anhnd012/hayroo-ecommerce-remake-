const { query } = require("../config/db.config");

const { productModel, productModel_prod_id } = require("../models/products.model");

const { add_product, update_product, delete_product } = require("../sql/query");

async function addProduct(req, res) {
  const prod_images = req.files;
  const created_at = new Date();
  const updated_at = created_at;
  const productObject = {
    ...req.body,
    prod_images,
    created_at,
    updated_at,
  };

  try {
    const validate = await productModel.validateAsync(productObject);
    console.log(productObject);
    const response = await query(add_product, [productObject.prod_name,
        productObject.prod_desc, productObject.cate_id, productObject.sold, 
        productObject.quantity, prod_images, productObject.price,
        productObject.prod_status, created_at, updated_at]);

    return res.status(200).json({
      message: response.command,
      rowCount: response.rowCount,
    });

  } catch (err) {

    return res.status(400).json({
        error: err.message,
      });
  }

  
}

async function deleteProduct(req, res) {
  const prod_id = parseInt(req.params.prod_id);
  
  try{

    const validate_product_id = await productModel_prod_id.validateAsync(prod_id);
    const response = await query(delete_product, [prod_id]);

    return res.status(200).json({
      message: response.command,
      rowCount: response.rowCount,
    })
  }catch(err){
    return res.status(400).json({
      error: err.message,
    })
  }
}

async function updateProduct (req, res){
  const updated_at = new Date();
  const prod_id = parseInt(req.params.prod_id);
  const images = req.files;
  const productObject = {
    prod_id,
    images,
    ...req.body,
    updated_at
  } 

  try{
    const validate = await productModel.validateAsync(productObject);
    const response = await query(update_product,[productObject.prod_name, productObject.prod_desc,
      productObject.cate_id, productObject.sold, productObject.quantity, images, productObject.price,
      productObject.prod_status, updated_at]);
    return res.status(200).json({
      message: response.command,
      rowCount: response.rowCount,
    })
  }catch(err){
    return res.status(400).json({
      err : err.message,
    })
  }
  
}

// class productCRUD extends CRUD {
//     this.create() {

//     }
// }

module.exports = {
  addProduct,
  deleteProduct,
  updateProduct
};
