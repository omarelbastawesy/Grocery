"use client";
import { Checkbox } from "@/components/ui/checkbox";
import CartSummary from "../../components/CartSummary";

export default function OrderSummary() {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-24 mt-10 px-4">
      {/* ================= Order Summary ================= */}
      <div className="w-full lg:w-[500px]">
        <CartSummary quantity={0} totalH={1} />
      </div>

      {/* ================= Billing & Total ================= */}
      <div className="w-full lg:w-[420] mt-8 lg:mt-12">
        <div className="w-full border border-gray-200 shadow-sm rounded-xl px-4 sm:px-6 py-5">
          {/* Total */}
          <p className="text-[#014162] font-medium text-lg sm:text-xl mb-4">
            Total Amount
          </p>

          <div className="flex flex-col gap-2 sm:gap-3 pb-4 border-b border-gray-200">
            <div className="flex justify-between">
              <p className="text-[#6B6F75] text-sm sm:text-[16px]">Subtotal</p>
              <p className="text-[#6B6F75] text-sm sm:text-[16px]">
                £ 50
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-[#6B6F75] text-sm sm:text-[16px]">Shipping</p>
              <p className="text-[#6B6F75] text-sm sm:text-[16px]">£ 25</p>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <p className="font-medium text-base sm:text-lg">Total</p>
            <p className="text-base sm:text-lg font-normal">£ 30</p>
          </div>

          {/* Billing */}
          <div className="pt-6 sm:pt-8">
            <p className="text-[#014162] font-medium text-lg sm:text-xl mb-4">
              Billing Address
            </p>

            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Checkbox />
              <label className="text-sm sm:text-base text-gray-600">
                Same as shipping address
              </label>
            </div>

            <div className="bg-gray-100 rounded-xl p-3 sm:p-4">
              <p className="text-sm sm:text-base font-medium mb-1">
                Billing address will be:
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Villa 14, Street 23, District 5, New Cairo, Cairo 11835
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
