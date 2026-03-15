# Segmented Buttons — M3 Component Reference

> Segmented buttons help people select options, switch views, or sort elements.

Sources: [Overview](https://m3.material.io/components/segmented-buttons/overview) · [Specs](https://m3.material.io/components/segmented-buttons/specs) · [Guidelines](https://m3.material.io/components/segmented-buttons/guidelines) · [Accessibility](https://m3.material.io/components/segmented-buttons/accessibility)

> **Note:** Segmented buttons are no longer recommended in the M3 Expressive update. Use the [connected button group](https://m3.material.io/m3/pages/button-groups/overview/) instead, which offers the same functionality with an updated visual design.

---

## Variants

![Two variants of segmented buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7qvais-1.png?alt=media&token=52a09b72-85ab-4f14-93a4-0738235fef83=s0)

1. **Single-select** — Only one segment can be selected at a time. Behaves like radio buttons.
2. **Multi-select** — Any number of segments can be selected simultaneously. Behaves like checkboxes.

![Side by side view of single and multi-select segmented buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7mz9ev-3.png?alt=media&token=6ac60657-7e18-4b03-81cb-23e97d4596c0=s0)

1. Single-select: only one segment selected at a time
2. Multi-select: multiple segments may be selected concurrently

---

## Anatomy

![Diagram of segmented button indicating 5 parts of its anatomy](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7n59nt-4.png?alt=media&token=42169c2e-9e9e-45a1-b3a7-44b5354fcddd=s0)

1. **Segment** — an individual selectable section within the group
2. **Container** — the outer wrapper with fully rounded corners (uses `md.sys.shape.corner.full`)
3. **Icon** (optional) — can serve as the label by itself or appear alongside text
4. **Label text** (optional) — short, descriptive text for each segment
5. **Selected icon** — a checkmark that appears on selected segments

![Specs anatomy diagram](https://lh3.googleusercontent.com/C6AHlXtNzhGMs8gghgCKSba6mwIpYO0fiDnecohrFF3YJraSvBsQL-eXZnCvQJIU9AqRNgtrrvetX0I4UXwI1JyPxy4_rLYmSlkmsr73D_o=s0)

1. Container
2. Icon (optional for unselected state)
3. Label text

---

## Usage & When to Use

Segmented buttons let users choose from a small set of options, switch between views, or sort elements. They can contain icons, label text, or both.

- Use for simple choices between **2 to 5 items**
- For more items or complex choices, use **chips** instead
- **Single-select** — choose one option from a set (e.g., beverage size selector)
- **Multi-select** — filter or toggle multiple options (e.g., price range filter); selection is not required, and the user may select all, some, or none

![A segmented button for switching between restaurants and bar options](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7mnnk2-2.png?alt=media&token=0621a46b-ddcb-4ee9-b3de-b1b7be908b9d=s0)

### Single-select example

![Beverage size selector using single-select segmented button](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7puwq3-16.png?alt=media&token=523ecc2f-a2df-4442-8e24-cf65c64c83d7=s0)

A single-select segmented button for choosing beverage size — only one option can be active.

### Multi-select example

![Restaurant price range filter using multi-select segmented button](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7pvpf7-17.png?alt=media&token=3aa4f45c-50e9-4de0-a6c1-6325df4a89a1=s0)

A multi-select segmented button for filtering restaurants by price range.

### When NOT to use

| Scenario                        | Use instead       |
| ------------------------------- | ----------------- |
| More than 5 choices             | Chips             |
| Complex or hierarchical options | Chips or dropdown |

---

## Sub-elements

### Segments

Segmented buttons support 2 to 5 segments. Each segment is clearly divided and contains label text, an icon, or both.

![Segmented buttons with 2 to 5 segments](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7nap4m-5.png?alt=media&token=0561fbc5-65b2-4d96-a0de-8f4ec03c3431=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7ngd39-6_do.png?alt=media&token=17b77bb9-147e-4b1a-b0fb-8e4ea445e7a0=s0" /><br/><b>Do:</b> Use 2 to 5 segments</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7o4u2i-7_dont.png?alt=media&token=75e065ae-9d24-4a76-9261-7db3988ff869=s0" /><br/><b>Don't:</b> Use more than five segments. If you need more choices, use chips.</td>
</tr></table>

### Container

The container has fully rounded corners by default, consistent with other M3 buttons.

![Segmented button with fully rounded corners](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7o7un8-8.png?alt=media&token=0ccf0509-584f-437c-8a5f-dbfb97aae0ed=s0)

### Icons

Icons may be used as labels by themselves or alongside text. When used without label text, each icon must clearly communicate the option it represents.

![Segmented buttons with different icon and label text configurations](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7okkk9-9.png?alt=media&token=b185e6ab-2a5e-4d29-9989-52b66176df7b=s0)

### Label text

Labels should be short and concise. If a label is too long for its segment, consider using an icon-only approach.

![Music app with short segment labels](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7omu8a-10.png?alt=media&token=a0044742-6660-4d12-b7eb-c168a9e4ea3a=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7pqz1e-11_do.png?alt=media&token=5f954b64-e2d8-4fef-a0a5-e56c9fba0bd3=s0" /><br/><b>Do:</b> Keep labels short and consistent in length</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7prory-12_dont.png?alt=media&token=72743d41-4ba5-48b8-a3eb-0c386ab4ac66=s0" /><br/><b>Don't:</b> Allow segments to wrap onto a new line</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7psieh-13_do.png?alt=media&token=30b7bff6-d892-4765-93c8-a4712aaf1cd3=s0" /><br/><b>Do:</b> Use consistent label types across all segments</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7ptzzf-15_dont.png?alt=media&token=bbfbde3d-e104-4cd8-9aae-6a7e3aed50e9=s0" /><br/><b>Don't:</b> Mix icon-only labels with text labels — pick one type and use it throughout</td>
</tr></table>

![Icons can replace text labels but must clearly convey meaning](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7pt9gl-14_caution.png?alt=media&token=94a71ac1-5be5-4376-8f8e-8eac93aa3f1b=s0)

**Caution:** Icons can be used in place of labels, but they must clearly communicate their meaning.

---

## Placement

Segmented buttons should have adequate margins from the edge of the viewport or frame. On larger screens, set a maximum width for the button group so it doesn't stretch across the entire screen — excessive padding within segments reduces usability.

![Segmented buttons with proper margins](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7pwh9i-18.png?alt=media&token=cd37d565-662f-48b9-b036-57fdce8f001d=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7pxu9q-18-a_do.png?alt=media&token=4c28374e-4793-49c8-9988-4c8ebdc009d7=s0" /><br/><b>Do:</b> Set a maximum width for segments on larger screens</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7pyzy1-18-b_dont.png?alt=media&token=d6675cb8-414c-4214-a099-1643383404b9=s0" /><br/><b>Don't:</b> Let segmented buttons span the full width of larger screens</td>
</tr></table>

Segmented buttons can be placed on other components such as bottom sheets or full-screen dialogs.

![Segmented button in a bottom sheet](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7q0vrm-19.png?alt=media&token=f3152999-f72c-4cfd-9c6b-b095bd997085=s0)

---

## Behavior

When a segment uses both an icon and label text, the icon is replaced by a checkmark upon selection. This provides a clear visual indicator of the selected state beyond just the color change.

---

## Measurements

![Measurement diagram showing padding, container size, and target size](https://lh3.googleusercontent.com/xh0BqQ8B5Up0FqznJ5EqnpnpDEViXlKO8kUloyeCQ_NAquc5OCy0GjIwaU8wONO9x20Vah5cCnua4zuYTWF7UhAVD3HUTyUT_c0wjtz-aMg=s0)

1. Padding and container size
2. Target size

| Attribute                | Value                                        |
| ------------------------ | -------------------------------------------- |
| Container width          | Dynamic based on labels                      |
| Segment width            | Container width / total segments (e.g., 1/3) |
| Height                   | 40dp                                         |
| Outline width            | 1dp                                          |
| Label alignment          | Center                                       |
| Left/right padding       | Min 12dp                                     |
| Padding between elements | 8dp                                          |
| Target size              | 48dp                                         |

### Density

Density reduces height for denser UIs where space is limited. Each density step removes 4dp from the height.

![Four density levels for segmented buttons](https://lh3.googleusercontent.com/gaOReQpJgFqk-nmLLFHu7hpIFV9BQ6hqnVt8oSC0ZsgpMaeDzc9y-FIcDnkTciniAxMCpPfWD4RMFaEsz33-jSVweXp8mTxgiiL1tPiAATSUWw=s0)

---

## Color Tokens

![Color role diagram for segmented buttons](https://lh3.googleusercontent.com/YDundjWkMlYTm9ZC1RERNdV1PS0i86yel8Qe8OjWM7OEoMRC2frzBJzmqAywQu1BSW2eAP2ITtJk4A5aKZTS8GtaMqkR4uipO8VZMqGvMzAg=s0)

1. On surface
2. Outline
3. Secondary container
4. On secondary container

### Enabled / Container

| Element                  | Token                                                        | Value                              |
| ------------------------ | ------------------------------------------------------------ | ---------------------------------- |
| Outline color            | `md.comp.outlined-segmented-button.outline.color`            | `md.sys.color.outline`             |
| Outline width            | `md.comp.outlined-segmented-button.outline.width`            | 1dp                                |
| Container height         | `md.comp.outlined-segmented-button.container.height`         | 40dp                               |
| Selected container color | `md.comp.outlined-segmented-button.selected.container.color` | `md.sys.color.secondary-container` |
| Shape                    | `md.comp.outlined-segmented-button.shape`                    | `md.sys.shape.corner.full`         |

### Enabled / Label text

| Element                     | Token                                                           | Value                                      |
| --------------------------- | --------------------------------------------------------------- | ------------------------------------------ |
| Unselected label text color | `md.comp.outlined-segmented-button.unselected.label-text.color` | `md.sys.color.on-surface`                  |
| Selected label text color   | `md.comp.outlined-segmented-button.selected.label-text.color`   | `md.sys.color.on-secondary-container`      |
| Font                        | `md.comp.outlined-segmented-button.label-text.font`             | `md.sys.typescale.label-large.font`        |
| Line height                 | `md.comp.outlined-segmented-button.label-text.line-height`      | `md.sys.typescale.label-large.line-height` |
| Size                        | `md.comp.outlined-segmented-button.label-text.size`             | `md.sys.typescale.label-large.size`        |
| Tracking                    | `md.comp.outlined-segmented-button.label-text.tracking`         | `md.sys.typescale.label-large.tracking`    |
| Weight                      | `md.comp.outlined-segmented-button.label-text.weight`           | `md.sys.typescale.label-large.weight`      |

### Enabled / Icon

| Element               | Token                                                               | Value                                 |
| --------------------- | ------------------------------------------------------------------- | ------------------------------------- |
| Unselected icon color | `md.comp.outlined-segmented-button.unselected.with-icon.icon.color` | `md.sys.color.on-surface`             |
| Selected icon color   | `md.comp.outlined-segmented-button.selected.with-icon.icon.color`   | `md.sys.color.on-secondary-container` |
| Icon size             | `md.comp.outlined-segmented-button.with-icon.icon.size`             | 18dp                                  |

### Disabled / Container

| Element         | Token                                                        | Value                     |
| --------------- | ------------------------------------------------------------ | ------------------------- |
| Outline color   | `md.comp.outlined-segmented-button.disabled.outline.color`   | `md.sys.color.on-surface` |
| Outline opacity | `md.comp.outlined-segmented-button.disabled.outline.opacity` | 0.12                      |

### Disabled / Label text

| Element            | Token                                                           | Value                     |
| ------------------ | --------------------------------------------------------------- | ------------------------- |
| Label text color   | `md.comp.outlined-segmented-button.disabled.label-text.color`   | `md.sys.color.on-surface` |
| Label text opacity | `md.comp.outlined-segmented-button.disabled.label-text.opacity` | 0.38                      |

### Disabled / Icon

| Element      | Token                                                     | Value                     |
| ------------ | --------------------------------------------------------- | ------------------------- |
| Icon color   | `md.comp.outlined-segmented-button.disabled.icon.color`   | `md.sys.color.on-surface` |
| Icon opacity | `md.comp.outlined-segmented-button.disabled.icon.opacity` | 0.38                      |

### Hovered / Label text

| Element                     | Token                                                                 | Value                                 |
| --------------------------- | --------------------------------------------------------------------- | ------------------------------------- |
| Unselected label text color | `md.comp.outlined-segmented-button.unselected.hover.label-text.color` | `md.sys.color.on-surface`             |
| Selected label text color   | `md.comp.outlined-segmented-button.selected.hover.label-text.color`   | `md.sys.color.on-secondary-container` |

### Hovered / State layer

| Element                      | Token                                                                  | Value                                    |
| ---------------------------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| Unselected state layer color | `md.comp.outlined-segmented-button.unselected.hover.state-layer.color` | `md.sys.color.on-surface`                |
| Selected state layer color   | `md.comp.outlined-segmented-button.selected.hover.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| State layer opacity          | `md.comp.outlined-segmented-button.hover.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |

### Hovered / Icon

| Element               | Token                                                           | Value                                 |
| --------------------- | --------------------------------------------------------------- | ------------------------------------- |
| Unselected icon color | `md.comp.outlined-segmented-button.unselected.hover.icon.color` | `md.sys.color.on-surface`             |
| Selected icon color   | `md.comp.outlined-segmented-button.selected.hover.icon.color`   | `md.sys.color.on-secondary-container` |

### Focused / Focus indicator

| Element                   | Token                                                              | Value                                       |
| ------------------------- | ------------------------------------------------------------------ | ------------------------------------------- |
| Focus indicator color     | `md.comp.outlined-segmented-button.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Focus indicator thickness | `md.comp.outlined-segmented-button.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset    | `md.comp.outlined-segmented-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

### Focused / Label text

| Element                     | Token                                                                 | Value                                 |
| --------------------------- | --------------------------------------------------------------------- | ------------------------------------- |
| Unselected label text color | `md.comp.outlined-segmented-button.unselected.focus.label-text.color` | `md.sys.color.on-surface`             |
| Selected label text color   | `md.comp.outlined-segmented-button.selected.focus.label-text.color`   | `md.sys.color.on-secondary-container` |

### Focused / State layer

| Element                      | Token                                                                  | Value                                    |
| ---------------------------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| Unselected state layer color | `md.comp.outlined-segmented-button.unselected.focus.state-layer.color` | `md.sys.color.on-surface`                |
| Selected state layer color   | `md.comp.outlined-segmented-button.selected.focus.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| State layer opacity          | `md.comp.outlined-segmented-button.focus.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |

### Focused / Icon

| Element               | Token                                                           | Value                                 |
| --------------------- | --------------------------------------------------------------- | ------------------------------------- |
| Unselected icon color | `md.comp.outlined-segmented-button.unselected.focus.icon.color` | `md.sys.color.on-surface`             |
| Selected icon color   | `md.comp.outlined-segmented-button.selected.focus.icon.color`   | `md.sys.color.on-secondary-container` |

### Pressed / Label text

| Element                     | Token                                                                   | Value                                 |
| --------------------------- | ----------------------------------------------------------------------- | ------------------------------------- |
| Unselected label text color | `md.comp.outlined-segmented-button.unselected.pressed.label-text.color` | `md.sys.color.on-surface`             |
| Selected label text color   | `md.comp.outlined-segmented-button.selected.pressed.label-text.color`   | `md.sys.color.on-secondary-container` |

### Pressed / State layer

| Element                      | Token                                                                    | Value                                    |
| ---------------------------- | ------------------------------------------------------------------------ | ---------------------------------------- |
| Unselected state layer color | `md.comp.outlined-segmented-button.unselected.pressed.state-layer.color` | `md.sys.color.on-surface`                |
| Selected state layer color   | `md.comp.outlined-segmented-button.selected.pressed.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| State layer opacity          | `md.comp.outlined-segmented-button.pressed.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |

### Pressed / Icon

| Element               | Token                                                             | Value                                 |
| --------------------- | ----------------------------------------------------------------- | ------------------------------------- |
| Unselected icon color | `md.comp.outlined-segmented-button.unselected.pressed.icon.color` | `md.sys.color.on-surface`             |
| Selected icon color   | `md.comp.outlined-segmented-button.selected.pressed.icon.color`   | `md.sys.color.on-secondary-container` |

---

## Interaction States

### Unselected

![Five unselected states for segmented buttons](https://lh3.googleusercontent.com/-uNJiGxEkqwavKi0rqCcQ6_NTV7HdAQ9_eZ9b40fw_6Ij00V60BU3iLu88EgzvFUO0prwPdmKRKoc6KiuVmTZLUTsStYc8PArd4Y2C6G6ts=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

### Selected

![Four selected states for segmented buttons](https://lh3.googleusercontent.com/PMYMRAaXu4kiEdyI_9iuWFzh9CDRnmy7VqZ7H34w8Y2jeJy0KUUZekkTUR35ISHPJxnChOXSeLwkG2VHsL8vT3CayNNfqNbNr1ptUwhBbG4=s0)

1. Selected
2. Hovered on selected
3. Focused on selected
4. Pressed on selected

---

## Accessibility

### Keyboard Navigation

| Key            | Action (single-select)                 | Action (multi-select)                                       |
| -------------- | -------------------------------------- | ----------------------------------------------------------- |
| Tab            | Focus lands on next enabled segment    | Focus lands on next enabled segment                         |
| Space or Enter | Select or unselect the focused segment | Select/unselect the focused segment; can select all or none |

![Keyboard navigation for segmented buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7q4935-1.png?alt=media&token=99802213-76ba-4f6a-8e7b-ea8daf0b2bc3=s0)

### Labeling

- **Text labels:** The accessibility label comes directly from the visible label text (e.g., "Relevance", "Distance")
- **Icon-only labels:** The accessibility label should describe the action the icon represents (e.g., "Inexpensive" for a single currency symbol)
- **Single-select:** Use `Radiogroup` role — only one option can be selected at a time
- **Multi-select:** Use `Checkbox` role — multiple options can be selected

![Accessibility label matching visible text](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7qcq3h-5.png?alt=media&token=24534d45-c04c-46d9-a747-04aeeefd11ff=s0)

![Checkbox role for multi-select segmented buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7qpwe0-6.png?alt=media&token=a73ad3f4-0a14-4075-b015-dbe86ef3ec0f=s0)

### Color Contrast

The outline must have at least a **3:1 contrast ratio** with the background surface to clearly distinguish each segment. Selection is indicated by both a checkmark icon and a color change — color must never be the only indicator of selection state.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7q6k39-2_do.png?alt=media&token=15790494-3f50-40ef-990b-7dde7e714d61=s0" /><br/><b>Do:</b> Outline with surface contrast of at least 3:1</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7q87p2-3_dont.png?alt=media&token=f935fbc2-5a75-4d24-91a3-ed026030dd63=s0" /><br/><b>Don't:</b> Outline contrast less than 3:1</td>
</tr></table>

### Initial Focus

Focus starts on the first segment (leftmost in LTR languages, rightmost in RTL). For both single-select and multi-select, the first segment receives focus regardless of the current selection state.

![Initial focus direction for LTR and RTL languages](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7q9t4x-4.png?alt=media&token=df0560b5-2880-402a-a0ad-ae84c4e2e2c1=s0)

### Density

Ensure touch targets remain at least 48dp even when using density reduction. Each density step removes 4dp from the container height but the touch target area must still be met.

---

## M2 → M3 Differences

| Aspect     | M2                    | M3                                       |
| ---------- | --------------------- | ---------------------------------------- |
| Name       | Toggle buttons        | Segmented buttons                        |
| Variants   | None (single type)    | Single-select and multi-select           |
| Shape      | Small corner radius   | Fully rounded corners                    |
| Height     | Shorter               | 40dp                                     |
| Typography | ALL CAPS labels       | Sentence case labels                     |
| Color      | Static color mappings | Dynamic color with `secondary-container` |
| Selection  | No check icon         | Optional check icon for selected state   |

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fl20oj7ju-example.png?alt=media&token=9a695831-7fd8-4af8-ad34-b16a30ee5e32=s0" /><br/>M2: Small corner radius, ALL CAPS labels</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7ruslm-4.png?alt=media&token=f5efc802-2c9c-4a7d-98f6-1e92ef9b4c76=s0" /><br/>M3: Fully rounded corners, sentence case, new color mappings</td>
</tr></table>

![M3 container height of 40dp](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwhr0fyz-2.png?alt=media&token=246e78a8-1e67-45c6-a7b7-552681fce036=s0)

## M3 Expressive Update

As of May 2025, segmented buttons are **no longer recommended**. The [connected button group](https://m3.material.io/m3/pages/button-groups/overview/) replaces them with the same functionality and an updated visual design.

## Availability & Resources

| Type           | Resource                                                                                                                              | Status      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Design         | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460)                                                        | Available   |
| Implementation | [Flutter](https://api.flutter.dev/flutter/material/SegmentedButton-class.html)                                                        | Available   |
|                | [Jetpack Compose](https://developer.android.com/develop/ui/compose/components/segmented-button)                                       | Available   |
|                | [MDC-Android](https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#toggle-button) | Available   |
|                | Web                                                                                                                                   | Unavailable |
