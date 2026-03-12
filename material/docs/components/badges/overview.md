---
url: https://m3.material.io/components/badges/overview
lastmod: 2025-12-01
crawled_at: 2026-03-12T14:38:37.645Z
category: components
section: badges
page_type: overview
status: complete
---

# Badges

Badges show notifications, counts, or status information on navigation items and icons

- Can contain labels or numbers
- Two variants: small and large
- Anchor badges inside the icon bounding box, at the upper trailing edge of the icon
- Limit content to four characters, including a **+**
- Keep the default color mapping
  ![3 icons with badges. 1 is a small dot. 2 is a larger circle with a 1 digit number. 3 is an oval with a 4 digit number.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8hopxl-01.png?alt=media&token=e9840156-17f4-4edf-b69a-eb62bd0b5c5c=s0)

_Small badge on a navigation itemLarge badge on a navigation itemLarge badge with max characters on a navigation item_

## Availability & resources

| Type           | Resource                                                                                                                       | Status      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| Design         | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460)                                                 | Available   |
| Implementation | [Flutter](https://api.flutter.dev/flutter/material/Badge-class.html)                                                           | Available   |
|                | [Jetpack Compose](https://developer.android.com/develop/ui/compose/components/badges)                                          | Available   |
|                | [MDC-Android](https://github.com/material-components/material-components-android/blob/master/docs/components/BadgeDrawable.md) | Available   |
|                | Web                                                                                                                            | Unavailable |

## Differences from M2

- Color: New color mappings and compatibility with
  dynamic color
  ![Navigation bar showing 4 icons with different badge variants in a bright red color.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8hz0r2-02.png?alt=media&token=579d40e2-1895-4ed4-a074-22f71265f580=s0)

_Badges have new color mappings_
