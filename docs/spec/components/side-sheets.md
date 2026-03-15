# Side Sheets — M3 Component Reference

> Side sheets show secondary content anchored to the side of the screen.

Sources: [Overview](https://m3.material.io/components/side-sheets/overview) · [Specs](https://m3.material.io/components/side-sheets/specs) · [Guidelines](https://m3.material.io/components/side-sheets/guidelines) · [Accessibility](https://m3.material.io/components/side-sheets/accessibility)

---

## Variants

![The 2 variants of side sheets.](https://lh3.googleusercontent.com/5DQn6-h3w6BIR9DoXAncCck22WNg-86e7uh4meG22SsqcvVMb966220Fp-Ooiwui3eekiqk8p_Uq9BpNZ4wUYSQFPwovt6b_fOdpiU008vQ0Lw=s0)

| Variant      | Description                                                                                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Standard** | Remains visible alongside primary content. People can interact with both the sheet and the main content simultaneously. Best suited for medium to expanded window sizes (tablet, desktop). |
| **Modal**    | Must be dismissed before interacting with the underlying content. Includes a scrim overlay. Preferred for compact window sizes (mobile).                                                   |

1. Standard side sheet
2. Modal side sheet

![Side by side comparison of a standard and a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqqqohk-01.png?alt=media&token=51d3df6c-574b-4aaf-bd7a-b70c47c82c6a=s0)

---

## Anatomy

### Standard side sheet

![4 elements of a standard side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrqfpt-06.png?alt=media&token=b39ae6aa-ee8b-45cb-9d9b-c3aab1f16a67=s0)

1. **Divider** (optional) — vertical line separating the sheet from primary content
2. **Headline** — title text describing the sheet's purpose
3. **Container** — holds all sheet elements; the only required element
4. **Close icon button** (optional but highly recommended) — dismisses the sheet

### Modal side sheet

![7 elements of a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrrjh7-07.png?alt=media&token=989dc9f2-073d-4b86-8889-02ea9651aaf1=s0)

1. **Back icon button** (optional) — navigates to a previous view within the sheet
2. **Headline** — title text
3. **Container** — holds all sheet elements
4. **Close icon button** (optional but highly recommended) — dismisses the sheet
5. **Divider** (optional) — separates content regions or action buttons from content
6. **Action buttons** (optional) — actions such as Save, Edit, Download
7. **Scrim** — semi-transparent overlay behind the modal sheet

---

## Usage & When to Use

Standard side sheets display supplementary content that complements the main screen. They remain visible while people interact with primary content. Common uses include:

- Displaying a list of actions that affect the screen's primary content, such as filters
- Displaying supplemental content and features (e.g., photo details, settings)

![Standard side sheet showing supplementary information about a photo.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqr6mnd-02.png?alt=media&token=8c90dc20-b3b0-4725-9130-ba118c870255=s0)

Modal side sheets are preferred on compact screens due to limited space. They can display the same kinds of content as standard side sheets but must be dismissed before interacting with the underlying content.

![Modal side sheet showing filter controls.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrab5f-03.png?alt=media&token=0729930f-cd91-430a-ad7a-3c74997f4771=s0)

Side sheets have a fixed width and typically span the full height of the screen. Their dimensions depend on how the app's layout is subdivided into UI regions.

---

## Sub-elements

### Container

The container holds all side sheet elements. Its size is determined by the space those elements occupy. The container is the only required element.

![A modal side sheet's container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsampe-08.png?alt=media&token=6de272f2-1434-4002-8037-f40e904d54b8=s0)

### Back icon button (optional)

Provides a way to navigate to a previous view within the sheet or exit the sheet entirely. Because the primary content behind or beside a side sheet is always visible, it is important to provide clear affordances for leaving the sheet.

![Back icon button on the upper left of a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsgqgs-09.png?alt=media&token=77f536ad-a501-4715-9655-d5b7fdcab733=s0)

### Close icon button (optional)

A close affordance provides a consistent method for dismissing a side sheet. A close icon button is highly recommended — it increases accessibility and makes focused side sheets easier to close.

![Close icon button on the upper right of a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsns8t-10.png?alt=media&token=94c3975a-172e-42aa-b2ab-a335f9c9e858=s0)

### Action buttons (optional)

Buttons represent actions available from the sheet (e.g., Save, Edit, Download). Use elevation, fill, and tone to call attention to specific actions.

![Save and cancel buttons at the bottom of a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsw3fe-11.png?alt=media&token=4452e717-8e08-4dc3-b1aa-a63252feeae1=s0)

### Divider (optional)

Dividers separate different kinds of content and create distinct regions. Use a divider to separate:

- Action buttons from content
- User-generated content from system-generated content

![Horizontal divider on a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsz2ma-12.png?alt=media&token=7c14f328-775a-4c98-9513-1600f48affbe=s0)

### Content (optional)

Side sheets can display a wide variety of content and layouts, from lists of actions to supplemental content in tabular format.

![2 side sheets with different content displayed side by side.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqt0pai-13.png?alt=media&token=9a10a8aa-ec40-4657-9bd9-b0447cbbb01e=s0)

---

## Placement

Side sheets are placed along the edge of the screen, usually on the right side to avoid interference with navigational components on the left edge. They can be slightly inset by 16dp.

<table>
<tr>
<td>

![A modal sheet at the right of a screen, with the correct inset.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrlvws-04-do.png?alt=media&token=1a29c903-cb7f-4b43-917f-8a584edc828b=s0)

**Do:** Place side sheets along the screen edge, usually on the right. They can be slightly inset by 16dp.

</td>
<td>

![A modal side sheet at the right of the screen with the wrong inset.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrngv8-05-don't.png?alt=media&token=6167c058-b004-42fb-a408-c1f3f8bdea12=s0)

**Don't:** Don't inset a side sheet far beyond the recommended margin. This makes the sheet's position and scroll behavior unclear while obscuring primary content.

</td>
</tr>
</table>

---

## Behavior

### Scrolling

Side sheets can vertically scroll independent of the rest of the UI. This allows their scroll position and content to persist while the page is scrolled, and vice versa. Side sheets cannot scroll horizontally.

The vertical scroll should be enabled when sheet content exceeds the available screen height.

![A side sheet appears to scroll horizontally.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw8z3x56-19_don't.png?alt=media&token=b2f8c1b7-ea55-4f8a-b3de-6b9b51be72f9=s0)

**Don't:** Don't allow horizontal scrolling or lay out the side sheet in a way that suggests horizontal scrolling. A side sheet's narrow width leaves limited space to fully view items.

### Standard sheet entrance

When a standard side sheet opens, the body area shrinks to accommodate the sheet's width while maintaining a margin on the body's trailing edge.

### Predictive back (Android)

On Android, predictive back allows a person to swipe left or right on the side sheet. When used:

- The side sheet detaches from the top and bottom edges of the screen to signal it will close
- The previous screen is revealed in a preview
- The side sheet and its content always scale in the direction of the gesture

---

## Measurements

### Standard side sheet

![Standard side sheet padding and size measurements.](https://lh3.googleusercontent.com/2LAblBbcF_ZBcupC3Q2aXZlYse3imp3Y1ePIVfC3DY5iefsYPzFRDPu20wDJmkgcAxlpprO9NpnBwJdHjBTiA32q7BduBlHaREVzxLLbrKkDwA=s0)

| Attribute                             | Value |
| ------------------------------------- | ----- |
| Start/end padding                     | 24dp  |
| Padding between top elements          | 12dp  |
| Bottom actions height                 | 72dp  |
| Bottom actions top padding            | 16dp  |
| Bottom actions bottom padding         | 24dp  |
| Bottom actions alignment (horizontal) | Left  |
| Max-width                             | 400dp |
| Margins (when detached)               | 16dp  |

### Modal side sheet

![Modal side sheet padding and size measurements](https://lh3.googleusercontent.com/ggmDZsvw6x0ei4ktaEtZbG_D-SvR-dKw59udjcKCr7KdED37SNpjgIxFdBL6ySJrdglC7AeXbchojJM7pgxlhcVmcXVp26aCBCmnQ1utyjDL=s0)

| Attribute                             | Value |
| ------------------------------------- | ----- |
| Start/end padding                     | 24dp  |
| Start padding with icon               | 16dp  |
| Padding between top elements          | 12dp  |
| Bottom actions height                 | 72dp  |
| Bottom actions top padding            | 16dp  |
| Bottom actions bottom padding         | 24dp  |
| Bottom actions alignment (horizontal) | Left  |
| Max-width                             | 400dp |
| Margins (when detached)               | 16dp  |

---

## Color Tokens

### Container

| Name                                                 | Token                                                          | Value                                |
| ---------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------ |
| Sheet side docked container color                    | `md.comp.sheet.side.docked.container.color`                    | `md.sys.color.surface`               |
| Sheet side docked modal container color              | `md.comp.sheet.side.docked.modal.container.color`              | `md.sys.color.surface-container-low` |
| Sheet side docked standard container color           | `md.comp.sheet.side.docked.standard.container.color`           | `md.sys.color.surface`               |
| Sheet side docked container surface tint layer color | `md.comp.sheet.side.docked.container.surface-tint-layer.color` | `md.sys.color.surface-tint`          |
| Sheet side docked modal container elevation          | `md.comp.sheet.side.docked.modal.container.elevation`          | `md.sys.elevation.level1`            |
| Sheet side docked standard container elevation       | `md.comp.sheet.side.docked.standard.container.elevation`       | `md.sys.elevation.level0`            |
| Sheet side docked container height                   | `md.comp.sheet.side.docked.container.height`                   | 100%                                 |
| Sheet side docked container shape                    | `md.comp.sheet.side.docked.container.shape`                    | `md.sys.shape.corner.none`           |
| Sheet side detached container shape                  | `md.comp.sheet.side.detached.container.shape`                  | `md.sys.shape.corner.large`          |
| Sheet side docked container width                    | `md.comp.sheet.side.docked.container.width`                    | 256dp                                |
| Sheet side docked modal container shape              | `md.comp.sheet.side.docked.modal.container.shape`              | `md.sys.shape.corner.large.start`    |

### Standard side sheet color

![4 color roles applied to a side sheet in light and dark themes.](https://lh3.googleusercontent.com/LqFhUoIZJCxI-xrg-swaOn2vwlyswPNvs2JQfS2oNHhVms4yvkJE1tCBaFLUxKH_B-NWUoZ9Wo5QF2x437thBA0uzYeoBxeJ2NMWg2jmqbgL=s0)

1. Outline variant
2. On surface variant
3. Surface
4. On surface variant

### Modal side sheet color

![4 color roles applied to a modal side sheet in light and dark themes.](https://lh3.googleusercontent.com/MCbwK4pOf-VBkCt3qXBvBVReNnD3TzDuwLJdajh_CvxUT_TN3_5Ho5v3QyV0SHhv5IHbZP0V5UbCSy8rXaQFJ79cocKme0PSXGWzZT5HUvU=s0)

1. On surface variant
2. On surface variant
3. Surface container low
4. On surface variant

### Headline

| Name                                   | Token                                            | Value                                      |
| -------------------------------------- | ------------------------------------------------ | ------------------------------------------ |
| Sheet side docked headline color       | `md.comp.sheet.side.docked.headline.color`       | `md.sys.color.on-surface-variant`          |
| Sheet side docked headline font        | `md.comp.sheet.side.docked.headline.font`        | `md.sys.typescale.title-large.font`        |
| Sheet side docked headline line height | `md.comp.sheet.side.docked.headline.line-height` | `md.sys.typescale.title-large.line-height` |
| Sheet side docked headline size        | `md.comp.sheet.side.docked.headline.size`        | `md.sys.typescale.title-large.size`        |
| Sheet side docked headline tracking    | `md.comp.sheet.side.docked.headline.tracking`    | `md.sys.typescale.title-large.tracking`    |
| Sheet side docked headline weight      | `md.comp.sheet.side.docked.headline.weight`      | `md.sys.typescale.title-large.weight`      |
| Sheet side docked headline type style  | `md.comp.sheet.side.docked.headline.type`        | Aa                                         |

### Divider

| Name                            | Token                                     | Value                  |
| ------------------------------- | ----------------------------------------- | ---------------------- |
| Sheet side docked divider color | `md.comp.sheet.side.docked.divider.color` | `md.sys.color.outline` |

---

## Interaction States

### Hovered / Label text

| Name                                            | Token                                                     | Value                  |
| ----------------------------------------------- | --------------------------------------------------------- | ---------------------- |
| Sheet side docked action hover label text color | `md.comp.sheet.side.docked.action.hover.label-text.color` | `md.sys.color.primary` |

### Hovered / State layer

| Name                                               | Token                                                        | Value                                    |
| -------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Sheet side docked action hover state layer color   | `md.comp.sheet.side.docked.action.hover.state-layer.color`   | `md.sys.color.primary`                   |
| Sheet side docked action hover state layer opacity | `md.comp.sheet.side.docked.action.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

### Focused / Focus indicator

| Name                                        | Token                                                      | Value                                       |
| ------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------- |
| Sheet side docked focus indicator color     | `md.comp.sheet.side.docked.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Sheet side docked focus indicator thickness | `md.comp.sheet.side.docked.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Sheet side docked focus indicator offset    | `md.comp.sheet.side.docked.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

### Focused / Label text

| Name                                            | Token                                                     | Value                  |
| ----------------------------------------------- | --------------------------------------------------------- | ---------------------- |
| Sheet side docked action focus label text color | `md.comp.sheet.side.docked.action.focus.label-text.color` | `md.sys.color.primary` |

### Focused / State layer

| Name                                               | Token                                                        | Value                                    |
| -------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Sheet side docked action focus state layer color   | `md.comp.sheet.side.docked.action.focus.state-layer.color`   | `md.sys.color.primary`                   |
| Sheet side docked action focus state layer opacity | `md.comp.sheet.side.docked.action.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

### Pressed / Label text

| Name                                              | Token                                                       | Value                  |
| ------------------------------------------------- | ----------------------------------------------------------- | ---------------------- |
| Sheet side docked action pressed label text color | `md.comp.sheet.side.docked.action.pressed.label-text.color` | `md.sys.color.primary` |

### Pressed / State layer

| Name                                                 | Token                                                          | Value                                      |
| ---------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| Sheet side docked action pressed state layer color   | `md.comp.sheet.side.docked.action.pressed.state-layer.color`   | `md.sys.color.primary`                     |
| Sheet side docked action pressed state layer opacity | `md.comp.sheet.side.docked.action.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

---

## Responsive / Adaptive Design

Side sheets have a default width of 256dp but can be resized depending on the needs of the layout, up to a max-width of 400dp. When a standard side sheet opens, the body area shrinks to accommodate the sheet's width while maintaining a margin on the body's trailing edge.

On smaller screens, modal side sheets should be used instead of standard side sheets. As the window grows from compact to medium/expanded, a modal side sheet can transition to a standard side sheet.

### RTL language support

In right-to-left (RTL) languages, side sheets should appear on the left edge of the window with all elements reversed.

![Side sheet along the left edge of a screen. All buttons and icons are reversed.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqwb27c-16.png?alt=media&token=5b9ae114-f5ae-4f03-ada2-88ffe3f7f5c1=s0)

---

## Accessibility

### Use cases

People should be able to dismiss the side sheet using assistive technology.

### Close affordance

A close icon button must always be present within a side sheet. Without it, people cannot predict the opening and closing flow of side sheets, or know if the sheet is transient or permanent.

<table>
<tr>
<td>

![Side sheet correctly designed with close icon in upper right corner.](https://lh3.googleusercontent.com/0LSf0hnC19HAyDDf88fqzUUo62971bFb2XWjHguURc3jJbZpy8ejGuIyFR-2MSFM27gLA3LjupVjSj8E5kEuDJG7IqeHD17NaXUOXKsEHdP8=s0)

**Do:** A close icon button makes the side sheet easy to dismiss.

</td>
<td>

![Side sheet incorrectly designed with no close icon button.](https://lh3.googleusercontent.com/bGugN52A6j4bvI4smHp21cQzZbZv4qaF9YBYdKZDD51XL6yAkHSY_KVtpUF7HkL6G04T2w61MQeJo-E8SqmPJx6OuO9YMeBqpjP7AOhc_yNi=s0)

**Don't:** Without a close icon button, people can't predict the opening and closing flow or know if the sheet is transient or permanent.

</td>
</tr>
</table>

### Initial focus

Actions within a side sheet can be focused by tab order using a keyboard or switch control.

![Side sheet diagram showing the focus order of headline, close, save, cancel.](https://lh3.googleusercontent.com/MuS9aCeC3P_ukbbopUpL7M9rV8VhBbirg3UofV-_SA7g-v4ABLSE8zgMWQOlHo7WP5XEd7s-KyR15aPB360mGPFofc_F3uKb1Sy7iQ8iOZ0dGA=s0)

1. Headline
2. Close
3. Cancel
4. Save

### Keyboard navigation

| Keys           | Actions                                   |
| -------------- | ----------------------------------------- |
| Tab            | Focus lands on (non-disabled) icon button |
| Space or Enter | Activates the (non-disabled) icon button  |

### Labeling

The accessibility role for a side sheet is **Dialog**.

![Side sheet showing the accessibility role as dialog.](https://lh3.googleusercontent.com/ogti7RlWzhZNIER0PGHxR2hM--wMncqBhexq_aLUiY6OPM1C5NeuaWV29SOOqi5gjdr7dGbCFrlPMnQ2hX5pgrWhVUrQVhUmESeeg09ZQhdB=s0)

---

## M2 to M3 Differences

- **RTL support**: Right-to-left language support with left side sheet placement
- **Color**: New color mappings and compatibility with dynamic color
- **Shape**: Modal side sheets have a 16dp corner radius (`md.sys.shape.corner.large.start`)

![A modal side sheet showing the 16dp corner radius.](https://lh3.googleusercontent.com/NcjJRXvRM56DuF0hrulvw3eixw8QXtodshjuhM6OgLXuC54E06Ov7JGxPSynfQiwGnaQspHgMps2all60Y81-oRaznUym7yDF1bg53VC-so8ag=s0)
