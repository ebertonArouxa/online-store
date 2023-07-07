export type CategoryQuery = {
  categoryId: string;
  query: string;
};

export type ProductID = {
  productId: string | undefined;
};

export type CategoryType = {
  id: string;
  name: string;
};

export interface ProductType {
  title: string;
  price: string;
  thumbnail: string;
  id: string;
  quantity: number
}
export type CartProduct = {
  quantity: number;
  price: number;
};
