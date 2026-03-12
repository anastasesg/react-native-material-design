---
url: https://m3.material.io/components/side-sheets/specs
lastmod: 2026-01-26
crawled_at: 2026-03-07T21:25:00.000Z
category: components
section: side-sheets
page_type: specs
status: complete
---

# Side sheets

Side sheets show secondary content anchored to the side of the screen

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Token set: Sheets - Side

#### Enabled / Container

| Token                                                | Token ID                                                       | Value   | Deprecated |
| ---------------------------------------------------- | -------------------------------------------------------------- | ------- | ---------- |
| Sheet side docked container color                    | `md.comp.sheet.side.docked.container.color`                    | #FEF7FF | Yes        |
| Sheet side docked modal container color              | `md.comp.sheet.side.docked.modal.container.color`              | #F7F2FA |            |
| Sheet side docked standard container color           | `md.comp.sheet.side.docked.standard.container.color`           | #FEF7FF |            |
| Sheet side docked container surface tint layer color | `md.comp.sheet.side.docked.container.surface-tint-layer.color` | #6750A4 | Yes        |
| Sheet side docked modal container elevation          | `md.comp.sheet.side.docked.modal.container.elevation`          |         |            |
| Sheet side docked standard container elevation       | `md.comp.sheet.side.docked.standard.container.elevation`       |         |            |
| Sheet side docked container height                   | `md.comp.sheet.side.docked.container.height`                   | 100%    |            |
| Sheet side docked container shape                    | `md.comp.sheet.side.docked.container.shape`                    | [shape] |            |
| Sheet side detached container shape                  | `md.comp.sheet.side.detached.container.shape`                  | [shape] |            |
| Sheet side docked container width                    | `md.comp.sheet.side.docked.container.width`                    | 256dp   |            |
| Sheet side docked modal container shape              | `md.comp.sheet.side.docked.modal.container.shape`              | [shape] |            |

#### Enabled / Headline

| Token                                  | Token ID                                         | Value       |
| -------------------------------------- | ------------------------------------------------ | ----------- |
| Sheet side docked headline color       | `md.comp.sheet.side.docked.headline.color`       | #49454F     |
| Sheet side docked headline font        | `md.comp.sheet.side.docked.headline.font`        | Roboto      |
| Sheet side docked headline line height | `md.comp.sheet.side.docked.headline.line-height` | 28pt        |
| Sheet side docked headline size        | `md.comp.sheet.side.docked.headline.size`        | 22pt        |
| Sheet side docked headline tracking    | `md.comp.sheet.side.docked.headline.tracking`    | 0           |
| Sheet side docked headline weight      | `md.comp.sheet.side.docked.headline.weight`      | 400         |
| Sheet side docked headline type style  | `md.comp.sheet.side.docked.headline.type`        | Title Large |

#### Enabled / Divider

| Token                           | Token ID                                  | Value   |
| ------------------------------- | ----------------------------------------- | ------- |
| Sheet side docked divider color | `md.comp.sheet.side.docked.divider.color` | #79747E |

#### Hovered / Label text

| Token                                           | Token ID                                                  | Value   |
| ----------------------------------------------- | --------------------------------------------------------- | ------- |
| Sheet side docked action hover label text color | `md.comp.sheet.side.docked.action.hover.label-text.color` | #6750A4 |

#### Hovered / State layer

| Token                                              | Token ID                                                     | Value   |
| -------------------------------------------------- | ------------------------------------------------------------ | ------- |
| Sheet side docked action hover state layer color   | `md.comp.sheet.side.docked.action.hover.state-layer.color`   | #6750A4 |
| Sheet side docked action hover state layer opacity | `md.comp.sheet.side.docked.action.hover.state-layer.opacity` | 0.08    |

#### Focused / Focus indicator

| Token                                       | Token ID                                                   | Value   |
| ------------------------------------------- | ---------------------------------------------------------- | ------- |
| Sheet side docked focus indicator color     | `md.comp.sheet.side.docked.focus.indicator.color`          | #625B71 |
| Sheet side docked focus indicator thickness | `md.comp.sheet.side.docked.focus.indicator.thickness`      | 3dp     |
| Sheet side docked focus indicator offset    | `md.comp.sheet.side.docked.focus.indicator.outline.offset` | 2dp     |

#### Focused / Label text

| Token                                           | Token ID                                                  | Value   |
| ----------------------------------------------- | --------------------------------------------------------- | ------- |
| Sheet side docked action focus label text color | `md.comp.sheet.side.docked.action.focus.label-text.color` | #6750A4 |

#### Focused / State layer

| Token                                              | Token ID                                                     | Value   |
| -------------------------------------------------- | ------------------------------------------------------------ | ------- |
| Sheet side docked action focus state layer color   | `md.comp.sheet.side.docked.action.focus.state-layer.color`   | #6750A4 |
| Sheet side docked action focus state layer opacity | `md.comp.sheet.side.docked.action.focus.state-layer.opacity` | 0.1     |

#### Pressed (ripple) / Label text

| Token                                             | Token ID                                                    | Value   |
| ------------------------------------------------- | ----------------------------------------------------------- | ------- |
| Sheet side docked action pressed label text color | `md.comp.sheet.side.docked.action.pressed.label-text.color` | #6750A4 |

#### Pressed (ripple) / State layer

| Token                                                | Token ID                                                       | Value   |
| ---------------------------------------------------- | -------------------------------------------------------------- | ------- |
| Sheet side docked action pressed state layer color   | `md.comp.sheet.side.docked.action.pressed.state-layer.color`   | #6750A4 |
| Sheet side docked action pressed state layer opacity | `md.comp.sheet.side.docked.action.pressed.state-layer.opacity` | 0.1     |

---

## Standard side sheet

![4 elements of a standard side sheet.](https://lh3.googleusercontent.com/lg2svhv9DuP5FMVqxsmnsLS5m2S1aSqU4fcUuQacBh9lHSy2DiPpaUpGpphS0iiVcuOJvSHp95mF9Z55dmy9F9KeGE5I-_-OOsgSuKRp_feW=s0)

1. Divider (optional)
2. Headline
3. Container
4. Close icon button

### Standard side sheet color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/).

![4 color roles applied to a side sheet in light and dark themes.](https://lh3.googleusercontent.com/LqFhUoIZJCxI-xrg-swaOn2vwlyswPNvs2JQfS2oNHhVms4yvkJE1tCBaFLUxKH_B-NWUoZ9Wo5QF2x437thBA0uzYeoBxeJ2NMWg2jmqbgL=s0)

_Side sheet color roles used for light and dark themes:_

1. Outline variant
2. On surface variant
3. Surface
4. On surface variant

### Standard side sheet measurements

![Standard side sheet padding and size measurements.](https://lh3.googleusercontent.com/2LAblBbcF_ZBcupC3Q2aXZlYse3imp3Y1ePIVfC3DY5iefsYPzFRDPu20wDJmkgcAxlpprO9NpnBwJdHjBTiA32q7BduBlHaREVzxLLbrKkDwA=s0)

_Side sheet padding and size measurements_

| Attribute                             | Value |
| ------------------------------------- | ----- |
| Start/end padding                     | 24dp  |
| Padding between top elements          | 12dp  |
| Bottom actions height                 | 72dp  |
| Bottom actions top padding            | 16dp  |
| Bottom actions bottom padding         | 24dp  |
| Bottom actions alignment (horizontal) | Left  |
| Max-width                             | 400dp |
| Margins (when detached)               | 16dp  |

---

## Modal side sheet

![7 elements of a modal side sheet.](https://lh3.googleusercontent.com/mCkCbKeP2EQNehrmAoIhTh8csAxLh6TS5YKqEtZWs-p6OhXjXK3OQ-8GxAiPRoDu7tQQ_qh6pdkkvtk5LLT2ACRvlqzzCn6QkW5TORe1go6W=s0)

1. Back icon button (optional)
2. Headline
3. Container
4. Close icon button
5. Divider (optional)
6. Action buttons (optional)
7. Scrim

### Modal side sheet color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/).

![4 color roles applied to a modal side sheet in light and dark themes.](https://lh3.googleusercontent.com/MCbwK4pOf-VBkCt3qXBvBVReNnD3TzDuwLJdajh_CvxUT_TN3_5Ho5v3QyV0SHhv5IHbZP0V5UbCSy8rXaQFJ79cocKme0PSXGWzZT5HUvU=s0)

_Side sheet color roles used for light and dark themes:_

1. On surface variant
2. On surface variant
3. Surface container low
4. On surface variant

### Modal side sheet measurements

![Modal side sheet padding and size measurements](https://lh3.googleusercontent.com/ggmDZsvw6x0ei4ktaEtZbG_D-SvR-dKw59udjcKCr7KdED37SNpjgIxFdBL6ySJrdglC7AeXbchojJM7pgxlhcVmcXVp26aCBCmnQ1utyjDL=s0)

_Modal side sheet padding and size measurements_

| Attribute                             | Value |
| ------------------------------------- | ----- |
| Start/end padding                     | 24dp  |
| Start padding with icon               | 16dp  |
| Padding between top elements          | 12dp  |
| Bottom actions height                 | 72dp  |
| Bottom actions top padding            | 16dp  |
| Bottom actions bottom padding         | 24dp  |
| Bottom actions alignment (horizontal) | Left  |
| Max-width                             | 400dp |
| Margins (when detached)               | 16dp  |
