---
url: https://m3.material.io/components/buttons/overview
lastmod: 2025-11-27
crawled_at: 2026-02-03T12:00:00.000Z
category: components
section: buttons
page_type: overview
status: complete
---

# Buttons

Buttons prompt most actions in a UI

- Two types: default and toggle
- Can contain an optional leading icon
- Five color options: elevated, filled, tonal, outlined, and text
- Five size recommendations: extra small, small, medium, large, and extra large
- Two shape options: round and square
- Keep labels concise and use sentence case

![5 types of buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5v1rzsx-1.png?alt=media&token=307f6d37-e5f3-4b47-8d02-691cbb79a328=s0)

_Elevated button, Filled button, Filled tonal button, Outlined button, Text button_

## Availability & resources

| Type           | Resource                    | Status      |
|----------------|-----------------------------|-------------|
| Design         | Design Kit (Figma)          | Available   |
| Implementation | Flutter                     | Available   |
|                | Jetpack Compose             | Available   |
|                | Jetpack Compose: Expressive | Available   |
|                | MDC-Android                 | Available   |
|                | MDC-Android: Expressive     | Available   |
|                | Web                         | Available   |
|                | Web: Expressive             | Unavailable |

## M3 Expressive update

**May 2025**

Buttons now have a wider variety of shapes and sizes, toggle functionality, and can change shape when selected. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Types and naming:

- Default and toggle (selection)
- Color styles are now configurations. (elevated, filled, tonal, outlined, text)

Shapes:

- Round and square
- Shape morphs when pressed
- Shape morphs when selected

Sizes:

- Extra small
- Small (existing, default)
- Medium
- Large
- Extra large

New padding for **small** buttons:

- 16dp (recommended to match padding of new sizes)
- 24dp (deprecated)

![4 button changes in the expressive update.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm35yfd18-2.png?alt=media&token=2eab9629-ed61-4e7f-baab-05539529d0c3=s0)

_Five sizes, Toggle (selection), Two shapes, Two small padding widths_

## Differences from M2

- Color: New color mappings and compatibility with dynamic color. Icons and labels now share the same color. Neutral text button has been deprecated.
- Icons: Standard size for leading and trailing icons is now 20dp
- Shape: Fully-rounded corner radius and additional height options

![Rectangular M2 buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5r6kn3n-2.png?alt=media&token=b7295c30-9c9d-44cf-80d2-a48f56668966=s0)

_M2: Buttons have a height of 36dp and slightly rounded corner radius_

![Round-cornered M3 buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5r6n6xk-3-1p.png?alt=media&token=b30a4d13-9717-4af8-9f2d-fa83d864a0a9=s0)

_M3: Default buttons are taller at 40dp and have fully rounded corners_
