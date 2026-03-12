---
url: https://m3.material.io/components/dialogs/xr
lastmod: 2025-12-01
crawled_at: 2026-02-04T12:00:00.000Z
category: components
section: dialogs
page_type: xr
status: complete
---

# Dialogs

Dialogs provide important prompts in a user flow

> **Note:** This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what's implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) introduces spatial capabilities, such as using depth to make dialogs stand out from the background. Currently, spatial dialogs are only available in full space. For home space, follow Material's general [dialog guidance](https://m3.material.io/m3/pages/dialogs/guidelines#b33988d3-88e6-432c-acb1-4461a84171c9).

## Color & elevation

XR uses [color roles](https://m3.material.io/m3/pages/color-roles/tab-1#89f972b1-e372-494c-aabc-69aea34ed591) to communicate the elevation of UI elements. Dialogs can use two color options: **surface container high** or **surface container highest**.

> **Note:** Color and elevation for spatial dialogs can be customized by makers and are not available in Jetpack Compose yet.

![2 spatially elevated dialogs with surface-container-high and surface-container-highest color roles.](https://lh3.googleusercontent.com/U8ru72wkyiSvzWy1y-npuQelcvHDdGcI1Vl7Xgqc_aWt4IUs9oV4OWehS7OmyV02GUXJtr4AecKrDRvQouwJ5IU5uZCLsn0JZ3hLdN-Gc50=s0)

_Surface container high | Surface container highest_

For effective visual hierarchy, a dialog should be the most prominent element.

Add a scrim behind a dialog to improve its visibility. Scrims prevent other content from being selected until the dialog action is complete.

![Dialog with surface-container-highest color and a scrim.](https://lh3.googleusercontent.com/UbfenXJcmu7EicBwP5t7vLK-_9MtCoLkTyK5F8ymjYpGivp0AC72Od_07R3T5LAJoNbfKJEjekcjCEwcpkD6f0dpZNNe2-clKr4EqMr_WN2G=s0)

_**Do:** Make sure a spatial dialog's color is higher than all other UI elements, and use a scrim_

The dialog should have the highest elevation in the product.

For example, if a dialog is **surface container high**, don't use **surface container highest** for any other elements.

![Dialog with surface-container-high color and no scrim. An orbiter is at a higher elevation than the dialog.](https://lh3.googleusercontent.com/uJQx6_YXe-_Z0MiBZZ2qGdoidQ8CCUrsVGhmD1ta9wRV0HESD-TgVPnxz_LHTFI2aOElt4PxTd8Am9oUBQTWt4TAlIeuy7SLbxkzkY3Jw1z3=s0)

_**Don't:** If a dialog's color is **surface container high**, don't use **surface container highest** for any other element_

## Usage

[Basic dialogs](https://m3.material.io/m3/pages/dialogs/guidelines#97ac3858-3932-4084-ae8e-73e42b7cb752) are recommended when designing for XR's expanded window sizes. This keeps the required action in the person's [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place). Limit use of [full-screen dialogs](https://m3.material.io/m3/pages/dialogs/guidelines#007536b9-76b1-474a-a152-2f340caaff6f) to compact window sizes, like mobile devices.

![Basic dialog in XR.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmadfk9dk-04.png?alt=media&token=a24cc9e9-0dff-4244-8d36-688fcfda5a48)

_**Do:** A basic dialog elevated above an app in home space_

![Full-screen dialog in XR.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmadfn41n-05.png?alt=media&token=0217ac8a-8637-43ac-88f6-fd71dcbb335c)

_**Don't:** Avoid using full-screen dialogs in XR. Required actions could appear beyond a person's field of view._

## Spatial dialogs

In full space, dialogs can be elevated spatially via [overrides](https://developer.android.com/develop/xr/jetpack-xr-sdk/material-design#use-enablexrcomponentoverrides). This helps dialogs stand out from their background in XR.

![Side view of basic dialog showcasing spatial elevation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmadfqce4-06.png?alt=media&token=2cf6eaca-492c-49c4-9e74-2ba00d818f66)

_Side view of a basic dialog with spatial elevation in full space_

## Behavior

### Effect

The spatial dialog should scale uniformly. It also fades in when appearing, and fades out when disappearing.

The dialog's scrim only fades in and out.

<!-- Video: Front view of a spatial dialog in motion in full space -->

### Movement

When activated, the spatial dialog rises from the app to the highest resting level on the Z-axis.

When the action is complete, it returns to a normal resting level.

The dialog's scrim stays at the app content level at all times.

To prevent motion sickness, use [standard easing](https://m3.material.io/m3/pages/motion-easing-and-duration/tokens-specs#601d5552-a6e6-4d74-9886-ff8f24b9ec35) and [long duration](https://m3.material.io/m3/pages/motion-easing-and-duration/tokens-specs#48bf653e-46f9-48f5-87e0-eaf8ea3fe716) motion tokens.

<!-- Video: Side view of a spatial dialog in motion in full space -->

## Placement

Consider factors like field of view, viewing distance, and possible interactions when deciding where to place dialogs in XR.

### Elevation: highest resting level

Display spatial dialogs at the highest resting level. When setting the depth value of the highest resting level, make sure the elevated dialog is at a comfortable viewing distance from the person. [More on spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation)

<!-- Video: A spatial dialog moves to the highest resting level in full space -->

### Center spatial dialogs in field of view

Spatial dialogs should be centered in a person's [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place). If the dialog **can't** track head movements, position it in the center of the app's content.

If the dialog **can** track head movements, configure it with a lazy follow behavior. This keeps the dialog anchored to the center of a person's field of view until an action is taken.

<!-- Video: A dialog in full space stays centered in a person's field of view -->

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. Spatial dialogs should follow applicable Material [dialog accessibility standards](https://m3.material.io/m3/pages/dialogs/accessibility).
