/* Replace with your SQL commands */

-- Table: public."Carts"
CREATE TABLE public."Carts"
(
    cart_id SERIAL PRIMARY KEY,
    user_id serial not null,
    total_price float not null,

    CONSTRAINT fk_userId_cart
    FOREIGN KEY(user_id)
    REFERENCES public."Users"(user_id)

);

ALTER TABLE public."Carts"
    OWNER to ducanh;

CREATE TABLE public."Cart Detail"
(
    cart_detail_id SERIAL PRIMARY KEY,
    prod_id serial not null,
    quantity int not null default 0,
    subtotal float not null,

    CONSTRAINT fk_productId_cartDetail
    FOREIGN KEY(prod_id)
    REFERENCES public."Products"(prod_id)
);

ALTER TABLE public."Cart Detail"
    OWNER to ducanh;


