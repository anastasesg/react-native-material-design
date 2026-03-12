---
url: https://m3.material.io/components/sliders/overview
lastmod: 2026-01-26
crawled_at: 2026-03-09T21:50:00.000Z
category: components
section: sliders
page_type: overview
status: complete
---

# Sliders

Sliders let users make selections from a range of values.

- Three variants: Standard, centered, range
- Has five sizes, vertical and horizontal orientation, and an optional inset icon
- Sliders should present the full range of available values
- The slider value should take effect immediately

_Sliders change values along a range_

## Availability & resources

| Type           | Resource                    | Status      |
| -------------- | --------------------------- | ----------- |
| Design         | Design Kit (Figma)          | Available   |
| Implementation | Flutter                     | Available   |
| Implementation | Jetpack Compose             | Available   |
| Implementation | Jetpack Compose: Expressive | Available   |
| Implementation | MDC-Android                 | Available   |
| Implementation | MDC-Android: Expressive     | Available   |
| Implementation | Web                         | Available   |
| Implementation | Web: Expressive             | Unavailable |

## M3 Expressive update

**May 2025**

The slider includes expressive configurations for orientation, shape sizes, and an inset icon. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Updated on MDC-Android and Jetpack Compose.

Variants and naming:

- Changed **continuous** slider to **standard** slider
- The **discrete** slider is now the **stops** configuration

New configurations:

- Orientation: Horizontal, vertical
- Optional inset icon (standard slider only)
- Sizes: XS (existing default), S, M, L, XL

![3 M3 Expressive sliders.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lii3kv-02.png?alt=media&token=315a4297-8491-4398-9ceb-ee02c42bce76=s0)

_Standard slider, Centered slider, Range slider_

## Previous updates

### Visual refresh to improve non-text contrast

**Dec 2023:** Updated on MDC-Android and Jetpack Compose.

- **Configuration:** Added centered configuration and range selection
- **Shape:** New shape for slider tracks and handles. Slider elements change shape when selected.
- **Motion:** Slider handle adjusts width upon selection. Slider tracks adjust in shape when sliding to the edge.
- **Color:** Refreshed color mappings

![M3 visually-refreshed slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lirx37-03.png?alt=media&token=938a41c7-a272-4f54-b226-a138dbc77dbd=s0)

_M3 visual refresh: Sliders have a stop indicator, larger label text, and a vertical handle that narrows when pressed. Centered sliders start from the middle instead of the leading edge._

## Differences from M2

- **Color**: New color mappings and compatibility with dynamic color

![M2 slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7livqfr-04.png?alt=media&token=04f22602-6e80-4772-84e6-e36473774b80=s0)

_M2: Sliders have a circular handle and a small label when pressed_

![Original M3 slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7liwct9-05.png?alt=media&token=92017b6d-1e41-4639-9a31-6e78d744afe0=s0)

_M3: Sliders have new color mappings and support dynamic color_
