// SVG Paths data

import Container from "../common/Container";

// Product images
import Head from "@/components/common/Head";
import { CardProductA } from "../common/CardProduct";
import { useEffect, useState } from "react";
import { useMeals } from "@/hooks/meals/useMeals";
import Link from "next/link";

// Product type definition
type Product = {
  id: number;
  image: any;
  category: string;
  name: string;
  rating: number;
  reviewCount: number;
  vendor: string;
  price: string;
  originalPrice: string;
};

// Main component
export default function HotDeal() {
  const [data, setData] = useState<any>([]);
  const [category, setCategory] = useState<string>("");

  const { data: meals, isLoading } = useMeals();

  useEffect(() => {
    setData(meals?.meals?.slice(1, 6) || []);
  }, [meals]);

  const upData = (cat: string) => {
    const data = meals?.meals.filter((meal: any) => meal.category.name === cat);
    setCategory(data[0].category.name);
    setData(data);
  };


  return (
    <Container className="flex flex-col gap-4 mt-9 md:mt-16 lg:mt-24">
      <Head title="Hot Deals" />

      <div className="hidden sm:flex justify-end content-stretch flex-col items-end relative shrink-0 w-full">
        <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between not-italic p-[5px] relative shrink-0 text-[18px] w-[364px]">
          <button
            onClick={() => {
              setData(meals?.meals.slice(1, 6));
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
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.map((meal: any, index: number) => (
              <CardProductA
                key={index}
                title={meal.title}
                image_url={meal.image_url}
                category={meal.category.name}
                rating={meal.rating}
                rating_count={meal.rating_count}
                brand={meal.brand}
                price={meal.price}
                final_price={meal.final_price}
                discount={meal.discount}
                link={meal.id}
                in_stock={meal.in_stock}
              />
          ))
        )}
      </div>
    </Container>
  );
}
