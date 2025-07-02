import { ButtonProps } from "@/types/components";
import { cn } from "@/lib/helpers";
import React from "react";

const Button = ({
  children,
  className = "",
  disabled = false,
  size = "md",
  variant = "primary",
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  const sizeStyles = {
    sm: "h-[32px] px-[12px] text-xs",
    md: "h-[40px] px-[15px] text-sm",
    lg: "h-[48px] px-[20px] text-base",
  };

  const variantStyles = {
    primary:
      "bg-[#3ABEAD] text-white hover:bg-gray-800 focus-visible:outline-green6",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:outline-gray-400",
    outline:
      "bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-50 focus-visible:outline-gray-400",
    ghost:
      "bg-transparent text-gray-900 hover:bg-gray-100 focus-visible:outline-gray-400",
    destructive:
      "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-400",
  };

  const currentVariant = variantStyles[variant];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      className={cn(
        // Base styles
        "flex items-center mx-auto justify-center !text-sm rounded-lg !font-medium leading-none outline-none outline-offset-1 focus-visible:outline-2 select-none transition-colors duration-150 cursor-pointer",
        // Size styles
        sizeStyles[size],
        currentVariant,
        disabled && "!bg-gray-400 text-gray-600 cursor-not-allowed",
        // Custom className prop
        className
      )}
      disabled={disabled}
      onClick={handleClick}
      type={type}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
