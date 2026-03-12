---
url: https://m3.material.io/components/extended-fab/overview
lastmod: 2025-09-26
crawled_at: 2026-02-04T12:00:00.000Z
category: components
section: extended-fab
page_type: overview
status: complete
---

# Extended FABs

- Use for the most common or important action on a screen
- Three sizes: small, medium, and large
- Use instead of FAB when label text is needed to understand action

![3 extended fab sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0df17xu-01.png?alt=media&token=06dfec2a-47be-4659-a524-86f136cec764=s0)

_Small extended FAB, Medium extended FAB, Large extended FAB_

## Availability & resources

| Type           | Resource                    | Status      |
|----------------|-----------------------------|-------------|
| Design         | Design Kit (Figma)          | Available   |
| Implementation | Flutter                     | Available   |
| Implementation | Jetpack Compose             | Available   |
| Implementation | Jetpack Compose: Expressive | Available   |
| Implementation | MDC-Android                 | Available   |
| Implementation | MDC-Android: Expressive     | Available   |
| Implementation | Web                         | Available   |
| Implementation | Web: Expressive             | Unavailable |

## M3 Expressive update

**May 2025**

The extended FAB now has three sizes: small, medium, and large, each with updated type styles. These align with the FAB sizes for an easier transition between FABs. The original extended FAB is being deprecated and should be replaced with the small extended FAB. Surface FABs are also being deprecated. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Types and naming:

- Added new sizes
    - Small: 56dp
    - Medium: 80dp
    - Large: 96dp
- Deprecated
    - Original extended FAB (56dp)
    - Surface extended FAB

Updates:

- Adjusted typography to be larger

![The deprecated original extended FAB and the small, medium, and large extended FABs from the expressive update.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dfanbk-02.png?alt=media&token=3afd57ff-8fac-4df4-9911-8807cc00cd35=s0)

_The original extended FAB is replaced with a set of small, medium, and large extended FABs with new typography_

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Layout: Extended FAB is the same height as the FAB
- Shape: Boxier style with smaller corner radius

![Extended FAB and FAB with the same height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dfcqz6-03.png?alt=media&token=cd0f4d89-6b18-43b7-b7da-558016df7b05=s0)

_The original extended FAB is replaced with a set of small, medium, and large extended FABs with new typography_

![Diagram comparing the M2 FAB and extended FAB.](https://lh3.googleusercontent.com/CLwhLFrMkpEgnOAWORcnTMHBqt8gZ67coHMiSw1taCuxR0nRqasV1w7XWJ50w6ZT6gD6aZql87KrxZHdqiWya-bPwCnZx20ibdoKjagt7kyW9Q=s0)

_M2: Extended FABs are pill-shaped and have a different height and elevation_

![Diagram comparing the M3 FAB and extended FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dff6p3-05.png?alt=media&token=896b601f-21d9-4cae-854f-840ba268dd73=s0)

_M3: Extended FABs share the same height, boxier shape, and simpler elevation model as FABs_
