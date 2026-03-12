---
url: https://m3.material.io/foundations/layout/understanding-layout/parts-of-layout
crawled_at: 2026-02-03T00:00:00.000Z
category: foundations
section: layout
page_type: guidelines
status: complete
---

# Layout basics

Layout is the visual arrangement of elements on the screen.

![Navigation and body regions shown on 3 different screen types.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwxhwoc-1.png?alt=media&token=8476ab2c-fd9d-4cd6-9235-2c62a8488e01=s0)

Most layouts have two regions:

- Navigation
- Body

### Windows

A window frames and contains the product. The window is divided into two primary regions: the navigation region and body region.

Multi-window views are a system UI feature used to display more than one app simultaneously. [Multi-window support guide for Android](https://developer.android.com/develop/ui/compose/layouts/adaptive/support-multi-window-mode)

![Side-by-side windows with single taskbar below.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwxrdhk-10.png?alt=media&token=c4401716-3caf-42e5-bd9f-d931e9036051=s0)

_Two windows shown next to one another with a taskbar underneath_

## Navigation region

The navigation region holds primary navigation components and elements such as:

- Navigation drawer
- Navigation rail
- Navigation bar

Elements in this section help people navigate between destinations in an app or to access important actions.

Place navigation components close to edges of the window where they're easier to reach; on the left side for left-to-right (LTR) languages, and on the right side for right-to-left (RTL) languages.

![Navigation drawer, navigation rail, and navigation bar each shown on a separate screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwxim8l-2.png?alt=media&token=5cc1d506-1c9d-46b0-9a29-72a897030457=s0)

_Three different navigation components suit a variety of device sizes and environments_

## Body region

The body region contains most of the content in an app, including:

- Images
- Text
- Lists
- Cards
- Buttons
- App bar
- Search bar

Content in the body region is grouped into one or more panes.

![Body region highlighted on a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwxjjfr-3.png?alt=media&token=a1574fa9-6c4b-4d5a-bd0a-a240e9e1eb24=s0)

_The body region is the area outside of the navigation region_

## Panes

Just like panes of glass that make up a window in the real world, panes in Material Design make up the body region of the layout in a device window.

All content must be in a pane. A layout can contain 1-3 panes of various widths, which adapt dynamically to the window size class and the user's language setting. For right-to-left (RTL) languages, navigation components will be on the right.

Users can navigate to or between panes. Presenting multiple panes at once can make the app more efficient and easier to use.

![Two paned screen layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwxkflt-4.png?alt=media&token=da6e7766-e738-470f-96ad-4ed0e6431276=s0)

_First pane and second pane_

There are two pane types:

- **Fixed:** Fixed width
- **Flexible:** Responsive to available space, can grow and shrink

All layouts need at least one flexible pane to be responsive to any window size.

![Fixed and flexible panes of a screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwxloju-5.png?alt=media&token=19e4ab46-ab5e-4fe9-bc9d-3a5fd8393feb=s0)

_Fixed pane and flexible pane_

## How panes adapt

In addition to flexible resizing, pane layouts can adapt using three strategies: show and hide, levitate, and reflow. When horizontal space allows, panes are presented next to each other in a row. When the window is resized or changes orientation, panes use these strategies to reorganize themselves, preserving context and meaning.

- **Show and hide:** Supporting panes enter and exit the screen based on available space
- **Levitate:** One pane is placed on top of another
- **Reflow:** Panes change position or orientation

### Containment

On most devices, panes can blend in with the background while others can use a different color for emphasis. This is called implicit grouping, and helps show relationships between panes.

![Two-pane layout on a tablet](https://lh3.googleusercontent.com/OeM74nDivtew7dBZEbqn9yVqxwNYLrZUUWpr6OiKMGn9A_IjSHcT2q9VVgZLhXysXuXmrbH1w4uf4mGvgznMgXS8QC3r2uy_423TsjsJ4edw2g=s0)

_Implicit grouping can be used to create hierarchy among 2D panes_

In spatial environments, panes use a container color to separate panes from the passthrough or virtual environment.

![Two-pane layout in a spatialized environment, with no background.](https://lh3.googleusercontent.com/a7t4QUE9U0F3PL5ozn8LBpe8MfCOSz0No25g58LTIZfLJgXROpqqXniCtP2X-9oXmLUqE7ogrEYXYTL4hC2o82LMOtjvUR94I3wP_mwQivc=s0)

_Explicit containment is recommended in XR_

## App bars

Panes can include a top app bar and bottom app bar.

![Screen layout with app bar inside left pane.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwxse9i-22.png?alt=media&token=a21a0d4f-96ae-44de-a6d2-79daf8f90f69=s0)

_App bars are placed inside panes_

Any nesting actions within the app bar should be hidden or revealed based on available width.

![Top app bar of a compact window on a mobile device shows 2 items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwxuvra-23.png?alt=media&token=af07a67d-2a35-4536-9854-826cb8e3736f=s0)

_A compact window with two actions revealed_

![Top app bar of expanded window shows 5 items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwxvw9e-24.png?alt=media&token=1888fb07-bab7-41e2-b0eb-db7ad5744cd2=s0)

_An expanded window class with five items revealed_

When layouts transition from one to two panes, avoid shifting elements between panes.

![Email preview erroneously shifted to left-hand pane.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwxxac3-25.png?alt=media&token=7cc4ccf8-f719-45e8-806d-1e2846c7a33f=s0)

_Don't move elements to different UI objects when switching between window classes_

## Columns

Content in a pane can be displayed in multiple columns to segment and align content.

Columns are exclusive to a pane and are not used at the window level.

![A single pane containing 3 columns.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwxz8gj-26.png?alt=media&token=07d0f806-0957-4fd1-a6dc-f18b9fd5d7f8=s0)

_Using one pane, an app like News uses multiple columns of content to create its layout_

## Drag handle

Drag handles can be used to instantly resize panes in a layout. They adjust the width of flexible panes, and can fully collapse and expand fixed panes to quickly switch between a single-pane and two-pane layout.

Drag handles can be used horizontally or vertically.

![Mobile phone with two panes stacked vertically and a drag handle in between.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmfo2x7z3-drag-handle.png?alt=media&token=e4237702-53ec-484a-aa4e-b9ae3862a4e5=s0)

_Drag handles can be used vertically_

### Drag handle tokens

See the [M3 specs page](https://m3.material.io/foundations/layout/understanding-layout/parts-of-layout) for detailed token information.

### Usage

In expanded, large, and extra-large window sizes, two-pane layouts can be customized to snap to set widths when resized. The recommended custom widths are:

- 360dp
- 412dp
- Split-pane with spacer centered visually

In a two-pane layout, the drag handle is placed in the spacer between the panes.

![Drag handle centered in the spacer between panes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx1pvsg-13.png?alt=media&token=d806967b-4a5f-4f02-81d7-b49769e27d12=s0)

_Pane drag handle between two panes_

When a single pane is fully expanded, the handle is placed inside the right or left pane edge.

![Drag handle on the inside of a collapsed pane.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx1rk6i-14.png?alt=media&token=be6b371b-2cee-4963-9cf3-cccb66ab2f6b=s0)

_Pane drag handle on the left edge of a pane_

A touch region (A) around the drag handle takes priority over the back gesture, allowing people to perform a pane drag action instead of a system back gesture (B).

![The drag handle touch target area covers part of the back gesture touch target area.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2khd7s2-15.png?alt=media&token=d1e9278f-29ab-463e-af94-9af98160768f=s0)

_The pane drag handle UI overrides the back gesture_

In a two-pane [list-detail](https://m3.material.io/m3/pages/canonical-layouts/list-detail) layout, the pane drag handle doesn't appear until an item is selected.

![A list-detail layout with no items selected, and no drag handle visible.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx1u0o3-16.png?alt=media&token=b7b5c4f9-aba1-4fb5-978c-f40612fc4b9b=s0)

_A list-detail layout doesn't need a drag handle when no list item selected_

Avoid customizing the drag handle.

For products that can't use a drag handle, consider these other options for changing layouts:

- A toggle button to swap layouts
- In-app layout settings

![A list-detail layout for a chat app with a button for expanding the chat pane to a single-pane layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx1v4ra-17.png?alt=media&token=8eda0901-41ac-4b27-9456-968afd1d9524=s0)

_A layout toggle button could be used if drag handles are not possible_

### Drag handle accessibility

Avoid customizing the visual design of the drag handle.

The drag handle should have a hover state, like changing size, to indicate that the handle can be moved. A cursor should change to a hand when hovering.

By default, drag handles can only be dragged, not selected. Consider adding the ability to change layouts when tapped, double tapped, clicked, or activated using a keyboard. When using a keyboard, people should:

- Use **Tab** to navigate to the drag handle.
- Use **Space** or **Enter** to activate the drag handle. This can automatically resize the panes to a recommended size, or it can select the handle so **Arrows** can move the handle to predefined sizes.

For screen readers, describe the function of the drag handle in the accessibility label (like "Resize layout").

Use roles like **button** to explain that it's interactive, and states like **left pane expanded**, **right pane expanded**, or **panes equally sized** to explain its current position.

![Drag handle annotated with "Role = button."](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx29wzb-22.png?alt=media&token=300e5767-6583-4f48-8248-9e43c6be68c9=s0)

_The drag handle should behave like a button for keyboard users_
