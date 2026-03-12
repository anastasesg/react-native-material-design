---
url: https://m3.material.io/components/progress-indicators/specs
lastmod: 2025-09-26
crawled_at: 2026-03-09T15:22:00.000Z
category: components
section: progress-indicators
page_type: specs
status: complete
---

# Progress indicators

## Variants

![2 variant of progress indicators.](https://lh3.googleusercontent.com/fLmSSW0vCAz72TSdfqeo9FQY5YlgLT7ktKAZkxs-FEetsANoory1UPDxRd3-jESQSkUeq6xuwEtp1NcR52Mih2QQQiprYecoJ-XI0SDBaL1T=s0)

1. Linear progress indicator
2. Circular progress indicator

| Variant                     | M3        | M3 Expressive |
| --------------------------- | --------- | ------------- |
| Linear progress indicator   | Available | Available     |
| Circular progress indicator | Available | Available     |

## Configurations

![4 configurations of the linear determinate progress indicator.](https://lh3.googleusercontent.com/Cf6AdPUEQffL-k5D1on9M3H1oyAGh20uJyfa7sbOwip6oRPvmqv7u2MSLKrH70PpyL0bCJdy2fGRNg_13JG9imoQdIMm8935YUMQXQxATKeocA=s0)

1. Behavior: Determinate and indeterminate
2. Thickness: Default (4dp) and variable
3. Shape: Flat and wavy

| Category        | Configuration                        | M3        | M3 Expressive |
| --------------- | ------------------------------------ | --------- | ------------- |
| Behavior        | Determinate (default), Indeterminate | Available | Available     |
| Track thickness | Fixed (4dp)                          | Available | Available     |
|                 | Configurable                         | --        | Available     |
| Shape           | Flat (default)                       | Available | Available     |
|                 | Wavy                                 | --        | Available     |

## Tokens & specs

Browse the component elements, attributes, tokens, and their values.

### Progress Indicator - Common

#### Color

| Token                  | Token key                                           | Value                         |
| ---------------------- | --------------------------------------------------- | ----------------------------- |
| Active indicator color | `md.comp.progress-indicator.active-indicator.color` | #6750A4 (Primary)             |
| Track color            | `md.comp.progress-indicator.track.color`            | #E8DEF8 (Secondary container) |
| Stop indicator color   | `md.comp.progress-indicator.stop-indicator.color`   | #6750A4 (Primary)             |

#### Shape

| Token                  | Token key                                           | Value                    |
| ---------------------- | --------------------------------------------------- | ------------------------ |
| Active indicator shape | `md.comp.progress-indicator.active-indicator.shape` | Circular (fully rounded) |
| Track shape            | `md.comp.progress-indicator.track.shape`            | Circular (fully rounded) |
| Stop indicator shape   | `md.comp.progress-indicator.stop-indicator.shape`   | Circular (fully rounded) |

#### [Deprecated] Enabled

| Token                        | Token key                                                 | Value |
| ---------------------------- | --------------------------------------------------------- | ----- |
| Active indicator thickness   | `md.comp.progress-indicator.active-indicator.thickness`   | 4dp   |
| Track thickness              | `md.comp.progress-indicator.track.thickness`              | 4dp   |
| Stop indicator size          | `md.comp.progress-indicator.stop-indicator.size`          | 4dp   |
| Active indicator track space | `md.comp.progress-indicator.active-indicator-track-space` | 4dp   |

---

### Progress indicator - Linear

#### Linear - baseline

| Token                         | Token key                                                                          | Value |
| ----------------------------- | ---------------------------------------------------------------------------------- | ----- |
| Height                        | `md.comp.progress-indicator.linear.height`                                         | 4dp   |
| With wave height              | `md.comp.progress-indicator.linear.with-wave.height`                               | 10dp  |
| Active indicator thickness    | `md.comp.progress-indicator.linear.active-indicator.thickness`                     | 4dp   |
| Track thickness               | `md.comp.progress-indicator.linear.track.thickness`                                | 4dp   |
| Stop indicator size           | `md.comp.progress-indicator.linear.stop-indicator.size`                            | 4dp   |
| Track active indicator space  | `md.comp.progress-indicator.linear.track-active-indicator-space`                   | 4dp   |
| Stop indicator trailing space | `md.comp.progress-indicator.linear.stop-indicator.trailing-space`                  | 0     |
| Wave amplitude                | `md.comp.progress-indicator.linear.active-indicator.wave.amplitude`                | 3dp   |
| Wave wavelength               | `md.comp.progress-indicator.linear.active-indicator.wave.wavelength`               | 40dp  |
| Indeterminate wave wavelength | `md.comp.progress-indicator.linear.indeterminate.active-indicator.wave.wavelength` | 20dp  |

#### [Deprecated] Linear - thick

| Token                         | Token key                                                               | Value |
| ----------------------------- | ----------------------------------------------------------------------- | ----- |
| Height                        | `md.comp.progress-indicator.linear.thick.height`                        | 8dp   |
| With wave height              | `md.comp.progress-indicator.linear.thick.with-wave.height`              | 14dp  |
| Active indicator thickness    | `md.comp.progress-indicator.linear.thick.active-indicator.thickness`    | 8dp   |
| Track thickness               | `md.comp.progress-indicator.linear.thick.track.thickness`               | 8dp   |
| Stop indicator size           | `md.comp.progress-indicator.linear.thick.stop-indicator.size`           | 4dp   |
| Track active indicator space  | `md.comp.progress-indicator.linear.thick.track-active-indicator-space`  | 4dp   |
| Stop indicator trailing space | `md.comp.progress-indicator.linear.thick.stop-indicator.trailing-space` | 2dp   |

---

### Progress indicator - Circular

#### Circular - baseline

| Token                        | Token key                                                              | Value |
| ---------------------------- | ---------------------------------------------------------------------- | ----- |
| Size                         | `md.comp.progress-indicator.circular.size`                             | 40dp  |
| Size with wave               | `md.comp.progress-indicator.circular.with-wave.size`                   | 48dp  |
| Active indicator thickness   | `md.comp.progress-indicator.circular.active-indicator.thickness`       | 4dp   |
| Track thickness              | `md.comp.progress-indicator.circular.track.thickness`                  | 4dp   |
| Track active indicator space | `md.comp.progress-indicator.circular.track-active-indicator-space`     | 4dp   |
| Wave amplitude               | `md.comp.progress-indicator.circular.active-indicator.wave.amplitude`  | 1.6dp |
| Wave wavelength              | `md.comp.progress-indicator.circular.active-indicator.wave.wavelength` | 15dp  |

#### [Deprecated] Circular - thick

| Token                        | Token key                                                                | Value |
| ---------------------------- | ------------------------------------------------------------------------ | ----- |
| Size                         | `md.comp.progress-indicator.circular.thick.size`                         | 52dp  |
| Active indicator thickness   | `md.comp.progress-indicator.circular.thick.active-indicator.thickness`   | 8dp   |
| Track thickness              | `md.comp.progress-indicator.circular.thick.track.thickness`              | 8dp   |
| Track active indicator space | `md.comp.progress-indicator.circular.thick.track-active-indicator-space` | 4dp   |

## Anatomy

![3 elements of a progress indicator.](https://lh3.googleusercontent.com/d1mWcS4gytQf_XcgwvUqsNTf47P5BT9PUo-Ivi-7Ld1_Vc_HAtLGPARxwbqUcN7gdc-JH4iXM0nRH1374g23CnABP7i8eP9CnGq6UNpAnJ4=s0)

1. Active indicator
2. Track
3. Stop indicator

## Color

![2 color roles of a linear progress indicator in light and dark themes: the active indicator and stop indicator are primary and the track is secondary container.](https://lh3.googleusercontent.com/CrzKce-9x2GrD2SOdyYCmDhdK37XcZoiMv9mT6N0NjUybL1GwXLN52_LbXb1AKfzmLUna1jMew5x0skKpMBEHrBJ82d-tJRr5DvoaUeR_J4=s0)

Progress indicator color roles used for light and dark schemes:

- Primary
- Secondary container

## Measurements

Wavy indicators use **amplitude** and **wavelength** to determine the shape of the wave. The height is the overall container height.

![Definitions of wave measurements for height and amplitude.](https://lh3.googleusercontent.com/Aii3LLGqfr5jLHSdMLKx4rMUceBixyyXu77IqvYcUoMGwV8MxqqZgcB0XU6nx7GpVeU7_sqdq6ScJE4eic6v4dP1Abaq4TtF3MSZNxB2HifI=s0)

**Amplitude** measures from the center of the resting position to the center of the peak

![Definitions of wave measurements for wavelength.](https://lh3.googleusercontent.com/hYbEOpy3GfIuFxLUfMLU_r3VijC9KNldOlFhXM3oEYputn_p6YvzArLiC3dZWgzuuzVOfrsX2LUhP6BQP57NF_RD265PRui1VtLzxURvCDzMOg=s0)

**Wavelength** measures the distance between two adjacent peaks

![Linear progress indicator measurements.](https://lh3.googleusercontent.com/M-64WwKIqgmV6lWqTh7Ar7vJuUsvjqLTnOJcMLrFPbW4nxRmYITD4GbXXEGCjwK2eJLUBGlfD1rtb86saREi68enxN3Galq9ZUPa-pgFIm-QlA=s0)

_Size measurements for linear progress indicators. The thicker variants are provided as sample measurement for makers to adjust the default version based on their use cases._

![Circular progress indicator measurements.](https://lh3.googleusercontent.com/8oX70XRFeRqxFH1vBkx8z4hy6nKrvShQvQsQuR8emIWoXRKU8OWnK5pdFx-Q8ZwF0d4w8qDLi5NqPYAqxekWoHy9ytjz-lz7Leo9TFNlWU8s=s0)

_Size measurements for circular progress indicators. The thicker variants are provided as sample measurement for makers to adjust the default version based on their use cases._

![4dp padding on the left and right of the linear progress indicator.](https://lh3.googleusercontent.com/6_sdBcuvKe2j9XDUC70bzaxi8QsZW1507V6pQ9ZQstst3B_Y8w26_5Yuz504uIxL_GcrMfNhJFvNiQotKPPEPlRgCczoR5ys0e8wM7Lv6L19=s0)

_The linear progress indicator is inset from the edge of the screen by 4dp_

## Baseline tokens

The circular and linear progress indicator had separate token sets. These are no longer recommended.

### [Deprecated] Progress indicator - Circular

#### [Deprecated] Enabled / Active indicator

| Token                                   | Token key                                                                     | Value         |
| --------------------------------------- | ----------------------------------------------------------------------------- | ------------- |
| Size                                    | `md.comp.circular-progress-indicator.size`                                    | 48dp          |
| Active indicator width                  | `md.comp.circular-progress-indicator.active-indicator.width`                  | 4dp           |
| Active indicator shape                  | `md.comp.circular-progress-indicator.active-indicator.shape`                  | (shape token) |
| Active indicator color                  | `md.comp.circular-progress-indicator.active-indicator.color`                  | #6750A4       |
| Four color active indicator one color   | `md.comp.circular-progress-indicator.four-color.active-indicator.one.color`   | #6750A4       |
| Four color active indicator two color   | `md.comp.circular-progress-indicator.four-color.active-indicator.two.color`   | #EADDFF       |
| Four color active indicator three color | `md.comp.circular-progress-indicator.four-color.active-indicator.three.color` | #7D5260       |
| Four color active indicator four color  | `md.comp.circular-progress-indicator.four-color.active-indicator.four.color`  | #FFD8E4       |

---

### [Deprecated] Progress indicator - Linear

#### [Deprecated] Enabled / Track

| Token        | Token key                                        | Value         |
| ------------ | ------------------------------------------------ | ------------- |
| Track height | `md.comp.linear-progress-indicator.track.height` | 4dp           |
| Track shape  | `md.comp.linear-progress-indicator.track.shape`  | (shape token) |
| Track color  | `md.comp.linear-progress-indicator.track.color`  | #E6E0E9       |

#### [Deprecated] Enabled / Active indicator

| Token                                   | Token key                                                                   | Value         |
| --------------------------------------- | --------------------------------------------------------------------------- | ------------- |
| Active indicator height                 | `md.comp.linear-progress-indicator.active-indicator.height`                 | 4dp           |
| Active indicator shape                  | `md.comp.linear-progress-indicator.active-indicator.shape`                  | (shape token) |
| Active indicator color                  | `md.comp.linear-progress-indicator.active-indicator.color`                  | #6750A4       |
| Four color active indicator one color   | `md.comp.linear-progress-indicator.four-color.active-indicator.one.color`   | #6750A4       |
| Four color active indicator two color   | `md.comp.linear-progress-indicator.four-color.active-indicator.two.color`   | #EADDFF       |
| Four color active indicator three color | `md.comp.linear-progress-indicator.four-color.active-indicator.three.color` | #7D5260       |
| Four color active indicator four color  | `md.comp.linear-progress-indicator.four-color.active-indicator.four.color`  | #FFD8E4       |
