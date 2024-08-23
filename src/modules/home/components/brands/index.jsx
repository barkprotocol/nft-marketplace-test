import bellaImage from "../../../../../public/bella-canvas-wholesale-clothing.webp"
import nextLevelImage from "../../../../../public/next-level-apparel-wholesale.webp"
import threadImage from "../../../../../public/threadfast-apparel-wholesale.webp"
import americanImage from "../../../../../public/american-apparel-wholesale.jpg"
import glidanlImage from "../../../../../public/wholesale-clothing-gildan.png"
import hanesImage from "../../../../../public/wholesale-hanes-clothing.jpg"

import InteractiveLink from "@modules/common/components/interactive-link"
import Image from "next/image"

export default function BrandsGrid() {
  const brands = [
    { id: 1, name: "peaky + canvas", image: bellaImage },
    { id: 1, name: "the peaky barkers", image: nextLevelImage },
    { id: 1, name: "bark", image: hanesImage },
    { id: 1, name: "sparky bros", image: glidanlImage },
    { id: 1, name: "underdogs", image: threadImage },
    { id: 1, name: "syndicate", image: americanImage },
  ]
  return (
    <div className="mx-auto px-4 py-8 bg-gray-200">
      <div className="content-container">
        <h2 className="text-center text-xl md:text-3xl font-light tracking-wider hover:underline mb-2 md:mb-8">
          Shop Our Top Brands
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 justify-center flex-wrap items-center gap-x-5 gap-y-5">
          {brands.map((brand) => (
            <InteractiveLink
              key={brand.name}
              href={`/brand/${brand.link}`}
              className="text-lg font-bold text-gray-900 hover:text-gray-700 mx-auto gap-y-3"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                className="rounded-full max-w-[100px] min-w-[100px] mx-auto mb-2"
                width={150}
                height={150}
              />
              <h4 className="text-center text-sm font-light tracking-wider hover:underline uppercase">
                {brand.name}
              </h4>
            </InteractiveLink>
          ))}
        </div>
      </div>
    </div>
  )
}
