# 🎨 Animation Guide

This document outlines all the custom animations and effects available in the DreamWorks Design application.

## 📋 Table of Contents
- [Keyframe Animations](#keyframe-animations)
- [Utility Classes](#utility-classes)
- [Component-Specific Effects](#component-specific-effects)
- [Advanced Effects](#advanced-effects)

---

## Keyframe Animations

### Entry Animations

**fadeUp** - Fades in while moving up
```css
@keyframes fadeUp
```
- Starts: opacity 0, translateY(24px)
- Ends: opacity 1, translateY(0)
- Duration: 0.8s
- Easing: ease-out

**fadeIn** - Simple fade in
```css
@keyframes fadeIn
```
- Used for: Simple opacity transitions

**slideInLeft** - Slides in from left
```css
@keyframes slideInLeft
```
- Starts: opacity 0, translateX(-40px)
- Perfect for: Side panel entries

**slideInRight** - Slides in from right
```css
@keyframes slideInRight
```
- Starts: opacity 0, translateX(40px)
- Perfect for: Side panel entries

**scaleIn** - Scales up with fade
```css
@keyframes scaleIn
```
- Starts: opacity 0, scale(0.8)
- Great for: Modal entrances, card reveals

### Motion Animations

**float** - Gentle floating motion
```css
@keyframes float
```
- Duration: 6s infinite
- Movement: translateY(0px) ↔ translateY(-20px)
- Use for: Background elements, icons

**floatSlow** - Complex floating with X/Y movement
```css
@keyframes floatSlow
```
- Duration: 10s infinite
- Movement: Multi-directional (X and Y)
- Perfect for: Background blobs

**bounce** - Bouncing motion
```css
@keyframes bounce
```
- Duration: 2s infinite
- Use for: Scroll indicators, attention grabbers

**wiggle** - Subtle rotation wiggle
```css
@keyframes wiggle
```
- Rotation: -3deg ↔ 3deg
- Duration: 1s
- Great for: Hover states, playful elements

### Gradient Animations

**gradientShift** - Shifts gradient position
```css
@keyframes gradientShift
```
- Duration: 8s infinite
- Background position: 0% → 100% → 0%
- Requires: `background-size: 200% 200%`

**textShine** - Animated text gradient
```css
@keyframes textShine
```
- Duration: 3s infinite linear
- Background position: 0% → 200%
- Use class: `.text-gradient-animated`

**gradientRotate** - 360° rotation
```css
@keyframes gradientRotate
```
- Full 360° rotation
- Perfect for: Loading spinners, decorative elements

### Effect Animations

**shimmer** - Shine/shimmer effect
```css
@keyframes shimmer
```
- Duration: 3s infinite
- Background position: -1000px → 1000px
- Use class: `.animate-shimmer`

**glowPulse** - Pulsing glow effect
```css
@keyframes glowPulse
```
- Box shadow transitions
- Colors: Indigo and Fuchsia
- Duration: 3s infinite

**pulse** - Opacity pulse
```css
@keyframes pulse
```
- Opacity: 1 ↔ 0.5
- Duration: 2s infinite

**rotateBorder** - Rotating border effect
```css
@keyframes rotateBorder
```
- Full 360° rotation
- Duration: 3s infinite linear
- Used with conic gradients

### Interaction Animations

**shake** - Horizontal shake
```css
@keyframes shake
```
- Movement: ±8px horizontal
- Duration: 0.4s
- Use for: Form validation errors

**popIn** - Pop/bounce entrance
```css
@keyframes popIn
```
- Includes rotation and scale
- Duration: 0.6s
- Use for: Success states, notifications

**ripple** - Expanding ripple
```css
@keyframes ripple
```
- Scale: 0 → 4
- Opacity: 1 → 0
- Use for: Button click effects

---

## Utility Classes

### Animation Classes

```css
.animate-fade-up          /* Fade up entrance */
.animate-fade-in          /* Simple fade in */
.animate-slide-left       /* Slide from left */
.animate-slide-right      /* Slide from right */
.animate-float            /* Gentle float (6s) */
.animate-float-slow       /* Complex float (10s) */
.animate-pulse            /* Opacity pulse */
.animate-gradient         /* Gradient shift */
.animate-shimmer          /* Shine effect */
.animate-scale-in         /* Scale up entrance */
.animate-bounce           /* Bounce motion */
.animate-wiggle           /* Rotation wiggle */
.animate-glow-pulse       /* Glowing pulse */
.animate-pop              /* Pop entrance */
.animate-shake            /* Error shake */
```

### Delay Classes

```css
.delay-75      /* 75ms */
.delay-100     /* 100ms */
.delay-150     /* 150ms */
.delay-200     /* 200ms */
.delay-300     /* 300ms */
.delay-400     /* 400ms */
.delay-500     /* 500ms */
.delay-700     /* 700ms */
.delay-1000    /* 1s */
```

### Reveal Classes (Intersection Observer)

```css
.reveal              /* Fade + translateY */
.reveal-left         /* Fade + translateX left */
.reveal-right        /* Fade + translateX right */
.reveal-scale        /* Fade + scale */
```

**Usage:**
```jsx
<div className="reveal">Content</div>
<div className="reveal.visible">Content (triggered by JS)</div>
```

---

## Component-Specific Effects

### Service Cards

**Class:** `.service-card`

Features:
- Hover lift with scale: `translateY(-8px) scale(1.02)`
- Animated gradient border on hover
- Box shadow with indigo glow
- Smooth cubic-bezier easing

Enhanced effects:
- Spotlight gradient overlay
- Icon rotation and scale (125%)
- Shimmer shine effect
- Background gradient fade-in

### Portfolio Cards

Features:
- Image scale on hover (115%)
- Brightness increase
- Multi-color gradient overlay (indigo → purple → fuchsia)
- Animated top/bottom bars
- Arrow badge rotation (45°)
- Shimmer sweep effect
- Lift with shadow

### Footer Social Icons

Features:
- Scale to 125% on hover
- Lift up 8px with rotation (6°)
- Gradient background glow
- Icon inner rotation (12°)
- Expanding ripple border
- Tooltip with arrow
- Staggered entrance animation

### Button Effects

**Class:** `.btn-ripple`

Features:
- Click ripple effect
- Expanding circle from center
- Opacity fade out
- 300px max size

---

## Advanced Effects

### Gradient Text

**Class:** `.text-gradient-animated`

```jsx
<span className="text-gradient-animated">
  Animated Text
</span>
```

Creates an animated gradient that moves across text.

### Rotating Border

**Class:** `.card-with-border`

```jsx
<div className="card-with-border">
  Content with rotating border
</div>
```

Creates a rotating conic gradient border that appears on hover.

### Custom Scrollbar

Automatically styled scrollbar with:
- Dark slate track
- Indigo/Fuchsia gradient thumb
- Smooth hover state

### Text Selection

Custom selection color:
- Background: Indigo with 30% opacity
- Text: White

### Smooth Scrolling

```css
html { scroll-behavior: smooth; }
```

Enables smooth anchor scrolling throughout the site.

---

## Usage Examples

### Staggered Entry Animation

```jsx
{items.map((item, i) => (
  <div
    key={item.id}
    className="animate-fade-up"
    style={{ animationDelay: `${i * 100}ms` }}
  >
    {item.content}
  </div>
))}
```

### Scroll-Triggered Reveal

```jsx
const [visible, setVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    },
    { threshold: 0.15 }
  );
  observer.observe(elementRef.current);
}, []);

return (
  <div className={`reveal ${visible ? 'visible' : ''}`}>
    Content
  </div>
);
```

### Hover Card with Multiple Effects

```jsx
<div className="group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  
  {/* Shimmer effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
    <div className="absolute -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
  </div>
  
  {/* Content */}
  <div className="relative z-10">
    Content here
  </div>
</div>
```

---

## Performance Tips

1. **Use `transform` and `opacity`** for animations (GPU accelerated)
2. **Add `will-change`** sparingly for frequently animated elements
3. **Use `transition-duration`** between 200-500ms for most interactions
4. **Stagger animations** by 50-100ms for sequential elements
5. **Use `cubic-bezier(0.22, 1, 0.36, 1)`** for smooth, natural easing
6. **Limit blur effects** - they're expensive (use sparingly)
7. **Prefer CSS animations** over JavaScript for better performance

---

## Browser Support

All animations use standard CSS and are supported in:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

Fallbacks:
- Older browsers gracefully degrade (no animation, but content visible)
- Reduced motion preference automatically respected

---

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Add this to respect user's motion preferences (recommended for production).

---

**Last Updated:** 2026-09-25
**Framework:** Next.js 15 + Tailwind CSS
**Animation Library:** Pure CSS (No external dependencies)
