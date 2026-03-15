# Navigation Bar — M3 Component Reference

> Navigation bars let people switch between UI views on smaller devices.

Sources: [Overview](https://m3.material.io/components/navigation-bar/overview) · [Specs](https://m3.material.io/components/navigation-bar/specs) · [Guidelines](https://m3.material.io/components/navigation-bar/guidelines) · [Accessibility](https://m3.material.io/components/navigation-bar/accessibility)

---

## Variants

![Flexible navigation bar](https://lh3.googleusercontent.com/UvjUYsyF9gAgVOmfiC9h3zFaS-jU0wYws-HjqFyeiABhm3ubP8ZtHn__4wPEPmw3eR3D4C4O6sUeHVmdJ_IX9zTrzi1GmuiTUcQlauA2Fs-B=s0)

| Variant                     | M3        | M3 Expressive           |
| --------------------------- | --------- | ----------------------- |
| **Flexible** navigation bar | —         | Available (recommended) |
| Baseline navigation bar     | Available | Not recommended         |

The flexible variant is shorter and supports horizontal navigation items in medium windows. The baseline variant is no longer recommended.

![Baseline navigation bar (not recommended)](https://lh3.googleusercontent.com/PmEPtOw84s8SQu9KJJ0EX-gTgEL5PDGneaQfz9OVdFSXWjLd7P41B6qpIiWnAOuSfGl7JnCQOqa3Lfx8hZfXRG7HzJJNam-HCDFV1lfKvLlw=s0)

### Configurations

![Vertical and horizontal navigation items](https://lh3.googleusercontent.com/p7YCl5pH99g_eM4-BCFHmEgxIdJxmb5UuE-CUwR8M9OjjPkNJpYAwQPZTAxamQBoiRr25F23T4mxDVNRUG3kESL--vZihbUkQWN04W9DAFiH=s0)

| Configuration            | Window size | M3        | M3 Expressive | Layout                                                                          |
| ------------------------ | ----------- | --------- | ------------- | ------------------------------------------------------------------------------- |
| Vertical items (default) | Compact     | Available | Available     | Text below icon, items fill container width equally                             |
| Horizontal items         | Medium      | —         | Available     | Icon and text side-by-side inside indicator, fixed width, centered with margins |

---

## Anatomy

![Seven elements of the navigation bar](https://lh3.googleusercontent.com/NkOIeqvJB7WxPg28DI-4uEHBrBfN38qDD2CWuX-NM2tTrxYwRknjdhOMzMCD1D9d65WN-Lzfo1Zg_B3G8Zk7pjT7Os-D2EfYGXQPDxawqpA=s0)

1. **Container** — full-width, positioned at bottom of window, color fill for separation
2. **Icon** — symbolizes the destination content (filled when active, outlined when inactive)
3. **Label text** — short (1-2 words), always visible, describes destination
4. **Active indicator** — pill shape showing the currently active destination
5. **Small badge** (optional) — indicates an update exists
6. **Large badge** (optional) — shows count of updates
7. **Large badge label** — text inside the large badge

![6 elements of the nav bar from guidelines](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3t918of-10.png?alt=media&token=653b8745-255a-4063-969b-7b8915debdbd=s0)

---

## Usage

![Navigation bars adapt to different window sizes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqgvk7-01.png?alt=media&token=48551963-9645-437c-acea-853e04e8cdaf=s0)

![Navigation bar for compact and medium window sizes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fodjau-01.png?alt=media&token=2a83f14e-464f-4f96-9c01-eb770d98010e=s0)

- **3-5 destinations** of equal importance
- **Compact and medium** window sizes only
- Destinations should be **consistent** across app screens — they don't change
- One destination is **always active**
- Each destination is represented by an icon and label text

![Nav bar for a music app with 4 destinations](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalnqdza-02.png?alt=media&token=a7e4f1a8-0547-42b2-81d1-c4346b1915db=s0)

![Nav bar for a music app in a medium window](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqhln7-03.png?alt=media&token=ec2bca60-87ec-4f27-a235-d872f5e6792d=s0)

Use **vertical items** in compact windows (mobile) and **horizontal items** in medium windows (tablets).

![Vertical items in compact, horizontal items in medium](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqhs7x-04.png?alt=media&token=d17a01b3-1f02-4654-99d8-9a0de7507ff9=s0)

### When NOT to use

| Scenario                             | Use instead                            |
| ------------------------------------ | -------------------------------------- |
| Fewer than 3 destinations            | Tabs                                   |
| More than 5 destinations             | Tabs or modal expanded navigation rail |
| Desktop / expanded window size       | Navigation rail                        |
| Single task (e.g. viewing one email) | Don't use navigation bar               |

![Don't: More than 5 items in a nav bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqi614-05-don't.png?alt=media&token=ba0b0a11-eec7-41a4-a49f-7209526b9819=s0)

![Don't: Remove labels from navigation items](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqimzs-06-dont.png?alt=media&token=cab6328f-c6d8-4de6-9261-050062dd3288=s0)

![Don't: Fewer than 3 destinations — use tabs instead](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqir51-07-dont.png?alt=media&token=91efa23a-c76b-486b-a510-b1b862cda076=s0)

![Don't: Scroll or modify item positions — they are fixed](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fp4ti0-09.png?alt=media&token=375b3742-081d-484b-8066-f07b4a9af991=s0)

### Navigation bar vs tabs

Use navigation for **distinct pages** and tabs for **related content within a page**. They can coexist — e.g. nav bar for top-level pages, tabs within a page for sub-sections.

![Nav bar for pages, tabs for content within a page](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fp4omq-08.png?alt=media&token=59669575-9a0c-4bf1-b073-d85c2f53f459=s0)

---

## Sub-elements

### Container

- Always at the bottom of the window, spanning 100% width
- Navigation items centered within
- Color fill separates from content

![Nav bar container with color fill in a medium window](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3t91cku-11.png?alt=media&token=8b8afb44-91c4-452a-8f17-d8a1186e125c=s0)

### Navigation items

Items hold all elements for each destination: icon, label text, and active indicator. Vertical items have text below the icon; horizontal items place icon and text side-by-side inside the indicator. Horizontal items are centered in the nav bar with outer margins.

![Nav bar divided into equal-width segments with padding](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3t91mur-12.png?alt=media&token=c2b0adef-8f59-4130-9ec1-f9cf4eac9507=s0)

### Icons

- **Active**: filled icon (or semibold weight if no filled variant exists)
- **Inactive**: outlined icon
- Minimum **3:1 contrast ratio** with container
- Don't use multiple or low-contrast colors

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fp9y48-13.png?alt=media&token=0fa12a4b-312c-4d17-b9e5-e0c2e9150e41=s0" /><br/><b>Do:</b> Filled icon when active</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fpa2te-14.png?alt=media&token=39201138-a399-487f-a860-0b0e84c6c24f=s0" /><br/><b>Caution:</b> Semibold weight if no filled variant</td>
</tr></table>

![Don't: Multiple or low-contrast icon colors](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqnpkt-15-dont.png?alt=media&token=6443ffb5-c5a9-4602-8782-ff4fc4da1b08=s0)

### Active indicator

- Shows which page is currently displayed
- Pill shape (`md.sys.shape.corner.full`)
- Only one active indicator visible at a time
- Expands from center of icon on selection

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqo0n5-16-do.png?alt=media&token=7ffc8212-80fc-4cea-a90a-8ee8b92ece0f=s0" /><br/><b>Do:</b> Active indicator on one destination only</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqo7ag-17-dont.png?alt=media&token=00c41373-8bd6-4183-9508-a1d68b837502=s0" /><br/><b>Don't:</b> Multiple active indicators</td>
</tr></table>

### Label text

- 1-2 words, short and clear
- Must always be visible — never hidden
- Don't wrap, truncate, or shrink labels

![Brief, clear destination labels](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fpamvs-18.png?alt=media&token=667c0164-7b71-401d-ba92-953714bca290=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqoweq-19-do.png?alt=media&token=8e54006a-8f5c-4eee-96a0-aa955c7fb01e=s0" /><br/><b>Do:</b> Brief text labels</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqp27c-20-dont.png?alt=media&token=f57db674-25f6-4a8d-b9e3-132ad85155fc=s0" /><br/><b>Don't:</b> Wrap or truncate labels</td>
</tr></table>

![Don't: Shrink longer text to fit on one line](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqpu1t-21-dont.png?alt=media&token=4a585cd5-7a7f-4699-a7dd-54571b00f343=s0)

### Badges (optional)

- Positioned in upper right corner of the icon
- **Small badge**: indicates an update exists (no text)
- **Large badge**: shows count of updates
- Badges overlap the icon in both vertical and horizontal items

![Small badge and large badge with count](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqqg5m-22.png?alt=media&token=728c13e1-b6bc-4a67-9ec3-e182a4c0d398=s0)

![Badges in horizontal navigation items](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqqlk1-23.png?alt=media&token=97527e9f-b215-4af6-b927-729382d3227d=s0)

For badge color roles, see [badge specs](https://m3.material.io/m3/pages/badges/specs).

---

## Placement

- Always at the **bottom** of the window
- FAB should be **right-aligned above** the navigation bar — never overlapping it
- Nav bars can be **temporarily** covered by dialogs, bottom sheets, keyboards, etc.
- They should **never be permanently obstructed**

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqqsyh-24-do.png?alt=media&token=154bc6fc-44ad-46fc-b059-f6be359445e4=s0" /><br/><b>Do:</b> FAB right-aligned above nav bar</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqqy0m-25-dont.png?alt=media&token=5c713542-e6bb-4362-abbb-ca8561433eff=s0" /><br/><b>Don't:</b> FAB covering nav bar</td>
</tr></table>

Temporary overlays (search keyboard, bottom sheets) may cover the nav bar during a flow, but the bar should reappear when the flow completes.

---

## Behavior

### Navigation

- Selecting a non-active item navigates using a **top-level transition** pattern
- Two state strategies:
  1. **Preserve state**: returns to scroll position, tab, search status
  2. **Reset state**: resets to default view
- Choose the strategy that suits the product — apps requiring frequent switching should preserve state
- Re-selecting the active destination **scrolls to top**
- **Don't swipe** between destinations — swipe is reserved for related items (carousel, archive)

### Scrolling

- Nav bar can **hide on scroll down** and **reveal on scroll up**
- **Don't hide** when a screen reader is active

### Selection animation

- Icon becomes **filled** and active indicator **expands from center**
- Animation should only apply on **one axis** (flat, shared plane)
- Destination screens use a **top-level transition** pattern

---

## Measurements

![Navigation bar padding and size measurements](https://lh3.googleusercontent.com/zjuYI8XOBcjHmnNU2V9qHk9gbz3xJW9E2cEVE0Ov9Bh2fz8VI7RoISP5ykh9u5mqCXhF1nYKXT696Hfw-YIUMzX37jseGZdsA2bN_-YfErA=s0)

### Container

| Attribute | Value                      |
| --------- | -------------------------- |
| Height    | 64dp                       |
| Width     | 100% of window             |
| Shape     | `md.sys.shape.corner.none` |
| Elevation | `md.sys.elevation.level2`  |

### Navigation items

| Attribute                    | Value                                     |
| ---------------------------- | ----------------------------------------- |
| Icon size                    | 24dp                                      |
| Active indicator shape       | `md.sys.shape.corner.full`                |
| Space between icon and label | 4dp                                       |
| Space between items          | 0 (vertical items fill container equally) |

### Item width behavior

![Navigation bar item widths](https://lh3.googleusercontent.com/VMRrzRH_T07zMqRPwp1sLZPmkAVJVwQDqqrhuD-synkhADa-mjbbjtbh_tWZ4QZ9ael3lvNq52dhMRNCMOTZRh5aISTWk7bvSEt-vud2RGvW=s0)

1. Vertical navigation item
2. Margin from window edge
3. Horizontal navigation item

- **Vertical items**: dynamically divide container width equally
- **Horizontal items**: fixed width, centered with margins from window edge

---

## Color Tokens

![Six color roles of the navigation bar](https://lh3.googleusercontent.com/ec6ZkQGVtf5t0AOua9lhgucAZ31inD_mF4vm24sW2MeH8X2dK3xV1rpfoNuX6hlO5rU7wJVfCH0KMCt8Xqzl0qDIR668oCFEKb97YswmeuuC=s0)

1. Surface container — 2. On-secondary container — 3. Secondary — 4. Secondary container — 5. On-surface variant — 6. On-surface variant

### Enabled

| Element                | Token                                            | Value                                 |
| ---------------------- | ------------------------------------------------ | ------------------------------------- |
| Container color        | `md.comp.nav-bar.container.color`                | `md.sys.color.surface-container`      |
| Container elevation    | `md.comp.nav-bar.container.elevation`            | `md.sys.elevation.level2`             |
| Container shadow       | `md.comp.nav-bar.container.shadow-color`         | `md.sys.color.shadow`                 |
| Active indicator color | `md.comp.nav-bar.item.active.indicator.color`    | `md.sys.color.secondary-container`    |
| Active label color     | `md.comp.nav-bar.item.active.label-text.color`   | `md.sys.color.secondary`              |
| Inactive label color   | `md.comp.nav-bar.item.inactive.label-text.color` | `md.sys.color.on-surface-variant`     |
| Active icon color      | `md.comp.nav-bar.item.active.icon.color`         | `md.sys.color.on-secondary-container` |
| Inactive icon color    | `md.comp.nav-bar.item.inactive.icon.color`       | `md.sys.color.on-surface-variant`     |

### Hovered

| Element                    | Token                                                     | Value                                    |
| -------------------------- | --------------------------------------------------------- | ---------------------------------------- |
| Active state layer color   | `md.comp.nav-bar.item.active.hovered.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| Active state layer opacity | `md.comp.nav-bar.item.active.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Inactive state layer color | `md.comp.nav-bar.item.inactive.hovered.state-layer.color` | `md.sys.color.on-secondary-container`    |

### Focused

| Element                    | Token                                                     | Value                                    |
| -------------------------- | --------------------------------------------------------- | ---------------------------------------- |
| Active state layer color   | `md.comp.nav-bar.item.active.focused.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| Active state layer opacity | `md.comp.nav-bar.item.active.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Inactive state layer color | `md.comp.nav-bar.item.inactive.focused.state-layer.color` | `md.sys.color.on-secondary-container`    |

### Pressed

| Element                    | Token                                                     | Value                                      |
| -------------------------- | --------------------------------------------------------- | ------------------------------------------ |
| Active state layer color   | `md.comp.nav-bar.item.active.pressed.state-layer.color`   | `md.sys.color.on-secondary-container`      |
| Active state layer opacity | `md.comp.nav-bar.item.active.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Inactive state layer color | `md.comp.nav-bar.item.inactive.pressed.state-layer.color` | `md.sys.color.on-secondary-container`      |

---

## Interaction States

![Four states of navigation bar items](https://lh3.googleusercontent.com/FTJk0MWbkT2YuqVJl3k8F57gmzTtSUKbQCovcet18WLLqbCMFFYds_DS65Sx8fzuFpEK6G_W5lmDc55s5ZUEpvBZIGM31aOI1psEFpn7GWnk=s0)

| #   | State       | Visual changes                            |
| --- | ----------- | ----------------------------------------- |
| 1   | **Enabled** | Default appearance                        |
| 2   | **Hovered** | 8% state layer appears                    |
| 3   | **Focused** | 10% state layer; focus indicator          |
| 4   | **Pressed** | 10% state layer; ripple through indicator |

---

## Adaptive Design

| Window size                | Navigation component                                     |
| -------------------------- | -------------------------------------------------------- |
| **Compact**                | Navigation bar (vertical items) or modal navigation rail |
| **Medium**                 | Navigation bar (horizontal items) or navigation rail     |
| **Expanded / Extra-large** | Navigation rail                                          |

The navigation bar container spans 100% of the window width. It is intended for mobile and tablet — not desktop.

![Navigation bar spanning full width of a compact window](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalo8a44-28.png?alt=media&token=96f0c6e3-5ab8-49ef-aa2c-ef38b892c091=s0)

![Don't: Navigation bars on desktop — use navigation rail or tabs instead](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqsfoq-29.png?alt=media&token=ff8220a9-3d2a-4ce3-a888-5899124803ae=s0)

In medium windows, horizontal nav items remain centered with the same padding at each window size.

![Horizontal items maintain consistent spacing across window sizes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fpt5k2-30.png?alt=media&token=e135a58a-8738-4d8d-bdad-fb1c25a7962f=s0)

---

## Accessibility

### Touch & Cursor

- **Touch**: tap shows active indicator, ripple passes through, icon fills and changes color
- **Cursor**: hover shows reduced active indicator as a visual cue; click triggers ripple, icon fills and darkens

### Text scaling

- Nav bar should **grow vertically** to accommodate larger labels while retaining default padding
- Full label must be visible at up to **2x text sizing** — wrapping is acceptable at scaled sizes
- Beyond 2x, text can truncate

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2kua3ge-03.png?alt=media&token=f108d48f-851d-45d1-ba80-1e83568032f3=s0" /><br/>Text scaled to 1.5x</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2kuaeol-04.png?alt=media&token=10e14f80-49cb-45ec-8388-cb1f010199ea=s0" /><br/>Text scaled to 2x</td>
</tr></table>

### Focus order

Initial focus lands on the first navigation item (the first interactive element).

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr7kb3-03.png?alt=media&token=84bac263-efdf-4665-a287-0e747b635270=s0" /><br/>Focus lands on first navigation item</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr7nd7-04.png?alt=media&token=f9921ae7-fcf3-45e4-9bcd-30cd1952f450=s0" /><br/>Item selected with Space/Enter</td>
</tr></table>

### Visual indicators

- **Selected**: filled icon, bold label, active indicator
- **Unselected**: outlined icon, medium label
- If an icon has no filled style, use a thicker/heavier version

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr7qqu-05.png?alt=media&token=e630d9b4-cb7e-4880-8604-a9407ac24978=s0" /><br/><b>Do:</b> Filled icon for selected destination</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr7ugl-06.png?alt=media&token=b90be5ba-4212-42ac-95c4-7b1d6b44b4b1=s0" /><br/><b>Don't:</b> Outlined icon for selected destination</td>
</tr></table>

![When selected: icon fills, darkens, and is backed by active indicator](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr7yfn-07.png?alt=media&token=03133ebd-5e3b-41e0-92be-0e1d4c05cf2c=s0)

### Keyboard Navigation

| Key           | Action                             |
| ------------- | ---------------------------------- |
| Tab           | Move between navigation items      |
| Space / Enter | Select the focused navigation item |

### Labeling

- Accessibility label matches the destination name
- When ambiguous (e.g. "Library"), provide a more descriptive label (e.g. "Music library")
- Note: On MDC-Android, a more descriptive accessibility label is not available and the role is not announced

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr861i-08.png?alt=media&token=2a25c26a-fbf9-4ee1-8c0b-5395b7db904d=s0" /><br/>Label from destination name</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr8a8y-09.png?alt=media&token=7691ca2e-ae07-466a-9070-37fa398803aa=s0" /><br/>Descriptive label for ambiguous text</td>
</tr></table>

---

## Baseline Navigation Bar (Not Recommended)

The baseline navigation bar is no longer recommended. Use the flexible navigation bar instead. These specs are preserved for reference.

![7 elements of baseline navigation bar](https://lh3.googleusercontent.com/DBrM1eLC6HN2CNBg9Gr9UjPRuBgV0C7N3JLMzR2Y3nemUs8z0I71LTJM36azNtt45cWQiwISFwjAGc2G8coCUD9vfnIi-30wBlBw7OB1rSk=s0)

### Baseline color roles

![6 color roles of baseline navigation bar](https://lh3.googleusercontent.com/iFtbyGfchUzulQmxsrcS-I7WwK9b3AywZsdXqs8Z1jIytViyh4uD1UC9qpNKi44ejAswfg-jDNjzVCkq8diuRU4130swhkqbtGDL508M2zU=s0)

1. Surface — 2. On secondary container — 3. On surface — 4. Secondary container — 5. On surface variant — 6. On surface variant

### Baseline states

![4 states of baseline navigation bar](https://lh3.googleusercontent.com/Tz8X4rigXztIPIhpYB584wZpWuKYAEz4C4mIBNVQksaN4sRvl_eXy8dk9cwcWhM3iOfOJVLvlckzcDdPOScuGYJVhjvzuSAMRwpvZk2mdNOpTw=s0)

### Baseline measurements

![Baseline navigation bar padding and size measurements](https://lh3.googleusercontent.com/yZAR82Wh75nazTTTOrRenBXPtuOb1BG45198tsOGQMOTUk0QS_Ety_wa_9wsQRVXkBVii9TYrwCmSAiwxxlvHY95EetWd78rd4DPR-qTy3X-4Q=s0)

![Baseline navigation bar target size and margins](https://lh3.googleusercontent.com/Cx_HLEfaqKx72AHNtDdP7raUEXmHCDKOWC40CCuYLkfYn6d93KRaJHBWdxVHOkoU22j4UAJJExrl3uQYnpFQ_wu895nHHKn8qNUXZVMtCwqT=s0)

### Baseline configurations

![3 configurations: 3, 4, and 5 destinations](https://lh3.googleusercontent.com/ALYNjmr0KKRFb33P4hKrUxeXha7V6L7eyz_izrbW4nGMgFfZtYjbLa7cHF3mxpWOr4TiAswFklndquusmv_dRJsruNjzu4ZSh7WgBrOCWDQ=s0)

1. 3 destinations — 2. 4 destinations — 3. 5 destinations

---

## M2 → M3 Differences

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ddmjvm-03.png?alt=media&token=9e50be86-5460-46f5-90a7-0805ec3c9127=s0" /><br/>M2: Drop shadow, filled/regular icons for state</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmae7pvz8-04.png?alt=media&token=98531a7d-df77-4d8e-a56b-7164db497bd9=s0" /><br/>M3: No shadow, active indicator, taller</td>
</tr></table>

| Aspect        | M2                             | M3                                                            |
| ------------- | ------------------------------ | ------------------------------------------------------------- |
| Name          | Bottom navigation              | Navigation bar                                                |
| Elevation     | Drop shadow                    | No shadow (surface tint via elevation level2)                 |
| Height        | Shorter                        | Taller container (64dp flexible)                              |
| Active state  | Filled icon + different weight | Filled icon + pill-shaped active indicator                    |
| Color         | Basic mappings                 | Dynamic color, secondary-container system                     |
| M3 Expressive | —                              | Active label uses `secondary` instead of `on-surface-variant` |

### M3 Expressive update (May 2025)

![Flexible navigation bar — shorter, supports horizontal items](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmae7qe43-02.png?alt=media&token=52cdfa5b-8a10-45d5-af7c-0a92cc899672=s0)

- Baseline navigation bar no longer recommended
- Added **flexible** navigation bar — shorter height
- Can be used in medium windows with **horizontal navigation items**
- Active label color changed from `on-surface-variant` to `secondary`

---

## XR (Extended Reality)

> XR guidelines are rapidly evolving and primarily intended for designers. Material has XR-specific navigation bar specs using orbiters.

### XR anatomy

![Navigation bar orbiter with 7 elements](https://lh3.googleusercontent.com/NW9kaqkcTarsiort-BDPnf0QKIkvHB7lo6Mbbh8SZUvS-c-EB3LLLFQrfeJMXk7uRlDFbNtkCWBCSRYRe00HwvDagwyWESwwQbf9Vpkiz-nKqw=s0)

1. Container — 2. Icon — 3. Active indicator — 4. Small badge — 5. Large badge — 6. Large badge label — 7. Label text

### XR color & elevation

On XR, the navigation bar displays above the spatial panel on the Z-axis using spatial elevation. Elevated nav bars can use: surface container, surface container high, surface container highest, or tertiary container.

![4 elevation color strategies](https://lh3.googleusercontent.com/EYtK3dWA1t7RZze6HZnobQWRtKQiC_cuLBnJ_ceCPtbTbbqbc0E1LXNz2qCjRKTlibK7HZk1ks2RuQC1UWfAoSsRwrvlbySXSPEUSz8or2QO=s0)

### XR measurements

![Navigation bar orbiter measurements](https://lh3.googleusercontent.com/sHMs2ZBzr0w6PdPaUdjH4C-qlDH0Otnv-tBwkRLU3cO6-8MyE9Kkrjupxd5Y9oLtniqIjoeTHjjkN4aojalS0--hvHAYjrufQQMw7tiIPfGOjg=s0)

### XR usage & placement

- In **full space**, the nav bar can appear in an orbiter for an immersive experience
- In **home space**, use a regular navigation bar on the same plane as body content
- **Global context**: centered at the bottom of the app, stays anchored during layout changes. Use **offset positioning** for global actions
- **Local context**: centered at the bottom of a spatial panel. Use **inset positioning** for panel-specific actions. Exercise caution — global navigation should use global context
- Navigation bar orbiter should overlap spatial panels by **12dp** and no more than **half its height**
- Orbiter width should not exceed the width of adjacent spatial panels
- Always placed at **bottom** of spatial panel, within the field of view
- 20dp margin for visual separation from spatial panels
