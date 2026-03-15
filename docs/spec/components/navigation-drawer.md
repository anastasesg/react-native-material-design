# Navigation Drawer — M3 Component Reference

> Navigation drawers let people switch between UI views on larger devices.

Sources: [Overview](https://m3.material.io/components/navigation-drawer/overview) · [Specs](https://m3.material.io/components/navigation-drawer/specs) · [Guidelines](https://m3.material.io/components/navigation-drawer/guidelines) · [Accessibility](https://m3.material.io/components/navigation-drawer/accessibility)

> **Note:** The navigation drawer is no longer recommended in the M3 Expressive update. Use an [expanded navigation rail](https://m3.material.io/m3/pages/navigation-rail/overview/) instead, which provides mostly the same functionality and adapts better across window size classes.

---

## Variants

![2 variants of navigation drawers: standard and modal.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoorr6v-1.png?alt=media&token=884dcde5-fdd3-438c-9825-1f6668eef908=s0)

| #   | Variant                        | Description                                                                                                                                                      |
| --- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Standard** navigation drawer | Sits alongside app content. Used in expanded, large, and extra-large window sizes. Can be permanently visible or dismissible via a menu icon.                    |
| 2   | **Modal** navigation drawer    | Overlays app content with a scrim. Used primarily in compact and medium window sizes. Always opened by an external action (e.g. menu icon in a navigation rail). |

![Standard navigation drawer with destinations in mail app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopw575-4.png?alt=media&token=0970e3a0-0963-4060-9aae-22d9e3689652=s0)

Standard navigation drawer

![Modal navigation drawer with destinations and scrim.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopwhen-5.png?alt=media&token=81d4f11e-1cba-4620-ba30-78d3cc70ab55=s0)

Modal navigation drawer

---

## Anatomy

![Navigation drawer diagram numbering 7 elements](https://lh3.googleusercontent.com/XQqbD3P86vaNwSR7zEWzeXnw_VQ-u5LnM_wl_axaPI-t-8Inp_VPVyiPJUtXgAan5-UqVGlahZc0GzYXVH5ae839iIG25uW6nKPEVJ7QsAz98A=s0)

1. **Container** — side sheet holding all drawer elements
2. **Headline** — optional section header text
3. **Label text** — destination name (required)
4. **Icon** — optional leading icon for each destination
5. **Active indicator** — pill-shaped background showing the current destination
6. **Badge label text** — optional count or status indicator
7. **Scrim** — semi-transparent overlay behind modal drawers (modal only)

![Navigation drawer diagram numbering 8 elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopzqbr-10.png?alt=media&token=4325d34c-753c-4cfa-8b60-fbf6aaa56358=s0)

1. Active Indicator
2. Icon
3. Label
4. Badge label
5. Sheet
6. Divider
7. Section label (optional)
8. Scrim

---

## Usage & When to Use

![Navigation drawer with 4 primary destinations](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopun3e-1.png?alt=media&token=220f8c9f-c032-4185-9a2c-4ac8950d763f=s0)

Navigation drawers provide access to destinations and app functionality such as switching accounts. One destination is always active.

Navigation drawers are recommended for:

- Apps with **5 or more** top-level destinations
- Apps with **2 or more** levels of navigation hierarchy
- Quick navigation between unrelated destinations
- Replacing the navigation rail or navigation bar on large screens

![Navigation drawer with multiple destinations in a mail app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopv1qw-2.png?alt=media&token=a8455b6f-5918-42d9-aa1c-04d158c8eba1=s0)

Do: Use a navigation drawer for 5 or more primary destinations, or more than 1 level of navigation hierarchy.

### When NOT to use

Avoid combining a navigation drawer with other primary navigation components (e.g. a navigation bar). Choose a single navigation component based on window size class:

- **Compact** windows: navigation bar or modal navigation drawer
- **Medium** windows: navigation rail (optionally with a modal drawer)
- **Expanded / large / extra-large** windows: standard navigation drawer or navigation rail

![Standard navigation drawer and navigation bar used together.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopvjco-3.png?alt=media&token=9df37deb-e7d3-4dea-88d1-b5b6a6040cab=s0)

Caution: Avoid using two navigation components on the same screen.

### Standard vs Modal

| Aspect        | Standard                                                | Modal                                                                     |
| ------------- | ------------------------------------------------------- | ------------------------------------------------------------------------- |
| Window sizes  | Expanded, large, extra-large                            | Any (primarily compact and medium)                                        |
| Layout impact | Sits beside content — affects layout grid               | Overlays content — does not affect layout grid                            |
| Visibility    | Can be permanently visible or dismissible via menu icon | Always opened by an external action (e.g. navigation rail menu icon)      |
| Dismissal     | Tapping the menu icon (if dismissible)                  | Selecting a destination, tapping the scrim, or swiping toward anchor edge |
| Scrim         | None                                                    | Required — blocks interaction with content behind                         |

---

## Configurations

### Standard navigation drawer

**Permanently visible** standard drawers allow quick pivoting between unrelated destinations. They cannot be closed by the user.

![Standard navigation drawer moving between destinations.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoqf0gp-28.png?alt=media&token=627872b2-dc97-4b2c-8234-2339a7730b18=s0)

A permanently-visible standard navigation drawer on desktop.

**Dismissible** standard drawers suit layouts that prioritize content (e.g. photo galleries) or apps where destination switching is infrequent. They use a visible menu icon to open and close.

![Side-by-side standard navigation drawer opened and then closed after tapping menu bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoqb1nm-27.png?alt=media&token=ed09af6e-928f-41f7-a7ca-fcf766ea4050=s0)

A standard dismissible drawer is opened and closed by tapping the navigation menu icon in the app bar (1), and remains open until the menu icon is tapped again (2).

### Modal navigation drawer

Modal drawers are always opened by an action outside the drawer, such as a menu icon in a navigation rail. They can be dismissed by:

- Selecting a drawer item
- Tapping the scrim
- Swiping toward the drawer's anchoring edge (e.g. swiping right-to-left for a left-aligned drawer)

![Diagram noting a navigation menu icon in a navigation rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopy7b1-8.png?alt=media&token=5ea39e51-4a7b-4e9b-ad02-2fef81e461cd=s0)

A modal drawer opened by clicking a navigation menu icon (1).

![2 modal navigations illustrating tapping the scrim or swiping to dismiss a modal drawer](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopyjta-9.png?alt=media&token=3090bcc0-a205-4695-b11b-931243b71061=s0)

1. Dismiss by tapping the scrim — 2. Dismiss by swiping the drawer

---

## Sub-elements

### Sheet

A side sheet serves as the container for both standard and modal navigation drawers. The drawer always opens from the **start edge** of the screen (left in LTR languages, right in RTL languages).

![Modal navigation drawer opening from left side of screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq08ti-11.png?alt=media&token=fa4df5c4-43a7-4979-83dd-4a50c3c28454=s0)

Do: A navigation drawer opens from the left side of the screen for left-to-right languages.

### Divider (optional)

Dividers separate groups of related destinations within the drawer. Use full-width dividers between groups, not between individual destinations.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq1xf0-12.png?alt=media&token=1d041701-d74b-4495-a337-c858a9bd81b5=s0" /><br/><b>Do:</b> Use full-width dividers to separate groups of destinations</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq29df-13.png?alt=media&token=612b4caa-99c1-4c3b-a835-2c1ed0bda36a=s0" /><br/><b>Don't:</b> Don't use dividers to separate individual destinations</td>
</tr></table>

### Active indicator

The active indicator is a pill-shaped background communicating which destination is currently displayed.

![Navigation drawer diagram numbering 1 element.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq2qbs-14.png?alt=media&token=cefe950a-7624-4c32-a31d-3b596d729417=s0)

The active indicator (1) is a background shape communicating which destination of the navigation drawer is currently being displayed.

### Label text and icons

Each destination is an actionable list item with a required label and optional icon. Icons are placed before text and should use recognizable conventions when they exist.

![Navigation drawer diagram numbering 2 elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq358i-15.png?alt=media&token=ad709e8b-f932-4c40-a63c-cf893ff65b71=s0)

Actionable list items describe each destination using (1) an optional icon and (2) required label text.

Label text should be concise enough not to be truncated by the sheet width. If a label is too long, truncate it rather than wrapping or shrinking.

![Navigation drawer using only label text for 4 destinations.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq3i6v-16.png?alt=media&token=e855eb07-211a-44ba-a56f-9414dce6237b=s0)

Navigation drawers can use text labels without icons.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq4gjj-17.png?alt=media&token=44f71647-6325-43c9-b93e-6a3bc059ae87=s0" /><br/><b>Do:</b> Keep text labels concise, but truncate them if they extend beyond the container width</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq4tkk-18.png?alt=media&token=c152a72c-b231-4f97-81aa-1b14d827c8b9=s0" /><br/><b>Don't:</b> Don't wrap label text</td>
</tr></table>

![Navigation drawer with 1 text label featuring smaller text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq56gb-19.png?alt=media&token=218c541f-0e68-40b4-bf8c-59983f554512=s0)

Don't: Don't shrink text size in order to fit a text label on a single line.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq67nf-20.png?alt=media&token=f5cdaabd-b70e-495e-9d1e-5cce1e0bb81d=s0" /><br/><b>Do:</b> Use recognizable icons when conventions exist</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq6mto-21.png?alt=media&token=70a07030-1191-4f84-9e14-19c188d0452b=s0" /><br/><b>Don't:</b> Don't apply icons to some destinations and not others. Icons should be used for all destinations, or none.</td>
</tr></table>

### Section label (optional)

Short subhead section labels group related destinations. They appear above a group of items and help organize longer destination lists.

![Navigation drawer showing subhead section labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq710s-22.png?alt=media&token=f9fc1eb9-1347-4515-bf7f-461d9100c605=s0)

Related destinations can be grouped using short subhead section labels.

### Scrim (modal only)

Modal drawers require a scrim to block interaction with the rest of the app. The scrim sits directly behind the drawer sheet and can be tapped to dismiss.

![Modal navigation drawer with scrim placed behind.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq7esu-23.png?alt=media&token=41cf34a6-52f4-48ad-8408-16f71ce0b744=s0)

Scrim applied behind a modal navigation drawer.

---

## Placement

Navigation drawers always open from the **start edge** of the screen (left for LTR, right for RTL). Standard drawers sit beside the main content. Modal drawers overlay the content.

![Standard navigation drawer in a mail app with active destination "Inbox" next to app content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopx4a0-6.png?alt=media&token=439663a8-dc1f-442d-a29a-54430caeb836=s0)

Standard navigation drawer providing access to destinations next to app content.

![Modal navigation drawer with 1 active destination and scrim.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopxvvj-7.png?alt=media&token=5d45f347-e521-48af-9ae9-d4c05965f42f=s0)

Modal navigation drawer using a scrim to block interaction with the rest of an app's content.

---

## Behavior

### Scrolling

Navigation drawers scroll vertically and independently of the rest of the screen. If the list of destinations exceeds the drawer height, the content scrolls within the drawer while body content remains stationary.

### Visibility

- **Permanently visible** standard drawers remain open at all times and cannot be dismissed by the user.
- **Dismissible** standard drawers open and close via a navigation menu icon and remain open until explicitly closed again.
- **Modal** drawers are always opened by an external action and dismissed by selecting a destination, tapping the scrim, or swiping toward the anchor edge.

### Appearing

When a navigation drawer animates on screen, it uses an enter and exit transition pattern. The drawer slides in from the start edge and slides out in the same direction when dismissed.

---

## Measurements

### Standard navigation drawer

![Standard navigation drawer with measurements shown for various elements.](https://lh3.googleusercontent.com/l8YaTBOyAgzi71bCX-rCjVbPr9F5UayXCBXxfhQ30w1vqJ7aauCJmDa6a-BMxz7e8E4irFkO9c_1Rr7_7ECnf_rlMF86EpPoCC6TeOgZ5gF-=s0)

Element size measurements

![Standard navigation drawer with measurements shown for padding and margins.](https://lh3.googleusercontent.com/0b273CFdNyDt3yEDRLSSICnKHb8rktNAiXmruD2EO82_S9iBxGsq08CPpYTupKoj0SRnuaNR0fo8dICOcrrev88RLidMbVhYvVgiudX80RJ4=s0)

Padding and margins

| Attribute                  | Value                    |
| -------------------------- | ------------------------ |
| Container height           | 100%                     |
| Container width            | 360dp                    |
| Container shape            | 0,16,16,0dp corner radii |
| Icon size                  | 24dp                     |
| Active indicator height    | 56dp                     |
| Active indicator shape     | 28dp                     |
| Active indicator width     | 336dp                    |
| Horizontal label alignment | Start-aligned            |
| Left padding               | 28dp                     |
| Right padding              | 28dp                     |
| Active indicator padding   | 12dp                     |
| Padding between elements   | 0dp                      |

### Modal navigation drawer

![Modal navigation drawer with measurements shown for various elements.](https://lh3.googleusercontent.com/invVA4iDTyiHnbFHAMhycwQRAZds3tEMmOOPGaiv1HnriGnDeAV4MSXpQ9gOcnALm0eQcxgml_hzP-tTo1gWH4DQMu-ZM0iPuy1OgHvjULc_=s0)

Element size measurements

![Modal navigation drawer with measurements shown for padding and margins.](https://lh3.googleusercontent.com/2T9NqmBF4mES5SgaRMeuXBm0CXnjDhysHSNKT1lr_iIEUZKCbKtRtIXvzyFbVR8RnSZ17O4sK483ySXplBOwNiw0N_DoqjM0npsQ6uA6c9nnYA=s0)

Padding and margins

| Attribute                  | Value         |
| -------------------------- | ------------- |
| Container height           | 100%          |
| Container width            | 360dp         |
| Icon size                  | 24dp          |
| Active indicator height    | 56dp          |
| Active indicator shape     | 28dp          |
| Active indicator width     | 336dp         |
| Horizontal label alignment | Start-aligned |
| Left padding               | 28dp          |
| Right padding              | 28dp          |
| Active indicator padding   | 12dp          |
| Padding between elements   | 0dp           |

---

## Color Tokens

![Navigation drawer diagram numbering 8 elements.](https://lh3.googleusercontent.com/EFOoVjwBffIgl-Gs07m2W5WiNu8brQ2paefKx_U_eQexLGySjgLV_C9FYD7wkTs0o7j3_RvrcTcqh6oUAKyyrkRsYKsU3A6n-KFtlCBp1sKv=s0)

1. Surface container low — 2. On surface variant — 3. On secondary container — 4. On secondary container — 5. Secondary container — 6. On secondary container — 7. On surface variant — 8. On surface variant — 9. Scrim

For divider color roles, see [divider specs](https://m3.material.io/m3/pages/divider/specs).

### Enabled — Container

| Element                            | Token                                                          | Value                                |
| ---------------------------------- | -------------------------------------------------------------- | ------------------------------------ |
| Container color                    | `md.comp.navigation-drawer.container.color`                    | `md.sys.color.surface`               |
| Modal container color              | `md.comp.navigation-drawer.modal.container.color`              | `md.sys.color.surface-container-low` |
| Standard container color           | `md.comp.navigation-drawer.standard.container.color`           | `md.sys.color.surface`               |
| Container surface tint layer color | `md.comp.navigation-drawer.container.surface-tint-layer.color` | `md.sys.color.surface-tint`          |
| Modal container elevation          | `md.comp.navigation-drawer.modal.container.elevation`          | `md.sys.elevation.level1`            |
| Standard container elevation       | `md.comp.navigation-drawer.standard.container.elevation`       | `md.sys.elevation.level0`            |
| Container height                   | `md.comp.navigation-drawer.container.height`                   | 100%                                 |
| Container shape                    | `md.comp.navigation-drawer.container.shape`                    | `md.sys.shape.corner.large.end`      |
| Bottom container shape             | `md.comp.navigation-drawer.bottom.container.shape`             | `md.sys.shape.corner.large.top`      |
| Container width                    | `md.comp.navigation-drawer.container.width`                    | 360dp                                |

### Enabled — Label text

| Element                   | Token                                                 | Value                                           |
| ------------------------- | ----------------------------------------------------- | ----------------------------------------------- |
| Active label text color   | `md.comp.navigation-drawer.active.label-text.color`   | `md.sys.color.on-secondary-container`           |
| Inactive label text color | `md.comp.navigation-drawer.inactive.label-text.color` | `md.sys.color.on-surface-variant`               |
| Label text font           | `md.comp.navigation-drawer.label-text.font`           | `md.sys.typescale.label-large.font`             |
| Label text line height    | `md.comp.navigation-drawer.label-text.line-height`    | `md.sys.typescale.label-large.line-height`      |
| Label text size           | `md.comp.navigation-drawer.label-text.size`           | `md.sys.typescale.label-large.size`             |
| Label text tracking       | `md.comp.navigation-drawer.label-text.tracking`       | `md.sys.typescale.label-large.tracking`         |
| Label text weight         | `md.comp.navigation-drawer.label-text.weight`         | `md.sys.typescale.label-large.weight`           |
| Active label text weight  | `md.comp.navigation-drawer.active.label-text.weight`  | `md.sys.typescale.label-large.weight.prominent` |
| Label text type           | `md.comp.navigation-drawer.label-text.type`           | Aa                                              |

### Enabled — Icon

| Element             | Token                                           | Value                                 |
| ------------------- | ----------------------------------------------- | ------------------------------------- |
| Active icon color   | `md.comp.navigation-drawer.active.icon.color`   | `md.sys.color.on-secondary-container` |
| Inactive icon color | `md.comp.navigation-drawer.inactive.icon.color` | `md.sys.color.on-surface-variant`     |
| Icon size           | `md.comp.navigation-drawer.icon.size`           | 24dp                                  |

### Enabled — Headline

| Element              | Token                                            | Value                                      |
| -------------------- | ------------------------------------------------ | ------------------------------------------ |
| Headline color       | `md.comp.navigation-drawer.headline.color`       | `md.sys.color.on-surface-variant`          |
| Headline font        | `md.comp.navigation-drawer.headline.font`        | `md.sys.typescale.title-small.font`        |
| Headline line height | `md.comp.navigation-drawer.headline.line-height` | `md.sys.typescale.title-small.line-height` |
| Headline size        | `md.comp.navigation-drawer.headline.size`        | `md.sys.typescale.title-small.size`        |
| Headline tracking    | `md.comp.navigation-drawer.headline.tracking`    | `md.sys.typescale.title-small.tracking`    |
| Headline weight      | `md.comp.navigation-drawer.headline.weight`      | `md.sys.typescale.title-small.weight`      |
| Headline type        | `md.comp.navigation-drawer.headline.type`        | Aa                                         |

### Enabled — Divider

| Element       | Token                                     | Value                  |
| ------------- | ----------------------------------------- | ---------------------- |
| Divider color | `md.comp.navigation-drawer.divider.color` | `md.sys.color.outline` |

### Enabled — Active indicator

| Element                 | Token                                               | Value                              |
| ----------------------- | --------------------------------------------------- | ---------------------------------- |
| Active indicator color  | `md.comp.navigation-drawer.active-indicator.color`  | `md.sys.color.secondary-container` |
| Active indicator height | `md.comp.navigation-drawer.active-indicator.height` | 56dp                               |
| Active indicator shape  | `md.comp.navigation-drawer.active-indicator.shape`  | `md.sys.shape.corner.full`         |
| Active indicator width  | `md.comp.navigation-drawer.active-indicator.width`  | 336dp                              |

### Enabled — Large badge label

| Element                       | Token                                                     | Value                                      |
| ----------------------------- | --------------------------------------------------------- | ------------------------------------------ |
| Large badge label color       | `md.comp.navigation-drawer.large-badge-label.color`       | `md.sys.color.on-surface-variant`          |
| Large badge label font        | `md.comp.navigation-drawer.large-badge-label.font`        | `md.sys.typescale.label-large.font`        |
| Large badge label line height | `md.comp.navigation-drawer.large-badge-label.line-height` | `md.sys.typescale.label-large.line-height` |
| Large badge label size        | `md.comp.navigation-drawer.large-badge-label.size`        | `md.sys.typescale.label-large.size`        |
| Large badge label tracking    | `md.comp.navigation-drawer.large-badge-label.tracking`    | `md.sys.typescale.label-large.tracking`    |
| Large badge label weight      | `md.comp.navigation-drawer.large-badge-label.weight`      | `md.sys.typescale.label-large.weight`      |
| Large badge label type        | `md.comp.navigation-drawer.large-badge-label.type`        | Aa                                         |

### Enabled — Scrim [Deprecated]

| Element       | Token                                     | Value                              |
| ------------- | ----------------------------------------- | ---------------------------------- |
| Scrim color   | `md.comp.navigation-drawer.scrim.color`   | `md.ref.palette.neutral-variant20` |
| Scrim opacity | `md.comp.navigation-drawer.scrim.opacity` | 0.4                                |

---

## Interaction States

![4 navigation drawers illustrating enabled, hovered, focused, and pressed states.](https://lh3.googleusercontent.com/xCUslUMH4a9wLA0cXIbv622e8KMYHe0R5TPMmzjG0lFKP2hX6vjQcnKVFwxI9HIdk1z3y6BR65wFxvpsx4LcCDTCkHk0J52aaChbC8h3YEZy=s0)

| #   | State       | Visual changes                                                   |
| --- | ----------- | ---------------------------------------------------------------- |
| 1   | **Enabled** | Default appearance                                               |
| 2   | **Hovered** | State layer appears over destination; icon and label shift color |
| 3   | **Focused** | Focus indicator ring; state layer over destination               |
| 4   | **Pressed** | Ripple passes through indicator; state layer over destination    |

### Hovered — Label text

| Element                         | Token                                                       | Value                                 |
| ------------------------------- | ----------------------------------------------------------- | ------------------------------------- |
| Active hover label text color   | `md.comp.navigation-drawer.active.hover.label-text.color`   | `md.sys.color.on-secondary-container` |
| Inactive hover label text color | `md.comp.navigation-drawer.inactive.hover.label-text.color` | `md.sys.color.on-surface`             |

### Hovered — State layer

| Element                          | Token                                                        | Value                                    |
| -------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Active hover state layer color   | `md.comp.navigation-drawer.active.hover.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| Inactive hover state layer color | `md.comp.navigation-drawer.inactive.hover.state-layer.color` | `md.sys.color.on-surface`                |
| Hover state layer opacity        | `md.comp.navigation-drawer.hover.state-layer.opacity`        | `md.sys.state.hover.state-layer-opacity` |

### Hovered — Icon

| Element                   | Token                                                 | Value                                 |
| ------------------------- | ----------------------------------------------------- | ------------------------------------- |
| Active hover icon color   | `md.comp.navigation-drawer.active.hover.icon.color`   | `md.sys.color.on-secondary-container` |
| Inactive hover icon color | `md.comp.navigation-drawer.inactive.hover.icon.color` | `md.sys.color.on-surface`             |

### Focused — Focus indicator

| Element                   | Token                                                      | Value                                       |
| ------------------------- | ---------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color     | `md.comp.navigation-drawer.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Focus indicator thickness | `md.comp.navigation-drawer.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset    | `md.comp.navigation-drawer.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` |

### Focused — Label text

| Element                         | Token                                                       | Value                                 |
| ------------------------------- | ----------------------------------------------------------- | ------------------------------------- |
| Active focus label text color   | `md.comp.navigation-drawer.active.focus.label-text.color`   | `md.sys.color.on-secondary-container` |
| Inactive focus label text color | `md.comp.navigation-drawer.inactive.focus.label-text.color` | `md.sys.color.on-surface`             |

### Focused — State layer

| Element                          | Token                                                        | Value                                    |
| -------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Active focus state layer color   | `md.comp.navigation-drawer.active.focus.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| Inactive focus state layer color | `md.comp.navigation-drawer.inactive.focus.state-layer.color` | `md.sys.color.on-surface`                |
| Focus state layer opacity        | `md.comp.navigation-drawer.focus.state-layer.opacity`        | `md.sys.state.focus.state-layer-opacity` |

### Focused — Icon

| Element                   | Token                                                 | Value                                 |
| ------------------------- | ----------------------------------------------------- | ------------------------------------- |
| Active focus icon color   | `md.comp.navigation-drawer.active.focus.icon.color`   | `md.sys.color.on-secondary-container` |
| Inactive focus icon color | `md.comp.navigation-drawer.inactive.focus.icon.color` | `md.sys.color.on-surface`             |

### Pressed — Label text

| Element                           | Token                                                         | Value                                 |
| --------------------------------- | ------------------------------------------------------------- | ------------------------------------- |
| Active pressed label text color   | `md.comp.navigation-drawer.active.pressed.label-text.color`   | `md.sys.color.on-secondary-container` |
| Inactive pressed label text color | `md.comp.navigation-drawer.inactive.pressed.label-text.color` | `md.sys.color.on-surface`             |

### Pressed — State layer

| Element                            | Token                                                          | Value                                      |
| ---------------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| Active pressed state layer color   | `md.comp.navigation-drawer.active.pressed.state-layer.color`   | `md.sys.color.on-secondary-container`      |
| Inactive pressed state layer color | `md.comp.navigation-drawer.inactive.pressed.state-layer.color` | `md.sys.color.on-secondary-container`      |
| Pressed state layer opacity        | `md.comp.navigation-drawer.pressed.state-layer.opacity`        | `md.sys.state.pressed.state-layer-opacity` |

### Pressed — Icon

| Element                     | Token                                                   | Value                                 |
| --------------------------- | ------------------------------------------------------- | ------------------------------------- |
| Active pressed icon color   | `md.comp.navigation-drawer.active.pressed.icon.color`   | `md.sys.color.on-secondary-container` |
| Inactive pressed icon color | `md.comp.navigation-drawer.inactive.pressed.icon.color` | `md.sys.color.on-surface`             |

---

## Responsive / Adaptive Design

A product's navigation component should adapt to the window size class and form factor.

![Navigation rail changing to navigation drawer on a larger screen](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq7wck-24.png?alt=media&token=2e030b27-4348-4860-aac6-78e423e11c79=s0)

Standard navigation drawers change size to suit the device's screen. Use a transition when swapping components (e.g. a navigation rail transforms into a navigation drawer when moving from portrait to landscape).

| Window size             | Recommended component                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Compact**             | Modal navigation drawer, or swap for a navigation bar. Below 320 CSS px on web, use a navigation bar for accessibility. |
| **Medium & Expanded**   | Modal navigation drawer alone or alongside a navigation rail. Standard drawer in single-pane expanded layouts.          |
| **Large & Extra-large** | Standard navigation drawer, or a navigation rail that transitions into a modal drawer.                                  |

![Modal navigation drawer with 1 active destination.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq8evf-25.png?alt=media&token=ef3a29d1-8e04-4b51-9774-8c7f118fbad4=s0)

Use a modal navigation drawer on mobile screens.

When a navigation rail and modal drawer are used together, the drawer may repeat destinations from the rail as long as the drawer offers enough visual separation between navigation hierarchy levels.

![Navigation drawer showing 1 active destination.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx54v3bi-27.png?alt=media&token=444359b1-1e21-4971-b70d-bc624d900b19=s0)

Use a standard navigation drawer on large and desktop screens.

---

## Accessibility

### Touch & Cursor

**Touch:**

- Tapping a navigation item shows the active indicator in place and fires a ripple through it
- The icon switches from outlined to filled and changes color (becomes darker)

**Cursor:**

- Hovering shows a hover indicator as a visual cue that the destination is interactive
- Clicking fires a ripple, the icon switches from outlined to filled
- The icon darkens in light theme / lightens in dark theme to increase contrast

### Initial focus

Initial focus lands directly on the first navigation item since it is the first interactive element.

![1. Tab lands on the first navigation item, Inbox. 2. Down arrow to get to the second navigation item, Outbox.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flworf9hl-3.png?alt=media&token=1bb331b2-e914-4668-baec-8accae5b6fd6=s0)

Focus lands on the first navigation item.

### Closing (modal)

The modal navigation drawer can be dismissed by selecting the scrim covering the rest of the screen.

![A navigation drawer with a scrim covering the body content. A touch target is selecting the scrim.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm36co6ff-navdrawer-tablet-do-md.png?alt=media&token=852f7a22-fb45-4eee-89e8-ab411fad1a65=s0)

Select the scrim to close the navigation drawer.

### Visual indicators

Use a **filled** icon for the selected destination and **outlined** icons for unselected destinations. When selected, the icon fills, darkens (light theme) or lightens (dark theme), and is backed by the active indicator shape.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flworfw7l-5.png?alt=media&token=d33e2758-6076-4012-933b-ce1dde9c539f=s0" /><br/><b>Do:</b> Use a filled icon for the selected navigation destination to differentiate from the other destinations</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flworg85u-6.png?alt=media&token=6cd4cfa6-ec1a-40c4-95f3-ba4efc6de9e1=s0" /><br/><b>Don't:</b> Avoid keeping the icon style for the selected destination the same as unselected icons — this removes an important visual indicator of which destination is active</td>
</tr></table>

![A selected home icon using a filled icon and active indicator and an unselected home icon using an outlined icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flworh5ui-7.png?alt=media&token=1b7a06eb-1f35-4b4f-b1d3-82500203e58b=s0)

When selected, the icon fills, darkens in light theme (or lightens in dark theme), and is backed by an active indicator shape.

![Space + enter is used to select the navigation item inbox.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flworgt4a-4.png?alt=media&token=6afa4fd0-0c68-4f18-9553-84c516c0c6b2=s0)

The navigation item is selected via Space/Enter.

### Keyboard navigation

| Key            | Action                                                     |
| -------------- | ---------------------------------------------------------- |
| Tab            | Focus lands on the first navigation destination            |
| Space or Enter | Selects the focused destination                            |
| Arrow keys     | Navigate between destinations within the navigation drawer |

### Labeling

The accessibility label for a navigation item is typically the same as its visible destination name. If the visible text is ambiguous (e.g. "Recents"), provide a more descriptive accessibility label to clarify intent (e.g. "Recent images").

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flworho52-8.png?alt=media&token=7fb90305-fda9-43bf-a909-b1d9f9e64d05=s0" /><br/>A navigation drawer's accessibility label can incorporate its adjacent UI text</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwori08q-9.png?alt=media&token=816c8f24-84d7-44bd-8578-eaf00de09d6d=s0" /><br/>While the visible label text reads "Recents", the accessibility label clarifies: "Recent images"</td>
</tr></table>

Note: On MDC-Android, a more descriptive accessibility label is not available and the role is not announced.

---

## M2 → M3 Differences

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fldox2g48-navdrawer_OLD_M2.png?alt=media&token=192ac522-fc4c-4fd2-8fd2-ef6d0f6662e7=s0" /><br/>M2: Square corners, rectangular active state indicator</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzdbjtd0-4.png?alt=media&token=8621f0a5-d2d3-41b1-bed8-3d5d6c5fdf34=s0" /><br/>M3: Rounded corners, new color mappings, pill-shaped active indicator</td>
</tr></table>

| Aspect       | M2                    | M3                                                        |
| ------------ | --------------------- | --------------------------------------------------------- |
| Color        | Basic color mappings  | New color mappings with dynamic color support             |
| Variants     | Single variant        | Two distinct variants: standard and modal                 |
| Shape        | Square corners        | Rounded corners at the ending edge of the drawer          |
| Active state | Rectangular indicator | Pill-shaped active indicator with updated color and shape |

### M3 Expressive update (May 2025)

The navigation drawer is no longer recommended. Use the [expanded navigation rail](https://m3.material.io/m3/pages/navigation-rail/overview/) instead, which provides mostly the same functionality and adapts better across window size classes.
