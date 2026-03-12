---
url: https://m3.material.io/components/segmented-buttons/specs
lastmod: 2025-09-26
crawled_at: 2026-02-04T00:00:00.000Z
category: components
section: segmented-buttons
page_type: specs
status: complete
---

# Segmented buttons

Segmented buttons help people select options, switch views, or sort elements.

> **Note:** Segmented buttons are being deprecated in the Material 3 expressive update. For those who have updated, use the [connected button group](https://m3.material.io/m3/pages/button-groups/overview/) instead, which has mostly the same functionality but with an updated visual design.

## Anatomy

![Diagram of segmented button indicating 3 parts of its anatomy.](https://lh3.googleusercontent.com/C6AHlXtNzhGMs8gghgCKSba6mwIpYO0fiDnecohrFF3YJraSvBsQL-eXZnCvQJIU9AqRNgtrrvetX0I4UXwI1JyPxy4_rLYmSlkmsr73D_o=s0)

1. Container
2. Icon (optional for unselected state)
3. Label text

## Tokens and specs

There's one token set for segmented buttons. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Segmented button - Outlined

#### Enabled / Container

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button outline color | `md.comp.outlined-segmented-button.outline.color` | #79747E |
| Outlined segmented button outline width | `md.comp.outlined-segmented-button.outline.width` | 1dp |
| Outlined segmented button container height | `md.comp.outlined-segmented-button.container.height` | 40dp |
| Outlined segmented button selected container color | `md.comp.outlined-segmented-button.selected.container.color` | #E8DEF8 |
| Outlined segmented button shape | `md.comp.outlined-segmented-button.shape` | Full |

#### Enabled / Label text

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button unselected label text color | `md.comp.outlined-segmented-button.unselected.label-text.color` | #1D1B20 |
| Outlined segmented button selected label text color | `md.comp.outlined-segmented-button.selected.label-text.color` | #4A4458 |
| Outlined segmented button label text font | `md.comp.outlined-segmented-button.label-text.font` | Roboto |
| Outlined segmented button label text line height | `md.comp.outlined-segmented-button.label-text.line-height` | 20pt |
| Outlined segmented button label text size | `md.comp.outlined-segmented-button.label-text.size` | 14pt |
| Outlined segmented button label text tracking | `md.comp.outlined-segmented-button.label-text.tracking` | 0.1pt |
| Outlined segmented button label text weight | `md.comp.outlined-segmented-button.label-text.weight` | 500 |

#### Enabled / Icon

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button unselected icon color | `md.comp.outlined-segmented-button.unselected.with-icon.icon.color` | #1D1B20 |
| Outlined segmented button selected icon color | `md.comp.outlined-segmented-button.selected.with-icon.icon.color` | #4A4458 |
| Outlined segmented button icon size | `md.comp.outlined-segmented-button.with-icon.icon.size` | 18dp |

#### Disabled / Container

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button disabled outline color | `md.comp.outlined-segmented-button.disabled.outline.color` | #1D1B20 |
| Outlined segmented button disabled outline opacity | `md.comp.outlined-segmented-button.disabled.outline.opacity` | 0.12 |

#### Disabled / Label text

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button disabled label text color | `md.comp.outlined-segmented-button.disabled.label-text.color` | #1D1B20 |
| Outlined segmented button disabled label text opacity | `md.comp.outlined-segmented-button.disabled.label-text.opacity` | 0.38 |

#### Disabled / Icon

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button disabled icon color | `md.comp.outlined-segmented-button.disabled.icon.color` | #1D1B20 |
| Outlined segmented button disabled icon opacity | `md.comp.outlined-segmented-button.disabled.icon.opacity` | 0.38 |

#### Hovered / Label text

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button unselected hover label text color | `md.comp.outlined-segmented-button.unselected.hover.label-text.color` | #1D1B20 |
| Outlined segmented button selected hover label text color | `md.comp.outlined-segmented-button.selected.hover.label-text.color` | #4A4458 |

#### Hovered / State layer

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button unselected hover state layer color | `md.comp.outlined-segmented-button.unselected.hover.state-layer.color` | #1D1B20 |
| Outlined segmented button selected hover state layer color | `md.comp.outlined-segmented-button.selected.hover.state-layer.color` | #4A4458 |
| Outlined segmented button hover state layer opacity | `md.comp.outlined-segmented-button.hover.state-layer.opacity` | 0.08 |

#### Hovered / Icon

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button unselected hover icon color | `md.comp.outlined-segmented-button.unselected.hover.icon.color` | #1D1B20 |
| Outlined segmented button selected hover icon color | `md.comp.outlined-segmented-button.selected.hover.icon.color` | #4A4458 |

#### Focused / Focus indicator

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button focus indicator color | `md.comp.outlined-segmented-button.focus.indicator.color` | #625B71 |
| Outlined segmented button focus indicator thickness | `md.comp.outlined-segmented-button.focus.indicator.thickness` | 3dp |
| Outlined segmented button focus indicator offset | `md.comp.outlined-segmented-button.focus.indicator.outline.offset` | 2dp |

#### Focused / Label text

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button unselected focus label text color | `md.comp.outlined-segmented-button.unselected.focus.label-text.color` | #1D1B20 |
| Outlined segmented button selected focus label text color | `md.comp.outlined-segmented-button.selected.focus.label-text.color` | #4A4458 |

#### Focused / State layer

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button unselected focus state layer color | `md.comp.outlined-segmented-button.unselected.focus.state-layer.color` | #1D1B20 |
| Outlined segmented button selected focus state layer color | `md.comp.outlined-segmented-button.selected.focus.state-layer.color` | #4A4458 |
| Outlined segmented button focus state layer opacity | `md.comp.outlined-segmented-button.focus.state-layer.opacity` | 0.1 |

#### Focused / Icon

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button unselected focus icon color | `md.comp.outlined-segmented-button.unselected.focus.icon.color` | #1D1B20 |
| Outlined segmented button selected focus icon color | `md.comp.outlined-segmented-button.selected.focus.icon.color` | #4A4458 |

#### Pressed / Label text

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button unselected pressed label text color | `md.comp.outlined-segmented-button.unselected.pressed.label-text.color` | #1D1B20 |
| Outlined segmented button selected pressed label text color | `md.comp.outlined-segmented-button.selected.pressed.label-text.color` | #4A4458 |

#### Pressed / State layer

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button unselected pressed state layer color | `md.comp.outlined-segmented-button.unselected.pressed.state-layer.color` | #1D1B20 |
| Outlined segmented button selected pressed state layer color | `md.comp.outlined-segmented-button.selected.pressed.state-layer.color` | #4A4458 |
| Outlined segmented button pressed state layer opacity | `md.comp.outlined-segmented-button.pressed.state-layer.opacity` | 0.1 |

#### Pressed / Icon

| Name | Token | Value (Light) |
| --- | --- | --- |
| Outlined segmented button unselected pressed icon color | `md.comp.outlined-segmented-button.unselected.pressed.icon.color` | #1D1B20 |
| Outlined segmented button selected pressed icon color | `md.comp.outlined-segmented-button.selected.pressed.icon.color` | #4A4458 |

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![Diagram of segmented button indicating its color mappings](https://lh3.googleusercontent.com/YDundjWkMlYTm9ZC1RERNdV1PS0i86yel8Qe8OjWM7OEoMRC2frzBJzmqAywQu1BSW2eAP2ITtJk4A5aKZTS8GtaMqkR4uipO8VZMqGvMzAg=s0)

_Segmented button color roles used for light and dark schemes:_

- On surface
- Outline
- Secondary container
- On secondary container

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

### Unselected

![Side by side view of segmented buttons with 5 unselected states.](https://lh3.googleusercontent.com/-uNJiGxEkqwavKi0rqCcQ6_NTV7HdAQ9_eZ9b40fw_6Ij00V60BU3iLu88EgzvFUO0prwPdmKRKoc6KiuVmTZLUTsStYc8PArd4Y2C6G6ts=s0)

_Unselected button states:_

- Enabled
- Disabled
- Hovered
- Focused
- Pressed

### Selected

![Side by side view of segmented buttons with 4 selected states.](https://lh3.googleusercontent.com/PMYMRAaXu4kiEdyI_9iuWFzh9CDRnmy7VqZ7H34w8Y2jeJy0KUUZekkTUR35ISHPJxnChOXSeLwkG2VHsL8vT3CayNNfqNbNr1ptUwhBbG4=s0)

_Selected button states:_

- Selected
- Hovered on selected
- Focused on selected
- Pressed on selected

## Measurements

![Diagram indicating layout values, paddings, and target size for segmented buttons](https://lh3.googleusercontent.com/xh0BqQ8B5Up0FqznJ5EqnpnpDEViXlKO8kUloyeCQ_NAquc5OCy0GjIwaU8wONO9x20Vah5cCnua4zuYTWF7UhAVD3HUTyUT_c0wjtz-aMg=s0)

_Padding and container size / Target size_

| Attribute | Value |
| --- | --- |
| Container width | Dynamic based on labels |
| Segment width | Container width / total segments (Example: 1/3) |
| Height | 40dp |
| Outline width | 1dp |
| Label alignment | Center |
| Left/right padding | Min 12dp |
| Padding between elements | 8dp |
| Target size | 48dp |

### Density

Density can be used in denser UIs where space is limited. Density is only applied to the height.

![Side by side view of segmented buttons with 4 different density heights](https://lh3.googleusercontent.com/gaOReQpJgFqk-nmLLFHu7hpIFV9BQ6hqnVt8oSC0ZsgpMaeDzc9y-FIcDnkTciniAxMCpPfWD4RMFaEsz33-jSVweXp8mTxgiiL1tPiAATSUWw=s0)

_Each step down in density removes 4dp from the height_
