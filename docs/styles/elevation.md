# Elevation — M3 Style Reference

> Elevation measures the distance between two surfaces along the z-axis in density-independent pixels (dps), determining spatial hierarchy and visual prominence.

Sources: [Overview](https://m3.material.io/styles/elevation/overview) · [Applying Elevation](https://m3.material.io/styles/elevation/applying-elevation) · [Tokens](https://m3.material.io/styles/elevation/tokens)

---

## Elevation Levels

M3 uses six elevation levels. Each level has a fixed dp value representing relative distance above the UI surface. Levels 0–3 are available as resting states; levels 4–5 are reserved for interactive states (hover, drag).

| Level | DP Height | Usage                               |
| ----- | --------- | ----------------------------------- |
| 0     | 0dp       | Resting — flat on surface           |
| 1     | 1dp       | Slight lift above surface           |
| 2     | 3dp       | Moderate elevation                  |
| 3     | 6dp       | Prominent elevation                 |
| 4     | 8dp       | Interactive state only (e.g. hover) |
| 5     | 12dp      | Interactive state only (e.g. drag)  |

![Diagram showing the 5 elevation levels and their respective dp values.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwyl8vgl-1.png?alt=media&token=d090e3a9-52f9-46c7-b341-3bd6ea781fdd=s0)

Elevation tokens are platform-agnostic — they carry no inherent shadow or color. Each platform determines how to visually express each level (shadows, tonal fills, etc.).

### Key Principles

- Every surface and component has a default resting elevation — avoid changing it
- Use as few elevation levels as possible; constraint makes each level more meaningful
- Components raise by one level on hover/focus (e.g. FAB goes from level 3 → level 4)
- Elevation changes should be consistent across all similar elements

![1 diagram shows a light purple square and a darker purple square. A second one shows a side view of the squares in elevation, showing that the light square is lower in elevation than the dark square.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykafum-1.png?alt=media&token=686eda7a-aed0-4d34-a749-0b01f2a50a86=s0)

1. One surface at 1dp and another at 8dp, viewed from the front
2. The 7dp difference between them, viewed from the side

---

## Differences from M2

- **Shadows**: M2 applied shadows at every level by default. M3 uses shadows only when needed for protection or to encourage interaction.
- **Color**: M3 introduces new color mappings compatible with dynamic color, using tonal surface fills as the primary elevation indicator.
- **Levels**: Elevation is now described as discrete levels (0–5) rather than arbitrary dp values.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykc8yv-2.png?alt=media&token=7c4a4e4e-ff37-47d2-a375-579c3f945893=s0" /><br/><b>M2:</b> Shadows applied at all levels</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykckey-3.png?alt=media&token=fd1c5548-7048-4d2c-9123-17308e339731=s0" /><br/><b>M3:</b> Tonal color replaces shadows as the default elevation indicator</td>
</tr></table>

---

## Depicting Elevation

Elevation can be communicated through tonal surface fills, shadows, or scrims. A successfully depicted elevation must show:

1. **Surface edges** — contrast between the surface and its surroundings
2. **Overlap** — one surface visually on top of another, at rest or in motion
3. **Distance** — perceived separation between surfaces

![3 images. The first shows a violet square overlapping a white square. The second shows 2 overlapping squares with the same color, but with shadows beneath the top square. The third shows a violet square overlapping a dark gray square.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwyl9cz5-2.png?alt=media&token=731fe08f-ab2d-4a21-9ee1-2e963425c39a=s0)

1. Two overlapping surfaces separated by distinct tonal values
2. Two same-toned surfaces separated by shadow
3. Two same-toned surfaces separated by scrim

### Tonal Difference

M3 surfaces use tonal difference as the default elevation indicator. Tonal variation between adjacent surfaces communicates where one ends and another begins — for example, an app bar separated from a scrolling grid list.

Other edge-separation methods include drop shadows and scrims.

![Elevation, scrim, and tonal differences used to indicate separation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwynetr7-3.png?alt=media&token=d733e384-21d7-432c-a68d-917f362b91a2=s0)

1. A FAB's elevation separates it from body content
2. A scrim behind a modal communicates importance
3. Tonal difference between a navigation bar and body content indicates separate surfaces

Interactive components must have sufficient contrast between surfaces (meeting or exceeding accessibility contrast ratios) to be perceived as separate.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwynhr1z-5_do.png?alt=media&token=a4718cb7-4b12-442d-a48a-1baab845cc2f=s0" /><br/><b>Do:</b> Floating elements should have sufficient contrast with the surface beneath them</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwyni1qa-4_dont.png?alt=media&token=82bf3fa0-c8a8-48df-b10c-1b5c265cdc20=s0" /><br/><b>Don't:</b> Insufficient contrast obscures the relationship between surfaces</td>
</tr></table>

### Surface Color Roles

Surface and surface-container color roles provide flexibility for defining containment areas. These roles are independent of elevation level. Overlapping containment areas or components should use different color roles to communicate visual separation. [More on surface color roles](https://m3.material.io/m3/pages/color-roles/tab-1#89f972b1-e372-494c-aabc-69aea34ed591)

![Diagram of email home screen with "1" indicating the list item background color and "2" indicating the navigation bar background color.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwynjnhh-6.png?alt=media&token=9e184a9c-6448-4ef4-9bea-c512f807b8d9=s0)

1. Surface
2. Surface container

---

## Shadows

Shadows convey the degree of distance between surfaces through size and diffusion. Smaller, sharper shadows suggest close proximity; larger, softer shadows suggest greater distance.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwynkcgy-7.png?alt=media&token=faa5a587-cb71-4402-b4e3-5c7c598fc84f=s0" /><br/>Smaller, sharper shadows — close proximity</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwynkpp5-8.png?alt=media&token=97f08517-0310-4ac0-bfdd-e76abf2a451b=s0" /><br/>Larger, softer shadows — greater distance</td>
</tr></table>

Use shadows sparingly. The fewer shadow levels in a UI, the more power each one has to direct attention.

### When to Use Visible Shadows

#### Protect Elements

When the background is patterned or visually busy, tonal difference alone may not provide sufficient separation. Use shadows to protect and emphasize elements like cards, chips, or buttons against complex backgrounds.

![Buttons with shadows separating them from a background image.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwynle77-9.png?alt=media&token=da60b0e7-2216-4d40-bbab-d5359875d09c=s0)

#### Encourage Interaction

Elements can temporarily lift on focus, selection, or other interactions (e.g. swipe). A raised element may also lower when a higher-priority element appears.

---

## Scrims

Scrims focus attention on specific elements by darkening the surface behind them, increasing visual contrast for large layered surfaces. Use scrims beneath modals, expanded navigation menus, and similar overlays.

- **Color role**: `scrim`
- **Opacity**: 32%

![Large screen news app with a navigation rail separated from the body content by a scrim.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwynlv1e-11.png?alt=media&token=a29315d8-497f-4376-8018-f661ea795b3a=s0)

---

## Surfaces and Components

Surfaces at different elevations serve three purposes:

1. **Layering** — surfaces move in front of or behind others (e.g. content scrolling behind an app bar)
2. **Spatial relationships** — elevation communicates separation (e.g. a FAB's shadow distinguishes it from a card collection)
3. **Focus** — the highest-elevated surface draws attention (e.g. a dialog appearing above all other content)

![A floating action button with a shadow.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykcxkh-5.png?alt=media&token=d0b226cf-0e17-4719-9f5c-8a186936d003=s0)

All components have a default resting elevation — use it as-is.

---

## Component Elevation Map

Component elevation determines stacking order relative to other components. On hover or focus, components typically raise by one level. Elevation carries no shadow by default.

| Resting Level | DP   | Components                                                                                                                                                                                                                                                                                                                            |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5             | 12dp | _(not assigned as resting level)_                                                                                                                                                                                                                                                                                                     |
| 4             | 8dp  | _(not assigned as resting level)_                                                                                                                                                                                                                                                                                                     |
| 3             | 6dp  | Date pickers, Dialogs (modal), Extended FAB, FAB, FAB menu (close button), Search, Time pickers                                                                                                                                                                                                                                       |
| 2             | 3dp  | App bar (scrolled), Menu, Navigation bar, Rich tooltip, Toolbar                                                                                                                                                                                                                                                                       |
| 1             | 1dp  | Banner, Bottom sheet (modal), Button (elevated), Card (elevated), Chips (elevated), Navigation drawer (modal), Side sheet (modal)                                                                                                                                                                                                     |
| 0             | 0dp  | App bar (not scrolled), Buttons (filled, tonal, outlined), Button groups, Cards (filled, outlined), Carousel, Chips, Dialog (full-screen), Extended FAB (in navigation rail), FAB (in navigation rail), FAB menu (list items), Icon buttons, List, Navigation rail, Segmented button, Side sheet (docked), Slider, Split button, Tabs |

---

## Elevation Tokens

Elevation levels are implemented via design tokens. Surface tint color is deprecated — use elevation level tokens (0–5) instead.

| Token                     | Value |
| ------------------------- | ----- |
| `md.sys.elevation.level0` | 0dp   |
| `md.sys.elevation.level1` | 1dp   |
| `md.sys.elevation.level2` | 3dp   |
| `md.sys.elevation.level3` | 6dp   |
| `md.sys.elevation.level4` | 8dp   |
| `md.sys.elevation.level5` | 12dp  |

[Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

---

## Availability & Resources

|                | Resource                                                                                                                                                                     | Status    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Design         | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460)                                                                                               | Available |
| Implementation | [Flutter](https://api.flutter.dev/flutter/material/ElevationOverlay-class.html)                                                                                              | Available |
|                | [Jetpack Compose](https://developer.android.com/develop/ui/compose/designsystems/material3)                                                                                  | Available |
|                | [MDC - Android](https://github.com/material-components/material-components-android/blob/d56070586102b66486f7f8697de077c3d7689922/docs/theming/Color.md#using-surface-colors) | Available |
|                | [MWC - Web](https://github.com/material-components/material-web/blob/919fe12badcfee4dcd72c390c0869dd8f996b51c/docs/components/elevation.md)                                  | Available |
