# Checkbox — M3 Component Reference

> Checkboxes let users select one or more items from a list, or turn an item on or off.

Sources: [Overview](https://m3.material.io/components/checkbox/overview) · [Specs](https://m3.material.io/components/checkbox/specs) · [Guidelines](https://m3.material.io/components/checkbox/guidelines) · [Accessibility](https://m3.material.io/components/checkbox/accessibility)

---

## Anatomy

![Diagram of checkbox indicating the 2 parts of its anatomy](https://lh3.googleusercontent.com/o7Jd5nbugG-76fMDJwv-WD-ardrEfZF5Nxfq_8Pikz0V6pnzJXvDA6C4NPzOpZ3z39Rjb6tb1yxxQs8GBhn0L11_ozezB4FsTlSHGIQrRFcz=s0)

A checkbox consists of two elements:

1. **Container** — the outer box that shows selected/unselected/indeterminate state
2. **Icon** — checkmark (selected), dash (indeterminate), or empty (unselected)

---

## Usage & When to Use

![A list of burger additions represented with checkboxes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0yt1n6-1.png?alt=media&token=e687e377-f0e9-4a8c-8323-97b6f3b03b2d=s0)

Use checkboxes to:

- Select one or more options from a list
- Present a list containing sub-selections (parent/child)
- Turn an item on or off in a desktop environment
- Visually group similar options together

Checkboxes should be used instead of switches when multiple, related options can be selected from a list. They take up less space and visually group items.

![List of 80's songs indicating choice through checkbox selection](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vnl39-2.png?alt=media&token=a6b2f259-cb48-4e43-9699-e20e94c0d737=s0)

### When NOT to use a checkbox

| Scenario                                                 | Use instead   |
| -------------------------------------------------------- | ------------- |
| Selecting a single option from a mutually-exclusive list | Radio buttons |
| Standalone or verbose options (e.g. settings)            | Switches      |
| Binary toggle that takes effect immediately on mobile    | Switch        |

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vok05-3_do.png?alt=media&token=6dd5d04d-babd-45cf-b7f8-a5e95ab275ff=s0" /><br/><b>Do:</b> Checkboxes for selecting multiple related options. A parent checkbox enables select/deselect all.</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vwf9n-4_dont.png?alt=media&token=049701a4-cc33-442f-8e4e-db9c79aa40fa=s0" /><br/><b>Don't:</b> Use switches for related multi-select lists. Checkboxes group items better and take less space.</td>
</tr></table>

### Alternate selection controls

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcypcjyf-5.png?alt=media&token=e0bb850c-365e-424b-aaa7-703285e8a6ea=s0" /><br/>Radio buttons — single selection</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vwj88-6.png?alt=media&token=9323d5db-9e97-4df0-a4b0-2cf2136cf1d2=s0" /><br/>Switches — standalone/verbose options</td>
</tr></table>

---

## States

A checkbox has three selection states:

1. **Unselected** — empty container with outline
2. **Selected** — filled container with checkmark icon
3. **Indeterminate** — filled container with dash icon (parent checkbox when some children are selected)

![3 checkboxes demonstrating all three states](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcyjgb31-01.png?alt=media&token=c0a1a399-2957-49d2-96cf-9dc729961c04=s0)

---

## Behavior

### Multi-selection

Multiple checkboxes in a list can be selected independently.

### Parent-child relationships

- When the parent checkbox is **checked**, all child checkboxes are checked
- When the parent checkbox is **unchecked**, all child checkboxes are unchecked
- If **some** (but not all) child checkboxes are checked, the parent becomes **indeterminate**
- Checking an indeterminate parent checks all children

![Indeterminate parent checkbox with partial child selection](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcyq4z51-2.png?alt=media&token=e2bf5c82-a9b2-403d-a5cd-fe09f708969a=s0)

### Immediate feedback

When selected, a checkbox clearly and instantly communicates its state. If used to turn something on or off, the action should execute immediately.

---

## Measurements

![Measurements of a selected checkbox](https://lh3.googleusercontent.com/CcUqIZiHlrkBXYmqL54pCjCjsNpVnHsMf6QdUXITGzV89PkHrNbV84_w9I5ZgcNPlMFcCVbTxYhZzVbMESebqg2wWiSlqbYaRNstFOLT5P-s=s0)

| Attribute                | Value                      |
| ------------------------ | -------------------------- |
| Container size           | 18dp × 18dp                |
| Container corner shape   | 2dp                        |
| Unselected outline width | 2dp                        |
| Selected outline width   | 0 (no outline)             |
| Icon size                | 18dp                       |
| Icon alignment           | Center-aligned             |
| State layer size         | 40dp                       |
| State layer shape        | `md.sys.shape.corner.full` |
| Touch target             | 48dp × 48dp                |

---

## Color Tokens

![Checkbox color roles in light and dark themes](https://lh3.googleusercontent.com/tRScc_0bS1gM7jai2Ojj3qDzyhE696wedzZNPry2Pson8ONvZ_S_IoRUO6RwZBC5-YQUmgqLKG0xWldIJ5y_DT6lfRcty3F0JPY7pJvbqkZG=s0)

1. Checkbox — 2. State layer — 3. Icon

### Enabled

#### Container

| Element                  | Token                                       | Value                             |
| ------------------------ | ------------------------------------------- | --------------------------------- |
| Container width          | `md.comp.checkbox.container.width`          | 18dp                              |
| Container height         | `md.comp.checkbox.container.height`         | 18dp                              |
| Container size           | `md.comp.checkbox.container.size`           | 18dp                              |
| Container shape          | `md.comp.checkbox.container.shape`          |                                   |
| Unselected outline color | `md.comp.checkbox.unselected.outline.color` | `md.sys.color.on-surface-variant` |
| Unselected outline width | `md.comp.checkbox.unselected.outline.width` | 2dp                               |
| Selected container color | `md.comp.checkbox.selected.container.color` | `md.sys.color.primary`            |
| Selected outline width   | `md.comp.checkbox.selected.outline.width`   | 0                                 |

#### Container (Error)

| Element                        | Token                                             | Value                |
| ------------------------------ | ------------------------------------------------- | -------------------- |
| Unselected error outline color | `md.comp.checkbox.unselected.error.outline.color` | `md.sys.color.error` |
| Selected error container color | `md.comp.checkbox.selected.error.container.color` | `md.sys.color.error` |

#### Icon

| Element                   | Token                                        | Value                     |
| ------------------------- | -------------------------------------------- | ------------------------- |
| Icon size                 | `md.comp.checkbox.icon.size`                 | 18dp                      |
| Selected icon color       | `md.comp.checkbox.selected.icon.color`       | `md.sys.color.on-primary` |
| Selected error icon color | `md.comp.checkbox.selected.error.icon.color` | `md.sys.color.on-error`   |
| Unselected icon color     | `md.comp.checkbox.unselected.icon.color`     | `md.sys.color.on-surface` |

#### State Layer

| Element           | Token                                | Value                      |
| ----------------- | ------------------------------------ | -------------------------- |
| State layer size  | `md.comp.checkbox.state-layer.size`  | 40dp                       |
| State layer shape | `md.comp.checkbox.state-layer.shape` | `md.sys.shape.corner.full` |

### Disabled

#### Container

| Element                      | Token                                                        | Value                     |
| ---------------------------- | ------------------------------------------------------------ | ------------------------- |
| Unselected outline color     | `md.comp.checkbox.unselected.disabled.outline.color`         | `md.sys.color.on-surface` |
| Unselected outline width     | `md.comp.checkbox.unselected.disabled.outline.width`         | 2dp                       |
| Unselected container opacity | `md.comp.checkbox.unselected.disabled.container.opacity`     | 0.38                      |
| Selected container color     | `md.comp.checkbox.selected.disabled.container.color`         | `md.sys.color.on-surface` |
| Selected container opacity   | `md.comp.checkbox.selected.disabled.container.opacity`       | 0.38                      |
| Selected outline width       | `md.comp.checkbox.selected.disabled.container.outline.width` | 0                         |

#### Icon

| Element                          | Token                                               | Value                  |
| -------------------------------- | --------------------------------------------------- | ---------------------- |
| Selected icon color              | `md.comp.checkbox.selected.disabled.icon.color`     | `md.sys.color.surface` |
| Disabled selected icon color     | `md.comp.checkbox.disabled.selected.icon.color`     | `md.sys.color.primary` |
| Disabled selected icon opacity   | `md.comp.checkbox.disabled.selected.icon.opacity`   | 0.38                   |
| Disabled unselected icon color   | `md.comp.checkbox.disabled.unselected.icon.color`   | `md.sys.color.primary` |
| Disabled unselected icon opacity | `md.comp.checkbox.disabled.unselected.icon.opacity` | 0.38                   |

### Hovered

#### Container

| Element                              | Token                                                   | Value                     |
| ------------------------------------ | ------------------------------------------------------- | ------------------------- |
| Unselected outline color             | `md.comp.checkbox.unselected.hover.outline.color`       | `md.sys.color.on-surface` |
| Unselected outline width             | `md.comp.checkbox.unselected.hover.outline.width`       | 2dp                       |
| Selected container color             | `md.comp.checkbox.selected.hover.container.color`       | `md.sys.color.primary`    |
| Selected outline width               | `md.comp.checkbox.selected.hover.outline.width`         | 0                         |
| Unselected error hover outline color | `md.comp.checkbox.unselected.error.hover.outline.color` | `md.sys.color.error`      |
| Unselected error hover outline width | `md.comp.checkbox.unselected.error.hover.outline.width` | 2dp                       |
| Selected error hover container color | `md.comp.checkbox.selected.error.hover.container.color` | `md.sys.color.error`      |
| Selected error hover outline width   | `md.comp.checkbox.selected.error.hover.outline.width`   | 0                         |

#### State Layer

| Element                        | Token                                                   | Value                                    |
| ------------------------------ | ------------------------------------------------------- | ---------------------------------------- |
| Selected state layer color     | `md.comp.checkbox.selected.hover.state-layer.color`     | `md.sys.color.primary`                   |
| Selected state layer opacity   | `md.comp.checkbox.selected.hover.state-layer.opacity`   | `md.sys.state.hover.state-layer-opacity` |
| Unselected state layer color   | `md.comp.checkbox.unselected.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| Unselected state layer opacity | `md.comp.checkbox.unselected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Error state layer color        | `md.comp.checkbox.error.hover.state-layer.color`        | `md.sys.color.error`                     |
| Error state layer opacity      | `md.comp.checkbox.error.hover.state-layer.opacity`      | `md.sys.state.hover.state-layer-opacity` |

#### Icon

| Element                   | Token                                              | Value                     |
| ------------------------- | -------------------------------------------------- | ------------------------- |
| Selected icon color       | `md.comp.checkbox.selected.hover.icon.color`       | `md.sys.color.on-primary` |
| Selected error icon color | `md.comp.checkbox.selected.error.hover.icon.color` | `md.sys.color.on-error`   |
| Unselected icon color     | `md.comp.checkbox.unselected.hover.icon.color`     | `md.sys.color.on-surface` |

### Focused

#### Focus Indicator

| Element   | Token                                             | Value                                       |
| --------- | ------------------------------------------------- | ------------------------------------------- |
| Color     | `md.comp.checkbox.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Thickness | `md.comp.checkbox.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Offset    | `md.comp.checkbox.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

#### Container

| Element                              | Token                                                   | Value                     |
| ------------------------------------ | ------------------------------------------------------- | ------------------------- |
| Unselected outline color             | `md.comp.checkbox.unselected.focus.outline.color`       | `md.sys.color.on-surface` |
| Unselected outline width             | `md.comp.checkbox.unselected.focus.outline.width`       | 2dp                       |
| Selected container color             | `md.comp.checkbox.selected.focus.container.color`       | `md.sys.color.primary`    |
| Selected outline width               | `md.comp.checkbox.selected.focus.outline.width`         | 0                         |
| Unselected error focus outline color | `md.comp.checkbox.unselected.error.focus.outline.color` | `md.sys.color.error`      |
| Unselected error focus outline width | `md.comp.checkbox.unselected.error.focus.outline.width` | 2dp                       |
| Selected error focus container color | `md.comp.checkbox.selected.error.focus.container.color` | `md.sys.color.error`      |
| Selected error focus outline width   | `md.comp.checkbox.selected.error.focus.outline.width`   | 0                         |

#### State Layer

| Element                        | Token                                                   | Value                                    |
| ------------------------------ | ------------------------------------------------------- | ---------------------------------------- |
| Selected state layer color     | `md.comp.checkbox.selected.focus.state-layer.color`     | `md.sys.color.primary`                   |
| Selected state layer opacity   | `md.comp.checkbox.selected.focus.state-layer.opacity`   | `md.sys.state.focus.state-layer-opacity` |
| Unselected state layer color   | `md.comp.checkbox.unselected.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| Unselected state layer opacity | `md.comp.checkbox.unselected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Error state layer color        | `md.comp.checkbox.error.focus.state-layer.color`        | `md.sys.color.error`                     |
| Error state layer opacity      | `md.comp.checkbox.error.focus.state-layer.opacity`      | `md.sys.state.focus.state-layer-opacity` |

#### Icon

| Element                   | Token                                              | Value                     |
| ------------------------- | -------------------------------------------------- | ------------------------- |
| Selected icon color       | `md.comp.checkbox.selected.focus.icon.color`       | `md.sys.color.on-primary` |
| Selected error icon color | `md.comp.checkbox.selected.error.focus.icon.color` | `md.sys.color.on-error`   |
| Unselected icon color     | `md.comp.checkbox.unselected.focus.icon.color`     | `md.sys.color.on-surface` |

### Pressed

#### Container

| Element                                | Token                                                     | Value                     |
| -------------------------------------- | --------------------------------------------------------- | ------------------------- |
| Unselected outline color               | `md.comp.checkbox.unselected.pressed.outline.color`       | `md.sys.color.on-surface` |
| Unselected outline width               | `md.comp.checkbox.unselected.pressed.outline.width`       | 2dp                       |
| Selected container color               | `md.comp.checkbox.selected.pressed.container.color`       | `md.sys.color.primary`    |
| Selected outline width                 | `md.comp.checkbox.selected.pressed.outline.width`         | 0                         |
| Unselected error pressed outline color | `md.comp.checkbox.unselected.error.pressed.outline.color` | `md.sys.color.error`      |
| Unselected error pressed outline width | `md.comp.checkbox.unselected.error.pressed.outline.width` | 2dp                       |
| Selected error pressed container color | `md.comp.checkbox.selected.error.pressed.container.color` | `md.sys.color.error`      |
| Selected error pressed outline width   | `md.comp.checkbox.selected.error.pressed.outline.width`   | 0                         |

#### State Layer

| Element                        | Token                                                     | Value                                      |
| ------------------------------ | --------------------------------------------------------- | ------------------------------------------ |
| Unselected state layer color   | `md.comp.checkbox.unselected.pressed.state-layer.color`   | `md.sys.color.primary`                     |
| Unselected state layer opacity | `md.comp.checkbox.unselected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Selected state layer color     | `md.comp.checkbox.selected.pressed.state-layer.color`     | `md.sys.color.on-surface`                  |
| Selected state layer opacity   | `md.comp.checkbox.selected.pressed.state-layer.opacity`   | `md.sys.state.pressed.state-layer-opacity` |
| Error state layer color        | `md.comp.checkbox.error.pressed.state-layer.color`        | `md.sys.color.error`                       |
| Error state layer opacity      | `md.comp.checkbox.error.pressed.state-layer.opacity`      | `md.sys.state.pressed.state-layer-opacity` |

#### Icon

| Element                   | Token                                                | Value                     |
| ------------------------- | ---------------------------------------------------- | ------------------------- |
| Selected icon color       | `md.comp.checkbox.selected.pressed.icon.color`       | `md.sys.color.on-primary` |
| Selected error icon color | `md.comp.checkbox.selected.error.pressed.icon.color` | `md.sys.color.on-error`   |
| Unselected icon color     | `md.comp.checkbox.unselected.pressed.icon.color`     | `md.sys.color.on-surface` |

---

## Interaction States

![Side by side view of states in light and dark themes](https://lh3.googleusercontent.com/Yor59BqmDg2qk4vgXtDVI9FzkAcqUFQZ4EjWrwLc_rYafcVTgirLkf-bt1t7JbvpRyPYQYvrP8ZM_ZgYUA17VWtk1h9UJcckiG_W0NPLDled=s0)

| #   | State        | Visual changes                        |
| --- | ------------ | ------------------------------------- |
| 1   | **Enabled**  | Default appearance                    |
| 2   | **Disabled** | Reduced opacity (container/icon 0.38) |
| 3   | **Hovered**  | State layer appears around container  |
| 4   | **Focused**  | Focus indicator ring; state layer     |
| 5   | **Pressed**  | State layer at pressed opacity        |

---

## Error State

Checkboxes support an **error state** for validation, unlike switches. In the error state:

- Unselected: outline color changes to `error`
- Selected/indeterminate: container color changes to `error`, icon color changes to `on-error`
- State layer uses `error` color across hover/focus/pressed

---

## Responsive Layout

In expanded window sizes, placing checkboxes within a contained region (e.g. side sheet) helps group related controls.

![Desktop with side sheet containing checkbox filters](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vp83b-8.png?alt=media&token=ccabbf13-9b61-4bec-938e-708c502111b0=s0)

---

## Accessibility

### Interaction

- Users should be able to select either the **text label** or the **checkbox** to toggle it

![Checkbox selected via its text label](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vkh7s-1.png?alt=media&token=7e1977e6-bb1a-4a66-b82b-3e0fddb18e2f=s0)

### Keyboard Navigation

| Key           | Action                                    |
| ------------- | ----------------------------------------- |
| Tab           | Focus lands on the checkbox               |
| Space / Enter | Toggles the checkbox on/off               |
| Arrows        | Moves focus between checkboxes in a group |

### Labeling

- The accessibility label for a checkbox is typically the same as its adjacent text label
- Screen readers announce: `"{label text}", checkbox, {checked|unchecked|indeterminate}`

![Accessibility label matches the text label](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vlqi0-3.png?alt=media&token=991b19e5-257d-4db0-9f2b-bc0ab092eeda=s0)

### Density

- Do not reduce density by default
- Minimum touch target: **48 × 48dp**
- If offering a dense layout, keep the control to revert density at minimum 48 × 48dp

---

## Adjacent Text Label Color

| Element    | Color role   |
| ---------- | ------------ |
| Text label | `on-surface` |

![Checkboxes with text labels showing consistent color for checked and unchecked states](https://lh3.googleusercontent.com/712ygEoSMR9tGvygN9LKJ8DZ7BhOWkzxv1y86AilaXmqdTa30fz5WP68koUEZThkz30akxDDI3CUbIxJh6PeEKIj2HK48__RTspIhYMIFFeX=s0)

Color remains the same regardless of checkbox selection state.

---

## M2 → M3 Differences

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmab66psf-2.png?alt=media&token=fadcebcc-29a3-4085-8fa0-d922c32e0670=s0" /><br/>M2</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmab66tlq-3.png?alt=media&token=fbb69b91-a08c-45f0-9f2e-4b6651b571db=s0" /><br/>M3</td>
</tr></table>

| Aspect | M2                   | M3                                                          |
| ------ | -------------------- | ----------------------------------------------------------- |
| Color  | Basic mappings       | Dynamic color compatible                                    |
| States | Selected, unselected | Added indeterminate + error states for all selection states |
