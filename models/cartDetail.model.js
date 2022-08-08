const joi = require('joi');

const cartDetailModel = joi.object({
    cart_detail_id : joi.number().integer(),
    prod_id : joi.number().integer(),
    quantity: joi.number().integer(),
    subtotal: joi.number()
})

module.exports = cartDetailModel;