---
url: https://m3.material.io/components/navigation-drawer/specs
lastmod: 2026-01-26
crawled_at: 2026-03-09T17:03:00.000Z
category: components
section: navigation-drawer
page_type: specs
status: complete
---

# Navigation drawer

Navigation drawers let people switch between UI views on larger devices.

> **Note:** The navigation drawer is no longer recommended in the Material 3 expressive update. For those who have updated, use an [expanded navigation rail](https://m3.material.io/m3/pages/navigation-rail/overview/), which has mostly the same functionality of the navigation drawer and adapts better across window size classes.

![Navigation drawer diagram numbering 7 elements](https://lh3.googleusercontent.com/XQqbD3P86vaNwSR7zEWzeXnw_VQ-u5LnM_wl_axaPI-t-8Inp_VPVyiPJUtXgAan5-UqVGlahZc0GzYXVH5ae839iIG25uW6nKPEVJ7QsAz98A=s0)

_Anatomy:_

1. Container
2. Headline
3. Label text
4. Icon
5. Active indicator
6. Badge label text
7. Scrim

## Tokens & specs

The navigation drawer has one token set. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/).

### Navigation drawers (baseline)

#### Enabled

##### Container

| Token                                                          | Value                    |
| -------------------------------------------------------------- | ------------------------ |
| `md.comp.navigation-drawer.container.color`                    | #FEF7FF (deprecated)     |
| `md.comp.navigation-drawer.modal.container.color`              | #F7F2FA                  |
| `md.comp.navigation-drawer.standard.container.color`           | #FEF7FF                  |
| `md.comp.navigation-drawer.container.surface-tint-layer.color` | #6750A4 (deprecated)     |
| `md.comp.navigation-drawer.modal.container.elevation`          | Level 1                  |
| `md.comp.navigation-drawer.standard.container.elevation`       | Level 0                  |
| `md.comp.navigation-drawer.container.height`                   | 100%                     |
| `md.comp.navigation-drawer.container.shape`                    | 0,16,16,0dp corner radii |
| `md.comp.navigation-drawer.bottom.container.shape`             | 12,12,0,0dp corner radii |
| `md.comp.navigation-drawer.container.width`                    | 360dp                    |

##### Label text

| Token                                                 | Value       |
| ----------------------------------------------------- | ----------- |
| `md.comp.navigation-drawer.active.label-text.color`   | #4A4458     |
| `md.comp.navigation-drawer.inactive.label-text.color` | #49454F     |
| `md.comp.navigation-drawer.label-text.font`           | Roboto      |
| `md.comp.navigation-drawer.label-text.line-height`    | 20pt        |
| `md.comp.navigation-drawer.label-text.size`           | 14pt        |
| `md.comp.navigation-drawer.label-text.tracking`       | 0.1pt       |
| `md.comp.navigation-drawer.label-text.weight`         | 500         |
| `md.comp.navigation-drawer.active.label-text.weight`  | 700         |
| `md.comp.navigation-drawer.label-text.type`           | Label large |

##### Icon

| Token                                           | Value   |
| ----------------------------------------------- | ------- |
| `md.comp.navigation-drawer.active.icon.color`   | #4A4458 |
| `md.comp.navigation-drawer.inactive.icon.color` | #49454F |
| `md.comp.navigation-drawer.icon.size`           | 24dp    |

##### Headline

| Token                                            | Value       |
| ------------------------------------------------ | ----------- |
| `md.comp.navigation-drawer.headline.color`       | #49454F     |
| `md.comp.navigation-drawer.headline.font`        | Roboto      |
| `md.comp.navigation-drawer.headline.line-height` | 20pt        |
| `md.comp.navigation-drawer.headline.size`        | 14pt        |
| `md.comp.navigation-drawer.headline.tracking`    | 0.1pt       |
| `md.comp.navigation-drawer.headline.weight`      | 500         |
| `md.comp.navigation-drawer.headline.type`        | Title small |

##### Divider

| Token                                     | Value                |
| ----------------------------------------- | -------------------- |
| `md.comp.navigation-drawer.divider.color` | #79747E (deprecated) |

##### Active indicator

| Token                                               | Value       |
| --------------------------------------------------- | ----------- |
| `md.comp.navigation-drawer.active-indicator.color`  | #E8DEF8     |
| `md.comp.navigation-drawer.active-indicator.height` | 56dp        |
| `md.comp.navigation-drawer.active-indicator.shape`  | 28dp (full) |
| `md.comp.navigation-drawer.active-indicator.width`  | 336dp       |

##### Large badge label

| Token                                                     | Value       |
| --------------------------------------------------------- | ----------- |
| `md.comp.navigation-drawer.large-badge-label.color`       | #49454F     |
| `md.comp.navigation-drawer.large-badge-label.font`        | Roboto      |
| `md.comp.navigation-drawer.large-badge-label.line-height` | 20pt        |
| `md.comp.navigation-drawer.large-badge-label.size`        | 14pt        |
| `md.comp.navigation-drawer.large-badge-label.tracking`    | 0.1pt       |
| `md.comp.navigation-drawer.large-badge-label.weight`      | 500         |
| `md.comp.navigation-drawer.large-badge-label.type`        | Label large |

##### Scrim (Deprecated)

| Token                                     | Value                |
| ----------------------------------------- | -------------------- |
| `md.comp.navigation-drawer.scrim.color`   | #322F37 (deprecated) |
| `md.comp.navigation-drawer.scrim.opacity` | 0.4 (deprecated)     |

#### Hovered

##### Label text

| Token                                                       | Value   |
| ----------------------------------------------------------- | ------- |
| `md.comp.navigation-drawer.active.hover.label-text.color`   | #4A4458 |
| `md.comp.navigation-drawer.inactive.hover.label-text.color` | #1D1B20 |

##### State layer

| Token                                                        | Value   |
| ------------------------------------------------------------ | ------- |
| `md.comp.navigation-drawer.active.hover.state-layer.color`   | #4A4458 |
| `md.comp.navigation-drawer.inactive.hover.state-layer.color` | #1D1B20 |
| `md.comp.navigation-drawer.hover.state-layer.opacity`        | 0.08    |

##### Icon

| Token                                                 | Value   |
| ----------------------------------------------------- | ------- |
| `md.comp.navigation-drawer.active.hover.icon.color`   | #4A4458 |
| `md.comp.navigation-drawer.inactive.hover.icon.color` | #1D1B20 |

#### Focused

##### Focus indicator

| Token                                                      | Value   |
| ---------------------------------------------------------- | ------- |
| `md.comp.navigation-drawer.focus.indicator.color`          | #625B71 |
| `md.comp.navigation-drawer.focus.indicator.thickness`      | 3dp     |
| `md.comp.navigation-drawer.focus.indicator.outline.offset` | -3dp    |

##### Label text

| Token                                                       | Value   |
| ----------------------------------------------------------- | ------- |
| `md.comp.navigation-drawer.active.focus.label-text.color`   | #4A4458 |
| `md.comp.navigation-drawer.inactive.focus.label-text.color` | #1D1B20 |

##### State layer

| Token                                                        | Value   |
| ------------------------------------------------------------ | ------- |
| `md.comp.navigation-drawer.active.focus.state-layer.color`   | #4A4458 |
| `md.comp.navigation-drawer.inactive.focus.state-layer.color` | #1D1B20 |
| `md.comp.navigation-drawer.focus.state-layer.opacity`        | 0.1     |

##### Icon

| Token                                                 | Value   |
| ----------------------------------------------------- | ------- |
| `md.comp.navigation-drawer.active.focus.icon.color`   | #4A4458 |
| `md.comp.navigation-drawer.inactive.focus.icon.color` | #1D1B20 |

#### Pressed (ripple)

##### Label text

| Token                                                         | Value   |
| ------------------------------------------------------------- | ------- |
| `md.comp.navigation-drawer.active.pressed.label-text.color`   | #4A4458 |
| `md.comp.navigation-drawer.inactive.pressed.label-text.color` | #1D1B20 |

##### State layer

| Token                                                          | Value   |
| -------------------------------------------------------------- | ------- |
| `md.comp.navigation-drawer.active.pressed.state-layer.color`   | #4A4458 |
| `md.comp.navigation-drawer.inactive.pressed.state-layer.color` | #4A4458 |
| `md.comp.navigation-drawer.pressed.state-layer.opacity`        | 0.1     |

##### Icon

| Token                                                   | Value   |
| ------------------------------------------------------- | ------- |
| `md.comp.navigation-drawer.active.pressed.icon.color`   | #4A4458 |
| `md.comp.navigation-drawer.inactive.pressed.icon.color` | #1D1B20 |

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview).

![Navigation drawer diagram numbering 8 elements.](https://lh3.googleusercontent.com/EFOoVjwBffIgl-Gs07m2W5WiNu8brQ2paefKx_U_eQexLGySjgLV_C9FYD7wkTs0o7j3_RvrcTcqh6oUAKyyrkRsYKsU3A6n-KFtlCBp1sKv=s0)

_Navigation drawer color roles used for light and dark schemes:_

1. Surface container low
2. On surface variant
3. On secondary container
4. On secondary container
5. Secondary container
6. On secondary container
7. On surface variant
8. On surface variant
9. Scrim

For divider color roles, go to [divider specs](https://m3.material.io/m3/pages/divider/specs).

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview).

![4 navigation drawers illustrating enabled, hovered, focused, and pressed states.](https://lh3.googleusercontent.com/xCUslUMH4a9wLA0cXIbv622e8KMYHe0R5TPMmzjG0lFKP2hX6vjQcnKVFwxI9HIdk1z3y6BR65wFxvpsx4LcCDTCkHk0J52aaChbC8h3YEZy=s0)

_Navigation drawer states: Enabled, Hovered, Focused, Pressed_

## Measurements

### Standard navigation drawer

![Standard navigation drawer with measurements shown for various elements.](https://lh3.googleusercontent.com/l8YaTBOyAgzi71bCX-rCjVbPr9F5UayXCBXxfhQ30w1vqJ7aauCJmDa6a-BMxz7e8E4irFkO9c_1Rr7_7ECnf_rlMF86EpPoCC6TeOgZ5gF-=s0)

_Element size measurements_

![Standard navigation drawer with measurements shown for padding and margins.](https://lh3.googleusercontent.com/0b273CFdNyDt3yEDRLSSICnKHb8rktNAiXmruD2EO82_S9iBxGsq08CPpYTupKoj0SRnuaNR0fo8dICOcrrev88RLidMbVhYvVgiudX80RJ4=s0)

_Padding and margins_

| Attribute                  | Value                    |
| -------------------------- | ------------------------ |
| Container height           | 100%                     |
| Container width            | 360dp                    |
| Container shape            | 0,16,16,0dp corner radii |
| Icon size                  | 24dp                     |
| Active indicator height    | 56dp                     |
| Active indicator shape     | 28dp                     |
| Active indicator width     | 336dp                    |
| Horizontal label alignment | Start-aligned            |
| Left padding               | 28dp                     |
| Right padding              | 28dp                     |
| Active indicator padding   | 12dp                     |
| Padding between elements   | 0dp                      |

### Modal navigation drawer

![Modal navigation drawer with measurements shown for various elements.](https://lh3.googleusercontent.com/invVA4iDTyiHnbFHAMhycwQRAZds3tEMmOOPGaiv1HnriGnDeAV4MSXpQ9gOcnALm0eQcxgml_hzP-tTo1gWH4DQMu-ZM0iPuy1OgHvjULc_=s0)

_Element size measurements_

![Modal navigation drawer with measurements shown for padding and margins.](https://lh3.googleusercontent.com/2T9NqmBF4mES5SgaRMeuXBm0CXnjDhysHSNKT1lr_iIEUZKCbKtRtIXvzyFbVR8RnSZ17O4sK483ySXplBOwNiw0N_DoqjM0npsQ6uA6c9nnYA=s0)

_Padding and margins_

| Attribute                  | Value         |
| -------------------------- | ------------- |
| Container height           | 100%          |
| Container width            | 360dp         |
| Icon size                  | 24dp          |
| Active indicator height    | 56dp          |
| Active indicator shape     | 28dp          |
| Active indicator width     | 336dp         |
| Horizontal label alignment | Start-aligned |
| Left padding               | 28dp          |
| Right padding              | 28dp          |
| Active indicator padding   | 12dp          |
| Padding between elements   | 0dp           |
