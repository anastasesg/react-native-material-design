---
url: https://m3.material.io/components/toolbars/overview
lastmod: 2025-09-26
crawled_at: 2026-03-09T19:54:12.000Z
category: components
section: toolbars
page_type: overview
status: complete
---

# Toolbars

Toolbars display frequently used actions relevant to the current page

- Two expressive variants: **docked toolbar** and **floating toolbar**
- Use the vibrant color style for greater emphasis
- Can display a wide variety of control types, like buttons, icon buttons, and text fields
- Can be paired with FABs to emphasize certain actions
- Don't show at the same time as a navigation bar

![2 variants of toolbars.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aionfm-01.png?alt=media&token=0f1d71f5-1d22-4820-859d-fd952e995cf9=s0)

_Configurations of floating toolbars_

## Availability & resources

| Type           | Resource                    | Status      |
| -------------- | --------------------------- | ----------- |
| Design         |                             |             |
|                | Design Kit (Figma)          | Available   |
| Implementation |                             |             |
|                | Flutter                     | Available   |
|                | Jetpack Compose             | Available   |
|                | Jetpack Compose: Expressive | Available   |
|                | MDC-Android                 | Available   |
|                | MDC-Android: Expressive     | Available   |
|                | Web                         | Unavailable |
|                | Web: Expressive             | Unavailable |

## M3 Expressive update

The **bottom app bar** is no longer recommended and should be replaced with the **docked toolbar**, which functions similarly, but is shorter and has more flexibility. The **floating toolbar** was created for more versatility, greater amounts of actions, and more variety in where it's placed.

[More on GM3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Added **docked toolbar** to replace **bottom app bar**
  - Size: Shorter height
  - Color: Standard or vibrant
  - Flexibility: More layout and element options
- Added **floating toolbar** with the following configurations:
  - Layout: Horizontal or vertical
  - Color: Standard or vibrant
  - Flexibility: Can hold many elements and components. Can be paired with FAB.
- **Bottom app bar** is still available, but not recommended

![2 examples of toolbar variants.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aiswog-02.png?alt=media&token=e5523e45-647f-4168-b257-c773be63adf6=s0)

1. Floating, vibrant color scheme and paired with FAB
2. Docked with embedded primary action instead of FAB

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Elevation: No shadow
- Layout: Container height is taller and the FAB is now contained within the app bar container

![M2 bottom app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0e7liab-2.png?alt=media&token=16c3ad53-7e83-4079-85ad-9b096bbb56fc=s0)

_M2: Bottom app bar had higher elevation of 8dp and didn't contain the FAB_

![M3 bottom app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0e7mh6v-3.png?alt=media&token=9dfb6612-f40c-4d4c-a773-463109db7c5f=s0)

_M3: Bottom app bar has new colors, a taller container, no elevation or shadow, and contains the FAB_
