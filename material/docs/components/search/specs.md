---
url: https://m3.material.io/components/search/specs
lastmod: 2026-01-26
crawled_at: 2026-03-08T11:26:38.000Z
category: components
section: search
page_type: specs
status: complete
---

# Search

Search lets people enter a keyword or phrase to get relevant information.

## Variants

| Variant | M3        | M3 Expressive |
| ------- | --------- | ------------- |
| Search  | Available | Available     |

## Configurations

### Style

Search comes in two styles:

- Contained: Has an expressive look and feel. It uses a filled container to separate a search bar from a list of suggestions or results
- Divided (baseline): Doesn't have the latest visual style, motion, or flexibility

![An email inbox search bar in a contained style.](https://lh3.googleusercontent.com/mZviJwGIZh_IpUNqJc4qSUDOLFrmDTpbjX_bufkF90qso_IE6fyfgB1e2VmG5N_E6Picjiw05l7vRqKShb46NyHV0Od2WHuqcVP4my2v5YBZ=s0)

_The contained style has a persistent, filled container, expressive motion, and rounded shape_

![An email inbox search bar in a divided style.](https://lh3.googleusercontent.com/sA1JTXVXpg8LWSsXFxuxTShN08cJnxWigVkMDRzrHVQT6XnlvmPuvbVrmmeMZ7ZgDpNyRgv6T-zOjMh798bEXeoj0QjURzBE5oSimBCuYgSq4w=s0)

_The divided (baseline) style uses a divider to separate the search bar from suggestions and results_

### Layout

Search suggestions and results appear in customizable lists, with two layout options: full-screen and docked. [More on search layouts](https://m3.material.io/google-material-3/pages/search/guidelines/#f20ef6ca-0d6e-431e-84ba-4cfb9ed48c0e)

![Full-screen search results with a search bar in the contained style.](https://lh3.googleusercontent.com/UN8OMCnrmxaASc6CRHtAONOcdeZf71JD03xLHV9sDt8-A6pMWEWH2DxRbjhxM7M8_IE2H7_w8mtdqqE56eamgN0CzGxQ-qpBH7UXsaOKE0c9-g=s0)

_Full-screen layout in the contained style_

![Docked search results with a search bar in the contained style.](https://lh3.googleusercontent.com/SlF8qBuCFFB-x7eQOBSJ6O2BgEmepkVWMQvU1b0gtBUdISdyG2QJbz0MeS6HPrO49nL_AZQaOil5-Rw8_SpIGMGHqioZRMJVOnwocdxXQQiamg=s0)

_Docked layout in the contained style_

![Full-screen search results with a search bar in the divided style.](https://lh3.googleusercontent.com/xcvU3lGYJQELKKllc3w1uW68diJE9YJPeiCtbZM8tC9Gzg0qg5TBBzjEiFkl8hYOWcik2XUQfgqpeXvX6hXmHX_oA5_PSHLKNeRZJT3i2NU=s0)

_Full-screen layout in the divided style_

![Docked search results with a search bar in the divided style.](https://lh3.googleusercontent.com/4FjOzW97D9JP3Mvu2GyfQ-PQhbAvpQRPjPjsqj3iM_125CTJgfv8X_u-qeSu4ti3i7ytSIZf4Crkoz5drPm10WS22uGld5GwXbFUhPKPLb1n=s0)

_Docked layout in the divided style_

| Category | Configuration       | M3        | M3 Expressive                   |
| -------- | ------------------- | --------- | ------------------------------- |
| Style    | Contained           | --        | Available                       |
|          | Divided             | Available | Not recommended. Use contained. |
| Layout   | Docked, full-screen | Available | Available                       |

## Tokens & specs

Use the table's menu to select a token set. The **search bar** set only contains tokens for the unfocused search bar. The **search view** set contains all other tokens when interacting with search, including all styles and layouts. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

---

### Search - View

#### Color

| Token                                          | Token name                                             | Value                |
| ---------------------------------------------- | ------------------------------------------------------ | -------------------- |
| Search view container surface tint layer color | md.comp.search-view.container.surface-tint-layer.color | #6750A4 (Deprecated) |
| Search view container color                    | md.comp.search-view.container.color                    | #ECE6F0              |
| Search view contained background color         | md.comp.search-view.contained.background.color         | #F7F2FA              |
| Search view container background elevation     | md.comp.search-view.container.elevation                | --                   |
| Search view header supporting text color       | md.comp.search-view.header.supporting-text.color       | #49454F              |
| Search view header input text color            | md.comp.search-view.header.input-text.color            | #1D1B20              |
| Search view header leading icon color          | md.comp.search-view.header.leading-icon.color          | #1D1B20              |
| Search view header trailing icon color         | md.comp.search-view.header.trailing-icon.color         | #49454F              |
| Search view divider color                      | md.comp.search-view.divider.color                      | #79747E              |

#### Layout and Text / Contained (expressive)

| Token                                                  | Token name                                                     | Value |
| ------------------------------------------------------ | -------------------------------------------------------------- | ----- |
| Search view contained leading margin                   | md.comp.search-view.contained.leading-margin                   | 12dp  |
| Search view contained trailing margin                  | md.comp.search-view.contained.trailing-margin                  | 12dp  |
| Search view contained docked bar results gap           | md.comp.search-view.contained.docked.bar-results.gap           | 2dp   |
| Search view contained docked results shape             | md.comp.search-view.contained.docked.results.shape             | --    |
| Search view contained docked bar shape                 | md.comp.search-view.contained.docked.bar.shape                 | --    |
| Search view contained full screen bar container height | md.comp.search-view.contained.full-screen.bar.container.height | 56dp  |
| Search view contained icon label gap                   | md.comp.search-view.contained.icon-label.gap                   | 4dp   |

#### Layout and Text / Divided (baseline)

| Token                                               | Token name                                                  | Value |
| --------------------------------------------------- | ----------------------------------------------------------- | ----- |
| Search view docked container shape                  | md.comp.search-view.docked.container.shape                  | --    |
| Search view full screen header container height     | md.comp.search-view.full-screen.header.container.height     | 72dp  |
| Search view docked header container height          | md.comp.search-view.docked.header.container.height          | 56dp  |
| Search view leading space                           | md.comp.search-view.leading-space                           | 16dp  |
| Search view trailing space                          | md.comp.search-view.trailing-space                          | 16dp  |
| Search view leading icon leading icon label space   | md.comp.search-view.leading-icon.leading-icon-label-space   | 16dp  |
| Search view trailing icon label trailing icon space | md.comp.search-view.trailing-icon.label-trailing-icon-space | 16dp  |

#### Layout and Text / Common tokens

| Token                                          | Token name                                             | Value  |
| ---------------------------------------------- | ------------------------------------------------------ | ------ |
| Search view full screen container shape        | md.comp.search-view.full-screen.container.shape        | --     |
| Search view header supporting text font        | md.comp.search-view.header.supporting-text.font        | Roboto |
| Search view header supporting text line height | md.comp.search-view.header.supporting-text.line-height | 24pt   |
| Search view header supporting text size        | md.comp.search-view.header.supporting-text.size        | 16pt   |
| Search view header supporting text weight      | md.comp.search-view.header.supporting-text.weight      | 400    |
| Search view header supporting text tracking    | md.comp.search-view.header.supporting-text.tracking    | 0.5pt  |
| Search view header input text font             | md.comp.search-view.header.input-text.font             | Roboto |
| Search view header input text line height      | md.comp.search-view.header.input-text.line-height      | 24pt   |
| Search view header input text size             | md.comp.search-view.header.input-text.size             | 16pt   |
| Search view header input text weight           | md.comp.search-view.header.input-text.weight           | 400    |
| Search view header input text tracking         | md.comp.search-view.header.input-text.tracking         | 0.5pt  |

---

### Search - Bar

#### Color / Enabled

| Token                            | Token name                               | Value   |
| -------------------------------- | ---------------------------------------- | ------- |
| Search bar container color       | md.comp.search-bar.container.color       | #ECE6F0 |
| Search bar container elevation   | md.comp.search-bar.container.elevation   | --      |
| Search bar leading icon color    | md.comp.search-bar.leading-icon.color    | #1D1B20 |
| Search bar trailing icon color   | md.comp.search-bar.trailing-icon.color   | #49454F |
| Search bar supporting text color | md.comp.search-bar.supporting-text.color | #49454F |
| Search bar input text color      | md.comp.search-bar.input-text.color      | #1D1B20 |

#### Color / Hovered

| Token                                  | Token name                                     | Value   |
| -------------------------------------- | ---------------------------------------------- | ------- |
| Search bar hover state layer color     | md.comp.search-bar.hover.state-layer.color     | #1D1B20 |
| Search bar hover state layer opacity   | md.comp.search-bar.hover.state-layer.opacity   | 0.08    |
| Search bar hover supporting text color | md.comp.search-bar.hover.supporting-text.color | #49454F |

#### Color / Pressed

| Token                                    | Token name                                       | Value   |
| ---------------------------------------- | ------------------------------------------------ | ------- |
| Search bar pressed state layer color     | md.comp.search-bar.pressed.state-layer.color     | #1D1B20 |
| Search bar pressed state layer opacity   | md.comp.search-bar.pressed.state-layer.opacity   | 0.1     |
| Search bar pressed supporting text color | md.comp.search-bar.pressed.supporting-text.color | #49454F |

#### Color / Focused

| Token                                | Token name                                        | Value   |
| ------------------------------------ | ------------------------------------------------- | ------- |
| Search bar focus indicator color     | md.comp.search-bar.focus.indicator.color          | #625B71 |
| Search bar focus indicator thickness | md.comp.search-bar.focus.indicator.thickness      | 3dp     |
| Search bar focus indicator offset    | md.comp.search-bar.focus.indicator.outline.offset | 2dp     |

#### Layout and Text / Contained (expressive)

| Token                                                | Token name                                                   | Value |
| ---------------------------------------------------- | ------------------------------------------------------------ | ----- |
| Search bar contained pane leading margin             | md.comp.search-bar.contained.leading-margin                  | 24dp  |
| Search bar contained pane trailing margin            | md.comp.search-bar.contained.trailing-margin                 | 24dp  |
| Search bar contained motion                          | md.comp.search-bar.contained.motion.spring                   | --    |
| Search bar contained leading space                   | md.comp.search-bar.contained.leading-space                   | 4dp   |
| Search bar contained trailing space                  | md.comp.search-bar.contained.trailing-space                  | 4dp   |
| Search bar contained no actions leading space        | md.comp.search-bar.contained.no-actions.leading-space        | 16dp  |
| Search bar contained no actions trailing space       | md.comp.search-bar.contained.no-actions.trailing-space       | 16dp  |
| Search bar contained icon label gap                  | md.comp.search-bar.contained.icon-label.gap                  | 4dp   |
| Search bar contained avatar target size              | md.comp.search-bar.contained.avatar.target-size              | 48dp  |
| Search bar contained trailing actions gap            | md.comp.search-bar.contained.trailing-actions.gap            | 0     |
| Search bar contained trailing actions leading space  | md.comp.search-bar.contained.trailing-actions.leading-space  | 4dp   |
| Search bar contained trailing actions trailing space | md.comp.search-bar.contained.trailing-actions.trailing-space | 4dp   |

#### Layout and Text / Baseline

| Token                                              | Token name                                                 | Value |
| -------------------------------------------------- | ---------------------------------------------------------- | ----- |
| Search bar leading space                           | md.comp.search-bar.leading-space                           | 16dp  |
| Search bar trailing space                          | md.comp.search-bar.trailing-space                          | 16dp  |
| Search bar leading icon leading icon label space   | md.comp.search-bar.leading-icon.leading-icon-label-space   | 16dp  |
| Search bar trailing icon label trailing icon space | md.comp.search-bar.trailing-icon.label-trailing-icon-space | 16dp  |

#### Layout and Text / Common tokens

| Token                                         | Token name                                            | Value                |
| --------------------------------------------- | ----------------------------------------------------- | -------------------- |
| Search bar container height                   | md.comp.search-bar.container.height                   | 56dp                 |
| Search bar container shape                    | md.comp.search-bar.container.shape                    | --                   |
| Search bar avatar size                        | md.comp.search-bar.avatar.size                        | 30dp                 |
| Search bar avatar shape                       | md.comp.search-bar.avatar.shape                       | --                   |
| Search bar icon size                          | md.comp.search-bar.icon.size                          | 24dp                 |
| Search bar supporting text font               | md.comp.search-bar.supporting-text.font               | Roboto               |
| Search bar supporting text line height        | md.comp.search-bar.supporting-text.line-height        | 24pt                 |
| Search bar supporting text size               | md.comp.search-bar.supporting-text.size               | 16pt                 |
| Search bar supporting text weight             | md.comp.search-bar.supporting-text.weight             | 400                  |
| Search bar supporting text tracking           | md.comp.search-bar.supporting-text.tracking           | 0.5pt                |
| Search bar input text font                    | md.comp.search-bar.input-text.font                    | Roboto               |
| Search bar input text line height             | md.comp.search-bar.input-text.line-height             | 24pt                 |
| Search bar input text size                    | md.comp.search-bar.input-text.size                    | 16pt                 |
| Search bar input text weight                  | md.comp.search-bar.input-text.weight                  | 400                  |
| Search bar input text tracking                | md.comp.search-bar.input-text.tracking                | 0.5pt                |
| Search bar container surface tint layer color | md.comp.search-bar.container.surface-tint-layer.color | #6750A4 (Deprecated) |

---

## Anatomy

Search includes a search bar and a container for suggestions and results. The container is empty by default. Use the list component to add content. In the divided (baseline) style, a divider separates the search bar and results.

![6 elements of search.](https://lh3.googleusercontent.com/nfgJlo7RsO4mElkJBSEo5E2yo1OPaLlu6o9PxA4lLhre5XuuiXAOj1LsjVPDk01MysoC5dasvtMXqSDJHFc1w6tycmubcpzPTA9uqm9hi-_z=s0)

1. Search bar container
2. Leading icon
3. Supporting text
4. Trailing icon and avatar (optional)
5. Input text
6. Container for search suggestions or results

### Examples

- With avatar
- With one trailing icon button
- With two trailing icon buttons
- With trailing icon button and avatar

![4 search bars with different trailing elements.](https://lh3.googleusercontent.com/4DOSj_PCy0dVTh_Mwwa-JmNfmmABObXarzG6mlKcjL7V1kdeh9_yrI9kQM5t1UhpsVOtc4bIq7mUwNYh2F50RDyInwgspspdrk-OHnd3lg=s0)

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

### Full-screen layout

![6 full-screen search color roles in light and dark themes.](https://lh3.googleusercontent.com/GAGCWflTpnmoM0DwwKy1v0DdcEY5uW2zCwZpY8CaR61iuDKk3E7JY7yVPwx3ukkfq4B7qyOQOLInW7c7dRgKHXbbovgH_1bU5kc7pTZHwihLkg=s0)

_Full-screen search color roles used in light and dark themes:_

- Surface container low
- On surface variant
- On surface variant
- Surface container high
- On surface variant
- On surface

### Docked layout

![6 docked search color roles in light and dark themes.](https://lh3.googleusercontent.com/nq53ckQlKsYuKPXvcEYzyrhQ7Fevp-zkK7TzePU0X7GjTIveyJLPIHzZrZ3ejyWOGKASNBS7Ir8_si6O61ubAWXRj8r_zYZNHNNpFK5JLTpGWQ=s0)

_Docked search color roles used in light and dark themes:_

- Surface container high
- On surface variant
- On surface variant
- Surface container high
- On surface variant
- On surface

## States

States are visual representations used to communicate the status of a component or an interactive element. In [focused search](https://m3.material.io/m3/pages/search/guidelines#a9b2df31-8561-4326-82cd-41ed6532b765), individual elements maintain their own interaction states. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

### Search bar

![4 search bar states in light and dark mode.](https://lh3.googleusercontent.com/YhREfAtX7rK4eHN7NEAdJA3S1VPgesRkPzepAVAMJWT7aA0MSV9dxw8A248GG0PwSTS8FjyLqzorX8U4wiSSaFgvjC3mwqVRAW48XjyvexXNnA=s0)

1. Enabled
2. Hovered
3. Focused
4. Pressed (ripple)

### Search suggestions & results

Search includes a container for suggestions and results. The container is empty by default. Use the list component to add content.

![4 search result states in light and dark mode.](https://lh3.googleusercontent.com/r1ddmkgjt_KkZZC-S8XGOaYfxyTvkqH_xLNf6MgWq89lOToWeBm5mEo8Kz2QhMxh3H_FOF_EjatnziEymAHu_ieaLrNcWfVEHkaM3AtgfOvZGQ=s0)

1. Enabled
2. Hovered
3. Focused
4. Pressed (ripple)

## Measurements

### Search bar

![Search bar with leading and trailing icon size and padding measurements.](https://lh3.googleusercontent.com/mGptx_4JUwLVcbHz93O72eFnZN6uaFTxfpTyUe7VfjOxvJQn0kew6pVVDeiAeV4S5rWjZ0xQR-RsZMNC_1ZPJIYVvSeqIh18hIMxI9NpJQ4=s0)

_Unfocused search bar with leading and trailing icon measurements_

![Search bar with trailing avatar size and padding measurements.](https://lh3.googleusercontent.com/dURHAt9JC2YGWnXNGRK34cv-wK4xrn9GhPUNnWdQ3ZcgzjMRuwGi5KNwpFaWn19j7Nls-mp9PTDF79hTW8gbm_201W-ZYWlQ1nrpTHCtT6kG=s0)

_Unfocused search bar with avatar measurements_

In M3 Expressive, the search bar expands when focused. The margins change from 24dp to 12dp.

![Unfocused search bar margins of 24dp.](https://lh3.googleusercontent.com/OfNDMCVyfuBJXmI9HLNp26jlV-aQMKAawCfhfzbzlt-wYn0lR4BxkbXOVbiEP6I2tgz0HFbjC2SY5qvbZ3flpPLc4Ad6I8VdNoZbdvc2rZQ=s0)

_Unfocused search bar margin measurements_

![Focused search bar margins of 12dp.](https://lh3.googleusercontent.com/R4k1-IGNQH3zamzgc2laHGU70E3SDajTXtksf4eWJIQO7gmrwoj9PCGHzqhrOju-IKtpdeoOCRi7WqJ5_xLvnUgtneP1ve8Wdj-lFQ5O74An=s0)

_Focused search bar margin measurements_

| Element   | Attribute                                         | Value                          |
| --------- | ------------------------------------------------- | ------------------------------ |
| Container | Width                                             | Min: 360dp, max: 720dp         |
|           | Height                                            | 56dp                           |
|           | Label alignment                                   | Start-aligned                  |
|           | Leading padding                                   | Unfocused: 24dp, focused: 12dp |
|           | Trailing padding                                  | Unfocused: 24dp, focused: 12dp |
|           | Leading icon and label padding (from tap target)  | 4dp                            |
|           | Label and trailing icon padding (from tap target) | 4dp                            |
| Avatar    | Size                                              | 30dp                           |

### Focused search

#### Contained style

![Full-screen layout size and padding measurements in contained style.](https://lh3.googleusercontent.com/b0xykJB3s1NEcZz6gQP37YfP-r6S3fbfqNKJaY-XbWy2AyoWViOPlmHhW6Lq6b4IbhmcDYAQJHonH59HvnDeIUdeXeMjIUdoWKNxbjQpN6xk=s0)

_Full-screen search padding and size measurements for contained style_

![Docked layout size and padding measurements in contained style.](https://lh3.googleusercontent.com/5Hst6KPsjyxhxQTptCBbkRahderHldeKa_33ucNVW9xZ9svHkx9eBhbhDKYR656D5DkvhdfdMIPhs5L9gWqq2yfEjn_AQvTQQg5Q2Y5WHhJ1=s0)

_Docked search padding and size measurements for contained style_

| Element               | Attribute                                        | Value                                 |
| --------------------- | ------------------------------------------------ | ------------------------------------- |
| Full-screen container | Width                                            | Full width                            |
|                       | Height                                           | Full height                           |
| Docked container      | Width                                            | Min: 360dp, max: 720dp                |
|                       | Height                                           | Min: 240dp, max: 2/3 of screen height |
| Search bar container  | Height                                           | 56dp                                  |
|                       | Label alignment                                  | Start-aligned                         |
|                       | Leading padding                                  | 16dp                                  |
|                       | Trailing padding                                 | 16dp                                  |
|                       | Leading icon and label padding (from tap target) | 4dp                                   |
|                       | Leading icon and label padding (from tap target) | 4dp                                   |

#### Divided style

![Full-screen layout size and padding measurements in divided style.](https://lh3.googleusercontent.com/RhpQaBUaokljf6Qv0Pb6sUHofotzoGbLGs7O74snG2B9yjauRk1iv6JFhmSRsHNdUu3nacOIuEmi0RoGtRGrjv8cs9IT5uFzr30IZDU7kge9vw=s0)

_Full-screen search padding and size measurements for divided style_

![Docked layout size and padding measurements in divided style.](https://lh3.googleusercontent.com/52yDW7vsdT_ythER_zFPD7eAyH2K5BvU_V9fB4COC5khSNA81CffErRCuS1kxNZkIfPYCWceEYxrnu07HijSkwnq5sIb-oMGHk_PUOu88t4=s0)

_Docked search padding and size measurements for divided style_
