---
url: https://m3.material.io/components/navigation-rail/specs
lastmod: 2026-01-26
crawled_at: 2026-03-10T00:10:00.000Z
category: components
section: navigation-rail
page_type: specs
status: complete
---

# Navigation rail

Navigation rails let people switch between UI views on mid-sized devices.

## Variants

![2 variants of navigation rails.](https://lh3.googleusercontent.com/iQ9mPuq7sZfsnSF_EfYMxQdypYp9K_fDEGHm0-4zuKdHXU48Kf7zItSC0hxmu3QW_ugdX67kQeQlrkgs7GzF6Kpo1FFERw1SFlVd6DCQC5gm=s0)

- Collapsed navigation rail
- Expanded navigation rail

### Baseline variants

The baseline navigation rail is no longer recommended, and should be replaced by the collapsed navigation rail. [View baseline tokens](#baseline-navigation-rail)

![Baseline navigation rail.](https://lh3.googleusercontent.com/_GDghBF084KxFoboNpBiBukL7eC9btnn0Mb6Jk_768f3C75CzUZ_lS1sJyKteHLGeR2sa__sSE-baRgcdfAxgBR3jxoUV13DucOJj2FXrDM=s0)

_The baseline navigation rail is no longer recommended_

| Variant                    | M3        | M3 Expressive                                       |
| -------------------------- | --------- | --------------------------------------------------- |
| Collapsed navigation rail  | --        | Available                                           |
| Expanded navigation rail   | --        | Available                                           |
| Navigation rail (baseline) | Available | Not recommended. Use **collapsed navigation rail**. |

## Configurations

![Standard and modal layouts of navigation rail.](https://lh3.googleusercontent.com/Q6opw4o2Z-4QOi0ydyk2R1MLywKayfVfAMWjKN6nvzz6OZzoJOGsl_BvoY_XaQp0dSV2iH4gwgEJ0tYqAXEKQKJy1Gko4-M5s1umRBx2MaHD=s0)

- Expanded layout: standard
- Expanded layout: modal

| Category          | Configuration       | M3                             | M3 Expressive |
| ----------------- | ------------------- | ------------------------------ | ------------- |
| Expanded layout   | Standard (default)  | Available as navigation drawer | Available     |
|                   | Modal               | Available as navigation drawer | Available     |
| Expanded behavior | Hide when collapsed | --                             | Available     |

## Tokens and specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](https://m3.material.io/foundations/design-tokens/overview/)

### Nav rail item - Common

| Token                                           | Token ID                                                | Value                 |
| ----------------------------------------------- | ------------------------------------------------------- | --------------------- |
| Nav rail item icon size                         | md.comp.nav-rail.item.icon.size                         | 24dp                  |
| Nav rail item active indicator shape            | md.comp.nav-rail.item.active-indicator.shape            | Full (circular)       |
| Nav rail item active indicator leading space    | md.comp.nav-rail.item.active-indicator.leading-space    | 16dp                  |
| Nav rail item active indicator icon label space | md.comp.nav-rail.item.active-indicator.icon-label-space | 8dp                   |
| Nav rail item active indicator trailing space   | md.comp.nav-rail.item.active-indicator.trailing-space   | 16dp                  |
| Nav rail item container height                  | md.comp.nav-rail.item.container.height                  | 64dp                  |
| Nav rail item short container height            | md.comp.nav-rail.item.short.container.height            | 56dp                  |
| Nav rail item container shape                   | md.comp.nav-rail.item.container.shape                   | None (square corners) |
| Nav rail item container vertical space          | md.comp.nav-rail.item.container.vertical-space          | 6dp                   |
| Nav rail item header space minimum              | md.comp.nav-rail.item.header-space-minimum              | 40dp                  |

### Nav rail - Collapsed

| Token                                     | Token ID                                          | Value                 |
| ----------------------------------------- | ------------------------------------------------- | --------------------- |
| Nav rail collapsed container width        | md.comp.nav-rail.collapsed.container.width        | 96dp                  |
| Nav rail collapsed narrow container width | md.comp.nav-rail.collapsed.narrow.container.width | 80dp                  |
| Nav rail collapsed container elevation    | md.comp.nav-rail.collapsed.container.elevation    | Level 0               |
| Nav rail collapsed container shape        | md.comp.nav-rail.collapsed.container.shape        | None (square corners) |
| Nav rail collapsed container color        | md.comp.nav-rail.collapsed.container.color        | #FEF7FF               |
| Nav rail collapsed item vertical space    | md.comp.nav-rail.collapsed.item.vertical-space    | 4dp                   |
| Nav rail collapsed item top space         | md.comp.nav-rail.collapsed.top-space              | 44dp                  |

### Nav rail - Expanded

| Token                                       | Token ID                                            | Value                 |
| ------------------------------------------- | --------------------------------------------------- | --------------------- |
| Nav rail expanded container width minimum   | md.comp.nav-rail.expanded.container.width.minimum   | 220dp                 |
| Nav rail expanded container width maximum   | md.comp.nav-rail.expanded.container.width.maximum   | 360dp                 |
| Nav rail expanded top space                 | md.comp.nav-rail.expanded.top-space                 | 44dp                  |
| Nav rail expanded container elevation       | md.comp.nav-rail.expanded.container.elevation       | Level 0               |
| Nav rail expanded modal container elevation | md.comp.nav-rail.expanded.modal.container.elevation | Level 3               |
| Nav rail expanded container color           | md.comp.nav-rail.expanded.container.color           | #FEF7FF               |
| Nav rail expanded modal container color     | md.comp.nav-rail.expanded.modal.container.color     | #F3EDF7               |
| Nav rail expanded container shape           | md.comp.nav-rail.expanded.container.shape           | None (square corners) |
| Nav rail expanded modal container shape     | md.comp.nav-rail.expanded.modal.container.shape     | Rounded (16dp)        |
| Nav rail expanded between item space        | md.comp.nav-rail.expanded.between-item-space        | 0 (deprecated)        |
| Nav rail expanded vertical trailing space   | md.comp.nav-rail.expanded.vertical.trailing-space   | 20dp (deprecated)     |

### Nav rail item - Vertical

| Token                                          | Token ID                                               | Value                   |
| ---------------------------------------------- | ------------------------------------------------------ | ----------------------- |
| Nav rail item vertical active indicator height | md.comp.nav-rail.item.vertical.active-indicator.height | 32dp                    |
| Nav rail item vertical active indicator width  | md.comp.nav-rail.item.vertical.active-indicator.width  | 56dp                    |
| Nav rail item vertical label text              | md.comp.nav-rail.item.vertical.label-text.font         | Roboto 16px/21.3px w500 |
| Nav rail item vertical icon label space        | md.comp.nav-rail.item.vertical.icon-label-space        | 4dp                     |
| Nav rail item vertical leading-space           | md.comp.nav-rail.item.vertical.leading-space           | 16dp                    |
| Nav rail item vertical trailing space          | md.comp.nav-rail.item.vertical.trailing-space          | 16dp                    |

### Nav rail item - Horizontal

| Token                                              | Token ID                                                   | Value                     |
| -------------------------------------------------- | ---------------------------------------------------------- | ------------------------- |
| Nav rail item horizontal label text                | md.comp.nav-rail.item.horizontal.label-text.font           | Roboto 18.7px/26.7px w500 |
| Nav rail item horizontal active indicator height   | md.comp.nav-rail.item.horizontal.active-indicator.height   | 56dp                      |
| Nav rail item horizontal full width leading space  | md.comp.nav-rail.item.horizontal.full-width.leading-space  | 16dp                      |
| Nav rail item horizontal full width trailing space | md.comp.nav-rail.item.horizontal.full-width.trailing-space | 16dp                      |
| Nav rail item horizontal icon-label-space          | md.comp.nav-rail.item.horizontal.icon-label-space          | 8dp                       |

## Anatomy

![9 elements of collapsed and expanded navigation rails.](https://lh3.googleusercontent.com/zju3SaKNZtIg8oswdNqjqbU2pgzAazbfcyzRL_wo1UneMQSp9D6yIVFbPDeEtmh09MwYuYYHofz5j6DGbwBVO9cBdpqUxwJehXqI242Tz80bUg=s0)

Collapsed and expanded navigation rail elements:

1. Container
2. Menu (optional)
3. FAB or Extended FAB (optional)
4. Icon
5. Active indicator
6. Label text
7. Large badge (optional)
8. Large badge label (optional)
9. Small badge (optional)

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

![Color roles of 9 elements of collapsed and expanded navigation rails in light and dark color schemes.](https://lh3.googleusercontent.com/3Tz7j_sy5EUFjFqA1zIOJlDlw9BQIKXjUhChsTlfUHEV8xEo4cPNSVGJOoAeQygkRUxqRK4GoRLPRAFXg_wUb06VbGEwc8VSpeP2PdnytRwt=s0)

Navigation rail color roles used for light and dark schemes:

1. Surface container (optional)
2. On secondary container
3. Secondary container
4. Secondary
5. On surface variant
6. On surface variant
7. Error
8. On error
9. Error

## States

[States](https://m3.material.io/foundations/interaction/states/overview) are visual representations used to communicate the status of a component or an interactive element. The navigation item's target area always spans the full width of the nav rail, even if the item container hugs its contents.

![4 states of collapsed navigation rails.](https://lh3.googleusercontent.com/1IxCo2XIMga54ROSNhrWET0gIRcndin6fwUN_DdJMu2VZ4PFpdW1-c-vio2nIOXxmj3p_tGkbBc1N0KGdzg6iuqMCS1_ZsgFG1FfzS6Fppk=s0)

![4 states of expanded navigation rails.](https://lh3.googleusercontent.com/uvOYTNSaWtfWdqdoR0tVR9eCjmd4f-AEfdMVEacZJc0VwURGK8_8FeAvzOY4Kr3sV9YzZfIF-gguMC8haBwaeJB7tgykjwBvSFhlQtuC4AzahA=s0)

1. Enabled
2. Hovered
3. Focused
4. Pressed

## Measurements

![Padding and measurements for expanded and collapsed navigation rails.](https://lh3.googleusercontent.com/RTqY8bTqiMpwcsU_pJkWy9rMeFIjRoSs3m15t8w64kdPnvtTTTE6_Dklo68o5dm4vNj_CA14xM6FrVZkyBtYlf4hcPjBAMOTQ3rvBDY60BrmGw=s0)

_Navigation rail padding and size measurements_

## Common layouts

![4 common layouts of collapsed navigation rail.](https://lh3.googleusercontent.com/Q7TK1on1e6Srj9rXvfTaKHDKgYKSh07xaPRGq0zatThZiQkiwf-UMR1-H60g1esYikZSHRedr3h-lkPoU4ICPljobiH8pOBRjSINWIs7ANcD=s0)

![4 common layouts of expanded navigation rail.](https://lh3.googleusercontent.com/z_uzDW3EjZiO_WRnWUJem6qKFygJFreR0EX_C_F4b4gyUdaq1KV9KFpJqgJpBWstqQ1O-CdNp0N6b7mAK8Xp6CkIKHupoRyeHFQkqfLEpnI=s0)

1. Three navigation items
2. Three navigation items with a menu
3. Three navigation items with a FAB
4. Three navigation items with a menu and FAB

---

## Baseline navigation rail

![8 elements of baseline navigation rail.](https://lh3.googleusercontent.com/ADBFvMHXuRRv0_6Z-N3tRHlMrh88FQQszAdMrNhAM-p2IdU_v8QQRA0cezT6n2vPpVmhQ7R8saOYcTsI1okUonFMqT8GzmCfjymxB9hHPv8=s0)

Baseline navigation rail elements:

1. Container
2. Menu icon (optional)
3. Icon
4. Active indicator
5. Label text
6. Large badge label (optional)
7. Large badge (optional)
8. Badge (optional)

### Tokens & specs

The baseline navigation rail token set `[Deprecated] Navigation rail` did not render inline tokens on the M3 site. The baseline navigation rail is deprecated in favor of the collapsed navigation rail (M3 Expressive).

### Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

![8 color roles of baseline navigation rail.](https://lh3.googleusercontent.com/bYdm_ngSm_bDBlh7cCiignDkbte5hHytBrpjYGp_9BfBLH1hF2zPxV-Oqdm6nn8fSHRROojsHBUwN5etdowcM8IHoq2XH1Qy7rRFtshsl5ca=s0)

Navigation rail color roles used for light and dark themes:

1. On secondary container
2. Secondary container
3. On surface
4. On surface variant
5. On surface variant
6. Error
7. On error
8. Error

### States

States are visual representations used to communicate the status of a component or interactive element.

![8 states of baseline navigation rail.](https://lh3.googleusercontent.com/q4Ce0kmHkUU63AUNns9xbrnQx2UlJBT9dfmW-RzlP1iM5biz8sOwR4G7BU8pEmGTbMSy2nnmyYzPFBNwQdyM6b8tJ20dhgkmDEF86WcUpVE=s0)

Navigation rail states:

1. Enabled (on active destination)
2. Hovered (on active destination)
3. Focused (on active destination)
4. Pressed (on active destination)
5. Enabled (on inactive destination)
6. Hovered (on inactive destination)
7. Focused (on inactive destination)
8. Pressed (on inactive destination)

### Measurements

![Baseline nav rail size measurements.](https://lh3.googleusercontent.com/PsBusqTr-OE5bCxYRV_i7_t-UpABd6wh-bbKu-mzMDv5-O3eoKvh-B144jLbqI5sf4B63G0hAv5k0m_hf7qTNA6ktxvfRVdk0cILpP3kghqk=s0)

_Navigation rail size measurements_

![Baseline nav rail padding and margin measurements.](https://lh3.googleusercontent.com/HCDSa0-MhFtUTT-jj2x4OG8rghWPku3boxc3_KKZzParDgXb2n-nNyXxh-eq8DyOgLXlqmxFHoc2sShKRMWf8m2DKVLHdtpCfsY9_7GGTFA=s0)

_Navigation rail padding and margin measurements_

### Configurations

Common arrangements of elements within a navigation rail.

![5 configurations of the baseline navigation rail.](https://lh3.googleusercontent.com/0ArxFOIUj1oF4bmcdt98kcylfvstmfHlWXRI2sVpFC5UG246qn6yr4185ERKim5I5IYDjTqDnWX_fMqGE_nrXr_7dJj5H7sCznQWP5SfkX4h=s0)

1. With a menu
2. With a FAB
3. With menu and FAB, without labels
4. All destinations with text labels
5. With menu, FAB, and label text for all destinations
