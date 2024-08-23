import { Text } from "@medusajs/ui";
import { FaShippingFast } from "react-icons/fa";
import cusImage from "../../../../../public/cus-embroidery-home.png";
import screenImage from "../../../../../public/screen-printing-home.png";
import Image from "next/image";

export default function WhyChose({ title }) {
  return (
    <div className="py-8 md:py-16 md:mx-auto px-1 md:px-10 bg-slate-100">
      <div className="content-container grid grid-cols-1 md:grid-cols-2 items-start justify-start">
        <div className="flex flex-col justify-start gap-y-5 items-start p-5">
          <h2 className="text-center text-xl md:text-3xl font-light tracking-wider hover:underline mb-2 md:mb-8">
            {title}
          </h2>
          <Text>
            BARK Shop is a dynamic online streetwear, clothing and brand store which was
            established in 2024. We specialize in blank apparel,
            embroidery, screen printing services, and other promotional items.
            Our mission is to offer courteous and personalized services to our
            clients. For us, the client is considered part of our family, and that is very important.
          </Text>
          <div className="flex flex-row items-center justify-between border-2 border-black rounded p-4 w-[90%] md:w-[80%]">
            <div>
              <h6 className="text-sm font-semibold">Same Day Shipping</h6>
              <p className="text-xs font-light">
                On orders placed before 01:00pm
              </p>
            </div>
            <div>
              <FaShippingFast size={32} />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between border-2 border-black rounded p-4 w-[90%] md:w-[80%]">
            <div>
              <h6 className="text-sm font-semibold">Same Day Shipping</h6>
              <p className="text-xs font-light">
                On orders placed before 01:00pm
              </p>
            </div>
            <div>
              <FaShippingFast size={32} />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between border-2 border-red-500 rounded p-4 w-[90%] md:w-[80%]">
            <div>
              <h6 className="text-sm font-semibold">Same Day Shipping</h6>
              <p className="text-xs font-light">
                On orders placed before 01:00pm
              </p>
            </div>
            <div>
              <FaShippingFast size={32} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-5 p-5">
          <Image src={cusImage} alt="Custom Embroidery" />
          <Image src={screenImage} alt="Screen Printing" />
        </div>
      </div>
    </div>
  );
}
