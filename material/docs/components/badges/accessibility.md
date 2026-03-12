---
url: https://m3.material.io/components/badges/accessibility
lastmod: 2025-12-01
crawled_at: 2026-02-03T00:00:00.000Z
category: components
section: badges
page_type: accessibility
status: complete
---

# Badges

Badges show notifications, counts, or status information on navigation items and icons.

## Use cases

People should be able to use assistive technology to:

- Understand the dynamic information conveyed in badges, such as counts or labels
- Address badge announcements by selecting corresponding navigation destinations

## Interaction & style

Badges are most commonly used within other components, such as navigation bar, navigation rail, app bars, and tabs.

When a badge is used to indicate an unread notification, the badge gets hidden once it's selected.

## Visual indicators

Badges use a color intended to stand out against labels, icons, and navigation elements. Use the default color mapping to avoid color conflict issues.

![Diagram of large and small badges showing that they need to pass 3 to 1 contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0x2h51-02_do.png?alt=media&token=b6d4a7a7-0b46-4a00-84a8-96265cf1ef4b=s0)

_Do: Badges must use default color with at least 3:1 contrast_

![Diagram of large and small badges not passing 3 to 1 contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0x2kti-03_dont.png?alt=media&token=5c3e26cc-09ca-4769-9f83-701d6e8d83cb=s0)

_Don't: Avoid using custom color roles for the badge container and label text. If custom roles are necessary, make sure they have contrast of at least 3:1._

## Labeling elements

The accessibility label for a badge item will be read after its navigation destination. Any numerical badges will have their number read, while non-counting badges will simply announce **New notification**.

![Navigation bar highlighting numerical badge.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8l8lhl-04.png?alt=media&token=99d7e919-9bb3-45ed-a8b9-b961d31ef91c=s0)

_Numerical badges will have their number read_

![Navigation bar highlighting non-counting badge.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8l9na6-05.png?alt=media&token=096422e0-2079-4674-8f91-1adb36552e46=s0)

_Non-counting badges will simply announce **New notification**_
