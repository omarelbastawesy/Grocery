import bestPrice from "@/assets/bestPrice.png";
import refundable from "@/assets/refundable.png";
import freeDelivery from "@/assets/delivery.png";
import Image from "next/image";
import Container from "../common/Container";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-center gap-[15px] p-5 rounded-[3px]">
    {icon}
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-[18px] text-[#253d4e]">{title}</h3>
      <p className="font-medium text-[16px] leading-[100%] text-[#adadad] max-w-[225px]">
        {description}
      </p>
    </div>
  </div>
);

export default function Feature() {
  return (
    <Container className="flex flex-col gap-6 p-8 mt-18">
      <div className="flex flex-wrap items-center justify-between">
        <FeatureCard
          icon={
            <Image src={bestPrice} alt="bestPrice" width={52} height={52} />
          }
          title="Best Prices & Deals"
          description="Don't miss our daily amazing deals and prices"
        />
        <FeatureCard
          icon={
            <Image src={refundable} alt="refundable" width={52} height={52} />
          }
          title="Refundable"
          description="If your items have damage we agree to refund it"
        />
        <FeatureCard
          icon={
            <Image
              src={freeDelivery}
              alt="freeDelivery"
              width={52}
              height={52}
            />
          }
          title="Free delivery"
          description="Do purchase over $50 and get free delivery anywhere"
        />
      </div>
      <hr className="border-black/5" />
    </Container>
  );
}
