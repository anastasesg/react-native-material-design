---
url: https://m3.material.io/styles/color/static/baseline
lastmod: 2025-09-26
crawled_at: 2026-02-02T12:30:00.000Z
category: styles
section: color
page_type: null
status: complete
---

# Static color schemes

Static color schemes are ideal for branded products that should have a consistent, uniform design

**Baseline** is the default static color scheme. It uses accessible color pairings and includes colors for both light and dark themes.

**With the baseline color scheme, end-users see**

- An accessible UI with static colors

![Mobile screenshot of music app.](https://lh3.googleusercontent.com/6Qlfeo75opgKmNSYcxRy92aHk4VOLoQrE4VFYmSSfElw9CrWNI12sziVlF4ZPyEjADYSrfLICk2zmSSwBPFIMbnWlvCdL9LN7ko5LyWAaVQ3=s0)

_Music app with the static baseline color scheme_

![Tablet screenshot of a news app.](https://lh3.googleusercontent.com/-0fCuWWznNeUJOoUxklNyo94AmKKBOFI46a5ujrUZz3q_g7RXEQQ_a25p0_6iRCtBCO1INVVC1y4OmUiR7k9G7rYVAUY_yrKwIvvgvvYGkNoQg=s0)

_News app with the static baseline color scheme_

## Baseline colors

Get baseline colors in Figma using the Material Theme Builder.

![Color swatches showing the entire baseline color scheme and derivative accent colors.](https://lh3.googleusercontent.com/rfxJv95pIoJ3cEZ9ypfimJFC5Ps8sEEVBNWD36C-fy3DYvec8J_VLRosBkwTNsnpSCgSpxWXBypOXT8Ydm4fJOQ2ajWoy7SjocrzJcK7KA8=s0)

_Baseline scheme colors in light theme_

![Color swatches showing the entire baseline color scheme and derivative accent colors.](https://lh3.googleusercontent.com/S-tgf061eUWcbEBhyicTYR9PWVDeXSsSgZ2e2yYSr6Jn4W-F9z5czZCG6sv58wgJQODQakVRBDvUX5gaotfq3BuqMDLROrCO4D0Kz9F494LW=s0)

_Baseline scheme colors in dark theme_

## Baseline color tokens

The baseline color scheme includes color tokens organized into the following groups:

- **Primary colors** - Main brand colors used for key UI elements
- **Secondary colors** - Supporting colors for less prominent elements
- **Tertiary colors** - Accent colors for contrast and visual interest
- **Error colors** - Colors indicating errors or destructive actions
- **Surface colors** - Background and container colors
- **Outline colors** - Border and divider colors
- **Add-ons** - Additional utility colors

## Design with baseline

### Use the Design Kit and M3 baseline colors in new design files

1. Create your Figma file. Enable the [M3 Design Kit](https://www.figma.com/community/file/1035203688168086460) in your Assets panel.
2. Compose screens and layouts using Material Components from the design kit
3. Apply M3 baseline color roles to custom components and UI elements by hovering on the element's color property in the Design panel on the right of the screen and selecting the **Style** icon (four dots). This opens a selection dialog.
4. Search for "M3" to see the baseline color roles
5. Select the baseline color role that most closely matches the use case and intent (see [Color roles](https://m3.material.io/styles/color/roles) for more information on what color to use where)
6. Repeat until all custom elements are using M3 baseline color roles

### Apply baseline colors to an existing file

**First, get the M3 baseline colors into your file**

1. Open your Figma design file. Select the **Resources** button in the Figma toolbar.
2. Find the [Material Theme Builder plugin](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder) and select **Run**. This will open a plugin dialog showing the default color scheme, including Core colors and Extended colors.
3. Open the plugin's **Settings** (gear icon at lower right of dialog) and select the checkbox for **Generate State Layers**. This makes sure there are color for the state layers needed to design interactions. [Learn more about state layers](https://m3.material.io/foundations/interaction/states/state-layers)
4. Navigate out of settings
5. With the Current Theme dropdown at the top of the dialog, select **Baseline**
6. Select the frames or components in your file and then hit **Swap** in the bottom right of the dialog. This will automatically update the colors for any M3 Design Kit components.

**Then, update any remaining non-M3 color styles**

1. Manually change any hex values or non-M3 color styles by selecting all and looking through the Selection colors in the Design panel on the right of the screen
2. Any colors that don't start with "M3" need to be replaced with a corresponding baseline color
3. Hover on a non-M3 color row in the Design panel and select the **Style** icon (four dots). This opens a selection dialog.
4. Search for "M3" to see the baseline color roles
5. Select the baseline color role that most closely matches that color's use case (see [Color roles](https://m3.material.io/styles/color/roles) for more information on what color to use where) and select **Use style** to apply it to the selected objects
6. Repeat until all non-M3 colors in the file have been replaced with M3 baseline color roles

**Need to make adjustments to the scheme? Check out [Advanced customizations](https://m3.material.io/styles/color/advanced/overview)**
