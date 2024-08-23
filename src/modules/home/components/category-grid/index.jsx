import CategoryTemplate from "@modules/categories/templates"
import InteractiveLink from "@modules/common/components/interactive-link"
export default function CategoryGrid({ title, handle, region, limit }) {
    return (
      <div className="py-8">
        <div className="content-container md:mx-auto">
          <h2 className="text-center text-xl md:text-3xl font-light tracking-wider hover:underline mb-4 md:mb-8">
            {title}
          </h2>
          <CategoryTemplate
            sortBy={""}
            page={0}
            limit={limit}
            countryCode={region}
            categoryName={handle}
          />
        </div>
        <div className="flex justify-center mt-8">
          <InteractiveLink href="/category/{handle}">
            View More
          </InteractiveLink>
        </div>
      </div>
    )
  }
  