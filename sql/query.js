const { Users, constructor } = require("../models/users.model");
const moment = require('moment');

// User/Account

const sign_up = 'INSERT INTO public."Users"(username, user_password, gmail, created_on) VALUES ($1,$2,$3,$4)';

const sign_in = 'SELECT user_password from public."Users" WHERE gmail = $1';

const get_user_from_gmail = 'SELECT * from public."Users" WHERE gmail = $1';

const get_user_from_id = 'SELECT * from public."Users" WHERE user_id = $1';

// Category

const add_category = 'INSERT INTO public."Categories" ' +
'(cate_name, cate_desc, cate_image, cate_status, created_at, updated_at)' +
'VALUES ($1,$2,$3,$4,$5,$6)';

const get_categories = 'SELECT * FROM public."Categories"';

const delete_category = 'DELETE FROM public."Categories" WHERE cate_id = $1';

const update_category = 'UPDATE public."Categories" ' + 
'SET cate_name = $1, cate_desc = $2, cate_image = $3, cate_status = $4, updated_at = $5' +
'WHERE cate_id = $6';

// Product

const add_product = 'INSERT INTO public."Products" ' +
'(prod_name, prod_desc, cate_id, sold, quantity,' + 
'images, price, prod_status, created_at, updated_at)' +
'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)';

const delete_product = 'DELETE FROM public."Products" ' +
'WHERE prod_id = $1';

const update_product = 'UPDATE public."Products" ' + 
'SET prod_name = $1, prod_desc = $2, cate_id = $3, sold = $4, quantity = $5,' +
'images = $6, price = $7, prod_status = $8, updated_at = $9' +
'WHERE prod_id = $6';

const create = (modelName, data) => {
    // const modelName = model.objectName;
    // console.log(data);
    
    let sql = `INSERT INTO public."${modelName}"(`;
    for (const [key, value] of Object.entries(data)) {
        sql += `${key} ,`;
    }
    sql = sql.substring(0, sql.length - 1) + ") VALUES (";
    // Object.values(data).pop() = Object.values(data).pop().toISOString();
    // Object.values(data)[Object.values(data).length - 1] = Object.values(data)[Object.values(data).length - 1].toISOString();
    for (const [key, value] of Object.entries(data)) {
        console.log(typeof(value));
        if(moment(value, moment.ISO_8601, true).isValid()){
            sql += `${value.toISOString().substring(0, 10)}`
        }else{
            sql += `${value},`;
        }
        
        // console.log(value);
    }
    sql = sql.substring(0, sql.length - 1) + ")";
    // console.log(typeof(Object.values(data).pop()));
    console.log(sql);
    return new Promise((resolve) => resolve(sql));
}

function convertDate (value){
    
}
/*
...{
    id: 1,
    name: "Huy",
    "email": "a@gmail.com"
}
*/
// const update = (model) => {
//     model = {
//         id: 1,
//         name: "NAME"
//     }
//     let sql = "UPDATE ",
//     for (const [key, value] of Object.entries(test)) {
//         sql += `${key} = ${value}`;
//     }
//     sql += `WHERE ${model.id}` 
//     return sql;
// }

module.exports = {
    sign_up,
    sign_in,
    get_user_from_gmail,

    add_category,
    get_categories,
    delete_category,
    update_category,

    add_product,
    delete_product,
    update_product,

    create
}