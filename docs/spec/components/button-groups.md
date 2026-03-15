# Button Groups — M3 Component Reference

> Button groups organize buttons and add interactions between them.

Sources: [Overview](https://m3.material.io/components/button-groups/overview) · [Specs](https://m3.material.io/components/button-groups/specs) · [Guidelines](https://m3.material.io/components/button-groups/guidelines) · [Accessibility](https://m3.material.io/components/button-groups/accessibility)

---

## Variants

![Various colors and shapes of standard and connected button groups.](https://lh3.googleusercontent.com/Zlys4Fta71zY-GAiCcT-oqug62NMk2muBeMcrPxVq_ZyoZhWxZrY5QlyYMHMI8wb6GSstakH8BmszYQQIEMg14U8WI6cX4v1uKZ_jSFIIYJGZA=s0)

This is an **M3 Expressive** component. Connected button groups replace the baseline segmented button, which is no longer recommended.

| Variant                    | M3                                                                                        | M3 Expressive |
| -------------------------- | ----------------------------------------------------------------------------------------- | ------------- |
| **Standard button group**  | —                                                                                         | Available     |
| **Connected button group** | [More on segmented buttons](https://m3.material.io/components/segmented-buttons/overview) | Available     |

1. Standard button group
2. Connected button group

**Standard button groups** add interaction between adjacent buttons — when a button is selected or pressed, it changes width and shape, and adjacent buttons move and temporarily change width.

**Connected button groups** behave similarly but only affect the shape of the pressed/selected button, not adjacent buttons. They replace the segmented button for single-select, multi-select, and selection-required patterns.

![A standard button group and a segmented button group.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4sskpfx-1_alt.png?alt=media&token=9de29e7b-e0c9-442c-84df-2ad6a90d5f04=s0)

---

## Configurations

![Five sizes of button groups and two shapes of button groups.](https://lh3.googleusercontent.com/tXvGi5QNHXaEdYS0QIwTTJHGUdhlUv1s8dzEvt3yvdhs0CCvXGe3Y3bBOTJvHKv2VA3DPdHEWmLb9UAY_h5Gls6mTe6ihCadt0qIZbdLS7SY2g=s0)

1. Extra small
2. Small
3. Medium
4. Large
5. Extra large
6. Single-select and multi-select
7. Round and square

| Category      | Configuration                                   | M3                                                                                        | M3 Expressive |
| ------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------- |
| Size          | XS, S, M, L, XL                                 | —                                                                                         | Available     |
| Default shape | Round, square                                   | —                                                                                         | Available     |
| Selection     | Single-select, multi-select, selection-required | [More on segmented buttons](https://m3.material.io/components/segmented-buttons/overview) | Available     |

![Standard button group in 3 of 5 available sizes, and connected button group with icon buttons and common buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ca0qix-1.png?alt=media&token=36ca89da-91f7-443b-800d-a35bd8744481=s0)

---

## Anatomy

![1 element of a button group.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4sznpeh-5.png?alt=media&token=89308e1d-b40f-438e-a738-144e5a1e5f91=s0)

1. **Container** — invisible container that adds padding between buttons and modifies button shape. Does not contain buttons by default.

![The container outlined on both variants of button groups.](https://lh3.googleusercontent.com/909fUN1vEim33Fg-tzKVqEEl_EQRq_GsNWP9dPCSA181-jk63D2BmlLmh8pisBn2zBlyE581QGQUAggrzVLnD1e2dAv10jtBVs8_BMY5XsItOQ=s0)

### Common layouts

Buttons and icon buttons can be mixed and matched for different scenarios.

![4 common layouts of button groups.](https://lh3.googleusercontent.com/mB9JxUhRXlbUJhjAnZciD7yqHtJQpwyqJME-B-dTSOz6AQVQbdOHskFsAM7E60jDTOOPx9qjA7YiJt_46pxLrbnr8_wHmIAWBts0Nl1sd0IloA=s0)

1. Label buttons
2. Label buttons and icon buttons
3. Extra small icon buttons
4. Large icon buttons

### Container behavior

The **standard** container hugs the width of the buttons inside. Padding between buttons allows width and shape animation without disrupting the surrounding layout.

![The container hugs the buttons. Inner padding is highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0diztnf-6.png?alt=media&token=28a3ff83-8514-4da3-89e5-3b58ad18da74=s0)

The **connected** container should span the width of the page or surface it's placed on, expanding button widths inside. On larger windows, consider adding a maximum width to prevent the group from growing too wide.

![2 connected button groups spanning the same width on a screen, with margins.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dj3wcm-18-1.png?alt=media&token=5a3129d6-827b-4c8c-afe0-9a65aab4c44e=s0)

### Color

Button groups have no color properties of their own. They use the default button or toggle button color styles: filled, tonal, outlined, or elevated. Avoid standard icon buttons or text buttons, as they have no container treatment.

![4 color styles of button groups.](https://lh3.googleusercontent.com/9hbmv_ziBEblvbLNhjPIK994tZijzcHgGhHBn_z-e52FBeulOHrdGeVlk4y0G8YWkUVABgf5EvmfpWPJnsSxad4N_QjZ5bW-x3LJ4xRqO0s=s0)

1. Filled
2. Tonal
3. Outlined
4. Elevated

---

## Usage & When to Use

![A welcome screen with a colorful standard button group.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0di4v84-1.png?alt=media&token=7d455507-7409-4e76-96b8-78173e2a9533=s0)

### Standard button groups

Use standard button groups to add expressive interaction between adjacent buttons. When a button is selected:

- The selected button changes shape and width
- A selected toggle button also changes color
- Adjacent buttons move and temporarily change width

By default, all buttons in a standard group should be the same size (XS to XL) and shape (round or square).

- Only use multiple sizes in a group for hero moments — avoid mixing sizes frequently
- Only use a different shape when a button is selected, or to add meaning or contrast

<table><tr>
<td>

![A standard button group with 3 buttons of different colors but the same square shape.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0diaau3-same%20shapes.png?alt=media&token=816c3216-da8f-40f8-8de5-6fa595fca914=s0)

**Do:** Use the same shapes for buttons in a group. Vary other properties like width and color instead.

</td>
<td>

![A standard button group with 3 buttons, including a round primary button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dibcom-different%20shapes.png?alt=media&token=15528a66-dde7-4db9-bd01-29fc012f8257=s0)

**Caution:** Reserve shape differences in button groups for key interactions only.

</td>
</tr></table>

### Connected button groups

Use connected button groups for selecting options, switching views, or sorting elements. They should be used for single or multi-select patterns with toggle buttons. Avoid using a connected group when none of the buttons can be toggled.

![A shopping app with an option to choose the volume of an item using a connected button group.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dijxcq-16.png?alt=media&token=21003592-8d64-4c4f-a6b8-dd87c18ee5b5=s0)

![2 filters using connected button groups with single and multi-select patterns.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0diog82-18.png?alt=media&token=4dfe1ecc-7909-4b3f-acea-4d079824514d=s0)

Avoid mixing color styles in connected button groups — it makes selection and emphasis unclear.

![Connected button group with mixed color styles.](https://lh3.googleusercontent.com/eUF5jkygvsUgcQm3ey4C4f3n04x79AaJvSz9AmeLk9FBserFzb7VbHkTo316YyrAMQAv62NxJdQy0p7LWIONggFliGMGnjLUbSuFjulASYcx=s0)

**Don't:** Don't mix color styles in connected button groups.

---

## Behavior

### Selection & activation

**Standard button groups** add interaction between adjacent buttons when a button is selected or activated. This changes the width, shape, and padding of the selected button, which adjusts the width of buttons directly next to it.

**Connected button groups** don't affect adjacent buttons — they only modify the shape of the button being selected or activated.

### Pressed

When pressed, a button changes width and shape. In standard groups, pressing also affects the width of adjacent buttons. In connected groups, only the pressed button's shape changes.

### Selected

A selected button should change shape — from round to square, or square to round. A selected toggle button also changes color according to the [button specs](https://m3.material.io/components/buttons/specs).

---

## Interaction States

### Standard button group

![5 states of a standard button group.](https://lh3.googleusercontent.com/aFlIDRoOBPpH_0juuRNNpzCDwdsk1sTKvaRtESfeqWWahAhThlrR5CwfDfGsxyVl6TstDE2D65kxcCX4I4W1LMxy2Xo72zCHihJFD8-_m5pmBQ=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

When a toggle button is selected in a standard group, its shape changes between square and round. Color changes follow the [button specs](https://m3.material.io/components/buttons/specs).

![5 states of a standard button group with toggle buttons.](https://lh3.googleusercontent.com/81FApYiTXho8D7eyhKVzVF5qhIRk02bF6rEp6QoLXRtnuW94g2EoBt1EQLLK7h2vRiKsRbNHUyYa3OCvVQRVW3jGBVlkBqaiNrK6oiVZEIad1w=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

### Connected button group

Connected groups have different shape changes than standard groups. Selecting a button does not affect adjacent buttons.

![5 states of a connected button group.](https://lh3.googleusercontent.com/zh7Dh6_ChlGUt5mWmhDpY_dTPHFXlFOmdfy2AJEpn013_utxmX5it3VZuG3iyveqk3N3Pj07dV4a2XtWhOkmn4FbvwvuPHUVa0YYRuTa6WJ3vw=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

![4 states of a connected button group with toggle buttons.](https://lh3.googleusercontent.com/N09iT9pfuy2j_ZfeAqJIUzPo31zdiKwWd0P-BH5eVSj3QR3JWxULGnjVnTbavy0VNZX5lhBc9Dyw1NTBThW5rbaOUcJ25kePIXmYaKTB0Ikx=s0)

1. Enabled
2. Hovered
3. Focused
4. Pressed

---

## Measurements

### Standard button group

Standard groups apply padding between all buttons. The padding amount changes by button size to ensure a minimum accessible target size of 48dp. See [button specs](https://m3.material.io/components/buttons/specs) and [icon button specs](https://m3.material.io/components/icon-buttons/specs) for more detail.

![Standard button group padding measurements.](https://lh3.googleusercontent.com/RGY_WzbLD07B3K6DGITtC-0NcW5LQI1HS1L-g0O4Lt0wttv2BWMZQWR2LqpG39dzWUHBNqCx12noXUfNGg2PKUhJVJcW-ndLNWd0LJ-H8wVW=s0)

| Size        | Padding between buttons |
| ----------- | ----------------------- |
| Extra small | 18dp                    |
| Small       | 12dp                    |
| Medium      | 8dp                     |
| Large       | 8dp                     |
| Extra large | 8dp                     |

### Connected button group

All connected button groups use 2dp padding between buttons for visual consistency.

**Round shape — corner radius by size:**

![Connected button group padding and corner radius measurements.](https://lh3.googleusercontent.com/tyj4mLRYzA86JWOUFPOV0mFMQxD7ckw1kX2zjPh0iOs4KV_jy6SCEtBmeQASzBTE9ULLNl0NY_jT32BX76pcZDRzLsRJ4PQgdvoi0IfOyLs=s0)

| Size        | Corner radius |
| ----------- | ------------- |
| Extra small | 4dp           |
| Small       | 8dp           |
| Medium      | 8dp           |
| Large       | 16dp          |
| Extra large | 20dp          |

**Square shape — corner radius by size:**

![Connected button group padding and corner radius measurements for square buttons.](https://lh3.googleusercontent.com/DiysV2VqS8bJV3jH34XtaPeeGGi2Svo6ZIFJhmjAeYH0zOw7-6P-5qgZeRy2A6CoXA2mgQ0WMXanpp3k0FqLX7ez6AhGTGnztpRBRiqQzND0=s0)

| Size        | Corner radius |
| ----------- | ------------- |
| Extra small | 4dp           |
| Small       | 8dp           |
| Medium      | 8dp           |
| Large       | 16dp          |
| Extra large | 20dp          |

### Minimum widths

Extra small and small connected button groups have 48dp target areas and a minimum width of 48dp.

![48x48dp accessible target areas on the XS and S connected button groups.](https://lh3.googleusercontent.com/3YpaF7-0WXRLTv6vxHgKCSJBsLTOFIaTw5JZ5795oi7393Y_y8hlC-gNbJh57zwFbM8SJ6VsaQMH9dVZW3E6RTF2ZtysUXJaufAilOko_hZV=s0)

1. Extra small
2. Small

---

## Tokens

Standard and connected button group tokens are organized by size. Individual button styling uses [button](https://m3.material.io/components/buttons/specs) and [icon button](https://m3.material.io/components/icon-buttons/specs) tokens.

### Standard — Extra small (Pressed)

| Name                                                | Token                                                                             | Value                                         |
| --------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------- |
| Button group xsmall pressed motion spring dampening | `md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.dampening` | `md.sys.motion.spring.fast.spatial.damping`   |
| Button group xsmall pressed motion spring stiffness | `md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` |
| Button group xsmall pressed width multiplier        | `md.comp.button-group.standard.xsmall.pressed.item.width.multiplier`              | 15%                                           |

### Standard — Small (Pressed)

| Name                                               | Token                                                                            | Value                                         |
| -------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------- |
| Button group small pressed motion spring dampening | `md.comp.button-group.standard.small.pressed.item.width.motion.spring.dampening` | `md.sys.motion.spring.fast.spatial.damping`   |
| Button group small pressed motion spring stiffness | `md.comp.button-group.standard.small.pressed.item.width.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` |
| Button group small pressed width multiplier        | `md.comp.button-group.standard.small.pressed.item.width.multiplier`              | 15%                                           |

### Standard — Medium (Pressed)

| Name                                                | Token                                                                             | Value                                         |
| --------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------- |
| Button group medium pressed motion spring dampening | `md.comp.button-group.standard.medium.pressed.item.width.motion.spring.dampening` | `md.sys.motion.spring.fast.spatial.damping`   |
| Button group medium pressed motion spring stiffness | `md.comp.button-group.standard.medium.pressed.item.width.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` |
| Button group medium pressed width multiplier        | `md.comp.button-group.standard.medium.pressed.item.width.multiplier`              | 15%                                           |

### Standard — Large (Pressed)

| Name                                               | Token                                                                            | Value                                         |
| -------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------- |
| Button group large pressed motion spring dampening | `md.comp.button-group.standard.large.pressed.item.width.motion.spring.dampening` | `md.sys.motion.spring.fast.spatial.damping`   |
| Button group large pressed motion spring stiffness | `md.comp.button-group.standard.large.pressed.item.width.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` |
| Button group large pressed width multiplier        | `md.comp.button-group.standard.large.pressed.item.width.multiplier`              | 15%                                           |

### Standard — Extra large (Pressed)

| Name                                                | Token                                                                             | Value                                         |
| --------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------- |
| Button group xlarge pressed motion spring dampening | `md.comp.button-group.standard.xlarge.pressed.item.width.motion.spring.dampening` | `md.sys.motion.spring.fast.spatial.damping`   |
| Button group xlarge pressed motion spring stiffness | `md.comp.button-group.standard.xlarge.pressed.item.width.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` |
| Button group xlarge pressed width multiplier        | `md.comp.button-group.standard.xlarge.pressed.item.width.multiplier`              | 15%                                           |

---

## Density

Button groups adapt to the density of the buttons inside. Height adjusts accordingly, including when density is applied.

![Connected button groups at 0, -1, -2, and -3 density.](https://lh3.googleusercontent.com/yW6GJfPC6vob2O0uaXXiMDGwKXMv7majvHsxv9MEQGBjXCtZg0YERe27DGduNwB1ofpRLw4evKy_CZWsciavxwo6bvOHrDwnL_tjvUGXmB6t=s0)

---

## Responsive / Adaptive Design

### Resizing

Button groups should remain in a single line — they should not wrap to a second line. Multiple button groups can be stacked vertically, but groups don't interact vertically.

Button groups and individual buttons support **fixed** or **flexible** resizing:

- **Fixed**: Manually define the button width (narrow to wide), size (XS to XL), or padding at each window size
- **Flexible**: Automatically increase or decrease button and group width. Groups grow until all flexible buttons reach their largest width

Avoid stretching icon buttons beyond the wide setting when adjusting button width manually.

![Two button groups adjusted to fit two different window sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djrht4-1.png?alt=media&token=07fada8f-eb2c-4d1a-a7f9-6e3bc8568a6e=s0)

In compact windows, use smaller, narrower buttons so all buttons fit. In large and extra large windows, use larger, wider buttons to fill available space. Flexible buttons adjust width automatically.

When scaling to larger windows, preserve the visual hierarchy of each button using color and size — the primary action should remain the most prominent button at all sizes.

### Presentation

Trailing-edge buttons can collapse into an overflow menu at smaller window sizes and become visible again at larger sizes. Place the overflow menu at the trailing end of the group. Buttons outside the group are not affected by button group behavior.

---

## Accessibility

### Use cases

People should be able to:

- Navigate to and interact with each button in the group using assistive technology
- Identify when buttons are selected

### Touch target

Each button must have a minimum 48×48dp target. Extra small and small button groups use larger inner padding to ensure accessible targets — avoid reducing padding at these sizes.

![Extra small and small button groups with 48x48dp target areas annotated.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dgm57d-tap%20targets.png?alt=media&token=cf93b998-0435-47db-9f91-0ad62e7362e6=s0)

1. Extra small button group
2. Small button group

### Initial focus

The button group container is not focusable. Initial focus should land on the first button, then move sequentially through each button.

![Focus order lands on the first button, then the next buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dgsbc6-focus.png?alt=media&token=5e86fe8a-b489-46d5-9b3f-9ce2fdb2d310=s0)

![Button group with keyboard navigation annotations.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dgutj5-keyboard%20nav.png?alt=media&token=34ed6f40-4477-4b3c-a39f-9c8e53631657=s0)

1. Initial focus
2. Selected button

### Keyboard Navigation

| Keys           | Actions                      |
| -------------- | ---------------------------- |
| Tab            | Navigates to the next button |
| Space or Enter | Activates the focused button |

### Labeling

The button group container does not need a label. Label each button individually following the standard button and icon button accessibility guidance.

![An email icon labelled "email" with role "button".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dh20ef-label.png?alt=media&token=a99c4ff1-098a-4c02-91fc-b8510e558d48=s0)

---

## Availability & Resources

| Type           | Resource                                                                                                                                          | Status      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Design         | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460)                                                                    | Available   |
| Implementation | [Jetpack Compose: Expressive](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#ButtonGroup)              | Available   |
|                | [MDC-Android: Expressive](https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#button-groups) | Available   |
|                | Web: Expressive                                                                                                                                   | Unavailable |

---

## M3 Expressive Update

Button groups were added in the **May 2025** M3 Expressive update. They apply shape, motion, and width changes to buttons and icon buttons for more interactive behavior.

- Added standard button group
- Added connected button group (replaces segmented button, which is no longer recommended)
- Works with all button sizes: XS, S, M, L, and XL
- Applies default shape to all buttons: round or square
