---
url: https://m3.material.io/components/tabs/specs
lastmod: 2026-01-27
crawled_at: 2026-03-10T00:00:00.000Z
category: components
section: tabs
page_type: specs
status: complete
---

# Tabs Specs

Tabs organize content across different screens and views.

## Tokens and specs

Select a component variant below to see its elements, attributes, tokens, and their values.

---

## Primary tabs

![6 elements of primary tabs.](https://lh3.googleusercontent.com/0bS99kVjUnrfIUIKGAMWl8zeoYciELsgT5jPWeC4JJ9gcDC2cfnKH-p9qOYsX0OJ000ePPYMARw_YXMtax_UeITNCH-W5hn03wKl-nl0Al9scw=s0)

**Elements:**

- Container
- Badge (optional)
- Icon (optional)
- Label
- Divider
- Active indicator

### Primary tabs color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![7 color roles applied to primary tabs in light and dark themes.](https://lh3.googleusercontent.com/dmXLWuK2u_6U_iIQaK_nWtayfYfcfZU6mZyf5IAPmgu9y14-Puo51QN7a74fZJ34z0ESD88OfHOvUOFcnTpSARGU9yDXHPUQrcBqledF6BA=s0)

**Primary tab color roles used for light and dark schemes:**

- Surface
- Primary
- Primary
- On surface variant
- On surface variant
- Outline variant
- Primary

### Primary tabs states

![Diagram of all primary tab states in both light and dark mode](https://lh3.googleusercontent.com/SVFdAJr5_8cGN6FTMVabD3nie8TwI7380y6PuVzSxatYH1YBsdf49aWd1upXNO7uDcsKDd8Uge2WtDUPtTtnuFCKKgIk-q6iraC6rfP8bcY=s0)

**States:**

- Enabled (active destination)
- Hover (active destination)
- Focused (active destination)
- Pressed (active destination)
- Enabled (inactive destination)
- Hover (inactive destination)
- Focused (inactive destination)
- Pressed (inactive destination)

---

## Secondary tabs

![5 elements of secondary tabs.](https://lh3.googleusercontent.com/kyON5nMIlowboe0XsmPdlYKlFdIzCFTab9gzT4uEJtS2WMvRd1uBJHEMDDOKujs1u1iJYlb66cSc7LBfMuN9F3HRwocQhsYw0wvUW2lQxuBM=s0)

**Elements:**

- Container
- Badge (optional)
- Label
- Divider
- Active indicator

### Secondary tabs color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![5 color roles applied to secondary tabs in light and dark themes.](https://lh3.googleusercontent.com/mrLdFHBC7H_M0bhZxPDT-VaJeoB01vnZMaY_9Pyj_EenTQbIT6OO75CWFdZLyvMxD0ycppRCoWXustGmsKh3K3M8CALUwNj7knXGU6JyrGb5=s0)

**Secondary tab color roles used for light and dark schemes:**

- Surface
- On surface
- On surface variant
- Outline variant
- Primary

### Secondary tabs states

![Diagram of all secondary tab states in both light and dark mode](https://lh3.googleusercontent.com/oEbOwsXXP2m1EE9Sh7tJFcTP1GIHVkX6lbOkKN-gdwnF4WbJnoyezqHEr1rtaeAPTY2cHj6txNpy91YgYRVCBqht87aUU6VlIwJg1rnvvniy=s0)

**States:**

- Enabled (active destination)
- Hover (active destination)
- Focused (active destination)
- Pressed (active destination)
- Enabled (inactive destination)
- Hover (inactive destination)
- Focused (inactive destination)
- Pressed (inactive destination)

---

## Measurements

![Diagram of measurements for four and two tabs per container, including icon and label placement.](https://lh3.googleusercontent.com/KNDnEXfu6HZxqBLD84eQfamUeoe8b_N3wygSYqpk5Hq1MxT7_9RNL34wYce0tPDml6rb6lP7cQO8lYhxEcPOOXIGAmb3ArqY-ay-lDUzbqoW=s0)

Tabs are divided into equal sections, with labels and icons positioned vertically centered. The divider is included in the height, placed inside the container.

![Diagram of Primary tab active indicator measurements.](https://lh3.googleusercontent.com/lEVgg_QRIKA7HpYLAWEddeY7ZCHa5FmlPc1K3C0yx1c5cmW_wxci7cAmdW_55RvUextO4vEHupXxMrWXSna4BHfO7UcWU9Q_QKrk2LESoMbVoA=s0)

Primary tab active indicators are inset 2dp on each side, have a fully rounded corner radius, and a minimum length of 24dp.

| Attribute                              | Value      |
| -------------------------------------- | ---------- |
| Container height (label text only)     | 48dp       |
| Container height (icon and label text) | 64dp       |
| Icon size                              | 24dp       |
| Divider height                         | 1dp        |
| Primary active indicator height        | 3dp        |
| Secondary active indicator height      | 2dp        |
| Active indicator shape                 | 3, 3, 0, 0 |
| Active indicator minimum length        | 24dp       |
| Padding between inline icon and text   | 8dp        |
| Padding between inline text and badge  | 4dp        |
| Overlap of badge on stacked icon       | 6dp        |

---

## Tabs - Primary navigation tokens

### Enabled

#### Container

| Token                                                                      | Value             |
| -------------------------------------------------------------------------- | ----------------- |
| `md.comp.primary-navigation-tab.container.color`                           | #FEF7FF           |
| `md.comp.primary-navigation-tab.container.shape`                           | (shape token)     |
| `md.comp.primary-navigation-tab.container.height`                          | 48dp              |
| `md.comp.primary-navigation-tab.with-icon-and-label-text.container.height` | 64dp              |
| `md.comp.primary-navigation-tab.container.elevation`                       | (elevation token) |

#### Label text

| Token                                                                      | Value       |
| -------------------------------------------------------------------------- | ----------- |
| `md.comp.primary-navigation-tab.with-label-text.label-text.font`           | Roboto      |
| `md.comp.primary-navigation-tab.with-label-text.label-text.line-height`    | 20pt        |
| `md.comp.primary-navigation-tab.with-label-text.label-text.size`           | 14pt        |
| `md.comp.primary-navigation-tab.with-label-text.label-text.weight`         | 500         |
| `md.comp.primary-navigation-tab.with-label-text.label-text.tracking`       | 0.1pt       |
| `md.comp.primary-navigation-tab.with-label-text.label-text.type`           | Title Small |
| `md.comp.primary-navigation-tab.with-label-text.active.label-text.color`   | #6750A4     |
| `md.comp.primary-navigation-tab.with-label-text.inactive.label-text.color` | #49454F     |

#### Icon

| Token                                                          | Value   |
| -------------------------------------------------------------- | ------- |
| `md.comp.primary-navigation-tab.with-icon.icon.size`           | 24dp    |
| `md.comp.primary-navigation-tab.with-icon.active.icon.color`   | #6750A4 |
| `md.comp.primary-navigation-tab.with-icon.inactive.icon.color` | #49454F |

#### Divider (Deprecated)

| Token                                           | Value   |
| ----------------------------------------------- | ------- |
| `md.comp.primary-navigation-tab.divider.color`  | #E7E0EC |
| `md.comp.primary-navigation-tab.divider.height` | 1dp     |

#### Active indicator

| Token                                                    | Value         |
| -------------------------------------------------------- | ------------- |
| `md.comp.primary-navigation-tab.active-indicator.color`  | #6750A4       |
| `md.comp.primary-navigation-tab.active-indicator.height` | 3dp           |
| `md.comp.primary-navigation-tab.active-indicator.shape`  | (shape token) |

### Hovered

#### Label text

| Token                                                                            | Value   |
| -------------------------------------------------------------------------------- | ------- |
| `md.comp.primary-navigation-tab.with-label-text.active.hover.label-text.color`   | #6750A4 |
| `md.comp.primary-navigation-tab.with-label-text.inactive.hover.label-text.color` | #1D1B20 |

#### State layer

| Token                                                               | Value   |
| ------------------------------------------------------------------- | ------- |
| `md.comp.primary-navigation-tab.active.hover.state-layer.color`     | #6750A4 |
| `md.comp.primary-navigation-tab.active.hover.state-layer.opacity`   | 0.08    |
| `md.comp.primary-navigation-tab.inactive.hover.state-layer.color`   | #1D1B20 |
| `md.comp.primary-navigation-tab.inactive.hover.state-layer.opacity` | 0.08    |

#### Icon

| Token                                                                | Value   |
| -------------------------------------------------------------------- | ------- |
| `md.comp.primary-navigation-tab.with-icon.active.hover.icon.color`   | #6750A4 |
| `md.comp.primary-navigation-tab.with-icon.inactive.hover.icon.color` | #1D1B20 |

### Focused

#### Focus indicator

| Token                                                           | Value   |
| --------------------------------------------------------------- | ------- |
| `md.comp.primary-navigation-tab.focus.indicator.color`          | #625B71 |
| `md.comp.primary-navigation-tab.focus.indicator.thickness`      | 3dp     |
| `md.comp.primary-navigation-tab.focus.indicator.outline.offset` | -3dp    |

#### Label text

| Token                                                                            | Value   |
| -------------------------------------------------------------------------------- | ------- |
| `md.comp.primary-navigation-tab.with-label-text.active.focus.label-text.color`   | #6750A4 |
| `md.comp.primary-navigation-tab.with-label-text.inactive.focus.label-text.color` | #1D1B20 |

#### State layer

| Token                                                               | Value   |
| ------------------------------------------------------------------- | ------- |
| `md.comp.primary-navigation-tab.active.focus.state-layer.color`     | #6750A4 |
| `md.comp.primary-navigation-tab.active.focus.state-layer.opacity`   | 0.1     |
| `md.comp.primary-navigation-tab.inactive.focus.state-layer.color`   | #1D1B20 |
| `md.comp.primary-navigation-tab.inactive.focus.state-layer.opacity` | 0.1     |

#### Icon

| Token                                                                | Value   |
| -------------------------------------------------------------------- | ------- |
| `md.comp.primary-navigation-tab.with-icon.active.focus.icon.color`   | #6750A4 |
| `md.comp.primary-navigation-tab.with-icon.inactive.focus.icon.color` | #1D1B20 |

### Pressed (ripple)

#### Label text

| Token                                                                              | Value   |
| ---------------------------------------------------------------------------------- | ------- |
| `md.comp.primary-navigation-tab.with-label-text.active.pressed.label-text.color`   | #6750A4 |
| `md.comp.primary-navigation-tab.with-label-text.inactive.pressed.label-text.color` | #1D1B20 |

#### State layer

| Token                                                                 | Value   |
| --------------------------------------------------------------------- | ------- |
| `md.comp.primary-navigation-tab.active.pressed.state-layer.color`     | #6750A4 |
| `md.comp.primary-navigation-tab.active.pressed.state-layer.opacity`   | 0.1     |
| `md.comp.primary-navigation-tab.inactive.pressed.state-layer.color`   | #6750A4 |
| `md.comp.primary-navigation-tab.inactive.pressed.state-layer.opacity` | 0.1     |

#### Icon

| Token                                                                  | Value   |
| ---------------------------------------------------------------------- | ------- |
| `md.comp.primary-navigation-tab.with-icon.active.pressed.icon.color`   | #6750A4 |
| `md.comp.primary-navigation-tab.with-icon.inactive.pressed.icon.color` | #1D1B20 |

---

## Tabs - Secondary navigation tokens

### Enabled

#### Container

| Token                                                     | Value             |
| --------------------------------------------------------- | ----------------- |
| `md.comp.secondary-navigation-tab.container.color`        | #FEF7FF           |
| `md.comp.secondary-navigation-tab.container.shape`        | (shape token)     |
| `md.comp.secondary-navigation-tab.container.height`       | 48dp              |
| `md.comp.secondary-navigation-tab.container.elevation`    | (elevation token) |
| `md.comp.secondary-navigation-tab.container.shadow-color` | #000000           |

#### Label text

| Token                                                        | Value       |
| ------------------------------------------------------------ | ----------- |
| `md.comp.secondary-navigation-tab.label-text.font`           | Roboto      |
| `md.comp.secondary-navigation-tab.label-text.line-height`    | 20pt        |
| `md.comp.secondary-navigation-tab.label-text.size`           | 14pt        |
| `md.comp.secondary-navigation-tab.label-text.weight`         | 500         |
| `md.comp.secondary-navigation-tab.label-text.tracking`       | 0.1pt       |
| `md.comp.secondary-navigation-tab.label-text.type`           | Title Small |
| `md.comp.secondary-navigation-tab.active.label-text.color`   | #1D1B20     |
| `md.comp.secondary-navigation-tab.inactive.label-text.color` | #49454F     |

#### Icon

| Token                                                            | Value   |
| ---------------------------------------------------------------- | ------- |
| `md.comp.secondary-navigation-tab.with-icon.icon.size`           | 24dp    |
| `md.comp.secondary-navigation-tab.with-icon.active.icon.color`   | #1D1B20 |
| `md.comp.secondary-navigation-tab.with-icon.inactive.icon.color` | #49454F |

#### Divider (Deprecated)

| Token                                             | Value   |
| ------------------------------------------------- | ------- |
| `md.comp.secondary-navigation-tab.divider.color`  | #E7E0EC |
| `md.comp.secondary-navigation-tab.divider.height` | 1dp     |

#### Active indicator

| Token                                                      | Value   |
| ---------------------------------------------------------- | ------- |
| `md.comp.secondary-navigation-tab.active-indicator.color`  | #6750A4 |
| `md.comp.secondary-navigation-tab.active-indicator.height` | 2dp     |

### Hovered

#### Label text

| Token                                                     | Value   |
| --------------------------------------------------------- | ------- |
| `md.comp.secondary-navigation-tab.hover.label-text.color` | #1D1B20 |

#### State layer

| Token                                                        | Value   |
| ------------------------------------------------------------ | ------- |
| `md.comp.secondary-navigation-tab.hover.state-layer.color`   | #1D1B20 |
| `md.comp.secondary-navigation-tab.hover.state-layer.opacity` | 0.08    |

#### Icon

| Token                                                         | Value   |
| ------------------------------------------------------------- | ------- |
| `md.comp.secondary-navigation-tab.with-icon.hover.icon.color` | #1D1B20 |

### Focused

#### Focus indicator

| Token                                                             | Value   |
| ----------------------------------------------------------------- | ------- |
| `md.comp.secondary-navigation-tab.focus.indicator.color`          | #625B71 |
| `md.comp.secondary-navigation-tab.focus.indicator.thickness`      | 3dp     |
| `md.comp.secondary-navigation-tab.focus.indicator.outline.offset` | -3dp    |

#### Label text

| Token                                                     | Value   |
| --------------------------------------------------------- | ------- |
| `md.comp.secondary-navigation-tab.focus.label-text.color` | #1D1B20 |

#### State layer

| Token                                                        | Value   |
| ------------------------------------------------------------ | ------- |
| `md.comp.secondary-navigation-tab.focus.state-layer.color`   | #1D1B20 |
| `md.comp.secondary-navigation-tab.focus.state-layer.opacity` | 0.1     |

#### Icon

| Token                                                         | Value   |
| ------------------------------------------------------------- | ------- |
| `md.comp.secondary-navigation-tab.with-icon.focus.icon.color` | #1D1B20 |

### Pressed (ripple)

#### Label text

| Token                                                       | Value   |
| ----------------------------------------------------------- | ------- |
| `md.comp.secondary-navigation-tab.pressed.label-text.color` | #1D1B20 |

#### State layer

| Token                                                          | Value   |
| -------------------------------------------------------------- | ------- |
| `md.comp.secondary-navigation-tab.pressed.state-layer.color`   | #1D1B20 |
| `md.comp.secondary-navigation-tab.pressed.state-layer.opacity` | 0.1     |

#### Icon

| Token                                                           | Value   |
| --------------------------------------------------------------- | ------- |
| `md.comp.secondary-navigation-tab.with-icon.pressed.icon.color` | #1D1B20 |
