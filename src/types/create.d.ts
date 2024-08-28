type CreateUser = {
  username: string;
  email: string;
  password: string;
};

type CreateCart = {};

type CreateProduct = {
  name: string;
  description: string;
  quantity: number;
  price: string;
  categoryID: string;
  image: File | string;
};

type CreateCartItem = {
  productID: string;
  quantity: number;
};

type CreateCategory = {
  name: string;
};
