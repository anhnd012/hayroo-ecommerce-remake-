const { query } = require("../config/db.config");

const {
  categoryModel,
  categoryModel_cate_id,
} = require("../models/categories.model");

const {
  add_category,
  delete_category,
  update_category,
} = require("../sql/query");

async function addCategory(req, res) {
  const cate_image = req.files;

  const created_at = new Date();
  const updated_at = created_at;

  const categoryObject = {
    ...req.body,
    cate_image,
    created_at,
    updated_at,
  };

  try {
    const validate = await categoryModel.validateAsync(categoryObject);
    const response = await query(add_category, [
      categoryObject.cate_name,
      categoryObject.cate_desc,
      cate_image,
      categoryObject.cate_status,
      created_at,
      updated_at,
    ]);

    return res.status(200).json({
      message: validate,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

async function deleteCategory(req, res) {
  const cate_id = parseInt(req.params.cate_id);

  const categoryObject = {
    cate_id: cate_id,
  };

  try {
    const validate = await categoryModel_cate_id.validateAsync(
      categoryObject.cate_id
    );
    const response = await query(delete_category, [categoryObject.cate_id]);
    console.log(response);
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

async function updateCategory(req, res) {
  const cate_id = parseInt(req.params.cate_id);
  const cate_image = req.files;
  const updated_at = new Date();

  const categoryObject = {
    cate_id,
    ...req.body,
    cate_image,
    updated_at,
  };

  try{
        const validate_cate_id = await categoryModel_cate_id.validateAsync(
            categoryObject.cate_id
        );
    
      const validate = await categoryModel.validateAsync(categoryObject);
    
      const response = await query(update_category, [
        categoryObject.cate_name,
        categoryObject.cate_desc,
        cate_image,
        categoryObject.cate_status,
        updated_at,
        categoryObject.cate_id,
      ]);
      return res.status(200).json({
        message: response.command,
        rowCount: response.rowCount,
      });

  }catch(err){
    return res.status(400).json({
        error: err.message,
    });
  }
}

module.exports = {
  addCategory,
  deleteCategory,
  updateCategory,
};
