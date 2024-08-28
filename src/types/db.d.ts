type Category = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

type Product = {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: string;
  createdAt: Date;
  updatedAt: Date;
  categoryID: string;
  category: Category;
};

type ProductInfo = {
  products: Product | null;
  categories: Category | null;
};

type CartItem = {
  id: string;
  quantity: number;
  productID: string;
  cartID: string;
  createdAt: Date;
  updatedAt: Date;
};
