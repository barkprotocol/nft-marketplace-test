import {
  getCategoriesList,
  getCollectionsList,
  getProductsListWithSort,
  getRegion,
} from "@lib/data"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import SidebarFilter from "@modules/store/components/sidebar-filters"
import { useState } from "react"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
}

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
  limit,
}: {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
  limit?: number
}) {
  const region = await getRegion(countryCode)
  const { product_categories } = await getCategoriesList(0, 100)
  const { collections } = await getCollectionsList(0, 100)

  if (!region) {
    return null
  }
  limit = limit || PRODUCT_LIMIT
  const queryParams: PaginatedProductsParams = {
    limit: limit,
  }

  if (collectionId) {
    queryParams["collection_id"] = [collectionId]
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId]
  }
  if (productsIds) {
    queryParams["id"] = productsIds
  }

  const {
    response: { products, count },
  } = await getProductsListWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  })
  const totalPages = Math.ceil(count / limit)
  return (
    <>
      {sortBy && (
        <div className="flex justify-end w-full text-xs text-gray-400 px-2 mb-10">
          Total Products: {count}
        </div>
      )}
      <div className="flex flex-wrap justify-center w-full">
        {/* {sortBy && (
          <SidebarFilter
          categories={product_categories}
          brands={collections}
          // sizes={sizes}
          // colors={colors}
          // onFilterChange={handleFilterChange}
          />
        )} */}
        <ul
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-2 sm:gap-y-6"
          data-testid="products-list"
        >
          {products.map((p) => {
            return (
              <li key={p.id}>
                <ProductPreview productPreview={p} region={region} />
              </li>
            )
          })}
        </ul>
        {sortBy && totalPages > 1 && (
          <Pagination
            data-testid="product-pagination"
            page={page}
            totalPages={totalPages}
          />
        )}
      </div>
    </>
  )
}
