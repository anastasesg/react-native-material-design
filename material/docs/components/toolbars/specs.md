---
url: https://m3.material.io/components/toolbars/specs
lastmod: '2025-09-26'
crawled_at: '2026-03-09T20:12:00.000Z'
category: components
section: toolbars
page_type: specs
status: complete
---

# Toolbars

Toolbars display frequently used actions relevant to the current page.

## Variants

![2 variants of toolbars.](https://lh3.googleusercontent.com/j7SkkZwP6mNfPUFrpFyRIcGSsfI3_5Kv8VI0whqh3B1cGJq3v0lx_xaG3wOnjjjRl6GIEV4EZATztyOcGm6n3BbHH6QXE4KMPnSmk1EmvGpm=s0)

- Docked toolbar
- Floating toolbar

### Baseline variant

The baseline bottom app bar is no longer recommended. It should be replaced with the docked toolbar, which is very similar and more flexible.

![Baseline bottom app bar, which looks like the docked toolbar, but is not recommended.](https://lh3.googleusercontent.com/tIdFhkPyYLLkFb4gUvrKPLzfIPcmAx4al6ORcGUGmS8oukJMF7ZzittOV7r-Nxwq0V63i9VTRfaVICziXGg4J8hd5TKaoZaDr28KS-7jQkI=s0)

_Bottom app bar (not recommended)_

| Variant          | M3        | M3 Expressive                            |
| ---------------- | --------- | ---------------------------------------- |
| Docked toolbar   | --        | Available                                |
| Floating toolbar | --        | Available                                |
| Bottom app bar   | Available | Not recommended. Use **docked toolbar**. |

> **Note:** Implementation differs per platform. On Jetpack Compose, the floating toolbar is a separate component from the docked toolbar and bottom app bar.

## Configurations

![Color configuration of toolbars.](https://lh3.googleusercontent.com/o4tXTZsCpct2GOpIk9NZcIqwhbbw1CLCMMGKI8rjcbmGoiECpJUHMaKtCGRJ_bL-ngPgBlo5zJAj0wdfLm7PRdk93iZI0BvB08Ull7JZB7SqoQ=s0)

- Standard and vibrant toolbars
- Vertical floating toolbar
- Floating toolbar with FAB

| Category                | Configuration        | M3                          | M3 Expressive |
| ----------------------- | -------------------- | --------------------------- | ------------- |
| Color                   | Standard (default)   | Available as bottom app bar | Available     |
|                         | Vibrant              | --                          | Available     |
| Floating toolbar layout | Horizontal (default) | --                          | Available     |
|                         | Vertical             | --                          | Available     |
| Other elements          | With FAB             | Available as bottom app bar | Available\*   |

> **Note:** \*Implementation differs per platform. On Jetpack Compose, floating toolbar with FAB is [fully supported](<https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#HorizontalFloatingToolbar(kotlin.Boolean,androidx.compose.ui.Modifier,androidx.compose.material3.FloatingToolbarColors,androidx.compose.foundation.layout.PaddingValues,androidx.compose.material3.FloatingToolbarScrollBehavior,androidx.compose.ui.graphics.Shape,kotlin.Function1,kotlin.Function1,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp,kotlin.Function1)>). On other platforms, each component needs to be added separately.

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Jump to baseline bottom app bar specs](#bottom-app-bar-baseline)

---

### Toolbar - Color - Standard

**Enabled**

| Token                                                      | Value       |
| ---------------------------------------------------------- | ----------- |
| `md.comp.toolbar.standard.container.color`                 | #F3EDF7     |
| `md.comp.toolbar.standard.button.container.color`          | #F3EDF7     |
| `md.comp.toolbar.standard.selected.button.container.color` | #E8DEF8     |
| `md.comp.toolbar.standard.icon.color`                      | #49454F     |
| `md.comp.toolbar.standard.selected.icon.color`             | #4A4458     |
| `md.comp.toolbar.standard.label-text.color`                | #49454F     |
| `md.comp.toolbar.standard.selected.label-text.color`       | #4A4458     |
| `md.comp.toolbar.standard.container.shape`                 | Shape token |

**Disabled**

| Token                                                  | Value   |
| ------------------------------------------------------ | ------- |
| `md.comp.toolbar.standard.disabled.icon.color`         | #1D1B20 |
| `md.comp.toolbar.standard.disabled.icon.opacity`       | 0.38    |
| `md.comp.toolbar.standard.disabled.label-text.color`   | #1D1B20 |
| `md.comp.toolbar.standard.disabled.label-text.opacity` | 0.38    |

**Hovered**

| Token                                                         | Value   |
| ------------------------------------------------------------- | ------- |
| `md.comp.toolbar.standard.hovered.state-layer.color`          | #49454F |
| `md.comp.toolbar.standard.selected.hovered.state-layer.color` | #4A4458 |
| `md.comp.toolbar.standard.hovered.state-layer.opacity`        | 0.08    |
| `md.comp.toolbar.standard.hovered.icon.color`                 | #49454F |
| `md.comp.toolbar.standard.selected.hovered.icon.color`        | #4A4458 |
| `md.comp.toolbar.standard.hovered.label-text.color`           | #49454F |
| `md.comp.toolbar.standard.selected.hovered.label-text.color`  | #4A4458 |

**Focused**

| Token                                                         | Value   |
| ------------------------------------------------------------- | ------- |
| `md.comp.toolbar.standard.focused.state-layer.color`          | #49454F |
| `md.comp.toolbar.standard.selected.focused.state-layer.color` | #4A4458 |
| `md.comp.toolbar.standard.focused.state-layer.opacity`        | 0.1     |
| `md.comp.toolbar.standard.focused.icon.color`                 | #49454F |
| `md.comp.toolbar.standard.selected.focused.icon.color`        | #4A4458 |
| `md.comp.toolbar.standard.focused.label-text.color`           | #49454F |
| `md.comp.toolbar.standard.selected.focused.label-text.color`  | #4A4458 |

**Pressed**

| Token                                                         | Value   |
| ------------------------------------------------------------- | ------- |
| `md.comp.toolbar.standard.pressed.state-layer.color`          | #49454F |
| `md.comp.toolbar.standard.selected.pressed.state-layer.color` | #4A4458 |
| `md.comp.toolbar.standard.pressed.state-layer.opacity`        | 0.1     |
| `md.comp.toolbar.standard.pressed.icon.color`                 | #49454F |
| `md.comp.toolbar.standard.selected.pressed.icon.color`        | #4A4458 |
| `md.comp.toolbar.standard.pressed.label-text.color`           | #49454F |
| `md.comp.toolbar.standard.selected.pressed.label-text.color`  | #4A4458 |

---

### Toolbar - Color - Vibrant

**Enabled**

| Token                                                     | Value       |
| --------------------------------------------------------- | ----------- |
| `md.comp.toolbar.vibrant.container.color`                 | #EADDFF     |
| `md.comp.toolbar.vibrant.button.container.color`          | #EADDFF     |
| `md.comp.toolbar.vibrant.selected.button.container.color` | #F3EDF7     |
| `md.comp.toolbar.vibrant.icon.color`                      | #4F378B     |
| `md.comp.toolbar.vibrant.selected.icon.color`             | #1D1B20     |
| `md.comp.toolbar.vibrant.label-text.color`                | #4F378B     |
| `md.comp.toolbar.vibrant.selected.label-text.color`       | #1D1B20     |
| `md.comp.toolbar.vibrant.container.shape`                 | Shape token |

**Disabled**

| Token                                                 | Value   |
| ----------------------------------------------------- | ------- |
| `md.comp.toolbar.vibrant.disabled.icon.color`         | #1D1B20 |
| `md.comp.toolbar.vibrant.disabled.icon.opacity`       | 0.38    |
| `md.comp.toolbar.vibrant.disabled.label-text.color`   | #1D1B20 |
| `md.comp.toolbar.vibrant.disabled.label-text.opacity` | 0.38    |

**Hovered**

| Token                                                        | Value   |
| ------------------------------------------------------------ | ------- |
| `md.comp.toolbar.vibrant.hovered.state-layer.color`          | #4F378B |
| `md.comp.toolbar.vibrant.selected.hovered.state-layer.color` | #1D1B20 |
| `md.comp.toolbar.vibrant.hovered.state-layer.opacity`        | 0.08    |
| `md.comp.toolbar.vibrant.hovered.icon.color`                 | #4F378B |
| `md.comp.toolbar.vibrant.selected.hovered.icon.color`        | #1D1B20 |
| `md.comp.toolbar.vibrant.hovered.label-text.color`           | #4F378B |
| `md.comp.toolbar.vibrant.selected.hovered.label-text.color`  | #1D1B20 |

**Focused**

| Token                                                        | Value   |
| ------------------------------------------------------------ | ------- |
| `md.comp.toolbar.vibrant.focused.state-layer.color`          | #4F378B |
| `md.comp.toolbar.vibrant.selected.focused.state-layer.color` | #1D1B20 |
| `md.comp.toolbar.vibrant.focused.state-layer.opacity`        | 0.1     |
| `md.comp.toolbar.vibrant.focused.icon.color`                 | #4F378B |
| `md.comp.toolbar.vibrant.selected.focused.icon.color`        | #1D1B20 |
| `md.comp.toolbar.vibrant.focused.label-text.color`           | #4F378B |
| `md.comp.toolbar.vibrant.selected.focused.label-text.color`  | #1D1B20 |

**Pressed**

| Token                                                        | Value   |
| ------------------------------------------------------------ | ------- |
| `md.comp.toolbar.vibrant.pressed.state-layer.color`          | #4F378B |
| `md.comp.toolbar.vibrant.selected.pressed.state-layer.color` | #1D1B20 |
| `md.comp.toolbar.vibrant.pressed.state-layer.opacity`        | 0.1     |
| `md.comp.toolbar.vibrant.pressed.icon.color`                 | #4F378B |
| `md.comp.toolbar.vibrant.selected.pressed.icon.color`        | #1D1B20 |
| `md.comp.toolbar.vibrant.pressed.label-text.color`           | #4F378B |
| `md.comp.toolbar.vibrant.selected.pressed.label-text.color`  | #1D1B20 |

---

### Toolbar - Docked

**Color**

| Token                                    | Value                |
| ---------------------------------------- | -------------------- |
| `md.comp.toolbar.docked.container.color` | #F3EDF7 (deprecated) |

**Size**

| Token                                             | Value |
| ------------------------------------------------- | ----- |
| `md.comp.toolbar.docked.container.height`         | 64dp  |
| `md.comp.toolbar.docked.container.leading-space`  | 16dp  |
| `md.comp.toolbar.docked.container.trailing-space` | 16dp  |
| `md.comp.toolbar.docked.container.max-spacing`    | 32dp  |
| `md.comp.toolbar.docked.container.min-spacing`    | 4dp   |

**Shape**

| Token                                    | Value       |
| ---------------------------------------- | ----------- |
| `md.comp.toolbar.docked.container.shape` | Shape token |

---

### Toolbar - Floating

**Color**

| Token                                                              | Value                |
| ------------------------------------------------------------------ | -------------------- |
| `md.comp.toolbar.floating.standard.container.color`                | #F3EDF7 (deprecated) |
| `md.comp.toolbar.floating.vibrant.container.color`                 | #EADDFF (deprecated) |
| `md.comp.toolbar.floating.vibrant.button.unselected.icon.color`    | #4F378B (deprecated) |
| `md.comp.toolbar.floating.vibrant.button.unselected.text.color`    | #4F378B (deprecated) |
| `md.comp.toolbar.floating.vibrant.button.selected.icon.color`      | #1D1B20 (deprecated) |
| `md.comp.toolbar.floating.vibrant.button.selected.text.color`      | #1D1B20 (deprecated) |
| `md.comp.toolbar.floating.vibrant.button.selected.container.color` | #F3EDF7 (deprecated) |

**Size**

| Token                                                          | Value             |
| -------------------------------------------------------------- | ----------------- |
| `md.comp.toolbar.floating.container.height`                    | 64dp (deprecated) |
| `md.comp.toolbar.floating.horizontal.container.height`         | 64dp              |
| `md.comp.toolbar.floating.vertical.container.width`            | 64dp              |
| `md.comp.toolbar.floating.container.leading-space`             | 8dp               |
| `md.comp.toolbar.floating.container.trailing-space`            | 8dp               |
| `md.comp.toolbar.floating.container.external-padding`          | 16dp (deprecated) |
| `md.comp.toolbar.floating.horizontal.container.external-space` | 16dp              |
| `md.comp.toolbar.floating.vertical.container.external-space`   | 24dp              |
| `md.comp.toolbar.floating.container.between-space`             | 4dp               |

**Shape**

| Token                                      | Value       |
| ------------------------------------------ | ----------- |
| `md.comp.toolbar.floating.container.shape` | Shape token |

**Elevation**

| Token                                          | Value           |
| ---------------------------------------------- | --------------- |
| `md.comp.toolbar.floating.container.elevation` | Elevation token |

---

### Toolbar - Floating - FAB

**Base**

| Token                                                   | Value   |
| ------------------------------------------------------- | ------- |
| `md.comp.toolbar.floating.fab.between-space`            | 8dp     |
| `md.comp.toolbar.floating.fab.standard.container.color` | #E8DEF8 |
| `md.comp.toolbar.floating.fab.standard.icon.color`      | #4A4458 |
| `md.comp.toolbar.floating.fab.vibrant.container.color`  | #FFD8E4 |
| `md.comp.toolbar.floating.fab.vibrant.icon.color`       | #633B48 |

**Expanded**

| Token                                              | Value           |
| -------------------------------------------------- | --------------- |
| `md.comp.toolbar.floating.fab.container.height`    | 56dp            |
| `md.comp.toolbar.floating.fab.container.width`     | 56dp            |
| `md.comp.toolbar.floating.fab.icon.size`           | 24dp            |
| `md.comp.toolbar.floating.fab.container.shape`     | Shape token     |
| `md.comp.toolbar.floating.fab.container.elevation` | Elevation token |

**Collapsed (Medium)**

| Token                                                     | Value           |
| --------------------------------------------------------- | --------------- |
| `md.comp.toolbar.floating.fab.medium.container.height`    | 80dp            |
| `md.comp.toolbar.floating.fab.medium.container.width`     | 80dp            |
| `md.comp.toolbar.floating.fab.medium.icon.size`           | 28dp            |
| `md.comp.toolbar.floating.fab.medium.container.shape`     | Shape token     |
| `md.comp.toolbar.floating.fab.medium.container.elevation` | Elevation token |

---

## Anatomy

![2 elements of a toolbar.](https://lh3.googleusercontent.com/q5KTYC5SjXAnSvSVvP72h2InKksCupfh4xqfQsa8eqO3ImcNxSiNEvyVzwrM54a_bgMyYUG2oOrljsquGFjeuEhoQ-lfYIhLhcYRjTURpOs0mQ=s0)

1. Container
2. Placed components

### Flexibility & slots

When configuring a toolbar, think of it as a container with several slots.

Each slot can be a different element. The most common elements are icon buttons, buttons, and text fields.

![A toolbar with 5 slots, conceptual spaces for UI elements, next to each other.](https://lh3.googleusercontent.com/U8tAffspM1NK0nWpYaxRxJHvPJOXWBX8GEuuEMeW6b-RjRo7OKtlMaYohHO-8Rn9QzwodfT_aJgLSocPQnHQDqhiMpfonWKsTd8XBUj-kKs=s0)

_A toolbar is essentially a container with configurable slots_

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Standard

![4 color roles in the standard color scheme of the floating toolbar in light and dark scheme.](https://lh3.googleusercontent.com/vnb-hvZkhHov6Q_xpnqsRpE-v1-ahJAuOOAS49Uw7K1JgYNot331UJ_viioRQnCmG5c_kqdBCgTXYkFkIfdYmd2lUUnIiqJes4VaQa_i30dvYg=s0)

Standard color schemes and icon button types:

- Surface container
- Filled button (Primary, On primary)
- Toggle tonal button (Secondary container, On secondary container)
- Standard button (Primary)

### Vibrant

![4 color roles in the vibrant color scheme of the floating toolbar in light and dark scheme.](https://lh3.googleusercontent.com/MSHjbfagavP64_aZ8he_iw3phiUh6IkZDUjRhPkoMvHcSGsAh-0j3khoUTMDeaPdCVcRwhCp9XyMVOQuvKVvIDxcYcqgTe1tZ5YBzAxchYzx=s0)

Vibrant color scheme and icon button types:

- Primary container
- Filled button (Primary, On primary)
- Toggle tonal button: (Surface container, On surface)
- Standard button (On primary container)

## Measurements

By default all toolbars are 64dp high, center-aligned, have equal padding between items, and have a minimum outside padding of 16dp.

### Docked toolbar

![Default internal padding of a docked toolbar.](https://lh3.googleusercontent.com/Eovie9hEPA5n7suVT8sw4C5TaWOwLmXIl0J3WBMBVOcBFDGyGqhwTTePHEyqXbPNsWb4kH1PH0QZ0llhRfnV9iozSM-bZFjevV4HNZio2qCD=s0)

- Default margins and padding
- Margins and padding with leading, middle, and trailing content

![2 docked toolbars with different margins and alignment.](https://lh3.googleusercontent.com/Vsgw_yvIWA9pxAKEs4qmxtfhofUIoJnSXq6bO3_6v_OmMq4BZhQnS5FaT70GZEHJOzMm7DPuYd-ZUVsVtbJ1WuLqVCQ9khS6P6J8EMzlyOo=s0)

Alignment and padding can be configured to create unique layouts:

- Left and right alignment
- Center-aligned, 8dp padding between items

### Floating toolbar

![Diagram noting margin around edge of floating toolbar.](https://lh3.googleusercontent.com/BmOWzjQZ3a-oyRtJT94Nez52vT0DHXNgDWueCiIVnteA35K89UKvwAP_gs8fdqn450QEN9oEnw_yWK0oIKbqEZ9xhqope0Jt4C0lM83X4pc3ng=s0)

_Default padding of floating toolbar_

![Diagram noting layout measurements.](https://lh3.googleusercontent.com/OStcy-GlT-NRB63inDLnhvNm3czBqigQcIhixAV3N7fMvikSrBtiJtNJc_r0m8yP6nyxDkzhLQnsxBdp_FG6qDARNyB0S52U-CDXNkkG89E=s0)

_Floating toolbar size and padding measurements_

![Diagram noting layout margins.](https://lh3.googleusercontent.com/l1zIH0wA5J3kRRwuwvmIpG4gmlFXXYK88L4lF0q5vQ0_ThjPiPwpPJk0mOT8zbMyO20rMum-TPkHfY651sPtrWzVPiiVl7MXQxtWq3IthryT=s0)

_Floating toolbar margins_

---

## Bottom app bar (baseline)

![Diagram of bottom app bar indicating the container.](https://lh3.googleusercontent.com/XW6h1Afu7o0EPJEU5KC5OEODx1r67sQMqU9pUmqzyOAPy1b_y8-pMDrw-GqoWeSbEXhBR7cA_qDpTDdG8qwlAYoSH0Vc9jh5lviGtvZ76pekyw=s0)

- Container

### Tokens & specs

Bottom app bar tokens are in one token set.

<!-- Bottom app bar token widget was empty on extraction - tokens not rendered by the M3 site -->

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![Diagram of bottom app bar indicating its color mappings.](https://lh3.googleusercontent.com/RDMrnLfQpoptezvVbHosgCQV_qq-MEVY3hKWH4U1fo8wYZLg0Zv4Z1jqiQT1FxojqUYoCEZ8lekjZ3SYJe3-vuO50wNCzsNx7lBpp6iWgqN0rQ=s0)

Bottom app bar color role used for light and dark themes:

- Surface container

### Measurements

![Diagram showing layout values and paddings for bottom app bar.](https://lh3.googleusercontent.com/42HaRTtyV44uEgw2rZzgGwWNqlOy1g0mCiaUjMy7iuiG2lAJ4ACu5xe9PEJgOfE2PFIJ_8TjIRqrk75Wc2YmtrtcrYklJzE3nSV8HbBbW7Y=s0)

_Bottom app bar padding and size measurements_

### Common layouts

![Side by side view of bottom app bars in different configurations.](https://lh3.googleusercontent.com/JvPTixMCyejczwwssuEezKtZO-2y_RmCjTIrMEpHFu5HOAApXlYpEt-Pq3GV4Bd1LJQlgRd4O3PPpK7YpOkaQMUvEo3Sg2E1I8iLh56BNKvC=s0)

- Icon buttons and FAB
- Icon buttons and no FAB
