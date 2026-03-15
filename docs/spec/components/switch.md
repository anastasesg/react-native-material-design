# Switch — M3 Component Reference

> Switches toggle the selection of an item on or off.

Sources: [Overview](https://m3.material.io/components/switch/overview) · [Specs](https://m3.material.io/components/switch/specs) · [Guidelines](https://m3.material.io/components/switch/guidelines) · [Accessibility](https://m3.material.io/components/switch/accessibility)

---

## Anatomy

![3 elements of a switch](https://lh3.googleusercontent.com/3lI8U8eFaJEBDsf5YJz4e07h87cub5XTw2qWR3w7BbarbCWicdNE9AF4ewEp_r3qh_evjs105-t5KwM0OdO-ZEeC4-HFV75DIrHi3PyJE1-J=s0)

![3 elements of a switch from specs](https://lh3.googleusercontent.com/a4JkZitJC-KZ1qxKfHvM-B2tuC0JqMsA08tY-fRrBhlXDf6JpvjpQD9IAZ0_zg-R1E0tvzAst-VwpSYDGUkfGABeKMCgHcAtXPwan6iiuNILhA=s0)

A switch consists of three elements:

1. **Track** — the background container that the handle slides within
2. **Handle** (formerly "thumb") — the draggable/tappable element that moves between ends of the track
3. **Icon** (optional) — a symbol rendered inside the handle to reinforce on/off state

---

## Usage & When to Use

![A switch in off and on states](https://lh3.googleusercontent.com/x0AqjOgoDcYjaJyG017Y59vOzTxcqS5NfZ761rJ-Utb8JVw8_RZskFZTYAbBECIFqE23WBpO0Xufv97hXyAerK4lcsli48s_czxN65LlMLk=s0)

Switches make a **binary selection**: on/off, true/false. The effect should take place **immediately** — no save action required.

- Toggle a single item on or off
- Immediately activate or deactivate something (e.g. settings)
- Use switches (not radio buttons) if items in a list can be independently controlled

![Switch used in notification settings](https://lh3.googleusercontent.com/1tz8VDpVt3FDyf3v9iiqdxIEuIffJuOaXLSfHDYAN83CaPiKc_YZfO7KnZ2yVTmLNA-gmvxmdsHyXEjArew74BAk5HzKiM350ZagEXfzQ4qaWw=s0)

Switches control **binary** options (on/off), not **opposing** options (only one can be active). For opposing options like list view vs map view, use a connected button group.

<table><tr>
<td><img src="https://lh3.googleusercontent.com/jH1Tkfo_kEijiXDqUqQIT2VMLZB213Hl414Jrmsh6jr0o_QYlwgLsm_8ikjo_XqhgeRa4wI5FrbMcdpLLgCx33GAabL-wWRJaNJDLSyPs5aV=s0" /><br/><b>Do:</b> Connected button group for opposing options</td>
<td><img src="https://lh3.googleusercontent.com/muDDs8mxZm8vsI9Bu335VCwdRY6E9Yx8mEUNab4_4FlUdRbaNPSFJCfWKOHTEcH6qj6R8p_E0wTt9xfp3nrbvXx0k_NWqpJYp97ZkEAoiMz_2Q=s0" /><br/><b>Don't:</b> Switch for opposing options</td>
</tr></table>

### When NOT to use a switch

| Scenario                                                           | Use instead                               |
| ------------------------------------------------------------------ | ----------------------------------------- |
| Selecting one option from a mutually-exclusive list                | Radio buttons                             |
| Selecting multiple options that require a save action              | Checkboxes                                |
| Choosing between two opposing options (e.g. list view vs map view) | Connected button group (segmented button) |
| Triggering a call-to-action                                        | Button                                    |

### Alternate selection controls

<table><tr>
<td><img src="https://lh3.googleusercontent.com/xAewYZioxNc7YhmPjwIC4XEG7_8tdA6130j_66kfuFM3H3h2HH0wx8U1kVxPeNz4StMXWMJG0ICxNai-woryizyuiGfJyFBrvUfFqh2DrQ33=s0" /><br/>Checkboxes — multi-select</td>
<td><img src="https://lh3.googleusercontent.com/Xcgd1ZKjqsdww-in_mgrJ56JkF9t5rIVuJGByhtHWgjPDKPGYFRHlV_UU-HKcBCYbW3F9L9mZEwkmXlRl0JdLwUpTsklLQpiVfw_-dWEi80=s0" /><br/>Radio buttons — single selection</td>
</tr></table>

<table><tr>
<td><img src="https://lh3.googleusercontent.com/EeKlgEcp1KJ-9NfC7YPlsc0sQITFitnLnF1iY76rHsZKNPmeu0J5-a3xlnpj_tPlVvoEuQjX2pVze8dqv2WknsVejVR5idvAltny8CMraed79w=s0" /><br/><b>Do:</b> Checkboxes for selecting from a list</td>
<td><img src="https://lh3.googleusercontent.com/wjSLtGs-C59hMUplsvCnFm1IjCYlMNcNUGUsnKoR28RxhApBz0YhW6AlO257nPdJ48NIUTezejDl3h3B3ZbgE4iBHQPMdu39mDkcLZ2VGze3=s0" /><br/><b>Don't:</b> Switch can't replace a call-to-action button</td>
</tr></table>

<table><tr>
<td><img src="https://lh3.googleusercontent.com/RP-OY6cXjDCXhDkZfdNQmY4crSy5rLCujf8DCTUaNSByNPt1XJYvpWHOZm0d5hLprgl_wfU9YZBGoh8ciq38frIAqP64CddYsZWCLQ4tHGA=s0" /><br/><b>Do:</b> Radio buttons when only one item can be selected</td>
<td><img src="https://lh3.googleusercontent.com/qhcoEcCH8obBM4P2DNuKMOOKaOgdApSQW-0OZVSc5UD46Ttzdkb_GproXkVIIVsl7jOklP8-8RZf0EzaIOZTUhOi16ruTe4LpFgQwPDnrvLQqQ=s0" /><br/><b>Don't:</b> Switches for multiple options that require saving</td>
</tr></table>

---

## Configurations

| #   | Configuration         | Description                                                         |
| --- | --------------------- | ------------------------------------------------------------------- |
| 1   | Without icons         | Handle has no icon in either state                                  |
| 2   | Icon on selected only | Icon (e.g. checkmark) appears only when selected                    |
| 3   | Icon on both states   | Icon appears in both selected (checkmark) and unselected (X) states |

![3 example switches with and without icons in on and off states](https://lh3.googleusercontent.com/yZbAEZRgNI6uOkunAfaXCx8NAExJ8RsY6DkIjWJMH0DanJdyakTEzO8YFyw1bd3AZdvfJv229_maPQKBRGGddH4NZm7PsouKM_oTEBs3-Bin=s0)

### Icon guidelines

- Icons should **clearly communicate** on/off state (e.g. checkmark and X)
- Avoid ambiguous or non-binary icons (e.g. moon, pencil)
- Icons are always **16dp**

<table><tr>
<td><img src="https://lh3.googleusercontent.com/n_YcGWfROt1o6Ig3SUMsoD2AJnR1ONaC0AjgVUR9CIQ0_zAlMNw-wWfpshgAv5mru4RBPlzTym7BIW8-QZy0ZJMGqXwQ-mMXWP8suAgNL19G=s0" /><br/><b>Do:</b> Use icons that clearly communicate on/off (X and checkmark)</td>
<td><img src="https://lh3.googleusercontent.com/LPCQ-Do-7xjhcg4Q-ocCdWlGZiku8V4RY86JpOCxYReqXVAswVegZ-TLmgF7ogz6UjS_zysFsBwyASHQbI4urmMnrKpdXxV0EEq4p8922SLRGQ=s0" /><br/><b>Don't:</b> Avoid ambiguous or non-binary icons (moon, pencil)</td>
</tr></table>

### Label text

Switches should always be paired with an inline label describing what the switch controls when selected. Labels should be short and describe what happens when the switch is **on**.

![Do: Keep labels short and direct](https://lh3.googleusercontent.com/A3Tr_ujhshFdU05BqNPGYMK-n-IYTjRkYIMgLkKqGfjYI5H3uU5oMweusuojA6wu8Xzn9TWID_iSe30uoYweAvECisDP0YKVG-ZEGHKUaT4=s0)

![Don't: Label text inside the switch — font size would be inaccessible](https://lh3.googleusercontent.com/Yeafv6eDK5lXb6MUK2aXoRw6D8bo7TFoO62JYzQjQDdojRTeYEDf5iCU8M_MdA67qDGCoaqrAke1B0V_AQYSQy1ISTpT8kykUIKhjk2FvYcSzw=s0)

---

## Placement

Switches are often arranged in stacked layouts for settings screens.

![Settings screen with stacked switches](https://lh3.googleusercontent.com/ZsqrkLA9mtmq2b2QpUDR2rtnKj9uidOEDais9zRVYzpypNMDiPrcugFoM26TU2BfwIEU2f8ayFkOCJTuuor-EnkTfcRC5AhzhoeJl0_5QK3OBg=s0)

---

## Behavior

- When toggled, the handle **slides** to the opposite end of the track
- The handle **grows** on press (16dp/24dp → 28dp) to provide tactile feedback
- The action takes effect **immediately** — no confirmation or save step
- Supports both **tap** and **drag** gestures

---

## Measurements

<table>
<tr>
<td><img src="https://lh3.googleusercontent.com/QjZaSle3gkHOtKy1j-YDhEIIdbjF3_Uy3kVXdJnmx7F4Gt-Af66rcmJpNFIKXrGIUg2NSEb9U4UAJ8kx1s50G9oIbfq_7fphlO8MoJd15uLp=s0" /><br/>Without icons</td>
<td><img src="https://lh3.googleusercontent.com/vFaJZa1Ic9jL9_q6ayhWZw_21xhx2LeDKKJpLRhHisCUpo7tFW-cIHTOdD0mj75_m3ov2BhZQavFK8SqEkAm04X8rP8hE2YynD5so_vjZeev=s0" /><br/>Pressed, without icons</td>
</tr>
<tr>
<td><img src="https://lh3.googleusercontent.com/pOvYPjVd1P1HEOyZPLp4jziQmmbT5uMefs4zGCMSHg-fiRFgzXIeAz75RDSyfyZSu3yObf70vL6iiPgRVQtzDTWj8rZVaCR87l-gWjdz66Pr=s0" /><br/>With icons</td>
<td><img src="https://lh3.googleusercontent.com/wZm_0fDk5iJbWdd6SZL2P6FkEw8Q94mZ9g0laAAb99hOsR4dk08iyhObA6p4OuqUuf8azFV_9Th006NHGZu2A8nw71qCl-DB_SRYOMAeIN4bHQ=s0" /><br/>Pressed, with icons</td>
</tr>
</table>

### Track

| Attribute     | Value                                      |
| ------------- | ------------------------------------------ |
| Height        | 32dp                                       |
| Width         | 52dp                                       |
| Outline width | 2dp (unselected only)                      |
| Shape         | `md.sys.shape.corner.full` (fully rounded) |

### Handle

| State                  | Height | Width |
| ---------------------- | ------ | ----- |
| Unselected (no icon)   | 16dp   | 16dp  |
| Unselected (with icon) | 24dp   | 24dp  |
| Selected               | 24dp   | 24dp  |
| Pressed                | 28dp   | 28dp  |

- Shape: `md.sys.shape.corner.full`
- The handle grows on press to provide interaction feedback

### State layer

| Attribute | Value                      |
| --------- | -------------------------- |
| Size      | 40dp                       |
| Shape     | `md.sys.shape.corner.full` |

### Touch target

| Attribute    | Value       |
| ------------ | ----------- |
| Minimum size | 48dp × 48dp |

---

## Color Tokens

![6 color roles of a switch in light and dark themes](https://lh3.googleusercontent.com/0fyIBhV6SPL8tV1Vk7CtpveaYQ1-am9tJ41EVA-QaywC5FoZ6CmY7Cevkh6gG8HklU2Ojaj4r0d4Po-J0MEVg2VLPzYo1R2FUey0lcFBTu-0=s0)

1. Surface container highest — 2. Outline — 3. Outline — 4. Primary — 5. On primary — 6. On primary container

### Enabled

#### Track

| Element                  | Token                                           | Value                                    |
| ------------------------ | ----------------------------------------------- | ---------------------------------------- |
| Track height             | `md.comp.switch.track.height`                   | 32dp                                     |
| Track width              | `md.comp.switch.track.width`                    | 52dp                                     |
| Track outline width      | `md.comp.switch.track.outline.width`            | 2dp                                      |
| Track shape              | `md.comp.switch.track.shape`                    | `md.sys.shape.corner.full`               |
| Selected track color     | `md.comp.switch.selected.track.color`           | `md.sys.color.primary`                   |
| Unselected track color   | `md.comp.switch.unselected.track.color`         | `md.sys.color.surface-container-highest` |
| Unselected track outline | `md.comp.switch.unselected.track.outline.color` | `md.sys.color.outline`                   |

#### Handle

| Element                  | Token                                     | Value                      |
| ------------------------ | ----------------------------------------- | -------------------------- |
| Handle height            | `md.comp.switch.handle.height`            | 20dp                       |
| Handle width             | `md.comp.switch.handle.width`             | 20dp                       |
| Unselected handle height | `md.comp.switch.unselected.handle.height` | 16dp                       |
| Unselected handle width  | `md.comp.switch.unselected.handle.width`  | 16dp                       |
| With-icon handle height  | `md.comp.switch.with-icon.handle.height`  | 24dp                       |
| With-icon handle width   | `md.comp.switch.with-icon.handle.width`   | 24dp                       |
| Selected handle height   | `md.comp.switch.selected.handle.height`   | 24dp                       |
| Selected handle width    | `md.comp.switch.selected.handle.width`    | 24dp                       |
| Pressed handle height    | `md.comp.switch.pressed.handle.height`    | 28dp                       |
| Pressed handle width     | `md.comp.switch.pressed.handle.width`     | 28dp                       |
| Handle shape             | `md.comp.switch.handle.shape`             | `md.sys.shape.corner.full` |
| Selected handle color    | `md.comp.switch.selected.handle.color`    | `md.sys.color.on-primary`  |
| Unselected handle color  | `md.comp.switch.unselected.handle.color`  | `md.sys.color.outline`     |
| Shadow color             | `md.comp.switch.handle.shadow-color`      | `md.sys.color.shadow`      |
| Elevation                | `md.comp.switch.handle.elevation`         | `md.sys.elevation.level1`  |

#### Icon

| Element               | Token                                  | Value                                    |
| --------------------- | -------------------------------------- | ---------------------------------------- |
| Selected icon color   | `md.comp.switch.selected.icon.color`   | `md.sys.color.on-primary-container`      |
| Selected icon size    | `md.comp.switch.selected.icon.size`    | 16dp                                     |
| Unselected icon color | `md.comp.switch.unselected.icon.color` | `md.sys.color.surface-container-highest` |
| Unselected icon size  | `md.comp.switch.unselected.icon.size`  | 16dp                                     |

#### State Layer

| Element           | Token                              | Value                      |
| ----------------- | ---------------------------------- | -------------------------- |
| State layer size  | `md.comp.switch.state-layer.size`  | 40dp                       |
| State layer shape | `md.comp.switch.state-layer.shape` | `md.sys.shape.corner.full` |

### Disabled

#### Track

| Element                  | Token                                                    | Value                                    |
| ------------------------ | -------------------------------------------------------- | ---------------------------------------- |
| Track opacity            | `md.comp.switch.disabled.track.opacity`                  | 0.12                                     |
| Selected track color     | `md.comp.switch.disabled.selected.track.color`           | `md.sys.color.on-surface`                |
| Unselected track color   | `md.comp.switch.disabled.unselected.track.color`         | `md.sys.color.surface-container-highest` |
| Unselected outline color | `md.comp.switch.disabled.unselected.track.outline.color` | `md.sys.color.on-surface`                |

#### Handle

| Element                   | Token                                               | Value                     |
| ------------------------- | --------------------------------------------------- | ------------------------- |
| Selected handle color     | `md.comp.switch.disabled.selected.handle.color`     | `md.sys.color.surface`    |
| Selected handle opacity   | `md.comp.switch.disabled.selected.handle.opacity`   | 1                         |
| Unselected handle color   | `md.comp.switch.disabled.unselected.handle.color`   | `md.sys.color.on-surface` |
| Unselected handle opacity | `md.comp.switch.disabled.unselected.handle.opacity` | 0.38                      |
| Handle opacity            | `md.comp.switch.disabled.handle.opacity`            | 0.38                      |
| Elevation                 | `md.comp.switch.disabled.handle.elevation`          | `md.sys.elevation.level0` |

#### Icon

| Element                 | Token                                             | Value                                    |
| ----------------------- | ------------------------------------------------- | ---------------------------------------- |
| Selected icon color     | `md.comp.switch.disabled.selected.icon.color`     | `md.sys.color.on-surface`                |
| Selected icon opacity   | `md.comp.switch.disabled.selected.icon.opacity`   | 0.38                                     |
| Unselected icon color   | `md.comp.switch.disabled.unselected.icon.color`   | `md.sys.color.surface-container-highest` |
| Unselected icon opacity | `md.comp.switch.disabled.unselected.icon.opacity` | 0.38                                     |

### Hovered

#### Track & State Layer

| Element                        | Token                                                 | Value                                    |
| ------------------------------ | ----------------------------------------------------- | ---------------------------------------- |
| Selected track color           | `md.comp.switch.selected.hover.track.color`           | `md.sys.color.primary`                   |
| Selected state layer color     | `md.comp.switch.selected.hover.state-layer.color`     | `md.sys.color.primary`                   |
| Selected state layer opacity   | `md.comp.switch.selected.hover.state-layer.opacity`   | `md.sys.state.hover.state-layer-opacity` |
| Unselected track color         | `md.comp.switch.unselected.hover.track.color`         | `md.sys.color.surface-container-highest` |
| Unselected outline color       | `md.comp.switch.unselected.hover.track.outline.color` | `md.sys.color.outline`                   |
| Unselected state layer color   | `md.comp.switch.unselected.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| Unselected state layer opacity | `md.comp.switch.unselected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

#### Handle

| Element                 | Token                                          | Value                             |
| ----------------------- | ---------------------------------------------- | --------------------------------- |
| Selected handle color   | `md.comp.switch.selected.hover.handle.color`   | `md.sys.color.primary-container`  |
| Unselected handle color | `md.comp.switch.unselected.hover.handle.color` | `md.sys.color.on-surface-variant` |

#### Icon

| Element               | Token                                        | Value                                    |
| --------------------- | -------------------------------------------- | ---------------------------------------- |
| Selected icon color   | `md.comp.switch.selected.hover.icon.color`   | `md.sys.color.on-primary-container`      |
| Unselected icon color | `md.comp.switch.unselected.hover.icon.color` | `md.sys.color.surface-container-highest` |

### Focused

#### Track & State Layer

| Element                        | Token                                                 | Value                                    |
| ------------------------------ | ----------------------------------------------------- | ---------------------------------------- |
| Selected track color           | `md.comp.switch.selected.focus.track.color`           | `md.sys.color.primary`                   |
| Selected state layer color     | `md.comp.switch.selected.focus.state-layer.color`     | `md.sys.color.primary`                   |
| Selected state layer opacity   | `md.comp.switch.selected.focus.state-layer.opacity`   | `md.sys.state.focus.state-layer-opacity` |
| Unselected track color         | `md.comp.switch.unselected.focus.track.color`         | `md.sys.color.surface-container-highest` |
| Unselected outline color       | `md.comp.switch.unselected.focus.track.outline.color` | `md.sys.color.outline`                   |
| Unselected state layer color   | `md.comp.switch.unselected.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| Unselected state layer opacity | `md.comp.switch.unselected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

#### Handle

| Element                 | Token                                          | Value                             |
| ----------------------- | ---------------------------------------------- | --------------------------------- |
| Selected handle color   | `md.comp.switch.selected.focus.handle.color`   | `md.sys.color.primary-container`  |
| Unselected handle color | `md.comp.switch.unselected.focus.handle.color` | `md.sys.color.on-surface-variant` |

#### Icon

| Element               | Token                                        | Value                                    |
| --------------------- | -------------------------------------------- | ---------------------------------------- |
| Selected icon color   | `md.comp.switch.selected.focus.icon.color`   | `md.sys.color.on-primary-container`      |
| Unselected icon color | `md.comp.switch.unselected.focus.icon.color` | `md.sys.color.surface-container-highest` |

#### Focus Indicator

| Element   | Token                                      | Value                                       |
| --------- | ------------------------------------------ | ------------------------------------------- |
| Color     | `md.comp.switch.focus.indicator.color`     | `md.sys.color.secondary`                    |
| Thickness | `md.comp.switch.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness`    |
| Offset    | `md.comp.switch.focus.indicator.offset`    | `md.sys.state.focus-indicator.outer-offset` |

### Pressed

#### Track & State Layer

| Element                        | Token                                                   | Value                                      |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------ |
| Selected track color           | `md.comp.switch.selected.pressed.track.color`           | `md.sys.color.primary`                     |
| Selected state layer color     | `md.comp.switch.selected.pressed.state-layer.color`     | `md.sys.color.primary`                     |
| Selected state layer opacity   | `md.comp.switch.selected.pressed.state-layer.opacity`   | `md.sys.state.pressed.state-layer-opacity` |
| Unselected track color         | `md.comp.switch.unselected.pressed.track.color`         | `md.sys.color.surface-container-highest`   |
| Unselected outline color       | `md.comp.switch.unselected.pressed.track.outline.color` | `md.sys.color.outline`                     |
| Unselected state layer color   | `md.comp.switch.unselected.pressed.state-layer.color`   | `md.sys.color.on-surface`                  |
| Unselected state layer opacity | `md.comp.switch.unselected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

#### Handle

| Element                 | Token                                            | Value                             |
| ----------------------- | ------------------------------------------------ | --------------------------------- |
| Selected handle color   | `md.comp.switch.selected.pressed.handle.color`   | `md.sys.color.primary-container`  |
| Unselected handle color | `md.comp.switch.unselected.pressed.handle.color` | `md.sys.color.on-surface-variant` |

#### Icon

| Element               | Token                                          | Value                                    |
| --------------------- | ---------------------------------------------- | ---------------------------------------- |
| Selected icon color   | `md.comp.switch.selected.pressed.icon.color`   | `md.sys.color.on-primary-container`      |
| Unselected icon color | `md.comp.switch.unselected.pressed.icon.color` | `md.sys.color.surface-container-highest` |

---

## Interaction States

![5 states of a switch in light and dark themes](https://lh3.googleusercontent.com/PnpKeMQPpfXYol0STNFLWY--Fet6iOSy9Skw-SxaiktaHsBbPbHkXNl2RX7aLYHsrUbIN8LwPshZzNEQF4AM1vqbj70iiVmdzzvwC69U64M=s0)

| #   | State        | Visual changes                                               |
| --- | ------------ | ------------------------------------------------------------ |
| 1   | **Enabled**  | Default appearance                                           |
| 2   | **Hovered**  | State layer appears around handle; handle color shifts       |
| 3   | **Focused**  | Focus indicator ring; state layer; handle color shifts       |
| 4   | **Pressed**  | Handle grows to 28dp; state layer at pressed opacity         |
| 5   | **Disabled** | Reduced opacity (track 0.12, handle/icon 0.38); no elevation |

---

## Accessibility

### Touch & Cursor

<table><tr>
<td><img src="https://lh3.googleusercontent.com/W9k8FZDab4FlAZdkKblIJVtCzjSJ48pu4wxgFourwAHfPsYc5RPK8gTPW4H7hVTj-hJNoR4iqQpZwdnoE14XBpGYLSk2_zBG7hWDC5YNt3r2ew=s0" /><br/>Touch: Tap, Drag</td>
<td><img src="https://lh3.googleusercontent.com/1waGLXuMxUHtjHjDVCcLWQF2ioH5mGvSRVlVJn9IO1rTSeiTTUE6pG2zQ6VskRok4RHejMQHucCfuiTKcoczKrjuyWT_hsyrERdMS7fJmp5P=s0" /><br/>Cursor: Hover, Click</td>
</tr></table>

- **Touch**: handle grows on tap/drag for feedback
- **Cursor**: hover area grows on hover; handle grows on click
- Minimum touch target: **48 × 48dp** — do not apply density that reduces this

### Focus

Initial focus lands on the switch handle, the primary interactive element.

<table><tr>
<td><img src="https://lh3.googleusercontent.com/ncRMKB_fQpAaCrlUNBYQ-UXNOAdAP-bmIlZy3hiiGoTic1gTMurPu6wqzFLKBTWIMrhDa3bhrLT4J9Ppg8OLP7BOxKLEKLWvo5egYkDEL8Gw=s0" /><br/>Focus lands on the switch handle</td>
<td><img src="https://lh3.googleusercontent.com/zJYFK9dmp7xQR83LnteRstjk0HCH3wuryW_dm29AYmjj3K4U6GM91uuwHh9CLjlV49GMndpgnSlYNMgXwR5_OCNySgR7eHvBJgU2MmWXjofVfw=s0" /><br/>Space or Enter toggles the switch</td>
</tr></table>

### Keyboard Navigation

| Key           | Action                           |
| ------------- | -------------------------------- |
| Tab           | Focus lands on the switch handle |
| Space / Enter | Toggles the switch on/off        |

### Labeling

<table><tr>
<td><img src="https://lh3.googleusercontent.com/uQCgvmrYgUn5jsyprqaHwVc9uV4Jgg0cJR11xFDTeF-WdA4w1h72Cm-S3xtz6IwTdRUEpj7rt3vloFZFENV8Q1FVUjffGOptoHDsJYVpQKcqUg=s0" /><br/>Label text used as accessibility label</td>
<td><img src="https://lh3.googleusercontent.com/RL42kRexZDwly3y3IIMPDdcDUEkd7C4jOQuq9me0IQa3vkWH9zl08KjI5yLcp6KCZIM7S8f56Oa4q3FHDC6TgTCJUVngGOWBalNaMtkAJekq=s0" /><br/>Descriptive label clarifies ambiguous text</td>
</tr></table>

- Switches must be paired with an **adjacent label** describing what the switch controls
- The accessibility label uses the adjacent label text
- Screen readers announce: `"{label text}", switch, {on|off}`
- When the visible label is ambiguous (e.g. "Photo album"), provide a more descriptive accessibility label (e.g. "Photo album access")
- Labels should be short and describe what happens when the switch is **on**
- Do **not** put label text inside the switch — the font size would be inaccessible

### Density

- Do not reduce density by default
- If offering a dense layout option, keep the control to revert density at minimum 48 × 48dp

---

## Adjacent Text Label Color

![Primary label uses on-surface, supporting text uses on-surface-variant](https://lh3.googleusercontent.com/0Xmcv7IiazLYf6Bpg_WWIU0Cnp32mkTymcUwcgN2QxXbvz2KyCIvTMXDW4sOR-m-jzDd4IO3aHqdSxaX4k73lKiVHr3mTXpkCBztSv60pJTM=s0)

| Element         | Color role           |
| --------------- | -------------------- |
| Primary label   | `on-surface`         |
| Supporting text | `on-surface-variant` |

These colors remain the same regardless of interaction state.

---

## M2 → M3 Differences

<table><tr>
<td><img src="https://lh3.googleusercontent.com/8Q9gMTX5nAY3wJyezAw1JEzmJ6MbTAT3FkVUc7BIO9RUJ485PUwFFlXz7pAutMPh1eI0ScCnGFUd3nuAEfSb_Uo89uV3wfTPotf3njzsUwfo=s0" /><br/>M2: Handle extends beyond track</td>
<td><img src="https://lh3.googleusercontent.com/P_nhLNZtpt8oAPTScTR_d6oBLsidBWX0xG96t9fCkTURwNMReQpP9Etrpw4rc439wBfOAJBUeGZ39O8goRmRcPk_Ehhnq_wj7qNKFR4Sf70=s0" /><br/>M3: Taller track, variable handle, optional icon</td>
</tr></table>

![Overview: Switches can be toggled on and off](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwa9bnl5-1.png?alt=media&token=8a4b85d3-5a30-49e2-b32d-927fc4c6fc2d=s0)

| Aspect        | M2                                  | M3                                                |
| ------------- | ----------------------------------- | ------------------------------------------------- |
| Track         | Shorter, narrower                   | Taller (32dp) and wider (52dp)                    |
| Handle        | Circular, extends beyond track edge | Contained within track, variable size             |
| Color         | Basic mappings                      | Dynamic color compatible, meets non-text contrast |
| Icons         | Not supported                       | Optional icon inside handle                       |
| Accessibility | Standard                            | Enhanced visual presentation                      |
