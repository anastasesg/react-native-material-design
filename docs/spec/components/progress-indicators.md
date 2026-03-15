# Progress Indicators — M3 Component Reference

> Progress indicators communicate the status of an ongoing process, such as loading, submitting, or saving.

Sources: [Overview](https://m3.material.io/components/progress-indicators/overview) · [Specs](https://m3.material.io/components/progress-indicators/specs) · [Guidelines](https://m3.material.io/components/progress-indicators/guidelines) · [Accessibility](https://m3.material.io/components/progress-indicators/accessibility)

---

## Variants

![2 variant of progress indicators.](https://lh3.googleusercontent.com/fLmSSW0vCAz72TSdfqeo9FQY5YlgLT7ktKAZkxs-FEetsANoory1UPDxRd3-jESQSkUeq6xuwEtp1NcR52Mih2QQQiprYecoJ-XI0SDBaL1T=s0)

1. **Linear** — a horizontal bar that fills from leading to trailing edge. Best placed along the edge of a container.
2. **Circular** — a ring that fills from 0° to 360°. Best centered within the loading element.

Use the same variant consistently for the same type of process throughout the product.

| Variant  | M3        | M3 Expressive |
| -------- | --------- | ------------- |
| Linear   | Available | Available     |
| Circular | Available | Available     |

---

## Anatomy

![3 elements of a progress indicator.](https://lh3.googleusercontent.com/d1mWcS4gytQf_XcgwvUqsNTf47P5BT9PUo-Ivi-7Ld1_Vc_HAtLGPARxwbqUcN7gdc-JH4iXM0nRH1374g23CnABP7i8eP9CnGq6UNpAnJ4=s0)

1. **Active indicator** — shows how much progress has been made. For indeterminate processes, it grows and shrinks along the track repeatedly. Linear indicators animate from leading to trailing edge; circular indicators animate clockwise from the top.
2. **Track** — the background rail that the active indicator moves along.
3. **Stop indicator** — a 4dp circle marking the end of a linear determinate progress indicator (for accessibility). Not used for indeterminate or circular indicators.

At low percentages where space is limited, the active indicator appears as a dot to signal that progress is underway.

![A linear and circular progress indicator at 1% progress, where the active indicator has only just appeared.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep6b3j-12.png?alt=media&token=8aa71e47-95c1-48b7-9949-1b12b43093f6=s0)

---

## Configurations

![4 configurations of the linear determinate progress indicator.](https://lh3.googleusercontent.com/Cf6AdPUEQffL-k5D1on9M3H1oyAGh20uJyfa7sbOwip6oRPvmqv7u2MSLKrH70PpyL0bCJdy2fGRNg_13JG9imoQdIMm8935YUMQXQxATKeocA=s0)

### Behavior: Determinate vs. Indeterminate

- **Determinate** — used when progress and wait time are known. The indicator must accurately represent actual progress (0%→100%).
- **Indeterminate** — used when the wait time is unknown. The indicator loops continuously.
- As more information becomes available, an indicator should transition from indeterminate to determinate.

### Shape: Flat vs. Wavy (M3 Expressive)

The active indicator has two shapes:

- **Flat** (default) — standard straight-line or arc appearance.
- **Wavy** (M3 Expressive) — an undulating wave along the track. Makes long processes feel less static. The overall container height increases when wavy. At very small sizes, the wave may not be visible, so prefer flat.

### Track Thickness

- **Fixed (4dp)** — available in both M3 and M3 Expressive.
- **Configurable** — M3 Expressive only, allowing custom thickness.

| Category        | Configuration                        | M3        | M3 Expressive |
| --------------- | ------------------------------------ | --------- | ------------- |
| Behavior        | Determinate (default), Indeterminate | Available | Available     |
| Track thickness | Fixed (4dp)                          | Available | Available     |
|                 | Configurable                         | --        | Available     |
| Shape           | Flat (default)                       | Available | Available     |
|                 | Wavy                                 | --        | Available     |

---

## Usage & When to Use

Select the appropriate indicator based on expected wait time:

| Expected wait time           | Recommendation                             |
| ---------------------------- | ------------------------------------------ |
| Instant (under 200ms)        | No indicator — display content immediately |
| Short (between 200ms and 5s) | Loading indicator                          |
| Long (over 5s)               | Progress indicator                         |

For very long waits, consider allowing people to navigate away while the process finishes.

### Grouping

When multiple items load together, use a single progress indicator for the entire group rather than individual indicators per item.

### Stop Indicator Guidance

The stop indicator is required on linear determinate indicators when the track has less than 3:1 contrast with its container or the surface behind it. It can be omitted only when the track edge is clearly visible against all surrounding surfaces.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep7pxt-16.png?alt=media&token=9f8c2fcb-6249-4ff4-bd3c-d8ee67658bf7=s0" /><br/><b>Do:</b> Include a stop indicator when the track sits in a low-contrast container.</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep87pn-17.png?alt=media&token=c35ef411-e39f-4bc4-abe8-f4372b570d19=s0" /><br/><b>Caution:</b> Only remove the stop indicator if the track provides at least 3:1 visual contrast with all surrounding surfaces.</td>
</tr></table>

---

## Placement

### Linear indicators

- Place along the edge of the container that is loading. If the container shape changes, place on the animating edge.
- Can also be placed in the center of a container.
- Use a single indicator at the top of a page to represent the entire page loading. Don't add per-element indicators unless they load independently.

### Circular indicators

- Center directly on the container or page that is loading.
- When loading more items, place in the empty space where new content will appear — don't overlap existing content.

### Progress indicators in buttons

A circular indicator can be placed inside a button to show the button's action is in progress.

- In very small buttons, use the flat shape (wavy is not visible at small sizes).
- For 3:1 contrast, set the active indicator color to match the button's icon or label text, and remove the track.

---

## Measurements

### Wave dimensions

Wavy indicators use **amplitude** (center of resting position to center of peak) and **wavelength** (distance between two adjacent peaks) to determine the wave shape. The height is the overall container height.

![Definitions of wave measurements for height and amplitude.](https://lh3.googleusercontent.com/Aii3LLGqfr5jLHSdMLKx4rMUceBixyyXu77IqvYcUoMGwV8MxqqZgcB0XU6nx7GpVeU7_sqdq6ScJE4eic6v4dP1Abaq4TtF3MSZNxB2HifI=s0)

![Definitions of wave measurements for wavelength.](https://lh3.googleusercontent.com/hYbEOpy3GfIuFxLUfMLU_r3VijC9KNldOlFhXM3oEYputn_p6YvzArLiC3dZWgzuuzVOfrsX2LUhP6BQP57NF_RD265PRui1VtLzxURvCDzMOg=s0)

### Linear progress indicator

![Linear progress indicator measurements.](https://lh3.googleusercontent.com/M-64WwKIqgmV6lWqTh7Ar7vJuUsvjqLTnOJcMLrFPbW4nxRmYITD4GbXXEGCjwK2eJLUBGlfD1rtb86saREi68enxN3Galq9ZUPa-pgFIm-QlA=s0)

**Linear — baseline**

| Attribute                                | Value |
| ---------------------------------------- | ----- |
| Overall height                           | 4dp   |
| Overall height (with wave)               | 10dp  |
| Active indicator thickness               | 4dp   |
| Track thickness                          | 4dp   |
| Stop indicator size                      | 4dp   |
| Space between track and active indicator | 4dp   |
| Stop indicator trailing space            | 0     |
| Wave amplitude                           | 3dp   |
| Wave wavelength                          | 40dp  |
| Indeterminate wave wavelength            | 20dp  |

**[Deprecated] Linear — thick**

| Attribute                                | Value |
| ---------------------------------------- | ----- |
| Overall height                           | 8dp   |
| Overall height (with wave)               | 14dp  |
| Active indicator thickness               | 8dp   |
| Track thickness                          | 8dp   |
| Stop indicator size                      | 4dp   |
| Space between track and active indicator | 4dp   |
| Stop indicator trailing space            | 2dp   |

### Circular progress indicator

![Circular progress indicator measurements.](https://lh3.googleusercontent.com/8oX70XRFeRqxFH1vBkx8z4hy6nKrvShQvQsQuR8emIWoXRKU8OWnK5pdFx-Q8ZwF0d4w8qDLi5NqPYAqxekWoHy9ytjz-lz7Leo9TFNlWU8s=s0)

**Circular — baseline**

| Attribute                                | Value |
| ---------------------------------------- | ----- |
| Overall size                             | 40dp  |
| Overall size (with wave)                 | 48dp  |
| Active indicator thickness               | 4dp   |
| Track thickness                          | 4dp   |
| Space between track and active indicator | 4dp   |
| Wave amplitude                           | 1.6dp |
| Wave wavelength                          | 15dp  |

**[Deprecated] Circular — thick**

| Attribute                                | Value |
| ---------------------------------------- | ----- |
| Overall size                             | 52dp  |
| Active indicator thickness               | 8dp   |
| Track thickness                          | 8dp   |
| Space between track and active indicator | 4dp   |

### Inset

![4dp padding on the left and right of the linear progress indicator.](https://lh3.googleusercontent.com/6_sdBcuvKe2j9XDUC70bzaxi8QsZW1507V6pQ9ZQstst3B_Y8w26_5Yuz504uIxL_GcrMfNhJFvNiQotKPPEPlRgCczoR5ys0e8wM7Lv6L19=s0)

The linear progress indicator is inset 4dp from the edges of its container (minimum padding, can be increased).

---

## Color Tokens

![2 color roles of a linear progress indicator in light and dark themes: the active indicator and stop indicator are primary and the track is secondary container.](https://lh3.googleusercontent.com/CrzKce-9x2GrD2SOdyYCmDhdK37XcZoiMv9mT6N0NjUybL1GwXLN52_LbXb1AKfzmLUna1jMew5x0skKpMBEHrBJ82d-tJRr5DvoaUeR_J4=s0)

### Common tokens (shared by linear and circular)

**Color**

| Element          | Token                                               | Value                              |
| ---------------- | --------------------------------------------------- | ---------------------------------- |
| Active indicator | `md.comp.progress-indicator.active-indicator.color` | `md.sys.color.primary`             |
| Track            | `md.comp.progress-indicator.track.color`            | `md.sys.color.secondary-container` |
| Stop indicator   | `md.comp.progress-indicator.stop-indicator.color`   | `md.sys.color.primary`             |

**Shape**

| Element          | Token                                               | Value                      |
| ---------------- | --------------------------------------------------- | -------------------------- |
| Active indicator | `md.comp.progress-indicator.active-indicator.shape` | `md.sys.shape.corner.full` |
| Track            | `md.comp.progress-indicator.track.shape`            | `md.sys.shape.corner.full` |
| Stop indicator   | `md.comp.progress-indicator.stop-indicator.shape`   | `md.sys.shape.corner.full` |

### [Deprecated] Baseline tokens — Circular

**Active indicator**

| Element                               | Token                                                                         | Value                             |
| ------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------- |
| Size                                  | `md.comp.circular-progress-indicator.size`                                    | 48dp                              |
| Width                                 | `md.comp.circular-progress-indicator.active-indicator.width`                  | 4dp                               |
| Shape                                 | `md.comp.circular-progress-indicator.active-indicator.shape`                  | `md.sys.shape.corner.none`        |
| Color                                 | `md.comp.circular-progress-indicator.active-indicator.color`                  | `md.sys.color.primary`            |
| Four-color active indicator — color 1 | `md.comp.circular-progress-indicator.four-color.active-indicator.one.color`   | `md.sys.color.primary`            |
| Four-color active indicator — color 2 | `md.comp.circular-progress-indicator.four-color.active-indicator.two.color`   | `md.sys.color.primary-container`  |
| Four-color active indicator — color 3 | `md.comp.circular-progress-indicator.four-color.active-indicator.three.color` | `md.sys.color.tertiary`           |
| Four-color active indicator — color 4 | `md.comp.circular-progress-indicator.four-color.active-indicator.four.color`  | `md.sys.color.tertiary-container` |

### [Deprecated] Baseline tokens — Linear

**Track**

| Element      | Token                                            | Value                                    |
| ------------ | ------------------------------------------------ | ---------------------------------------- |
| Track height | `md.comp.linear-progress-indicator.track.height` | 4dp                                      |
| Track shape  | `md.comp.linear-progress-indicator.track.shape`  | `md.sys.shape.corner.none`               |
| Track color  | `md.comp.linear-progress-indicator.track.color`  | `md.sys.color.surface-container-highest` |

**Active indicator**

| Element                               | Token                                                                       | Value                             |
| ------------------------------------- | --------------------------------------------------------------------------- | --------------------------------- |
| Height                                | `md.comp.linear-progress-indicator.active-indicator.height`                 | 4dp                               |
| Shape                                 | `md.comp.linear-progress-indicator.active-indicator.shape`                  | `md.sys.shape.corner.none`        |
| Color                                 | `md.comp.linear-progress-indicator.active-indicator.color`                  | `md.sys.color.primary`            |
| Four-color active indicator — color 1 | `md.comp.linear-progress-indicator.four-color.active-indicator.one.color`   | `md.sys.color.primary`            |
| Four-color active indicator — color 2 | `md.comp.linear-progress-indicator.four-color.active-indicator.two.color`   | `md.sys.color.primary-container`  |
| Four-color active indicator — color 3 | `md.comp.linear-progress-indicator.four-color.active-indicator.three.color` | `md.sys.color.tertiary`           |
| Four-color active indicator — color 4 | `md.comp.linear-progress-indicator.four-color.active-indicator.four.color`  | `md.sys.color.tertiary-container` |

---

## Responsive / Adaptive Design

### Right-to-left languages

Linear progress indicators should be mirrored horizontally for RTL languages. Circular indicators do not need to be mirrored.

![Mirrored right-to-left progress indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep96rs-25.png?alt=media&token=75581f65-e1d4-4ac1-99a3-e8c371691127=s0)

### Large screens

- **Circular** indicators have flexible sizing from 24dp to 240dp depending on placement and window size. Reserve very large indicators for desktop-scale windows. The waveform should scale proportionally so it looks consistent across sizes.

![Circular progress indicators can range in size from 24dps to 240dps.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep9qg1-26.png?alt=media&token=3406dfaa-947f-4dec-8e16-66b6c3da848f=s0)

- **Linear** indicators stretch to fill the width of their container. They should not be used in elements smaller than 40dp. The padding on each end should be at least 4dp.

![Linear progress indicators can dynamically adjust to any width.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepa8w9-27.png?alt=media&token=b5dada5d-07ab-408a-a520-1eee7956020e=s0)

---

## Accessibility

### Contrast

The active indicator must provide at least 3:1 visual contrast against most background colors. When embedded in another component (e.g., a button), use the same color as the component's label or icon for the active indicator and remove the track.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepcmau-02.png?alt=media&token=817a604f-513b-4d2b-bce8-576092f29233=s0" /><br/><b>Do:</b> Ensure at least 3:1 contrast between the indicator and its background surface.</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepd6dk-03.png?alt=media&token=28250ceb-a903-4145-9423-59a609cf5049=s0" /><br/><b>Don't:</b> Use colors with less than 3:1 contrast against the surface.</td>
</tr></table>

### Stop indicator contrast

The stop indicator is required on linear determinate indicators when the track does not meet 3:1 contrast with surrounding containers and surfaces.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepdozy-04.png?alt=media&token=5c4c02ed-76e6-41bb-9431-d215f1cec071=s0" /><br/><b>Do:</b> Only remove the stop indicator when the track has at least 3:1 contrast with all adjacent containers and surfaces.</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepe18t-05.png?alt=media&token=58f9d951-ddc2-47c4-9ab8-3707bfac503d=s0" /><br/><b>Don't:</b> Remove the stop indicator if adjacent surfaces have insufficient contrast.</td>
</tr></table>

### Labeling

- Use the **progress bar** accessibility role.
- Write a label describing both the process and the affected content (e.g., "Loading news article", "Refreshing page").
- Users should be able to navigate to the indicator and understand what progress it communicates.

![Determinate linear progress indicator has an accessibility label of "loading news article" and role of "progressbar".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepereg-06.png?alt=media&token=71630831-8fa7-41a6-acb2-ae63c344ab9f=s0)

![Indeterminate linear progress indicator has an accessibility label of "loading my episodes" and role of "progressbar."](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepf1vr-07.png?alt=media&token=31415e5b-41fb-4ebe-a455-8ebbc9f47abd=s0)

---

## M2 → M3 Differences

- **Color**: New color mappings compatible with dynamic color.
- **Shape**: Rounded corners (M3) replace square corners (M2).
- **Anatomy**: Stop indicator added for accessibility (Dec 2023).
- **Contrast**: Higher contrast between track and active indicator.
- **Motion**: New motion behavior.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c2if7i-04.png?alt=media&token=2cccabb4-c40c-4db4-9321-51c34cae3d25=s0" /><br/><b>M2:</b> Boxier, neutral style</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c2jf26-05.png?alt=media&token=2ee132f7-2c47-46e2-8826-910fbdfe4547=s0" /><br/><b>M3:</b> Dynamic color compatible, rounded style</td>
</tr></table>

### M3 Expressive update (Aug 2024)

- **Track height**: Configurable (was fixed at 4dp).
- **Shape**: Wavy option for more expressive styling.

![8 progress indicators configured to show different thickness and shape.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmleotj2q-01.png?alt=media&token=8d1f2405-86ed-4634-8847-af33a549410d=s0)
