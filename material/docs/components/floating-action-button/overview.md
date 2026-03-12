---
url: https://m3.material.io/components/floating-action-button/overview
lastmod: 2026-01-14
crawled_at: 2026-02-04T12:00:00.000Z
category: components
section: floating-action-button
page_type: overview
status: complete
---

# FAB

Floating action buttons (FABs) help people take primary actions

- Use a FAB for the most common or important action on a screen
- Make sure the icon in a FAB is clear and understandable
- FABs persist on the screen when content is scrolling
- Three variants: FAB, medium FAB, large FAB

![The 3 sizes of floating action buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkap9gay-01.png?alt=media&token=e8e925f7-45d2-4db6-8bfb-31ea3248ae1e=s0)

_FAB, Medium FAB, Large FAB_

## Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | | |
| Design Kit (Figma) | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460) | Available |
| Implementation | | |
| Flutter | [Flutter](https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html) | Available |
| Jetpack Compose | [Jetpack Compose](https://developer.android.com/develop/ui/compose/components/fab) | Available |
| Jetpack Compose: Expressive | [Jetpack Compose: Expressive](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#FloatingActionButton(kotlin.Function0,androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Shape,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.material3.FloatingActionButtonElevation,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function0)) | Available |
| MDC-Android | [MDC-Android](https://github.com/material-components/material-components-android/blob/master/docs/components/FloatingActionButton.md) | Available |
| MDC-Android: Expressive | [MDC-Android: Expressive](https://github.com/material-components/material-components-android/blob/master/docs/components/FloatingActionButton.md) | Available |
| Web | [Web](https://github.com/material-components/material-web/blob/main/docs/components/fab.md) | Available |
| Web: Expressive | | Unavailable |

## M3 Expressive update

**May 2025**

The FAB has new sizes to match the extended FAB and more color options. The small FAB is no longer recommended. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Added **medium** FAB size
- **Small** FAB size is no longer recommended
- FAB and large FAB sizes are unchanged
- FAB variants are based on size, not color

Color:

- Added tone color styles:
  - Primary
  - Secondary
  - Tertiary
- Renamed existing tonal color styles to match their token names:
  - **Primary** to **Primary container**
  - **Secondary** to **Secondary container**
  - **Tertiary** to **Tertiary container**
  - The values haven't changed
- Surface color FABs are no longer recommended

![4 FABs showing the colors available after the expressive update.](https://lh3.googleusercontent.com/Kyq0kFrZiQkyIGco9EHQ5yzaPCDzbUydpq5bcHqcin1vLOhBpnqAeAW6D86dFvHrexhyJvo5jK0Brc4PwckWVOtXFqRcMhUA-h05047nERg=s0)

_FABs have updated colors and sizes_

## Differences from M2

![M2 circular FAB with a plus icon.](https://lh3.googleusercontent.com/biMTAbEZ8apVSF9QNSr9S8V1F1DCCRCRckdBmlU0g9XLCrNJMwkw_cbBk_gvb6b0JbaulKKD9lAeDTQp4h3sZK5yKXP0CrSWlefMrFoTxK3T=s0)

_M2: FABs are circles and always have a drop shadow_

![M3 rounded corner square FAB with an artist's palette icon.](https://lh3.googleusercontent.com/eSZyi5bl8kk_aCpEVo6DV_KiYuZ3i_rEVB9y7rWbFd5SSILeUBlvQ3n2ztYzvPSTe1fyMK0LKDD_axvANAOOt6VLnf4GoSbWWSKy3j9bcRI=s0)

_M3: FABs have a boxier shape, can use dynamic color, and include a new large FAB variation_
