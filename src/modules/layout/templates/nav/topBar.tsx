import { TopMenuItems } from "@lib/menu-item"
import Link from "next/link"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const Topbar = () => {
  return (
    <div className="bg-gray-900 text-gray-100 block lg:block">
      <div className="content-container flex mx-auto justify-between items-center py-2">
        <ul className="flex items-center space-x-4">
          <li className="inline-flex items-center">
            <Link className="text-xs" href="https://www.facebook.com">
              <FaFacebookF size={14} />
            </Link>
          </li>
          <li className="inline-flex items-center">
            <Link
              className="text-xs"
              href="https://www.instagram.com"
              aria-label="Haru Fashion Instagram Account"
            >
              <FaInstagram size={16} />
            </Link>
          </li>
        </ul>
        <ul className="flex items-center space-x-4">
          <ul className="flex items-center space-x-4">
            {Object.entries(TopMenuItems).map(([key, value]) => {
              return (
                <li key={key} className="inline-flex items-center">
                  <Link href={value} className="text-xs">
                    {key}
                  </Link>
                </li>
              )
            })}
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Topbar
