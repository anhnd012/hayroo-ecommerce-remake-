const joi = require('joi');

const productModel = joi.object({

    prod_id : joi.number().integer(),
    prod_name : joi.string().required(),
    prod_desc: joi.string().required(),
    cate_id: joi.number().integer().required(),
    sold: joi.number().integer(),
    quantity: joi.number().integer().required(),
    prod_images: joi.any().meta({swaggerType: 'file'}).optional()
    .description('Image File').required(),
    price: joi.number().required(),
    prod_status: joi.string().valid('active', 'inactive').required(),
    created_at: joi.date().iso(),
    updated_at: joi.date().iso()

});


const productModel_prod_id = joi.number().integer();

module.exports = {
    productModel,
    productModel_prod_id
}
