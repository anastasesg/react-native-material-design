---
url: https://m3.material.io/components/app-bars/xr
lastmod: 2025-09-26
crawled_at: 2026-02-03T12:00:00.000Z
category: components
section: app-bars
page_type: xr
status: complete
---

# App bars

App bars are placed at the top of the screen to help people navigate through a product.

> **Note:** This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what's implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR-specific app bar with custom specs and guidance. See [XR developer documentation](https://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Types & configurations

There is one app bar **orbiter**. It closely aligns with the **small app bar**. It can be configured to be center-aligned or left-aligned.

![Center and left-aligned app bar orbiters.](https://lh3.googleusercontent.com/275t96Y9rUAMJhfdGc75GgBPHNFl--qg07EvL8H6wMm4fUNz4LDSYgl3RANFb7b0PNEDCWdyvYWtJRd2aP3KBEulXXe547Fwg00LtuBnX4R7=s0)

1. Center-aligned app bar
2. Left-aligned app bar

## Anatomy

![Diagrams of app bar orbiters identifying 4 internal elements.](https://lh3.googleusercontent.com/4WkIFbtMBd1eRKAFBVuw-ksKbcEzH94Q7eUNiU43ZYvnZdGWPLGLFMQzUbpKg2YVNOqX-yoOv4Ln4XzSsk5Olk0t4SNoPLy37UXPwIKDxARR=s0)

1. Container
2. Headline
3. Trailing icons
4. Leading icon

## Color & elevation

XR uses color to communicate the elevation of UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the app bar displays above the **spatial panel** on the Z-axis. Elevated app bars can use any of these color options:

![3 versions of app bar elevation color strategy.](https://lh3.googleusercontent.com/SyDhi1K0xASndYUX1pJiVZULcQinWbpGyLqyshvgS1DgcIbmpDnkPnKwVAifMnZONWWWbqySCntXldi2Oo7JPWroo9eLqg4aD3MOikqXswDk=s0)

1. Surface container
2. Surface container high
3. Surface container highest

## Measurements

![Diagrams with measurements and padding for app bar orbiters.](https://lh3.googleusercontent.com/b_jNtMLHZG-WD2JkbvlxLka2_1cbXsNyuBw37g7O0MVNCIEAhSF0-Odsk8WmlL9DHE_wr3feISUgB5lzN6CFzSQZJ4lGfFghmUwF1VvOqHw=s0)

_Measurements and padding for app bar orbiters_

## Usage

An app bar can appear in an **orbiter** for a more immersive experience. Currently, this spatial capability is only available in **full space**. In **home space**, use a regular app bar on the same plane as the body content to mimic a 2D experience.

<!-- Video: An app bar's behavior and placement changes from a 2D to a 3D experience -->

## Behavior

### Global context

When placed in global context, the orbiter is centered at the top of the app it controls.

It stays anchored to the app during layout or content changes. This ensures navigation elements are always easy to find and use.

<!-- Video: An app bar orbiter centered and anchored to the top of the app -->

### Local context

When placed in local context, the orbiter is centered at the top of the spatial panel it controls.

It repositions in response to layout or content changes.

> **Caution:** Use caution before placing an app bar in local context. If it contains actions that affect the overall app, an app bar should be placed in global context.

### Additional app bars

In most cases, apps should only have one app bar orbiter, placed in global context.

> **Caution:** Limit the use of multiple app bars to rare cases when additional spatialization improves usability.

## Placement

### Offset and inset positioning

![App bar orbiter with offset positioning.](https://lh3.googleusercontent.com/FJuBEIWFxJjA_fRQ5nXROjQauK2KydCOfZBNnFYv22tBYXxu_0i4RAqIKZNiyfKu8A8itbE0UP2RCFXFhYsbdiO1cDy-zevJDiqZcUSwxRuS=s0)

**Do:** Include a 20dp margin. This visually separates the app bar orbiter from the spatial panel, and prevents content obstruction.

![App bar orbiter with inset positioning.](https://lh3.googleusercontent.com/_e27ApYHmT5KZhFBlnMfHaUpbA8vTBiRE8-LeDOBxkuMwH_ZZKrVcJwy7AeC2-dd2r0rV0kq1KGTUQEYBq03-pdOHx47aG2k27E5QByK8-8MQg=s0)

**Don't:** Don't overlap the app bar orbiter and spatial panel.

### Horizontal alignment

![An app bar orbiter placed within the bounds of its spatial panel.](https://lh3.googleusercontent.com/1RGtwR-Q6FQXefTwalbpKqohc-vvd7FtYv6ixh7R1RJ6vjOqVC_rpKiPT-Ls1JYc9baS9FhS2nbwH63xMPHoGJBqIwhFEkYRGTc--zm8mUmL=s0)

**Do:** Always align the app bar orbiter within the bounds of nearby spatial panels.

![An app bar orbiter that extends beyond the width of its spatial panel.](https://lh3.googleusercontent.com/iZlDwB7KnW23ATH_aCSXYjEI-ewkX9tNniAkNXY7sfluzdmjK0Yfk4SkyGgfBXlWQGzMFDhGfbMM-qoFvZxvzEwseP2pCE_5TQ64zge9or2aIA=s0)

**Don't:** The app bar orbiter shouldn't exceed the width of adjacent spatial panels.

### Spatial panel alignment

By default, app bar orbiters are center-aligned to the spatial panel. Their width and placement can be adjusted to accommodate specific user needs, such as improved ergonomics or right-to-left (RTL) languages.

<!-- Video: App bar orbiters can align to the center, left, or right of the spatial panel -->

### Width boundaries

An app bar orbiter's width should adjust to stay in a person's [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place). This makes crucial navigation elements easy to find.

![An app bar orbiter with a width that fits in a person's field of view.](https://lh3.googleusercontent.com/5B9O8PJ0R48PvcHlBX0CyyOvsn2kbcsVzELtSWIjaPJ2FfvVxve0OgAEUpW0a6RCX7MZTcW6XmRLBT8311O35AfPm3snmuVov9ioT2EfQeE=s0)

**Do:** Adjust the width of the app bar orbiter to fit in a person's field of view.

It's not recommended to increase the width of an app bar orbiter beyond a person's natural [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place). This creates a visual imbalance and makes it difficult to find navigation elements.

![An app bar orbiter that exceeds the panel's width and a person's field of view.](https://lh3.googleusercontent.com/xJEkSjl5iVpH9BHIftb76kTA_EoWqTYXu8Fexfn8e0kMJbBmYLLArCIGY6hkelxE-B7Ma5lqGlhMKMJ_dUpEIF18v1zoS-Xy7LRqjluVA32EIg=s0)

**Don't:** Avoid expanding the app bar orbiter beyond the adjacent panel's width and a person's field of view.

### Adaptable width

When placed in local context, an app bar orbiter can expand to the width of its adjacent spatial panel.

Be sure the orbiter stays in a person's field of view, and test for usability.

> **Caution:** Use caution before expanding the app bar's width to match its spatial panel. The orbiter may not fit in a person's primary field of view.

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. XR app bars should follow applicable Material [app bar accessibility standards](/components/app-bars/accessibility).
