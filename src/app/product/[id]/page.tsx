import Navbar from "@/app/components/navbar";
import Banner from "@/app/components/banner";
import { fetchProductData } from "@/app/utils/fetchProducts";
import SingleProduct from "@/app/components/singleProduct";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const data = await fetchProductData(params.id);
  const product = data[0];

  return {
    title: product.title || "Default Title",
    description: product.description || "Default Description",
    openGraph: {
      title: product.title || "Default Title",
      description: product.description || "Default Description",
      url: `https://yourdomain.com/product/${params.id}`,
      images: [
        {
          url: product.image || "https://example.com/default-image.jpg",
        },
      ],
    },
  };
}
export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetchProductData(params.id);

  return (
    <>
      <div className="px-4 py-4">
        {/* <Particle /> */}
        <Navbar />
        <Banner />
        <div>
          <h2 className="text-2xl px-4 py-4">
            Showing Results For Your Search : Product ID : {params?.id}
          </h2>
        </div>
        <SingleProduct title="Single Product" productData={data} />
      </div>
    </>
  );
}
