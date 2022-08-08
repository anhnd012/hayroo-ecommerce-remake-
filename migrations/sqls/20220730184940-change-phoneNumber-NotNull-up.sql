/* Replace with your SQL commands */
-- Change phoneNumber (Users) from NOT NULL to NULL

ALTER TABLE public."Users" ALTER COLUMN phoneNumber DROP NOT NULL;