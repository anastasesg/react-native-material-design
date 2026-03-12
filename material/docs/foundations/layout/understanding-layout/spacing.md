---
url: https://m3.material.io/foundations/layout/understanding-layout/spacing
crawled_at: 2026-02-03T00:00:00.000Z
category: foundations
section: layout
page_type: guidelines
status: complete
---

# Layout basics

Layout is the visual arrangement of elements on the screen

## Grouping

Grouping is a method for connecting related elements that share a context, such as an image grouped with a caption. It visually relates elements and establishes boundaries to differentiate unrelated elements.

![Photo of dumplings with a caption reading "restaurants in the area"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwwvqdk-1.png?alt=media&token=ee88043a-8222-4c39-912f-f0b6336ee653=s0)

_By placing a caption under an image this composition shows an explicit group_

**Explicit grouping** uses visual boundaries such as outlines, dividers, and shadows to group related elements in an enclosed area. Explicit grouping can also indicate that an item is interactive, such as list items contained between dividers, or a card displaying an image and its caption.

![Container of a contact grouped with photo and caption](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwwxa8g-2.png?alt=media&token=62385ee2-6bc3-492b-a60b-db12f75d2580=s0)

_The elements in this card are explicitly grouped_

**Implicit grouping** uses close proximity and open space (rather than lines and shadows) to group related items. For example, a headline closely followed by a subhead and thumbnail image are implicitly grouped together by proximity and separated from other headline-subhead-thumbnail groups by open space.

![Carousel of images](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwwyais-3.png?alt=media&token=1f6813ec-a502-4adb-abd9-7cb648575f45=s0)

_Images in a carousel are grouped by their proximity_

## Margins

Margins are the spaces between the edge of a window area and the elements within that window area.

Margin widths are defined using fixed or scaling values for each window size class. To better adapt to the window, the margin width can change at different breakpoints. Wider margins are more appropriate for larger screens, as they create more open space around the perimeter of content.

See margin measurements for each window class: compact, medium, expanded, large, and extra-large.

![Screen highlighting vertical blue margin on left side of screen](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwx04xw-1.png?alt=media&token=3a716354-4106-42c6-920c-3692da759a86=s0)

_A margin separates the edge of the screen from the elements on the screen_

## Spacers

A spacer refers to the space between two panes in a layout. Spacers measure 24dp wide.

![Screen highlighting vertical blue spacer between two panes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwx1ijr-5.png?alt=media&token=ab82125d-28cd-4500-a322-fd4c9606dd3c=s0)

_A spacer splits two panes from each other_

A spacer can contain a drag handle that adjusts the size and layout of the panes. The handle's touch target slightly overlaps the panes.

![Pane drag handle touch target overlapping two panes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwx2hj1-6.png?alt=media&token=697c271a-165d-4dbd-af2b-e98b49b4a95d=s0)

_Drag handle touch target_

## Padding

Padding refers to the space between UI elements. Padding can be measured vertically and horizontally and does not need to span the entire height or width of a layout. Padding is measured in increments of 4dp.

![Full screen-width photo with padding below it and text below the padding](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxwx3xmp-3.png?alt=media&token=f9885d4f-f041-4a92-b7ea-2179ea08c0ab=s0)

_Padding separates a headline from an image above_
