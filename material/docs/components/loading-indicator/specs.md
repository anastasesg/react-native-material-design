---
url: https://m3.material.io/components/loading-indicator/specs
lastmod: 2025-09-26
crawled_at: 2026-03-08T01:35:00.000Z
category: components
section: loading-indicator
page_type: specs
status: complete
---

# Loading indicator

Loading indicators show the progress for a short wait time.

## Variants

![2 elements of a loading indicator.](https://lh3.googleusercontent.com/S67BxQ4QnYuKbYkLGmjsAX8gn1nTYNayufiu-mDSMxsT73giCJ_t_8P1G4A2t8JTcDOho15zfr2hw7T8eiM24ABq5tu18f2ndgQpcUYN22lo=s0)

_Loading indicator_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Loading indicator | -- | Available |

## Configurations

![2 configurations of loading indicators.](https://lh3.googleusercontent.com/ymEEU7ii6n5M1aJlvEK-YdTlpbtGoMaALgiyMHTJwgl6wqdPQOiBLyCeSZV9C032V24-ctzx396weJRmrfuP3SG3_PbnMnHuJCJDJn0l6XTf_g=s0)

_Default, Contained_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Containment | Default | -- | Available |
| | Contained | -- | Available |

## Tokens & specs

Loading indicators have a single token set.

### Loading indicator

#### Color

| Element | Token | Value (Default, Light) |
| --- | --- | --- |
| Active indicator color | `md.comp.loading-indicator.active-indicator.color` | #6750A4 (Primary) |
| Container color | `md.comp.loading-indicator.container.color` | #E8DEF8 (Secondary container) |
| Contained container color | `md.comp.loading-indicator.contained.container.color` | #EADDFF (Primary container) |
| Contained active indicator color | `md.comp.loading-indicator.contained.active-indicator.color` | #4F378B (On primary container) |

> **Note:** The `md.comp.loading-indicator.container.color` token is deprecated.

#### Size

| Element | Token | Value |
| --- | --- | --- |
| Active indicator size | `md.comp.loading-indicator.active-indicator.size` | 38dp |
| Container height | `md.comp.loading-indicator.container.height` | 48dp |
| Container width | `md.comp.loading-indicator.container.width` | 48dp |

#### Shape

| Element | Token | Value |
| --- | --- | --- |
| Container shape | `md.comp.loading-indicator.container.shape` | Fully rounded |

## Anatomy

![2 elements of a loading indicator.](https://lh3.googleusercontent.com/LnXFKWQjx1upNdSL52LpDEe6n6-9Wj_WQoZalB2nwnCKeNjhZ2p0tsq1q-LsV9gaDEcCVwuRicHGTVaTAa7DWv_rJ_iH2PORJmFxrZlCLphp=s0)

1. Active indicator
2. Container

## Color

### Default

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

![2 color roles of a loading progress indicator in light and dark themes: the active indicator is primary and the container is secondary container.](https://lh3.googleusercontent.com/kHiYDI_rJi33eQIGCCvJY8rB8T0KnCrajoGZaedLVM70FSKqCIMxwGTFc8j4A-DWWGTVgXQ2pWZqxjL5X4ZtHD3MQNWY4XZasIvw1NJrh4PE=s0)

_Loading indicator color roles used for light and dark schemes:_

- Primary

### Contained

![2 color roles of a loading progress indicator in light and dark themes. The active indicator is on primary container and the container is primary container.](https://lh3.googleusercontent.com/wCgczdkIgvjvmJLlIlHuSP8ND2z0Xtw8K6oBWnYfaw0z39kFlhxprzY4LQSis0abslHlp69jMprJZtQoEuG06Mij-XVqGvcUtQTVuVWId5WL=s0)

_Contained loading indicator color roles used for light and dark schemes:_

- On primary container
- Primary container

## Measurements

![Loading progress indicator measurements.](https://lh3.googleusercontent.com/wXvvKvCbB0kpP7qvp_XSbnQ2y_ulUlpCVLZ7wbz7FUvxiAsnXyH-AZBHnf5pKvC3JldNmmgC2GpNfr5YWXwNShPUkoATkaH2zAm53DnQ4O4Ozw=s0)

_To ensure sufficient margins, the size is 48dp while the shape container is 38dp._
