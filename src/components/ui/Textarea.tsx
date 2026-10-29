import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, id, className = "", ...props }, ref) => {
    const textareaId = id || props.name;

    const baseStyles =
      "w-full rounded-xl bg-canvas border border-ink/10 px-4 py-3 text-ink placeholder-ink/40 outline-none transition-colors focus:border-accent focus:bg-surface focus:ring-2 focus:ring-accent/20 resize-none font-[family-name:var(--font-poppins)]";
    
    const errorStyles = error ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "";

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-ink mb-2 font-[family-name:var(--font-poppins)]"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-hint` : undefined}
          className={`${baseStyles} ${errorStyles} ${className}`}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} role="alert" className="mt-1.5 text-xs text-red-600 font-[family-name:var(--font-poppins)]">{error}</p>
        )}
        {helperText && !error && (
          <p id={`${textareaId}-hint`} className="mt-1.5 text-xs text-ink/50 font-[family-name:var(--font-poppins)]">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
