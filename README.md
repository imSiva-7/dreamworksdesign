# Forma Studio

A fictional creative studio website built as an internship design and development
exercise, using Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Run locally

Install dependencies with npm install, then run npm run dev.
Open http://localhost:3000.

## Checks

- npm run lint
- npx tsc --noEmit
- npm run build
- npm start (after building)

The production build uses Next.js's supported Webpack option because the default
Turbopack production build encountered an internal worker error on Windows.
Development continues to use Turbopack.

## Features

- Responsive floating glass navigation with an accessible mobile disclosure.
- Muted background video with pause control and reduced-motion support.
- Technology marquees and moving offerings cards with animated artwork.
- Eight fictional projects with local SVG mockups, a moving device showcase, and
  native dialog previews with keyboard support. Both moving rows support pause,
  hover/focus suspension, touch scrolling, arrow controls, and reduced motion.
- Contact form demonstration with field validation, loading, success, and retry
  states. It does not send or persist messages.
- Self-hosted Anton and Poppins Latin fonts so builds need no font downloads.

## Assets

Project illustrations and the video fallback are local SVG files in public/.
Project names and briefs are fictional.
Video details are in public/VIDEO_CREDITS.md.
The bundled font license is in src/app/fonts/OFL.txt.

## Verified

Browser checks covered 390px mobile and 1440px desktop layouts, mobile menu
dismissal, project dialogs and Escape, gallery arrows, invalid and valid form
submission, section link targets, image loading, and video playback.
