# Tabs — M3 Component Reference

> Tabs organize content across different screens and views.

Sources: [Overview](https://m3.material.io/components/tabs/overview) · [Specs](https://m3.material.io/components/tabs/specs) · [Guidelines](https://m3.material.io/components/tabs/guidelines) · [Accessibility](https://m3.material.io/components/tabs/accessibility)

---

## Variants

![Primary tabs and secondary tabs side by side](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2kfqg9k-1.png?alt=media&token=0b9bbd9d-bec7-468e-8e83-1a7b6d08763a=s0)

1. Primary tabs
2. Secondary tabs

| Variant            | Use case                                                 | Active indicator | Active text/icon color    |
| ------------------ | -------------------------------------------------------- | ---------------- | ------------------------- |
| **Primary tabs**   | Top-level content destinations, placed under the app bar | 3dp, rounded     | `md.sys.color.primary`    |
| **Secondary tabs** | Sub-categorization within a content area, below primary  | 2dp, full-width  | `md.sys.color.on-surface` |

Primary tabs should be used when only one level of tabs is needed. Secondary tabs are for when a screen requires more than one level of tabs — they use a simpler indicator style but function identically to primary tabs.

![Primary tabs above secondary tabs](https://lh3.googleusercontent.com/idzlIeuy-TH2VM7D0-YvIt28GrEONuzYVwq1Ov4RBs_p3MNmu4Ji52Zx-_b5-AtLHAGyXOiXeTMrQtrkiTwGcyThOwwaKtQc8NbP-UNUpDG_=s0)

1. Primary tabs
2. Secondary tabs

---

## Anatomy

![Six components of tabs](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0lum1-5.png?alt=media&token=07a5972d-391d-41a3-9a79-eafe77cd8f25=s0)

1. **Container** — holds all tabs; extends full width of the window, divided into equal sections (one per tab); defined by a bottom divider separating it from content below
2. **Icon** (optional) — communicates the kind of content within a tab; should be simple and recognizable
3. **Badge** (optional) — shows notifications or updates related to a specific tab (small or large; max 4 characters including "+")
4. **Label** — short text describing the tab content; appears in a single row (may use a second line with truncation if needed)
5. **Divider** — bottom edge line separating the tab container from content below
6. **Active indicator** — underline marking the currently selected tab; primary uses a rounded 3dp indicator, secondary uses a 2dp full-width indicator

### Primary tabs anatomy

![6 elements of primary tabs](https://lh3.googleusercontent.com/0bS99kVjUnrfIUIKGAMWl8zeoYciELsgT5jPWeC4JJ9gcDC2cfnKH-p9qOYsX0OJ000ePPYMARw_YXMtax_UeITNCH-W5hn03wKl-nl0Al9scw=s0)

1. Container
2. Badge (optional)
3. Icon (optional)
4. Label
5. Divider
6. Active indicator

### Secondary tabs anatomy

![5 elements of secondary tabs](https://lh3.googleusercontent.com/kyON5nMIlowboe0XsmPdlYKlFdIzCFTab9gzT4uEJtS2WMvRd1uBJHEMDDOKujs1u1iJYlb66cSc7LBfMuN9F3HRwocQhsYw0wvUW2lQxuBM=s0)

1. Container
2. Badge (optional)
3. Label
4. Divider
5. Active indicator

---

## Usage & When to Use

- Group **related** content at the same level of hierarchy into clearly defined sets
- Tabs can be joined with app bars, embedded in a specific UI region, or nested within cards and sheets
- Tabs control the UI region displayed below them
- Tab labels can include icons and text; labels should be short
- Tabs can horizontally scroll, allowing as many tabs as needed

![Mobile screen with 3 tabs: video, photos and audio](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0hhto-1.png?alt=media&token=faff99ee-2899-443c-af57-12c65d59fbff=s0)

![Primary tabs shown within an app](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k20o4c-15.png?alt=media&token=1c7dd05f-a6bd-4c00-a290-5ebdd692a1fb=s0)

### When NOT to use

| Scenario                                                           | Use instead                       |
| ------------------------------------------------------------------ | --------------------------------- |
| Sequential content that must be read in order                      | Typography hierarchy / open space |
| Need for content navigation that isn't at the same hierarchy level | Navigation components             |

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0jkg6-3.png?alt=media&token=45142db9-88cd-4311-b2b7-fcd6f1bf4666=s0" /><br/><b>Do:</b> Use tabs to categorize related groups of content into clearly defined sets</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0jyu3-4.png?alt=media&token=47a63c09-2bf0-41e1-80fc-92f8783b19a8=s0" /><br/><b>Don't:</b> Use tabs for sequential content that needs to be read in a particular order</td>
</tr></table>

---

## Sub-elements

### Container

The container extends the full width of the window and is divided into equal sections — one for each tab. A bottom divider separates it from the content below. Content may scroll underneath the container.

![Container area highlighted](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0mdfv-6.png?alt=media&token=6eab5596-fd3e-4c96-b8dc-3bdd18a576ae=s0)

### Icon

Icons communicate the kind of content within a tab. They should be simple and recognizable. Icons alone are less effective than text labels at communicating complex content — use caution when representing tab content with icons only.

![Tabs with combination of labels and icons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0o3dw-7.png?alt=media&token=4453d8d6-48b9-4c46-bdef-c67469c6874e=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0sbsy-8.png?alt=media&token=feb6c69b-48e7-47c7-a3ef-c8101a1d086a=s0" /><br/><b>Do:</b> Use globally recognized icons when using icons alone</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0t3i6-9.png?alt=media&token=8943b2f8-f6e6-4806-8b42-19cbdd777e22=s0" /><br/><b>Don't:</b> Mix tabs with icons-and-text and tabs with text-only in the same set</td>
</tr></table>

### Label

Text labels should clearly and succinctly describe the tab content. Labels appear in a single row and may use a second line with truncation if needed. Scrollable tabs accommodate longer titles.

![Scrollable tabs in a single row](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k1942z-10.png?alt=media&token=c814722a-2e66-42b2-a087-253f3dffcadc=s0)

For scrollable tabs, offset the first visible tab by **52dp** from the leading edge of the device (both web and mobile). Each tab's width is defined by its text label length. Avoid inconsistent padding across tabs.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k19jjz-11.png?alt=media&token=ba85424e-ac68-4880-8ce6-9772253d3871=s0" /><br/><b>Do:</b> Offset the first scrollable tab 52dp from the leading edge to signal more content</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k1a0sc-12.png?alt=media&token=d0344e50-67db-4791-99d8-05f7c782bf67=s0" /><br/><b>Don't:</b> Truncate labels unless required — truncated text impedes comprehension</td>
</tr></table>

### Badges

Badges show notifications or updates related to a specific tab. Limit badge content to 4 characters (including "+"). Once the user views the relevant content, the badge should update or disappear.

Both small and large badges can be used. See the [badge guidance](https://m3.material.io/m3/pages/badges/overview) for details.

![Badges on tabs](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k1yl6w-13.png?alt=media&token=b128a5c0-f67d-4194-bc94-d69b547ddc8c=s0)

### Active indicator

An underline and color change differentiate the active tab from inactive tabs. Primary tabs use a 3dp rounded indicator; secondary tabs use a 2dp full-width indicator.

---

## Placement

Tabs display in a single row, each connected to the content it represents. All tabs in a set are unified by a shared topic. Secondary tabs should always be placed below primary tabs.

![Secondary tabs below primary tabs](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k217y6-16.png?alt=media&token=3a2e7337-2872-4ea8-a56e-9292b857d1cf=s0)

---

## Behavior

### States

Tabs inherit enabled states with one active state by default. Both inactive and active states support hover, focus, and pressed states.

![Active, hover, focused, and pressed states](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k2312r-18.png?alt=media&token=097ee5d4-3881-444a-8729-143cad991109=s0)

### Fixed tabs

Fixed tabs display all tabs simultaneously. Best for switching between related content quickly (e.g., transportation methods on a map). Navigate by tapping an individual tab or swiping left/right in the content area.

Use caution when placing other swipeable content (interactive maps, list items) in the content area — users may accidentally swipe the wrong element. Prefer different gesture directions for swipeable items nested under tabs.

### Scrollable tabs

When a set of tabs cannot fit on screen, use scrollable tabs. They support longer text labels and a larger number of tabs, and are best for touch interfaces.

It is **not recommended** to loop a tab set with infinite scrolling, as this can trap users navigating linearly with a screen reader.

### Scrolling content

When screen content scrolls vertically, tabs can either remain fixed at the top or scroll off-screen and return when the user scrolls upward. Tabs and an attached app bar should appear and move as a single unit — do not scroll tabs behind an app bar independently.

---

## Responsive Layout

For fixed tabs, determine the maximum width of each tab from the widest tab label. The tab group should use a fluid margin and align to the center or leading edge of the body region.

Avoid using more than four fixed tabs at once — five or more makes the container cramped.

![Four fixed tabs spaced equally](https://lh3.googleusercontent.com/FyF1DB36V4-1BUcdhWode9xWyMAv8dxbQI41nyqeelttSpQive9jjYbxjC6qmmZCq7-7OKSAtlkWeFG0ufcBT-KVUFHAniHePE3F4ZcTy382=s0)

---

## Measurements

![Tab measurements for four and two tabs per container](https://lh3.googleusercontent.com/KNDnEXfu6HZxqBLD84eQfamUeoe8b_N3wygSYqpk5Hq1MxT7_9RNL34wYce0tPDml6rb6lP7cQO8lYhxEcPOOXIGAmb3ArqY-ay-lDUzbqoW=s0)

Tabs are divided into equal sections, with labels and icons positioned vertically centered. The divider is included in the container height.

![Primary tab active indicator measurements](https://lh3.googleusercontent.com/lEVgg_QRIKA7HpYLAWEddeY7ZCHa5FmlPc1K3C0yx1c5cmW_wxci7cAmdW_55RvUextO4vEHupXxMrWXSna4BHfO7UcWU9Q_QKrk2LESoMbVoA=s0)

Primary tab active indicators are inset 2dp on each side, have a fully rounded corner radius, and a minimum length of 24dp.

| Attribute                              | Value      |
| -------------------------------------- | ---------- |
| Container height (label text only)     | 48dp       |
| Container height (icon and label text) | 64dp       |
| Icon size                              | 24dp       |
| Divider height                         | 1dp        |
| Primary active indicator height        | 3dp        |
| Secondary active indicator height      | 2dp        |
| Active indicator shape                 | 3, 3, 0, 0 |
| Active indicator minimum length        | 24dp       |
| Padding between inline icon and text   | 8dp        |
| Padding between inline text and badge  | 4dp        |
| Overlap of badge on stacked icon       | 6dp        |
| Scrollable tab leading offset          | 52dp       |

---

## Color Tokens

### Primary tabs color

![7 color roles applied to primary tabs in light and dark themes](https://lh3.googleusercontent.com/dmXLWuK2u_6U_iIQaK_nWtayfYfcfZU6mZyf5IAPmgu9y14-Puo51QN7a74fZJ34z0ESD88OfHOvUOFcnTpSARGU9yDXHPUQrcBqledF6BA=s0)

1. Surface
2. Primary
3. Primary
4. On surface variant
5. On surface variant
6. Outline variant
7. Primary

#### Enabled / Container

| Element                         | Token                                                                      | Value                      |
| ------------------------------- | -------------------------------------------------------------------------- | -------------------------- |
| Container color                 | `md.comp.primary-navigation-tab.container.color`                           | `md.sys.color.surface`     |
| Container shape                 | `md.comp.primary-navigation-tab.container.shape`                           | `md.sys.shape.corner.none` |
| Container height                | `md.comp.primary-navigation-tab.container.height`                          | 48dp                       |
| Container height (icon + label) | `md.comp.primary-navigation-tab.with-icon-and-label-text.container.height` | 64dp                       |
| Container elevation             | `md.comp.primary-navigation-tab.container.elevation`                       | `md.sys.elevation.level0`  |

#### Enabled / Label text

| Element                   | Token                                                                      | Value                                      |
| ------------------------- | -------------------------------------------------------------------------- | ------------------------------------------ |
| Font                      | `md.comp.primary-navigation-tab.with-label-text.label-text.font`           | `md.sys.typescale.title-small.font`        |
| Line height               | `md.comp.primary-navigation-tab.with-label-text.label-text.line-height`    | `md.sys.typescale.title-small.line-height` |
| Size                      | `md.comp.primary-navigation-tab.with-label-text.label-text.size`           | `md.sys.typescale.title-small.size`        |
| Weight                    | `md.comp.primary-navigation-tab.with-label-text.label-text.weight`         | `md.sys.typescale.title-small.weight`      |
| Tracking                  | `md.comp.primary-navigation-tab.with-label-text.label-text.tracking`       | `md.sys.typescale.title-small.tracking`    |
| Type style                | `md.comp.primary-navigation-tab.with-label-text.label-text.type`           | Aa                                         |
| Active label text color   | `md.comp.primary-navigation-tab.with-label-text.active.label-text.color`   | `md.sys.color.primary`                     |
| Inactive label text color | `md.comp.primary-navigation-tab.with-label-text.inactive.label-text.color` | `md.sys.color.on-surface-variant`          |

#### Enabled / Icon

| Element             | Token                                                          | Value                             |
| ------------------- | -------------------------------------------------------------- | --------------------------------- |
| Icon size           | `md.comp.primary-navigation-tab.with-icon.icon.size`           | 24dp                              |
| Active icon color   | `md.comp.primary-navigation-tab.with-icon.active.icon.color`   | `md.sys.color.primary`            |
| Inactive icon color | `md.comp.primary-navigation-tab.with-icon.inactive.icon.color` | `md.sys.color.on-surface-variant` |

#### Enabled / Divider

| Element        | Token                                           | Value                          |
| -------------- | ----------------------------------------------- | ------------------------------ |
| Divider color  | `md.comp.primary-navigation-tab.divider.color`  | `md.sys.color.surface-variant` |
| Divider height | `md.comp.primary-navigation-tab.divider.height` | 1dp                            |

#### Enabled / Active indicator

| Element                 | Token                                                    | Value                  |
| ----------------------- | -------------------------------------------------------- | ---------------------- |
| Active indicator color  | `md.comp.primary-navigation-tab.active-indicator.color`  | `md.sys.color.primary` |
| Active indicator height | `md.comp.primary-navigation-tab.active-indicator.height` | 3dp                    |
| Active indicator shape  | `md.comp.primary-navigation-tab.active-indicator.shape`  | —                      |

#### Hovered / Label text

| Element                         | Token                                                                            | Value                     |
| ------------------------------- | -------------------------------------------------------------------------------- | ------------------------- |
| Active hover label text color   | `md.comp.primary-navigation-tab.with-label-text.active.hover.label-text.color`   | `md.sys.color.primary`    |
| Inactive hover label text color | `md.comp.primary-navigation-tab.with-label-text.inactive.hover.label-text.color` | `md.sys.color.on-surface` |

#### Hovered / State layer

| Element                            | Token                                                               | Value                                    |
| ---------------------------------- | ------------------------------------------------------------------- | ---------------------------------------- |
| Active hover state layer color     | `md.comp.primary-navigation-tab.active.hover.state-layer.color`     | `md.sys.color.primary`                   |
| Active hover state layer opacity   | `md.comp.primary-navigation-tab.active.hover.state-layer.opacity`   | `md.sys.state.hover.state-layer-opacity` |
| Inactive hover state layer color   | `md.comp.primary-navigation-tab.inactive.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| Inactive hover state layer opacity | `md.comp.primary-navigation-tab.inactive.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

#### Hovered / Icon

| Element                   | Token                                                                | Value                     |
| ------------------------- | -------------------------------------------------------------------- | ------------------------- |
| Active hover icon color   | `md.comp.primary-navigation-tab.with-icon.active.hover.icon.color`   | `md.sys.color.primary`    |
| Inactive hover icon color | `md.comp.primary-navigation-tab.with-icon.inactive.hover.icon.color` | `md.sys.color.on-surface` |

#### Focused / Focus indicator

| Element                   | Token                                                           | Value                                       |
| ------------------------- | --------------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color     | `md.comp.primary-navigation-tab.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Focus indicator thickness | `md.comp.primary-navigation-tab.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset    | `md.comp.primary-navigation-tab.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` |

#### Focused / Label text

| Element                         | Token                                                                            | Value                     |
| ------------------------------- | -------------------------------------------------------------------------------- | ------------------------- |
| Active focus label text color   | `md.comp.primary-navigation-tab.with-label-text.active.focus.label-text.color`   | `md.sys.color.primary`    |
| Inactive focus label text color | `md.comp.primary-navigation-tab.with-label-text.inactive.focus.label-text.color` | `md.sys.color.on-surface` |

#### Focused / State layer

| Element                            | Token                                                               | Value                                    |
| ---------------------------------- | ------------------------------------------------------------------- | ---------------------------------------- |
| Active focus state layer color     | `md.comp.primary-navigation-tab.active.focus.state-layer.color`     | `md.sys.color.primary`                   |
| Active focus state layer opacity   | `md.comp.primary-navigation-tab.active.focus.state-layer.opacity`   | `md.sys.state.focus.state-layer-opacity` |
| Inactive focus state layer color   | `md.comp.primary-navigation-tab.inactive.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| Inactive focus state layer opacity | `md.comp.primary-navigation-tab.inactive.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

#### Focused / Icon

| Element                   | Token                                                                | Value                     |
| ------------------------- | -------------------------------------------------------------------- | ------------------------- |
| Active focus icon color   | `md.comp.primary-navigation-tab.with-icon.active.focus.icon.color`   | `md.sys.color.primary`    |
| Inactive focus icon color | `md.comp.primary-navigation-tab.with-icon.inactive.focus.icon.color` | `md.sys.color.on-surface` |

#### Pressed / Label text

| Element                           | Token                                                                              | Value                     |
| --------------------------------- | ---------------------------------------------------------------------------------- | ------------------------- |
| Active pressed label text color   | `md.comp.primary-navigation-tab.with-label-text.active.pressed.label-text.color`   | `md.sys.color.primary`    |
| Inactive pressed label text color | `md.comp.primary-navigation-tab.with-label-text.inactive.pressed.label-text.color` | `md.sys.color.on-surface` |

#### Pressed / State layer

| Element                              | Token                                                                 | Value                                      |
| ------------------------------------ | --------------------------------------------------------------------- | ------------------------------------------ |
| Active pressed state layer color     | `md.comp.primary-navigation-tab.active.pressed.state-layer.color`     | `md.sys.color.primary`                     |
| Active pressed state layer opacity   | `md.comp.primary-navigation-tab.active.pressed.state-layer.opacity`   | `md.sys.state.pressed.state-layer-opacity` |
| Inactive pressed state layer color   | `md.comp.primary-navigation-tab.inactive.pressed.state-layer.color`   | `md.sys.color.primary`                     |
| Inactive pressed state layer opacity | `md.comp.primary-navigation-tab.inactive.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

#### Pressed / Icon

| Element                     | Token                                                                  | Value                     |
| --------------------------- | ---------------------------------------------------------------------- | ------------------------- |
| Active pressed icon color   | `md.comp.primary-navigation-tab.with-icon.active.pressed.icon.color`   | `md.sys.color.primary`    |
| Inactive pressed icon color | `md.comp.primary-navigation-tab.with-icon.inactive.pressed.icon.color` | `md.sys.color.on-surface` |

---

### Secondary tabs color

![5 color roles applied to secondary tabs in light and dark themes](https://lh3.googleusercontent.com/mrLdFHBC7H_M0bhZxPDT-VaJeoB01vnZMaY_9Pyj_EenTQbIT6OO75CWFdZLyvMxD0ycppRCoWXustGmsKh3K3M8CALUwNj7knXGU6JyrGb5=s0)

1. Surface
2. On surface
3. On surface variant
4. Outline variant
5. Primary

#### Enabled / Container

| Element                | Token                                                     | Value                      |
| ---------------------- | --------------------------------------------------------- | -------------------------- |
| Container color        | `md.comp.secondary-navigation-tab.container.color`        | `md.sys.color.surface`     |
| Container shape        | `md.comp.secondary-navigation-tab.container.shape`        | `md.sys.shape.corner.none` |
| Container height       | `md.comp.secondary-navigation-tab.container.height`       | 48dp                       |
| Container elevation    | `md.comp.secondary-navigation-tab.container.elevation`    | `md.sys.elevation.level0`  |
| Container shadow color | `md.comp.secondary-navigation-tab.container.shadow-color` | `md.sys.color.shadow`      |

#### Enabled / Label text

| Element                   | Token                                                        | Value                                      |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| Font                      | `md.comp.secondary-navigation-tab.label-text.font`           | `md.sys.typescale.title-small.font`        |
| Line height               | `md.comp.secondary-navigation-tab.label-text.line-height`    | `md.sys.typescale.title-small.line-height` |
| Size                      | `md.comp.secondary-navigation-tab.label-text.size`           | `md.sys.typescale.title-small.size`        |
| Weight                    | `md.comp.secondary-navigation-tab.label-text.weight`         | `md.sys.typescale.title-small.weight`      |
| Tracking                  | `md.comp.secondary-navigation-tab.label-text.tracking`       | `md.sys.typescale.title-small.tracking`    |
| Type style                | `md.comp.secondary-navigation-tab.label-text.type`           | Aa                                         |
| Active label text color   | `md.comp.secondary-navigation-tab.active.label-text.color`   | `md.sys.color.on-surface`                  |
| Inactive label text color | `md.comp.secondary-navigation-tab.inactive.label-text.color` | `md.sys.color.on-surface-variant`          |

#### Enabled / Icon

| Element             | Token                                                            | Value                             |
| ------------------- | ---------------------------------------------------------------- | --------------------------------- |
| Icon size           | `md.comp.secondary-navigation-tab.with-icon.icon.size`           | 24dp                              |
| Active icon color   | `md.comp.secondary-navigation-tab.with-icon.active.icon.color`   | `md.sys.color.on-surface`         |
| Inactive icon color | `md.comp.secondary-navigation-tab.with-icon.inactive.icon.color` | `md.sys.color.on-surface-variant` |

#### Enabled / Divider

| Element        | Token                                             | Value                          |
| -------------- | ------------------------------------------------- | ------------------------------ |
| Divider color  | `md.comp.secondary-navigation-tab.divider.color`  | `md.sys.color.surface-variant` |
| Divider height | `md.comp.secondary-navigation-tab.divider.height` | 1dp                            |

#### Enabled / Active indicator

| Element                 | Token                                                      | Value                  |
| ----------------------- | ---------------------------------------------------------- | ---------------------- |
| Active indicator color  | `md.comp.secondary-navigation-tab.active-indicator.color`  | `md.sys.color.primary` |
| Active indicator height | `md.comp.secondary-navigation-tab.active-indicator.height` | 2dp                    |

#### Hovered / Label text

| Element                | Token                                                     | Value                     |
| ---------------------- | --------------------------------------------------------- | ------------------------- |
| Hover label text color | `md.comp.secondary-navigation-tab.hover.label-text.color` | `md.sys.color.on-surface` |

#### Hovered / State layer

| Element                   | Token                                                        | Value                                    |
| ------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Hover state layer color   | `md.comp.secondary-navigation-tab.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| Hover state layer opacity | `md.comp.secondary-navigation-tab.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

#### Hovered / Icon

| Element          | Token                                                         | Value                     |
| ---------------- | ------------------------------------------------------------- | ------------------------- |
| Hover icon color | `md.comp.secondary-navigation-tab.with-icon.hover.icon.color` | `md.sys.color.on-surface` |

#### Focused / Focus indicator

| Element                   | Token                                                             | Value                                       |
| ------------------------- | ----------------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color     | `md.comp.secondary-navigation-tab.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Focus indicator thickness | `md.comp.secondary-navigation-tab.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset    | `md.comp.secondary-navigation-tab.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` |

#### Focused / Label text

| Element                | Token                                                     | Value                     |
| ---------------------- | --------------------------------------------------------- | ------------------------- |
| Focus label text color | `md.comp.secondary-navigation-tab.focus.label-text.color` | `md.sys.color.on-surface` |

#### Focused / State layer

| Element                   | Token                                                        | Value                                    |
| ------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Focus state layer color   | `md.comp.secondary-navigation-tab.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| Focus state layer opacity | `md.comp.secondary-navigation-tab.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

#### Focused / Icon

| Element          | Token                                                         | Value                     |
| ---------------- | ------------------------------------------------------------- | ------------------------- |
| Focus icon color | `md.comp.secondary-navigation-tab.with-icon.focus.icon.color` | `md.sys.color.on-surface` |

#### Pressed / Label text

| Element                  | Token                                                       | Value                     |
| ------------------------ | ----------------------------------------------------------- | ------------------------- |
| Pressed label text color | `md.comp.secondary-navigation-tab.pressed.label-text.color` | `md.sys.color.on-surface` |

#### Pressed / State layer

| Element                     | Token                                                          | Value                                      |
| --------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| Pressed state layer color   | `md.comp.secondary-navigation-tab.pressed.state-layer.color`   | `md.sys.color.on-surface`                  |
| Pressed state layer opacity | `md.comp.secondary-navigation-tab.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

#### Pressed / Icon

| Element            | Token                                                           | Value                     |
| ------------------ | --------------------------------------------------------------- | ------------------------- |
| Pressed icon color | `md.comp.secondary-navigation-tab.with-icon.pressed.icon.color` | `md.sys.color.on-surface` |

---

## Interaction States

### Primary tabs states

![All primary tab states in light and dark mode](https://lh3.googleusercontent.com/SVFdAJr5_8cGN6FTMVabD3nie8TwI7380y6PuVzSxatYH1YBsdf49aWd1upXNO7uDcsKDd8Uge2WtDUPtTtnuFCKKgIk-q6iraC6rfP8bcY=s0)

| #   | State              | Notes                                                 |
| --- | ------------------ | ----------------------------------------------------- |
| 1   | Enabled (active)   | Primary color for text/icon, active indicator visible |
| 2   | Hover (active)     | Primary state layer                                   |
| 3   | Focused (active)   | Focus indicator, primary state layer                  |
| 4   | Pressed (active)   | Primary state layer with pressed opacity              |
| 5   | Enabled (inactive) | On-surface-variant color for text/icon                |
| 6   | Hover (inactive)   | On-surface state layer                                |
| 7   | Focused (inactive) | Focus indicator, on-surface state layer               |
| 8   | Pressed (inactive) | Primary state layer with pressed opacity              |

### Secondary tabs states

![All secondary tab states in light and dark mode](https://lh3.googleusercontent.com/oEbOwsXXP2m1EE9Sh7tJFcTP1GIHVkX6lbOkKN-gdwnF4WbJnoyezqHEr1rtaeAPTY2cHj6txNpy91YgYRVCBqht87aUU6VlIwJg1rnvvniy=s0)

| #   | State              | Notes                                                    |
| --- | ------------------ | -------------------------------------------------------- |
| 1   | Enabled (active)   | On-surface color for text/icon, active indicator visible |
| 2   | Hover (active)     | On-surface state layer                                   |
| 3   | Focused (active)   | Focus indicator, on-surface state layer                  |
| 4   | Pressed (active)   | On-surface state layer with pressed opacity              |
| 5   | Enabled (inactive) | On-surface-variant color for text/icon                   |
| 6   | Hover (inactive)   | On-surface state layer                                   |
| 7   | Focused (inactive) | Focus indicator, on-surface state layer                  |
| 8   | Pressed (inactive) | On-surface state layer with pressed opacity              |

---

## Accessibility

### Touch & Cursor

- **Touch**: Tapping a tab shows a touch ripple for interaction feedback; the active indicator shifts into position on engagement
- **Cursor**: Hover state appears on mouseover; clicking (in both active and inactive states) triggers a ripple and shifts the indicator

### Keyboard Navigation

| Key                | Action                               |
| ------------------ | ------------------------------------ |
| Arrow (Left/Right) | Focus moves to the next/previous tab |
| Space / Enter      | Activates the focused tab            |
| Tab                | Exits the tab set                    |

- Use Arrow/Tab to navigate between tabs; Space/Enter to select
- Do **not** use Space/Enter for navigating — those keys are only for activating the focused tab

### Scrollable Tabs

- When tabs don't fit on screen, scrollable tabs are used; navigate by swiping or using Arrow/Tab keys
- **Do not loop** scrollable tabs infinitely — this can trap screen reader users navigating linearly
- Horizontal scrolling meets accessibility requirements because tabs need width flexibility for label text

### Labeling

- When tab text is ambiguous or an icon-only tab is used, provide a descriptive accessibility label that clarifies the tab's intent (not just the icon's visual appearance)
- Example: a "video camera" icon tab should have an accessibility label like "Video format media content"

![Tab with accessibility label and role illustrated](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k3h2mn-7.png?alt=media&token=47b7122f-9754-488f-8436-39a6b015175a=s0)

### Focus Behavior

Initial focus on Arrow/Tab into a tab set lands on the first interactive element. The user can then arrow through all available tab items.

### Density

Do not apply density to tabs by default — this reduces touch targets below the recommended **48×48 CSS pixel** minimum. Instead, offer density as a user-configurable option (e.g., a denser layout setting). Ensure controls to change density remain at minimum 48×48 CSS pixels.

---

## M2 → M3 Differences

- **Color**: New color mappings and compatibility with dynamic color
- **Layout**: Icons and labels are now vertically centered within the container (M2 positioned them differently)

![M3 tabs with vertically centered icons and labels](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k3okei-2.png?alt=media&token=cbbae98e-4d7c-4c85-8e63-1056f6e38129=s0)

---

## Availability & Resources

| Type           | Resource                                                                                                              | Status    |
| -------------- | --------------------------------------------------------------------------------------------------------------------- | --------- |
| Design         | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460)                                        | Available |
| Implementation | [Flutter](https://api.flutter.dev/flutter/material/TabBar-class.html)                                                 | Available |
|                | [Jetpack Compose](https://developer.android.com/develop/ui/compose/components/tabs)                                   | Available |
|                | [MDC-Android](https://github.com/material-components/material-components-android/blob/master/docs/components/Tabs.md) | Available |
|                | [Web](https://github.com/material-components/material-web/blob/main/docs/components/tabs.md)                          | Available |
