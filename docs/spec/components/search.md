# Search — M3 Component Reference

> Search lets people enter a keyword or phrase to get relevant information.

Sources: [Overview](https://m3.material.io/components/search/overview) · [Specs](https://m3.material.io/components/search/specs) · [Guidelines](https://m3.material.io/components/search/guidelines) · [Accessibility](https://m3.material.io/components/search/accessibility)

---

## Variants

| Variant | M3        | M3 Expressive |
| ------- | --------- | ------------- |
| Search  | Available | Available     |

## Styles

Search comes in two visual styles:

- **Contained** (expressive, recommended) — uses a persistent filled container with rounded shape and expressive motion. The container maintains its shape between unfocused and focused states.
- **Divided** (baseline) — uses a divider line to separate the search bar from suggestions/results. Lacks the latest visual style, motion, and flexibility.

<table><tr>
<td><img src="https://lh3.googleusercontent.com/mZviJwGIZh_IpUNqJc4qSUDOLFrmDTpbjX_bufkF90qso_IE6fyfgB1e2VmG5N_E6Picjiw05l7vRqKShb46NyHV0Od2WHuqcVP4my2v5YBZ=s0" /><br/><b>Contained:</b> Persistent filled container, expressive motion, rounded shape</td>
<td><img src="https://lh3.googleusercontent.com/sA1JTXVXpg8LWSsXFxuxTShN08cJnxWigVkMDRzrHVQT6XnlvmPuvbVrmmeMZ7ZgDpNyRgv6T-zOjMh798bEXeoj0QjURzBE5oSimBCuYgSq4w=s0" /><br/><b>Divided:</b> Divider separates bar from suggestions/results</td>
</tr></table>

| Category | Configuration       | M3        | M3 Expressive                   |
| -------- | ------------------- | --------- | ------------------------------- |
| Style    | Contained           | --        | Available                       |
|          | Divided             | Available | Not recommended. Use contained. |
| Layout   | Docked, full-screen | Available | Available                       |

---

## Anatomy

![6 elements of search from specs](https://lh3.googleusercontent.com/nfgJlo7RsO4mElkJBSEo5E2yo1OPaLlu6o9PxA4lLhre5XuuiXAOj1LsjVPDk01MysoC5dasvtMXqSDJHFc1w6tycmubcpzPTA9uqm9hi-_z=s0)

![6 elements of search from guidelines](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgr3p93-11.png?alt=media&token=802aed8a-e993-42d2-8ef7-17aaba8ac5ad=s0)

1. **Search bar container** — pill-shaped surface that holds the search input
2. **Leading icon** — navigational icon button (menu/arrow) or non-functional search icon
3. **Supporting text** — hinted search text describing what can be searched (e.g. "Search your messages")
4. **Trailing icon / avatar** (optional) — up to two trailing icons or one icon plus avatar
5. **Input text** — replaces the supporting text when the user starts typing
6. **Container for suggestions/results** — empty by default; populated using the list component

### Trailing Element Examples

![4 search bars with different trailing elements](https://lh3.googleusercontent.com/4DOSj_PCy0dVTh_Mwwa-JmNfmmABObXarzG6mlKcjL7V1kdeh9_yrI9kQM5t1UhpsVOtc4bIq7mUwNYh2F50RDyInwgspspdrk-OHnd3lg=s0)

1. With avatar
2. With one trailing icon button
3. With two trailing icon buttons
4. With trailing icon button and avatar

---

## Usage & When to Use

Search helps people find information quickly within products that have large amounts of content to manage (files, messages, etc.).

![Search bar at the top of a message inbox](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfkhcoi-02.png?alt=media&token=0bbcd761-04b2-482f-8b01-e11cf9dd25c0=s0)

### Entry Points

The search entry point should be easy to find, and the choice depends on the product's needs:

| Entry Point            | When to Use                                                 |
| ---------------------- | ----------------------------------------------------------- |
| **Search bar**         | Search within a specific view (e.g. "Search your messages") |
| **Search app bar**     | Global, primary search function for the entire app          |
| **Search icon button** | Search is a secondary action, not the main focus            |

![Search bar below a page title](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfkodgz-03.png?alt=media&token=55ab08bb-f4bc-49d6-abc2-76bf93ba2ada=s0)

![Search app bar for global search](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfkpcee-04.png?alt=media&token=6dea133b-5732-4c6f-9dfa-29ca6e892083=s0)

![Search icon button as secondary action](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfkq5y2-05.png?alt=media&token=d94669aa-81c7-4c69-b709-ac4eb84a8302=s0)

### Search Suggestions & Results

Suggestions and results appear in a list below the search bar. To help users find information quickly:

- Add **leading icons** related to suggestions
- Group items with **category labels** ("Recent", "Contacts", "Suggestions")
- Include **avatars** or other high-priority items
- Provide **filter chips** to narrow down results
- Use **gaps** to separate list items into distinct groups

![Search with suggestions and contact avatars](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlflqra9-09.png?alt=media&token=b100c40a-d13b-4601-90ce-3a7e2087ac4d=s0)

![Gap separating list item groups](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfm1yld-10.png?alt=media&token=9cd70993-130a-449e-8807-4c9ffe215f9a=s0)

---

## Configurations

### Layout

Search suggestions and results appear below the bar in one of two layouts:

- **Full-screen** — expands to fill the entire screen; default for compact window sizes
- **Docked** — opens a list below the search bar with a scrim covering main content; best for medium and expanded windows

<table><tr>
<td><img src="https://lh3.googleusercontent.com/UN8OMCnrmxaASc6CRHtAONOcdeZf71JD03xLHV9sDt8-A6pMWEWH2DxRbjhxM7M8_IE2H7_w8mtdqqE56eamgN0CzGxQ-qpBH7UXsaOKE0c9-g=s0" /><br/>Full-screen layout, contained style</td>
<td><img src="https://lh3.googleusercontent.com/SlF8qBuCFFB-x7eQOBSJ6O2BgEmepkVWMQvU1b0gtBUdISdyG2QJbz0MeS6HPrO49nL_AZQaOil5-Rw8_SpIGMGHqioZRMJVOnwocdxXQQiamg=s0" /><br/>Docked layout, contained style</td>
</tr></table>

<table><tr>
<td><img src="https://lh3.googleusercontent.com/xcvU3lGYJQELKKllc3w1uW68diJE9YJPeiCtbZM8tC9Gzg0qg5TBBzjEiFkl8hYOWcik2XUQfgqpeXvX6hXmHX_oA5_PSHLKNeRZJT3i2NU=s0" /><br/>Full-screen layout, divided style</td>
<td><img src="https://lh3.googleusercontent.com/4FjOzW97D9JP3Mvu2GyfQ-PQhbAvpQRPjPjsqj3iM_125CTJgfv8X_u-qeSu4ti3i7ytSIZf4Crkoz5drPm10WS22uGld5GwXbFUhPKPLb1n=s0" /><br/>Docked layout, divided style</td>
</tr></table>

---

## Sub-elements

### Search Bar Container

In the contained style, the search bar maintains its rounded shape in both unfocused and focused states. The container margins change on focus:

- **Unfocused**: 24dp margins
- **Focused**: 12dp margins (bar expands)

![Unfocused and focused container comparison](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfmu14l-13.png?alt=media&token=f1e5fa3a-be6f-49fb-9314-34f76eac6971=s0)

In the divided style, a divider line separates the bar from results.

#### Container Color

Search bars use the **surface container high** color role, which provides clear contrast when the screen background is white or a tonal surface color.

![Search bars on white and tonal backgrounds](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfmvyj4-14.png?alt=media&token=ec01deec-54a8-417f-8287-634d57db53c8=s0)

> **Caution:** Avoid placing a surface container high search bar on a surface container background. The minimal contrast can make the bar hard to find. Use surface container roles that are more than one step apart.

![Low-contrast caution example](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfn371r-15.png?alt=media&token=8015480f-71dc-40f0-8a0e-a36611b9b70e=s0)

### Leading Icons

The leading side should include either:

- A **navigational icon button** (menu or back arrow)
- A **non-functional search icon**

![Search bar with non-functional leading search icon](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfn8hr6-16.png?alt=media&token=00a26f0f-ed92-46ab-89ac-1c179529ef4f=s0)

### Trailing Icons

A search bar should have one or two trailing icon buttons. Possible trailing actions:

- Additional search modes (e.g. voice search)
- High-level actions (current location, profile)
- Overflow menu
- Decorative search icon

Maximum two trailing icons; an avatar can be combined with up to one other icon.

![Two trailing icon buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfnb1td-17.png?alt=media&token=4ee36dd9-e75a-4109-82fe-0d0805a43d24=s0)

![Trailing microphone icon and avatar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfncrm8-18.png?alt=media&token=e3b1a784-65b2-4462-a2e9-908577627e04=s0)

![Clear icon in focused search](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfndiyw-19-VQA.png?alt=media&token=3b6d8d61-8e80-4005-b1e2-ab6fa33d9361=s0)

When focused, an optional **clear icon** (×) can appear to remove input text.

### Text

- **Supporting text (hinted)** — short description of searchable content (e.g. "Search replies", "Search your messages")
- **Input text** — replaces the hinted text when the user starts typing

---

## Placement

Search bars are typically placed at the top of the screen for prominence and accessibility. Placement depends on whether search is primary or secondary:

![Search bar as primary focus](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfmbc2s-21.png?alt=media&token=bdf6a965-f280-48a6-b28a-bf42f57e1d1e=s0)

![Search bar at top of content](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfmc255-22.png?alt=media&token=ad6fbc7a-15a6-42ed-8ec4-6450a6f9c87e=s0)

![Search as secondary action](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfmcmiv-23.png?alt=media&token=ec5cb486-7355-492f-9480-3e36fc614a51=s0)

If search is the primary action, focused search can be a standalone destination reached from a navigation bar.

![Focused search as standalone destination](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfkth1m-07.png?alt=media&token=384b3aed-87d1-4265-a957-5b21037e9eba=s0)

---

## Behavior

### Focused Search

When selected, the search bar becomes focused and can:

- Show **historical suggestions** before typing begins
- Display **suggestions or results** as the user types
- Wait until a search is **submitted** before showing results

The **back** icon releases focus, dismisses suggestions/results, and returns the bar to its unfocused state.

### Scroll

The search bar can either:

- **Scroll away** with content and reappear when the user scrolls up
- **Remain fixed** at the top of the screen

### Search Results

To execute a search, the user can:

- Type a query and press **Enter**
- Select a suggestion or result directly

Results appear in a list below the bar and scroll beneath it. The input text should remain visible but not focused after a query is submitted. For accessibility, focused search must include a clear status indicator (search icon or "Results" label).

!["Peanut" search query with suggestion list](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrceqs-32.png?alt=media&token=e8f6528f-ec6d-49b5-937a-c8a9ee80baed=s0)

### Predictive Back (Android)

On Android, predictive back allows the user to swipe left or right on search. The search surface detaches from the screen edge to signal minimization, revealing a preview of the previous screen.

---

## Measurements

### Search Bar

![Search bar icon size and padding](https://lh3.googleusercontent.com/mGptx_4JUwLVcbHz93O72eFnZN6uaFTxfpTyUe7VfjOxvJQn0kew6pVVDeiAeV4S5rWjZ0xQR-RsZMNC_1ZPJIYVvSeqIh18hIMxI9NpJQ4=s0)

![Search bar with avatar measurements](https://lh3.googleusercontent.com/dURHAt9JC2YGWnXNGRK34cv-wK4xrn9GhPUNnWdQ3ZcgzjMRuwGi5KNwpFaWn19j7Nls-mp9PTDF79hTW8gbm_201W-ZYWlQ1nrpTHCtT6kG=s0)

<table><tr>
<td><img src="https://lh3.googleusercontent.com/OfNDMCVyfuBJXmI9HLNp26jlV-aQMKAawCfhfzbzlt-wYn0lR4BxkbXOVbiEP6I2tgz0HFbjC2SY5qvbZ3flpPLc4Ad6I8VdNoZbdvc2rZQ=s0" /><br/>Unfocused: 24dp margins</td>
<td><img src="https://lh3.googleusercontent.com/R4k1-IGNQH3zamzgc2laHGU70E3SDajTXtksf4eWJIQO7gmrwoj9PCGHzqhrOju-IKtpdeoOCRi7WqJ5_xLvnUgtneP1ve8Wdj-lFQ5O74An=s0" /><br/>Focused: 12dp margins</td>
</tr></table>

| Element   | Attribute                                         | Value                          |
| --------- | ------------------------------------------------- | ------------------------------ |
| Container | Width                                             | Min: 360dp, max: 720dp         |
|           | Height                                            | 56dp                           |
|           | Label alignment                                   | Start-aligned                  |
|           | Leading padding                                   | Unfocused: 24dp, focused: 12dp |
|           | Trailing padding                                  | Unfocused: 24dp, focused: 12dp |
|           | Leading icon and label padding (from tap target)  | 4dp                            |
|           | Label and trailing icon padding (from tap target) | 4dp                            |
| Avatar    | Size                                              | 30dp                           |

### Focused Search — Contained Style

![Full-screen contained measurements](https://lh3.googleusercontent.com/b0xykJB3s1NEcZz6gQP37YfP-r6S3fbfqNKJaY-XbWy2AyoWViOPlmHhW6Lq6b4IbhmcDYAQJHonH59HvnDeIUdeXeMjIUdoWKNxbjQpN6xk=s0)

![Docked contained measurements](https://lh3.googleusercontent.com/5Hst6KPsjyxhxQTptCBbkRahderHldeKa_33ucNVW9xZ9svHkx9eBhbhDKYR656D5DkvhdfdMIPhs5L9gWqq2yfEjn_AQvTQQg5Q2Y5WHhJ1=s0)

| Element               | Attribute                                        | Value                                 |
| --------------------- | ------------------------------------------------ | ------------------------------------- |
| Full-screen container | Width                                            | Full width                            |
|                       | Height                                           | Full height                           |
| Docked container      | Width                                            | Min: 360dp, max: 720dp                |
|                       | Height                                           | Min: 240dp, max: 2/3 of screen height |
| Search bar container  | Height                                           | 56dp                                  |
|                       | Label alignment                                  | Start-aligned                         |
|                       | Leading padding                                  | 16dp                                  |
|                       | Trailing padding                                 | 16dp                                  |
|                       | Leading icon and label padding (from tap target) | 4dp                                   |

### Focused Search — Divided Style

![Full-screen divided measurements](https://lh3.googleusercontent.com/RhpQaBUaokljf6Qv0Pb6sUHofotzoGbLGs7O74snG2B9yjauRk1iv6JFhmSRsHNdUu3nacOIuEmi0RoGtRGrjv8cs9IT5uFzr30IZDU7kge9vw=s0)

![Docked divided measurements](https://lh3.googleusercontent.com/52yDW7vsdT_ythER_zFPD7eAyH2K5BvU_V9fB4COC5khSNA81CffErRCuS1kxNZkIfPYCWceEYxrnu07HijSkwnq5sIb-oMGHk_PUOu88t4=s0)

---

## Color Tokens

### Search View

| Name                                       | Token                                              | Value                                 |
| ------------------------------------------ | -------------------------------------------------- | ------------------------------------- |
| Search view container color                | `md.comp.search-view.container.color`              | `md.sys.color.surface-container-high` |
| Search view contained background color     | `md.comp.search-view.contained.background.color`   | `#F7F2FA`                             |
| Search view container background elevation | `md.comp.search-view.container.elevation`          | `md.sys.elevation.level3`             |
| Search view header supporting text color   | `md.comp.search-view.header.supporting-text.color` | `md.sys.color.on-surface-variant`     |
| Search view header input text color        | `md.comp.search-view.header.input-text.color`      | `md.sys.color.on-surface`             |
| Search view header leading icon color      | `md.comp.search-view.header.leading-icon.color`    | `md.sys.color.on-surface`             |
| Search view header trailing icon color     | `md.comp.search-view.header.trailing-icon.color`   | `md.sys.color.on-surface-variant`     |
| Search view divider color                  | `md.comp.search-view.divider.color`                | `md.sys.color.outline`                |

### Search Bar — Enabled

| Name                             | Token                                                   | Value                                 |
| -------------------------------- | ------------------------------------------------------- | ------------------------------------- |
| Search bar container color       | `md.comp.search-bar.container.color`                    | `md.sys.color.surface-container-high` |
| Search bar container elevation   | `md.comp.search-bar.container.elevation`                | `md.sys.elevation.level3`             |
| Search bar leading icon color    | `md.comp.search-bar.leading-icon.color`                 | `md.sys.color.on-surface`             |
| Search bar trailing icon color   | `md.comp.search-bar.trailing-icon.color`                | `md.sys.color.on-surface-variant`     |
| Search bar supporting text color | `md.comp.search-bar.supporting-text.color`              | `md.sys.color.on-surface-variant`     |
| Search bar input text color      | `md.comp.search-bar.input-text.color`                   | `md.sys.color.on-surface`             |
| Search bar surface tint color    | `md.comp.search-bar.container.surface-tint-layer.color` | `md.sys.color.surface-tint`           |

### Search Bar — Hovered

| Name                                   | Token                                            | Value                                    |
| -------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| Search bar hover state layer color     | `md.comp.search-bar.hover.state-layer.color`     | `md.sys.color.on-surface`                |
| Search bar hover state layer opacity   | `md.comp.search-bar.hover.state-layer.opacity`   | `md.sys.state.hover.state-layer-opacity` |
| Search bar hover supporting text color | `md.comp.search-bar.hover.supporting-text.color` | `md.sys.color.on-surface-variant`        |

### Search Bar — Pressed

| Name                                     | Token                                              | Value                                      |
| ---------------------------------------- | -------------------------------------------------- | ------------------------------------------ |
| Search bar pressed state layer color     | `md.comp.search-bar.pressed.state-layer.color`     | `md.sys.color.on-surface`                  |
| Search bar pressed state layer opacity   | `md.comp.search-bar.pressed.state-layer.opacity`   | `md.sys.state.pressed.state-layer-opacity` |
| Search bar pressed supporting text color | `md.comp.search-bar.pressed.supporting-text.color` | `md.sys.color.on-surface-variant`          |

### Search Bar — Focused

| Name                                 | Token                                               | Value                                       |
| ------------------------------------ | --------------------------------------------------- | ------------------------------------------- |
| Search bar focus indicator color     | `md.comp.search-bar.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Search bar focus indicator thickness | `md.comp.search-bar.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Search bar focus indicator offset    | `md.comp.search-bar.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

### Color Role Diagrams

#### Full-screen layout

![6 full-screen search color roles in light and dark themes](https://lh3.googleusercontent.com/GAGCWflTpnmoM0DwwKy1v0DdcEY5uW2zCwZpY8CaR61iuDKk3E7JY7yVPwx3ukkfq4B7qyOQOLInW7c7dRgKHXbbovgH_1bU5kc7pTZHwihLkg=s0)

1. Surface container low
2. On surface variant
3. On surface variant
4. Surface container high
5. On surface variant
6. On surface

#### Docked layout

![6 docked search color roles in light and dark themes](https://lh3.googleusercontent.com/nq53ckQlKsYuKPXvcEYzyrhQ7Fevp-zkK7TzePU0X7GjTIveyJLPIHzZrZ3ejyWOGKASNBS7Ir8_si6O61ubAWXRj8r_zYZNHNNpFK5JLTpGWQ=s0)

1. Surface container high
2. On surface variant
3. On surface variant
4. Surface container high
5. On surface variant
6. On surface

---

## Layout & Typography Tokens

### Search View — Contained (Expressive)

| Name                                                   | Token                                                            | Value                        |
| ------------------------------------------------------ | ---------------------------------------------------------------- | ---------------------------- |
| Search view contained leading margin                   | `md.comp.search-view.contained.leading-margin`                   | 12dp                         |
| Search view contained trailing margin                  | `md.comp.search-view.contained.trailing-margin`                  | 12dp                         |
| Search view contained docked bar results gap           | `md.comp.search-view.contained.docked.bar-results.gap`           | 2dp                          |
| Search view contained docked results shape             | `md.comp.search-view.contained.docked.results.shape`             | `md.sys.shape.corner.medium` |
| Search view contained docked bar shape                 | `md.comp.search-view.contained.docked.bar.shape`                 | `md.sys.shape.corner.full`   |
| Search view contained full screen bar container height | `md.comp.search-view.contained.full-screen.bar.container.height` | 56dp                         |
| Search view contained icon label gap                   | `md.comp.search-view.contained.icon-label.gap`                   | 4dp                          |

### Search View — Divided (Baseline)

| Name                                                | Token                                                         | Value                             |
| --------------------------------------------------- | ------------------------------------------------------------- | --------------------------------- |
| Search view docked container shape                  | `md.comp.search-view.docked.container.shape`                  | `md.sys.shape.corner.extra-large` |
| Search view full screen header container height     | `md.comp.search-view.full-screen.header.container.height`     | 72dp                              |
| Search view docked header container height          | `md.comp.search-view.docked.header.container.height`          | 56dp                              |
| Search view leading space                           | `md.comp.search-view.leading-space`                           | 16dp                              |
| Search view trailing space                          | `md.comp.search-view.trailing-space`                          | 16dp                              |
| Search view leading icon leading icon label space   | `md.comp.search-view.leading-icon.leading-icon-label-space`   | 16dp                              |
| Search view trailing icon label trailing icon space | `md.comp.search-view.trailing-icon.label-trailing-icon-space` | 16dp                              |

### Search View — Common

| Name                                           | Token                                                    | Value                                     |
| ---------------------------------------------- | -------------------------------------------------------- | ----------------------------------------- |
| Search view full screen container shape        | `md.comp.search-view.full-screen.container.shape`        | `md.sys.shape.corner.none`                |
| Search view header supporting text font        | `md.comp.search-view.header.supporting-text.font`        | `md.sys.typescale.body-large.font`        |
| Search view header supporting text line height | `md.comp.search-view.header.supporting-text.line-height` | `md.sys.typescale.body-large.line-height` |
| Search view header supporting text size        | `md.comp.search-view.header.supporting-text.size`        | `md.sys.typescale.body-large.size`        |
| Search view header supporting text weight      | `md.comp.search-view.header.supporting-text.weight`      | `md.sys.typescale.body-large.weight`      |
| Search view header supporting text tracking    | `md.comp.search-view.header.supporting-text.tracking`    | `md.sys.typescale.body-large.tracking`    |
| Search view header input text font             | `md.comp.search-view.header.input-text.font`             | `md.sys.typescale.body-large.font`        |
| Search view header input text line height      | `md.comp.search-view.header.input-text.line-height`      | `md.sys.typescale.body-large.line-height` |
| Search view header input text size             | `md.comp.search-view.header.input-text.size`             | `md.sys.typescale.body-large.size`        |
| Search view header input text weight           | `md.comp.search-view.header.input-text.weight`           | `md.sys.typescale.body-large.weight`      |
| Search view header input text tracking         | `md.comp.search-view.header.input-text.tracking`         | `md.sys.typescale.body-large.tracking`    |

### Search Bar — Contained (Expressive)

| Name                                                 | Token                                                          | Value |
| ---------------------------------------------------- | -------------------------------------------------------------- | ----- |
| Search bar contained pane leading margin             | `md.comp.search-bar.contained.leading-margin`                  | 24dp  |
| Search bar contained pane trailing margin            | `md.comp.search-bar.contained.trailing-margin`                 | 24dp  |
| Search bar contained motion                          | `md.comp.search-bar.contained.motion.spring`                   |       |
| Search bar contained leading space                   | `md.comp.search-bar.contained.leading-space`                   | 4dp   |
| Search bar contained trailing space                  | `md.comp.search-bar.contained.trailing-space`                  | 4dp   |
| Search bar contained no actions leading space        | `md.comp.search-bar.contained.no-actions.leading-space`        | 16dp  |
| Search bar contained no actions trailing space       | `md.comp.search-bar.contained.no-actions.trailing-space`       | 16dp  |
| Search bar contained icon label gap                  | `md.comp.search-bar.contained.icon-label.gap`                  | 4dp   |
| Search bar contained avatar target size              | `md.comp.search-bar.contained.avatar.target-size`              | 48dp  |
| Search bar contained trailing actions gap            | `md.comp.search-bar.contained.trailing-actions.gap`            | 0     |
| Search bar contained trailing actions leading space  | `md.comp.search-bar.contained.trailing-actions.leading-space`  | 4dp   |
| Search bar contained trailing actions trailing space | `md.comp.search-bar.contained.trailing-actions.trailing-space` | 4dp   |

### Search Bar — Baseline

| Name                                               | Token                                                        | Value |
| -------------------------------------------------- | ------------------------------------------------------------ | ----- |
| Search bar leading space                           | `md.comp.search-bar.leading-space`                           | 16dp  |
| Search bar trailing space                          | `md.comp.search-bar.trailing-space`                          | 16dp  |
| Search bar leading icon leading icon label space   | `md.comp.search-bar.leading-icon.leading-icon-label-space`   | 16dp  |
| Search bar trailing icon label trailing icon space | `md.comp.search-bar.trailing-icon.label-trailing-icon-space` | 16dp  |

### Search Bar — Common

| Name                                   | Token                                            | Value                                     |
| -------------------------------------- | ------------------------------------------------ | ----------------------------------------- |
| Search bar container height            | `md.comp.search-bar.container.height`            | 56dp                                      |
| Search bar container shape             | `md.comp.search-bar.container.shape`             | `md.sys.shape.corner.full`                |
| Search bar avatar size                 | `md.comp.search-bar.avatar.size`                 | 30dp                                      |
| Search bar avatar shape                | `md.comp.search-bar.avatar.shape`                | `md.sys.shape.corner.full`                |
| Search bar icon size                   | `md.comp.search-bar.icon.size`                   | 24dp                                      |
| Search bar supporting text font        | `md.comp.search-bar.supporting-text.font`        | `md.sys.typescale.body-large.font`        |
| Search bar supporting text line height | `md.comp.search-bar.supporting-text.line-height` | `md.sys.typescale.body-large.line-height` |
| Search bar supporting text size        | `md.comp.search-bar.supporting-text.size`        | `md.sys.typescale.body-large.size`        |
| Search bar supporting text weight      | `md.comp.search-bar.supporting-text.weight`      | `md.sys.typescale.body-large.weight`      |
| Search bar supporting text tracking    | `md.comp.search-bar.supporting-text.tracking`    | `md.sys.typescale.body-large.tracking`    |
| Search bar input text font             | `md.comp.search-bar.input-text.font`             | `md.sys.typescale.body-large.font`        |
| Search bar input text line height      | `md.comp.search-bar.input-text.line-height`      | `md.sys.typescale.body-large.line-height` |
| Search bar input text size             | `md.comp.search-bar.input-text.size`             | `md.sys.typescale.body-large.size`        |
| Search bar input text weight           | `md.comp.search-bar.input-text.weight`           | `md.sys.typescale.body-large.weight`      |
| Search bar input text tracking         | `md.comp.search-bar.input-text.tracking`         | `md.sys.typescale.body-large.tracking`    |

---

## Interaction States

### Search Bar

![4 search bar states in light and dark mode](https://lh3.googleusercontent.com/YhREfAtX7rK4eHN7NEAdJA3S1VPgesRkPzepAVAMJWT7aA0MSV9dxw8A248GG0PwSTS8FjyLqzorX8U4wiSSaFgvjC3mwqVRAW48XjyvexXNnA=s0)

| #   | State   | Visual Changes                                    |
| --- | ------- | ------------------------------------------------- |
| 1   | Enabled | Default appearance, surface container high        |
| 2   | Hovered | State layer overlay (on-surface at hover opacity) |
| 3   | Focused | Focus indicator ring (secondary color)            |
| 4   | Pressed | Ripple (on-surface at pressed opacity)            |

### Search Suggestions & Results

Individual list items maintain their own interaction states when search is focused.

![4 search result states in light and dark mode](https://lh3.googleusercontent.com/r1ddmkgjt_KkZZC-S8XGOaYfxyTvkqH_xLNf6MgWq89lOToWeBm5mEo8Kz2QhMxh3H_FOF_EjatnziEymAHu_ieaLrNcWfVEHkaM3AtgfOvZGQ=s0)

| #   | State   | Visual Changes               |
| --- | ------- | ---------------------------- |
| 1   | Enabled | Default list item appearance |
| 2   | Hovered | State layer on list item     |
| 3   | Focused | Focus indicator on list item |
| 4   | Pressed | Ripple on list item          |

---

## Responsive / Adaptive Design

The search bar position and alignment should scale with the layout and stay close to the searchable content:

- The bar stays within its pane and scales in width accordingly
- Internal elements anchor to left and right as the parent container scales

When focused, search should adapt between layouts:

- **Compact windows** → full-screen layout (default)
- **Medium and expanded windows** → docked layout

![Docked and full-screen layouts at different sizes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfnv4wh-25.png?alt=media&token=2b99ff8b-9274-46e4-a6a9-ea64d7b4110c=s0)

1. Docked layout on a large screen
2. Full-screen layout on a compact screen

---

## Accessibility

### Autosuggest

When search suggestions or results appear, the screen reader must announce the change so users know list items are available for selection.

![Autocomplete results for accessibility](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrjdxa-01.png?alt=media&token=aa3e6409-1ddc-4c1e-abf3-fd8b8feeb81f=s0)

### Initial Focus

Focus should land on the first interactive element:

- If a **leading icon button** is present, focus lands there
- If no leading icon, focus lands on the **text field**

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrkpb6-02.png?alt=media&token=7d04e34b-36b3-4858-a352-2e88a041d2c1=s0" /><br/>Focus on leading icon</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrl9ca-03.png?alt=media&token=28bc66bb-b098-4ef9-9065-b84a54a72406=s0" /><br/>Focus on text field (no leading icon)</td>
</tr></table>

### Keyboard Navigation

| Keys              | Action                                   |
| ----------------- | ---------------------------------------- |
| Tab / Shift + Tab | Navigate between interactive elements    |
| Space / Enter     | Activate the search text field for input |
| Arrow keys        | Navigate between search result items     |

### Labeling

- The **hinted search text** should be used as the accessibility label for the search bar
- Input field role:
  - **Android**: Text field
  - **iOS**: Search field
- Leading and trailing icon buttons should follow [icon button accessibility guidance](https://m3.material.io/components/icon-buttons/accessibility)
- Suggestions and results use the list component; screen readers automatically announce them as a list — follow [list accessibility guidelines](https://m3.material.io/components/lists/accessibility)

![Search bar with accessibility label and role](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrql4p-04.png?alt=media&token=4f1e2151-e990-4df2-8c46-96bdefa77b75=s0)

![Icon labels for leading and trailing elements](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrt6xt-05.png?alt=media&token=9676908b-e093-44a0-b913-00b638bd7e7f=s0)

![Search results using list component](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrwf25-06.png?alt=media&token=ca00ca47-b6c1-4848-9842-9d89485e98b7=s0)

### Density

All interactive elements must meet the minimum 48dp touch target size.

---

## M2 → M3 Differences

- **Color**: New color mappings with dynamic color support
- **Elevation**: Lower elevation, no shadow by default
- **Name**: "Open search bar" (M2) → "Search" (M3), with two sub-components: search bar and search view
- **Shape**: Square containers (M2) → rounded pill shape (M3)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlb1gn7s-04.png?alt=media&token=dc445e20-469e-40b2-9175-8d198effc998=s0" /><br/><b>M2:</b> Square, elevated search bars</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlb1hcrs-05.png?alt=media&token=ae55f13c-75fb-4b39-bc09-f503ea5b156a=s0" /><br/><b>M3:</b> Rounded, tonal surface, dynamic color</td>
</tr></table>

### M3 Expressive Update (February 2025)

- **Naming**: Search bar and search view are now collectively called "search"
- **Styles**: Contained (recommended) and divided configurations
- **Gaps**: Results can be separated into groups using gaps
- **Motion**: Search bar grows wider when focused (expressive spring animation)
- **Trailing icons**: More flexibility for trailing icon arrangements

## Availability & Resources

| Type           | Resource                    | Status      |
| -------------- | --------------------------- | ----------- |
| Design         | Figma Design Kit            | Available   |
| Implementation | MDC-Android                 | Available   |
|                | MDC-Android Expressive      | Unavailable |
|                | Flutter                     | Available   |
|                | Jetpack Compose             | Available   |
|                | Jetpack Compose: Expressive | Available   |
|                | Web                         | Unavailable |
|                | Web: Expressive             | Unavailable |
