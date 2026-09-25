import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, className = "", ...props }, ref) => {
    const inputId = id || props.name;

    const baseStyles =
      "w-full rounded-xl bg-[#F2F2F2] border border-[#0A0A0A]/10 px-4 py-3 text-[#0A0A0A] placeholder-[#0A0A0A]/40 outline-none transition-colors focus:border-[#A6D934] focus:bg-white focus:ring-2 focus:ring-[#A6D934]/20 font-[family-name:var(--font-poppins)]";
    
    const errorStyles = error ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "";

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[#0A0A0A] mb-2 font-[family-name:var(--font-poppins)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`${baseStyles} ${errorStyles} ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-600 font-[family-name:var(--font-poppins)]">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-xs text-[#0A0A0A]/50 font-[family-name:var(--font-poppins)]">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
