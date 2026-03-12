---
url: https://m3.material.io/components/buttons/specs
lastmod: 2025-11-27
crawled_at: 2026-02-03T12:00:00Z
category: components
section: buttons
page_type: specs
status: complete
---

### Types

![Diagram comparing buttons with toggle buttons.](https://lh3.googleusercontent.com/aL3DQi0w3IY7RrzOTfarwNqsX5XCPMiDGzkIUr6qHdwOoAxu9_jKKtj826ErTjT1VMuT-0jcXnFDfwyW8FPHchPEr6YmTreDMSFhFLPBQrmK=s0)

_Default button, Toggle button_

| Type               | Original M3 | M3 Expressive |
|--------------------|-------------|---------------|
| Default            | Available   | Available     |
| Toggle (selection) | --          | Available     |

### Configurations

![Diagram showing configurations of buttons.](https://lh3.googleusercontent.com/bdblUB_QVH5kKnklBiiVlf9Dfthpn80V_W4WBfItgmm5y17ft7FXqpZIh7xultL_P7Qi9eLP9QDmfekSnWOWZGTlCpPt9EyzYlKwoNjf4w5R=s0)

_Size, Shape, Color, Small button padding_

| Category             | Configuration                                         | Original M3 | M3 Expressive         |
|----------------------|-------------------------------------------------------|-------------|-----------------------|
| Size                 | Small (default)                                       | Available   | Available             |
|                      | XS, M, L, XL                                          | --          | Available             |
| Shape                | Round (default)                                       | Available   | Available             |
|                      | Square                                                | --          | Available             |
| Color                | Elevated, filled (default), tonal, outlined, standard | Available   | Available             |
| Small button padding | 24dp                                                  | Available   | Deprecated (Use 16dp) |
|                      | 16dp                                                  | --          | Available             |

### Tokens & specs

Use the table's menu to select a token set. Button token sets are separated into common tokens, color, and size. [View deprecated tokens](https://m3.material.io/m3/pages/common-buttons/specs#c305d304-a6c0-466a-a48c-8d0718a29ae2)

---

#### Button - Color - Elevated (Default, Light)

**Enabled**

| Token                                               | Value   |
|-----------------------------------------------------|---------|
| md.comp.button.elevated.container.color             | #F7F2FA |
| md.comp.button.elevated.unselected.container.color  | #F7F2FA |
| md.comp.button.elevated.selected.container.color    | #6750A4 |
| md.comp.button.elevated.container.shadow-color      | #000000 |
| md.comp.button.elevated.label-text.color            | #6750A4 |
| md.comp.button.elevated.unselected.label-text.color | #6750A4 |
| md.comp.button.elevated.selected.label-text.color   | #FFFFFF |
| md.comp.button.elevated.icon.color                  | #6750A4 |
| md.comp.button.elevated.unselected.icon.color       | #6750A4 |
| md.comp.button.elevated.selected.icon.color         | #FFFFFF |

**Disabled**

| Token                                               | Value   |
|-----------------------------------------------------|---------|
| md.comp.button.elevated.disabled.container.color    | #1D1B20 |
| md.comp.button.elevated.disabled.container.opacity  | 0.1     |
| md.comp.button.elevated.disabled.label-text.color   | #1D1B20 |
| md.comp.button.elevated.disabled.label-text.opacity | 0.38    |
| md.comp.button.elevated.disabled.icon.color         | #1D1B20 |
| md.comp.button.elevated.disabled.icon.opacity       | 0.38    |

**Hovered**

| Token                                                        | Value   |
|--------------------------------------------------------------|---------|
| md.comp.button.elevated.hovered.state-layer.color            | #6750A4 |
| md.comp.button.elevated.unselected.hovered.state-layer.color | #6750A4 |
| md.comp.button.elevated.selected.hovered.state-layer.color   | #FFFFFF |
| md.comp.button.elevated.hovered.state-layer.opacity          | 0.08    |
| md.comp.button.elevated.hovered.label-text.color             | #6750A4 |
| md.comp.button.elevated.unselected.hovered.label-text.color  | #6750A4 |
| md.comp.button.elevated.selected.hovered.label-text.color    | #FFFFFF |
| md.comp.button.elevated.hovered.icon.color                   | #6750A4 |
| md.comp.button.elevated.unselected.hovered.icon.color        | #6750A4 |
| md.comp.button.elevated.selected.hovered.icon.color          | #FFFFFF |

**Focused**

| Token                                                        | Value   |
|--------------------------------------------------------------|---------|
| md.comp.button.elevated.focused.state-layer.color            | #6750A4 |
| md.comp.button.elevated.unselected.focused.state-layer.color | #6750A4 |
| md.comp.button.elevated.selected.focused.state-layer.color   | #FFFFFF |
| md.comp.button.elevated.focused.state-layer.opacity          | 0.1     |
| md.comp.button.elevated.focused.label-text.color             | #6750A4 |
| md.comp.button.elevated.unselected.focused.label-text.color  | #6750A4 |
| md.comp.button.elevated.selected.focused.label-text.color    | #FFFFFF |
| md.comp.button.elevated.focused.icon.color                   | #6750A4 |
| md.comp.button.elevated.unselected.focused.icon.color        | #6750A4 |
| md.comp.button.elevated.selected.focused.icon.color          | #FFFFFF |

**Pressed**

| Token                                                        | Value   |
|--------------------------------------------------------------|---------|
| md.comp.button.elevated.pressed.state-layer.color            | #6750A4 |
| md.comp.button.elevated.unselected.pressed.state-layer.color | #6750A4 |
| md.comp.button.elevated.selected.pressed.state-layer.color   | #FFFFFF |
| md.comp.button.elevated.pressed.state-layer.opacity          | 0.1     |
| md.comp.button.elevated.pressed.label-text.color             | #6750A4 |
| md.comp.button.elevated.unselected.pressed.label-text.color  | #6750A4 |
| md.comp.button.elevated.selected.pressed.label-text.color    | #FFFFFF |
| md.comp.button.elevated.pressed.icon.color                   | #6750A4 |
| md.comp.button.elevated.unselected.pressed.icon.color        | #6750A4 |
| md.comp.button.elevated.selected.pressed.icon.color          | #FFFFFF |

---

#### Button - Color - Filled (Default, Light)

**Enabled**

| Token                                              | Value   |
|----------------------------------------------------|---------|
| md.comp.button.filled.container.color              | #6750A4 |
| md.comp.button.filled.unselected.container.color   | #F3EDF7 |
| md.comp.button.filled.selected.container.color     | #6750A4 |
| md.comp.button.filled.container.shadow-color       | #000000 |
| md.comp.button.filled.label-text.color             | #FFFFFF |
| md.comp.button.filled.unselected.label-text.color  | #49454F |
| md.comp.button.filled.selected.label-text.color    | #FFFFFF |
| md.comp.button.filled.icon.color                   | #FFFFFF |
| md.comp.button.filled.unselected.icon.color        | #49454F |
| md.comp.button.filled.selected.icon.color          | #FFFFFF |

**Disabled**

| Token                                              | Value   |
|----------------------------------------------------|---------|
| md.comp.button.filled.disabled.container.color     | #1D1B20 |
| md.comp.button.filled.disabled.container.opacity   | 0.1     |
| md.comp.button.filled.disabled.label-text.color    | #1D1B20 |
| md.comp.button.filled.disabled.label-text.opacity  | 0.38    |
| md.comp.button.filled.disabled.icon.color          | #1D1B20 |
| md.comp.button.filled.disabled.icon.opacity        | 0.38    |

**Hovered**

| Token                                                       | Value   |
|-------------------------------------------------------------|---------|
| md.comp.button.filled.hovered.state-layer.color             | #FFFFFF |
| md.comp.button.filled.unselected.hovered.state-layer.color  | #49454F |
| md.comp.button.filled.selected.hovered.state-layer.color    | #FFFFFF |
| md.comp.button.filled.hovered.state-layer.opacity           | 0.08    |
| md.comp.button.filled.hovered.label-text.color              | #FFFFFF |
| md.comp.button.filled.unselected.hovered.label-text.color   | #49454F |
| md.comp.button.filled.selected.hovered.label-text.color     | #FFFFFF |
| md.comp.button.filled.hovered.icon.color                    | #FFFFFF |
| md.comp.button.filled.unselected.hovered.icon.color         | #49454F |
| md.comp.button.filled.selected.hovered.icon.color           | #FFFFFF |

**Focused**

| Token                                                       | Value   |
|-------------------------------------------------------------|---------|
| md.comp.button.filled.focused.state-layer.color             | #FFFFFF |
| md.comp.button.filled.unselected.focused.state-layer.color  | #49454F |
| md.comp.button.filled.selected.focused.state-layer.color    | #FFFFFF |
| md.comp.button.filled.focused.state-layer.opacity           | 0.1     |
| md.comp.button.filled.focused.label-text.color              | #FFFFFF |
| md.comp.button.filled.unselected.focused.label-text.color   | #49454F |
| md.comp.button.filled.selected.focused.label-text.color     | #FFFFFF |
| md.comp.button.filled.focused.icon.color                    | #FFFFFF |
| md.comp.button.filled.unselected.focused.icon.color         | #49454F |
| md.comp.button.filled.selected.focused.icon.color           | #FFFFFF |

**Pressed**

| Token                                                       | Value   |
|-------------------------------------------------------------|---------|
| md.comp.button.filled.pressed.state-layer.color             | #FFFFFF |
| md.comp.button.filled.unselected.pressed.state-layer.color  | #49454F |
| md.comp.button.filled.selected.pressed.state-layer.color    | #FFFFFF |
| md.comp.button.filled.pressed.state-layer.opacity           | 0.1     |
| md.comp.button.filled.pressed.label-text.color              | #FFFFFF |
| md.comp.button.filled.unselected.pressed.label-text.color   | #49454F |
| md.comp.button.filled.selected.pressed.label-text.color     | #FFFFFF |
| md.comp.button.filled.pressed.icon.color                    | #FFFFFF |
| md.comp.button.filled.unselected.pressed.icon.color         | #49454F |
| md.comp.button.filled.selected.pressed.icon.color           | #FFFFFF |

---

#### Button - Color - Tonal (Default, Light)

**Enabled**

| Token                                             | Value   |
|---------------------------------------------------|---------|
| md.comp.button.tonal.container.color              | #E8DEF8 |
| md.comp.button.tonal.unselected.container.color   | #E8DEF8 |
| md.comp.button.tonal.selected.container.color     | #625B71 |
| md.comp.button.tonal.container.shadow-color       | #000000 |
| md.comp.button.tonal.label-text.color             | #4A4458 |
| md.comp.button.tonal.unselected.label-text.color  | #4A4458 |
| md.comp.button.tonal.selected.label-text.color    | #FFFFFF |
| md.comp.button.tonal.icon.color                   | #4A4458 |
| md.comp.button.tonal.unselected.icon.color        | #4A4458 |
| md.comp.button.tonal.selected.icon.color          | #FFFFFF |

**Disabled**

| Token                                             | Value   |
|---------------------------------------------------|---------|
| md.comp.button.tonal.disabled.container.color     | #1D1B20 |
| md.comp.button.tonal.disabled.container.opacity   | 0.1     |
| md.comp.button.tonal.disabled.label-text.color    | #1D1B20 |
| md.comp.button.tonal.disabled.label-text.opacity  | 0.38    |
| md.comp.button.tonal.disabled.icon.color          | #1D1B20 |
| md.comp.button.tonal.disabled.icon.opacity        | 0.38    |

**Hovered**

| Token                                                      | Value   |
|------------------------------------------------------------|---------|
| md.comp.button.tonal.hovered.state-layer.color             | #4A4458 |
| md.comp.button.tonal.unselected.hovered.state-layer.color  | #4A4458 |
| md.comp.button.tonal.selected.hovered.state-layer.color    | #FFFFFF |
| md.comp.button.tonal.hovered.state-layer.opacity           | 0.08    |
| md.comp.button.tonal.hovered.label-text.color              | #4A4458 |
| md.comp.button.tonal.unselected.hovered.label-text.color   | #4A4458 |
| md.comp.button.tonal.selected.hovered.label-text.color     | #FFFFFF |
| md.comp.button.tonal.hovered.icon.color                    | #4A4458 |
| md.comp.button.tonal.unselected.hovered.icon.color         | #4A4458 |
| md.comp.button.tonal.selected.hovered.icon.color           | #FFFFFF |

**Focused**

| Token                                                      | Value   |
|------------------------------------------------------------|---------|
| md.comp.button.tonal.focused.state-layer.color             | #4A4458 |
| md.comp.button.tonal.unselected.focused.state-layer.color  | #4A4458 |
| md.comp.button.tonal.selected.focused.state-layer.color    | #FFFFFF |
| md.comp.button.tonal.focused.state-layer.opacity           | 0.1     |
| md.comp.button.tonal.focused.label-text.color              | #4A4458 |
| md.comp.button.tonal.unselected.focused.label-text.color   | #4A4458 |
| md.comp.button.tonal.selected.focused.label-text.color     | #FFFFFF |
| md.comp.button.tonal.focused.icon.color                    | #4A4458 |
| md.comp.button.tonal.unselected.focused.icon.color         | #4A4458 |
| md.comp.button.tonal.selected.focused.icon.color           | #FFFFFF |

**Pressed**

| Token                                                      | Value   |
|------------------------------------------------------------|---------|
| md.comp.button.tonal.pressed.state-layer.color             | #4A4458 |
| md.comp.button.tonal.unselected.pressed.state-layer.color  | #4A4458 |
| md.comp.button.tonal.selected.pressed.state-layer.color    | #FFFFFF |
| md.comp.button.tonal.pressed.state-layer.opacity           | 0.1     |
| md.comp.button.tonal.pressed.label-text.color              | #4A4458 |
| md.comp.button.tonal.unselected.pressed.label-text.color   | #4A4458 |
| md.comp.button.tonal.selected.pressed.label-text.color     | #FFFFFF |
| md.comp.button.tonal.pressed.icon.color                    | #4A4458 |
| md.comp.button.tonal.unselected.pressed.icon.color         | #4A4458 |
| md.comp.button.tonal.selected.pressed.icon.color           | #FFFFFF |

---

#### Button - Color - Outlined (Default, Light)

**Enabled**

| Token                                                | Value   |
|------------------------------------------------------|---------|
| md.comp.button.outlined.outline.color                | #CAC4D0 |
| md.comp.button.outlined.selected.container.color     | #322F35 |
| md.comp.button.outlined.label-text.color             | #49454F |
| md.comp.button.outlined.unselected.label-text.color  | #49454F |
| md.comp.button.outlined.selected.label-text.color    | #F5EFF7 |
| md.comp.button.outlined.icon.color                   | #49454F |
| md.comp.button.outlined.unselected.icon.color        | #49454F |
| md.comp.button.outlined.selected.icon.color          | #F5EFF7 |

**Disabled**

| Token                                                      | Value   |
|------------------------------------------------------------|---------|
| md.comp.button.outlined.disabled.outline.color             | #CAC4D0 |
| md.comp.button.outlined.unselected.disabled.outline.color  | #CAC4D0 |
| md.comp.button.outlined.selected.disabled.container.color  | #1D1B20 |
| md.comp.button.outlined.disabled.container.opacity         | 0.1     |
| md.comp.button.outlined.disabled.label-text.color          | #1D1B20 |
| md.comp.button.outlined.disabled.label-text.opacity        | 0.38    |
| md.comp.button.outlined.disabled.icon.color                | #1D1B20 |
| md.comp.button.outlined.disabled.icon.opacity              | 0.38    |

**Hovered**

| Token                                                        | Value   |
|--------------------------------------------------------------|---------|
| md.comp.button.outlined.hovered.state-layer.color            | #49454F |
| md.comp.button.outlined.unselected.hovered.state-layer.color | #49454F |
| md.comp.button.outlined.selected.hovered.state-layer.color   | #F5EFF7 |
| md.comp.button.outlined.hovered.state-layer.opacity          | 0.08    |
| md.comp.button.outlined.hovered.outline.color                | #CAC4D0 |
| md.comp.button.outlined.unselected.hovered.outline.color     | #CAC4D0 |
| md.comp.button.outlined.hovered.label-text.color             | #49454F |
| md.comp.button.outlined.unselected.hovered.label-text.color  | #49454F |
| md.comp.button.outlined.selected.hovered.label-text.color    | #F5EFF7 |
| md.comp.button.outlined.hovered.icon.color                   | #49454F |
| md.comp.button.outlined.unselected.hovered.icon.color        | #49454F |
| md.comp.button.outlined.selected.hovered.icon.color          | #F5EFF7 |

**Focused**

| Token                                                        | Value   |
|--------------------------------------------------------------|---------|
| md.comp.button.outlined.focused.state-layer.color            | #49454F |
| md.comp.button.outlined.unselected.focused.state-layer.color | #49454F |
| md.comp.button.outlined.selected.focused.state-layer.color   | #F5EFF7 |
| md.comp.button.outlined.focused.state-layer.opacity          | 0.1     |
| md.comp.button.outlined.focused.outline.color                | #CAC4D0 |
| md.comp.button.outlined.unselected.focused.outline.color     | #CAC4D0 |
| md.comp.button.outlined.focused.label-text.color             | #49454F |
| md.comp.button.outlined.unselected.focused.label-text.color  | #49454F |
| md.comp.button.outlined.selected.focused.label-text.color    | #F5EFF7 |
| md.comp.button.outlined.focused.icon.color                   | #49454F |
| md.comp.button.outlined.unselected.focused.icon.color        | #49454F |
| md.comp.button.outlined.selected.focused.icon.color          | #F5EFF7 |

**Pressed**

| Token                                                        | Value   |
|--------------------------------------------------------------|---------|
| md.comp.button.outlined.pressed.state-layer.color            | #49454F |
| md.comp.button.outlined.unselected.pressed.state-layer.color | #49454F |
| md.comp.button.outlined.selected.pressed.state-layer.color   | #F5EFF7 |
| md.comp.button.outlined.pressed.state-layer.opacity          | 0.1     |
| md.comp.button.outlined.pressed.outline.color                | #CAC4D0 |
| md.comp.button.outlined.unselected.pressed.outline.color     | #CAC4D0 |
| md.comp.button.outlined.pressed.label-text.color             | #49454F |
| md.comp.button.outlined.unselected.pressed.label-text.color  | #49454F |
| md.comp.button.outlined.selected.pressed.label-text.color    | #F5EFF7 |
| md.comp.button.outlined.pressed.icon.color                   | #49454F |
| md.comp.button.outlined.unselected.pressed.icon.color        | #49454F |
| md.comp.button.outlined.selected.pressed.icon.color          | #F5EFF7 |

---

#### Button - Color - Text (Default, Light)

**Enabled**

| Token                              | Value   |
|------------------------------------|---------|
| md.comp.button.text.label-text.color | #6750A4 |
| md.comp.button.text.icon.color       | #6750A4 |

**Disabled**

| Token                                        | Value   |
|----------------------------------------------|---------|
| md.comp.button.text.disabled.container.color   | #1D1B20 |
| md.comp.button.text.disabled.container.opacity | 0.1     |
| md.comp.button.text.disabled.label-text.color  | #1D1B20 |
| md.comp.button.text.disabled.label-text.opacity| 0.38    |
| md.comp.button.text.disabled.icon.color        | #1D1B20 |
| md.comp.button.text.disabled.icon.opacity      | 0.38    |

**Hovered**

| Token                                        | Value   |
|----------------------------------------------|---------|
| md.comp.button.text.hovered.state-layer.color  | #6750A4 |
| md.comp.button.text.hovered.state-layer.opacity| 0.08    |
| md.comp.button.text.hovered.label-text.color   | #6750A4 |
| md.comp.button.text.hovered.icon.color         | #6750A4 |

**Focused**

| Token                                        | Value   |
|----------------------------------------------|---------|
| md.comp.button.text.focused.state-layer.color  | #6750A4 |
| md.comp.button.text.focused.state-layer.opacity| 0.1     |
| md.comp.button.text.focused.label-text.color   | #6750A4 |
| md.comp.button.text.focused.icon.color         | #6750A4 |

**Pressed**

| Token                                        | Value   |
|----------------------------------------------|---------|
| md.comp.button.text.pressed.state-layer.color  | #6750A4 |
| md.comp.button.text.pressed.state-layer.opacity| 0.1     |
| md.comp.button.text.pressed.label-text.color   | #6750A4 |
| md.comp.button.text.pressed.icon.color         | #6750A4 |

---

#### Button - Size - Xsmall (Standard)

| Token                                                               | Value  |
|---------------------------------------------------------------------|--------|
| md.comp.button.xsmall.container.height                              | 32dp   |
| md.comp.button.xsmall.outlined.outline.width                        | 1dp    |
| md.comp.button.xsmall.label-text                                    | Aa     |
| md.comp.button.xsmall.icon.size                                     | 20dp   |
| md.comp.button.xsmall.leading-space                                 | 12dp   |
| md.comp.button.xsmall.icon-label-space                              | 8dp    |
| md.comp.button.xsmall.trailing-space                                | 12dp   |
| md.comp.button.xsmall.pressed.container.corner-size.motion.spring.damping   | 0.9    |
| md.comp.button.xsmall.pressed.container.corner-size.motion.spring.stiffness | 1400   |

---

#### Button - Size - Small (Standard)

| Token                                                              | Value  |
|--------------------------------------------------------------------|--------|
| md.comp.button.small.container.height                              | 40dp   |
| md.comp.button.small.outlined.outline.width                        | 1dp    |
| md.comp.button.small.label-text                                    | Aa     |
| md.comp.button.small.icon.size                                     | 20dp   |
| md.comp.button.small.leading-space                                 | 16dp   |
| md.comp.button.small.icon-label-space                              | 8dp    |
| md.comp.button.small.trailing-space                                | 16dp   |
| md.comp.button.small.pressed.container.corner-size.motion.spring.damping   | 0.9    |
| md.comp.button.small.pressed.container.corner-size.motion.spring.stiffness | 1400   |

---

#### Button - Size - Medium (Standard)

| Token                                                               | Value  |
|---------------------------------------------------------------------|--------|
| md.comp.button.medium.container.height                              | 56dp   |
| md.comp.button.medium.outlined.outline.width                        | 1dp    |
| md.comp.button.medium.label-text                                    | Aa     |
| md.comp.button.medium.icon.size                                     | 24dp   |
| md.comp.button.medium.leading-space                                 | 24dp   |
| md.comp.button.medium.icon-label-space                              | 8dp    |
| md.comp.button.medium.trailing-space                                | 24dp   |
| md.comp.button.medium.pressed.container.corner-size.motion.spring.damping   | 0.9    |
| md.comp.button.medium.pressed.container.corner-size.motion.spring.stiffness | 1400   |

---

#### Button - Size - Large (Standard)

| Token                                                              | Value  |
|--------------------------------------------------------------------|--------|
| md.comp.button.large.container.height                              | 96dp   |
| md.comp.button.large.outlined.outline.width                        | 2dp    |
| md.comp.button.large.label-text                                    | Aa     |
| md.comp.button.large.icon.size                                     | 32dp   |
| md.comp.button.large.leading-space                                 | 48dp   |
| md.comp.button.large.icon-label-space                              | 12dp   |
| md.comp.button.large.trailing-space                                | 48dp   |
| md.comp.button.large.pressed.container.corner-size.motion.spring.damping   | 0.9    |
| md.comp.button.large.pressed.container.corner-size.motion.spring.stiffness | 1400   |

---

#### Button - Size - Xlarge (Standard)

| Token                                                               | Value  |
|---------------------------------------------------------------------|--------|
| md.comp.button.xlarge.container.height                              | 136dp  |
| md.comp.button.xlarge.outlined.outline.width                        | 3dp    |
| md.comp.button.xlarge.label-text                                    | Aa     |
| md.comp.button.xlarge.icon.size                                     | 40dp   |
| md.comp.button.xlarge.leading-space                                 | 64dp   |
| md.comp.button.xlarge.icon-label-space                              | 16dp   |
| md.comp.button.xlarge.trailing-space                                | 64dp   |
| md.comp.button.xlarge.pressed.container.corner-size.motion.spring.damping   | 0.9    |
| md.comp.button.xlarge.pressed.container.corner-size.motion.spring.stiffness | 1400   |

---

### Anatomy

![Diagram labeling 3 parts of a button.](https://lh3.googleusercontent.com/vVI1dXiEpkfp0fUhsnQ_pO8UcdtvWvVpAyQ3kZpslYAkObypS1kuGDoJ3fDcVd0Uat8A5xTrAjiCDeHw8gkVIHaPsnG2mWBCYxgEM5MMwGJf=s0)

1. Container
2. Label text
3. Icon (optional)

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

- There are five built-in button color styles: elevated, filled, tonal, outlined, and text
- The default and toggle buttons use different colors
- Toggle buttons don't use the text style

> Note: These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.

![Diagram shows dark and light color schemes for buttons.](https://lh3.googleusercontent.com/ZM6cXM93L7wPR9MiDLmSiGqioPwTTQKl4WXWWZ3XDyVWtCkGX_ol-BLr8NXvs91sdk3RelSvaneyGpD44VQAdwYYqsfyNat6UhsAJN4OPX_z=s0)

_A. Elevated, B. Filled, C. Tonal, D. Outlined, E. Text - Default, Toggle: unselected, Toggle: selected_

| Style                 | Default                   | Toggle unselected         | Toggle selected    |
|-----------------------|---------------------------|---------------------------|--------------------|
| Elevated container    | Surface container low     | Surface container low     | Primary            |
| Elevated icon & label | Primary                   | Primary                   | On primary         |
| Filled container      | Primary                   | Surface container         | Primary            |
| Filled icon & label   | On primary                | On surface variant        | On primary         |
| Tonal container       | Secondary container       | Secondary container       | Secondary          |
| Tonal icon & label    | On secondary container    | On secondary container    | On secondary       |
| Outline container     | Outline variant (outline) | Outline variant (outline) | Inverse surface    |
| Outlined icon & label | On surface variant        | On surface variant        | Inverse on surface |
| Text icon & label     | Primary                   | --                        | --                 |

### States

States are visual representations used to communicate the status of a component or interactive element.

#### Elevated button states

The elevated button style has an elevation of 1 by default and has no elevation when disabled.

**Default**

![Elevated button states.](https://lh3.googleusercontent.com/k3KL_ghDviZ5fS2RvT0syvaePH29s86o5P0jE8LI6lFibKmdKnksaSN6lu2V-l-M_oJwnYgUklArsWfgnJIM7LdR1_hvcQNhpuawRaWpdyle=s0)

_Enabled, Disabled, Hovered, Focused, Pressed_

**Toggle**

![Toggle elevated button states.](https://lh3.googleusercontent.com/rvb5iQsP5fQ4x1Y8XXPVRYiQbpR96rc7TZ2L4jh6g2vUGhJ-eAAvhRCUg73TULYZhpDX9Px86LJ9SoLOOSlxfOwdvEfd51BXbsnXlNaHRKWi=s0)

_A. Unselected, B. Selected - Enabled, Disabled, Hovered, Focused, Pressed_

#### Filled button states

**Default**

![Filled button states.](https://lh3.googleusercontent.com/gyZ9rwGehmJUfgjq-BCWsP_HDS721DJTGFdkiiG-WQg79ySqKFUDQhwu0kz6s5AkAafWrc3cwbk5gAm8VJm0EP-fzi5Ji4RpDnUoEtFRFf4=s0)

_Enabled, Disabled, Hovered, Focused, Pressed_

**Toggle**

![Toggle filled button states.](https://lh3.googleusercontent.com/k-czt2XcdxC4BDdPtCvt06Ha0RJq7m2EzilHni13-eY0lalc8OYzyvurYhUJ5s_5CfyrBwN5Jq7407y7Kkii0OWHnaukL8O--VnF2DhY14eU=s0)

_A. Unselected, B. Selected - Enabled, Disabled, Hovered, Focused, Pressed_

#### Tonal button states

**Default**

![Tonal button states.](https://lh3.googleusercontent.com/--GyrKMzdXH697yW1JYJRU-29ZFA3rvrAoqb6E3i9Snc2JMMI-SZ8a6L9j8JA6Du-RMFzvIDO0y_ZV6LrlUBd5MRRJYy8o1Dy4vVYgT-hXQ=s0)

_Enabled, Disabled, Hovered, Focused, Pressed_

**Toggle**

![Toggle tonal button states.](https://lh3.googleusercontent.com/e2DkdnVIGe1kG0D1p9Jn0xNsBw15SNvPdAiduO3-Ignc7KICFjLA-Ecxy2n6o5IPtirv5oE_X0jMlcyd8MPwMcgsIzwAVRhEDyrkFThjoTU=s0)

_A. Unselected, B. Selected - Enabled, Disabled, Hovered, Focused, Pressed_

#### Outlined button states

The outlined button's container fill is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed.

**Default**

![Outlined button states.](https://lh3.googleusercontent.com/mhc3SPkZyACY5TjcwGaGEvNSoZvVkdpfjf-l2-7sxbvUDROahw5M_g7P093GkOoimGqn34YEnLKVBMDAYCzc7W69UhQq6Jsm9sCQok2QxjfW=s0)

_Enabled, Disabled, Hovered, Focused, Pressed_

**Toggle**

![Toggle outlined button states.](https://lh3.googleusercontent.com/P6KyONzwpVV9sjgYN7ZdyOD4FoLpsdgaZp7j12m6Ya6-pV7IZniIHo_3mStHAzR-lHwvMqqx8-fwYkq3-3AI3KrlaPXr9k1iXVdeRE_ltjI5Hg=s0)

_A. Unselected, B. Selected - Enabled, Disabled, Hovered, Focused, Pressed_

#### Text button style states

The text button's container is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed. There is no toggle text button.

![Default text button style states.](https://lh3.googleusercontent.com/5SpJ9rRuJK-SMCI1434wzYB_RTXJ5wL_7IeY56p_NWxt5qEO_JSqFlaP1Isnd_8iUaThQDu_rdxS9K68fLvpK0hHZng_MfnLdTa1iBULlOV9=s0)

_Enabled, Disabled, Hovered, Focused, Pressed_

### Shape morph

#### Pressed state

When pressed, buttons can morph to become more square. Both round and square buttons should have the same pressed shape.

The corner radius value differs for each button size. [See full button corner measurements](https://m3.material.io/m3/pages/common-buttons/specs#b1f39738-6f3a-409b-8f08-4cab6d78d756)

![Shape changes of a button.](https://lh3.googleusercontent.com/8nBepkxLTh2-LZw41C57R3sB05HRK8eEhtPonnW84nLHJbq5RvM3hSQbRfeay0TYvDy2Zae4pn3s0PU3UVv8p4JZWoe3nduJScdjQwF1QCkUSw=s0)

_A. Round button, B. Square button - Enabled, Hovered, Pressed_

#### When selected

In addition to changing shape when pressed, toggle buttons also change the resting shape from round (unselected) to square (selected).

If the resting unselected shape is square, the selected shape should be round.

![Shape changes of a toggle button.](https://lh3.googleusercontent.com/aW2UPc0sEnMYT5QYWhDXeSa6Yff4uKzOEgmzJHhYOJT5J8CPoJ4YY8gyDzvFtg9mHhgK3MKsOZHx9xRFn8HYNlL1HlU2MeahrBkThmJVJDY=s0)

_A. Unselected, B. Selected - Enabled, Hovered, Pressed, Selected / unselected_

### Measurements

![Diagram of measurements of all button sizes.](https://lh3.googleusercontent.com/U1HSZvJ64XZAVoKDD7c_aNskPPvKMw7T4dqs4dwruzlFAhdqAaS33FaIwqq5Gt_ba4S5kGnI0x-fmtZcL5rcT4vz0gOPi0TPra9yWf1P2mjd6Q=s0)

_Padding and size measurements of each button size - Extra small, Small, Medium, Large, Extra large_

#### Target areas

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.

![Diagram of small button target areas.](https://lh3.googleusercontent.com/Kasep-SEdWUyUggfzteERh09ncJmgDUhHXT8siwlktcqKqL74LA66SSYlsR9uhuVcvbV7_DMoFknDNKAhP_n8ujKpAc522mekCDAaWMkVYUz-A=s0)

_A. Extra small, B. Small - Round button, Button with icon, Square button_

#### Corner sizes

![Diagram of corner radii of buttons.](https://lh3.googleusercontent.com/kKTL_UCWMxbciYbRgSPsv935B-pm5bidxEORTK0GjJNTClRuwPinW-rgkFOI3uGip6oXh_G41hMIqhFmMLIHxFDWyQualCPJaR-bYxHxWyU=s0)

|                  | XS   | S    | M    | L    | XL   |
|------------------|------|------|------|------|------|
| A. Round button  | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp  | 8dp  | 12dp | 16dp | 16dp |
