---
url: https://m3.material.io/components/lists/specs
lastmod: 2025-12-10
crawled_at: 2026-03-09T00:00:00.000Z
category: components
section: lists
page_type: specs
status: complete
---

# Lists - Specs

## Variants

### Expressive lists

Use the expressive list variant for more flexible styling, highlighted selection states, and customizable slots.

![2 expressive lists: a photos list on a tablet, and a song list on mobile.](https://lh3.googleusercontent.com/za34_v9MVYFLgx4_LMophxugdmjrYW0gWSPfWtA_ntmDC74Lx_qID9YyOa7IEqJ73xCrYnCAXghjFmDugBK86DdvpEUUKbkfWTYCA2pV5iwt=s0)

_An **expressive list** has a segmented style and round corners_

### Baseline lists

In M3 Expressive, baseline lists are still available to use, but don't have the latest visual style, selection treatment, and slot functionality.

[See baseline list specs](/m3/pages/lists/specs#94cf7f4d-fe29-4fab-9aae-a99e9b754329)

![A baseline list variant with square corners.](https://lh3.googleusercontent.com/N4Dqm-y0qh8NW2KuKAqcRAmf_oyfUyeY2HgR3cHvoCwL-cM6j7fuAg97gGrX73Rs25WTv-POEG1ZSlXeyFPRkjhexmngaaSJMDJV0azeZXhV=s0)

_A **baseline list** has square corners and standard colors_

| Variants          | M3        | M3 Expressive |
| ----------------- | --------- | ------------- |
| List (expressive) | --        | Available     |
| List (baseline)   | Available | Available     |

## Configurations

### Styles

The standard and segmented styles are a visual choice, and don't affect a list's behavior.

![A standard list and segmented list in dark mode.](https://lh3.googleusercontent.com/AjWZ3hS3wVVBYsai8chTl-DhNYum8MkyLgX24Q1dLLV43O6P2gRIbTqcrvQMXwyFG9Jai3R-zExVwkBZ5A3QZGW4EryAzfylOS6N0FB1brD8=s0)

_Standard / Segmented_

### List selection modes

A list can have only one selection mode at a time. For example, a single-action list can change to a multi-select list, but can't be both at once.

![A single-action list with 4 items and no additional actions.](https://lh3.googleusercontent.com/b5GgNFwCct9zCo3T-5FIclsjz95tsQWzwwptHqyfIs9ooGmMg8C4FLlknKKmivn_ho5bbYRLRnaxophUvZLmKrLqm1bkGF4tEyHNR4_CObV0og=s0)

_In a **single-action list**, each item is a single tappable area_

![A list with 4 items. Each item has 2 trailing icons for additional actions.](https://lh3.googleusercontent.com/YZNJPefhDxEZHejO2AZtRcJlJmExP5SKLT5whDkHInauUNxfIgYBOXhlhXukAnjNfZRDhVUlk5fRz8QNgGAWqUaDPYkKANg3ZJ1vyK0GXZA=s0)

_In a **multi-action list**, each list item includes at least two actions_

![A list with 1 item selected.](https://lh3.googleusercontent.com/N1XQO63f9X32oDtv-OfmhY2QXVt4JpIIbZVk7BmB_2FcLR7QDWORgKJOQkA81-R5pujkxNiZHTMRgjMuAcytlrMERtLFsohNDJDu888bY3g=s0)

_A **single-select list**_

![A list with 2 items selected.](https://lh3.googleusercontent.com/ANybLHYX4h2Z9SkeL_p_Pp1K3Wg9plho_Lbg3-Z5d7NwszrsXTlRm434BJIm0mbM1Km5s9XFun2jYrYZqVcj3vRF0rRY-Dk3ZpeQLYrzooMq=s0)

_A **multi-select list**_

### List interactions

#### Expand

On Android, lists can [expand and collapse](/m3/pages/lists/guidelines#90a236ee-b587-4361-8911-34006f25a6f1).

| Category        | Configuration                                            | M3        | M3 Expressive |
| --------------- | -------------------------------------------------------- | --------- | ------------- |
| Styles          | Standard                                                 | Available | Available     |
|                 | Segmented                                                | --        | Available     |
| Selection modes | Single-action, multi-action, single-select, multi-select | Available | Available     |
| Interactions    | Expand                                                   | Available | Available     |

## Tokens & specs

Use the table's menu to select a token set. The **common** set combines baseline tokens with new expressive shapes and sizes. The **expand** set has tokens for the expand interaction. [Learn about design tokens](/m3/pages/design-tokens/overview)

---

### List - Common

#### Color / Enabled

| Token                                                 | Value   |
| ----------------------------------------------------- | ------- |
| md.comp.list.list-item.container.color                | #FEF7FF |
| md.comp.list.list-item.segmented.container.color      | #FEF7FF |
| md.comp.list.list-item.label-text.color               | #1D1B20 |
| md.comp.list.list-item.supporting-text.color          | #49454F |
| md.comp.list.list-item.overline.color                 | #49454F |
| md.comp.list.divider.color                            | #79747E |
| md.comp.list.divider.height                           | 1dp     |
| md.comp.list.list-item.container.height               | 56dp    |
| md.comp.list.list-item.one-line.container.height      | 56dp    |
| md.comp.list.list-item.two-line.container.height      | 72dp    |
| md.comp.list.list-item.three-line.container.height    | 88dp    |
| md.comp.list.list-item.leading-icon.color             | #49454F |
| md.comp.list.list-item.trailing-icon.color            | #49454F |
| md.comp.list.list-item.unselected.trailing-icon.color | #1D1B20 |
| md.comp.list.list-item.trailing-supporting-text.color | #49454F |
| md.comp.list.list-item.leading-avatar.color           | #EADDFF |
| md.comp.list.list-item.leading-avatar-label.color     | #4F378B |
| md.comp.list.list-item.container.elevation            | 0       |

#### Color / Enabled - Selected

| Token                                                          | Value   |
| -------------------------------------------------------------- | ------- |
| md.comp.list.list-item.selected.container.color                | #E8DEF8 |
| md.comp.list.list-item.selected.label-text.color               | #4A4458 |
| md.comp.list.list-item.selected.supporting-text.color          | #4A4458 |
| md.comp.list.list-item.selected.trailing-supporting-text.color | #4A4458 |
| md.comp.list.list-item.selected.leading-icon.color             | #4A4458 |
| md.comp.list.list-item.selected.trailing-icon.color            | #4A4458 |
| md.comp.list.list-item.selected.overline.color                 | #4A4458 |

#### Color / Disabled

| Token                                                   | Value   |
| ------------------------------------------------------- | ------- |
| md.comp.list.list-item.disabled.state-layer.color       | #1D1B20 |
| md.comp.list.list-item.disabled.state-layer.opacity     | 0.1     |
| md.comp.list.list-item.disabled.label-text.color        | #1D1B20 |
| md.comp.list.list-item.disabled.label-text.opacity      | 0.38    |
| md.comp.list.list-item.disabled.supporting-text.color   | #1D1B20 |
| md.comp.list.list-item.disabled.supporting-text.opacity | 0.38    |
| md.comp.list.list-item.disabled.overline.color          | #1D1B20 |
| md.comp.list.list-item.disabled.overline.opacity        | 0.38    |
| md.comp.list.list-item.disabled.leading-icon.color      | #1D1B20 |
| md.comp.list.list-item.disabled.leading-icon.opacity    | 0.38    |
| md.comp.list.list-item.disabled.trailing-icon.color     | #1D1B20 |
| md.comp.list.list-item.disabled.trailing-icon.opacity   | 0.38    |

#### Color / Disabled - Selected

| Token                                                                     | Value   |
| ------------------------------------------------------------------------- | ------- |
| md.comp.list.list-item.selected.disabled.container.color                  | #1D1B20 |
| md.comp.list.list-item.selected.disabled.container.opacity                | 0.38    |
| md.comp.list.list-item.selected.disabled.label-text.color                 | #1D1B20 |
| md.comp.list.list-item.selected.disabled.label-text.opacity               | 0.38    |
| md.comp.list.list-item.selected.disabled.supporting-text.color            | #1D1B20 |
| md.comp.list.list-item.selected.disabled.supporting-text.opacity          | 0.38    |
| md.comp.list.list-item.selected.disabled.trailing-supporting-text.color   | #1D1B20 |
| md.comp.list.list-item.selected.disabled.trailing-supporting-text.opacity | 0.38    |
| md.comp.list.list-item.selected.disabled.overline.color                   | #1D1B20 |
| md.comp.list.list-item.selected.disabled.overline.opacity                 | 0.38    |
| md.comp.list.list-item.selected.disabled.state-layer.color                | #1D1B20 |
| md.comp.list.list-item.selected.disabled.state-layer.opacity              | 0.1     |
| md.comp.list.list-item.selected.disabled.leading-icon.color               | #1D1B20 |
| md.comp.list.list-item.selected.disabled.leading-icon.opacity             | 0.38    |
| md.comp.list.list-item.selected.disabled.trailing-icon.color              | #1D1B20 |
| md.comp.list.list-item.selected.disabled.trailing-icon.opacity            | 0.38    |

#### Color / Hovered

| Token                                                 | Value   |
| ----------------------------------------------------- | ------- |
| md.comp.list.list-item.hover.state-layer.color        | #1D1B20 |
| md.comp.list.list-item.hover.state-layer.opacity      | 0.08    |
| md.comp.list.list-item.hover.label-text.color         | #1D1B20 |
| md.comp.list.list-item.hover.leading-icon.icon.color  | #49454F |
| md.comp.list.list-item.hover.trailing-icon.icon.color | #49454F |

#### Color / Hovered - Selected

| Token                                                     | Value   |
| --------------------------------------------------------- | ------- |
| md.comp.list.list-item.selected.hover.state-layer.color   | #1D1B20 |
| md.comp.list.list-item.selected.hover.state-layer.opacity | 0.08    |
| md.comp.list.list-item.selected.hover.label-text.color    | #4A4458 |
| md.comp.list.list-item.selected.hover.leading-icon.color  | #1D1B20 |
| md.comp.list.list-item.selected.hover.trailing-icon.color | #1D1B20 |

#### Color / Focused

| Token                                                 | Value   |
| ----------------------------------------------------- | ------- |
| md.comp.list.list-item.focus.state-layer.color        | #1D1B20 |
| md.comp.list.list-item.focus.state-layer.opacity      | 0.1     |
| md.comp.list.list-item.focus.label-text.color         | #1D1B20 |
| md.comp.list.list-item.focus.leading-icon.icon.color  | #49454F |
| md.comp.list.list-item.focus.trailing-icon.icon.color | #49454F |

#### Color / Focused / Focus indicator

| Token                                       | Value   |
| ------------------------------------------- | ------- |
| md.comp.list.focus.indicator.color          | #625B71 |
| md.comp.list.focus.indicator.thickness      | 3dp     |
| md.comp.list.focus.indicator.outline.offset | -3dp    |

#### Color / Focused - Selected

| Token                                                     | Value   |
| --------------------------------------------------------- | ------- |
| md.comp.list.list-item.selected.focus.state-layer.color   | #1D1B20 |
| md.comp.list.list-item.selected.focus.state-layer.opacity | 0.1     |
| md.comp.list.list-item.selected.focus.label-text.color    | #4A4458 |
| md.comp.list.list-item.selected.focus.leading-icon.color  | #1D1B20 |
| md.comp.list.list-item.selected.focus.trailing-icon.color | #1D1B20 |

#### Color / Pressed (ripple)

| Token                                                   | Value   |
| ------------------------------------------------------- | ------- |
| md.comp.list.list-item.pressed.state-layer.color        | #1D1B20 |
| md.comp.list.list-item.pressed.state-layer.opacity      | 0.1     |
| md.comp.list.list-item.pressed.label-text.color         | #1D1B20 |
| md.comp.list.list-item.pressed.leading-icon.icon.color  | #49454F |
| md.comp.list.list-item.pressed.trailing-icon.icon.color | #49454F |

#### Color / Pressed - Selected

| Token                                                       | Value   |
| ----------------------------------------------------------- | ------- |
| md.comp.list.list-item.selected.pressed.state-layer.color   | #1D1B20 |
| md.comp.list.list-item.selected.pressed.state-layer.opacity | 0.1     |
| md.comp.list.list-item.selected.pressed.label-text.color    | #4A4458 |
| md.comp.list.list-item.selected.pressed.trailing-icon.color | #1D1B20 |
| md.comp.list.list-item.selected.pressed.leading-icon.color  | #1D1B20 |

#### Color / Dragged (baseline only)

| Token                                                       | Value   |
| ----------------------------------------------------------- | ------- |
| md.comp.list.list-item.dragged.container.elevation          | Level 4 |
| md.comp.list.list-item.dragged.label-text.color             | #1D1B20 |
| md.comp.list.list-item.selected.dragged.label-text.color    | #4A4458 |
| md.comp.list.list-item.dragged.state-layer.color            | #1D1B20 |
| md.comp.list.list-item.dragged.state-layer.opacity          | 0.16    |
| md.comp.list.list-item.selected.dragged.state-layer.color   | #1D1B20 |
| md.comp.list.list-item.selected.dragged.state-layer.opacity | 0.16    |
| md.comp.list.list-item.dragged.leading-icon.icon.color      | #49454F |
| md.comp.list.list-item.selected.dragged.leading-icon.color  | #1D1B20 |
| md.comp.list.list-item.dragged.trailing-icon.icon.color     | #49454F |
| md.comp.list.list-item.selected.dragged.trailing-icon.color | #1D1B20 |

#### Spacing

| Token                                 | Value |
| ------------------------------------- | ----- |
| md.comp.list.list-item.leading-space  | 16dp  |
| md.comp.list.list-item.trailing-space | 16dp  |
| md.comp.list.list-item.top-space      | 10dp  |
| md.comp.list.list-item.bottom-space   | 10dp  |
| md.comp.list.list-item.between-space  | 12dp  |
| md.comp.list.divider.leading-space    | 16dp  |
| md.comp.list.divider.trailing-space   | 16dp  |
| md.comp.list.divider.top-space        | 0     |
| md.comp.list.divider.bottom-space     | 0     |
| md.comp.list.segmented.gap            | 2dp   |

#### Shape

| Token                                                               | Value     |
| ------------------------------------------------------------------- | --------- |
| md.comp.list.container.shape                                        | Rectangle |
| md.comp.list.list-item.container.shape                              | Rectangle |
| md.comp.list.list-item.container.expressive.shape                   | Medium    |
| md.comp.list.list-item.disabled.container.expressive.shape          | Medium    |
| md.comp.list.list-item.hovered.container.expressive.shape           | Medium    |
| md.comp.list.list-item.focused.container.expressive.shape           | Medium    |
| md.comp.list.list-item.pressed.container.expressive.shape           | Medium    |
| md.comp.list.list-item.dragged.container.expressive.shape           | Medium    |
| md.comp.list.list-item.selected.container.expressive.shape          | Medium    |
| md.comp.list.list-item.selected.disabled.container.expressive.shape | Medium    |
| md.comp.list.list-item.selected.hovered.container.expressive.shape  | Medium    |
| md.comp.list.list-item.selected.focused.container.expressive.shape  | Medium    |
| md.comp.list.list-item.selected.pressed.container.expressive.shape  | Medium    |
| md.comp.list.list-item.selected.dragged.container.expressive.shape  | Medium    |
| md.comp.list.list-item.leading-avatar.shape                         | Full      |
| md.comp.list.list-item.leading-video.shape                          | Rectangle |
| md.comp.list.list-item.leading-image.shape                          | Rectangle |
| md.comp.list.list-item.leading-image.expressive.shape               | Medium    |
| md.comp.list.list-item.selected.container.shape                     | Rectangle |

#### Size and typography

| Token                                                       | Value        |
| ----------------------------------------------------------- | ------------ |
| md.comp.list.list-item.leading-avatar-label.type            | Title Medium |
| md.comp.list.list-item.leading-avatar.size                  | 40dp         |
| md.comp.list.list-item.leading-avatar-label.font            | Roboto       |
| md.comp.list.list-item.leading-avatar-label.line-height     | 24pt         |
| md.comp.list.list-item.leading-avatar-label.size            | 16pt         |
| md.comp.list.list-item.leading-avatar-label.tracking        | 0.15pt       |
| md.comp.list.list-item.leading-avatar-label.weight          | 500          |
| md.comp.list.list-item.leading-icon.size                    | 24dp         |
| md.comp.list.list-item.leading-icon.expressive.size         | 20dp         |
| md.comp.list.list-item.leading-image.width                  | 56dp         |
| md.comp.list.list-item.leading-image.height                 | 56dp         |
| md.comp.list.list-item.leading-video.width                  | 100dp        |
| md.comp.list.list-item.small.leading-video.width            | 100dp        |
| md.comp.list.list-item.small.leading-video.height           | 56dp         |
| md.comp.list.list-item.large.leading-video.width            | 114dp        |
| md.comp.list.list-item.large.leading-video.height           | 64dp         |
| md.comp.list.list-item.one-line.container.height            | 56dp         |
| md.comp.list.list-item.two-line.container.height            | 72dp         |
| md.comp.list.list-item.three-line.container.height          | 88dp         |
| md.comp.list.list-item.trailing-icon.size                   | 24dp         |
| md.comp.list.list-item.trailing-icon.expressive.size        | 20dp         |
| md.comp.list.list-item.label-text.type                      | Body Large   |
| md.comp.list.list-item.label-text.font                      | Roboto       |
| md.comp.list.list-item.label-text.line-height               | 24pt         |
| md.comp.list.list-item.label-text.size                      | 16pt         |
| md.comp.list.list-item.label-text.tracking                  | 0.5pt        |
| md.comp.list.list-item.label-text.weight                    | 400          |
| md.comp.list.list-item.trailing-supporting-text.type        | Label Small  |
| md.comp.list.list-item.trailing-supporting-text.font        | Roboto       |
| md.comp.list.list-item.trailing-supporting-text.line-height | 16pt         |
| md.comp.list.list-item.trailing-supporting-text.size        | 11pt         |
| md.comp.list.list-item.trailing-supporting-text.tracking    | 0.5pt        |
| md.comp.list.list-item.trailing-supporting-text.weight      | 500          |
| md.comp.list.list-item.supporting-text.type                 | Body Medium  |
| md.comp.list.list-item.supporting-text.font                 | Roboto       |
| md.comp.list.list-item.supporting-text.line-height          | 20pt         |
| md.comp.list.list-item.supporting-text.size                 | 14pt         |
| md.comp.list.list-item.supporting-text.tracking             | 0.25pt       |
| md.comp.list.list-item.supporting-text.weight               | 400          |
| md.comp.list.list-item.overline.type                        | Label Small  |
| md.comp.list.list-item.overline.font                        | Roboto       |
| md.comp.list.list-item.overline.line-height                 | 16pt         |
| md.comp.list.list-item.overline.size                        | 11pt         |
| md.comp.list.list-item.overline.tracking                    | 0.5pt        |
| md.comp.list.list-item.overline.weight                      | 500          |

---

### List - Expand

#### Color

| Token                                                                 | Value   |
| --------------------------------------------------------------------- | ------- |
| md.comp.list.expand.expanded.list-item.container.color                | #FEF7FF |
| md.comp.list.expand.expanded.list-item.segmented.container.color      | #FEF7FF |
| md.comp.list.expand.collapsed.list-item.trailing-icon.container.color | #FEF7FF |
| md.comp.list.expand.collapsed.list-item.trailing-icon.icon.color      | #1D1B20 |
| md.comp.list.expand.expanded.list-item.trailing-icon.container.color  | #F3EDF7 |
| md.comp.list.expand.expanded.list-item.trailing-icon.icon.color       | #1D1B20 |

#### Shape

| Token                                   | Value  |
| --------------------------------------- | ------ |
| md.comp.list.expand.container.shape     | Medium |
| md.comp.list.expand.trailing-icon.shape | Full   |

---

## Anatomy

![Diagram with 10 elements that can be included in lists.](https://lh3.googleusercontent.com/Sa8xghsBnkEPnF8eS5BsRjuohsdTmqbkr_f1sENLSXj6Vvj60a-fAE32n9nUI8ErJeIbxkQPPl7wExD8qwxOM1aUbjPPV60s-E5vfR6EN6i7=s0)

Container and label text are required. All other elements are optional:

1. Container
2. Overline
3. Label text
4. Trailing text
5. Supporting text
6. Trailing icon
7. Divider
8. Leading avatar
9. Leading icon
10. Leading media - image or video

### Flexibility & slots

The [M3 Design Kit](https://www.figma.com/community/file/1035203688168086460) includes lists with custom slots for designing flexible item layouts. Think of a custom list as a container with three different slots: leading, content, and trailing. Each slot can hold a different element.

**Slot accessibility**

Slots are not accessible by default. Consider the following:

- Elements must follow the rules, structure, and interaction patterns for lists
- Use standard list item padding
- Targets must be at least 48x48dp
- Don't add interactive elements that make the list item difficult to navigate, especially for people using screen readers

[More on required accessibility guidelines](/m3/pages/lists/accessibility#538f23f7-689c-4516-bfc8-5f6933a43f5e)

![A diagram with leading, content, and trailing slots.](https://lh3.googleusercontent.com/xpDca9BbXlTiv20zpU4gfBwt6MkKXaY5ZNLRcxAljGC5QsVXgH3mKaHiaEI6okSs2gUhacnLEdM2zCIC5raKpqBZl476yJ8Qchx5bxvt6Kywwg=s0)

> **Caution:** Reserve the use of slots for use cases that maintain the list's accessibility and functionality

> **Caution:** Slots require custom code implementation that you must create and maintain

The **leading** and **trailing** slot positions must be a smaller width than the **content** section.

**1. Leading slots** can contain:

- Visual elements: Avatar, icon, image, or video thumbnail
- Selection controls: Checkbox, radio button, or switch
- Customizations: Badge or larger image

**2. Content slots** must be the largest-width slot and can contain:

- Default content: Label text, supporting text
- Optional add-ons: Badge, icon, in-line label, or more text elements
- Avoid long lines of text to preserve readability

**3. Trailing slots** can contain:

- Action elements or text: Icon, icon button, or trailing text
- Selection controls: Checkbox, radio button, or switch

![Slot diagram showing slot placement in the middle of the list.](https://lh3.googleusercontent.com/jx4zxtSR4RN6N-1sCYapnbcg_EJOMuolnJBIPdx5aR9tEJ3PB1VtfNmemVGd-IKUMyPhpg1xj2FOUwBYzeekhv1rOIX4bE33jmMPNbV10RTL8w=s0)

_The content slot must be the largest section, placed in the middle of the list item_

### Selection lists

For selection lists, use only one selection interaction per list item.

![A selected list item with a checkmark in the leading slot.](https://lh3.googleusercontent.com/_cCLtqaTv3_VJ2Su5-NcT91PPqYvyAFZeK-5w0av-NbLChQrKPvD3HSBWsc6adlc9M1DQGkIVd_eisASsmoVyA_2nO23ObPXfcuLp6O9sMU=s0)

_Do: Use only one selection interaction per list item_

![A selected list item with both a checkmark in the leading slot and a bookmark in the trailing slot.](https://lh3.googleusercontent.com/7ikqKMFSD3KqUsrjy_D0FguVESN7UimX34YCtDgR8Cqm5sbof9nysVBBnBgjQukuuXjAQooDRC5mtopWMuGcpNL6TIQDNjGzQ3fkSDJVFfLZrg=s0)

_Don't: Don't use multiple selection interactions in one item_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![10 list element color roles in light mode and dark mode.](https://lh3.googleusercontent.com/ARd2jFHJp7QY8tjQqnTd9qITF5sD6WqWXpapVsC25_-ej0okbpB1kkGYkJ8V7jSl-iFv0cW18ZGseOUM3x1CqZflXxkdU7T4znEQ0bJ3qCvx=s0)

List color roles used for light and dark themes:

1. Surface
2. On surface variant
3. On surface
4. On surface variant
5. On surface variant
6. On surface variant
7. Outline variant
8. Primary container
9. On primary container
10. On surface variant

## States

States are visual representations used to communicate the status of a component or an interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

### Default list items

![6 default list states in light and dark mode.](https://lh3.googleusercontent.com/WfsQdzz9ydTMtaG8lRdHEb8GmuDilZ3RVX7fNys6QemgIc3Euv0bnB2eKnFMZNxvApj-l2ZNNVTtCrgdS3CfuR6FmBFEv8ppLObmmykaM6yO=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

### Selected list items

![6 selected list states in light and dark mode.](https://lh3.googleusercontent.com/plktb9RXA8a9SyxyQIpnF8qX_hMwZP0_SIXh-vuSRreRX9e8DbpLs90qXW4rIrtZyNyTmEbJTYmenlpK0EjS_q6HyaoZmb4ERojsZU2trNc=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

## Measurements

![Size and padding measurements for list items.](https://lh3.googleusercontent.com/i93JWmCnwH8J71-rjNfpGP1SCy_v1gjfHOkLAph3y86kvhmpo9uT_x75vfDsKz_NxDbnt9C5GWA4xX0rba-hRzTmxtfWPw-zncFBcbmzKiLm=s0)

_List item alignment, padding, and size measurements. The icon button height is dynamic, and automatically adjusts to fill the list item height._

## List (baseline)

The baseline list variant is available and continues to work in existing products. However, the [expressive list](/m3/pages/lists/specs#ebf87f58-d5bf-4cb5-a856-d2bb104eec4d) variant is recommended for new designs.

### Baseline Tokens & specs

Baseline list tokens are in the **common** token set. Note: This set also includes several expressive tokens.

### Baseline Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

![9 baseline list element color roles in light and dark mode.](https://lh3.googleusercontent.com/c7bwcYNZe1HFiYuQW2r1uEEhDr_8PMPrgH911ney_P2AQnEZ64a34YKs47JbQnNjPbrtMfhw0FA7oQ3T1Euqx9HQ45ItoppUNl_7LUN5dX8=s0)

List color roles used for light and dark themes:

- Surface
- On surface
- On surface variant
- On surface variant
- On surface variant
- Outline variant
- Primary container
- On primary container
- On surface variant

### Baseline States

States are visual representations used to communicate the status of a component or interactive element.

![6 baseline list states in light and dark mode.](https://lh3.googleusercontent.com/5lf9R5VeSpT9MZ52tQ1Gr9G6LJSo3T61BAkwRTHYYL4e0_ymdXq3TFfAieV8fBpokbyEkAP1dql3Z23YsmOgHwTzZclYa1v5eLG9J7lTYcJu=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

### Baseline Layout

#### One-line lists

![Alignment, padding, and size specifications for baseline list items with 1 line of text.](https://lh3.googleusercontent.com/z9QvwXHZzQCURyxwHxCKWIzN9bFCueiLYqnmwebzTymL8CQV6SfHPmE39ptDMlyCdxfAYa3ymS7TFM3eWfJEHnzXOq7ndUBAoqGr211VXq-K=s0)

_Baseline one-line list alignment, padding, and size measurements_

![Measurements for a 3-item list with 1 line each.](https://lh3.googleusercontent.com/khpu5JdGUDNFXqPEgOJ5ZWoXXvptYxD57jKRlck-ECQ1ge8a4pIcPdajOsbR3theeOCNLC8HoON7F71IWL5LsM5dFl_74zbveiiwPsZnriIqtQ=s0)

_Baseline list item measurements and padding_

#### Two-line lists

![Alignment, padding, and size specifications for baseline list items with 2 lines of text.](https://lh3.googleusercontent.com/LxLM2jQt0STwJFF6mM7jaAxeP09Gu8KXxM8a2gg_tCprAziEoUSMbqhONXIWU-yKoahTjXATtmhpqTaSxfe7x7UoAhhTD157g0YkJwJS-tse=s0)

_Baseline two-line list alignment, padding, and size measurements_

![Measurements for a 3-item list with 2 lines each.](https://lh3.googleusercontent.com/UIM_5cKOrqy1Jgy2wF6ND6qMT0cXmrXlqkqpSr1hUtJoShVECpFJt1jn39e7aoczco9L3ABwR7O4gd366Fdwg7tfQnWGas_8LRAM0LWM7z0NRg=s0)

_Baseline list item measurements and padding_

#### Three-line lists

![Alignment, padding, and size specifications for baseline list items with 3 lines of text.](https://lh3.googleusercontent.com/eoubrmM-Nl9VlpagzZuJBlQ7Ze1c-LjzmdIfk2sIxw16gjTgSUXdPTTLa1P1o1klSZk9SP6JZjG3BrVkBCnvatvekRTyo1Qkq2SoN5eSHEWy=s0)

_Baseline three-line list alignment, padding, and size measurements_

![Measurements for a 3-item list with 3 lines each.](https://lh3.googleusercontent.com/mX9bAsTDGyRcmgR60R9k2JBak4FqR4Iq5BHj_D9vHhsd3GwzcWjsnjvUzz4UDdrcd4KZE27gqKYtovW1ejGeDrnmqzdeoUULLnR8dLqTLZsf=s0)

_Baseline list item measurements and padding_

| Attribute                                                           | Value  |
| ------------------------------------------------------------------- | ------ |
| Label alignment                                                     | Center |
| Label alignment when height is 88dp or taller                       | Top    |
| Label left padding                                                  | 16dp   |
| Leading element alignment (vertical)                                | Center |
| Leading element alignment (vertical) when height is 88dp or taller  | Top    |
| Leading element left padding                                        | 16dp   |
| Leading icon alignment (vertical)                                   | Top    |
| Leading icon top padding                                            | 8dp    |
| Leading icon top padding when height is 88dp or taller              | 12dp   |
| Trailing element alignment (vertical)                               | Center |
| Trailing element alignment (vertical) when height is 88dp or taller | Top    |
| Trailing element left padding                                       | 16dp   |
| Trailing element right padding                                      | 24dp   |
| Padding above/below divider                                         | 0dp    |
| Targets                                                             | 48dp   |
| Divider full-width                                                  | 100%   |
| Divider inset left padding                                          | 16dp   |
| Divider inset right padding                                         | 24dp   |

### Baseline Configurations

#### Leading avatar

![1, 2, and 3-line list items with and without a leading avatar and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/YtV6g40j9-XQCPCAVu67QZhyyBxdzXse8Aq4zgVnIWxg5eL0YP-62b5XRWhoQFLGZ77XDbPLnnLnc6cQrbdVy0vdd5Qop9rt2L0vbVMrGlw=s0)

_With leading avatar / With leading avatar and trailing checkbox_

#### Leading image or thumbnail

![1, 2, and 3-line list items with and without a leading image and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/7K4R5eQvQLtvBGZ8iDlPrwl6-HftUdcPx0S6MRj8QLMuQMLlHQXj0EYkvlawvcIQOlaTsf1CAq8GIXC-zPanjI8B5o0Wznt8P_Os0Bir_Fq92A=s0)

_With leading image / With leading image and trailing checkbox_

#### Leading video

![1, 2, and 3-line list items with and without a leading video and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/811g1L2vKGQ0BTtqAoZPO-jApLgGPEDiV-7oi308iwDk-GrwrWTuQmCkNSok5-5XqCp7iNaldpc6cnpOL2Xe1RfUSfURXuucBF8O5k5WUomf=s0)

_With leading video / With leading video and trailing checkbox_

#### Leading icon

![1, 2, and 3-line list items with and without a leading icon and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/F_D2HGWtWYSMxDVgfkIRpfgvy8O26m5Gq1uzE8tvEuo9m9sMLfRhcnuVfZSE6hyxoICYNuSzjIfA1yRVpcXvaJG1b02lEpkYn-l0scGCQTmt=s0)

_With leading icon / With leading icon and trailing checkbox_

#### Text-only

![1, 2, and 3-line text only list items with and without a trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/0D-xONvUbyoPV0EMlMrBItgWHQXbW1IV2dBVpIslSFeHc0mUoHbJsP3y9on5ym7Ch1ICbFcFH7026UzSdnQvTABrsRQhYe8yRiG2imFaK00=s0)

_With text only / With text and trailing checkbox_

#### Leading checkbox

![1, 2, and 3-line list items with and without a leading checkbox and trailing text, in dark mode.](https://lh3.googleusercontent.com/3pOgKx-2m1N3ewCJ-joHRZ0IFwf-GHaxzimTyF_4-SYx_80TL6UnaBywa7ogFoCCil_KQgEFXoNmwKuXP_6dGsFC0uMqCLGE5qQpUqHOGdrxZQ=s0)

_With leading checkbox / With leading checkbox and trailing text_

#### Leading radio button

![1, 2, and 3-line list items with and without a leading radio button and trailing text, in dark mode.](https://lh3.googleusercontent.com/-Eph6i5PJ8k8D5ABIpITkh-WLe2a-gMsM-sq2qCDM1cFBVfQN3FGAYAwiryrXRkrF8-8Q3Exypco2Ir4iP0s0IRbZ_n-ZvFI2ZTuNUzz7bs=s0)

_With leading radio button / With leading radio button and trailing text_

#### Trailing switch

![1, 2, and 3-line list items with and without a leading icon and trailing switch, in dark mode.](https://lh3.googleusercontent.com/6qcPlbTkPuUN2vByfw3QiZU3_haTWYgitgstbbYGI9ugO1r8LknZ2RPovveQ18B9EOKQNu5robyVqrQs0AvZchLuQXeckUeWZEn2meby2vkA=s0)

_With trailing switch / With leading icon and trailing switch_
