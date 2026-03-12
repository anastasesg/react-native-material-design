---
url: https://m3.material.io/foundations/layout/canonical-layouts/feed
crawled_at: 2026-02-03T00:00:00.000Z
category: foundations
section: layout
page_type: guidelines
status: complete
---

# Canonical layouts - Feed

Canonical layouts are designs for common screen layouts across all window size classes.

A feed layout uses a grid composition to enable quick content browsing and discovery.

Key use cases for the feed layout include:

- News
- Photos
- Social media

![Photo app using a feed layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxydmkqj-1.png?alt=media&token=77c3c746-4fc8-4725-a343-17c7f2b0072d=s0)

_Photo app using a feed layout_

## Usage

Use a feed layout to show different pieces of content through cards and lists.

Feeds support displays of almost any size as grids can adapt from single to multi-column.

![The news feed has 1 column in a compact window class, and 2 columns in the medium window class.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxydny00-2.png?alt=media&token=a70edcf6-4a1e-4b88-9a45-f43c34a6bf75=s0)

_Example news apps using a feed layout for compact and medium window size classes_

## Dividing space

A feed composition is flexible enough to allow for content with varying proportions and sizing.

![Feed layout in a medium window size with 2 columns and left navigation rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxydoo2v-3.png?alt=media&token=e2a74a4f-624f-4506-829c-e04c9bb0fcda=s0)

_Example feed layout with two columns_

Use size and position to establish relationships among content elements.

Feed items should reflow when the amount of available space changes, such as rotating or unfolding a device, or entering a multi-window mode.

The order of items is determined by their position. Learn more about [cards responsive layout guidance](https://m3.material.io/m3/pages/cards/guidelines#99e8d17d-5bde-4bb9-8784-0ca403325b10).

![The graphic for the lead article is prominent on a news feed with 2 columns.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxydpeoi-4.png?alt=media&token=18ea64f6-5ee3-4904-bfe0-2c20fe73db83=s0)

_News app with a feed layout using two columns_

## Across window size classes

### Compact

A feed layout will stack vertically like a list of cards, with individual items taking up the width of the pane, but not necessarily the full height.

![In compact windows, the cards in a feed stack vertically, fitting to full width but not full height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxydqtn2-5.png?alt=media&token=ec5ceb39-4c21-4572-8a4c-16531d9c8742=s0)

_Cards in two feed layouts for compact window size class_

### Medium

A feed layout can support components with different widths and be split across multiple columns.

![In a medium window, 2 equal width columns of cards in a feed layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxydtfa9-6.png?alt=media&token=29871b84-7a76-40e4-8c81-10e33b37f4bb=s0)

_Navigation bar and cards in a feed layout for medium window size class_

### Expanded, large, and extra-large

A feed layout can support components with different widths and be split across multiple columns. The number of columns of content should usually increase for expanded window size classes.

![In an expanded window, 3 equal width columns of cards in a feed layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxydueo2-7.png?alt=media&token=43a01e2a-1d56-4d9b-870d-61823e01517a=s0)

_The number of columns increased from two to three in the expanded window size class_

## Behavior

Feed items should reflow when the amount of available space changes, such as rotating or unfolding a device, or entering a multi-window mode. The order of items is determined by their position. Learn more about [cards responsive layout guidance](https://m3.material.io/m3/pages/cards/guidelines#99e8d17d-5bde-4bb9-8784-0ca403325b10).
