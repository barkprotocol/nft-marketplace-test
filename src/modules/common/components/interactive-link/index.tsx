import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "../localized-client-link"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="flex justify-center items-center text-xs sm:text-base border py-2 px-2 md:px-6 text-white bg-black hover:bg-transparent hover:text-black hover:border hover:border-black group font-light text-center tracing-widest"
      href={href}
      onClick={onClick}
      {...props}
    >
      {children}
      {/* <ArrowUpRightMini
        className="group-hover:rotate-45 ease-in-out duration-150"
        color="var(--fg-interactive)"
      /> */}
    </LocalizedClientLink>
  )
}

export default InteractiveLink
