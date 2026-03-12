---
url: https://m3.material.io/components/radio-button/specs
lastmod: 2025-12-01
crawled_at: 2026-02-04T12:00:00.000Z
category: components
section: radio-button
page_type: specs
status: complete
---

# Radio button

Radio buttons let people select one option from a set of options.

![Diagram of enabled radio button.](https://lh3.googleusercontent.com/dhK9o6CpKl0rU0nNthzBHEz_WjPB264BCIZiXJisj5qoYSGwynygzLH2JUgl2RyYjyArXkZNMdlpDOC6MEm1gY36QdhZED-VFVcPsQuff1rHZg=s0)

_Radio button icon_

## Tokens & specs

[Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Radio Button

#### Enabled

**Icon**

| Token | Value |
| --- | --- |
| `md.comp.radio-button.selected.icon.color` | #6750A4 |
| `md.comp.radio-button.unselected.icon.color` | #49454F |
| `md.comp.radio-button.icon.size` | 20dp |

**State layer**

| Token | Value |
| --- | --- |
| `md.comp.radio-button.state-layer.size` | 40dp |

#### Disabled

**Icon**

| Token | Value |
| --- | --- |
| `md.comp.radio-button.disabled.selected.icon.color` | #1D1B20 |
| `md.comp.radio-button.disabled.selected.icon.opacity` | 0.38 |
| `md.comp.radio-button.disabled.unselected.icon.color` | #1D1B20 |
| `md.comp.radio-button.disabled.unselected.icon.opacity` | 0.38 |

#### Hovered

**State layer**

| Token | Value |
| --- | --- |
| `md.comp.radio-button.selected.hover.state-layer.color` | #6750A4 |
| `md.comp.radio-button.selected.hover.state-layer.opacity` | 0.08 |
| `md.comp.radio-button.unselected.hover.state-layer.color` | #1D1B20 |
| `md.comp.radio-button.unselected.hover.state-layer.opacity` | 0.08 |

**Icon**

| Token | Value |
| --- | --- |
| `md.comp.radio-button.selected.hover.icon.color` | #6750A4 |
| `md.comp.radio-button.unselected.hover.icon.color` | #1D1B20 |

#### Focused

**State layer**

| Token | Value |
| --- | --- |
| `md.comp.radio-button.selected.focus.state-layer.color` | #6750A4 |
| `md.comp.radio-button.selected.focus.state-layer.opacity` | 0.1 |
| `md.comp.radio-button.unselected.focus.state-layer.color` | #1D1B20 |
| `md.comp.radio-button.unselected.focus.state-layer.opacity` | 0.1 |

**Icon**

| Token | Value |
| --- | --- |
| `md.comp.radio-button.selected.focus.icon.color` | #6750A4 |
| `md.comp.radio-button.unselected.focus.icon.color` | #1D1B20 |

#### Pressed

**State layer**

| Token | Value |
| --- | --- |
| `md.comp.radio-button.selected.pressed.state-layer.color` | #1D1B20 |
| `md.comp.radio-button.selected.pressed.state-layer.opacity` | 0.1 |
| `md.comp.radio-button.unselected.pressed.state-layer.color` | #6750A4 |
| `md.comp.radio-button.unselected.pressed.state-layer.opacity` | 0.1 |

**Icon**

| Token | Value |
| --- | --- |
| `md.comp.radio-button.selected.pressed.icon.color` | #6750A4 |
| `md.comp.radio-button.unselected.pressed.icon.color` | #1D1B20 |

---

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![Diagram of selected and unselected radio button colors.](https://lh3.googleusercontent.com/AiZMdjDtHEF9acx935WgjONj_Kvnb5Zl00C7Q1pxV56QjHx29o9tmyo4ACyJzafBGMDlrnOQBqScIiZY2mk205cbNAtBBqmtDAQR2ya7bcny=s0)

_Radio button color roles used for light and dark themes:_

- Primary
- On surface variant

### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

![Radio buttons with labels. The labels are the same color for both selected and unselected radio buttons.](https://lh3.googleusercontent.com/aFf7EK2cXKvdJegnbGx-u44UtDR9NZkQxw81UNCX4Q_D6_dvx_psq5rttJYfH9qytzYEkAxpFiNcej-7JO8Q0Mu6ySIq2h6sfDJN-BHFygZr=s0)

_The text color remains the same regardless if the button is selected or not_

---

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![Diagram of radio button states including enabled, hover, focus, pressed, and disabled.](https://lh3.googleusercontent.com/batG4K9NgonMPOe8NtbqKBf_5HbQhLrGbpIrPzKU2lPdbMfVm8nbualfdj3tFA5cfGE9OLgj4lxybNV6a8-d90gixbpw7mm11V6ky0s5-ik=s0)

- Enabled
- Hover
- Focus
- Pressed
- Disabled

[State specs are in the token module above](https://m3.material.io/m3/pages/radio-button/specs#3eef19a6-cdcb-4ecf-b1af-2b8095d485ac)

---

## Measurements

![Diagram of radio button layout values.](https://lh3.googleusercontent.com/Mix21eJwewQUVsSEPZiI8V9QtuoPH_Fw_CYVBaXX1vwpGyYgkN0dC8tdrO6WXjS-ADSW8GMMsDP5MNkMUF1i4izhNjHk7lsA8tAHRlZZ-L8H=s0)

_Radio button size measurements_

| Attribute | Value |
| --- | --- |
| Icon size | 20dp |
| State layer size | 40dp |
| Target size | 48dp |
