import { Text, Select, clx } from "@medusajs/ui"

const FilterDropdown = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}) => {
    const onChange = (event) => {
    const value = event.target.value;
    handleChange(value);
  };
  return (
    <div className="flex gap-x-2 items-center justify-end w-full md:w-[30%]">
      <Text className="txt-compact-small-plus text-ui-fg-muted w-full md:w-[30%] text-right">
        {title} :
      </Text>
      <select
        className="w-[50%] text-xs font-light border border-gray-300 rounded-md p-2"
        value={value}
        onChange={onChange}
        data-testid={dataTestId}
      >
        <option value="" disabled>
          Select a filter
        </option>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterDropdown
