---
url: https://m3.material.io/components/icon-buttons/guidelines
lastmod: 2025-09-26
crawled_at: 2026-02-04T12:00:00.000Z
category: components
section: icon-buttons
page_type: guidelines
status: complete
---

# Icon buttons

Icon buttons help people take minor actions with one tap

## Usage

Use icon buttons to display actions. There are two types of icons buttons: **default** and **toggle**.

- Default icon buttons can open other elements, such as a menu or search.
- Toggle icon buttons can represent binary actions that can be toggled on and off, such as **favorite** or **bookmark**.

Icon buttons can be placed directly on the background or in most container components, such as cards, app bars, and toolbars.

Multiple icon buttons can be placed in a standard button group to add interaction and motion between the buttons when pressed. [More about standard button groups](https://m3.material.io/m3/pages/button-groups/overview)

![Icon buttons in a toolbar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0dz7i-2.png?alt=media&token=5a110185-4604-4ade-839b-64d97ec3e9f7=s0)

_Icon buttons can be used within other components, such as in a toolbar or card_

### Color

There are four icon button color styles, in order of emphasis:

1. Filled
2. Tonal
3. Outlined
4. Standard

For the highest emphasis, use the filled style. For the lowest emphasis, use standard.

![Diagram of default and toggle icon buttons in 4 color styles.](https://lh3.googleusercontent.com/zX0RmAg_m2LHij-KQp9s644fx6zWH5Vq47EOpwR4OcSeSxQE4MnZPtq4RtAJj0pKfTLaOsRCrEEAocb7CO7cEEdy4M0jI9TpzsmkCW96us9N=s0)

_The default (left) and toggle (right) icon buttons are available in all four color styles_

Use a filled, tonal, or outlined icon button when the button needs more visual separation from the background.

Choose the right style and emphasis for the situation.

![Heart icon on a background about a cooking show.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0hfou-4.png?alt=media&token=d75ce156-ae29-4e58-8a52-ff89d0acf750=s0)

_Do: Use icons with a background to make them easy to see on any surface_

![Text button and icon button in an app together.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0ir4x-5.png?alt=media&token=59ab40b3-9d13-4f3f-9009-6b5ecb0b6217=s0)

_Do: When mixing button types together, use color styles to make the primary action clear_

Use the **filled** style for visual impact and key actions that require high emphasis.

Avoid overusing the filled style on a screen. Use them sparingly.

_Use filled icon buttons for high emphasis actions, such as downloading or deleting_

Use the **tonal** style as a middle ground between filled and outlined icon buttons. It's useful for secondary actions paired with a high emphasis action.

For example, use the tonal style for actions like **Raise hand** in a video meeting. When selected, its visual emphasis is greater than the outlined menu button, but less than the filled **End call** button.

![Icons found on the bottom of a telephone screen, including a hang up icon with a bright red tone.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0lz0p-7.png?alt=media&token=da11d026-2024-4119-ae4d-719fa72443c7=s0)

_Leverage the different color styles to establish emphasis and direct people to important actions_

Use the **outlined** style for medium-emphasis buttons. It's useful when the button isn't the main focus of the interaction, such as browsing through sets of cards.

Use the **standard** style for low-emphasis buttons, or when placing buttons on a colorful surface.

![Left and right arrow outlined icon buttons indicating that more cards are available to browse.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5xjqza2-8.png?alt=media&token=47a14a51-a2ca-4f91-8d5f-540cf46986a2=s0)

_Outlined buttons indicate that more content is available without grabbing attention_

### Size & width

Icon buttons are available in five different sizes:

- Extra small - 32dp
- Small - 40dp (default)
- Medium - 56dp
- Large - 96dp
- Extra large - 136dp

And three widths:

- Default
- Narrow
- Wide

Use size and width to provide emphasis and visual hierarchy in a page with multiple buttons. The main action should be the most visually prominent, whether through color or size, like starting and stopping a timer or playing and pausing a song.

![Variety of buttons in a timer app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5xk0kj1-10.png?alt=media&token=84ca5176-249f-4fdb-a1a5-ad091e974b17=s0)

_Use different button colors and sizes to provide visual hierarchy and emphasize primary actions_

Not all icon buttons will need to emphasize a primary and secondary action.

When buttons have a similar importance, they should be the same size.

![Uniform button sizes in a calculator app.](https://lh3.googleusercontent.com/xCB1ezQGhZ8n6LcIlfpkJhTP-cziJEyQRycEmz_Eu8GlnA9CBQiY4Zuf5BZHpCf50WOMBNVbzi8nNt2eyJyiuMgR184equbhVVrP6qI5I10=s0)

_When everything should have the same emphasis, use icon buttons that are the same size_

## Anatomy

![Diagram of anatomy of outlined, standard, and filled icon buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dw9g2n-11.png?alt=media&token=4b25bd9e-b8bd-41dd-bf61-840592be5a93=s0)

1. Icon
2. Container

### Icon

Icons visually communicate the button's action. Their meaning should be clear and unambiguous. [Browse popular icons](https://fonts.google.com/icons)

Default icon buttons should use filled icons.

Toggle buttons should use an outlined icon when unselected, and a filled version of the icon when selected.

![Heart icon in a restaurant app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0tpl2-12.png?alt=media&token=b1823b3b-520b-4c87-856e-d1f2d28225a5=s0)

_Ensure the meaning of the icon is clear, such as a heart indicating Favorite_

#### Icon accessibility requirements

For selected toggle buttons, if a filled version of an icon doesn't exist, increase the icon weight to semibold. If semibold doesn't provide enough visual change, use bold.

This is to ensure that selection is communicated through at least two properties, rather than just color. This requirement doesn't apply to default non-toggle buttons.

![Selected, semi-bold icon in a text editing app.](https://lh3.googleusercontent.com/WlJwCfuBY1Q541JoSnQlMRnQK77D7bjNnaLrojXxV7WJxGkYJOIwZdwMo0FnRu_qw0HMjfx5hso_QMCL6QHjhGgy0bpZ9JCGSqT3j_Ju33g=s0)

_Icons without a fill should be semibolded when selected_

### Container

The container provides increased contrast and hierarchy in places that need more visual separation from the background or other elements.

![Container separating a video call preview with actions you can take.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0wdzg-13.png?alt=media&token=d8ee5c0a-ec56-4503-92b7-e149822a522b=s0)

_The container provides visual separation from the background image_

## Placement

Icon buttons are commonly used in other components, such as app bars and cards.

These buttons should be used for common, easily understandable actions.

Only use a few icon buttons at once.

![App bar with icon buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0xugp-14.png?alt=media&token=c015216c-90e6-4071-81a5-7cc615306ed1=s0)

_App bars often contain icon buttons_

In dense layouts, group popular actions by placing many icon buttons next to each other in components like a toolbar or button group.

These components draw attention or add interaction between buttons.

![Toolbar with icon buttons and FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0z5xa-15.png?alt=media&token=2eb01ea3-eaf7-4884-89f5-0c396c18be40=s0)

_A toolbar is a collection of icon buttons and other components_

## Behavior

### Hover

On hover, the icon button displays a tooltip describing its action, rather than the name of the icon itself.

_The tooltip label text should be clear and concise_

### Selection

Toggle icon buttons allow a single choice to be selected or deselected, such as adding or removing something from favorites.

When placed in a button group, icon buttons change shape to help the selected button stand out. [More on button groups](https://m3.material.io/m3/pages/button-groups/overview)

_Do: Use toggle icon buttons when the icon can be selected_

_Don't: Don't use toggle icon buttons for actions that don't have a selected state, such as an icon button for an overflow menu_

The icon should become filled to represent selection.

If a filled version of the icon doesn't exist, use semibold weight instead.

_When making a selection, such as bookmarking or saving a video, the icon transitions from outlined (unselected) to filled (selected)_
