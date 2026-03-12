---
url: https://m3.material.io/components/toolbars/guidelines
lastmod: 2025-09-26
crawled_at: 2026-03-09T20:01:00.000Z
category: components
section: toolbars
page_type: guidelines
status: complete
---

# Toolbars

Toolbars display frequently used actions relevant to the current page

![5 toolbars of various colors, elements, and actions.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xi1w6d-01.png?alt=media&token=c58c89f5-5f11-410e-83e9-527495d6a51c=s0)

_Toolbars can be used for a wide variety of use cases_

## Usage

Use a toolbar to provide actions related to the current page.

Toolbars can contain many actions and can scale to show more actions in larger windows.

![Vibrant toolbar at bottom of mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0akotbi-02.png?alt=media&token=7c57efcb-0ced-4383-923c-2bb9b0d8bb25=s0)

_A toolbar provides actions related to the current page_

There are two variants of toolbars:

- **Docked toolbar**: Spans the full width of the window. It's best used for global actions that remain the same across multiple pages.
- **Floating toolbar**: Floats above the body content. It's best used for contextual actions relevant to the body content or the specific page.

The baseline **bottom app bar** is no longer recommended, but is still supported.

![Docked toolbar example.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0akx0bq-03.png?alt=media&token=2ddeb9e7-904c-48c4-82d2-8eb2df8b511f=s0)

_Docked toolbar shows global controls_

![Floating toolbar example.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0akxxgm-04.png?alt=media&token=d1f96ec5-e3c6-4936-a0ff-9456fabe38b1=s0)

_Floating toolbar show controls relevant to the current page_

When actions don't fit in a toolbar, add a menu.

![Toolbar showing local navigation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2ytl4us-05.png?alt=media&token=3beb745d-8031-460f-b3b5-400d481b0f7d=s0)

_Toolbar actions can open a menu_

There are two color configurations:

- **Standard**: A low-emphasis color scheme best used for focusing attention on the body content.
- **Vibrant**: A high-emphasis color scheme that draws attention to the controls. It can also indicate a temporary change in the page behavior, such as entering edit mode.

Consider using alternative color roles to create greater or lesser emphasis depending on the needs of the app. Experiment with different color roles to achieve different effects.

![Toolbar with low-emphasis controls.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al28lo-06.png?alt=media&token=1f6d5d66-1407-4636-9e31-635eec6aac7b=s0)

_Use the standard color scheme to draw focus to content outside the toolbar_

![Toolbar with high-emphasis controls.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al3avf-07.png?alt=media&token=c786ee9c-8199-4d30-99d7-ed8b8d659cb2=s0)

_Use the vibrant color scheme to emphasize controls or actions_

### Toolbars & navigation bars

The toolbar and navigation bar are both placed at the bottom of the window, so should **not** be shown at the same time. Show the navigation bar on primary pages, and toolbars on subsequent pages with actions.

![A navigation bar shown on the main email Inbox page, and a toolbar shown when reading the email.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al4vpg-08.png?alt=media&token=006079a0-0c27-40f7-a3c6-72c86706ebe5=s0)

_Navigation bar on a primary page / Toolbar on a secondary page with contextual actions_

Floating toolbars can be used as tabs between related subsequent pages in the product hierarchy.

This helps group similar pages together, and shows that the selection affects the body content underneath.

![Floating toolbar with secondary navigation labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alklw0-09.png?alt=media&token=864f5358-84b4-4b4e-b438-9a58fae853f0=s0)

_Do: Keep navigation distinct, and use a toolbar to display local navigation on a specific page_

Consider the existing app hierarchy when using a toolbar for local navigation. Avoid redundant or confusing navigation combinations in the same view.

![Floating toolbar with secondary navigation labels displaying above a bottom navigation bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aln2r9-10.png?alt=media&token=f547cd2c-f7aa-4780-a701-89480ad92506=s0)

_Don't: Don't show a navigation bar and a toolbar with navigation controls at the same time_

## Anatomy

![Diagram of toolbar layouts.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xiiwbe-11.png?alt=media&token=df3567cb-3de9-4130-87b2-d6496e2b50d6=s0)

1. Container
2. Elements

### Container

The docked toolbar's container spans the full width of the window.

Avoid applying rounded corners to the container. This can imply the container expands or changes upon interaction.

![Docked toolbar with square corners.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0als248-12.png?alt=media&token=5de2e6dd-e260-460d-8b24-ec4616d068f3=s0)

_Do: Use straight corners for docked toolbars_

![Docked toolbar with rounded corners.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alr7n0-13.png?alt=media&token=67d0f0c3-77bf-413d-b028-a3704d62ddde=s0)

_Don't: Avoid modifying the container shape_

As long as there's a minimum of 16dp padding on the leading and trailing edge, arrange controls inside however you see fit. The 32dp padding between items is just the default.

All elements need a minimum 48x48dp target area to be accessible.

Be cautious of including too many controls as it can be overwhelming.

![Docked toolbar with too many controls.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0altzpa-22.png?alt=media&token=982f6de8-05e5-4918-8395-3172ba98a767=s0)

_Don't: Don't overwhelm people with too many controls_

The floating toolbar's container should be fully visible on screen. If more actions are needed, use an overflow menu.

![Floating toolbar with overflow menu icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alvr9d-14.png?alt=media&token=43b6b0e0-3785-4b32-b814-9334d1df3604=s0)

_Do: Choose the most essential actions to show on screen by default_

![Floating toolbar that expands off edge of screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alwqwe-15.png?alt=media&token=34941365-0b02-426e-98aa-5a7182146ef3=s0)

_Don't: Floating toolbars shouldn't exceed the edge of the window or pane_

#### Elevation

Floating toolbars have elevation by default.

If the content beneath the toolbar is visually distinct, elevation can be removed.

![Vibrant floating toolbar that's easy to see in front of a neutral text background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xiazxd-17.png?alt=media&token=1fb4d961-4c77-46d8-8e1a-bacee6d1344e=s0)

_The elevation on floating toolbars can be removed if on a visually distinct background_

### Flexibility & slots

When configuring a toolbar, think of it as a container with several slots.

These slots can be populated by buttons, icon buttons, images, text fields, or any kind of custom component.

Icon buttons provide an even hierarchy of controls. Mixing in a filled icon button can help add emphasis to a single action.

![5 toolbars with slots, and various combinations of buttons, icon buttons, filled icon buttons, and text fields.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aly7tp-16.png?alt=media&token=eef76f70-653b-4316-a4e5-b4c3efe04ec9=s0)

_Toolbars are made of slots that can contain many kinds of actions_

Visually emphasizing a single action more than others is an effective way to create hierarchy and guide people to controls they use most often. Avoid emphasizing more than one action at a time.

Some common ways to add emphasis to toolbar actions include:

- Use different icon button color styles, such as filled, tonal, and standard
- Customize the color roles of a single action, such as a primary or secondary palette
- Use wide and narrow icon buttons
- Pair the toolbar with a FAB

![2 floating toolbars, 1 with a filled action button and 1 paired with a FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am06ae-18.png?alt=media&token=b78bd5dd-7b9b-4026-8782-bd7299a30180=s0)

_Two different ways to create a high emphasis action in toolbars_

![Floating toolbar with primary action and FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am2tq8-19.png?alt=media&token=ade3aae3-04a8-48c5-ad34-a44e19f82385=s0)

_Don't: Don't emphasize multiple buttons with bold, primary colors, such as a button and FAB together. Emphasize one action at a time._

![Floating toolbar with different control designs.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am3wil-20.png?alt=media&token=fa9517c1-99a1-41ec-bb2a-3add03657f0a=s0)

_Don't: Avoid mixing too many different controls in the same toolbar. A consistent control design keeps things clear._

Avoid using square icon buttons in floating toolbars. Their square shape conflicts with the fully-rounded shape of the floating toolbar container.

Square buttons can be used in the docked toolbar.

![A floating toolbar, which is rounded, with squared icon buttons inside.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xigk3q-22.png?alt=media&token=834f844e-bf4a-482b-a55c-58b8e2a5dc96=s0)

_Don't: Don't use square filled icon buttons in floating toolbars_

### Floating toolbar with FAB

A FAB can be placed next to a floating toolbar to present one high-priority action alongside a unified set of toolbar actions.

Use a FAB for the highest-priority action in the view, or to complement the controls.

![3 toolbars paired with FABs.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am631l-21.png?alt=media&token=ea7acd11-1ec9-4fee-b237-adf2c9636730=s0)

_Floating toolbars can be paired with FABs_

## Position & orientation

Only place docked toolbars at the bottom of the window.

If using other bottom-aligned elements, such as a navigation bar, don't use a docked toolbar.

![Docked toolbar on mobile.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ama5z3-22.png?alt=media&token=fcca3ccd-3347-4482-9732-ed9ce3b21b72=s0)

_Docked toolbars are always at the bottom of the window_

Floating toolbars can be horizontal or vertical.

Horizontal toolbars should have a minimum 16dp margin from the edge of the window.

![Floating toolbar on mobile.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amca2n-23.png?alt=media&token=f1c23645-3eec-4330-8159-b7add81a9481=s0)

_Horizontal floating toolbars should be at least 16dp from the edge of the window_

In larger window sizes, floating toolbars can be vertical and placed on either side of the screen.

Vertical toolbars should have a minimum 24dp margin.

![Vertical floating toolbar with 24dp margin.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7ximrxw-26.png?alt=media&token=e501bab9-334b-4454-ade0-c6f31b83ff75=s0)

_Maintain at least a 24dp margin for vertical toolbars_

To keep vertical toolbars compact, don't use wide icon buttons.

Use narrow or default icon buttons instead.

![Toolbar showing local navigation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amgeqc-24.png?alt=media&token=aad0bae2-9282-40cc-a472-3025c8addcdb=s0)

_Don't: Using wide buttons with vertical toolbars can unnecessarily widen toolbar containers and hide other UI elements_

Vertical toolbars should be positioned opposite the navigation rail to balance out the screen and keep actions easy to access.

When showing a navigation rail and vertical floating toolbar at once, use the centered configuration of the navigation rail.

![Large screen UI showing both a navigation rail and vertical floating toolbar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amkwhr-TBD.png?alt=media&token=596f104c-915a-47fb-a863-6bf778a8331a=s0)

_When a nav rail is visible, the floating toolbar should be vertical on the opposite edge of the window_

## Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. [More on adaptive design](https://m3.material.io/m3/pages/adaptive-design)

### Resizing

#### Docked

The docked toolbar should always span 100% of the screen width.

In compact window sizes, elements in the toolbar should be evenly spaced.

In medium window sizes and larger, adjust the padding between controls to create a comfortable layout. This can be achieved by:

- Centering all elements
- Customizing to center a key action, and aligning other elements to the edges

![Docked toolbar with evenly spaced elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma2vff01-29.png?alt=media&token=4ac502e5-7602-445e-834d-286226583b65=s0)

_Docked toolbar items should be evenly spaced in compact windows_

![Docked toolbar with centered elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma6y2uq6-30.png?alt=media&token=deab82d9-57fa-4c3f-a2da-b60dc77a01b4=s0)

_In medium window sizes and larger, create a spacious layout by centering all elements_

![Docked toolbar with central action and some elements pushed to the edge.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma6y2g0q-31.png?alt=media&token=06384f75-0a0a-43ce-9b0a-f8af3c53130e=s0)

_Align controls to the edge of the screen to make them easier to reach on tablets, and to better highlight a primary action in the middle_

On web and large screens, the docked toolbar can be rounded. Dividers can be used to organize large amounts of items. Only shrink the height and use extra small buttons if vertical space is limited.

![Docked toolbar with 15 actions for text editing on large screens, organized with dividers.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmbv5jv5l-33%20Old.png?alt=media&token=ac965689-4c43-4519-9ae8-bd2d100f65c4=s0)

_On web and other large screens, docked toolbars can be rounded and placed in different parts of the page_

#### Floating

The container should only be as big as needed to hold the items inside before reaching the 16dp margin.

If there's not enough space for all items, put them in an overflow menu in the trailing slot. As the window size expands, more actions can be revealed.

The floating toolbar width can also be capped to keep it smaller and hide more elements.

![Floating toolbar in compact window with excess padding.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma1lkstz-32.png?alt=media&token=7c230191-dce6-498c-b7c6-e7a680fec810=s0)

_Don't: Don't add extra space to a toolbar beyond its necessary items_

![Floating toolbar in expanded window class.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma1lm7ro-33%20(1).png?alt=media&token=415f33b0-19f9-4b55-87e1-d94689e61122=s0>)

_At larger screen sizes, the container can display more controls before hitting the 16dp margin_

Vertical toolbars aren't recommended for compact windows.

They take up a significant area of the screen and may feel visually overwhelming, especially on screens with complex layouts.

Only use them when the screen is simple or when the toolbar has a few controls.

![Vertical toolbar in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xmqa2l-34.png?alt=media&token=b12e1381-1bc0-41e6-8898-1603c9aadc57=s0)

_Caution: Vertical toolbars can cover important content in compact windows_

### Presentation

In larger window sizes, floating toolbars can be aligned to opposite edges of the screen so they're easy to reach and group similar actions. For example, consider placing the undo and redo actions in one toolbar, and editing controls like highlight, erase, and select in another. Stylistic differences can help emphasize each toolbar's purpose and clarify hierarchy.

![2 toolbars, each with distinct stylistic treatment and actions.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amsqw6-29.png?alt=media&token=a2c29c55-b09f-40a1-9a0d-48d3316f5811=s0)

_Multiple toolbars with different stylistic treatments can create hierarchy and distinguish different kinds of actions_

Don't use multiple toolbars in compact windows. There typically isn't enough room on screen.

Instead, use one toolbar for all actions.

![Multiple toolbars in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xmw01r-36.png?alt=media&token=488e8d77-d650-48d5-abed-a727d821d65c=s0)

_Don't: Avoid using multiple toolbars in smaller windows_

Actions at the trailing edge of the toolbar can collapse into an overflow menu at smaller window sizes, and become visible again at larger sizes.

_Actions at the trailing edge collapse into an overflow menu_

### Right-to-left languages

In right-to-left (RTL) languages, mirror individual items that need it, like icons and text direction. If the order of actions is important, flip the order of the actions as well.

![Next button is on trailing edge for a LTR language.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xmygdb-37.png?alt=media&token=9f00e9fc-1b60-4dac-8974-353a25084a2b=s0)

_In LTR languages, the **Next** button is intentionally placed on the trailing (right) edge_

![Next button is now on the trailing edge, at left, for RTL language.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xmz6n4-38.png?alt=media&token=0be61ff8-5427-4330-9ddf-e59303f1c9b5=s0)

_In RTL languages, reverse the order so **Next** remains on the trailing edge when flipped, now on the left. Text is not translated to illustrate mirroring._

## Behavior

### Scrolling

Docked toolbars can either remain on the screen during scroll, or animate offscreen.

_Docked toolbars can animate offscreen_

Floating toolbars can remain on the screen, animate offscreen, or collapse into a single, high-emphasis action on scroll.

_Floating toolbars can animate off screen_

On Jetpack Compose, the floating toolbar can collapse to a FAB or key action on scroll.

_Floating toolbars can be customized to do other actions on scroll, like collapse into a single action_

Don't collapse actions and scroll at the same time.

_Don't: Toolbars shouldn't both collapse and transition off page_
