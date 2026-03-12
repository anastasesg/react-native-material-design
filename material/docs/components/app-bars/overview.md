---
url: https://m3.material.io/components/app-bars/overview
lastmod: 2025-09-26
crawled_at: 2026-03-09T14:17:00.000Z
category: components
section: app-bars
page_type: overview
status: complete
---

# App bars

App bars are placed at the top of the screen to help people navigate through a product.

- Focus on describing the current page and provide 1-2 essential actions
- Displays labels and page navigation controls at the top of the page. (Use a toolbar to display page actions)
- Four variants: Search app bar, small, medium flexible, large flexible
- On scroll, apply a fill color to separate from body content
- Can animate on and off screen with another bar of controls, like a row of chips

![4 configurations of app bars stacked vertically to show differences.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaaqdf2b-01.png?alt=media&token=84877227-b485-453e-9c03-2cfa90804f16=s0)

_Search app bar, Small, Medium flexible, Large flexible_

## Availability & resources

| Type           | Resource                    | Status      |
| -------------- | --------------------------- | ----------- |
| Design         | Design Kit (Figma)          | Available   |
| Implementation | Flutter                     | Available   |
| Implementation | Jetpack Compose             | Available   |
| Implementation | Jetpack Compose: Expressive | Available   |
| Implementation | MDC-Android                 | Available   |
| Implementation | MDC-Android: Expressive     | Available   |
| Implementation | Web                         | Unavailable |
| Implementation | Web: Expressive             | Unavailable |

## M3 Expressive update

**May 2025**

The new **search app bar** supports icons inside and outside the search bar, and centered text. It opens the [search view](https://m3.material.io/m3/pages/search/overview) component when selected.

The new **medium flexible** and **large flexible** app bars come with significant improvements, and should replace **medium** and **large** app bars, which are no longer recommended. The **small** app bar is updated with the same flexible improvements.

[More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Renamed component from **top app bar** to **app bar**
- Added **search app bar**
- **Medium** and **large** app bars are no longer recommended
- Added **medium flexible** and **large flexible** app bars with:
  - Reduced overall height
  - Larger title text
  - Subtitle
  - Left- and center-aligned text options
  - Text wrapping
  - More flexible elements for imagery and filled buttons
- Added features to small app bar:
  - Subtitle
  - Center-aligned text option
  - More flexible elements for imagery and filled buttons

![4 total app bar configurations.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaaqwfpb-02.png?alt=media&token=5fc31321-b709-4306-98fb-d694c1edd553=s0)

_Search app bar, Small, Medium flexible, Large flexible_

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- On scroll: No drop shadow, instead a color fill creates separation from content
- Typography: Larger default text
- Layout: Smaller default height

![M2 top app bar with bold color difference from main content.](https://lh3.googleusercontent.com/8XdaluKL6rJmftJSrmkBLFHeyi3JPh2nbX4NS3L5qoLKGn4MKG7fgIGC61ApY_OiX9e07jci7rN35i921_mJEwTAoSLgKGCbYZQqN8VzzuH8bQ=s0)

_M2: Bold contrasting colors separate the top app bar from the content beneath_

![M3 app bar with subtle color difference from main content.](https://lh3.googleusercontent.com/p3cGZ4ZR0WpFGvMg9s3onHVlANWhdEkOzstW_hKbC0eD4pWRtI1bJ2saZP4B8H-GNRyn5aGRdbmagCXX-9PJC7OdtTn9ir9pALGlsn9OdKw=s0)

_M3: On scroll, a color fill overlay separates the app bar from the content beneath_
