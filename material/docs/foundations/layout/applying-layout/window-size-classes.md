---
url: https://m3.material.io/foundations/layout/applying-layout/window-size-classes
crawled_at: 2026-02-03T00:00:00.000Z
category: foundations
section: layout
page_type: guidelines
status: complete
---

# Applying layout

Window size classes help create layouts that scale across devices of all shapes and sizes.

Devices of different sizes and orientations need different layouts. For example, a newspaper app might have a single column of text on a mobile device, but display several columns on a larger desktop device. This change in layout takes advantage of device capabilities and user expectations.

## Window size classes

A window size class is an opinionated breakpoint, the window size at which a layout needs to change to match available space, device conventions, and ergonomics.

All devices fall into one of five Material Design window size classes: compact, medium, expanded, large, or extra-large. Material window size classes are used on Android and Web.

Rather than designing for an ever increasing number of display states, focusing on window size classes sizes ensures layouts work across a range of devices.

![3 window size classes from small to expanded.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly6ugnwf-1.png?alt=media&token=da44385c-ea57-40d1-ac07-6ea0f30c1aec=s0)

_Compact, Medium, Expanded_

**Design for window size classes instead of specific devices because:**

- The amount of available window space is dynamic and changes based on user behavior, such as multi-window modes or unfolding a foldable device.
- Devices fall into different window size classes based on orientation.

| Window size class (width) | Width breakpoint (dp) | Common devices |
| --- | --- | --- |
| Compact | Under 600dp | Phone in portrait |
| Medium | 600-839dp | Tablet in portrait, Foldable in portrait (unfolded) |
| Expanded | 840-1199dp | Phone in landscape, Tablet in landscape, Foldable in landscape (unfolded), Desktop |

Large and extra-large window size classes are used on devices like laptops, desktops, and external monitors. These window size classes are supported on MDC-Android. [More on MDC-Android window size classes](https://developer.android.com/develop/ui/views/layout/use-window-size-classes?hl=en)

Note: Large and extra-large window size classes are coming soon to Jetpack Compose.

![2 large and extra-large window size classes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly6xa74l-2.png?alt=media&token=288695d6-abbe-46b9-8df5-c0957a34498d=s0)

_Large, Extra-large_

| Window size class (width) | Width breakpoint (dp) | Common devices |
| --- | --- | --- |
| Large | 1200-1599dp | Desktop |
| Extra-large | 1600+dp | Desktop, Ultra-wide monitors |

### Height window size classes

On Android, compact, medium, and expanded window size classes are also available for [height](https://developer.android.com/guide/topics/large-screens/support-different-screen-sizes#window_size_classes). These can be used to adjust the layout when available vertical space is unusually small or large.

However, since most layouts contain vertically scrolling content, it's rare that layouts need to adjust to available height.

## Designing across window sizes

![The 3 window size classes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly6xj4j0-1.png?alt=media&token=300fabc7-9e70-403e-9790-41136b7ad041=s0)

_Email app shown in the three window classes: compact, medium, and expanded_

![The 2 larger window size classes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly6xkbsd-2.png?alt=media&token=8da2de01-6e6e-494c-be33-562da2ad1e1e=s0)

_Email app shown in large and extra-large window classes_

Each product view should have a layout represented for each of the window size classes most appropriate for your platform and users.

Different components are recommended for performing the same function across the five layouts.

| Window size | Panes | Navigation | Communication | Action |
| --- | --- | --- | --- | --- |
| Compact | 1 | Navigation bar, modal expanded navigation rail | Simple dialog, Fullscreen dialog | Bottom sheet |
| Medium | 1 (recommended) or 2 | Navigation bar, Modal expanded navigation rail | Simple dialog | Menu |
| Expanded | 1 or 2 (recommended) | Modal or standard expanded navigation rail | Simple dialog | Menu |
| Large | 1 or 2 (recommended) | Modal or standard expanded navigation rail | Simple dialog | Menu |
| Extra-large | 1 to 3 (recommended) | Modal or standard expanded navigation rail | Simple dialog | Menu |

Start by designing for one window class size and then adjust your layout for the next class size by asking yourself the five questions below:

### 1. What should be revealed?

Parts of the UI that are hidden on smaller screens can be revealed in medium, expanded, large, and extra-large layouts.

For example, on a compact device the navigation drawer is collapsed by default and accessed via a menu button; on an expanded device, such as a large tablet or laptop, the navigation drawer can be open by default to reveal more actions and features.

![Email app layout in a compact window and an expanded window](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly7194ak-3.png?alt=media&token=c1474800-3202-4168-9623-869d10314063=s0)

_An email app's navigation drawer is revealed in the expanded window size class_

The same can be true for revealing additional [panes](https://m3.material.io/m3/pages/understanding-layout/parts-of-layout), such as when an expanded device has room to simultaneously display an inbox pane and a pane containing a selected email. Additional real-estate doesn't just mean making the same thing bigger.

![Messaging app layout in a compact window and an expanded window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly71aw97-4.png?alt=media&token=77d3b571-bbad-48e5-8b99-3b79a8f11cf0=s0)

_An expanded layout for this messaging app reveals a second pane showing message threads_

### 2. How should the screen be divided?

When dividing the screen into layout [panes](https://m3.material.io/m3/pages/understanding-layout/parts-of-layout), consider the window size class.

Compositions using a single pane work best on compact and medium window size classes while two panes work best for the expanded, large, and extra-large window size classes.

![Compact and medium windows have a single pane. The expanded, large, and x-large window size classes have 2 panes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly71dals-5.png?alt=media&token=48dda4cf-3fc5-49eb-be8b-ba25ca82bd0c=s0)

_Rough layout areas across three window class sizes_

Also consider content and interaction needs.

For example, two panes are possible in the medium window class but might not result in the most usable experience. Complex list items can make it hard to comfortably view content across two compressed panes.

However, lower density content that benefits from quick navigation between items might work well.

![Medium window with 2 panes of low-density content: an email setting menu and a list of setting switches.](https://lh3.googleusercontent.com/HRaoY-04xrG1embUpgmvJ7j_SBJl4iY0be87JtUMMkGRgUPgKKzDV3kNv2cyH1mqqp42-5p2p_hDbTBisMCooOsDIcg61mAnz8u5PZS8gDO6=s0)

_A settings view offering quick navigation and actions is a good use of two panes in a medium layout_

![Video app in a medium window has 1 pane for portrait layout and 2 for landscape.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly71gbju-7.png?alt=media&token=65bfa59d-7ca2-4fc3-830d-10ea091ed828=s0)

_Rotating a device often changes the window class. A two-pane layout for an expanded window size class may need to adapt to a one-pane layout for medium or compact window size classes._

Single-pane layouts can create focus attention on one action or view, creating a distraction-free environment for a specific goal such as:

- Playing a game
- Watching a movie
- Video calls
- Creative applications

![Video calling app in a single-pane landscape layout in an expanded window size class.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly71orzy-8.png?alt=media&token=caa36f3b-c04b-4f9a-b81a-287dd849c17f=s0)

_Immersive single-pane layout for a video call_

### 3. What should be resized?

Parts of the UI that are small on compact screens can become larger on medium and expanded screens. For example, a horizontally-oriented card on a mobile device can become more square-shaped on a larger tablet. The size of a pane can also be increased on larger screens, and its elements rearranged to make better use of the space. See [What should be repositioned?](https://m3.material.io/m3/pages/applying-layout/window-size-classes#2b82eea6-5d69-4a73-a7ab-8d9296f5a26d) for more information.

Consider resizing:

- Cards
- Feeds
- Lists
- Panes

Resizing elements can give imagery more prominence or make room for larger typography styles that enhance readability. This type of adaptation affects the scale of content and objects on screen, as well as their relationship to each other. For example, a text list on a mobile device can have adjusted margins, vertical spacing, and density to better fit medium window class devices like tablets.

In every window class, the ideal line length for text is 40-60 characters. When resizing elements containing text, use margins and typographic properties like line height, font weight, and typography size to keep lines within 40-60 characters.

![Card in compact and medium layouts. The image and text are rearranged and resized to be more legible in the medium layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly71qdlt-1.png?alt=media&token=6bf00ce8-7398-4a34-bda8-c72d4eb648cd=s0)

_A smaller card in a compact layout can be resized larger in a medium or expanded layout_

### 4. What should be repositioned?

A UI and its components can reflow or reposition to make use of additional space on expanded screens and in resized panes. Repositioning is also a way to match the ergonomic and input needs that change across device sizes, such as shifting actions from the bottom of a compact screen to the leading edge of medium and expanded screens. This method is similar to responsive design on the web.

Consider:

- Repositioning cards
- Adding a second column of content
- Creating a more complex layout of photos
- Introducing more negative space
- Ensuring reachability for navigation and interactive elements

Internal elements can be anchored to the left, right, or center as a parent container scales. Internal elements can also maintain fixed positions, as seen in the example of a floating action button (FAB) within a navigation drawer.

![Comparison of compact and medium window sizes with tabs anchored to the middle of the layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly71rl3v-2.png?alt=media&token=e6da0bad-d583-4b26-9e44-a962fdcf07d4=s0)

_Tabs can remain anchored to the middle of a layout in both compact and medium window class sizes_

In the case of a button, the icon and text label within the button container can remain anchored to each other, staying centered as the button container scales horizontally.

![Label text remains the same size and centered as button size increases.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly71sd6m-3.png?alt=media&token=7b136bb8-cb5d-4ab2-809f-2d7baf241717=s0)

_Button icons and label text can remain anchored to each other no matter the width_

### 5. What should be swapped?

As a layout changes across window size classes, components with similar functions can also be exchanged. This makes it possible to adjust a layout for large-scale changes to the ergonomic and functional qualities of an interface. For example, a bottom navigation bar in a compact layout can be swapped with a navigation rail in a medium layout, and a navigation drawer in an expanded layout.

Use caution when swapping components by ensuring that the interchangeable components are functionally equivalent. Do not, for example, swap a button for a chip. Use caution when changing between list items and cards.

The component swap should always serve a functional and ergonomic purpose for the user.

![A compact layout's navigation bar becomes a navigation rail in an expanded layout.](https://lh3.googleusercontent.com/rEWhNlRdKyXiKPA9zAWCoNJaoqjLdSx9dX4uVbdYVz1yX2toutEla7bD33jVb-gKS-3g6alsKBBDpVwhjTK3PKlopZB2kxrrT-IBrY2voG3Kag=s0)

_Do: Swap a navigation bar in a compact layout for a navigation rail in a medium or expanded layout_

![A compact layout's navigation rail becomes a navigation drawer in an extra-large layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalmo6nt-5.png?alt=media&token=32fdff3b-1ae6-4aca-9587-8a1412bbe701=s0)

_Do: A collapsed navigation rail in medium or expanded layouts can become an expanded navigation rail in large or extra-large layouts_

![A button is swapped out for a menu in a shopping app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly71u6me-6.png?alt=media&token=afb0a2ca-82de-400c-8472-dac35786bb3a=s0)

_Don't: Don't arbitrarily swap components that aren't functionally equivalent, such as swapping a button with a menu_

#### Common swappable components

| Component type | Compact | Medium | Expanded |
| --- | --- | --- | --- |
| Navigation | Navigation bar | Collapsed navigation rail | Collapsed navigation rail |
| Navigation | Modal expanded navigation rail | Modal expanded navigation rail | Standard expanded navigation rail |
| Communication | Simple or full-screen dialog | Simple dialog | Simple dialog |
| Supplemental selection | Bottom sheet | Menu | Menu |
