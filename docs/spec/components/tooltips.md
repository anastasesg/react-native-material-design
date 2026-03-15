# Tooltips — M3 Component Reference

> Tooltips display brief labels or messages to provide additional context for UI elements.

Sources: [Overview](https://m3.material.io/components/tooltips/overview) · [Specs](https://m3.material.io/components/tooltips/specs) · [Guidelines](https://m3.material.io/components/tooltips/guidelines) · [Accessibility](https://m3.material.io/components/tooltips/accessibility)

---

## Variants

![2 variants of tooltips.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qs96y-02.png?alt=media&token=793c9573-a7f8-4a87-a6b5-a49f92a22c0b=s0)

1. **Plain tooltip** — briefly describes a UI element, best for labeling icon-only buttons and fields
2. **Rich tooltip** — provides extended context with optional subhead, buttons, and hyperlinks; suited for longer explanations or feature introductions

---

## Anatomy

### Plain tooltip

![2 elements of a plain tooltip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6r0a08-07.png?alt=media&token=2c7ae948-db69-4d73-afbd-3825d4d0435c=s0)

1. **Container** — small, opaque background using `inverse-surface`
2. **Supporting text** — concise label in `body-small` type scale, colored `inverse-on-surface`

### Rich tooltip

![4 elements of a rich tooltip.](https://lh3.googleusercontent.com/Qrg3y9UWvNZtKfeefdMriNm0BUWNB_4KL5lW4pDAdtSVGnRbdnJq_bOmpBVvYt7o6eS-pUOtaKvGpPpVvtZqoueoaGb3xCJjE1zXjuYvf1o3=s0)

1. **Subhead** (optional) — brief summary in `title-small` type scale, colored `on-surface-variant`
2. **Container** — elevated surface using `surface-container` with `level2` elevation and `medium` corner shape
3. **Supporting text** — descriptive body in `body-medium` type scale, colored `on-surface-variant`
4. **Text button** (optional) — up to two action buttons in `primary` color

---

## Usage & When to Use

![A plain tooltip labeling a button, and a rich tooltip announcing new settings available.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qnzgx-01.png?alt=media&token=c4796854-42a4-4c7d-9431-f4328e29d320=s0)

- Use **plain tooltips** to label UI elements that have no visible text (icon-only buttons, icon fields)
- Use **rich tooltips** for longer explanations, feature introductions, or when actions (links/buttons) are needed
- Rich tooltips can optionally include a title, hyperlinks, and up to two buttons

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qu5gx-03-do.png?alt=media&token=54c7e12c-059a-40ad-b68f-e4f3b1946ff6=s0" /><br/><b>Do:</b> Use plain tooltips to label icon-only buttons</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6quvhe-04-dont.png?alt=media&token=466cc2dc-80ff-4403-8acb-f6b0d41e053d=s0" /><br/><b>Don't:</b> Plain tooltips are unnecessary when the element already has label text</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qx7on-05-do.png?alt=media&token=50c9d4d6-aadf-417e-a29e-81b9e1d2cc79=s0" /><br/><b>Do:</b> Use rich tooltips for extra information, actions, or new feature announcements</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qywbu-6-dont.png?alt=media&token=c5310581-00d7-418b-bbe9-029a15177797=s0" /><br/><b>Don't:</b> Don't hide critical information in tooltips — use an interruptive dialog instead</td>
</tr></table>

---

## Configurations

Rich tooltips support multiple layout configurations based on the presence of a subhead and buttons.

![5 common configurations of a rich tooltip.](https://lh3.googleusercontent.com/ugboOBv4d02ZjiINyFUTI_S1IvPfMXxkgoCqYcmns1a23omQzQaAHWU5NzrwD7G96VQpAU3oi6sx14qtL_RTAIbZJXwCS9VAWV7m6NpCLlFm=s0)

| #   | Configuration                             |
| --- | ----------------------------------------- |
| 1   | Subhead, supporting text, and two buttons |
| 2   | Subhead, supporting text, and one button  |
| 3   | Subhead and supporting text               |
| 4   | Supporting text and one button            |
| 5   | Supporting text and two buttons           |

---

## Sub-elements

### Supporting text (plain)

Plain tooltip supporting text should be a brief, single-line label describing the UI element.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6r2ci0-08-do.png?alt=media&token=2c4dcc41-7aa5-4460-8420-5c5f7ed17184=s0" /><br/><b>Do:</b> Briefly describe the UI element</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6r3rse-09-caution.png?alt=media&token=b4c31f25-226a-484f-8620-0972b9fa0e17=s0" /><br/><b>Caution:</b> Avoid wrapping to multiple lines or including too much information</td>
</tr></table>

### Subhead (rich, optional)

Keep subheads brief — ideally a single line that summarizes the tooltip message. Subheads are especially important when the tooltip appears automatically (e.g. on page load to introduce a feature).

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6r9edz-11-do.png?alt=media&token=c560ef69-f81e-4510-ba45-8426d28f9236=s0" /><br/><b>Do:</b> Summarize the message in a few words</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ra39j-12-dont.png?alt=media&token=6ff1b6f2-1f88-4a08-8628-1f11e09ecf10=s0" /><br/><b>Don't:</b> Avoid wrapping to more than one line</td>
</tr></table>

### Text buttons (rich, optional)

Rich tooltips support up to two text buttons, which should be brief and relevant to the supporting text. Keep buttons short enough to sit side by side.

![Caution: Avoid stacking buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6rdax0-13-Caution.png?alt=media&token=5ac76c53-02d0-4be4-aaf5-3387d8cf6672=s0)

---

## Placement

### Plain tooltips

By default, plain tooltips appear **directly above** the parent element.

- **With visual boundary** (e.g. button container): 4dp distance
- **Without visual boundary** (e.g. text baseline): 8dp distance
- If the element is in an **app bar**, the tooltip appears **below** at the same distance

![Plain tooltip with a 4dp distance between the target and tooltip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6rg1hz-14.png?alt=media&token=c2d92bab-3dc6-4be2-9bac-836c1d2ada4b=s0)

### Rich tooltips

By default, rich tooltips appear at the **bottom right** of the parent element. They dynamically reposition in 8dp increments to stay on screen, and should never cover the parent element.

On desktop, tooltips may appear centered below the parent and remain visible while the cursor moves within the target region.

![A rich tooltip in 4 different corners, changing position to remain fully on screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6riq0z-15.png?alt=media&token=0b5c26d7-7287-4e8e-a53b-26450413f75a=s0)

---

## Behavior

### Triggering

- **Desktop**: hover over the parent element to show a tooltip
- **Mobile**: tap and hold the parent element
- **Persistent rich tooltips**: triggered by click/tap or on page load (not hover)

### Transient dismissal

Both plain and rich tooltips disappear **1.5 seconds** after navigating away from the target region. Opening a new tooltip immediately closes any currently visible tooltip — only one tooltip is displayed at a time.

![Don't: Only display one tooltip at a time](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ro0ii-17-dont.png?alt=media&token=41b0681c-f04b-4767-b998-67f6b140a4ce=s0)

### Persistent rich tooltips

Persistent rich tooltips appear when:

- The parent element is clicked or tapped
- The page loads to introduce a new feature

They remain visible even when leaving the target region and only disappear when the user interacts with another UI element. Hovering does not trigger persistent tooltips.

Avoid using persistent rich tooltips on icon buttons.

![Don't: Don't use persistent rich tooltips on icon buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6rq50p-18-dont.png?alt=media&token=bd1b821d-c434-4c6d-8591-2e6ce417a95d=s0)

---

## Measurements

### Plain tooltip

![Measurements of a plain tooltip.](https://lh3.googleusercontent.com/abK2uBeEApgbWbQQrMibCEslnADu90AFpFRPbT9RVSeKZfO8baP5s6myVNJKPIUtmc_S-X99Pt046jQuk_MyMPv4IvvtWrRWieaqNLxR0SQ=s0)

| Attribute        | Value |
| ---------------- | ----- |
| Container height | 24dp  |
| Padding          | 8dp   |

### Rich tooltip

![Measurements of a rich tooltip.](https://lh3.googleusercontent.com/pWZE_wQc3sD5MfnKWOQ1zSkmWFK-kLD9AHIu7iUz7DPUnF9xsNdzNhcOLz6f3jTBP-8BSkD-sKs32u3KB-9ButLnL3l_p4DJw-je_waZCy2cZw=s0)

| Attribute              | Value |
| ---------------------- | ----- |
| Top padding            | 12dp  |
| Bottom padding         | 8dp   |
| Left and right padding | 16dp  |

---

## Color Tokens

### Plain Tooltip

#### Enabled / Container

![2 color roles of a plain tooltip.](https://lh3.googleusercontent.com/Vf161JCMtFZVXhyzhmfRoDmGW_vYVmOm5QdZOy8djJu0aEPo-gylreVY1ooQuFsAy-VFBqzRHbt1Qp6eF6znt5fJM98s4F43QbuZlmm_NHqR=s0)

1. Inverse on surface — 2. Inverse surface

| Element | Token                                   | Value                             |
| ------- | --------------------------------------- | --------------------------------- |
| Color   | `md.comp.plain-tooltip.container.color` | `md.sys.color.inverse-surface`    |
| Shape   | `md.comp.plain-tooltip.container.shape` | `md.sys.shape.corner.extra-small` |

#### Enabled / Supporting text

| Element     | Token                                               | Value                                     |
| ----------- | --------------------------------------------------- | ----------------------------------------- |
| Font        | `md.comp.plain-tooltip.supporting-text.font`        | `md.sys.typescale.body-small.font`        |
| Line height | `md.comp.plain-tooltip.supporting-text.line-height` | `md.sys.typescale.body-small.line-height` |
| Size        | `md.comp.plain-tooltip.supporting-text.size`        | `md.sys.typescale.body-small.size`        |
| Weight      | `md.comp.plain-tooltip.supporting-text.weight`      | `md.sys.typescale.body-small.weight`      |
| Tracking    | `md.comp.plain-tooltip.supporting-text.tracking`    | `md.sys.typescale.body-small.tracking`    |
| Type        | `md.comp.plain-tooltip.supporting-text.type`        | Aa                                        |
| Color       | `md.comp.plain-tooltip.supporting-text.color`       | `md.sys.color.inverse-on-surface`         |

---

### Rich Tooltip

#### Enabled / Container

![4 color roles of a rich tooltip.](https://lh3.googleusercontent.com/WodvJBwtv0NFdfsgMkOfxWI698jM_8D6CP7cqU4CmxliBFAtsYOv1CqBQTgkHIP1gkYYLWMaTB9kISoEVnKcS3BCWCtOkm9pIkmmK91Z9yA=s0)

1. On surface variant — 2. Surface container — 3. On surface variant — 4. Primary

| Element                  | Token                                                     | Value                            |
| ------------------------ | --------------------------------------------------------- | -------------------------------- |
| Color                    | `md.comp.rich-tooltip.container.color`                    | `md.sys.color.surface-container` |
| Elevation                | `md.comp.rich-tooltip.container.elevation`                | `md.sys.elevation.level2`        |
| Surface tint layer color | `md.comp.rich-tooltip.container.surface-tint-layer.color` | `md.sys.color.surface-tint`      |
| Shadow color             | `md.comp.rich-tooltip.container.shadow-color`             | `md.sys.color.shadow`            |
| Shape                    | `md.comp.rich-tooltip.container.shape`                    | `md.sys.shape.corner.medium`     |

#### Enabled / Subhead

| Element     | Token                                      | Value                                      |
| ----------- | ------------------------------------------ | ------------------------------------------ |
| Font        | `md.comp.rich-tooltip.subhead.font`        | `md.sys.typescale.title-small.font`        |
| Line height | `md.comp.rich-tooltip.subhead.line-height` | `md.sys.typescale.title-small.line-height` |
| Size        | `md.comp.rich-tooltip.subhead.size`        | `md.sys.typescale.title-small.size`        |
| Weight      | `md.comp.rich-tooltip.subhead.weight`      | `md.sys.typescale.title-small.weight`      |
| Tracking    | `md.comp.rich-tooltip.subhead.tracking`    | `md.sys.typescale.title-small.tracking`    |
| Type        | `md.comp.rich-tooltip.subhead.type`        | Aa                                         |
| Color       | `md.comp.rich-tooltip.subhead.color`       | `md.sys.color.on-surface-variant`          |

#### Enabled / Supporting text

| Element     | Token                                              | Value                                      |
| ----------- | -------------------------------------------------- | ------------------------------------------ |
| Font        | `md.comp.rich-tooltip.supporting-text.font`        | `md.sys.typescale.body-medium.font`        |
| Line height | `md.comp.rich-tooltip.supporting-text.line-height` | `md.sys.typescale.body-medium.line-height` |
| Size        | `md.comp.rich-tooltip.supporting-text.size`        | `md.sys.typescale.body-medium.size`        |
| Weight      | `md.comp.rich-tooltip.supporting-text.weight`      | `md.sys.typescale.body-medium.weight`      |
| Tracking    | `md.comp.rich-tooltip.supporting-text.tracking`    | `md.sys.typescale.body-medium.tracking`    |
| Type        | `md.comp.rich-tooltip.supporting-text.type`        | Aa                                         |
| Color       | `md.comp.rich-tooltip.supporting-text.color`       | `md.sys.color.on-surface-variant`          |

#### Enabled / Action label text

| Element     | Token                                                | Value                                      |
| ----------- | ---------------------------------------------------- | ------------------------------------------ |
| Font        | `md.comp.rich-tooltip.action.label-text.font`        | `md.sys.typescale.label-large.font`        |
| Line height | `md.comp.rich-tooltip.action.label-text.line-height` | `md.sys.typescale.label-large.line-height` |
| Size        | `md.comp.rich-tooltip.action.label-text.size`        | `md.sys.typescale.label-large.size`        |
| Weight      | `md.comp.rich-tooltip.action.label-text.weight`      | `md.sys.typescale.label-large.weight`      |
| Tracking    | `md.comp.rich-tooltip.action.label-text.tracking`    | `md.sys.typescale.label-large.tracking`    |
| Type        | `md.comp.rich-tooltip.action.label-text.type`        | Aa                                         |
| Color       | `md.comp.rich-tooltip.action.label-text.color`       | `md.sys.color.primary`                     |

#### Hovered / Action

| Element             | Token                                                   | Value                                    |
| ------------------- | ------------------------------------------------------- | ---------------------------------------- |
| Label text color    | `md.comp.rich-tooltip.action.hover.label-text.color`    | `md.sys.color.primary`                   |
| State layer color   | `md.comp.rich-tooltip.action.hover.state-layer.color`   | `md.sys.color.primary`                   |
| State layer opacity | `md.comp.rich-tooltip.action.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

#### Focused / Action

| Element             | Token                                                   | Value                                    |
| ------------------- | ------------------------------------------------------- | ---------------------------------------- |
| Label text color    | `md.comp.rich-tooltip.action.focus.label-text.color`    | `md.sys.color.primary`                   |
| State layer color   | `md.comp.rich-tooltip.action.focus.state-layer.color`   | `md.sys.color.primary`                   |
| State layer opacity | `md.comp.rich-tooltip.action.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

#### Pressed / Action

| Element             | Token                                                     | Value                                      |
| ------------------- | --------------------------------------------------------- | ------------------------------------------ |
| Label text color    | `md.comp.rich-tooltip.action.pressed.label-text.color`    | `md.sys.color.primary`                     |
| State layer color   | `md.comp.rich-tooltip.action.pressed.state-layer.color`   | `md.sys.color.primary`                     |
| State layer opacity | `md.comp.rich-tooltip.action.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

---

## Accessibility

### Interaction & Triggering

- Tooltips appear when an actionable element (button, navigation rail item) is **hovered** or **focused**
- Rich tooltips can also appear when an element is **selected** (clicked/tapped)
- Tooltips without required actions should remain on screen long enough for people to receive the information without disrupting their flow
- Tooltip containers should never block important information or prevent completing an action

![Tooltips can appear on hover or focus to explain actions](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ru5uh-02.png?alt=media&token=1a4085d9-9e8f-42d5-9aab-470093ca7dbf=s0)

![Rich tooltips can appear when an element is selected](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ruf33-03.png?alt=media&token=98c44750-5967-4b0e-8e26-933fd0cdcdbe=s0)

### Focus Order

Focus order within a rich tooltip moves top to bottom between interactive elements. Avoid trapping screen reader or keyboard focus — users should be able to move linearly through the rest of the page.

![Focus order in a rich tooltip: parent element → inline link → text button](https://lh3.googleusercontent.com/KCWqivAVbjIzMGBp1AVQbceVT02tQdKQSNJOd-FA_ARUYwMLQX2GUYZi55K0wxG_c2dYdGFnsBnB-_1n-m8thxhCgVavyU0W9_Dz5C9aVBLEdA=s0)

1. Parent element
2. Inline link
3. Text button

### Keyboard Navigation

| Key            | Action                              |
| -------------- | ----------------------------------- |
| Tab            | Focus lands on button, if available |
| Space or Enter | Activates the focused element       |

### Labeling

- Tooltip containers should have the **Tooltip** role (or platform equivalent)
- All interactive elements within the tooltip should be labeled according to their own accessibility guidance

![Rich and plain tooltips with accessibility labels](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ry9ry-05.png?alt=media&token=8d4b4d42-2cb4-4496-ac89-02fed5e0e0fb=s0)

### Density

All interactive tooltip elements should meet the minimum **48dp** touch target size.

---

## M2 → M3 Differences

<table><tr>
<td><img src="https://lh3.googleusercontent.com/eJToL16cXcvuWuH7Ajb0sRtM7yFr6qMf_tbIdsR5hAfrIRinT4UfyLsr2Me5goaDHO1RAXuagPp28FvTXNegY6hZ64NOupwt14CTLHZZjsKk=s0" /><br/>M2: Rich tooltips have slightly rounded corners</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6q4dmm-03.png?alt=media&token=3e7f1900-0e76-458f-a6dd-e226fe64a633=s0" /><br/>M3: Rich tooltips have more rounded corners and support dynamic color</td>
</tr></table>

| Aspect | M2                              | M3                                                  |
| ------ | ------------------------------- | --------------------------------------------------- |
| Color  | Fixed color mappings            | New color mappings with dynamic color compatibility |
| Shape  | Slightly rounded corners (rich) | More rounded corners (rich), `medium` shape token   |
