"use client"
import { ChangeEvent } from "react"
import FilterDropdown from "@modules/common/components/filter-dropdown"
export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  "data-testid"?: string
}

const sortOptions = [
  {
    value: "created_at",
    label: "Latest Arrivals",
  },
  {
    value: "price_asc",
    label: "Price: Low -> High",
  },
  {
    value: "price_desc",
    label: "Price: High -> Low",
  },
]

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
}: SortProductsProps) => {
  // const handleChange = (e: ChangeEvent<HTMLSelectElement>,  value: SortOptions) => {
  const handleChange = (value: SortOptions) => {
    console.log("Im here is the handle button")
    // const newSortBy = e.target.value as SortOptions
    setQueryParams("sortBy", value)
  }

  return (
    <FilterDropdown
      title="Sort by"
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
      data-testid={dataTestId}
    />
  )
}

export default SortProducts
