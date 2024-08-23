import { Text } from "@medusajs/ui"
import { ProductPreviewType } from "types/global"
import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import RatingWidget from "../rating-widget"
import InteractiveLink from "@modules/common/components/interactive-link"
import Link from "next/link"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
  itemsPerRow,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
  itemsPerRow?: number
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }
  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  const ratingValue = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min)
  const totalReviews = (min: number, max: number) =>
    Math.floor(Math.floor(Math.random() * (max - min + 1)) + min)
  // const rowClass = itemsPerRow ? `lg:w-[${}]` : ""
  return (
    <>
      <div className="bg-white shadow-md border rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link href={`/products/${productPreview.handle}`}>
          <Thumbnail
            thumbnail={productPreview.thumbnail}
            size="full"
            isFeatured={isFeatured}
          />
        </Link>
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 capitalize text-xs">
            Brand
          </span>

          <Link href={`/products/${productPreview.handle}`}>
            <Text
              className="text-sm font-bold text-black truncate block capitalize"
              data-testid="product-title"
            >
              {productPreview.title}
            </Text>
          </Link>
          <div className="flex justify-start gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
          <RatingWidget
            value={ratingValue(1, 5)}
            totalReviews={totalReviews(1, 10)}
            size={16}
          />
        </div>
        <div className="px-1 sm:px-2 pb-3 mt-2">
          <InteractiveLink href={`/products/${productPreview.handle}`}>
            Quick View
          </InteractiveLink>
        </div>
        <p className="text-center text-green-700 text-xs pb-2">In Stock</p>
      </div>
    </>
  )
}
