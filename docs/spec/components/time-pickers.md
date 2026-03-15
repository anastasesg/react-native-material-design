# Time Pickers — M3 Component Reference

> Time pickers are modal components that let people select hours, minutes, or periods of time via a dial or keyboard input.

Sources: [Overview](https://m3.material.io/components/time-pickers/overview) · [Specs](https://m3.material.io/components/time-pickers/specs) · [Guidelines](https://m3.material.io/components/time-pickers/guidelines) · [Accessibility](https://m3.material.io/components/time-pickers/accessibility)

---

## Variants

![Time picker dial and input](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcyz4dh2-01.png?alt=media&token=726495da-d131-42f3-a766-cd787c29a235=s0)

1. Time picker dial
2. Time picker input

| Variant | Description                                                                              |
| ------- | ---------------------------------------------------------------------------------------- |
| Dial    | Round watch-face interface; hours/minutes selected by tapping or dragging the dial track |
| Input   | Keyboard-based number entry; accessible from the dial via the keyboard icon              |

Both variants are displayed in dialogs above a scrim and can switch between each other via the keyboard/clock icon button.

---

## Anatomy

### Time picker dial

![17 elements of a dial time picker](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2u47yh-05.png?alt=media&token=a671138b-6e5b-4d58-8dd2-84aeea14195d=s0)

![Diagram indicating 14 elements of time picker dial (specs)](https://lh3.googleusercontent.com/fEL90tTIe0i1cDIA4nKzUlbA5mbzo5VJxmQrzgNnf2RF1SiZXQ3szYwn4PancFx48zU5hY-Kx_GL_I1INZgv-o0h_V26mxPc_Zk3SVECTT9p0w=s0)

1. **Label (headline)** — "Select time" or similar prompt
2. **Time selector separator** — colon between hour and minute
3. **Input field** — displays selected hour or minute value
4. **Input text** — the numeric value shown in the input field
5. **Period selector (selected)** — highlighted AM or PM segment
6. **Period selector text (selected)** — AM/PM label text when selected
7. **Container** — holds all time picker elements; appears above a scrim
8. **Period selector outline** — border around the AM/PM toggle
9. **Period selector text** — AM/PM label text when unselected
10. **Dial selector track** — line from center to handle
11. **Dial label (selected)** — highlighted number on the dial face
12. **Text buttons** — Cancel and OK actions
13. **Icon button** — toggles between dial and input views
14. **Dial label (unselected)** — non-highlighted numbers on the dial
15. **Clock dial** — the circular face with hour/minute values
16. **Input text (selected)** — highlighted numeric value in the input field
17. **Input field (selected)** — highlighted input container

### Time picker input

![13 elements of an input time picker](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2u4xoe-06.png?alt=media&token=f64fe914-9b52-445d-b071-2f5833ff0f83=s0)

![Diagram indicating 10 elements of time picker input (specs)](https://lh3.googleusercontent.com/oh1OcUsaz4lc3Bj48OezLBgBFvrMsglz1zYFK0mO9Cf8GuLmflhif0VpKC57fGOLp8xxpj2C9Vp9Dm4e9qFvNVOLuoXtlfobCQmFE0ov-7gIiQ=s0)

1. **Label (headline)**
2. **Time input field separator** — colon between hour and minute
3. **Input field** — numeric entry area
4. **Input text** — value in the field
5. **Period selector (selected)**
6. **Period selector text (selected)**
7. **Container**
8. **Period selector outline**
9. **Period selector text (unselected)**
10. **Text buttons** — Cancel and OK
11. **Icon button** — toggles to dial view
12. **Input text (selected)**
13. **Input field (selected)**

---

## Usage & When to Use

![Dial selector time picker for 12-hour clock](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2pwu0i-01.png?alt=media&token=a9c2389d-af1b-43a9-9c96-59e999c31a6c=s0)

- Allow people to enter a specific time value (hours, minutes, AM/PM)
- Common use cases: setting an alarm, scheduling a meeting
- Not ideal for granular time selection (e.g. milliseconds for a stopwatch)
- Make sure time can easily be selected by hand on a mobile device

![Do: hour selection in a mobile calendar picker](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2q22nz-02.png?alt=media&token=029a62a3-faff-4ea6-aaff-d5c7e3d0145c=s0)

---

## Sub-elements

### Container

Like dialogs, the time picker container appears above other screen elements with a scrim overlay behind it.

![Time picker container with all elements](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2u8t61-07.png?alt=media&token=824ffe77-2a95-46e0-a1ab-3ca315414499=s0)

### Input selector

A specialized text field with:

- Added highlight on the selected field
- Larger shape, size, and font than typical text fields
- A label below the field
- Separate inputs for hours and minutes
- AM/PM selector for 12-hour clocks (hidden for 24-hour clocks)

![Input selector for 12-hour clock](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2ugmkj-08.png?alt=media&token=52517d18-15f3-48f7-b64b-d0297ae21e2e=s0)

### Dial selector

Always mimics a round watch face. Hours and minutes can be selected by tapping a number or dragging the dial selector track.

- **12-hour dial**: all numbers in the outer ring
- **24-hour dial**: even numbers in an inner ring, odd numbers in an outer ring

![Dial selector for 12-hour clock](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2uji74-09.png?alt=media&token=829a268c-cf9b-43e6-83be-5c388f6d1908=s0)

### Text & icon buttons

- **Icon button**: switches between input (keyboard icon) and dial (clock icon) views
- **Text buttons**: Cancel dismisses, OK confirms the selection

![Time picker buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2uqf01-10.png?alt=media&token=2af68f32-68f1-4c1f-86e5-9d3fada4e35f=s0)

### Time input picker

Allows specifying a time using keyboard numbers. Accessible from any dial time picker by tapping the keyboard icon.

![Input time picker with keyboard active](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2q5unb-03.png?alt=media&token=9cbe187b-c1c2-4581-a086-4e51f593861d=s0)

### 24-hour time selection

The dial view can show 24 hours — set outside the time picker component, typically through system settings.

![24-hour dial view](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2q7fdq-04.png?alt=media&token=4d6c29d8-df4a-4cb8-98a9-994284bb9984=s0)

---

## Configurations

### Vertical and horizontal orientation

![Vertical and horizontal time picker dials](https://lh3.googleusercontent.com/WmiYd7XEBckVcinYGeo-3xr2eeeOOIIWF9dZ0VTU4ajlR6R63EP3LMH9AakmYwtl5XlTulsT_uJXym_dOmVCWgTCX49b0aTPPU_3U66z8Ro=s0)

1. Vertical layout (default on mobile)
2. Horizontal layout

### 24-hour time picker dial

![24-hour time picker dials in vertical and horizontal](https://lh3.googleusercontent.com/SWtG7bnOOsaGYyC_KZbnqnO2SdcEIquR2TiLO6WAIdja0IDe8P8OQ9OehHUxTYAhf1vXNKGrjkMeJdgKkFfG-PqUTsDcH8sZ625V3ngYp1CFMA=s0)

1. 24h dial in vertical layout (default on mobile)
2. 24h dial in horizontal layout

### 12-hour and 24-hour time picker inputs

![12-hour and 24-hour inputs compared](https://lh3.googleusercontent.com/YLwHepIx8fINPXo6ZMe0kk0nFoE45b4o9Rvtdre11V6KVm_pbkSMOb4Ltiu4Sgk-NyG0M5t1Cs5ghFF62FC4iAImZ1o-zi-1jM1rilN5756f=s0)

1. 12h input
2. 24h input

### Landscape orientation

The clock dial interface adapts to a device's orientation. In landscape, stacked input and selection options are positioned side-by-side.

![Time picker in landscape orientation on mobile](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2wil5z-11.png?alt=media&token=a0b081bd-3ad5-48bf-b57c-4ef8e5f2b6d2=s0)

---

## Placement

Time pickers should never be obscured by other elements. They should change orientation or variant to ensure they aren't cropped by the screen edge. Time pickers are modal windows above a scrim, putting them at the forefront of the user's view.

![Input time picker in landscape, fully visible](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7tgqq3-12.png?alt=media&token=c0a7ba7e-4362-49d9-bf35-3bc8bcde7c5f=s0)

---

## Behavior

Two primary selection methods:

1. Type a value directly in the hour and minute fields
2. Select a field from the input, then adjust the clock dial (which simultaneously updates the field)

### Appearing & disappearing

Time pickers use an enter and exit transition pattern (like other dialogs). To exit: confirm with **OK**, dismiss with **Cancel**, or interact outside the dialog. The time picker retains focus until one of these actions is taken.

### Toggle between dial & input

Tapping the keyboard icon switches from dial to input; tapping the clock icon switches back.

### Scrolling

Time pickers should avoid scrolling. Swap orientation or variant based on device orientation or viewport size. Time pickers don't scroll with background elements.

![Time pickers shouldn't scroll](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2v8xeq-18.png?alt=media&token=b4c07a4b-ff96-497f-88bf-e9eca05fc5f8=s0)

---

## Measurements

### Time picker dial — vertical

![Vertical time picker dial measurements](https://lh3.googleusercontent.com/FgpC_ZjE7NOxcqQBBUWoNg2IzyW6Wa2fUmWzGFf8nvuKlW2ZDSNovmYN5K645AAEsF9aGQKd904yRzx_fg9J6i0FHSroG9VFb6KmVvRd6ys=s0)

| Element                    | Attribute                  | Value   |
| -------------------------- | -------------------------- | ------- |
| Container                  | Width                      | Dynamic |
|                            | Height                     | Dynamic |
|                            | Headline alignment         | Left    |
|                            | Top/bottom padding         | 24dp    |
|                            | Left/right padding         | 24dp    |
| Time selector container    | Width                      | 96dp    |
|                            | Width (24h vertical)       | 114dp   |
|                            | Height                     | 80dp    |
| Period selector container  | Width (vertical layout)    | 52dp    |
|                            | Height (vertical layout)   | 80dp    |
|                            | Width (horizontal layout)  | 216dp   |
|                            | Height (horizontal layout) | 38dp    |
| Clock dial container       | Size                       | 256dp   |
| Clock dial selector handle | Size                       | 48dp    |
| Clock dial selector center | Size                       | 8dp     |
| Clock dial selector track  | Width                      | 2dp     |

### Time picker dial — horizontal

![Horizontal time picker dial measurements](https://lh3.googleusercontent.com/MwlBqM5KsVnml1NDvUxDoQA_7yMRkFhQYxC5VMUBe1FPGKPR0t1b7y9pIT5Rn-gjTZX3O6ju0vY7IC-ze75NYNACZagvjaTWeN8PBu9jXbxO=s0)

| Element                    | Attribute                  | Value   |
| -------------------------- | -------------------------- | ------- |
| Container                  | Width                      | Dynamic |
|                            | Height                     | Dynamic |
|                            | Headline alignment         | Left    |
|                            | Top/bottom padding         | 24dp    |
|                            | Left/right padding         | 24dp    |
| Time selector container    | Width                      | 96dp    |
|                            | Width (24h vertical)       | 114dp   |
|                            | Height                     | 80dp    |
| Period selector container  | Width (vertical layout)    | 52dp    |
|                            | Height (vertical layout)   | 80dp    |
|                            | Width (horizontal layout)  | 216dp   |
|                            | Height (horizontal layout) | 38dp    |
| Clock dial container       | Size                       | 256dp   |
| Clock dial selector handle | Size                       | 48dp    |
| Clock dial selector center | Size                       | 8dp     |
| Clock dial selector track  | Width                      | 2dp     |

### Time picker input

![Time picker input measurements](https://lh3.googleusercontent.com/pTsIaFUPD07juD1tkEAvb1p0JJU1I0QmuQdvKL7rBgtjB7hWWTAGzoRFAag-kQi9AYqTpJixai14sAwU1UsBFsAJY4izUkwetewV66_oVBcw=s0)

| Element                    | Attribute          | Value   |
| -------------------------- | ------------------ | ------- |
| Container                  | Width              | Dynamic |
|                            | Height             | Dynamic |
|                            | Headline alignment | Left    |
|                            | Top/bottom padding | 24dp    |
|                            | Left/right padding | 24dp    |
| Time input field container | Width              | 96dp    |
|                            | Height             | 72dp    |
| Period selector container  | Width              | 52dp    |
|                            | Height             | 72dp    |

---

## Color Tokens

### Time picker dial color

![17 color elements of a time picker dial](https://lh3.googleusercontent.com/2yPFvDOYGLJVQZMR6u6XxQe0yKZcdjOxZisoE_nNHnj72E4dyq2I8vSihXm2jbqhEwmtUaHOdrrcangbqbKufbxy97LWIppPA4hGW5E7KJaP=s0)

1. On surface variant
2. On surface
3. Surface container highest
4. On surface
5. Tertiary container
6. On tertiary container
7. Surface container high
8. Outline
9. On surface
10. Primary
11. On primary
12. Primary
13. On surface variant
14. On surface
15. Surface container highest
16. On primary container
17. Primary container

#### Time picker — Dial

**Enabled / Container**

| Name                                                    | Token                                                             | Value                                  |
| ------------------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------- |
| Time picker clock dial color                            | `md.comp.time-picker.clock-dial.color`                            | md.sys.color.surface-container-highest |
| Time picker clock dial shape                            | `md.comp.time-picker.clock-dial.shape`                            | md.sys.shape.corner.full               |
| Time picker container color                             | `md.comp.time-picker.container.color`                             | md.sys.color.surface-container-high    |
| Time picker container elevation                         | `md.comp.time-picker.container.elevation`                         | md.sys.elevation.level3                |
| Time picker surface tint layer color                    | `md.comp.time-picker.surface-tint-layer.color`                    | md.sys.color.surface-tint              |
| Time picker container shape                             | `md.comp.time-picker.container.shape`                             | md.sys.shape.corner.extra-large        |
| Time picker time selector selected container color      | `md.comp.time-picker.time-selector.selected.container.color`      | md.sys.color.primary-container         |
| Time picker time selector unselected container color    | `md.comp.time-picker.time-selector.unselected.container.color`    | md.sys.color.surface-container-highest |
| Time picker time selector container shape               | `md.comp.time-picker.time-selector.container.shape`               | md.sys.shape.corner.small              |
| Time picker period selector selected container color    | `md.comp.time-picker.period-selector.selected.container.color`    | md.sys.color.tertiary-container        |
| Time picker period selector container shape             | `md.comp.time-picker.period-selector.container.shape`             | md.sys.shape.corner.small              |
| Time picker period selector outline color               | `md.comp.time-picker.period-selector.outline.color`               | md.sys.color.outline                   |
| Time picker period selector outline width               | `md.comp.time-picker.period-selector.outline.width`               | 1dp                                    |
| Time picker clock dial color ignore                     | `md.comp.time-picker.clock-dial.color.ignore`                     | md.sys.color.on-surface-variant        |
| Time picker clock dial shape ignore                     | `md.comp.time-picker.clock-dial.shape.ignore`                     | md.sys.shape.corner.full               |
| Time picker clock dial selector handle container color  | `md.comp.time-picker.clock-dial.selector.handle.container.color`  | md.sys.color.primary                   |
| Time picker clock dial selector handle container shape  | `md.comp.time-picker.clock-dial.selector.handle.container.shape`  | md.sys.shape.corner.full               |
| Time picker clock dial selector center container color  | `md.comp.time-picker.clock-dial.selector.center.container.color`  | md.sys.color.primary                   |
| Time picker clock dial selector center container shape  | `md.comp.time-picker.clock-dial.selector.center.container.shape`  | md.sys.shape.corner.full               |
| Time picker clock dial selector track container color   | `md.comp.time-picker.clock-dial.selector.track.container.color`   | md.sys.color.primary                   |
| Time picker time selector container width               | `md.comp.time-picker.time-selector.container.width`               | 96dp                                   |
| Time picker time selector 24h vertical container width  | `md.comp.time-picker.time-selector.24h-vertical.container.width`  | 114dp                                  |
| Time picker time selector container height              | `md.comp.time-picker.time-selector.container.height`              | 80dp                                   |
| Time picker period selector vertical container width    | `md.comp.time-picker.period-selector.vertical.container.width`    | 52dp                                   |
| Time picker period selector vertical container height   | `md.comp.time-picker.period-selector.vertical.container.height`   | 80dp                                   |
| Time picker period selector horizontal container width  | `md.comp.time-picker.period-selector.horizontal.container.width`  | 216dp                                  |
| Time picker period selector horizontal container height | `md.comp.time-picker.period-selector.horizontal.container.height` | 38dp                                   |
| Time picker clock dial container size                   | `md.comp.time-picker.clock-dial.container.size`                   | 256dp                                  |
| Time picker clock dial selector handle container size   | `md.comp.time-picker.clock-dial.selector.handle.container.size`   | 48dp                                   |
| Time picker clock dial selector center container size   | `md.comp.time-picker.clock-dial.selector.center.container.size`   | 8dp                                    |
| Time picker clock dial selector track container width   | `md.comp.time-picker.clock-dial.selector.track.container.width`   | 2dp                                    |

**Enabled / Label text**

| Name                                                    | Token                                                             | Value                                      |
| ------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------ |
| Time picker time selector selected label text color     | `md.comp.time-picker.time-selector.selected.label-text.color`     | md.sys.color.on-primary-container          |
| Time picker time selector unselected label text color   | `md.comp.time-picker.time-selector.unselected.label-text.color`   | md.sys.color.on-surface                    |
| Time picker time selector label text font               | `md.comp.time-picker.time-selector.label-text.font`               | md.sys.typescale.display-large.font        |
| Time picker time selector label text line height        | `md.comp.time-picker.time-selector.label-text.line-height`        | md.sys.typescale.display-large.line-height |
| Time picker time selector label text size               | `md.comp.time-picker.time-selector.label-text.size`               | md.sys.typescale.display-large.size        |
| Time picker time selector label text weight             | `md.comp.time-picker.time-selector.label-text.weight`             | md.sys.typescale.display-large.weight      |
| Time picker time selector label text tracking           | `md.comp.time-picker.time-selector.label-text.tracking`           | md.sys.typescale.display-large.tracking    |
| Time picker time selector label text type               | `md.comp.time-picker.time-selector.label-text.type`               | Aa                                         |
| Time picker period selector selected label text color   | `md.comp.time-picker.period-selector.selected.label-text.color`   | md.sys.color.on-tertiary-container         |
| Time picker period selector unselected label text color | `md.comp.time-picker.period-selector.unselected.label-text.color` | md.sys.color.on-surface-variant            |
| Time picker period selector label text font             | `md.comp.time-picker.period-selector.label-text.font`             | md.sys.typescale.title-medium.font         |
| Time picker period selector label text line height      | `md.comp.time-picker.period-selector.label-text.line-height`      | md.sys.typescale.title-medium.line-height  |
| Time picker period selector label text size             | `md.comp.time-picker.period-selector.label-text.size`             | md.sys.typescale.title-medium.size         |
| Time picker period selector label text weight           | `md.comp.time-picker.period-selector.label-text.weight`           | md.sys.typescale.title-medium.weight       |
| Time picker period selector label text tracking         | `md.comp.time-picker.period-selector.label-text.tracking`         | md.sys.typescale.title-medium.tracking     |
| Time picker period selector label text type             | `md.comp.time-picker.period-selector.label-text.type`             | Aa                                         |
| Time picker clock dial selected label text color        | `md.comp.time-picker.clock-dial.selected.label-text.color`        | md.sys.color.on-primary                    |
| Time picker clock dial unselected label text color      | `md.comp.time-picker.clock-dial.unselected.label-text.color`      | md.sys.color.on-surface                    |
| Time picker clock dial label text font                  | `md.comp.time-picker.clock-dial.label-text.font`                  | md.sys.typescale.body-large.font           |
| Time picker clock dial label text line height           | `md.comp.time-picker.clock-dial.label-text.line-height`           | md.sys.typescale.body-large.line-height    |
| Time picker clock dial label text size                  | `md.comp.time-picker.clock-dial.label-text.size`                  | md.sys.typescale.body-large.size           |
| Time picker clock dial label text weight                | `md.comp.time-picker.clock-dial.label-text.weight`                | md.sys.typescale.body-large.weight         |
| Time picker clock dial label text tracking              | `md.comp.time-picker.clock-dial.label-text.tracking`              | md.sys.typescale.body-large.tracking       |
| Time picker clock dial label text type                  | `md.comp.time-picker.clock-dial.label-text.type`                  | Aa                                         |

**Enabled / Headline**

| Name                             | Token                                      | Value                                     |
| -------------------------------- | ------------------------------------------ | ----------------------------------------- |
| Time picker headline color       | `md.comp.time-picker.headline.color`       | md.sys.color.on-surface-variant           |
| Time picker headline font        | `md.comp.time-picker.headline.font`        | md.sys.typescale.label-medium.font        |
| Time picker headline line height | `md.comp.time-picker.headline.line-height` | md.sys.typescale.label-medium.line-height |
| Time picker headline size        | `md.comp.time-picker.headline.size`        | md.sys.typescale.label-medium.size        |
| Time picker headline weight      | `md.comp.time-picker.headline.weight`      | md.sys.typescale.label-medium.weight      |
| Time picker headline tracking    | `md.comp.time-picker.headline.tracking`    | md.sys.typescale.label-medium.tracking    |
| Time picker headline type        | `md.comp.time-picker.headline.type`        | Aa                                        |

**Enabled / Separator**

| Name                                            | Token                                                     | Value                                      |
| ----------------------------------------------- | --------------------------------------------------------- | ------------------------------------------ |
| Time picker time selector separator color       | `md.comp.time-picker.time-selector.separator.color`       | md.sys.color.on-surface                    |
| Time picker time selector separator font        | `md.comp.time-picker.time-selector.separator.font`        | md.sys.typescale.display-large.font        |
| Time picker time selector separator line height | `md.comp.time-picker.time-selector.separator.line-height` | md.sys.typescale.display-large.line-height |
| Time picker time selector separator size        | `md.comp.time-picker.time-selector.separator.size`        | md.sys.typescale.display-large.size        |
| Time picker time selector separator weight      | `md.comp.time-picker.time-selector.separator.weight`      | md.sys.typescale.display-large.weight      |
| Time picker time selector separator tracking    | `md.comp.time-picker.time-selector.separator.tracking`    | md.sys.typescale.display-large.tracking    |
| Time picker time selector separator type        | `md.comp.time-picker.time-selector.separator.type`        | Aa                                         |

**Hovered / Label text**

| Name                                                          | Token                                                                   | Value                              |
| ------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------- |
| Time picker time selector selected hover label text color     | `md.comp.time-picker.time-selector.selected.hover.label-text.color`     | md.sys.color.on-primary-container  |
| Time picker time selector unselected hover label text color   | `md.comp.time-picker.time-selector.unselected.hover.label-text.color`   | md.sys.color.on-surface            |
| Time picker period selector selected hover label text color   | `md.comp.time-picker.period-selector.selected.hover.label-text.color`   | md.sys.color.on-tertiary-container |
| Time picker period selector unselected hover label text color | `md.comp.time-picker.period-selector.unselected.hover.label-text.color` | md.sys.color.on-surface-variant    |

**Hovered / State layer**

| Name                                                           | Token                                                                    | Value                                  |
| -------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------- |
| Time picker time selector selected hover state layer color     | `md.comp.time-picker.time-selector.selected.hover.state-layer.color`     | md.sys.color.on-primary-container      |
| Time picker time selector unselected hover state layer color   | `md.comp.time-picker.time-selector.unselected.hover.state-layer.color`   | md.sys.color.on-surface                |
| Time picker time selector hover state layer opacity            | `md.comp.time-picker.time-selector.hover.state-layer.opacity`            | md.sys.state.hover.state-layer-opacity |
| Time picker period selector selected hover state layer color   | `md.comp.time-picker.period-selector.selected.hover.state-layer.color`   | md.sys.color.on-tertiary-container     |
| Time picker period selector unselected hover state layer color | `md.comp.time-picker.period-selector.unselected.hover.state-layer.color` | md.sys.color.on-surface-variant        |
| Time picker period selector hover state layer opacity          | `md.comp.time-picker.period-selector.hover.state-layer.opacity`          | md.sys.state.hover.state-layer-opacity |

**Focused / Label text**

| Name                                                          | Token                                                                   | Value                              |
| ------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------- |
| Time picker time selector selected focus label text color     | `md.comp.time-picker.time-selector.selected.focus.label-text.color`     | md.sys.color.on-primary-container  |
| Time picker time selector unselected focus label text color   | `md.comp.time-picker.time-selector.unselected.focus.label-text.color`   | md.sys.color.on-surface            |
| Time picker period selector selected focus label text color   | `md.comp.time-picker.period-selector.selected.focus.label-text.color`   | md.sys.color.on-tertiary-container |
| Time picker period selector unselected focus label text color | `md.comp.time-picker.period-selector.unselected.focus.label-text.color` | md.sys.color.on-surface-variant    |

**Focused / State layer**

| Name                                                           | Token                                                                    | Value                                  |
| -------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------- |
| Time picker time selector selected focus state layer color     | `md.comp.time-picker.time-selector.selected.focus.state-layer.color`     | md.sys.color.on-primary-container      |
| Time picker time selector unselected focus state layer color   | `md.comp.time-picker.time-selector.unselected.focus.state-layer.color`   | md.sys.color.on-surface                |
| Time picker time selector focus state layer opacity            | `md.comp.time-picker.time-selector.focus.state-layer.opacity`            | md.sys.state.focus.state-layer-opacity |
| Time picker period selector selected focus state layer color   | `md.comp.time-picker.period-selector.selected.focus.state-layer.color`   | md.sys.color.on-tertiary-container     |
| Time picker period selector unselected focus state layer color | `md.comp.time-picker.period-selector.unselected.focus.state-layer.color` | md.sys.color.on-surface-variant        |
| Time picker period selector focus state layer opacity          | `md.comp.time-picker.period-selector.focus.state-layer.opacity`          | md.sys.state.focus.state-layer-opacity |

**Pressed / Label text**

| Name                                                            | Token                                                                     | Value                              |
| --------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------- |
| Time picker time selector selected pressed label text color     | `md.comp.time-picker.time-selector.selected.pressed.label-text.color`     | md.sys.color.on-primary-container  |
| Time picker time selector unselected pressed label text color   | `md.comp.time-picker.time-selector.unselected.pressed.label-text.color`   | md.sys.color.on-surface            |
| Time picker period selector selected pressed label text color   | `md.comp.time-picker.period-selector.selected.pressed.label-text.color`   | md.sys.color.on-tertiary-container |
| Time picker period selector unselected pressed label text color | `md.comp.time-picker.period-selector.unselected.pressed.label-text.color` | md.sys.color.on-surface-variant    |

**Pressed / State layer**

| Name                                                             | Token                                                                      | Value                                    |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------- |
| Time picker time selector selected pressed state layer color     | `md.comp.time-picker.time-selector.selected.pressed.state-layer.color`     | md.sys.color.on-primary-container        |
| Time picker time selector unselected pressed state layer color   | `md.comp.time-picker.time-selector.unselected.pressed.state-layer.color`   | md.sys.color.on-surface                  |
| Time picker time selector pressed state layer opacity            | `md.comp.time-picker.time-selector.pressed.state-layer.opacity`            | md.sys.state.pressed.state-layer-opacity |
| Time picker period selector selected pressed state layer color   | `md.comp.time-picker.period-selector.selected.pressed.state-layer.color`   | md.sys.color.on-tertiary-container       |
| Time picker period selector unselected pressed state layer color | `md.comp.time-picker.period-selector.unselected.pressed.state-layer.color` | md.sys.color.on-surface-variant          |
| Time picker period selector pressed state layer opacity          | `md.comp.time-picker.period-selector.pressed.state-layer.opacity`          | md.sys.state.pressed.state-layer-opacity |

### Time picker input color

![13 color elements of a time picker input](https://lh3.googleusercontent.com/5OUv797RnNR2XL9-3tT1sy3rKIjyxF2D4rnITJ4nURQm20-jzkT7Mygba3MDoShEFegMNRkNUE38mRg_kleVh970WS3cOJcm0KzkB1j8SEiIaA=s0)

1. On surface variant
2. On surface
3. Surface container highest
4. On surface
5. Tertiary container
6. On tertiary container
7. Surface container high
8. Outline
9. On surface
10. Primary
11. On surface variant
12. On primary container
13. Primary container

#### Time picker — Input

**Enabled / Container**

| Name                                                | Token                                                         | Value                                  |
| --------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------- |
| Time input container color                          | `md.comp.time-input.container.color`                          | md.sys.color.surface-container-high    |
| Time input container elevation                      | `md.comp.time-input.container.elevation`                      | md.sys.elevation.level3                |
| Time input surface tint layer color                 | `md.comp.time-input.surface-tint-layer.color`                 | md.sys.color.surface-tint              |
| Time input container shape                          | `md.comp.time-input.container.shape`                          | md.sys.shape.corner.extra-large        |
| Time input time input field container color         | `md.comp.time-input.time-input-field.container.color`         | md.sys.color.surface-container-highest |
| Time input time input field container shape         | `md.comp.time-input.time-input-field.container.shape`         | md.sys.shape.corner.small              |
| Time input period selector selected container color | `md.comp.time-input.period-selector.selected.container.color` | md.sys.color.tertiary-container        |
| Time input period selector container shape          | `md.comp.time-input.period-selector.container.shape`          | md.sys.shape.corner.small              |
| Time input period selector outline color            | `md.comp.time-input.period-selector.outline.color`            | md.sys.color.outline                   |
| Time input period selector outline width            | `md.comp.time-input.period-selector.outline.width`            | 1dp                                    |
| Time input time input field container width         | `md.comp.time-input.time-input-field.container.width`         | 96dp                                   |
| Time input time input field container height        | `md.comp.time-input.time-input-field.container.height`        | 72dp                                   |
| Time input period selector container width          | `md.comp.time-input.period-selector.container.width`          | 52dp                                   |
| Time input period selector container height         | `md.comp.time-input.period-selector.container.height`         | 72dp                                   |

**Enabled / Label text**

| Name                                                   | Token                                                            | Value                                       |
| ------------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------- |
| Time input time input field label text color           | `md.comp.time-input.time-input-field.label-text.color`           | md.sys.color.on-surface                     |
| Time input time input field label text font            | `md.comp.time-input.time-input-field.label-text.font`            | md.sys.typescale.display-medium.font        |
| Time input time input field label text line height     | `md.comp.time-input.time-input-field.label-text.line-height`     | md.sys.typescale.display-medium.line-height |
| Time input time input field label text size            | `md.comp.time-input.time-input-field.label-text.size`            | md.sys.typescale.display-medium.size        |
| Time input time input field label text weight          | `md.comp.time-input.time-input-field.label-text.weight`          | md.sys.typescale.display-medium.weight      |
| Time input time input field label text tracking        | `md.comp.time-input.time-input-field.label-text.tracking`        | md.sys.typescale.display-medium.tracking    |
| Time input time input field label text type            | `md.comp.time-input.time-input-field.label-text.type`            | Aa                                          |
| Time input period selector selected label text color   | `md.comp.time-input.period-selector.selected.label-text.color`   | md.sys.color.on-tertiary-container          |
| Time input period selector unselected label text color | `md.comp.time-input.period-selector.unselected.label-text.color` | md.sys.color.on-surface-variant             |
| Time input period selector label text font             | `md.comp.time-input.period-selector.label-text.font`             | md.sys.typescale.title-medium.font          |
| Time input period selector label text line height      | `md.comp.time-input.period-selector.label-text.line-height`      | md.sys.typescale.title-medium.line-height   |
| Time input period selector label text size             | `md.comp.time-input.period-selector.label-text.size`             | md.sys.typescale.title-medium.size          |
| Time input period selector label text weight           | `md.comp.time-input.period-selector.label-text.weight`           | md.sys.typescale.title-medium.weight        |
| Time input period selector label text tracking         | `md.comp.time-input.period-selector.label-text.tracking`         | md.sys.typescale.title-medium.tracking      |
| Type style                                             | `md.comp.time-input.period-selector.label-text.type`             | Aa                                          |

**Enabled / Headline**

| Name                            | Token                                     | Value                                     |
| ------------------------------- | ----------------------------------------- | ----------------------------------------- |
| Time input headline color       | `md.comp.time-input.headline.color`       | md.sys.color.on-surface-variant           |
| Time input headline font        | `md.comp.time-input.headline.font`        | md.sys.typescale.label-medium.font        |
| Time input headline line height | `md.comp.time-input.headline.line-height` | md.sys.typescale.label-medium.line-height |
| Time input headline size        | `md.comp.time-input.headline.size`        | md.sys.typescale.label-medium.size        |
| Time input headline weight      | `md.comp.time-input.headline.weight`      | md.sys.typescale.label-medium.weight      |
| Time input headline tracking    | `md.comp.time-input.headline.tracking`    | md.sys.typescale.label-medium.tracking    |
| Time input headline type        | `md.comp.time-input.headline.type`        | Aa                                        |

**Enabled / Supporting text**

| Name                                                    | Token                                                             | Value                                   |
| ------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------- |
| Time input time input field supporting text color       | `md.comp.time-input.time-input-field.supporting-text.color`       | md.sys.color.on-surface-variant         |
| Time input time input field supporting text font        | `md.comp.time-input.time-input-field.supporting-text.font`        | md.sys.typescale.body-small.font        |
| Time input time input field supporting text line height | `md.comp.time-input.time-input-field.supporting-text.line-height` | md.sys.typescale.body-small.line-height |
| Time input time input field supporting text size        | `md.comp.time-input.time-input-field.supporting-text.size`        | md.sys.typescale.body-small.size        |
| Time input time input field supporting text weight      | `md.comp.time-input.time-input-field.supporting-text.weight`      | md.sys.typescale.body-small.weight      |
| Time input time input field supporting text tracking    | `md.comp.time-input.time-input-field.supporting-text.tracking`    | md.sys.typescale.body-small.tracking    |
| Type style                                              | `md.comp.time-input.time-input-field.supporting-text.type`        | Aa                                      |

**Enabled / Separator**

| Name                                              | Token                                                       | Value                                      |
| ------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------ |
| Time input time input field separator color       | `md.comp.time-input.time-input-field.separator.color`       | md.sys.color.on-surface                    |
| Time input time input field separator font        | `md.comp.time-input.time-input-field.separator.font`        | md.sys.typescale.display-large.font        |
| Time input time input field separator line height | `md.comp.time-input.time-input-field.separator.line-height` | md.sys.typescale.display-large.line-height |
| Time input time input field separator size        | `md.comp.time-input.time-input-field.separator.size`        | md.sys.typescale.display-large.size        |
| Time input time input field separator weight      | `md.comp.time-input.time-input-field.separator.weight`      | md.sys.typescale.display-large.weight      |
| Time input time input field separator tracking    | `md.comp.time-input.time-input-field.separator.tracking`    | md.sys.typescale.display-large.tracking    |
| Type style                                        | `md.comp.time-input.time-input-field.separator.type`        | Aa                                         |

**Hovered / Label text**

| Name                                                         | Token                                                                  | Value                              |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- | ---------------------------------- |
| Time input time input field hover label text color           | `md.comp.time-input.time-input-field.hover.label-text.color`           | md.sys.color.on-surface            |
| Time input period selector selected hover label text color   | `md.comp.time-input.period-selector.selected.hover.label-text.color`   | md.sys.color.on-tertiary-container |
| Time input period selector unselected hover label text color | `md.comp.time-input.period-selector.unselected.hover.label-text.color` | md.sys.color.on-surface-variant    |

**Hovered / State layer**

| Name                                                          | Token                                                                   | Value                                  |
| ------------------------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------- |
| Time input time input field hover state layer color           | `md.comp.time-input.time-input-field.hover.state-layer.color`           | md.sys.color.on-surface                |
| Time input time input field hover state layer opacity         | `md.comp.time-input.time-input-field.hover.state-layer.opacity`         | md.sys.state.hover.state-layer-opacity |
| Time input period selector selected hover state layer color   | `md.comp.time-input.period-selector.selected.hover.state-layer.color`   | md.sys.color.on-tertiary-container     |
| Time input period selector unselected hover state layer color | `md.comp.time-input.period-selector.unselected.hover.state-layer.color` | md.sys.color.on-surface-variant        |
| Time input period selector hover state layer opacity          | `md.comp.time-input.period-selector.hover.state-layer.opacity`          | md.sys.state.hover.state-layer-opacity |

**Focused / Focus indicator**

| Name                                 | Token                                               | Value                                     |
| ------------------------------------ | --------------------------------------------------- | ----------------------------------------- |
| Time input focus indicator color     | `md.comp.time-input.focus.indicator.color`          | md.sys.color.secondary                    |
| Time input focus indicator thickness | `md.comp.time-input.focus.indicator.thickness`      | md.sys.state.focus-indicator.thickness    |
| Time input focus indicator offset    | `md.comp.time-input.focus.indicator.outline.offset` | md.sys.state.focus-indicator.outer-offset |

**Focused / Container**

| Name                                              | Token                                                       | Value                          |
| ------------------------------------------------- | ----------------------------------------------------------- | ------------------------------ |
| Time input time input field focus container color | `md.comp.time-input.time-input-field.focus.container.color` | md.sys.color.primary-container |
| Time input time input field focus outline color   | `md.comp.time-input.time-input-field.focus.outline.color`   | md.sys.color.primary           |
| Time input time input field focus outline width   | `md.comp.time-input.time-input-field.focus.outline.width`   | 2dp                            |

**Focused / Label text**

| Name                                                         | Token                                                                  | Value                              |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- | ---------------------------------- |
| Time input time input field focus label text color           | `md.comp.time-input.time-input-field.focus.label-text.color`           | md.sys.color.on-primary-container  |
| Time input period selector selected focus label text color   | `md.comp.time-input.period-selector.selected.focus.label-text.color`   | md.sys.color.on-tertiary-container |
| Time input period selector unselected focus label text color | `md.comp.time-input.period-selector.unselected.focus.label-text.color` | md.sys.color.on-surface-variant    |

**Focused / State layer**

| Name                                                          | Token                                                                   | Value                                  |
| ------------------------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------- |
| Time input period selector selected focus state layer color   | `md.comp.time-input.period-selector.selected.focus.state-layer.color`   | md.sys.color.on-tertiary-container     |
| Time input period selector unselected focus state layer color | `md.comp.time-input.period-selector.unselected.focus.state-layer.color` | md.sys.color.on-surface-variant        |
| Time input period selector focus state layer opacity          | `md.comp.time-input.period-selector.focus.state-layer.opacity`          | md.sys.state.focus.state-layer-opacity |

**Pressed / Label text**

| Name                                                           | Token                                                                    | Value                              |
| -------------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------- |
| Time input period selector selected pressed label text color   | `md.comp.time-input.period-selector.selected.pressed.label-text.color`   | md.sys.color.on-tertiary-container |
| Time input period selector unselected pressed label text color | `md.comp.time-input.period-selector.unselected.pressed.label-text.color` | md.sys.color.on-surface-variant    |

**Pressed / State layer**

| Name                                                            | Token                                                                     | Value                                    |
| --------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------- |
| Time input period selector selected pressed state layer color   | `md.comp.time-input.period-selector.selected.pressed.state-layer.color`   | md.sys.color.on-tertiary-container       |
| Time input period selector unselected pressed state layer color | `md.comp.time-input.period-selector.unselected.pressed.state-layer.color` | md.sys.color.on-surface-variant          |
| Time input period selector pressed state layer opacity          | `md.comp.time-input.period-selector.pressed.state-layer.opacity`          | md.sys.state.pressed.state-layer-opacity |

---

## Interaction States

![4 interactive states of time picker in light and dark themes](https://lh3.googleusercontent.com/tS5QmHOdLQaGFzVS3OBV8hKVk1lcswec2uan7b-7CS_hhmglq3X45gYIkux28kcLyIRqYhetBz8xNkv8oi7LgI20dj-XT-jX2W4rJkdrAsFZ1g=s0)

| #   | State   |
| --- | ------- |
| 1   | Enabled |
| 2   | Hover   |
| 3   | Focus   |
| 4   | Pressed |

---

## Adaptive Design

Time pickers can swap between orientation or variant depending on device orientation and viewport constraints.

- On larger breakpoints or limited viewport height, switch to landscape orientation to avoid scrolling the dial
- Fall back to the input time picker when there isn't enough vertical space for landscape orientation
- Don't apply density to the time picker dial when viewport is constrained — use input picker instead

![High-density time picker on mobile](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2uzinf-13.png?alt=media&token=bb6a904b-40c3-4353-9c57-7299f455b020=s0)

![Don't: apply density to dial when viewport is constrained](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2v1wt2-14_dont.png?alt=media&token=776c2e3f-538d-4912-8815-ef79f77aba0c=s0)

---

## Accessibility

### Use cases

People should be able to use assistive technology to:

- Select or enter hours/minutes, and in some cases seconds/milliseconds
- Choose from multiple time formats (24-hour clock, AM/PM)
- Enter time selection manually using input fields

### Interaction guidance

- Time pickers should allow manual entry through text input, not exclusively through the dial selector
- The input selector should always be accessible from the dial via the keyboard icon
- If the screen isn't large enough for the dial, consider showing the input selector alone (on Android Views, the dial selector is always visible)

![For time selection without dial, make input picker the default](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2w3xxn-01.png?alt=media&token=84c832db-808d-448c-a8dd-9d89620c4d1f=s0)

### Touch targets

Dial selector targets should be 48x48dp.

![Dial selector targets at 48x48dp](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2w61b9-02.png?alt=media&token=92a4708a-fda3-4fca-b285-153413dd00b4=s0)

### Keyboard Navigation

| Key            | Action                                  |
| -------------- | --------------------------------------- |
| Tab            | Focus lands on (non-disabled) time slot |
| Space or Enter | Activates the (non-disabled) time slot  |

### Labeling

- If input text is correctly linked, assistive tech reads the component's role first, then the UI text
- The dial selector reads a selection like "Hour 7 of 12"

![Hour and minute fields have text input role](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2w8i4o-03.png?alt=media&token=da4a19d6-ee3a-4eaf-bce3-256e3d0681b1=s0)

![Dial selector reads text label](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2w9ugu-04.png?alt=media&token=07079a68-62a9-49fd-ab7f-2638edda3047=s0)

### Dial selector roles

| Element                   | Accessibility label                 | Role (Wiz / Jetpack Compose) | Role (Android Views) |
| ------------------------- | ----------------------------------- | ---------------------------- | -------------------- |
| Hour input (input picker) | Hour                                | Text input                   | —                    |
| Minutes input             | Minute                              | Text input                   | —                    |
| AM/PM selection           | AM or PM                            | Radio button (in list)       | Checkbox (in list)   |
| Keyboard button           | Toggle input picker                 | Button                       | Button               |
| Cancel button             | Cancel                              | Button                       | Button               |
| OK button                 | OK                                  | Button                       | Button               |
| Clock dial time selection | {Value} Hours or minutes of {Total} | Button                       | —                    |

### Input selector roles

| Element       | Accessibility label | Role (Wiz / Jetpack Compose) | Role (Android Views) |
| ------------- | ------------------- | ---------------------------- | -------------------- |
| Hour input    | Hour                | Text input                   | —                    |
| Minutes input | Minute              | Text input                   | —                    |
| Clock button  | Toggle dial picker  | Button                       | Button               |
| Cancel button | Cancel              | Button                       | Button               |
| OK button     | OK                  | Button                       | Button               |

---

## M2 → M3 Differences

| Aspect | M2                      | M3                                               |
| ------ | ----------------------- | ------------------------------------------------ |
| Color  | Previous color mappings | New color mappings compatible with dynamic color |

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcz00a3d-02.png?alt=media&token=195f2e65-d46e-466a-b952-e7cfa9761d48=s0" /><br/><b>M2:</b> Time pickers had different color mappings</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcz04x96-03.png?alt=media&token=a2f4ba54-7a25-4967-b3d9-bb113e40713e=s0" /><br/><b>M3:</b> New color mappings compatible with dynamic color</td>
</tr></table>
