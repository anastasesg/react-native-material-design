---
url: https://m3.material.io/components/button-groups/specs
lastmod: 2025-11-10
crawled_at: 2026-02-24T14:22:24.000Z
category: components
section: button-groups
page_type: specs
status: complete
---

# Button groups

Button groups organize buttons and add interactions between them.

## Variants

![Various colors and shapes of standard and connected button groups.](https://lh3.googleusercontent.com/Zlys4Fta71zY-GAiCcT-oqug62NMk2muBeMcrPxVq_ZyoZhWxZrY5QlyYMHMI8wb6GSstakH8BmszYQQIEMg14U8WI6cX4v1uKZ_jSFIIYJGZA=s0)

_Standard button group, Connected button group_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Standard button group | -- | Available |
| Connected button group | Available as segmented button | Available |

## Configurations

![Five sizes of button groups and two shapes of button groups.](https://lh3.googleusercontent.com/tXvGi5QNHXaEdYS0QIwTTJHGUdhlUv1s8dzEvt3yvdhs0CCvXGe3Y3bBOTJvHKv2VA3DPdHEWmLb9UAY_h5Gls6mTe6ihCadt0qIZbdLS7SY2g=s0)

Configurations for both variants of button groups:

- Extra small
- Small
- Medium
- Large
- Extra large
- Single-select and multi-select
- Round and square

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Size | XS, S, M, L, XL | -- | Available |
| Default shape | Round, square | -- | Available |
| Selection | Single-select, multi-select, selection-required | Available as segmented button | Available |

## Tokens & specs

Standard and connected button group tokens are organized by size. Select the variant and size from the token set menu. Go to the [button](https://m3.material.io/m3/pages/common-buttons/specs/) and [icon button](https://m3.material.io/m3/pages/icon-buttons/specs/) pages to view their tokens. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/).

### Button group standard - Size - Xsmall

| Token | Value |
| --- | --- |
| `md.comp.button-group.standard.xsmall.container.height` | 32dp |
| `md.comp.button-group.standard.xsmall.between-space` | 18dp |

**Pressed**

| Token | Value |
| --- | --- |
| `md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.dampening` | 0.9 |
| `md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.stiffness` | 1400 |
| `md.comp.button-group.standard.xsmall.pressed.item.width.multiplier` | 15% |

### Button group standard - Size - Small

| Token | Value |
| --- | --- |
| `md.comp.button-group.standard.small.container.height` | 40dp |
| `md.comp.button-group.standard.small.between-space` | 12dp |

**Pressed**

| Token | Value |
| --- | --- |
| `md.comp.button-group.standard.small.pressed.item.width.motion.spring.dampening` | 0.9 |
| `md.comp.button-group.standard.small.pressed.item.width.motion.spring.stiffness` | 1400 |
| `md.comp.button-group.standard.small.pressed.item.width.multiplier` | 15% |

### Button group standard - Size - Medium

| Token | Value |
| --- | --- |
| `md.comp.button-group.standard.medium.container.height` | 56dp |
| `md.comp.button-group.standard.medium.between-space` | 8dp |

**Pressed**

| Token | Value |
| --- | --- |
| `md.comp.button-group.standard.medium.pressed.item.width.motion.spring.dampening` | 0.9 |
| `md.comp.button-group.standard.medium.pressed.item.width.motion.spring.stiffness` | 1400 |
| `md.comp.button-group.standard.medium.pressed.item.width.multiplier` | 15% |

### Button group standard - Size - Large

| Token | Value |
| --- | --- |
| `md.comp.button-group.standard.large.container.height` | 96dp |
| `md.comp.button-group.standard.large.between-space` | 8dp |

**Pressed**

| Token | Value |
| --- | --- |
| `md.comp.button-group.standard.large.pressed.item.width.motion.spring.dampening` | 0.9 |
| `md.comp.button-group.standard.large.pressed.item.width.motion.spring.stiffness` | 1400 |
| `md.comp.button-group.standard.large.pressed.item.width.multiplier` | 15% |

### Button group standard - Size - Xlarge

| Token | Value |
| --- | --- |
| `md.comp.button-group.standard.xlarge.container.height` | 136dp |
| `md.comp.button-group.standard.xlarge.between-space` | 8dp |

**Pressed**

| Token | Value |
| --- | --- |
| `md.comp.button-group.standard.xlarge.pressed.item.width.motion.spring.dampening` | 0.9 |
| `md.comp.button-group.standard.xlarge.pressed.item.width.motion.spring.stiffness` | 1400 |
| `md.comp.button-group.standard.xlarge.pressed.item.width.multiplier` | 15% |

---

### Button group connected - Size - Xsmall

| Token | Value |
| --- | --- |
| `md.comp.button-group.connected.xsmall.container.height` | 32dp |
| `md.comp.button-group.connected.xsmall.between-space` | 2dp |
| `md.comp.button-group.connected.xsmall.container.shape` | shape.corner.full |
| `md.comp.button-group.connected.xsmall.inner-corner.corner-size` | 8dp |
| `md.comp.button-group.connected.xsmall.pressed.inner-corner.corner-size` | 4dp |
| `md.comp.button-group.connected.xsmall.selected.inner-corner.corner-size` | 50% |

### Button group connected - Size - Small

| Token | Value |
| --- | --- |
| `md.comp.button-group.connected.small.container.height` | 40dp |
| `md.comp.button-group.connected.small.between-space` | 2dp |
| `md.comp.button-group.connected.small.container.shape` | shape.corner.full |
| `md.comp.button-group.connected.small.inner-corner.corner-size` | 8dp |
| `md.comp.button-group.connected.small.pressed.inner-corner.corner-size` | 4dp |
| `md.comp.button-group.connected.small.selected.inner-corner.corner-size` | 50% |

### Button group connected - Size - Medium

| Token | Value |
| --- | --- |
| `md.comp.button-group.connected.medium.container.height` | 56dp |
| `md.comp.button-group.connected.medium.between-space` | 2dp |
| `md.comp.button-group.connected.medium.container.shape` | shape.corner.full |
| `md.comp.button-group.connected.medium.inner-corner.corner-size` | 8dp |
| `md.comp.button-group.connected.medium.pressed.inner-corner.corner-size` | 4dp |
| `md.comp.button-group.connected.medium.selected.inner-corner.corner-size` | 50% |

### Button group connected - Size - Large

| Token | Value |
| --- | --- |
| `md.comp.button-group.connected.large.container.height` | 96dp |
| `md.comp.button-group.connected.large.between-space` | 2dp |
| `md.comp.button-group.connected.large.container.shape` | shape.corner.full |
| `md.comp.button-group.connected.large.inner-corner.corner-size` | 16dp |
| `md.comp.button-group.connected.large.pressed.inner-corner.corner-size` | 12dp |
| `md.comp.button-group.connected.large.selected.inner-corner.corner-size` | 50% |

### Button group connected - Size - Xlarge

| Token | Value |
| --- | --- |
| `md.comp.button-group.connected.xlarge.container.height` | 136dp |
| `md.comp.button-group.connected.xlarge.between-space` | 2dp |
| `md.comp.button-group.connected.xlarge.container.shape` | shape.corner.full |
| `md.comp.button-group.connected.xlarge.inner-corner.corner-size` | 20dp |
| `md.comp.button-group.connected.xlarge.pressed.inner-corner.corner-size` | 16dp |
| `md.comp.button-group.connected.xlarge.selected.inner-corner.corner-size` | 50% |

## Anatomy

Button groups are invisible containers that add padding between buttons and modify button shape. They don't contain any buttons by default.

![The container outlined on both variants of button groups.](https://lh3.googleusercontent.com/909fUN1vEim33Fg-tzKVqEEl_EQRq_GsNWP9dPCSA181-jk63D2BmlLmh8pisBn2zBlyE581QGQUAggrzVLnD1e2dAv10jtBVs8_BMY5XsItOQ=s0)

_Container_

### Common layouts

Mix and match buttons and icon buttons for different scenarios.

![4 common layouts of button groups.](https://lh3.googleusercontent.com/mB9JxUhRXlbUJhjAnZciD7yqHtJQpwyqJME-B-dTSOz6AQVQbdOHskFsAM7E60jDTOOPx9qjA7YiJt_46pxLrbnr8_wHmIAWBts0Nl1sd0IloA=s0)

_Label buttons, Label buttons and icon buttons, Extra small icon buttons, Large icon buttons_

### Color

Button groups have no color properties. They can use the default button or toggle button color styles, like filled, tonal, and outlined. Avoid using standard icon buttons or text buttons, as they have no container treatment.

![The container outlined on both variants of button groups.](https://lh3.googleusercontent.com/9hbmv_ziBEblvbLNhjPIK994tZijzcHgGhHBn_z-e52FBeulOHrdGeVlk4y0G8YWkUVABgf5EvmfpWPJnsSxad4N_QjZ5bW-x3LJ4xRqO0s=s0)

_Filled, Tonal, Outlined, Elevated_

## Selection & activation

**Standard button groups** add interaction between adjacent buttons when a button is selected or activated. This interaction changes the width, shape, and padding of the selected or activated button, which adjusts the width of buttons directly next to it.

<!-- Video: A selected button in a standard group bounces against its adjacent button, changing their widths. -->

_A selected button changes shape, and briefly changes the width of itself and adjacent buttons_

**Connected button groups** don't add any interaction between buttons when selected or activated. They only affect the shape of the button being selected or activated.

<!-- Video: A selected button in a connected button group only changes its own shape. -->

_A selected button changes shape without affecting adjacent buttons_

## States

### Standard button group

When a button is pressed, standard button groups modify the width and shape of that button and adjacent buttons.

![5 states of a standard button group.](https://lh3.googleusercontent.com/aFlIDRoOBPpH_0juuRNNpzCDwdsk1sTKvaRtESfeqWWahAhThlrR5CwfDfGsxyVl6TstDE2D65kxcCX4I4W1LMxy2Xo72zCHihJFD8-_m5pmBQ=s0)

_Enabled, Disabled, Hovered, Focused, Pressed_

When a toggle button is selected in a standard button group, its shape should change between square and round. The color should change according to the [button specs](https://m3.material.io/m3/pages/common-buttons/specs).

![5 states of a standard button group with toggle buttons.](https://lh3.googleusercontent.com/81FApYiTXho8D7eyhKVzVF5qhIRk02bF6rEp6QoLXRtnuW94g2EoBt1EQLLK7h2vRiKsRbNHUyYa3OCvVQRVW3jGBVlkBqaiNrK6oiVZEIad1w=s0)

_Enabled, Disabled, Hovered, Focused, Pressed_

### Connected button group

Connected button groups have different shape changes than standard button groups. Selecting a button does not affect adjacent buttons.

![5 states of a segmented button group.](https://lh3.googleusercontent.com/zh7Dh6_ChlGUt5mWmhDpY_dTPHFXlFOmdfy2AJEpn013_utxmX5it3VZuG3iyveqk3N3Pj07dV4a2XtWhOkmn4FbvwvuPHUVa0YYRuTa6WJ3vw=s0)

_Connected button group unselected states: Enabled, Disabled, Hovered, Focused, Pressed_

![4 states of a segmented button group with toggle buttons.](https://lh3.googleusercontent.com/N09iT9pfuy2j_ZfeAqJIUzPo31zdiKwWd0P-BH5eVSj3QR3JWxULGnjVnTbavy0VNZX5lhBc9Dyw1NTBThW5rbaOUcJ25kePIXmYaKTB0Ikx=s0)

_Connected button group selected states: Enabled, Hovered, Focused, Pressed_

## Measurements

### Standard button group

Standard groups apply padding between all buttons. The amount of padding changes based on button size to ensure a minimum accessible target size of 48dp. More details on padding: [Button specs](https://m3.material.io/m3/pages/common-buttons/specs), [icon button specs](https://m3.material.io/m3/pages/icon-buttons/specs).

![Standard button group padding measurements.](https://lh3.googleusercontent.com/RGY_WzbLD07B3K6DGITtC-0NcW5LQI1HS1L-g0O4Lt0wttv2BWMZQWR2LqpG39dzWUHBNqCx12noXUfNGg2PKUhJVJcW-ndLNWd0LJ-H8wVW=s0)

Standard button group inner padding:

- XS: 18dp
- S: 12dp
- M: 8dp
- L: 8dp
- XL: 8dp

### Connected button group

For all connected button groups, use 2dp padding. This provides visual consistency at scale.

![Connected button group padding and corner radius measurements.](https://lh3.googleusercontent.com/tyj4mLRYzA86JWOUFPOV0mFMQxD7ckw1kX2zjPh0iOs4KV_jy6SCEtBmeQASzBTE9ULLNl0NY_jT32BX76pcZDRzLsRJ4PQgdvoi0IfOyLs=s0)

Round connected button group inner padding is 2dp at every size. The outer shape is fully round, and the inner shape remains square with the following corner sizes:

- XS: 4dp
- S: 8dp
- M: 8dp
- L: 16dp
- XL: 20dp

![Connected button group padding and corner radius measurements for square buttons.](https://lh3.googleusercontent.com/DiysV2VqS8bJV3jH34XtaPeeGGi2Svo6ZIFJhmjAeYH0zOw7-6P-5qgZeRy2A6CoXA2mgQ0WMXanpp3k0FqLX7ez6AhGTGnztpRBRiqQzND0=s0)

Square connected button group inner padding is 2dp at every size. The outer shape has the following corner sizes:

- XS: 4dp
- S: 8dp
- M: 8dp
- L: 16dp
- XL: 20dp

### Minimum widths

Extra small and small connected button groups have 48dp target areas and a minimum width of 48dp.

![48x48dp accessible target areas on the XS and S connected button groups.](https://lh3.googleusercontent.com/3YpaF7-0WXRLTv6vxHgKCSJBsLTOFIaTw5JZ5795oi7393Y_y8hlC-gNbJh57zwFbM8SJ6VsaQMH9dVZW3E6RTF2ZtysUXJaufAilOko_hZV=s0)

_Extra small, Small_

## Density

Button groups adapt to density of the buttons inside. [More on density](https://m3.material.io/m3/pages/understanding-layout/density/).

![Connected button groups at 0, -1, -2, and -3 density.](https://lh3.googleusercontent.com/yW6GJfPC6vob2O0uaXXiMDGwKXMv7majvHsxv9MEQGBjXCtZg0YERe27DGduNwB1ofpRLw4evKy_CZWsciavxwo6bvOHrDwnL_tjvUGXmB6t=s0)

_Button groups adapt to the height of the buttons inside, including when density is applied_
