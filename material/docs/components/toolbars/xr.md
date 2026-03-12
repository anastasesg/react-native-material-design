---
url: https://m3.material.io/components/toolbars/xr
crawled_at: 2026-02-04T00:00:00.000Z
category: components
section: toolbars
page_type: xr
status: complete
---

# Toolbars

Toolbars display frequently used actions relevant to the current page.

> **Note:** This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what's implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR-specific toolbar with custom specs and guidance. Read [XR developer documentation](https://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Types

There is one toolbar orbiter. It closely aligns with the floating toolbar. It can be configured to be horizontal or vertical.

![Horizontal and vertical toolbar orbiters.](https://lh3.googleusercontent.com/NPkjrCVlcMYcFjhskyX68C6Ajzx22mjakvKDZAVUHBJw8EP_xCeJMvYK864Ddwt9X84QyVHllfVaEdPwFYAmtqjrhAQI_fh7tgy9m0nu5U30lg=s0)

_1. Horizontal floating toolbar, 2. Vertical floating toolbar_

## Anatomy

![2 elements of a toolbar orbiter: container and placed components.](https://lh3.googleusercontent.com/x86RozsiCz4_T4cUwrQkf3UJneRZFflJsRYhfLXCzxOVE5zBfBtXAYmBQ9ri8SlRvOTv-XyBPFsGN5SYSiq_YuEOZYq0ahBdmGs4PssOnO-6=s0)

_1. Container, 2. Placed components_

## Color & elevation

XR uses color to communicate the elevation of UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the toolbar displays above the spatial panel on the Z-axis. Elevated toolbars can use any of these color options:

![4 versions of toolbar elevation color strategy.](https://lh3.googleusercontent.com/OILSCxFAWoe1XfIXg31uAZc78UpNfv62wl-DJVb4TAdCizAikgblMpziUQPW1muEROAz91Ae36E5OpoddORkfhpjpFN272ft671jgrL9wSkgaw=s0)

_1. Surface container, 2. Surface container high, 3. Surface container highest, 4. Tertiary container_

## Measurements

![Diagram with measurements for toolbar orbiters.](https://lh3.googleusercontent.com/syZmjQHwtPXmvN0xfW_CSo3XrQw2K1PuwEfevjaOJfRXJSt3F1jWtQ6tDNyTxyByiw1I8LHGeYrGJc2zE43QZsIAAckSsTMhOPawWVVLDrE=s0)

_Measurements for toolbar orbiters_

![Diagram with 12dp padding for toolbar orbiters.](https://lh3.googleusercontent.com/sgQJWHiCNlNhFSu2kBf-ju1LPD-IIM0Qr0X7z2-IpqNJ1yhhZ6QWyEjcNEsMDv8aBSvxBrShLl-F1NjGmhSTmy-Iq7zXkarK1tBElHgpOMU=s0)

_Padding for toolbar orbiters_

## Usage

A toolbar can appear in an orbiter for a more immersive experience. Currently, this spatial capability is only available in full space. In home space, use a regular toolbar on the same plane as the body content to mimic a 2D experience.

_A toolbar's behavior and placement changes from a 2D to a 3D experience_

## Behavior

### Local context (recommended)

When placed in local context, the toolbar orbiter is centered at the bottom of the spatial panel it controls.

It repositions in response to layout or content changes.

_In most cases, toolbars should be placed in local context. The orbiter is centered and anchored to the bottom of the panel it controls._

### Global context

When placed in global context, the toolbar orbiter is centered at the bottom of the app.

It stays anchored to the app during layout or content changes.

> **Caution:** In global context, toolbar orbiters are centered and anchored to the bottom of the app. This use case is less common, as toolbars usually contain actions that control a specific panel.

### Expand & collapse

Toolbar orbiters with more than five items can expand and collapse to reveal or hide additional content.

When a toolbar orbiter expands, it stays within the bounds of the adjacent spatial panel.

Alternatively, more complex toolbars can be split into multiple toolbars.

_Toolbar orbiters can expand to reveal additional content, but should stay within the bounds of the adjacent spatial panel_

### Additional toolbars

In some cases, full space apps can have more than one toolbar orbiter, placed in either global or local context.

> **Caution:** Limit the use of multiple toolbars to rare cases when additional spatialization improves usability.

## Placement

### Offset & inset positioning

In full space, a toolbar orbiter can be positioned adjacent to or overlap a spatial panel.

![Toolbar orbiter with offset positioning.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemeu04x-11-do.png?alt=media&token=49f94b58-722e-4afc-83df-a448962fdd24)

> **Do:** The recommended toolbar orbiter position from the spatial panel is:
> - Offset by 20dp or
> - Inset by 12dp

![Toolbar orbiter with inset positioning above 12dp that obstructs content on the spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemevhx8-12-don't.png?alt=media&token=449795aa-4920-46a8-8dfe-a4fe43ed40cd)

> **Don't:** To prevent content obstruction, don't overlap the toolbar orbiter and spatial panel above a 12dp inset threshold.

### Horizontal alignment

![A horizontal toolbar orbiter placed within the bounds of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemey1hz-13-do.png?alt=media&token=c21a511f-8efe-4028-bdcd-c83163e60d48)

> **Do:** Always align the toolbar orbiter within the horizontal bounds of nearby spatial panels.

![A horizontal toolbar orbiter that extends beyond the width of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemez2e1-14-don't.png?alt=media&token=fd153363-aee4-4dc7-86ba-1d85e3ddbb98)

> **Don't:** The toolbar orbiter shouldn't exceed the width of adjacent spatial panels.

### Vertical alignment

![A vertical toolbar orbiter placed within the bounds of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemf0q6h-15-do.png?alt=media&token=8f923eb4-4477-4fcb-a60f-13b7f42bbe4d)

> **Do:** Always align the toolbar orbiter within the vertical bounds of nearby spatial panels.

![A vertical toolbar orbiter that extends beyond the height of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemfyo8f-16-don't.png?alt=media&token=d9e5cd69-d3b6-4238-94fa-5d7dbd359c2c)

> **Don't:** The toolbar orbiter shouldn't exceed the height of adjacent spatial panels.

### Spatial panel alignment

By default, toolbar orbiters are center-aligned to the spatial panel. Their placement can be adjusted to accommodate specific user needs, such as improved ergonomics or [right-to-left (RTL) languages](https://m3.material.io/m3/pages/understanding-layout/bidirectionality-rtl).

![Toolbar orbiter alignment options in relation to spatial panels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemfvpq3-17.png?alt=media&token=06472c3c-8a05-4dab-9e63-b4dac374c622)

_Depending on the configuration (horizontal or vertical) of the toolbar orbiter, it can align to the center, left, right, top, or bottom of a spatial panel_

Avoid placing a vertical toolbar orbiter between spatial panels. This negatively affects the interface structure and can make it difficult to find.

![A vertical toolbar orbiter is placed between 2 spatial panels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemfx943-18-don't.png?alt=media&token=ce865771-93db-4ded-ac2c-f0ca46254201)

> **Don't:** Don't place a vertical toolbar orbiter between spatial panels.

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. XR toolbars should follow applicable Material [toolbar accessibility standards](https://m3.material.io/m3/pages/toolbars/accessibility).
