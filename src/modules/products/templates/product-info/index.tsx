import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import Breadcrumbs from "@modules/common/components/breadcrumbs"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import RatingWidget from "@modules/products/components/rating-widget"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const ratingValue = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1) + min);
  const totalReviews = (min:number, max:number) => Math.floor(Math.floor(Math.random() * (max - min + 1)) + min);
  return (
    <div id="product-info">
      <div className="flex flex-col lg:max-w-[500px]">
        <Breadcrumbs />
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle mt-2"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading level="h2" className="text-3xl leading-10 text-ui-fg-base mt-2 mb-4" data-testid="product-title">
          {product.title}
        </Heading>
        <RatingWidget value={ratingValue(1,5)} totalReviews={totalReviews(1, 10)} size={20} />
        <Text className="text-medium text-ui-fg-subtle" data-testid="product-description">
          {product.subtitle}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
