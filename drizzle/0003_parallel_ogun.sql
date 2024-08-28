ALTER TABLE "products"
ALTER COLUMN "quantity"
SET
  DATA TYPE integer USING quantity::integer;