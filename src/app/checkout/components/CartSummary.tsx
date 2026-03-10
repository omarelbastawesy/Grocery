"use client";
import Image from "next/image";
import { Trash, Plus } from "lucide-react";
import { useCart, CartItem } from "@/hooks/use-cart";
import CartSummarySkeleton from "./CartSummarySkeleton";

type CartSummaryProps = {
  quantity: number;
  totalH: number;
};

export default function CartSummary({ quantity, totalH }: CartSummaryProps) {
  const { data, isLoading, isError } = useCart();

  if (isLoading) return <CartSummarySkeleton />;
  if (isError) return <p>Error loading cart</p>;

  const safeItems: CartItem[] = Array.isArray(data?.data?.items)
    ? data.data.items
    : [];

  const subtotal = data?.data?.subtotal || "0";
  const total = data?.data?.total || "0";

  return (
    <div className="w-full lg:w-[500px]">
      <p className="font-medium text-lg lg:text-xl mb-2">Cart Summary</p>

      <div className="w-full border border-gray-200 pl-4 lg:pl-6 shadow-sm rounded-md">
        {/* ===== Products Scroll Area ===== */}
        <div className="max-h-[400px] lg:max-h-[565px] px-2 overflow-y-auto custom-scroll">
          {safeItems.length === 0 && (
            <p className="text-center py-10 text-gray-500">
              Your cart is empty
            </p>
          )}
          {safeItems.map((item) => (
            <div
              key={item.id}
              className="w-full border-b border-gray-300 flex gap-4 lg:gap-6 py-4 lg:py-6"
            >
              {/* Image */}
              <div className="flex flex-col items-center">
                <Image
                  src={item.meal.image_url}
                  alt={item.meal.title}
                  width={70}
                  height={70}
                  className="object-cover"
                />
                <div className="bg-[#0E1112] text-[11px] text-center rounded-tl-[15px] rounded-br-[15px] px-2 mt-2">
                  <p className="text-[#F7FCFF]">In Stock</p>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <p className="font-normal text-base lg:text-lg">
                  {item.meal.title}
                </p>

                <div className="flex justify-between  items-center pt-3 gap-3 w-full">
                  {/* Quantity */}
                  <div className={`${quantity === 1 ? "hidden" : ""}`}>
                    <div className="flex items-center border border-gray-200 gap-3 px-3 py-1 rounded-xl">
                      <Trash className="w-4 h-4 cursor-pointer" />
                      <p className="font-normal text-sm sm:text-base">
                        {item.quantity}
                      </p>
                      <Plus className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="font-medium text-sm sm:text-base lg:text-xl md:mr-20 mr-10">
                    £ {item.unit_price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Total Section ===== */}
        <div className={`${totalH === 1 ? "hidden" : ""}`}>
          <div className="py-4 pr-4 lg:pr-7">
            <p className="text-[#014162] font-medium text-lg lg:text-xl">
              Total Amount
            </p>

            <div className="flex flex-col gap-2 pt-4 pb-3 border-b border-gray-200">
              <div className="flex justify-between">
                <p className="text-[#6B6F75] text-sm lg:text-lg">Subtotal</p>
                <p className="text-[#6B6F75] text-sm lg:text-lg">
                  £ {subtotal}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-[#6B6F75] text-sm lg:text-lg">Shipping</p>
                <p className="text-[#6B6F75] text-sm lg:text-lg">£ 0.0</p>
              </div>
            </div>

            <div className="flex justify-between pt-3">
              <p className="font-medium text-base lg:text-lg">Total</p>
              <p className="text-base lg:text-lg font-normal">£ {total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
