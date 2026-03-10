import Container from "../common/Container";

// Product images
import Head from "@/components/common/Head";
import { CardProductA } from "../common/CardProduct";
import { useEffect, useState } from "react";
import { useNewProducts } from "@/hooks/categories/useCategories";

// Main component
export default function NewProduct() {
  const [data, setData] = useState<any>([]);
  const [category, setCategory] = useState<string>("");
  const { data: newProducts, isLoading: newProductsLoading } = useNewProducts();

  useEffect(() => {
    setData(newProducts?.newProducts.slice(1, 6));
    console.log("new products:", newProducts?.newProducts);
  }, [newProductsLoading]);

  const upData = (cat: string) => {
    const data = newProducts?.newProducts.filter(
      (meal: any) => meal.category.name === cat,
    );
    setData(data);
    setCategory(cat);
  };

  console.log("data:", data);
  return (
    <Container className="flex flex-col gap-4 mt-9 md:mt-16 lg:mt-24">
      <Head title="New Product" />

      <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
        <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between not-italic p-[5px] relative shrink-0 text-[18px] w-[364px]">
          <button
            onClick={() => {
              setData(newProducts?.newProducts.slice(1, 6));
              setCategory("");
            }}
            className={`block cursor-pointer relative shrink-0 text-[#888] ${category === "" && "text-[#014162]"} text-left whitespace-nowrap`}
          >
            reset
          </button>
          <button
            onClick={() => upData("Vegetables")}
            className={`block cursor-pointer relative shrink-0 text-[#888] ${category === "Vegetables" && "text-[#014162]"} text-left whitespace-nowrap`}
          >
            Vegetables
          </button>
          <button
            onClick={() => upData("Fruits")}
            className={`block cursor-pointer relative shrink-0 text-[#888] ${category === "Fruits" && "text-[#014162]"} text-left whitespace-nowrap`}
          >
            Fruits
          </button>
          <button
            onClick={() => upData("Dairy Products")}
            className={`block cursor-pointer relative shrink-0 text-[#888] ${category === "Dairy Products" && "text-[#014162]"} text-left whitespace-nowrap`}
          >
            Coffe & teas
          </button>
          <button
            onClick={() => upData("Meat & Poultry")}
            className={`block cursor-pointer relative shrink-0 text-[#888] ${category === "Meat & Poultry" && "text-[#014162]"} text-left whitespace-nowrap`}
          >
            Meat
          </button>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center flex-wrap">
        {data?.map((product: any) => (
          <CardProductA
            key={product.id}
            title={product.title}
            image_url={product.image}
            category={product.category.name}
            rating={product.rating}
            rating_count={product.rating_count}
            brand={product.brand}
            price={product.price}
            final_price={product.discount_price}
            discount={product.discount}
            link={product.id}
            in_stock={product.stock_quantity}
          />
        ))}
      </div>
    </Container>
  );
}
