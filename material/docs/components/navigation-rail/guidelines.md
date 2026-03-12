---
url: https://m3.material.io/components/navigation-rail/guidelines
lastmod: 2026-01-26
crawled_at: 2026-03-10T00:20:00.000Z
category: components
section: navigation-rail
page_type: guidelines
status: complete
---

# Navigation rail

Navigation rails let people switch between UI views on mid-sized devices

![Colorful, purple navigation rail shown collapsed and expanded.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fueyh1-01.png?alt=media&token=c9edba18-9dee-44b1-9657-4dd1cdf2ff74=s0)

_Use the menu icon to transition between collapsed and expanded navigation rails_

## Usage

The navigation rail can display navigation items, a menu, and a floating action button (FAB) in a vertical orientation.

There are two variants of navigation rails, **collapsed** and **expanded**, which can easily transform into each other when the menu button is selected.

### Collapsed

The **collapsed** nav rail runs along the leading edge of the window, and should contain 3-7 navigation items. It should not be hidden.

It can be used in medium to extra large window sizes, such as tablets and desktop. In medium windows with few destinations, consider using a navigation bar instead. Compact windows should always use a navigation bar.

![Collapsed navigation rail with "timer" icon on FAB.](https://lh3.googleusercontent.com/2h46aO3pI3H6sk6nAElUSXgQFeS-w8ASJc8WcVkSbZ4bM8FJoTDWdNodAqWyROvWADumQNodvIQiUGDoBjq162uNRm52qDDoSVxUvoCDeNDx=s0)

_A navigation rail should be the only visible navigation element_

### Expanded

The **expanded** navigation rail can be standard or modal, and should always open from a menu icon. An expanded rail can reveal secondary destinations not visible when collapsed.

The **standard** configuration is placed beside body content. It's best for larger windows with lots of available space.

The **modal** configuration overlaps the body content, and should be opened from a menu icon. Use the modal configuration for:

- Information dense layouts where space is limited
- Products with many navigation items

![Expanded navigation rail shown expanded by default and expanded over screen content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuf9qz-03.png?alt=media&token=3377b89c-7c1c-4a94-8282-d48530c4d81e=s0)

_A navigation rail can be expanded by default on larger screen sizes, or can be expanded over content on smaller screen sizes_

In immersive experiences, the expanded navigation rail can be hidden entirely, appearing only when the menu icon is selected.

The collapsed navigation rail should not be hidden.

![Navigation rail and hidden navigation rail with menu icon button for expansion.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fufhuq-04.png?alt=media&token=e13c10f7-7c71-4702-a6e5-a4d6842ad1b9=s0)

_The expanded navigation rail can also be hidden, appearing only when the menu icon is selected_

## Anatomy

![10 elements of expanded and collapsed navigation rails.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fug0sy-05.png?alt=media&token=465bf07d-fe91-4cfa-97c3-e9624609ed50=s0)

1. Container
2. Menu (optional)
3. Floating action button (FAB) (optional)
4. Icon - active
5. Label text - active
6. Active indicator
7. Icon - inactive
8. Large badge (optional)
9. Large badge label
10. Small badge
11. Label text - inactive

### Container

The navigation rail should be placed on the leading edge of the window. This is the left side for left-to-right languages, and the right side for right-to-left languages.

The container fill can be turned off so the nav rail appears directly on the surface. When doing this, make sure all items have a minimum of 3:1 color contrast.

![Right-to-left navigation rail in Hebrew, and left-to-right navigation rail in English.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fugb5b-06.png?alt=media&token=9bd7ddad-b14f-4131-bdd4-bbdb07283569=s0)

_The navigation rail should be placed on the leading edge of the window_

The navigation rail should always run vertically along the side of a layout. Don't make it horizontal.

Use a navigation bar for horizontal navigation.

![Horizontal navigation rail on timer screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmacys6lz-07.png?alt=media&token=274b5d1b-6978-4123-9456-4a822df58bc7=s0)

_Don't: Don't use the navigation rail horizontally. Use a navigation bar instead._

Navigation rail items can be aligned as a group to the top or center of a layout. On tablets, use center alignment to make it easier to reach items.

The menu icon and FAB should always be top-aligned.

![Navigation rails with different alignments.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuh0i5-08.png?alt=media&token=32641191-5400-4aba-829c-138e2f3c6d1e=s0)

_Top and center aligned rail destination placement_

### Menu (optional)

The menu button can transition between the **collapsed** and **expanded** navigation rails.

Once expanded, the rail can reveal secondary destinations.

When the navigation rail is expanded, the menu icon should change to represent that it can be collapsed.

![Expanded and collapsed navigation rails controlled by a menu icon button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuh7km-09.png?alt=media&token=ae84210a-74d7-4fac-82f1-f7a0356b23d0=s0)

_A navigation rail can expand to reveal more destinations_

### Floating action button (FAB) (optional)

The container of the navigation rail is ideal for anchoring the FAB to the top of a screen, placing the app's key action above navigation destinations.

When nested within another component, such as the navigation rail, the FAB's resting elevation should be level 0.

![Navigation rail with a FAB button at the top of the screen.](https://lh3.googleusercontent.com/oYiKoFrv-NTEJMP1NoGGpnlw0RTHmfpGWDm7KmDgeKzvpXq6tMZvMjBzUcZkXpnEK2Lb_cbeWRkwS4i4RGn1zfW0N4RcwSGVgltbcvmD6vY=s0)

_Do: A top-aligned FAB in the navigation rail_

![Navigation rail with a FAB button at the bottom of the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuhrl8-11.png?alt=media&token=5e953e4b-20d1-4d7f-99f0-c89d39b052e9=s0)

_Don't: Avoid placing the FAB below navigation items_

The top of the rail can also be used for a logo, however avoid using logos that could be mistaken as buttons.

Don't use a logo as a menu button to expand the navigation rail.

![Navigation rail with Material design logo at the top of the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuhyto-12.png?alt=media&token=3e219498-f5cc-4a46-824c-4fb660bc7743=s0)

_Caution: Use caution when placing logos in the rail where they might be confused with an action or destination_

### Active indicator

The active indicator shows which page is being displayed.

![Navigation rail with active indicators present for the current screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuicr9-13.png?alt=media&token=7755879a-0c18-40e2-89c8-e51757d7c7b2=s0)

_Do: Use the active indicator only for the current open page_

![Navigation rail with active indicators present for all navigation items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fujiob-14.png?alt=media&token=ed0b9441-30cf-444e-9fde-c84be948b56d=s0)

_Don't: Don't use the active indicator for more than one navigation item at a time_

The active indicator hugs the label text in the expanded nav rail. To achieve a similar style to the baseline navigation drawer, consider modifying the active indicator to fill the container.

The target area should always span the full width.

![Navigation rail with active indicator that hugs the text and icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fujt7v-15.png?alt=media&token=8405c84a-2929-4d68-8bbd-97120c4c41ab=s0)

_The active indicator hugs contents in the expanded nav rail_

![Navigation rail with active indicator that is larger than the content within it.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fujxyu-16.png?alt=media&token=bb433446-a6c0-433d-bdcb-181431e6e126=s0)

_Override the indicator to fill the container to more closely resemble the baseline navigation drawer_

### Icons

Navigation rail items must use icons that symbolize the content of their page. Browse popular icons on [Google Fonts](http://fonts.google.com/icons).

![Navigation rail with icons that fit the destinations, like a timer icon and label leading to a timer feature.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuk4ze-17.png?alt=media&token=8210a6c6-b488-46e3-aa46-ec3c18a3021d=s0)

_Icons should symbolize the content of the page they open_

When a destination is selected, the icon fills and changes color. An active indicator appears behind the icon.

![Icons with and without an active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fukavr-18.png?alt=media&token=fa0ab3db-3f7a-47ff-84c2-b0d63ac890f7=s0)

_Selected navigation items have an active indicator, a filled icon, and a more prominent color_

### Label text

The label text should be a short, meaningful description of each navigation destination and another way for users to understand an icon's meaning.

All navigation items require a one word label text.

![Navigation rail with clear text labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fukhnw-19.png?alt=media&token=a2fe92ce-45d4-4c7b-8c51-5066b3cf7596=s0)

_Do: Write clear and concise labels that describe the destination page_

Avoid wrapping long labels when possible. If necessary, create a line break between words, or hyphenate longer words.

![Navigation rail with lengthy text labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fune8p-20.png?alt=media&token=aaa6d4fd-a007-4a85-ac3c-8063f4f0767e=s0)

_Caution: Break up longer phrases into two text lines if necessary_

Labels should be short enough to not be truncated. Don't shrink the type scale to fit longer text labels.

![Navigation rail with truncated text label with ellipses.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0funlrw-21.png?alt=media&token=756fbcf4-1cf8-4157-8a41-69c43e76bc2e=s0)

_Don't: Don't truncate or display an ellipsis in place of label text_

![Navigation rail with small text label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0funqlw-22.png?alt=media&token=f25512e4-0821-4d53-9b71-41f2870830fc=s0)

_Don't: Don't reduce the type size to fit more characters into a destination label_

### Badges

Navigation rail icons can include badges to communicate dynamic information about the destination, such as counts or status.

In compact nav rails, the badge is placed in the upper right corner of the icon. In expanded nav rails, the badge should be placed next to the label text.

![Navigation rail with badges on each icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuomdi-23.png?alt=media&token=faa3cb30-f478-4450-946a-5be944155717=s0)

1. Small badge on a rail destination
2. Large badge with a number
3. Large badge with a maximum character count

### Divider (optional)

A vertical divider can help separate the rail from app content. The divider should be positioned on the edge of the rail container that's adjacent to the app's content area.

![Navigation rail with divider separating it from screen content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuouq0-24.png?alt=media&token=92b886dc-b887-4991-9487-e7b720f909a8=s0)

_A divider can make the navigation rail container distinct from other on-screen content_

## Placement

In adaptive layouts, the navigation rail should be placed outside any panes, always along the leading edge of the window. Don't place it within body content.

When the navigation rail is hidden, the body content can fill in the remaining space as long as the menu icon is still accessible.

Tabs can be used alongside a navigation rail to create an extra layer of visible navigation.

<!-- Video: Navigation rail collapsed next to screen content, and expanded overlaying screen content with secondary destinations. -->

_Expanded navigation rails can open from menu buttons on mobile_

## Adaptive design

For more, see [adaptive design](https://m3.material.io/m3/pages/adaptive-design/).

### Resizing

When moving from a large screen to a small screen, a navigation rail can transform into a navigation bar, providing the same quick access in a configuration that's easier to use on smaller displays. Never use the navigation rail and navigation bar simultaneously.

Only use navigation rails for medium window size classes and larger. Don't use a navigation bar. If there are more than five destinations, consider using a modal expanded nav rail instead.

**Compact:** Don't use a standard navigation rail for compact layouts due to space constraints. Use a navigation bar instead.

**Medium:** Use a navigation rail, especially if prioritizing persistent vertical navigation over maximizing vertical content space.

**Expanded to extra-large:** Use a navigation rail, not a navigation bar. Consider available horizontal space and the number of destinations when choosing between standard and modal.

![Navigation bar on a phone screen and navigation rail on a tablet screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fupcvd-26.png?alt=media&token=b1915086-e325-4b2a-946e-eb41d37a9ae7=s0)

_On smaller devices, use a navigation bar. On larger displays, use a navigation rail._

### Presentation

When the navigation rail transitions from collapsed to expanded, the contents of the page should automatically adjust to fit.

The contents of the navigation rail also expand to fill the space. For example, the FAB should transition into an extended FAB.

Extra destinations can be shown in an expanded nav rail.

<!-- Video: Extra destinations in an expanded navigation rail. -->

_Use a standard expanded rail when there are secondary destinations or actions that have lower priority than the main navigation items_

## Behavior

### Scrolling

Destinations in the navigation rail should remain visible and fixed when scrolling vertically.

<!-- Video: Screen content scrolls while rails stay fixed. -->

_Rail destinations remain fixed while on-screen content scrolls vertically_

If a layout scrolls horizontally, the rail can scroll off-screen or remain fixed. To distinguish that content is scrolling underneath the rail, use a divider or add elevation to the rail.

<!-- Video: A nav rail with a divider between it and the page's content. -->

_A divider and color fill change create visual distinction between the rail and horizontally scrolling content_

<!-- Video: A nav rail with slight elevation. -->

_Elevating the rail to level 1 creates visual distinction between the rail and horizontally scrolling content_

### Selection

When a destination is tapped, the destination screen uses a [top level](https://m3.material.io/m3/pages/motion-transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. In addition, the icon becomes filled and the active indicator expands from the center of the icon.

<!-- Video: Selection transition between one navigation item and another. -->

_Tapping a destination uses a top level transition pattern_

### Back

On Android, a gesture called predictive back allows people to swipe left or right on the screen to go back or dismiss modal components.

- Previous screen is revealed in a preview to signal the destination
- Predictive back only applies to the **modal expanded** navigation rail.

A list of compatible components is available on the [gestures page](https://m3.material.io/m3/pages/gestures/).

<!-- Video: Modal expanded navigation rail with Android predictive back feature. -->

_The nav rail pops off the edge of the window during the predictive back gesture_
