# Split Button — M3 Component Reference

> Split buttons pair a primary action with a menu of related options, reducing visual complexity by hiding secondary choices behind a trailing menu button.

Sources: [Overview](https://m3.material.io/components/split-button/overview) · [Specs](https://m3.material.io/components/split-button/specs) · [Guidelines](https://m3.material.io/components/split-button/guidelines) · [Accessibility](https://m3.material.io/components/split-button/accessibility)

---

## Variants

![1 type of split button.](https://lh3.googleusercontent.com/F2kUnhi2ZrsjiRH1K8Vru69-_x8fiFll-_4x9F4Nn-Y2X-KktX3SGtz5KBK4EkCQx5So3aXSeDexmjR-VUeVsm7EfqLTcZ5TKCRA9NwTSNlUNg=s0)

| Variant      | M3  | M3 Expressive |
| ------------ | --- | ------------- |
| Split button | —   | Available     |

This is an **M3 Expressive** component — it was introduced in the M3 Expressive update (May 2025). The trailing menu button spins and morphs shape when activated, and the component can be used alongside other buttons of the same size.

### Color configurations

![4 colors and 5 sizes of split buttons.](https://lh3.googleusercontent.com/1yQajxz3WCQRMH3AdX8Tg7OPVxOT2Lcj8f3T7pDYmRcVZhFzkHR55JK8u7zD0did-AL95AJrs_xn2391HKaueEvxnZKkfV6Z_rC5C7T5YPE5=s0)

1. Elevated
2. Filled
3. Tonal
4. Outlined

### Size configurations

| Size        | Default? |
| ----------- | -------- |
| Extra small | No       |
| Small       | Yes      |
| Medium      | No       |
| Large       | No       |
| Extra large | No       |

| Category | Configuration                     | M3  | M3 Expressive |
| -------- | --------------------------------- | --- | ------------- |
| Size     | XS, S, M, L, XL                   | —   | Available     |
| Color    | Elevated, filled, tonal, outlined | —   | Available     |

---

## Anatomy

![4 elements of a split button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dp22eb-8.png?alt=media&token=7aadf139-d85b-4439-8514-204c2d6c571d=s0)

1. **Leading button** — the primary action; can contain an icon, label text, or both
2. **Icon** — optional leading icon that represents the action
3. **Label text** — the action label; keep it brief (one or two words)
4. **Trailing button** — always contains the expand/collapse menu icon; rotates 180° when selected

![3 customizations of the leading button in the split button.](https://lh3.googleusercontent.com/136pHVBxZ_A3wzi6-X1sKmbfnuqeUu_FIMeP4lGM3iVNjPqQH-SA62_w0wEZPalIigsfGp_6G4V08WZH8fY1REmGTJzfISQTJCdyIJdQjQam=s0)

1. Label + icon
2. Label only
3. Icon only

The trailing button must always use the expand/collapse icon — do not replace it with a custom icon.

![A split button for starting driving directions has a label "32 minutes away" and a refresh icon instead of a menu icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dxuxjz-9.png?alt=media&token=6dbd3d91-8792-44cf-a5b2-f03e5621deb2=s0)

✗ **Don't:** Use very long labels or change the trailing icon

### RTL support

In right-to-left languages, the component layout mirrors — the trailing button moves to the leading edge.

![The split button elements are reversed in a right-to-left language.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dpczv9-10.png?alt=media&token=9f93accf-e255-4421-8450-efd4294d1176=s0)

---

## Usage & When to Use

![Split buttons of many colors and sizes scattered.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm36akp9w-1.png?alt=media&token=954a37e5-dbe9-4715-8f37-fd34afd699e0=s0)

- Combines a primary action with a menu of related secondary actions
- Reduces visual complexity by hiding extra options behind the trailing button
- Works well alone or alongside standard buttons, icon buttons, and button groups
- Typically opens a menu component, but can be customized to open other surfaces like cards
- Available in 5 sizes matching standard buttons and icon buttons (XS, S, M, L, XL)

Scale up the split button in larger windows, or use a larger size to create emphasis in smaller windows for hero moments.

![A large split button in a compact window draws attention to buying an enamel mug in an online store.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dosrjf-3.png?alt=media&token=1b565df6-4454-4460-9e64-f0dd199fe87c=s0)

Split buttons can differ in size from other buttons on the same page, since they inherently take up more horizontal space.

![A media player has a split button for changing the speed quickly, or opening a menu of options.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaehumyk-5-alt.png?alt=media&token=51014525-7e5f-43cb-8e6a-04ecd54f2ae8=s0)

![A split button applied a filter of "Canada" to a list of activities. Three narrow buttons are next to it to share, favorite, and bookmark.](https://lh3.googleusercontent.com/9UfkZE4_cZigzNlvBgN4B7ahe-tzvOBPxn_pzLUChLFUIKQitLU2y7pNJTXoW-K4aM2tVthNrk3BNxSYV5fVllZJH7GucTZT7TYcqGAu7_VISw=s0)

![A vibrant split button for starting a car drive is next to 2 muted icon buttons for bookmarking and sharing the trip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaehs3k3-4_ALT.png?alt=media&token=be30a6a7-53a8-4e4d-a190-5293714dd79b=s0)

### Menu content

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4il1tni-6-alt.png?alt=media&token=bccedc39-a096-4dfa-b654-14d575be9f12=s0" /><br/><b>Do:</b> Open a standard menu from the split button</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4il1xwy-7-alt.png?alt=media&token=fb95faee-bb6d-447b-a38f-24f0ef87b0a4=s0" /><br/><b>Don't:</b> Modify the menu in unusual ways (e.g. irregular shapes highlighting selected items)</td>
</tr></table>

---

## Behavior

### Trailing button animation

The trailing menu button uses the **standard motion scheme** (not the expressive motion scheme). The icon rotates inward 180° when opened and closed, and the inner corners undergo a shape morph.

### Menu placement

When pairing the split button with a menu, align the menu to the trailing button's leading edge as the default placement. The menu should be **4dp** from the split button.

![A split button with an open menu. The leading edge of the menu is aligned to the leading edge of the menu button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4il8isz-12.png?alt=media&token=7dea4867-f593-4b35-a7dd-f8059c252ee5=s0)

If space is insufficient, align the menu to one of the button's edges instead.

![A split button with an open menu. The trailing edge of the menu is aligned to the trailing edge of the menu button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4ilatqh-13.png?alt=media&token=c60db39f-3af3-4fe8-92c7-09c26c255a71=s0)

Depending on window size, scroll position, and available space, the menu may appear in various positions around the button. Always try to align it with one of the button's edges.

![6 other ways the menu can align to the split button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4iz4b9v-14.png?alt=media&token=7596fabd-1a2c-4d83-a0d6-03963942cbf5=s0)

1. Top aligned to trailing button
2. Bottom aligned to trailing button
3. Top right-aligned
4. Top left-aligned
5. Bottom right-aligned
6. Bottom left-aligned

---

## Interaction States

Split buttons use the same colors and state layers as standard buttons and icon buttons. The inner corners of each half undergo a **shape morph** during hovered, focused, and pressed states.

Unlike toggle buttons, the split button's color does not change when selected — only a state layer is applied.

### Leading button states

![5 states of the leading button in the split button.](https://lh3.googleusercontent.com/HXNWWohWOFX1IuFh8xMMnWtDczymOUA8I7CDja4WgwY3y_9LL-Ns0MjX2KsGanjBtco9oWxaL-tY3t7Vw50DPpdpKhM71bj7uUSY01gKkxiIAg=s0)

| #   | State                   | Visual changes                                  |
| --- | ----------------------- | ----------------------------------------------- |
| 1   | Enabled                 | Default corner radius                           |
| 2   | Disabled                | Reduced opacity, no interaction                 |
| 3   | Hovered                 | State layer applied, inner corners change shape |
| 4   | Focused                 | State layer applied, inner corners change shape |
| 5   | Pressed / Pressed+Focus | State layer applied, inner corners change shape |

### Trailing button states

![6 states of the trailing menu button in the split button.](https://lh3.googleusercontent.com/h_N1go5ViA5xTyg6nI2IBVOYKAqFx_-KIIRe4x3G3zHumq0gfQTZ3RUz1nUquSZJgSjeTLW5cRqDjcCAvuV2O6yCpoft71pelUWNsxAbTys=s0)

| #   | State                     | Visual changes                                  |
| --- | ------------------------- | ----------------------------------------------- |
| 1   | Enabled                   | Default corner radius                           |
| 2   | Disabled                  | Reduced opacity, no interaction                 |
| 3   | Hovered                   | State layer applied, inner corners change shape |
| 4   | Focused                   | State layer applied, inner corners change shape |
| 5   | Pressed / Pressed+Focus   | State layer applied, inner corners change shape |
| 6   | Selected / Selected+Focus | Icon rotates 180°, icon centered in button      |

---

## Measurements

Text and icons are optically centered when the buttons are asymmetrical, and normally centered when symmetrical.

![Padding and size measurements of the split button.](https://lh3.googleusercontent.com/e6qwxAXA90nObGQBZ7-_IkTOn31Iw8LdEp8ua6AHcsG-8wRtfxpgADUbK2qbkwUwJkNad-EAPoVxOhilJKArd9vUhHVkesOXbCjlGTK-8tF4jw=s0)

### Optical centering offset

Content is shifted from true center to appear optically centered:

| Size        | Offset from center |
| ----------- | ------------------ |
| Extra small | -1dp               |
| Small       | -1dp               |
| Medium      | -2dp               |
| Large       | -3dp               |
| Extra large | -6dp               |

### Inner corner radius & spacing

The gap between leading and trailing buttons is always **2dp**. The inner corner radius varies by size:

![Inner padding and inner corner measurements of the split button.](https://lh3.googleusercontent.com/JOPyvu0AZccMCkuvHxbfK-M5B8_rVrEfV4GQ0Zgy0heMSDFJWtwU20dCLmW2HU4SM4JiEu-AfEg7BxqAHXYNCc58ehjVESFTlqZFhhYYuyD1=s0)

| Size        | Inner corner radius |
| ----------- | ------------------- |
| Extra small | 4dp                 |
| Small       | 4dp                 |
| Medium      | 4dp                 |
| Large       | 8dp                 |
| Extra large | 12dp                |

---

## Color Tokens

Split buttons share the same color token system as standard buttons. Color does not change on selection — only a state layer is applied. Tokens include both standard (non-toggle) and toggle (unselected/selected) variants.

![4 color roles of the split button when unselected and selected in light and dark theme.](https://lh3.googleusercontent.com/ocKi_dfwn4Uv_N5ArrzqUKti6uAj79S5f8KVg0BvXDI_BLYgT1-VC55NzHO8NHePXEQ6ygQevbqAq8rZdMxm9hcJF63fW-UjWnfPjpoynjQC=s0)

1. Elevated
2. Filled
3. Tonal
4. Outlined

### Elevated

#### Enabled

| Name                                                  | Token                                                 | Value                                |
| ----------------------------------------------------- | ----------------------------------------------------- | ------------------------------------ |
| Button elevated container color                       | `md.comp.button.elevated.container.color`             | `md.sys.color.surface-container-low` |
| Button elevated container color - toggle (unselected) | `md.comp.button.elevated.unselected.container.color`  | `md.sys.color.surface-container-low` |
| Button elevated container color - toggle (selected)   | `md.comp.button.elevated.selected.container.color`    | `md.sys.color.primary`               |
| Button elevated shadow color                          | `md.comp.button.elevated.container.shadow-color`      | `md.sys.color.shadow`                |
| Button elevated elevation                             | `md.comp.button.elevated.container.elevation`         | `md.sys.elevation.level1`            |
| Button elevated label color                           | `md.comp.button.elevated.label-text.color`            | `md.sys.color.primary`               |
| Button elevated label color - toggle (unselected)     | `md.comp.button.elevated.unselected.label-text.color` | `md.sys.color.primary`               |
| Button elevated label color - toggle (selected)       | `md.comp.button.elevated.selected.label-text.color`   | `md.sys.color.on-primary`            |
| Button elevated icon color                            | `md.comp.button.elevated.icon.color`                  | `md.sys.color.primary`               |
| Button elevated icon color - toggle (unselected)      | `md.comp.button.elevated.unselected.icon.color`       | `md.sys.color.primary`               |
| Button elevated icon color - toggle (selected)        | `md.comp.button.elevated.selected.icon.color`         | `md.sys.color.on-primary`            |

#### Disabled

| Name                                         | Token                                                  | Value                     |
| -------------------------------------------- | ------------------------------------------------------ | ------------------------- |
| Button elevated disabled container color     | `md.comp.button.elevated.disabled.container.color`     | `md.sys.color.on-surface` |
| Button elevated disabled container opacity   | `md.comp.button.elevated.disabled.container.opacity`   | 0.1                       |
| Button elevated disabled container elevation | `md.comp.button.elevated.disabled.container.elevation` | `md.sys.elevation.level0` |
| Button elevated disabled label color         | `md.comp.button.elevated.disabled.label-text.color`    | `md.sys.color.on-surface` |
| Button elevated disabled label opacity       | `md.comp.button.elevated.disabled.label-text.opacity`  | 0.38                      |
| Button elevated disabled icon color          | `md.comp.button.elevated.disabled.icon.color`          | `md.sys.color.on-surface` |
| Button elevated disabled icon opacity        | `md.comp.button.elevated.disabled.icon.opacity`        | 0.38                      |

#### Hovered

| Name                                                            | Token                                                          | Value                                    |
| --------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Button elevated hovered state layer color                       | `md.comp.button.elevated.hovered.state-layer.color`            | `md.sys.color.primary`                   |
| Button elevated hovered state layer color - toggle (unselected) | `md.comp.button.elevated.unselected.hovered.state-layer.color` | `md.sys.color.primary`                   |
| Button elevated hovered state layer color - toggle (selected)   | `md.comp.button.elevated.selected.hovered.state-layer.color`   | `md.sys.color.on-primary`                |
| Button elevated hovered state layer opacity                     | `md.comp.button.elevated.hovered.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Button elevated hovered elevation                               | `md.comp.button.elevated.hovered.container.elevation`          | `md.sys.elevation.level2`                |
| Button elevated hovered label color                             | `md.comp.button.elevated.hovered.label-text.color`             | `md.sys.color.primary`                   |
| Button elevated hovered label color - toggle (unselected)       | `md.comp.button.elevated.unselected.hovered.label-text.color`  | `md.sys.color.primary`                   |
| Button elevated hovered label color - toggle (selected)         | `md.comp.button.elevated.selected.hovered.label-text.color`    | `md.sys.color.on-primary`                |
| Button elevated hovered icon color                              | `md.comp.button.elevated.hovered.icon.color`                   | `md.sys.color.primary`                   |
| Button elevated hovered icon color - toggle (unselected)        | `md.comp.button.elevated.unselected.hovered.icon.color`        | `md.sys.color.primary`                   |
| Button elevated hovered icon color - toggle (selected)          | `md.comp.button.elevated.selected.hovered.icon.color`          | `md.sys.color.on-primary`                |

#### Focused

| Name                                                            | Token                                                          | Value                                    |
| --------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Button elevated focused state layer color                       | `md.comp.button.elevated.focused.state-layer.color`            | `md.sys.color.primary`                   |
| Button elevated focused state layer color - toggle (unselected) | `md.comp.button.elevated.unselected.focused.state-layer.color` | `md.sys.color.primary`                   |
| Button elevated focused state layer color - toggle (selected)   | `md.comp.button.elevated.selected.focused.state-layer.color`   | `md.sys.color.on-primary`                |
| Button elevated focused state layer opacity                     | `md.comp.button.elevated.focused.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |
| Button elevated focused elevation                               | `md.comp.button.elevated.focused.container.elevation`          | `md.sys.elevation.level1`                |
| Button elevated focused label color                             | `md.comp.button.elevated.focused.label-text.color`             | `md.sys.color.primary`                   |
| Button elevated focused label color - toggle (unselected)       | `md.comp.button.elevated.unselected.focused.label-text.color`  | `md.sys.color.primary`                   |
| Button elevated focused label color - toggle (selected)         | `md.comp.button.elevated.selected.focused.label-text.color`    | `md.sys.color.on-primary`                |
| Button elevated focused icon color                              | `md.comp.button.elevated.focused.icon.color`                   | `md.sys.color.primary`                   |
| Button elevated focused icon color - toggle (unselected)        | `md.comp.button.elevated.unselected.focused.icon.color`        | `md.sys.color.primary`                   |
| Button elevated focused icon color - toggle (selected)          | `md.comp.button.elevated.selected.focused.icon.color`          | `md.sys.color.on-primary`                |

#### Pressed

| Name                                                            | Token                                                          | Value                                      |
| --------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| Button elevated pressed state layer color                       | `md.comp.button.elevated.pressed.state-layer.color`            | `md.sys.color.primary`                     |
| Button elevated pressed state layer color - toggle (unselected) | `md.comp.button.elevated.unselected.pressed.state-layer.color` | `md.sys.color.primary`                     |
| Button elevated pressed state layer color - toggle (selected)   | `md.comp.button.elevated.selected.pressed.state-layer.color`   | `md.sys.color.on-primary`                  |
| Button elevated pressed state layer opacity                     | `md.comp.button.elevated.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Button elevated pressed elevation                               | `md.comp.button.elevated.pressed.container.elevation`          | `md.sys.elevation.level1`                  |
| Button elevated pressed label color                             | `md.comp.button.elevated.pressed.label-text.color`             | `md.sys.color.primary`                     |
| Button elevated pressed label color - toggle (unselected)       | `md.comp.button.elevated.unselected.pressed.label-text.color`  | `md.sys.color.primary`                     |
| Button elevated pressed label color - toggle (selected)         | `md.comp.button.elevated.selected.pressed.label-text.color`    | `md.sys.color.on-primary`                  |
| Button elevated pressed icon color                              | `md.comp.button.elevated.pressed.icon.color`                   | `md.sys.color.primary`                     |
| Button elevated pressed icon color - toggle (unselected)        | `md.comp.button.elevated.unselected.pressed.icon.color`        | `md.sys.color.primary`                     |
| Button elevated pressed icon color - toggle (selected)          | `md.comp.button.elevated.selected.pressed.icon.color`          | `md.sys.color.on-primary`                  |

---

### Filled

#### Enabled

| Name                                                | Token                                               | Value                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------- |
| Button filled container color                       | `md.comp.button.filled.container.color`             | `md.sys.color.primary`            |
| Button filled container color - toggle (unselected) | `md.comp.button.filled.unselected.container.color`  | `md.sys.color.surface-container`  |
| Button filled container color - toggle (selected)   | `md.comp.button.filled.selected.container.color`    | `md.sys.color.primary`            |
| Button filled shadow color                          | `md.comp.button.filled.container.shadow-color`      | `md.sys.color.shadow`             |
| Button filled elevation                             | `md.comp.button.filled.container.elevation`         | `md.sys.elevation.level0`         |
| Button filled label color                           | `md.comp.button.filled.label-text.color`            | `md.sys.color.on-primary`         |
| Button filled label color - toggle (unselected)     | `md.comp.button.filled.unselected.label-text.color` | `md.sys.color.on-surface-variant` |
| Button filled label color - toggle (selected)       | `md.comp.button.filled.selected.label-text.color`   | `md.sys.color.on-primary`         |
| Button filled icon color                            | `md.comp.button.filled.icon.color`                  | `md.sys.color.on-primary`         |
| Button filled icon color - toggle (unselected)      | `md.comp.button.filled.unselected.icon.color`       | `md.sys.color.on-surface-variant` |
| Button filled icon color - toggle (selected)        | `md.comp.button.filled.selected.icon.color`         | `md.sys.color.on-primary`         |

#### Disabled

| Name                                       | Token                                                | Value                     |
| ------------------------------------------ | ---------------------------------------------------- | ------------------------- |
| Button filled disabled container color     | `md.comp.button.filled.disabled.container.color`     | `md.sys.color.on-surface` |
| Button filled disabled container opacity   | `md.comp.button.filled.disabled.container.opacity`   | 0.1                       |
| Button filled disabled container elevation | `md.comp.button.filled.disabled.container.elevation` | `md.sys.elevation.level0` |
| Button filled disabled label color         | `md.comp.button.filled.disabled.label-text.color`    | `md.sys.color.on-surface` |
| Button filled disabled label opacity       | `md.comp.button.filled.disabled.label-text.opacity`  | 0.38                      |
| Button filled disabled icon color          | `md.comp.button.filled.disabled.icon.color`          | `md.sys.color.on-surface` |
| Button filled disabled icon opacity        | `md.comp.button.filled.disabled.icon.opacity`        | 0.38                      |

#### Hovered

| Name                                                          | Token                                                        | Value                                    |
| ------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Button filled hovered state layer color                       | `md.comp.button.filled.hovered.state-layer.color`            | `md.sys.color.on-primary`                |
| Button filled hovered state layer color - toggle (unselected) | `md.comp.button.filled.unselected.hovered.state-layer.color` | `md.sys.color.on-surface-variant`        |
| Button filled hovered state layer color - toggle (selected)   | `md.comp.button.filled.selected.hovered.state-layer.color`   | `md.sys.color.on-primary`                |
| Button filled hovered state layer opacity                     | `md.comp.button.filled.hovered.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Button filled hovered elevation                               | `md.comp.button.filled.hovered.container.elevation`          | `md.sys.elevation.level1`                |
| Button filled hovered label color                             | `md.comp.button.filled.hovered.label-text.color`             | `md.sys.color.on-primary`                |
| Button filled hovered label color - toggle (unselected)       | `md.comp.button.filled.unselected.hovered.label-text.color`  | `md.sys.color.on-surface-variant`        |
| Button filled hovered label color - toggle (selected)         | `md.comp.button.filled.selected.hovered.label-text.color`    | `md.sys.color.on-primary`                |
| Button filled hovered icon color                              | `md.comp.button.filled.hovered.icon.color`                   | `md.sys.color.on-primary`                |
| Button filled hovered icon color - toggle (unselected)        | `md.comp.button.filled.unselected.hovered.icon.color`        | `md.sys.color.on-surface-variant`        |
| Button filled hovered icon color - toggle (selected)          | `md.comp.button.filled.selected.hovered.icon.color`          | `md.sys.color.on-primary`                |

#### Focused

| Name                                                          | Token                                                        | Value                                    |
| ------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Button filled focused state layer color                       | `md.comp.button.filled.focused.state-layer.color`            | `md.sys.color.on-primary`                |
| Button filled focused state layer color - toggle (unselected) | `md.comp.button.filled.unselected.focused.state-layer.color` | `md.sys.color.on-surface-variant`        |
| Button filled focused state layer color - toggle (selected)   | `md.comp.button.filled.selected.focused.state-layer.color`   | `md.sys.color.on-primary`                |
| Button filled focused state layer opacity                     | `md.comp.button.filled.focused.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |
| Button filled focused elevation                               | `md.comp.button.filled.focused.container.elevation`          | `md.sys.elevation.level0`                |
| Button filled focused label color                             | `md.comp.button.filled.focused.label-text.color`             | `md.sys.color.on-primary`                |
| Button filled focused label color - toggle (unselected)       | `md.comp.button.filled.unselected.focused.label-text.color`  | `md.sys.color.on-surface-variant`        |
| Button filled focused label color - toggle (selected)         | `md.comp.button.filled.selected.focused.label-text.color`    | `md.sys.color.on-primary`                |
| Button filled focused icon color                              | `md.comp.button.filled.focused.icon.color`                   | `md.sys.color.on-primary`                |
| Button filled focused icon color - toggle (unselected)        | `md.comp.button.filled.unselected.focused.icon.color`        | `md.sys.color.on-surface-variant`        |
| Button filled focused icon color - toggle (selected)          | `md.comp.button.filled.selected.focused.icon.color`          | `md.sys.color.on-primary`                |

#### Pressed

| Name                                                          | Token                                                        | Value                                      |
| ------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| Button filled pressed state layer color                       | `md.comp.button.filled.pressed.state-layer.color`            | `md.sys.color.on-primary`                  |
| Button filled pressed state layer color - toggle (unselected) | `md.comp.button.filled.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant`          |
| Button filled pressed state layer color - toggle (selected)   | `md.comp.button.filled.selected.pressed.state-layer.color`   | `md.sys.color.on-primary`                  |
| Button filled pressed state layer opacity                     | `md.comp.button.filled.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Button filled pressed elevation                               | `md.comp.button.filled.pressed.container.elevation`          | `md.sys.elevation.level0`                  |
| Button filled pressed label color                             | `md.comp.button.filled.pressed.label-text.color`             | `md.sys.color.on-primary`                  |
| Button filled pressed label color - toggle (unselected)       | `md.comp.button.filled.unselected.pressed.label-text.color`  | `md.sys.color.on-surface-variant`          |
| Button filled pressed label color - toggle (selected)         | `md.comp.button.filled.selected.pressed.label-text.color`    | `md.sys.color.on-primary`                  |
| Button filled pressed icon color                              | `md.comp.button.filled.pressed.icon.color`                   | `md.sys.color.on-primary`                  |
| Button filled pressed icon color - toggle (unselected)        | `md.comp.button.filled.unselected.pressed.icon.color`        | `md.sys.color.on-surface-variant`          |
| Button filled pressed icon color - toggle (selected)          | `md.comp.button.filled.selected.pressed.icon.color`          | `md.sys.color.on-primary`                  |

---

### Tonal

#### Enabled

| Name                                               | Token                                              | Value                                 |
| -------------------------------------------------- | -------------------------------------------------- | ------------------------------------- |
| Button tonal container color                       | `md.comp.button.tonal.container.color`             | `md.sys.color.secondary-container`    |
| Button tonal container color - toggle (unselected) | `md.comp.button.tonal.unselected.container.color`  | `md.sys.color.secondary-container`    |
| Button tonal container color - toggle (selected)   | `md.comp.button.tonal.selected.container.color`    | `md.sys.color.secondary`              |
| Button tonal shadow color                          | `md.comp.button.tonal.container.shadow-color`      | `md.sys.color.shadow`                 |
| Button tonal elevation                             | `md.comp.button.tonal.container.elevation`         | `md.sys.elevation.level0`             |
| Button tonal label color                           | `md.comp.button.tonal.label-text.color`            | `md.sys.color.on-secondary-container` |
| Button tonal label color - toggle (unselected)     | `md.comp.button.tonal.unselected.label-text.color` | `md.sys.color.on-secondary-container` |
| Button tonal label color - toggle (selected)       | `md.comp.button.tonal.selected.label-text.color`   | `md.sys.color.on-secondary`           |
| Button tonal icon color                            | `md.comp.button.tonal.icon.color`                  | `md.sys.color.on-secondary-container` |
| Button tonal icon color - toggle (unselected)      | `md.comp.button.tonal.unselected.icon.color`       | `md.sys.color.on-secondary-container` |
| Button tonal icon color - toggle (selected)        | `md.comp.button.tonal.selected.icon.color`         | `md.sys.color.on-secondary`           |

#### Disabled

| Name                                      | Token                                               | Value                     |
| ----------------------------------------- | --------------------------------------------------- | ------------------------- |
| Button tonal disabled container color     | `md.comp.button.tonal.disabled.container.color`     | `md.sys.color.on-surface` |
| Button tonal disabled container opacity   | `md.comp.button.tonal.disabled.container.opacity`   | 0.1                       |
| Button tonal disabled container elevation | `md.comp.button.tonal.disabled.container.elevation` | `md.sys.elevation.level0` |
| Button tonal disabled label color         | `md.comp.button.tonal.disabled.label-text.color`    | `md.sys.color.on-surface` |
| Button tonal disabled label opacity       | `md.comp.button.tonal.disabled.label-text.opacity`  | 0.38                      |
| Button tonal disabled icon color          | `md.comp.button.tonal.disabled.icon.color`          | `md.sys.color.on-surface` |
| Button tonal disabled icon opacity        | `md.comp.button.tonal.disabled.icon.opacity`        | 0.38                      |

#### Hovered

| Name                                                         | Token                                                       | Value                                    |
| ------------------------------------------------------------ | ----------------------------------------------------------- | ---------------------------------------- |
| Button tonal hovered state layer color                       | `md.comp.button.tonal.hovered.state-layer.color`            | `md.sys.color.on-secondary-container`    |
| Button tonal hovered state layer color - toggle (unselected) | `md.comp.button.tonal.unselected.hovered.state-layer.color` | `md.sys.color.on-secondary-container`    |
| Button tonal hovered state layer color - toggle (selected)   | `md.comp.button.tonal.selected.hovered.state-layer.color`   | `md.sys.color.on-secondary`              |
| Button tonal hovered state layer opacity                     | `md.comp.button.tonal.hovered.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Button tonal hovered elevation                               | `md.comp.button.tonal.hovered.container.elevation`          | `md.sys.elevation.level1`                |
| Button tonal hovered label color                             | `md.comp.button.tonal.hovered.label-text.color`             | `md.sys.color.on-secondary-container`    |
| Button tonal hovered label color - toggle (unselected)       | `md.comp.button.tonal.unselected.hovered.label-text.color`  | `md.sys.color.on-secondary-container`    |
| Button tonal hovered label color - toggle (selected)         | `md.comp.button.tonal.selected.hovered.label-text.color`    | `md.sys.color.on-secondary`              |
| Button tonal hovered icon color                              | `md.comp.button.tonal.hovered.icon.color`                   | `md.sys.color.on-secondary-container`    |
| Button tonal hovered icon color - toggle (unselected)        | `md.comp.button.tonal.unselected.hovered.icon.color`        | `md.sys.color.on-secondary-container`    |
| Button tonal hovered icon color - toggle (selected)          | `md.comp.button.tonal.selected.hovered.icon.color`          | `md.sys.color.on-secondary`              |

#### Focused

| Name                                                         | Token                                                       | Value                                    |
| ------------------------------------------------------------ | ----------------------------------------------------------- | ---------------------------------------- |
| Button tonal focused state layer color                       | `md.comp.button.tonal.focused.state-layer.color`            | `md.sys.color.on-secondary-container`    |
| Button tonal focused state layer color - toggle (unselected) | `md.comp.button.tonal.unselected.focused.state-layer.color` | `md.sys.color.on-secondary-container`    |
| Button tonal focused state layer color - toggle (selected)   | `md.comp.button.tonal.selected.focused.state-layer.color`   | `md.sys.color.on-secondary`              |
| Button tonal focused state layer opacity                     | `md.comp.button.tonal.focused.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |
| Button tonal focused elevation                               | `md.comp.button.tonal.focused.container.elevation`          | `md.sys.elevation.level0`                |
| Button tonal focused label color                             | `md.comp.button.tonal.focused.label-text.color`             | `md.sys.color.on-secondary-container`    |
| Button tonal focused label color - toggle (unselected)       | `md.comp.button.tonal.unselected.focused.label-text.color`  | `md.sys.color.on-secondary-container`    |
| Button tonal focused label color - toggle (selected)         | `md.comp.button.tonal.selected.focused.label-text.color`    | `md.sys.color.on-secondary`              |
| Button tonal focused icon color                              | `md.comp.button.tonal.focused.icon.color`                   | `md.sys.color.on-secondary-container`    |
| Button tonal focused icon color - toggle (unselected)        | `md.comp.button.tonal.unselected.focused.icon.color`        | `md.sys.color.on-secondary-container`    |
| Button tonal focused icon color - toggle (selected)          | `md.comp.button.tonal.selected.focused.icon.color`          | `md.sys.color.on-secondary`              |

#### Pressed

| Name                                                         | Token                                                       | Value                                      |
| ------------------------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------ |
| Button tonal pressed state layer color                       | `md.comp.button.tonal.pressed.state-layer.color`            | `md.sys.color.on-secondary-container`      |
| Button tonal pressed state layer color - toggle (unselected) | `md.comp.button.tonal.unselected.pressed.state-layer.color` | `md.sys.color.on-secondary-container`      |
| Button tonal pressed state layer color - toggle (selected)   | `md.comp.button.tonal.selected.pressed.state-layer.color`   | `md.sys.color.on-secondary`                |
| Button tonal pressed state layer opacity                     | `md.comp.button.tonal.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Button tonal pressed elevation                               | `md.comp.button.tonal.pressed.container.elevation`          | `md.sys.elevation.level0`                  |
| Button tonal pressed label color                             | `md.comp.button.tonal.pressed.label-text.color`             | `md.sys.color.on-secondary-container`      |
| Button tonal pressed label color - toggle (unselected)       | `md.comp.button.tonal.unselected.pressed.label-text.color`  | `md.sys.color.on-secondary-container`      |
| Button tonal pressed label color - toggle (selected)         | `md.comp.button.tonal.selected.pressed.label-text.color`    | `md.sys.color.on-secondary`                |
| Button tonal pressed icon color                              | `md.comp.button.tonal.pressed.icon.color`                   | `md.sys.color.on-secondary-container`      |
| Button tonal pressed icon color - toggle (unselected)        | `md.comp.button.tonal.unselected.pressed.icon.color`        | `md.sys.color.on-secondary-container`      |
| Button tonal pressed icon color - toggle (selected)          | `md.comp.button.tonal.selected.pressed.icon.color`          | `md.sys.color.on-secondary`                |

---

### Outlined

#### Enabled

| Name                                                | Token                                                 | Value                             |
| --------------------------------------------------- | ----------------------------------------------------- | --------------------------------- |
| Button outlined outline color                       | `md.comp.button.outlined.outline.color`               | `md.sys.color.outline-variant`    |
| Button outlined container color - toggle (selected) | `md.comp.button.outlined.selected.container.color`    | `md.sys.color.inverse-surface`    |
| Button outlined label color                         | `md.comp.button.outlined.label-text.color`            | `md.sys.color.on-surface-variant` |
| Button outlined label color - toggle (unselected)   | `md.comp.button.outlined.unselected.label-text.color` | `md.sys.color.on-surface-variant` |
| Button outlined label color - toggle (selected)     | `md.comp.button.outlined.selected.label-text.color`   | `md.sys.color.inverse-on-surface` |
| Button outlined icon color                          | `md.comp.button.outlined.icon.color`                  | `md.sys.color.on-surface-variant` |
| Button outlined icon color - toggle (unselected)    | `md.comp.button.outlined.unselected.icon.color`       | `md.sys.color.on-surface-variant` |
| Button outlined icon color - toggle (selected)      | `md.comp.button.outlined.selected.icon.color`         | `md.sys.color.inverse-on-surface` |

#### Disabled

| Name                                                | Token                                                       | Value                          |
| --------------------------------------------------- | ----------------------------------------------------------- | ------------------------------ |
| Button outlined disabled outline color              | `md.comp.button.outlined.disabled.outline.color`            | `md.sys.color.outline-variant` |
| Button outlined disabled outline color (unselected) | `md.comp.button.outlined.unselected.disabled.outline.color` | `md.sys.color.outline-variant` |
| Button outlined disabled container color (selected) | `md.comp.button.outlined.selected.disabled.container.color` | `md.sys.color.on-surface`      |
| Button outlined disabled container opacity          | `md.comp.button.outlined.disabled.container.opacity`        | 0.1                            |
| Button outlined disabled label color                | `md.comp.button.outlined.disabled.label-text.color`         | `md.sys.color.on-surface`      |
| Button outlined disabled label opacity              | `md.comp.button.outlined.disabled.label-text.opacity`       | 0.38                           |
| Button outlined disabled icon color                 | `md.comp.button.outlined.disabled.icon.color`               | `md.sys.color.on-surface`      |
| Button outlined disabled icon opacity               | `md.comp.button.outlined.disabled.icon.opacity`             | 0.38                           |

#### Hovered

| Name                                                            | Token                                                          | Value                                    |
| --------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Button outlined hovered state layer color                       | `md.comp.button.outlined.hovered.state-layer.color`            | `md.sys.color.on-surface-variant`        |
| Button outlined hovered state layer color - toggle (unselected) | `md.comp.button.outlined.unselected.hovered.state-layer.color` | `md.sys.color.on-surface-variant`        |
| Button outlined hovered state layer color - toggle (selected)   | `md.comp.button.outlined.selected.hovered.state-layer.color`   | `md.sys.color.inverse-on-surface`        |
| Button outlined hovered state layer opacity                     | `md.comp.button.outlined.hovered.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Button outlined hovered outline color                           | `md.comp.button.outlined.hovered.outline.color`                | `md.sys.color.outline-variant`           |
| Button outlined hovered outline color - toggle (unselected)     | `md.comp.button.outlined.unselected.hovered.outline.color`     | `md.sys.color.outline-variant`           |
| Button outlined hovered label color                             | `md.comp.button.outlined.hovered.label-text.color`             | `md.sys.color.on-surface-variant`        |
| Button outlined hovered label color - toggle (unselected)       | `md.comp.button.outlined.unselected.hovered.label-text.color`  | `md.sys.color.on-surface-variant`        |
| Button outlined hovered label color - toggle (selected)         | `md.comp.button.outlined.selected.hovered.label-text.color`    | `md.sys.color.inverse-on-surface`        |
| Button outlined hovered icon color                              | `md.comp.button.outlined.hovered.icon.color`                   | `md.sys.color.on-surface-variant`        |
| Button outlined hovered icon color - toggle (unselected)        | `md.comp.button.outlined.unselected.hovered.icon.color`        | `md.sys.color.on-surface-variant`        |
| Button outlined hovered icon color - toggle (selected)          | `md.comp.button.outlined.selected.hovered.icon.color`          | `md.sys.color.inverse-on-surface`        |

#### Focused

| Name                                                            | Token                                                          | Value                                    |
| --------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Button outlined focused state layer color                       | `md.comp.button.outlined.focused.state-layer.color`            | `md.sys.color.on-surface-variant`        |
| Button outlined focused state layer color - toggle (unselected) | `md.comp.button.outlined.unselected.focused.state-layer.color` | `md.sys.color.on-surface-variant`        |
| Button outlined focused state layer color - toggle (selected)   | `md.comp.button.outlined.selected.focused.state-layer.color`   | `md.sys.color.inverse-on-surface`        |
| Button outlined focused state layer opacity                     | `md.comp.button.outlined.focused.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |
| Button outlined focused outline color                           | `md.comp.button.outlined.focused.outline.color`                | `md.sys.color.outline-variant`           |
| Button outlined focused outline color - toggle (unselected)     | `md.comp.button.outlined.unselected.focused.outline.color`     | `md.sys.color.outline-variant`           |
| Button outlined focused label color                             | `md.comp.button.outlined.focused.label-text.color`             | `md.sys.color.on-surface-variant`        |
| Button outlined focused label color - toggle (unselected)       | `md.comp.button.outlined.unselected.focused.label-text.color`  | `md.sys.color.on-surface-variant`        |
| Button outlined focused label color - toggle (selected)         | `md.comp.button.outlined.selected.focused.label-text.color`    | `md.sys.color.inverse-on-surface`        |
| Button outlined focused icon color                              | `md.comp.button.outlined.focused.icon.color`                   | `md.sys.color.on-surface-variant`        |
| Button outlined focused icon color - toggle (unselected)        | `md.comp.button.outlined.unselected.focused.icon.color`        | `md.sys.color.on-surface-variant`        |
| Button outlined focused icon color - toggle (selected)          | `md.comp.button.outlined.selected.focused.icon.color`          | `md.sys.color.inverse-on-surface`        |

#### Pressed

| Name                                                            | Token                                                          | Value                                      |
| --------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| Button outlined pressed state layer color                       | `md.comp.button.outlined.pressed.state-layer.color`            | `md.sys.color.on-surface-variant`          |
| Button outlined pressed state layer color - toggle (unselected) | `md.comp.button.outlined.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant`          |
| Button outlined pressed state layer color - toggle (selected)   | `md.comp.button.outlined.selected.pressed.state-layer.color`   | `md.sys.color.inverse-on-surface`          |
| Button outlined pressed state layer opacity                     | `md.comp.button.outlined.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Button outlined pressed outline color                           | `md.comp.button.outlined.pressed.outline.color`                | `md.sys.color.outline-variant`             |
| Button outlined pressed outline color - toggle (unselected)     | `md.comp.button.outlined.unselected.pressed.outline.color`     | `md.sys.color.outline-variant`             |
| Button outlined pressed label color                             | `md.comp.button.outlined.pressed.label-text.color`             | `md.sys.color.on-surface-variant`          |
| Button outlined pressed label color - toggle (unselected)       | `md.comp.button.outlined.unselected.pressed.label-text.color`  | `md.sys.color.on-surface-variant`          |
| Button outlined pressed label color - toggle (selected)         | `md.comp.button.outlined.selected.pressed.label-text.color`    | `md.sys.color.inverse-on-surface`          |
| Button outlined pressed icon color                              | `md.comp.button.outlined.pressed.icon.color`                   | `md.sys.color.on-surface-variant`          |
| Button outlined pressed icon color - toggle (unselected)        | `md.comp.button.outlined.unselected.pressed.icon.color`        | `md.sys.color.on-surface-variant`          |
| Button outlined pressed icon color - toggle (selected)          | `md.comp.button.outlined.selected.pressed.icon.color`          | `md.sys.color.inverse-on-surface`          |

---

## Accessibility

### Touch & cursor targets

Each button in the split button requires a minimum target area of **48×48dp**. Extra small and small sizes are shorter than 48dp, so their hit-test areas must extend beyond the visible bounds to meet the 48dp minimum.

![Diagram showing extra small and small split buttons with visible 48x48dp target areas.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dpv69h-1.png?alt=media&token=649cab35-4ea3-432c-b027-1dd04227d045=s0)

1. Extra small
2. Small

### Initial focus

Focus should land on the leading button first, then move to the trailing button. The exact order may depend on the operating system's accessibility settings.

![Focus on the leading button and trailing button for both LTR and RTL languages.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dpwfdp-2.png?alt=media&token=8f646a31-a6f5-4330-b17d-1d8c11d2132f=s0)

1. Left to right
2. Right to left

### Keyboard navigation

| Key            | Action                   |
| -------------- | ------------------------ |
| Tab            | Navigate between buttons |
| Space or Enter | Activate focused button  |

### Labeling

- The leading button's accessibility label should match its visible text, following standard button labeling conventions
- The trailing button must include an expanded/collapsed state label (e.g. "More watch options, collapsed")
- The trailing button's label should indicate that additional choices related to the main action are available
- When the menu opens, label it according to [menu accessibility guidance](https://m3.material.io/m3/pages/menus/accessibility/)

!["Watch later" is both the button label text and the accessibility label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dq2sfs-3.png?alt=media&token=85b75ca9-ea9b-4199-939d-9b42767d223b=s0)

![Collapsed state indicated for the trailing button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dq40tg-4.png?alt=media&token=e787ddba-953d-423a-bdee-55583e4500a7=s0)

---

## Availability & Resources

| Type           | Resource                                                                                                                                                                                                                                 | Status      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Design         | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460)                                                                                                                                                           | Available   |
| Implementation | [Jetpack Compose: Expressive](<https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#SplitButtonLayout(kotlin.Function0,kotlin.Function0,androidx.compose.ui.Modifier,androidx.compose.ui.unit.Dp)>) | Available   |
|                | [MDC-Android: Expressive](https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#split-button)                                                                                         | Available   |
|                | Web: Expressive                                                                                                                                                                                                                          | Unavailable |

## M3 Expressive Update

**May 2025** — New component added to catalog.

![5 sizes of split buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmjd8r-2.png?alt=media&token=62fdcac6-024e-4e46-8b38-7c4e6da472a8=s0)

The split button features a trailing menu button that spins and morphs shape on activation. Available in 5 sizes (XS–XL) and 4 color styles (elevated, filled, tonal, outlined), matching the same size range as standard buttons and icon buttons.
