---
url: https://m3.material.io/components/switch/overview
lastmod: 2026-01-06
crawled_at: 2026-02-04T12:00:00.000Z
category: components
section: switch
page_type: overview
status: complete
---

# Switch

Switches toggle the selection of an item on or off.

- Use switches (not radio buttons) if the items in a list can be independently controlled
- Switches are the best way to let people adjust settings
- Make sure the switch's selection (on or off) is visible at a glance

![A switch in two states, off and on.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwa9bnl5-1.png?alt=media&token=8a4b85d3-5a30-49e2-b32d-927fc4c6fc2d=s0)

_Switches can be toggled on and off_

## Availability & resources

| Type           | Resource           | Status    |
|----------------|--------------------|-----------|
| Design         | Design Kit (Figma) | Available |
| Implementation | Flutter            | Available |
| Implementation | Jetpack Compose    | Available |
| Implementation | MDC-Android        | Available |
| Implementation | Web                | Available |

## Differences from M2

- Accessibility: Visual presentation is more accessible
- Color: New color mappings meet Material's non-text-contrast requirements in addition to compatibility with dynamic color
- Icons: Ability to have an optional icon within the switch handle
- Layout: Track is taller and wider

![M2 switches in off and on states.](https://lh3.googleusercontent.com/8Q9gMTX5nAY3wJyezAw1JEzmJ6MbTAT3FkVUc7BIO9RUJ485PUwFFlXz7pAutMPh1eI0ScCnGFUd3nuAEfSb_Uo89uV3wfTPotf3njzsUwfo=s0)

_M2: Switches have a circular handle that extends beyond the edge of the track_

![M3 switch shown toggled off and toggled on. When switched on, it has a checkmark icon.](https://lh3.googleusercontent.com/P_nhLNZtpt8oAPTScTR_d6oBLsidBWX0xG96t9fCkTURwNMReQpP9Etrpw4rc439wBfOAJBUeGZ39O8goRmRcPk_Ehhnq_wj7qNKFR4Sf70=s0)

_M3: Switches have a taller and wider track, new color mappings, and the ability to show an icon in the handle_
