---
url: https://m3.material.io/foundations/layout/applying-layout/compact
crawled_at: 2026-02-03T00:00:00.000Z
category: foundations
section: layout
page_type: guidelines
status: complete
---

# Applying layout

Window size classes help create layouts that scale across devices of all shapes and sizes.

Layouts for compact window size classes are for **screen widths smaller than 600dp**.

![Messaging app in a compact window size.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly7219l1-1.png?alt=media&token=67ff316b-7515-4e9f-9971-4e580290b1f2=s0)

_Compact window size layouts focus on a single view_

## Navigation

Use a navigation bar or modal navigation drawer.

Place navigation components close to the edge of the screen where they're easier to reach.

![Navigation bar and FAB are close to the bottom of a mobile app in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly7232az-2.png?alt=media&token=c709f69b-6a72-4386-9e72-d89aae7201e9=s0)

_Mobile app with a navigation bar_

## Body region

Use a single pane layout.

![The single pane consumes most of the area in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly72dewk-4.png?alt=media&token=13801e5b-89c9-4026-9b18-13b2335479a5=s0)

_Single pane layout_

## Spacing

Margins are 16dp from the left and right edge of the window.

![The left and right margins of a compact window pane are 16dp.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly72ec8x-5.png?alt=media&token=58e992b0-b18c-4192-bd18-f2ba1305dcfd=s0)

_16dp margins_

## Special considerations

A compact layout will need to transition dynamically to a medium or expanded layout when:

- A foldable device is unfolded
- A mobile device is rotated from portrait to landscape
- A tablet exits split-screen mode
- An app is resized to be larger in multi-window mode
- A free-form window is resized
