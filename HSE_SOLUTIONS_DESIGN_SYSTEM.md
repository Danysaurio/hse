# HSE Solutions - Design System Documentation

**File:** Convertify-Sketch-Adobe-Google--Community  
**FileKey:** gg0fglslfmA6Zyn5aanew4  
**Last Updated:** April 7, 2026

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Brand Identity](#brand-identity)
3. [Pages & Screens](#pages--screens)
4. [Component Library](#component-library)
5. [Design System](#design-system)
6. [Typography](#typography)
7. [Color Palette](#color-palette)
8. [Layout & Grid](#layout--grid)
9. [Interactive States](#interactive-states)
10. [Component Details](#component-details)

---

## Overview

HSE Solutions is a comprehensive design system for a professional services website specializing in:
- Integrated Risk Management
- Industrial Safety & Civil Protection
- Sustainability & Corporate Responsibility

**Company Focus:** Transforming complex risks into sustainable solutions with 35+ years of experience.

---

## Brand Identity

### Tagline
> "Transformamos riesgos complejos en soluciones sustentables"  
> (We transform complex risks into sustainable solutions)

### Mission
Providing integrated management strategies, practical methodologies, and verifiable solutions that protect teams and optimize operations.

### Core Values
- **Integridad** (Integrity)
- **Calidad** (Quality)
- **Confianza** (Trust)

### Logo
- **Name:** HSE Solutions
- **Variations:** Logo vertical (208×208px)
- **Brand Color:** Teal/Green accent

### Experience
- 35+ years in integrated risk management
- Expertise in risk management, industrial safety, civil protection, and sustainability

---

## Pages & Screens

### 1. Home (Web) - ID: 1:500
**Dimensions:** 1920×4767px

#### Sections:
- **Hero Section** (1920×560px)
  - Background building image
  - Main headline: "Transformamos riesgos complejos en soluciones sustentables"
  - Sub-headline: "Diseñamos estrategias claras, prácticas y verificables que protegen a tu equipo y optimizan tu operación."
  - Primary CTA button: "Agendar Diagnóstico"

- **About Section** (1920×305px)
  - Company introduction with logo
  - Profile image (Mtro. Martín Conde Cereño)
  - 35+ years experience messaging
  - Expert background description

- **Services Section** ("Lo que ofrecemos")
  - Three service cards (532×532px each):
    1. **Gestión Integral de Riesgos** (Risk Management)
       - Icon: triangle-exclamation
       - Description: Master risks with proven methodologies
    2. **Seguridad Industrial y Protección Civil** (Industrial Safety)
       - Icon: helmet-safety
       - Description: Strengthen organizational resilience
    3. **Sustentabilidad y Responsabilidad Corporativa** (Sustainability)
       - Icon: hand-holding-heart
       - Description: Drive sustainability with responsible practices

- **Integral Solution Section** (1920×404px)
  - Dark blue background
  - Title: "MÁS QUE UN SERVICIO, UNA SOLUCIÓN INTEGRAL"
  - Subtitle: "Póliza HSE Solutions®: Diagnóstico, implementación y mejora continua en un sólo contrato."
  - Extended description with benefits

- **Industries Section** ("Industrias que servimos")
  - Grid of 4 industry images (responsive layout)
  - Industry examples showcased

- **Services Display Section** ("NUESTROS SERVICIOS")
  - Grid of 4 service showcase images
  - Shows practical applications

- **Footer** (Dark blue section)
  - Multiple footer states for different pages
  - Navigation links
  - Contact information
  - Legal links

### 2. Mobile Home - ID: 1:612
**Dimensions:** Responsive mobile layout

- Stacked vertical layout
- Mobile-optimized header (390×60px)
- Mobile footer (390×498px)
- Touch-friendly spacing
- Same content sections as web version, adapted for mobile

### 3. Acerca de (About) - ID: 1:945
**Type:** Dedicated About Page

#### Sections:
- **Hero Section**
  - Subtitle: "Acerca de HSE Solutions®"
  - Building background image

- **Values Section** ("Soluciones Integradas hacia un futuro seguro y sustentable")
  - Three value cards with green background
  - Messaging about integrated solutions

- **Core Values Cards** (Green/Teal color)
  - 3 cards highlighting company values
  - Color-coded visual hierarchy

- **Team Section**
  - Profile: Mtro. Martín Conde Cereño
  - Title: "El experto detrás de HSE Solutions®"
  - Extended biography
  - Credentials and expertise list

- **Services Grid** ("Nuestros Servicios")
  - 4 industry images showcasing services
  - Same as home page

- **Certifications Section** ("Credenciales Personales")
  - UDLA logo
  - NAND certification
  - HAMID certification
  - Additional certifications with icons

- **Affiliations & Memberships**
  - Cámara 2026
  - Professional associations

- **Footer**
  - Navigation and contact info

### 4. Additional Pages
- **Servicios** (Services) - Detailed service offerings
- **Contacto** (Contact) - Contact form with multiple states
- **Contacto – Éxito** (Contact Success) - Success page after form submission
- **Términos y Condiciones** (Terms & Conditions)
- **Aviso de Privacidad** (Privacy Notice)
- **Ficha Técnica-Capacitación** (Technical Training Sheet)

---

## Component Library

**Location:** XD Components Frame (ID: 1:499)

### Component Inventory

#### Basic Components

| Component | Dimensions | Purpose |
|-----------|-----------|---------|
| xmark | 24×24px | Close/dismiss icon |
| CTA Secundario | 180×51px | Secondary action button |
| CTA Principal | 213×51px | Primary action button |

#### Card Components

| Component | Dimensions | Purpose |
|-----------|-----------|---------|
| Credenciales mobile | 237×316px | Mobile credential display |
| Credenciales Home | 236×252px | Desktop credential display |
| Ventana Éxito | 341×177px | Success notification window |
| Servicios Home | 348×283px | Service showcase card |
| Tarjeta Afiliaciones | 810×182px | Affiliations/partnerships card |
| Tarjeta Gobierno | 350×147px | Government/institutional card |
| Tarjeta ancha | 812×263px | Wide content card |
| Tarjeta Certificaciones | 536×183px | Certifications display card |
| Tarjeta Valores | 316×280px | Values/principles card |
| Tarjetas Servicios | 532×769px | Large service card grid |

#### Navigation Components

| Component | Dimensions | States |
|-----------|-----------|--------|
| Mobile Header | 390×60px | Default, various page states |
| Mobile Footer | 390×498px | Responsive footer |
| Header | 9696×120px | 5 states (About, Services, Contact, Terms, Default) |
| Footer | 7752×362px | 4 states (Services, State 3, State 4, Default) |

#### Image/Media Components

| Component | Dimensions | States |
|-----------|-----------|--------|
| Industrias | 393×393px | Industry showcase |
| Industrias imagen | 810×393px | 2 states (Hover, Default) |
| Play video Mobile | 276×76px | 3 states (After use, Toggle, Default) |
| Image Hover | 1644×384px | 2 states (Hover, Default) |
| Tarjeta servicios | 810×387px | Service card display |

#### Interactive Components

| Component | Dimensions | States |
|-----------|-----------|--------|
| Touching icons | 120×48px | 2 states (Close, Default) |
| Acerca de | 3864×81px | 2 states (Mtro. Martín, Default) |
| Casilla de verificación | 72×24px | 2 states (Checked, Unchecked) |
| Selección contacto | 366×45px | 2 states (Selected, Default) |
| Contacto | 3312×786px | 3 states (Send message, Success, Default) |

---

## Design System

### Design Principles

1. **Clarity & Simplicity**
   - Clean, uncluttered layouts
   - Clear information hierarchy
   - Easy-to-scan content

2. **Professional Credibility**
   - Sophisticated color palette
   - Quality imagery
   - Organized structure

3. **Accessibility & Usability**
   - Touch-friendly mobile components
   - Clear interactive states
   - Responsive design

4. **Consistency**
   - Unified component system
   - Standardized spacing
   - Predictable patterns

---

## Typography

### Font Family
- **Sans-serif Modern** (Primary family - exact font name not specified in component data)
- Clean, professional appearance
- Multiple weights for hierarchy

### Text Hierarchy

**Headlines:**
- Main page title: Large, bold, navy blue
- Section titles: Medium, bold, navy or white text
- Subsections: Smaller, semi-bold

**Body Text:**
- Main body: Regular weight, readable size (likely 16-18px base)
- Small text/captions: Lighter, smaller size

**Example Text:**
- Main Headline: "Transformamos riesgos complejos en soluciones sustentables"
- Subheading: "Diseñamos estrategias claras, prácticas y verificables que protegen a tu equipo y optimizan tu operación."
- Body descriptions: 3-4 line paragraphs with balanced spacing

---

## Color Palette

### Primary Colors

| Color | Usage | Hex/Values |
|-------|-------|-----------|
| **Dark Navy Blue** | Headers, footers, dark backgrounds | Primary brand color |
| **Teal/Green** | CTAs, accent elements, highlights | Secondary brand color |
| **White** | Text on dark backgrounds, content areas | Text/negative space |
| **Light Gray** | Backgrounds, card backgrounds | Subtle contrast |

### Color Applications

- **Headers/Footers:** Dark navy blue (consistent brand presence)
- **Primary Buttons:** Teal/green background with white text
- **Secondary Buttons:** Outlined or lighter background
- **Values Cards:** Green/teal backgrounds with white text
- **Text:** Dark navy blue on light backgrounds, white on dark backgrounds
- **Accents:** Teal/green for links, highlights, interactive states

---

## Layout & Grid

### Web Layout
- **Base Width:** 1920px (desktop standard)
- **Gutters:** Consistent padding (appears to be 24-40px)
- **Column System:** Flexible grid for content sections
- **Max Content Width:** Appears to be ~1600-1700px with symmetric margins

### Mobile Layout
- **Base Width:** 390px (mobile standard)
- **Stacked Layout:** Vertical stacking of all sections
- **Touch Padding:** Increased spacing for touch targets
- **Header Height:** 60px
- **Footer Height:** ~500px (expandable)

### Spacing Scale
- **Micro:** 8px
- **Small:** 16px
- **Medium:** 24px
- **Large:** 40px
- **Extra Large:** 60px+

### Container Sizes
- **Section containers:** Full width (1920px web, 390px mobile)
- **Content containers:** ~1600px web with centered margins
- **Cards:** Variable (180-810px depending on component)

---

## Interactive States

### Button States
- **Default:** Standard appearance (teal background)
- **Hover:** Darker shade or shadow effect
- **Active/Pressed:** Inverted colors or increased depth
- **Disabled:** Grayed out or reduced opacity

### Form Component States

**Contact Form (3 states):**
1. **Default state:** Empty form, ready for input
2. **Sending state:** "Enviar un mensaje" - showing form submission
3. **Success state:** "Mensaje Exitoso" - confirmation message

**Checkbox States:**
1. **Unchecked:** Empty box
2. **Checked:** Filled box with checkmark

**Contact Selection:**
1. **Default:** Unselected
2. **Selected:** Highlighted/checked state

### Image Hover Effects
- **Default state:** Normal image display
- **Hover state:** Slightly magnified or overlaid effect
- Used for interactive image galleries and industry showcases

### Navigation States
- **Default:** Primary navigation appearance
- **About page:** Navigation highlights "About"
- **Services page:** Navigation highlights "Services"
- **Contact page:** Navigation highlights "Contact"
- **Terms & Privacy page:** Navigation highlights appropriate section

---

## Component Details

### Header Component (ID: 1:498)
**Dimensions:** 9696×120px (contains all states side-by-side)

**Contains 5 states:**
1. **About State** (1920×120px)
   - Logo on left
   - Navigation: Inicio, Acerca de, Servicios, Contacto
   
2. **Services State** (1920×120px)
   - Same layout, Services highlighted

3. **Contact State** (1920×120px)
   - Same layout, Contact highlighted

4. **Terms & Privacy State** (1920×120px)
   - Same layout, Legal section highlighted

5. **Default State** (1920×120px)
   - Standard home navigation

**Navigation Items:**
- Inicio (Home)
- Acerca de (About)
- Servicios (Services)
- Contacto (Contact)
- Various links in terms section

### Footer Component (ID: 1:493)
**Dimensions:** 7752×362px (contains 4 states)

**States:**
1. **Services State** - Footer when on Services page
2. **State 3** - Alternate footer layout
3. **State 4** - Another layout variant
4. **Default State** - Standard footer

**Typical Footer Content:**
- Logo/branding
- Navigation links
- Contact information
- Copyright notice
- Links to Terms and Privacy

### Contact Form (ID: 1:492)
**Dimensions:** 3312×786px (contains 3 states)

**States:**
1. **Default State** (1088×786px)
   - Empty form with input fields
   - Submit button

2. **Sending State** (1088×786px)
   - "Enviar un mensaje" - Message sending state
   - Form in progress

3. **Success State** (1088×786px)
   - "Mensaje Exitoso" - Success message
   - Confirmation display

**Form Fields (inferred):**
- Input fields for user data
- Likely: Name, Email, Subject, Message
- Submit CTA button
- Validation feedback

### Service Cards (ID: 1:361)
**Dimensions:** 532×769px

**Content per card:**
- Icon/image at top
- Service title
- Description text (3-5 lines)
- Supporting details or features

**Three Service Cards in Set:**
1. **Gestión Integral de Riesgos**
2. **Seguridad Industrial y Protección Civil**
3. **Sustentabilidad y Responsabilidad Corporativa**

### Industry Cards (ID: 1:420)
**Dimensions:** 393×393px

**Content:**
- Industry-specific image
- Company branding/context
- Responsive to hover states

**Industries Showcased:**
1. Industrial/Manufacturing
2. Construction/Building
3. Maritime/Shipping
4. Energy/Oil & Gas

---

## Design Assets & Resources

### Images Locations
- **Building/Hero images:** Full-width backgrounds
- **Industry showcase:** 4-image grid layout
- **Profile photos:** Team member portraits (Mtro. Martín)
- **Service examples:** 4-image grid showing practical applications
- **Logo locations:** Multiple placements (header, footer, about section)

### Icon Set
- **triangle-exclamation** (Risk management icon)
- **helmet-safety** (Safety icon)
- **hand-holding-heart** (Sustainability icon)
- **xmark** (Close/dismiss icon)
- Various certification and affiliation logos

---

## Responsive Design

### Breakpoints

- **Desktop:** 1920px (primary)
- **Mobile:** 390px (primary mobile size)
- **Tablets:** Likely intermediate sizes (implied but not explicitly detailed)

### Responsive Strategy

1. **Hero Sections:** Full-width images with responsive text overlay
2. **Grid Layouts:** Collapse from 4 columns (desktop) to stacked (mobile)
3. **Cards:** Maintain fixed widths, adjust margins
4. **Typography:** Potentially scales with viewport
5. **Navigation:** Mobile header/footer optimized for touch

---

## Implementation Notes

### For Developers

1. **Component-Based Architecture**
   - Use component system for all repeating elements
   - Create variants for different states (default, hover, active)
   - Document prop variations clearly

2. **Styling Approach**
   - Consider CSS variables for color palette
   - Use utility classes for spacing and sizing
   - Implement responsive classes for breakpoints

3. **Typography**
   - Load primary sans-serif font
   - Define type scale (h1-h6, body, small text)
   - Set line-height for readability

4. **Color System**
   - Define color tokens: primary, secondary, neutral
   - Create semantic color names: primary-bg, text-dark, etc.
   - Ensure WCAG contrast compliance

5. **Layout**
   - Use CSS Grid or Flexbox for responsive layouts
   - Implement consistent padding/margins
   - Create utility for max-content-width (1600-1700px)

6. **Interactive States**
   - Button: default, hover, active, disabled
   - Forms: default, focus, filled, error, success
   - Navigation: default, active, hover

### Quality Checklist

- [ ] All pages responsive (1920px, 390px minimum)
- [ ] All buttons have hover states
- [ ] Form states working (default, sending, success)
- [ ] Navigation highlighting correct pages
- [ ] Footer displays correct state for page
- [ ] Images optimized and responsive
- [ ] Typography hierarchy clear
- [ ] Color contrast meets WCAG AA standards
- [ ] Touch targets minimum 44×44px on mobile
- [ ] Loading states implemented

---

## Resources

- **Figma File:** https://www.figma.com/design/gg0fglslfmA6Zyn5aanew4/
- **Company:** HSE Solutions
- **Industries:** Risk Management, Industrial Safety, Sustainability
- **Design Export Date:** April 7, 2026

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-04-07 | Initial design system documentation |

---

**Created:** April 7, 2026  
**Status:** Active Design System  
**Maintainer:** HSE Solutions Design Team
