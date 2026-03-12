---
url: https://m3.material.io/components/navigation-rail/xr
crawled_at: 2026-02-04T00:00:00.000Z
category: components
section: navigation-rail
page_type: xr
status: complete
---

# Navigation rail

Navigation rails let people switch between UI views on mid-sized devices

> **Note:** This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what's implemented in code in the [design kit](https://www.figma.com/design/cVjQvQ0moD8wkPWH2rn2c6/XR?node-id=294149-10229&t=AFAz42CCMXa5470T-4).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has XR-specific navigation rails with custom specs and guidance. See [XR developer documentation](http://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Variants

There are two variants of navigation rail orbiters: the contained FAB and spatialized FAB navigation rails.

![Navigation bar orbiters with a contained FAB and a spatialized FAB.](https://lh3.googleusercontent.com/dPJqjYJCk9bPHeSRMvYPWuDtexUzZDMRBk6vNciqpu5z0dQG30QbaVle64vcI2dusE8aqPEUqFra47gf6R870mBGAhYghroP90OYqWugm180=s0)

1. Contained FAB rail
2. Spatialized FAB rail

## Anatomy

![Diagram of navigation rail orbiter identifying 9 internal elements of the component.](https://lh3.googleusercontent.com/rU4TAGNiKzJj6z-L-jcKcfsZTlzzuIycA30T85HGQ_JyBo49apcjkI9TKY5yvPo4-heaO-X5nfrETlyizfZ9_FlQaV-z9BZQFNZ1S7N-MP-y=s0)

1. Container
2. Active indicator
3. Large badge (optional)
4. Badge (optional)
5. Large badge label (optional)
6. Label text
7. Icon
8. Embedded or spatialized FAB (optional)
9. Menu icon (optional)

## Color & elevation

On XR, color is used to highlight elevated UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the navigation bar displays above the spatial panel, on the Z-axis. Color communicates elevation on UI elements and orbiters. Elevated nav rails can use any of these color options:

![4 versions of elevation color strategy.](https://lh3.googleusercontent.com/M6OH6zh7_zTrkS1zUDj-eceTyjgUMahrpEPl6WDJMMAuoODDcaGHDbMtZDzxApkri7IjSHwtCZnBxQnucLJCwA_zJawPO2gSn5i8Qo7-DxNp=s0)

1. Surface container with tertiary FAB
2. Surface container high with tertiary fixed dim FAB
3. Surface container highest with tertiary fixed dim FAB
4. Tertiary container with primary FAB

## Measurements

![Measurements and padding for navigation rail orbiter with contained FAB.](https://lh3.googleusercontent.com/rLe0xRyUvCeR1tXOPjPJ-hELWYJVzjkIMhHriNOGkHBiJEzAGt7hAMOrn9O5uGpAapq6A1uzhFSbP9u7GChXoBzMVpGj-MJ_q72tJBrP0X0avA=s0)

_Navigation rail orbiter padding and measurements with contained FAB_

![Measurements and padding for navigation rail orbiter with spatialized FAB.](https://lh3.googleusercontent.com/VGWnkF5eQPdJ2RNo4C0VAmVigdGhBqswyXKAYq0cQgHfCPwPFHm7JKlRPkOgAHxPTtww-Wmm2TnRan4iae_giCyC0KgU76nsh_2z6K2-lW-7=s0)

_Navigation rail orbiter padding and measurements with spatialized FAB_

## Usage

In full space, a navigation rail can appear in an orbiter for a more immersive experience. Currently, spatial capabilities, such as orbiters, are only available in full space. In home space, use a regular navigation rail on the same plane as the body content to mimic a 2D experience.

<!-- Video: Navigation rail orbiter behavior and placement changing when going from a 2D to a 3D experience -->

## Behavior

### Global context

Intended for global navigation, a nav rail orbiter should be centered along the left or right edge of the app it controls. It stays anchored to the app during layout or content changes to ensure controls are easy to find.

<!-- Video: Do - A navigation rail orbiter should be placed in global context, centered and anchored to the left or right of the app -->

### Local context

Don't place a navigation rail orbiter in local context or between spatial panels. Local placement can make controls hard to find. Nav rails are designed for app-level navigation, so should only use the global context.

<!-- Video: Don't - Avoid placing a navigation rail orbiter in local context. It can be hard to find if placed between two spatial panels. -->

## Placement

### Navigation context

The position of the navigation rail orbiter should communicate its navigational context:

- Use **offset positioning** for global actions that affect the overall app experience
- Use **inset positioning** for local actions that are specific to a spatial panel

A navigation rail orbiter can either overlap or be positioned adjacent to spatial panels with a 20dp margin for visual separation.

<!-- Video: Position the navigation rail orbiter to reflect context: offset for global actions, inset for spatial panel-specific actions -->

### Inset positioning

Don't obstruct content. To ensure a balanced and uncluttered layout, a navigation rail orbiter should overlap spatial panels by 12dp and no more than half their width.

<!-- Video: Don't - Avoid overlapping an inset navigation rail orbiter by more than half its width -->

### Vertical alignment

A navigation rail orbiter can be aligned to the top, middle, or center of spatialized panels, providing different levels of visual prominence and accessibility. Align the navigation rail orbiter based on the specific design and user experience goals for the application.

<!-- Video: Align the navigation rail orbiter at the top, middle, or center of spatialized panels -->

The navigation rail orbiter placement shouldn't exceed the height of adjacent spatial panels.

<!-- Video: Don't - The navigation rail orbiter shouldn't exceed the height of the spatial panel -->

### Spatial panel alignment

Avoid placing a navigation rail orbiter between spatial panels. This negatively affects the interface structure. For layouts that span more than two spatial panels, consider using a navigation bar orbiter.

<!-- Video: Don't - Don't place a navigation rail orbiter between spatial panels -->

## Spatialized FAB

There are two variants of navigation rail orbiters with different FAB treatments:

- **Contained FAB rail:** A contained FAB within the rail. This offers a compact and familiar layout.
- **Spatialized FAB rail:** The FAB becomes an orbiter of its own and is placed outside the navigation rail orbiter. Use this for higher emphasis and a distinct spatial effect.

Use the spatialized FAB rail to emphasize key actions and leverage XR hierarchy. Use the contained FAB rail to be more subtle, and align the experience with the baseline navigation bar.

<!-- Video: Choose between a navigation rail orbiter with a contained FAB or a spatialized FAB -->

To maintain visual association, place the spatialized FAB in close proximity to the navigation rail orbiter. Material recommends a 20dp margin. The spatialized FAB can be placed above or below the navigation rail orbiter.

<!-- Video: Position the spatialized FAB close to the navigation rail orbiter -->

While the spatialized FAB and navigation rail orbiter are typically positioned together, their placement is adaptable.

<!-- Video: Caution - Use caution when positioning spatialized FABs. Keep them within the height of adjacent spatial panels -->

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. XR navigation rails should follow applicable Material [nav rail accessibility standards](/components/navigation-rail/accessibility).
