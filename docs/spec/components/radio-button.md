# Radio Button — M3 Component Reference

> Radio buttons let people select one option from a set of options.

Sources: [Overview](https://m3.material.io/components/radio-button/overview) · [Specs](https://m3.material.io/components/radio-button/specs) · [Guidelines](https://m3.material.io/components/radio-button/guidelines) · [Accessibility](https://m3.material.io/components/radio-button/accessibility)

---

## Anatomy

![3 elements of a radio button](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0z4md9-12.png?alt=media&token=1f3f5d82-b6f9-4b8f-b457-1a4935648df0=s0)

A radio button consists of:

1. **Selected icon** — filled circle within an outlined circle
2. **Adjacent label text** — describes the option
3. **Unselected icon** — empty outlined circle

![Radio button icon from specs](https://lh3.googleusercontent.com/dhK9o6CpKl0rU0nNthzBHEz_WjPB264BCIZiXJisj5qoYSGwynygzLH2JUgl2RyYjyArXkZNMdlpDOC6MEm1gY36QdhZED-VFVcPsQuff1rHZg=s0)

Always pair radio buttons with an adjacent label describing the option. Each choice must have its own label since only one can be selected at a time.

---

## Usage & When to Use

![Radio buttons in a ringtone selection list](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc92xj30-01.png?alt=media&token=bc7a6af6-e440-4e83-9cf9-cd221f402f47=s0)

Radio buttons are the recommended way to allow users to make a **single selection** from a list of options. Only one radio button can be selected at a time.

- Select a single option from a set
- Expose all available options
- Use when there are **five or fewer options**

![Radio buttons are single-select, checkboxes are multi-select](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93t2tz-03.png?alt=media&token=7f07e07d-8370-4113-82b6-5721a31fd3dc=s0)

### When NOT to use a radio button

| Scenario                                  | Use instead   |
| ----------------------------------------- | ------------- |
| Multiple options can be selected          | Checkboxes    |
| Standalone on/off toggle (settings)       | Switch        |
| More than five options, space constrained | Dropdown menu |

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93whon-04-do.png?alt=media&token=0cc566db-1677-4900-be3a-bc24c75d71c7=s0" /><br/><b>Do:</b> Radio buttons for single selection from a list</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93wr1q-05-do.png?alt=media&token=4b1a71e3-2793-49ef-ab32-3a6493886899=s0" /><br/><b>Do:</b> Checkboxes when multiple options can be selected</td>
</tr></table>

### What to avoid

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93ykkg-06_dont.png?alt=media&token=4ec7a39d-a607-42d0-9d65-4f5aa1a5ff8d=s0" /><br/><b>Don't:</b> Nest radio buttons</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93z4ss-07_dont.png?alt=media&token=0bc0f856-f056-4239-a7c7-81f173eb17f3=s0" /><br/><b>Don't:</b> Allow multiple radio buttons to be selected</td>
</tr></table>

### Alternate selection controls

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc942yik-08.png?alt=media&token=4e62fb39-faac-4b27-a772-177524e99566=s0" /><br/>Switches — standalone settings</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc942but-09.png?alt=media&token=d4f7cae0-6eea-4a17-b9d3-8fbb5c14152e=s0" /><br/>Checkboxes — multi-select</td>
</tr></table>

### Radio buttons vs dropdown

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc944w0k-10-do.png?alt=media&token=aa3e3c6c-e2a9-403a-b6dd-0143c3cdd3cc=s0" /><br/><b>Do:</b> Radio buttons for ≤5 options</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc945hgt-11-do.png?alt=media&token=8447a05a-5a0e-410b-8c1a-08854aa456b8=s0" /><br/><b>Do:</b> Dropdown when space is constrained</td>
</tr></table>

---

## Placement

- Radio buttons should be **vertically stacked**
- One option should **always be pre-selected**

![Settings page with stacked radio buttons for language selection](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc949gf8-14.png?alt=media&token=452d1dc1-2c20-4637-a479-3659c8737df7=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc94bpsi-16_do.png?alt=media&token=b528a4f2-ab4a-40fc-bdf2-bbd1caa1d08c=s0" /><br/><b>Do:</b> Always have one option pre-selected</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwg86p38-16_caution.png?alt=media&token=e607157e-0a21-43aa-aa48-a01f13e6fb3b=s0" /><br/><b>Caution:</b> Avoid horizontal radio button lists</td>
</tr></table>

---

## Behavior

- A radio button is selected by clicking/tapping either the **icon** or the **label**
- Selection should take effect **immediately**, unless inside a dialog or page that requires saving
- Once a radio button is selected, the group **cannot be fully deselected** — provide a "Not applicable" or "Clear selection" option if needed

---

## Measurements

![Radio button size measurements](https://lh3.googleusercontent.com/Mix21eJwewQUVsSEPZiI8V9QtuoPH_Fw_CYVBaXX1vwpGyYgkN0dC8tdrO6WXjS-ADSW8GMMsDP5MNkMUF1i4izhNjHk7lsA8tAHRlZZ-L8H=s0)

| Attribute        | Value       |
| ---------------- | ----------- |
| Icon size        | 20dp        |
| State layer size | 40dp        |
| Touch target     | 48dp × 48dp |

---

## Color Tokens

![Selected and unselected radio button colors](https://lh3.googleusercontent.com/AiZMdjDtHEF9acx935WgjONj_Kvnb5Zl00C7Q1pxV56QjHx29o9tmyo4ACyJzafBGMDlrnOQBqScIiZY2mk205cbNAtBBqmtDAQR2ya7bcny=s0)

1. Primary — 2. On surface variant

### Enabled

#### Icon

| Element               | Token                                        | Value                             |
| --------------------- | -------------------------------------------- | --------------------------------- |
| Selected icon color   | `md.comp.radio-button.selected.icon.color`   | `md.sys.color.primary`            |
| Unselected icon color | `md.comp.radio-button.unselected.icon.color` | `md.sys.color.on-surface-variant` |
| Icon size             | `md.comp.radio-button.icon.size`             | 20dp                              |

#### State Layer

| Element          | Token                                   | Value |
| ---------------- | --------------------------------------- | ----- |
| State layer size | `md.comp.radio-button.state-layer.size` | 40dp  |

### Disabled

#### Icon

| Element                 | Token                                                   | Value                     |
| ----------------------- | ------------------------------------------------------- | ------------------------- |
| Selected icon color     | `md.comp.radio-button.disabled.selected.icon.color`     | `md.sys.color.on-surface` |
| Selected icon opacity   | `md.comp.radio-button.disabled.selected.icon.opacity`   | 0.38                      |
| Unselected icon color   | `md.comp.radio-button.disabled.unselected.icon.color`   | `md.sys.color.on-surface` |
| Unselected icon opacity | `md.comp.radio-button.disabled.unselected.icon.opacity` | 0.38                      |

### Hovered

#### State Layer

| Element                        | Token                                                       | Value                                    |
| ------------------------------ | ----------------------------------------------------------- | ---------------------------------------- |
| Selected state layer color     | `md.comp.radio-button.selected.hover.state-layer.color`     | `md.sys.color.primary`                   |
| Selected state layer opacity   | `md.comp.radio-button.selected.hover.state-layer.opacity`   | `md.sys.state.hover.state-layer-opacity` |
| Unselected state layer color   | `md.comp.radio-button.unselected.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| Unselected state layer opacity | `md.comp.radio-button.unselected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

#### Icon

| Element               | Token                                              | Value                     |
| --------------------- | -------------------------------------------------- | ------------------------- |
| Selected icon color   | `md.comp.radio-button.selected.hover.icon.color`   | `md.sys.color.primary`    |
| Unselected icon color | `md.comp.radio-button.unselected.hover.icon.color` | `md.sys.color.on-surface` |

### Focused

#### State Layer

| Element                        | Token                                                       | Value                                    |
| ------------------------------ | ----------------------------------------------------------- | ---------------------------------------- |
| Selected state layer color     | `md.comp.radio-button.selected.focus.state-layer.color`     | `md.sys.color.primary`                   |
| Selected state layer opacity   | `md.comp.radio-button.selected.focus.state-layer.opacity`   | `md.sys.state.focus.state-layer-opacity` |
| Unselected state layer color   | `md.comp.radio-button.unselected.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| Unselected state layer opacity | `md.comp.radio-button.unselected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

#### Icon

| Element               | Token                                              | Value                     |
| --------------------- | -------------------------------------------------- | ------------------------- |
| Selected icon color   | `md.comp.radio-button.selected.focus.icon.color`   | `md.sys.color.primary`    |
| Unselected icon color | `md.comp.radio-button.unselected.focus.icon.color` | `md.sys.color.on-surface` |

### Pressed

#### State Layer

| Element                        | Token                                                         | Value                                      |
| ------------------------------ | ------------------------------------------------------------- | ------------------------------------------ |
| Selected state layer color     | `md.comp.radio-button.selected.pressed.state-layer.color`     | `md.sys.color.on-surface`                  |
| Selected state layer opacity   | `md.comp.radio-button.selected.pressed.state-layer.opacity`   | `md.sys.state.pressed.state-layer-opacity` |
| Unselected state layer color   | `md.comp.radio-button.unselected.pressed.state-layer.color`   | `md.sys.color.primary`                     |
| Unselected state layer opacity | `md.comp.radio-button.unselected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

#### Icon

| Element               | Token                                                | Value                     |
| --------------------- | ---------------------------------------------------- | ------------------------- |
| Selected icon color   | `md.comp.radio-button.selected.pressed.icon.color`   | `md.sys.color.primary`    |
| Unselected icon color | `md.comp.radio-button.unselected.pressed.icon.color` | `md.sys.color.on-surface` |

---

## Interaction States

![Radio button states: enabled, hover, focus, pressed, disabled](https://lh3.googleusercontent.com/batG4K9NgonMPOe8NtbqKBf_5HbQhLrGbpIrPzKU2lPdbMfVm8nbualfdj3tFA5cfGE9OLgj4lxybNV6a8-d90gixbpw7mm11V6ky0s5-ik=s0)

| #   | State        | Visual changes                    |
| --- | ------------ | --------------------------------- |
| 1   | **Enabled**  | Default appearance                |
| 2   | **Hovered**  | State layer appears around icon   |
| 3   | **Focused**  | Focus indicator ring; state layer |
| 4   | **Pressed**  | State layer at pressed opacity    |
| 5   | **Disabled** | Reduced opacity (icon 0.38)       |

---

## Accessibility

### Interaction

- People should be able to select either the **text label** or the **radio button icon**
- A radio group can start with one radio button selected, or none selected
- Once selected, the group **cannot be fully deselected** — provide a "Not applicable" option or "Clear selection" mechanism

### Keyboard Navigation

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc94qafr-02.png?alt=media&token=638e9dfc-3ae8-41e6-932c-be168461fa20=s0" /><br/>Tab focuses the selected item (or first if none selected)</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0z51u6-03.png?alt=media&token=3d528eb7-dbb4-4460-a556-b4660f3bc8f0=s0" /><br/>Arrows navigate between options</td>
</tr></table>

| Key         | Action                                                                                    |
| ----------- | ----------------------------------------------------------------------------------------- |
| Tab         | Focus moves into the group to the selected radio button, or the first if none selected    |
| Shift + Tab | Focus moves to the selected radio button, or the last if none selected                    |
| Arrows      | Moves focus **and selects** the previous/next radio button. Wraps between first and last. |
| Space       | Selects the focused radio button. If already selected, does nothing.                      |

### Labeling

- The **radio group** accessibility label is typically the group's title. Role: `radiogroup`
- Each **individual radio button** label matches its adjacent text label. Role: `radio`

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd3jpo7w-04.png?alt=media&token=1f68a095-10b8-4914-9273-7f58c99a7f5e=s0" /><br/>Group label from category title</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0z56zm-05.png?alt=media&token=eff0ba7d-34fe-434b-b962-755ddac009ad=s0" /><br/>Individual label from text label</td>
</tr></table>

### Density

- Do not reduce density by default
- Minimum touch target: **48 × 48dp**
- If offering a dense layout, keep the control to revert density at minimum 48 × 48dp

---

## Adjacent Text Label Color

| Element    | Color role   |
| ---------- | ------------ |
| Text label | `on-surface` |

![Radio button labels use the same color regardless of selection state](https://lh3.googleusercontent.com/aFf7EK2cXKvdJegnbGx-u44UtDR9NZkQxw81UNCX4Q_D6_dvx_psq5rttJYfH9qytzYEkAxpFiNcej-7JO8Q0Mu6ySIq2h6sfDJN-BHFygZr=s0)

Color remains the same regardless of radio button selection state.

---

## M2 → M3 Differences

![Radio buttons with new color mappings](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0z3b8a-02.png?alt=media&token=77e20fc8-fe1b-4715-a652-ac4eaed7eda5=s0)

| Aspect | Change                                       |
| ------ | -------------------------------------------- |
| Color  | New color mappings, dynamic color compatible |
