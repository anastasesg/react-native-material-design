# Sliders — M3 Component Reference

> Sliders let users make selections from a range of values.

Sources: [Overview](https://m3.material.io/components/sliders/overview) · [Specs](https://m3.material.io/components/sliders/specs) · [Guidelines](https://m3.material.io/components/sliders/guidelines) · [Accessibility](https://m3.material.io/components/sliders/accessibility)

---

## Variants

![3 variants of sliders.](https://lh3.googleusercontent.com/-UgZpnEJ6uET5STSdzpCWEydsoa9cfqtNAbzpuKX9-4jQ3d8IdU0EjRtpfgizjIX8I7XM-ETfXPEnfKi7XNZSQWJTTyKrLHjS95bsb6ZQc7smQ=s0)

1. **Standard** — selects a single value from a range. Use when the slider starts from zero or the beginning of a sequence.
2. **Centered** — selects a value from a positive-and-negative range. Use when zero (or the default) sits in the middle.
3. **Range** — uses two handles to define a minimum and maximum value.

| Variant  | M3                               | M3 Expressive                      |
| -------- | -------------------------------- | ---------------------------------- |
| Standard | Available as "continuous" slider | Available                          |
| Centered | Available (web only)             | Available                          |
| Range    | Available                        | Available                          |
| Discrete | Available                        | Available as "stops" configuration |

### Variant images

![Horizontal standard slider with an end stop indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk01w5-04.png?alt=media&token=6cd6a040-a82f-4ef7-8d4b-badc8c6eb27b=s0)

Horizontal standard slider

![Vertical standard slider with an end stop indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk1j0t-05.png?alt=media&token=3b884058-21ca-4d72-ba5e-5afdb59fa01e=s0)

Vertical standard slider

![Horizontal centered slider with a negative value and visible stop indicators at each end.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk3lyv-06.png?alt=media&token=eeb21a3d-5711-46a4-8751-5995fadab337=s0)

Horizontal centered slider

![Vertical centered slider with a negative value and visible stop indicators at each end.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk4tsn-07.png?alt=media&token=55d86dc7-7b06-47fa-9d1a-7ae9dff73c91=s0)

Vertical centered slider

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk6981-08.png?alt=media&token=67bf8680-0cc1-4109-aee0-b50e319a3ae9=s0" /><br/><b>Do:</b> Use range sliders horizontally</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7ln45vm-09%20-%20don't.png?alt=media&token=bb49eedd-2d76-45c9-99ab-8e9be6103673=s0" /><br/><b>Don't:</b> Avoid vertical range sliders — the two handles add cognitive load that makes vertical orientation difficult to use</td>
</tr></table>

---

## Anatomy

![6 elements of a slider.](https://lh3.googleusercontent.com/Tj-xqiQbRv2zhsiRQmk6ZkdhFwQgK6qEZx40m4TMy8W7B8ulEiPsHemm1KcY6ejMeYjYFnJF2GHGnWzVq-v8yDHTRon1k-oZGg9VuIa2C4Q=s0)

![6 elements of a slider (guidelines).](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7m553sk-04-1.png?alt=media&token=03f97ae2-c5e8-41b8-8416-ba8201534a1b=s0)

1. **Value indicator** (optional) — displays the current numeric value above the handle during interaction
2. **Stop indicators** (optional) — dots along the track marking predetermined selectable values; the handle snaps to the nearest stop
3. **Active track** — the filled portion from the minimum value (or range start) to the handle
4. **Handle** — the draggable element that selects a value; changes shape (narrows) when pressed
5. **Inactive track** — the unfilled portion from the handle to the maximum value
6. **Inset icon** (optional) — an icon within the track illustrating what the slider controls (M, L, XL sizes only)

### Track

The track represents the full selectable range and has two sections:

- **Active** — from the minimum value to the handle (or between two handles in a range slider)
- **Inactive** — from the handle to the maximum value (or outside both handles in a range slider)

For LTR languages values increase left-to-right; for RTL this is reversed.

![Sliders for font size and display size with stop indicators along the track.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk9dsb-11.png?alt=media&token=ac3c7b80-ec76-498e-931e-6f6b573be9c6=s0)

### Handle

The handle moves along the track to choose a value. Range sliders use two handles for min/max. The handle narrows when pressed to provide interaction feedback.

![The handle shrinks in width when selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkaurk-12.png?alt=media&token=8ee46da2-b5f5-4990-a851-44f5acaadba6=s0)

![2 unselected handles on a range slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkbdhm-13.png?alt=media&token=bc2bb7bf-9f18-4ff2-988b-34a85bdc8084=s0)

---

## Usage & When to Use

![Sound settings screen with sliders for call volume and alarm volume.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabg8tbj-02.png?alt=media&token=ada3febd-596c-46d4-ae20-0aa3b4228c1e=s0)

Sliders allow users to select a value along a continuous or discrete track. They work well for adjusting settings like volume, brightness, or filter intensity.

- Changes must take effect **immediately** — users should see the result as they drag
- Sliders should present the **full range** of available values
- Icons or labels can represent a numeric or relative scale
- If the value is shown elsewhere (e.g. a text input), the built-in value indicator is not required

A separate text input field can be paired with a slider to allow direct numeric entry. The slider and text field should stay in sync, and the text field should be the next Tab stop after the slider.

---

## Configurations

![Orientation and size configurations of sliders.](https://lh3.googleusercontent.com/PUKZpvA88_wvpKTUHRmGx0XIOjDEUAFWbO14A9AMUDyX-mu0w9qTo7ywQTKCcm8ERhdQHoohHwHt3Z-Tqo29eVw4_KyVf3pn-Z-UIcsszrYc=s0)

1. Orientation: Horizontal, vertical
2. Size: XS, S, M, L, XL

![Optional anatomy configurations of sliders.](https://lh3.googleusercontent.com/QFc1hXc78XHCuqhH4no1fQLDRvSzLaW1K8El5jIW1v3K3sNXjMquxEGcaq22u48Mq5kCqGRoPSCD7m8H37sAwyP_XyI6xY4AJp2GGW3e7-hs=s0)

1. Inset icon
2. Stops
3. Value indicator

| Category        | Configuration        | M3                             | M3 Expressive                                                       |
| --------------- | -------------------- | ------------------------------ | ------------------------------------------------------------------- |
| Inset icon      | No (default)         | Available                      | Available                                                           |
|                 | Yes                  | --                             | Available                                                           |
| Orientation     | Horizontal (default) | Available                      | Available                                                           |
|                 | Vertical             | --                             | Available                                                           |
| Size            | XS (default)         | Available                      | Available                                                           |
|                 | S, M, L, XL          | --                             | Available on MDC-Android. Available as tokens on other platforms.\* |
| Stop indicators | No (default), Yes    | Available as "discrete" slider | Available                                                           |
| Value Indicator | No (default), Yes    | Available                      | Available                                                           |

> \*Configurations only available using tokens don't have implemented presets in code. To change the size, swap the default size tokens `md.comp.slider.xsmall.[...]` with those of the desired size.

### Value indicator

![A value of 50 above a slider handle in the middle of the track.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1s2vu5-13.png?alt=media&token=94e8f2b1-9fac-4303-ab60-acb9e7a32bd9=s0)

The value indicator appears while the handle is being pressed or dragged, showing the exact numeric value at the handle's position.

![A value of 75 above the pressed range slider handle.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkclo7-14.png?alt=media&token=68ab779d-bed3-4d20-a2fb-e9f742ee269c=s0)

For range sliders, only one value indicator is shown at a time — whichever handle is being interacted with.

### Stop indicators

![Stop indicators equally spaced on a slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1s1ozg-10.png?alt=media&token=313ed48c-5478-4e59-9e89-4baf04fa38fd=s0)

Stop indicators mark predetermined selectable values. The handle snaps to the nearest stop when dragged. Avoid too many stops — visual crowding makes adjustment difficult. All sliders have stops at the end of the inactive track to ensure at least 3:1 contrast with the background; if the inactive track already meets that ratio, end stops can be removed.

![Plus and minus icons on each end of the slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkfou6-17.png?alt=media&token=1a441aac-51d1-452b-8a1a-ec87e9f5dafd=s0)

Icons or text outside the slider can indicate the range endpoints, and may serve as an alternative to stop indicators.

### Orientation

![Horizontal slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkhuu1-18.png?alt=media&token=9195aa36-4723-4ce8-91c3-c74694c2824e=s0)

Standard slider in horizontal orientation

![Vertical slider with zero at the bottom.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkj1b8-19.png?alt=media&token=09bb620d-8745-48b4-8b03-34cbdc78d9a2=s0)

Standard slider in vertical orientation

### Inset icon

Inset icons are available on **M, L, and XL** standard sliders only. The icon should illustrate what the slider controls. When the active track is too narrow (e.g. at a low value), the icon moves to the inactive track. Consider swapping the icon at zero (e.g. volume icon → mute icon).

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkmte8-20.png?alt=media&token=fef6e46e-5b1c-42fe-bf92-904ef3d1611a=s0" /><br/><b>Do:</b> Inset icons shift between active and inactive track based on handle position</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lni1k4-21%20-%20don't.png?alt=media&token=f36c7b22-9cce-489e-a73e-42d3a6dcae59=s0" /><br/><b>Don't:</b> Don't use inset icons on sliders with track height under 40dp (XS, S)</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lnlfie-22%20-%20don't.png?alt=media&token=2deb8b76-5ccd-4412-81ba-a098a903d102=s0" /><br/><b>Don't:</b> Don't use inset icons on centered sliders — unclear start position</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lnor7e-23%20-%20don't.png?alt=media&token=6de66860-09fe-425f-b6b9-c6aa960411cc=s0" /><br/><b>Don't:</b> Don't use inset icons on range sliders</td>
</tr></table>

### Size

![5 sizes of sliders.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkolpk-24.png?alt=media&token=f87a9fd7-2914-4706-bcce-9edf4814fbc1=s0)

1. **XS** — 16dp track height (default)
2. **S** — 24dp
3. **M** — 40dp
4. **L** — 56dp
5. **XL** — 96dp

Use larger sizes for bigger touch targets and greater visual emphasis. Active and inactive tracks must always be the same height.

![An XL slider for adjusting room temperature — the slider is the primary element on screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkr4j4-25.png?alt=media&token=e382cedc-e5ef-4cd5-9fd8-eb0dd4b0e729=s0)

Reserve XL sliders for hero moments where the slider is the most important element on the page.

---

## Behavior

### Select & drag

Dragging the handle smoothly adjusts the value. With stop indicators, the handle snaps to the closest stop during the drag.

### Select jump

Tapping any point on the track jumps the handle to that position. With stop indicators, the handle jumps to the nearest stop.

### Select & arrow (keyboard)

- **Tab** — focus lands on the handle
- **Arrow keys** — increase/decrease by one value or one stop
- **Space + Arrow keys** — increase/decrease by a larger interval

### Interaction feedback

The handle narrows in width when pressed or dragged, and the value indicator appears. On hover, the cursor changes.

---

## Measurements

![Common slider padding and size measurements.](https://lh3.googleusercontent.com/WLMws1Xen6XFUKvbCJS2NM4jwTMVmQxFlh8QhTslZGI-TR2eoFPXUp-ck8i0FhO_U2cy0cW5qnNP6Qkrsu1kJ-eztl1sJ_o5lHzXSUtr4FAMPw=s0)

Common slider padding and size measurements

![Slider padding and size measurements at each size, XS to XL.](https://lh3.googleusercontent.com/FH3TsHZ1NpVLh--XKKb2ygB9rd0bgZ6ig1vGxWhQu5HOFVbk_8CXIxMAVdJnPxKj3fojh8jFh6qDqm41tD0R3YRaK0luWcktoURO5RZfBsuO=s0)

Size measurements for XS through XL

| Attribute       | XS   | S    | M    | L    | XL    |
| --------------- | ---- | ---- | ---- | ---- | ----- |
| Track height    | 16dp | 24dp | 40dp | 56dp | 96dp  |
| Handle height   | 44dp | 44dp | 52dp | 68dp | 108dp |
| Handle width    | 4dp  | 4dp  | 4dp  | 4dp  | 4dp   |
| Track shape     | 8dp  | 8dp  | 12dp | 16dp | 28dp  |
| Inset icon size | --   | --   | 24dp | 24dp | 32dp  |

### Additional common measurements

| Attribute                           | Value |
| ----------------------------------- | ----- |
| Label container height              | 28dp  |
| Label container width               | 48dp  |
| Stop indicator size                 | 4dp   |
| Stop indicator trailing space       | 4dp   |
| Handle leading space (active)       | 6dp   |
| Handle trailing space (active)      | 6dp   |
| Handle padding (active)             | 6dp   |
| Value indicator active bottom space | 12dp  |
| With-overlap handle outline width   | 1dp   |

---

## Color Tokens

![9 color roles of a slider.](https://lh3.googleusercontent.com/CV3PfOlQdK3A_3O8RLyu_r-GjqW7NK-qgzQmKuo5M5tWBmI6eDGdNfq7p8bTvQbP1jYCpk8WaRktgSsCrKD9Lp1vbaeCtE2einRTw6e1J7dbGA=s0)

1. Inverse surface
2. Inverse on surface
3. Primary
4. On primary
5. Primary
6. Secondary container
7. On secondary container
8. On secondary container
9. On primary

### Enabled

#### Track

| Element                        | Token                                                  | Value                              |
| ------------------------------ | ------------------------------------------------------ | ---------------------------------- |
| Active track height            | `md.comp.slider.active.track.height`                   | 16dp                               |
| Inactive track height          | `md.comp.slider.inactive.track.height`                 | 16dp                               |
| Active track shape             | `md.comp.slider.active.track.shape`                    | `md.sys.shape.corner.full`         |
| Active track outer corner size | `md.comp.slider.active.track.outer-corner.corner-size` | `md.sys.shape.corner.full`         |
| Active track inner corner size | `md.comp.slider.active.track.inner-corner.corner-size` |                                    |
| Inactive track shape           | `md.comp.slider.inactive.track.shape`                  | `md.sys.shape.corner.full`         |
| Track elevation                | `md.comp.slider.track.elevation`                       | `md.sys.elevation.level0`          |
| Active track color             | `md.comp.slider.active.track.color`                    | `md.sys.color.primary`             |
| Inactive track color           | `md.comp.slider.inactive.track.color`                  | `md.sys.color.secondary-container` |
| Active container opacity       | `md.comp.slider.active.container.opacity`              | 1                                  |
| Inactive container opacity     | `md.comp.slider.inactive.container.opacity`            | 1                                  |

#### Handle

| Element                           | Token                                              | Value                      |
| --------------------------------- | -------------------------------------------------- | -------------------------- |
| Handle height                     | `md.comp.slider.handle.height`                     | 44dp                       |
| Handle width                      | `md.comp.slider.handle.width`                      | 4dp                        |
| Handle shape                      | `md.comp.slider.handle.shape`                      | `md.sys.shape.corner.full` |
| Handle elevation                  | `md.comp.slider.handle.elevation`                  | `md.sys.elevation.level1`  |
| Handle shadow color               | `md.comp.slider.handle.shadow-color`               | `md.sys.color.shadow`      |
| Handle color                      | `md.comp.slider.handle.color`                      | `md.sys.color.primary`     |
| Active handle color               | `md.comp.slider.slider-active-handle-color`        | `md.sys.color.primary`     |
| Active handle height              | `md.comp.slider.active.handle.height`              | 44dp                       |
| Active handle width               | `md.comp.slider.active.handle.width`               | 4dp                        |
| Active handle shape               | `md.comp.slider.active.handle.shape`               | `md.sys.shape.corner.full` |
| Active handle leading space       | `md.comp.slider.active.handle.leading-space`       | 6dp                        |
| Active handle trailing space      | `md.comp.slider.active.handle.trailing-space`      | 6dp                        |
| Active handle padding             | `md.comp.slider.active.handle.padding`             | 6dp                        |
| With-overlap handle outline color | `md.comp.slider.with-overlap.handle.outline.color` | `md.sys.color.on-primary`  |
| With-overlap handle outline width | `md.comp.slider.with-overlap.handle.outline.width` | 1dp                        |

#### Stop indicator

| Element                                   | Token                                                      | Value                                 |
| ----------------------------------------- | ---------------------------------------------------------- | ------------------------------------- |
| Stop indicator size                       | `md.comp.slider.stop-indicator.size`                       | 4dp                                   |
| Stop indicator shape                      | `md.comp.slider.stop-indicator.shape`                      | `md.sys.shape.corner.full`            |
| Stop indicator trailing space             | `md.comp.slider.stop-indicator.trailing-space`             | 4dp                                   |
| Stop indicator color (inactive track)     | `md.comp.slider.stop-indicator.color`                      | `md.sys.color.on-secondary-container` |
| Stop indicator color (active track)       | `md.comp.slider.stop-indicator.color-selected`             | `md.sys.color.on-primary`             |
| Active stop indicator container color     | `md.comp.slider.active.stop-indicator.container.color`     | `md.sys.color.on-primary`             |
| Active stop indicator container opacity   | `md.comp.slider.active.stop-indicator.container.opacity`   | 1                                     |
| Inactive stop indicator container color   | `md.comp.slider.inactive.stop-indicator.container.color`   | `md.sys.color.on-secondary-container` |
| Inactive stop indicator container opacity | `md.comp.slider.inactive.stop-indicator.container.opacity` | 1                                     |

#### Tick marks container (with-tick-marks)

| Element                    | Token                                                       | Value                             |
| -------------------------- | ----------------------------------------------------------- | --------------------------------- |
| Container size             | `md.comp.slider.with-tick-marks.container.size`             | 2dp                               |
| Container shape            | `md.comp.slider.with-tick-marks.container.shape`            | `md.sys.shape.corner.full`        |
| Active container color     | `md.comp.slider.with-tick-marks.active.container.color`     | `md.sys.color.on-primary`         |
| Active container opacity   | `md.comp.slider.with-tick-marks.active.container.opacity`   | 0.38                              |
| Inactive container color   | `md.comp.slider.with-tick-marks.inactive.container.color`   | `md.sys.color.on-surface-variant` |
| Inactive container opacity | `md.comp.slider.with-tick-marks.inactive.container.opacity` | 0.38                              |

#### Label container

| Element                   | Token                                      | Value                     |
| ------------------------- | ------------------------------------------ | ------------------------- |
| Label container height    | `md.comp.slider.label.container.height`    | 28dp                      |
| Label container color     | `md.comp.slider.label.container.color`     | `md.sys.color.primary`    |
| Label container elevation | `md.comp.slider.label.container.elevation` | `md.sys.elevation.level0` |

#### Label text (deprecated)

| Element     | Token                                         | Value                                       |
| ----------- | --------------------------------------------- | ------------------------------------------- |
| Font        | `md.comp.slider.label.label-text.font`        | `md.sys.typescale.label-medium.font`        |
| Size        | `md.comp.slider.label.label-text.size`        | `md.sys.typescale.label-medium.size`        |
| Line height | `md.comp.slider.label.label-text.line-height` | `md.sys.typescale.label-medium.line-height` |
| Weight      | `md.comp.slider.label.label-text.weight`      | `md.sys.typescale.label-medium.weight`      |
| Tracking    | `md.comp.slider.label.label-text.tracking`    | `md.sys.typescale.label-medium.tracking`    |
| Color       | `md.comp.slider.label.label-text.color`       | `md.sys.color.inverse-on-surface`           |
| Type style  | `md.comp.slider.label.label-text.type`        | Aa                                          |

#### State layer (deprecated)

| Element          | Token                             | Value |
| ---------------- | --------------------------------- | ----- |
| State layer size | `md.comp.slider.state-layer.size` | 40dp  |

#### Value indicator

| Element             | Token                                                         | Value                                      |
| ------------------- | ------------------------------------------------------------- | ------------------------------------------ |
| Container color     | `md.comp.slider.value-indicator.container.color`              | `md.sys.color.inverse-surface`             |
| Label font          | `md.comp.slider.value-indicator.label.label-text.font`        | `md.sys.typescale.label-large.font`        |
| Label color         | `md.comp.slider.value-indicator.label.label-text.color`       | `md.sys.color.inverse-on-surface`          |
| Label line height   | `md.comp.slider.value-indicator.label.label-text.line-height` | `md.sys.typescale.label-large.line-height` |
| Label size          | `md.comp.slider.value-indicator.label.label-text.size`        | `md.sys.typescale.label-large.size`        |
| Label tracking      | `md.comp.slider.value-indicator.label.label-text.tracking`    | `md.sys.typescale.body-large.tracking`     |
| Label weight        | `md.comp.slider.value-indicator.label.label-text.weight`      | `md.sys.typescale.body-large.weight`       |
| Active bottom space | `md.comp.slider.value-indicator.active.bottom-space`          | 12dp                                       |

### Disabled

#### Track

| Element                | Token                                            | Value                     |
| ---------------------- | ------------------------------------------------ | ------------------------- |
| Active track color     | `md.comp.slider.disabled.active.track.color`     | `md.sys.color.on-surface` |
| Active track opacity   | `md.comp.slider.disabled.active.track.opacity`   | 0.38                      |
| Inactive track color   | `md.comp.slider.disabled.inactive.track.color`   | `md.sys.color.on-surface` |
| Inactive track opacity | `md.comp.slider.disabled.inactive.track.opacity` | 0.12                      |

#### Handle

| Element          | Token                                      | Value                     |
| ---------------- | ------------------------------------------ | ------------------------- |
| Handle color     | `md.comp.slider.disabled.handle.color`     | `md.sys.color.on-surface` |
| Handle elevation | `md.comp.slider.disabled.handle.elevation` | `md.sys.elevation.level0` |
| Handle opacity   | `md.comp.slider.disabled.handle.opacity`   | 0.38                      |
| Handle width     | `md.comp.slider.disabled.handle.width`     | 4dp                       |

#### Stop indicator

| Element                                 | Token                                                             | Value                             |
| --------------------------------------- | ----------------------------------------------------------------- | --------------------------------- |
| Stop color (inactive track)             | `md.comp.slider.disabled.stop-indicator.color`                    | `md.sys.color.on-surface`         |
| Stop color (active track)               | `md.comp.slider.disabled.stop-indicator.color-selected`           | `md.sys.color.inverse-on-surface` |
| Active stop indicator container color   | `md.comp.slider.disabled.active.stop-indicator.container.color`   | `md.sys.color.inverse-on-surface` |
| Inactive stop indicator container color | `md.comp.slider.disabled.inactive.stop-indicator.container.color` | `md.sys.color.on-surface`         |

#### Tick marks container (deprecated)

| Element                         | Token                                                       | Value                     |
| ------------------------------- | ----------------------------------------------------------- | ------------------------- |
| Disabled container color        | `md.comp.slider.with-tick-marks.disabled.container.color`   | `md.sys.color.on-surface` |
| Disabled stop indicator color   | `md.comp.slider.disabled.stop-indicator.container.color`    | `md.sys.color.on-surface` |
| Disabled container opacity      | `md.comp.slider.with-tick-marks.disabled.container.opacity` | 0.38                      |
| Disabled stop indicator opacity | `md.comp.slider.disabled.stop-indicator.container.opacity`  | 0.38                      |

### Hovered

#### Handle

| Element      | Token                               | Value                  |
| ------------ | ----------------------------------- | ---------------------- |
| Handle color | `md.comp.slider.hover.handle.color` | `md.sys.color.primary` |
| Handle width | `md.comp.slider.hover.handle.width` | 4dp                    |

#### State layer (deprecated)

| Element             | Token                                      | Value                                    |
| ------------------- | ------------------------------------------ | ---------------------------------------- |
| State layer color   | `md.comp.slider.hover.state-layer.color`   | `md.sys.color.primary`                   |
| State layer opacity | `md.comp.slider.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

#### Stop (deprecated)

| Element    | Token                             | Value                  |
| ---------- | --------------------------------- | ---------------------- |
| Stop color | `md.comp.slider.hover.stop.color` | `md.sys.color.primary` |

### Focused

#### Track

| Element              | Token                                       | Value                              |
| -------------------- | ------------------------------------------- | ---------------------------------- |
| Active track color   | `md.comp.slider.focus.active.track.color`   | `md.sys.color.primary`             |
| Inactive track color | `md.comp.slider.focus.inactive.track.color` | `md.sys.color.secondary-container` |

#### Handle

| Element      | Token                               | Value                  |
| ------------ | ----------------------------------- | ---------------------- |
| Handle color | `md.comp.slider.focus.handle.color` | `md.sys.color.primary` |
| Handle width | `md.comp.slider.focus.handle.width` | 2dp                    |

#### State layer (deprecated)

| Element             | Token                                      | Value                                    |
| ------------------- | ------------------------------------------ | ---------------------------------------- |
| State layer color   | `md.comp.slider.focus.state-layer.color`   | `md.sys.color.primary`                   |
| State layer opacity | `md.comp.slider.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

#### Stop (deprecated)

| Element    | Token                             | Value                  |
| ---------- | --------------------------------- | ---------------------- |
| Stop color | `md.comp.slider.focus.stop.color` | `md.sys.color.primary` |

### Pressed

#### Track

| Element              | Token                                         | Value                              |
| -------------------- | --------------------------------------------- | ---------------------------------- |
| Active track color   | `md.comp.slider.pressed.active.track.color`   | `md.sys.color.primary`             |
| Inactive track color | `md.comp.slider.pressed.inactive.track.color` | `md.sys.color.secondary-container` |

#### Handle

| Element      | Token                                 | Value                  |
| ------------ | ------------------------------------- | ---------------------- |
| Handle color | `md.comp.slider.pressed.handle.color` | `md.sys.color.primary` |
| Handle width | `md.comp.slider.pressed.handle.width` | 2dp                    |

#### State layer (deprecated)

| Element             | Token                                        | Value                                      |
| ------------------- | -------------------------------------------- | ------------------------------------------ |
| State layer color   | `md.comp.slider.pressed.state-layer.color`   | `md.sys.color.primary`                     |
| State layer opacity | `md.comp.slider.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

#### Stop (deprecated)

| Element    | Token                               | Value                  |
| ---------- | ----------------------------------- | ---------------------- |
| Stop color | `md.comp.slider.pressed.stop.color` | `md.sys.color.primary` |

---

## Size Token Sets

Slider tokens are organized into a common set and per-size sets. Swap the `xsmall` tokens with the desired size to change dimensions.

### XSmall (default)

| Element                       | Token                                                 | Value |
| ----------------------------- | ----------------------------------------------------- | ----- |
| Active track height           | `md.comp.slider.xsmall.active.track.height`           | 16dp  |
| Active track leading shape    | `md.comp.slider.xsmall.active.track.shape.leading`    | 8dp   |
| Inactive track height         | `md.comp.slider.xsmall.inactive.track.height`         | 16dp  |
| Inactive track trailing shape | `md.comp.slider.xsmall.inactive.track.shape.trailing` | 8dp   |
| Active handle height          | `md.comp.slider.xsmall.active.handle.height`          | 44dp  |

### Small

| Element                       | Token                                                | Value |
| ----------------------------- | ---------------------------------------------------- | ----- |
| Active track height           | `md.comp.slider.small.active.track.height`           | 24dp  |
| Active track leading shape    | `md.comp.slider.small.active.track.shape.leading`    | 8dp   |
| Inactive track height         | `md.comp.slider.small.inactive.track.height`         | 24dp  |
| Inactive track trailing shape | `md.comp.slider.small.inactive.track.shape.trailing` | 8dp   |
| Active handle height          | `md.comp.slider.small.active.handle.height`          | 44dp  |

### Medium

| Element                       | Token                                                 | Value |
| ----------------------------- | ----------------------------------------------------- | ----- |
| Active track height           | `md.comp.slider.medium.active.track.height`           | 40dp  |
| Active track leading shape    | `md.comp.slider.medium.active.track.shape.leading`    | 12dp  |
| Inactive track height         | `md.comp.slider.medium.inactive.track.height`         | 40dp  |
| Inactive track trailing shape | `md.comp.slider.medium.inactive.track.shape.trailing` | 12dp  |
| Active handle height          | `md.comp.slider.medium.active.handle.height`          | 44dp  |
| Icon padding                  | `md.comp.slider.medium.icon.padding`                  | 6dp   |
| Icon size                     | `md.comp.slider.medium.icon.size`                     | 24dp  |

### Large

| Element                       | Token                                                | Value |
| ----------------------------- | ---------------------------------------------------- | ----- |
| Active track height           | `md.comp.slider.large.active.track.height`           | 56dp  |
| Active track leading shape    | `md.comp.slider.large.active.track.shape.leading`    | 16dp  |
| Inactive track height         | `md.comp.slider.large.inactive.track.height`         | 56dp  |
| Inactive track trailing shape | `md.comp.slider.large.inactive.track.shape.trailing` | 16dp  |
| Active handle height          | `md.comp.slider.large.active.handle.height`          | 68dp  |
| Icon padding                  | `md.comp.slider.large.icon.padding`                  | 6dp   |
| Icon size                     | `md.comp.slider.large.icon.size`                     | 24dp  |

### XLarge

| Element                       | Token                                                 | Value |
| ----------------------------- | ----------------------------------------------------- | ----- |
| Active track height           | `md.comp.slider.xlarge.active.track.height`           | 96dp  |
| Active track leading shape    | `md.comp.slider.xlarge.active.track.shape.leading`    | 28dp  |
| Inactive track height         | `md.comp.slider.xlarge.inactive.track.height`         | 96dp  |
| Inactive track trailing shape | `md.comp.slider.xlarge.inactive.track.shape.trailing` | 28dp  |
| Active handle height          | `md.comp.slider.xlarge.active.handle.height`          | 108dp |
| Icon padding                  | `md.comp.slider.xlarge.icon.padding`                  | 8dp   |
| Icon size                     | `md.comp.slider.xlarge.icon.size`                     | 32dp  |

---

## Interaction States

![5 states of sliders in light and dark schemes.](https://lh3.googleusercontent.com/PgYCQrkBSJUOlzQMXu0BmIe16Fho4X9NdvdYYSOtE1tIl0aucZejoImkNIfdTpbPity3lWJxxg2WSoilrjogEOWTcVhxyGN0aYZl0sRWQuMpJA=s0)

| #   | State        | Visual changes                                                                       |
| --- | ------------ | ------------------------------------------------------------------------------------ |
| 1   | **Enabled**  | Default appearance                                                                   |
| 2   | **Disabled** | Reduced opacity (active track 0.38, inactive track 0.12, handle 0.38); no elevation  |
| 3   | **Hovered**  | Handle color stays primary; state layer appears                                      |
| 4   | **Focused**  | Handle narrows to 2dp width; state layer at focus opacity                            |
| 5   | **Pressed**  | Handle narrows to 2dp width; value indicator appears; state layer at pressed opacity |

---

## Accessibility

### Touch & Cursor

- **Touch**: tap or drag the handle; handle width shrinks to provide feedback; value indicator appears
- **Cursor**: cursor changes on hover; clicking and dragging narrows the handle and shows the value

### Focus and navigation

Initial focus lands directly on the handle. The value can then be adjusted using arrow keys.

### Keyboard Navigation

| Key            | Action                                                                |
| -------------- | --------------------------------------------------------------------- |
| Tab            | Moves focus to the slider handle                                      |
| Arrows         | Increase or decrease the value by one step or one stop indicator      |
| Space + Arrows | Increase or decrease the value by a larger interval or stop indicator |
| Home           | Set the slider to the first value                                     |
| End            | Set the slider to the last value                                      |

### Labeling

![Annotated aria tags of a slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0o6wp1l-5.png?alt=media&token=99be26c8-7f4d-4336-8b83-f50fbf4f56b3=s0)

![Annotated aria tags of a slider with stepper icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3601h6w-6.png?alt=media&token=9855912f-4437-40d5-aa5a-6662501a6d06=s0)

- The accessibility label should match the slider's adjacent text label
- The slider must have the **slider** role
- If the UI text is correctly linked, assistive tech reads the label followed by the component role
- Icon buttons placed outside the slider (e.g. +/- steppers) should have the **button** role

### Color contrast

![The stop indicator provides 3:1 contrast where the inactive track does not.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1s6sg3-3.png?alt=media&token=fe50b51b-a15f-496e-b0ff-7b65ef7598f4=s0)

![Icons provide 3:1 contrast at the slider endpoints.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1s73wl-4.png?alt=media&token=f00826a6-95c4-46d0-aa63-2da4e4b7759c=s0)

- The end of the inactive track must have at least **3:1 contrast** with the background
- Stop indicators provide this contrast by default
- Alternatively, external icons or text with sufficient contrast can mark the endpoints

### Density

- Minimum touch target: **48 × 48dp**
- Do not reduce density below this minimum

---

## M2 → M3 Differences

![M2 slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7livqfr-04.png?alt=media&token=04f22602-6e80-4772-84e6-e36473774b80=s0)

M2: Circular handle, small label on press

![Original M3 slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7liwct9-05.png?alt=media&token=92017b6d-1e41-4639-9a31-6e78d744afe0=s0)

M3: New color mappings, dynamic color support

| Aspect      | M2                        | M3                                                 |
| ----------- | ------------------------- | -------------------------------------------------- |
| Handle      | Circular                  | Vertical bar, narrows on press                     |
| Label       | Small tooltip on press    | Larger value indicator with label-large typography |
| Color       | Basic mappings            | Dynamic color compatible                           |
| Sizes       | Single size               | Five sizes (XS, S, M, L, XL)                       |
| Naming      | "Continuous" / "Discrete" | "Standard" / "Stops" configuration                 |
| Variants    | Standard only             | Standard, Centered, Range                          |
| Inset icon  | Not available             | Available on M, L, XL standard sliders             |
| Orientation | Horizontal only           | Horizontal and vertical                            |

### M3 Expressive update (May 2025)

The slider added expressive configurations for orientation, shape sizes, and an inset icon. Updated on MDC-Android and Jetpack Compose.

- Renamed **continuous** slider to **standard** slider
- **Discrete** slider became the **stops** configuration
- New configurations: vertical orientation, inset icon (standard only), sizes S through XL
