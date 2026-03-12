---
url: https://m3.material.io/components/button-groups/overview
lastmod: 2025-11-10
crawled_at: 2026-02-24T14:20:30.000Z
category: components
section: button-groups
page_type: overview
status: complete
---

# Button groups

Button groups organize buttons and add interactions between them.

- Two variants: **standard** and **connected**
- Applies shape morph when pressed and selected
- Connected button groups replace the segmented button
- Works with all button sizes: XS, S, M, L, and XL
- Support for single-select, multi-select, and selection-required

![A standard button group and a segmented button group.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4sskpfx-1_alt.png?alt=media&token=9de29e7b-e0c9-442c-84df-2ad6a90d5f04=s0)

_Button groups can contain buttons and icon buttons_

## Availability & resources

| Type           | Resource                    | Status      |
|----------------|-----------------------------|-------------|
| Design         | Design Kit (Figma)          | Available   |
| Implementation | Jetpack Compose: Expressive | Available   |
| Implementation | MDC-Android: Expressive     | Available   |
| Implementation | Web: Expressive             | Unavailable |

## M3 Expressive update

Button groups apply shape, motion, and width changes to buttons and icon buttons to make them more interactive. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

**May 2025**

New component added to catalog.

Variants and naming:

- Added standard button group
- Added connected button group
    - Use instead of segmented button, which is no longer recommended

Configurations:

- Works with all button sizes: XS, S, M, L, and XL
- Applies default shape to all buttons: round or square

![Standard button group in 3 of 5 available sizes, and segmented button group with just icon buttons and just common buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ca0qix-1.png?alt=media&token=36ca89da-91f7-443b-800d-a35bd8744481=s0)

_Button groups are containers that hold buttons of many shapes and sizes_
