---
url: https://m3.material.io/foundations/layout/applying-layout/large-extra-large
crawled_at: 2026-02-03T00:00:00.000Z
category: foundations
section: layout
page_type: guidelines
status: complete
---

# Applying layout

Window size classes help create layouts that scale across devices of all shapes and sizes.

Layouts for large window size classes are for screen widths **from 1200dp to 1599dp.**

Layouts for extra-large window size classes are for screen widths of **1600dp and larger.**

These window size classes are most useful for creating web experiences tailored to laptop and desktop devices. Your product may not need large and extra-large window size classes. Consider your platform's conventions and users when making decisions on which window size classes to design for.

![Large window size with a video app in 2 pane mode.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly749cio-1.png?alt=media&token=88f87a65-e036-40ed-8a96-05bf7a12c488=s0)

_Video app on an large window size class_

## Navigation

Use a navigation rail or persistent navigation drawer, depending on the amount of body content.

For sorting, filtering, or secondary navigation, use tabs or other components directly in the body.

![Web browser with vertical navigation area on the leading edge of the screen with a larger body pane filling the rest of the window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly74aatt-2.png?alt=media&token=a147a272-6ee9-4994-9b65-5b2a2c1bd1a2=s0)

_Navigation and Body_

A navigation drawer is best suited for extra-large windows, where there's still plenty of room for body content. Consider collapsing the navigation drawer into a navigation rail when space is needed, or when on pages deeper in the page hierarchy.

![Web browser with vertical navigation area on the leading edge of the screen with a larger body pane filling the rest of the window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly74b2re-3.png?alt=media&token=0a220cf7-f2bc-452b-aa06-90b838106174=s0)

_Navigation and Body_

## Body pane

A two-pane layout is often best for large and extra-large window sizes.

However, a single pane layout can work when displaying visually dense or information dense content, such as videos.

![The single body pane layout covers most of the expanded screen except for the navigation area and margins.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly74c4tp-4.png?alt=media&token=e14a0337-7ff5-48de-b841-be54a6cd8fb6=s0)

_Use a single pane layout for dense content or media_

When using a fixed and flexible layout, the fixed pane should have a width of 412dp by default.

![The vertical navigation area is on the left of the screen. To its right are 2 body panes separated by a vertical margin.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly74d4wj-5.png?alt=media&token=831e5ba0-9e7a-4f54-820b-2d81639498e2=s0)

_Fixed panes should be 412dp in large and extra large windows_

When using a split-pane layout, the spacer should be visually centered by default, even when using a navigation drawer.

![The vertical navigation area is on the left of the screen. To its right are 2 body panes separated by a vertical margin.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly74dvj8-6.png?alt=media&token=652fc4c9-4a5a-4d99-b8ac-ba7679683998=s0)

_In split-pane layouts, navigation components should shrink the left pane so the spacer remains centered_

## Additional panes

The extra-large window size class supports using a standard side sheet as a third pane. When the side sheet is present, the navigation drawer can remain visible, collapse into a navigation rail, or hide completely. Don't use more than three panes.

**Note:** Fixed panes in this window size are recommended to be 412dp, but side sheets have a default maximum width of 400dp.

![Extra large window with two panes and a side sheet acting as a third pane.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly74fmxy-7.png?alt=media&token=9813a79a-2135-43ad-8b3b-c0009f15993c=s0)

_Standard side sheet (third pane)_

## Spacing

Large and extra-large layouts have a left and right margin of 24dp.

The spacer between panes is 24dp.

![Two pane layout with 24dp margins and 24dp space between panes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly74h1q7-8.png?alt=media&token=b680f393-3138-4110-8e53-a447f4e2f2bc=s0)

## Special considerations

Large and extra-large layouts will need to transition dynamically to a smaller layout when:

- The app goes from full-screen to split-screen
- Multi-window mode is initiated
- A free-form window is resized

Special attention to typographic elements such as [line length](https://m3.material.io/m3/pages/typography/applying-type) to ensure readability must be considered on large and extra-large layouts.

![Two paned layout of an email app in an expanded window class layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly74holg-9.png?alt=media&token=4225d9ca-e76d-47da-8d6c-6cbc6a0e9ae7=s0)
