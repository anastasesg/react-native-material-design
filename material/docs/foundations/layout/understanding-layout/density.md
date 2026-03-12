---
url: https://m3.material.io/foundations/layout/understanding-layout/density
crawled_at: 2026-02-03T00:00:00.000Z
category: foundations
section: layout
page_type: guidelines
status: complete
---

# Layout basics - Density

Layout is the visual arrangement of elements on the screen

## Overview

- Information density is the consideration of the amount of information visible on the screen
- The default target size should be at least 48x48 CSS pixels
- Users can change density as long as the density controls are accessible
- Apply density thoughtfully; not every layout needs it
- Layout and component scaling (component adaptation or component density) can allow users to scan, view, or compare more information at once

**Information density**

- Information density can be achieved through layout and design decisions without using component scaling
- Users may not benefit from increased density

**Component scaling**

- Components can adapt and change dimensions to allow users to scan, view, or compare different amounts of information
- Don't apply component scaling by default if it would result in a target below 48x48 CSS pixels

_Information density and component scaling can be used together to provide more information and additional user control_

## Information density

Information density refers to the amount of content (such as text, images, or videos) in a given screen space.

A layout's spacing dimensions, including margins, spacers, and padding, can change to increase or decrease its information density. High density layouts can be useful when users need to scan, view, or compare a lot of information, such as in a data table. Increasing the layout density of lists, tables, and long forms makes more content available on-screen.

Consider density settings in the context of a device. Although a user may prefer a denser layout for desktop, they may not for mobile. Density shouldn't automatically change across window-size classes or device orientation without users changing it.

![High density layout](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzjckoeo-3.png?alt=media&token=1586220d-a76c-4bf0-b086-ac4b932144c2=s0)

_Do: Consider using higher density information design when users need to scan lots of information_

![News website on desktop displaying a high information density.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzjcmxrs-4.png?alt=media&token=dc7bd078-f7d4-46e4-9685-d4a248f9b37b=s0)

_Consider the amount and priority of information on-screen. Higher density can be useful for data-rich sites (news, financial portals, dashboards) where users expect lots of information quickly._

![News website on desktop displaying a low information density.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzjcnouc-5.png?alt=media&token=f05c1dff-6a12-4bb2-ba50-8ee6494a10b7=s0)

_Lower density can be better for sites prioritizing aesthetics, a focused message, less information, or easier navigation_

## Component scaling

The component density scale controls the internal spacing of individual components.

The density scale is numbered, starting at 0 for a component's default density. The scale moves to negative numbers (-1, -2, -3) as space decreases, creating higher density.

Higher density is typically applied by decreasing the top and bottom padding or overall height by 4dp.

![Three buttons, with densities of +1, 0, and -1.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzje0jnk-7.png?alt=media&token=3c357518-6c0a-4ca3-a637-e159430ff40f=s0)

_Buttons in 3 different densities. Apply button density based on the needs and layout of a design._

Center the grouped element within the component container.

Text size shouldn't change as the container size scales.

![Stacked element showing 20 dp between label and input](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzje23wv-8.png?alt=media&token=886dc00f-73a5-485e-8bd7-2b6271c65482=s0)

_The measurement between the label and input is 20dp_

![Parent container showing label above input.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzje3e0s-9.png?alt=media&token=13938623-bd72-4399-b745-99f5a4e34c4e=s0)

_The label and input are centered within their parent container_

![Dropdown menu selectable space height of 36 dp](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzje4oe2-10-dont.png?alt=media&token=1e4ca720-f5d4-4657-b46e-95a328a8c983=s0)

_Don't: Don't increase density in UIs that involve focused tasks, such as selecting from a menu. It reduces usability by limiting selectable space._

![Single-line snackbar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzje5tgh-11-dont.png?alt=media&token=fa510b50-4502-4398-a69a-8bcba6cbeb7a=s0)

_Don't: Don't increase the density in components that alert the user of changes, such as snackbars or dialogs_

### Avoid applying component scaling by default

- Don't apply component scaling to layouts by default that lower the target size below a default size of 48x48 CSS pixels
- Allow users to opt for a higher density layout or theme, and provide a simple, accessible way to revert to default best practices

People should be able to **opt in** to dense layouts and components.

To ensure that density settings can be easily reverted, targets in settings interactions must follow defaults (48x48 CSS pixels).

![A density menu with large, medium, and small options to customize the screen layout of a table on desktop.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzje9ukn-12a.png?alt=media&token=a179a73f-0d78-4809-ac1d-b1cc696d9901=s0)

## Targets

Dense components can be less accessible because interactive elements are smaller, so use caution when increasing information density.

![Selectable target of only 40 dp](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzjqo90o-13-caution.png?alt=media&token=6f36346e-923d-4b40-9453-764afeaaf502=s0)

_Caution: Use caution when applying component scaling where selectable targets will be reduced to less than the 48x48dp best practice and only apply density where it provides a better user experience._

Use caution when applying density to interaction targets. Following best practices, accessible targets should retain a minimum of 48x48dp, even if their visual element (such as an icon) is smaller.

![Settings button is 24 by 24 dp, but has interaction target of 48 x 48 dp.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzk8ysbx-15.png?alt=media&token=51c7c9b4-9426-4e91-93b9-3c22e90ab6bf=s0)

_The target should remain 48x48, even if the icon is smaller._

![Button with height of 36 dp and interaction target of 48 dp](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzjqrzlp-15.png?alt=media&token=b7dcf871-268a-403f-825b-09dc0c9e6ae1=s0)

_The interaction target of a common button can be larger, as long as it meets the 48x48dp minimum size._

## Pixel density

The number of pixels that fit into an inch is referred to as pixel density. High-density screens have more pixels per inch than low-density ones. As a result, UI elements of the same pixel dimensions appear larger on low-density screens, and smaller on high-density screens.

To calculate pixel density:

Screen density = Screen width (or height) in pixels / Screen width (or height) in inches

![Magnified UI element showing a high number pixels in the focus area](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzjquwp8-16.png?alt=media&token=1f84c301-af60-49ea-a158-aa8ff21bf1cc=s0)

_A high-density ui element_

![Magnified UI element showing the low number of pixels in the focus area](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzjqw7id-17.png?alt=media&token=5b626bbc-0279-4d3a-ad2b-d44931cc552a=s0)

_A low-density UI element_

### Density-independent pixels

Density-independent pixels, written as dp, are flexible units that scale to have uniform dimensions on any screen. They provide a flexible way to accommodate a design across devices. Material design system uses density-independent pixels to display elements consistently on screens with different densities.

A dp is equal to one physical pixel on a screen with a density of 160.

To calculate dp: dp = (width in pixels * 160) / screen density

![Screen with grid representing low number of pixels](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzjqylun-18.png?alt=media&token=0d6a5447-b65e-4bfc-bc2e-0d155c09cea1=s0)

_Low-density screen displayed with density independence_

![Screen with grid representing high number of pixels](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzjr0140-19.png?alt=media&token=ef52565c-7aef-4004-8bec-078cb24cbb93=s0)

_High-density screen displayed with density independence_

| Screen physical width | Screen density | Screen width in pixels | Screen width in dps |
| --- | --- | --- | --- |
| 1.5 in | 120 | 180 px | 240 dp |
| 1.5 in | 160 | 240 px | 240 dp |
| 1.5 in | 240 | 360 px | 240 dp |
