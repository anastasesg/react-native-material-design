---
url: https://m3.material.io/components/dialogs/specs
lastmod: 2025-12-01
crawled_at: 2026-03-08T00:19:00.000Z
category: components
section: dialogs
page_type: specs
status: complete
---

# Dialogs

Dialogs provide important prompts in a user flow

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values.

### Dialog - Basic

**Enabled / Container**

| Token                                             | Value                |
| ------------------------------------------------- | -------------------- |
| md.comp.dialog.container.color                    | #ECE6F0              |
| md.comp.dialog.container.elevation                |                      |
| md.comp.dialog.container.surface-tint-layer.color | #6750A4 (deprecated) |
| md.comp.dialog.container.shape                    |                      |

**Enabled / Label text**

| Token                                        | Value   |
| -------------------------------------------- | ------- |
| md.comp.dialog.action.label-text.font        | Roboto  |
| md.comp.dialog.action.label-text.line-height | 20pt    |
| md.comp.dialog.action.label-text.size        | 14pt    |
| md.comp.dialog.action.label-text.weight      | 500     |
| md.comp.dialog.action.label-text.tracking    | 0.1pt   |
| md.comp.dialog.action.label-text.type        |         |
| md.comp.dialog.action.label-text.color       | #6750A4 |

**Enabled / Icon**

| Token                               | Value   |
| ----------------------------------- | ------- |
| md.comp.dialog.with-icon.icon.size  | 24dp    |
| md.comp.dialog.with-icon.icon.color | #625B71 |

**Enabled / Subhead (deprecated)**

| Token                              | Value   |
| ---------------------------------- | ------- |
| md.comp.dialog.subhead.font        | Roboto  |
| md.comp.dialog.subhead.line-height | 32pt    |
| md.comp.dialog.subhead.size        | 24pt    |
| md.comp.dialog.subhead.weight      | 400     |
| md.comp.dialog.subhead.tracking    | 0       |
| md.comp.dialog.subhead.type        |         |
| md.comp.dialog.subhead.color       | #1D1B20 |

**Enabled / Headline**

| Token                               | Value   |
| ----------------------------------- | ------- |
| md.comp.dialog.headline.font        | Roboto  |
| md.comp.dialog.headline.line-height | 32pt    |
| md.comp.dialog.headline.size        | 24pt    |
| md.comp.dialog.headline.weight      | 400     |
| md.comp.dialog.headline.tracking    | 0       |
| md.comp.dialog.headline.type        |         |
| md.comp.dialog.headline.color       | #1D1B20 |

**Enabled / Divider (deprecated)**

| Token                                      | Value   |
| ------------------------------------------ | ------- |
| md.comp.dialog.with-divider.divider.color  | #79747E |
| md.comp.dialog.with-divider.divider.height | 1dp     |

**Enabled / Supporting text**

| Token                                      | Value   |
| ------------------------------------------ | ------- |
| md.comp.dialog.supporting-text.font        | Roboto  |
| md.comp.dialog.supporting-text.line-height | 20pt    |
| md.comp.dialog.supporting-text.size        | 14pt    |
| md.comp.dialog.supporting-text.weight      | 400     |
| md.comp.dialog.supporting-text.tracking    | 0.25pt  |
| md.comp.dialog.supporting-text.type        |         |
| md.comp.dialog.supporting-text.color       | #49454F |

**Hovered / Label text**

| Token                                        | Value   |
| -------------------------------------------- | ------- |
| md.comp.dialog.action.hover.label-text.color | #6750A4 |

**Hovered / State layer**

| Token                                           | Value   |
| ----------------------------------------------- | ------- |
| md.comp.dialog.action.hover.state-layer.color   | #6750A4 |
| md.comp.dialog.action.hover.state-layer.opacity | 0.08    |

**Focused / Label text**

| Token                                        | Value   |
| -------------------------------------------- | ------- |
| md.comp.dialog.action.focus.label-text.color | #6750A4 |

**Focused / State layer**

| Token                                           | Value   |
| ----------------------------------------------- | ------- |
| md.comp.dialog.action.focus.state-layer.color   | #6750A4 |
| md.comp.dialog.action.focus.state-layer.opacity | 0.1     |

**Pressed (ripple) / Label text**

| Token                                          | Value   |
| ---------------------------------------------- | ------- |
| md.comp.dialog.action.pressed.label-text.color | #6750A4 |

**Pressed (ripple) / State layer**

| Token                                             | Value   |
| ------------------------------------------------- | ------- |
| md.comp.dialog.action.pressed.state-layer.color   | #6750A4 |
| md.comp.dialog.action.pressed.state-layer.opacity | 0.1     |

---

### Dialog - Full screen

**Enabled / Container**

| Token                                                                | Value                |
| -------------------------------------------------------------------- | -------------------- |
| md.comp.full-screen-dialog.header.on-scroll.container.color          | #F3EDF7              |
| md.comp.full-screen-dialog.container.color                           | #FEF7FF              |
| md.comp.full-screen-dialog.container.elevation                       |                      |
| md.comp.full-screen-dialog.container.shape                           |                      |
| md.comp.full-screen-dialog.header.container.height                   | 56dp                 |
| md.comp.full-screen-dialog.header.container.color                    | #FEF7FF              |
| md.comp.full-screen-dialog.header.container.elevation                |                      |
| md.comp.full-screen-dialog.header.container.surface-tint-layer.color | #6750A4 (deprecated) |
| md.comp.full-screen-dialog.header.on-scroll.container.elevation      |                      |
| md.comp.full-screen-dialog.action-bar.container.height               | 56dp (deprecated)    |
| md.comp.full-screen-dialog.action-bar.container.color                | #FEF7FF (deprecated) |
| md.comp.full-screen-dialog.action-bar.container.elevation            | (deprecated)         |
| md.comp.full-screen-dialog.action-bar.on-scroll.container.elevation  | (deprecated)         |

**Enabled / Label text**

| Token                                                           | Value                |
| --------------------------------------------------------------- | -------------------- |
| md.comp.full-screen-dialog.header.action.label-text.font        | Roboto               |
| md.comp.full-screen-dialog.header.action.label-text.line-height | 20pt                 |
| md.comp.full-screen-dialog.header.action.label-text.size        | 14pt                 |
| md.comp.full-screen-dialog.header.action.label-text.weight      | 500                  |
| md.comp.full-screen-dialog.header.action.label-text.tracking    | 0.1pt                |
| md.comp.full-screen-dialog.header.action.label-text.type        |                      |
| md.comp.full-screen-dialog.header.action.label-text.color       | #6750A4              |
| md.comp.full-screen-dialog.action-bar.label-text.font           | Roboto (deprecated)  |
| md.comp.full-screen-dialog.action-bar.label-text.line-height    | 20pt (deprecated)    |
| md.comp.full-screen-dialog.action-bar.label-text.size           | 14pt (deprecated)    |
| md.comp.full-screen-dialog.action-bar.label-text.weight         | 500 (deprecated)     |
| md.comp.full-screen-dialog.action-bar.label-text.tracking       | 0.1pt (deprecated)   |
| md.comp.full-screen-dialog.action-bar.label-text.type           | (deprecated)         |
| md.comp.full-screen-dialog.action-bar.label-text.color          | #6750A4 (deprecated) |

**Enabled / Icon**

| Token                                        | Value   |
| -------------------------------------------- | ------- |
| md.comp.full-screen-dialog.header.icon.color | #1D1B20 |
| md.comp.full-screen-dialog.header.icon.size  | 24dp    |

**Enabled / Headline**

| Token                                                  | Value   |
| ------------------------------------------------------ | ------- |
| md.comp.full-screen-dialog.header.headline.color       | #1D1B20 |
| md.comp.full-screen-dialog.header.headline.font        | Roboto  |
| md.comp.full-screen-dialog.header.headline.line-height | 28pt    |
| md.comp.full-screen-dialog.header.headline.size        | 22pt    |
| md.comp.full-screen-dialog.header.headline.weight      | 400     |
| md.comp.full-screen-dialog.header.headline.tracking    | 0       |
| md.comp.full-screen-dialog.header.headline.type        |         |

**Enabled / Divider (deprecated)**

| Token                                                  | Value   |
| ------------------------------------------------------ | ------- |
| md.comp.full-screen-dialog.with-divider.divider.color  | #E7E0EC |
| md.comp.full-screen-dialog.with-divider.divider.height | 1dp     |

**Hovered / Label text**

| Token                                                           | Value                |
| --------------------------------------------------------------- | -------------------- |
| md.comp.full-screen-dialog.header.action.hover.label-text.color | #6750A4              |
| md.comp.full-screen-dialog.action-bar.hover.label-text.color    | #6750A4 (deprecated) |

**Hovered / State layer**

| Token                                                              | Value                |
| ------------------------------------------------------------------ | -------------------- |
| md.comp.full-screen-dialog.header.action.hover.state-layer.color   | #6750A4              |
| md.comp.full-screen-dialog.header.action.hover.state-layer.opacity | 0.08                 |
| md.comp.full-screen-dialog.action-bar.hover.state-layer.color      | #6750A4 (deprecated) |
| md.comp.full-screen-dialog.action-bar.hover.state-layer.opacity    | 0.08 (deprecated)    |

**Focused / Label text**

| Token                                                           | Value                |
| --------------------------------------------------------------- | -------------------- |
| md.comp.full-screen-dialog.header.action.focus.label-text.color | #6750A4              |
| md.comp.full-screen-dialog.action-bar.focus.label-text.color    | #6750A4 (deprecated) |

**Focused / State layer**

| Token                                                              | Value                |
| ------------------------------------------------------------------ | -------------------- |
| md.comp.full-screen-dialog.header.action.focus.state-layer.color   | #6750A4              |
| md.comp.full-screen-dialog.header.action.focus.state-layer.opacity | 0.1                  |
| md.comp.full-screen-dialog.action-bar.focus.state-layer.color      | #6750A4 (deprecated) |
| md.comp.full-screen-dialog.action-bar.focus.state-layer.opacity    | 0.1 (deprecated)     |

**Pressed (ripple) / Label text**

| Token                                                             | Value                |
| ----------------------------------------------------------------- | -------------------- |
| md.comp.full-screen-dialog.header.action.pressed.label-text.color | #6750A4              |
| md.comp.full-screen-dialog.action-bar.pressed.label-text.color    | #6750A4 (deprecated) |

**Pressed (ripple) / State layer**

| Token                                                                | Value                |
| -------------------------------------------------------------------- | -------------------- |
| md.comp.full-screen-dialog.header.action.pressed.state-layer.color   | #6750A4              |
| md.comp.full-screen-dialog.header.action.pressed.state-layer.opacity | 0.1                  |
| md.comp.full-screen-dialog.action-bar.pressed.state-layer.color      | #6750A4 (deprecated) |
| md.comp.full-screen-dialog.action-bar.pressed.state-layer.opacity    | 0.1 (deprecated)     |

---

## Basic dialogs

### Anatomy

![Anatomy diagram numbering dialog elements.](https://lh3.googleusercontent.com/8zwGCq50u42Pisi3XIhquY9uN3sTnFAYcLYzdMcQ-7RGPou4Uyy5QzWjN3NWXlHALJhtxMM-lECAxX1_duYupPka9gdFn-THeTzCdggkOUit=s0)

1. Container
2. Icon (optional)
3. Headline (optional)
4. Supporting text
5. Divider (optional)
6. Button label text
7. Scrim

### Basic dialog color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Color mapping diagram labeling 6 color roles across the dialog and scrim.](https://lh3.googleusercontent.com/OaqvzKCkUteypP4OIa5ABlelFupDNk5XXyc8cxl0SYBNXCJPqROSqNWKjvxWk1FJpSzOwqADZvwMhPgqsgj5tbMKKdvS8L1YWWmSvJ-sDi2K=s0)

_Basic dialog color roles used for light and dark themes:_

- Surface container high
- Secondary
- On surface
- On surface variant
- Primary
- Scrim

### Basic dialog measurements

![Annotated diagram showing padding values.](https://lh3.googleusercontent.com/0b11O-Tlquj7LEzCkk4IOw1EuhHgUI6KmNyMozEEr2aANs_Q3FshFNUhXzUkn2c3occn1_9y1XSndIceqhSPiMyAT4g5lr6xwcWZtqCvpNdnHw=s0)

_Basic dialog padding and size measurements_

| Attribute                        | Value                |
| -------------------------------- | -------------------- |
| Container shape                  | 28dp corner radius   |
| Container height                 | Dynamic              |
| Container width                  | Min 280dp; Max 560dp |
| Divider height                   | 1dp                  |
| Icon size                        | 24dp                 |
| Minimum width                    | 280dp                |
| Maximum width                    | 560dp                |
| Alignment with icon              | Center-aligned       |
| Alignment without icon           | Start-aligned        |
| Top/Left/right/bottom padding    | 24dp                 |
| Padding between buttons          | 8dp                  |
| Padding between title and body   | 16dp                 |
| Padding between icon and title   | 16dp                 |
| Padding between body and actions | 24dp                 |

## Full-screen dialogs

### Anatomy

![Diagram numbering 6 full-screen dialog elements.](https://lh3.googleusercontent.com/DkDLF7N_cYRseSctPY0mcn5UU3s5M37UtbNZCMovSLfZacqNP1ZR-1ur4muZ0RXpZAxdcqi65q7Uc7GRZiLumQhf54hpWiUNMxgJbJNEIzc8RQ=s0)

1. Container
2. Header
3. Icon (close affordance)
4. Headline (optional)
5. Text button
6. Divider (optional)

### Full-screen dialog color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

![Color mapping diagram shows 5 callout markers across the dialog.](https://lh3.googleusercontent.com/i7xYaPoPLi48zudMGabAj82oZQLxetMFg4YojUXfY9GlrVVdonnVQurEssQzX0LHqABfe9QcTts3lMtKa_-jYDektbV8HGkmAIKkiDuF573F8g=s0)

_Full-screen dialog color roles used for light and dark themes:_

- Surface container high
- On surface
- On surface
- Primary
- On surface variant

### Full-screen dialog measurements

![Diagram noting layout measurements for padding values, title, height, and action regions.](https://lh3.googleusercontent.com/5vPLkkKzW-CnlkhE29h4YwG8QzCsM7QdxQpOS0hRO82Ox4D7VqBbZgPWKd2nHnj916gkB29tjl7k_fnuuffRyMGOmS9Xg_MJpMIsMWY-Meo=s0)

_Full-screen dialog padding and size measurements_

| Attribute                    | Value                      |
| ---------------------------- | -------------------------- |
| Container shape              | 0dp corner radius          |
| Container height             | Dynamic                    |
| Container width              | Container width; Max 560dp |
| Header height                | 56dp                       |
| Header width                 | Container width            |
| Headline text alignment      | Start-aligned              |
| Divider height               | 1dp                        |
| Icon (close affordance) size | 24dp                       |
| Bottom action bar height     | 56dp                       |
| Bottom action bar width      | Container width            |
| Top/left/right padding       | 24dp                       |
| Padding between elements     | 8dp                        |
