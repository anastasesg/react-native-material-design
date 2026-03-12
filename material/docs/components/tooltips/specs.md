---
url: https://m3.material.io/components/tooltips/specs
lastmod: 2025-12-22
crawled_at: 2026-03-10T00:18:00.000Z
category: components
section: tooltips
page_type: specs
status: complete
---

# Tooltips Specs

Tooltips display brief labels or messages.

## Tokens & specs

Select a component type below to see its attributes, tokens, and values.

### Tooltip - Plain

#### Enabled

##### Container

| Token                                   | Value                           |
| --------------------------------------- | ------------------------------- |
| `md.comp.plain-tooltip.container.color` | #322F35                         |
| `md.comp.plain-tooltip.container.shape` | md.sys.shape.corner.extra-small |

##### Supporting text

| Token                                               | Value                       |
| --------------------------------------------------- | --------------------------- |
| `md.comp.plain-tooltip.supporting-text.font`        | Roboto                      |
| `md.comp.plain-tooltip.supporting-text.line-height` | 16pt                        |
| `md.comp.plain-tooltip.supporting-text.size`        | 12pt                        |
| `md.comp.plain-tooltip.supporting-text.weight`      | 400                         |
| `md.comp.plain-tooltip.supporting-text.tracking`    | 0.4pt                       |
| `md.comp.plain-tooltip.supporting-text.type`        | md.sys.typescale.body-small |
| `md.comp.plain-tooltip.supporting-text.color`       | #F5EFF7                     |

---

### Tooltip - Rich

#### Enabled

##### Container

| Token                                                     | Value                      |
| --------------------------------------------------------- | -------------------------- |
| `md.comp.rich-tooltip.container.color`                    | #F3EDF7                    |
| `md.comp.rich-tooltip.container.elevation`                | md.sys.elevation.level2    |
| `md.comp.rich-tooltip.container.surface-tint-layer.color` | #6750A4 (Deprecated)       |
| `md.comp.rich-tooltip.container.shadow-color`             | #000000                    |
| `md.comp.rich-tooltip.container.shape`                    | md.sys.shape.corner.medium |

##### Label text (Action)

| Token                                                | Value                        |
| ---------------------------------------------------- | ---------------------------- |
| `md.comp.rich-tooltip.action.label-text.font`        | Roboto                       |
| `md.comp.rich-tooltip.action.label-text.line-height` | 20pt                         |
| `md.comp.rich-tooltip.action.label-text.size`        | 14pt                         |
| `md.comp.rich-tooltip.action.label-text.weight`      | 500                          |
| `md.comp.rich-tooltip.action.label-text.tracking`    | 0.1pt                        |
| `md.comp.rich-tooltip.action.label-text.type`        | md.sys.typescale.label-large |
| `md.comp.rich-tooltip.action.label-text.color`       | #6750A4                      |

##### Subhead

| Token                                      | Value                        |
| ------------------------------------------ | ---------------------------- |
| `md.comp.rich-tooltip.subhead.font`        | Roboto                       |
| `md.comp.rich-tooltip.subhead.line-height` | 20pt                         |
| `md.comp.rich-tooltip.subhead.size`        | 14pt                         |
| `md.comp.rich-tooltip.subhead.weight`      | 500                          |
| `md.comp.rich-tooltip.subhead.tracking`    | 0.1pt                        |
| `md.comp.rich-tooltip.subhead.type`        | md.sys.typescale.title-small |
| `md.comp.rich-tooltip.subhead.color`       | #49454F                      |

##### Supporting text

| Token                                              | Value                        |
| -------------------------------------------------- | ---------------------------- |
| `md.comp.rich-tooltip.supporting-text.font`        | Roboto                       |
| `md.comp.rich-tooltip.supporting-text.line-height` | 20pt                         |
| `md.comp.rich-tooltip.supporting-text.size`        | 14pt                         |
| `md.comp.rich-tooltip.supporting-text.weight`      | 400                          |
| `md.comp.rich-tooltip.supporting-text.tracking`    | 0.25pt                       |
| `md.comp.rich-tooltip.supporting-text.type`        | md.sys.typescale.body-medium |
| `md.comp.rich-tooltip.supporting-text.color`       | #49454F                      |

#### Hovered

##### Label text

| Token                                                | Value   |
| ---------------------------------------------------- | ------- |
| `md.comp.rich-tooltip.action.hover.label-text.color` | #6750A4 |

##### State layer

| Token                                                   | Value   |
| ------------------------------------------------------- | ------- |
| `md.comp.rich-tooltip.action.hover.state-layer.color`   | #6750A4 |
| `md.comp.rich-tooltip.action.hover.state-layer.opacity` | 0.08    |

#### Focused

##### Label text

| Token                                                | Value   |
| ---------------------------------------------------- | ------- |
| `md.comp.rich-tooltip.action.focus.label-text.color` | #6750A4 |

##### State layer

| Token                                                   | Value   |
| ------------------------------------------------------- | ------- |
| `md.comp.rich-tooltip.action.focus.state-layer.color`   | #6750A4 |
| `md.comp.rich-tooltip.action.focus.state-layer.opacity` | 0.1     |

#### Pressed

##### Label text

| Token                                                  | Value   |
| ------------------------------------------------------ | ------- |
| `md.comp.rich-tooltip.action.pressed.label-text.color` | #6750A4 |

##### State layer

| Token                                                     | Value   |
| --------------------------------------------------------- | ------- |
| `md.comp.rich-tooltip.action.pressed.state-layer.color`   | #6750A4 |
| `md.comp.rich-tooltip.action.pressed.state-layer.opacity` | 0.1     |

---

## Plain tooltip

![2 elements of a plain tooltip.](https://lh3.googleusercontent.com/zHG-py73NpfFfT9V5YL21rpv8EdODG2H97qgSjjGF4IaiQlAmma5D47553mD-KCljwP7WL8j8lbyEr2zOU4jNeT5uIu4ySegOvopalEVZxQ1=s0)

1. Supporting text
2. Container

### Plain tooltip colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![2 color roles of a plain tooltip.](https://lh3.googleusercontent.com/Vf161JCMtFZVXhyzhmfRoDmGW_vYVmOm5QdZOy8djJu0aEPo-gylreVY1ooQuFsAy-VFBqzRHbt1Qp6eF6znt5fJM98s4F43QbuZlmm_NHqR=s0)

Plain tooltip color roles used for light and dark themes:

1. Inverse on surface
2. Inverse surface

### Plain tooltip measurements

![Measurements of a plain tooltip.](https://lh3.googleusercontent.com/abK2uBeEApgbWbQQrMibCEslnADu90AFpFRPbT9RVSeKZfO8baP5s6myVNJKPIUtmc_S-X99Pt046jQuk_MyMPv4IvvtWrRWieaqNLxR0SQ=s0)

_Plain tooltip padding and size measurements_

| Attribute        | Value |
| ---------------- | ----- |
| Container height | 24dp  |
| Padding          | 8dp   |

---

## Rich tooltip

![4 elements of a rich tooltip.](https://lh3.googleusercontent.com/IP6aFfF9CPT86pHLyDQsPlpgpwRfiWWm4SrvrDszC_Mu_Y6iKdMcOlLuBrITk7y8afU-PxXvO26X0iRNTyF4uqvJjw6qmmyI2t7zUCsKbCUbEA=s0)

1. Subhead
2. Container
3. Supporting text
4. Text button

### Rich tooltip colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![4 color roles of a rich tooltip.](https://lh3.googleusercontent.com/WodvJBwtv0NFdfsgMkOfxWI698jM_8D6CP7cqU4CmxliBFAtsYOv1CqBQTgkHIP1gkYYLWMaTB9kISoEVnKcS3BCWCtOkm9pIkmmK91Z9yA=s0)

Rich tooltip color roles used for light and dark themes:

1. On surface variant
2. Surface container
3. On surface variant
4. Primary

### Rich tooltip measurements

![Measurements of a rich tooltip.](https://lh3.googleusercontent.com/pWZE_wQc3sD5MfnKWOQ1zSkmWFK-kLD9AHIu7iUz7DPUnF9xsNdzNhcOLz6f3jTBP-8BSkD-sKs32u3KB-9ButLnL3l_p4DJw-je_waZCy2cZw=s0)

_Rich tooltip padding and size measurements_

| Attribute              | Value |
| ---------------------- | ----- |
| Top padding            | 12dp  |
| Bottom padding         | 8dp   |
| Left and right padding | 16dp  |

### Rich tooltip configurations

Rich tooltips can have a headline, body, and up to two buttons. The headline and number of buttons can be configured.

![5 common configurations of a rich tooltip.](https://lh3.googleusercontent.com/ugboOBv4d02ZjiINyFUTI_S1IvPfMXxkgoCqYcmns1a23omQzQaAHWU5NzrwD7G96VQpAU3oi6sx14qtL_RTAIbZJXwCS9VAWV7m6NpCLlFm=s0)

1. Subhead, supporting text, and two buttons
2. Subhead, supporting text, and one button
3. Subhead and supporting text
4. Supporting text and one button
5. Supporting text and two buttons
