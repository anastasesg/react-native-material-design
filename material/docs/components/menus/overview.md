---
url: https://m3.material.io/components/menus/overview
lastmod: 2026-02-11
crawled_at: 2026-03-09T18:15:00.000Z
category: components
section: menus
page_type: overview
status: complete
---

# Menus

- Use a **menu** to show a temporary set of actions. To show actions on screen at all times, use a **toolbar** instead
- Menus can open from many components, including icon buttons, split buttons, and text fields
- **Context menus** provide actions for a specific element, like an image or highlighted text, and usually open with a secondary click

![1 vertical menu with vibrant colors opens from a split button, and 1 vertical menu with a submenu.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkajj6i-01.png?alt=media&token=b7e5017f-ef26-4526-8d0c-759c47445705=s0)

_Vertical menus can include vibrant colors, gaps, dividers, and submenus to organize a list of choices_

## Availability & resources

| Type                        | Resource    | Status |
| --------------------------- | ----------- | ------ |
| Design                      |             |        |
| Design Kit (Figma)          | Available   |        |
| Implementation              |             |        |
| Flutter                     | Available   |        |
| Jetpack Compose             | Available   |        |
| Jetpack Compose: Expressive | Available   |        |
| MDC-Android                 | Available   |        |
| MDC-Android: Expressive     | Unavailable |        |
| Web                         | Available   |        |
| Web: Expressive             | Unavailable |        |

## M3 Expressive update

**November 2025**

**Vertical menus** were introduced with new shapes, color styles, selection states, and refined submenu motion. Gaps can be used for a more flexible layout on Android. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants:

- Added **vertical menus**, recommended for new designs
- Baseline **menu** is still available

Color styles:

- Standard
- Vibrant

![A vertical menu using shape and vibrant color to show a selected state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhk9jsmw-02.png?alt=media&token=3e48c83b-95fa-49ff-b870-925785fb4a04=s0)

_Vibrant colors help selected menu items stand out_

## Differences from M2

- **Color**: New color mappings and compatibility with dynamic color
- **Variants**: Dropdown menu and exposed dropdown menu are now both referred to as menu, since they differ only in the element which opens the menu surface

![Menu with gray color.](https://lh3.googleusercontent.com/lRkDtzZzv1cQwgvOMTY_hxx5v6LvsZjXrAo_zSvv-cqgB6vH92PvSw1XJMN925XPqGDdMB1OgVKZcud6-w4b9LZg709o_yEZGMjqyhsgs6Wz=s0)

_M2: Former menu colors don't contrast with the background_

![Menu with purple background and outline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlt7xid-04.png?alt=media&token=10f6b199-9664-4a24-b811-2980270f499c=s0)

_M3: Menus feature new color mappings and dynamic color_
