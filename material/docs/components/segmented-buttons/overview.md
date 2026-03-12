---
url: https://m3.material.io/components/segmented-buttons/overview
lastmod: 2025-09-26
crawled_at: 2026-02-04T12:00:00.000Z
category: components
section: segmented-buttons
page_type: overview
status: complete
---

# Segmented buttons

Segmented buttons help people select options, switch views, or sort elements.

> **Note:** Segmented buttons are being deprecated in the Material 3 expressive update. For those who have updated, use the [connected button group](https://m3.material.io/m3/pages/button-groups/overview/) instead, which has mostly the same functionality but with an updated visual design.

- Segmented buttons can contain icons, label text, or both
- Two types: single-select and multi-select
- Use for simple choices between two to five items (for more items or complex choices, use chips)

![Two types of segmented buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7qvais-1.png?alt=media&token=52a09b72-85ab-4f14-93a4-0738235fef83=s0)

1. Single-select segmented button
2. Multi-select segmented button

## Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Available |
| Implementation | Jetpack Compose | Available |
| Implementation | MDC-Android | Available |
| Implementation | Web | Unavailable |

## M3 Expressive update

**May 2025**

The segmented button is being deprecated. Use the [connected button group](https://m3.material.io/m3/pages/button-groups/overview/) instead. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

## Differences from M2

- **Color:** New color mappings and compatibility with dynamic color
- **Icons:** Optional check icon to indicate selected state
- **Layout:** Taller container height of 40dp
- **Name and types:** Segmented buttons were previously known as toggle buttons. They now have two official types: single-select and multi-select.
- **Shape:** Fully rounded corners
- **Typography:** Labels use sentence case instead of all caps

![Diagram indicating the fully rounded corner radius of a segmented button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwhr0fyz-2.png?alt=media&token=246e78a8-1e67-45c6-a7b7-552681fce036=s0)

_Segmented buttons now have a container height of 40dp_

![Segmented buttons with M2 color mappings, all caps text labels, boxy shape, and shorter height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fl20oj7ju-example.png?alt=media&token=9a695831-7fd8-4af8-ad34-b16a30ee5e32=s0)

_M2: Segmented buttons (also known as toggle buttons) have a corner radius of 4dp and a height of 36dp_

![Segmented buttons with M3 color mappings, sentence case text labels, fully round shape, and taller height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7ruslm-4.png?alt=media&token=f5efc802-2c9c-4a7d-98f6-1e92ef9b4c76=s0)

_M3: Segmented buttons have fully rounded corners and a height of 40dp_
