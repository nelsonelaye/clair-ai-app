import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface Props {
  options: Array<{ label: string; value: string }>;
}
const SelectDropdown = ({ options }: Props) => {
  const [value, setValue] = useState("");

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger
        className="inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none text-violet11 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9"
        aria-label="Fruits"
      >
        <Select.Value placeholder="Select a fruit…" />
        <Select.Icon className="text-violet11">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content
        position="popper"
        sideOffset={4}
        className="overflow-hidden rounded-md bg-white z-50 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
      >
        <Select.Viewport className="p-[5px]">
          {options.map((e) => (
            <Select.Item
              key={e.value}
              value={e.value}
              className="cursor-pointer px-3 py-2 hover:bg-gray-100"
            >
              <Select.ItemText>{e.label}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};
export default SelectDropdown;
