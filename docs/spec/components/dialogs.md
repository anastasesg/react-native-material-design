# Dialogs — M3 Component Reference

> Dialogs provide important prompts in a user flow, requiring users to act on information before continuing.

Sources: [Overview](https://m3.material.io/components/dialogs/overview) · [Specs](https://m3.material.io/components/dialogs/specs) · [Guidelines](https://m3.material.io/components/dialogs/guidelines) · [Accessibility](https://m3.material.io/components/dialogs/accessibility)

---

## Variants

![Basic and full-screen dialog](https://lh3.googleusercontent.com/6kWyLPu-M7uuqJv2DLtnQd6MuRy2S5Pu5MzM-Q54y9MiOOFlX-2CLU9r1lATTgQLiUR7hUB2pBSVzT5qyoe9A3T1TWQ-3WOG9V50IM33Jkt3fg=s0)

1. Basic dialog
2. Full-screen dialog

![Diagram of basic and full-screen dialogs](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfc7pz-02.png?alt=media&token=48e473e3-7381-4089-8e91-11de31b32586=s0)

| Variant            | Description                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| Basic dialog       | Interrupts with urgent info, details, or actions (alerts, quick selection, confirmation)          |
| Full-screen dialog | Fills the entire screen for tasks requiring a series of steps; compact window sizes only (mobile) |

---

## Anatomy

### Basic dialog

![7 elements of basic dialog](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfhos4-07.png?alt=media&token=c26b3dc0-c5bd-4fe6-8081-13019a21814c=s0)

![Anatomy diagram numbering dialog elements](https://lh3.googleusercontent.com/8zwGCq50u42Pisi3XIhquY9uN3sTnFAYcLYzdMcQ-7RGPou4Uyy5QzWjN3NWXlHALJhtxMM-lECAxX1_duYupPka9gdFn-THeTzCdggkOUit=s0)

1. **Container** — holds all dialog content; appears above other screen elements
2. **Icon** (optional) — decorative icon above the headline
3. **Headline** (optional) — brief, clear statement or question
4. **Supporting text** — description or body content
5. **Divider** (optional) — separates content sections
6. **Button label text** — action buttons (confirm/dismiss)
7. **Scrim** — temporary overlay behind the dialog to reduce background prominence

### Full-screen dialog

![6 elements of full-screen dialog](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfick9-08.png?alt=media&token=7287dba3-0638-4a9f-afde-dcc94ce608e2=s0)

![Diagram numbering 6 full-screen dialog elements](https://lh3.googleusercontent.com/DkDLF7N_cYRseSctPY0mcn5UU3s5M37UtbNZCMovSLfZacqNP1ZR-1ur4muZ0RXpZAxdcqi65q7Uc7GRZiLumQhf54hpWiUNMxgJbJNEIzc8RQ=s0)

1. **Container** — fills the entire screen
2. **Header** — top region with close icon and headline
3. **Icon** (close affordance) — dismisses the dialog
4. **Headline** (optional) — title of the dialog task
5. **Text button** — confirming action (e.g. Save, Create)
6. **Divider** (optional)

---

## Usage & When to Use

Dialogs are modal windows that appear in front of app content, disabling all other functionality until confirmed, dismissed, or a required action is taken. They are purposefully interruptive — use them sparingly.

- Use for prompts that block an app's normal operation
- Use for critical information requiring a specific task, decision, or acknowledgement
- Commonly used to confirm high-risk actions like deleting progress
- Each dialog should be dedicated to completing a single task
- For less critical information, use a snackbar or dropdown menu instead

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfcqhr-03_do.png?alt=media&token=3655fc78-54b9-44f6-a239-d93670bb087e=s0" /><br/><b>Do:</b> Use dialogs for prompts that block an app's operation, for critical info requiring a specific user task</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfdc9w-03_dont.png?alt=media&token=6a548db0-3131-46af-9f44-d30b74de4904=s0" /><br/><b>Don't:</b> Don't use dialogs for low- or medium-priority info; use a snackbar instead</td>
</tr></table>

### Similar components

![Snackbar showing synced photos message](https://lh3.googleusercontent.com/XLiUu7mOltTNoUojZheRl95_BXn_O9vc9-PwyzL2W_vZPBccPC1bntpTZ6KwgzKDMDt8UGih90E9GPDGd-uyGWZz0eqLMZOItywMT-yiDxS7=s0)

| Component | Importance      | Action needed                                              |
| --------- | --------------- | ---------------------------------------------------------- |
| Snackbar  | Low importance  | Can disappear automatically                                |
| Dialog    | High importance | Required: blocks main content until an action is confirmed |

---

## Sub-elements

### Container and scrim

Dialog containers appear above other screen elements. The scrim — a temporary overlay — reduces the prominence of background surfaces to focus attention on the dialog.

![Basic dialog shown above a scrim overlay](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfkf69-09.png?alt=media&token=76b7d3c2-c1db-4dc4-aabb-8df0851f4dd7=s0)

### Headline

The dialog's purpose should be communicated by its headline and buttons. Headlines should:

- Contain a brief, clear statement or question
- Avoid apologies ("Sorry for the interruption"), alarm ("Warning!"), or ambiguity ("Are you sure?")
- Be succinct; can wrap to a second line if necessary, and be truncated

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfl8j1-10_do.png?alt=media&token=6685809e-faa9-4002-a1ca-7b6355cc0c4a=s0" /><br/><b>Do:</b> Pose a specific question with clear actions</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sflmm0-11_don't.png?alt=media&token=2b32fc1c-10ea-4041-8719-5a0bbd515d5e=s0" /><br/><b>Don't:</b> Don't use ambiguous questions like "Are you sure?"</td>
</tr></table>

In full-screen dialogs, long or variable-length headlines (e.g. translations) should be placed in the content area rather than the app bar to avoid truncation.

![Caution: truncated long headline in app bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfm2yt-12_Caution.png?alt=media&token=bb20aab8-9a35-4eaf-9f8c-f2fc29f20a6c=s0)

![Do: shorter headline in app bar, longer text in content area](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfmezr-13_do.png?alt=media&token=5244a6e2-9faa-44ec-998d-12d486666021=s0)

### Buttons

Dialog actions are represented as buttons aligned to the trailing edge, with the confirmation button closest to the edge. Alignment mirrors automatically for RTL languages.

Rules:

- Maximum of two actions per dialog
- Single action: must be acknowledgement only (e.g. "OK")
- Two actions: one confirming, one dismissing
- Disable confirming actions until a choice is made; dismissive actions are never disabled
- Avoid a third action like "Learn more" that navigates away, leaving the dialog unfinished

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfmqqd-14_do.png?alt=media&token=12972233-4c46-4c82-9b80-86136ae125ca=s0" /><br/><b>Do:</b> Disable confirming actions until a choice is made</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfn276-15_don't.png?alt=media&token=51d3809f-8761-4ad0-91d1-d3b4b9bc21dc=s0" /><br/><b>Don't:</b> Don't place dismissive actions to the right of confirming actions</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfq9tm-16_do.png?alt=media&token=1ac568e8-5f77-443d-9a0f-ee24e2d5ae71=s0" /><br/><b>Do:</b> A single action may be provided only as an acknowledgement</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfqm2i-17_don't.png?alt=media&token=834d6d37-9c33-4d38-a72a-ba3fc1c84783=s0" /><br/><b>Don't:</b> Avoid presenting unclear choices — "Cancel" doesn't make sense when no clear action is proposed</td>
</tr></table>

![Do: display two text buttons side-by-side](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfqzp1-18_do.png?alt=media&token=0c0f6350-ea79-41f6-a82b-8adcb6ef4f5d=s0)

![Caution: stacked buttons for longer text; confirming action appears above dismissive](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfre4i-19_caution.png?alt=media&token=e19e944e-1e50-437b-81e7-643e4dd9dd6b=s0)

![Caution: "Learn more" navigates away, leaving dialog in indeterminate state](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfrskh-20.png?alt=media&token=ce701d0c-c122-4fda-9244-be331795f9a5=s0)

---

## Basic Dialog

Basic dialogs interrupt with urgent info, details, or actions. Common use cases include alerts, quick selection, and confirmation. They can contain lists, date pickers, and time pickers.

![Basic dialog action request](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfumns-21.png?alt=media&token=f60188e3-24f3-4ede-a5c2-ae41ebbda58f=s0)

![Basic dialog confirmation](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfuxlx-22.png?alt=media&token=356b591f-4aa3-4889-95f5-2c579e0c699f=s0)

![Date picker dialog](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfzk1g-23.png?alt=media&token=5d0f7fb7-2646-4c2d-9450-71e463c72f7f=s0)

![Time picker dialog](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfxxnd-24.png?alt=media&token=3b205d81-1479-4bf5-aa8c-c803aa41e7de=s0)

---

## Full-screen Dialog

Full-screen dialogs fill the entire screen for tasks requiring multiple steps (e.g. creating a calendar entry). They are the only dialog type over which other dialogs can appear. Use a container transform transition to transition a FAB into a full-screen dialog.

Full-screen dialogs are for **compact window sizes only** (mobile). For medium and expanded windows, use a basic dialog.

Use cases:

- Dialogs containing components requiring keyboard input (e.g. form fields)
- When changes aren't saved instantly
- When components within the dialog open additional dialogs

### Saving selections

Use **Save** to save selections. The close icon or dismissive actions (Cancel, Back) should close the dialog.

### Confirmation

The confirmation action should clearly describe what happens next (e.g. **Send**, **Create**). Avoid vague terms like **Done**, **OK**, or **Close**. Only trigger an additional basic dialog if the action fails. Don't disable the confirmation button.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sg5wkr-27_do.png?alt=media&token=8aa1b2c7-d3e9-4c8d-a171-dd8f5920102a=s0" /><br/><b>Do:</b> "Create" button clearly communicates the event will be created</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sg67kv-28_don't.png?alt=media&token=a6a5c838-d758-4465-b05e-f29ac5eb0d3f=s0" /><br/><b>Don't:</b> Don't trigger an additional basic dialog when the confirming action is selected</td>
</tr></table>

### Dismissing

When someone dismisses a full-screen dialog with unsaved changes, show a basic dialog to confirm discarding changes.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sg91cq-29_do.png?alt=media&token=1829089e-6440-4fcf-8d7b-5b4dd688ad92=s0" /><br/><b>Do:</b> Confirm that the user wants to discard unsaved changes</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sg9bz5-30_don't.png?alt=media&token=0d99e0df-e3f2-4c02-9a9c-598c311f8e7c=s0" /><br/><b>Don't:</b> Don't use the confirming action to dismiss the full-screen dialog</td>
</tr></table>

### Error messages

- Field-related errors: display inline where they occur (text fields have built-in error messaging; add messages next to checkboxes/radio buttons)
- General errors (e.g. network issues): display in a basic dialog when the confirming action fails
- Show all errors at once so users can fix everything before retrying

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sg9nzm-31_do.png?alt=media&token=80b7cdd4-6892-4661-a674-6e85c62b9122=s0" /><br/><b>Do:</b> Display field-related errors inline</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sg9xoh-32_caution.png?alt=media&token=5d180627-2303-4b00-92e5-39d90741c8fd=s0" /><br/><b>Caution:</b> Errors unrelated to fields can be displayed in a basic dialog</td>
</tr></table>

### Navigation

The close "X" icon button should be the only navigation option in the full-screen dialog's app bar. Launching a full-screen dialog temporarily resets the app's perceived elevation, allowing simple menus or dialogs to appear above it.

---

## Behavior

### Appearing

Dialogs appear without warning, requiring users to pause their current task. They use an enter and exit transition pattern. Use them sparingly — not every choice warrants interruption.

### Position

Dialogs retain focus until dismissed or a required action is taken. They shouldn't be obscured by other elements (except full-screen dialogs, which can have other dialogs above them).

![A basic dialog covering a full-screen dialog](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgqe15-38.png?alt=media&token=9a9c7716-0f17-4ee5-a3c9-a6fb5114547a=s0)

### Scrolling

Avoid scrolling in dialog content when possible. When required, the title pins to the top and buttons pin to the bottom so both remain visible during scroll. Dialogs do not scroll with background elements.

---

## Measurements

### Basic dialog

![Basic dialog padding and size measurements](https://lh3.googleusercontent.com/0b11O-Tlquj7LEzCkk4IOw1EuhHgUI6KmNyMozEEr2aANs_Q3FshFNUhXzUkn2c3occn1_9y1XSndIceqhSPiMyAT4g5lr6xwcWZtqCvpNdnHw=s0)

| Attribute                        | Value                |
| -------------------------------- | -------------------- |
| Container shape                  | 28dp corner radius   |
| Container height                 | Dynamic              |
| Container width                  | Min 280dp; Max 560dp |
| Divider height                   | 1dp                  |
| Icon size                        | 24dp                 |
| Minimum width                    | 280dp                |
| Maximum width                    | 560dp                |
| Alignment with icon              | Center-aligned       |
| Alignment without icon           | Start-aligned        |
| Top/Left/right/bottom padding    | 24dp                 |
| Padding between buttons          | 8dp                  |
| Padding between title and body   | 16dp                 |
| Padding between icon and title   | 16dp                 |
| Padding between body and actions | 24dp                 |

### Full-screen dialog

![Full-screen dialog padding and size measurements](https://lh3.googleusercontent.com/5vPLkkKzW-CnlkhE29h4YwG8QzCsM7QdxQpOS0hRO82Ox4D7VqBbZgPWKd2nHnj916gkB29tjl7k_fnuuffRyMGOmS9Xg_MJpMIsMWY-Meo=s0)

| Attribute                    | Value                      |
| ---------------------------- | -------------------------- |
| Container shape              | 0dp corner radius          |
| Container height             | Dynamic                    |
| Container width              | Container width; Max 560dp |
| Header height                | 56dp                       |
| Header width                 | Container width            |
| Headline text alignment      | Start-aligned              |
| Divider height               | 1dp                        |
| Icon (close affordance) size | 24dp                       |
| Bottom action bar height     | 56dp                       |
| Bottom action bar width      | Container width            |
| Top/left/right padding       | 24dp                       |
| Padding between elements     | 8dp                        |

---

## Color Tokens

### Basic dialog color

![Color mapping diagram — 6 color roles across dialog and scrim](https://lh3.googleusercontent.com/OaqvzKCkUteypP4OIa5ABlelFupDNk5XXyc8cxl0SYBNXCJPqROSqNWKjvxWk1FJpSzOwqADZvwMhPgqsgj5tbMKKdvS8L1YWWmSvJ-sDi2K=s0)

1. Surface container high
2. Secondary
3. On surface
4. On surface variant
5. Primary
6. Scrim

#### Dialog — Basic

**Enabled / Container**

| Name                                      | Token                                               | Value                               |
| ----------------------------------------- | --------------------------------------------------- | ----------------------------------- |
| Dialog container color                    | `md.comp.dialog.container.color`                    | md.sys.color.surface-container-high |
| Dialog container elevation                | `md.comp.dialog.container.elevation`                | md.sys.elevation.level3             |
| Dialog container surface tint layer color | `md.comp.dialog.container.surface-tint-layer.color` | md.sys.color.surface-tint           |
| Dialog container shape                    | `md.comp.dialog.container.shape`                    | md.sys.shape.corner.extra-large     |

**Enabled / Label text**

| Name                                 | Token                                          | Value                                    |
| ------------------------------------ | ---------------------------------------------- | ---------------------------------------- |
| Dialog action label text font        | `md.comp.dialog.action.label-text.font`        | md.sys.typescale.label-large.font        |
| Dialog action label text line height | `md.comp.dialog.action.label-text.line-height` | md.sys.typescale.label-large.line-height |
| Dialog action label text size        | `md.comp.dialog.action.label-text.size`        | md.sys.typescale.label-large.size        |
| Dialog action label text weight      | `md.comp.dialog.action.label-text.weight`      | md.sys.typescale.label-large.weight      |
| Dialog action label text tracking    | `md.comp.dialog.action.label-text.tracking`    | md.sys.typescale.label-large.tracking    |
| Label text type style                | `md.comp.dialog.action.label-text.type`        | Aa                                       |
| Dialog action label text color       | `md.comp.dialog.action.label-text.color`       | md.sys.color.primary                     |

**Enabled / Icon**

| Name              | Token                                 | Value                  |
| ----------------- | ------------------------------------- | ---------------------- |
| Dialog icon size  | `md.comp.dialog.with-icon.icon.size`  | 24dp                   |
| Dialog icon color | `md.comp.dialog.with-icon.icon.color` | md.sys.color.secondary |

**Enabled / Subhead**

| Name                       | Token                                | Value                                       |
| -------------------------- | ------------------------------------ | ------------------------------------------- |
| Dialog subhead font        | `md.comp.dialog.subhead.font`        | md.sys.typescale.headline-small.font        |
| Dialog subhead line height | `md.comp.dialog.subhead.line-height` | md.sys.typescale.headline-small.line-height |
| Dialog subhead size        | `md.comp.dialog.subhead.size`        | md.sys.typescale.headline-small.size        |
| Dialog subhead weight      | `md.comp.dialog.subhead.weight`      | md.sys.typescale.headline-small.weight      |
| Dialog subhead tracking    | `md.comp.dialog.subhead.tracking`    | md.sys.typescale.headline-small.tracking    |
| Subhead type style         | `md.comp.dialog.subhead.type`        | Aa                                          |
| Dialog subhead color       | `md.comp.dialog.subhead.color`       | md.sys.color.on-surface                     |

**Enabled / Headline**

| Name                        | Token                                 | Value                                       |
| --------------------------- | ------------------------------------- | ------------------------------------------- |
| Dialog headline font        | `md.comp.dialog.headline.font`        | md.sys.typescale.headline-small.font        |
| Dialog headline line height | `md.comp.dialog.headline.line-height` | md.sys.typescale.headline-small.line-height |
| Dialog headline size        | `md.comp.dialog.headline.size`        | md.sys.typescale.headline-small.size        |
| Dialog headline weight      | `md.comp.dialog.headline.weight`      | md.sys.typescale.headline-small.weight      |
| Dialog headline tracking    | `md.comp.dialog.headline.tracking`    | md.sys.typescale.headline-small.tracking    |
| Headline type style         | `md.comp.dialog.headline.type`        | Aa                                          |
| Dialog headline color       | `md.comp.dialog.headline.color`       | md.sys.color.on-surface                     |

**Enabled / Divider**

| Name                  | Token                                        | Value                |
| --------------------- | -------------------------------------------- | -------------------- |
| Dialog divider color  | `md.comp.dialog.with-divider.divider.color`  | md.sys.color.outline |
| Dialog divider height | `md.comp.dialog.with-divider.divider.height` | 1dp                  |

**Enabled / Supporting text**

| Name                               | Token                                        | Value                                    |
| ---------------------------------- | -------------------------------------------- | ---------------------------------------- |
| Dialog supporting text font        | `md.comp.dialog.supporting-text.font`        | md.sys.typescale.body-medium.font        |
| Dialog supporting text line height | `md.comp.dialog.supporting-text.line-height` | md.sys.typescale.body-medium.line-height |
| Dialog supporting text size        | `md.comp.dialog.supporting-text.size`        | md.sys.typescale.body-medium.size        |
| Dialog supporting text weight      | `md.comp.dialog.supporting-text.weight`      | md.sys.typescale.body-medium.weight      |
| Dialog supporting text tracking    | `md.comp.dialog.supporting-text.tracking`    | md.sys.typescale.body-medium.tracking    |
| Supporting text type style         | `md.comp.dialog.supporting-text.type`        | Aa                                       |
| Dialog supporting text color       | `md.comp.dialog.supporting-text.color`       | md.sys.color.on-surface-variant          |

**Hovered / Label text**

| Name                                 | Token                                          | Value                |
| ------------------------------------ | ---------------------------------------------- | -------------------- |
| Dialog action hover label text color | `md.comp.dialog.action.hover.label-text.color` | md.sys.color.primary |

**Hovered / State layer**

| Name                                    | Token                                             | Value                                  |
| --------------------------------------- | ------------------------------------------------- | -------------------------------------- |
| Dialog action hover state layer color   | `md.comp.dialog.action.hover.state-layer.color`   | md.sys.color.primary                   |
| Dialog action hover state layer opacity | `md.comp.dialog.action.hover.state-layer.opacity` | md.sys.state.hover.state-layer-opacity |

**Focused / Label text**

| Name                                 | Token                                          | Value                |
| ------------------------------------ | ---------------------------------------------- | -------------------- |
| Dialog action focus label text color | `md.comp.dialog.action.focus.label-text.color` | md.sys.color.primary |

**Focused / State layer**

| Name                                    | Token                                             | Value                                  |
| --------------------------------------- | ------------------------------------------------- | -------------------------------------- |
| Dialog action focus state layer color   | `md.comp.dialog.action.focus.state-layer.color`   | md.sys.color.primary                   |
| Dialog action focus state layer opacity | `md.comp.dialog.action.focus.state-layer.opacity` | md.sys.state.focus.state-layer-opacity |

**Pressed / Label text**

| Name                                   | Token                                            | Value                |
| -------------------------------------- | ------------------------------------------------ | -------------------- |
| Dialog action pressed label text color | `md.comp.dialog.action.pressed.label-text.color` | md.sys.color.primary |

**Pressed / State layer**

| Name                                      | Token                                               | Value                                    |
| ----------------------------------------- | --------------------------------------------------- | ---------------------------------------- |
| Dialog action pressed state layer color   | `md.comp.dialog.action.pressed.state-layer.color`   | md.sys.color.primary                     |
| Dialog action pressed state layer opacity | `md.comp.dialog.action.pressed.state-layer.opacity` | md.sys.state.pressed.state-layer-opacity |

### Full-screen dialog color

![Full-screen dialog color mapping — 5 roles](https://lh3.googleusercontent.com/i7xYaPoPLi48zudMGabAj82oZQLxetMFg4YojUXfY9GlrVVdonnVQurEssQzX0LHqABfe9QcTts3lMtKa_-jYDektbV8HGkmAIKkiDuF573F8g=s0)

1. Surface container high
2. On surface
3. On surface
4. Primary
5. On surface variant

#### Dialog — Full screen

**Enabled / Container**

| Name                                                         | Token                                                                  | Value                          |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- | ------------------------------ |
| Full screen dialog on-scroll container color                 | `md.comp.full-screen-dialog.header.on-scroll.container.color`          | md.sys.color.surface-container |
| Full screen dialog container color                           | `md.comp.full-screen-dialog.container.color`                           | md.sys.color.surface           |
| Full screen dialog container elevation                       | `md.comp.full-screen-dialog.container.elevation`                       | md.sys.elevation.level0        |
| Full screen dialog container shape                           | `md.comp.full-screen-dialog.container.shape`                           | md.sys.shape.corner.none       |
| Full screen dialog header container height                   | `md.comp.full-screen-dialog.header.container.height`                   | 56dp                           |
| Full screen dialog header container color                    | `md.comp.full-screen-dialog.header.container.color`                    | md.sys.color.surface           |
| Full screen dialog header container elevation                | `md.comp.full-screen-dialog.header.container.elevation`                | md.sys.elevation.level0        |
| Full screen dialog header container surface tint layer color | `md.comp.full-screen-dialog.header.container.surface-tint-layer.color` | md.sys.color.surface-tint      |
| Full screen dialog header on scroll container elevation      | `md.comp.full-screen-dialog.header.on-scroll.container.elevation`      | md.sys.elevation.level2        |
| Full screen dialog action bar container height               | `md.comp.full-screen-dialog.action-bar.container.height`               | 56dp                           |
| Full screen dialog action bar container color                | `md.comp.full-screen-dialog.action-bar.container.color`                | md.sys.color.surface           |
| Full screen dialog action bar container elevation            | `md.comp.full-screen-dialog.action-bar.container.elevation`            | md.sys.elevation.level0        |
| Full screen dialog action bar on scroll container elevation  | `md.comp.full-screen-dialog.action-bar.on-scroll.container.elevation`  | md.sys.elevation.level2        |

**Enabled / Label text**

| Name                                                    | Token                                                             | Value                                    |
| ------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------- |
| Full screen dialog header action label text font        | `md.comp.full-screen-dialog.header.action.label-text.font`        | md.sys.typescale.label-large.font        |
| Full screen dialog header action label text line height | `md.comp.full-screen-dialog.header.action.label-text.line-height` | md.sys.typescale.label-large.line-height |
| Full screen dialog header action label text size        | `md.comp.full-screen-dialog.header.action.label-text.size`        | md.sys.typescale.label-large.size        |
| Full screen dialog header action label text weight      | `md.comp.full-screen-dialog.header.action.label-text.weight`      | md.sys.typescale.label-large.weight      |
| Full screen dialog header action label text tracking    | `md.comp.full-screen-dialog.header.action.label-text.tracking`    | md.sys.typescale.label-large.tracking    |
| Full screen dialog header action label text type        | `md.comp.full-screen-dialog.header.action.label-text.type`        | Aa                                       |
| Full screen dialog header action label text color       | `md.comp.full-screen-dialog.header.action.label-text.color`       | md.sys.color.primary                     |
| Full screen dialog action bar label text font           | `md.comp.full-screen-dialog.action-bar.label-text.font`           | md.sys.typescale.label-large.font        |
| Full screen dialog action bar label text line height    | `md.comp.full-screen-dialog.action-bar.label-text.line-height`    | md.sys.typescale.label-large.line-height |
| Full screen dialog action bar label text size           | `md.comp.full-screen-dialog.action-bar.label-text.size`           | md.sys.typescale.label-large.size        |
| Full screen dialog action bar label text weight         | `md.comp.full-screen-dialog.action-bar.label-text.weight`         | md.sys.typescale.label-large.weight      |
| Full screen dialog action bar label text tracking       | `md.comp.full-screen-dialog.action-bar.label-text.tracking`       | md.sys.typescale.label-large.tracking    |
| Full screen dialog action bar label text type           | `md.comp.full-screen-dialog.action-bar.label-text.type`           | Aa                                       |
| Full screen dialog action bar label text color          | `md.comp.full-screen-dialog.action-bar.label-text.color`          | md.sys.color.primary                     |

**Enabled / Icon**

| Name                                 | Token                                          | Value                   |
| ------------------------------------ | ---------------------------------------------- | ----------------------- |
| Full screen dialog header icon color | `md.comp.full-screen-dialog.header.icon.color` | md.sys.color.on-surface |
| Full screen dialog header icon size  | `md.comp.full-screen-dialog.header.icon.size`  | 24dp                    |

**Enabled / Headline**

| Name                                           | Token                                                    | Value                                    |
| ---------------------------------------------- | -------------------------------------------------------- | ---------------------------------------- |
| Full screen dialog header headline color       | `md.comp.full-screen-dialog.header.headline.color`       | md.sys.color.on-surface                  |
| Full screen dialog header headline font        | `md.comp.full-screen-dialog.header.headline.font`        | md.sys.typescale.title-large.font        |
| Full screen dialog header headline line height | `md.comp.full-screen-dialog.header.headline.line-height` | md.sys.typescale.title-large.line-height |
| Full screen dialog header headline size        | `md.comp.full-screen-dialog.header.headline.size`        | md.sys.typescale.title-large.size        |
| Full screen dialog header headline weight      | `md.comp.full-screen-dialog.header.headline.weight`      | md.sys.typescale.title-large.weight      |
| Full screen dialog header headline tracking    | `md.comp.full-screen-dialog.header.headline.tracking`    | md.sys.typescale.title-large.tracking    |
| Header type style                              | `md.comp.full-screen-dialog.header.headline.type`        | Aa                                       |

**Enabled / Divider**

| Name                              | Token                                                    | Value                        |
| --------------------------------- | -------------------------------------------------------- | ---------------------------- |
| Full screen dialog divider color  | `md.comp.full-screen-dialog.with-divider.divider.color`  | md.sys.color.surface-variant |
| Full screen dialog divider height | `md.comp.full-screen-dialog.with-divider.divider.height` | 1dp                          |

**Hovered / Label text**

| Name                                                    | Token                                                             | Value                |
| ------------------------------------------------------- | ----------------------------------------------------------------- | -------------------- |
| Full screen dialog header action hover label text color | `md.comp.full-screen-dialog.header.action.hover.label-text.color` | md.sys.color.primary |
| Full screen dialog action bar hover label text color    | `md.comp.full-screen-dialog.action-bar.hover.label-text.color`    | md.sys.color.primary |

**Hovered / State layer**

| Name                                                       | Token                                                                | Value                                  |
| ---------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------- |
| Full screen dialog header action hover state layer color   | `md.comp.full-screen-dialog.header.action.hover.state-layer.color`   | md.sys.color.primary                   |
| Full screen dialog header action hover state layer opacity | `md.comp.full-screen-dialog.header.action.hover.state-layer.opacity` | md.sys.state.hover.state-layer-opacity |
| Full screen dialog action bar hover state layer color      | `md.comp.full-screen-dialog.action-bar.hover.state-layer.color`      | md.sys.color.primary                   |
| Full screen dialog action bar hover state layer opacity    | `md.comp.full-screen-dialog.action-bar.hover.state-layer.opacity`    | md.sys.state.hover.state-layer-opacity |

**Focused / Label text**

| Name                                                    | Token                                                             | Value                |
| ------------------------------------------------------- | ----------------------------------------------------------------- | -------------------- |
| Full screen dialog header action focus label text color | `md.comp.full-screen-dialog.header.action.focus.label-text.color` | md.sys.color.primary |
| Full screen dialog action bar focus label text color    | `md.comp.full-screen-dialog.action-bar.focus.label-text.color`    | md.sys.color.primary |

**Focused / State layer**

| Name                                                       | Token                                                                | Value                                  |
| ---------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------- |
| Full screen dialog header action focus state layer color   | `md.comp.full-screen-dialog.header.action.focus.state-layer.color`   | md.sys.color.primary                   |
| Full screen dialog header action focus state layer opacity | `md.comp.full-screen-dialog.header.action.focus.state-layer.opacity` | md.sys.state.focus.state-layer-opacity |
| Full screen dialog action bar focus state layer color      | `md.comp.full-screen-dialog.action-bar.focus.state-layer.color`      | md.sys.color.primary                   |
| Full screen dialog action bar focus state layer opacity    | `md.comp.full-screen-dialog.action-bar.focus.state-layer.opacity`    | md.sys.state.focus.state-layer-opacity |

**Pressed / Label text**

| Name                                                      | Token                                                               | Value                |
| --------------------------------------------------------- | ------------------------------------------------------------------- | -------------------- |
| Full screen dialog header action pressed label text color | `md.comp.full-screen-dialog.header.action.pressed.label-text.color` | md.sys.color.primary |
| Full screen dialog action bar pressed label text color    | `md.comp.full-screen-dialog.action-bar.pressed.label-text.color`    | md.sys.color.primary |

**Pressed / State layer**

| Name                                                         | Token                                                                  | Value                                    |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- | ---------------------------------------- |
| Full screen dialog header action pressed state layer color   | `md.comp.full-screen-dialog.header.action.pressed.state-layer.color`   | md.sys.color.primary                     |
| Full screen dialog header action pressed state layer opacity | `md.comp.full-screen-dialog.header.action.pressed.state-layer.opacity` | md.sys.state.pressed.state-layer-opacity |
| Full screen dialog action bar pressed state layer color      | `md.comp.full-screen-dialog.action-bar.pressed.state-layer.color`      | md.sys.color.primary                     |
| Full screen dialog action bar pressed state layer opacity    | `md.comp.full-screen-dialog.action-bar.pressed.state-layer.opacity`    | md.sys.state.pressed.state-layer-opacity |

---

## Adaptive Design

Dialogs can swap variants as the window size changes. A full-screen dialog on mobile can become a basic dialog at larger breakpoints.

![Full-screen dialog on mobile, basic dialog on tablet](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgbmj3-33.png?alt=media&token=17fd8879-6435-409a-a3a9-8bd390799892=s0)

### Medium window size

Basic dialogs appear centered by default. Position can be overridden for a more ergonomic experience.

![Basic dialog custom-positioned on tablet](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgc676-34.png?alt=media&token=9bc72c88-69cf-49e2-a631-070890d60754=s0)

### Expanded window size

On desktop, dialogs are modal windows above a scrim. Basic dialogs can be custom-positioned anywhere on larger screens, respecting a 56dp margin from screen edges.

![Desktop dialog calling attention to required action](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgj2r1-35.png?alt=media&token=a9f16af1-69fe-43cc-9806-883818a87845=s0)

![Custom placement area with 56dp margin](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgjir4-36.png?alt=media&token=e2dd2b5a-1e2e-4051-a0da-4ec15079f2ce=s0)

---

## Accessibility

### Use cases

People should be able to use assistive technology to:

- Open and close a dialog
- Provide and submit inputs if the dialog is interactive (text fields, selectable lists)
- Scroll the dialog to access all contents if they extend beyond the container

### Use sparingly

Dialogs are purposefully interruptive — they appear in front of app content and disrupt flow for screen reader users. Use sparingly for critical information only.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgve0z-01_do.png?alt=media&token=15a731c6-5d4e-4b65-afb3-23b6275d0935=s0" /><br/><b>Do:</b> Present non-critical info using other UI within the flow of app content</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgvt7t-02_don't.png?alt=media&token=f88b6702-ef51-4b3b-97fc-c338539dc884=s0" /><br/><b>Don't:</b> Avoid putting non-critical information in a dialog</td>
</tr></table>

### 200% text size

Choose concise strings to avoid excessive wrapping or truncation. On Android, headlines should fit within 4 lines at 200% text size. If truncated, provide an alternative way to access the full content.

![Caution: dialog at 200% text wraps and covers most of screen](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sh8mb2-03_caution.png?alt=media&token=f2a9bb8e-dfb7-46a9-a33f-20f895f8a834=s0)

### Elements within dialogs

Dialogs can contain various elements (text fields, typography, buttons). Refer to each element's own accessibility guidelines.

![Full-screen dialog with text fields, typography, and buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8x3m4cu-04.png?alt=media&token=4e645417-fc9a-48de-a66f-a3b5c5d16723=s0)

### Initial focus

When a dialog appears, focus should automatically land on the first interactive element within the dialog.

![Tab moves focus through interactive elements](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8wqpp2r-05.png?alt=media&token=d5214cf8-9fa2-458f-9e17-5db4e07235ba=s0)

![Shift+Tab moves focus in opposite direction](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8wqq56l-06.png?alt=media&token=2eae0221-4a71-4ca5-b873-6d3bf94cbd23=s0)

### Keyboard Navigation

| Key            | Action                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------- |
| Tab            | Focus lands on the next interactive element in the dialog, or wraps to the first if currently on the last     |
| Shift + Tab    | Focus lands on the previous interactive element in the dialog, or wraps to the last if currently on the first |
| Space or Enter | Triggers or commits the action of the focused element                                                         |
| Escape         | Closes the dialog                                                                                             |

### Labeling

- The accessibility label for a dialog is typically the same as the dialog's title/headline
- On web, basic dialogs should have the **alert dialog** role
- Components within the dialog (buttons, text fields) should be labeled per their own accessibility guidelines

![Alert dialog with label matching title and role "Alert Dialog"](https://lh3.googleusercontent.com/lBX7M9XMiL98P1lM9cobZ7GLCzqaLJANo3iKDKkfG_RQRKbKZepzwsjLHXEDveGR3zjduX9QaCz-UIsW7qyHc2TqlHp_B-4RSR1BrYnZAPh-iw=s0)

![Full-screen dialog with labeled Save button and text field](https://lh3.googleusercontent.com/XhxNfz1cPdhx_FBTjgzNKRYc047mN_rLn5N3jQsdL7OCeMe61us_nf42-JVISOD0ZDkjPuXfKLMkPbfxfxPVEBmDdG_L2P1TvSx72RXXkGUV=s0)

---

## XR (Extended Reality)

> Guidelines are primarily intended for designers. XR capabilities are still evolving.

XR introduces spatial capabilities — depth makes dialogs stand out from the background. Spatial dialogs are only available in full space mode. In home space, follow standard dialog guidance.

### Color & Elevation

Dialogs can use **surface container high** or **surface container highest** color options. The dialog should always be the most prominent element — use a scrim behind it and ensure no other element uses a higher elevation color.

![2 spatial dialog color options](https://lh3.googleusercontent.com/U8ru72wkyiSvzWy1y-npuQelcvHDdGcI1Vl7Xgqc_aWt4IUs9oV4OWehS7OmyV02GUXJtr4AecKrDRvQouwJ5IU5uZCLsn0JZ3hLdN-Gc50=s0)

<table><tr>
<td><img src="https://lh3.googleusercontent.com/UbfenXJcmu7EicBwP5t7vLK-_9MtCoLkTyK5F8ymjYpGivp0AC72Od_07R3T5LAJoNbfKJEjekcjCEwcpkD6f0dpZNNe2-clKr4EqMr_WN2G=s0" /><br/><b>Do:</b> Ensure spatial dialog's color is higher than all other UI elements; use a scrim</td>
<td><img src="https://lh3.googleusercontent.com/uJQx6_YXe-_Z0MiBZZ2qGdoidQ8CCUrsVGhmD1ta9wRV0HESD-TgVPnxz_LHTFI2aOElt4PxTd8Am9oUBQTWt4TAlIeuy7SLbxkzkY3Jw1z3=s0" /><br/><b>Don't:</b> If dialog uses surface container high, don't use surface container highest for other elements</td>
</tr></table>

### XR Usage

Basic dialogs are recommended for XR's expanded windows to keep required actions in the user's field of view. Avoid full-screen dialogs in XR — actions may appear beyond the user's field of view.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmadfk9dk-04.png?alt=media&token=a24cc9e9-0dff-4244-8d36-688fcfda5a48=s0" /><br/><b>Do:</b> A basic dialog elevated above an app in home space</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmadfn41n-05.png?alt=media&token=0217ac8a-8637-43ac-88f6-fd71dcbb335c=s0" /><br/><b>Don't:</b> Avoid full-screen dialogs in XR — required actions could exceed field of view</td>
</tr></table>

### Spatial Dialogs

In full space, dialogs can be elevated spatially via overrides to stand out from the background. The dialog scales uniformly, fades in/out on appear/disappear, and the scrim only fades.

![Side view of basic dialog with spatial elevation](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmadfqce4-06.png?alt=media&token=2cf6eaca-492c-49c4-9e74-2ba00d818f66=s0)

### XR Behavior

- The spatial dialog rises from the app to the highest resting level on the Z-axis when activated, returns to normal when action is complete
- The scrim stays at the app content level at all times
- Use standard easing and long duration motion tokens to prevent motion sickness

### XR Placement

- Display spatial dialogs at the highest resting level at a comfortable viewing distance
- Center spatial dialogs in the user's field of view
- If the dialog can't track head movements, position it at the center of the app's content
- If it can track head movements, use a lazy follow behavior to keep it anchored to the center of the field of view

---

## M2 → M3 Differences

| Aspect     | M2                        | M3                                                     |
| ---------- | ------------------------- | ------------------------------------------------------ |
| Color      | Static color mappings     | New color mappings, dynamic color compatible           |
| Layout     | Smaller padding           | Greater padding to account for increased corner radius |
| Position   | Fixed center position     | Option for custom basic dialog positioning             |
| Shape      | Smaller corner radius     | Increased corner radius (extra-large)                  |
| Typography | Smaller, lighter headline | Larger and darker headline                             |

![New updates to color, layout, position, shape, and typography](https://lh3.googleusercontent.com/q8W8RpwCCScus4cQl-dtCeOGIWywtLjjCh3cFLmwYvEpaaKbny2HwDpi7qmX4qLlO9nOlnP5F0TYG8TozuGaZNbIis9Nu2zoaa806nkO-Wo=s0)
