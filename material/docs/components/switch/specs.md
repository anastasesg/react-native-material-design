---
url: https://m3.material.io/components/switch/specs
lastmod: 2026-01-06
crawled_at: 2026-02-04T12:00:00.000Z
category: components
section: switch
page_type: specs
status: complete
---

# Switch

Switches toggle the selection of an item on or off.

![3 elements of a switch.](https://lh3.googleusercontent.com/a4JkZitJC-KZ1qxKfHvM-B2tuC0JqMsA08tY-fRrBhlXDf6JpvjpQD9IAZ0_zg-R1E0tvzAst-VwpSYDGUkfGABeKMCgHcAtXPwan6iiuNILhA=s0)

_Track, Handle (formerly "thumb"), Icon_

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Switch

#### Enabled / Icon

| Token | Value |
| --- | --- |
| md.comp.switch.selected.icon.color | #4F378B |
| md.comp.switch.selected.icon.size | 16dp |
| md.comp.switch.unselected.icon.color | #E6E0E9 |
| md.comp.switch.unselected.icon.size | 16dp |

#### Enabled / Track

| Token | Value |
| --- | --- |
| md.comp.switch.track.height | 32dp |
| md.comp.switch.track.width | 52dp |
| md.comp.switch.unselected.track.outline.color | #79747E |
| md.comp.switch.track.outline.width | 2dp |
| md.comp.switch.track.shape | md.sys.shape.corner.full |
| md.comp.switch.selected.track.color | #6750A4 |
| md.comp.switch.unselected.track.color | #E6E0E9 |

#### Enabled / Handle

| Token | Value |
| --- | --- |
| md.comp.switch.unselected.handle.height | 16dp |
| md.comp.switch.with-icon.handle.height | 24dp |
| md.comp.switch.selected.handle.height | 24dp |
| md.comp.switch.pressed.handle.height | 28dp |
| md.comp.switch.unselected.handle.width | 16dp |
| md.comp.switch.with-icon.handle.width | 24dp |
| md.comp.switch.selected.handle.width | 24dp |
| md.comp.switch.pressed.handle.width | 28dp |
| md.comp.switch.handle.shape | md.sys.shape.corner.full |
| md.comp.switch.selected.handle.color | #FFFFFF |
| md.comp.switch.unselected.handle.color | #79747E |
| md.comp.switch.handle.shadow-color _(deprecated)_ | #000000 |
| md.comp.switch.handle.elevation _(deprecated)_ | - |
| md.comp.switch.handle.height _(deprecated)_ | 20dp |
| md.comp.switch.handle.width _(deprecated)_ | 20dp |

#### Enabled / State layer

| Token | Value |
| --- | --- |
| md.comp.switch.state-layer.size | 40dp |
| md.comp.switch.state-layer.shape | md.sys.shape.corner.full |

#### Disabled / Icon

| Token | Value |
| --- | --- |
| md.comp.switch.disabled.selected.icon.color | #1D1B20 |
| md.comp.switch.disabled.selected.icon.opacity | 0.38 |
| md.comp.switch.disabled.unselected.icon.color | #E6E0E9 |
| md.comp.switch.disabled.unselected.icon.opacity | 0.38 |

#### Disabled / Track

| Token | Value |
| --- | --- |
| md.comp.switch.disabled.track.opacity | 0.12 |
| md.comp.switch.disabled.selected.track.color | #1D1B20 |
| md.comp.switch.disabled.unselected.track.color | #E6E0E9 |
| md.comp.switch.disabled.unselected.track.outline.color | #1D1B20 |

#### Disabled / Handle

| Token | Value |
| --- | --- |
| md.comp.switch.disabled.unselected.handle.opacity | 0.38 |
| md.comp.switch.disabled.selected.handle.opacity | 1 |
| md.comp.switch.disabled.selected.handle.color | #FEF7FF |
| md.comp.switch.disabled.unselected.handle.color | #1D1B20 |
| md.comp.switch.disabled.handle.opacity _(deprecated)_ | 0.38 |
| md.comp.switch.disabled.handle.elevation _(deprecated)_ | - |

#### Hovered / Icon

| Token | Value |
| --- | --- |
| md.comp.switch.selected.hover.icon.color | #4F378B |
| md.comp.switch.unselected.hover.icon.color | #E6E0E9 |

#### Hovered / Track

| Token | Value |
| --- | --- |
| md.comp.switch.selected.hover.track.color | #6750A4 |
| md.comp.switch.selected.hover.state-layer.color | #6750A4 |
| md.comp.switch.selected.hover.state-layer.opacity | 0.08 |
| md.comp.switch.unselected.hover.track.color | #E6E0E9 |
| md.comp.switch.unselected.hover.track.outline.color | #79747E |
| md.comp.switch.unselected.hover.state-layer.color | #1D1B20 |
| md.comp.switch.unselected.hover.state-layer.opacity | 0.08 |

#### Hovered / Handle

| Token | Value |
| --- | --- |
| md.comp.switch.selected.hover.handle.color | #EADDFF |
| md.comp.switch.unselected.hover.handle.color | #49454F |

#### Focused / Focus indicator

| Token | Value |
| --- | --- |
| md.comp.switch.focus.indicator.color | #625B71 |
| md.comp.switch.focus.indicator.thickness | 3dp |
| md.comp.switch.focus.indicator.offset | 2dp |

#### Focused / Icon

| Token | Value |
| --- | --- |
| md.comp.switch.selected.focus.icon.color | #4F378B |
| md.comp.switch.unselected.focus.icon.color | #E6E0E9 |

#### Focused / Track

| Token | Value |
| --- | --- |
| md.comp.switch.selected.focus.track.color | #6750A4 |
| md.comp.switch.selected.focus.state-layer.color | #6750A4 |
| md.comp.switch.selected.focus.state-layer.opacity | 0.1 |
| md.comp.switch.unselected.focus.track.color | #E6E0E9 |
| md.comp.switch.unselected.focus.track.outline.color | #79747E |
| md.comp.switch.unselected.focus.state-layer.color | #1D1B20 |
| md.comp.switch.unselected.focus.state-layer.opacity | 0.1 |

#### Focused / Handle

| Token | Value |
| --- | --- |
| md.comp.switch.selected.focus.handle.color | #EADDFF |
| md.comp.switch.unselected.focus.handle.color | #49454F |

#### Pressed (ripple) / Icon

| Token | Value |
| --- | --- |
| md.comp.switch.selected.pressed.icon.color | #4F378B |
| md.comp.switch.unselected.pressed.icon.color | #E6E0E9 |

#### Pressed (ripple) / Track

| Token | Value |
| --- | --- |
| md.comp.switch.selected.pressed.track.color | #6750A4 |
| md.comp.switch.selected.pressed.state-layer.color | #6750A4 |
| md.comp.switch.selected.pressed.state-layer.opacity | 0.1 |
| md.comp.switch.unselected.pressed.track.color | #E6E0E9 |
| md.comp.switch.unselected.pressed.track.outline.color | #79747E |
| md.comp.switch.unselected.pressed.state-layer.color | #1D1B20 |
| md.comp.switch.unselected.pressed.state-layer.opacity | 0.1 |

#### Pressed (ripple) / Handle

| Token | Value |
| --- | --- |
| md.comp.switch.selected.pressed.handle.color | #EADDFF |
| md.comp.switch.unselected.pressed.handle.color | #49454F |

---

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![6 color roles of a switch in light and dark themes.](https://lh3.googleusercontent.com/0fyIBhV6SPL8tV1Vk7CtpveaYQ1-am9tJ41EVA-QaywC5FoZ6CmY7Cevkh6gG8HklU2Ojaj4r0d4Po-J0MEVg2VLPzYo1R2FUey0lcFBTu-0=s0)

_Switch color roles used for light and dark themes: Surface container highest, Outline, Outline, Primary, On primary, On primary container_

### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

![The large body text adjacent to switches uses "on surface" color and the body text uses "on surface variant."](https://lh3.googleusercontent.com/0Xmcv7IiazLYf6Bpg_WWIU0Cnp32mkTymcUwcgN2QxXbvz2KyCIvTMXDW4sOR-m-jzDd4IO3aHqdSxaX4k73lKiVHr3mTXpkCBztSv60pJTM=s0)

_The text label uses **on surface**. Supporting text may use **on surface variant**._

---

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states)

![5 states of a switch shown in light and dark themes.](https://lh3.googleusercontent.com/PnpKeMQPpfXYol0STNFLWY--Fet6iOSy9Skw-SxaiktaHsBbPbHkXNl2RX7aLYHsrUbIN8LwPshZzNEQF4AM1vqbj70iiVmdzzvwC69U64M=s0)

_Enabled, Hovered, Focused, Pressed, Disabled_

[State specs are in the token module above](https://m3.material.io/m3/pages/switch/specs#3708644e-b4d7-4237-bb0a-7afeeae4a9b0)

---

## Measurements

![Measurements of switches without icons.](https://lh3.googleusercontent.com/QjZaSle3gkHOtKy1j-YDhEIIdbjF3_Uy3kVXdJnmx7F4Gt-Af66rcmJpNFIKXrGIUg2NSEb9U4UAJ8kx1s50G9oIbfq_7fphlO8MoJd15uLp=s0)

_Switches without icons_

![Measurements of pressed switches without icons.](https://lh3.googleusercontent.com/vFaJZa1Ic9jL9_q6ayhWZw_21xhx2LeDKKJpLRhHisCUpo7tFW-cIHTOdD0mj75_m3ov2BhZQavFK8SqEkAm04X8rP8hE2YynD5so_vjZeev=s0)

_Pressed switches without icons_

![Measurements of switches with icons.](https://lh3.googleusercontent.com/pOvYPjVd1P1HEOyZPLp4jziQmmbT5uMefs4zGCMSHg-fiRFgzXIeAz75RDSyfyZSu3yObf70vL6iiPgRVQtzDTWj8rZVaCR87l-gWjdz66Pr=s0)

_Switches with icons_

![Measurements of pressed switches with icons.](https://lh3.googleusercontent.com/wZm_0fDk5iJbWdd6SZL2P6FkEw8Q94mZ9g0laAAb99hOsR4dk08iyhObA6p4OuqUuf8azFV_9Th006NHGZu2A8nw71qCl-DB_SRYOMAeIN4bHQ=s0)

_Pressed switches with icons_

| Element | Attribute | Value |
| --- | --- | --- |
| Track | Height | 32dp |
| Track | Width | 52dp |
| Track | Outline width | 2dp |
| Track | Shape | [md.sys.shape.corner.full](https://m3.material.io/m3/pages/shape/corner-radius-scale#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e) |
| Handle | Height (unselected) | 16dp |
| Handle | Height - with icon | 24dp |
| Handle | Height (selected) | 24dp |
| Handle | Height (pressed) | 28dp |
| Handle | Width (unselected) | 16dp |
| Handle | Width - with icon | 24dp |
| Handle | Width (selected) | 24dp |
| Handle | Width (pressed) | 28dp |
| Handle | Shape | [md.sys.shape.corner.full](https://m3.material.io/m3/pages/shape/corner-radius-scale#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e) |
| State layer | Size | 40dp |
| State layer | Shape | [md.sys.shape.corner.full](https://m3.material.io/m3/pages/shape/corner-radius-scale#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e) |
| Target | Size | 48dp |
| Icon | Size (selected) | 16dp |
| Icon | Size (unselected) | 16dp |

---

## Configurations

- Without icons
- Icon on selected switch
- Icon on selected and unselected switch

![3 example switches with and without icons in on and off states.](https://lh3.googleusercontent.com/yZbAEZRgNI6uOkunAfaXCx8NAExJ8RsY6DkIjWJMH0DanJdyakTEzO8YFyw1bd3AZdvfJv229_maPQKBRGGddH4NZm7PsouKM_oTEBs3-Bin=s0)
