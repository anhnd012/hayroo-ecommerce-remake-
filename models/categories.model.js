const joi = require('joi');

const categoryModel = joi.object({

    cate_id : joi.number().integer().disallow(null),
    cate_name : joi.string().required(),
    cate_desc: joi.string().required(),
    cate_image: joi.any().meta({swaggerType: 'file'}).optional()
    .description('Image File'),
    cate_status: joi.string().valid('active', 'inactive'),
    created_at: joi.date().iso(),
    updated_at: joi.date().iso()

});

const categoryModel_cate_id = joi.number().integer().disallow(null);

module.exports = {
    categoryModel,
    categoryModel_cate_id
}

