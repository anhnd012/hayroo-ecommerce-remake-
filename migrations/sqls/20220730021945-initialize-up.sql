/* Replace with your SQL commands */
-- Table: public.User

CREATE TABLE  public."Users"
(
    user_id serial PRIMARY KEY,
    userName VARCHAR(50) UNIQUE NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    gmail VARCHAR(35) UNIQUE NOT NULL,
    phoneNumber bigint UNIQUE NOT NULL,
    user_role int default 0 NOT NULL,
    user_image text default 'user.png', 
    created_on TIMESTAMP NOT NULL
);


ALTER TABLE public."Users"
    OWNER to ducanh;