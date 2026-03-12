---
url: https://m3.material.io/foundations/layout/applying-layout/medium
crawled_at: 2026-02-03T00:00:00.000Z
category: foundations
section: layout
page_type: guidelines
status: complete
---

# Applying layout

Window size classes help create layouts that scale across devices of all shapes and sizes

Layouts for medium window size classes are for **screen widths from 600dp to 839dp**.

![A medium window size with a video call app in full screen mode.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly72i40z-1.png?alt=media&token=4bdfcb24-0554-41d4-9f11-5d7562ba718b=s0)

_Video call app in a medium window size class_

## Navigation

Place navigation components close to edges of the window where they're easier to reach.

Use a navigation rail or modal navigation drawer for single-pane layouts. Use a navigation bar for two-pane layouts.

The navigation rail can be hidden in secondary destinations as long as the primary destination can still be accessed using a back button.

![The navigation area of a medium window size is a vertical bar at the left of the screen. To its right is the body area.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly72kx2v-2.png?alt=media&token=806232ea-3654-4567-b74c-d8e7b3447faf=s0)

_Navigation area / Body area_

## Body region

A single pane layout is recommended because of limited screen width. However, a two-pane layout is possible for content with lower information density, such as a settings screen.

![A single pane uses most of the space in a medium window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly72m904-3.png?alt=media&token=10efda2d-5586-4e82-9de5-6a2af0e8fc81=s0)

_1. Single pane layout_

Each pane in a two-pane layouts should take up 50% of the window width. Avoid setting custom widths. A drag handle can be used to expand or collapse panes to be 100% of the window width.

![Two-pane layouts in medium windows set both panes to 50% of the window width by default.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly72o7s8-1p-Diagram%20medium%20double%20pane-2x.png?alt=media&token=bf73c686-a43f-4558-a957-b488ee494ea5=s0)

_Two-pane layout_

When adding navigation to a two-pane layout, use a navigation bar or a modal navigation drawer. This allows the panes to fully use the available window width.

![A navigation bar extends over 2 panels at the bottom of a medium window size.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly72pggb-4.png?alt=media&token=8ef3fdf0-c00b-4e04-9411-80ed7482ff23=s0)

_Two-pane layout with: Navigation bar_

## Spacing

Medium layouts have margins of 24dp.

The spacer between panes is also 24dp.

![Two pane layout with 24dp margins and 24dp space between panes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly72vvqs-5.png?alt=media&token=6303a052-8495-475e-acdd-b02b859e8d9b=s0)

_Margins and spacer are 24dp_

## Special considerations

A medium layout will need to transition dynamically to a compact or expanded layout when:

- A foldable device is folded
- A tablet is rotated from portrait to landscape
- The app goes from full-screen to split-screen
- Multi-window mode is initiated
- A free-form window is resized

![Two paned layout of an email app in a medium window size.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly72wumu-6.png?alt=media&token=6db9fe67-ad21-4a5b-839c-b4e9acebdc10=s0)

_Email app in a medium layout_

### Reachability

For horizontal tablets and unfolded foldables, the top 25% of the screen is likely out of reach, unless the grip is adjusted. To accommodate device and hand sizes, limit the amount of interactions that are placed in the upper 25% of the screen.

Additionally, avoid placing essential interactive elements too close to the bottom edge of the screen. Some users, particularly those with larger hands, might struggle to reach this area.

![The hard-to-reach top quarter of a medium window size in landscape mode.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly72ymi7-7.png?alt=media&token=f40dca6d-698a-454d-9065-7efd48d24a30=s0)

_Limit interactions in the upper quarter of the screen (1). The top 25% of the screen can be hard to reach._

Specify interactions in a layout with these ergonomic regions in mind:

1. Users can reach this area by extending their fingers, which makes it inconvenient
2. Users can reach this area comfortably
3. Reaching this area is challenging when holding the device

![The hard-to-reach top quarter of a medium window size in landscape mode.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly72zkyg-8.png?alt=media&token=47bed2de-554b-44f9-82ea-f5e7fb77a413=s0)

_Placing critical and frequently used elements close to the screen's bottom edge and corners makes them harder to reach_
