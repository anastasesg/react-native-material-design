---
url: https://m3.material.io/foundations/layout/understanding-layout/hardware-considerations
crawled_at: 2026-02-03T00:00:00.000Z
category: foundations
section: layout
page_type: guidelines
status: complete
---

# Layout basics

Layout is the visual arrangement of elements on the screen

**Window size classes** provide the foundation for top level layout decisions, but display-specific considerations are also needed.

## Display cutout

A display cutout is an area on some devices that extends into the display surface. It allows for an edge-to-edge experience while providing space for important sensors on the screen of the device.

Applications can extend around display cutouts or other features, but some parts of the UI might be obscured.

![Content safe area shown in portrait and in landscape mode.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2cfdc-1.png?alt=media&token=8da1aff9-1abf-46f1-bfe3-1a697a379b11=s0)

_A mobile device's content-safe area around a display cutout for the front-facing camera_

## Foldable devices

Foldable devices use a folding mechanism to fold and unfold. They have unique characteristics to consider when designing layouts.

### Fold

The fold of a foldable device divides the screen into two portions, either horizontally or vertically. The fold can be a flexible area of the screen or, on dual-screen devices, a hinge that separates two displays.

A flexible fold is barely visible, although some users may feel a tactile difference on the screen surface. Content can flow over the fold fairly easily.

![Center fold of a foldable device layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2dejk-2.png?alt=media&token=b1ae33fd-91b4-4985-a1df-b4945de2c03d=s0)

_Folds are typically found in the center of the device screen and can present a seamless experience_

On devices with a physical hinge, designing the screen as two distinct sections (separate window areas or panes) allows a composition to work well across the hinge and screens.

![Center fold on a foldable device with a physical hinge.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2eac2-3.png?alt=media&token=7b332b5a-8f26-4b4a-ab1e-f0fabd5efe39=s0)

_A physical hinge separates two parts. There is no display hardware in this region._

### Device state

Foldable devices can have several physical states: folded, open flat, and tabletop.

#### Folded

The folded state can include a front screen, which often fits in the compact window size class, just like a mobile phone in portrait orientation.

![Compact window of a folded device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2fbwo-4.png?alt=media&token=46676791-930a-4b6a-9c40-6adafcd13f73=s0)

_The front screen of a foldable device_

#### Open flat

An open flat state refers to the fully opened screen, which usually increases the window size class to medium or expanded. An open device can be used in landscape or portrait orientations.

![Open portrait state of a mobile device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2g4q8-5.png?alt=media&token=ec23f27d-3b07-4964-aaa0-2b6c86e5ba02=s0)

_In an open portrait state, the longer device edge is vertical while the shorter edge is horizontal_

![Open landscape state of a mobile device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2gth1-6.png?alt=media&token=a73f2de3-02d2-4457-86be-914222396201=s0)

_In an open landscape state, the longer device edge is horizontal while the vertical edge is shorter_

#### Tabletop

Tabletop refers to a half-opened state forming a rough 90 degree angle, with one half of the device resting on a surface. This posture resembles a laptop.

UI controls near the fold can be difficult for users to access, and text overlaying the fold can be hard to read.

![Tabletop state of a mobile device showing camera on the vertical plane.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2hz6b-7.png?alt=media&token=d9d2412d-a772-42a7-87dd-6a7cf8400b04=s0)

_If camera hardware is present, a tabletop device is best positioned on a side without any protruding hardware elements_

### Interaction

#### App continuity

When running on a foldable device, an app can transition from one screen to another automatically. After the transition, the app should resume in the same state and location, and the current task should continue seamlessly.

![A news app in compact mode compared to the open landscape state where the news app expands with a new column next to the compact news feed.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2j1zj-8.png?alt=media&token=cc06940d-eaf9-424c-969f-15b6e32d5d06=s0)

_A news app shows a feed in a compact and expanded window class when a foldable device switches device state_

#### Scrolling and multiple panes

Depending on how your app uses panes, the scroll behavior of a folded design may change in the unfolded design.

If you expand a pane, you can decide whether the whole window will scroll together or if each side (each pane) scrolls independently.

![A foldable device screen in open landscape mode with a single pane showing vertical scroll arrows.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2khfi-9.png?alt=media&token=50dc8429-6102-45a6-8195-2920d374207c=s0)

_A single pane can scroll its inside content vertically and horizontally_

If your design has multiple panes, each pane can operate as an independently scrollable area.

![A foldable device screen in open portrait mode with double panes each with a vertical scroll arrow.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2lo3u-10.png?alt=media&token=1ca93a5d-ceae-4193-ad58-e9e5eb0a1dce=s0)

_Multiple panes can scroll inside content independently of one another_

## Multi-window mode

Multi-window mode is an Android system feature for **displaying multiple apps on the same screen.** This can be especially useful for multi-tasking, or workflows that depend on comparing information.

Note: This concept should not be confused with using multiple panes to display content from a single app. For more on that, see: Panes.

![2 apps appear side-by-side with a task bar below spanning the width of the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2mmo2-1.png?alt=media&token=e5f2fbca-c806-4e4a-8bc7-30be096f275d=s0)

_Screen displaying an email app and a contacts app in multi-window mode_

### User needs

The ways that windows are created, arranged, and adjusted should feel straightforward for all users and across any window size class. Methods for seamless window management include:

- Apply smooth transitions as described in motion guidance
- Ensure that users can create multiple windows easily and move between them as needed
- Keep mental models and interaction patterns simple so that users aren't required to think about which mode is appropriate for each task
- Design and implement window dynamics consistently across variations in foldable hardware, including those with a hinge that separates two displays

### Window creation and behavior

Android provides several ways for users to create a multi-window view.

### Taskbar

The taskbar provides a launching point for pinned and suggested apps to easily become a separate window.

To create a new window, a user selects and drags an app from the taskbar and moves the app icon to indicate where the new window should be displayed.

![The taskbar is positioned at the bottom of a screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2qc2a-2.png?alt=media&token=163847e4-1a26-4431-a633-7d29f9363d3b=s0)

_Android taskbar_

### Context menu

Users can also create multiple windows through the overview by the app context menu.

![2 apps appear side-by-side with a task bar below spanning the width of the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2rmbq-3.png?alt=media&token=cff96393-8fae-4b77-bd8d-a3986c64ccf9=s0)

_Multi-window mode can have vertical positioning_

![2 apps are stacked in landscape mode with a task bar below spanning the width of the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2uu5h-4.png?alt=media&token=b190166c-fce3-4d5b-b6f9-f5a3741c8ba5=s0)

_Multi-window mode can have horizontal positioning_

### Adjusting window sizes

By default multiple windows are created as a 50/50 side-by-side split.

The windows can be adjusted further to 1:3 or 2:3 proportions. These ratios provide a primary and secondary window dynamic, offering greater flexibility and allowing focus on one application as needed.

When in a multi-window mode, the available screen area often changes from medium or expanded window class to compact. Layouts should adapt accordingly.

![2 apps appear side-by-side with the left-side app using two-thirds of the screen, and the right app one-third.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2y99m-5.png?alt=media&token=04f48065-b71e-4a2d-9a01-f6de64b23b1c=s0)

_The screen handle can be dragged and released to create the desired window ratio. The handle automatically adjusts to the closest snap point._
