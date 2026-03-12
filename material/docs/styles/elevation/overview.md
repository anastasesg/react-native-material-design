---
url: https://m3.material.io/styles/elevation/overview
crawled_at: 2026-02-02T00:00:00.000Z
category: styles
section: elevation
page_type: overview
status: complete
---

# Elevation

Elevation is the distance between two surfaces on the z-axis

- Elevation is applied to all surfaces and components
- Tokens codify the distance on the z-axis to ensure components appear consistently relative to each other
- Tokens have no shadows or color; each platform determines the specific shadows and values to use at each elevation level
- Elevation can be shown as tonal surface colors or shadows
- Avoid changing the default elevation of Material 3 components
- Stick to using a small amount of elevation levels

**Elevation is measured as the distance between components along the z-axis in density-independent pixels (dps).**

![Two side-by-side diagrams. One showing a light purple square and a darker purple square. The second showing a side view of the squares in elevation, showing that the light square is lower in elevation than the dark square.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykafum-1.png?alt=media&token=686eda7a-aed0-4d34-a749-0b01f2a50a86=s0)

_Elevation represents the distance between elements. The product applies color to represent elevation._

- One surface at 1dp elevation and another surface at 8dp elevation, as viewed from the front
- The difference in elevation between the two surfaces is 7dp, as viewed from the side.

## Resources

|  | Resource | Status |
| --- | --- | --- |
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Available |
|  | Jetpack Compose | Available |
|  | MDC - Android | Available |
|  | MWC - Web | Available |

## Differences from M2

- Shadows: Instead of applying shadows by default to all levels, use shadows only when required to create additional protection against a background or to encourage interaction
- Color: New color mappings and compatibility with dynamic color
- Levels: Elevation is now described in terms of levels

![Diagram of two concentric squares. The inner square is at 12dp and has a larger shadow than the outer square, which is at 3dp.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykc8yv-2.png?alt=media&token=7c4a4e4e-ff37-47d2-a375-579c3f945893=s0)

_M2: Shadows applied at all levels_

![Diagram of two concentric squares without shadows. Instead, the inner square is at level and tonally darker than the outer square, which is at level 2.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykckey-3.png?alt=media&token=fd1c5548-7048-4d2c-9123-17308e339731=s0)

_M3: Using color instead of shadows to communicate elevation_

## All surfaces and components have elevation values

Surfaces at different elevations do the following:

1. Allow surfaces to move in front of and behind other surfaces, such as content scrolling behind app bars
2. Reflect spatial relationships, such as how a FAB's shadow indicates it is separate from a card collection
3. Focus attention on the highest elevation, such as a dialog temporarily appearing in front of other surfaces

_Elevation can be depicted using shadows or other visual cues, such as surface fills with a tone difference_

### Resting elevation (default)

All components have a default resting elevation. Avoid changing the default elevation of Material components.

![A floating action button with a shadow.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykcxkh-5.png?alt=media&token=d0b226cf-0e17-4719-9f5c-8a186936d003=s0)

_All components have a default elevation which should be used_

### Changing elevation

Components should change elevation in response to system events or user interaction, like hovering. This elevation change should be consistent across all similar elements.

For example, hovering a FAB temporarily increases the elevation by 1 level, from level 3 to level 4. All Material buttons increase elevation by 1 level when hovered.

_Hovering over a button increases its elevation to show user interaction_
