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
      "w-full rounded-xl bg-canvas border border-ink/10 px-4 py-3 text-ink placeholder-ink/40 outline-none transition-colors focus:border-accent focus:bg-surface focus:ring-2 focus:ring-accent/20 font-[family-name:var(--font-poppins)]";
    
    const errorStyles = error ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "";

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-ink mb-2 font-[family-name:var(--font-poppins)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-hint` : undefined}
          className={`${baseStyles} ${errorStyles} ${className}`}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} role="alert" className="mt-1.5 text-xs text-red-600 font-[family-name:var(--font-poppins)]">{error}</p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-xs text-ink/50 font-[family-name:var(--font-poppins)]">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
