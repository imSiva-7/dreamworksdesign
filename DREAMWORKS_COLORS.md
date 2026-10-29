# Forma Studio System

## Color palette

The site uses midnight navy, ice blue, and cool white. Shared Tailwind color tokens
are defined in src/app/globals.css.

| Token | Color | Usage |
| --- | --- | --- |
| ink | #0B1428 | Dark sections, headings, body text, button labels |
| ink-soft | #142643 | Secondary dark surfaces and gradients |
| surface | #F7FAFF | Cool white page backgrounds and cards |
| canvas | #EAF1FB | Cool alternate sections and form fields |
| accent | #7CC4FF | Primary buttons, highlights on dark surfaces, decorative accents |
| accent-hover | #A9DAFF | Primary button hover and complementary glow |
| accent-ink | #2458C6 | Accent headings and links on light surfaces |
| accent-ink-hover | #1C4399 | Accent link hover on light surfaces |

Use blue with navy text for primary buttons. Use the deeper accent-ink shade
for readable colored text on cool white backgrounds. White remains available for
text and translucent details over dark sections and project images.

## Examples

- Primary button: bg-accent text-ink hover:bg-accent-hover
- Light section: bg-surface text-ink
- Alternate section: bg-canvas
- Light section accent text: text-accent-ink
- Dark section accent text: text-accent
- Card: bg-surface border-ink/10 hover:border-accent
- Form field: bg-canvas text-ink focus:border-accent

Opacity modifiers work with every token, for example bg-accent/10 and
text-ink/70. Keep decorative gradients, shadows, selection colors, and
scrollbars within the same blue family.

## Typography

- Anton: display headings and uppercase branding.
- Poppins: body copy, navigation, forms, and buttons.

The color refresh preserves existing layouts, typography, and animations.

Last updated: 2026-10-29
