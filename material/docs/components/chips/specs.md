---
url: https://m3.material.io/components/chips/specs
lastmod: 2025-09-26
crawled_at: 2026-02-03T12:00:00.000Z
category: components
section: chips
page_type: specs
status: complete
---

# Chips

Chips help people enter information, make selections, filter content, or trigger actions.

## Tokens & specs

Select a component type below to see its elements, attributes, tokens, and values.

Chips come in 4 types:
- **Chip - Assist**: Help users complete actions or provide suggestions
- **Chip - Filter**: Allow users to filter content by selecting one or more options
- **Chip - Input**: Represent user input, often removable
- **Chip - Suggestion**: Offer dynamic suggestions to help users complete tasks

---

## Assist chip

![Assist chip diagram numbering 3 elements.](https://lh3.googleusercontent.com/UipTazZY6lB09YYRrq_uydfwLG0Xj5EIIlJVA252BfyovfvZXXXPGP66wGx4ZT0jOXqI6eQ7OLB6zVCjzqJ8CCJEqPW8Gw34jd-gSSA7qHsdIQ=s0)

**Elements:**
1. Container
2. Label text
3. Leading icon

### Assist chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![Assist chip diagram numbering 4 color elements.](https://lh3.googleusercontent.com/CgU4dUqBVfaebvIlmiYeW8i9Geq2Z3kASKWrVMHXl1kgDAx2tDJ40MrFVDf7tqkPEKuX4au-iLvzbSBoRQDxQokAEP5Y9-y3vwkFIyl6c0Hy=s0)

**Assist chip color roles used for light and dark themes:**
1. Surface container low (optional)
2. On surface
3. Outline
4. Primary

### Assist chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![36 assist chips illustrating combinations of styles, selection and non-selection, and 6 interaction states.](https://lh3.googleusercontent.com/s6LyjzP2TrQRGesL7fSbWcwEr94zeAaCTl8Zj7vDx6EsJ9Hn-9fNov0mtodXBs61mOtW6OnsmyPnirrfIzoRgYUxPDTIeH_4bXq-29iBOnxE=s0)

**Selected and unselected assist chip states:**
- Enabled
- Disabled
- Hovered
- Focused
- Pressed
- Dragged

### Assist chip measurements

![3 assist chips with measurements shown for types with and without a leading icon.](https://lh3.googleusercontent.com/tDL76BxJhx73568XEIJ3nbFUBxkn1ac2zO3Vqrf0CmFLPBi3yuLhjPYhZHmEFv6_cfjXMg-16mB2O5c11x-0yDMvb9L4QB7oHVHVLm29QvCH=s0)

_Assist chip padding and size measurements_

| Attribute | Value |
| --- | --- |
| Height | 32dp |
| Shape | 8dp corner radius |
| Icon size | 18dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding | 16dp |
| Left/right padding with icon | 8dp |
| Padding between elements | 8dp |

### Assist chip tokens

#### Enabled

**Container**

| Token | Value |
| --- | --- |
| `md.comp.assist-chip.container.shape` | 8dp corner radius |
| `md.comp.assist-chip.container.height` | 32dp |
| `md.comp.assist-chip.flat.container.elevation` | Level 0 |
| `md.comp.assist-chip.flat.outline.color` | #CAC4D0 |
| `md.comp.assist-chip.flat.outline.width` | 1dp |
| `md.comp.assist-chip.elevated.container.elevation` | Level 1 |
| `md.comp.assist-chip.elevated.container.color` | #F7F2FA |
| `md.comp.assist-chip.elevated.container.shadow-color` | #000000 |
| `md.comp.assist-chip.container.surface-tint-layer.color` | #6750A4 (deprecated) |

**Label text**

| Token | Value |
| --- | --- |
| `md.comp.assist-chip.label-text.font` | Roboto |
| `md.comp.assist-chip.label-text.line-height` | 20pt |
| `md.comp.assist-chip.label-text.size` | 14pt |
| `md.comp.assist-chip.label-text.weight` | 500 |
| `md.comp.assist-chip.label-text.tracking` | 0.1pt |
| `md.comp.assist-chip.label-text.color` | #1D1B20 |

**Icon**

| Token | Value |
| --- | --- |
| `md.comp.assist-chip.with-icon.icon.size` | 18dp |
| `md.comp.assist-chip.with-icon.icon.color` | #6750A4 |

#### Disabled

**Container**

| Token | Value |
| --- | --- |
| `md.comp.assist-chip.flat.disabled.outline.color` | #1D1B20 |
| `md.comp.assist-chip.flat.disabled.outline.opacity` | 0.12 |
| `md.comp.assist-chip.elevated.disabled.container.elevation` | Level 0 |
| `md.comp.assist-chip.elevated.disabled.container.color` | #1D1B20 |
| `md.comp.assist-chip.elevated.disabled.container.opacity` | 0.12 |

**Label text**

| Token | Value |
| --- | --- |
| `md.comp.assist-chip.disabled.label-text.color` | #1D1B20 |
| `md.comp.assist-chip.disabled.label-text.opacity` | 0.38 |

**Icon**

| Token | Value |
| --- | --- |
| `md.comp.assist-chip.with-icon.disabled.icon.color` | #1D1B20 |
| `md.comp.assist-chip.with-icon.disabled.icon.opacity` | 0.38 |

#### Hovered

| Token | Value |
| --- | --- |
| `md.comp.assist-chip.elevated.hover.container.elevation` | Level 2 |
| `md.comp.assist-chip.hover.label-text.color` | #1D1B20 |
| `md.comp.assist-chip.hover.state-layer.color` | #1D1B20 |
| `md.comp.assist-chip.hover.state-layer.opacity` | 0.08 |
| `md.comp.assist-chip.with-icon.hover.icon.color` | #6750A4 |

#### Focused

| Token | Value |
| --- | --- |
| `md.comp.assist-chip.focus.indicator.color` | #625B71 |
| `md.comp.assist-chip.focus.indicator.thickness` | 3dp |
| `md.comp.assist-chip.focus.indicator.outline.offset` | 2dp |
| `md.comp.assist-chip.flat.focus.outline.color` | #1D1B20 |
| `md.comp.assist-chip.elevated.focus.container.elevation` | Level 1 |
| `md.comp.assist-chip.focus.label-text.color` | #1D1B20 |
| `md.comp.assist-chip.focus.state-layer.color` | #1D1B20 |
| `md.comp.assist-chip.focus.state-layer.opacity` | 0.1 |
| `md.comp.assist-chip.with-icon.focus.icon.color` | #6750A4 |

#### Pressed

| Token | Value |
| --- | --- |
| `md.comp.assist-chip.elevated.pressed.container.elevation` | Level 1 |
| `md.comp.assist-chip.pressed.label-text.color` | #1D1B20 |
| `md.comp.assist-chip.pressed.state-layer.color` | #1D1B20 |
| `md.comp.assist-chip.pressed.state-layer.opacity` | 0.1 |
| `md.comp.assist-chip.with-icon.pressed.icon.color` | #6750A4 |

#### Dragged

| Token | Value |
| --- | --- |
| `md.comp.assist-chip.dragged.container.elevation` | Level 4 |
| `md.comp.assist-chip.dragged.label-text.color` | #1D1B20 |
| `md.comp.assist-chip.dragged.state-layer.color` | #1D1B20 |
| `md.comp.assist-chip.dragged.state-layer.opacity` | 0.16 |
| `md.comp.assist-chip.with-icon.dragged.icon.color` | #6750A4 |

---

## Filter chip

![Filter chip diagram numbering 4 elements.](https://lh3.googleusercontent.com/WczxPrTlNqVqk9HILdgclP7OR_TQ6sLWYPB9qIHvZ6QLGDS9Uo1Sjm30UFiVAJmo8DVAWcZPacF_gyj-dGZDZ1JROW93iccqf-sa_rjqQ-S7=s0)

**Elements:**
1. Container
2. Label text
3. Leading icon
4. Trailing icon

### Filter chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![Filter chip diagram numbering 4 color elements.](https://lh3.googleusercontent.com/RNTC_dI5aLvv326OQUVVogDooNsMC6TR_ZCoUF7-AMaq0UQwFLlEh_qfWXur5Qn5_BaM_Wasib1tgaOKBDVNPHe4BoJ2-UWSgnujBLv7tzo=s0)

**Filter chip color roles used for light and dark themes:**
1. Surface container low (optional)
2. On surface variant
3. On surface variant
4. Outline

### Filter chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![24 filter chips showing combinations of elevated, non-elevated, selected, and non-selected styles, and 6 interaction states.](https://lh3.googleusercontent.com/KftllQmRE7STKHvBYUhxG13rWSMWMWOj_Y3mqpHMyKpj4Exvl-J7B4cBwB1_Cexx8oaCnXYw7hdPnk16YmZS-zyVWB7vbokHFJjfkahSM0Eo=s0)

**Selected and unselected filter chip states:**
- Enabled
- Disabled
- Hovered
- Focused
- Pressed
- Dragged

### Filter chip measurements

![3 filter chips with measurements shown for types with and without a leading icon and trailing icon.](https://lh3.googleusercontent.com/22fmoqWkQTxchSh4qTgO2nrZ76sooCtX3ywKPLhqba5suVk8PW60_IA03iQ1yUdTipCKCFx0mRHhnWRs9Hm2oGdr2s9K9J8uaKukdPjGkNoA=s0)

_Filter chip padding and size measurements_

| Attribute | Value |
| --- | --- |
| Container height | 32dp |
| Container shape | 8dp corner radius |
| Icon size | 18dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding | 16dp |
| Left/right padding with icon | 8dp |
| Padding between elements | 8dp |

### Filter chip tokens

#### Enabled

**Container**

| Token | Value |
| --- | --- |
| `md.comp.filter-chip.container.shape` | 8dp corner radius |
| `md.comp.filter-chip.container.height` | 32dp |
| `md.comp.filter-chip.container.shadow-color` | #000000 (deprecated) |
| `md.comp.filter-chip.container.surface-tint-layer.color` | #6750A4 (deprecated) |
| `md.comp.filter-chip.flat.container.elevation` | Level 0 |
| `md.comp.filter-chip.flat.unselected.outline.color` | #CAC4D0 |
| `md.comp.filter-chip.flat.unselected.outline.width` | 1dp |
| `md.comp.filter-chip.flat.selected.container.color` | #E8DEF8 |
| `md.comp.filter-chip.flat.selected.outline.width` | 0 |
| `md.comp.filter-chip.elevated.container.elevation` | Level 1 |
| `md.comp.filter-chip.elevated.container.shadow-color` | #000000 |
| `md.comp.filter-chip.elevated.unselected.container.color` | #F7F2FA |
| `md.comp.filter-chip.elevated.selected.container.color` | #E8DEF8 |

**Label text**

| Token | Value |
| --- | --- |
| `md.comp.filter-chip.label-text.font` | Roboto |
| `md.comp.filter-chip.label-text.line-height` | 20pt |
| `md.comp.filter-chip.label-text.size` | 14pt |
| `md.comp.filter-chip.label-text.weight` | 500 |
| `md.comp.filter-chip.label-text.tracking` | 0.1pt |
| `md.comp.filter-chip.unselected.label-text.color` | #49454F |
| `md.comp.filter-chip.selected.label-text.color` | #4A4458 |

**Icon**

| Token | Value |
| --- | --- |
| `md.comp.filter-chip.with-icon.icon.size` | 18dp |
| `md.comp.filter-chip.with-leading-icon.selected.leading-icon.color` | #4A4458 |
| `md.comp.filter-chip.with-leading-icon.unselected.leading-icon.color` | #6750A4 |
| `md.comp.filter-chip.with-trailing-icon.selected.trailing-icon.color` | #4A4458 |
| `md.comp.filter-chip.with-trailing-icon.unselected.trailing-icon.color` | #49454F |

#### Disabled

**Container**

| Token | Value |
| --- | --- |
| `md.comp.filter-chip.flat.disabled.unselected.outline.color` | #1D1B20 |
| `md.comp.filter-chip.flat.disabled.unselected.outline.opacity` | 0.12 |
| `md.comp.filter-chip.flat.disabled.selected.container.color` | #1D1B20 |
| `md.comp.filter-chip.flat.disabled.selected.container.opacity` | 0.12 |
| `md.comp.filter-chip.elevated.disabled.container.elevation` | Level 0 |
| `md.comp.filter-chip.elevated.disabled.container.color` | #1D1B20 |
| `md.comp.filter-chip.elevated.disabled.container.opacity` | 0.12 |

**Label text**

| Token | Value |
| --- | --- |
| `md.comp.filter-chip.disabled.label-text.color` | #1D1B20 |
| `md.comp.filter-chip.disabled.label-text.opacity` | 0.38 |

**Icon**

| Token | Value |
| --- | --- |
| `md.comp.filter-chip.with-leading-icon.disabled.leading-icon.color` | #1D1B20 |
| `md.comp.filter-chip.with-leading-icon.disabled.leading-icon.opacity` | 0.38 |
| `md.comp.filter-chip.with-trailing-icon.disabled.trailing-icon.color` | #1D1B20 |
| `md.comp.filter-chip.with-trailing-icon.disabled.trailing-icon.opacity` | 0.38 |

#### Focused

| Token | Value |
| --- | --- |
| `md.comp.filter-chip.focus.indicator.color` | #625B71 |
| `md.comp.filter-chip.focus.indicator.thickness` | 3dp |
| `md.comp.filter-chip.focus.indicator.outline.offset` | 2dp |
| `md.comp.filter-chip.flat.unselected.focus.outline.color` | #49454F |
| `md.comp.filter-chip.unselected.focus.label-text.color` | #49454F |
| `md.comp.filter-chip.selected.focus.label-text.color` | #4A4458 |
| `md.comp.filter-chip.unselected.focus.state-layer.color` | #49454F |
| `md.comp.filter-chip.unselected.focus.state-layer.opacity` | 0.1 |
| `md.comp.filter-chip.selected.focus.state-layer.color` | #4A4458 |
| `md.comp.filter-chip.selected.focus.state-layer.opacity` | 0.1 |

#### Hovered

| Token | Value |
| --- | --- |
| `md.comp.filter-chip.unselected.hover.label-text.color` | #49454F |
| `md.comp.filter-chip.selected.hover.label-text.color` | #4A4458 |
| `md.comp.filter-chip.unselected.hover.state-layer.color` | #49454F |
| `md.comp.filter-chip.unselected.hover.state-layer.opacity` | 0.08 |
| `md.comp.filter-chip.selected.hover.state-layer.color` | #4A4458 |
| `md.comp.filter-chip.selected.hover.state-layer.opacity` | 0.08 |

#### Pressed

| Token | Value |
| --- | --- |
| `md.comp.filter-chip.unselected.pressed.label-text.color` | #49454F |
| `md.comp.filter-chip.selected.pressed.label-text.color` | #4A4458 |
| `md.comp.filter-chip.unselected.pressed.state-layer.color` | #4A4458 |
| `md.comp.filter-chip.unselected.pressed.state-layer.opacity` | 0.1 |
| `md.comp.filter-chip.selected.pressed.state-layer.color` | #49454F |
| `md.comp.filter-chip.selected.pressed.state-layer.opacity` | 0.1 |

#### Dragged

| Token | Value |
| --- | --- |
| `md.comp.filter-chip.dragged.container.elevation` | Level 4 |
| `md.comp.filter-chip.unselected.dragged.label-text.color` | #49454F |
| `md.comp.filter-chip.selected.dragged.label-text.color` | #4A4458 |
| `md.comp.filter-chip.unselected.dragged.state-layer.color` | #49454F |
| `md.comp.filter-chip.unselected.dragged.state-layer.opacity` | 0.16 |
| `md.comp.filter-chip.selected.dragged.state-layer.color` | #4A4458 |
| `md.comp.filter-chip.selected.dragged.state-layer.opacity` | 0.16 |

---

## Input chip

![Input chip diagram numbering 4 elements.](https://lh3.googleusercontent.com/MFMFJhZqnlfNlT6wWDldzAYdPhLBn9OvPgeAyUmocIf1YooTBamJN4doylmVzztWcDYbjHmV2OSQEaOoefcOMS8Uu0hEuGTGbTJYCxLfXKSu=s0)

**Elements:**
1. Container
2. Label text
3. Trailing icon
4. Leading icon

### Input chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![Input chip diagram numbering 5 color elements.](https://lh3.googleusercontent.com/YmMzczrJL0g0MAMFwW2zs8up57xJzcAxNJraHceXpaVZVPAEN2ukdjQwHpuYnVjEKQrnC-KGaC09_KYKNpWgMXg5iqhm8xGleC3-wuG0E0XYwg=s0)

**Input chip color roles used for light and dark themes:**
1. On surface variant
2. Surface container low (optional)
3. On surface variant
4. On surface variant
5. Outline variant
6. Primary
7. Secondary container
8. On secondary container
9. On secondary container

### Input chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![33 input chips illustrating combinations of styles, selection and non-selection, and 6 interaction states.](https://lh3.googleusercontent.com/ganq0HIgyGsa-HH5bnqU95oJCYypADT4v0LOgsmwQ9ek5B45GtD6EgJCpd589BbA4-tDKOpNCksyDIkrq7krkMG8_nJ0eHSu30BIj7OCqFE=s0)

**Selected and unselected input chip states:**
- Enabled
- Disabled
- Hovered
- Focused
- Pressed
- Dragged

### Input chip measurements

![2 input chips with measurements: 1 with a trailing icon only; 1 with an avatar as a leading icon and a trailing icon.](https://lh3.googleusercontent.com/LwwDa1dknxPJeGchp4qkldM7ofBH7mypUCmVb5VQRgeY0cICTc5_H0fHVUTbuY0TQ7VNaBlqfYrlPFwKL4FnRQL5N5chlOoz8EhVdkbmers=s0)

_Input chip padding and size measurements_

| Attribute | Value |
| --- | --- |
| Container height | 32dp |
| Container shape | 8dp corner radius |
| Icon size | 18dp |
| Avatar shape | 12dp corner radius |
| Avatar size | 24dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left padding for avatar | 4dp |
| Right padding for avatar | 8dp |
| Left/right padding for icon | 8dp |
| Padding between elements | 8dp |
| Target size for close icon | Min 48dp |

### Input chip tokens

#### Enabled

**Container**

| Token | Value |
| --- | --- |
| `md.comp.input-chip.container.shape` | 8dp corner radius |
| `md.comp.input-chip.container.height` | 32dp |
| `md.comp.input-chip.container.elevation` | Level 0 |
| `md.comp.input-chip.unselected.outline.color` | #79747E |
| `md.comp.input-chip.unselected.outline.width` | 1dp |
| `md.comp.input-chip.selected.container.color` | #E8DEF8 |
| `md.comp.input-chip.selected.outline.width` | 0 |

**Label text**

| Token | Value |
| --- | --- |
| `md.comp.input-chip.label-text.font` | Roboto |
| `md.comp.input-chip.label-text.line-height` | 20pt |
| `md.comp.input-chip.label-text.size` | 14pt |
| `md.comp.input-chip.label-text.weight` | 500 |
| `md.comp.input-chip.label-text.tracking` | 0.1pt |
| `md.comp.input-chip.unselected.label-text.color` | #49454F |
| `md.comp.input-chip.selected.label-text.color` | #4A4458 |

**Icon**

| Token | Value |
| --- | --- |
| `md.comp.input-chip.with-leading-icon.leading-icon.size` | 18dp |
| `md.comp.input-chip.with-leading-icon.unselected.leading-icon.color` | #49454F |
| `md.comp.input-chip.with-leading-icon.selected.leading-icon.color` | #4A4458 |
| `md.comp.input-chip.with-trailing-icon.trailing-icon.size` | 18dp |
| `md.comp.input-chip.with-trailing-icon.unselected.trailing-icon.color` | #49454F |
| `md.comp.input-chip.with-trailing-icon.selected.trailing-icon.color` | #4A4458 |

**Avatar**

| Token | Value |
| --- | --- |
| `md.comp.input-chip.with-avatar.avatar.shape` | 12dp corner radius |
| `md.comp.input-chip.with-avatar.avatar.size` | 24dp |

#### Disabled

| Token | Value |
| --- | --- |
| `md.comp.input-chip.disabled.unselected.outline.color` | #1D1B20 |
| `md.comp.input-chip.disabled.unselected.outline.opacity` | 0.12 |
| `md.comp.input-chip.disabled.selected.container.color` | #1D1B20 |
| `md.comp.input-chip.disabled.selected.container.opacity` | 0.12 |
| `md.comp.input-chip.disabled.label-text.color` | #1D1B20 |
| `md.comp.input-chip.disabled.label-text.opacity` | 0.38 |
| `md.comp.input-chip.with-leading-icon.disabled.leading-icon.color` | #1D1B20 |
| `md.comp.input-chip.with-leading-icon.disabled.leading-icon.opacity` | 0.38 |
| `md.comp.input-chip.with-trailing-icon.disabled.trailing-icon.color` | #1D1B20 |
| `md.comp.input-chip.with-trailing-icon.disabled.trailing-icon.opacity` | 0.38 |

#### Focused

| Token | Value |
| --- | --- |
| `md.comp.input-chip.focus.indicator.color` | #625B71 |
| `md.comp.input-chip.focus.indicator.thickness` | 3dp |
| `md.comp.input-chip.focus.indicator.outline.offset` | 2dp |
| `md.comp.input-chip.unselected.focus.outline.color` | #49454F |
| `md.comp.input-chip.unselected.focus.label-text.color` | #49454F |
| `md.comp.input-chip.selected.focus.label-text.color` | #4A4458 |
| `md.comp.input-chip.focus.state-layer.color` | #49454F |
| `md.comp.input-chip.focus.state-layer.opacity` | 0.1 |

#### Hovered

| Token | Value |
| --- | --- |
| `md.comp.input-chip.unselected.hover.label-text.color` | #49454F |
| `md.comp.input-chip.selected.hover.label-text.color` | #4A4458 |
| `md.comp.input-chip.hover.state-layer.color` | #49454F |
| `md.comp.input-chip.hover.state-layer.opacity` | 0.08 |

#### Pressed

| Token | Value |
| --- | --- |
| `md.comp.input-chip.unselected.pressed.label-text.color` | #49454F |
| `md.comp.input-chip.selected.pressed.label-text.color` | #4A4458 |
| `md.comp.input-chip.pressed.state-layer.color` | #49454F |
| `md.comp.input-chip.pressed.state-layer.opacity` | 0.1 |

#### Dragged

| Token | Value |
| --- | --- |
| `md.comp.input-chip.dragged.container.elevation` | Level 4 |
| `md.comp.input-chip.unselected.dragged.label-text.color` | #49454F |
| `md.comp.input-chip.selected.dragged.label-text.color` | #4A4458 |
| `md.comp.input-chip.dragged.state-layer.color` | #49454F |
| `md.comp.input-chip.dragged.state-layer.opacity` | 0.16 |

---

## Suggestion chip

![Suggestion chip diagram numbering 2 elements.](https://lh3.googleusercontent.com/ytfZyslYlVSL6feuGZznpeG6Wi6YP9sPrNyN7IDDr8cClF4pFIS2gdMGmX6GAG6oYN2ZAHE4hitoYzO2MSs88zdrks6vikOU8NHwkOGHeWU=s0)

**Elements:**
1. Container
2. Label text

### Suggestion chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![Suggestion chip diagram numbering 3 color elements.](https://lh3.googleusercontent.com/4Ni_EPMelCZDcAAcbhbIDdGj4ER5JGlUjPOtgO4Qx1IIooRh25eJo_y7LgMr7yD0tX-PcXu3vY6O7u-wlJRgFUK23JxG69NgKqYz6sSPywNx=s0)

**Suggestion chip color roles used for light and dark themes:**
1. Outline
2. Surface container low (optional)
3. On surface variant

### Suggestion chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![24 suggestion chips illustrating combinations of styles across 6 interaction states.](https://lh3.googleusercontent.com/YYoIuUfDsUQqPR--eP-zfow9SJVnjSlY060t1WUqtVUdBkynNCTTe1IK16I4rpfBRRpHrZqDKEYftwwhLFa18FYaI3-aRJpqPTUpr1w5ekG0=s0)

**Selected and unselected suggestion chip states:**
- Enabled
- Disabled
- Hovered
- Focused
- Pressed
- Dragged

### Suggestion chip measurements

![2 suggestion chips with measurements shown for types with and without a leading icon.](https://lh3.googleusercontent.com/ToyBZvY6HgToxkWV0wPdYIHq3FzSkIz4HUsgSzJD-Q30jS8TQTzRzN81nagH7Q1XDitG-Lgzav9wephSlFzWHaJn24mnANMqlm3KUNaeCRt6=s0)

_Suggestion chip padding and size measurements_

| Attribute | Value |
| --- | --- |
| Container height | 32dp |
| Container shape | 8dp corner radius |
| Icon size | 18dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding without icon | 16dp |
| Left/right padding with icon | 8dp |
| Padding between elements | 8dp |

### Suggestion chip tokens

#### Enabled

**Container**

| Token | Value |
| --- | --- |
| `md.comp.suggestion-chip.container.shape` | 8dp corner radius |
| `md.comp.suggestion-chip.container.height` | 32dp |
| `md.comp.suggestion-chip.flat.container.elevation` | Level 0 |
| `md.comp.suggestion-chip.flat.outline.color` | #CAC4D0 |
| `md.comp.suggestion-chip.flat.outline.width` | 1dp |
| `md.comp.suggestion-chip.elevated.container.elevation` | Level 1 |
| `md.comp.suggestion-chip.elevated.container.color` | #F7F2FA |
| `md.comp.suggestion-chip.elevated.container.shadow-color` | #000000 |

**Label text**

| Token | Value |
| --- | --- |
| `md.comp.suggestion-chip.label-text.font` | Roboto |
| `md.comp.suggestion-chip.label-text.line-height` | 20pt |
| `md.comp.suggestion-chip.label-text.size` | 14pt |
| `md.comp.suggestion-chip.label-text.weight` | 500 |
| `md.comp.suggestion-chip.label-text.tracking` | 0.1pt |
| `md.comp.suggestion-chip.label-text.color` | #49454F |

**Icon**

| Token | Value |
| --- | --- |
| `md.comp.suggestion-chip.with-icon.icon.size` | 18dp |
| `md.comp.suggestion-chip.with-icon.icon.color` | #49454F |

#### Disabled

| Token | Value |
| --- | --- |
| `md.comp.suggestion-chip.flat.disabled.outline.color` | #1D1B20 |
| `md.comp.suggestion-chip.flat.disabled.outline.opacity` | 0.12 |
| `md.comp.suggestion-chip.elevated.disabled.container.elevation` | Level 0 |
| `md.comp.suggestion-chip.elevated.disabled.container.color` | #1D1B20 |
| `md.comp.suggestion-chip.elevated.disabled.container.opacity` | 0.12 |
| `md.comp.suggestion-chip.disabled.label-text.color` | #1D1B20 |
| `md.comp.suggestion-chip.disabled.label-text.opacity` | 0.38 |
| `md.comp.suggestion-chip.with-icon.disabled.icon.color` | #1D1B20 |
| `md.comp.suggestion-chip.with-icon.disabled.icon.opacity` | 0.38 |

#### Focused

| Token | Value |
| --- | --- |
| `md.comp.suggestion-chip.focus.indicator.color` | #625B71 |
| `md.comp.suggestion-chip.focus.indicator.thickness` | 3dp |
| `md.comp.suggestion-chip.focus.indicator.outline.offset` | 2dp |
| `md.comp.suggestion-chip.flat.focus.outline.color` | #49454F |
| `md.comp.suggestion-chip.elevated.focus.container.elevation` | Level 1 |
| `md.comp.suggestion-chip.focus.label-text.color` | #49454F |
| `md.comp.suggestion-chip.focus.state-layer.color` | #49454F |
| `md.comp.suggestion-chip.focus.state-layer.opacity` | 0.1 |
| `md.comp.suggestion-chip.with-icon.focus.icon.color` | #49454F |

#### Hovered

| Token | Value |
| --- | --- |
| `md.comp.suggestion-chip.elevated.hover.container.elevation` | Level 2 |
| `md.comp.suggestion-chip.hover.label-text.color` | #49454F |
| `md.comp.suggestion-chip.hover.state-layer.color` | #49454F |
| `md.comp.suggestion-chip.hover.state-layer.opacity` | 0.08 |
| `md.comp.suggestion-chip.with-icon.hover.icon.color` | #49454F |

#### Pressed

| Token | Value |
| --- | --- |
| `md.comp.suggestion-chip.elevated.pressed.container.elevation` | Level 1 |
| `md.comp.suggestion-chip.pressed.label-text.color` | #49454F |
| `md.comp.suggestion-chip.pressed.state-layer.color` | #49454F |
| `md.comp.suggestion-chip.pressed.state-layer.opacity` | 0.1 |
| `md.comp.suggestion-chip.with-icon.pressed.icon.color` | #49454F |

#### Dragged

| Token | Value |
| --- | --- |
| `md.comp.suggestion-chip.dragged.container.elevation` | Level 4 |
| `md.comp.suggestion-chip.dragged.label-text.color` | #49454F |
| `md.comp.suggestion-chip.dragged.state-layer.color` | #49454F |
| `md.comp.suggestion-chip.dragged.state-layer.opacity` | 0.16 |
| `md.comp.suggestion-chip.with-icon.dragged.icon.color` | #49454F |
