---
url: https://m3.material.io/components/search/overview
lastmod: '2026-01-26'
crawled_at: '2026-03-08T11:23:00.000Z'
category: components
section: search
page_type: overview
status: complete
---

# Search

Search lets people enter a keyword or phrase to get relevant information

- Use search for navigating a product with queries
- A search bar can include a leading search icon, hinted search text, and optional trailing icons
- Search can display suggested keywords or phrases as a person types
- A search bar displays search suggestions or results in a list
- Use a search app bar to provide an emphasized, global entry-point

<!-- Video: When inputting text, search suggestions or results appear below the search bar -->

_When inputting text, search suggestions or results appear below the search bar_

## Availability & resources

| Type           | Resource                    | Status      |
| -------------- | --------------------------- | ----------- |
| Design         |                             |             |
|                | Design Kit (Figma)          | Available   |
| Implementation |                             |             |
|                | MDC-Android                 | Available   |
|                | MDC-Android Expressive      | Unavailable |
|                | Flutter                     | Available   |
|                | Jetpack Compose             | Available   |
|                | Jetpack Compose: Expressive | Available   |
|                | Web                         | Unavailable |
|                | Web: Expressive             | Unavailable |

## M3 Expressive update

Search has a new visual style, motion, and more flexibility for trailing icons. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

**February 2025**

Naming

- Search bar and search view are now collectively named **search**

Configurations

- Styles: Search can be contained (recommended) or divided
- Gaps can separate results into groups

Motion

- The search bar grows wider when focused

Supported platforms:

- [Jetpack Compose](<https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#SearchBar(androidx.compose.material3.SearchBarState,kotlin.Function0,androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Shape,androidx.compose.material3.SearchBarColors,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp)>)

<!-- Video: The contained search style features a persistent, filled search container -->

_The **contained** search style features a persistent, filled search container_

## Differences from M2 to M3 baseline

- Color: New color mappings and compatibility with dynamic color
- Elevation: Lower elevation and no shadow by default
- Name: Search was formerly known as open search bar
- Variants: Two official variants of search components: search bar and search view

![M2 open search bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlb1gn7s-04.png?alt=media&token=dc445e20-469e-40b2-9175-8d198effc998=s0)

_M2 open search bars were square and elevated_

![M3 search bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlb1hcrs-05.png?alt=media&token=ae55f13c-75fb-4b39-bc09-f503ea5b156a=s0)

_M3 search bars are rounded, use tonal surface, and support dynamic color_
