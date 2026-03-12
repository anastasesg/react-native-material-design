---
url: https://m3.material.io/components/checkbox/specs
lastmod: 2025-12-01
crawled_at: 2026-02-03T12:00:00.000Z
category: components
section: checkbox
page_type: specs
status: complete
---

# Checkbox Specs

Checkboxes let users select one or more items from a list, or turn an item on or off.

## Tokens & specs

Select a component type below to see its elements, attributes, tokens, and their values.

### Enabled / Container

| Token | Value |
| --- | --- |
| Checkbox container width (deprecated) | 18dp |
| Checkbox container height (deprecated) | 18dp |
| Checkbox container size | 18dp |
| Checkbox container shape | md.sys.shape.corner.extra-small (2dp) |
| Checkbox unselected outline color | #49454F (on-surface-variant) |
| Checkbox unselected outline width | 2dp |
| Checkbox selected container color | #6750A4 (primary) |
| Checkbox selected outline width | 0 |
| Checkbox unselected error outline color | #B3261E (error) |
| Checkbox selected error container color | #B3261E (error) |

### Enabled / Icon

| Token | Value |
| --- | --- |
| Checkbox icon size | 18dp |
| Checkbox selected icon color | #FFFFFF (on-primary) |
| Checkbox selected error icon color | #FFFFFF (on-error) |
| Checkbox unselected icon color (deprecated) | #1D1B20 (on-surface) |

### Enabled / State layer

| Token | Value |
| --- | --- |
| Checkbox state layer size | 40dp |
| Checkbox state layer shape | md.sys.shape.corner.full |

### Disabled / Container

| Token | Value |
| --- | --- |
| Checkbox unselected disabled outline color | #1D1B20 (on-surface) |
| Checkbox unselected disabled outline width | 2dp |
| Checkbox unselected disabled container opacity | 0.38 |
| Checkbox selected disabled container color | #1D1B20 (on-surface) |
| Checkbox selected disabled container opacity | 0.38 |
| Checkbox selected disabled container outline width | 0 |

### Disabled / Icon

| Token | Value |
| --- | --- |
| Checkbox selected disabled icon color | #FEF7FF (surface) |
| Checkbox disabled selected icon color (deprecated) | #6750A4 |
| Checkbox disabled selected icon opacity (deprecated) | 0.38 |
| Checkbox disabled unselected icon color (deprecated) | #6750A4 |
| Checkbox disabled unselected icon opacity (deprecated) | 0.38 |

### Hovered / Container

| Token | Value |
| --- | --- |
| Checkbox unselected hover outline color | #1D1B20 (on-surface) |
| Checkbox unselected hover outline width | 2dp |
| Checkbox selected hover container color | #6750A4 (primary) |
| Checkbox selected hover outline width | 0 |
| Checkbox unselected error hover outline color | #B3261E (error) |
| Checkbox unselected error hover outline width (deprecated) | 2dp |
| Checkbox selected error hover container color | #B3261E (error) |
| Checkbox selected error hover outline width (deprecated) | 0 |

### Hovered / State layer

| Token | Value |
| --- | --- |
| Checkbox selected hover state layer color | #6750A4 (primary) |
| Checkbox selected hover state layer opacity | 0.08 |
| Checkbox unselected hover state layer color | #1D1B20 (on-surface) |
| Checkbox unselected hover state layer opacity | 0.08 |
| Checkbox error hover state layer color | #B3261E (error) |
| Checkbox error hover state layer opacity | 0.08 |

### Hovered / Icon

| Token | Value |
| --- | --- |
| Checkbox selected hover icon color | #FFFFFF (on-primary) |
| Checkbox selected error hover icon color | #FFFFFF (on-error) |
| Checkbox unselected hover icon color (deprecated) | #1D1B20 |

### Focused / Focus indicator

| Token | Value |
| --- | --- |
| Checkbox focus indicator color | #625B71 (secondary) |
| Checkbox focus indicator thickness | 3dp |
| Checkbox focus indicator offset | 2dp |

### Focused / Container

| Token | Value |
| --- | --- |
| Checkbox unselected focus outline color | #1D1B20 (on-surface) |
| Checkbox unselected focus outline width | 2dp |
| Checkbox selected focus container color | #6750A4 (primary) |
| Checkbox selected focus outline width | 0 |
| Checkbox unselected error focus outline color | #B3261E (error) |
| Checkbox unselected error focus outline width (deprecated) | 2dp |
| Checkbox selected error focus container color | #B3261E (error) |
| Checkbox selected error focus outline width (deprecated) | 0 |

### Focused / State layer

| Token | Value |
| --- | --- |
| Checkbox error focus state layer opacity | 0.1 |
| Checkbox selected focus state layer color | #6750A4 (primary) |
| Checkbox selected focus state layer opacity | 0.1 |
| Checkbox unselected focus state layer color | #1D1B20 (on-surface) |
| Checkbox unselected focus state layer opacity | 0.1 |
| Checkbox error focus state layer color | #B3261E (error) |

### Focused / Icon

| Token | Value |
| --- | --- |
| Checkbox selected focus icon color | #FFFFFF (on-primary) |
| Checkbox selected error focus icon color | #FFFFFF (on-error) |
| Checkbox unselected focus icon color (deprecated) | #1D1B20 |

### Pressed (ripple) / Container

| Token | Value |
| --- | --- |
| Checkbox unselected pressed outline color | #1D1B20 (on-surface) |
| Checkbox unselected pressed outline width | 2dp |
| Checkbox selected pressed container color | #6750A4 (primary) |
| Checkbox selected pressed outline width | 0 |
| Checkbox unselected error pressed outline color | #B3261E (error) |
| Checkbox unselected error pressed outline width (deprecated) | 2dp |
| Checkbox selected error pressed container color | #B3261E (error) |
| Checkbox selected error pressed outline width (deprecated) | 0 |

### Pressed (ripple) / State layer

| Token | Value |
| --- | --- |
| Checkbox unselected pressed state layer color | #6750A4 (primary) |
| Checkbox unselected pressed state layer opacity | 0.1 |
| Checkbox selected pressed state layer color | #1D1B20 (on-surface) |
| Checkbox selected pressed state layer opacity | 0.1 |
| Checkbox error pressed state layer color | #B3261E (error) |
| Checkbox error pressed state layer opacity | 0.1 |

### Pressed (ripple) / Icon

| Token | Value |
| --- | --- |
| Checkbox selected pressed icon color | #FFFFFF (on-primary) |
| Checkbox selected error pressed icon color | #FFFFFF (on-error) |
| Checkbox unselected pressed icon color (deprecated) | #1D1B20 |

## Anatomy

![Diagram of checkbox indicating the 2 parts of its anatomy.](https://lh3.googleusercontent.com/o7Jd5nbugG-76fMDJwv-WD-ardrEfZF5Nxfq_8Pikz0V6pnzJXvDA6C4NPzOpZ3z39Rjb6tb1yxxQs8GBhn0L11_ozezB4FsTlSHGIQrRFcz=s0)

1. Container
2. Icon

## Color

Color values are implemented through [design tokens](https://m3.material.io/foundations/design-tokens/overview). For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

![Checkbox color roles in light and dark themes.](https://lh3.googleusercontent.com/tRScc_0bS1gM7jai2Ojj3qDzyhE696wedzZNPry2Pson8ONvZ_S_IoRUO6RwZBC5-YQUmgqLKG0xWldIJ5y_DT6lfRcty3F0JPY7pJvbqkZG=s0)

1. Checkbox
2. State-layer
3. Icon

### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

![Checkboxes with text labels. The text color is the same for checked and unchecked checkboxes.](https://lh3.googleusercontent.com/712ygEoSMR9tGvygN9LKJ8DZ7BhOWkzxv1y86AilaXmqdTa30fz5WP68koUEZThkz30akxDDI3CUbIxJh6PeEKIj2HK48__RTspIhYMIFFeX=s0)

_The text color remains the same regardless if the checkbox is selected or not_

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/foundations/interaction/states/overview)

![Side by side view of states in light and dark themes.](https://lh3.googleusercontent.com/Yor59BqmDg2qk4vgXtDVI9FzkAcqUFQZ4EjWrwLc_rYafcVTgirLkf-bt1t7JbvpRyPYQYvrP8ZM_ZgYUA17VWtk1h9UJcckiG_W0NPLDled=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

## Measurements

![Diagram of a selected checkbox with a container width and height of 18dp and a state-layer width and height of 40dp.](https://lh3.googleusercontent.com/CcUqIZiHlrkBXYmqL54pCjCjsNpVnHsMf6QdUXITGzV89PkHrNbV84_w9I5ZgcNPlMFcCVbTxYhZzVbMESebqg2wWiSlqbYaRNstFOLT5P-s=s0)

| Attribute | Value |
| --- | --- |
| Container size | 18dp |
| Container corner shape | 2dp |
| Icon size | 18dp |
| Icon alignment | Center-aligned |
| Target size | 48dp |
| State-layer size | 40dp |
