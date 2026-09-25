import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  iconPosition = "right",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold overflow-hidden transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 font-[family-name:var(--font-poppins)]";

  const variantStyles = {
    primary:
      "bg-[#A6D934] text-[#0A0A0A] hover:scale-105 hover:shadow-lg hover:shadow-[#A6D934]/40 hover:bg-[#96D901]",
    secondary:
      "bg-[#0A0A0A] text-white hover:scale-105 hover:bg-[#1a1a1a]",
    outline:
      "border-2 border-[#0A0A0A]/20 text-[#0A0A0A] bg-transparent hover:bg-[#F2F2F2] hover:border-[#A6D934]",
    ghost:
      "text-[#0A0A0A] bg-transparent hover:bg-[#F2F2F2]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const spinnerSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const LoadingSpinner = () => (
    <span
      className={`${spinnerSizes[size]} rounded-full border-2 ${
        variant === "primary"
          ? "border-[#0A0A0A]/30 border-t-[#0A0A0A]"
          : "border-white/30 border-t-white"
      } animate-spin`}
    />
  );

  const Arrow = () => (
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  );

  return (
    <button
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <LoadingSpinner />
          {children}
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
          {!icon && iconPosition === "right" && variant === "primary" && <Arrow />}
        </>
      )}
    </button>
  );
}
