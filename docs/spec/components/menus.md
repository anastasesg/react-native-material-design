# Menus — M3 Component Reference

> Menus display a temporary set of actions or options in front of other UI surfaces.

Sources: [Overview](https://m3.material.io/components/menus/overview) · [Specs](https://m3.material.io/components/menus/specs) · [Guidelines](https://m3.material.io/components/menus/guidelines) · [Accessibility](https://m3.material.io/components/menus/accessibility)

---

## Overview

Menus present a temporary list of actions that appears in front of other content. They can be triggered from icon buttons, split buttons, or text fields. Context menus provide actions specific to an element (e.g. right-click).

The M3 Expressive update (November 2025) introduced vertical menus with new shapes, color styles (standard/vibrant), selection states, and submenu motion. Gaps are available on Android.

![1 vertical menu with vibrant colors and 1 with submenu](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkajj6i-01.png?alt=media&token=b7e5017f-ef26-4526-8d0c-759c47445705=s0)

![Vibrant colors help selected menu items stand out](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhk9jsmw-02.png?alt=media&token=3e48c83b-95fa-49ff-b870-925785fb4a04=s0)

**Availability:** Design Kit (Figma), Flutter, Jetpack Compose, Jetpack Compose Expressive, MDC-Android, Web. MDC-Android Expressive and Web Expressive unavailable.

---

## Variants

| Variant        | M3        | M3 Expressive |
| -------------- | --------- | ------------- |
| Vertical menus | --        | Available     |
| Baseline       | Available | Available     |

![2 vertical menus](https://lh3.googleusercontent.com/ryW1crRfja9xt_7sPlT_XlF64XPHQjHmk6HkJ91EP23gfGW2Z1TNt8V1RsaAEt4bzOOow6wEtTrB4tk32rzhd4WL2dVMKVlbh3x6ZD3oqdK7=s0)

![Baseline menu](https://lh3.googleusercontent.com/I8AoQRDKlS29lSyVHYVs4-2PKXVQUXC_wlPJx5IT1hWiga7bEC7DZUlNH_OEoICZN5hCf8ii45dpApcg23TY6JhadwCluvznISW6HNfGKHUc=s0)

Vertical menus are recommended for M3 Expressive. The baseline menu remains available in both M3 and M3 Expressive.

---

## Configurations

| Category | Configuration | M3        | M3 Expressive |
| -------- | ------------- | --------- | ------------- |
| Color    | Standard      | Available | Available     |
|          | Vibrant       | --        | Available     |
| Layout   | Standard      | Available | Available     |
|          | Grouped       | --        | Available     |

![Standard and grouped menus](https://lh3.googleusercontent.com/fJlPTJ2NqSiweyHvIr8M0iPk67mplnSmEnq_2SEOW1OvhT31iv4txdTlYrXWpNvmmBVVfJJzaE_lPSakS5hW51-I3oC8XuRu0l2lxGxm7zXi=s0)

- **Standard** color mapping: surface-based, lower emphasis — use as the default
- **Vibrant** color mapping: tertiary-based, higher emphasis — use sparingly for attention

---

## Anatomy

![11 elements diagram](https://lh3.googleusercontent.com/23G6to4Ij-HsQF2iAQsFg737t4f1InY3ANqqt-NYDrCj4ajmDFHSL7o3BTM7CHvUGdR8bTgcGg-OWPY5sp5qepK-LfRRWNZg8b1gwuq3gjU=s0)

![Vertical menu diagram](https://lh3.googleusercontent.com/AfTrO7v-T_4xnHi8Fa-xmOOn21wmjYQWZ9CqSCVGaG910Nd8K4lS3FqfcNgYQ0iF4FSY12e_AEjX1WNsFOOM02AuYBuTSGrwaTpCPKxUNBAQ=s0)

A menu consists of up to 11 elements:

1. **Menu item** — an individual actionable row
2. **Leading icon** (optional) — icon before the label text
3. **Menu item text** — the primary label for the action
4. **Trailing icon** (optional) — icon after the label text (e.g. submenu arrow)
5. **Badge** (optional) — notification indicator on an item
6. **Trailing text** (optional) — secondary text at the trailing edge (e.g. keyboard shortcut)
7. **Container** — the elevated surface enclosing all items
8. **Supporting text** (optional) — secondary description below the label
9. **Label text** (optional) — section header for a group of items
10. **Gap** (optional) — visual spacing between groups of items
11. **Divider** (optional) — thin line separating groups of items

---

## Usage & When to Use

Menus are appropriate when you need a temporary surface for actions or selections. They take less space than radio buttons or chips and are well-suited for overflow actions, text field dropdowns, select menus, and context menus.

Menus open in response to selecting a trigger element (icon button, text field, split button) or performing a platform action (right-click, press-and-hold).

![Submenu with "Line spacing" and "Custom 1.2" selected](https://lh3.googleusercontent.com/MfCxNMg5F-PVblTlXd6HMYiZd-Lw5KIY6xwvm7F0Pn_sCm-wiLtOMX8xTxOztwb_4xY__6nSEFl-E1txwgI6GJ2awsvnRaTuMiK0t15jyUQ=s0)

![Context menu over highlighted text](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlkhju5-04.png?alt=media&token=ab3df2c7-0424-482c-ad21-d5cf945ca16b=s0)

Use a **toolbar** instead when actions should be permanently visible. Use **radio buttons** or **chips** when the selection list is small enough to show inline.

### Menu groups

Vertical menu items can be separated into groups using a divider or a small gap.

![Standard and grouped vertical menu](https://lh3.googleusercontent.com/6e3Jr7pvYamV89OCHR395lTYFRLLVJsUseXpeuESUaJGC8qKEa1geMsIaYbWGi2O0l2OjBKn5rznan6ZXFBXTCAtf6e3IrBCNPyif9t2Hv5G=s0)

### Context menus

Context menus appear on right-click or two-finger trackpad tap, providing actions relevant to the element under the pointer.

![Context menu from newspaper link](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlkwxab-06.png?alt=media&token=f570d7bb-c80a-43dd-8dd0-9ba78258920f=s0)

---

## Menu Items

Items can include label text, leading icons, trailing icons, and keyboard command shortcuts. Disabled items should remain visible (shown in a disabled state) rather than being removed entirely.

![Disabled Redo item](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhll6qil-08.png?alt=media&token=ae8d6aaa-5646-493e-8c90-4b21457ff03f=s0)

### Gaps & Dividers

**Gaps** visually divide items with spacing rather than a line. They are more expressive than dividers. Limit to 1-2 per menu, keep gap size consistent, and avoid using them in scrollable menus. Gaps are NOT available on web.

![Gaps separate items](https://lh3.googleusercontent.com/nziJZIcye1oWsr-CrUorKQfgSBAvZMJQWCIaL-tKUJQA2oDY0EbExVpZu3EAaZSC8iljeK6nDpywWbMkK3mSwPrPm7r6JAVwtzHODDztJ9LdXw=s0)

**Dividers** provide a more subtle separation. Use dividers for scrollable menus, text field dropdowns, and on web.

![Dividers on web](https://lh3.googleusercontent.com/cguRYPI0KSnDbH8G-NsW_ChXLpqPsALNJLlbJiTLKfq99BgdHykJsf40GtSSBeubhxXoiDV74Gjhy3LlmJV8QlE3ZYHAteUNjkNheqp0V2h-=s0)

### Flexibility & Slots

Custom slots can contain images, progress indicators, or color swatches. Slots must maintain accessibility standards, follow standard menu interaction patterns, and preserve 48x48dp touch targets.

Do **not** add buttons, switches, or other direct-action controls inside menu items — this breaks keyboard navigation and screen reader expectations.

![Slot diagram](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhllndkg-11.png?alt=media&token=94c23245-a894-465a-a657-4cc1ec9e4e59=s0)

![Caution: slots must maintain accessibility](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhllqs3p-12-alt.png?alt=media&token=10ba86ca-a5f2-4c70-8f5d-29f4c5a33dfa=s0)

---

## Placement

Menus are positioned relative to the window edge, typically below, next to, or in front of the triggering element. They auto-reposition if they would be clipped by the screen edge.

![6 menu positions](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhllv77j-13.png?alt=media&token=284a2b26-be83-4564-845a-e8e8f55b168e=s0)

**Submenus** open adjacent to their parent without overlapping. They work best on large screens. Submenus are NOT available on Jetpack Compose.

![Submenu positioning](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlm1f1q-15.png?alt=media&token=57bbf425-3173-4f90-b96c-93de307cf824=s0)

### Adaptive design

On compact windows, consider adapting menus into bottom sheets.

![Bottom sheet on compact window](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlm7yx1-16.png?alt=media&token=efd00c45-20e0-4bdd-936c-3a2383306983=s0)

On medium and expanded windows, menus work well in context and can display more items and submenus.

![Menu on mid-size screen](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlmbxni-17.png?alt=media&token=e4e83032-18f6-4c94-bdb8-62007e8524d3=s0)

---

## Behavior

### Appearing

Menus open from buttons, text fields, filter chips, or highlighted text. The position of the trigger affects the direction of expansion.

### Motion

An enter/exit transition visually connects the menu to its trigger. The trigger shows a pressed state while the menu is open. On desktop, menus can open instantly.

### Filtering

A text field trigger can filter options (autocomplete behavior). Items ease into position as the list narrows.

### Scrolling

A persistent scrollbar appears when items overflow the container. Do not use gaps in scrollable menus.

### Selecting

The trigger element retains its visual state (plus a pressed overlay) while the menu is open.

![Overflow icon unchanged when menu open](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlohkz8-28.png?alt=media&token=90813acd-a921-473b-8f98-cfc715b51d93=s0)

### Single- and multi-select

- **Single-select:** one item active at a time; selecting a new item automatically deselects the previous one
- **Multi-select:** multiple items can be active simultaneously; the menu stays open until explicitly dismissed

![Single and multi-select](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkpbo8d-30.png?alt=media&token=a9f4da83-0329-4222-b296-68c399154082=s0)

### Focus & shape morphing

Focus follows the currently hovered or focused submenu. Corner shape changes dynamically: more rounded indicates focused, less rounded indicates unfocused.

### Density (web only)

Density levels 0 through -3 progressively reduce vertical spacing between items.

![4 density levels](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhloonkj-32.png?alt=media&token=f60473a4-1b6d-4913-ba1e-002ea51339a2=s0)

---

## Measurements

![Vertical menu measurements](https://lh3.googleusercontent.com/SyybBdmLyz7BXoGoAF1kjCwXx7BiZvB0e_I7bpFAIDO-W4YGSJ21CKgtu5PdH7J49aZfYEJbVPyjVFN2E9fWBLfUXDP44mP90E_Unc-g3c8=s0)

---

## Interaction States

![6 states in light and dark](https://lh3.googleusercontent.com/9y63FlzafeIP9Tth6PTh9NKO6wwrYUZqCs6PTUKqIQPfYd7apIWRsvYx91maUHu43E0GoIkm7nDVC_DZA6K-15ItBpV-1KJ550QZCGSHlzo8=s0)

| #   | State        | Description                                              |
| --- | ------------ | -------------------------------------------------------- |
| 1   | **Enabled**  | Default appearance                                       |
| 2   | **Disabled** | Reduced opacity (0.38) on text and icons; not selectable |
| 3   | **Hovered**  | State layer appears over the item                        |
| 4   | **Focused**  | State layer and focus indicator visible                  |
| 5   | **Pressed**  | State layer at pressed opacity                           |
| 6   | **Active**   | Main menu item reveals its submenu                       |

---

## Color Roles

### Standard color scheme

![Standard and vibrant schemes](https://lh3.googleusercontent.com/UQTohIy6KP6b1-pM2Mvhf_SyQW6J3ibpKvf3Z5T8dI48XoYQ6DqhwG5ILCidkiXxCje50h4Tdx6VPzv1-2LVN2sSo_4JfItM9mhfrHEdHV8H=s0)

![Standard color roles (11 elements)](https://lh3.googleusercontent.com/nA4wviKihXfkWje8PlNIZNpYajfpoudcjVm30OYpC8UdMEdquwj9QeSziFOs7KjJ3IR-fioXjTLMlZsyKMaUgi3Bfy70RpHTCCsGaJX5hWkc=s0)

| #   | Element             | Color role            |
| --- | ------------------- | --------------------- |
| 1   | Leading icon        | On surface variant    |
| 2   | Label text          | On surface            |
| 3   | State layer         | On surface            |
| 4   | Container           | Surface container low |
| 5   | Trailing icon       | On surface variant    |
| 6   | Trailing text       | On surface variant    |
| 7   | Selected container  | Tertiary container    |
| 8   | Selected label text | On tertiary container |
| 9   | Supporting text     | On surface variant    |
| 10  | Section label       | On surface variant    |
| 11  | Selected indicator  | On tertiary container |

### Vibrant color scheme

![Vibrant color roles (11 elements)](https://lh3.googleusercontent.com/6B9lmZdfYRC5nkKI-x6hS9U37bZC1o0jRWDkYe90mc-TV-OjPicvEckz5sYKYsoyP2hRO_hR3An76jKHGR-b8qAYp_56q49AgW4kMo8Ez98=s0)

| #   | Element             | Color role            |
| --- | ------------------- | --------------------- |
| 1   | Leading icon        | On tertiary container |
| 2   | Label text          | On tertiary container |
| 3   | State layer         | On tertiary container |
| 4   | Container           | Tertiary container    |
| 5   | Trailing icon       | On tertiary container |
| 6   | Trailing text       | On tertiary container |
| 7   | Selected container  | Tertiary              |
| 8   | Selected label text | On tertiary           |
| 9   | Supporting text     | On tertiary container |
| 10  | Section label       | On tertiary container |
| 11  | Selected indicator  | On tertiary           |

---

## Common Tokens (M3 Expressive)

### Typography

| Name                                           | Token                                                          | Value                                      |
| ---------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| Menu item label text font                      | `md.comp.menus.menu-item.label-text.font`                      | `md.sys.typescale.label-large.font`        |
| Menu item label text line height               | `md.comp.menus.menu-item.label-text.line-height`               | `md.sys.typescale.label-large.line-height` |
| Menu item label text size                      | `md.comp.menus.menu-item.label-text.size`                      | `md.sys.typescale.label-large.size`        |
| Menu item label text tracking                  | `md.comp.menus.menu-item.label-text.tracking`                  | `md.sys.typescale.label-large.tracking`    |
| Menu item label text weight                    | `md.comp.menus.menu-item.label-text.weight`                    | `md.sys.typescale.label-large.weight`      |
| Menu item supporting text font                 | `md.comp.menus.menu-item.supporting-text.font`                 | `md.sys.typescale.body-small.font`         |
| Menu item supporting text line height          | `md.comp.menus.menu-item.supporting-text.line-height`          | `md.sys.typescale.body-small.line-height`  |
| Menu item supporting text size                 | `md.comp.menus.menu-item.supporting-text.size`                 | `md.sys.typescale.body-small.size`         |
| Menu item supporting text tracking             | `md.comp.menus.menu-item.supporting-text.tracking`             | `md.sys.typescale.body-small.tracking`     |
| Menu item supporting text weight               | `md.comp.menus.menu-item.supporting-text.weight`               | `md.sys.typescale.body-small.weight`       |
| Menu item trailing supporting text font        | `md.comp.menus.menu-item.trailing-supporting-text.font`        | `md.sys.typescale.label-large.font`        |
| Menu item trailing supporting text line height | `md.comp.menus.menu-item.trailing-supporting-text.line-height` | `md.sys.typescale.label-large.line-height` |
| Menu item trailing supporting text size        | `md.comp.menus.menu-item.trailing-supporting-text.size`        | `md.sys.typescale.label-large.size`        |
| Menu item trailing supporting text tracking    | `md.comp.menus.menu-item.trailing-supporting-text.tracking`    | `md.sys.typescale.label-large.tracking`    |
| Menu item trailing supporting text weight      | `md.comp.menus.menu-item.trailing-supporting-text.weight`      | `md.sys.typescale.label-large.weight`      |

### Shape / Default

| Name                                           | Token                                                          | Value                             |
| ---------------------------------------------- | -------------------------------------------------------------- | --------------------------------- |
| Menu container shape                           | `md.comp.menus.container.shape`                                | `md.sys.shape.corner.large`       |
| Menu active container shape                    | `md.comp.menus.active.container.shape`                         | `md.sys.shape.corner.large`       |
| Menu inactive container shape                  | `md.comp.menus.inactive.container.shape`                       | `md.sys.shape.corner.small`       |
| Menu group shape                               | `md.comp.menus.group.shape`                                    | `md.sys.shape.corner.small`       |
| Menu item shape                                | `md.comp.menus.menu-item.shape`                                | `md.sys.shape.corner.extra-small` |
| Menu item first child shape                    | `md.comp.menus.menu-item.first-child.shape`                    | `md.sys.shape.corner.medium`      |
| Menu item first child inner corner corner size | `md.comp.menus.menu-item.first-child.inner-corner.corner-size` | `md.sys.shape.corner.extra-small` |
| Menu item last child shape                     | `md.comp.menus.menu-item.last-child.shape`                     | `md.sys.shape.corner.medium`      |
| Menu item last child inner corner corner size  | `md.comp.menus.menu-item.last-child.inner-corner.corner-size`  | `md.sys.shape.corner.extra-small` |

### Shape / Selected

| Name                     | Token                                    | Value                        |
| ------------------------ | ---------------------------------------- | ---------------------------- |
| Menu item selected shape | `md.comp.menus.menu-item.selected.shape` | `md.sys.shape.corner.medium` |

### Shape / Horizontal, Default

| Name                                    | Token                                              | Value                        |
| --------------------------------------- | -------------------------------------------------- | ---------------------------- |
| Menu horizontal container shape         | `md.comp.menus.horizontal.container.shape`         | `md.sys.shape.corner.full`   |
| Menu horizontal menu item hovered shape | `md.comp.menus.horizontal.menu-item.hovered.shape` | `md.sys.shape.corner.medium` |
| Menu horizontal menu item focused shape | `md.comp.menus.horizontal.menu-item.focused.shape` | `md.sys.shape.corner.medium` |
| Menu horizontal menu item pressed shape | `md.comp.menus.horizontal.menu-item.pressed.shape` | `md.sys.shape.corner.medium` |

### Shape / Horizontal, Selected

| Name                                             | Token                                                       | Value                      |
| ------------------------------------------------ | ----------------------------------------------------------- | -------------------------- |
| Menu horizontal menu item selected hovered shape | `md.comp.menus.horizontal.menu-item.selected.hovered.shape` | `md.sys.shape.corner.full` |
| Menu horizontal menu item selected focused shape | `md.comp.menus.horizontal.menu-item.selected.focused.shape` | `md.sys.shape.corner.full` |
| Menu horizontal menu item selected pressed shape | `md.comp.menus.horizontal.menu-item.selected.pressed.shape` | `md.sys.shape.corner.full` |

### Shape / Horizontal Icon-Only, Selected

| Name                                               | Token                                                         | Value                      |
| -------------------------------------------------- | ------------------------------------------------------------- | -------------------------- |
| Menu horizontal icon only menu item selected shape | `md.comp.menus.horizontal.icon-only.menu-item.selected.shape` | `md.sys.shape.corner.full` |

### Layout / Default

| Name                         | Token                                        | Value                     |
| ---------------------------- | -------------------------------------------- | ------------------------- |
| Menu gap                     | `md.comp.menus.gap`                          | 2dp                       |
| Menu group padding           | `md.comp.menus.group.padding`                | 2dp                       |
| Menu container elevation     | `md.comp.menus.container.elevation`          | `md.sys.elevation.level2` |
| Menu item height             | `md.comp.menus.menu-item.height`             | 44dp                      |
| Menu item top space          | `md.comp.menus.menu-item.top-space`          | 8dp                       |
| Menu item bottom space       | `md.comp.menus.menu-item.bottom-space`       | 8dp                       |
| Menu item leading space      | `md.comp.menus.menu-item.leading-space`      | 16dp                      |
| Menu item trailing space     | `md.comp.menus.menu-item.trailing-space`     | 16dp                      |
| Menu item between space      | `md.comp.menus.menu-item.between-space`      | 12dp                      |
| Menu item leading icon size  | `md.comp.menus.menu-item.leading-icon.size`  | 20dp                      |
| Menu item trailing icon size | `md.comp.menus.menu-item.trailing-icon.size` | 20dp                      |

### Layout / Horizontal

| Name                                     | Token                                               | Value |
| ---------------------------------------- | --------------------------------------------------- | ----- |
| Menu horizontal container top space      | `md.comp.menus.horizontal.container.top-space`      | 8dp   |
| Menu horizontal container bottom space   | `md.comp.menus.horizontal.container.bottom-space`   | 8dp   |
| Menu horizontal menu item leading space  | `md.comp.menus.horizontal.menu-item.leading-space`  | 12dp  |
| Menu horizontal menu item trailing space | `md.comp.menus.horizontal.menu-item.trailing-space` | 12dp  |
| Menu horizontal menu item between space  | `md.comp.menus.horizontal.menu-item.between-space`  | 12dp  |
| Menu horizontal menu item top space      | `md.comp.menus.horizontal.menu-item.top-space`      | 6dp   |
| Menu horizontal menu item bottom space   | `md.comp.menus.horizontal.menu-item.bottom-space`   | 6dp   |

### Layout / Horizontal Icon-Only

| Name                                               | Token                                                         | Value |
| -------------------------------------------------- | ------------------------------------------------------------- | ----- |
| Menu horizontal icon only menu item leading space  | `md.comp.menus.horizontal.icon-only.menu-item.leading-space`  | 16dp  |
| Menu horizontal icon only menu item trailing space | `md.comp.menus.horizontal.icon-only.menu-item.trailing-space` | 16dp  |
| Menu horizontal icon only menu item top space      | `md.comp.menus.horizontal.icon-only.menu-item.top-space`      | 16dp  |
| Menu horizontal icon only menu item bottom space   | `md.comp.menus.horizontal.icon-only.menu-item.bottom-space`   | 16dp  |
| Menu horizontal icon only gap                      | `md.comp.menus.horizontal.icon-only.gap`                      | 4dp   |

### Focus Ring

| Name                                     | Token                                                    | Value                                       |
| ---------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| Menu item focus indicator color          | `md.comp.menus.menu-item.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Menu item focus indicator thickness      | `md.comp.menus.menu-item.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Menu item focus indicator outline offset | `md.comp.menus.menu-item.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` |

---

## Standard Color Tokens

### Enabled

| Name                                                   | Token                                                             | Value                                |
| ------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------ |
| Menu standard container color                          | `md.comp.menus.standard.container.color`                          | `md.sys.color.surface-container-low` |
| Menu standard section label text color                 | `md.comp.menus.standard.section-label-text.color`                 | #49454F                              |
| Menu standard menu item container color                | `md.comp.menus.standard.menu-item.container.color`                | `md.sys.color.surface-container-low` |
| Menu standard menu item label text color               | `md.comp.menus.standard.menu-item.label-text.color`               | `md.sys.color.on-surface`            |
| Menu standard menu item supporting text color          | `md.comp.menus.standard.menu-item.supporting-text.color`          | `md.sys.color.on-surface-variant`    |
| Menu standard container shadow color                   | `md.comp.menus.standard.container.shadow-color`                   | `md.sys.color.shadow`                |
| Menu standard menu item leading icon color             | `md.comp.menus.standard.menu-item.leading-icon.color`             | `md.sys.color.on-surface-variant`    |
| Menu standard menu item trailing icon color            | `md.comp.menus.standard.menu-item.trailing-icon.color`            | `md.sys.color.on-surface-variant`    |
| Menu standard menu item trailing supporting text color | `md.comp.menus.standard.menu-item.trailing-supporting-text.color` | `md.sys.color.on-surface-variant`    |
| Menu standard icon button container color              | `md.comp.menus.standard.icon-button.container.color`              | `md.sys.color.surface-container-low` |
| Menu standard icon button icon color                   | `md.comp.menus.standard.icon-button.icon.color`                   | `md.sys.color.on-surface-variant`    |

### Disabled

| Name                                                              | Token                                                                        | Value                     |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------- |
| Menu standard menu item disabled label text color                 | `md.comp.menus.standard.menu-item.disabled.label-text.color`                 | `md.sys.color.on-surface` |
| Menu standard menu item disabled label text opacity               | `md.comp.menus.standard.menu-item.disabled.label-text.opacity`               | 0.38                      |
| Menu standard menu item disabled supporting text color            | `md.comp.menus.standard.menu-item.disabled.supporting-text.color`            | `md.sys.color.on-surface` |
| Menu standard menu item disabled supporting text opacity          | `md.comp.menus.standard.menu-item.disabled.supporting-text.opacity`          | 0.38                      |
| Menu standard menu item disabled trailing supporting text color   | `md.comp.menus.standard.menu-item.disabled.trailing-supporting-text.color`   | `md.sys.color.on-surface` |
| Menu standard menu item disabled trailing supporting text opacity | `md.comp.menus.standard.menu-item.disabled.trailing-supporting-text.opacity` | 0.38                      |
| Menu standard menu item disabled leading icon color               | `md.comp.menus.standard.menu-item.disabled.leading-icon.color`               | `md.sys.color.on-surface` |
| Menu standard menu item disabled leading icon opacity             | `md.comp.menus.standard.menu-item.disabled.leading-icon.opacity`             | 0.38                      |
| Menu standard menu item disabled trailing icon color              | `md.comp.menus.standard.menu-item.disabled.trailing-icon.color`              | `md.sys.color.on-surface` |
| Menu standard menu item disabled trailing icon opacity            | `md.comp.menus.standard.menu-item.disabled.trailing-icon.opacity`            | 0.38                      |
| Menu standard disabled icon button icon color                     | `md.comp.menus.standard.disabled.icon-button.icon.color`                     | `md.sys.color.on-surface` |

### Hovered

| Name                                                | Token                                                          | Value                                    |
| --------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Menu standard menu item hovered state layer color   | `md.comp.menus.standard.menu-item.hovered.state-layer.color`   | `md.sys.color.on-surface`                |
| Menu standard menu item hovered state layer opacity | `md.comp.menus.standard.menu-item.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Menu standard menu item hovered label text color    | `md.comp.menus.standard.menu-item.hovered.label-text.color`    | `md.sys.color.on-surface`                |
| Menu standard menu item hovered leading icon color  | `md.comp.menus.standard.menu-item.hovered.leading-icon.color`  | `md.sys.color.on-surface-variant`        |
| Menu standard menu item hovered trailing icon color | `md.comp.menus.standard.menu-item.hovered.trailing-icon.color` | `md.sys.color.on-surface-variant`        |
| Menu standard icon button hovered state layer color | `md.comp.menus.standard.icon-button.hovered.state-layer.color` | `md.sys.color.on-surface`                |

### Focused

| Name                                                | Token                                                          | Value                                    |
| --------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Menu standard menu item focused state layer color   | `md.comp.menus.standard.menu-item.focused.state-layer.color`   | `md.sys.color.on-surface`                |
| Menu standard menu item focused state layer opacity | `md.comp.menus.standard.menu-item.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Menu standard menu item focused label text color    | `md.comp.menus.standard.menu-item.focused.label-text.color`    | `md.sys.color.on-surface`                |
| Menu standard menu item focused leading icon color  | `md.comp.menus.standard.menu-item.focused.leading-icon.color`  | `md.sys.color.on-surface-variant`        |
| Menu standard menu item focused trailing icon color | `md.comp.menus.standard.menu-item.focused.trailing-icon.color` | `md.sys.color.on-surface-variant`        |
| Menu standard icon button focused state layer color | `md.comp.menus.standard.icon-button.focused.state-layer.color` | `md.sys.color.on-surface`                |

### Pressed

| Name                                                | Token                                                          | Value                                      |
| --------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| Menu standard menu item pressed state layer color   | `md.comp.menus.standard.menu-item.pressed.state-layer.color`   | `md.sys.color.on-surface`                  |
| Menu standard menu item pressed state layer opacity | `md.comp.menus.standard.menu-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Menu standard menu item pressed label text color    | `md.comp.menus.standard.menu-item.pressed.label-text.color`    | `md.sys.color.on-surface`                  |
| Menu standard menu item pressed leading icon color  | `md.comp.menus.standard.menu-item.pressed.leading-icon.color`  | `md.sys.color.on-surface-variant`          |
| Menu standard menu item pressed trailing icon color | `md.comp.menus.standard.menu-item.pressed.trailing-icon.color` | `md.sys.color.on-surface-variant`          |
| Menu standard icon button pressed state layer color | `md.comp.menus.standard.icon-button.pressed.state-layer.color` | `md.sys.color.on-surface`                  |

### Enabled, Active

| Name                                               | Token                                                         | Value                                    |
| -------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------- |
| Menu standard menu item active state layer color   | `md.comp.menus.standard.menu-item.active.state-layer.color`   | `md.sys.color.on-surface`                |
| Menu standard menu item active state layer opacity | `md.comp.menus.standard.menu-item.active.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

### Enabled, Selected

| Name                                                            | Token                                                                      | Value                                |
| --------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------ |
| Menu standard menu item selected container color                | `md.comp.menus.standard.menu-item.selected.container.color`                | `md.sys.color.tertiary-container`    |
| Menu standard menu item selected label text color               | `md.comp.menus.standard.menu-item.selected.label-text.color`               | `md.sys.color.on-tertiary-container` |
| Menu standard menu item selected supporting text color          | `md.comp.menus.standard.menu-item.selected.supporting-text.color`          | `md.sys.color.on-tertiary-container` |
| Menu standard menu item selected leading icon color             | `md.comp.menus.standard.menu-item.selected.leading-icon.color`             | `md.sys.color.on-tertiary-container` |
| Menu standard menu item selected trailing icon color            | `md.comp.menus.standard.menu-item.selected.trailing-icon.color`            | `md.sys.color.on-tertiary-container` |
| Menu standard menu item selected trailing supporting text color | `md.comp.menus.standard.menu-item.selected.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` |
| Menu standard icon button selected container color              | `md.comp.menus.standard.icon-button.selected.container.color`              | `md.sys.color.tertiary-container`    |
| Menu standard icon button selected icon color                   | `md.comp.menus.standard.icon-button.selected.icon.color`                   | `md.sys.color.on-tertiary-container` |

### Disabled, Selected

| Name                                                                     | Token                                                                               | Value                                |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------ |
| Menu standard menu item selected disabled container color                | `md.comp.menus.standard.menu-item.selected.disabled.container.color`                | `md.sys.color.tertiary-container`    |
| Menu standard menu item selected disabled container opacity              | `md.comp.menus.standard.menu-item.selected.disabled.container.opacity`              | 0.38                                 |
| Menu standard menu item selected disabled label text color               | `md.comp.menus.standard.menu-item.selected.disabled.label-text.color`               | `md.sys.color.on-tertiary-container` |
| Menu standard menu item selected disabled label text opacity             | `md.comp.menus.standard.menu-item.selected.disabled.label-text.opacity`             | 0.38                                 |
| Menu standard menu item selected disabled leading icon color             | `md.comp.menus.standard.menu-item.selected.disabled.leading-icon.color`             | `md.sys.color.on-tertiary-container` |
| Menu standard menu item selected disabled leading icon opacity           | `md.comp.menus.standard.menu-item.selected.disabled.leading-icon.opacity`           | 0.38                                 |
| Menu standard menu item selected disabled trailing icon color            | `md.comp.menus.standard.menu-item.selected.disabled.trailing-icon.color`            | `md.sys.color.on-tertiary-container` |
| Menu standard menu item selected disabled trailing icon opacity          | `md.comp.menus.standard.menu-item.selected.disabled.trailing-icon.opacity`          | 0.38                                 |
| Menu standard menu item selected disabled trailing supporting text color | `md.comp.menus.standard.menu-item.selected.disabled.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` |
| Menu standard icon button disabled icon color                            | `md.comp.menus.standard.icon-button.disabled.icon.color`                            | `md.sys.color.on-tertiary-container` |

### Hovered, Selected

| Name                                                                    | Token                                                                              | Value                                    |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------- |
| Menu standard menu item selected hovered state layer color              | `md.comp.menus.standard.menu-item.selected.hovered.state-layer.color`              | `md.sys.color.on-tertiary-container`     |
| Menu standard menu item selected hovered state layer opacity            | `md.comp.menus.standard.menu-item.selected.hovered.state-layer.opacity`            | `md.sys.state.hover.state-layer-opacity` |
| Menu standard menu item selected hovered label text color               | `md.comp.menus.standard.menu-item.selected.hovered.label-text.color`               | `md.sys.color.on-tertiary-container`     |
| Menu standard menu item selected hovered supporting text color          | `md.comp.menus.standard.menu-item.selected.hovered.supporting-text.color`          | `md.sys.color.on-tertiary-container`     |
| Menu standard menu item selected hovered trailing supporting text color | `md.comp.menus.standard.menu-item.selected.hovered.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container`     |
| Menu standard menu item selected hovered leading icon color             | `md.comp.menus.standard.menu-item.selected.hovered.leading-icon.color`             | `md.sys.color.on-tertiary-container`     |
| Menu standard menu item selected hovered trailing icon color            | `md.comp.menus.standard.menu-item.selected.hovered.trailing-icon.color`            | `md.sys.color.on-tertiary-container`     |
| Menu standard icon button selected hovered state layer color            | `md.comp.menus.standard.icon-button.selected.hovered.state-layer.color`            | `md.sys.color.on-tertiary-container`     |

### Focused, Selected

| Name                                                                    | Token                                                                              | Value                                    |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------- |
| Menu standard menu item selected focused state layer color              | `md.comp.menus.standard.menu-item.selected.focused.state-layer.color`              | `md.sys.color.on-tertiary-container`     |
| Menu standard menu item selected focused state layer opacity            | `md.comp.menus.standard.menu-item.selected.focused.state-layer.opacity`            | `md.sys.state.focus.state-layer-opacity` |
| Menu standard menu item selected focused label text color               | `md.comp.menus.standard.menu-item.selected.focused.label-text.color`               | `md.sys.color.on-tertiary-container`     |
| Menu standard menu item selected focused supporting text color          | `md.comp.menus.standard.menu-item.selected.focused.supporting-text.color`          | `md.sys.color.on-tertiary-container`     |
| Menu standard menu item selected focused trailing supporting text color | `md.comp.menus.standard.menu-item.selected.focused.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container`     |
| Menu standard menu item selected focused leading icon color             | `md.comp.menus.standard.menu-item.selected.focused.leading-icon.color`             | `md.sys.color.on-tertiary-container`     |
| Menu standard menu item selected focused trailing icon color            | `md.comp.menus.standard.menu-item.selected.focused.trailing-icon.color`            | `md.sys.color.on-tertiary-container`     |
| Menu standard icon button selected focused state layer color            | `md.comp.menus.standard.icon-button.selected.focused.state-layer.color`            | `md.sys.color.on-tertiary-container`     |

### Pressed, Selected

| Name                                                                    | Token                                                                              | Value                                      |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------ |
| Menu standard menu item selected pressed state layer color              | `md.comp.menus.standard.menu-item.selected.pressed.state-layer.color`              | `md.sys.color.on-tertiary-container`       |
| Menu standard menu item selected pressed state layer opacity            | `md.comp.menus.standard.menu-item.selected.pressed.state-layer.opacity`            | `md.sys.state.pressed.state-layer-opacity` |
| Menu standard menu item selected pressed label text color               | `md.comp.menus.standard.menu-item.selected.pressed.label-text.color`               | `md.sys.color.on-tertiary-container`       |
| Menu standard menu item selected pressed supporting text color          | `md.comp.menus.standard.menu-item.selected.pressed.supporting-text.color`          | `md.sys.color.on-tertiary-container`       |
| Menu standard menu item selected pressed trailing supporting text color | `md.comp.menus.standard.menu-item.selected.pressed.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container`       |
| Menu standard menu item selected pressed leading icon color             | `md.comp.menus.standard.menu-item.selected.pressed.leading-icon.color`             | `md.sys.color.on-tertiary-container`       |
| Menu standard menu item selected pressed trailing icon color            | `md.comp.menus.standard.menu-item.selected.pressed.trailing-icon.color`            | `md.sys.color.on-tertiary-container`       |
| Menu standard icon button selected pressed state layer color            | `md.comp.menus.standard.icon-button.selected.pressed.state-layer.color`            | `md.sys.color.on-tertiary-container`       |

---

## Vibrant Color Tokens

### Enabled

| Name                                                  | Token                                                            | Value                                |
| ----------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------ |
| Menu vibrant container color                          | `md.comp.menus.vibrant.container.color`                          | #FFD8E4                              |
| Menu vibrant menu item color                          | `md.comp.menus.vibrant.menu-item.color`                          | `md.sys.color.tertiary-container`    |
| Menu vibrant section label text color                 | `md.comp.menus.vibrant.section-label-text.color`                 | #633B48                              |
| Menu vibrant menu item label text color               | `md.comp.menus.vibrant.menu-item.label-text.color`               | `md.sys.color.on-tertiary-container` |
| Menu vibrant menu item supporting text color          | `md.comp.menus.vibrant.menu-item.supporting-text.color`          | `md.sys.color.on-tertiary-container` |
| Menu vibrant menu item trailing supporting text color | `md.comp.menus.vibrant.menu-item.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` |
| Menu vibrant menu item leading icon color             | `md.comp.menus.vibrant.menu-item.leading-icon.color`             | `md.sys.color.on-tertiary-container` |
| Menu vibrant menu item trailing icon color            | `md.comp.menus.vibrant.menu-item.trailing-icon.color`            | `md.sys.color.on-tertiary-container` |
| Menu vibrant icon button container color              | `md.comp.menus.vibrant.icon-button.container.color`              | `md.sys.color.tertiary-container`    |
| Menu vibrant icon button icon color                   | `md.comp.menus.vibrant.icon-button.icon.color`                   | `md.sys.color.on-tertiary-container` |

### Disabled

| Name                                                             | Token                                                                       | Value                                |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------ |
| Menu vibrant menu item disabled label text color                 | `md.comp.menus.vibrant.menu-item.disabled.label-text.color`                 | `md.sys.color.on-tertiary-container` |
| Menu vibrant menu item disabled label text opacity               | `md.comp.menus.vibrant.menu-item.disabled.label-text.opacity`               | 0.38                                 |
| Menu vibrant menu item disabled supporting text color            | `md.comp.menus.vibrant.menu-item.disabled.supporting-text.color`            | `md.sys.color.on-tertiary-container` |
| Menu vibrant menu item disabled supporting text opacity          | `md.comp.menus.vibrant.menu-item.disabled.supporting-text.opacity`          | 0.38                                 |
| Menu vibrant menu item disabled trailing supporting text color   | `md.comp.menus.vibrant.menu-item.disabled.trailing-supporting-text.color`   | `md.sys.color.on-tertiary-container` |
| Menu vibrant menu item disabled trailing supporting text opacity | `md.comp.menus.vibrant.menu-item.disabled.trailing-supporting-text.opacity` | 0.38                                 |
| Menu vibrant menu item disabled leading icon color               | `md.comp.menus.vibrant.menu-item.disabled.leading-icon.color`               | `md.sys.color.on-tertiary-container` |
| Menu vibrant menu item disabled leading icon opacity             | `md.comp.menus.vibrant.menu-item.disabled.leading-icon.opacity`             | 0.38                                 |
| Menu vibrant menu item disabled trailing icon color              | `md.comp.menus.vibrant.menu-item.disabled.trailing-icon.color`              | `md.sys.color.on-tertiary-container` |
| Menu vibrant menu item disabled trailing icon opacity            | `md.comp.menus.vibrant.menu-item.disabled.trailing-icon.opacity`            | 0.38                                 |
| Menu vibrant icon button disabled icon color                     | `md.comp.menus.vibrant.icon-button.disabled.icon.color`                     | `md.sys.color.on-tertiary-container` |

### Hovered

| Name                                                          | Token                                                                    | Value                                    |
| ------------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------- |
| Menu vibrant menu item hovered state layer color              | `md.comp.menus.vibrant.menu-item.hovered.state-layer.color`              | `md.sys.color.on-tertiary-container`     |
| Menu vibrant menu item hovered state layer opacity            | `md.comp.menus.vibrant.menu-item.hovered.state-layer.opacity`            | `md.sys.state.hover.state-layer-opacity` |
| Menu vibrant menu item hovered label text color               | `md.comp.menus.vibrant.menu-item.hovered.label-text.color`               | `md.sys.color.on-tertiary-container`     |
| Menu vibrant menu item hovered supporting text color          | `md.comp.menus.vibrant.menu-item.hovered.supporting-text.color`          | `md.sys.color.on-tertiary-container`     |
| Menu vibrant menu item hovered trailing supporting text color | `md.comp.menus.vibrant.menu-item.hovered.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container`     |
| Menu vibrant menu item hovered leading icon color             | `md.comp.menus.vibrant.menu-item.hovered.leading-icon.color`             | `md.sys.color.tertiary`                  |
| Menu vibrant menu item hovered trailing icon color            | `md.comp.menus.vibrant.menu-item.hovered.trailing-icon.color`            | `md.sys.color.tertiary`                  |
| Menu vibrant icon button hovered state layer color            | `md.comp.menus.vibrant.icon-button.hovered.state-layer.color`            | `md.sys.color.on-tertiary-container`     |

### Focused

| Name                                                          | Token                                                                    | Value                                    |
| ------------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------- |
| Menu vibrant menu item focused state layer color              | `md.comp.menus.vibrant.menu-item.focused.state-layer.color`              | `md.sys.color.on-tertiary-container`     |
| Menu vibrant menu item focused state layer opacity            | `md.comp.menus.vibrant.menu-item.focused.state-layer.opacity`            | `md.sys.state.focus.state-layer-opacity` |
| Menu vibrant menu item focused label text color               | `md.comp.menus.vibrant.menu-item.focused.label-text.color`               | `md.sys.color.on-tertiary-container`     |
| Menu vibrant menu item focused supporting text color          | `md.comp.menus.vibrant.menu-item.focused.supporting-text.color`          | `md.sys.color.on-tertiary-container`     |
| Menu vibrant menu item focused trailing supporting text color | `md.comp.menus.vibrant.menu-item.focused.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container`     |
| Menu vibrant menu item focused leading icon color             | `md.comp.menus.vibrant.menu-item.focused.leading-icon.color`             | `md.sys.color.tertiary`                  |
| Menu vibrant menu item focused trailing icon color            | `md.comp.menus.vibrant.menu-item.focused.trailing-icon.color`            | `md.sys.color.tertiary`                  |
| Menu vibrant icon button focused state layer color            | `md.comp.menus.vibrant.icon-button.focused.state-layer.color`            | `md.sys.color.on-tertiary-container`     |

### Pressed

| Name                                                          | Token                                                                    | Value                                      |
| ------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------ |
| Menu vibrant menu item pressed state layer color              | `md.comp.menus.vibrant.menu-item.pressed.state-layer.color`              | `md.sys.color.on-tertiary-container`       |
| Menu vibrant menu item pressed state layer opacity            | `md.comp.menus.vibrant.menu-item.pressed.state-layer.opacity`            | `md.sys.state.pressed.state-layer-opacity` |
| Menu vibrant menu item pressed label text color               | `md.comp.menus.vibrant.menu-item.pressed.label-text.color`               | `md.sys.color.on-tertiary-container`       |
| Menu vibrant menu item pressed supporting text color          | `md.comp.menus.vibrant.menu-item.pressed.supporting-text.color`          | `md.sys.color.on-tertiary-container`       |
| Menu vibrant menu item pressed trailing supporting text color | `md.comp.menus.vibrant.menu-item.pressed.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container`       |
| Menu vibrant menu item pressed leading icon color             | `md.comp.menus.vibrant.menu-item.pressed.leading-icon.color`             | `md.sys.color.tertiary`                    |
| Menu vibrant menu item pressed trailing icon color            | `md.comp.menus.vibrant.menu-item.pressed.trailing-icon.color`            | `md.sys.color.tertiary`                    |
| Menu vibrant icon button pressed state layer color            | `md.comp.menus.vibrant.icon-button.pressed.state-layer.color`            | `md.sys.color.on-tertiary-container`       |

### Enabled, Active

| Name                                              | Token                                                        | Value                                    |
| ------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Menu vibrant menu item active state layer color   | `md.comp.menus.vibrant.menu-item.active.state-layer.color`   | `md.sys.color.on-tertiary-container`     |
| Menu vibrant menu item active state layer opacity | `md.comp.menus.vibrant.menu-item.active.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

### Enabled, Selected

| Name                                                           | Token                                                                     | Value                      |
| -------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------- |
| Menu vibrant menu item selected container color                | `md.comp.menus.vibrant.menu-item.selected.container.color`                | `md.sys.color.tertiary`    |
| Menu vibrant menu item selected supporting text color          | `md.comp.menus.vibrant.menu-item.selected.supporting-text.color`          | `md.sys.color.on-tertiary` |
| Menu vibrant menu item selected trailing supporting text color | `md.comp.menus.vibrant.menu-item.selected.trailing-supporting-text.color` | `md.sys.color.on-tertiary` |
| Menu vibrant menu item selected label text color               | `md.comp.menus.vibrant.menu-item.selected.label-text.color`               | `md.sys.color.on-tertiary` |
| Menu vibrant menu item selected leading icon color             | `md.comp.menus.vibrant.menu-item.selected.leading-icon.color`             | `md.sys.color.on-tertiary` |
| Menu vibrant menu item selected trailing icon color            | `md.comp.menus.vibrant.menu-item.selected.trailing-icon.color`            | `md.sys.color.on-tertiary` |
| Menu vibrant icon button selected container color              | `md.comp.menus.vibrant.icon-button.selected.container.color`              | `md.sys.color.tertiary`    |
| Menu vibrant icon button selected icon color                   | `md.comp.menus.vibrant.icon-button.selected.icon.color`                   | `md.sys.color.on-tertiary` |

### Disabled, Selected

| Name                                                                      | Token                                                                                | Value                      |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------- |
| Menu vibrant menu item selected disabled label text opacity               | `md.comp.menus.vibrant.menu-item.selected.disabled.label-text.opacity`               | 0.38                       |
| Menu vibrant menu item selected disabled supporting text opacity          | `md.comp.menus.vibrant.menu-item.selected.disabled.supporting-text.opacity`          | 0.38                       |
| Menu vibrant menu item selected disabled trailing supporting text opacity | `md.comp.menus.vibrant.menu-item.selected.disabled.trailing-supporting-text.opacity` | 0.38                       |
| Menu vibrant menu item selected disabled leading icon opacity             | `md.comp.menus.vibrant.menu-item.selected.disabled.leading-icon.opacity`             | 0.38                       |
| Menu vibrant menu item selected disabled trailing icon opacity            | `md.comp.menus.vibrant.menu-item.selected.disabled.trailing-icon.opacity`            | 0.38                       |
| Menu vibrant icon button selected disabled icon color                     | `md.comp.menus.vibrant.icon-button.selected.disabled.icon.color`                     | `md.sys.color.on-tertiary` |

### Hovered, Selected

| Name                                                        | Token                                                                  | Value                                    |
| ----------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| Menu vibrant menu item selected hovered state layer color   | `md.comp.menus.vibrant.menu-item.selected.hovered.state-layer.color`   | `md.sys.color.on-tertiary`               |
| Menu vibrant menu item selected hovered state layer opacity | `md.comp.menus.vibrant.menu-item.selected.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Menu vibrant menu item selected hovered label text color    | `md.comp.menus.vibrant.menu-item.selected.hovered.label-text.color`    | `md.sys.color.on-tertiary`               |

### Focused, Selected

| Name                                                        | Token                                                                  | Value                                    |
| ----------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| Menu vibrant menu item selected focused state layer color   | `md.comp.menus.vibrant.menu-item.selected.focused.state-layer.color`   | `md.sys.color.on-tertiary`               |
| Menu vibrant menu item selected focused state layer opacity | `md.comp.menus.vibrant.menu-item.selected.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Menu vibrant menu item selected focused label text color    | `md.comp.menus.vibrant.menu-item.selected.focused.label-text.color`    | `md.sys.color.on-tertiary`               |

### Pressed, Selected

| Name                                                        | Token                                                                  | Value                                      |
| ----------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------ |
| Menu vibrant menu item selected pressed state layer color   | `md.comp.menus.vibrant.menu-item.selected.pressed.state-layer.color`   | `md.sys.color.on-tertiary`                 |
| Menu vibrant menu item selected pressed state layer opacity | `md.comp.menus.vibrant.menu-item.selected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Menu vibrant menu item selected pressed label text color    | `md.comp.menus.vibrant.menu-item.selected.pressed.label-text.color`    | `md.sys.color.on-tertiary`                 |

---

## Baseline Menu Tokens (Deprecated)

These tokens apply to the legacy baseline menu variant (`md.comp.menu.*`).

### Enabled

| Name                        | Token                                 | Value                             |
| --------------------------- | ------------------------------------- | --------------------------------- |
| Menu container color        | `md.comp.menu.container.color`        | `md.sys.color.surface-container`  |
| Menu container shape        | `md.comp.menu.container.shape`        | `md.sys.shape.corner.extra-small` |
| Menu container shadow color | `md.comp.menu.container.shadow-color` | `md.sys.color.shadow`             |
| Menu container elevation    | `md.comp.menu.container.elevation`    | `md.sys.elevation.level2`         |

### Enabled / Container

| Name                                           | Token                                                                   | Value                                 |
| ---------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------- |
| Menu list item selected label text color       | `md.comp.menu.list-item.selected.label-text.color`                      | `md.sys.color.on-secondary-container` |
| Menu list item with leading icon - icon color  | `md.comp.menu.list-item.selected.with-leading-icon.leading-icon.color`  | `md.sys.color.on-secondary-container` |
| Menu list item with trailing icon - icon color | `md.comp.menu.list-item.selected.with-leading-icon.trailing-icon.color` | `md.sys.color.on-secondary-container` |
| Menu container surface tint layer color        | `md.comp.menu.container.surface-tint-layer.color`                       | `md.sys.color.surface-tint`           |
| Menu list item container height                | `md.comp.menu.list-item.container.height`                               | 48dp                                  |
| Menu list item selected container color        | `md.comp.menu.list-item.selected.container.color`                       | `md.sys.color.secondary-container`    |

### Enabled / Label Text

| Name                                  | Token                                           | Value                                      |
| ------------------------------------- | ----------------------------------------------- | ------------------------------------------ |
| Menu list item label text color       | `md.comp.menu.list-item.label-text.color`       | `md.sys.color.on-surface`                  |
| Menu list item label text font        | `md.comp.menu.list-item.label-text.font`        | `md.sys.typescale.label-large.font`        |
| Menu list item label text line height | `md.comp.menu.list-item.label-text.line-height` | `md.sys.typescale.label-large.line-height` |
| Menu list item label text size        | `md.comp.menu.list-item.label-text.size`        | `md.sys.typescale.label-large.size`        |
| Menu list item label text tracking    | `md.comp.menu.list-item.label-text.tracking`    | `md.sys.typescale.label-large.tracking`    |
| Menu list item label text weight      | `md.comp.menu.list-item.label-text.weight`      | `md.sys.typescale.label-large.weight`      |
| Label text type style                 | `md.comp.menu.list-item.label-text.type`        | Aa                                         |

### Enabled / Icon

| Name            | Token                                              | Value                             |
| --------------- | -------------------------------------------------- | --------------------------------- |
| Menu icon color | `md.comp.menu.cascading-menu-indicator.icon.color` | `md.sys.color.on-surface-variant` |
| Menu icon size  | `md.comp.menu.cascading-menu-indicator.icon.size`  | 24dp                              |

### Enabled / Leading Icon

| Name                              | Token                                                         | Value                             |
| --------------------------------- | ------------------------------------------------------------- | --------------------------------- |
| Menu list item leading icon size  | `md.comp.menu.list-item.with-leading-icon.leading-icon.size`  | 24dp                              |
| Menu list item leading icon color | `md.comp.menu.list-item.with-leading-icon.leading-icon.color` | `md.sys.color.on-surface-variant` |

### Enabled / Trailing Icon

| Name                               | Token                                                           | Value                             |
| ---------------------------------- | --------------------------------------------------------------- | --------------------------------- |
| Menu list item trailing icon size  | `md.comp.menu.list-item.with-trailing-icon.trailing-icon.size`  | 24dp                              |
| Menu list item trailing icon color | `md.comp.menu.list-item.with-trailing-icon.trailing-icon.color` | `md.sys.color.on-surface-variant` |

### Enabled / Divider

| Name                | Token                         | Value                          |
| ------------------- | ----------------------------- | ------------------------------ |
| Menu divider color  | `md.comp.menu.divider.color`  | `md.sys.color.surface-variant` |
| Menu divider height | `md.comp.menu.divider.height` | 1dp                            |

### Disabled / Label Text

| Name                                       | Token                                                | Value                     |
| ------------------------------------------ | ---------------------------------------------------- | ------------------------- |
| Menu list item disabled label text color   | `md.comp.menu.list-item.disabled.label-text.color`   | `md.sys.color.on-surface` |
| Menu list item disabled label text opacity | `md.comp.menu.list-item.disabled.label-text.opacity` | 0.38                      |

### Disabled / Leading Icon

| Name                                         | Token                                                                    | Value                     |
| -------------------------------------------- | ------------------------------------------------------------------------ | ------------------------- |
| Menu list item disabled leading icon color   | `md.comp.menu.list-item.with-leading-icon.disabled.leading-icon.color`   | `md.sys.color.on-surface` |
| Menu list item disabled leading icon opacity | `md.comp.menu.list-item.with-leading-icon.disabled.leading-icon.opacity` | 0.38                      |

### Disabled / Trailing Icon

| Name                                          | Token                                                                      | Value                     |
| --------------------------------------------- | -------------------------------------------------------------------------- | ------------------------- |
| Menu list item disabled trailing icon color   | `md.comp.menu.list-item.with-trailing-icon.disabled.trailing-icon.color`   | `md.sys.color.on-surface` |
| Menu list item disabled trailing icon opacity | `md.comp.menu.list-item.with-trailing-icon.disabled.trailing-icon.opacity` | 0.38                      |

### Hover / Label Text

| Name                                  | Token                                           | Value                     |
| ------------------------------------- | ----------------------------------------------- | ------------------------- |
| Menu list item hover label text color | `md.comp.menu.list-item.hover.label-text.color` | `md.sys.color.on-surface` |

### Hover / Leading Icon

| Name                                    | Token                                                       | Value                             |
| --------------------------------------- | ----------------------------------------------------------- | --------------------------------- |
| Menu list item hover leading icon color | `md.comp.menu.list-item.with-leading-icon.hover.icon.color` | `md.sys.color.on-surface-variant` |

### Hover / Trailing Icon

| Name                                     | Token                                                        | Value                             |
| ---------------------------------------- | ------------------------------------------------------------ | --------------------------------- |
| Menu list item hover trailing icon color | `md.comp.menu.list-item.with-trailing-icon.hover.icon.color` | `md.sys.color.on-surface-variant` |

### Hover / State Layer

| Name                                     | Token                                              | Value                                    |
| ---------------------------------------- | -------------------------------------------------- | ---------------------------------------- |
| Menu list item hover state layer color   | `md.comp.menu.list-item.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| Menu list item hover state layer opacity | `md.comp.menu.list-item.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

### Focus / Label Text

| Name                                  | Token                                           | Value                     |
| ------------------------------------- | ----------------------------------------------- | ------------------------- |
| Menu list item focus label text color | `md.comp.menu.list-item.focus.label-text.color` | `md.sys.color.on-surface` |

### Focus / Leading Icon

| Name                                    | Token                                                       | Value                             |
| --------------------------------------- | ----------------------------------------------------------- | --------------------------------- |
| Menu list item focus leading icon color | `md.comp.menu.list-item.with-leading-icon.focus.icon.color` | `md.sys.color.on-surface-variant` |

### Focus / Trailing Icon

| Name                                     | Token                                                        | Value                             |
| ---------------------------------------- | ------------------------------------------------------------ | --------------------------------- |
| Menu list item focus trailing icon color | `md.comp.menu.list-item.with-trailing-icon.focus.icon.color` | `md.sys.color.on-surface-variant` |

### Focus / State Layer

| Name                                     | Token                                              | Value                                    |
| ---------------------------------------- | -------------------------------------------------- | ---------------------------------------- |
| Menu list item focus state layer color   | `md.comp.menu.list-item.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| Menu list item focus state layer opacity | `md.comp.menu.list-item.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

### Pressed / Label Text

| Name                                    | Token                                             | Value                     |
| --------------------------------------- | ------------------------------------------------- | ------------------------- |
| Menu list item pressed label text color | `md.comp.menu.list-item.pressed.label-text.color` | `md.sys.color.on-surface` |

### Pressed / Leading Icon

| Name                                      | Token                                                         | Value                             |
| ----------------------------------------- | ------------------------------------------------------------- | --------------------------------- |
| Menu list item pressed leading icon color | `md.comp.menu.list-item.with-leading-icon.pressed.icon.color` | `md.sys.color.on-surface-variant` |

### Pressed / Trailing Icon

| Name                                       | Token                                                          | Value                             |
| ------------------------------------------ | -------------------------------------------------------------- | --------------------------------- |
| Menu list item pressed trailing icon color | `md.comp.menu.list-item.with-trailing-icon.pressed.icon.color` | `md.sys.color.on-surface-variant` |

### Pressed / State Layer

| Name                                       | Token                                                | Value                                      |
| ------------------------------------------ | ---------------------------------------------------- | ------------------------------------------ |
| Menu list item pressed state layer color   | `md.comp.menu.list-item.pressed.state-layer.color`   | `md.sys.color.on-surface`                  |
| Menu list item pressed state layer opacity | `md.comp.menu.list-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

### Focus Indicator

| Name                                | Token                                         | Value                                       |
| ----------------------------------- | --------------------------------------------- | ------------------------------------------- |
| Menu item focus indicator color     | `md.comp.menu.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Menu item focus indicator thickness | `md.comp.menu.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Menu item focus indicator offset    | `md.comp.menu.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` |

---

## Accessibility

### Selection cues

By default, selected items receive both a shape and color change. Maintain at least 3:1 contrast between selected and unselected states. Including a checkmark icon alongside the color change is recommended.

![Selected Alaska with vibrant color and checkmark](https://lh3.googleusercontent.com/sQHnduUnTdZmXVul2Np64bpBWRigAhD_49ObKd4Ks5y6nO0DHiY9tADgizMA9vOTkfNS_w-InRysGae7hxIwcyap_iuISouSE2W03bRdQWM=s0)

### Flexibility & slots

Slots must remain accessible, follow standard menu interaction patterns, and preserve 48x48dp touch targets. Do not add buttons, switches, or direct actions inside menu items.

![Caution: slots for accessible use cases only](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkskcq8-02-caution.png?alt=media&token=f56e6e61-6119-41d8-920c-26f6a7cdafff=s0)

### Focus

When the menu opens, focus lands on the first menu item. The menu closes on: selecting an option, pressing Escape, tapping outside the menu, or using the system back button.

![4 keyboard navigation methods](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkewf5t-03.png?alt=media&token=374bb47a-9f22-409d-b8e5-f427a1f35c00=s0)

### Keyboard Navigation

| Keys                  | Actions                                            |
| --------------------- | -------------------------------------------------- |
| Tab                   | Focus lands on menu                                |
| Space or Enter        | Closed: Opens menu/submenu. Open: Selects item     |
| Up and Down arrows    | Closed: Opens menu. Open: Moves focus to next item |
| Left and Right arrows | Opens or closes a submenu                          |
| Letters               | Focus moves to next item starting with letter      |
| Escape                | Closes menu                                        |

### Interactability

Disabled items can receive focus but are not selectable. Dividers and gaps cannot receive focus.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkkp9r3-05-do.png?alt=media&token=4dda61ae-eb7f-45b1-b02f-d88aed80dd28=s0" /><br/><b>Do:</b> Disabled items can receive focus</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkkqmt3-05-don't.png?alt=media&token=f3178013-9a18-4ac1-9d98-c21a2876ea6d=s0" /><br/><b>Don't:</b> Dividers should not receive focus</td>
</tr></table>

### Labeling

The menu item's text serves as its accessibility label. The role is platform-dependent.

![Preview menu item label](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkl2sea-07.png?alt=media&token=9603d6f5-030f-41e2-84e6-2af9fd0deee5=s0)

| Element        | A11y label | Role (Web) | Role (Android Views)       | Role (Jetpack Compose)     |
| -------------- | ---------- | ---------- | -------------------------- | -------------------------- |
| Menu item text | Preview    | Menu item  | Generic actionable element | Generic actionable element |

Icons placed next to text should be marked as decorative (hidden from screen readers).

![Icon marked decorative](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkkynea-08.png?alt=media&token=3adbfb1f-b0e8-4cd9-8d17-918d2830ddac=s0)

---

## M2 → M3 Differences

In M2, dropdown menus and exposed dropdown menus were separate components. In M3, both are unified under the single "menu" component. M3 introduces dynamic color support with new color mappings.

<table><tr>
<td><img src="https://lh3.googleusercontent.com/lRkDtzZzv1cQwgvOMTY_hxx5v6LvsZjXrAo_zSvv-cqgB6vH92PvSw1XJMN925XPqGDdMB1OgVKZcud6-w4b9LZg709o_yEZGMjqyhsgs6Wz=s0" /><br/>M2: Basic color mappings</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlt7xid-04.png?alt=media&token=10f6b199-9664-4a24-b811-2980270f499c=s0" /><br/>M3: Dynamic color with standard and vibrant styles</td>
</tr></table>
