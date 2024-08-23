"use client"
import React, { useState } from "react"

const SidebarFilter = ({
  categories,
  brands,
  // sizes,
  // colors,
  // onFilterChange,
}) => {
  // State for each filter type
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedColors, setSelectedColors] = useState([])

  // Handle change for category checkboxes
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  // Handle change for brand checkboxes
  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  // Handle change for price range slider
  const handlePriceChange = (event) => {
    const { value, name } = event.target
    setPriceRange((prev) => {
      const newRange = [...prev]
      if (name === "min") newRange[0] = Number(value)
      if (name === "max") newRange[1] = Number(value)
      return newRange
    })
  }

  // Handle change for size dropdown
  const handleSizeChange = (event) => {
    const { value } = event.target
    setSelectedSizes((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    )
  }

  // Handle change for color dropdown
  const handleColorChange = (event) => {
    const { value } = event.target
    setSelectedColors((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    )
  }

  // Apply filters
  const applyFilters = () => {
    onFilterChange({
      categories: selectedCategories,
      brands: selectedBrands,
      priceRange,
      sizes: selectedSizes,
      colors: selectedColors,
    })
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-md w-64">
      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-medium">Categories</h3>
        <ul className="mt-2">
          {categories.map((category) => (
            <li key={category.id}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                  className="form-checkbox"
                />
                <span className="ml-2">{category.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-medium">Brands</h3>
        <ul className="mt-2">
          {brands.map((brand) => (
            <li key={brand.id}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.name)}
                  onChange={() => handleBrandChange(brand.name)}
                  className="form-checkbox"
                />
                <span className="ml-2">{brand.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-medium">Price Range</h3>
        <div className="flex items-center justify-between mt-2">
          <input
            type="number"
            name="min"
            value={priceRange[0]}
            onChange={handlePriceChange}
            className="w-20 p-1 border border-gray-300 rounded"
          />
          <span className="mx-2">-</span>
          <input
            type="number"
            name="max"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-20 p-1 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Size Filter */}
      {/* <div className="mb-4">
        <h3 className="text-lg font-medium">Sizes</h3>
        <select
          multiple
          value={selectedSizes}
          onChange={handleSizeChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          {sizes.map((size) => (
            <option key={size.id} value={size.name}>
              {size.name}
            </option>
          ))}
        </select>
      </div> */}

      {/* Color Filter */}
      {/* <div className="mb-4">
        <h3 className="text-lg font-medium">Colors</h3>
        <select
          multiple
          value={selectedColors}
          onChange={handleColorChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          {colors.map((color) => (
            <option key={color.id} value={color.name}>
              {color.name}
            </option>
          ))}
        </select>
      </div> */}

      {/* Apply Filters Button */}
      <button
        onClick={applyFilters}
        className="w-full py-2 px-4 bg-blue-500 text-white rounded mt-4"
      >
        Apply Filters
      </button>
    </div>
  )
}

export default SidebarFilter
