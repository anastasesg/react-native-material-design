# Floating Action Button (FAB) — M3 Component Reference

> Floating action buttons help people take primary actions. They appear in front of all other content and persist on scroll.

Sources: [Overview](https://m3.material.io/components/floating-action-button/overview) · [Specs](https://m3.material.io/components/floating-action-button/specs) · [Guidelines](https://m3.material.io/components/floating-action-button/guidelines) · [Accessibility](https://m3.material.io/components/floating-action-button/accessibility)

---

## Variants

![An icon on the container of a FAB, medium FAB, and large FAB.](https://lh3.googleusercontent.com/CdTXXgPJ5XavoUEXtTKTczb0ENYt1VwreirVIJMyIYnwI6gFCYn1S4LCQyptGlF6EzKq9xL2hzPOQKv2RdKrhf6kTIj5vkcNY2u-VuQRqghs=s0)

1. **FAB** — smallest recommended size, best for compact windows where other actions may also be present
2. **Medium FAB** — recommended for most situations; works well in compact and medium windows
3. **Large FAB** — useful in any window size when the primary action needs prominence; best suited for expanded and larger windows

![The 3 sizes of floating action buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkap9gay-01.png?alt=media&token=e8e925f7-45d2-4db6-8bfb-31ea3248ae1e=s0)

### Baseline variant (deprecated)

The **small FAB** is still available but no longer recommended. Use a larger size instead.

![An icon on the container of a small FAB.](https://lh3.googleusercontent.com/LVMfvx2rKsoVM1_1Pq9CQ8o0dDyfSQtfCxYgle_57GhDKX0oDkNepZr0yvyqmoI6mL-0QfWWfFkmVJV5RwLbJVGJ4YGXZBTcT9JW2-IPRQNpVg=s0)

| Variant    | M3        | M3 Expressive                       |
| ---------- | --------- | ----------------------------------- |
| FAB        | Available | Available                           |
| Medium FAB | --        | Available                           |
| Large FAB  | Available | Available                           |
| Small FAB  | Available | Not recommended. Use a larger size. |

---

## Anatomy

![2 elements of a FAB.](https://lh3.googleusercontent.com/ANFTHcXuJZA9FSSl3I315pOU3UzwgUh_BZgfudPuvatQY4tLh2hREtb6ESAQZulQZBDe8iHcqQ548uZe2aJd2UGGv-8q2XXCBeGLdERRlXs=s0)

![2 elements of a FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapv2og-12.png?alt=media&token=3686bf12-1656-4350-ae10-e8f104d287bb=s0)

1. **Container** — displayed as a square shape. Must not be covered by other elements (such as badges). Must have sufficient color contrast with its background surface.
2. **Icon** — must be clear and understandable. Use filled icons rather than outlined. Should not duplicate notifications or actions already visible on screen. On web, display a tooltip with a text label on hover.

![A bright colored FAB has high contrast with the background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaq0msf-13.png?alt=media&token=34c9472a-9ed8-4db3-990e-84433d0b6331=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaq1779-14.png?alt=media&token=d381cf06-0f9b-41bf-91bb-e199ebfc8769=s0" /><br/><b>Do:</b> Use clear and simple icons such as add, message, or edit</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaq1wxv-15.png?alt=media&token=6e1889bc-265d-4896-8a2d-63cca01c2252=s0" /><br/><b>Don't:</b> Avoid confusing or open-ended icons for less common actions</td>
</tr></table>

---

## Usage & When to Use

Use a FAB for the most important action on a screen. It floats above all other content. It can be aligned left, center, or right, and positioned above or nested within a navigation bar.

![A Compose FAB is positioned above a nav bar on a mobile email inbox.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapp0w4-02.png?alt=media&token=241a9e04-8ed7-4df1-8eb7-c389ab51362c=s0)

![3 FAB sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkappjdx-03.png?alt=media&token=a21e240b-8ff5-4959-a8e3-8d002d19ab0b=s0)

![A medium FAB over an email app UI.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapq84r-04.png?alt=media&token=3ac65358-559c-4725-b887-7c7de2881712=s0)

![A large FAB over an email app UI.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapqn1b-05.png?alt=media&token=5e6372d1-3c98-40d6-b521-d103604d221f=s0)

### When NOT to use

| Scenario                                         | Use instead                        |
| ------------------------------------------------ | ---------------------------------- |
| Screen where images represent primary actions    | No FAB needed                      |
| Multiple primary actions on one screen           | Only one FAB per screen            |
| Minor, overflow, unclear, or destructive actions | Toolbar controls, other components |

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapr8x3-06-do.png?alt=media&token=362c34fb-d2cf-4c87-b970-68d508cd0628=s0" /><br/><b>Do:</b> FABs aren't needed on every screen — images may already represent primary actions</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaps2z9-07-don't.png?alt=media&token=6a7e9640-e3f3-4bdd-a06f-fd85cd7d184b=s0" /><br/><b>Don't:</b> Never display multiple FABs on a single screen</td>
</tr></table>

### Related components

A FAB can transform into an **extended FAB** on larger screens, or transition into a **FAB menu** when selected. Use a FAB menu when there are many kinds of actions relevant to the FAB.

![An extended FAB saying "Share" with a share icon.](https://lh3.googleusercontent.com/6gVz4SSpnVYq28cYhUlwX36JiaNZLx-0A1NhL4z0IUA-RwlUz5tsApAkIXx0RAVE780uol-6VkeZZq7jiXRPiGOzEUo_SGVtL7NG3ogNFwg=s0)

![A FAB menu showing 3 actions related to sharing.](https://lh3.googleusercontent.com/YtrgWibQJDIheCADkeWKz14g7auX0_zMKtGJ8o45F48iJl9BvPomdwRJGi8bjtOnAH7gtd-8V5ki1gS2Qo-f172n73boNv3__OGeekLj-xg=s0)

### Actions

FABs promote important, constructive actions:

- Create
- Favorite
- Share
- Start a process

![FABs for 12 common actions including create, edit, and navigate.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaptzjv-10.png?alt=media&token=6feee690-87e8-42b2-b91e-6bc024c92add=s0)

Avoid using FABs for minor or destructive actions:

- Archive or trash
- Alerts or errors
- Limited tasks like cutting text
- Controls better suited to a toolbar (volume, font color)

![FABs for 18 minor or destructive actions, such as cut, trash, and volume.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapug9u-11.png?alt=media&token=1fa984f4-3e7a-4960-ae4c-2c44611a7ec5=s0)

---

## Configurations

In the M3 Expressive update, existing tonal color styles were renamed to match their actual token names. New tone-on-tone color styles were added. Surface FABs are no longer recommended.

| Category | Configuration                                              | M3                                          | M3 Expressive |
| -------- | ---------------------------------------------------------- | ------------------------------------------- | ------------- |
| Color    | Primary container, secondary container, tertiary container | Available (as primary, secondary, tertiary) | Available     |
|          | Primary, secondary, tertiary                               | --                                          | Available     |

### Color styles

FABs support six color-style combinations. Each pairs a container color with its corresponding on-color for the icon. All provide equal legibility and functionality — the choice is purely stylistic.

![6 FAB color styles in light and dark themes.](https://lh3.googleusercontent.com/ZwUAoGfKU_nKPy45dUL885gk5_UbUfDoN2lY0oreRhS7vnkY12iBhnT3a1Fm1LydwMZVkqFYkQhYjVbGHx_hHsPwlmEm2KWwSQ75kOOKSkCsEA=s0)

1. Primary container & On primary container (default)
2. Secondary container & On secondary container
3. Tertiary container & On tertiary container
4. Primary & On primary
5. Secondary & On secondary
6. Tertiary & On tertiary

![4 FABs showing the colors available after the expressive update.](https://lh3.googleusercontent.com/Kyq0kFrZiQkyIGco9EHQ5yzaPCDzbUydpq5bcHqcin1vLOhBpnqAeAW6D86dFvHrexhyJvo5jK0Brc4PwckWVOtXFqRcMhUA-h05047nERg=s0)

### Baseline color style (deprecated)

Surface FAB color styles are still available but no longer recommended.

![Baseline FAB style in all 3 sizes.](https://lh3.googleusercontent.com/Yt-382N_6b_TEqwyVAFZY_PG3zCmejVTFm6-tfbkUGpTqwgeECy2CNFH8n0bV1Spc6qU-ruc9l-Qja0_LpTeeYatxSxOi7qyzjF5tSeeXuEU=s0)

---

## Behavior

### Appearing

When a FAB animates on screen, it expands outward from a central point. The icon may also animate. FABs move independently from other UI elements because of their relative importance — they float above the content surface, not attached to it.

### Screen transitions

When a screen changes layout, the FAB should disappear and reappear during the transition. It should only reappear if it's relevant to the new screen, and in the same position if possible. FABs can morph to launch related actions using a container transform transition.

### Scrolling

FABs remain fixed in place while content scrolls. Extended FABs can collapse into a regular FAB on scroll and re-expand when the user reaches the bottom.

### Tab transitions

When tabs are present, the FAB should briefly disappear then reappear when new content settles into place. This communicates that the FAB is not tied to any particular tab. Do not animate the FAB alongside the body content.

---

## Measurements

### FAB

![FAB size measurements.](https://lh3.googleusercontent.com/bY4SJyZCamFkqUakHco1-HsHBRJ55wn7zAWPhJCBlE9W4aA7wFnRywl8NSl_e7oToqU6JODtUnjeguVn7BJd5irT8DYnHQmq1lQKEvgN3g3Q=s0)

![FAB padding measurements.](https://lh3.googleusercontent.com/beevX-JBo5BT5oaSR6WnfIvvspxwDFUOsGg0TBWuDEAgjCYevFNjOhNnz6om1Pbxkal9dwoBR5HwAeyyn7LB8z1N-NrDjH_F9ZcxN_lEL60=s0)

### Medium FAB

![Medium FAB size measurements.](https://lh3.googleusercontent.com/l-yip97Leh5bLumalSFuxS1DEMG6p3xJlXkUCTioixjvr0uXlzTaKK85zQzLnZPpgD9E72Zajd1yO9VMW1FKpSUVCWXbP5XIxIz6dUiubWALJw=s0)

![Medium FAB padding measurements.](https://lh3.googleusercontent.com/qQZXXxZh9x9LRJyZI_2tblBDG7aMd-Rx3HQVX-ssihAGa-xSIGuOA2FZNPKeHgfbI-q19SD0IIUCT-xnLHk4Q-P2KSb-KnSm95tRPJQs2rKx=s0)

### Large FAB

![Large FAB size measurements.](https://lh3.googleusercontent.com/_1q2AqUdfZfCbC9aKRbQaXHO48GA5OSdH6ywXyyosvlIznXjrr0Wx-WM9xomavwT1qj6RA42qG01crP9I7GQPJ92BWnvJqijQ01UxjQKKcgS=s0)

![Large FAB padding measurements.](https://lh3.googleusercontent.com/PsH6GvakYnsKOw9X05rxaShBXItlCIc3qS-LGjmdITmzFgAnhxdiyhzUEM34i8B0MGtZoBoDdXE7eA1hYAFqcWEqFyipPBdhE0TirWp_HMWxTA=s0)

---

## Color Tokens

### FAB — Tonal Primary (primary-container)

**Enabled**

| Element                | Token                                                  | Value                               |
| ---------------------- | ------------------------------------------------------ | ----------------------------------- |
| Container color        | `md.comp.fab.primary-container.container.color`        | `md.sys.color.primary-container`    |
| Container shadow color | `md.comp.fab.primary-container.container.shadow-color` | `md.sys.color.shadow`               |
| Container elevation    | `md.comp.fab.primary-container.container.elevation`    | `md.sys.elevation.level3`           |
| Icon color             | `md.comp.fab.primary-container.icon.color`             | `md.sys.color.on-primary-container` |

**Hovered**

| Element             | Token                                                       | Value                                    |
| ------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab.primary-container.hovered.container.elevation` | `md.sys.elevation.level4`                |
| State layer color   | `md.comp.fab.primary-container.hovered.state-layer.color`   | `md.sys.color.on-primary-container`      |
| State layer opacity | `md.comp.fab.primary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Icon color          | `md.comp.fab.primary-container.hovered.icon.color`          | `md.sys.color.on-primary-container`      |

**Focused**

| Element             | Token                                                       | Value                                    |
| ------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab.primary-container.focused.container.elevation` | `md.sys.elevation.level3`                |
| State layer color   | `md.comp.fab.primary-container.focused.state-layer.color`   | `md.sys.color.on-primary-container`      |
| State layer opacity | `md.comp.fab.primary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Icon color          | `md.comp.fab.primary-container.focused.icon.color`          | `md.sys.color.on-primary-container`      |

**Pressed**

| Element             | Token                                                       | Value                                      |
| ------------------- | ----------------------------------------------------------- | ------------------------------------------ |
| Container elevation | `md.comp.fab.primary-container.pressed.container.elevation` | `md.sys.elevation.level3`                  |
| State layer color   | `md.comp.fab.primary-container.pressed.state-layer.color`   | `md.sys.color.on-primary-container`        |
| State layer opacity | `md.comp.fab.primary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Icon color          | `md.comp.fab.primary-container.pressed.icon.color`          | `md.sys.color.on-primary-container`        |

---

### FAB — Tonal Secondary (secondary-container)

**Enabled**

| Element                | Token                                                    | Value                                 |
| ---------------------- | -------------------------------------------------------- | ------------------------------------- |
| Container color        | `md.comp.fab.secondary-container.container.color`        | `md.sys.color.secondary-container`    |
| Container shadow color | `md.comp.fab.secondary-container.container.shadow-color` | `md.sys.color.shadow`                 |
| Container elevation    | `md.comp.fab.secondary-container.container.elevation`    | `md.sys.elevation.level3`             |
| Icon color             | `md.comp.fab.secondary-container.icon.color`             | `md.sys.color.on-secondary-container` |

**Hovered**

| Element             | Token                                                         | Value                                    |
| ------------------- | ------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab.secondary-container.hovered.container.elevation` | `md.sys.elevation.level4`                |
| State layer color   | `md.comp.fab.secondary-container.hovered.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| State layer opacity | `md.comp.fab.secondary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Icon color          | `md.comp.fab.secondary-container.hovered.icon.color`          | `md.sys.color.on-secondary-container`    |

**Focused**

| Element             | Token                                                         | Value                                    |
| ------------------- | ------------------------------------------------------------- | ---------------------------------------- |
| Container elevation | `md.comp.fab.secondary-container.focused.container.elevation` | `md.sys.elevation.level3`                |
| State layer color   | `md.comp.fab.secondary-container.focused.state-layer.color`   | `md.sys.color.on-secondary-container`    |
| State layer opacity | `md.comp.fab.secondary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Icon color          | `md.comp.fab.secondary-container.focused.icon.color`          | `md.sys.color.on-secondary-container`    |

**Pressed**

| Element             | Token                                                         | Value                                      |
| ------------------- | ------------------------------------------------------------- | ------------------------------------------ |
| Container elevation | `md.comp.fab.secondary-container.pressed.container.elevation` | `md.sys.elevation.level3`                  |
| State layer color   | `md.comp.fab.secondary-container.pressed.state-layer.color`   | `md.sys.color.on-secondary-container`      |
| State layer opacity | `md.comp.fab.secondary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Icon color          | `md.comp.fab.secondary-container.pressed.icon.color`          | `md.sys.color.on-secondary-container`      |

---

### FAB — Tonal Tertiary (tertiary-container)

**Enabled**

| Element                | Token                                                   | Value                                |
| ---------------------- | ------------------------------------------------------- | ------------------------------------ |
| Container color        | `md.comp.fab.tertiary-container.container.color`        | `md.sys.color.tertiary-container`    |
| Container shadow color | `md.comp.fab.tertiary-container.container.shadow-color` | `md.sys.color.shadow`                |
| Container elevation    | `md.comp.fab.tertiary-container.container.elevation`    | `md.sys.elevation.level3`            |
| Icon color             | `md.comp.fab.tertiary-container.icon.color`             | `md.sys.color.on-tertiary-container` |

**Hovered**

| Element             | Token                                                        | Value                                    |
| ------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Container elevation | `md.comp.fab.tertiary-container.hovered.container.elevation` | `md.sys.elevation.level4`                |
| State layer color   | `md.comp.fab.tertiary-container.hovered.state-layer.color`   | `md.sys.color.on-tertiary-container`     |
| State layer opacity | `md.comp.fab.tertiary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Icon color          | `md.comp.fab.tertiary-container.hovered.icon.color`          | `md.sys.color.on-tertiary-container`     |

**Focused**

| Element             | Token                                                        | Value                                    |
| ------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Container elevation | `md.comp.fab.tertiary-container.focused.container.elevation` | `md.sys.elevation.level3`                |
| State layer color   | `md.comp.fab.tertiary-container.focused.state-layer.color`   | `md.sys.color.on-tertiary-container`     |
| State layer opacity | `md.comp.fab.tertiary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Icon color          | `md.comp.fab.tertiary-container.focused.icon.color`          | `md.sys.color.on-tertiary-container`     |

**Pressed**

| Element             | Token                                                        | Value                                      |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| Container elevation | `md.comp.fab.tertiary-container.pressed.container.elevation` | `md.sys.elevation.level3`                  |
| State layer color   | `md.comp.fab.tertiary-container.pressed.state-layer.color`   | `md.sys.color.on-tertiary-container`       |
| State layer opacity | `md.comp.fab.tertiary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Icon color          | `md.comp.fab.tertiary-container.pressed.icon.color`          | `md.sys.color.on-tertiary-container`       |

---

## Interaction States

![4 states of a FAB shown in light and dark themes.](https://lh3.googleusercontent.com/zCVGIf6lxv-ExBpOFiRo9G2yv-hIzjqPkEG0HKniNMzlBuWcEI8tXSvAndc3RL7Q0OOG56i6xP36k1rP1E-Fz92l4TGPZlkzdbNCF67rj2M=s0)

When using a non-default color mapping, ensure the state layer color matches the icon color. For example, the state layer color for the **primary** color style should be `md.sys.color.primary`.

| #   | State   | Visual changes                                 |
| --- | ------- | ---------------------------------------------- |
| 1   | Enabled | Default elevation (level 3)                    |
| 2   | Hovered | 8% state layer, elevation increases to level 4 |
| 3   | Focused | 10% state layer, elevation remains level 3     |
| 4   | Pressed | 10% state layer, elevation remains level 3     |

---

## Adaptive Design

In **compact and medium** windows, place the FAB in the lower-right corner — it's easy to reach and less likely to cover important content. In **expanded** windows, consider the upper-left corner (e.g., within a navigation rail) so it's one of the first interactive elements visible.

Scale the FAB size to context: use a **medium FAB** for mobile layouts, and a **large FAB** for tablets and large screens.

![Large screen layout showing FAB in upper left region of the screen, below navigation rail icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaq2b6m-16.png?alt=media&token=f8d3f99a-25ef-44c6-9dc8-78a71f64e587=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaq2qmb-17.png?alt=media&token=4028106d-daa4-4cfb-b4a3-ef0e0c9fb96d=s0" /><br/><b>Do:</b> A FAB can be placed within a navigation component, such as a navigation rail</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaq35yc-18.png?alt=media&token=5b375eb2-c9ea-4324-bdcb-09444f227ca8=s0" /><br/><b>Don't:</b> Individual components (e.g., cards) should not have their own FAB</td>
</tr></table>

---

## Accessibility

### Interaction & Style

- Never disable a FAB. If the represented action is unavailable, remove the FAB entirely.
- The icon must have a minimum **3:1 contrast ratio** with the container.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalo050e-1.png?alt=media&token=629253b6-a62b-4c25-87fb-42aaf3c80457=s0" /><br/><b>Do:</b> FAB icons are above the 3:1 contrast ratio</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalo08ew-2.png?alt=media&token=ab0762a5-4c94-484c-bfd8-93529cb6309b=s0" /><br/><b>Don't:</b> Avoid colors with contrast below 3:1</td>
</tr></table>

### Focus

Prioritize the FAB in the overall focus order for efficient assistive tech navigation. On mobile, focus order may go: app bar → navigation bar → FAB (skipping other content). Display a tooltip when the FAB is focused (supported on web).

![A focused FAB with a tooltip saying "Compose" appearing below it.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaqbeez-03.png?alt=media&token=b4e21a7b-5097-4c6b-95b9-83953c9baf7e=s0)

### Layout & Position

For **expanded windows**, consider placing the FAB in the upper-left region for screen reader accessibility. For **compact and medium windows**, the lower-right corner is preferred.

Do not position the FAB so that it completely obscures the focus indicator of an actionable element. Partial overlap is acceptable as long as focus indicators remain visible.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaqcwm1-06.png?alt=media&token=4f93ecbf-6872-4178-baf9-9d2ab17ede1c=s0" /><br/><b>Do:</b> The FAB can partially cover an actionable element if focus indicators remain clearly visible</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkbecw5o-07.png?alt=media&token=2ead9370-39e9-4c15-b531-c63385f17621=s0" /><br/><b>Don't:</b> Never completely obscure an actionable element and its focus indicator</td>
</tr></table>

![FAB in the lower right region of a small screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaqbxv8-04.png?alt=media&token=c3a789b3-1207-4157-a96c-49aeba908511=s0)

![FAB in the upper left region of a large screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaqcdup-05.png?alt=media&token=f735b608-ff59-4ef5-b166-b7ab5542cb36=s0)

### Keyboard Navigation

| Key            | Action                   |
| -------------- | ------------------------ |
| Tab            | Focus lands on the FAB   |
| Space or Enter | Perform the FAB's action |

### Labeling

The accessibility label should describe the **action** the button performs, not the icon it shows. For example, use "Compose a new message" rather than "Pencil icon".

![Accessibility label and accessibility role of a FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaqdy3m-08.png?alt=media&token=c5296e63-0972-4391-8fc3-4577544c8c31=s0)

---

## Baseline Tokens (Deprecated)

The following token sets are deprecated. They cover the **small FAB** and **large FAB** sizes using the old naming convention, plus the deprecated **surface** color style. Current (non-deprecated) FAB and medium FAB sizes use the tonal color tokens above.

### [Deprecated] FAB — Primary, Small

**Enabled**

| Element                     | Token                                                   | Value                               |
| --------------------------- | ------------------------------------------------------- | ----------------------------------- |
| Container color             | `md.comp.fab.primary.small.container.color`             | `md.sys.color.primary-container`    |
| Container shape             | `md.comp.fab.primary.small.container.shape`             | `md.sys.shape.corner.medium`        |
| Container width             | `md.comp.fab.primary.small.container.width`             | 40dp                                |
| Container height            | `md.comp.fab.primary.small.container.height`            | 40dp                                |
| Container elevation         | `md.comp.fab.primary.small.container.elevation`         | `md.sys.elevation.level3`           |
| Container shadow color      | `md.comp.fab.primary.small.container.shadow-color`      | `md.sys.color.shadow`               |
| Lowered container elevation | `md.comp.fab.primary.small.lowered.container.elevation` | `md.sys.elevation.level1`           |
| Icon size                   | `md.comp.fab.primary.small.icon.size`                   | 24dp                                |
| Icon color                  | `md.comp.fab.primary.small.icon.color`                  | `md.sys.color.on-primary-container` |

**Hovered**

| Element                     | Token                                                         | Value                                    |
| --------------------------- | ------------------------------------------------------------- | ---------------------------------------- |
| Container elevation         | `md.comp.fab.primary.small.hover.container.elevation`         | `md.sys.elevation.level4`                |
| Lowered container elevation | `md.comp.fab.primary.small.lowered.hover.container.elevation` | `md.sys.elevation.level2`                |
| State layer color           | `md.comp.fab.primary.small.hover.state-layer.color`           | `md.sys.color.on-primary-container`      |
| State layer opacity         | `md.comp.fab.primary.small.hover.state-layer.opacity`         | `md.sys.state.hover.state-layer-opacity` |
| Icon color                  | `md.comp.fab.primary.small.hover.icon.color`                  | `md.sys.color.on-primary-container`      |

**Focused**

| Element                     | Token                                                         | Value                                       |
| --------------------------- | ------------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color       | `md.comp.fab.primary.small.focus.indicator.color`             | `md.sys.color.secondary`                    |
| Focus indicator thickness   | `md.comp.fab.primary.small.focus.indicator.thickness`         | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset      | `md.comp.fab.primary.small.focus.indicator.outline.offset`    | `md.sys.state.focus-indicator.outer-offset` |
| Container elevation         | `md.comp.fab.primary.small.focus.container.elevation`         | `md.sys.elevation.level3`                   |
| Lowered container elevation | `md.comp.fab.primary.small.lowered.focus.container.elevation` | `md.sys.elevation.level1`                   |
| State layer color           | `md.comp.fab.primary.small.focus.state-layer.color`           | `md.sys.color.on-primary-container`         |
| State layer opacity         | `md.comp.fab.primary.small.focus.state-layer.opacity`         | `md.sys.state.focus.state-layer-opacity`    |
| Icon color                  | `md.comp.fab.primary.small.focus.icon.color`                  | `md.sys.color.on-primary-container`         |

**Pressed**

| Element                     | Token                                                           | Value                                      |
| --------------------------- | --------------------------------------------------------------- | ------------------------------------------ |
| Container elevation         | `md.comp.fab.primary.small.pressed.container.elevation`         | `md.sys.elevation.level3`                  |
| Lowered container elevation | `md.comp.fab.primary.small.lowered.pressed.container.elevation` | `md.sys.elevation.level1`                  |
| State layer color           | `md.comp.fab.primary.small.pressed.state-layer.color`           | `md.sys.color.on-primary-container`        |
| State layer opacity         | `md.comp.fab.primary.small.pressed.state-layer.opacity`         | `md.sys.state.pressed.state-layer-opacity` |
| Icon color                  | `md.comp.fab.primary.small.pressed.icon.color`                  | `md.sys.color.on-primary-container`        |

---

### [Deprecated] FAB — Primary, Large

**Enabled**

| Element                     | Token                                                   | Value                               |
| --------------------------- | ------------------------------------------------------- | ----------------------------------- |
| Container color             | `md.comp.fab.primary.large.container.color`             | `md.sys.color.primary-container`    |
| Container shape             | `md.comp.fab.primary.large.container.shape`             | `md.sys.shape.corner.extra-large`   |
| Container width             | `md.comp.fab.primary.large.container.width`             | 96dp                                |
| Container height            | `md.comp.fab.primary.large.container.height`            | 96dp                                |
| Container elevation         | `md.comp.fab.primary.large.container.elevation`         | `md.sys.elevation.level3`           |
| Container shadow color      | `md.comp.fab.primary.large.container.shadow-color`      | `md.sys.color.shadow`               |
| Lowered container elevation | `md.comp.fab.primary.large.lowered.container.elevation` | `md.sys.elevation.level1`           |
| Icon size                   | `md.comp.fab.primary.large.icon.size`                   | 36dp                                |
| Icon color                  | `md.comp.fab.primary.large.icon.color`                  | `md.sys.color.on-primary-container` |

**Hovered**

| Element                     | Token                                                         | Value                                    |
| --------------------------- | ------------------------------------------------------------- | ---------------------------------------- |
| Container elevation         | `md.comp.fab.primary.large.hover.container.elevation`         | `md.sys.elevation.level4`                |
| Lowered container elevation | `md.comp.fab.primary.large.lowered.hover.container.elevation` | `md.sys.elevation.level2`                |
| State layer color           | `md.comp.fab.primary.large.hover.state-layer.color`           | `md.sys.color.on-primary-container`      |
| State layer opacity         | `md.comp.fab.primary.large.hover.state-layer.opacity`         | `md.sys.state.hover.state-layer-opacity` |
| Icon color                  | `md.comp.fab.primary.large.hover.icon.color`                  | `md.sys.color.on-primary-container`      |

**Focused**

| Element                     | Token                                                         | Value                                       |
| --------------------------- | ------------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color       | `md.comp.fab.primary.large.focus.indicator.color`             | `md.sys.color.secondary`                    |
| Focus indicator thickness   | `md.comp.fab.primary.large.focus.indicator.thickness`         | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset      | `md.comp.fab.primary.large.focus.indicator.outline.offset`    | `md.sys.state.focus-indicator.outer-offset` |
| Container elevation         | `md.comp.fab.primary.large.focus.container.elevation`         | `md.sys.elevation.level3`                   |
| Lowered container elevation | `md.comp.fab.primary.large.lowered.focus.container.elevation` | `md.sys.elevation.level1`                   |
| State layer color           | `md.comp.fab.primary.large.focus.state-layer.color`           | `md.sys.color.on-primary-container`         |
| State layer opacity         | `md.comp.fab.primary.large.focus.state-layer.opacity`         | `md.sys.state.focus.state-layer-opacity`    |
| Icon color                  | `md.comp.fab.primary.large.focus.icon.color`                  | `md.sys.color.on-primary-container`         |

**Pressed**

| Element                     | Token                                                           | Value                                      |
| --------------------------- | --------------------------------------------------------------- | ------------------------------------------ |
| Container elevation         | `md.comp.fab.primary.large.pressed.container.elevation`         | `md.sys.elevation.level3`                  |
| Lowered container elevation | `md.comp.fab.primary.large.lowered.pressed.container.elevation` | `md.sys.elevation.level1`                  |
| State layer color           | `md.comp.fab.primary.large.pressed.state-layer.color`           | `md.sys.color.on-primary-container`        |
| State layer opacity         | `md.comp.fab.primary.large.pressed.state-layer.opacity`         | `md.sys.state.pressed.state-layer-opacity` |
| Icon color                  | `md.comp.fab.primary.large.pressed.icon.color`                  | `md.sys.color.on-primary-container`        |

---

### [Deprecated] FAB — Secondary, Small

**Enabled**

| Element                     | Token                                                     | Value                                 |
| --------------------------- | --------------------------------------------------------- | ------------------------------------- |
| Container color             | `md.comp.fab.secondary.small.container.color`             | `md.sys.color.secondary-container`    |
| Container shape             | `md.comp.fab.secondary.small.container.shape`             | `md.sys.shape.corner.medium`          |
| Container width             | `md.comp.fab.secondary.small.container.width`             | 40dp                                  |
| Container height            | `md.comp.fab.secondary.small.container.height`            | 40dp                                  |
| Container elevation         | `md.comp.fab.secondary.small.container.elevation`         | `md.sys.elevation.level3`             |
| Container shadow color      | `md.comp.fab.secondary.small.container.shadow-color`      | `md.sys.color.shadow`                 |
| Lowered container elevation | `md.comp.fab.secondary.small.lowered.container.elevation` | `md.sys.elevation.level1`             |
| Icon size                   | `md.comp.fab.secondary.small.icon.size`                   | 24dp                                  |
| Icon color                  | `md.comp.fab.secondary.small.icon.color`                  | `md.sys.color.on-secondary-container` |

**Hovered**

| Element                     | Token                                                           | Value                                    |
| --------------------------- | --------------------------------------------------------------- | ---------------------------------------- |
| Container elevation         | `md.comp.fab.secondary.small.hover.container.elevation`         | `md.sys.elevation.level4`                |
| Lowered container elevation | `md.comp.fab.secondary.small.lowered.hover.container.elevation` | `md.sys.elevation.level2`                |
| State layer color           | `md.comp.fab.secondary.small.hover.state-layer.color`           | `md.sys.color.on-secondary-container`    |
| State layer opacity         | `md.comp.fab.secondary.small.hover.state-layer.opacity`         | `md.sys.state.hover.state-layer-opacity` |
| Icon color                  | `md.comp.fab.secondary.small.hover.icon.color`                  | `md.sys.color.on-secondary-container`    |

**Focused**

| Element                     | Token                                                           | Value                                       |
| --------------------------- | --------------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color       | `md.comp.fab.secondary.small.focus.indicator.color`             | `md.sys.color.secondary`                    |
| Focus indicator thickness   | `md.comp.fab.secondary.small.focus.indicator.thickness`         | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset      | `md.comp.fab.secondary.small.focus.indicator.outline.offset`    | `md.sys.state.focus-indicator.outer-offset` |
| Container elevation         | `md.comp.fab.secondary.small.focus.container.elevation`         | `md.sys.elevation.level3`                   |
| Lowered container elevation | `md.comp.fab.secondary.small.lowered.focus.container.elevation` | `md.sys.elevation.level1`                   |
| State layer color           | `md.comp.fab.secondary.small.focus.state-layer.color`           | `md.sys.color.on-secondary-container`       |
| State layer opacity         | `md.comp.fab.secondary.small.focus.state-layer.opacity`         | `md.sys.state.focus.state-layer-opacity`    |
| Icon color                  | `md.comp.fab.secondary.small.focus.icon.color`                  | `md.sys.color.on-secondary-container`       |

**Pressed**

| Element                     | Token                                                             | Value                                      |
| --------------------------- | ----------------------------------------------------------------- | ------------------------------------------ |
| Container elevation         | `md.comp.fab.secondary.small.pressed.container.elevation`         | `md.sys.elevation.level3`                  |
| Lowered container elevation | `md.comp.fab.secondary.small.lowered.pressed.container.elevation` | `md.sys.elevation.level1`                  |
| State layer color           | `md.comp.fab.secondary.small.pressed.state-layer.color`           | `md.sys.color.on-secondary-container`      |
| State layer opacity         | `md.comp.fab.secondary.small.pressed.state-layer.opacity`         | `md.sys.state.pressed.state-layer-opacity` |
| Icon color                  | `md.comp.fab.secondary.small.pressed.icon.color`                  | `md.sys.color.on-secondary-container`      |

---

### [Deprecated] FAB — Secondary, Large

**Enabled**

| Element                     | Token                                                     | Value                                 |
| --------------------------- | --------------------------------------------------------- | ------------------------------------- |
| Container color             | `md.comp.fab.secondary.large.container.color`             | `md.sys.color.secondary-container`    |
| Container shape             | `md.comp.fab.secondary.large.container.shape`             | `md.sys.shape.corner.extra-large`     |
| Container width             | `md.comp.fab.secondary.large.container.width`             | 96dp                                  |
| Container height            | `md.comp.fab.secondary.large.container.height`            | 96dp                                  |
| Container elevation         | `md.comp.fab.secondary.large.container.elevation`         | `md.sys.elevation.level3`             |
| Container shadow color      | `md.comp.fab.secondary.large.container.shadow-color`      | `md.sys.color.shadow`                 |
| Lowered container elevation | `md.comp.fab.secondary.large.lowered.container.elevation` | `md.sys.elevation.level1`             |
| Icon size                   | `md.comp.fab.secondary.large.icon.size`                   | 36dp                                  |
| Icon color                  | `md.comp.fab.secondary.large.icon.color`                  | `md.sys.color.on-secondary-container` |

**Hovered**

| Element                     | Token                                                           | Value                                    |
| --------------------------- | --------------------------------------------------------------- | ---------------------------------------- |
| Container elevation         | `md.comp.fab.secondary.large.hover.container.elevation`         | `md.sys.elevation.level4`                |
| Lowered container elevation | `md.comp.fab.secondary.large.lowered.hover.container.elevation` | `md.sys.elevation.level2`                |
| State layer color           | `md.comp.fab.secondary.large.hover.state-layer.color`           | `md.sys.color.on-secondary-container`    |
| State layer opacity         | `md.comp.fab.secondary.large.hover.state-layer.opacity`         | `md.sys.state.hover.state-layer-opacity` |
| Icon color                  | `md.comp.fab.secondary.large.hover.icon.color`                  | `md.sys.color.on-secondary-container`    |

**Focused**

| Element                     | Token                                                           | Value                                       |
| --------------------------- | --------------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color       | `md.comp.fab.secondary.large.focus.indicator.color`             | `md.sys.color.secondary`                    |
| Focus indicator thickness   | `md.comp.fab.secondary.large.focus.indicator.thickness`         | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset      | `md.comp.fab.secondary.large.focus.indicator.outline.offset`    | `md.sys.state.focus-indicator.outer-offset` |
| Container elevation         | `md.comp.fab.secondary.large.focus.container.elevation`         | `md.sys.elevation.level3`                   |
| Lowered container elevation | `md.comp.fab.secondary.large.lowered.focus.container.elevation` | `md.sys.elevation.level1`                   |
| State layer color           | `md.comp.fab.secondary.large.focus.state-layer.color`           | `md.sys.color.on-secondary-container`       |
| State layer opacity         | `md.comp.fab.secondary.large.focus.state-layer.opacity`         | `md.sys.state.focus.state-layer-opacity`    |
| Icon color                  | `md.comp.fab.secondary.large.focus.icon.color`                  | `md.sys.color.on-secondary-container`       |

**Pressed**

| Element                     | Token                                                             | Value                                      |
| --------------------------- | ----------------------------------------------------------------- | ------------------------------------------ |
| Container elevation         | `md.comp.fab.secondary.large.pressed.container.elevation`         | `md.sys.elevation.level3`                  |
| Lowered container elevation | `md.comp.fab.secondary.large.lowered.pressed.container.elevation` | `md.sys.elevation.level1`                  |
| State layer color           | `md.comp.fab.secondary.large.pressed.state-layer.color`           | `md.sys.color.on-secondary-container`      |
| State layer opacity         | `md.comp.fab.secondary.large.pressed.state-layer.opacity`         | `md.sys.state.pressed.state-layer-opacity` |
| Icon color                  | `md.comp.fab.secondary.large.pressed.icon.color`                  | `md.sys.color.on-secondary-container`      |

---

### [Deprecated] FAB — Tertiary, Small

**Enabled**

| Element                     | Token                                                    | Value                                |
| --------------------------- | -------------------------------------------------------- | ------------------------------------ |
| Container color             | `md.comp.fab.tertiary.small.container.color`             | `md.sys.color.tertiary-container`    |
| Container shadow color      | `md.comp.fab.tertiary.small.container.shadow-color`      | `md.sys.color.shadow`                |
| Container elevation         | `md.comp.fab.tertiary.small.container.elevation`         | `md.sys.elevation.level3`            |
| Lowered container elevation | `md.comp.fab.tertiary.small.lowered.container.elevation` | `md.sys.elevation.level1`            |
| Container height            | `md.comp.fab.tertiary.small.container.height`            | 40dp                                 |
| Container shape             | `md.comp.fab.tertiary.small.container.shape`             | `md.sys.shape.corner.medium`         |
| Container width             | `md.comp.fab.tertiary.small.container.width`             | 40dp                                 |
| Icon color                  | `md.comp.fab.tertiary.small.icon.color`                  | `md.sys.color.on-tertiary-container` |
| Icon size                   | `md.comp.fab.tertiary.small.icon.size`                   | 24dp                                 |

**Hovered**

| Element                     | Token                                                          | Value                                    |
| --------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Container elevation         | `md.comp.fab.tertiary.small.hover.container.elevation`         | `md.sys.elevation.level4`                |
| Lowered container elevation | `md.comp.fab.tertiary.small.lowered.hover.container.elevation` | `md.sys.elevation.level2`                |
| State layer color           | `md.comp.fab.tertiary.small.hover.state-layer.color`           | `md.sys.color.on-tertiary-container`     |
| State layer opacity         | `md.comp.fab.tertiary.small.hover.state-layer.opacity`         | `md.sys.state.hover.state-layer-opacity` |
| Icon color                  | `md.comp.fab.tertiary.small.hover.icon.color`                  | `md.sys.color.on-tertiary-container`     |

**Focused**

| Element                     | Token                                                          | Value                                       |
| --------------------------- | -------------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color       | `md.comp.fab.tertiary.small.focus.indicator.color`             | `md.sys.color.secondary`                    |
| Focus indicator thickness   | `md.comp.fab.tertiary.small.focus.indicator.thickness`         | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset      | `md.comp.fab.tertiary.small.focus.indicator.outline.offset`    | `md.sys.state.focus-indicator.outer-offset` |
| Container elevation         | `md.comp.fab.tertiary.small.focus.container.elevation`         | `md.sys.elevation.level3`                   |
| Lowered container elevation | `md.comp.fab.tertiary.small.lowered.focus.container.elevation` | `md.sys.elevation.level1`                   |
| State layer color           | `md.comp.fab.tertiary.small.focus.state-layer.color`           | `md.sys.color.on-tertiary-container`        |
| State layer opacity         | `md.comp.fab.tertiary.small.focus.state-layer.opacity`         | `md.sys.state.focus.state-layer-opacity`    |
| Icon color                  | `md.comp.fab.tertiary.small.focus.icon.color`                  | `md.sys.color.on-tertiary-container`        |

**Pressed**

| Element                     | Token                                                            | Value                                      |
| --------------------------- | ---------------------------------------------------------------- | ------------------------------------------ |
| Container elevation         | `md.comp.fab.tertiary.small.pressed.container.elevation`         | `md.sys.elevation.level3`                  |
| Lowered container elevation | `md.comp.fab.tertiary.small.lowered.pressed.container.elevation` | `md.sys.elevation.level1`                  |
| State layer color           | `md.comp.fab.tertiary.small.pressed.state-layer.color`           | `md.sys.color.on-tertiary-container`       |
| State layer opacity         | `md.comp.fab.tertiary.small.pressed.state-layer.opacity`         | `md.sys.state.pressed.state-layer-opacity` |
| Icon color                  | `md.comp.fab.tertiary.small.pressed.icon.color`                  | `md.sys.color.on-tertiary-container`       |

---

### [Deprecated] FAB — Tertiary, Large

**Enabled**

| Element                     | Token                                                    | Value                                |
| --------------------------- | -------------------------------------------------------- | ------------------------------------ |
| Container color             | `md.comp.fab.tertiary.large.container.color`             | `md.sys.color.tertiary-container`    |
| Container shadow color      | `md.comp.fab.tertiary.large.container.shadow-color`      | `md.sys.color.shadow`                |
| Container elevation         | `md.comp.fab.tertiary.large.container.elevation`         | `md.sys.elevation.level3`            |
| Lowered container elevation | `md.comp.fab.tertiary.large.lowered.container.elevation` | `md.sys.elevation.level1`            |
| Container height            | `md.comp.fab.tertiary.large.container.height`            | 96dp                                 |
| Container shape             | `md.comp.fab.tertiary.large.container.shape`             | `md.sys.shape.corner.extra-large`    |
| Container width             | `md.comp.fab.tertiary.large.container.width`             | 96dp                                 |
| Icon color                  | `md.comp.fab.tertiary.large.icon.color`                  | `md.sys.color.on-tertiary-container` |
| Icon size                   | `md.comp.fab.tertiary.large.icon.size`                   | 36dp                                 |

**Hovered**

| Element                     | Token                                                          | Value                                    |
| --------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Container elevation         | `md.comp.fab.tertiary.large.hover.container.elevation`         | `md.sys.elevation.level4`                |
| Lowered container elevation | `md.comp.fab.tertiary.large.lowered.hover.container.elevation` | `md.sys.elevation.level2`                |
| State layer color           | `md.comp.fab.tertiary.large.hover.state-layer.color`           | `md.sys.color.on-tertiary-container`     |
| State layer opacity         | `md.comp.fab.tertiary.large.hover.state-layer.opacity`         | `md.sys.state.hover.state-layer-opacity` |
| Icon color                  | `md.comp.fab.tertiary.large.hover.icon.color`                  | `md.sys.color.on-tertiary-container`     |

**Focused**

| Element                     | Token                                                          | Value                                       |
| --------------------------- | -------------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color       | `md.comp.fab.tertiary.large.focus.indicator.color`             | `md.sys.color.secondary`                    |
| Focus indicator thickness   | `md.comp.fab.tertiary.large.focus.indicator.thickness`         | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset      | `md.comp.fab.tertiary.large.focus.indicator.outline.offset`    | `md.sys.state.focus-indicator.outer-offset` |
| Container elevation         | `md.comp.fab.tertiary.large.focus.container.elevation`         | `md.sys.elevation.level3`                   |
| Lowered container elevation | `md.comp.fab.tertiary.large.lowered.focus.container.elevation` | `md.sys.elevation.level1`                   |
| State layer color           | `md.comp.fab.tertiary.large.focus.state-layer.color`           | `md.sys.color.on-tertiary-container`        |
| State layer opacity         | `md.comp.fab.tertiary.large.focus.state-layer.opacity`         | `md.sys.state.focus.state-layer-opacity`    |
| Icon color                  | `md.comp.fab.tertiary.large.focus.icon.color`                  | `md.sys.color.on-tertiary-container`        |

**Pressed**

| Element                     | Token                                                            | Value                                      |
| --------------------------- | ---------------------------------------------------------------- | ------------------------------------------ |
| Container elevation         | `md.comp.fab.tertiary.large.pressed.container.elevation`         | `md.sys.elevation.level3`                  |
| Lowered container elevation | `md.comp.fab.tertiary.large.lowered.pressed.container.elevation` | `md.sys.elevation.level1`                  |
| State layer color           | `md.comp.fab.tertiary.large.pressed.state-layer.color`           | `md.sys.color.on-tertiary-container`       |
| State layer opacity         | `md.comp.fab.tertiary.large.pressed.state-layer.opacity`         | `md.sys.state.pressed.state-layer-opacity` |
| Icon color                  | `md.comp.fab.tertiary.large.pressed.icon.color`                  | `md.sys.color.on-tertiary-container`       |

---

### [Deprecated] FAB — Surface, Small

**Enabled**

| Element                     | Token                                                     | Value                                 |
| --------------------------- | --------------------------------------------------------- | ------------------------------------- |
| Container color             | `md.fab.surface.small.container.color`                    | `md.sys.color.surface-container-high` |
| Lowered container color     | `md.fab.surface.small.lowered.container.color`            | `md.sys.color.surface-container-low`  |
| Container shape             | `md.fab.surface.small.container.shape`                    | `md.sys.shape.corner.medium`          |
| Container width             | `md.fab.surface.small.container.width`                    | 40dp                                  |
| Container height            | `md.fab.surface.small.container.height`                   | 40dp                                  |
| Container elevation         | `md.fab.surface.small.container.elevation`                | `md.sys.elevation.level3`             |
| Surface tint layer color    | `md.fab.surface.small.container.surface-tint-layer.color` | `md.sys.color.surface-tint`           |
| Container shadow color      | `md.fab.surface.small.container.shadow-color`             | `md.sys.color.shadow`                 |
| Lowered container elevation | `md.fab.surface.small.lowered.container.elevation`        | `md.sys.elevation.level1`             |
| Icon size                   | `md.fab.surface.small.icon.size`                          | 24dp                                  |
| Icon color                  | `md.fab.surface.small.icon.color`                         | `md.sys.color.primary`                |

**Hovered**

| Element                     | Token                                                    | Value                                    |
| --------------------------- | -------------------------------------------------------- | ---------------------------------------- |
| Container elevation         | `md.fab.surface.small.hover.container.elevation`         | `md.sys.elevation.level4`                |
| Lowered container elevation | `md.fab.surface.small.lowered.hover.container.elevation` | `md.sys.elevation.level2`                |
| State layer color           | `md.fab.surface.small.hover.state-layer.color`           | `md.sys.color.primary`                   |
| State layer opacity         | `md.fab.surface.small.hover.state-layer.opacity`         | `md.sys.state.hover.state-layer-opacity` |
| Icon color                  | `md.fab.surface.small.hover.icon.color`                  | `md.sys.color.primary`                   |

**Focused**

| Element                     | Token                                                    | Value                                       |
| --------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color       | `md.fab.surface.small.focus.indicator.color`             | `md.sys.color.secondary`                    |
| Focus indicator thickness   | `md.fab.surface.small.focus.indicator.thickness`         | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset      | `md.fab.surface.small.focus.indicator.outline.offset`    | `md.sys.state.focus-indicator.outer-offset` |
| Container elevation         | `md.fab.surface.small.focus.container.elevation`         | `md.sys.elevation.level3`                   |
| Lowered container elevation | `md.fab.surface.small.lowered.focus.container.elevation` | `md.sys.elevation.level1`                   |
| State layer color           | `md.fab.surface.small.focus.state-layer.color`           | `md.sys.color.primary`                      |
| State layer opacity         | `md.fab.surface.small.focus.state-layer.opacity`         | `md.sys.state.focus.state-layer-opacity`    |
| Icon color                  | `md.fab.surface.small.focus.icon.color`                  | `md.sys.color.primary`                      |

**Pressed**

| Element                     | Token                                                      | Value                                      |
| --------------------------- | ---------------------------------------------------------- | ------------------------------------------ |
| Container elevation         | `md.fab.surface.small.pressed.container.elevation`         | `md.sys.elevation.level3`                  |
| Lowered container elevation | `md.fab.surface.small.lowered.pressed.container.elevation` | `md.sys.elevation.level1`                  |
| State layer color           | `md.fab.surface.small.pressed.state-layer.color`           | `md.sys.color.primary`                     |
| State layer opacity         | `md.fab.surface.small.pressed.state-layer.opacity`         | `md.sys.state.pressed.state-layer-opacity` |
| Icon color                  | `md.fab.surface.small.pressed.icon.color`                  | `md.sys.color.primary`                     |

---

### [Deprecated] FAB — Surface, Large

**Enabled**

| Element                     | Token                                                          | Value                                 |
| --------------------------- | -------------------------------------------------------------- | ------------------------------------- |
| Container color             | `md.comp.fab.surface.large.container.color`                    | `md.sys.color.surface-container-high` |
| Lowered container color     | `md.comp.fab.surface.large.lowered.container.color`            | `md.sys.color.surface-container-low`  |
| Container shape             | `md.comp.fab.surface.large.container.shape`                    | `md.sys.shape.corner.extra-large`     |
| Container width             | `md.comp.fab.surface.large.container.width`                    | 96dp                                  |
| Container height            | `md.comp.fab.surface.large.container.height`                   | 96dp                                  |
| Container elevation         | `md.comp.fab.surface.large.container.elevation`                | `md.sys.elevation.level3`             |
| Surface tint layer color    | `md.comp.fab.surface.large.container.surface-tint-layer.color` | `md.sys.color.surface-tint`           |
| Container shadow color      | `md.comp.fab.surface.large.container.shadow-color`             | `md.sys.color.shadow`                 |
| Lowered container elevation | `md.comp.fab.surface.large.lowered.container.elevation`        | `md.sys.elevation.level1`             |
| Icon size                   | `md.comp.fab.surface.large.icon.size`                          | 36dp                                  |
| Icon color                  | `md.comp.fab.surface.large.icon.color`                         | `md.sys.color.primary`                |

**Hovered**

| Element                     | Token                                                         | Value                                    |
| --------------------------- | ------------------------------------------------------------- | ---------------------------------------- |
| Container elevation         | `md.comp.fab.surface.large.hover.container.elevation`         | `md.sys.elevation.level4`                |
| Lowered container elevation | `md.comp.fab.surface.large.lowered.hover.container.elevation` | `md.sys.elevation.level2`                |
| State layer color           | `md.comp.fab.surface.large.hover.state-layer.color`           | `md.sys.color.primary`                   |
| State layer opacity         | `md.comp.fab.surface.large.hover.state-layer.opacity`         | `md.sys.state.hover.state-layer-opacity` |
| Icon color                  | `md.comp.fab.surface.large.hover.icon.color`                  | `md.sys.color.primary`                   |

**Focused**

| Element                     | Token                                                         | Value                                       |
| --------------------------- | ------------------------------------------------------------- | ------------------------------------------- |
| Focus indicator color       | `md.comp.fab.surface.large.focus.indicator.color`             | `md.sys.color.secondary`                    |
| Focus indicator thickness   | `md.comp.fab.surface.large.focus.indicator.thickness`         | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset      | `md.comp.fab.surface.large.focus.indicator.outline.offset`    | `md.sys.state.focus-indicator.outer-offset` |
| Container elevation         | `md.comp.fab.surface.large.focus.container.elevation`         | `md.sys.elevation.level3`                   |
| Lowered container elevation | `md.comp.fab.surface.large.lowered.focus.container.elevation` | `md.sys.elevation.level1`                   |
| State layer color           | `md.comp.fab.surface.large.focus.state-layer.color`           | `md.sys.color.primary`                      |
| State layer opacity         | `md.comp.fab.surface.large.focus.state-layer.opacity`         | `md.sys.state.focus.state-layer-opacity`    |
| Icon color                  | `md.comp.fab.surface.large.focus.icon.color`                  | `md.sys.color.primary`                      |

**Pressed**

| Element                     | Token                                                           | Value                                      |
| --------------------------- | --------------------------------------------------------------- | ------------------------------------------ |
| Container elevation         | `md.comp.fab.surface.large.pressed.container.elevation`         | `md.sys.elevation.level3`                  |
| Lowered container elevation | `md.comp.fab.surface.large.lowered.pressed.container.elevation` | `md.sys.elevation.level1`                  |
| State layer color           | `md.comp.fab.surface.large.pressed.state-layer.color`           | `md.sys.color.primary`                     |
| State layer opacity         | `md.comp.fab.surface.large.pressed.state-layer.opacity`         | `md.sys.state.pressed.state-layer-opacity` |
| Icon color                  | `md.comp.fab.surface.large.pressed.icon.color`                  | `md.sys.color.primary`                     |

---

## M2 → M3 Differences

<table><tr>
<td><img src="https://lh3.googleusercontent.com/biMTAbEZ8apVSF9QNSr9S8V1F1DCCRCRckdBmlU0g9XLCrNJMwkw_cbBk_gvb6b0JbaulKKD9lAeDTQp4h3sZK5yKXP0CrSWlefMrFoTxK3T=s0" /><br/><b>M2:</b> Circular shape, always has a drop shadow</td>
<td><img src="https://lh3.googleusercontent.com/eSZyi5bl8kk_aCpEVo6DV_KiYuZ3i_rEVB9y7rWbFd5SSILeUBlvQ3n2ztYzvPSTe1fyMK0LKDD_axvANAOOt6VLnf4GoSbWWSKy3j9bcRI=s0" /><br/><b>M3:</b> Squared shape, dynamic color support, new large FAB variant</td>
</tr></table>

| Aspect    | M2                     | M3                                      |
| --------- | ---------------------- | --------------------------------------- |
| Shape     | Circular               | Rounded square                          |
| Shadow    | Always present         | Elevation-based                         |
| Color     | Static                 | Dynamic color support                   |
| Sizes     | FAB, Mini FAB          | FAB, Medium FAB, Large FAB              |
| Small FAB | Mini FAB (recommended) | Small FAB (deprecated, not recommended) |

## M3 Expressive Update

**May 2025** — The FAB received new sizes and color options:

- Added **medium FAB** size
- **Small FAB** is no longer recommended
- FAB and Large FAB sizes are unchanged
- Variants are now based on **size**, not color
- Added tone color styles: primary, secondary, tertiary
- Renamed existing tonal styles to match token names: primary → **primary container**, secondary → **secondary container**, tertiary → **tertiary container** (values unchanged)
- **Surface** color FABs are no longer recommended
