# FAB Menu — M3 Component Reference

> The floating action button (FAB) menu opens from a FAB to display multiple related actions.

Sources: [Overview](https://m3.material.io/components/fab-menu/overview) · [Specs](https://m3.material.io/components/fab-menu/specs) · [Guidelines](https://m3.material.io/components/fab-menu/guidelines) · [Accessibility](https://m3.material.io/components/fab-menu/accessibility)

---

## Variants

![1 FAB menu](https://lh3.googleusercontent.com/aEJrDU0HXKoBxMGFWOq1I7O6QB2fl6EPJGEDSP0L7CVDgvAjMdaM_LX10txGb1GDquvp0R-IiszOHSY23xw1qRcCit1YcAxSgB4P3HKa4wGs=s0)

| Variant  | M3  | M3 Expressive |
| -------- | --- | ------------- |
| FAB menu | —   | Available     |

This is an **M3 Expressive** component. It replaces the M2 speed dial and any usage of stacked small FABs.

### Color configurations

![3 color configurations of FAB menus](https://lh3.googleusercontent.com/ysJ9Ea896_EYwed_YofScZMv_HuE8BH4IJVkWyw4v2Xw-KInaEtXmOyWaaQNTTAZw0oLB9neXbgOnHTv2rPWRCii81v_hwh0ZkDiyQp2seY=s0)

| #   | Color set | Close button                 | Menu items                                       |
| --- | --------- | ---------------------------- | ------------------------------------------------ |
| 1   | Primary   | `primary` / `on-primary`     | `primary-container` / `on-primary-container`     |
| 2   | Secondary | `secondary` / `on-secondary` | `secondary-container` / `on-secondary-container` |
| 3   | Tertiary  | `tertiary` / `on-tertiary`   | `tertiary-container` / `on-tertiary-container`   |

Match the color set to the FAB color style — primary set with primary/primary-container FABs, etc.

![3 FAB menus in different color schemes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aj37mw-01.png?alt=media&token=1ac9e775-2541-4a63-8818-d76cf8570699=s0)

![A primary FAB paired with a primary FAB menu](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al91ki-08.png?alt=media&token=ef35ad96-9369-44fa-8547-d3df63456e56=s0)

![A secondary FAB paired with a secondary FAB menu](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alljh0-09.png?alt=media&token=ed402cb2-4a9b-4116-9562-9e3805d5d8f6=s0)

![A tertiary FAB paired with a tertiary FAB menu](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0almfyg-10.png?alt=media&token=67b04c16-7eeb-47fa-86c1-4ed567e43115=s0)

---

## Anatomy

![2 elements of a FAB menu](https://lh3.googleusercontent.com/CsC2u7L3QL6svcrFzmZM2foCzJxzUjF93lwZuZ-oJW7RK-lKsp4Ei0iNdLiNhbFST2y9U34PClKaRDJVJK8dT582gl98nYYhiCGKAwXNSKO6=s0)

1. **Close button** — replaces the FAB when menu opens; dismisses the menu
2. **Menu item** — pill-shaped item with icon + label text

![5 FAB menus showing the range of 2–6 items](https://lh3.googleusercontent.com/KIWWfbv6JG0LIK8rzUSHcalH5BrNbW8_o8_U3uLqVkUDcdZNw4VS_nwoQ33DaomQXt95s6R_EY49aEQsWTQhxxDn2aYrDvU4ZSv4_arxasPc=s0)

FAB menus can contain **2–6 items**.

---

## Usage & When to Use

![FAB menu showing options on a music albums page](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al2scq-01.png?alt=media&token=933b5d53-2e43-42c9-8f5b-6dd54b507ed1=s0)

- Opens from a **FAB** (any size) to show **2–6 related actions**
- Actions should be closely related under a single concept (e.g. "Share" variants)
- Makes actions immediately accessible while keeping the UI clean when not needed
- Available in primary, secondary, and tertiary color sets

The FAB menu should always appear in the same place as the FAB that opened it, aligned to the **trailing edge** of the window.

![FAB and FAB menu both right-aligned](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al39xa-02.png?alt=media&token=8593c439-72f3-4e9a-bab4-31fb9b508f96=s0)

### When NOT to use

| Scenario                                    | Use instead                            |
| ------------------------------------------- | -------------------------------------- |
| Only 1 action                               | Regular FAB (no menu needed)           |
| More than 6 actions                         | Different pattern (menu, bottom sheet) |
| Opening from an extended FAB                | Not supported — use regular FAB        |
| FAB is next to a toolbar or navigation rail | Regular FAB without menu               |
| Unrelated actions                           | Don't group in same FAB menu           |

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al46l0-04.png?alt=media&token=99e07baf-b16a-429a-8bd2-f577e1f0ab03=s0" /><br/><b>Do:</b> 2-6 related items</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al4jux-05.png?alt=media&token=4c31fc95-1876-44d9-bd9a-74dfa92d7e4e=s0" /><br/><b>Don't:</b> Single item — just use the FAB</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al73q3-06.png?alt=media&token=7530f997-8c27-4487-b57b-d0257454ef76=s0" /><br/><b>Do:</b> FABs can sit next to toolbars</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al7run-07.png?alt=media&token=35de4220-c99b-4cdf-9903-cd4c4df92f87=s0" /><br/><b>Don't:</b> FAB menu next to a toolbar</td>
</tr></table>

### RTL support

In right-to-left languages, the FAB menu should be **left-aligned** with icon and text placement **mirrored**.

![FAB and FAB menu left-aligned and mirrored for RTL](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al3tfx-03.png?alt=media&token=5f6b948a-7cfb-433e-b36c-e6039479f05f=s0)

---

## Sub-elements

### Menu items

- Must always have **label text** — don't remove labels
- Should always have **icons** — they differentiate items (remove only if necessary)
- Items **hug their content** — avoid truncating text or setting fixed widths
- All items must be **rounded** (`md.sys.shape.corner.full`)

![FAB menu without icons — caution](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alqzgn-12.png?alt=media&token=9f30f3f1-7e25-49f9-be70-457be0bed35f=s0)

**Caution:** Only remove icons if absolutely necessary. Icons differentiate items at a glance.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alssof-14.png?alt=media&token=83c41c88-207b-4692-b117-89a41eb96f38=s0" /><br/><b>Do:</b> Consistent padding, hug content</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alt3lp-15.png?alt=media&token=f8796c60-e6ec-48f7-9ff9-255bb1a6fa66=s0" /><br/><b>Don't:</b> Expand container sizes to equal widths</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0feodak-13.png?alt=media&token=eec6074a-71e9-47d1-96ad-fea96e8f63a7=s0" /><br/><b>Don't:</b> Remove the label text</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0altd3s-16.png?alt=media&token=911d5b4e-aa6b-4f62-a85c-b64c402bb265=s0" /><br/><b>Don't:</b> Change to non-round shapes</td>
</tr></table>

---

## Behavior

### Opening

- FAB **transforms into** the close button
- Menu items appear using an **enter/exit transition**
- Transition originates from the FAB's **top trailing corner**
- The close button and FAB share the same **top trailing corner as anchor**

### Scrolling

- When window height is limited (e.g. landscape), menu items **can scroll**
- Items scroll **behind the close button** — the close button must always remain accessible

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am8l9a-02.png?alt=media&token=989423d2-f7cd-4b11-8ac1-115565b2ccc2=s0" /><br/><b>Do:</b> Items scroll behind close button</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am8ym2-03.png?alt=media&token=5fa58f68-9fae-4806-8754-4fe611b73f45=s0" /><br/><b>Don't:</b> Items scrolling in front of close button</td>
</tr></table>

### Expanding

- Any menu item can **expand** into any shape using a **container transform** transition
- This includes in-app surfaces or full-screen surfaces

---

## Measurements

![FAB menu size measurements](https://lh3.googleusercontent.com/6K5OibGh_d83LTRduhambKrHPD8JMVCHm19eHlen8e58fVWnoLyh8wWGZyLrdCPSO8Q3m01icndNcp7uuA0LLzeHzKWk60mGzGS3wrlB78o=s0)

### Close button

| Attribute                   | Value                      |
| --------------------------- | -------------------------- |
| Container height            | 56dp                       |
| Container width             | 56dp                       |
| Icon size                   | 20dp                       |
| Container elevation         | `md.sys.elevation.level3`  |
| Container shape             | `md.sys.shape.corner.full` |
| Space below (to first item) | 8dp                        |

### Menu item

| Attribute           | Value                      |
| ------------------- | -------------------------- |
| Container height    | 56dp                       |
| Label text          | Aa                         |
| Icon size           | 24dp                       |
| Container elevation | `md.sys.elevation.level0`  |
| Container shape     | `md.sys.shape.corner.full` |
| Leading space       | 24dp                       |
| Icon-to-label space | 8dp                        |
| Trailing space      | 24dp                       |
| Space between items | 4dp                        |

Menu items share the same measurements as the medium button specs.

### FAB-to-menu alignment

The close button and FAB share the **top trailing corner** as an anchor point, appearing in the same place.

| FAB size | FAB margins | Menu bottom margin |
| -------- | ----------- | ------------------ |
| Standard | 16dp        | 16dp               |
| Medium   | 16dp        | 40dp               |
| Large    | 16dp        | 56dp               |

<table><tr>
<td><img src="https://lh3.googleusercontent.com/WhBYTHZseZ9EfjdiU3CqPLeEC36wFENc3fV_9h5eR9T5ze6ooQya6w3-f1JWj7bBOkJnQHFL3LpbcmG_N1zDZC9RT3dkok2EOHrbxNP5-rQ=s0" /><br/>Standard FAB with 16dp margins</td>
<td><img src="https://lh3.googleusercontent.com/HWYLNxfsd_aBEZRMazrMRxUthRgVqeA8_evmV1IZrkKg878uq7DK0dg5EZaR8q7n-QP_kLrEaYALuBpmKtQjnBiVXhjfz_1-yYZw-CG0MTQ=s0" /><br/>Close button anchored to FAB's top trailing corner</td>
</tr></table>

<table><tr>
<td><img src="https://lh3.googleusercontent.com/gce3Kgv0OcZSOCiWq672oYOzAE9YJhGCC0oGLAcdxJ59BPnVhlV3HdjJPyrHiJy1LgUNnQkTKyOc9d6e2N7EL7hyrzOoMq8kRrAZwtFYUDJz=s0" /><br/>Medium FAB with 16dp margins</td>
<td><img src="https://lh3.googleusercontent.com/kfovl3xRwL77xd7_XYJlFsLMybMdv16Nd0U9T5f87iZTyW3lo8gU72nkr81ZLumjSbxXIYnkvJX7ea84B8WmUtmukv4fhG1Wppp4IGnOgENn=s0" /><br/>Close button placed higher to align with medium FAB top (40dp bottom margin)</td>
</tr></table>

<table><tr>
<td><img src="https://lh3.googleusercontent.com/_9hh4PDq9vnfiJ2AAOX8VKeIFe9De47Av_acmKjjFbTkWQOGjZTLOqGY5cWqLsxkDLWjG4bgquVe81njJP9pL12nQlj_F7iNMl7KTugTGLWP=s0" /><br/>Large FAB with 16dp margins</td>
<td><img src="https://lh3.googleusercontent.com/zGkr1v4xtHihId5hAGO-4ESfqwzsweXE2xqXba2w8m0zl9Hswn3RWimV53apAvslPo7y0G2yrUchBqCB8sR1_96IAzSaJyALM8gE8GshfO85=s0" /><br/>Close button placed higher to align with large FAB top (56dp bottom margin)</td>
</tr></table>

---

## Color Tokens

![12 color roles of the FAB menu](https://lh3.googleusercontent.com/tZxH6WCjbJBIqPlpd4_nt_npacUlh9WWyrIqJWs6Z1BCdGKbGFPt_BaW0CrG9HHNVQzBFYxxGU4hYm8LnEeWldCP9dezTNn3BwRy0uvJR2FoEw=s0)

1. On primary container — 2. Primary container — 3. On primary — 4. Primary — 5. On secondary container — 6. Secondary container — 7. On secondary — 8. Secondary — 9. On tertiary container — 10. Tertiary container — 11. On tertiary — 12. Tertiary

The FAB menu has **6 color token sets** — one per element (close button, menu item) × color configuration (primary, secondary, tertiary). Each set has the same structure; only the color family changes.

### Primary — Close button

#### Enabled

| Element         | Token                                                          | Value                     |
| --------------- | -------------------------------------------------------------- | ------------------------- |
| Container color | `md.comp.fab-menu.primary.close-button.container.color`        | `md.sys.color.primary`    |
| Shadow color    | `md.comp.fab-menu.primary.close-button.container.shadow-color` | `md.sys.color.shadow`     |
| Icon color      | `md.comp.fab-menu.primary.close-button.icon.color`             | `md.sys.color.on-primary` |

#### Hovered

| Element             | Token                                                               | Value                                    |
| ------------------- | ------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab-menu.primary.close-button.hovered.container.elevation` | `md.sys.elevation.level4`                |
| State layer color   | `md.comp.fab-menu.primary.close-button.hovered.state-layer.color`   | `md.sys.color.on-primary`                |
| State layer opacity | `md.comp.fab-menu.primary.close-button.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.primary.close-button.hovered.icon.color`          | `md.sys.color.on-primary`                |

#### Focused

| Element             | Token                                                               | Value                                    |
| ------------------- | ------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab-menu.primary.close-button.focused.container.elevation` | `md.sys.elevation.level3`                |
| State layer color   | `md.comp.fab-menu.primary.close-button.focused.state-layer.color`   | `md.sys.color.on-primary`                |
| State layer opacity | `md.comp.fab-menu.primary.close-button.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.primary.close-button.focused.icon.color`          | `md.sys.color.on-primary`                |

#### Pressed

| Element             | Token                                                               | Value                                      |
| ------------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| Container elevation | `md.comp.fab-menu.primary.close-button.pressed.container.elevation` | `md.sys.elevation.level3`                  |
| State layer color   | `md.comp.fab-menu.primary.close-button.pressed.state-layer.color`   | `md.sys.color.on-primary`                  |
| State layer opacity | `md.comp.fab-menu.primary.close-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.primary.close-button.pressed.icon.color`          | `md.sys.color.on-primary`                  |

### Primary — Menu items

#### Enabled

| Element          | Token                                                                 | Value                               |
| ---------------- | --------------------------------------------------------------------- | ----------------------------------- |
| Container color  | `md.comp.fab-menu.primary-container.list-item.container.color`        | `md.sys.color.primary-container`    |
| Shadow color     | `md.comp.fab-menu.primary-container.list-item.container.shadow-color` | `md.sys.color.shadow`               |
| Icon color       | `md.comp.fab-menu.primary-container.list-item.icon.color`             | `md.sys.color.on-primary-container` |
| Label text color | `md.comp.fab-menu.primary-container.list-item.label-text.color`       | `md.sys.color.on-primary-container` |

#### Hovered

| Element             | Token                                                                      | Value                                    |
| ------------------- | -------------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab-menu.primary-container.list-item.hovered.container.elevation` | `md.sys.elevation.level4`                |
| State layer color   | `md.comp.fab-menu.primary-container.list-item.hovered.state-layer.color`   | `md.sys.color.on-primary-container`      |
| State layer opacity | `md.comp.fab-menu.primary-container.list-item.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.primary-container.list-item.hovered.icon.color`          | `md.sys.color.on-primary-container`      |
| Label text color    | `md.comp.fab-menu.primary-container.list-item.hovered.label-text.color`    | `md.sys.color.on-primary-container`      |

#### Focused

| Element             | Token                                                                      | Value                                    |
| ------------------- | -------------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab-menu.primary-container.list-item.focused.container.elevation` | `md.sys.elevation.level3`                |
| State layer color   | `md.comp.fab-menu.primary-container.list-item.focused.state-layer.color`   | `md.sys.color.on-primary-container`      |
| State layer opacity | `md.comp.fab-menu.primary-container.list-item.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.primary-container.list-item.focused.icon.color`          | `md.sys.color.on-primary-container`      |
| Label text color    | `md.comp.fab-menu.primary-container.list-item.focused.label-text.color`    | `md.sys.color.on-primary-container`      |

#### Pressed

| Element             | Token                                                                      | Value                                      |
| ------------------- | -------------------------------------------------------------------------- | ------------------------------------------ |
| Container elevation | `md.comp.fab-menu.primary-container.list-item.pressed.container.elevation` | `md.sys.elevation.level3`                  |
| State layer color   | `md.comp.fab-menu.primary-container.list-item.pressed.state-layer.color`   | `md.sys.color.on-primary-container`        |
| State layer opacity | `md.comp.fab-menu.primary-container.list-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.primary-container.list-item.pressed.icon.color`          | `md.sys.color.on-primary-container`        |
| Label text color    | `md.comp.fab-menu.primary-container.list-item.pressed.label-text.color`    | `md.sys.color.on-primary-container`        |

### Secondary — Close button

#### Enabled

| Element         | Token                                                            | Value                       |
| --------------- | ---------------------------------------------------------------- | --------------------------- |
| Container color | `md.comp.fab-menu.secondary.close-button.container.color`        | `md.sys.color.secondary`    |
| Shadow color    | `md.comp.fab-menu.secondary.close-button.container.shadow-color` | `md.sys.color.shadow`       |
| Icon color      | `md.comp.fab-menu.secondary.close-button.icon.color`             | `md.sys.color.on-secondary` |

#### Hovered

| Element             | Token                                                                 | Value                                    |
| ------------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab-menu.secondary.close-button.hovered.container.elevation` | `md.sys.elevation.level4`                |
| State layer color   | `md.comp.fab-menu.secondary.close-button.hovered.state-layer.color`   | `md.sys.color.on-secondary`              |
| State layer opacity | `md.comp.fab-menu.secondary.close-button.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.secondary.close-button.hovered.icon.color`          | `md.sys.color.on-secondary`              |

#### Focused

| Element             | Token                                                                 | Value                                    |
| ------------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab-menu.secondary.close-button.focused.container.elevation` | `md.sys.elevation.level3`                |
| State layer color   | `md.comp.fab-menu.secondary.close-button.focused.state-layer.color`   | `md.sys.color.on-secondary`              |
| State layer opacity | `md.comp.fab-menu.secondary.close-button.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.secondary.close-button.focused.icon.color`          | `md.sys.color.on-secondary`              |

#### Pressed

| Element             | Token                                                                 | Value                                      |
| ------------------- | --------------------------------------------------------------------- | ------------------------------------------ |
| Container elevation | `md.comp.fab-menu.secondary.close-button.pressed.container.elevation` | `md.sys.elevation.level3`                  |
| State layer color   | `md.comp.fab-menu.secondary.close-button.pressed.state-layer.color`   | `md.sys.color.on-secondary`                |
| State layer opacity | `md.comp.fab-menu.secondary.close-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.secondary.close-button.pressed.icon.color`          | `md.sys.color.on-secondary`                |

### Secondary — Menu items

#### Enabled

| Element          | Token                                                                   | Value                                 |
| ---------------- | ----------------------------------------------------------------------- | ------------------------------------- |
| Container color  | `md.comp.fab-menu.secondary-container.list-item.container.color`        | `md.sys.color.secondary-container`    |
| Shadow color     | `md.comp.fab-menu.secondary-container.list-item.container.shadow-color` | `md.sys.color.shadow`                 |
| Icon color       | `md.comp.fab-menu.secondary-container.list-item.icon.color`             | `md.sys.color.on-secondary-container` |
| Label text color | `md.comp.fab-menu.secondary-container.list-item.label-text.color`       | `md.sys.color.on-secondary-container` |

#### Hovered

| Element             | Token                                                                        | Value                                    |
| ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab-menu.secondary-container.list-item.hovered.container.elevation` | `md.sys.elevation.level4`                |
| State layer color   | `md.comp.fab-menu.secondary-container.list-item.hovered.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| State layer opacity | `md.comp.fab-menu.secondary-container.list-item.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.secondary-container.list-item.hovered.icon.color`          | `md.sys.color.on-secondary-container`    |
| Label text color    | `md.comp.fab-menu.secondary-container.list-item.hovered.label-text.color`    | `md.sys.color.on-secondary-container`    |

#### Focused

| Element             | Token                                                                        | Value                                    |
| ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab-menu.secondary-container.list-item.focused.container.elevation` | `md.sys.elevation.level3`                |
| State layer color   | `md.comp.fab-menu.secondary-container.list-item.focused.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| State layer opacity | `md.comp.fab-menu.secondary-container.list-item.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.secondary-container.list-item.focused.icon.color`          | `md.sys.color.on-secondary-container`    |
| Label text color    | `md.comp.fab-menu.secondary-container.list-item.focused.label-text.color`    | `md.sys.color.on-secondary-container`    |

#### Pressed

| Element             | Token                                                                        | Value                                      |
| ------------------- | ---------------------------------------------------------------------------- | ------------------------------------------ |
| Container elevation | `md.comp.fab-menu.secondary-container.list-item.pressed.container.elevation` | `md.sys.elevation.level3`                  |
| State layer color   | `md.comp.fab-menu.secondary-container.list-item.pressed.state-layer.color`   | `md.sys.color.on-secondary-container`      |
| State layer opacity | `md.comp.fab-menu.secondary-container.list-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.secondary-container.list-item.pressed.icon.color`          | `md.sys.color.on-secondary-container`      |
| Label text color    | `md.comp.fab-menu.secondary-container.list-item.pressed.label-text.color`    | `md.sys.color.on-secondary-container`      |

### Tertiary — Close button

#### Enabled

| Element         | Token                                                           | Value                      |
| --------------- | --------------------------------------------------------------- | -------------------------- |
| Container color | `md.comp.fab-menu.tertiary.close-button.container.color`        | `md.sys.color.tertiary`    |
| Shadow color    | `md.comp.fab-menu.tertiary.close-button.container.shadow-color` | `md.sys.color.shadow`      |
| Icon color      | `md.comp.fab-menu.tertiary.close-button.icon.color`             | `md.sys.color.on-tertiary` |

#### Hovered

| Element             | Token                                                                | Value                                    |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab-menu.tertiary.close-button.hovered.container.elevation` | `md.sys.elevation.level4`                |
| State layer color   | `md.comp.fab-menu.tertiary.close-button.hovered.state-layer.color`   | `md.sys.color.on-tertiary`               |
| State layer opacity | `md.comp.fab-menu.tertiary.close-button.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.tertiary.close-button.hovered.icon.color`          | `md.sys.color.on-tertiary`               |

#### Focused

| Element             | Token                                                                | Value                                    |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab-menu.tertiary.close-button.focused.container.elevation` | `md.sys.elevation.level3`                |
| State layer color   | `md.comp.fab-menu.tertiary.close-button.focused.state-layer.color`   | `md.sys.color.on-tertiary`               |
| State layer opacity | `md.comp.fab-menu.tertiary.close-button.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.tertiary.close-button.focused.icon.color`          | `md.sys.color.on-tertiary`               |

#### Pressed

| Element             | Token                                                                | Value                                      |
| ------------------- | -------------------------------------------------------------------- | ------------------------------------------ |
| Container elevation | `md.comp.fab-menu.tertiary.close-button.pressed.container.elevation` | `md.sys.elevation.level3`                  |
| State layer color   | `md.comp.fab-menu.tertiary.close-button.pressed.state-layer.color`   | `md.sys.color.on-tertiary`                 |
| State layer opacity | `md.comp.fab-menu.tertiary.close-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.tertiary.close-button.pressed.icon.color`          | `md.sys.color.on-tertiary`                 |

### Tertiary — Menu items

#### Enabled

| Element          | Token                                                                  | Value                                |
| ---------------- | ---------------------------------------------------------------------- | ------------------------------------ |
| Container color  | `md.comp.fab-menu.tertiary-container.list-item.container.color`        | `md.sys.color.tertiary-container`    |
| Shadow color     | `md.comp.fab-menu.tertiary-container.list-item.container.shadow-color` | `md.sys.color.shadow`                |
| Icon color       | `md.comp.fab-menu.tertiary-container.list-item.icon.color`             | `md.sys.color.on-tertiary-container` |
| Label text color | `md.comp.fab-menu.tertiary-container.list-item.label-text.color`       | `md.sys.color.on-tertiary-container` |

#### Hovered

| Element             | Token                                                                       | Value                                    |
| ------------------- | --------------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab-menu.tertiary-container.list-item.hovered.container.elevation` | `md.sys.elevation.level4`                |
| State layer color   | `md.comp.fab-menu.tertiary-container.list-item.hovered.state-layer.color`   | `md.sys.color.on-tertiary-container`     |
| State layer opacity | `md.comp.fab-menu.tertiary-container.list-item.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.tertiary-container.list-item.hovered.icon.color`          | `md.sys.color.on-tertiary-container`     |
| Label text color    | `md.comp.fab-menu.tertiary-container.list-item.hovered.label-text.color`    | `md.sys.color.on-tertiary-container`     |

#### Focused

| Element             | Token                                                                       | Value                                    |
| ------------------- | --------------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab-menu.tertiary-container.list-item.focused.container.elevation` | `md.sys.elevation.level3`                |
| State layer color   | `md.comp.fab-menu.tertiary-container.list-item.focused.state-layer.color`   | `md.sys.color.on-tertiary-container`     |
| State layer opacity | `md.comp.fab-menu.tertiary-container.list-item.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.tertiary-container.list-item.focused.icon.color`          | `md.sys.color.on-tertiary-container`     |
| Label text color    | `md.comp.fab-menu.tertiary-container.list-item.focused.label-text.color`    | `md.sys.color.on-tertiary-container`     |

#### Pressed

| Element             | Token                                                                       | Value                                      |
| ------------------- | --------------------------------------------------------------------------- | ------------------------------------------ |
| Container elevation | `md.comp.fab-menu.tertiary-container.list-item.pressed.container.elevation` | `md.sys.elevation.level3`                  |
| State layer color   | `md.comp.fab-menu.tertiary-container.list-item.pressed.state-layer.color`   | `md.sys.color.on-tertiary-container`       |
| State layer opacity | `md.comp.fab-menu.tertiary-container.list-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Icon color          | `md.comp.fab-menu.tertiary-container.list-item.pressed.icon.color`          | `md.sys.color.on-tertiary-container`       |
| Label text color    | `md.comp.fab-menu.tertiary-container.list-item.pressed.label-text.color`    | `md.sys.color.on-tertiary-container`       |

---

## Interaction States

### Close button

![4 states of the FAB menu close button](https://lh3.googleusercontent.com/IBxWcDPavbWf55MsedxQZnCouJM3OZfbOudsfZQNrILcXhsyU_EI9iIEZ1UeKo-BwB7btsT0_0ZApQFHjZA4TOMjuOaY7TDtozX-qV09ssI=s0)

### Menu item

![4 states of the FAB menu items](https://lh3.googleusercontent.com/GHST3WLAtYjpsKWjXfoTtSy1pybwjIFPYgrw1GBjynLRHHSxmZWT-t8VhnSMGbOvYWG0O65po5ceeOVrqt5KKtMzyxazm1PLFiTj4KMgg-CB=s0)

| #   | State       | Visual changes                                            |
| --- | ----------- | --------------------------------------------------------- |
| 1   | **Enabled** | Default appearance                                        |
| 2   | **Hovered** | State layer; elevation increases to level4                |
| 3   | **Focused** | State layer; elevation stays at level3                    |
| 4   | **Pressed** | State layer at pressed opacity; elevation stays at level3 |

---

## Adaptive Layout

- FAB menu can open from **any sized FAB** — use the FAB size appropriate for the window
- Larger FABs are recommended for **larger windows**
- FAB menu should remain **anchored to the same corner/edge** regardless of window size
- In **large/extra-large windows**, FAB and FAB menu margins increase from **16dp to 24dp**

![FAB menu with 24dp margins on desktop](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alwg82-18.png?alt=media&token=4fbeae7c-3a0b-43ab-9dde-fa6fdaf5fa93=s0)

---

## Accessibility

### Touch targets

- All FAB menu elements meet the **minimum 48dp** target size by default
- Sufficient spacing between items is built in

![FAB menu elements with 48dp minimum target annotations](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am5xpn-01.png?alt=media&token=537719c2-9f5f-4d5d-ba85-2b59cdcd2c5b=s0)

### Focus order

![Focus order in FAB menu](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaejeaf9-04.png?alt=media&token=d8a732b5-ad7b-4566-a92d-eccca8795f38=s0)

1. **Close button** (initial focus — replaces the FAB)
2. First menu item (top)
3. Second menu item
4. Third menu item (bottom)

Focus moves from the close button at the bottom to the topmost menu item, then downward.

### Keyboard Navigation

| Key           | Action                                   |
| ------------- | ---------------------------------------- |
| Tab           | Navigate to the next interactive element |
| Space / Enter | Activate the focused button or item      |

### Labeling

- Close button: role `button`, label `"close"`
- Menu items: role `menuitem` (on mobile web), labels match UI text

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amemaw-05.png?alt=media&token=c723fed3-2d4d-4ca1-a34a-14899768c332=s0" /><br/>Close button: role "button", label "close"</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ameviv-06.png?alt=media&token=861c3c91-6513-44ec-877a-bfa7c4cfc2ec=s0" /><br/>Menu items: role "menuitem", label from UI text</td>
</tr></table>

### Web focus visibility

- Don't let the FAB menu **completely obscure** actionable elements and their focus indicators
- Partially covering is acceptable as long as the focus indicator remains visible

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4hkgdmm-21.png?alt=media&token=f82bf9f8-0945-44a8-b5b9-644fecd6c509=s0" /><br/><b>Do:</b> Element and focus indicator visible behind menu</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4hkgqnr-22.png?alt=media&token=c61ae0da-15e0-4c67-8ed2-e27877fd51d5=s0" /><br/><b>Don't:</b> Completely blocking element and focus indicator</td>
</tr></table>

---

## M2 → M3 Differences

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aj3w24-Diff%20GM2.png?alt=media&token=e358569f-0a63-4ead-a844-ad98804cee2d=s0" /><br/>M2: Speed dial with small round FABs</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aj42vs-Diff%20GM3%20Expressive.png?alt=media&token=b0d9f87d-66c0-48f4-9a11-e312b5b207ef=s0" /><br/>M3: FAB menu with dynamic color and larger items</td>
</tr></table>

![FAB menu uses contrasting color and large items; opens from any size FAB](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aj3ip6-02.png?alt=media&token=fde56cc4-c285-45ef-9019-faa06da95454=s0)

| Aspect | M2 (Speed dial)                     | M3 (FAB menu)                                            |
| ------ | ----------------------------------- | -------------------------------------------------------- |
| Name   | Speed dial                          | FAB menu                                                 |
| Items  | Small round FABs stacked vertically | Pill-shaped items with icon + label                      |
| Color  | Single color                        | Dynamic color, 3 color sets (primary/secondary/tertiary) |
| Close  | FAB icon rotates                    | Dedicated close button replaces FAB                      |
| Labels | Optional tooltips                   | Always-visible label text required                       |
| Sizing | One size                            | One menu size, pairs with any FAB size                   |
