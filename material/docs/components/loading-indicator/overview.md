---
url: https://m3.material.io/components/loading-indicator/overview
lastmod: 2025-09-26
crawled_at: 2026-03-08T01:37:00.000Z
category: components
section: loading-indicator
page_type: overview
status: complete
---

# Loading indicator

Loading indicators show the progress for a short wait time

- Recommended as a replacement for indeterminate [circular progress indicators](https://m3.material.io/components/progress-indicators/overview)
- Always reflect an ongoing process and are never simply decorative
- Used for pull-to-refresh interactions
- Not used for processes that transition from indeterminate to determinate
- Capture attention through motion

<!-- Video: A looping sequence of morphs between 7 different shapes in a darker color, sitting on a circular background container in lighter color. -->

_Loading indicator / Contained loading indicator_

## Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | | |
| | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460) | Available |
| Implementation | | |
| | [Jetpack Compose: Expressive](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#LoadingIndicator(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,kotlin.collections.List)) | Available |
| | [MDC-Android: Expressive](https://github.com/material-components/material-components-android/blob/master/docs/components/LoadingIndicator.md) | Available |
| | Web: Expressive | Unavailable |

## M3 Expressive update

**May 2025**

The loading indicator is designed to show progress that loads in under five seconds. It should replace most uses of the indeterminate circular progress indicator. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

New component added to catalog.

Loading indicators:

- Are used in pull-to-refresh functionality
- Can be contained or uncontained
- Use shape and motion to capture attention
- Can scale in size

<!-- Video: Loading indicator in news app with pull-to-refresh. -->

_Loading indicators are used in the pull-to-refresh behavior_
