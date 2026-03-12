---
url: https://m3.material.io/components/app-bars/specs
lastmod: 2025-09-26
crawled_at: 2026-03-09T14:18:00.000Z
category: components
section: app-bars
page_type: specs
status: complete
---

# App bars

App bars are placed at the top of the screen to help people navigate through a product.

## Variants

![4 variants of app bars.](https://lh3.googleusercontent.com/R6NchWHyVf-clBxfBYoBw7-5iz6ymHQr5DUgW5NzI0ZRCArjukJnX0Mh5kQZVzEEauU64zRGfzAhXYDelTEGF_4mC-8UlJg44nnOaZFths4=s0)

_Search app bar, Small, Medium flexible, Large flexible_

### Baseline variants

The baseline M3 **medium** and **large** app bars are no longer recommended in M3 Expressive. They should be replaced with the **medium flexible** and **large flexible** app bars, which are similar visually, but have multi-line support, a shorter height, and can contain a wide variety of elements, like images. [Jump to baseline app bar specs](#baseline-app-bars)

![2 baseline app bar variants, medium and large.](https://lh3.googleusercontent.com/PAPjfPS49Uz7kWnFf2rs0YdAChpRuxySjei7CDKCNJFTvHfrX7HLr9avX5fiDmlEDQFHYyG2sgi-wbHdbGqE9Wh97oS7cRl0BjwjvvukhBU=s0)

_Baseline variants: Medium, Large_

| Variants          | M3        | M3 Expressive                                       |
| ----------------- | --------- | --------------------------------------------------- |
| Search app bar    | --        | Available                                           |
| Small             | Available | Available                                           |
| Center-aligned    | Available | Merged into small. Use centered-text configuration. |
| Medium (baseline) | Available | Not recommended. Use medium flexible                |
| Medium flexible   | --        | Available                                           |
| Large (baseline)  | Available | Not recommended. Use large flexible                 |
| Large flexible    | --        | Available                                           |

## Configurations

### Text alignment

![4 variants of app bars with different left and center aligned text headlines.](https://lh3.googleusercontent.com/IndWTgIwk6UoCzOha7CpMYqYPoG4qQ9B5ltR_h8-rwfjWtzYjFq4aj_DZI4t1yeysZq2tVjrZDjjAQ5THfKFwluLDkQvhvZgKSk4IsDiCCXe=s0)

_Text labels, including supporting text, can be aligned to the leading edge or centered_

| Category       | Configuration          | M3        | M3 Expressive |
| -------------- | ---------------------- | --------- | ------------- |
| Text alignment | Leading edge (default) | Available | Available     |
| Text alignment | Centered               | --        | Available     |

## Tokens & specs

Select a token set to view in the table's menu. App bar token sets are organized into a common token set, and size-specific tokens. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### App bar - Common

#### Color

| Token                                 | Code                                               | Value (Light) |
| ------------------------------------- | -------------------------------------------------- | ------------- |
| App bar container color               | `md.comp.app-bar.container.color`                  | #FEF7FF       |
| Search container color                | `md.comp.app-bar.search.container.color`           | #F3EDF7       |
| Search label color                    | `md.comp.app-bar.search.label.color`               | #49454F       |
| App bar container color on scroll     | `md.comp.app-bar.on-scroll.container.color`        | #F3EDF7       |
| Search container color on scroll      | `md.comp.app-bar.search.on-scroll.container.color` | #E6E0E9       |
| App bar container elevation           | `md.comp.app-bar.container.elevation`              | --            |
| App bar container elevation on scroll | `md.comp.app-bar.on-scroll.container.elevation`    | --            |
| App bar title text                    | `md.comp.app-bar.title.color`                      | #1D1B20       |
| App bar subtitle text                 | `md.comp.app-bar.subtitle.color`                   | #49454F       |
| App bar leading icon                  | `md.comp.app-bar.leading-icon.color`               | #1D1B20       |
| App bar trailing icon                 | `md.comp.app-bar.trailing-icon.color`              | #49454F       |

#### Spacing

| Token                 | Code                                    | Value |
| --------------------- | --------------------------------------- | ----- |
| App bar left padding  | `md.comp.app-bar.leading-space`         | 4dp   |
| App bar right padding | `md.comp.app-bar.trailing-space`        | 4dp   |
| App bar icon spacing  | `md.comp.app-bar.icon-button-space`     | 0     |
| Search left padding   | `md.comp.app-bar.search.leading-space`  | 8dp   |
| Search right padding  | `md.comp.app-bar.search.trailing-space` | 8dp   |

#### Shape

| Token                   | Code                              | Value |
| ----------------------- | --------------------------------- | ----- |
| App bar container shape | `md.comp.app-bar.container.shape` | --    |

#### Size

| Token               | Code                          | Value |
| ------------------- | ----------------------------- | ----- |
| App bar avatar size | `md.comp.app-bar.avatar.size` | 32dp  |
| App bar icon size   | `md.comp.app-bar.icon.size`   | 24dp  |

---

### App bar - Size - Small

| Token                                       | Code                                            | Value |
| ------------------------------------------- | ----------------------------------------------- | ----- |
| App bar small container height              | `md.comp.app-bar.small.container.height`        | 64dp  |
| App bar small title font                    | `md.comp.app-bar.small.title.font`              | --    |
| App bar small subtitle font                 | `md.comp.app-bar.small.subtitle.font`           | --    |
| App bar small icon button size (deprecated) | `md.comp.app-bar.small.icon.size`               | 24dp  |
| Search container height                     | `md.comp.app-bar.small.search.container.height` | 56dp  |
| Search container shape                      | `md.comp.app-bar.small.search.container.shape`  | --    |
| Search title font                           | `md.comp.app-bar.small.search.label-text.font`  | --    |

---

### App bar - Size - Medium Flexible

| Token                                                  | Code                                                             | Value |
| ------------------------------------------------------ | ---------------------------------------------------------------- | ----- |
| App bar medium flexible container height               | `md.comp.app-bar.medium-flexible.container.height`               | 112dp |
| App bar medium flexible container height with subtitle | `md.comp.app-bar.medium-flexible.with-subtitle.container.height` | 136dp |
| App bar medium flexible title font                     | `md.comp.app-bar.medium-flexible.title.font`                     | --    |
| App bar medium flexible subtitle font                  | `md.comp.app-bar.medium-flexible.subtitle.font`                  | --    |

---

### App bar - Size - Large Flexible

| Token                                                 | Code                                                            | Value |
| ----------------------------------------------------- | --------------------------------------------------------------- | ----- |
| App bar large flexible container height               | `md.comp.app-bar.large-flexible.container.height`               | 120dp |
| App bar large flexible container height with subtitle | `md.comp.app-bar.large-flexible.with-subtitle.container.height` | 152dp |
| App bar large flexible title font                     | `md.comp.app-bar.large-flexible.title.font`                     | --    |
| App bar large flexible subtitle font                  | `md.comp.app-bar.large-flexible.subtitle.font`                  | --    |

---

### Search component tokens & specs

The default [search](https://m3.material.io/components/search) component tokens are used in the search app bar.

### Search - View

**Color**

| Token                                                       | Code                                                     | Value (Light) |
| ----------------------------------------------------------- | -------------------------------------------------------- | ------------- |
| Search view container surface tint layer color (deprecated) | `md.comp.search-view.container.surface-tint-layer.color` | #6750A4       |
| Search view container color                                 | `md.comp.search-view.container.color`                    | #ECE6F0       |
| Search view contained background color                      | `md.comp.search-view.contained.background.color`         | #F7F2FA       |
| Search view container background elevation                  | `md.comp.search-view.container.elevation`                | --            |
| Search view header supporting text color                    | `md.comp.search-view.header.supporting-text.color`       | #49454F       |
| Search view header input text color                         | `md.comp.search-view.header.input-text.color`            | #1D1B20       |
| Search view header leading icon color                       | `md.comp.search-view.header.leading-icon.color`          | #1D1B20       |
| Search view header trailing icon color                      | `md.comp.search-view.header.trailing-icon.color`         | #49454F       |
| Search view divider color                                   | `md.comp.search-view.divider.color`                      | #79747E       |

**Layout and Text / Contained (expressive)**

| Token                                                  | Code                                                             | Value |
| ------------------------------------------------------ | ---------------------------------------------------------------- | ----- |
| Search view contained leading margin                   | `md.comp.search-view.contained.leading-margin`                   | 12dp  |
| Search view contained trailing margin                  | `md.comp.search-view.contained.trailing-margin`                  | 12dp  |
| Search view contained docked bar results gap           | `md.comp.search-view.contained.docked.bar-results.gap`           | 2dp   |
| Search view contained docked results shape             | `md.comp.search-view.contained.docked.results.shape`             | --    |
| Search view contained docked bar shape                 | `md.comp.search-view.contained.docked.bar.shape`                 | --    |
| Search view contained full screen bar container height | `md.comp.search-view.contained.full-screen.bar.container.height` | 56dp  |
| Search view contained icon label gap                   | `md.comp.search-view.contained.icon-label.gap`                   | 4dp   |

**Layout and Text / Divided (baseline)**

| Token                                           | Code                                                          | Value |
| ----------------------------------------------- | ------------------------------------------------------------- | ----- |
| Search view docked container shape              | `md.comp.search-view.docked.container.shape`                  | --    |
| Search view full screen header container height | `md.comp.search-view.full-screen.header.container.height`     | 72dp  |
| Search view docked header container height      | `md.comp.search-view.docked.header.container.height`          | 56dp  |
| Search view leading space                       | `md.comp.search-view.leading-space`                           | 16dp  |
| Search view trailing space                      | `md.comp.search-view.trailing-space`                          | 16dp  |
| Search view leading icon label space            | `md.comp.search-view.leading-icon.leading-icon-label-space`   | 16dp  |
| Search view trailing icon label space           | `md.comp.search-view.trailing-icon.label-trailing-icon-space` | 16dp  |

**Layout and Text / Common tokens**

| Token                                          | Code                                                     | Value  |
| ---------------------------------------------- | -------------------------------------------------------- | ------ |
| Search view full screen container shape        | `md.comp.search-view.full-screen.container.shape`        | --     |
| Search view header supporting text type        | `md.comp.search-view.header.supporting-text.type`        | --     |
| Search view header supporting text font        | `md.comp.search-view.header.supporting-text.font`        | Roboto |
| Search view header supporting text line height | `md.comp.search-view.header.supporting-text.line-height` | 24pt   |
| Search view header supporting text size        | `md.comp.search-view.header.supporting-text.size`        | 16pt   |
| Search view header supporting text weight      | `md.comp.search-view.header.supporting-text.weight`      | 400    |
| Search view header supporting text tracking    | `md.comp.search-view.header.supporting-text.tracking`    | 0.5pt  |
| Search view header input text type             | `md.comp.search-view.header.input-text.type`             | --     |
| Search view header input text font             | `md.comp.search-view.header.input-text.font`             | Roboto |
| Search view header input text line height      | `md.comp.search-view.header.input-text.line-height`      | 24pt   |
| Search view header input text size             | `md.comp.search-view.header.input-text.size`             | 16pt   |
| Search view header input text weight           | `md.comp.search-view.header.input-text.weight`           | 400    |
| Search view header input text tracking         | `md.comp.search-view.header.input-text.tracking`         | 0.5pt  |

---

### Search - Bar

**Color / Enabled**

| Token                            | Code                                       | Value (Light) |
| -------------------------------- | ------------------------------------------ | ------------- |
| Search bar container color       | `md.comp.search-bar.container.color`       | #ECE6F0       |
| Search bar container elevation   | `md.comp.search-bar.container.elevation`   | --            |
| Search bar leading icon color    | `md.comp.search-bar.leading-icon.color`    | #1D1B20       |
| Search bar trailing icon color   | `md.comp.search-bar.trailing-icon.color`   | #49454F       |
| Search bar supporting text color | `md.comp.search-bar.supporting-text.color` | #49454F       |
| Search bar input text color      | `md.comp.search-bar.input-text.color`      | #1D1B20       |

**Color / Hovered**

| Token                                  | Code                                             | Value (Light) |
| -------------------------------------- | ------------------------------------------------ | ------------- |
| Search bar hover state layer color     | `md.comp.search-bar.hover.state-layer.color`     | #1D1B20       |
| Search bar hover state layer opacity   | `md.comp.search-bar.hover.state-layer.opacity`   | 0.08          |
| Search bar hover supporting text color | `md.comp.search-bar.hover.supporting-text.color` | #49454F       |

**Color / Pressed**

| Token                                    | Code                                               | Value (Light) |
| ---------------------------------------- | -------------------------------------------------- | ------------- |
| Search bar pressed state layer color     | `md.comp.search-bar.pressed.state-layer.color`     | #1D1B20       |
| Search bar pressed state layer opacity   | `md.comp.search-bar.pressed.state-layer.opacity`   | 0.1           |
| Search bar pressed supporting text color | `md.comp.search-bar.pressed.supporting-text.color` | #49454F       |

**Color / Focused**

| Token                                | Code                                                | Value (Light) |
| ------------------------------------ | --------------------------------------------------- | ------------- |
| Search bar focus indicator color     | `md.comp.search-bar.focus.indicator.color`          | #625B71       |
| Search bar focus indicator thickness | `md.comp.search-bar.focus.indicator.thickness`      | 3dp           |
| Search bar focus indicator offset    | `md.comp.search-bar.focus.indicator.outline.offset` | 2dp           |

**Layout and Text / Contained (expressive)**

| Token                                                | Code                                                           | Value |
| ---------------------------------------------------- | -------------------------------------------------------------- | ----- |
| Search bar contained pane leading margin             | `md.comp.search-bar.contained.leading-margin`                  | 24dp  |
| Search bar contained pane trailing margin            | `md.comp.search-bar.contained.trailing-margin`                 | 24dp  |
| Search bar contained motion                          | `md.comp.search-bar.contained.motion.spring`                   | --    |
| Search bar contained leading space                   | `md.comp.search-bar.contained.leading-space`                   | 4dp   |
| Search bar contained trailing space                  | `md.comp.search-bar.contained.trailing-space`                  | 4dp   |
| Search bar contained no actions leading space        | `md.comp.search-bar.contained.no-actions.leading-space`        | 16dp  |
| Search bar contained no actions trailing space       | `md.comp.search-bar.contained.no-actions.trailing-space`       | 16dp  |
| Search bar contained icon label gap                  | `md.comp.search-bar.contained.icon-label.gap`                  | 4dp   |
| Search bar contained avatar target size              | `md.comp.search-bar.contained.avatar.target-size`              | 48dp  |
| Search bar contained trailing actions gap            | `md.comp.search-bar.contained.trailing-actions.gap`            | 0     |
| Search bar contained trailing actions leading space  | `md.comp.search-bar.contained.trailing-actions.leading-space`  | 4dp   |
| Search bar contained trailing actions trailing space | `md.comp.search-bar.contained.trailing-actions.trailing-space` | 4dp   |

**Layout and Text / Baseline**

| Token                                | Code                                                         | Value |
| ------------------------------------ | ------------------------------------------------------------ | ----- |
| Search bar leading space             | `md.comp.search-bar.leading-space`                           | 16dp  |
| Search bar trailing space            | `md.comp.search-bar.trailing-space`                          | 16dp  |
| Search bar leading icon label space  | `md.comp.search-bar.leading-icon.leading-icon-label-space`   | 16dp  |
| Search bar trailing icon label space | `md.comp.search-bar.trailing-icon.label-trailing-icon-space` | 16dp  |

**Layout and Text / Common tokens**

| Token                                                      | Code                                                    | Value   |
| ---------------------------------------------------------- | ------------------------------------------------------- | ------- |
| Search bar container height                                | `md.comp.search-bar.container.height`                   | 56dp    |
| Search bar container shape                                 | `md.comp.search-bar.container.shape`                    | --      |
| Search bar avatar size                                     | `md.comp.search-bar.avatar.size`                        | 30dp    |
| Search bar avatar shape                                    | `md.comp.search-bar.avatar.shape`                       | --      |
| Search bar icon size                                       | `md.comp.search-bar.icon.size`                          | 24dp    |
| Search bar supporting text type                            | `md.comp.search-bar.supporting-text.type`               | --      |
| Search bar supporting text font                            | `md.comp.search-bar.supporting-text.font`               | Roboto  |
| Search bar supporting text line height                     | `md.comp.search-bar.supporting-text.line-height`        | 24pt    |
| Search bar supporting text size                            | `md.comp.search-bar.supporting-text.size`               | 16pt    |
| Search bar supporting text weight                          | `md.comp.search-bar.supporting-text.weight`             | 400     |
| Search bar supporting text tracking                        | `md.comp.search-bar.supporting-text.tracking`           | 0.5pt   |
| Search bar input text type                                 | `md.comp.search-bar.input-text.type`                    | --      |
| Search bar input text font                                 | `md.comp.search-bar.input-text.font`                    | Roboto  |
| Search bar input text line height                          | `md.comp.search-bar.input-text.line-height`             | 24pt    |
| Search bar input text size                                 | `md.comp.search-bar.input-text.size`                    | 16pt    |
| Search bar input text weight                               | `md.comp.search-bar.input-text.weight`                  | 400     |
| Search bar input text tracking                             | `md.comp.search-bar.input-text.tracking`                | 0.5pt   |
| Search bar container surface tint layer color (deprecated) | `md.comp.search-bar.container.surface-tint-layer.color` | #6750A4 |

## Anatomy

![5 elements of the component.](https://lh3.googleusercontent.com/dj3aNhEb5WNBFJmh8RrINGwrURkxEa15TuuDbzCRvGRI3jCNmVA0qqTZuNGi8mVEVgmC3jZdDw_Ddu1nobTjKq_RgxDJzwFkhdLv7JF9V_Ja=s0)

1. Container
2. Leading button
3. Trailing elements
4. Headline
5. Subtitle

App bars can be customized to include:

- An image or logo
- A subtitle
- A filled icon button

Avoid customizing the size of the heading and subtitle, or adding too many actions.

![3 app bars: 1 with a newspaper logo, 1 with a subtitle, and 1 with a filled icon button.](https://lh3.googleusercontent.com/l1EOs3OVa20dGBAVo1Yk9o9IQ9OdB-X0yafAHJz8_bNg3f7A2HHkBIbsSgP4ioXtgao4NzEg6rVcZvKsesdxvK8axEz6Y9iEXICgDcnADutsPw=s0)

_The app bar can have different layouts depending on which elements are shown_

### Search

The search app bar can include trailing actions inside and outside the search bar. When the search bar is selected, it should open the [search view](https://m3.material.io/components/search) component.

![5 elements of the search app bar.](https://lh3.googleusercontent.com/rosJcpvyX1thqDOWuTlcuUAqD55JroM1XUgMbtsdyNQL68Rg8vmDkAFmxxGucRRssgVIAs-Eq2oHsxqrZf9aJocDu295ebSM8XzaBRq5iw=s0)

1. Container
2. Leading icon button
3. Hinted search text
4. Trailing icon or avatar
5. Search container

![3 layouts of icons in the search app bar.](https://lh3.googleusercontent.com/TXMs-ENGLvRGIGuKvrqy9V1qVEU569DkFN8ccGYoQow1lGUKXPdMkUPN6qKa14_hPQFfX_NlMvVhFnELOCZoI3F3T4HHnjI7se6iDx6HNQHc=s0)

- A leading element and a trailing element outside search
- A leading element, a trailing element inside search, and a trailing element outside search
- A leading element and two trailing elements outside search

### Image

An image can be placed in the app bar. In small app bars, this can replace the label text.

![Graphic replacing text headline content.](https://lh3.googleusercontent.com/_4Ib-ABI-o4LLu08W4uDRnc4orcGYI83k0fFwW3ZRo5xC1DKJeUBP_GSmN_OcpPebRtkpZRkZtwvyigZEkR4BGZYGwQHjWzGCm1rK9Jw0Nk=s0)

_Images can be added to app bars and can replace label text on small app bars_

### Filled trailing icon button

The app bar's trailing icon buttons can be replaced with a single, primary, or tonal filled icon button in default or wide sizes.

![App bars configured with filled trailing icons.](https://lh3.googleusercontent.com/GcxHJHg8XDR2bDF4vd58yDLmlMlyVIrE7nGEq6p332FaykYUFeBEPIkiG86TW4WiuuazTYLP89kwhVDfWiiPq_9IUrqRPOft8UXbJpQh9qI=s0)

_The trailing icons can be configured to be a single filled icon button_

### Subtitle

![App bars configured with subtitles below their headlines.](https://lh3.googleusercontent.com/asxx5TrhgXyD7i8lI6FKH2vVJDe-jJIRTPdB7r-WuiJ9S3P_OZR09ZdMmAnhper1y_AwuQoUhU2zcMEEYwbhrtX-hZN3p2fStMN7L0tuRgc=s0)

_The medium flexible and large flexible app bars hug the text contents, so they are taller when a subtitle is visible._

- Small
- Small with subtitle
- Medium flexible
- Medium flexible with subtitle
- Large flexible
- Large flexible with subtitle

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

All app bars share the same color roles. On scroll, the container changes color to **surface container**.

![4 color roles of the leading edge app bar in light and dark scheme.](https://lh3.googleusercontent.com/bu3HFtjddQJ0_K45nxnm1dfbw14mRr4kE5OqLBQAxjOfsxFZ15Ng6JvIHdBhBPykvJHgNAeLtkOqTydB7aPyyMiZ4ZCWCOT0qWdsPc3yWTE=s0)

_App bar color roles used for light and dark themes:_

- Surface
- On surface
- On surface variant
- On surface
- On surface variant
- Surface container (on scroll)

![4 color roles of the center-aligned app bar in light and dark scheme.](https://lh3.googleusercontent.com/nI0R_PJP8KRBLKAUH6w7m4_0u5y1R5WnVovOaSbT2mgFxMeNFdU1nFVZzRvP0_zdY9Z1LrD3FAwfgDFlgphqbFIXaM_InH6ccZkcR3TpA-8=s0)

_App bar color roles used for light and dark themes:_

- Surface
- On surface variant
- On surface variant
- On surface variant
- Surface container
- Surface container
- Surface container lowest

### Scroll states

![Color roles for app bars when flat and on scroll.](https://lh3.googleusercontent.com/qgUZNsgpdM8SYrJXXPwIGopmCgwml_BOWOVK2Jd3Mr1YH0l0s-QUmx7OLqtZzUeNjv5bNvkAJbQtTXOH_2pQ1rl4YJMXPmUgrY6Cnk1FRoE=s0)

_The app bar changes color when flat or on scroll. The search bar can also change color on scroll._

- Flat
- On scroll

## Measurements

### Search app bar

![Search app bar size and padding measurements.](https://lh3.googleusercontent.com/D3p0cIPGfVjsgb2uwIfeaUP8Gy5iKqUQdrnD2Y_jAzCzJwNfSbmJwgMlXiswfuajxc4lKy76zmV6fsQmzypOgf3BkQ6U6RZWB80Vh2CJUzPJ=s0)

_Search app bar padding and size measurements_

### Small app bar

![Small app bar size and padding measurements.](https://lh3.googleusercontent.com/H4ZUvbhNVB6nZRxe4nMVZVzdCBx_-5Catx8w75ocV79o0H3H1g0HaUlwn9nRQqTV6uF23rdQCpXWxQh5c2cY37lVTEb5fq44D-yHtBZbWPxP=s0)

_Small app bar padding and size measurements_

### Medium flexible app bar

![Medium flexible app bar padding and size measurements.](https://lh3.googleusercontent.com/HxIU5NI8Rgc_XUku9JZtE_J3Mh_ZqTkflcstm0jOYDUjDCH2LQ5KWWEFtgbXxFAHWibekIUnJLkAi_73IObTidX47ZJOCqKLdWYzoBPpJvs=s0)

_Medium flexible app bar padding and size measurements_

### Large flexible app bar

![Large flexible app bar padding and size measurements](https://lh3.googleusercontent.com/rnWEXin-f8-z1tV5HYObzrZBvd4ZaGTevIEPSTDT_MUlXgZcstmRcHlWB1RTmhAPKFlflMWR6wGNJSrdZ6yZRBKZQUiEN9wJ1beqTaaQ0YxS5w=s0)

_Large flexible app bar padding and size measurements_

---

## Baseline app bars

The **medium** and **large** app bars are no longer recommended in M3 Expressive. Use the **medium flexible** and **large flexible** app bars in their place.

![4 elements of medium and large app bars.](https://lh3.googleusercontent.com/CaigTE66RDqIoHJSccRlfc2d1uysIw1jKtoVnmEwF7RYEFFNO04VOJk_2F_kfQYHWTx20gbGftFgebrejDH_4K-o_JIfQvcacYmJQVhhXwQ_=s0)

_Medium and large app bars have the same elements:_

1. Container
2. Leading button
3. Trailing icons
4. Headline

### Tokens & specs (Baseline)

Select a token set to view in the table's menu. Baseline app bar token sets are organized into a medium, large, and older baseline token sets. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

_Note: The baseline token widget on the M3 site contains no visible tokens. Baseline app bars are deprecated in favor of medium flexible and large flexible variants._

### Color (Baseline)

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![4 color roles of the medium top app bar in light and dark scheme.](https://lh3.googleusercontent.com/e4aN7km3V3njU9MRbK2Y-6bnTFpRRLfbDKa6t-zeozAl7lyLsuldE0iKW6nYjGpg32MKOPEmSL6pIJxEo5La_BVjYKBel9puczkuYQAhOdc=s0)

_Medium top app bar color roles used for light and dark schemes:_

- Surface
- On surface
- On surface
- On surface variant

### Measurements (Baseline)

#### Medium app bar

![Diagram of medium app bar padding and size measurements.](https://lh3.googleusercontent.com/7cfEUCy5iCAizzE_y20aNb14dW26guioiGQHBS4yQ4VplThGOcWH7zYk-RBYiCgpeLiQdkIOcDF5QSPNxjd4qrl8EDreTSuv-T_SqBuka1ly=s0)

_Medium app bar padding and size measurements_

#### Large app bar

![Diagram of large app bar padding and size measurements.](https://lh3.googleusercontent.com/6cNl16UYquD3dbzxTza7uVUZO5_rpk7xI1yMbtn8LUjqJQUC1tMCUSl_TSRR5jCfjtTgeh3aJALvfBIdR7kTZHW-6RJ_tNRGGYs0q4w2WjdFeQ=s0)

_Large app bar padding and size measurements_
