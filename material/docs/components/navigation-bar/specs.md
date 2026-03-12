---
url: https://m3.material.io/components/navigation-bar/specs
lastmod: 2026-01-26
crawled_at: 2026-03-09T16:15:00.000Z
category: components
section: navigation-bar
page_type: specs
status: complete
---

# Navigation bar

Navigation bars let people switch between UI views on smaller devices

## Variants

![The recommended flexible navigation bar.](https://lh3.googleusercontent.com/UvjUYsyF9gAgVOmfiC9h3zFaS-jU0wYws-HjqFyeiABhm3ubP8ZtHn__4wPEPmw3eR3D4C4O6sUeHVmdJ_IX9zTrzi1GmuiTUcQlauA2Fs-B=s0)

_Flexible navigation bar_

### Baseline variants

The baseline nav bar is no longer recommended, and should be replaced by the flexible nav bar, which is shorter and supports horizontal navigation items in medium windows. [View baseline nav bar specs](#baseline-navigation-bar)

![1 baseline navigation bar.](https://lh3.googleusercontent.com/PmEPtOw84s8SQu9KJJ0EX-gTgEL5PDGneaQfz9OVdFSXWjLd7P41B6qpIiWnAOuSfGl7JnCQOqa3Lfx8hZfXRG7HzJJNam-HCDFV1lfKvLlw=s0)

_Navigation bar (not recommended)_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Flexible navigation bar | -- | Available |
| Navigation bar | Available | Not recommended. Use **flexible navigation bar**. |

## Configurations

In compact windows, navigation bars use vertical items. In medium windows, navigation bars should use horizontal items.

![Two size configurations for navigation bar and items.](https://lh3.googleusercontent.com/p7YCl5pH99g_eM4-BCFHmEgxIdJxmb5UuE-CUwR8M9OjjPkNJpYAwQPZTAxamQBoiRr25F23T4mxDVNRUG3kESL--vZihbUkQWN04W9DAFiH=s0)

_Vertical navigation items / Horizontal navigation items_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Navigation item layout | Vertical (default) | Available | Available |
|  | Horizontal | -- | Available |

## Tokens & specs

Use the table's menu to switch between token sets for the navigation bar and the nav items. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### Nav bar - Common

#### Color / Enabled

| Token | Token name | Value |
| --- | --- | --- |
| Nav bar container elevation | md.comp.nav-bar.container.elevation | |
| Nav bar container shadow color | md.comp.nav-bar.container.shadow-color | #000000 |
| Nav bar container color | md.comp.nav-bar.container.color | #F3EDF7 |
| Nav bar item indicator color | md.comp.nav-bar.item.active.indicator.color | #E8DEF8 |
| Nav bar item active label text color | md.comp.nav-bar.item.active.label-text.color | #625B71 |
| Nav bar item inactive label text color | md.comp.nav-bar.item.inactive.label-text.color | #49454F |
| Nav bar item active icon color | md.comp.nav-bar.item.active.icon.color | #4A4458 |
| Nav bar item inactive icon color | md.comp.nav-bar.item.inactive.icon.color | #49454F |

#### Color / Hovered

| Token | Token name | Value |
| --- | --- | --- |
| Nav bar item active hovered state layer color | md.comp.nav-bar.item.active.hovered.state-layer.color | #4A4458 |
| Nav bar item active hovered state layer opacity | md.comp.nav-bar.item.active.hovered.state-layer.opacity | 0.08 |
| Nav bar item inactive hovered state layer color | md.comp.nav-bar.item.inactive.hovered.state-layer.color | #4A4458 |

#### Color / Focused

| Token | Token name | Value |
| --- | --- | --- |
| Nav bar item active focused state layer color | md.comp.nav-bar.item.active.focused.state-layer.color | #4A4458 |
| Nav bar item active focused state layer opacity | md.comp.nav-bar.item.active.focused.state-layer.opacity | 0.1 |
| Nav bar item inactive focused state layer color | md.comp.nav-bar.item.inactive.focused.state-layer.color | #4A4458 |

#### Color / Pressed

| Token | Token name | Value |
| --- | --- | --- |
| Nav bar item active pressed state layer color | md.comp.nav-bar.item.active.pressed.state-layer.color | #4A4458 |
| Nav bar item active pressed state layer opacity | md.comp.nav-bar.item.active.pressed.state-layer.opacity | 0.1 |
| Nav bar item inactive pressed state layer color | md.comp.nav-bar.item.inactive.pressed.state-layer.color | #4A4458 |

#### Nav item

| Token | Token name | Value |
| --- | --- | --- |
| Nav bar space between items | md.comp.nav-bar.item.between-space | 0 |
| Nav bar item shape | md.comp.nav-bar.item.active-indicator.shape | <!-- shape token --> |
| Nav bar item space between icon label space | md.comp.nav-bar.item.active-indicator.icon-label-space | 4dp |
| Nav bar item icon size | md.comp.nav-bar.item.icon.size | 24dp |

#### Container

| Token | Token name | Value |
| --- | --- | --- |
| Nav bar height | md.comp.nav-bar.container.height | 64dp |
| Nav bar shape | md.comp.nav-bar.container.shape | <!-- shape token --> |

---

### Nav bar - Item - Vertical

| Token | Token name | Value |
| --- | --- | --- |
| Nav bar item vertical label text | md.comp.nav-bar.item.vertical.label-text.font | <!-- typography token --> |
| Nav bar item vertical active indicator height | md.comp.nav-bar.item.vertical.active-indicator.height | 32dp |
| Nav bar item vertical active indicator width | md.comp.nav-bar.item.vertical.active-indicator.width | 56dp |
| Nav bar item vertical container between space | md.comp.nav-bar.item.vertical.container.between-space | 6dp |
| Nav bar item vertical active indicator icon label space | md.comp.nav-bar.item.vertical.active-indicator.icon-label-space | 4dp |

---

### Nav bar - Item - Horizontal

| Token | Token name | Value |
| --- | --- | --- |
| Nav bar item horizontal label text | md.comp.nav-bar.item.horizontal.label-text.font | <!-- typography token --> |
| Nav bar item horizontal active indicator height | md.comp.nav-bar.item.horizontal.active-indicator.height | 40dp |
| Nav bar item horizontal active indicator leading space | md.comp.nav-bar.item.horizontal.active-indicator.leading-space | 16dp |
| Nav bar item horizontal active indicator trailing space | md.comp.nav-bar.item.horizontal.active-indicator.trailing-space | 16dp |
| Nav bar item horizontal active indicator icon label space | md.comp.nav-bar.item.horizontal.active-indicator.icon-label-space | 4dp |

## Anatomy

![Seven elements of the navigation bar.](https://lh3.googleusercontent.com/NkOIeqvJB7WxPg28DI-4uEHBrBfN38qDD2CWuX-NM2tTrxYwRknjdhOMzMCD1D9d65WN-Lzfo1Zg_B3G8Zk7pjT7Os-D2EfYGXQPDxawqpA=s0)

- Container
- Icon
- Label text
- Active indicator
- Small badge (optional)
- Large badge (optional)
- Large badge label

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![Six color roles of the navigation bar.](https://lh3.googleusercontent.com/ec6ZkQGVtf5t0AOua9lhgucAZ31inD_mF4vm24sW2MeH8X2dK3xV1rpfoNuX6hlO5rU7wJVfCH0KMCt8Xqzl0qDIR668oCFEKb97YswmeuuC=s0)

_Navigation bar color roles used for light and dark schemes:_

- Surface container
- On-secondary container
- Secondary
- Secondary container
- On-surface variant
- On-surface variant

For badge color roles, go to [badge specs](https://m3.material.io/m3/pages/badges/specs).

## States

States are visual representations used to communicate the status of a component or an interactive element.

![Four states of the navigation bar items.](https://lh3.googleusercontent.com/FTJk0MWbkT2YuqVJl3k8F57gmzTtSUKbQCovcet18WLLqbCMFFYds_DS65Sx8fzuFpEK6G_W5lmDc55s5ZUEpvBZIGM31aOI1psEFpn7GWnk=s0)

- Enabled
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)

## Measurements

The navigation bar stretches the full window width.

![Navigation bar padding and size measurements.](https://lh3.googleusercontent.com/zjuYI8XOBcjHmnNU2V9qHk9gbz3xJW9E2cEVE0Ov9Bh2fz8VI7RoISP5ykh9u5mqCXhF1nYKXT696Hfw-YIUMzX37jseGZdsA2bN_-YfErA=s0)

_Navigation bar padding and size measurements_

Vertical navigation items dynamically change width to equally fit the container. Horizontal navigation items have a fixed width, so extra space is added to the ends of the navigation bar instead.

![Navigation bar and item widths.](https://lh3.googleusercontent.com/VMRrzRH_T07zMqRPwp1sLZPmkAVJVwQDqqrhuD-synkhADa-mjbbjtbh_tWZ4QZ9ael3lvNq52dhMRNCMOTZRh5aISTWk7bvSEt-vud2RGvW=s0)

_Navigation bar width and margins for compact and medium windows._

- Vertical navigation item
- Margin from window edge
- Horizontal navigation item

---

## Baseline navigation bar

![7 elements of baseline navigation bar.](https://lh3.googleusercontent.com/DBrM1eLC6HN2CNBg9Gr9UjPRuBgV0C7N3JLMzR2Y3nemUs8z0I71LTJM36azNtt45cWQiwISFwjAGc2G8coCUD9vfnIi-30wBlBw7OB1rSk=s0)

- Container
- Icon
- Label text
- Active indicator
- Small badge
- Large badge
- Large badge label

### Tokens & specs

These tokens are for the baseline navigation bar.

_Note: The baseline token widget displays tokens in a "Default, Standard, Light" configuration without a dropdown selector. The baseline navigation bar is no longer recommended in favor of the flexible navigation bar._

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![6 color roles of baseline navigation bar.](https://lh3.googleusercontent.com/iFtbyGfchUzulQmxsrcS-I7WwK9b3AywZsdXqs8Z1jIytViyh4uD1UC9qpNKi44ejAswfg-jDNjzVCkq8diuRU4130swhkqbtGDL508M2zU=s0)

_Navigation bar color roles used for light and dark schemes:_

- Surface
- On secondary container
- On surface
- Secondary container
- On surface variant
- On surface variant

For badge color roles, go to [badge specs](https://m3.material.io/m3/pages/badges/specs).

### States

States are visual representations used to communicate the status of a component or an interactive element.

![4 states of baseline navigation bar.](https://lh3.googleusercontent.com/Tz8X4rigXztIPIhpYB584wZpWuKYAEz4C4mIBNVQksaN4sRvl_eXy8dk9cwcWhM3iOfOJVLvlckzcDdPOScuGYJVhjvzuSAMRwpvZk2mdNOpTw=s0)

_Navigation bar states:_

- Enabled
- Hovered
- Focused
- Pressed

## Measurements

![Baseline navigation bar padding and size measurements.](https://lh3.googleusercontent.com/yZAR82Wh75nazTTTOrRenBXPtuOb1BG45198tsOGQMOTUk0QS_Ety_wa_9wsQRVXkBVii9TYrwCmSAiwxxlvHY95EetWd78rd4DPR-qTy3X-4Q=s0)

_Navigation bar padding and size measurements_

![Baseline navigation bar target size and margins.](https://lh3.googleusercontent.com/Cx_HLEfaqKx72AHNtDdP7raUEXmHCDKOWC40CCuYLkfYn6d93KRaJHBWdxVHOkoU22j4UAJJExrl3uQYnpFQ_wu895nHHKn8qNUXZVMtCwqT=s0)

_Navigation bar target size and margins_

## Configurations

![3 configurations of the baseline navigation bar.](https://lh3.googleusercontent.com/ALYNjmr0KKRFb33P4hKrUxeXha7V6L7eyz_izrbW4nGMgFfZtYjbLa7cHF3mxpWOr4TiAswFklndquusmv_dRJsruNjzu4ZSh7WgBrOCWDQ=s0)

- 3 destinations
- 4 destinations
- 5 destinations
