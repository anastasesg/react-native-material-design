---
url: https://m3.material.io/foundations/layout/applying-layout/expanded
crawled_at: 2026-02-03T00:00:00.000Z
category: foundations
section: layout
page_type: guidelines
status: complete
---

# Applying layout

Window size classes help create layouts that scale across devices of all shapes and sizes.

Layouts for expanded window size classes are for **screen widths 840dp to 1199dp.**

![An expanded window size with a video app in 2 pane mode.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly73sadr-1.png?alt=media&token=96e86f92-c696-4404-bced-fa17c2e8f4cc=s0)

_Video app on an expanded window size class_

## Navigation

Place navigation components close to edges of the window where they're easier to reach.

Use a navigation rail or persistent navigation drawer.

The navigation rail can be hidden in secondary destinations as long as the primary destination can still be accessed using a back button.

For sorting, filtering, or secondary navigation, use tabs or other components directly in the body.

![The navigation area is a vertical bar at the left of the screen. To its right, the body pane fills the rest of the window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly73tbp5-2.png?alt=media&token=b9070ba9-fba8-4410-b78e-1aeff83e3a16=s0)

_Navigation and Body areas_

## Body pane

Use a single pane layout or two-pane layout.

A two-pane layout is often best for expanded window classes. However, a single pane layout can work when displaying visually dense or information-dense content, such as videos.

![The single body pane layout covers most of the expanded screen except for the navigation area and margins.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly73ubc7-3.png?alt=media&token=842d6b15-3130-4cad-bb73-4c83e35c5ea3=s0)

_An expanded window size class with a single pane layout_

When using a fixed and flexible layout, the fixed pane should have a width of 360dp by default.

_An expanded window size class with a two-pane layout_

A split-pane layout uses two flexible panes and visually centers the spacer by default.

_An expanded window size class with a single pane layout_

## Spacing

Expanded layouts have a left and right margin of 24dp.

The spacer between panes is 24dp.

![Two pane layout with 24dp margins and 24dp space between panes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly745kox-6.png?alt=media&token=a16b033a-aa1e-441d-81aa-3c4b48ca200f=s0)

_Pane and Second pane_

## Special considerations

An expanded layout will need to transition dynamically to a compact or medium layout when:

- A foldable device is folded
- A tablet is rotated from landscape to portrait
- The app goes from full-screen to split-screen
- Multi-window mode is initiated
- A free-form window is resized

_Email app in an expanded window class size_
