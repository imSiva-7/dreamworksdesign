# 🎨 DreamWorks Design System

## Color Palette

### Primary Colors
```css
--bg-dark: #0A0A0A        /* Dark background */
--accent-lime: #A6D934     /* Primary lime green */
--accent-lime-bright: #96D901  /* Brighter lime variant */
--bg-light: #F2F2F2        /* Light background */
--text-dark: #000000       /* Body text */
```

### Usage

**Backgrounds:**
- Dark sections: `bg-[#0A0A0A]`
- Light sections: `bg-white` or `bg-[#F2F2F2]`
- Accent blob: `bg-[#A6D934]/10`

**Text:**
- Main headings: `text-[#0A0A0A]`
- Body text: `text-[#0A0A0A]/70`
- Light text on dark: `text-white`
- Accent text: `text-[#A6D934]`

**Buttons:**
- Primary button: `bg-[#A6D934]` with `text-[#0A0A0A]`
- Hover state: `hover:bg-[#96D901]`

**Borders:**
- Default: `border-[#0A0A0A]/10`
- Active/Hover: `border-[#A6D934]`

**Shadows:**
- Accent shadow: `shadow-[#A6D934]/20`
- Hover shadow: `shadow-[#A6D934]/40`

## Typography

### Fonts

**Headline Font: Anton**
- Weight: 400 (Bold)
- Usage: Main headings, hero titles
- Style: Heavy condensed, ALL-CAPS
- Implementation: `font-[family-name:var(--font-anton)]`

**Body Font: Poppins**
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Usage: Body text, UI elements, navigation
- Implementation: `font-[family-name:var(--font-poppins)]`

### Font Classes

```css
/* Headings - Anton */
.headline {
  font-family: var(--font-anton);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

/* Body - Poppins */
.body-text {
  font-family: var(--font-poppins);
  font-weight: 400-700;
}
```

### Sizes

**Headings:**
- H1 (Hero): `text-5xl sm:text-6xl md:text-7xl` (Anton)
- H2 (Section): `text-4xl sm:text-5xl` (Anton)
- H3 (Card): `text-lg` (Poppins SemiBold)

**Body:**
- Large: `text-lg` (Poppins)
- Regular: `text-base` (Poppins)
- Small: `text-sm` (Poppins)
- Tiny: `text-xs` (Poppins)

## Component Examples

### Button - Primary
```tsx
<button className="px-6 py-3 rounded-full bg-[#A6D934] text-[#0A0A0A] font-semibold hover:bg-[#96D901] hover:shadow-lg hover:shadow-[#A6D934]/40 transition-all duration-300 font-[family-name:var(--font-poppins)]">
  Get Started
</button>
```

### Heading - Anton
```tsx
<h1 className="text-5xl font-bold text-[#0A0A0A] font-[family-name:var(--font-anton)] uppercase">
  DreamWorks
</h1>
```

### Body Text - Poppins
```tsx
<p className="text-lg text-[#0A0A0A]/70 font-[family-name:var(--font-poppins)]">
  Body text content here
</p>
```

### Card Border
```tsx
<div className="border border-[#0A0A0A]/10 hover:border-[#A6D934] rounded-2xl">
  Card content
</div>
```

## Responsive Breakpoints

- **Mobile**: < 640px - Cards: 240px width
- **Small**: 640px-768px - Cards: 280px width  
- **Medium**: 768px-1024px - Cards: 320px width
- **Desktop**: ≥1024px - Cards: 320px width

## Animation Guidelines

### Hover States
```css
/* Scale & Shadow */
hover:scale-105 
hover:shadow-lg 
hover:shadow-[#A6D934]/40

/* Color Transitions */
hover:bg-[#96D901]
hover:text-[#A6D934]
hover:border-[#A6D934]

/* Transform */
transition-all duration-300
```

### Accent Effects
```css
/* Lime green glow */
shadow-2xl shadow-[#A6D934]/20

/* Gradient overlay */
bg-gradient-to-tr from-[#A6D934]/30 to-[#96D901]/15
```

## FAQ Section Styling (Future)

When implementing FAQ:
```css
.faq-row {
  background: #F2F2F2;
  color: #000000;
}

.faq-question {
  font-family: var(--font-poppins);
  font-weight: 600-700;
}
```

## Accessibility

### Contrast Ratios
- `#A6D934` on `#0A0A0A`: ✅ AAA (High contrast)
- `#0A0A0A` on `white`: ✅ AAA (High contrast)
- `#A6D934` on `white`: ⚠️ Use for accents only

### Focus States
```css
focus:ring-2 
focus:ring-[#A6D934] 
focus:outline-none
```

## Brand Guidelines

### Logo
- Letter: "D" (for DreamWorks)
- Background: `#A6D934`
- Text: `#0A0A0A`
- Font: Anton
- Shape: Rounded square (`rounded-xl`)

### Brand Name
- Text: "DREAMWORKS" 
- Font: Anton (uppercase)
- Color: `#0A0A0A` (on light) or `white` (on dark)

### Taglines
- Font: Poppins Medium/SemiBold
- Color: `#0A0A0A/70` or `white/80`

## Quick Reference

```tsx
// Primary button
bg-[#A6D934] text-[#0A0A0A] hover:bg-[#96D901]

// Section heading
text-[#0A0A0A] font-[family-name:var(--font-anton)] uppercase

// Body text
text-[#0A0A0A]/70 font-[family-name:var(--font-poppins)]

// Card hover
hover:border-[#A6D934] hover:shadow-[#A6D934]/20

// Accent blob
bg-[#A6D934]/10 blur-3xl
```

---

**Last Updated:** 2026-09-25  
**Brand:** DreamWorks Design  
**Framework:** Next.js 15 + Tailwind CSS
