# Snackbar — M3 Component Reference

> Snackbars show short updates about app processes at the bottom of the screen.

Sources: [Overview](https://m3.material.io/components/snackbar/overview) · [Specs](https://m3.material.io/components/snackbar/specs) · [Guidelines](https://m3.material.io/components/snackbar/guidelines) · [Accessibility](https://m3.material.io/components/snackbar/accessibility)

---

## Anatomy

![4 elements of a snackbar from specs](https://lh3.googleusercontent.com/oe-jEgmWKP97u0jsjhWPp2985Zn00p4FweCCB7iQbvx_xh1kkNRctD67TGEeJU_on8ch67ncdBPf84JXcOvaNlSmUXC8ypG3_32cRuGMlhN7=s0)

![4 elements of a snackbar from guidelines](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy0ibw-6.png?alt=media&token=e4018d28-38b2-4af5-b7b0-d6f07688ee41=s0)

1. **Container** — rectangular, opaque background (`inverse-surface`), with shadow
2. **Supporting text** — short message about the process performed (1-2 lines on mobile)
3. **Action** (optional) — a single text button (e.g. "Undo") in `inverse-primary` color
4. **Close button** (optional) — icon affordance to dismiss

---

## Usage & When to Use

![Snackbar at the bottom of a mobile device](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6a9x4e1-1.png?alt=media&token=a139356b-4222-4b76-9c80-cfefdb00ced0=s0)

Snackbars inform users of a process the app has performed or will perform. They appear temporarily at the bottom of the screen and shouldn't interrupt the user experience.

- Communicate **low-priority**, minimally interruptive messages
- Only **one snackbar** displayed at a time
- A snackbar can contain a **single action** — "Dismiss" or "Cancel" actions are optional
- Snackbars shouldn't be the **only way** to access a core use case

![Snackbar showing 'Email archived' with an Undo action](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6a9y0k8-2.png?alt=media&token=e904bf19-99d6-4d22-9a44-1f986f1574c8=s0)

### Snackbar vs Dialog

![Dialog requiring sign-in to continue](https://lh3.googleusercontent.com/-tiKvQVJlOCfknFRqwRFth2PAQgditPIXPneNZWGR_W7XuQHEfYzHpyZR8lkb7gDWylZmqw6jVl9ExMk2sIrWV5SJEDrph3YWse2wdx1X5fc=s0)

| Component | Priority      | User action                                |
| --------- | ------------- | ------------------------------------------ |
| Snackbar  | Low priority  | Optional — disappears automatically        |
| Dialog    | High priority | Required — blocks app usage until acted on |

### Web accessibility requirements

On web, auto-dismissing snackbars are inaccessible for people with low vision or who need additional time. Solve with:

1. **Inline feedback** — also communicate the message near the triggering action (e.g. "Save" button changes to "Saved")
2. **Make actionable** — add actions so the snackbar persists until acted on

![Button changes from "Save" to "Saved" alongside a confirming snackbar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoxyec0-5.png?alt=media&token=ba932f45-20b3-4494-b4e9-0bd9ff22208e=s0)

---

## Configurations

![5 snackbar configurations](https://lh3.googleusercontent.com/Pd1qLYMI80pcYjx89JXrogC_QiOljw2S1pbGruxLf1oJu_bQnZBwoBxb7V3AnPcV-piQUix6mCFtdBH73KWXOmBI-Svt8rcfh8sRwlh6yJ26dg=s0)

| #   | Configuration                | Container height     |
| --- | ---------------------------- | -------------------- |
| 1   | Single line                  | 48dp                 |
| 2   | Single line with action      | 48dp                 |
| 3   | Two lines                    | 68dp                 |
| 4   | Two lines with action        | 68dp                 |
| 5   | Two lines with longer action | Action on third line |

---

## Sub-elements

### Supporting text

- Short, clear update on the process performed
- Keep to **one line** when possible
- Up to **two lines** on mobile (compact windows)
- Don't use bold, italic, or hyperlinks

![Text label "Saved in Vacation album"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy1q93-7.png?alt=media&token=cc87fff5-d0bc-4790-a163-98557189a683=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy2p4f-8.png?alt=media&token=afb9be61-cec7-4121-a176-37c0909a64e8=s0" /><br/><b>Do:</b> Keep text to one line when possible</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy3zcx-9.png?alt=media&token=8e9c9a97-1872-447b-8a36-36afb1bcef62=s0" /><br/><b>Do:</b> Up to two lines on mobile</td>
</tr></table>

![Caution: Avoid adding icons to snackbars — use a dialog if the message needs an icon](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy4zjx-10.png?alt=media&token=4b2e802b-b450-4558-9e80-15d0ea989e1a=s0)

![Don't: No stylized text or inline links — add a button instead](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy6dj7-11.png?alt=media&token=5d757758-41ea-418e-854b-ce251f747327=s0)

### Action button

- Single **text button** only — displays colored text (`inverse-primary`) to distinguish from supporting text
- Common actions: "Undo", "Retry"
- If action text is long, it can be displayed on a **third line**
- "Dismiss" action is unnecessary since snackbars auto-dismiss by default

![Action text button with colored text to distinguish from supporting text](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoyf085-16.png?alt=media&token=dc457470-6654-493b-b1fa-633c991d9a61=s0)

![Do: Long action text can go on a third line](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxktjsxn-19.png?alt=media&token=89f6106f-fd53-4132-815f-8b6ed99b52be=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoz8scg-20.png?alt=media&token=6539a4cf-fb1c-47d4-9e71-59a2b10dca6b=s0" /><br/><b>Do:</b> "Undo" action to let users amend choices</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoza8yz-21.png?alt=media&token=131c7a24-1324-4fef-880e-3d62d1156345=s0" /><br/><b>Caution:</b> "Dismiss" is unnecessary — snackbars auto-dismiss</td>
</tr></table>

<table><tr>
<td><img src="https://lh3.googleusercontent.com/4ZjkkltqgNzA13m457i7C95ZkoGaUoXwgffmVQBnSzhDn_qqntogMKz1zoZ3atzRsf9Iu83GJ9KxWN36I8FPXrBHeStry3i6Y-QPP1AAcSL5RQ=s0" /><br/><b>Don't:</b> Action text shouldn't share color with supporting text</td>
<td><img src="https://lh3.googleusercontent.com/b3InMdZt65Rjhh2v0XIVdSSStbaGd_Hzb2lnxzGsqpOgwaGnTk-i5f4uZrNBwjViXGXis6FZhuu7ZbP73NMc0fLH6jPdDIgemxqSwr4ImN-P=s0" /><br/><b>Don't:</b> No filled or elevated buttons — only text buttons</td>
</tr></table>

### Container

- Rectangular with `extra-small` rounded corners
- Completely **opaque** — text must remain legible
- Slight transparency is acceptable as long as text remains clearly legible
- Uses `inverse-surface` color to stand out against the UI

![Solid background with shadow for contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy7luk-12.png?alt=media&token=6127148e-439e-4246-80fa-0a72d1ab71f8=s0)

![Do: In wide layouts, extend container width for longer text](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoyabsh-13.png?alt=media&token=1ecad806-a4f9-4fcc-bcec-f3909c59e4d6=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoyc9yp-14.png?alt=media&token=30ca81d2-71b7-4ac3-9adb-3be7c41313d4=s0" /><br/><b>Caution:</b> Slight transparency OK if text stays legible</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoydoed-15.png?alt=media&token=5695ca2c-49c2-4a86-b11e-b415266f6ad5=s0" /><br/><b>Don't:</b> Significantly alter the container shape</td>
</tr></table>

---

## Placement

- Always at the **bottom of the UI**, in front of main content
- Avoid placing in front of **navigation components** or **frequently used touch targets**
- Snackbars should appear **above FABs** — never in front of or behind them
- Can be **nudged upwards** to avoid overlapping bottom UI elements (FABs, docked toolbars)
- On web, don't completely obscure actionable elements — it makes it difficult to know what is focused

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6aa5hcy-22.png?alt=media&token=28ca12e4-37a3-42ef-910a-77f7e93539d8=s0" /><br/><b>Do:</b> In front of main content</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6aa6688-23.png?alt=media&token=f80dfa9d-e09c-4d14-a503-34133ee3754b=s0" /><br/><b>Don't:</b> In front of navigation</td>
</tr></table>

<table><tr>
<td><img src="https://lh3.googleusercontent.com/vg5GlpuWuNMO4YWdc0KGUyWNHahzYhB8tTa-uXWzkLg62Et6WGYvmeoY4A8iT5fW17tRL3aeUfWxEpl6Wyaz6hqqqfFp3ZuYeuhjmDhRvgSx=s0" /><br/><b>Do:</b> Size snackbar to avoid blocking focused elements</td>
<td><img src="https://lh3.googleusercontent.com/kpbBuDWBK_Ys0lIMzxCNuXCENtyVH4hR1fZew7Plf3CLFO6w5xF-w_3BdgmDkR2FUBahDMfcS1Hj9KqjAmhyog4PmEHnUy9tF9BBS92Y13Q=s0" /><br/><b>Don't:</b> Don't fully cover elements in focus</td>
</tr></table>

Full-width snackbars are only appropriate when the UI has no persistent navigation (app bars, nav bars). Full-width snackbars can push FABs upwards when they appear.

![Caution: Full-width snackbars shouldn't appear in front of navigation or FABs](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6aa171j-26.png?alt=media&token=0ca0a009-f201-4574-9c7f-1b37050bc6b5=s0)

### Snackbar and FAB

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6aa25mm-27.png?alt=media&token=b110ee1b-9457-4f9a-a789-13eee60b7ef5=s0" /><br/><b>Do:</b> Above the FAB</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6aa35y8-28.png?alt=media&token=7bbf8d02-d6da-4fff-b9c1-9407d260d303=s0" /><br/><b>Don't:</b> In front of FAB</td>
</tr></table>

![Don't: Behind a FAB](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6aa41vd-29.png?alt=media&token=196c1cfa-db40-4a5c-88fe-3c1e175670af=s0)

---

## Behavior

### Appearing and disappearing

- Snackbars appear without warning and don't block user interaction
- **Without actions**: auto-dismiss after **4-10 seconds** (platform-dependent)
- **With actions**: remain on screen until the user acts or dismisses
- A snackbar with **updated information** can immediately replace an outdated one
- On web, avoid auto-dismissing snackbars unless there's also inline feedback

### Consecutive snackbars

- Only **one at a time** — consecutive snackbars appear sequentially
- Don't stack snackbars on top of one another
- Don't animate other components (e.g. FABs) along with snackbar animations

---

## Measurements

![Snackbar padding and size measurements](https://lh3.googleusercontent.com/n1bxJJHcB0rD_PQuOaQL4U-nFlVYJ27WJyM-bsxB1Es0KgiWp-4UDnXLHUIMA42rrSWGNZ7nYCQGRNj5hemAC1g672z6akYe7iX1pv0113Q=s0)

### Container

| Attribute          | Value                             |
| ------------------ | --------------------------------- |
| Single-line height | 48dp                              |
| Two-line height    | 68dp                              |
| Shape              | `md.sys.shape.corner.extra-small` |
| Elevation          | `md.sys.elevation.level3`         |

### Elements

| Attribute             | Value         |
| --------------------- | ------------- |
| Icon (close) size     | 24dp          |
| Action text style     | `label-large` |
| Supporting text style | `body-medium` |

---

## Color Tokens

![Snackbar color roles](https://lh3.googleusercontent.com/TqN2bvamEg2OcfPTmDLrFjMzDjDhfoX3dVbCgn4qqFArx765sDUaubGeUw0RiTFP6y83dAh3XIhj8zds2PAmADSgaUSkxhWjYLzElENX55ca=s0)

1. Inverse surface — 2. Inverse on surface — 3. Inverse primary — 4. Inverse on surface

### Enabled

#### Container

| Element            | Token                                                | Value                             |
| ------------------ | ---------------------------------------------------- | --------------------------------- |
| Container color    | `md.comp.snackbar.container.color`                   | `md.sys.color.inverse-surface`    |
| Shadow color       | `md.comp.snackbar.container.shadow-color`            | `md.sys.color.shadow`             |
| Elevation          | `md.comp.snackbar.container.elevation`               | `md.sys.elevation.level3`         |
| Shape              | `md.comp.snackbar.container.shape`                   | `md.sys.shape.corner.extra-small` |
| Single-line height | `md.comp.snackbar.with-single-line.container.height` | 48dp                              |
| Two-line height    | `md.comp.snackbar.with-two-lines.container.height`   | 68dp                              |

#### Action (label text)

| Element     | Token                                            | Value                                      |
| ----------- | ------------------------------------------------ | ------------------------------------------ |
| Type        | `md.comp.snackbar.action.label-text.type`        | Aa                                         |
| Color       | `md.comp.snackbar.action.label-text.color`       | `md.sys.color.inverse-primary`             |
| Font        | `md.comp.snackbar.action.label-text.font`        | `md.sys.typescale.label-large.font`        |
| Line height | `md.comp.snackbar.action.label-text.line-height` | `md.sys.typescale.label-large.line-height` |
| Size        | `md.comp.snackbar.action.label-text.size`        | `md.sys.typescale.label-large.size`        |
| Tracking    | `md.comp.snackbar.action.label-text.tracking`    | `md.sys.typescale.label-large.tracking`    |
| Weight      | `md.comp.snackbar.action.label-text.weight`      | `md.sys.typescale.label-large.weight`      |

#### Icon (close)

| Element | Token                         | Value                             |
| ------- | ----------------------------- | --------------------------------- |
| Color   | `md.comp.snackbar.icon.color` | `md.sys.color.inverse-on-surface` |
| Size    | `md.comp.snackbar.icon.size`  | 24dp                              |

#### Supporting text

| Element     | Token                                          | Value                                      |
| ----------- | ---------------------------------------------- | ------------------------------------------ |
| Type        | `md.comp.snackbar.supporting-text.type`        | Aa                                         |
| Color       | `md.comp.snackbar.supporting-text.color`       | `md.sys.color.inverse-on-surface`          |
| Font        | `md.comp.snackbar.supporting-text.font`        | `md.sys.typescale.body-medium.font`        |
| Line height | `md.comp.snackbar.supporting-text.line-height` | `md.sys.typescale.body-medium.line-height` |
| Size        | `md.comp.snackbar.supporting-text.size`        | `md.sys.typescale.body-medium.size`        |
| Tracking    | `md.comp.snackbar.supporting-text.tracking`    | `md.sys.typescale.body-medium.tracking`    |
| Weight      | `md.comp.snackbar.supporting-text.weight`      | `md.sys.typescale.body-medium.weight`      |

### Hovered

#### Action

| Element             | Token                                               | Value                                    |
| ------------------- | --------------------------------------------------- | ---------------------------------------- |
| Label color         | `md.comp.snackbar.action.hover.label-text.color`    | `md.sys.color.inverse-primary`           |
| State layer color   | `md.comp.snackbar.action.hover.state-layer.color`   | `md.sys.color.inverse-primary`           |
| State layer opacity | `md.comp.snackbar.action.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

#### Icon

| Element             | Token                                             | Value                                    |
| ------------------- | ------------------------------------------------- | ---------------------------------------- |
| Icon color          | `md.comp.snackbar.icon.hover.icon.color`          | `md.sys.color.inverse-on-surface`        |
| State layer color   | `md.comp.snackbar.icon.hover.state-layer.color`   | `md.sys.color.inverse-on-surface`        |
| State layer opacity | `md.comp.snackbar.icon.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

### Focused

#### Action

| Element             | Token                                               | Value                                    |
| ------------------- | --------------------------------------------------- | ---------------------------------------- |
| Label color         | `md.comp.snackbar.action.focus.label-text.color`    | `md.sys.color.inverse-primary`           |
| State layer color   | `md.comp.snackbar.action.focus.state-layer.color`   | `md.sys.color.inverse-primary`           |
| State layer opacity | `md.comp.snackbar.action.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

#### Icon

| Element             | Token                                             | Value                                    |
| ------------------- | ------------------------------------------------- | ---------------------------------------- |
| Icon color          | `md.comp.snackbar.icon.focus.icon.color`          | `md.sys.color.inverse-on-surface`        |
| State layer color   | `md.comp.snackbar.icon.focus.state-layer.color`   | `md.sys.color.inverse-on-surface`        |
| State layer opacity | `md.comp.snackbar.icon.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

### Pressed

#### Action

| Element             | Token                                                 | Value                                      |
| ------------------- | ----------------------------------------------------- | ------------------------------------------ |
| Label color         | `md.comp.snackbar.action.pressed.label-text.color`    | `md.sys.color.inverse-primary`             |
| State layer color   | `md.comp.snackbar.action.pressed.state-layer.color`   | `md.sys.color.inverse-primary`             |
| State layer opacity | `md.comp.snackbar.action.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

#### Icon

| Element             | Token                                               | Value                                      |
| ------------------- | --------------------------------------------------- | ------------------------------------------ |
| Icon color          | `md.comp.snackbar.icon.pressed.icon.color`          | `md.sys.color.inverse-on-surface`          |
| State layer color   | `md.comp.snackbar.icon.pressed.state-layer.color`   | `md.sys.color.inverse-on-surface`          |
| State layer opacity | `md.comp.snackbar.icon.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

---

## Responsive Layout

### Compact windows (mobile)

- Snackbar expands vertically (48dp → 68dp) for 1-2 lines
- Fixed distance from leading, trailing, and bottom edges

![Snackbar with two-line text maintaining fixed edge distance](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxktk5oy-28.png?alt=media&token=62ea237a-9fb2-4b02-af6a-6a1d860be406=s0)

### Medium & expanded windows (tablet/desktop)

- Scale **horizontally** to accommodate longer text (ideal line length: 40-60 characters)
- Flexible trailing edge distance
- Aim for **single line** with optional button
- Can be **left-aligned** or **center-aligned** — but placed consistently

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoztb40-29.png?alt=media&token=6f2bb46d-080a-4fdf-b1ef-136b1a0e52d0=s0" /><br/>Horizontally expanded on medium screen</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwozw4lz-30.png?alt=media&token=1e5ae92c-43f8-4c9c-ab67-b51993825dd7=s0" /><br/>Left-aligned on medium screen</td>
</tr></table>

![Center-aligned snackbar on medium screen](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwozx768-31.png?alt=media&token=488159aa-db6a-467d-a7ee-01503dacf742=s0)

<table><tr>
<td><img src="https://lh3.googleusercontent.com/31lW1WIYT75nNWrdmMIpaPc3F1li8pdovxS-wfb4EPMkAyZOwTPcOhw2EmNvQ7IsBKjkF-BnlA8ciLYiewbuRaf_A7fM3279CbPZEZkhgEw-=s0" /><br/><b>Don't:</b> Flush to one edge of the layout</td>
<td><img src="https://lh3.googleusercontent.com/OfYvxPiin9tChm76P70MCXk-eBs2mdE5Lg-EIsARo0YiUY5UDsthxozOFefNXX0RhhW-SJ7mKpeHpofakdr6uN5i2XBdNcNYjgv_MNXvlCT4=s0" /><br/><b>Don't:</b> Consecutive snackbars side by side</td>
</tr></table>

---

## Accessibility

### Focus

- When a snackbar appears, **announce the message** but **don't move focus**
- Don't automatically move or trap focus
- Focus should freely navigate in and out of the snackbar
- When focus exits: return to the element that triggered the snackbar, or the next logical element
- On Android Compose, focus may move to the nearest visible element or the first actionable item
- On web, provide a shortcut (e.g. Alt+G) to move focus to actionable snackbars — document this clearly

### Auto-dismiss and web accessibility

On web, auto-dismissing snackbars are inaccessible for people with low vision. Solve with:

1. **Inline feedback** — also communicate the message near the triggering action (e.g. "Save" → "Saved")
2. **Make actionable** — add actions so the snackbar persists until acted on

![Communicate snackbar information near the triggering action](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwp0kqjx-3.png?alt=media&token=cdc2d281-4288-4a6d-830f-8c72184d2dc8=s0)

**Note:** Material Web doesn't yet include the snackbar component. This guidance still applies to custom-made snackbars.

### Auto-dismiss timing

- Snackbars with actions **shouldn't auto-dismiss** — users need time to read and interact
- Snackbars without actions can auto-dismiss after **4-10 seconds** (platform-dependent)

![Auto-dismissing snackbar should remain long enough to read](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwp0j72d-1.png?alt=media&token=fbcb708c-f8d8-4b0a-810f-f68a6bfcc444=s0)

### Announcements

- Use a **live region** with **polite** (queued) announcement — not assertive
- iOS 17+ uses polite announcements by default
- If snackbar appears at app launch, announce after the page title

![Snackbar accessibility label — announced but doesn't trap focus](https://lh3.googleusercontent.com/T_KwPf_rpSE3ree_3mFMt2C53xtXu1NZ67-FWB7-dRxb8jIeyk4T3J2-evC6G3Jly9WNV_gjKI-h98xqnBN3F_1npn_okXgBAUS4eo495UM=s0)

### Contrast

- Snackbar uses `inverse-surface` color to stand out against the UI
- Use default color mappings to avoid color conflict issues

![Snackbar with dark container stands out in light theme](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwp0k0la-2.png?alt=media&token=0c86aabd-9c0f-47f6-9dcd-c872748ddfd2=s0)

### Keyboard Navigation

| Key | Action                                                   |
| --- | -------------------------------------------------------- |
| Tab | Moves focus between interactive elements (action, close) |
| Esc | Dismisses the snackbar when in focus                     |

---

## M2 → M3 Differences

![Snackbar overview placement](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwow6ukp-1.png?alt=media&token=24ee05cc-c58f-4ecb-8348-804d66e04ab4=s0)

![Snackbars with new color mappings](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwow95bc-2.png?alt=media&token=6719d9ee-ca40-4021-8b1c-1e07c2a88258=s0)

| Aspect   | Change                                                                        |
| -------- | ----------------------------------------------------------------------------- |
| Color    | New color mappings, dynamic color compatible (inverse color system)           |
| Behavior | Clarified dismissive (auto-dismiss) vs non-dismissive (persists until action) |
