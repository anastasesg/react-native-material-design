---
url: https://m3.material.io/components/sliders/specs
lastmod: 2026-01-26
crawled_at: 2026-03-10T00:00:00.000Z
category: components
section: sliders
page_type: specs
status: complete
---

# Sliders

Sliders let users make selections from a range of values.

## Variants

![3 variants of sliders.](https://lh3.googleusercontent.com/-UgZpnEJ6uET5STSdzpCWEydsoa9cfqtNAbzpuKX9-4jQ3d8IdU0EjRtpfgizjIX8I7XM-ETfXPEnfKi7XNZSQWJTTyKrLHjS95bsb6ZQc7smQ=s0)

_Standard, Centered, Range_

| Variant  | M3                               | M3 Expressive                      |
| -------- | -------------------------------- | ---------------------------------- |
| Standard | Available as "continuous" slider | Available                          |
| Centered | Available (web only)             | Available                          |
| Range    | Available                        | Available                          |
| Discrete | Available                        | Available as "stops" configuration |

## Configurations

![Orientation and size configurations of sliders.](https://lh3.googleusercontent.com/PUKZpvA88_wvpKTUHRmGx0XIOjDEUAFWbO14A9AMUDyX-mu0w9qTo7ywQTKCcm8ERhdQHoohHwHt3Z-Tqo29eVw4_KyVf3pn-Z-UIcsszrYc=s0)

_Orientation: Horizontal, vertical; Size: XS, S, M, L, XL_

![Optional anatomy configurations of sliders.](https://lh3.googleusercontent.com/QFc1hXc78XHCuqhH4no1fQLDRvSzLaW1K8El5jIW1v3K3sNXjMquxEGcaq22u48Mq5kCqGRoPSCD7m8H37sAwyP_XyI6xY4AJp2GGW3e7-hs=s0)

_Inset icon, Stops, Value indicator_

| Category        | Configuration        | M3                             | M3 Expressive                                                       |
| --------------- | -------------------- | ------------------------------ | ------------------------------------------------------------------- |
| Inset icon      | No (default)         | Available                      | Available                                                           |
| Inset icon      | Yes                  | --                             | Available                                                           |
| Orientation     | Horizontal (default) | Available                      | Available                                                           |
| Orientation     | Vertical             | --                             | Available                                                           |
| Size            | XS (default)         | Available                      | Available                                                           |
| Size            | S, M, L, XL          | --                             | Available on MDC-Android. Available as tokens on other platforms.\* |
| Stop indicators | No (default), Yes    | Available as "discrete" slider | Available                                                           |
| Value Indicator | No (default), Yes    | Available                      | Available                                                           |

> \*Configurations only available using tokens don't have implemented presets in code. To change the size, swap the default size tokens `md.comp.slider.xsmall.[...]` with those of the desired size.

## Tokens & specs

Slider tokens are organized into a common token set, and token sets for each size. Switch token sets from the table's menu. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Slider (Common Tokens)

#### Enabled / Stop indicator

| Token                                          | Value   |
| ---------------------------------------------- | ------- |
| `md.comp.slider.stop-indicator.size`           | 4dp     |
| `md.comp.slider.stop-indicator.shape`          | (shape) |
| `md.comp.slider.stop-indicator.trailing-space` | 4dp     |
| `md.comp.slider.stop-indicator.color`          | #4A4458 |
| `md.comp.slider.stop-indicator.color-selected` | #FFFFFF |

#### Enabled / Container

| Token                                                       | Value                    |
| ----------------------------------------------------------- | ------------------------ |
| `md.comp.slider.active.stop-indicator.container.color`      | #FFFFFF                  |
| `md.comp.slider.active.stop-indicator.container.opacity`    | 1                        |
| `md.comp.slider.inactive.stop-indicator.container.color`    | #4A4458                  |
| `md.comp.slider.inactive.stop-indicator.container.opacity`  | 1                        |
| `md.comp.slider.active.container.opacity`                   | 1 (deprecated)           |
| `md.comp.slider.inactive.container.opacity`                 | 1 (deprecated)           |
| `md.comp.slider.with-tick-marks.container.size`             | 2dp (deprecated)         |
| `md.comp.slider.with-tick-marks.container.shape`            | (shape) (deprecated)     |
| `md.comp.slider.with-tick-marks.active.container.color`     | #FFFFFF (deprecated)     |
| `md.comp.slider.with-tick-marks.active.container.opacity`   | 0.38 (deprecated)        |
| `md.comp.slider.with-tick-marks.inactive.container.color`   | #49454F (deprecated)     |
| `md.comp.slider.with-tick-marks.inactive.container.opacity` | 0.38 (deprecated)        |
| `md.comp.slider.label.container.height`                     | 28dp (deprecated)        |
| `md.comp.slider.label.container.color`                      | #6750A4 (deprecated)     |
| `md.comp.slider.label.container.elevation`                  | (elevation) (deprecated) |

#### Enabled / Track

| Token                                                  | Value                    |
| ------------------------------------------------------ | ------------------------ |
| `md.comp.slider.active.track.height`                   | 16dp                     |
| `md.comp.slider.inactive.track.height`                 | 16dp                     |
| `md.comp.slider.active.track.shape`                    | (shape)                  |
| `md.comp.slider.active.track.outer-corner.corner-size` | (shape)                  |
| `md.comp.slider.active.track.inner-corner.corner-size` | (shape)                  |
| `md.comp.slider.inactive.track.shape`                  | (shape)                  |
| `md.comp.slider.track.elevation`                       | (elevation) (deprecated) |
| `md.comp.slider.active.track.color`                    | #6750A4                  |
| `md.comp.slider.inactive.track.color`                  | #E8DEF8                  |

#### Enabled / Handle

| Token                                              | Value                    |
| -------------------------------------------------- | ------------------------ |
| `md.comp.slider.handle.height`                     | 44dp                     |
| `md.comp.slider.handle.width`                      | 4dp                      |
| `md.comp.slider.handle.shape`                      | (shape)                  |
| `md.comp.slider.handle.color`                      | #6750A4                  |
| `md.comp.slider.slider-active-handle-color`        | #6750A4                  |
| `md.comp.slider.active.handle.height`              | 44dp                     |
| `md.comp.slider.active.handle.width`               | 4dp                      |
| `md.comp.slider.active.handle.shape`               | (shape)                  |
| `md.comp.slider.active.handle.leading-space`       | 6dp                      |
| `md.comp.slider.active.handle.trailing-space`      | 6dp                      |
| `md.comp.slider.active.handle.padding`             | 6dp                      |
| `md.comp.slider.handle.elevation`                  | (elevation) (deprecated) |
| `md.comp.slider.handle.shadow-color`               | #000000 (deprecated)     |
| `md.comp.slider.with-overlap.handle.outline.color` | #FFFFFF (deprecated)     |
| `md.comp.slider.with-overlap.handle.outline.width` | 1dp (deprecated)         |
| `md.comp.slider.state-layer.size`                  | 40dp (deprecated)        |

#### Enabled / Label text (Deprecated)

| Token                                         | Value                |
| --------------------------------------------- | -------------------- |
| `md.comp.slider.label.label-text.type`        | (type) (deprecated)  |
| `md.comp.slider.label.label-text.font`        | Roboto (deprecated)  |
| `md.comp.slider.label.label-text.size`        | 12pt (deprecated)    |
| `md.comp.slider.label.label-text.font-size`   | 12pt (deprecated)    |
| `md.comp.slider.label.label-text.line-height` | 16pt (deprecated)    |
| `md.comp.slider.label.label-text.weight`      | 500 (deprecated)     |
| `md.comp.slider.label.label-text.tracking`    | 0.5pt (deprecated)   |
| `md.comp.slider.label.label-text.color`       | #F5EFF7 (deprecated) |

#### Disabled / Stop

| Token                                                             | Value                |
| ----------------------------------------------------------------- | -------------------- |
| `md.comp.slider.disabled.active.stop-indicator.container.color`   | #F5EFF7              |
| `md.comp.slider.disabled.inactive.stop-indicator.container.color` | #1D1B20              |
| `md.comp.slider.disabled.stop-indicator.color`                    | #1D1B20 (deprecated) |
| `md.comp.slider.disabled.stop-indicator.color-selected`           | #F5EFF7 (deprecated) |
| `md.comp.slider.disabled.stop-indicator.container.color`          | #1D1B20 (deprecated) |
| `md.comp.slider.disabled.stop-indicator.container.opacity`        | 0.38 (deprecated)    |
| `md.comp.slider.with-tick-marks.disabled.container.color`         | #1D1B20 (deprecated) |
| `md.comp.slider.with-tick-marks.disabled.container.opacity`       | 0.38 (deprecated)    |

#### Disabled / Track

| Token                                            | Value   |
| ------------------------------------------------ | ------- |
| `md.comp.slider.disabled.active.track.color`     | #1D1B20 |
| `md.comp.slider.disabled.active.track.opacity`   | 0.38    |
| `md.comp.slider.disabled.inactive.track.color`   | #1D1B20 |
| `md.comp.slider.disabled.inactive.track.opacity` | 0.12    |

#### Disabled / Handle

| Token                                      | Value                    |
| ------------------------------------------ | ------------------------ |
| `md.comp.slider.disabled.handle.color`     | #1D1B20                  |
| `md.comp.slider.disabled.handle.elevation` | (elevation) (deprecated) |
| `md.comp.slider.disabled.handle.opacity`   | 0.38                     |
| `md.comp.slider.disabled.handle.width`     | 4dp                      |

#### Hovered / Handle

| Token                                      | Value                |
| ------------------------------------------ | -------------------- |
| `md.comp.slider.hover.handle.color`        | #6750A4              |
| `md.comp.slider.hover.handle.width`        | 4dp                  |
| `md.comp.slider.hover.stop.color`          | #6750A4 (deprecated) |
| `md.comp.slider.hover.state-layer.color`   | #6750A4 (deprecated) |
| `md.comp.slider.hover.state-layer.opacity` | 0.08 (deprecated)    |

#### Focused / Track

| Token                                       | Value   |
| ------------------------------------------- | ------- |
| `md.comp.slider.focus.active.track.color`   | #6750A4 |
| `md.comp.slider.focus.inactive.track.color` | #E8DEF8 |

#### Focused / Handle

| Token                                      | Value                |
| ------------------------------------------ | -------------------- |
| `md.comp.slider.focus.handle.color`        | #6750A4              |
| `md.comp.slider.focus.handle.width`        | 2dp                  |
| `md.comp.slider.focus.stop.color`          | #6750A4 (deprecated) |
| `md.comp.slider.focus.state-layer.color`   | #6750A4 (deprecated) |
| `md.comp.slider.focus.state-layer.opacity` | 0.1 (deprecated)     |

#### Pressed / Handle

| Token                                        | Value                |
| -------------------------------------------- | -------------------- |
| `md.comp.slider.pressed.handle.color`        | #6750A4              |
| `md.comp.slider.pressed.handle.width`        | 2dp                  |
| `md.comp.slider.pressed.state-layer.color`   | #6750A4 (deprecated) |
| `md.comp.slider.pressed.state-layer.opacity` | 0.1 (deprecated)     |

#### Pressed / Track

| Token                                         | Value   |
| --------------------------------------------- | ------- |
| `md.comp.slider.pressed.active.track.color`   | #6750A4 |
| `md.comp.slider.pressed.inactive.track.color` | #E8DEF8 |

#### Pressed / Stop (Deprecated)

| Token                               | Value                |
| ----------------------------------- | -------------------- |
| `md.comp.slider.pressed.stop.color` | #6750A4 (deprecated) |

#### Pressed / Value indicator

| Token                                                         | Value   |
| ------------------------------------------------------------- | ------- |
| `md.comp.slider.value-indicator.container.color`              | #322F35 |
| `md.comp.slider.value-indicator.label.label-text.font`        | Roboto  |
| `md.comp.slider.value-indicator.label.label-text.color`       | #F5EFF7 |
| `md.comp.slider.value-indicator.label.label-text.line-height` | 20pt    |
| `md.comp.slider.value-indicator.label.label-text.size`        | 14pt    |
| `md.comp.slider.value-indicator.label.label-text.tracking`    | 0.5pt   |
| `md.comp.slider.value-indicator.label.label-text.weight`      | 400     |
| `md.comp.slider.value-indicator.active.bottom-space`          | 12dp    |

---

### Slider - Size - Xsmall

| Token                                                 | Value |
| ----------------------------------------------------- | ----- |
| `md.comp.slider.xsmall.active.track.height`           | 16dp  |
| `md.comp.slider.xsmall.active.track.shape.leading`    | 8dp   |
| `md.comp.slider.xsmall.inactive.track.height`         | 16dp  |
| `md.comp.slider.xsmall.inactive.track.shape.trailing` | 8dp   |
| `md.comp.slider.xsmall.active.handle.height`          | 44dp  |

---

### Slider - Size - Small

| Token                                                | Value |
| ---------------------------------------------------- | ----- |
| `md.comp.slider.small.active.track.height`           | 24dp  |
| `md.comp.slider.small.active.track.shape.leading`    | 8dp   |
| `md.comp.slider.small.inactive.track.height`         | 24dp  |
| `md.comp.slider.small.inactive.track.shape.trailing` | 8dp   |
| `md.comp.slider.small.active.handle.height`          | 44dp  |

---

### Slider - Size - Medium

| Token                                                 | Value |
| ----------------------------------------------------- | ----- |
| `md.comp.slider.medium.active.track.height`           | 40dp  |
| `md.comp.slider.medium.active.track.shape.leading`    | 12dp  |
| `md.comp.slider.medium.inactive.track.height`         | 40dp  |
| `md.comp.slider.medium.inactive.track.shape.trailing` | 12dp  |
| `md.comp.slider.medium.active.handle.height`          | 44dp  |
| `md.comp.slider.medium.icon.padding`                  | 6dp   |
| `md.comp.slider.medium.icon.size`                     | 24dp  |

---

### Slider - Size - Large

| Token                                                | Value |
| ---------------------------------------------------- | ----- |
| `md.comp.slider.large.active.track.height`           | 56dp  |
| `md.comp.slider.large.active.track.shape.leading`    | 16dp  |
| `md.comp.slider.large.inactive.track.height`         | 56dp  |
| `md.comp.slider.large.inactive.track.shape.trailing` | 16dp  |
| `md.comp.slider.large.active.handle.height`          | 68dp  |
| `md.comp.slider.large.icon.padding`                  | 6dp   |
| `md.comp.slider.large.icon.size`                     | 24dp  |

---

### Slider - Size - Xlarge

| Token                                                 | Value |
| ----------------------------------------------------- | ----- |
| `md.comp.slider.xlarge.active.track.height`           | 96dp  |
| `md.comp.slider.xlarge.active.track.shape.leading`    | 28dp  |
| `md.comp.slider.xlarge.inactive.track.height`         | 96dp  |
| `md.comp.slider.xlarge.inactive.track.shape.trailing` | 28dp  |
| `md.comp.slider.xlarge.active.handle.height`          | 108dp |
| `md.comp.slider.xlarge.icon.padding`                  | 8dp   |
| `md.comp.slider.xlarge.icon.size`                     | 32dp  |

---

## Anatomy

![6 elements of a slider.](https://lh3.googleusercontent.com/Tj-xqiQbRv2zhsiRQmk6ZkdhFwQgK6qEZx40m4TMy8W7B8ulEiPsHemm1KcY6ejMeYjYFnJF2GHGnWzVq-v8yDHTRon1k-oZGg9VuIa2C4Q=s0)

1. Value indicator (optional)
2. Stop indicators (optional)
3. Active track
4. Handle
5. Inactive track
6. Inset icon (optional)

## Color

![9 color roles of a slider.](https://lh3.googleusercontent.com/CV3PfOlQdK3A_3O8RLyu_r-GjqW7NK-qgzQmKuo5M5tWBmI6eDGdNfq7p8bTvQbP1jYCpk8WaRktgSsCrKD9Lp1vbaeCtE2einRTw6e1J7dbGA=s0)

Slider color roles used for light and dark schemes:

1. Inverse surface
2. Inverse on surface
3. Primary
4. On primary
5. Primary
6. Secondary container
7. On secondary container
8. On secondary container
9. On primary

## States

![5 states of sliders in light and dark schemes.](https://lh3.googleusercontent.com/PgYCQrkBSJUOlzQMXu0BmIe16Fho4X9NdvdYYSOtE1tIl0aucZejoImkNIfdTpbPity3lWJxxg2WSoilrjogEOWTcVhxyGN0aYZl0sRWQuMpJA=s0)

- Enabled
- Disabled
- Hovered
- Focused
- Pressed

## Measurements

![Common slider padding and size measurements.](https://lh3.googleusercontent.com/WLMws1Xen6XFUKvbCJS2NM4jwTMVmQxFlh8QhTslZGI-TR2eoFPXUp-ck8i0FhO_U2cy0cW5qnNP6Qkrsu1kJ-eztl1sJ_o5lHzXSUtr4FAMPw=s0)

_Padding and size measurements for common sliders_

![Slider padding and size measurements at each size configuration, XS to XL.](https://lh3.googleusercontent.com/FH3TsHZ1NpVLh--XKKb2ygB9rd0bgZ6ig1vGxWhQu5HOFVbk_8CXIxMAVdJnPxKj3fojh8jFh6qDqm41tD0R3YRaK0luWcktoURO5RZfBsuO=s0)

_Padding and size measurements for XS, S, M, L, and XL sliders_

| Attribute              | XS   | S    | M    | L    | XL    |
| ---------------------- | ---- | ---- | ---- | ---- | ----- |
| Track height           | 16dp | 24dp | 40dp | 56dp | 96dp  |
| Label container height | 44dp |      |      |      |       |
| Label container width  | 48dp |      |      |      |       |
| Handle height          | 44dp | 44dp | 52dp | 68dp | 108dp |
| Handle width           | 4dp  |      |      |      |       |
| Track shape            | 8dp  | 8dp  | 12dp | 16dp | 28dp  |
| Inset icon size        | --   | --   | 24dp | 24dp | 32dp  |
