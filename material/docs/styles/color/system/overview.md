---
url: https://m3.material.io/styles/color/system/overview
crawled_at: 2026-02-02T00:00:00.000Z
category: styles
section: color
page_type: overview
status: complete
---

# Color system

Create accessible, personal color schemes communicating your product's hierarchy, state, and brand

**The Material color system includes:**

- Built-in set of accessible color relationships
- 26+ color roles mapped to Material Components
- Built-in dark theme colors
- Static baseline color scheme with default colors assigned to each color role
- Dynamic color features including user-generated and content-based color

[Learn how the system works](https://m3.material.io/m3/pages/color/how-the-system-works)

For products migrating from M2 to M3, start by mapping the baseline color scheme to your existing product. It can easily switch to dynamic color when ready.

_Learn about the value and function of Material 3's dynamic color system and how it differs from past color systems_

![Primary, on primary, primary container, and on primary container roles shown in baseline light theme color scheme.](https://lh3.googleusercontent.com/5J0Ys6e-vzMeQPCfAMQcY147g2yFpXFrJEZK-AB8x8wGKMzdeQX3_GxE-xCOwuBANbYWr-g29epip05CF7fTGVz5gTc7wTBzFNp7AzXmdCVX=s0)

_The baseline color scheme doesn't dynamically change_

![Diagram showing an input color resulting in a simplified illustration of four roles of a color scheme. Shown in green and yellow in light theme.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9uoi8a-dynamic%20color.png?alt=media&token=a7969547-b71e-4d76-84d6-fe0ad98c7e62=s0)

_A dynamic color scheme changes the UI's colors based on different inputs, like a wallpaper_

![Diagram showing an orange input color generating a static orange color scheme for an auto heating UI element.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9uorlq-semantic-colors.png?alt=media&token=32f5150c-8487-48f8-bdc1-4491dc057f84=s0)

_Specific colors, such as semantic colors, can be set to not dynamically change_

Products with dynamic color can automatically generate and assign colors to each element in the UI.

This provides:

- Personalized UI
- Accessible contrast
- User-controlled contrast
- Automatic dark theme

_The UI colors change dynamically_

## Resources

| Type | Link | Status |
| --- | --- | --- |
| Design | Design Kit (Figma) | Available |
| Implementation | MDC-Android | Available |
|  | Jetpack Compose | Available |
|  | Flutter | Available |
| Tools | Material Theme Builder | Available |

## What's new

### Three levels of contrast

May 2025

Color roles support three levels of contrast so people can select the one that best suits their vision needs. Contrasts also are tokenized.

![Standard contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhpboqil-05.png?alt=media&token=7929e04e-f18a-40f8-9d49-e136beadbb3c=s0)

![Medium contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhpbny9u-06.png?alt=media&token=017a2472-3dc0-4251-bebf-493eb445ea9c=s0)

![High contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhpblpsr-07.png?alt=media&token=5891da95-e18f-4b97-b8c2-354b6b209dd4=s0)

### More colorful text and icons

August 2024

The following color roles are updated in light theme to be more colorful while still having accessible color contrast:

- On primary container
- On secondary container
- On tertiary container
- On error container

Affected components:

- Badges
- Bottom app bar
- Buttons
  - Buttons
  - Extended FAB
  - FAB
  - Icon buttons
  - Segmented buttons
- Chips
- Lists
- Menus
- Navigation bar
- Navigation drawer
- Navigation rail
- Switches

![Comparison of the color before and after the update, with FAB and button examples.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzij6msk-whats-new-on-color.png?alt=media&token=73b4aa74-f663-4f67-a65e-a4ed97b6a556=s0)

_Colors used for text and icons now appear more colorful_

### Reorganized guidelines

Oct 2023

Same color system, explained in a new way. Updated sections include:

- [How the system works](https://m3.material.io/m3/pages/color/how-the-system-works)
- [Advanced customizations](https://m3.material.io/m3/pages/advanced/overview)
- [Color resources](https://m3.material.io/m3/pages/color-resources)

![Diagram illustrating guidelines being reorganized](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9upnnh-reorganized-guidelines.png?alt=media&token=57c601ca-75fe-49c9-aef5-952f3bf00e68=s0)

_The guidelines have been reorganized and updated_

### Tone-based surface colors

Feb 2023

[Tone-based surface color roles](https://material.io/blog/tone-based-surface-color-m3) have replaced the previous approach of surfaces at +1 to +5 elevation. The new color roles are not tied to elevation and offer more flexibility and support for color features, such as user-controlled contrast.

![Simplified tablet UI showcasing the application of surface roles, shown in light theme](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9urd5o-%5B1P%5D%20what-is-new-surface.png?alt=media&token=0c9aba76-eda9-4503-ac75-6114e7e99d8b=s0)

_New tone-based surface colors offer more flexibility and support_

Technical changes were made to align the color system with Android SysUI:

- Updated the default light theme surface from tone 99 to tone 98
- Updated the chroma for the neutral palette, increasing it from 4 to 6
- Slightly darkened surface roles in dark theme

![Before and after swatch of the default light theme surface, showcasing the difference in chroma and tone](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9urxta-chroma-tone-update.png?alt=media&token=9ae5f3c9-525d-4602-b0ed-d59af40ba43e=s0)

_Changes in tone and chroma in the default light theme surface_

### Additional accent colors

Feb 2023

Additional accent colors in the scheme provide more flexibility and choice for color application. In particular, a new set of fixed colors for the **primary**, **secondary**, and **tertiary** accent groups provide colors which stay the same across light and dark themes.

![Fab and star icon show in fixed and fixed dim roles, in both light and dark theme](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9utr1z-whats-new-fixed-colors.png?alt=media&token=5f8ce61b-6eb8-4b8f-a336-08b01c9af58a=s0)

_Additional accent colors provide more choice for color application_
