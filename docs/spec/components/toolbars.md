# Toolbars — M3 Component Reference

> Toolbars display frequently used actions relevant to the current page.

Sources: [Overview](https://m3.material.io/components/toolbars/overview) · [Specs](https://m3.material.io/components/toolbars/specs) · [Guidelines](https://m3.material.io/components/toolbars/guidelines) · [Accessibility](https://m3.material.io/components/toolbars/accessibility)

---

## Variants

![2 variants of toolbars.](https://lh3.googleusercontent.com/j7SkkZwP6mNfPUFrpFyRIcGSsfI3_5Kv8VI0whqh3B1cGJq3v0lx_xaG3wOnjjjRl6GIEV4EZATztyOcGm6n3BbHH6QXE4KMPnSmk1EmvGpm=s0)

1. **Docked toolbar** — spans the full window width; best for global actions that persist across pages
2. **Floating toolbar** — hovers above body content; best for contextual actions specific to the current page

### Baseline variant (not recommended)

The baseline bottom app bar is still supported but should be replaced with the docked toolbar, which is shorter, more flexible, and functionally similar.

![Baseline bottom app bar, which looks like the docked toolbar, but is not recommended.](https://lh3.googleusercontent.com/tIdFhkPyYLLkFb4gUvrKPLzfIPcmAx4al6ORcGUGmS8oukJMF7ZzittOV7r-Nxwq0V63i9VTRfaVICziXGg4J8hd5TKaoZaDr28KS-7jQkI=s0)

| Variant          | M3        | M3 Expressive                        |
| ---------------- | --------- | ------------------------------------ |
| Docked toolbar   | --        | Available                            |
| Floating toolbar | --        | Available                            |
| Bottom app bar   | Available | Not recommended. Use docked toolbar. |

> **Note:** Implementation differs per platform. On Jetpack Compose, the floating toolbar is a separate component from the docked toolbar and bottom app bar.

---

## Anatomy

![Diagram of toolbar layouts.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xiiwbe-11.png?alt=media&token=df3567cb-3de9-4130-87b2-d6496e2b50d6=s0)

![2 elements of a toolbar.](https://lh3.googleusercontent.com/q5KTYC5SjXAnSvSVvP72h2InKksCupfh4xqfQsa8eqO3ImcNxSiNEvyVzwrM54a_bgMyYUG2oOrljsquGFjeuEhoQ-lfYIhLhcYRjTURpOs0mQ=s0)

1. **Container** — the background surface that holds all toolbar elements
2. **Placed components (elements)** — slots populated by icon buttons, buttons, text fields, or custom components

### Container

- **Docked toolbar**: spans full window width. Use straight corners — rounded corners imply the container expands on interaction.
- **Floating toolbar**: should be fully visible on screen. Use an overflow menu if more actions are needed. Has elevation by default, which can be removed if the background is visually distinct.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0als248-12.png?alt=media&token=5de2e6dd-e260-460d-8b24-ec4616d068f3=s0" /><br/><b>Do:</b> Use straight corners for docked toolbars</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alr7n0-13.png?alt=media&token=67d0f0c3-77bf-413d-b028-a3704d62ddde=s0" /><br/><b>Don't:</b> Avoid modifying the container shape</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alvr9d-14.png?alt=media&token=43b6b0e0-3785-4b32-b814-9334d1df3604=s0" /><br/><b>Do:</b> Show the most essential actions; use an overflow menu for the rest</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alwqwe-15.png?alt=media&token=34941365-0b02-426e-98aa-5a7182146ef3=s0" /><br/><b>Don't:</b> Floating toolbars shouldn't exceed the window edge</td>
</tr></table>

![Vibrant floating toolbar that's easy to see in front of a neutral text background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xiazxd-17.png?alt=media&token=1fb4d961-4c77-46d8-8e1a-bacee6d1344e=s0)

Elevation on floating toolbars can be removed when on a visually distinct background.

### Flexibility & slots

Think of a toolbar as a container with configurable slots. Each slot can hold an icon button, button, image, text field, or custom component.

![A toolbar with 5 slots, conceptual spaces for UI elements, next to each other.](https://lh3.googleusercontent.com/U8tAffspM1NK0nWpYaxRxJHvPJOXWBX8GEuuEMeW6b-RjRo7OKtlMaYohHO-8Rn9QzwodfT_aJgLSocPQnHQDqhiMpfonWKsTd8XBUj-kKs=s0)

![5 toolbars with slots, and various combinations of buttons, icon buttons, filled icon buttons, and text fields.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amy7tp-16.png?alt=media&token=eef76f70-653b-4316-a4e5-b4c3efe04ec9=s0)

To create hierarchy and guide users to frequent controls, emphasize a single action using:

- Different icon button color styles (filled, tonal, standard)
- Custom color roles (primary or secondary palette)
- Wide vs. narrow icon buttons
- Pairing the toolbar with a FAB

![2 floating toolbars, 1 with a filled action button and 1 paired with a FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am06ae-18.png?alt=media&token=b78bd5dd-7b9b-4026-8782-bd7299a30180=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am2tq8-19.png?alt=media&token=ade3aae3-04a8-48c5-ad34-a44e19f82385=s0" /><br/><b>Don't:</b> Don't emphasize multiple buttons with bold primary colors (e.g. button + FAB together)</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am3wil-20.png?alt=media&token=fa9517c1-99a1-41ec-bb2a-3add03657f0a=s0" /><br/><b>Don't:</b> Avoid mixing too many different control styles in one toolbar</td>
</tr></table>

![A floating toolbar, which is rounded, with squared icon buttons inside.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xigk3q-22.png?alt=media&token=834f844e-bf4a-482b-a55c-58b8e2a5dc96=s0)

**Don't:** Don't use square filled icon buttons in floating toolbars — their shape conflicts with the fully-rounded container.

![Docked toolbar with too many controls.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0altzpa-22.png?alt=media&token=982f6de8-05e5-4918-8395-3172ba98a767=s0)

**Don't:** Don't overwhelm users with too many controls.

---

## Usage & When to Use

![5 toolbars of various colors, elements, and actions.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xi1w6d-01.png?alt=media&token=c58c89f5-5f11-410e-83e9-527495d6a51c=s0)

![Vibrant toolbar at bottom of mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0akotbi-02.png?alt=media&token=7c57efcb-0ced-4383-923c-2bb9b0d8bb25=s0)

- Use toolbars to provide actions related to the current page
- Toolbars can hold many actions and scale with larger windows
- When actions don't fit, add an overflow menu

![Docked toolbar example.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0akx0bq-03.png?alt=media&token=2ddeb9e7-904c-48c4-82d2-8eb2df8b511f=s0)

Docked toolbars show global controls.

![Floating toolbar example.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0akxxgm-04.png?alt=media&token=d1f96ec5-e3c6-4936-a0ff-9456fabe38b1=s0)

Floating toolbars show controls relevant to the current page.

![Toolbar showing local navigation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2ytl4us-05.png?alt=media&token=3beb745d-8031-460f-b3b5-400d481b0f7d=s0)

Toolbar actions can open a menu when more options are needed.

### Toolbars & navigation bars

Both occupy the bottom of the window, so they should **never** appear simultaneously. Show the navigation bar on primary pages, and toolbars on subsequent pages with contextual actions.

![A navigation bar shown on the main email Inbox page, and a toolbar shown when reading the email.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al4vpg-08.png?alt=media&token=006079a0-0c27-40f7-a3c6-72c86706ebe5=s0)

1. Navigation bar on a primary page
2. Toolbar on a secondary page with contextual actions

Floating toolbars can serve as tabs between related subsequent pages, grouping similar pages and indicating that the selection affects body content.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alklw0-09.png?alt=media&token=864f5358-84b4-4b4e-b438-9a58fae853f0=s0" /><br/><b>Do:</b> Keep navigation distinct; use a toolbar for local navigation on a specific page</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aln2r9-10.png?alt=media&token=f547cd2c-f7aa-4780-a701-89480ad92506=s0" /><br/><b>Don't:</b> Don't show a navigation bar and a toolbar with navigation controls simultaneously</td>
</tr></table>

### Floating toolbar with FAB

A FAB can be placed next to a floating toolbar to present one high-priority action alongside the toolbar's unified set of actions. Use the FAB for the single most important action in the view.

![3 toolbars paired with FABs.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am631l-21.png?alt=media&token=ea7acd11-1ec9-4fee-b237-adf2c9636730=s0)

---

## Configurations

![Color configuration of toolbars.](https://lh3.googleusercontent.com/o4tXTZsCpct2GOpIk9NZcIqwhbbw1CLCMMGKI8rjcbmGoiECpJUHMaKtCGRJ_bL-ngPgBlo5zJAj0wdfLm7PRdk93iZI0BvB08Ull7JZB7SqoQ=s0)

1. Standard and vibrant toolbars
2. Vertical floating toolbar
3. Floating toolbar with FAB

| Category                | Configuration        | M3                          | M3 Expressive |
| ----------------------- | -------------------- | --------------------------- | ------------- |
| Color                   | Standard (default)   | Available as bottom app bar | Available     |
|                         | Vibrant              | --                          | Available     |
| Floating toolbar layout | Horizontal (default) | --                          | Available     |
|                         | Vertical             | --                          | Available     |
| Other elements          | With FAB             | Available as bottom app bar | Available\*   |

> **Note:** \*On Jetpack Compose, floating toolbar with FAB is fully supported as a single component. On other platforms, the toolbar and FAB are added separately.

### Color configurations

Two color schemes control the toolbar's visual emphasis:

- **Standard** — low-emphasis, draws focus to body content rather than the toolbar itself
- **Vibrant** — high-emphasis, draws attention to the controls; can also signal a temporary mode change (e.g. entering edit mode)

Custom color roles can create additional emphasis variations.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al28lo-06.png?alt=media&token=1f6d5d66-1407-4636-9e31-635eec6aac7b=s0" /><br/>Standard: draws focus to content outside the toolbar</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al3avf-07.png?alt=media&token=c786ee9c-8199-4d30-99d7-ed8b8d659cb2=s0" /><br/>Vibrant: emphasizes controls and actions</td>
</tr></table>

---

## Position & Orientation

### Docked toolbar

- Always placed at the bottom of the window
- If other bottom-aligned elements (e.g. navigation bar) are present, don't use a docked toolbar

![Docked toolbar on mobile.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ama5z3-22.png?alt=media&token=fcca3ccd-3347-4482-9732-ed9ce3b21b72=s0)

### Floating toolbar

- **Horizontal**: minimum 16dp margin from the window edge
- **Vertical**: minimum 24dp margin; best for larger window sizes

![Floating toolbar on mobile.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amca2n-23.png?alt=media&token=f1c23645-3eec-4330-8159-b7add81a9481=s0)

![Vertical floating toolbar with 24dp margin.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7ximrxw-26.png?alt=media&token=e501bab9-334b-4454-ade0-c6f31b83ff75=s0)

![Toolbar showing local navigation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amgeqc-24.png?alt=media&token=aad0bae2-9282-40cc-a472-3025c8addcdb=s0)

**Don't:** Using wide buttons with vertical toolbars unnecessarily widens the container and may hide other UI elements.

Vertical toolbars should be placed opposite the navigation rail for balance and ease of access. When both are visible, use the centered configuration of the navigation rail.

![Large screen UI showing both a navigation rail and vertical floating toolbar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amkwhr-TBD.png?alt=media&token=596f104c-915a-47fb-a863-6bf778a8331a=s0)

---

## Behavior

### Scrolling

**Docked toolbars** can either remain visible during scroll or animate offscreen.

**Floating toolbars** have three scroll behaviors:

- Remain visible
- Animate offscreen
- Collapse into a single high-emphasis action (e.g. a FAB) on scroll

Do not collapse actions and scroll the toolbar offscreen at the same time — pick one behavior.

---

## Measurements

All toolbars default to 64dp height, center-aligned content, equal inter-item padding, and minimum 16dp outside padding.

### Docked toolbar

![Default internal padding of a docked toolbar.](https://lh3.googleusercontent.com/Eovie9hEPA5n7suVT8sw4C5TaWOwLmXIl0J3WBMBVOcBFDGyGqhwTTePHEyqXbPNsWb4kH1PH0QZ0llhRfnV9iozSM-bZFjevV4HNZio2qCD=s0)

1. Default margins and padding
2. Margins and padding with leading, middle, and trailing content

![2 docked toolbars with different margins and alignment.](https://lh3.googleusercontent.com/Vsgw_yvIWA9pxAKEs4qmxtfhofUIoJnSXq6bO3_6v_OmMq4BZhQnS5FaT70GZEHJOzMm7DPuYd-ZUVsVtbJ1WuLqVCQ9khS6P6J8EMzlyOo=s0)

1. Left and right alignment
2. Center-aligned, 8dp padding between items

| Attribute                 | Token                                             | Value                    |
| ------------------------- | ------------------------------------------------- | ------------------------ |
| Container height          | `md.comp.toolbar.docked.container.height`         | 64dp                     |
| Leading padding           | `md.comp.toolbar.docked.container.leading-space`  | 16dp                     |
| Trailing padding          | `md.comp.toolbar.docked.container.trailing-space` | 16dp                     |
| Max space between actions | `md.comp.toolbar.docked.container.max-spacing`    | 32dp                     |
| Min space between actions | `md.comp.toolbar.docked.container.min-spacing`    | 4dp                      |
| Container shape           | `md.comp.toolbar.docked.container.shape`          | md.sys.shape.corner.none |

### Floating toolbar

![Diagram noting margin around edge of floating toolbar.](https://lh3.googleusercontent.com/BmOWzjQZ3a-oyRtJT94Nez52vT0DHXNgDWueCiIVnteA35K89UKvwAP_gs8fdqn450QEN9oEnw_yWK0oIKbqEZ9xhqope0Jt4C0lM83X4pc3ng=s0)

![Diagram noting layout measurements.](https://lh3.googleusercontent.com/OStcy-GlT-NRB63inDLnhvNm3czBqigQcIhixAV3N7fMvikSrBtiJtNJc_r0m8yP6nyxDkzhLQnsxBdp_FG6qDARNyB0S52U-CDXNkkG89E=s0)

![Diagram noting layout margins.](https://lh3.googleusercontent.com/l1zIH0wA5J3kRRwuwvmIpG4gmlFXXYK88L4lF0q5vQ0_ThjPiPwpPJk0mOT8zbMyO20rMum-TPkHfY651sPtrWzVPiiVl7MXQxtWq3IthryT=s0)

| Attribute                            | Token                                                          | Value                    |
| ------------------------------------ | -------------------------------------------------------------- | ------------------------ |
| Container height                     | `md.comp.toolbar.floating.container.height`                    | 64dp                     |
| Container height (horizontal)        | `md.comp.toolbar.floating.horizontal.container.height`         | 64dp                     |
| Container width (vertical)           | `md.comp.toolbar.floating.vertical.container.width`            | 64dp                     |
| Leading space                        | `md.comp.toolbar.floating.container.leading-space`             | 8dp                      |
| Trailing space                       | `md.comp.toolbar.floating.container.trailing-space`            | 8dp                      |
| Margin from screen edge              | `md.comp.toolbar.floating.container.external-padding`          | 16dp                     |
| Margin from screen edge (horizontal) | `md.comp.toolbar.floating.horizontal.container.external-space` | 16dp                     |
| Margin from screen edge (vertical)   | `md.comp.toolbar.floating.vertical.container.external-space`   | 24dp                     |
| Space between actions                | `md.comp.toolbar.floating.container.between-space`             | 4dp                      |
| Container shape                      | `md.comp.toolbar.floating.container.shape`                     | md.sys.shape.corner.full |
| Container elevation                  | `md.comp.toolbar.floating.container.elevation`                 | md.sys.elevation.level3  |

### Floating toolbar — FAB

**Expanded (standard FAB)**

| Attribute           | Token                                              | Value                     |
| ------------------- | -------------------------------------------------- | ------------------------- |
| Container height    | `md.comp.toolbar.floating.fab.container.height`    | 56dp                      |
| Container width     | `md.comp.toolbar.floating.fab.container.width`     | 56dp                      |
| Icon size           | `md.comp.toolbar.floating.fab.icon.size`           | 24dp                      |
| Container shape     | `md.comp.toolbar.floating.fab.container.shape`     | md.sys.shape.corner.large |
| Container elevation | `md.comp.toolbar.floating.fab.container.elevation` | md.sys.elevation.level1   |

**Collapsed (medium FAB)**

| Attribute           | Token                                                     | Value                               |
| ------------------- | --------------------------------------------------------- | ----------------------------------- |
| Container height    | `md.comp.toolbar.floating.fab.medium.container.height`    | 80dp                                |
| Container width     | `md.comp.toolbar.floating.fab.medium.container.width`     | 80dp                                |
| Icon size           | `md.comp.toolbar.floating.fab.medium.icon.size`           | 28dp                                |
| Container shape     | `md.comp.toolbar.floating.fab.medium.container.shape`     | md.sys.shape.corner.large-increased |
| Container elevation | `md.comp.toolbar.floating.fab.medium.container.elevation` | md.sys.elevation.level2             |

---

## Color Tokens

### Standard color

![4 color roles in the standard color scheme of the floating toolbar in light and dark scheme.](https://lh3.googleusercontent.com/vnb-hvZkhHov6Q_xpnqsRpE-v1-ahJAuOOAS49Uw7K1JgYNot331UJ_viioRQnCmG5c_kqdBCgTXYkFkIfdYmd2lUUnIiqJes4VaQa_i30dvYg=s0)

1. Surface container
2. Filled button (Primary, On primary)
3. Toggle tonal button (Secondary container, On secondary container)
4. Standard button (Primary)

#### Enabled

| Element                   | Token                                                      | Value                               |
| ------------------------- | ---------------------------------------------------------- | ----------------------------------- |
| Container color           | `md.comp.toolbar.standard.container.color`                 | md.sys.color.surface-container      |
| Button container color    | `md.comp.toolbar.standard.button.container.color`          | md.sys.color.surface-container      |
| Selected button container | `md.comp.toolbar.standard.selected.button.container.color` | md.sys.color.secondary-container    |
| Icon color                | `md.comp.toolbar.standard.icon.color`                      | md.sys.color.on-surface-variant     |
| Selected icon color       | `md.comp.toolbar.standard.selected.icon.color`             | md.sys.color.on-secondary-container |
| Label color               | `md.comp.toolbar.standard.label-text.color`                | md.sys.color.on-surface-variant     |
| Selected label color      | `md.comp.toolbar.standard.selected.label-text.color`       | md.sys.color.on-secondary-container |
| Container shape           | `md.comp.toolbar.standard.container.shape`                 | md.sys.shape.corner.full            |

#### Disabled

| Element       | Token                                                  | Value                   |
| ------------- | ------------------------------------------------------ | ----------------------- |
| Icon color    | `md.comp.toolbar.standard.disabled.icon.color`         | md.sys.color.on-surface |
| Icon opacity  | `md.comp.toolbar.standard.disabled.icon.opacity`       | 0.38                    |
| Label color   | `md.comp.toolbar.standard.disabled.label-text.color`   | md.sys.color.on-surface |
| Label opacity | `md.comp.toolbar.standard.disabled.label-text.opacity` | 0.38                    |

#### Hovered

| Element                    | Token                                                         | Value                                  |
| -------------------------- | ------------------------------------------------------------- | -------------------------------------- |
| State layer color          | `md.comp.toolbar.standard.hovered.state-layer.color`          | md.sys.color.on-surface-variant        |
| Selected state layer color | `md.comp.toolbar.standard.selected.hovered.state-layer.color` | md.sys.color.on-secondary-container    |
| State layer opacity        | `md.comp.toolbar.standard.hovered.state-layer.opacity`        | md.sys.state.hover.state-layer-opacity |
| Icon color                 | `md.comp.toolbar.standard.hovered.icon.color`                 | md.sys.color.on-surface-variant        |
| Selected icon color        | `md.comp.toolbar.standard.selected.hovered.icon.color`        | md.sys.color.on-secondary-container    |
| Label color                | `md.comp.toolbar.standard.hovered.label-text.color`           | md.sys.color.on-surface-variant        |
| Selected label color       | `md.comp.toolbar.standard.selected.hovered.label-text.color`  | md.sys.color.on-secondary-container    |

#### Focused

| Element                    | Token                                                         | Value                                  |
| -------------------------- | ------------------------------------------------------------- | -------------------------------------- |
| State layer color          | `md.comp.toolbar.standard.focused.state-layer.color`          | md.sys.color.on-surface-variant        |
| Selected state layer color | `md.comp.toolbar.standard.selected.focused.state-layer.color` | md.sys.color.on-secondary-container    |
| State layer opacity        | `md.comp.toolbar.standard.focused.state-layer.opacity`        | md.sys.state.focus.state-layer-opacity |
| Icon color                 | `md.comp.toolbar.standard.focused.icon.color`                 | md.sys.color.on-surface-variant        |
| Selected icon color        | `md.comp.toolbar.standard.selected.focused.icon.color`        | md.sys.color.on-secondary-container    |
| Label color                | `md.comp.toolbar.standard.focused.label-text.color`           | md.sys.color.on-surface-variant        |
| Selected label color       | `md.comp.toolbar.standard.selected.focused.label-text.color`  | md.sys.color.on-secondary-container    |

#### Pressed

| Element                    | Token                                                         | Value                                    |
| -------------------------- | ------------------------------------------------------------- | ---------------------------------------- |
| State layer color          | `md.comp.toolbar.standard.pressed.state-layer.color`          | md.sys.color.on-surface-variant          |
| Selected state layer color | `md.comp.toolbar.standard.selected.pressed.state-layer.color` | md.sys.color.on-secondary-container      |
| State layer opacity        | `md.comp.toolbar.standard.pressed.state-layer.opacity`        | md.sys.state.pressed.state-layer-opacity |
| Icon color                 | `md.comp.toolbar.standard.pressed.icon.color`                 | md.sys.color.on-surface-variant          |
| Selected icon color        | `md.comp.toolbar.standard.selected.pressed.icon.color`        | md.sys.color.on-secondary-container      |
| Label color                | `md.comp.toolbar.standard.pressed.label-text.color`           | md.sys.color.on-surface-variant          |
| Selected label color       | `md.comp.toolbar.standard.selected.pressed.label-text.color`  | md.sys.color.on-secondary-container      |

### Vibrant color

![4 color roles in the vibrant color scheme of the floating toolbar in light and dark scheme.](https://lh3.googleusercontent.com/MSHjbfagavP64_aZ8he_iw3phiUh6IkZDUjRhPkoMvHcSGsAh-0j3khoUTMDeaPdCVcRwhCp9XyMVOQuvKVvIDxcYcqgTe1tZ5YBzAxchYzx=s0)

1. Primary container
2. Filled button (Primary, On primary)
3. Toggle tonal button (Surface container, On surface)
4. Standard button (On primary container)

#### Enabled

| Element                   | Token                                                     | Value                             |
| ------------------------- | --------------------------------------------------------- | --------------------------------- |
| Container color           | `md.comp.toolbar.vibrant.container.color`                 | md.sys.color.primary-container    |
| Button container color    | `md.comp.toolbar.vibrant.button.container.color`          | md.sys.color.primary-container    |
| Selected button container | `md.comp.toolbar.vibrant.selected.button.container.color` | md.sys.color.surface-container    |
| Icon color                | `md.comp.toolbar.vibrant.icon.color`                      | md.sys.color.on-primary-container |
| Selected icon color       | `md.comp.toolbar.vibrant.selected.icon.color`             | md.sys.color.on-surface           |
| Label color               | `md.comp.toolbar.vibrant.label-text.color`                | md.sys.color.on-primary-container |
| Selected label color      | `md.comp.toolbar.vibrant.selected.label-text.color`       | md.sys.color.on-surface           |
| Container shape           | `md.comp.toolbar.vibrant.container.shape`                 | md.sys.shape.corner.full          |

#### Disabled

| Element       | Token                                                 | Value                   |
| ------------- | ----------------------------------------------------- | ----------------------- |
| Icon color    | `md.comp.toolbar.vibrant.disabled.icon.color`         | md.sys.color.on-surface |
| Icon opacity  | `md.comp.toolbar.vibrant.disabled.icon.opacity`       | 0.38                    |
| Label color   | `md.comp.toolbar.vibrant.disabled.label-text.color`   | md.sys.color.on-surface |
| Label opacity | `md.comp.toolbar.vibrant.disabled.label-text.opacity` | 0.38                    |

#### Hovered

| Element                    | Token                                                        | Value                                  |
| -------------------------- | ------------------------------------------------------------ | -------------------------------------- |
| State layer color          | `md.comp.toolbar.vibrant.hovered.state-layer.color`          | md.sys.color.on-primary-container      |
| Selected state layer color | `md.comp.toolbar.vibrant.selected.hovered.state-layer.color` | md.sys.color.on-surface                |
| State layer opacity        | `md.comp.toolbar.vibrant.hovered.state-layer.opacity`        | md.sys.state.hover.state-layer-opacity |
| Icon color                 | `md.comp.toolbar.vibrant.hovered.icon.color`                 | md.sys.color.on-primary-container      |
| Selected icon color        | `md.comp.toolbar.vibrant.selected.hovered.icon.color`        | md.sys.color.on-surface                |
| Label color                | `md.comp.toolbar.vibrant.hovered.label-text.color`           | md.sys.color.on-primary-container      |
| Selected label color       | `md.comp.toolbar.vibrant.selected.hovered.label-text.color`  | md.sys.color.on-surface                |

#### Focused

| Element                    | Token                                                        | Value                                  |
| -------------------------- | ------------------------------------------------------------ | -------------------------------------- |
| State layer color          | `md.comp.toolbar.vibrant.focused.state-layer.color`          | md.sys.color.on-primary-container      |
| Selected state layer color | `md.comp.toolbar.vibrant.selected.focused.state-layer.color` | md.sys.color.on-surface                |
| State layer opacity        | `md.comp.toolbar.vibrant.focused.state-layer.opacity`        | md.sys.state.focus.state-layer-opacity |
| Icon color                 | `md.comp.toolbar.vibrant.focused.icon.color`                 | md.sys.color.on-primary-container      |
| Selected icon color        | `md.comp.toolbar.vibrant.selected.focused.icon.color`        | md.sys.color.on-surface                |
| Label color                | `md.comp.toolbar.vibrant.focused.label-text.color`           | md.sys.color.on-primary-container      |
| Selected label color       | `md.comp.toolbar.vibrant.selected.focused.label-text.color`  | md.sys.color.on-surface                |

#### Pressed

| Element                    | Token                                                        | Value                                    |
| -------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| State layer color          | `md.comp.toolbar.vibrant.pressed.state-layer.color`          | md.sys.color.on-primary-container        |
| Selected state layer color | `md.comp.toolbar.vibrant.selected.pressed.state-layer.color` | md.sys.color.on-surface                  |
| State layer opacity        | `md.comp.toolbar.vibrant.pressed.state-layer.opacity`        | md.sys.state.pressed.state-layer-opacity |
| Icon color                 | `md.comp.toolbar.vibrant.pressed.icon.color`                 | md.sys.color.on-primary-container        |
| Selected icon color        | `md.comp.toolbar.vibrant.selected.pressed.icon.color`        | md.sys.color.on-surface                  |
| Label color                | `md.comp.toolbar.vibrant.pressed.label-text.color`           | md.sys.color.on-primary-container        |
| Selected label color       | `md.comp.toolbar.vibrant.selected.pressed.label-text.color`  | md.sys.color.on-surface                  |

### Docked toolbar color

| Element         | Token                                    | Value                          |
| --------------- | ---------------------------------------- | ------------------------------ |
| Container color | `md.comp.toolbar.docked.container.color` | md.sys.color.surface-container |

### Floating toolbar color (variant-specific)

| Element                                 | Token                                                              | Value                             |
| --------------------------------------- | ------------------------------------------------------------------ | --------------------------------- |
| Standard container color                | `md.comp.toolbar.floating.standard.container.color`                | md.sys.color.surface-container    |
| Vibrant container color                 | `md.comp.toolbar.floating.vibrant.container.color`                 | md.sys.color.primary-container    |
| Vibrant unselected button icon color    | `md.comp.toolbar.floating.vibrant.button.unselected.icon.color`    | md.sys.color.on-primary-container |
| Vibrant unselected button text color    | `md.comp.toolbar.floating.vibrant.button.unselected.text.color`    | md.sys.color.on-primary-container |
| Vibrant selected button icon color      | `md.comp.toolbar.floating.vibrant.button.selected.icon.color`      | md.sys.color.on-surface           |
| Vibrant selected button text color      | `md.comp.toolbar.floating.vibrant.button.selected.text.color`      | md.sys.color.on-surface           |
| Vibrant selected button container color | `md.comp.toolbar.floating.vibrant.button.selected.container.color` | md.sys.color.surface-container    |

---

## Adaptive Design

### Resizing — Docked

The docked toolbar always spans 100% of window width.

- **Compact windows**: elements should be evenly spaced
- **Medium+ windows**: adjust padding for a comfortable layout by centering all elements, or centering a key action while aligning others to the edges

![Docked toolbar with evenly spaced elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma2vff01-29.png?alt=media&token=4ac502e5-7602-445e-834d-286226583b65=s0)

Docked toolbar items evenly spaced in compact windows.

![Docked toolbar with centered elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma6y2uq6-30.png?alt=media&token=deab82d9-57fa-4c3f-a2da-b60dc77a01b4=s0)

In medium+ windows, center all elements for a spacious layout.

![Docked toolbar with central action and some elements pushed to the edge.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma6y2g0q-31.png?alt=media&token=06384f75-0a0a-43ce-9b0a-f8af3c53130e=s0)

Align controls to screen edges for tablets to highlight a primary center action.

On web and large screens, the docked toolbar can be rounded. Dividers can organize large numbers of items. Only shrink the height and use extra-small buttons when vertical space is limited.

![Docked toolbar with 15 actions for text editing on large screens, organized with dividers.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmbv5jv5l-33%20Old.png?alt=media&token=ac965689-4c43-4519-9ae8-bd2d100f65c4=s0)

### Resizing — Floating

The container should only be as wide as needed to hold its items before reaching the 16dp margin. Extra actions overflow into a trailing menu. As the window expands, more actions can be revealed. The width can also be capped to keep the toolbar compact.

![Floating toolbar in compact window with excess padding.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma1lkstz-32.png?alt=media&token=7c230191-dce6-498c-b7c6-e7a680fec810=s0)

**Don't:** Don't add extra space beyond necessary items.

![Floating toolbar in expanded window class.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma1lm7ro-33%20(1).png?alt=media&token=415f33b0-19f9-4b55-87e1-d94689e61122=s0>)

At larger sizes, the container can display more controls before hitting the 16dp margin.

Vertical toolbars are not recommended for compact windows — they occupy significant screen area and can feel overwhelming. Only use them when the screen is simple or the toolbar has few controls.

![Vertical toolbar in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xmqa2l-34.png?alt=media&token=b12e1381-1bc0-41e6-8898-1603c9aadc57=s0)

**Caution:** Vertical toolbars can cover important content in compact windows.

### Presentation

In larger windows, floating toolbars can be split across opposite screen edges to group related actions (e.g. undo/redo on one side, editing tools on the other). Use different stylistic treatments to distinguish hierarchy.

![2 toolbars, each with distinct stylistic treatment and actions.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amsqw6-29.png?alt=media&token=a2c29c55-b09f-40a1-9a0d-48d3316f5811=s0)

![Multiple toolbars in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xmw01r-36.png?alt=media&token=488e8d77-d650-48d5-abed-a727d821d65c=s0)

**Don't:** Avoid multiple toolbars in compact windows — there isn't enough room. Use one toolbar for all actions.

Trailing-edge actions can collapse into an overflow menu at smaller window sizes and reappear at larger sizes.

### Right-to-left languages

Mirror individual items (icons, text direction) for RTL. If the order of actions matters, flip the action order as well so trailing-edge items remain on the trailing edge.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xmygdb-37.png?alt=media&token=9f00e9fc-1b60-4dac-8974-353a25084a2b=s0" /><br/>LTR: Next button on the trailing (right) edge</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xmz6n4-38.png?alt=media&token=0be61ff8-5427-4330-9ddf-e59303f1c9b5=s0" /><br/>RTL: Next button remains on the trailing edge (now left)</td>
</tr></table>

---

## Accessibility

### Touch & Cursor

- **Touch**: tapping an icon button in the toolbar triggers a ripple for interaction feedback
- **Cursor**: hover state provides visual cues; clicking produces a ripple in both active and inactive states

### Keyboard Navigation

| Key            | Action                                |
| -------------- | ------------------------------------- |
| Tab or Arrows  | Navigate between interactive elements |
| Space or Enter | Activate the focused element          |

### Initial Focus

Focus lands on the first interactive element. Use **Tab** to navigate through all actions.

![Navigating the top app bar using arrow or tab on a keyboard.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0anu1gy-3.png?alt=media&token=6ce1a9cb-f8d9-4e2e-a0b5-5c3d56691c9a=s0)

![Activating actions in the top app bar using space or enter on a keyboard.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0anv4t7-4.png?alt=media&token=83f51ce3-ac26-4425-a6ff-a97026cb1e74=s0)

### Labeling

- On web, the toolbar container should have the **toolbar** role
- On mobile, it can be a generic container
- All actions inside should follow their respective component's accessibility guidelines

![A toolbar on web, with a "toolbar" role label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0anynmv-5.png?alt=media&token=f53e2da8-9f81-47fa-9786-b445bc596dc8=s0)

### Use Cases

People must be able to:

- Navigate and activate any toolbar action with assistive technology
- Select a destination from a menu
- Activate a back button
- Maintain access to toolbar controls when content is scrolled or collapsed

### Density

All elements need a minimum 48×48dp target area to be accessible. Maintain at least 16dp leading/trailing padding. Only reduce button sizes when vertical space is truly constrained.

---

## Bottom App Bar (Baseline)

The baseline bottom app bar is no longer recommended. Use the docked toolbar instead.

![Diagram of bottom app bar indicating the container.](https://lh3.googleusercontent.com/XW6h1Afu7o0EPJEU5KC5OEODx1r67sQMqU9pUmqzyOAPy1b_y8-pMDrw-GqoWeSbEXhBR7cA_qDpTDdG8qwlAYoSH0Vc9jh5lviGtvZ76pekyw=s0)

### Color

![Diagram of bottom app bar indicating its color mappings.](https://lh3.googleusercontent.com/RDMrnLfQpoptezvVbHosgCQV_qq-MEVY3hKWH4U1fo8wYZLg0Zv4Z1jqiQT1FxojqUYoCEZ8lekjZ3SYJe3-vuO50wNCzsNx7lBpp6iWgqN0rQ=s0)

1. Surface container

### Measurements

![Diagram showing layout values and paddings for bottom app bar.](https://lh3.googleusercontent.com/42HaRTtyV44uEgw2rZzgGwWNqlOy1g0mCiaUjMy7iuiG2lAJ4ACu5xe9PEJgOfE2PFIJ_8TjIRqrk75Wc2YmtrtcrYklJzE3nSV8HbBbW7Y=s0)

### Common Layouts

![Side by side view of bottom app bars in different configurations.](https://lh3.googleusercontent.com/JvPTixMCyejczwwssuEezKtZO-2y_RmCjTIrMEpHFu5HOAApXlYpEt-Pq3GV4Bd1LJQlgRd4O3PPpK7YpOkaQMUvEo3Sg2E1I8iLh56BNKvC=s0)

1. Icon buttons and FAB
2. Icon buttons and no FAB

---

## M2 → M3 Differences

- **Color**: new color mappings compatible with dynamic color
- **Elevation**: no shadow in M3
- **Layout**: taller container height; FAB is now contained within the app bar

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0e7liab-2.png?alt=media&token=16c3ad53-7e83-4079-85ad-9b096bbb56fc=s0" /><br/>M2: Higher elevation (8dp), FAB not contained</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0e7mh6v-3.png?alt=media&token=9dfb6612-f40c-4d4c-a773-463109db7c5f=s0" /><br/>M3: New colors, taller container, no shadow, FAB contained</td>
</tr></table>

### M3 Expressive update

The bottom app bar is replaced by two new variants:

- **Docked toolbar** — shorter height, more layout and element flexibility, standard or vibrant color
- **Floating toolbar** — horizontal or vertical layout, standard or vibrant color, can hold many element types, can pair with a FAB

![2 examples of toolbar variants.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aiswog-02.png?alt=media&token=e5523e45-647f-4168-b257-c773be63adf6=s0)

1. Floating, vibrant color scheme paired with FAB
2. Docked with embedded primary action instead of FAB

## Availability & Resources

| Type           | Resource                                                                                                                                                                                | Status      |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Design         | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460)                                                                                                          | Available   |
| Implementation | [Flutter](https://api.flutter.dev/flutter/material/BottomAppBar-class.html)                                                                                                             | Available   |
|                | [Jetpack Compose](https://developer.android.com/develop/ui/compose/components/app-bars#bottom)                                                                                          | Available   |
|                | [Jetpack Compose: Expressive](<https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#FloatingToolbarState(kotlin.Float,kotlin.Float,kotlin.Float)>) | Available   |
|                | [MDC-Android](https://github.com/material-components/material-components-android/blob/master/docs/components/BottomAppBar.md)                                                           | Available   |
|                | [MDC-Android: Expressive](https://github.com/material-components/material-components-android/blob/master/docs/components/BottomAppBar.md)                                               | Available   |
|                | Web                                                                                                                                                                                     | Unavailable |
|                | Web: Expressive                                                                                                                                                                         | Unavailable |
