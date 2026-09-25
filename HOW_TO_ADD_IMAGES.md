# 📸 How to Add Your Own Images

This guide explains how to add your project images to the Portfolio carousel.

## Current Setup

The Portfolio section is currently using placeholder images from Unsplash. You can easily replace them with your own images.

## Option 1: Add Images to Public Folder (Recommended)

### Step 1: Add Your Images

1. Create a folder structure in `/public`:
   ```
   /public
     /projects
       project1.jpg
       project2.jpg
       project3.jpg
       ...
   ```

2. Place your project images in `/public/projects/`
   - Recommended format: JPG, PNG, or WebP
   - Recommended size: 800-1200px width
   - Aspect ratio: 2:3 (portrait) - e.g., 800x1200px

### Step 2: Update Portfolio Component

Open `src/components/Portfolio.tsx` and update the `projects` array:

```tsx
const projects = [
  {
    title: "Your Project Name",
    category: "Web Design", // or "Branding", "UI/UX Design", etc.
    image: "/projects/project1.jpg", // Path relative to /public
  },
  {
    title: "Another Project",
    category: "Branding",
    image: "/projects/project2.jpg",
  },
  // Add more projects...
];
```

### Example:

```tsx
const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Design",
    image: "/projects/ecommerce-site.jpg",
  },
  {
    title: "Coffee Brand Identity",
    category: "Branding",
    image: "/projects/coffee-branding.png",
  },
  {
    title: "Fitness Mobile App",
    category: "UI/UX Design",
    image: "/projects/fitness-app.jpg",
  },
];
```

## Option 2: Use External URLs

You can also use images hosted elsewhere (like a CDN, cloud storage, etc.):

```tsx
const projects = [
  {
    title: "Your Project",
    category: "Web Design",
    image: "https://yourdomain.com/images/project1.jpg",
  },
];
```

## Option 3: Use Multiple Image Folders

Organize by category:

```
/public
  /projects
    /web-design
      project1.jpg
      project2.jpg
    /branding
      logo1.jpg
      logo2.jpg
    /ui-ux
      app1.jpg
      app2.jpg
```

Then reference them:

```tsx
image: "/projects/web-design/project1.jpg"
```

## Image Optimization Tips

### 1. **File Size**
   - Keep images under 500KB each
   - Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress

### 2. **Dimensions**
   - Width: 640-1200px (800px is ideal)
   - Height: 960-1800px (1200px is ideal)
   - Maintain 2:3 aspect ratio

### 3. **Format**
   - Use WebP for best quality/size ratio
   - JPEG for photographs
   - PNG for graphics with transparency

### 4. **File Naming**
   - Use lowercase
   - Use hyphens instead of spaces
   - Be descriptive: `ecommerce-homepage.jpg` not `img1.jpg`

## Update Next.js Image Config (If Using External URLs)

If you're using images from external domains, update `next.config.ts`:

```typescript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yourdomain.com',
      },
      {
        protocol: 'https',
        hostname: 'another-domain.com',
      },
    ],
  },
};
```

## Current Portfolio Images

The portfolio currently shows **8 projects**. You can:
- Add more by adding items to the array
- Remove projects by deleting items
- Reorder by rearranging the array

## Categories

Available categories (you can add more):
- `"Web Design"`
- `"Branding"`
- `"UI/UX Design"`
- `"Digital Marketing"`
- `"Mobile App"`
- `"E-Commerce"`

## Example: Complete Update

Here's a complete example replacing all images:

```tsx
const projects = [
  {
    title: "TechStart Website",
    category: "Web Design",
    image: "/projects/techstart-web.jpg",
  },
  {
    title: "Urban Coffee Co.",
    category: "Branding",
    image: "/projects/urban-coffee-brand.jpg",
  },
  {
    title: "FitTrack App",
    category: "UI/UX Design",
    image: "/projects/fittrack-ui.jpg",
  },
  {
    title: "Bloom Skincare",
    category: "E-Commerce",
    image: "/projects/bloom-ecommerce.jpg",
  },
  {
    title: "Metro Bank Dashboard",
    category: "Web Design",
    image: "/projects/metro-dashboard.jpg",
  },
  {
    title: "Zen Wellness",
    category: "Branding",
    image: "/projects/zen-branding.jpg",
  },
  {
    title: "Travel Buddy",
    category: "Mobile App",
    image: "/projects/travel-app.jpg",
  },
  {
    title: "Green Energy Corp",
    category: "Web Design",
    image: "/projects/green-energy-web.jpg",
  },
];
```

## Testing

After adding your images:

1. Save the file
2. The development server will auto-reload
3. Check the Portfolio section
4. Hover over cards to see animations
5. Verify images load correctly

## Troubleshooting

**Images not showing?**
- Check file paths are correct
- Ensure images are in `/public` folder
- Verify file extensions match (case-sensitive)
- Check browser console for errors

**Images too large?**
- Compress them before adding
- Use appropriate dimensions (see above)
- Consider using WebP format

**Blurry images?**
- Use higher resolution source images
- Don't upscale small images
- Maintain 2:3 aspect ratio

## Need Help?

If you run into issues:
1. Check the browser console for errors
2. Verify image paths
3. Ensure Next.js dev server is running
4. Try clearing browser cache

---

**Current Location:** `src/components/Portfolio.tsx`  
**Line to Edit:** Lines 6-49 (the `projects` array)
