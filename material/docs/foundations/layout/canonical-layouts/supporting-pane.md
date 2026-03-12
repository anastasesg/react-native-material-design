---
url: https://m3.material.io/foundations/layout/canonical-layouts/supporting-pane
crawled_at: 2026-02-03T00:00:00.000Z
category: foundations
section: layout
page_type: guidelines
status: complete
---

# Canonical layouts

Canonical layouts are designs for common screen layouts across all window size classes

The supporting pane layout organizes content into primary and secondary areas.

The primary area occupies the majority of the body area and contains the main content. The secondary area contains supporting content.

Key use cases for supporting pane layouts include:

- Productivity
- Document editing and commenting
- Content and media browsing

![A video app has the main content in the primary area and "up next" content is listed in the secondary area.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxyhnbqz-1.png?alt=media&token=d9360086-e3e5-438c-9339-e41e20ce2c4d=s0)

_Video app using a supporting pane layout_

## Usage

Use the supporting pane layout when the secondary content is only meaningful in relation to the primary content.

For content with a parent-child relationship, use a list-detail view layout instead.

![The supporting pane has vertically stacked cards.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxyhojow-2.png?alt=media&token=c4c61a9d-aa0f-400c-927a-106fbc7d6844=s0)

_Simplified diagram of a supporting pane layout_

## Dividing space

The screen is divided between a focus pane and a supporting pane.

Depending on the window size class, the supporting pane may appear below or beside the focus pane.

![The cards of a supporting pane scroll horizontally across the bottom of the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxyhp6m0-3.png?alt=media&token=20e40667-3355-470a-9658-a0bf43a30ab5=s0)

_Diagram of a supporting pane positioned below the primary focus area_

| Supporting pane placement | Pane width | Window size class |
| --- | --- | --- |
| Below | Flexible | Compact or Medium |
| Left-side or right-side | Fixed (360 dp) | Expanded |

## Across window size classes

### Compact

The supporting pane should appear below the focus pane.

A bottom sheet can be useful for keeping focus on the primary pane while providing access to supporting information.

![2 layouts showing the bottom sheets in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxyhpzw3-4.png?alt=media&token=a91423c2-0408-42ce-82f4-6df4a65e4e77=s0)

_Supporting pane below the primary focus pane in compact layouts_

### Medium

The supporting pane should appear below the focus pane

![The cards of a supporting pane are horizontal across the bottom of a medium window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxyhqw1v-5.png?alt=media&token=1a4f6d1d-93bc-4359-a95a-3905c3ade09c=s0)

_Supporting pane below the primary focus pane in medium layout_

### Expanded

The supporting pane should appear on the left or right side of the focus pane

![The supporting pane is to the right of the primary focus pane in expanded windows.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxyhrsua-6.png?alt=media&token=bdacc60f-907c-4694-9cd8-3cad7f249476=s0)

_Supporting pane at the trailing end of the primary focus pane in expanded layouts_
