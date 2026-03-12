---
url: https://m3.material.io/foundations/layout/understanding-layout/overview
crawled_at: 2026-02-03T00:00:00.000Z
category: foundations
section: layout
page_type: overview
status: complete
---

# Layout basics

Layout is the visual arrangement of elements on the screen.

- Use layout to direct attention to the action users want to take
- Adapt layouts to compact, medium, expanded, large, and extra-large window size classes
- Build from an established canonical layout
- Consider how spacing and the parts of the layout work together
- Material layout guidance applies to Android and the web

![Terms shown on a screen. Window means the whole screen. From left to right are columns, a middle fold with a spacer, a pane and a right-side margin.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwwo5fb-1-1p.png?alt=media&token=3dacb934-f555-4a6f-a45e-bbef2f208a7f=s0)

_Column, Fold, Margin, Pane, Drag handle, Spacer, Window_

## What's new

- When creating new layouts, begin from a [canonical layout](https://m3.material.io/m3/pages/canonical-layouts/overview) rather than a layout grid. This helps ensure that your layouts can scale across devices and form factors.
- [Window size classes](https://m3.material.io/m3/pages/applying-layout/window-size-classes) are opinionated breakpoints. Material Design recommends you create layouts for five window size classes: compact, medium, expanded, large, and extra-large
- Layouts with multiple panes of content can be resized with a drag handle

![Different layouts for differently sized screens](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwwpg71-2.png?alt=media&token=5e7f0ae7-f5d5-44c6-8574-17b622fa7659=s0)

_M3 considers multiple layouts for a variety of sizes_

## Layout terms

- **Column**: one or more vertical blocks of content within a pane
- **Drag handle**: The component that resizes panes
- **Fold**: on foldable devices, a flexible area of the screen or, on dual-screen devices, a hinge that separates two displays
- **Margin**: the space between the edge of the screen and any elements inside of it
- **Multi-window mode**: enables multiple apps to share the same screen simultaneously
- **Pane**: a layout container that houses other components and elements within a single app. A pane can be: fixed, flexible, floating, or semi permanent
- **Spacer**: the space between two panes
- **Window size class**: opinionated breakpoint, the window size at which a layout needs to change to match available space, device conventions, and ergonomics
