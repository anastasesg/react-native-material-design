---
url: https://m3.material.io/components/bottom-sheets/overview
lastmod: 2026-01-26
crawled_at: 2026-02-03T12:00:00.000Z
category: components
section: bottom-sheets
page_type: overview
status: complete
---

# Bottom sheets

Bottom sheets show secondary content anchored to the bottom of the screen.

- Use bottom sheets in compact and medium window sizes
- Two variants: standard and modal
- Content should be additional or secondary (not the app's main content)
- Bottom sheets can be dismissed in order to interact with the main content

![Side by side view of standard bottom sheet modal bottom sheet](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp3m82k-1.png?alt=media&token=57a51bb9-a0b7-40f2-b057-0afe7d122a59=s0)

_Standard bottom sheet, Modal bottom sheet_

## Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | | |
| | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460) | Available |
| Implementation | | |
| | [Flutter](https://api.flutter.dev/flutter/material/BottomSheet-class.html) | Available |
| | [MDC-Android](https://github.com/material-components/material-components-android/blob/master/docs/components/BottomSheet.md) | Available |
| | [Jetpack Compose](https://developer.android.com/develop/ui/compose/components/bottom-sheets) | Available |
| | Web | Unavailable |

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Shape: Bottom sheets have a 28dp top corner radius
- Layout: New max-width of 640dp and an optional drag handle with an accessible 48dp hit target

![Diagram of floating sheet set on screen background](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp3mrmz-2.png?alt=media&token=156bba60-2635-4d1e-a928-cd2e4012f499=s0)
