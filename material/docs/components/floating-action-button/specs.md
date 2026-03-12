---
url: https://m3.material.io/components/floating-action-button/specs
lastmod: 2026-01-14
crawled_at: 2026-02-04T12:00:00.000Z
category: components
section: floating-action-button
page_type: specs
status: complete
---

# FAB Specs

Floating action buttons (FABs) help people take primary actions.

## Variants

![An icon on the container of a FAB, medium FAB, and large FAB.](https://lh3.googleusercontent.com/CdTXXgPJ5XavoUEXtTKTczb0ENYt1VwreirVIJMyIYnwI6gFCYn1S4LCQyptGlF6EzKq9xL2hzPOQKv2RdKrhf6kTIj5vkcNY2u-VuQRqghs=s0)

_FAB, Medium FAB, Large FAB_

### Baseline variants

The small FAB is still available, but no longer recommended.

![An icon on the container of a small FAB.](https://lh3.googleusercontent.com/LVMfvx2rKsoVM1_1Pq9CQ8o0dDyfSQtfCxYgle_57GhDKX0oDkNepZr0yvyqmoI6mL-0QfWWfFkmVJV5RwLbJVGJ4YGXZBTcT9JW2-IPRQNpVg=s0)

_1. Small FAB_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| FAB | Available | Available |
| Medium FAB | -- | Available |
| Large FAB | Available | Available |
| Small FAB | Available | Not recommended. Use a larger size. |

## Configurations

In the expressive update, the **primary**, **secondary**, and **tertiary** set colors were renamed to **primary container**, **secondary container**, and **tertiary container** to match the actual color roles used. New primary, secondary, and tertiary color styles were created to match the corresponding color roles.

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Color | Primary container, secondary container, tertiary container | Available as primary, secondary, tertiary | Available |
| | Primary, secondary, tertiary | -- | Available |

## Tokens & specs

Use the table's menu to select a token set. FAB tokens are organized by size and color.

### FAB - Size - Medium

| Token | ID | Value |
| --- | --- | --- |
| FAB medium container height | `md.comp.fab.medium.container.height` | 80dp |
| FAB medium container width | `md.comp.fab.medium.container.width` | 80dp |
| FAB medium icon size | `md.comp.fab.medium.icon.size` | 28dp |
| FAB medium container shape | `md.comp.fab.medium.container.shape` | md.sys.shape.corner.large |

---

### FAB - Size - Large

| Token | ID | Value |
| --- | --- | --- |
| FAB large container height | `md.comp.fab.large.container.height` | 96dp |
| FAB large container width | `md.comp.fab.large.container.width` | 96dp |
| FAB large icon size | `md.comp.fab.large.icon.size` | 36dp |
| FAB large container shape | `md.comp.fab.large.container.shape` | md.sys.shape.corner.extra-large |

---

### FAB - Color - Tonal primary

#### Enabled

| Token | ID | Value |
| --- | --- | --- |
| FAB tonal primary container color | `md.comp.fab.primary-container.container.color` | #EADDFF |
| FAB tonal primary container shadow color | `md.comp.fab.primary-container.container.shadow-color` | #000000 |
| FAB tonal primary container elevation | `md.comp.fab.primary-container.container.elevation` | md.sys.elevation.level3 |
| FAB tonal primary icon color | `md.comp.fab.primary-container.icon.color` | #4F378B |

#### Hovered

| Token | ID | Value |
| --- | --- | --- |
| FAB tonal primary hovered container elevation | `md.comp.fab.primary-container.hovered.container.elevation` | md.sys.elevation.level4 |
| FAB tonal primary hovered state layer color | `md.comp.fab.primary-container.hovered.state-layer.color` | #4F378B |
| FAB tonal primary hovered state layer opacity | `md.comp.fab.primary-container.hovered.state-layer.opacity` | 0.08 |
| FAB tonal primary hovered icon color | `md.comp.fab.primary-container.hovered.icon.color` | #4F378B |

#### Focused

| Token | ID | Value |
| --- | --- | --- |
| FAB tonal primary focused container elevation | `md.comp.fab.primary-container.focused.container.elevation` | md.sys.elevation.level3 |
| FAB tonal primary focused state layer color | `md.comp.fab.primary-container.focused.state-layer.color` | #4F378B |
| FAB tonal primary focused state layer opacity | `md.comp.fab.primary-container.focused.state-layer.opacity` | 0.1 |
| FAB tonal primary focused icon color | `md.comp.fab.primary-container.focused.icon.color` | #4F378B |

#### Pressed

| Token | ID | Value |
| --- | --- | --- |
| FAB tonal primary pressed container elevation | `md.comp.fab.primary-container.pressed.container.elevation` | md.sys.elevation.level3 |
| FAB tonal primary pressed state layer color | `md.comp.fab.primary-container.pressed.state-layer.color` | #4F378B |
| FAB tonal primary pressed state layer opacity | `md.comp.fab.primary-container.pressed.state-layer.opacity` | 0.1 |
| FAB tonal primary pressed icon color | `md.comp.fab.primary-container.pressed.icon.color` | #4F378B |

---

### FAB - Color - Tonal secondary

#### Enabled

| Token | ID | Value |
| --- | --- | --- |
| FAB tonal secondary container color | `md.comp.fab.secondary-container.container.color` | #E8DEF8 |
| FAB tonal secondary container shadow color | `md.comp.fab.secondary-container.container.shadow-color` | #000000 |
| FAB tonal secondary container elevation | `md.comp.fab.secondary-container.container.elevation` | md.sys.elevation.level3 |
| FAB tonal secondary icon color | `md.comp.fab.secondary-container.icon.color` | #4A4458 |

#### Hovered

| Token | ID | Value |
| --- | --- | --- |
| FAB tonal secondary hovered container elevation | `md.comp.fab.secondary-container.hovered.container.elevation` | md.sys.elevation.level4 |
| FAB tonal secondary hovered state layer color | `md.comp.fab.secondary-container.hovered.state-layer.color` | #4A4458 |
| FAB tonal secondary hovered state layer opacity | `md.comp.fab.secondary-container.hovered.state-layer.opacity` | 0.08 |
| FAB tonal secondary hovered icon color | `md.comp.fab.secondary-container.hovered.icon.color` | #4A4458 |

#### Focused

| Token | ID | Value |
| --- | --- | --- |
| FAB tonal secondary focused container elevation | `md.comp.fab.secondary-container.focused.container.elevation` | md.sys.elevation.level3 |
| FAB tonal secondary focused state layer color | `md.comp.fab.secondary-container.focused.state-layer.color` | #4A4458 |
| FAB tonal secondary focused state layer opacity | `md.comp.fab.secondary-container.focused.state-layer.opacity` | 0.1 |
| FAB tonal secondary focused icon color | `md.comp.fab.secondary-container.focused.icon.color` | #4A4458 |

#### Pressed

| Token | ID | Value |
| --- | --- | --- |
| FAB tonal secondary pressed container elevation | `md.comp.fab.secondary-container.pressed.container.elevation` | md.sys.elevation.level3 |
| FAB tonal secondary pressed state layer color | `md.comp.fab.secondary-container.pressed.state-layer.color` | #4A4458 |
| FAB tonal secondary pressed state layer opacity | `md.comp.fab.secondary-container.pressed.state-layer.opacity` | 0.1 |
| FAB tonal secondary pressed icon color | `md.comp.fab.secondary-container.pressed.icon.color` | #4A4458 |

---

### FAB - Color - Tonal tertiary

#### Enabled

| Token | ID | Value |
| --- | --- | --- |
| FAB tonal tertiary container color | `md.comp.fab.tertiary-container.container.color` | #FFD8E4 |
| FAB tonal tertiary container shadow color | `md.comp.fab.tertiary-container.container.shadow-color` | #000000 |
| FAB tonal tertiary container elevation | `md.comp.fab.tertiary-container.container.elevation` | md.sys.elevation.level3 |
| FAB tonal tertiary icon color | `md.comp.fab.tertiary-container.icon.color` | #633B48 |

#### Hovered

| Token | ID | Value |
| --- | --- | --- |
| FAB tonal tertiary hovered container elevation | `md.comp.fab.tertiary-container.hovered.container.elevation` | md.sys.elevation.level4 |
| FAB tonal tertiary hovered state layer color | `md.comp.fab.tertiary-container.hovered.state-layer.color` | #633B48 |
| FAB tonal tertiary hovered state layer opacity | `md.comp.fab.tertiary-container.hovered.state-layer.opacity` | 0.08 |
| FAB tonal tertiary hovered icon color | `md.comp.fab.tertiary-container.hovered.icon.color` | #633B48 |

#### Focused

| Token | ID | Value |
| --- | --- | --- |
| FAB tonal tertiary focused container elevation | `md.comp.fab.tertiary-container.focused.container.elevation` | md.sys.elevation.level3 |
| FAB tonal tertiary focused state layer color | `md.comp.fab.tertiary-container.focused.state-layer.color` | #633B48 |
| FAB tonal tertiary focused state layer opacity | `md.comp.fab.tertiary-container.focused.state-layer.opacity` | 0.1 |
| FAB tonal tertiary focused icon color | `md.comp.fab.tertiary-container.focused.icon.color` | #633B48 |

#### Pressed

| Token | ID | Value |
| --- | --- | --- |
| FAB tonal tertiary pressed container elevation | `md.comp.fab.tertiary-container.pressed.container.elevation` | md.sys.elevation.level3 |
| FAB tonal tertiary pressed state layer color | `md.comp.fab.tertiary-container.pressed.state-layer.color` | #633B48 |
| FAB tonal tertiary pressed state layer opacity | `md.comp.fab.tertiary-container.pressed.state-layer.opacity` | 0.1 |
| FAB tonal tertiary pressed icon color | `md.comp.fab.tertiary-container.pressed.icon.color` | #633B48 |

---

## Anatomy

![2 elements of the FAB.](https://lh3.googleusercontent.com/ANFTHcXuJZA9FSSl3I315pOU3UzwgUh_BZgfudPuvatQY4tLh2hREtb6ESAQZulQZBDe8iHcqQ548uZe2aJd2UGGv-8q2XXCBeGLdERRlXs=s0)

1. Container
2. Icon

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

### Color styles

FABs can use several combinations of **color** and **on-color** styles, such as **primary** and **on-primary**. The following color mappings provide the same legibility and functionality, so the color mapping you use depends on style alone.

![6 FAB color styles in light and dark themes. Each style has 2 color roles, 1 for the container and icon.](https://lh3.googleusercontent.com/ZwUAoGfKU_nKPy45dUL885gk5_UbUfDoN2lY0oreRhS7vnkY12iBhnT3a1Fm1LydwMZVkqFYkQhYjVbGHx_hHsPwlmEm2KWwSQ75kOOKSkCsEA=s0)

- Primary container & On primary container (default)
- Secondary container & On secondary container
- Tertiary container & On tertiary container
- Primary & On primary
- Secondary & On secondary
- Tertiary & On tertiary

### Baseline color styles

Surface FAB color styles are still available, but no longer recommended.

![Baseline FAB style in all 3 sizes.](https://lh3.googleusercontent.com/Yt-382N_6b_TEqwyVAFZY_PG3zCmejVTFm6-tfbkUGpTqwgeECy2CNFH8n0bV1Spc6qU-ruc9l-Qja0_LpTeeYatxSxOi7qyzjF5tSeeXuEU=s0)

_Surface FABs_

## States

States are visual representations used to communicate the status of a component or interactive element.

When using a non-default color mapping for FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for the **primary** color style should be md.sys.color.primary.

![4 states of a FAB shown in light and dark themes.](https://lh3.googleusercontent.com/zCVGIf6lxv-ExBpOFiRo9G2yv-hIzjqPkEG0HKniNMzlBuWcEI8tXSvAndc3RL7Q0OOG56i6xP36k1rP1E-Fz92l4TGPZlkzdbNCF67rj2M=s0)

- Enabled
- Hovered (8% state layer) - elevation 4
- Focused (10% state layer)
- Pressed (10% state layer)

## Measurements

### FAB

![FAB size measurements.](https://lh3.googleusercontent.com/bY4SJyZCamFkqUakHco1-HsHBRJ55wn7zAWPhJCBlE9W4aA7wFnRywl8NSl_e7oToqU6JODtUnjeguVn7BJd5irT8DYnHQmq1lQKEvgN3g3Q=s0)

_FAB size measurements_

![FAB padding measurements.](https://lh3.googleusercontent.com/beevX-JBo5BT5oaSR6WnfIvvspxwDFUOsGg0TBWuDEAgjCYevFNjOhNnz6om1Pbxkal9dwoBR5HwAeyyn7LB8z1N-NrDjH_F9ZcxN_lEL60=s0)

_FAB padding measurements_

### Medium FAB

![Medium FAB size measurements.](https://lh3.googleusercontent.com/l-yip97Leh5bLumalSFuxS1DEMG6p3xJlXkUCTioixjvr0uXlzTaKK85zQzLnZPpgD9E72Zajd1yO9VMW1FKpSUVCWXbP5XIxIz6dUiubWALJw=s0)

_Medium FAB size measurements_

![Medium FAB padding measurements.](https://lh3.googleusercontent.com/qQZXXxZh9x9LRJyZI_2tblBDG7aMd-Rx3HQVX-ssihAGa-xSIGuOA2FZNPKeHgfbI-q19SD0IIUCT-xnLHk4Q-P2KSb-KnSm95tRPJQs2rKx=s0)

_Medium FAB padding measurements_

### Large FAB

![Large FAB size measurements.](https://lh3.googleusercontent.com/_1q2AqUdfZfCbC9aKRbQaXHO48GA5OSdH6ywXyyosvlIznXjrr0Wx-WM9xomavwT1qj6RA42qG01crP9I7GQPJ92BWnvJqijQ01UxjQKKcgS=s0)

_Large FAB size measurements_

![Large FAB padding measurements.](https://lh3.googleusercontent.com/PsH6GvakYnsKOw9X05rxaShBXItlCIc3qS-LGjmdITmzFgAnhxdiyhzUEM34i8B0MGtZoBoDdXE7eA1hYAFqcWEqFyipPBdhE0TirWp_HMWxTA=s0)

_Large FAB padding measurements_

## Baseline tokens & specs

Use the table's menu to select a token set. This only includes baseline tokens, including small and surface FABs. It doesn't include large or regular FABs, since those are still currently used.

### [Deprecated] FAB - Primary, small

#### Enabled

| Token | ID | Value |
| --- | --- | --- |
| Container color | `md.comp.fab.primary.small.container.color` | md.sys.color.primary-container |
| Container shadow color | `md.comp.fab.primary.small.container.shadow-color` | md.sys.color.shadow |
| Container elevation | `md.comp.fab.primary.small.container.elevation` | md.sys.elevation.level3 |
| Icon color | `md.comp.fab.primary.small.icon.color` | md.sys.color.on-primary-container |
| Container height | `md.comp.fab.primary.small.container.height` | 40dp |
| Container width | `md.comp.fab.primary.small.container.width` | 40dp |
| Icon size | `md.comp.fab.primary.small.icon.size` | 24dp |
| Container shape | `md.comp.fab.primary.small.container.shape` | md.sys.shape.corner.medium |

#### Hovered

| Token | ID | Value |
| --- | --- | --- |
| Container elevation | `md.comp.fab.primary.small.hovered.container.elevation` | md.sys.elevation.level4 |
| State layer color | `md.comp.fab.primary.small.hovered.state-layer.color` | md.sys.color.on-primary-container |
| State layer opacity | `md.comp.fab.primary.small.hovered.state-layer.opacity` | 0.08 |

#### Focused

| Token | ID | Value |
| --- | --- | --- |
| Container elevation | `md.comp.fab.primary.small.focused.container.elevation` | md.sys.elevation.level3 |
| State layer color | `md.comp.fab.primary.small.focused.state-layer.color` | md.sys.color.on-primary-container |
| State layer opacity | `md.comp.fab.primary.small.focused.state-layer.opacity` | 0.1 |

#### Pressed

| Token | ID | Value |
| --- | --- | --- |
| Container elevation | `md.comp.fab.primary.small.pressed.container.elevation` | md.sys.elevation.level3 |
| State layer color | `md.comp.fab.primary.small.pressed.state-layer.color` | md.sys.color.on-primary-container |
| State layer opacity | `md.comp.fab.primary.small.pressed.state-layer.opacity` | 0.1 |

---

### [Deprecated] FAB - Primary, large

#### Enabled

| Token | ID | Value |
| --- | --- | --- |
| Container color | `md.comp.fab.primary.large.container.color` | md.sys.color.primary-container |
| Container shadow color | `md.comp.fab.primary.large.container.shadow-color` | md.sys.color.shadow |
| Container elevation | `md.comp.fab.primary.large.container.elevation` | md.sys.elevation.level3 |
| Icon color | `md.comp.fab.primary.large.icon.color` | md.sys.color.on-primary-container |
| Container height | `md.comp.fab.primary.large.container.height` | 96dp |
| Container width | `md.comp.fab.primary.large.container.width` | 96dp |
| Icon size | `md.comp.fab.primary.large.icon.size` | 36dp |
| Container shape | `md.comp.fab.primary.large.container.shape` | md.sys.shape.corner.extra-large |

---

### [Deprecated] FAB - Secondary, small

#### Enabled

| Token | ID | Value |
| --- | --- | --- |
| Container color | `md.comp.fab.secondary.small.container.color` | md.sys.color.secondary-container |
| Icon color | `md.comp.fab.secondary.small.icon.color` | md.sys.color.on-secondary-container |
| Container height | `md.comp.fab.secondary.small.container.height` | 40dp |
| Container width | `md.comp.fab.secondary.small.container.width` | 40dp |
| Icon size | `md.comp.fab.secondary.small.icon.size` | 24dp |
| Container shape | `md.comp.fab.secondary.small.container.shape` | md.sys.shape.corner.medium |

---

### [Deprecated] FAB - Secondary, large

#### Enabled

| Token | ID | Value |
| --- | --- | --- |
| Container color | `md.comp.fab.secondary.large.container.color` | md.sys.color.secondary-container |
| Icon color | `md.comp.fab.secondary.large.icon.color` | md.sys.color.on-secondary-container |
| Container height | `md.comp.fab.secondary.large.container.height` | 96dp |
| Container width | `md.comp.fab.secondary.large.container.width` | 96dp |
| Icon size | `md.comp.fab.secondary.large.icon.size` | 36dp |
| Container shape | `md.comp.fab.secondary.large.container.shape` | md.sys.shape.corner.extra-large |

---

### [Deprecated] FAB - Tertiary, small

#### Enabled

| Token | ID | Value |
| --- | --- | --- |
| Container color | `md.comp.fab.tertiary.small.container.color` | md.sys.color.tertiary-container |
| Icon color | `md.comp.fab.tertiary.small.icon.color` | md.sys.color.on-tertiary-container |
| Container height | `md.comp.fab.tertiary.small.container.height` | 40dp |
| Container width | `md.comp.fab.tertiary.small.container.width` | 40dp |
| Icon size | `md.comp.fab.tertiary.small.icon.size` | 24dp |
| Container shape | `md.comp.fab.tertiary.small.container.shape` | md.sys.shape.corner.medium |

---

### [Deprecated] FAB - Tertiary, large

#### Enabled

| Token | ID | Value |
| --- | --- | --- |
| Container color | `md.comp.fab.tertiary.large.container.color` | md.sys.color.tertiary-container |
| Icon color | `md.comp.fab.tertiary.large.icon.color` | md.sys.color.on-tertiary-container |
| Container height | `md.comp.fab.tertiary.large.container.height` | 96dp |
| Container width | `md.comp.fab.tertiary.large.container.width` | 96dp |
| Icon size | `md.comp.fab.tertiary.large.icon.size` | 36dp |
| Container shape | `md.comp.fab.tertiary.large.container.shape` | md.sys.shape.corner.extra-large |

---

### [Deprecated] FAB - Surface, small

#### Enabled

| Token | ID | Value |
| --- | --- | --- |
| Container color | `md.comp.fab.surface.small.container.color` | md.sys.color.surface-container-high |
| Icon color | `md.comp.fab.surface.small.icon.color` | md.sys.color.primary |
| Container height | `md.comp.fab.surface.small.container.height` | 40dp |
| Container width | `md.comp.fab.surface.small.container.width` | 40dp |
| Icon size | `md.comp.fab.surface.small.icon.size` | 24dp |
| Container shape | `md.comp.fab.surface.small.container.shape` | md.sys.shape.corner.medium |

---

### [Deprecated] FAB - Surface, large

#### Enabled

| Token | ID | Value |
| --- | --- | --- |
| Container color | `md.comp.fab.surface.large.container.color` | md.sys.color.surface-container-high |
| Icon color | `md.comp.fab.surface.large.icon.color` | md.sys.color.primary |
| Container height | `md.comp.fab.surface.large.container.height` | 96dp |
| Container width | `md.comp.fab.surface.large.container.width` | 96dp |
| Icon size | `md.comp.fab.surface.large.icon.size` | 36dp |
| Container shape | `md.comp.fab.surface.large.container.shape` | md.sys.shape.corner.extra-large |
