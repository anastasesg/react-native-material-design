---
url: https://m3.material.io/components/chips/overview
lastmod: 2025-09-26
crawled_at: 2026-02-03T00:00:00.000Z
category: components
section: chips
page_type: overview
status: complete
---

# Chips

Chips help people enter information, make selections, filter content, or trigger actions.

- Use chips to show options for a specific context
- Four types: assist, filter, input, and suggestion
- Chip elevation defaults to 0 but can be elevated if they need more visual separation

![4 chip types.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzthj7vk-1.png?alt=media&token=87bf4249-1c98-406e-bf83-32e0e1b6d5a6=s0)

_Assist chip, Filter chip, Input chip, Suggestion chip_

## Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Available |
| Implementation | Jetpack Compose | Available |
| Implementation | MDC-Android | Available |
| Implementation | Web | Available |

## Updates

**Aug 2024**

Updated stroke color from **outline** to **outline variant**.

![A chip with a clear outline is now a chip with a subtle outline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sdpshu-02.png?alt=media&token=66986121-1317-4638-8ba4-3119d622eada=s0)

_The stroke color was softened to improve visual hierarchy between chips and buttons_

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Shape: Rounded rectangle
- Types: Action chips have been separated into assist chips and suggestion chips. Choice chips are now a subset of filter chips

![M2 chip types.](https://lh3.googleusercontent.com/2QvL9BG6dybkEq8-MxokwRvnU_5-Yxey0SZtSxa9o6KlczyP2t5hAtUxTyZRJbGF9i7m6oOrZCWKJT4CQikVZP3D0cxsKj0yYaMJT4QjnE5q=s0)

_M2: Types of chips are input, choice, filter, and action chips_

![M3 chip types.](https://lh3.googleusercontent.com/3W0HJhJSBgfi_3TWYvZlXCPDg42elT_0VwxJmTTK5l61ZFdC9l9mPQPqPcUOBXNIce2r3aDWGNECHLcoe41RXvv2rr1bjDL6BsCCvjkxUto=s0)

_M3: Types of chips updated to assist, filter, input, and suggestion chips_
