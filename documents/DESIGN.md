---
name: Longevitare Elite
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c6c6cb'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8f9095'
  outline-variant: '#45474b'
  surface-tint: '#c3c6cf'
  primary: '#c3c6cf'
  on-primary: '#2d3137'
  primary-container: '#0a0e14'
  on-primary-container: '#787b83'
  inverse-primary: '#5b5e66'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#bbc7dd'
  on-tertiary: '#253142'
  tertiary-container: '#030e1e'
  on-tertiary-container: '#707c90'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dfe2eb'
  primary-fixed-dim: '#c3c6cf'
  on-primary-fixed: '#181c22'
  on-primary-fixed-variant: '#43474e'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#d7e3fa'
  tertiary-fixed-dim: '#bbc7dd'
  on-tertiary-fixed: '#101c2c'
  on-tertiary-fixed-variant: '#3b475a'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  data-point:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system embodies a "Medical Atelier" aesthetic—combining the precision of clinical science with the exclusivity of high-end hospitality. It targets a high-net-worth demographic seeking longevity and preventative care, moving away from "wellness" cliches and toward authoritative medical excellence.

The style is **Architectural Minimalism** with **Tactile** accents. It utilizes a high-contrast dark mode to evoke a sense of focus and prestige. Key visual signatures include:
- **Structural Integrity:** Heavy reliance on vertical lines, mimicking the "madeira ripada" (slatted wood) textures mentioned in the brief.
- **Controlled Radiance:** UI elements are illuminated by "warm LED" glows rather than standard dropshadows, creating depth within a dark environment.
- **Scientific Precision:** Technical 3D assets and data visualizations are rendered in a monochromatic blue spectrum to contrast against the warmth of the wood tones.

## Colors
The palette is rooted in deep, obsidian tones to establish immediate authority. 

- **Primary (Obsidian Navy):** Used for all primary backgrounds and core structural elements. It is deep enough to appear black but maintains a navy undertone for a more sophisticated "ink" feel.
- **Accent (Harvest Gold):** Reserved exclusively for high-priority actions, iconography, and the "infinity" brand mark. It should feel metallic and matte, not shimmering.
- **Tertiary (Technical Blue):** A mid-tone blue used specifically for 3D human body renders, data charts, and subtle divider lines.
- **Neutral (Parchment & Slate):** White is softened to a slight grey-white to prevent eye strain on dark backgrounds. Light wood-toned greys are used for surface backgrounds.
- **Alert (Cinnabar):** A muted, desaturated red for critical medical alerts, ensuring they are visible without breaking the premium aesthetic.

## Typography
Typography follows a strict hierarchy of "The Scholar and the Scientist."

- **Headlines:** Use **Libre Caslon Text**. This serif brings a literary, established, and authoritative tone. Use it for major titles and section headers to convey the "Instituto" heritage.
- **Body:** Use **Inter**. It is selected for its clinical neutrality and high legibility at small sizes, particularly when reading medical reports or longevity plans.
- **Metadata & Technicals:** Use **JetBrains Mono**. This monospaced font is used for lab results, biometric data, and labels. It reinforces the scientific, data-driven nature of the practice.

**Styling Note:** Avoid all-caps for serifs. Use all-caps exclusively for monospaced labels to create a "tabulated" feel.

## Layout & Spacing
The layout philosophy is **Gallery-inspired**. It uses generous whitespace (or "dark space") to allow medical data and high-contrast photography to breathe.

- **Grid:** A 12-column fixed grid for desktop. Elements should often span 6 or 8 columns to maintain centered, focused reading paths.
- **Vertical Rhythm:** A strict 8px baseline. Section gaps are intentionally large (120px+) to create a sense of unhurried, premium service.
- **The "Slat" Alignment:** Use vertical dividers (0.5pt strokes) to mimic the "madeira ripada" texture. These dividers should align with the grid gutters to create a structural, architectural feel across the page.

## Elevation & Depth
In this dark-mode design system, depth is achieved through **Tonal Layering** and **Illumination** rather than shadows.

- **Base Layer:** Deep Navy (#0A0E14).
- **Surface Layer:** Secondary containers use a slightly lighter navy (#141A23) with a 1px "Gold/Mustard" top border to simulate a light-catching edge.
- **LED Glow:** High-priority cards (like a "Current Longevity Status") use a subtle, 40px-blur outer glow in the Accent color (opacity 10%) to suggest a backlight effect behind the element.
- **Glassmorphism:** Use only for mobile navigation bars or sticky headers—a 20px backdrop blur with a 10% white tint to simulate high-quality frosted glass.

## Shapes
The shape language is **Sharp and Architectural**. 

Consistent with the "premium medical" and "wood slat" inspiration, all UI components utilize **0px (Sharp)** corners. This creates a more clinical, precise, and serious atmosphere. 

- **Exceptions:** The "Infinity" logo and specific 3D biological graphics are the only organic, curved shapes permitted. 
- **Buttons:** Must be perfectly rectangular.
- **Input Fields:** Bottom-border only (minimalist) or full sharp rectangles.
- **Images:** Always sharp-edged, framed with generous margins.

## Components

- **Buttons:** 
  - *Primary:* Solid Gold background, Obsidian Navy text, 0px radius. Heavy letter spacing on labels.
  - *Secondary:* Ghost style with 1px Gold border.
- **Medical Chips:** For displaying biomarkers (e.g., "Vitamin D: Optimal"). Use the Monospace font, sharp borders, and a tiny "Technical Blue" dot as a prefix.
- **Data Cards:** Darker grey background (#141A23). A vertical wood-texture stripe (2px wide) on the far left edge of the card.
- **Inputs:** Minimalist style. A single bottom-stroke in Slate Grey that turns Gold on focus. Label is always in Monospace caps above the line.
- **Progress Bars (Longevity Metrics):** Thin 2px lines. The background of the bar is Tertiary Blue at 20% opacity; the progress fill is solid Gold.
- **Photography:** Portraits should be high-contrast, professional, and slightly de-saturated. Use "Chiaroscuro" lighting (strong light and dark) to match the UI.