"use server";
interface ProductItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
type ProductList = ProductItem[];

export const fetchProductData = async (
  productId?: string
): Promise<ProductList> => {
  try {
    const url = productId
      ? `https://fakestoreapi.com/products/${productId}`
      : `https://fakestoreapi.com/products`;

    const response = await fetch(url);
    const data = await response.json();

    return Array.isArray(data) ? data : [data];
  } catch {
    return [];
  }
};
