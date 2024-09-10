import Navbar from "@/app/components/navbar";
import CustomInput from "@/app/components/customInput";
import Banner from "@/app/components/banner";
import { fetchProductData } from "../utils/fetchProducts";

export default async function Product() {
  const data = await fetchProductData();

  return (
    <>
      <div className="px-4 py-4">
        <Navbar />
        <Banner />
        <CustomInput
          type="search"
          label="search products"
          placeholder="Search Product Using Name Or ID..."
          productData={data}
        />
      </div>
    </>
  );
}
