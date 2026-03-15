# Loading Indicator — M3 Component Reference

> Loading indicators communicate a short, indeterminate wait time through animated shape morphing.

Sources: [Overview](https://m3.material.io/components/loading-indicator/overview) · [Specs](https://m3.material.io/components/loading-indicator/specs) · [Guidelines](https://m3.material.io/components/loading-indicator/guidelines) · [Accessibility](https://m3.material.io/components/loading-indicator/accessibility)

---

## Configurations

![2 configurations of loading indicators.](https://lh3.googleusercontent.com/ymEEU7ii6n5M1aJlvEK-YdTlpbtGoMaALgiyMHTJwgl6wqdPQOiBLyCeSZV9C032V24-ctzx396weJRmrfuP3SG3_PbnMnHuJCJDJn0l6XTf_g=s0)

| #   | Configuration | Description                                                                  |
| --- | ------------- | ---------------------------------------------------------------------------- |
| 1   | Default       | Active indicator only, no background — use on plain surfaces                 |
| 2   | Contained     | Active indicator inside a circular container — use over content for contrast |

| Category    | Configuration | M3  | M3 Expressive |
| ----------- | ------------- | --- | ------------- |
| Containment | Default       | --  | Available     |
|             | Contained     | --  | Available     |

---

## Anatomy

![2 elements of a loading indicator.](https://lh3.googleusercontent.com/LnXFKWQjx1upNdSL52LpDEe6n6-9Wj_WQoZalB2nwnCKeNjhZ2p0tsq1q-LsV9gaDEcCVwuRicHGTVaTAa7DWv_rJ_iH2PORJmFxrZlCLphp=s0)

![2 parts of an active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0cads86-7.png?alt=media&token=f27080ab-ebe2-410d-baa6-b0bc04ca5734=s0)

1. **Active indicator** — a looping shape-morph sequence composed of seven unique M3 shapes that captures attention through motion. [More about the Material shape library](https://m3.material.io/m3/pages/shape/overview-principles#579dd4ba-39f3-4e60-bd9b-1d97ed6ef1bf)
2. **Container** (optional) — a circular background that provides extra contrast when the indicator is placed over other content

### Active indicator

![Active indicator with shape morph.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0cafeiy-8.png?alt=media&token=bdcb1b69-8492-4871-b07b-2449155b0d42=s0)

The active indicator continuously morphs between shapes to draw attention to the ongoing process.

### Container (optional)

![Active indicator with container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0caha9b-9.png?alt=media&token=b9bf2aaa-19dd-4aa4-80f7-0484809b74dd=s0)

When the container is visible, the active indicator color changes from **primary** to **on-primary-container**. Use the container when the indicator overlaps other content for stronger contrast — it is not needed when placed directly on a plain surface. The contained configuration should also be used for pull-to-refresh behavior.

---

## Usage & When to Use

Loading indicators use animation to mitigate perceived latency and signal that an activity is in progress. They are intended for indeterminate processes where progress cannot be quantified.

- Recommended as a replacement for indeterminate circular progress indicators
- Always reflect an ongoing process — never purely decorative
- Used for pull-to-refresh interactions
- Capture attention through shape-morphing motion
- Can scale in size to suit the context

### When to use which indicator

Choose the indicator that matches the expected wait time:

| Expected wait time           | Recommendation                          |
| ---------------------------- | --------------------------------------- |
| Instant (under 200ms)        | No indicator — display content directly |
| Short (between 200ms and 5s) | Loading indicator                       |
| Long (over 5s)               | Progress indicator                      |

### Indeterminate-to-determinate transitions

When a process transitions from unknown to known remaining progress, transition between the corresponding **progress indicators** (indeterminate → determinate). Do **not** transition a loading indicator into a progress indicator — they are separate components.

---

## Placement

- **Full-page or container loading**: center the indicator in the element being loaded
- **Loading more items** on a page with existing content: place the indicator in the empty space where new content will appear — avoid overlapping existing content
- **Within components**: loading indicators can be placed inside other components (e.g. buttons) to indicate an ongoing action such as form validation or checking for updates
- Useful for showing progress in compact spaces without taking up much room

---

## Behavior

### Pull-to-refresh

The loading indicator serves as the visual feedback for pull-to-refresh gestures. Pull-to-refresh manually refreshes screen content and is best used at the beginning of lists, grid lists, and card collections where the most recent content appears first. It works best with dynamic content that updates frequently.

#### Threshold requirements

The loading indicator must pass a gesture threshold before the app initiates a refresh. Completing the gesture past the threshold triggers the refresh; reversing the gesture past the threshold cancels it.

The indicator remains visible until the refresh completes and new content is shown, or the user navigates away.

- **Do:** Keep the loading indicator in view until the activity completes, to communicate refresh status
- **Don't:** Scroll the loading indicator off-screen — this hides the refresh status and may imply the refresh is associated with a specific component rather than the entire screen

---

## Measurements

![Loading progress indicator measurements.](https://lh3.googleusercontent.com/wXvvKvCbB0kpP7qvp_XSbnQ2y_ulUlpCVLZ7wbz7FUvxiAsnXyH-AZBHnf5pKvC3JldNmmgC2GpNfr5YWXwNShPUkoATkaH2zAm53DnQ4O4Ozw=s0)

The outer size is 48dp to ensure sufficient touch target margins, while the shape container (active indicator) is 38dp.

| Attribute             | Token                                             | Value |
| --------------------- | ------------------------------------------------- | ----- |
| Container width       | `md.comp.loading-indicator.container.width`       | 48dp  |
| Container height      | `md.comp.loading-indicator.container.height`      | 48dp  |
| Active indicator size | `md.comp.loading-indicator.active-indicator.size` | 38dp  |

### Responsive sizing

![Loading indicators can range from 24dps to 240dps.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0caprda-12.png?alt=media&token=ac91d3fa-343a-4bc6-be14-466c85b2086d=s0)

The default size is 48dp, but loading indicators are flexible and can range from **24dp to 240dp** depending on placement and window size. The ratio between container and active indicator remains constant when resizing. Reserve very large indicators (toward 240dp) for large and extra-large windows such as desktop.

As the pane or window grows, scale the indicator proportionally to the surrounding empty space — but never exceed 240dp.

---

## Color Tokens

### Default

![2 color roles of a loading progress indicator in light and dark themes: the active indicator is primary and the container is secondary container.](https://lh3.googleusercontent.com/kHiYDI_rJi33eQIGCCvJY8rB8T0KnCrajoGZaedLVM70FSKqCIMxwGTFc8j4A-DWWGTVgXQ2pWZqxjL5X4ZtHD3MQNWY4XZasIvw1NJrh4PE=s0)

| Element          | Token                                              | Value                              |
| ---------------- | -------------------------------------------------- | ---------------------------------- |
| Active indicator | `md.comp.loading-indicator.active-indicator.color` | `md.sys.color.primary`             |
| Container        | `md.comp.loading-indicator.container.color`        | `md.sys.color.secondary-container` |

### Contained

![2 color roles of a contained loading progress indicator in light and dark themes.](https://lh3.googleusercontent.com/wCgczdkIgvjvmJLlIlHuSP8ND2z0Xtw8K6oBWnYfaw0z39kFlhxprzY4LQSis0abslHlp69jMprJZtQoEuG06Mij-XVqGvcUtQTVuVWId5WL=s0)

| Element          | Token                                                        | Value                               |
| ---------------- | ------------------------------------------------------------ | ----------------------------------- |
| Active indicator | `md.comp.loading-indicator.contained.active-indicator.color` | `md.sys.color.on-primary-container` |
| Container        | `md.comp.loading-indicator.contained.container.color`        | `md.sys.color.primary-container`    |

### Shape

| Element   | Token                                       | Value                      |
| --------- | ------------------------------------------- | -------------------------- |
| Container | `md.comp.loading-indicator.container.shape` | `md.sys.shape.corner.full` |

---

## Accessibility

### Contrast

![Loading indicator with 3:1 color contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmagv3srk-1.png?alt=media&token=85fc9e3b-7664-442d-940c-8d7b51cabda4=s0)

The active indicator must provide at least **3:1 contrast** against the background surface. The container itself does not need to meet this requirement — only the indicator shape does.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaguuv6h-2_do.png?alt=media&token=8821caaf-6d1f-444d-8c96-12753282b334=s0" /><br/><b>Do:</b> Ensure at least 3:1 contrast between the indicator and the surface it's on</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaguuziu-3_dont.png?alt=media&token=e8157014-aaa8-47cf-ae70-c8c3b986b36e=s0" /><br/><b>Don't:</b> Use when the contrast ratio is under 3:1</td>
</tr></table>

When embedded in another component (e.g. a button), the active indicator must still maintain 3:1 contrast against that component's surface.

### Labeling

![Loading indicator accessibility label and role.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0cb8rsa-5.png?alt=media&token=a2cd5924-9d13-4657-a26f-b5c6130d0c67=s0)

- Use the **progress bar** accessibility role
- Provide a descriptive label explaining what is loading (e.g. "loading news article", "refreshing page")
- Users should be able to navigate to the indicator, understand what progress it communicates, and initiate a content refresh without relying on gestures

### Pull-to-refresh alternatives

Pull-to-refresh gestures are not accessible via all input methods. Always provide an alternative single-pointer mechanism to trigger a refresh, such as a refresh button in the app bar or alongside the content.

---

## M3 Expressive Update

**May 2025** — New component added to the M3 catalog as part of the Expressive update.

The loading indicator is designed to replace most uses of the indeterminate circular progress indicator for short wait times (under 5 seconds). It uses shape morphing and motion to capture attention.

| Type           | Resource           | Status      |
| -------------- | ------------------ | ----------- |
| Design         | Design Kit (Figma) | Available   |
| Implementation | Jetpack Compose    | Available   |
|                | MDC-Android        | Available   |
|                | Web                | Unavailable |
