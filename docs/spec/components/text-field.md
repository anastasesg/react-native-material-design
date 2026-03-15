# Text Field — M3 Component Reference

> Text fields let users enter text into a UI.

Sources: [Overview](https://m3.material.io/components/text-fields/overview) · [Specs](https://m3.material.io/components/text-fields/specs) · [Guidelines](https://m3.material.io/components/text-fields/guidelines) · [Accessibility](https://m3.material.io/components/text-fields/accessibility)

---

## Usage

Use text fields when someone needs to enter text — forms, dialogs, search, etc.

![Filled and outlined text fields](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flyqb5o7k-1%20(1).png?alt=media&token=3e8505af-c89e-46f1-a165-4150245058a6=s0>)

![Contact form using outlined text fields](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31ssyn-1.png?alt=media&token=17fe50a8-ccc7-491b-b8b2-a8c3bd1487f3=s0)

---

## Variants

Text fields come in two variants that provide the same functionality:

![Filled and outlined text fields](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx2u2h3p-1.png?alt=media&token=71a990c4-03bd-4c34-afc6-130018ed186e=s0)

1. **Filled** — stronger visual emphasis, surface container background with bottom active indicator
2. **Outlined** — reduced emphasis, stroke outline around entire container (better for dense forms)

Choose whichever works best with the app's visual style. Both variants can coexist but must be **separated by region** — never intermixed within the same form.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31vnye-7_do.png?alt=media&token=776ccb86-55c6-4c1c-abd2-fe2e99551f3e=s0" /><br/><b>Do:</b> Separate variants by region (e.g. form vs dialog)</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31vw2z-8_dont.png?alt=media&token=af4205b9-661c-4cb3-957c-a1fbda8d56ce=s0" /><br/><b>Don't:</b> Mix variants within the same form</td>
</tr></table>

![Filled text field populated and unpopulated](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31t4yp-2.png?alt=media&token=4a6e26a3-72f3-46d2-8372-47fc1cf66d7e=s0)

![Outlined text field populated and unpopulated](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31tc9a-3.png?alt=media&token=db27205f-c078-450b-b330-00c1afd09444=s0)

![Login screen with outlined text fields](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31u7r0-4.png?alt=media&token=bb9357e8-b1d0-4ff8-890f-b21939e78de0=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31v0nn-5.png?alt=media&token=205be2fa-2142-46e3-81fd-c69273b0601d=s0" /><br/>Filled text fields in a form</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31vds5-6.png?alt=media&token=cfac905f-bbb9-4917-86cb-75d405a82628=s0" /><br/>Outlined text fields in the same form</td>
</tr></table>

---

## Anatomy

### Filled text field

![Filled text field anatomy — 10 parts](https://lh3.googleusercontent.com/X9POJ7yw_vGiALE8gBKfttJ_56zdy0ncjv5fYNyJVl1Y8SzdDbDA2VCVqWZDA0BYUfjgn3o1jfQ__CB1_3HLphvEi-u8Vex9Q1VZjqkR1HOG=s0)

![Filled text field anatomy from guidelines](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2j3kn4a-9.png?alt=media&token=182bc4ba-6100-4b86-9c88-ab946296064e=s0)

1. Container
2. Leading icon (optional)
3. Label text (empty field)
4. Label text (populated field — moves to top, shrinks to body-small)
5. Trailing icon (optional)
6. Focused active indicator (2dp, primary)
7. Caret
8. Input text
9. Supporting text (optional)
10. Enabled active indicator (1dp, on-surface-variant)

### Outlined text field

![Outlined text field anatomy — 9 parts](https://lh3.googleusercontent.com/juT_ZbiIpoR4u-rL6ab7C0pqjMMp9nEOCEx43GdSNJ0jPkt4RAwIeOy3k047QwD4VLaHhkG4Xc7ZW5tN_AjXfY75D7vByomGUGoz5Y9JfBxyTQ=s0)

![Outlined text field anatomy from guidelines](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2j3kqed-10.png?alt=media&token=9dd5de19-42ba-4468-a2bc-843792fd7fc6=s0)

1. Enabled container outline
2. Leading icon (optional)
3. Label text (empty field)
4. Label text (populated field — floats into outline notch)
5. Trailing icon (optional)
6. Focused container outline
7. Caret
8. Input text
9. Supporting text (optional)

### Container shape

- **Filled**: rounded top corners (`md.sys.shape.corner.extra-small.top`), square bottom
- **Outlined**: rounded all corners

![Text field containers comparison](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31y44j-11.png?alt=media&token=7d4b4480-90b1-4bd6-b9db-a25f193c515a=s0)

---

## Sub-elements

### Label text

- Every text field should have a label
- Label must be short, clear, and **fully visible** — never truncated or multi-line
- When empty: vertically centered in container
- When populated: moves to top (filled) or into outline notch (outlined), shrinks to `body-small`

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31ykco-13_dont.png?alt=media&token=dc2a9d73-7d0f-42f0-aafa-072fcca98564=s0" /><br/><b>Don't:</b> Truncate label text</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx320mke-14_dont.png?alt=media&token=13140173-2eba-4d08-bb46-a9fa6cba1a59=s0" /><br/><b>Don't:</b> Multi-line labels</td>
</tr></table>

### Adjacent label

A text field doesn't require an inline label if indicated by a separate adjacent label. Adjacent labels should align to the leading edge.

![Text fields with adjacent labels](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32132w-15.png?alt=media&token=7ec20bd3-7097-4d2e-85f5-eba578d7ce0f=s0)

### Required indicator

Display an asterisk (\*) next to the label. Explain via supporting text or a form-level note.

![Required field with asterisk and supporting text](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx322ilp-16.png?alt=media&token=43feb129-a6b6-4277-b1a8-044d68325b3d=s0)

### Input text

![Input text in a filled text field](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx322ww5-17.png?alt=media&token=fa62d7da-ffa4-49f8-bb0f-fa7273b6c4d2=s0)

### Input types

- **Single line** — displays one line; text scrolls horizontally when overflow. The cursor reaches the right edge and text scrolls left. Not suitable for long responses.
- **Multi-line** — grows to accommodate multiple lines; wraps text. Overflow causes the field to expand and text wraps. Initially appears as a single-line field, making it good for compact layouts.
- **Text area** — fixed height; scrolls vertically on overflow. Use instead of multi-line on web. Ensure the height fits mobile screens.

### Prefix / Suffix text

| Type   | Example                                    | Color                |
| ------ | ------------------------------------------ | -------------------- |
| Prefix | Currency symbol (`$`)                      | `on-surface-variant` |
| Suffix | Unit (`/100`), email domain (`@gmail.com`) | `on-surface-variant` |

![Currency symbol prefix](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx323bkz-21.png?alt=media&token=105d405f-12d6-4edd-831c-aeb168ae8d20=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx323jpq-22.png?alt=media&token=0b58c2b9-439d-42b1-9ca3-f61852239672=s0" /><br/>Grading scale suffix</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx3246iw-23.png?alt=media&token=1848c8cc-bb19-465d-bf22-2caea1371a3f=s0" /><br/>Email domain suffix</td>
</tr></table>

### Supporting text & character counter

- One line ideally, can wrap if needed
- Displays below the field (4dp top padding)
- Character counter shows `used/limit` ratio, aligned trailing

![Supporting text and character counter](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx324ofo-24.png?alt=media&token=309a0667-ded2-42a9-bd93-3b83d086f88f=s0)

### Error text

- **Replaces** supporting text (doesn't add a new line — prevents layout shift)
- Swap supporting text with error text — don't add error text as additional line, as this shifts layout content.
- Describes how to fix the most likely error
- Strongly recommended to show an **error icon** (trailing) alongside error text

![Caution: Long errors can wrap to multiple lines](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx325xha-27_caution.png?alt=media&token=56146424-2703-4db8-b848-8e986a620685=s0)

![Error icon provides second visual indicator](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5vj8xje-28.png?alt=media&token=37a70518-0bc9-48c5-add8-ddef99bb85b8=s0)

### Icons

- Leading/trailing icons are optional, 24dp
- Swap position in RTL layouts
- Types: signifier, validation, clear, voice input, dropdown, image

![Six types of trailing icons and images](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx3270td-28.png?alt=media&token=10a8c64f-9569-41f4-b334-66537b8c7930=s0)

### Read-only fields

Styled like regular fields, clearly labeled as read-only. User cannot edit content.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32b33u-29.png?alt=media&token=6200faed-0aab-45bd-af45-5dd7dff5020b=s0" /><br/>Filled read-only</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32b91b-30.png?alt=media&token=d37f640d-c179-4935-ae4d-9e09c84a01cf=s0" /><br/>Outlined read-only</td>
</tr></table>

---

## Measurements

### Filled text field

<table>
<tr>
<td><img src="https://lh3.googleusercontent.com/2AoiwzxCOioxZi9xQyWBalI9wO_Q2Xvt-udVeaI-UDY00zFWxtWZHUvOZa5PFbRwRJrOOQDlMra63kpmnbLyU0GxAKCCL4d-ZlhN50HdtSPn=s0" /><br/>Without icons</td>
<td><img src="https://lh3.googleusercontent.com/hG_Z6Lx5Jfmhqu7Rnds8d_Ia4DGHtlVW1oCZbwwqD29FtoXf2_g24bzr81cvy3i7nQxSxDzTXYqKrZ4kKSRIB8yz4QSOK1wDfR1jy2psSypxyQ=s0" /><br/>With icons</td>
</tr>
</table>

| Attribute                                   | Value                                 |
| ------------------------------------------- | ------------------------------------- |
| Container height                            | 56dp                                  |
| Container shape                             | `md.sys.shape.corner.extra-small.top` |
| Top/bottom padding                          | 8dp                                   |
| Left/right padding (no icons)               | 16dp                                  |
| Left/right padding (with icons)             | 12dp                                  |
| Padding between icons and text              | 16dp                                  |
| Icon alignment                              | Vertically centered                   |
| Label alignment (unpopulated)               | Vertically centered                   |
| Active indicator height (enabled)           | 1dp                                   |
| Active indicator height (focused)           | 2dp                                   |
| Supporting text top padding                 | 4dp                                   |
| Padding between supporting text and counter | 16dp                                  |
| Touch target                                | 56dp                                  |

### Outlined text field

<table>
<tr>
<td><img src="https://lh3.googleusercontent.com/fbPahcRVZOrZP4b6Iro8dbT09lSK22S5Fy_Pi_z0Kjiqd_11BD-7MOoRsO3qcXo5x--D8HprVru2ChlRr2BSl-OxHPE5TqKZaVVsMXXD7tJz=s0" /><br/>Without icons</td>
<td><img src="https://lh3.googleusercontent.com/IPC3bKvB5geLDysQJQQsC4IYzNggiZUaqGguykwiwZvUKkNbtAH4_QXRM2MRS3kK04txiDciUgwDAPqLOfunUBEFJBw3lyXuoJPln5nweeyo=s0" /><br/>With icons</td>
</tr>
</table>

| Attribute                                   | Value               |
| ------------------------------------------- | ------------------- |
| Container height                            | 56dp                |
| Left/right padding (no icons)               | 16dp                |
| Left/right padding (with icons)             | 12dp                |
| Padding between icons and text              | 16dp                |
| Icon alignment                              | Vertically centered |
| Label alignment                             | Vertically centered |
| Populated label left/right padding          | 4dp                 |
| Supporting text top padding                 | 4dp                 |
| Padding between supporting text and counter | 16dp                |
| Touch target                                | 56dp                |

![Outlined supporting text and character counter measurements](https://lh3.googleusercontent.com/_JjJwZsUzwXoqZBtCVcypOsMMq3BPaHVC11s604XWSrXVgPsm5_Jd2mFcMk0lbxVFr2XZSOrtwQeGZAytx0F6sDF42Dz15nNf0_vLAbNBLI=s0)

### Configurations (both variants)

![Filled text field configurations](https://lh3.googleusercontent.com/KpOprJPDbuBUSURPtov109LS7MrNCFY0Ek20qjx5tGAzycWbhUb1YSwjT7Bc7KEu3_7woFXY5msSf47VLtW_WDLOBO-g298eC7JmWKfvuXNOGQ=s0)

![Outlined text field configurations](https://lh3.googleusercontent.com/-FpsbRTgumDQyTLpD4LAvrmPPGOU5CXnJFFxPPHNWfN6Fml9KUbuwsV-Uzz7EWlfTKXjfUnGqwv0l1HqTXO7EcMtHgY2BEkZ-XLYOYew_7Nn=s0)

1. Supporting text — 2. Trailing icon — 3. Leading icon — 4. Both icons — 5. Prefix — 6. Suffix — 7. Multi-line

---

## Color Tokens (Filled)

![Filled text field color mappings](https://lh3.googleusercontent.com/3QvK6g9HSsTheSVwbJnhS3xny_okcH05M7S-VzIzT8Y20T1azDNw3ab6oTjCFDJDqfz8rgA9If_Ra96-wTC9GoAVkjS1XvSfbPyAgiT3LHQcdw=s0)

### Enabled

| Element                 | Token                                                    | Value                                                |
| ----------------------- | -------------------------------------------------------- | ---------------------------------------------------- |
| Container color         | `md.comp.filled-text-field.container.color`              | `md.sys.color.surface-container-highest`             |
| Container height        | `md.comp.filled-text-field.container.height`             | 56dp                                                 |
| Container shape         | `md.comp.filled-text-field.container.shape`              | `md.sys.shape.corner.extra-small.top`                |
| Label text color        | `md.comp.filled-text-field.label-text.color`             | `md.sys.color.on-surface-variant`                    |
| Label text font/size    | —                                                        | `body-large` (unpopulated), `body-small` (populated) |
| Input text color        | `md.comp.filled-text-field.input-text.color`             | `md.sys.color.on-surface`                            |
| Input text font/size    | —                                                        | `body-large`                                         |
| Prefix/suffix color     | —                                                        | `md.sys.color.on-surface-variant`                    |
| Placeholder color       | `md.comp.filled-text-field.input-text.placeholder.color` | `md.sys.color.on-surface-variant`                    |
| Leading icon color      | `md.comp.filled-text-field.leading-icon.color`           | `md.sys.color.on-surface-variant`                    |
| Leading icon size       | `md.comp.filled-text-field.leading-icon.size`            | 24dp                                                 |
| Trailing icon color     | `md.comp.filled-text-field.trailing-icon.color`          | `md.sys.color.on-surface-variant`                    |
| Trailing icon size      | `md.comp.filled-text-field.trailing-icon.size`           | 24dp                                                 |
| Active indicator color  | `md.comp.filled-text-field.active-indicator.color`       | `md.sys.color.on-surface-variant`                    |
| Active indicator height | `md.comp.filled-text-field.active-indicator.height`      | 1dp                                                  |
| Supporting text color   | `md.comp.filled-text-field.supporting-text.color`        | `md.sys.color.on-surface-variant`                    |
| Caret color             | `md.comp.filled-text-field.caret.color`                  | `md.sys.color.primary`                               |

### Disabled

| Element                          | Token                                                  | Value                     |
| -------------------------------- | ------------------------------------------------------ | ------------------------- |
| Container color                  | `md.comp.filled-text-field.disabled.container.color`   | `md.sys.color.on-surface` |
| Container opacity                | `md.comp.filled-text-field.disabled.container.opacity` | 0.04                      |
| Label text color / opacity       | —                                                      | `on-surface` / 0.38       |
| Input text color / opacity       | —                                                      | `on-surface` / 0.38       |
| Leading icon color / opacity     | —                                                      | `on-surface` / 0.38       |
| Trailing icon color / opacity    | —                                                      | `on-surface` / 0.38       |
| Supporting text color / opacity  | —                                                      | `on-surface` / 0.38       |
| Active indicator color / opacity | —                                                      | `on-surface` / 0.38       |
| Active indicator height          | —                                                      | 1dp                       |

### Hovered

| Element                 | Token                                                    | Value                                    |
| ----------------------- | -------------------------------------------------------- | ---------------------------------------- |
| State layer color       | `md.comp.filled-text-field.hover.state-layer.color`      | `md.sys.color.on-surface`                |
| State layer opacity     | `md.comp.filled-text-field.hover.state-layer.opacity`    | `md.sys.state.hover.state-layer-opacity` |
| Label text color        | —                                                        | `md.sys.color.on-surface-variant`        |
| Input text color        | —                                                        | `md.sys.color.on-surface`                |
| Active indicator color  | `md.comp.filled-text-field.hover.active-indicator.color` | `md.sys.color.on-surface`                |
| Active indicator height | —                                                        | 1dp                                      |

### Focused

| Element                 | Token                                                     | Value                     |
| ----------------------- | --------------------------------------------------------- | ------------------------- |
| Label text color        | `md.comp.filled-text-field.focus.label-text.color`        | `md.sys.color.primary`    |
| Input text color        | —                                                         | `md.sys.color.on-surface` |
| Active indicator color  | `md.comp.filled-text-field.focus.active-indicator.color`  | `md.sys.color.primary`    |
| Active indicator height | `md.comp.filled-text-field.focus.active-indicator.height` | 2dp                       |

### Error

| Element                | Token                                                    | Value                             |
| ---------------------- | -------------------------------------------------------- | --------------------------------- |
| Active indicator color | `md.comp.filled-text-field.error.active-indicator.color` | `md.sys.color.error`              |
| Label text color       | `md.comp.filled-text-field.error.label-text.color`       | `md.sys.color.error`              |
| Input text color       | —                                                        | `md.sys.color.on-surface`         |
| Supporting text color  | `md.comp.filled-text-field.error.supporting-text.color`  | `md.sys.color.error`              |
| Leading icon color     | —                                                        | `md.sys.color.on-surface-variant` |
| Trailing icon color    | `md.comp.filled-text-field.error.trailing-icon.color`    | `md.sys.color.error`              |

### Error + Focused

| Element                | Token                                                          | Value                |
| ---------------------- | -------------------------------------------------------------- | -------------------- |
| Active indicator color | `md.comp.filled-text-field.error.focus.active-indicator.color` | `md.sys.color.error` |
| Label text color       | —                                                              | `md.sys.color.error` |
| Trailing icon color    | —                                                              | `md.sys.color.error` |
| Caret color            | `md.comp.filled-text-field.error.focus.caret.color`            | `md.sys.color.error` |

### Error + Hovered

| Element                | Token                                                          | Value                                    |
| ---------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Active indicator color | `md.comp.filled-text-field.error.hover.active-indicator.color` | `md.sys.color.on-error-container`        |
| Label text color       | —                                                              | `md.sys.color.on-error-container`        |
| Trailing icon color    | —                                                              | `md.sys.color.on-error-container`        |
| State layer color      | `md.comp.filled-text-field.error.hover.state-layer.color`      | `md.sys.color.on-surface`                |
| State layer opacity    | —                                                              | `md.sys.state.hover.state-layer-opacity` |

---

## Color Tokens (Outlined)

![Outlined text field color mappings](https://lh3.googleusercontent.com/QRrrzuYpe5zpPsCu6AbhllIu1DaJBehUTcv2cIVtd6O7bLdl-ZuUnukzJePt9Y4_-szZKPRj8u0vgwnRAsGDeXih4qprDvoIvyh1_ST_UQUM=s0)

### Enabled

| Element               | Token                                                      | Value                             |
| --------------------- | ---------------------------------------------------------- | --------------------------------- |
| Container color       | `md.comp.outlined-text-field.container.color`              | `md.sys.color.surface`            |
| Outline color         | `md.comp.outlined-text-field.outline.color`                | `md.sys.color.outline`            |
| Outline width         | `md.comp.outlined-text-field.outline.width`                | 1dp                               |
| Label text color      | `md.comp.outlined-text-field.label-text.color`             | `md.sys.color.on-surface-variant` |
| Input text color      | `md.comp.outlined-text-field.input-text.color`             | `md.sys.color.on-surface`         |
| Placeholder color     | `md.comp.outlined-text-field.input-text.placeholder.color` | `md.sys.color.on-surface-variant` |
| Leading icon color    | `md.comp.outlined-text-field.leading-icon.color`           | `md.sys.color.on-surface-variant` |
| Leading icon size     | `md.comp.outlined-text-field.leading-icon.size`            | 24dp                              |
| Trailing icon color   | `md.comp.outlined-text-field.trailing-icon.color`          | `md.sys.color.on-surface-variant` |
| Trailing icon size    | `md.comp.outlined-text-field.trailing-icon.size`           | 24dp                              |
| Supporting text color | `md.comp.outlined-text-field.supporting-text.color`        | `md.sys.color.on-surface-variant` |
| Caret color           | `md.comp.outlined-text-field.caret.color`                  | `md.sys.color.primary`            |

### Disabled

| Element                         | Token                                                  | Value                     |
| ------------------------------- | ------------------------------------------------------ | ------------------------- |
| Outline color                   | `md.comp.outlined-text-field.disabled.outline.color`   | `md.sys.color.on-surface` |
| Outline opacity                 | `md.comp.outlined-text-field.disabled.outline.opacity` | 0.12                      |
| Label text color / opacity      | —                                                      | `on-surface` / 0.38       |
| Input text color / opacity      | —                                                      | `on-surface` / 0.38       |
| Leading icon color / opacity    | —                                                      | `on-surface` / 0.38       |
| Trailing icon color / opacity   | —                                                      | `on-surface` / 0.38       |
| Supporting text color / opacity | —                                                      | `on-surface` / 0.38       |

### Hovered

| Element          | Token                                                | Value                     |
| ---------------- | ---------------------------------------------------- | ------------------------- |
| Outline color    | `md.comp.outlined-text-field.hover.outline.color`    | `md.sys.color.on-surface` |
| Outline width    | `md.comp.outlined-text-field.hover.outline.width`    | 1dp                       |
| Label text color | `md.comp.outlined-text-field.hover.label-text.color` | `md.sys.color.on-surface` |
| Input text color | `md.comp.outlined-text-field.hover.input-text.color` | `md.sys.color.on-surface` |

### Focused

| Element                   | Token                                                             | Value                                    |
| ------------------------- | ----------------------------------------------------------------- | ---------------------------------------- |
| Outline color             | `md.comp.outlined-text-field.focus.outline.color`                 | `md.sys.color.primary`                   |
| Outline width             | `md.comp.outlined-text-field.focus.outline.width`                 | 3dp                                      |
| Label text color          | `md.comp.outlined-text-field.focus.label-text.color`              | `md.sys.color.primary`                   |
| Focus indicator color     | `md.comp.outlined-text-field.focus.indicator.outline.color`       | `md.sys.color.secondary`                 |
| Focus indicator (error)   | `md.comp.outlined-text-field.error.focus.indicator.outline.color` | `md.sys.color.error`                     |
| Focus indicator thickness | `md.comp.outlined-text-field.focus.indicator.outline.thickness`   | `md.sys.state.focus-indicator.thickness` |

### Error

| Element               | Token                                                     | Value                             |
| --------------------- | --------------------------------------------------------- | --------------------------------- |
| Outline color         | `md.comp.outlined-text-field.error.outline.color`         | `md.sys.color.error`              |
| Label text color      | `md.comp.outlined-text-field.error.label-text.color`      | `md.sys.color.error`              |
| Input text color      | `md.comp.outlined-text-field.error.input-text.color`      | `md.sys.color.on-surface`         |
| Supporting text color | `md.comp.outlined-text-field.error.supporting-text.color` | `md.sys.color.error`              |
| Leading icon color    | `md.comp.outlined-text-field.error.leading-icon.color`    | `md.sys.color.on-surface-variant` |
| Trailing icon color   | `md.comp.outlined-text-field.error.trailing-icon.color`   | `md.sys.color.error`              |

### Error + Focused

| Element               | Token                                                           | Value                             |
| --------------------- | --------------------------------------------------------------- | --------------------------------- |
| Outline color         | `md.comp.outlined-text-field.error.focus.outline.color`         | `md.sys.color.error`              |
| Label text color      | `md.comp.outlined-text-field.error.focus.label-text.color`      | `md.sys.color.error`              |
| Input text color      | `md.comp.outlined-text-field.error.focus.input-text.color`      | `md.sys.color.on-surface`         |
| Supporting text color | `md.comp.outlined-text-field.error.focus.supporting-text.color` | `md.sys.color.error`              |
| Leading icon color    | `md.comp.outlined-text-field.error.focus.leading-icon.color`    | `md.sys.color.on-surface-variant` |
| Trailing icon color   | `md.comp.outlined-text-field.error.focus.trailing-icon.color`   | `md.sys.color.error`              |

### Error + Hovered

| Element               | Token                                                           | Value                             |
| --------------------- | --------------------------------------------------------------- | --------------------------------- |
| Outline color         | `md.comp.outlined-text-field.error.hover.outline.color`         | `md.sys.color.on-error-container` |
| Label text color      | `md.comp.outlined-text-field.error.hover.label-text.color`      | `md.sys.color.on-error-container` |
| Input text color      | `md.comp.outlined-text-field.error.hover.input-text.color`      | `md.sys.color.on-surface`         |
| Supporting text color | `md.comp.outlined-text-field.error.hover.supporting-text.color` | `md.sys.color.error`              |
| Leading icon color    | `md.comp.outlined-text-field.error.hover.leading-icon.color`    | `md.sys.color.on-surface-variant` |
| Trailing icon color   | `md.comp.outlined-text-field.error.hover.trailing-icon.color`   | `md.sys.color.on-error-container` |

---

## Interaction States

### Filled

![Filled text field states — empty and populated](https://lh3.googleusercontent.com/oKmfNMCJ_ViUQMDGqTLkxCQj9pqlu69kIuzt96fo0YC7mb_vceZF4LQUwYQViUk_oDf38-KSOFZVsM8Car1RCvjy6JPXVv92WCZIJzbEwNuJ_g=s0)

### Outlined

![Outlined text field states — empty and populated](https://lh3.googleusercontent.com/7ChV4X-ZSeY8_BCyeu3u3qdlGOmI9fGOOM00iO7V4hK0Ci3rwp_hy9EoMRpsX5t-SnO-nesLg-wBoom_2uX0Ix15ZtmzEQJZFf1ufQaSCWY=s0)

| #   | State                    | Visual changes                                                                           |
| --- | ------------------------ | ---------------------------------------------------------------------------------------- |
| 1   | **Enabled (empty)**      | Default appearance, label centered                                                       |
| 2   | **Focused (empty)**      | Label moves to top, active indicator/outline thickens and turns `primary`, caret appears |
| 3   | **Hovered (empty)**      | State layer, active indicator turns `on-surface`                                         |
| 4   | **Disabled (empty)**     | Container opacity 0.04, all text/icons opacity 0.38                                      |
| 5   | **Enabled (populated)**  | Label at top (small), input text visible                                                 |
| 6   | **Focused (populated)**  | Active indicator/outline `primary`, label `primary`                                      |
| 7   | **Hovered (populated)**  | State layer                                                                              |
| 8   | **Disabled (populated)** | Reduced opacity throughout                                                               |

### Error states

<table><tr>
<td><img src="https://lh3.googleusercontent.com/nuNzqyBbqzPQww1YvytMccqt-cGwmw0Brm79oYB6w-Z1am626wYtqGd6pN2nx393wXxEIJRPia-Fb3WuFB61iDiuXmt4F5ERiaV8fcDWYDqs=s0" /><br/>Filled error states</td>
<td><img src="https://lh3.googleusercontent.com/JzpL2KJVz10gQRdqaY43CbT_rimzZySTQc-l3ZSUVIdVIYgAXeOvtbuBqIpR3MUIV7uGKVPnHPzTZ8N0SMaRGCeKf7dpiLc4AhE9kxWWdLYp=s0" /><br/>Outlined error states</td>
</tr></table>

Error states apply to enabled, focused, and hovered (not disabled). In error: label, active indicator/outline, supporting text, and trailing icon turn `error` color.

---

## Accessibility

### Interaction

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32f0bp-1.png?alt=media&token=2037cfd2-09f9-48c6-a723-7a73f2dd6d36=s0" /><br/>Filled: enabled → focused</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32f68l-2.png?alt=media&token=aa76ef86-da54-4f76-8437-26c0181d85c2=s0" /><br/>Outlined: enabled → focused</td>
</tr></table>

- Containers create contrast for discoverability
- Outlined text fields should maintain **3:1 minimum contrast** between outline and background

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32k7wf-3.png?alt=media&token=679bc72b-1edd-4a37-9f0c-462d91c195a6=s0" /><br/><b>Do:</b> 3:1 minimum contrast for outline</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32kef6-4.png?alt=media&token=9677297e-c97b-4210-9a25-2c9268b02806=s0" /><br/><b>Don't:</b> Colors that fail 3:1 contrast</td>
</tr></table>

### Keyboard Navigation

| Key | Action                                 |
| --- | -------------------------------------- |
| Tab | Focus lands on non-disabled text field |

### Labeling

- The accessibility label matches the text field's label text. Role: `textbox`
- **Trailing icon buttons** need descriptive labels (e.g. "Show password" / "Hide password"). Role: `button`
- **Prefix/suffix**: accessibility label should use full name (e.g. "Euro" not "€")
- **Error messages**: role `alert`, label is the error text. If both supporting and error text exist, include both.
- **Character counter**: label as "Character count, {used}/{limit}"
- **Supporting text**: gets its own accessibility label
- **Required fields**: asterisk must be included in the accessibility label

![Text field label: "Email", role "textbox"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32ks8b-5.png?alt=media&token=12c43d38-d18f-417c-b8fc-13110c145ffa=s0)

![Trailing icon label: "Show Password", role "Button"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32l5y8-6.png?alt=media&token=b4271bd0-47bf-4af4-b9f7-fb693bf843be=s0)

![Prefix "Euro" and suffix "At gmail dot com" labels](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32leg0-7.png?alt=media&token=9d09f464-5f11-40c9-8310-af201dd18e29=s0)

![Error message with "Alert" role](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32lojq-8.png?alt=media&token=a55926cc-d2d2-4451-8fe2-74a515db3a16=s0)

![Character counter label: "Character count, 5/20"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32m4pa-9.png?alt=media&token=aac93da1-54a2-4b87-a1bc-68807f59bbd4=s0)

![Supporting text accessibility label](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32meu7-10.png?alt=media&token=4caf165e-0a75-4e05-8be8-410f681c8874=s0)

![Required field asterisk in accessibility label](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32mlzg-11.png?alt=media&token=72a43825-5286-49d6-9f49-7bb37a11e0f4=s0)

### Density

- Do not reduce density by default — minimum touch target is 48 × 48dp
- Dense text fields are useful for data-heavy UIs — let users opt into density

---

## Adaptive Design

- **Compact**: text fields can span full width
- **Medium/Expanded**: bound by flexible margins or containers — never span full width of large screens
- Set min/max values for margins, padding, and container dimensions

![Compact to medium responsive layout](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32c2h0-Full%20to%20max%20-%201P.png?alt=media&token=9b9c076b-53e3-4068-ae53-c050d0dbb37d=s0)

![Don't: Fixed margins on large devices](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32d5ny-responsive-layout-dont.png?alt=media&token=998e18d2-8016-4962-9652-e29fcfb4568b=s0)

![Dense text fields for data-heavy UIs](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32dfqc-31.png?alt=media&token=a5b0b69e-bddf-49e4-9cfb-c30aae5f640d=s0)

---

## M2 → M3 Differences

| Aspect | Change                                       |
| ------ | -------------------------------------------- |
| Color  | New color mappings, dynamic color compatible |

![Text fields with new M3 color mappings](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx2u3e4d-2.png?alt=media&token=896d9b04-c327-4904-9c1b-368bb684d53c=s0)
