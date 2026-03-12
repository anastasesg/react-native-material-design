---
url: https://m3.material.io/components/navigation-bar/overview
lastmod: 2026-01-26
crawled_at: 2026-03-09T16:10:00.000Z
category: components
section: navigation-bar
page_type: overview
status: complete
---

# Navigation bar

Navigation bars let people switch between UI views on smaller devices

- Use navigation bars in compact or medium window sizes
- Can contain 3-5 destinations of equal importance
- Destinations don't change. They should be consistent across app screens.

![Two navigation bars of different widths with 4 destinations.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fodjau-01.png?alt=media&token=2a83f14e-464f-4f96-9c01-eb770d98010e=s0)

_Navigation bar for compact and medium window sizes_

## Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | | |
| | Design Kit (Figma) | Available |
| Implementation | | |
| | Flutter | Available |
| | Jetpack Compose | Available |
| | Jetpack Compose: Expressive | Available |
| | MDC-Android | Available |
| | MDC-Android: Expressive | Available |
| | Web | Unavailable |
| | Web: Expressive | Unavailable |

## M3 Expressive update

**May 2025**

A new flexible navigation bar was introduced to replace the baseline navigation bar. It's shorter and supports horizontal navigation items in medium windows. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Baseline navigation bar is no longer recommended
- Added **flexible** navigation bar
  - Shorter height
  - Can be used in medium window sizes with horizontal navigation items

Color:

- Active label changed from **on-surface-variant** to **secondary**

![Navigation bar in M3 Expressive. It's shorter than the baseline nav bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmae7qe43-02.png?alt=media&token=52cdfa5b-8a10-45d5-af7c-0a92cc899672=s0)

_The flexible navigation bar is shorter and can be used in medium windows with horizontal nav items_

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Elevation: No shadow
- Layout: Container height is taller
- States: The active destination can be indicated with a pill shape in a contrasting color
- Name: Bottom navigation has been renamed **navigation bar**

![M2 nav bar with a drop shadow and no active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ddmjvm-03.png?alt=media&token=9e50be86-5460-46f5-90a7-0805ec3c9127=s0)

_M2: A drop shadow indicates placement on top of content. Filled and regular weight icons indicate active states._

![M3 nav bar with a surface color and active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmae7pvz8-04.png?alt=media&token=98531a7d-df77-4d8e-a56b-7164db497bd9=s0)

_M3: Taller and no drop shadow. Filled icons and an active indicator indicate active state._
