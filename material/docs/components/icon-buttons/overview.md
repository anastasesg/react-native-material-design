---
url: https://m3.material.io/components/icon-buttons/overview
lastmod: 2025-09-26
crawled_at: 2026-02-04T12:00:00.000Z
category: components
section: icon-buttons
page_type: overview
status: complete
---

# Icon buttons

Icon buttons help people take minor actions with one tap

- Icon buttons must use a system icon with a clear meaning
- Two types: default and toggle
- Many configurations: Color, size, width, and shape
- On web, display a tooltip describing the action while hovering
- In toggle buttons, use the outlined style of an icon for the unselected state, and the filled style for the selected state

![5 kinds of outline buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0by1ftf-1.png?alt=media&token=2888d586-c4ee-456e-8444-805543dddbed=s0)

_Standard, filled unselected, filled selected, filled tonal, and outlined icon buttons_

## Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | | |
| | Design Kit (Figma) | Available |
| Implementation | | |
| | Flutter | Available |
| | Jetpack Compose | Available |
| | Jetpack Compose: Expressive | Available |
| | MDC-Android | Available |
| | MDC-Android: Expressive | Available |
| | Web | Available |
| | Web: Expressive | Unavailable |

## M3 Expressive update

**May 2025**

Icon buttons now have a wider variety of shapes and sizes, changing shape when selected. When placed in button groups, icon buttons interact with each other when pressed. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Types and naming:

- Default and toggle (selection)
- Color styles are now configurations. (filled, tonal, outlined, standard)

Shapes:

- Round and square options
- Shape morphs when pressed
- Shape morphs when selected

Sizes:

- Extra small
- Small (default)
- Medium
- Large
- Extra large

Widths:

- Narrow
- Default
- Wide

![Icon buttons can vary in size, shape, and width.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0by3xdg-2.png?alt=media&token=0e9b026c-d4c0-4e94-ad89-55a59618a51d=s0)

_Five sizes, Two shapes, Three widths_

## Differences from M2

- **Color:** New color mappings and compatibility with dynamic color
- **Types and naming:** Icon buttons were called toggle buttons. There are now two types of icon buttons: default and toggle.

![Icon buttons were known as toggle buttons in M2.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0by5hfz-3.png?alt=media&token=9b34e493-6c33-4b8e-aa41-93e8045c9952=s0)

_Default icon buttons, Toggle icon buttons_
