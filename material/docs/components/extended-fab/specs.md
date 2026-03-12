---
url: https://m3.material.io/components/extended-fab/specs
lastmod: 2025-09-26
crawled_at: 2026-02-04T12:00:00.000Z
category: components
section: extended-fab
page_type: specs
status: complete
---

# Extended FABs Specs

## Types

![3 types of extended FABs.](https://lh3.googleusercontent.com/BU02XKNQEFAuGts8-NpS5UG9q4WN58-z0DM-KPlHoM4MBqV_R39vdorWW1ONyIKGphkVugmYfKEvEwPEUG4QsmAosBurPXcfoTs_RT4w4hta=s0)

- Small extended FAB
- Medium extended FAB
- Large extended FAB

### Deprecated types

The original extended FAB is deprecated in the expressive update. Use a small extended FAB; the type style was updated from **label large** to **title medium**, and the inner padding was reduced.

![1 deprecated extended FAB.](https://lh3.googleusercontent.com/pcW-KzjKYIkI08HsYSKw2bRaDPQgikxhsVRQWVzMTObgMoJCv-Mx_IIXFzbhIDUXMXq-MaTXPrPWHipLOx_6LBdmJSC9UwJDsmg-rL9oxDU=s0)

| Type | Original M3 | M3 Expressive |
| --- | --- | --- |
| Small extended FAB | -- | Available |
| Medium extended FAB | -- | Available |
| Large extended FAB | -- | Available |
| Extended FAB | Available | Deprecated (Use small extended FAB) |

## Tokens & specs

Extended FAB tokens are organized by size and color.

### Extended FAB - Size - Small

| Token | Token ID | Value |
| --- | --- | --- |
| Container height | `md.comp.extended-fab.small.container.height` | 56dp |
| Label text | `md.comp.extended-fab.small.label-text` | Aa |
| Icon size | `md.comp.extended-fab.small.icon.size` | 24dp |
| Container shape | `md.comp.extended-fab.small.container.shape` | -- |
| Leading space | `md.comp.extended-fab.small.leading-space` | 16dp |
| Icon label space | `md.comp.extended-fab.small.icon-label-space` | 8dp |
| Trailing space | `md.comp.extended-fab.small.trailing-space` | 16dp |

### Extended FAB - Size - Medium

| Token | Token ID | Value |
| --- | --- | --- |
| Container height | `md.comp.extended-fab.medium.container.height` | 80dp |
| Label text | `md.comp.extended-fab.medium.label-text` | Aa |
| Icon size | `md.comp.extended-fab.medium.icon.size` | 28dp |
| Container shape | `md.comp.extended-fab.medium.container.shape` | -- |
| Leading space | `md.comp.extended-fab.medium.leading-space` | 26dp |
| Icon label space | `md.comp.extended-fab.medium.icon-label-space` | 12dp |
| Trailing space | `md.comp.extended-fab.medium.trailing-space` | 26dp |

### Extended FAB - Size - Large

| Token | Token ID | Value |
| --- | --- | --- |
| Container height | `md.comp.extended-fab.large.container.height` | 96dp |
| Label text | `md.comp.extended-fab.large.label-text` | Aa |
| Icon size | `md.comp.extended-fab.large.icon.size` | 36dp |
| Container shape | `md.comp.extended-fab.large.container.shape` | -- |
| Leading space | `md.comp.extended-fab.large.leading-space` | 28dp |
| Icon label space | `md.comp.extended-fab.large.icon-label-space` | 16dp |
| Trailing space | `md.comp.extended-fab.large.trailing-space` | 28dp |

### Extended FAB - Color - Tonal primary

#### Enabled

| Token | Token ID | Value |
| --- | --- | --- |
| Container color | `md.comp.extended-fab.primary-container.container.color` | #EADDFF |
| Container elevation | `md.comp.extended-fab.primary-container.container.elevation` | -- |
| Container shadow color | `md.comp.extended-fab.primary-container.container.shadow-color` | #000000 |
| Label text color | `md.comp.extended-fab.primary-container.label-text.color` | #4F378B |
| Icon color | `md.comp.extended-fab.primary-container.icon.color` | #4F378B |

#### Hovered

| Token | Token ID | Value |
| --- | --- | --- |
| Container elevation | `md.comp.extended-fab.primary-container.hovered.container.elevation` | -- |
| State layer color | `md.comp.extended-fab.primary-container.hovered.state-layer.color` | #4F378B |
| State layer opacity | `md.comp.extended-fab.primary-container.hovered.state-layer.opacity` | 0.08 |
| Label text color | `md.comp.extended-fab.primary-container.hovered.label-text.color` | #4F378B |
| Icon color | `md.comp.extended-fab.primary-container.hovered.icon.color` | #4F378B |

#### Focused

| Token | Token ID | Value |
| --- | --- | --- |
| Container elevation | `md.comp.extended-fab.primary-container.focused.container.elevation` | -- |
| State layer color | `md.comp.extended-fab.primary-container.focused.state-layer.color` | #4F378B |
| State layer opacity | `md.comp.extended-fab.primary-container.focused.state-layer.opacity` | 0.1 |
| Label text color | `md.comp.extended-fab.primary-container.focused.label-text.color` | #4F378B |
| Icon color | `md.comp.extended-fab.primary-container.focused.icon.color` | #4F378B |

#### Pressed

| Token | Token ID | Value |
| --- | --- | --- |
| Container elevation | `md.comp.extended-fab.primary-container.pressed.container.elevation` | -- |
| State layer color | `md.comp.extended-fab.primary-container.pressed.state-layer.color` | #4F378B |
| State layer opacity | `md.comp.extended-fab.primary-container.pressed.state-layer.opacity` | 0.1 |
| Label text color | `md.comp.extended-fab.primary-container.pressed.label-text.color` | #4F378B |
| Icon color | `md.comp.extended-fab.primary-container.pressed.icon.color` | #4F378B |

### Extended FAB - Color - Tonal secondary

#### Enabled

| Token | Token ID | Value |
| --- | --- | --- |
| Container color | `md.comp.extended-fab.secondary-container.container.color` | #E8DEF8 |
| Container elevation | `md.comp.extended-fab.secondary-container.container.elevation` | -- |
| Container shadow color | `md.comp.extended-fab.secondary-container.container.shadow-color` | #000000 |
| Label text color | `md.comp.extended-fab.secondary-container.label-text.color` | #4A4458 |
| Icon color | `md.comp.extended-fab.secondary-container.icon.color` | #4A4458 |

#### Hovered

| Token | Token ID | Value |
| --- | --- | --- |
| Container elevation | `md.comp.extended-fab.secondary-container.hovered.container.elevation` | -- |
| State layer color | `md.comp.extended-fab.secondary-container.hovered.state-layer.color` | #4A4458 |
| State layer opacity | `md.comp.extended-fab.secondary-container.hovered.state-layer.opacity` | 0.08 |
| Label text color | `md.comp.extended-fab.secondary-container.hovered.label-text.color` | #4A4458 |
| Icon color | `md.comp.extended-fab.secondary-container.hovered.icon.color` | #4A4458 |

#### Focused

| Token | Token ID | Value |
| --- | --- | --- |
| Container elevation | `md.comp.extended-fab.secondary-container.focused.container.elevation` | -- |
| State layer color | `md.comp.extended-fab.secondary-container.focused.state-layer.color` | #4A4458 |
| State layer opacity | `md.comp.extended-fab.secondary-container.focused.state-layer.opacity` | 0.1 |
| Label text color | `md.comp.extended-fab.secondary-container.focused.label-text.color` | #4A4458 |
| Icon color | `md.comp.extended-fab.secondary-container.focused.icon.color` | #4A4458 |

#### Pressed

| Token | Token ID | Value |
| --- | --- | --- |
| Container elevation | `md.comp.extended-fab.secondary-container.pressed.container.elevation` | -- |
| State layer color | `md.comp.extended-fab.secondary-container.pressed.state-layer.color` | #4A4458 |
| State layer opacity | `md.comp.extended-fab.secondary-container.pressed.state-layer.opacity` | 0.1 |
| Label text color | `md.comp.extended-fab.secondary-container.pressed.label-text.color` | #4A4458 |
| Icon color | `md.comp.extended-fab.secondary-container.pressed.icon.color` | #4A4458 |

### Extended FAB - Color - Tonal tertiary

#### Enabled

| Token | Token ID | Value |
| --- | --- | --- |
| Container color | `md.comp.extended-fab.tertiary-container.container.color` | #FFD8E4 |
| Container elevation | `md.comp.extended-fab.tertiary-container.container.elevation` | -- |
| Container shadow color | `md.comp.extended-fab.tertiary-container.container.shadow-color` | #000000 |
| Label text color | `md.comp.extended-fab.tertiary-container.label-text.color` | #633B48 |
| Icon color | `md.comp.extended-fab.tertiary-container.icon.color` | #633B48 |

#### Hovered

| Token | Token ID | Value |
| --- | --- | --- |
| Container elevation | `md.comp.extended-fab.tertiary-container.hovered.container.elevation` | -- |
| State layer color | `md.comp.extended-fab.tertiary-container.hovered.state-layer.color` | #633B48 |
| State layer opacity | `md.comp.extended-fab.tertiary-container.hovered.state-layer.opacity` | 0.08 |
| Label text color | `md.comp.extended-fab.tertiary-container.hovered.label-text.color` | #633B48 |
| Icon color | `md.comp.extended-fab.tertiary-container.hovered.icon.color` | #633B48 |

#### Focused

| Token | Token ID | Value |
| --- | --- | --- |
| Container elevation | `md.comp.extended-fab.tertiary-container.focused.container.elevation` | -- |
| State layer color | `md.comp.extended-fab.tertiary-container.focused.state-layer.color` | #633B48 |
| State layer opacity | `md.comp.extended-fab.tertiary-container.focused.state-layer.opacity` | 0.1 |
| Label text color | `md.comp.extended-fab.tertiary-container.focused.label-text.color` | #633B48 |
| Icon color | `md.comp.extended-fab.tertiary-container.focused.icon.color` | #633B48 |

#### Pressed

| Token | Token ID | Value |
| --- | --- | --- |
| Container elevation | `md.comp.extended-fab.tertiary-container.pressed.container.elevation` | -- |
| State layer color | `md.comp.extended-fab.tertiary-container.pressed.state-layer.color` | #633B48 |
| State layer opacity | `md.comp.extended-fab.tertiary-container.pressed.state-layer.opacity` | 0.1 |
| Label text color | `md.comp.extended-fab.tertiary-container.pressed.label-text.color` | #633B48 |
| Icon color | `md.comp.extended-fab.tertiary-container.pressed.icon.color` | #633B48 |

## Anatomy

![3 elements of extended FABs.](https://lh3.googleusercontent.com/I81VtVjjXN2Snx8X1zpMv5Jp-q12chYm4QYjLJqDyHlxc6WVWKEa7y9y6NC761EXd6tsmGOBMY6xr0JQogHrvMTu0kC_4od3QLnE-OpJcy7J=s0)

1. Container
2. Label text
3. Icon

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### Color styles

Extended FABs can use several combinations of **color** and **on color** styles, such as **primary** and **on primary**. The following color mappings provide the same level of contrast and functionality, so choose a color mapping based on visual preference.

![6 extended FAB color styles.](https://lh3.googleusercontent.com/1n9kpQw8OhgILXZOD3kA6RzO20NmwQzt184w4PvBbS4qJxqseyJ81kr9yk5cbyr824e7gKDu01_ZzLI6OHKLZGRg9wAoqMG-0062EIHSGDc=s0)

Extended FAB color roles used for light and dark schemes:
- Primary container & on primary container (default)
- Secondary container & on secondary container
- Tertiary container & on tertiary container
- Primary & on primary
- Secondary & on secondary
- Tertiary & on tertiary

### Deprecated color styles

Extended FABs should no longer use surface color styles. They're still available, but not recommended.

![1 deprecated extended FAB color style.](https://lh3.googleusercontent.com/SSZr-dBlNa4O7kbOQi9byJEQSVaZzUOBXZnNoDoxhb5G8Fbd3pQdTfo14YWIS6QTQTIcd70uYAYZWbp1gKwJoUoGZTam2-L5DOYQOHRU0Xnr=s0)

- Surface container FAB

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

When using a non-default color mapping for extended FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for primary mapping should be md.sys.color.primary.

![4 states of extended FABs.](https://lh3.googleusercontent.com/vHxV15QsYc98EQyLenfT7dOu3npLcTkKTLpe5YY2K0m6eNsWU8yXQs_d6XBpaPJ44MJODwpB8iCIgKlZcfnnuHEoReYQZyiWB4QmGyekbJ1I1g=s0)

- Enabled
- Hovered - elevation 4
- Focused
- Pressed

## Measurements

![Extended FAB padding and size measurements.](https://lh3.googleusercontent.com/9IwzFk5XDN4m9vzImfQxg0mR1AtQJ86eAkPH3xC5h2GPFNLw5Wqd0VWHGgMOUOSFF32Iv3M3ypdaXDq9lJRUf9xBuZXQcPS3iw7oWPLa3zqV_A=s0)

_Size and padding measurements of the small, medium, and large extended FABs_

![Extended FAB margin measurements.](https://lh3.googleusercontent.com/mirVSM4EDUYdZY4eF-l65mg6of6d1WI8u5nP3qZcTjDUZK8BdZl7QTjSzFtzkr-XBjVBzDFZpQ2CLi8k1gdYhc8LyHnqulU-U2XbkHumiIA=s0)

_Extended FABs should have margins of 16dp_

## Deprecated extended FAB

![3 elements of deprecated extended FAB.](https://lh3.googleusercontent.com/BfVkr1OjcKMdwpCyy_0JfIAuGNx2Z_AlwSDie5SKQmAIXXlRW1yGqf7UTrO1Vfn95sgY935-quSQmFr0p01AFg6fKCqv6G-a6Kt0XVpt1fM=s0)

1. Container
2. Label text
3. Icon

### Deprecated tokens

The deprecated extended FAB token sets are common tokens and surface color styles. Other color styles like primary, secondary, and tertiary are not deprecated as they're still used by the latest extended FABs.

### Deprecated colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![3 deprecated extended FAB color roles.](https://lh3.googleusercontent.com/Z_RWOWfuQ9kdznoWiL_ox5ol2kDw2Th205LV2FDuX-rbxH3Rb1FZnDcgdSThvYwkuetWn9d2z62KhvWafnAuQ0e_Pwpt99WKFDwe8X6HegxGxA=s0)

Extended FAB color roles used for light and dark schemes:
- Primary container + shadow
- On primary container
- On primary container

#### Additional color mappings

Extended FABs can use other combinations of container and icon colors. The color mappings below provide the same legibility and functionality as the default, so the color mapping you use depends on style alone.

![3 deprecated extended FABs with different container and icon colors.](https://lh3.googleusercontent.com/xbMM1zoCiBMpqJ8DQ-gHGAoRRZ79UMQ5YGIaQyTy66Y5xKkq336JfbSeJzydBNoWJ_ojOQ4O2LfNwOp5SPEFBvASSLg1i1-WW1_he1W705r9rA=s0)

_Extended FABs can use different combinations of container and icon colors_

### Deprecated states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states).

![4 states of deprecated extended FAB.](https://lh3.googleusercontent.com/9NboEFx6AmMw3XNkz0ES2hdV0_-I3cQ50CSV64-QsxrOzwZO38CynMks9fxg3wvvq6GSZAQnWv1R-opDSxGpXn1O9g9PHbkKu-ah-ppXsEXa=s0)

- Enabled
- Hovered
- Focused
- Pressed

### Deprecated measurements

![Margins of deprecated extended FAB.](https://lh3.googleusercontent.com/60hw0Nm5mZX8sW8xBY_eU64kA2Ju_GszCM_g9H5tr_aDrtbv_7lq2939sVn0QF8aZfjIrSoz9dUBK3EDw96wDCoQn8XEPoAqrwF_JPTZu3JZ=s0)

_Extended FABs have a padding of 16dp_

![Size of deprecated extended FAB while on screen.](https://lh3.googleusercontent.com/oOjTBewuhKfDILRyn0mW8Y_Qv5I9nnTgLUnNJEwEARSu_ocixeZ9V2CTUmz5fjkT8G04_iXPUQWdMq3qFHG7deqTR5G8nXh8SxWqipbdWWdoQw=s0)

_Extended FAB height, width, and icon size_

| Attribute | Value |
| --- | --- |
| Container height | 56dp |
| Container width | Dynamic, 80dp min |
| Container shape | 16dp corner radius |
| Icon size | 24dp |
| Padding | 16dp |

### Deprecated configurations

![Extended FAB with icon.](https://lh3.googleusercontent.com/UgB1fdzN8YuDjcAxQ1tEDDD3SOMayrP3_LkFpdqy_4Y4WMqvJiw2Hr7zCugtfZwT2CUq1_gkjnAvgr43AcyISzn4OLF28_6_cFhlcYvMXNHN=s0)

_1. With icon_

![Deprecated extended FAB without icon.](https://lh3.googleusercontent.com/HWblo73LXnmxiyFe7Yfc1uNifj0eyGgRD6tqpXO_KN4nqwBB9pzwGKBW9A2ZSFpkzHYSrcJUITMj22tYiWCgSNZ0LUsGDLEVUQMkQ0H1_Yk=s0)

_2. Without icon_
