# Icon Buttons — M3 Component Reference

> Icon buttons help people take minor actions with one tap.

Sources: [Overview](https://m3.material.io/components/icon-buttons/overview) · [Specs](https://m3.material.io/components/icon-buttons/specs) · [Guidelines](https://m3.material.io/components/icon-buttons/guidelines) · [Accessibility](https://m3.material.io/components/icon-buttons/accessibility)

---

## Variants

![Side by side view of default and toggle icon buttons.](https://lh3.googleusercontent.com/eJRJf0S1ywGr8CdhzgukcRgQpKxbZOCEZ12g2HeJrldunvEVBgg_65CzvyHntvAMJWJYApy-BpompKTbjsHQl2sd6YGjoQriSC1O9nfooyw=s0)

1. Default icon button
2. Toggle icon button

| Variant            | M3        | M3 Expressive |
| ------------------ | --------- | ------------- |
| Default            | Available | Available     |
| Toggle (selection) | Available | Available     |

- **Default** icon buttons trigger single-fire actions like opening a menu or search.
- **Toggle** icon buttons represent binary on/off states like favorite or bookmark. The icon transitions from outlined (unselected) to filled (selected).

---

## Configurations

![Side by side view of size, shape, color, and width variations.](https://lh3.googleusercontent.com/8uQEXQa18WJuSmuK5CLloUJ69m6TGCdj5C9FBDFAETglM5PWdtNDxW62KriOfOjurHZ9ThRY_yfM_pfRVEsYl-R5oeob6wY3nFADhcFPF5hk=s0)

1. Five sizes
2. Two shapes
3. Four color styles
4. Three widths

| Category | Options                                     | M3        | M3 Expressive |
| -------- | ------------------------------------------- | --------- | ------------- |
| Size     | Small (default)                             | Available | Available     |
|          | XS, M, L, XL                                | --        | Available     |
| Shape    | Round (default)                             | Available | Available     |
|          | Square                                      | --        | Available     |
| Color    | Filled (default), tonal, outlined, standard | Available | Available     |
| Width    | Default                                     | Available | Available     |
|          | Narrow, wide                                | --        | Available     |

---

## Anatomy

![Diagram of anatomy of outlined, standard, and filled icon buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dw9g2n-11.png?alt=media&token=4b25bd9e-b8bd-41dd-bf61-840592be5a93=s0)

1. **Icon** — visually communicates the button's action; meaning must be clear and unambiguous
2. **Container** — provides contrast and visual separation from the background

### Icon

Default icon buttons should use **filled** icons. Toggle buttons use an **outlined** icon when unselected and a **filled** icon when selected. If no filled variant exists, increase the icon weight to semibold (or bold if semibold is insufficient). This ensures selection is communicated through at least two properties (shape + weight), not just color.

![Ensure the meaning of the icon is clear, such as a heart indicating Favorite](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0tpl2-12.png?alt=media&token=b1823b3b-520b-4c87-856e-d1f2d28225a5=s0)

![Icons without a fill should be semibolded when selected](https://lh3.googleusercontent.com/WlJwCfuBY1Q541JoSnQlMRnQK77D7bjNnaLrojXxV7WJxGkYJOIwZdwMo0FnRu_qw0HMjfx5hso_QMCL6QHjhGgy0bpZ9JCGSqT3j_Ju33g=s0)

### Container

The container provides increased hierarchy and visual separation from the background, useful when placed on images or busy surfaces.

![Container separating a video call preview with actions you can take](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0wdzg-13.png?alt=media&token=d8ee5c0a-ec56-4503-92b7-e149822a522b=s0)

---

## Usage & When to Use

![5 kinds of icon buttons: standard, filled unselected, filled selected, filled tonal, and outlined](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0by1ftf-1.png?alt=media&token=2888d586-c4ee-456e-8444-805543dddbed=s0)

- Use icon buttons for common, easily understandable minor actions
- Icons must use a system icon with a clear meaning
- On web, display a tooltip describing the action on hover
- Place directly on backgrounds or within container components (cards, app bars, toolbars)
- Group multiple icon buttons in a standard button group for inter-button interaction and motion

![Icon buttons can be used within other components, such as in a toolbar or card](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0dz7i-2.png?alt=media&token=5a110185-4604-4ade-839b-64d97ec3e9f7=s0)

### Color styles

Four color styles ranked by emphasis (highest to lowest):

1. **Filled** — high visual impact; use for key actions. Avoid overusing on a single screen.
2. **Tonal** — middle ground between filled and outlined; useful for secondary actions paired with a high-emphasis action.
3. **Outlined** — medium emphasis; useful when the button isn't the main focus (e.g., browsing cards).
4. **Standard** — lowest emphasis; good for low-priority actions or placement on colorful surfaces. Container is invisible at rest, visible only when state layer is applied.

![The default (left) and toggle (right) icon buttons are available in all four color styles](https://lh3.googleusercontent.com/zX0RmAg_m2LHij-KQp9s644fx6zWH5Vq47EOpwR4OcSeSxQE4MnZPtq4RtAJj0pKfTLaOsRCrEEAocb7CO7cEEdy4M0jI9TpzsmkCW96us9N=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0hfou-4.png?alt=media&token=d75ce156-ae29-4e58-8a52-ff89d0acf750=s0" /><br/><b>Do:</b> Use icons with a background to make them easy to see on any surface</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0ir4x-5.png?alt=media&token=59ab40b3-9d13-4f3f-9009-6b5ecb0b6217=s0" /><br/><b>Do:</b> When mixing button variants, use color styles to make the primary action clear</td>
</tr></table>

![Leverage the different color styles to establish emphasis and direct people to important actions](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0lz0p-7.png?alt=media&token=da11d026-2024-4119-ae4d-719fa72443c7=s0)

![Outlined buttons indicate that more content is available without grabbing attention](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5xjqza2-8.png?alt=media&token=47a14a51-a2ca-4f91-8d5f-540cf46986a2=s0)

### Size & width

Five sizes are available:

| Size            | Container dimension |
| --------------- | ------------------- |
| Extra small     | 32dp                |
| Small (default) | 40dp                |
| Medium          | 56dp                |
| Large           | 96dp                |
| Extra large     | 136dp               |

Three widths: **default**, **narrow**, and **wide**.

Use size and width to establish visual hierarchy. The main action should be the most prominent — whether through color or size. When buttons have similar importance, keep them the same size.

![Use different button colors and sizes to provide visual hierarchy and emphasize primary actions](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5xk0kj1-10.png?alt=media&token=84ca5176-249f-4fdb-a1a5-ad091e974b17=s0)

![When everything should have the same emphasis, use icon buttons that are the same size](https://lh3.googleusercontent.com/xCB1ezQGhZ8n6LcIlfpkJhTP-cziJEyQRycEmz_Eu8GlnA9CBQiY4Zuf5BZHpCf50WOMBNVbzi8nNt2eyJyiuMgR184equbhVVrP6qI5I10=s0)

---

## Placement

Icon buttons are commonly used in app bars, cards, toolbars, and button groups. Use them only for common, easily understood actions, and limit the number of icon buttons displayed at once.

![App bars often contain icon buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0xugp-14.png?alt=media&token=c015216c-90e6-4071-81a5-7cc615306ed1=s0)

In dense layouts, group popular actions by placing multiple icon buttons next to each other inside a toolbar or button group. These containers draw attention to the grouped actions or add inter-button interaction.

![A toolbar is a collection of icon buttons and other components](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0z5xa-15.png?alt=media&token=2eb01ea3-eaf7-4884-89f5-0c396c18be40=s0)

---

## Behavior

### Hover

On hover, icon buttons display a tooltip describing the action (e.g., "Add to favorites"), not the name of the icon itself. The tooltip label should be clear and concise.

### Selection (toggle)

Toggle icon buttons allow a single binary choice — selected or deselected (e.g., favorite/unfavorite). When placed in a button group, selected buttons change shape to stand out.

- Use toggle icon buttons only when the icon has a meaningful selected state.
- Do **not** use toggle for actions without a selected state (e.g., overflow menu).
- The icon should become filled on selection. If no filled version exists, use semibold weight instead.

### Shape morph

#### Pressed state

While pressed, icon buttons morph to become more square. Both round and square buttons share the same pressed corner radius per size. See the corner radius table in [Measurements](#measurements).

![Shape changes for round and square icon buttons in 3 states: enabled, hovered, pressed](https://lh3.googleusercontent.com/R4g7sI29Fu5i_IbuatO_g8K3lOfiXc5bWqBhR3s_5fhlg_yRXIbj6n26wEoi5SKZBszsh2CYiN6iioN9se4O1tXedkR6Lb5ANXj5oc45ZY0RQA=s0)

1. Enabled
2. Hovered
3. Pressed

#### When selected (toggle)

Toggle buttons also change their resting shape on selection: round (unselected) becomes square (selected) by default. If the resting shape is already square, the selected shape becomes round — the shapes invert.

![Shape changes for round and square toggle icon buttons in 4 states: enabled, hovered, pressed, selected](https://lh3.googleusercontent.com/BnUdAgpdenC-evMYsprXRd489dyTMpWrSuPeQgbXSYXyJipJESFG-v4OLvX9K0aWOHkWjS7-k7qXXmQjGaDhSW4a4CoPGZ6-1RcxxeL5cgY=s0)

1. Enabled
2. Hovered
3. Pressed
4. Selected

---

## Measurements

![Diagram of 5 sizes of icon buttons in 4 widths](https://lh3.googleusercontent.com/_jjXoUxycgTulKAlvK7SJG4QJ6ok6z-OJVsuMM4Q79_6fBauVYYA_TBTzTFzKa3-HvqYbWV9SR13zv35HwMK-BFmV8oFF6evAThLTcUCvA8=s0)

1. Icon size
2. Default width size
3. Narrow width size
4. Wide width size

### Target sizes

Extra small and small icon buttons must have a target size of at least **48×48dp** for accessibility, even though the visual container is smaller.

![Diagram of target sizes for narrow, default, and wide widths](https://lh3.googleusercontent.com/elGowRNNI3axprldZYy7RbpofXNr_DB-TAdJep-DZ_sRF0WCCACN-pxCEBBeF6_5FJADjm_fVuRgRNNGdsvbAXi7Msuc6MjYF0pnW5rVzfmN3Q=s0)

1. Narrow width
2. Default width
3. Wide width

### Button corner radius

![Diagram of icon button corner radius](https://lh3.googleusercontent.com/qbTMBYNLCAPi3CIr8hTDFwdc0GclxQmGaA67KohT7UMz509-iBAlMzevRQwXVvthTGyaA_7lA4DR060wRA3zc6dp2ztd7-WdJpUolTX3F1U=s0)

|                  | XS   | S    | M    | L    | XL   |
| ---------------- | ---- | ---- | ---- | ---- | ---- |
| A. Round button  | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp  | 8dp  | 12dp | 16dp | 16dp |

### Size tokens

#### Extra small (32dp)

| Name                         | Token                                                                              | Value                                         |
| ---------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------- |
| Container height             | `md.comp.icon-button.xsmall.container.height`                                      | 32dp                                          |
| Icon size                    | `md.comp.icon-button.xsmall.icon.size`                                             | 20dp                                          |
| Narrow leading space         | `md.comp.icon-button.xsmall.narrow.leading-space`                                  | 4dp                                           |
| Narrow trailing space        | `md.comp.icon-button.xsmall.narrow.trailing-space`                                 | 4dp                                           |
| Default leading space        | `md.comp.icon-button.xsmall.default.leading-space`                                 | 6dp                                           |
| Default trailing space       | `md.comp.icon-button.xsmall.default.trailing-space`                                | 6dp                                           |
| Wide leading space           | `md.comp.icon-button.xsmall.wide.leading-space`                                    | 10dp                                          |
| Wide trailing space          | `md.comp.icon-button.xsmall.wide.trailing-space`                                   | 10dp                                          |
| Container shape (round)      | `md.comp.icon-button.xsmall.container.shape.round`                                 | `md.sys.shape.corner.full`                    |
| Container shape (square)     | `md.comp.icon-button.xsmall.container.shape.square`                                | `md.sys.shape.corner.medium`                  |
| Outline width                | `md.comp.icon-button.xsmall.outlined.outline.width`                                | 1dp                                           |
| Pressed shape morph          | `md.comp.icon-button.xsmall.pressed.container.shape`                               | `md.sys.shape.corner.small`                   |
| Shape spring damping         | `md.comp.icon-button.xsmall.pressed.container.corner-size.motion.spring.damping`   | `md.sys.motion.spring.fast.spatial.damping`   |
| Shape spring stiffness       | `md.comp.icon-button.xsmall.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` |
| Selected shape (round)       | `md.comp.icon-button.xsmall.selected.container.shape.round`                        | `md.sys.shape.corner.medium`                  |
| Selected shape (square)      | `md.comp.icon-button.xsmall.selected.container.shape.square`                       | `md.sys.shape.corner.full`                    |

#### Small (40dp) — default

| Name                         | Token                                                                             | Value                                         |
| ---------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------- |
| Container height             | `md.comp.icon-button.small.container.height`                                      | 40dp                                          |
| Icon size                    | `md.comp.icon-button.small.icon.size`                                             | 24dp                                          |
| Narrow leading space         | `md.comp.icon-button.small.narrow.leading-space`                                  | 4dp                                           |
| Narrow trailing space        | `md.comp.icon-button.small.narrow.trailing-space`                                 | 4dp                                           |
| Default leading space        | `md.comp.icon-button.small.default.leading-space`                                 | 8dp                                           |
| Default trailing space       | `md.comp.icon-button.small.default.trailing-space`                                | 8dp                                           |
| Wide leading space           | `md.comp.icon-button.small.wide.leading-space`                                    | 14dp                                          |
| Wide trailing space          | `md.comp.icon-button.small.wide.trailing-space`                                   | 14dp                                          |
| Container shape (round)      | `md.comp.icon-button.small.container.shape.round`                                 | `md.sys.shape.corner.full`                    |
| Container shape (square)     | `md.comp.icon-button.small.container.shape.square`                                | `md.sys.shape.corner.medium`                  |
| Outline width                | `md.comp.icon-button.small.outlined.outline.width`                                | 1dp                                           |
| Pressed shape morph          | `md.comp.icon-button.small.pressed.container.shape`                               | `md.sys.shape.corner.small`                   |
| Shape spring damping         | `md.comp.icon-button.small.pressed.container.corner-size.motion.spring.damping`   | `md.sys.motion.spring.fast.spatial.damping`   |
| Shape spring stiffness       | `md.comp.icon-button.small.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` |
| Selected shape (round)       | `md.comp.icon-button.small.selected.container.shape.round`                        | `md.sys.shape.corner.medium`                  |
| Selected shape (square)      | `md.comp.icon-button.small.selected.container.shape.square`                       | `md.sys.shape.corner.full`                    |

#### Medium (56dp)

| Name                         | Token                                                                              | Value                                         |
| ---------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------- |
| Container height             | `md.comp.icon-button.medium.container.height`                                      | 56dp                                          |
| Icon size                    | `md.comp.icon-button.medium.icon.size`                                             | 24dp                                          |
| Narrow leading space         | `md.comp.icon-button.medium.narrow.leading-space`                                  | 12dp                                          |
| Narrow trailing space        | `md.comp.icon-button.medium.narrow.trailing-space`                                 | 12dp                                          |
| Default leading space        | `md.comp.icon-button.medium.default.leading-space`                                 | 16dp                                          |
| Default trailing space       | `md.comp.icon-button.medium.default.trailing-space`                                | 16dp                                          |
| Wide leading space           | `md.comp.icon-button.medium.wide.leading-space`                                    | 24dp                                          |
| Wide trailing space          | `md.comp.icon-button.medium.wide.trailing-space`                                   | 24dp                                          |
| Container shape (round)      | `md.comp.icon-button.medium.container.shape.round`                                 | `md.sys.shape.corner.full`                    |
| Container shape (square)     | `md.comp.icon-button.medium.container.shape.square`                                | `md.sys.shape.corner.large`                   |
| Outline width                | `md.comp.icon-button.medium.outlined.outline.width`                                | 1dp                                           |
| Pressed shape morph          | `md.comp.icon-button.medium.pressed.container.shape`                               | `md.sys.shape.corner.medium`                  |
| Shape spring damping         | `md.comp.icon-button.medium.pressed.container.corner-size.motion.spring.damping`   | `md.sys.motion.spring.fast.spatial.damping`   |
| Shape spring stiffness       | `md.comp.icon-button.medium.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` |
| Selected shape (round)       | `md.comp.icon-button.medium.selected.container.shape.round`                        | `md.sys.shape.corner.large`                   |
| Selected shape (square)      | `md.comp.icon-button.medium.selected.container.shape.square`                       | `md.sys.shape.corner.full`                    |

#### Large (96dp)

| Name                         | Token                                                                             | Value                                         |
| ---------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------- |
| Container height             | `md.comp.icon-button.large.container.height`                                      | 96dp                                          |
| Icon size                    | `md.comp.icon-button.large.icon.size`                                             | 32dp                                          |
| Narrow leading space         | `md.comp.icon-button.large.narrow.leading-space`                                  | 16dp                                          |
| Narrow trailing space        | `md.comp.icon-button.large.narrow.trailing-space`                                 | 16dp                                          |
| Default leading space        | `md.comp.icon-button.large.default.leading-space`                                 | 32dp                                          |
| Default trailing space       | `md.comp.icon-button.large.default.trailing-space`                                | 32dp                                          |
| Wide leading space           | `md.comp.icon-button.large.wide.leading-space`                                    | 48dp                                          |
| Wide trailing space          | `md.comp.icon-button.large.wide.trailing-space`                                   | 48dp                                          |
| Container shape (round)      | `md.comp.icon-button.large.container.shape.round`                                 | `md.sys.shape.corner.full`                    |
| Container shape (square)     | `md.comp.icon-button.large.container.shape.square`                                | `md.sys.shape.corner.extra-large`             |
| Outline width                | `md.comp.icon-button.large.outlined.outline.width`                                | 2dp                                           |
| Pressed shape morph          | `md.comp.icon-button.large.pressed.container.shape`                               | `md.sys.shape.corner.large`                   |
| Shape spring damping         | `md.comp.icon-button.large.pressed.container.corner-size.motion.spring.damping`   | `md.sys.motion.spring.fast.spatial.damping`   |
| Shape spring stiffness       | `md.comp.icon-button.large.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` |
| Selected shape (round)       | `md.comp.icon-button.large.selected.container.shape.round`                        | `md.sys.shape.corner.extra-large`             |
| Selected shape (square)      | `md.comp.icon-button.large.selected.container.shape.square`                       | `md.sys.shape.corner.full`                    |

#### Extra large (136dp)

| Name                         | Token                                                                              | Value                                         |
| ---------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------- |
| Container height             | `md.comp.icon-button.xlarge.container.height`                                      | 136dp                                         |
| Icon size                    | `md.comp.icon-button.xlarge.icon.size`                                             | 40dp                                          |
| Narrow leading space         | `md.comp.icon-button.xlarge.narrow.leading-space`                                  | 32dp                                          |
| Narrow trailing space        | `md.comp.icon-button.xlarge.narrow.trailing-space`                                 | 32dp                                          |
| Default leading space        | `md.comp.icon-button.xlarge.default.leading-space`                                 | 48dp                                          |
| Default trailing space       | `md.comp.icon-button.xlarge.default.trailing-space`                                | 48dp                                          |
| Wide leading space           | `md.comp.icon-button.xlarge.wide.leading-space`                                    | 72dp                                          |
| Wide trailing space          | `md.comp.icon-button.xlarge.wide.trailing-space`                                   | 72dp                                          |
| Container shape (round)      | `md.comp.icon-button.xlarge.container.shape.round`                                 | `md.sys.shape.corner.full`                    |
| Container shape (square)     | `md.comp.icon-button.xlarge.container.shape.square`                                | `md.sys.shape.corner.extra-large`             |
| Outline width                | `md.comp.icon-button.xlarge.outlined.outline.width`                                | 3dp                                           |
| Pressed shape morph          | `md.comp.icon-button.xlarge.pressed.container.shape`                               | `md.sys.shape.corner.large`                   |
| Shape spring damping         | `md.comp.icon-button.xlarge.pressed.container.corner-size.motion.spring.damping`   | `md.sys.motion.spring.fast.spatial.damping`   |
| Shape spring stiffness       | `md.comp.icon-button.xlarge.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` |
| Selected shape (round)       | `md.comp.icon-button.xlarge.selected.container.shape.round`                        | `md.sys.shape.corner.extra-large`             |
| Selected shape (square)      | `md.comp.icon-button.xlarge.selected.container.shape.square`                       | `md.sys.shape.corner.full`                    |

---

## Color Tokens

Color roles are applied per color style. Default and toggle buttons use different color roles within each style. Other color role combinations are acceptable as long as container and icon maintain a 3:1 contrast ratio.

![Color roles of default and toggle buttons in 4 visual styles](https://lh3.googleusercontent.com/_CWKvmXvNaFk4LwtZcFhYyOOgq-OJEnRgXVifhpYTwewAHQXGsA8SAcHgpi4_BO2o6CIT-ERoIMpSI41hwGU2dvTE3OoJql9XZ_WQ6mxoPrK=s0)

1. Default
2. Toggle, unselected
3. Toggle, selected

### Color role summary

|                                    | Default                                        | Toggle, unselected                             | Toggle, selected                     |
| ---------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ------------------------------------ |
| Filled container / Filled icon     | Primary / On primary                           | Surface container / On surface variant         | Primary / On primary                 |
| Tonal container / Tonal icon       | Secondary container / On secondary container   | Secondary container / On secondary container   | Secondary / On secondary             |
| Outlined container / Outlined icon | Outline variant (outline) / On surface variant | Outline variant (outline) / On surface variant | Inverse surface / Inverse on surface |
| Standard icon                      | On surface variant                             | On surface variant                             | Primary                              |

### Filled

#### Enabled

| Element                               | Token                                                   | Value                             |
| ------------------------------------- | ------------------------------------------------------- | --------------------------------- |
| Container color                       | `md.comp.icon-button.filled.container.color`            | `md.sys.color.primary`            |
| Container color — toggle (unselected) | `md.comp.icon-button.filled.unselected.container.color` | `md.sys.color.surface-container`  |
| Container color — toggle (selected)   | `md.comp.icon-button.filled.selected.container.color`   | `md.sys.color.primary`            |
| Icon color                            | `md.comp.icon-button.filled.icon.color`                 | `md.sys.color.on-primary`         |
| Icon color — toggle (unselected)      | `md.comp.icon-button.filled.unselected.icon.color`      | `md.sys.color.on-surface-variant` |
| Icon color — toggle (selected)        | `md.comp.icon-button.filled.selected.icon.color`        | `md.sys.color.on-primary`         |

#### Disabled

| Element           | Token                                                   | Value                     |
| ----------------- | ------------------------------------------------------- | ------------------------- |
| Container color   | `md.comp.icon-button.filled.disabled.container.color`   | `md.sys.color.on-surface` |
| Container opacity | `md.comp.icon-button.filled.disabled.container.opacity` | 0.1                       |
| Icon color        | `md.comp.icon-button.filled.disabled.icon.color`        | `md.sys.color.on-surface` |
| Icon opacity      | `md.comp.icon-button.filled.disabled.icon.opacity`      | 0.38                      |

#### Hovered

| Element                                 | Token                                                             | Value                                    |
| --------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------- |
| State layer color                       | `md.comp.icon-button.filled.hovered.state-layer.color`            | `md.sys.color.on-primary`                |
| State layer color — toggle (unselected) | `md.comp.icon-button.filled.unselected.hovered.state-layer.color` | `md.sys.color.on-surface-variant`        |
| State layer color — toggle (selected)   | `md.comp.icon-button.filled.selected.hovered.state-layer.color`   | `md.sys.color.on-primary`                |
| State layer opacity                     | `md.comp.icon-button.filled.hovered.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Icon color                              | `md.comp.icon-button.filled.hovered.icon.color`                   | `md.sys.color.on-primary`                |
| Icon color — toggle (unselected)        | `md.comp.icon-button.filled.unselected.hovered.icon.color`        | `md.sys.color.on-surface-variant`        |
| Icon color — toggle (selected)          | `md.comp.icon-button.filled.selected.hovered.icon.color`          | `md.sys.color.on-primary`                |

#### Focused

| Element                                 | Token                                                             | Value                                    |
| --------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------- |
| State layer color                       | `md.comp.icon-button.filled.focused.state-layer.color`            | `md.sys.color.on-primary`                |
| State layer color — toggle (unselected) | `md.comp.icon-button.filled.unselected.focused.state-layer.color` | `md.sys.color.on-surface-variant`        |
| State layer color — toggle (selected)   | `md.comp.icon-button.filled.selected.focused.state-layer.color`   | `md.sys.color.on-primary`                |
| State layer opacity                     | `md.comp.icon-button.filled.focused.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |
| Icon color                              | `md.comp.icon-button.filled.focused.icon.color`                   | `md.sys.color.on-primary`                |
| Icon color — toggle (unselected)        | `md.comp.icon-button.filled.unselected.focused.icon.color`        | `md.sys.color.on-surface-variant`        |
| Icon color — toggle (selected)          | `md.comp.icon-button.filled.selected.focused.icon.color`          | `md.sys.color.on-primary`                |

#### Pressed

| Element                                 | Token                                                             | Value                                      |
| --------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------ |
| State layer color                       | `md.comp.icon-button.filled.pressed.state-layer.color`            | `md.sys.color.on-primary`                  |
| State layer color — toggle (unselected) | `md.comp.icon-button.filled.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant`          |
| State layer color — toggle (selected)   | `md.comp.icon-button.filled.selected.pressed.state-layer.color`   | `md.sys.color.on-primary`                  |
| State layer opacity                     | `md.comp.icon-button.filled.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Icon color                              | `md.comp.icon-button.filled.pressed.icon.color`                   | `md.sys.color.on-primary`                  |
| Icon color — toggle (unselected)        | `md.comp.icon-button.filled.unselected.pressed.icon.color`        | `md.sys.color.on-surface-variant`          |
| Icon color — toggle (selected)          | `md.comp.icon-button.filled.selected.pressed.icon.color`          | `md.sys.color.on-primary`                  |

### Tonal

#### Enabled

| Element                               | Token                                                  | Value                                 |
| ------------------------------------- | ------------------------------------------------------ | ------------------------------------- |
| Container color                       | `md.comp.icon-button.tonal.container.color`            | `md.sys.color.secondary-container`    |
| Container color — toggle (unselected) | `md.comp.icon-button.tonal.unselected.container.color` | `md.sys.color.secondary-container`    |
| Container color — toggle (selected)   | `md.comp.icon-button.tonal.selected.container.color`   | `md.sys.color.secondary`              |
| Icon color                            | `md.comp.icon-button.tonal.icon.color`                 | `md.sys.color.on-secondary-container` |
| Icon color — toggle (unselected)      | `md.comp.icon-button.tonal.unselected.icon.color`      | `md.sys.color.on-secondary-container` |
| Icon color — toggle (selected)        | `md.comp.icon-button.tonal.selected.icon.color`        | `md.sys.color.on-secondary`           |

#### Disabled

| Element           | Token                                                  | Value                     |
| ----------------- | ------------------------------------------------------ | ------------------------- |
| Container color   | `md.comp.icon-button.tonal.disabled.container.color`   | `md.sys.color.on-surface` |
| Container opacity | `md.comp.icon-button.tonal.disabled.container.opacity` | 0.1                       |
| Icon color        | `md.comp.icon-button.tonal.disabled.icon.color`        | `md.sys.color.on-surface` |
| Icon opacity      | `md.comp.icon-button.tonal.disabled.icon.opacity`      | 0.38                      |

#### Hovered

| Element                                 | Token                                                            | Value                                    |
| --------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------- |
| State layer color                       | `md.comp.icon-button.tonal.hovered.state-layer.color`            | `md.sys.color.on-secondary-container`    |
| State layer color — toggle (unselected) | `md.comp.icon-button.tonal.unselected.hovered.state-layer.color` | `md.sys.color.on-secondary-container`    |
| State layer color — toggle (selected)   | `md.comp.icon-button.tonal.selected.hovered.state-layer.color`   | `md.sys.color.on-secondary`              |
| State layer opacity                     | `md.comp.icon-button.tonal.hovered.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Icon color                              | `md.comp.icon-button.tonal.hovered.icon.color`                   | `md.sys.color.on-secondary-container`    |
| Icon color — toggle (unselected)        | `md.comp.icon-button.tonal.unselected.hovered.icon.color`        | `md.sys.color.on-secondary-container`    |
| Icon color — toggle (selected)          | `md.comp.icon-button.tonal.selected.hovered.icon.color`          | `md.sys.color.on-secondary`              |

#### Focused

| Element                                 | Token                                                            | Value                                    |
| --------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------- |
| State layer color                       | `md.comp.icon-button.tonal.focused.state-layer.color`            | `md.sys.color.on-secondary-container`    |
| State layer color — toggle (unselected) | `md.comp.icon-button.tonal.unselected.focused.state-layer.color` | `md.sys.color.on-secondary-container`    |
| State layer color — toggle (selected)   | `md.comp.icon-button.tonal.selected.focused.state-layer.color`   | `md.sys.color.on-secondary`              |
| State layer opacity                     | `md.comp.icon-button.tonal.focused.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |
| Icon color                              | `md.comp.icon-button.tonal.focused.icon.color`                   | `md.sys.color.on-secondary-container`    |
| Icon color — toggle (unselected)        | `md.comp.icon-button.tonal.unselected.focused.icon.color`        | `md.sys.color.on-secondary-container`    |
| Icon color — toggle (selected)          | `md.comp.icon-button.tonal.selected.focused.icon.color`          | `md.sys.color.on-secondary`              |

#### Pressed

| Element                                 | Token                                                            | Value                                      |
| --------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------ |
| State layer color                       | `md.comp.icon-button.tonal.pressed.state-layer.color`            | `md.sys.color.on-secondary-container`      |
| State layer color — toggle (unselected) | `md.comp.icon-button.tonal.unselected.pressed.state-layer.color` | `md.sys.color.on-secondary-container`      |
| State layer color — toggle (selected)   | `md.comp.icon-button.tonal.selected.pressed.state-layer.color`   | `md.sys.color.on-secondary`                |
| State layer opacity                     | `md.comp.icon-button.tonal.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Icon color                              | `md.comp.icon-button.tonal.pressed.icon.color`                   | `md.sys.color.on-secondary-container`      |
| Icon color — toggle (unselected)        | `md.comp.icon-button.tonal.unselected.pressed.icon.color`        | `md.sys.color.on-secondary-container`      |
| Icon color — toggle (selected)          | `md.comp.icon-button.tonal.selected.pressed.icon.color`          | `md.sys.color.on-secondary`                |

### Outlined

#### Enabled

| Element                             | Token                                                   | Value                             |
| ----------------------------------- | ------------------------------------------------------- | --------------------------------- |
| Outline color                       | `md.comp.icon-button.outlined.outline.color`            | `md.sys.color.outline-variant`    |
| Outline color — toggle (unselected) | `md.comp.icon-button.outlined.unselected.outline.color` | `md.sys.color.outline-variant`    |
| Container color — toggle (selected) | `md.comp.icon-button.outlined.selected.container.color` | `md.sys.color.inverse-surface`    |
| Icon color                          | `md.comp.icon-button.outlined.icon.color`               | `md.sys.color.on-surface-variant` |
| Icon color — toggle (unselected)    | `md.comp.icon-button.outlined.unselected.icon.color`    | `md.sys.color.on-surface-variant` |
| Icon color — toggle (selected)      | `md.comp.icon-button.outlined.selected.icon.color`      | `md.sys.color.inverse-on-surface` |

#### Disabled

| Element                      | Token                                                              | Value                          |
| ---------------------------- | ------------------------------------------------------------------ | ------------------------------ |
| Outline color                | `md.comp.icon-button.outlined.disabled.outline.color`              | `md.sys.color.outline-variant` |
| Outline color (unselected)   | `md.comp.icon-button.outlined.unselected.disabled.outline.color`   | `md.sys.color.outline-variant` |
| Container color (selected)   | `md.comp.icon-button.outlined.selected.disabled.container.color`   | `md.sys.color.on-surface`      |
| Container opacity (selected) | `md.comp.icon-button.outlined.selected.disabled.container.opacity` | 0.1                            |
| Icon color                   | `md.comp.icon-button.outlined.disabled.icon.color`                 | `md.sys.color.on-surface`      |
| Icon opacity                 | `md.comp.icon-button.outlined.disabled.icon.opacity`               | 0.38                           |

#### Hovered

| Element                                 | Token                                                               | Value                                    |
| --------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------- |
| State layer color                       | `md.comp.icon-button.outlined.hovered.state-layer.color`            | `md.sys.color.on-surface-variant`        |
| State layer color — toggle (unselected) | `md.comp.icon-button.outlined.unselected.hovered.state-layer.color` | `md.sys.color.on-surface-variant`        |
| State layer color — toggle (selected)   | `md.comp.icon-button.outlined.selected.hovered.state-layer.color`   | `md.sys.color.inverse-on-surface`        |
| State layer opacity                     | `md.comp.icon-button.outlined.hovered.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Icon color                              | `md.comp.icon-button.outlined.hovered.icon.color`                   | `md.sys.color.on-surface-variant`        |
| Icon color — toggle (unselected)        | `md.comp.icon-button.outlined.unselected.hovered.icon.color`        | `md.sys.color.on-surface-variant`        |
| Icon color — toggle (selected)          | `md.comp.icon-button.outlined.selected.hovered.icon.color`          | `md.sys.color.inverse-on-surface`        |

#### Focused

| Element                                 | Token                                                               | Value                                    |
| --------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------- |
| State layer color                       | `md.comp.icon-button.outlined.focused.state-layer.color`            | `md.sys.color.on-surface-variant`        |
| State layer color — toggle (unselected) | `md.comp.icon-button.outlined.unselected.focused.state-layer.color` | `md.sys.color.on-surface-variant`        |
| State layer color — toggle (selected)   | `md.comp.icon-button.outlined.selected.focused.state-layer.color`   | `md.sys.color.inverse-on-surface`        |
| State layer opacity                     | `md.comp.icon-button.outlined.focused.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |
| Icon color                              | `md.comp.icon-button.outlined.focused.icon.color`                   | `md.sys.color.on-surface-variant`        |
| Icon color — toggle (unselected)        | `md.comp.icon-button.outlined.unselected.focused.icon.color`        | `md.sys.color.on-surface-variant`        |
| Icon color — toggle (selected)          | `md.comp.icon-button.outlined.selected.focused.icon.color`          | `md.sys.color.inverse-on-surface`        |

#### Pressed

| Element                                 | Token                                                               | Value                                      |
| --------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| State layer color                       | `md.comp.icon-button.outlined.pressed.state-layer.color`            | `md.sys.color.on-surface-variant`          |
| State layer color — toggle (unselected) | `md.comp.icon-button.outlined.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant`          |
| State layer color — toggle (selected)   | `md.comp.icon-button.outlined.selected.pressed.state-layer.color`   | `md.sys.color.inverse-on-surface`          |
| State layer opacity                     | `md.comp.icon-button.outlined.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Icon color                              | `md.comp.icon-button.outlined.pressed.icon.color`                   | `md.sys.color.on-surface-variant`          |
| Icon color — toggle (unselected)        | `md.comp.icon-button.outlined.unselected.pressed.icon.color`        | `md.sys.color.on-surface-variant`          |
| Icon color — toggle (selected)          | `md.comp.icon-button.outlined.selected.pressed.icon.color`          | `md.sys.color.inverse-on-surface`          |

### Standard

#### Enabled

| Element                          | Token                                                | Value                             |
| -------------------------------- | ---------------------------------------------------- | --------------------------------- |
| Icon color                       | `md.comp.icon-button.standard.icon.color`            | `md.sys.color.on-surface-variant` |
| Icon color — toggle (unselected) | `md.comp.icon-button.standard.unselected.icon.color` | `md.sys.color.on-surface-variant` |
| Icon color — toggle (selected)   | `md.comp.icon-button.standard.selected.icon.color`   | `md.sys.color.primary`            |

#### Disabled

| Element      | Token                                                | Value                     |
| ------------ | ---------------------------------------------------- | ------------------------- |
| Icon color   | `md.comp.icon-button.standard.disabled.icon.color`   | `md.sys.color.on-surface` |
| Icon opacity | `md.comp.icon-button.standard.disabled.icon.opacity` | 0.38                      |

#### Hovered

| Element                                 | Token                                                               | Value                                    |
| --------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------- |
| State layer color                       | `md.comp.icon-button.standard.hovered.state-layer.color`            | `md.sys.color.on-surface-variant`        |
| State layer color — toggle (unselected) | `md.comp.icon-button.standard.unselected.hovered.state-layer.color` | `md.sys.color.on-surface-variant`        |
| State layer color — toggle (selected)   | `md.comp.icon-button.standard.selected.hovered.state-layer.color`   | `md.sys.color.primary`                   |
| State layer opacity                     | `md.comp.icon-button.standard.hovered.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Icon color                              | `md.comp.icon-button.standard.hovered.icon.color`                   | `md.sys.color.on-surface-variant`        |
| Icon color — toggle (unselected)        | `md.comp.icon-button.standard.unselected.hovered.icon.color`        | `md.sys.color.on-surface-variant`        |
| Icon color — toggle (selected)          | `md.comp.icon-button.standard.selected.hovered.icon.color`          | `md.sys.color.primary`                   |

#### Focused

| Element                                 | Token                                                               | Value                                    |
| --------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------- |
| State layer color                       | `md.comp.icon-button.standard.focused.state-layer.color`            | `md.sys.color.on-surface-variant`        |
| State layer color — toggle (unselected) | `md.comp.icon-button.standard.unselected.focused.state-layer.color` | `md.sys.color.on-surface-variant`        |
| State layer color — toggle (selected)   | `md.comp.icon-button.standard.selected.focused.state-layer.color`   | `md.sys.color.primary`                   |
| State layer opacity                     | `md.comp.icon-button.standard.focused.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |
| Icon color                              | `md.comp.icon-button.standard.focused.icon.color`                   | `md.sys.color.on-surface-variant`        |
| Icon color — toggle (unselected)        | `md.comp.icon-button.standard.unselected.focused.icon.color`        | `md.sys.color.on-surface-variant`        |
| Icon color — toggle (selected)          | `md.comp.icon-button.standard.selected.focused.icon.color`          | `md.sys.color.primary`                   |

#### Pressed

| Element                                 | Token                                                               | Value                                      |
| --------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| State layer color                       | `md.comp.icon-button.standard.pressed.state-layer.color`            | `md.sys.color.on-surface-variant`          |
| State layer color — toggle (unselected) | `md.comp.icon-button.standard.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant`          |
| State layer color — toggle (selected)   | `md.comp.icon-button.standard.selected.pressed.state-layer.color`   | `md.sys.color.primary`                     |
| State layer opacity                     | `md.comp.icon-button.standard.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Icon color                              | `md.comp.icon-button.standard.pressed.icon.color`                   | `md.sys.color.on-surface-variant`          |
| Icon color — toggle (unselected)        | `md.comp.icon-button.standard.unselected.pressed.icon.color`        | `md.sys.color.on-surface-variant`          |
| Icon color — toggle (selected)          | `md.comp.icon-button.standard.selected.pressed.icon.color`          | `md.sys.color.primary`                     |

---

## Interaction States

States are visual cues that communicate component status. State layers slightly alter button color. Disabled states use different base colors and reduced opacity.

### Filled button states

#### Default

![5 states of filled icon button: enabled, disabled, hovered, focused, pressed](https://lh3.googleusercontent.com/f_CiuCyosU5CvebQEKN5zF51JfbHKIee5oqSFrP2od51IfqDJ3SLx35_e9J-heZw83g2JpUqslKhGoeMeZfW-wcc0zeBqKRkbVzZ7249PjU=s0)

#### Toggle

![5 states of filled toggle icon button](https://lh3.googleusercontent.com/Sv4DWzeNFz0bHgKddC2o6jcm4_Mg65zw0e9QF5y_PHOChQFHOkMGw_c05fE1srSoY50_RoTis4N2-bKguC9xAl8oGJaDeQGTOWWXI7SehwOD=s0)

### Tonal button states

#### Default

![5 states of tonal icon button](https://lh3.googleusercontent.com/tgEuyiPL-Ux4Egj4kNTjvchlPIoplTaK_XukYj-4rC8T0MY8-7lsHzNq6wVpithFm43UqjQC-Ymy9Ek9CRxqm6805RePIN3eVccZY_92YFf8SA=s0)

#### Toggle

![5 states of tonal toggle icon button](https://lh3.googleusercontent.com/3K-szMHugOwyybK3LjFoitWWxa6kcW8TKvzoBTvLDYFKK2hePutHe3uPnaZlY9-87q4g-CJ_cNUXZJF4SaZs44JyIk2K5RtADtMViVDZn-M=s0)

### Outlined button states

#### Default

![5 states of outlined icon button](https://lh3.googleusercontent.com/yinTmVHDt3kOx1KIpfsX9V_-EkqnaUvj7hBjMWu90VQ3MgbEsjFJFPlV_-i4k9ACyP1Vt4uJMABCGejEbVBWDjKzhfkR9vpVrLhYJHB01srG=s0)

#### Toggle

![5 states of outlined toggle icon button](https://lh3.googleusercontent.com/BcxmjH6ecztV2npud8AveNazSZr__0H66nlq-j3xggQLcQvKLxLCXDbyXs13fVtB-A3l_zU1wq8aY84brugu8Mrtr2L_PRvoJBtDUAWT0-1H8w=s0)

### Standard icon button states

The standard icon button's container is invisible at rest, only visible when the state layer is applied.

#### Default

![5 states of standard icon button](https://lh3.googleusercontent.com/dwZOlhE1Y0s7U-eyHTYVA9aLYhUf9oSQBoay9bRBmlE-yPvG59Cu80jkcB3VNU6876dcNy34dIYjt_OCu5vwgkNcpiB104tJ89iIK72pYSk=s0)

#### Toggle

![5 states of standard toggle icon button](https://lh3.googleusercontent.com/Saes8VH33LRUx0xEd2BgfqFb39GzpjdT-z4HRzdjv3hST24J--BeF4JV_r0do5wk4jbPBb-AsSLMeWqIp9y8y8W8Jfa5zAJeK2WrBKNp4UE=s0)

All variants share the same state layer percentages:

| #   | State    | Visual change            |
| --- | -------- | ------------------------ |
| 1   | Enabled  | Base colors              |
| 2   | Disabled | 10% opacity on container |
| 3   | Hovered  | 8% state layer           |
| 4   | Focused  | 10% state layer          |
| 5   | Pressed  | 10% state layer          |

---

## Accessibility

### Contrast

The icon must have at least **3:1** contrast ratio with the surface or background.

<table><tr>
<td><img src="https://lh3.googleusercontent.com/sxEm_qQA7j39jtqbpiH6Lnec5G_ZIJs-b8cWfSYYldZIAEjGTT52yeEfaF8M1HLTZCe0_0zqKfBBPGW9s6i9C0qFg75AEtWXiQmEzv4VVEEozQ=s0" /><br/><b>Do:</b> Icon buttons should have a 3:1 contrast ratio with the surface or background</td>
<td><img src="https://lh3.googleusercontent.com/FqCMh3l6_zJ396vQUK3U2--BcmNuXzVzQHPsd2a9kOXz6CjN4pE_mugSVMkSsZep6dHnnmhA-1_JIycaz0vxATA36JS_voTYg8Fc_zJDH_5f=s0" /><br/><b>Don't:</b> Avoid using colors with contrast below 3:1</td>
</tr></table>

### Keyboard Navigation

| Key            | Action                                    |
| -------------- | ----------------------------------------- |
| Tab            | Focus lands on (non-disabled) icon button |
| Space or Enter | Activates the (non-disabled) icon button  |

### Labeling

The accessibility label describes the **action** the button performs (e.g., "Add to favorites", "Bookmark", "Send message"), not the icon name.

![The icon button label describes the action, such as Add to favorites for the heart icon](https://lh3.googleusercontent.com/Veran4xIuwOjaUK-TME0CkyE4D03sjgbC1O1fGyyeie01_pz6s0p7PoibSPSPzTNT7bmFKJy4kG40AnFtMviria4wR7kDBMlNQI6OuqqES8tBQ=s0)

### Layout & Density

Icon buttons can be grouped inside components or stand alone. The touch target of each icon button should be at least **48×48dp**, even when nested in other components. Do not apply density reductions by default — only provide density options that let users choose a denser layout, and ensure density controls themselves maintain a 48×48dp target.

![Icon buttons can be used within other components, such as an app bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c1h7ba-4.png?alt=media&token=79849c70-99e3-4433-8616-05d06808a57b=s0)

### Hover (web)

On web, icon buttons should display a tooltip with the accessibility label on hover.

!["Heart" icon with "Add to favorites" tooltip on hover](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c1j2b9-5.png?alt=media&token=244efcd1-5b55-496d-a4bb-9bc97593fbd9=s0)

---

## Deprecated Baseline Tokens

The following token sets are from the pre-Expressive M3 spec. They use a different naming convention (`md.comp.filled-icon-button.*` vs. the current `md.comp.icon-button.filled.*`). Filled, tonal, and outlined baseline tokens are no longer recommended — use the current tokens above.

### [Deprecated] Filled

#### Enabled — Container

| Name                       | Token                                                   | Value                                    |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------- |
| Container size             | `md.comp.filled-icon-button.container.size`             | 40dp                                     |
| Container width            | `md.comp.filled-icon-button.container.width`            | 40dp                                     |
| Container height           | `md.comp.filled-icon-button.container.height`           | 40dp                                     |
| Container shape            | `md.comp.filled-icon-button.container.shape`            | `md.sys.shape.corner.full`               |
| Container color            | `md.comp.filled-icon-button.container.color`            | `md.sys.color.primary`                   |
| Unselected container color | `md.comp.filled-icon-button.unselected.container.color` | `md.sys.color.surface-container-highest` |
| Selected container color   | `md.comp.filled-icon-button.selected.container.color`   | `md.sys.color.primary`                   |

#### Enabled — Icon

| Name                         | Token                                                     | Value                     |
| ---------------------------- | --------------------------------------------------------- | ------------------------- |
| Icon size                    | `md.comp.filled-icon-button.icon.size`                    | 24dp                      |
| Icon color                   | `md.comp.filled-icon-button.icon.color`                   | `md.sys.color.on-primary` |
| Toggle unselected icon color | `md.comp.filled-icon-button.toggle.unselected.icon.color` | `md.sys.color.primary`    |
| Toggle selected icon color   | `md.comp.filled-icon-button.toggle.selected.icon.color`   | `md.sys.color.on-primary` |

#### Disabled — Container

| Name                       | Token                                                   | Value                     |
| -------------------------- | ------------------------------------------------------- | ------------------------- |
| Disabled container color   | `md.comp.filled-icon-button.disabled.container.color`   | `md.sys.color.on-surface` |
| Disabled container opacity | `md.comp.filled-icon-button.disabled.container.opacity` | 0.12                      |

#### Disabled — Icon

| Name                  | Token                                              | Value                     |
| --------------------- | -------------------------------------------------- | ------------------------- |
| Disabled icon color   | `md.comp.filled-icon-button.disabled.icon.color`   | `md.sys.color.on-surface` |
| Disabled icon opacity | `md.comp.filled-icon-button.disabled.icon.opacity` | 0.38                      |

#### Hovered — State layer

| Name                                      | Token                                                                  | Value                                    |
| ----------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| Hover state layer opacity                 | `md.comp.filled-icon-button.hover.state-layer.opacity`                 | `md.sys.state.hover.state-layer-opacity` |
| Hover state layer color                   | `md.comp.filled-icon-button.hover.state-layer.color`                   | `md.sys.color.on-primary`                |
| Toggle unselected hover state layer color | `md.comp.filled-icon-button.toggle.unselected.hover.state-layer.color` | `md.sys.color.primary`                   |
| Toggle selected hover state layer color   | `md.comp.filled-icon-button.toggle.selected.hover.state-layer.color`   | `md.sys.color.on-primary`                |

#### Hovered — Icon

| Name                               | Token                                                           | Value                     |
| ---------------------------------- | --------------------------------------------------------------- | ------------------------- |
| Hover icon color                   | `md.comp.filled-icon-button.hover.icon.color`                   | `md.sys.color.on-primary` |
| Toggle unselected hover icon color | `md.comp.filled-icon-button.toggle.unselected.hover.icon.color` | `md.sys.color.primary`    |
| Toggle selected hover icon color   | `md.comp.filled-icon-button.toggle.selected.hover.icon.color`   | `md.sys.color.on-primary` |

#### Focused — Focus indicator

| Name                      | Token                                                       | Value                                       |
| ------------------------- | ----------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color     | `md.comp.filled-icon-button.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Focus indicator thickness | `md.comp.filled-icon-button.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset    | `md.comp.filled-icon-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

#### Focused — State layer

| Name                                      | Token                                                                  | Value                                    |
| ----------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| Focus state layer opacity                 | `md.comp.filled-icon-button.focus.state-layer.opacity`                 | `md.sys.state.focus.state-layer-opacity` |
| Focus state layer color                   | `md.comp.filled-icon-button.focus.state-layer.color`                   | `md.sys.color.on-primary`                |
| Toggle unselected focus state layer color | `md.comp.filled-icon-button.toggle.unselected.focus.state-layer.color` | `md.sys.color.primary`                   |
| Toggle selected focus state layer color   | `md.comp.filled-icon-button.toggle.selected.focus.state-layer.color`   | `md.sys.color.on-primary`                |

#### Focused — Icon

| Name                               | Token                                                           | Value                     |
| ---------------------------------- | --------------------------------------------------------------- | ------------------------- |
| Focus icon color                   | `md.comp.filled-icon-button.focus.icon.color`                   | `md.sys.color.on-primary` |
| Toggle unselected focus icon color | `md.comp.filled-icon-button.toggle.unselected.focus.icon.color` | `md.sys.color.primary`    |
| Toggle selected focus icon color   | `md.comp.filled-icon-button.toggle.selected.focus.icon.color`   | `md.sys.color.on-primary` |

#### Pressed — State layer

| Name                                        | Token                                                                    | Value                                      |
| ------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------ |
| Pressed state layer opacity                 | `md.comp.filled-icon-button.pressed.state-layer.opacity`                 | `md.sys.state.pressed.state-layer-opacity` |
| Pressed state layer color                   | `md.comp.filled-icon-button.pressed.state-layer.color`                   | `md.sys.color.on-primary`                  |
| Toggle unselected pressed state layer color | `md.comp.filled-icon-button.toggle.unselected.pressed.state-layer.color` | `md.sys.color.primary`                     |
| Toggle selected pressed state layer color   | `md.comp.filled-icon-button.toggle.selected.pressed.state-layer.color`   | `md.sys.color.on-primary`                  |

#### Pressed — Icon

| Name                                 | Token                                                             | Value                     |
| ------------------------------------ | ----------------------------------------------------------------- | ------------------------- |
| Pressed icon color                   | `md.comp.filled-icon-button.pressed.icon.color`                   | `md.sys.color.on-primary` |
| Toggle unselected pressed icon color | `md.comp.filled-icon-button.toggle.unselected.pressed.icon.color` | `md.sys.color.primary`    |
| Toggle selected pressed icon color   | `md.comp.filled-icon-button.toggle.selected.pressed.icon.color`   | `md.sys.color.on-primary` |

### [Deprecated] Tonal

#### Enabled — Container

| Name                       | Token                                                         | Value                                    |
| -------------------------- | ------------------------------------------------------------- | ---------------------------------------- |
| Container size             | `md.comp.filled-tonal-icon-button.container.size`             | 40dp                                     |
| Container width            | `md.comp.filled-tonal-icon-button.container.width`            | 40dp                                     |
| Container height           | `md.comp.filled-tonal-icon-button.container.height`           | 40dp                                     |
| Container shape            | `md.comp.filled-tonal-icon-button.container.shape`            | `md.sys.shape.corner.full`               |
| Container color            | `md.comp.filled-tonal-icon-button.container.color`            | `md.sys.color.secondary-container`       |
| Unselected container color | `md.comp.filled-tonal-icon-button.unselected.container.color` | `md.sys.color.surface-container-highest` |
| Selected container color   | `md.comp.filled-tonal-icon-button.selected.container.color`   | `md.sys.color.secondary-container`       |

#### Enabled — Icon

| Name                         | Token                                                           | Value                                 |
| ---------------------------- | --------------------------------------------------------------- | ------------------------------------- |
| Icon size                    | `md.comp.filled-tonal-icon-button.icon.size`                    | 24dp                                  |
| Icon color                   | `md.comp.filled-tonal-icon-button.icon.color`                   | `md.sys.color.on-secondary-container` |
| Toggle unselected icon color | `md.comp.filled-tonal-icon-button.toggle.unselected.icon.color` | `md.sys.color.on-surface-variant`     |
| Toggle selected icon color   | `md.comp.filled-tonal-icon-button.toggle.selected.icon.color`   | `md.sys.color.on-secondary-container` |

#### Disabled — Container

| Name                       | Token                                                         | Value                     |
| -------------------------- | ------------------------------------------------------------- | ------------------------- |
| Disabled container color   | `md.comp.filled-tonal-icon-button.disabled.container.color`   | `md.sys.color.on-surface` |
| Disabled container opacity | `md.comp.filled-tonal-icon-button.disabled.container.opacity` | 0.12                      |

#### Disabled — Icon

| Name                  | Token                                                    | Value                     |
| --------------------- | -------------------------------------------------------- | ------------------------- |
| Disabled icon color   | `md.comp.filled-tonal-icon-button.disabled.icon.color`   | `md.sys.color.on-surface` |
| Disabled icon opacity | `md.comp.filled-tonal-icon-button.disabled.icon.opacity` | 0.38                      |

#### Hovered — State layer

| Name                                      | Token                                                                        | Value                                    |
| ----------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------- |
| Hover state layer color                   | `md.comp.filled-tonal-icon-button.hover.state-layer.color`                   | `md.sys.color.on-secondary-container`    |
| Toggle unselected hover state layer color | `md.comp.filled-tonal-icon-button.toggle.unselected.hover.state-layer.color` | `md.sys.color.on-surface-variant`        |
| Toggle selected hover state layer color   | `md.comp.filled-tonal-icon-button.toggle.selected.hover.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| Hover state layer opacity                 | `md.comp.filled-tonal-icon-button.hover.state-layer.opacity`                 | `md.sys.state.hover.state-layer-opacity` |

#### Hovered — Icon

| Name                               | Token                                                                 | Value                                 |
| ---------------------------------- | --------------------------------------------------------------------- | ------------------------------------- |
| Hover icon color                   | `md.comp.filled-tonal-icon-button.hover.icon.color`                   | `md.sys.color.on-secondary-container` |
| Toggle unselected hover icon color | `md.comp.filled-tonal-icon-button.toggle.unselected.hover.icon.color` | `md.sys.color.on-surface-variant`     |
| Toggle selected hover icon color   | `md.comp.filled-tonal-icon-button.toggle.selected.hover.icon.color`   | `md.sys.color.on-secondary-container` |

#### Focused — Focus indicator

| Name                      | Token                                                             | Value                                       |
| ------------------------- | ----------------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color     | `md.comp.filled-tonal-icon-button.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Focus indicator thickness | `md.comp.filled-tonal-icon-button.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset    | `md.comp.filled-tonal-icon-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

#### Focused — State layer

| Name                                      | Token                                                                        | Value                                    |
| ----------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------- |
| Focus state layer opacity                 | `md.comp.filled-tonal-icon-button.focus.state-layer.opacity`                 | `md.sys.state.focus.state-layer-opacity` |
| Focus state layer color                   | `md.comp.filled-tonal-icon-button.focus.state-layer.color`                   | `md.sys.color.on-secondary-container`    |
| Toggle unselected focus state layer color | `md.comp.filled-tonal-icon-button.toggle.unselected.focus.state-layer.color` | `md.sys.color.on-surface-variant`        |
| Toggle selected focus state layer color   | `md.comp.filled-tonal-icon-button.toggle.selected.focus.state-layer.color`   | `md.sys.color.on-secondary-container`    |

#### Focused — Icon

| Name                               | Token                                                                 | Value                                 |
| ---------------------------------- | --------------------------------------------------------------------- | ------------------------------------- |
| Focus icon color                   | `md.comp.filled-tonal-icon-button.focus.icon.color`                   | `md.sys.color.on-secondary-container` |
| Toggle unselected focus icon color | `md.comp.filled-tonal-icon-button.toggle.unselected.focus.icon.color` | `md.sys.color.on-surface-variant`     |
| Toggle selected focus icon color   | `md.comp.filled-tonal-icon-button.toggle.selected.focus.icon.color`   | `md.sys.color.on-secondary-container` |

#### Pressed — State layer

| Name                                        | Token                                                                          | Value                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------ |
| Pressed state layer opacity                 | `md.comp.filled-tonal-icon-button.pressed.state-layer.opacity`                 | `md.sys.state.pressed.state-layer-opacity` |
| Pressed state layer color                   | `md.comp.filled-tonal-icon-button.pressed.state-layer.color`                   | `md.sys.color.on-secondary-container`      |
| Toggle unselected pressed state layer color | `md.comp.filled-tonal-icon-button.toggle.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant`          |
| Toggle selected pressed state layer color   | `md.comp.filled-tonal-icon-button.toggle.selected.pressed.state-layer.color`   | `md.sys.color.on-secondary-container`      |

#### Pressed — Icon

| Name                                 | Token                                                                   | Value                                 |
| ------------------------------------ | ----------------------------------------------------------------------- | ------------------------------------- |
| Pressed icon color                   | `md.comp.filled-tonal-icon-button.pressed.icon.color`                   | `md.sys.color.on-secondary-container` |
| Toggle unselected pressed icon color | `md.comp.filled-tonal-icon-button.toggle.unselected.pressed.icon.color` | `md.sys.color.on-surface-variant`     |
| Toggle selected pressed icon color   | `md.comp.filled-tonal-icon-button.toggle.selected.pressed.icon.color`   | `md.sys.color.on-secondary-container` |

### [Deprecated] Outlined

#### Enabled — Container

| Name                     | Token                                              | Value                          |
| ------------------------ | -------------------------------------------------- | ------------------------------ |
| Container size           | `md.outlined-icon-button.container.size`           | 40dp                           |
| Container width          | `md.outlined-icon-button.container.width`          | 40dp                           |
| Container height         | `md.outlined-icon-button.container.height`         | 40dp                           |
| Container shape          | `md.outlined-icon-button.container.shape`          | `md.sys.shape.corner.full`     |
| Selected container color | `md.outlined-icon-button.selected.container.color` | `md.sys.color.inverse-surface` |

#### Enabled — Outline

| Name                     | Token                                              | Value                  |
| ------------------------ | -------------------------------------------------- | ---------------------- |
| Unselected outline color | `md.outlined-icon-button.unselected.outline.color` | `md.sys.color.outline` |
| Unselected outline width | `md.outlined-icon-button.unselected.outline.width` | 1dp                    |

#### Enabled — Icon

| Name                  | Token                                           | Value                             |
| --------------------- | ----------------------------------------------- | --------------------------------- |
| Icon size             | `md.outlined-icon-button.icon.size`             | 24dp                              |
| Unselected icon color | `md.outlined-icon-button.unselected.icon.color` | `md.sys.color.on-surface-variant` |
| Selected icon color   | `md.outlined-icon-button.selected.icon.color`   | `md.sys.color.inverse-on-surface` |

#### Disabled — Container

| Name                                | Token                                                         | Value                     |
| ----------------------------------- | ------------------------------------------------------------- | ------------------------- |
| Disabled selected container color   | `md.outlined-icon-button.disabled.selected.container.color`   | `md.sys.color.on-surface` |
| Disabled selected container opacity | `md.outlined-icon-button.disabled.selected.container.opacity` | 0.12                      |

#### Disabled — Icon

| Name                  | Token                                           | Value                     |
| --------------------- | ----------------------------------------------- | ------------------------- |
| Disabled icon color   | `md.outlined-icon-button.disabled.icon.color`   | `md.sys.color.on-surface` |
| Disabled icon opacity | `md.outlined-icon-button.disabled.icon.opacity` | 0.38                      |

#### Disabled — Outline

| Name                                | Token                                                         | Value                     |
| ----------------------------------- | ------------------------------------------------------------- | ------------------------- |
| Disabled unselected outline color   | `md.outlined-icon-button.disabled.unselected.outline.color`   | `md.sys.color.on-surface` |
| Disabled unselected outline opacity | `md.outlined-icon-button.disabled.unselected.outline.opacity` | 0.12                      |
| Disabled outline color              | `md.outlined-icon-button.disabled.outline.color`              | `md.sys.color.on-surface` |
| Disabled outline opacity            | `md.outlined-icon-button.disabled.outline.opacity`            | 0.12                      |

#### Hovered — State layer

| Name                               | Token                                                        | Value                                    |
| ---------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Hover state layer opacity          | `md.outlined-icon-button.hover.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Unselected hover state layer color | `md.outlined-icon-button.unselected.hover.state-layer.color` | `md.sys.color.on-surface-variant`        |
| Selected hover state layer color   | `md.outlined-icon-button.selected.hover.state-layer.color`   | `md.sys.color.inverse-on-surface`        |

#### Hovered — Icon

| Name                        | Token                                                 | Value                             |
| --------------------------- | ----------------------------------------------------- | --------------------------------- |
| Unselected hover icon color | `md.outlined-icon-button.unselected.hover.icon.color` | `md.sys.color.on-surface-variant` |
| Selected hover icon color   | `md.outlined-icon-button.selected.hover.icon.color`   | `md.sys.color.inverse-on-surface` |

#### Focused — Focus indicator

| Name                      | Token                                                    | Value                                       |
| ------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color     | `md.outlined-icon-button.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Focus indicator thickness | `md.outlined-icon-button.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset    | `md.outlined-icon-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

#### Focused — State layer

| Name                               | Token                                                        | Value                                    |
| ---------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Focus state layer opacity          | `md.outlined-icon-button.focus.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Unselected focus state layer color | `md.outlined-icon-button.unselected.focus.state-layer.color` | `md.sys.color.on-surface-variant`        |
| Selected focus state layer color   | `md.outlined-icon-button.selected.focus.state-layer.color`   | `md.sys.color.inverse-on-surface`        |

#### Focused — Icon

| Name                        | Token                                                 | Value                             |
| --------------------------- | ----------------------------------------------------- | --------------------------------- |
| Unselected focus icon color | `md.outlined-icon-button.unselected.focus.icon.color` | `md.sys.color.on-surface-variant` |
| Selected focus icon color   | `md.outlined-icon-button.selected.focus.icon.color`   | `md.sys.color.inverse-on-surface` |

#### Pressed — State layer

| Name                                 | Token                                                          | Value                                      |
| ------------------------------------ | -------------------------------------------------------------- | ------------------------------------------ |
| Pressed state layer opacity          | `md.outlined-icon-button.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Unselected pressed state layer color | `md.outlined-icon-button.unselected.pressed.state-layer.color` | `md.sys.color.on-surface`                  |
| Selected pressed state layer color   | `md.outlined-icon-button.selected.pressed.state-layer.color`   | `md.sys.color.inverse-on-surface`          |

#### Pressed — Icon

| Name                          | Token                                                   | Value                             |
| ----------------------------- | ------------------------------------------------------- | --------------------------------- |
| Unselected pressed icon color | `md.outlined-icon-button.unselected.pressed.icon.color` | `md.sys.color.on-surface`         |
| Selected pressed icon color   | `md.outlined-icon-button.selected.pressed.icon.color`   | `md.sys.color.inverse-on-surface` |

---

## M3 Expressive Update

**May 2025**

Icon buttons gained expanded configurations with M3 Expressive:

- **Sizes**: XS (32dp), S (40dp, default), M (56dp), L (96dp), XL (136dp) — previously only S
- **Shapes**: Round (default) and square — previously only round
- **Widths**: Default, narrow, wide — previously only default
- **Shape morphing**: Buttons morph when pressed (become more square) and when selected (round ↔ square toggle)
- **Button groups**: When placed in standard button groups, icon buttons interact with each other on press
- **Color styles** are now "configurations" rather than separate variants (filled, tonal, outlined, standard remain the same)

![Icon buttons can vary in size, shape, and width](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0by3xdg-2.png?alt=media&token=0e9b026c-d4c0-4e94-ad89-55a59618a51d=s0)

1. Five sizes
2. Two shapes
3. Three widths

## M2 → M3 Differences

- **Naming**: Icon buttons were called "toggle buttons" in M2. M3 introduces two variants: default and toggle.
- **Color**: New color mappings with dynamic color compatibility.

![Icon buttons were known as toggle buttons in M2](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0by5hfz-3.png?alt=media&token=9b34e493-6c33-4b8e-aa41-93e8045c9952=s0)

1. Default icon buttons
2. Toggle icon buttons
