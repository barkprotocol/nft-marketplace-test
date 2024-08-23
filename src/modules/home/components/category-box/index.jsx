/* eslint-disable jsx-a11y/alt-text */
// images
import category1 from "../../../../../public/cat_img/599308753-sweatshirts.webp"
import category2 from "../../../../../public/cat_img/599308737-pants.webp"
import category3 from "../../../../../public/cat_img/599308714-bags-accessories.webp"
import category4 from "../../../../../public/cat_img/599308759-t-shirts.webp"
import category5 from "../../../../../public/cat_img/599308749-polos.webp"
import category6 from "../../../../../public/cat_img/599308723-hats.webp"
import category7 from "../../../../../public/cat_img/599308765-tanks.webp"
import category8 from "../../../../../public/cat_img/599308770-youth.webp"
import InteractiveLink from "@modules/common/components/interactive-link"
import Image from "next/image"
import Link from "next/link"

const CategoryBox = ({ product_categories }) => {
  const images = [
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    category7,
    category8,
  ]
  // Retrieve and split the HOME_CAT environment variable into an array
  const cats = process.env.HOME_CAT
  const catList = cats.split(",")
  // Filter the product_categories based on the catList
  const categories = product_categories
    .filter((category) => catList.includes(category.handle))
    .map((category, index) => ({
      id: category.id,
      name: category.name,
      link: category.handle,
      image: images[index],
    }))

  // Log the filtered categories
  // console.log("Filtered Categories:", categories)
  // const cats = process.env.HOME_CAT;
  // const cat = cats.split(",");
  // console.log(cats);
  // console.log(cat);

  // const categories = product_categories.map((category, index) => ({
  //   id: category.id,
  //   name: category.name,
  //   link: category.handle,
  //   image: images[index],
  // }))

  return (
    <div className="py-8 bg-gray-200">
      <div className="content-container md:mx-auto">
        <h2 className="text-center text-xl md:text-3xl font-light tracking-wider hover:underline mb-4 md:mb-8">
          Top Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-3">
          {categories.slice(0, 8).map((category) => (
            <Box
              key={category.name}
              image={category.image}
              name={category.name}
              link={`/categories/${category.link}`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <InteractiveLink href="/category">
            View All Categories
          </InteractiveLink>
        </div>
      </div>
    </div>
  )
}

function Box({ name, image, link }) {
  return (
    <Link href={link} className="block">
      <div className="relative flex items-center justify-center border border-gray-300 p-8 shadow-lg transition-transform transform hover:scale-105hover:shadow-xl aspect-square">
        <Image src={image} fill alt={name} />
        <div className="bg-black bg-opacity-50 text-white text-sm md:text-xl font-bold px-4 py-2 z-50">
          {name}
        </div>
      </div>
    </Link>
  )
}
export default CategoryBox
