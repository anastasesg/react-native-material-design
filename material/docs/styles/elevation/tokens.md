---
url: https://m3.material.io/styles/elevation/tokens
lastmod: 2025-09-26
crawled_at: 2026-02-02T00:00:00.000Z
category: styles
section: elevation
page_type: tokens
status: complete
---

# Elevation

Elevation is the distance between two surfaces on the z-axis

## Tokens

Elevation levels can be implemented with tokens. Surface tint color is deprecated — use elevation level tokens (0–5) instead. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Elevation Token Values

| Token | Value |
| --- | --- |
| md.sys.elevation.surface-tint-color | #6750A4 |
| md.sys.elevation.level5 | +5 |
| md.sys.elevation.level4 | +4 |
| md.sys.elevation.level3 | +3 |
| md.sys.elevation.level2 | +2 |
| md.sys.elevation.level1 | +1 |
| md.sys.elevation.level0 | 0 |

## Component elevation

Most components have a default elevation. Component elevation is only used to determine where the component sits in relation to other components, including when hovered or focused (which usually raises elevation by one level). Elevation has no shadow or value of its own by default.

| Resting level | Component | DP Height |
| --- | --- | --- |
| 5 | (not assigned as resting level) | 12dp |
| 4 | (not assigned as resting level) | 8dp |
| 3 | Date pickers, Dialogs (modal), Extended FAB, FAB, FAB Menu (close button), Search, Time pickers | 6dp |
| 2 | App bar (scrolled), Menu, Navigation bar, Rich tooltip, Toolbar | 3dp |
| 1 | Banner, Bottom sheet (modal), Button (elevated), Card (elevated), Chips (elevated), Navigation drawer (modal), Side sheet (modal) | 1dp |
| 0 | App Bar (not scrolled), Buttons (filled, tonal, outlined), Button groups, Cards (filled, outlined), Carousel, Chips, Dialog (full-screen), Extended FAB (in navigation rail), FAB (in navigation rail), FAB Menu (list items), Icon buttons, List, Navigation rail, Segmented button, Side sheet (docked), Slider, Split button, Tabs | 0dp |
