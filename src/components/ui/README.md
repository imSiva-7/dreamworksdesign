# Reusable UI Components

This directory contains reusable UI components for the DreamWorks Design application.

## Components

### Input

A reusable input component with built-in label, error, and helper text support.

**Props:**
- `label` (optional): Label text displayed above the input
- `error` (optional): Error message displayed below the input in red
- `helperText` (optional): Helper text displayed below the input in gray
- All standard HTML input attributes (`type`, `placeholder`, `value`, `onChange`, etc.)

**Usage:**

```tsx
import { Input } from "@/components/ui";

// Basic input
<Input
  name="username"
  placeholder="Enter username"
/>

// With label
<Input
  label="Email"
  name="email"
  type="email"
  placeholder="you@example.com"
/>

// With error
<Input
  label="Password"
  name="password"
  type="password"
  error="Password must be at least 8 characters"
/>

// With helper text
<Input
  label="Phone"
  name="phone"
  type="tel"
  helperText="We'll never share your phone number"
/>
```

---

### Textarea

A reusable textarea component with the same features as Input.

**Props:**
- `label` (optional): Label text displayed above the textarea
- `error` (optional): Error message displayed below the textarea in red
- `helperText` (optional): Helper text displayed below the textarea in gray
- All standard HTML textarea attributes (`rows`, `placeholder`, `value`, `onChange`, etc.)

**Usage:**

```tsx
import { Textarea } from "@/components/ui";

// Basic textarea
<Textarea
  name="message"
  rows={5}
  placeholder="Enter your message"
/>

// With label and error
<Textarea
  label="Description"
  name="description"
  rows={4}
  error="Description is required"
/>
```

---

### Button

A versatile button component with multiple variants, sizes, and loading state.

**Props:**
- `variant` (optional): `"primary"` (default), `"secondary"`, `"outline"`, or `"ghost"`
- `size` (optional): `"sm"`, `"md"` (default), or `"lg"`
- `loading` (optional): Shows a loading spinner when `true`
- `icon` (optional): ReactNode to display as an icon
- `iconPosition` (optional): `"left"` or `"right"` (default)
- All standard HTML button attributes (`type`, `onClick`, `disabled`, etc.)

**Usage:**

```tsx
import { Button } from "@/components/ui";

// Primary button (default)
<Button onClick={handleClick}>
  Click Me
</Button>

// Secondary gradient button
<Button variant="secondary">
  Get Started
</Button>

// Outline button
<Button variant="outline">
  Learn More
</Button>

// Ghost button
<Button variant="ghost">
  Cancel
</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Loading state
<Button loading={isSubmitting}>
  Submit Form
</Button>

// With custom icon
<Button icon={<StarIcon />} iconPosition="left">
  Add to Favorites
</Button>

// Disabled
<Button disabled>
  Not Available
</Button>
```

---

## Styling

All components use the application's design system with:
- Dark theme with glassmorphism effects
- Indigo/fuchsia accent colors
- Smooth transitions and hover effects
- Full accessibility support

## Customization

You can extend or override styles by passing a `className` prop to any component:

```tsx
<Input
  label="Custom Input"
  className="bg-purple-500/10"
/>

<Button
  variant="primary"
  className="w-full"
>
  Full Width Button
</Button>
```
