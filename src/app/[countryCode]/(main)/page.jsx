import Hero from "@modules/home/components/hero"
import { getRegion, getCategoriesList } from "@lib/data"
import CategoryGrid from "@modules/home/components/category-grid"
import CategoryBox from "@modules/home/components/category-box"
import BrandsGrid from "@modules/home/components/brands"
import WhyChose from "@modules/home/components/why-chose"
export const metadata = {
  title: "EgalaSpot",
  description: "A ecommerce sotre.",
}

export default async function Home({ params: { countryCode } }) {
  const { product_categories, count } = await getCategoriesList(0, 50)

  const region = await getRegion(countryCode)
  // const catGrids = process.env.CAT_GRIDS
  // if (!collections || !region) {
  if (!region) {
    return null
  }

  return (
    <>
      <Hero />
      <CategoryGrid title="Latest Products" handle="t-shirts" limit={8} region={countryCode} />
      <CategoryBox product_categories={product_categories}/>
      <CategoryGrid title="Weekly Deals" handle="sweatshirts" limit={8} region={countryCode} />
      <CategoryGrid title="Best Sellers" handle="fleece" limit={8} region={countryCode} />
      <WhyChose title="Why Chose Egala Spot" />
      <BrandsGrid/>
    </>
  )
}
