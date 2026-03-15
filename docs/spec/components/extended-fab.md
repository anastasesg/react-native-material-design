# Extended FAB — M3 Component Reference

> The extended FAB represents the most important action on a screen, combining an icon with a text label for greater clarity than a standard FAB.

Sources: [Overview](https://m3.material.io/components/extended-fab/overview) · [Specs](https://m3.material.io/components/extended-fab/specs) · [Guidelines](https://m3.material.io/components/extended-fab/guidelines) · [Accessibility](https://m3.material.io/components/extended-fab/accessibility)

---

## Variants

![3 variants of extended FABs](https://lh3.googleusercontent.com/BU02XKNQEFAuGts8-NpS5UG9q4WN58-z0DM-KPlHoM4MBqV_R39vdorWW1ONyIKGphkVugmYfKEvEwPEUG4QsmAosBurPXcfoTs_RT4w4hta=s0)

1. Small extended FAB
2. Medium extended FAB
3. Large extended FAB

| Variant                 | M3        | M3 Expressive                            |
| ----------------------- | --------- | ---------------------------------------- |
| Small extended FAB      | —         | Available                                |
| Medium extended FAB     | —         | Available                                |
| Large extended FAB      | —         | Available                                |
| Extended FAB (baseline) | Available | Not recommended. Use small extended FAB. |

### Baseline variant (deprecated)

The baseline extended FAB is no longer recommended in the M3 Expressive update. Use the small extended FAB instead — the type style was updated from **label large** to **title medium** and the inner padding was reduced.

![1 baseline extended FAB](https://lh3.googleusercontent.com/pcW-KzjKYIkI08HsYSKw2bRaDPQgikxhsVRQWVzMTObgMoJCv-Mx_IIXFzbhIDUXMXq-MaTXPrPWHipLOx_6LBdmJSC9UwJDsmg-rL9oxDU=s0)

### Choosing a size

Three sizes are available: small, medium, and large. Choose an appropriately-sized extended FAB to add the right amount of emphasis for an action.

- In compact windows with one prominent action, the large extended FAB can be appropriate
- In larger window sizes, use a medium or large extended FAB

![1 large, 1 medium, and 1 small extended FAB on 3 different screen sizes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dhk1cf-10.png?alt=media&token=bc0b1322-7722-4911-a73b-3653406c566e=s0)

---

## Anatomy

![3 extended FAB elements](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dhlqdv-11.png?alt=media&token=c9b49131-63fe-42cb-8611-388802055d3b=s0)

1. **Container** — rounded rectangle that hugs its contents; grows and shrinks with text length
2. **Label text** — clearly describes the action; keep to 1–2 words (localization may increase width)
3. **Icon** (optional) — intuitively represents the action

### Container

The extended FAB container is a rounded rectangle that hugs its contents. It grows and shrinks with text length.

![Fixed-width extended FAB, centered, ignoring layout grid](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dhmym8-12.png?alt=media&token=e12a3cd1-a98a-449e-a8f2-df33f31290d3=s0)

### Icon (optional)

Unlike standard FABs, extended FABs do not require an icon. However, an extended FAB **cannot** have an icon without a text label.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dgr1oq-13.png?alt=media&token=99f7b8ba-a716-4af0-9d41-e0394c7ef714=s0" /><br/><b>Do:</b> Extended FABs work without an icon</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0e6c0j7-14.png?alt=media&token=b6d6f787-9768-4e24-a094-f74f55ed18a9=s0" /><br/><b>Don't:</b> Never use icon-only — that's a standard FAB</td>
</tr></table>

### Label text

The label should clearly describe the action. Keep it to 1–2 words maximum. Consider localization increasing character count and container width.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dhs8b9-15.png?alt=media&token=57d8fa15-d91d-4afb-a318-dcf67d577aee=s0" /><br/><b>Do:</b> Keep text short; add an icon for additional context</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dhtaim-16.png?alt=media&token=640e670e-9be7-48a6-8dce-609fad699a1e=s0" /><br/><b>Don't:</b> Avoid wrapping or truncating text</td>
</tr></table>

### Baseline anatomy

![3 elements of baseline extended FAB](https://lh3.googleusercontent.com/BfVkr1OjcKMdwpCyy_0JfIAuGNx2Z_AlwSDie5SKQmAIXXlRW1yGqf7UTrO1Vfn95sgY935-quSQmFr0p01AFg6fKCqv6G-a6Kt0XVpt1fM=s0)

1. Container
2. Label text
3. Icon

#### Baseline configurations

<table><tr>
<td><img src="https://lh3.googleusercontent.com/6_OCmL-IgDTNGgDG2E6_5sUGlzaM1D_glmAKdNWtLl2P-8vOR1ur1HBHKt1pfb1gp8TmMRFu3_ukbqP80rXfE7QL4JDjql7OuYuJLR_2UPfiFw=s0" /><br/>With icon</td>
<td><img src="https://lh3.googleusercontent.com/BHRB4fj8KQKyqwOGul6DN_sqlayRB3Gs5AMUQ5xbnA0jWl5JIDr7a6oM3eKNUM927e8s92y-w1T_S_Q8FJWVz_NLhMSkZkARwYIKXh8ayw0=s0" /><br/>Without icon</td>
</tr></table>

---

## Usage & When to Use

Use an extended FAB on screens with long, scrolling views that require persistent access to a primary action (e.g. checkout, compose, publish).

Use it instead of a standard FAB when the label text helps the user understand the action, or to add further emphasis to the button.

![A centered extended FAB is used to check out in a shopping app](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dfxjts-02.png?alt=media&token=90832d30-29cf-47e4-bc30-57e91caa6637=s0)

![Extended FAB on an article with lots of body content to publish that article](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dfymif-03.png?alt=media&token=6073e07a-39e3-4e98-9bd3-34315524ed39=s0)

![Extended FAB on a task list to create a new task](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dfzjai-04.png?alt=media&token=135eef66-42c9-4ae2-a1d8-e4e619a74ffa=s0)

### Additional emphasis

The extended FAB provides more emphasis and clarity than a standard FAB. Since it has room for both a text label and icon, it is effective where an icon alone would be ambiguous. The icon and label should have a clear relationship.

![Extended FAB labeled "find flights" with an airplane icon](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dg2hbe-05.png?alt=media&token=3f47cb00-341b-4da5-9f84-11d5a1805609=s0)

### One per screen

Only one extended FAB should appear per screen. Multiple FABs compete for attention. If additional high-level actions are needed, use buttons elsewhere on the page.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dg63ur-06.png?alt=media&token=0fd605b7-b8d9-49b1-a3d7-fd854c99f549=s0" /><br/><b>Do:</b> Show one prominent action at a time</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dg6za4-07.png?alt=media&token=44c698be-70ea-4bcd-a6ce-222a161a6978=s0" /><br/><b>Don't:</b> Multiple extended FABs disrupt visual hierarchy</td>
</tr></table>

### Not for action sets

The extended FAB should not be used as one option in a group of actions. Use filled buttons for equivalent emphasis within a button group.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dg9f6o-08.png?alt=media&token=0d4c8320-2e45-454e-9ffb-5487be5f2aa1=s0" /><br/><b>Do:</b> Use a filled button for emphasis in a group</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dgacb3-09.png?alt=media&token=ffcfefcd-f834-4dd9-84ba-840723ed9e95=s0" /><br/><b>Don't:</b> Don't use extended FAB as an option in action sets</td>
</tr></table>

---

## Placement

Place the extended FAB above the rest of the UI, not overlapping toolbars, cards, or other containers. Avoid the upper half of mobile screens and avoid pairing with other floating components like floating toolbars.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0di65x4-17.png?alt=media&token=83a686da-79c0-46a1-8597-e87048f40ba3=s0" /><br/><b>Do:</b> Place above the rest of the UI, off of elements like app bars</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0di94u1-18.png?alt=media&token=097ae808-0f48-4d6f-b196-3a7ca2af49af=s0" /><br/><b>Don't:</b> Don't place on top of toolbars — it disrupts elevation and surface consistency</td>
</tr></table>

![Extended FAB below an app bar at the top of a mobile screen](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dia4hb-19.png?alt=media&token=66ba14b8-148b-479f-b645-311243e6419a=s0)

**Don't:** Don't place in the upper half of a mobile screen — it disrupts reading of the UI

![An extended FAB labeled "Confirm" on a dialog](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dib69h-20.png?alt=media&token=dad3fb69-2734-4141-8f02-5130a691d744=s0)

**Don't:** Don't place inside cards or other containers

![The extended FAB is next to a floating toolbar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dif190-21.png?alt=media&token=c974e34b-8309-4170-a095-61b8a2faaf76=s0)

**Don't:** Floating toolbars can be paired with FABs, but not extended FABs

---

## Behavior

### Appearing

The extended FAB surface expands when appearing on screen using an enter and exit transition pattern.

### Expanding

The extended FAB can expand and adapt to any shape using a container transform transition. This includes surfaces that are part of the app structure or surfaces that span the entire screen.

### Transforming to/from FAB

The extended FAB can transform into a standard FAB on scroll to temporarily take up less space. When scrolling down, it collapses to a FAB; when scrolling up, it expands back to an extended FAB.

During the FAB-to-extended-FAB transition:

- The FAB shape changes
- The icon moves to the left
- The text label fades in

### Responsive FAB ↔ Extended FAB

The FAB and extended FAB can transform into each other depending on available space. In a collapsed navigation rail, a FAB is used; when the rail is expanded, it can transform into an extended FAB.

![Example of extended FAB transforming into standard FAB](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djhpqm-23.png?alt=media&token=f160b11a-c68f-4ced-9409-72e84d507e7c=s0)

---

## Responsive Layout

### Right-to-left languages

Extended FABs mirror their elements in RTL languages. Icons are placed to the left of labels in LTR, and to the right of labels in RTL.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djk489-24.png?alt=media&token=afd494ea-eb93-4f79-9046-6c542eb5f226=s0" /><br/>LTR: icon to the left of label</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djl493-25.png?alt=media&token=b52dabe0-7c8d-4f53-87e3-4dfb4c84a168=s0" /><br/>RTL: icon to the right of label</td>
</tr></table>

### Window sizes

**Compact and medium windows:** Place the extended FAB at the bottom of the screen, either center-aligned or aligned to the trailing edge.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djn9nf-26.png?alt=media&token=6d717050-1200-42ec-aa29-b05dd1dffe34=s0" /><br/>Center-aligned</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djo3i8-27.png?alt=media&token=d9906095-7edf-483d-a0ba-f50233d8370e=s0" /><br/>Trailing-edge aligned</td>
</tr></table>

**Expanded and larger windows:** Place the extended FAB at the bottom-right of the window (in both LTR and RTL) or within the navigation rail.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djp9q0-28.png?alt=media&token=4d585d98-9d3a-4356-abca-5d160c2ea1b5=s0" /><br/>Right-aligned in both LTR and RTL</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djqcsu-29.png?alt=media&token=de1c588a-b37a-40b5-bb9f-5bf2edcbfa30=s0" /><br/>At the top of the expanded navigation rail</td>
</tr></table>

---

## Measurements

### Expressive sizes (small, medium, large)

![Extended FAB padding and size measurements](https://lh3.googleusercontent.com/9IwzFk5XDN4m9vzImfQxg0mR1AtQJ86eAkPH3xC5h2GPFNLw5Wqd0VWHGgMOUOSFF32Iv3M3ypdaXDq9lJRUf9xBuZXQcPS3iw7oWPLa3zqV_A=s0)

| Size   | Container Height |
| ------ | ---------------- |
| Small  | 56dp             |
| Medium | 80dp             |
| Large  | 96dp             |

### Margins

![Extended FAB margin measurements](https://lh3.googleusercontent.com/mirVSM4EDUYdZY4eF-l65mg6of6d1WI8u5nP3qZcTjDUZK8BdZl7QTjSzFtzkr-XBjVBzDFZpQ2CLi8k1gdYhc8LyHnqulU-U2XbkHumiIA=s0)

Extended FABs should have margins of **16dp**.

### Baseline measurements

![Margins of baseline extended FAB](https://lh3.googleusercontent.com/60hw0Nm5mZX8sW8xBY_eU64kA2Ju_GszCM_g9H5tr_aDrtbv_7lq2939sVn0QF8aZfjIrSoz9dUBK3EDw96wDCoQn8XEPoAqrwF_JPTZu3JZ=s0)

![Size of baseline extended FAB while on screen](https://lh3.googleusercontent.com/oOjTBewuhKfDILRyn0mW8Y_Qv5I9nnTgLUnNJEwEARSu_ocixeZ9V2CTUmz5fjkT8G04_iXPUQWdMq3qFHG7deqTR5G8nXh8SxWqipbdWWdoQw=s0)

| Attribute        | Value              |
| ---------------- | ------------------ |
| Container height | 56dp               |
| Container width  | Dynamic, 80dp min  |
| Container shape  | 16dp corner radius |
| Icon size        | 24dp               |
| Padding          | 16dp               |

---

## Color Tokens

### Color styles

Extended FABs support six color mappings — three tonal (container) and three flat. All provide equivalent contrast and functionality; choose based on visual preference.

![6 extended FAB color styles](https://lh3.googleusercontent.com/1n9kpQw8OhgILXZOD3kA6RzO20NmwQzt184w4PvBbS4qJxqseyJ81kr9yk5cbyr824e7gKDu01_ZzLI6OHKLZGRg9wAoqMG-0062EIHSGDc=s0)

1. Primary container & on primary container (default)
2. Secondary container & on secondary container
3. Tertiary container & on tertiary container
4. Primary & on primary
5. Secondary & on secondary
6. Tertiary & on tertiary

### Baseline color style (deprecated)

Surface color styles are still available but no longer recommended.

![1 baseline extended FAB color style](https://lh3.googleusercontent.com/SSZr-dBlNa4O7kbOQi9byJEQSVaZzUOBXZnNoDoxhb5G8Fbd3pQdTfo14YWIS6QTQTIcd70uYAYZWbp1gKwJoUoGZTam2-L5DOYQOHRU0Xnr=s0)

![3 baseline extended FAB color roles](https://lh3.googleusercontent.com/Z_RWOWfuQ9kdznoWiL_ox5ol2kDw2Th205LV2FDuX-rbxH3Rb1FZnDcgdSThvYwkuetWn9d2z62KhvWafnAuQ0e_Pwpt99WKFDwe8X6HegxGxA=s0)

1. Primary container + shadow
2. On primary container
3. On primary container

![3 deprecated extended FABs with different container and icon colors](https://lh3.googleusercontent.com/xbMM1zoCiBMpqJ8DQ-gHGAoRRZ79UMQ5YGIaQyTy66Y5xKkq336JfbSeJzydBNoWJ_ojOQ4O2LfNwOp5SPEFBvASSLg1i1-WW1_he1W705r9rA=s0)

### Tonal Primary

**Enabled**

| Element             | Token                                                           | Value                               |
| ------------------- | --------------------------------------------------------------- | ----------------------------------- |
| Container color     | `md.comp.extended-fab.primary-container.container.color`        | `md.sys.color.primary-container`    |
| Container elevation | `md.comp.extended-fab.primary-container.container.elevation`    | `md.sys.elevation.level3`           |
| Shadow color        | `md.comp.extended-fab.primary-container.container.shadow-color` | `md.sys.color.shadow`               |
| Label text color    | `md.comp.extended-fab.primary-container.label-text.color`       | `md.sys.color.on-primary-container` |
| Icon color          | `md.comp.extended-fab.primary-container.icon.color`             | `md.sys.color.on-primary-container` |

**Hovered**

| Element             | Token                                                                | Value                                    |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.extended-fab.primary-container.hovered.container.elevation` | `md.sys.elevation.level4`                |
| State layer color   | `md.comp.extended-fab.primary-container.hovered.state-layer.color`   | `md.sys.color.on-primary-container`      |
| State layer opacity | `md.comp.extended-fab.primary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Label text color    | `md.comp.extended-fab.primary-container.hovered.label-text.color`    | `md.sys.color.on-primary-container`      |
| Icon color          | `md.comp.extended-fab.primary-container.hovered.icon.color`          | `md.sys.color.on-primary-container`      |

**Focused**

| Element             | Token                                                                | Value                                    |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.extended-fab.primary-container.focused.container.elevation` | `md.sys.elevation.level3`                |
| State layer color   | `md.comp.extended-fab.primary-container.focused.state-layer.color`   | `md.sys.color.on-primary-container`      |
| State layer opacity | `md.comp.extended-fab.primary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Label text color    | `md.comp.extended-fab.primary-container.focused.label-text.color`    | `md.sys.color.on-primary-container`      |
| Icon color          | `md.comp.extended-fab.primary-container.focused.icon.color`          | `md.sys.color.on-primary-container`      |

**Pressed**

| Element             | Token                                                                | Value                                      |
| ------------------- | -------------------------------------------------------------------- | ------------------------------------------ |
| Container elevation | `md.comp.extended-fab.primary-container.pressed.container.elevation` | `md.sys.elevation.level3`                  |
| State layer color   | `md.comp.extended-fab.primary-container.pressed.state-layer.color`   | `md.sys.color.on-primary-container`        |
| State layer opacity | `md.comp.extended-fab.primary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Label text color    | `md.comp.extended-fab.primary-container.pressed.label-text.color`    | `md.sys.color.on-primary-container`        |
| Icon color          | `md.comp.extended-fab.primary-container.pressed.icon.color`          | `md.sys.color.on-primary-container`        |

### Tonal Secondary

**Enabled**

| Element             | Token                                                             | Value                                 |
| ------------------- | ----------------------------------------------------------------- | ------------------------------------- |
| Container color     | `md.comp.extended-fab.secondary-container.container.color`        | `md.sys.color.secondary-container`    |
| Container elevation | `md.comp.extended-fab.secondary-container.container.elevation`    | `md.sys.elevation.level3`             |
| Shadow color        | `md.comp.extended-fab.secondary-container.container.shadow-color` | `md.sys.color.shadow`                 |
| Label text color    | `md.comp.extended-fab.secondary-container.label-text.color`       | `md.sys.color.on-secondary-container` |
| Icon color          | `md.comp.extended-fab.secondary-container.icon.color`             | `md.sys.color.on-secondary-container` |

**Hovered**

| Element             | Token                                                                  | Value                                    |
| ------------------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.extended-fab.secondary-container.hovered.container.elevation` | `md.sys.elevation.level4`                |
| State layer color   | `md.comp.extended-fab.secondary-container.hovered.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| State layer opacity | `md.comp.extended-fab.secondary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Label text color    | `md.comp.extended-fab.secondary-container.hovered.label-text.color`    | `md.sys.color.on-secondary-container`    |
| Icon color          | `md.comp.extended-fab.secondary-container.hovered.icon.color`          | `md.sys.color.on-secondary-container`    |

**Focused**

| Element             | Token                                                                  | Value                                    |
| ------------------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.extended-fab.secondary-container.focused.container.elevation` | `md.sys.elevation.level3`                |
| State layer color   | `md.comp.extended-fab.secondary-container.focused.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| State layer opacity | `md.comp.extended-fab.secondary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Label text color    | `md.comp.extended-fab.secondary-container.focused.label-text.color`    | `md.sys.color.on-secondary-container`    |
| Icon color          | `md.comp.extended-fab.secondary-container.focused.icon.color`          | `md.sys.color.on-secondary-container`    |

**Pressed**

| Element             | Token                                                                  | Value                                      |
| ------------------- | ---------------------------------------------------------------------- | ------------------------------------------ |
| Container elevation | `md.comp.extended-fab.secondary-container.pressed.container.elevation` | `md.sys.elevation.level3`                  |
| State layer color   | `md.comp.extended-fab.secondary-container.pressed.state-layer.color`   | `md.sys.color.on-secondary-container`      |
| State layer opacity | `md.comp.extended-fab.secondary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Label text color    | `md.comp.extended-fab.secondary-container.pressed.label-text.color`    | `md.sys.color.on-secondary-container`      |
| Icon color          | `md.comp.extended-fab.secondary-container.pressed.icon.color`          | `md.sys.color.on-secondary-container`      |

### Tonal Tertiary

**Enabled**

| Element             | Token                                                            | Value                                |
| ------------------- | ---------------------------------------------------------------- | ------------------------------------ |
| Container color     | `md.comp.extended-fab.tertiary-container.container.color`        | `md.sys.color.tertiary-container`    |
| Container elevation | `md.comp.extended-fab.tertiary-container.container.elevation`    | `md.sys.elevation.level3`            |
| Shadow color        | `md.comp.extended-fab.tertiary-container.container.shadow-color` | `md.sys.color.shadow`                |
| Label text color    | `md.comp.extended-fab.tertiary-container.label-text.color`       | `md.sys.color.on-tertiary-container` |
| Icon color          | `md.comp.extended-fab.tertiary-container.icon.color`             | `md.sys.color.on-tertiary-container` |

**Hovered**

| Element             | Token                                                                 | Value                                    |
| ------------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.extended-fab.tertiary-container.hovered.container.elevation` | `md.sys.elevation.level4`                |
| State layer color   | `md.comp.extended-fab.tertiary-container.hovered.state-layer.color`   | `md.sys.color.on-tertiary-container`     |
| State layer opacity | `md.comp.extended-fab.tertiary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Label text color    | `md.comp.extended-fab.tertiary-container.hovered.label-text.color`    | `md.sys.color.on-tertiary-container`     |
| Icon color          | `md.comp.extended-fab.tertiary-container.hovered.icon.color`          | `md.sys.color.on-tertiary-container`     |

**Focused**

| Element             | Token                                                                 | Value                                    |
| ------------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.extended-fab.tertiary-container.focused.container.elevation` | `md.sys.elevation.level3`                |
| State layer color   | `md.comp.extended-fab.tertiary-container.focused.state-layer.color`   | `md.sys.color.on-tertiary-container`     |
| State layer opacity | `md.comp.extended-fab.tertiary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Label text color    | `md.comp.extended-fab.tertiary-container.focused.label-text.color`    | `md.sys.color.on-tertiary-container`     |
| Icon color          | `md.comp.extended-fab.tertiary-container.focused.icon.color`          | `md.sys.color.on-tertiary-container`     |

**Pressed**

| Element             | Token                                                                 | Value                                      |
| ------------------- | --------------------------------------------------------------------- | ------------------------------------------ |
| Container elevation | `md.comp.extended-fab.tertiary-container.pressed.container.elevation` | `md.sys.elevation.level3`                  |
| State layer color   | `md.comp.extended-fab.tertiary-container.pressed.state-layer.color`   | `md.sys.color.on-tertiary-container`       |
| State layer opacity | `md.comp.extended-fab.tertiary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Label text color    | `md.comp.extended-fab.tertiary-container.pressed.label-text.color`    | `md.sys.color.on-tertiary-container`       |
| Icon color          | `md.comp.extended-fab.tertiary-container.pressed.icon.color`          | `md.sys.color.on-tertiary-container`       |

> **Note:** When using a non-default color mapping, ensure the state layer color matches the icon color. For example, the state layer for a primary mapping should be `md.sys.color.primary`.

---

## Interaction States

![4 states of extended FABs](https://lh3.googleusercontent.com/vHxV15QsYc98EQyLenfT7dOu3npLcTkKTLpe5YY2K0m6eNsWU8yXQs_d6XBpaPJ44MJODwpB8iCIgKlZcfnnuHEoReYQZyiWB4QmGyekbJ1I1g=s0)

| #   | State   | Visual changes                 |
| --- | ------- | ------------------------------ |
| 1   | Enabled | Default elevation (level 3)    |
| 2   | Hovered | Elevation increases to level 4 |
| 3   | Focused | Elevation remains at level 3   |
| 4   | Pressed | Elevation remains at level 3   |

### Baseline states

![4 states of baseline extended FAB](https://lh3.googleusercontent.com/9NboEFx6AmMw3XNkz0ES2hdV0_-I3cQ50CSV64-QsxrOzwZO38CynMks9fxg3wvvq6GSZAQnWv1R-opDSxGpXn1O9g9PHbkKu-ah-ppXsEXa=s0)

1. Enabled
2. Hovered
3. Focused
4. Pressed

---

## Accessibility

### Placement for assistive technology

To make the primary action easier to reach for screen reader users, consider placing the extended FAB in the upper left region of large web screens (e.g. in an expanded navigation rail). In smaller windows, the lower right corner is preferable.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0e5baky-01.png?alt=media&token=d4a320d5-298d-43a8-9e13-834adb34a1bf=s0" /><br/>Large screen: placed in expanded navigation rail</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmgu83-02.png?alt=media&token=898399c4-2a45-4bb4-8089-5a869da143bb=s0" /><br/>Compact: placed in lower right</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmgu83-02.png?alt=media&token=898399c4-2a45-4bb4-8089-5a869da143bb=s0" /><br/><b>Do:</b> Place in an easy-to-reach spot that doesn't obstruct other actions</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmhng1-03.png?alt=media&token=8f726c4c-3cc6-4fec-8518-403650fba64a=s0" /><br/><b>Don't:</b> Don't place over another actionable element</td>
</tr></table>

### Initial focus

Prioritize the extended FAB in the overall focus order for an efficient assistive tech experience. On mobile, focus order may go: app bar → navigation bar → extended FAB (skipping past other content).

The label and icon should be treated as **one focusable element**. The extended FAB does not need a tooltip since it already has a visible label.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmis8z-04.png?alt=media&token=bf33f207-5a42-437b-a1d6-df3b1f8c34c6=s0" /><br/><b>Do:</b> Ensure extended FABs get focus when navigating with assistive technology</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmjod6-05.png?alt=media&token=1f36adfa-b3b3-459e-b692-aa1deb2855f1=s0" /><br/><b>Don't:</b> No tooltip needed — the label text already describes the action</td>
</tr></table>

### Keyboard Navigation

| Key            | Action                          |
| -------------- | ------------------------------- |
| Tab            | Moves focus to the extended FAB |
| Space or Enter | Activates the extended FAB      |

### Labeling

- Use consistent icons and text labels (e.g. a **Compose** icon with a **Compose** label)
- The icon and label combination should have one distinct purpose
- The accessibility label must begin with the same first word as the visible label (e.g. visible label "Create" → a11y label "Create a new invite")

![Accessibility labels of an extended FAB](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmmjzu-06.png?alt=media&token=88489b92-fd7e-4f30-a6da-a6b4b9962f55=s0)

---

## M3 Expressive Update

**May 2025**

The extended FAB now has three sizes (small, medium, large) with updated type styles, aligning with FAB sizes for easier transitions between the two components. The baseline extended FAB is no longer recommended — use the small extended FAB instead. Surface FABs are also deprecated.

Changes:

- Added small (56dp), medium (80dp), and large (96dp) sizes
- Adjusted typography to be larger
- Baseline (56dp) and surface color styles deprecated

![The baseline extended FAB and the small, medium, and large extended FABs from the expressive update](https://lh3.googleusercontent.com/o8RP_K8msVBonOVgmcnANIcH_obxNxoaP2OKhzTpcLR6f6W8f2TJH0x2t0k703n-EIp_WM4_fMyA4JBqwpHbw0Z7Xdvpub3Ulltel37QN-8=s0)

---

## M2 → M3 Differences

- **Color:** New color mappings and compatibility with dynamic color
- **Layout:** Extended FAB is now the same height as the standard FAB
- **Shape:** Boxier style with smaller corner radius (M2 was pill-shaped)

<table><tr>
<td><img src="https://lh3.googleusercontent.com/CLwhLFrMkpEgnOAWORcnTMHBqt8gZ67coHMiSw1taCuxR0nRqasV1w7XWJ50w6ZT6gD6aZql87KrxZHdqiWya-bPwCnZx20ibdoKjagt7kyW9Q=s0" /><br/><b>M2:</b> Pill-shaped, different height and elevation from FAB</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dff6p3-05.png?alt=media&token=896b601f-21d9-4cae-854f-840ba268dd73=s0" /><br/><b>M3:</b> Same height, boxier shape, simpler elevation as FAB</td>
</tr></table>
