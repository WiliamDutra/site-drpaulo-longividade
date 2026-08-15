---
name: Clinical Excellence
colors:
  surface: '#fff8f7'
  surface-dim: '#e0d8d8'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2f1'
  surface-container: '#f4ecec'
  surface-container-high: '#eee6e6'
  surface-container-highest: '#e8e1e0'
  on-surface: '#1e1b1b'
  on-surface-variant: '#44474f'
  inverse-surface: '#333030'
  inverse-on-surface: '#f7efee'
  outline: '#757780'
  outline-variant: '#c5c6d0'
  surface-tint: '#485e8d'
  primary: '#000619'
  on-primary: '#ffffff'
  primary-container: '#001d4a'
  on-primary-container: '#7086b9'
  inverse-primary: '#b0c6fc'
  secondary: '#316b01'
  on-secondary: '#ffffff'
  secondary-container: '#aef27f'
  on-secondary-container: '#357007'
  tertiary: '#080603'
  on-tertiary: '#ffffff'
  tertiary-container: '#211f18'
  on-tertiary-container: '#8b867d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b0c6fc'
  on-primary-fixed: '#001a43'
  on-primary-fixed-variant: '#2f4674'
  secondary-fixed: '#b0f582'
  secondary-fixed-dim: '#95d869'
  on-secondary-fixed: '#0a2100'
  on-secondary-fixed-variant: '#235100'
  tertiary-fixed: '#e8e2d7'
  tertiary-fixed-dim: '#cbc6bb'
  on-tertiary-fixed: '#1d1b15'
  on-tertiary-fixed-variant: '#49473f'
  background: '#fff8f7'
  on-background: '#1e1b1b'
  surface-variant: '#e8e1e0'
  whatsapp-green: '#25D366'
  rating-gold: '#FFB800'
  surface-off-white: '#F8F9FA'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  section-padding: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality is authoritative yet empathetic, reflecting the high stakes of medical specialization in otorhinolaryngology. It aims to evoke a sense of immediate trust, clinical precision, and modern care. The target audience includes patients seeking specialized surgical or rehabilitative solutions who value clear information and professional credentials.

The design system follows a **Corporate / Modern** style with a focus on clinical clarity. It utilizes a structured, high-informational density approach, balancing technical expertise (CRM/RQE data) with human-centric testimonials. The visual language is defined by clean lines, ample white space to reduce cognitive load, and high-contrast call-to-action elements to facilitate easy patient scheduling.

## Colors

The palette is anchored by a deep Navy Blue (`#001D4A`), which communicates stability and medical authority. This is contrasted by a vibrant Medical Green (`#7FC054`) used for health-related accents and specific primary actions.

- **Primary:** Used for headers, navigation, and core brand elements.
- **Secondary:** Applied to positive health indicators and non-WhatsApp action buttons.
- **Tertiary:** A soft cream/beige used as an alternate section background to break verticality and provide warmth.
- **Neutral:** A charcoal grey for primary body text, ensuring high legibility without the harshness of pure black.
- **Status Colors:** Standard WhatsApp Green is reserved exclusively for the messaging CTA. Gold is used strictly for social proof and star ratings.

## Typography

This design system uses **Manrope** for all headings to provide a modern, geometric, and highly legible appearance that feels contemporary. **Hanken Grotesk** is used for body copy and labels to maintain a clean, professional "tech-meets-medical" aesthetic.

Hierarchy is strictly enforced to guide the patient through complex medical information. Headlines use a tighter letter-spacing to appear more grounded. Body text maintains a generous line height (`1.6`) to improve readability for older patients or those in distress.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop, centering content within a 1200px container to ensure readability of medical descriptions. 

- **Desktop:** 12-column grid with 24px gutters. Sections are separated by 80px of vertical padding to clearly demarcate different medical specialties.
- **Mobile:** Single column with 20px side margins. Section padding reduces to 48px.
- **Rhythm:** A 8px base unit governs all component-level spacing. Buttons and form inputs use a 16px internal horizontal padding.

## Elevation & Depth

To maintain a clean, clinical environment, depth is achieved through **Tonal Layers** and **Low-contrast outlines** rather than heavy shadows.

- **Surface Tiers:** Use the Tertiary color (`#EAE4D9`) or a very light Grey (`#F8F9FA`) for alternating sections to create a "card-on-background" feel without physical elevation.
- **Shadows:** Only applied to primary floating buttons (like the WhatsApp float) using a very soft, diffused shadow: `0 10px 25px rgba(0, 29, 74, 0.1)`.
- **Borders:** Subtle 1px borders in a light neutral tint are used for FAQ accordions and testimonial cards to define boundaries without adding visual noise.

## Shapes

The design system utilizes **Rounded** corners to appear approachable and human. A standard radius of `0.5rem` (8px) is applied to all cards, input fields, and standard buttons. 

Testimonial cards and specific "highlight" containers may use the `rounded-lg` (16px) setting to emphasize comfort and care. CTA buttons for scheduling often utilize the "Pill-shaped" profile to distinguish them as high-priority interactive elements.

## Components

### Buttons
- **Primary CTA:** Uses the Primary Navy background with White text. Bold weight.
- **WhatsApp CTA:** Always uses WhatsApp Green (`#25D366`). Includes the brand icon. High-contrast white text. Pill-shaped for maximum visibility.
- **Secondary:** Outlined buttons with a 2px stroke in Navy or Medical Green.

### Testimonials
- Testimonial cards feature a white background with a subtle border. 
- Include the Google "G" logo and the Gold star rating (`#FFB800`) prominently at the top.
- Typography: Patient name in `label-md`, quote in `body-md` italicized.

### FAQ / Accordions
- Used for "Dúvidas Frequentes."
- Features a leading number (e.g., 01, 02) in a muted neutral color.
- Uses a simple horizontal divider between items.
- Active state uses a soft background tint of the Primary color (5% opacity).

### Cards & Sections
- Medical specialty sections should include a "Watch Video" placeholder—a dark container with a centered play icon in White.
- Professional credentials (CRM/RQE) should always be placed immediately below the doctor's name in `caption` styling.