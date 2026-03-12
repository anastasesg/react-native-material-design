---
url: https://m3.material.io/components/snackbar/specs
lastmod: 2026-01-26
crawled_at: 2026-03-08T00:15:00.000Z
category: components
section: snackbar
page_type: specs
status: complete
---

# Snackbar - Specs

Snackbars show short updates about app processes at the bottom of the screen.

## Anatomy

![Diagram of snackbar indicating the four parts of its anatomy](https://lh3.googleusercontent.com/oe-jEgmWKP97u0jsjhWPp2985Zn00p4FweCCB7iQbvx_xh1kkNRctD67TGEeJU_on8ch67ncdBPf84JXcOvaNlSmUXC8ypG3_32cRuGMlhN7=s0)

1. Container
2. Icon (optional close affordance)
3. Action (optional)
4. Supporting text

## Tokens and specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Snackbars

#### Enabled

##### Container

| Token                                                | Value             |
| ---------------------------------------------------- | ----------------- |
| `md.comp.snackbar.container.color`                   | #322F35           |
| `md.comp.snackbar.container.shadow-color`            | #000000           |
| `md.comp.snackbar.container.elevation`               | Level 3 (6dp)     |
| `md.comp.snackbar.container.shape`                   | Extra small (4dp) |
| `md.comp.snackbar.with-single-line.container.height` | 48dp              |
| `md.comp.snackbar.with-two-lines.container.height`   | 68dp              |

##### Label text (Action)

| Token                                            | Value       |
| ------------------------------------------------ | ----------- |
| `md.comp.snackbar.action.label-text.type`        | Label large |
| `md.comp.snackbar.action.label-text.color`       | #D0BCFF     |
| `md.comp.snackbar.action.label-text.font`        | Roboto      |
| `md.comp.snackbar.action.label-text.line-height` | 20pt        |
| `md.comp.snackbar.action.label-text.size`        | 14pt        |
| `md.comp.snackbar.action.label-text.tracking`    | 0.1pt       |
| `md.comp.snackbar.action.label-text.weight`      | 500         |

##### Icon

| Token                         | Value   |
| ----------------------------- | ------- |
| `md.comp.snackbar.icon.color` | #F5EFF7 |
| `md.comp.snackbar.icon.size`  | 24dp    |

##### Supporting text

| Token                                          | Value       |
| ---------------------------------------------- | ----------- |
| `md.comp.snackbar.supporting-text.type`        | Body medium |
| `md.comp.snackbar.supporting-text.color`       | #F5EFF7     |
| `md.comp.snackbar.supporting-text.font`        | Roboto      |
| `md.comp.snackbar.supporting-text.line-height` | 20pt        |
| `md.comp.snackbar.supporting-text.size`        | 14pt        |
| `md.comp.snackbar.supporting-text.tracking`    | 0.25pt      |
| `md.comp.snackbar.supporting-text.weight`      | 400         |

---

#### Hovered

##### Label text (Action)

| Token                                            | Value   |
| ------------------------------------------------ | ------- |
| `md.comp.snackbar.action.hover.label-text.color` | #D0BCFF |

##### State layer

| Token                                               | Value   |
| --------------------------------------------------- | ------- |
| `md.comp.snackbar.action.hover.state-layer.color`   | #D0BCFF |
| `md.comp.snackbar.action.hover.state-layer.opacity` | 0.08    |
| `md.comp.snackbar.icon.hover.state-layer.color`     | #F5EFF7 |
| `md.comp.snackbar.icon.hover.state-layer.opacity`   | 0.08    |

##### Icon

| Token                                    | Value   |
| ---------------------------------------- | ------- |
| `md.comp.snackbar.icon.hover.icon.color` | #F5EFF7 |

---

#### Focused

##### Label text (Action)

| Token                                            | Value   |
| ------------------------------------------------ | ------- |
| `md.comp.snackbar.action.focus.label-text.color` | #D0BCFF |

##### State layer

| Token                                               | Value   |
| --------------------------------------------------- | ------- |
| `md.comp.snackbar.action.focus.state-layer.color`   | #D0BCFF |
| `md.comp.snackbar.action.focus.state-layer.opacity` | 0.1     |
| `md.comp.snackbar.icon.focus.state-layer.color`     | #F5EFF7 |
| `md.comp.snackbar.icon.focus.state-layer.opacity`   | 0.1     |

##### Icon

| Token                                    | Value   |
| ---------------------------------------- | ------- |
| `md.comp.snackbar.icon.focus.icon.color` | #F5EFF7 |

---

#### Pressed (ripple)

##### Label text (Action)

| Token                                              | Value   |
| -------------------------------------------------- | ------- |
| `md.comp.snackbar.action.pressed.label-text.color` | #D0BCFF |

##### State layer

| Token                                                 | Value   |
| ----------------------------------------------------- | ------- |
| `md.comp.snackbar.action.pressed.state-layer.color`   | #D0BCFF |
| `md.comp.snackbar.action.pressed.state-layer.opacity` | 0.1     |
| `md.comp.snackbar.icon.pressed.state-layer.color`     | #F5EFF7 |
| `md.comp.snackbar.icon.pressed.state-layer.opacity`   | 0.1     |

##### Icon

| Token                                      | Value   |
| ------------------------------------------ | ------- |
| `md.comp.snackbar.icon.pressed.icon.color` | #F5EFF7 |

---

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![Diagram of snackbar indicating color and inverse text and labels](https://lh3.googleusercontent.com/TqN2bvamEg2OcfPTmDLrFjMzDjDhfoX3dVbCgn4qqFArx765sDUaubGeUw0RiTFP6y83dAh3XIhj8zds2PAmADSgaUSkxhWjYLzElENX55ca=s0)

_Snackbar color roles used for light and dark schemes:_

- Inverse surface
- Inverse on surface
- Inverse primary
- Inverse on surface

## Measurements

![Diagram of snackbar with action](https://lh3.googleusercontent.com/n1bxJJHcB0rD_PQuOaQL4U-nFlVYJ27WJyM-bsxB1Es0KgiWp-4UDnXLHUIMA42rrSWGNZ7nYCQGRNj5hemAC1g672z6akYe7iX1pv0113Q=s0)

_Snackbar padding and size measurements_

## Configurations

![5 snackbar configurations.](https://lh3.googleusercontent.com/Pd1qLYMI80pcYjx89JXrogC_QiOljw2S1pbGruxLf1oJu_bQnZBwoBxb7V3AnPcV-piQUix6mCFtdBH73KWXOmBI-Svt8rcfh8sRwlh6yJ26dg=s0)

- Single line
- Single line with action
- Two lines
- Two lines with action
- Two lines with longer action
