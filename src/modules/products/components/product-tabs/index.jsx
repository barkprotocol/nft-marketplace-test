"use client"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Back from "@modules/common/icons/back";
import FastDelivery from "@modules/common/icons/fast-delivery";
import Refresh from "@modules/common/icons/refresh";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Text } from "@medusajs/ui";

const ProductTabs = ({ product }) => {
  const [selected, setSelected] = React.useState("Description");
  const tabs = [
    { label: "Description", component: <Description para={product.description} /> },
    { label: "Product Information", component: <ProductInfoTab product={product} /> },
    { label: "Shipping & Returns", component: <ShippingInfoTab /> },
  ];

  return (
    <div className="flex flex-col w-full mt-5">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        className="w-full"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            title={tab.label}
            className={`px-4 py-2 cursor-pointer text-lg font-normal ${
              selected === tab.label && "text-gray-600"
            }`}
            value={tab.label}
          >
            <Card className="border border-gray-300 rounded-md mt-4">
              <CardBody className="p-4">{tab.component}</CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

const Description = ({ para }) => {
  return (
    <div className="text-sm py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <Text>{para}</Text>
        </div>
      </div>
    </div>
  );
};

const ProductInfoTab = ({ product }) => {
  return (
    <div className="text-sm py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Material</span>
            <p>{product.material || "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Country of origin</span>
            <p>{product.origin_country || "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Type</span>
            <p>{product.type?.value || "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Weight</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Dimensions</span>
            <p>
              {product['length'] && product.width && product.height
                ? `${product['length']} L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
      {/* {product.tags?.length ? (
        <div>
          <span className="font-semibold">Tags</span>
          {product.tags.map((tag) => (
            <span key={tag} className="ml-2">
              {tag}
            </span>
          ))}
        </div>
      ) : null} */}
    </div>
  );
};

const ShippingInfoTab = () => {
  return (
    <div className="text-sm py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Fast delivery</span>
            <p className="max-w-sm">
              Your package will arrive in 3-5 business days at your pick-up
              location or in the comfort of your home.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Simple exchanges</span>
            <p className="max-w-sm">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Easy returns</span>
            <p className="max-w-sm">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
