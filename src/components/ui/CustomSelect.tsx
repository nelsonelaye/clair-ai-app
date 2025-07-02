"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/helpers";

type Option = {
  value: string;
  label: string;
};

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
}

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder = "Select profession",
  className,
}: CustomSelectProps) => {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onChange}>
      <SelectPrimitive.Trigger
        className={cn(
          "relative flex h-9 w-full items-center justify-between rounded-md border border-[#767676] bg-transparent px-3 py-2 text-sm focus:outline-none",
          "data-[placeholder]:text-[#767676] data-[placeholder]:!ext-sm",
          className
        )}
      >
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-sm text-[#000] data-[placeholder]:text-[#767676] data-[placeholder]:text-sm"
        />
        <SelectPrimitive.Icon asChild>
          <ChevronDownIcon className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          className="z-50 max-h-60 min-w-[var(--radix-select-trigger-width)] w-full overflow-hidden rounded-md border bg-white p-1 text-sm shadow-md"
        >
          <SelectPrimitive.ScrollUpButton className="flex items-center justify-center py-1">
            <ChevronUpIcon />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport className="w-full">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 outline-0 focus:bg-gray-100"
              >
                <span className="absolute right-2 flex items-center justify-center">
                  <SelectPrimitive.ItemIndicator>
                    <CheckIcon className="h-4 w-4" />
                  </SelectPrimitive.ItemIndicator>
                </span>
                <SelectPrimitive.ItemText>
                  {option.label}
                </SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className="flex items-center justify-center py-1">
            <ChevronDownIcon />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export default CustomSelect;
