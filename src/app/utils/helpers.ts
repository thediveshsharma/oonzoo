// Define the ProductItem type here if not defined elsewhere
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

export const filterProducts = (
  data: ProductItem[],
  searchTerm: string | number
): ProductItem[] => {
  // Convert searchTerm to string if it's a number for comparison
  const term =
    typeof searchTerm === "number"
      ? searchTerm.toString()
      : searchTerm.toLowerCase();

  // Filter products based on whether searchTerm is a number or a string
  const filteredProducts: ProductItem[] = data.filter((product) => {
    if (typeof searchTerm === "number") {
      return product.id === searchTerm;
    } else {
      return (
        product.title.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      );
    }
  });

  return filteredProducts;
};
