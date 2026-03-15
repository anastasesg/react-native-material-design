# Carousel — M3 Component Reference

> Carousels show a collection of items that can be scrolled on and off the screen.

Sources: [Overview](https://m3.material.io/components/carousel/overview) · [Specs](https://m3.material.io/components/carousel/specs) · [Guidelines](https://m3.material.io/components/carousel/guidelines) · [Accessibility](https://m3.material.io/components/carousel/accessibility)

---

## Layouts

Carousels support six layout types, each suited to different content and interaction needs. All layouts can be start-aligned or center-aligned, though center-aligned hero is the most common centered variant.

| Layout                             | Best for                                                                 | Scrolling                  |
| ---------------------------------- | ------------------------------------------------------------------------ | -------------------------- |
| **Multi-browse**                   | Browsing many visual items at once (photos, event feeds)                 | Snap-scrolling recommended |
| **Uncontained**                    | Text-heavy or highly-customized carousels, traditional carousel behavior | Default or snap-scrolling  |
| **Uncontained multi-aspect ratio** | Items of various widths (9:16 to 16:9)                                   | Default or snap-scrolling  |
| **Hero**                           | Spotlighting large visual items (movies, featured apps)                  | Snap-scrolling recommended |
| **Center-aligned hero**            | Centered large visual items with leading/trailing previews               | Snap-scrolling recommended |
| **Full-screen**                    | Immersive experiences (video feeds, featured headlines)                  | Snap-scrolling required    |

![Carousel items adapting dynamically to device size by shrinking and reducing in number.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusb1kq-1.png?alt=media&token=31e0f0e5-44dc-40dc-88a3-810d49d9d32a=s0)

### Multi-browse

The multi-browse layout shows at least one large, medium, and small carousel item. On larger screens, more large and medium items become visible. Snap-scrolling is recommended to keep items recognizable and consistently sized.

Avoid this layout when carousel items need lots of text or have complicated imagery. In compact windows, limit to three items if they contain text — more items are acceptable only if the imagery is simple enough to understand at small sizes.

![4 elements of a multi-browse carousel layout.](https://lh3.googleusercontent.com/evx3sPQvpKArdG4MTkQQCOFPM387eGsABK9x_Ecv_LeJy23RGxJyVZU50_GThcTacMUgP5tuLoPOXRwk3s0QZgpKmJpiEj8pG_kZaAgertAC=s0)

1. Container
2. Large carousel item
3. Medium carousel item
4. Small carousel item

![Carousel on a phone. 2 large, 1 medium, and 1 small item are fully visible but thin. The items don't have text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusga4v-6.png?alt=media&token=79689475-2747-4ee9-839c-b8c1eecba850=s0)

**Caution:** In compact windows, only show more than three items if the items are easy to understand and recognize.

### Uncontained

The uncontained layout resembles a traditional carousel where all items share a single size and flow past the screen edge. Since items don't change size, this layout supports more text or additional UI above or below each item without masking or cropping. Both default and snap-scrolling work well.

![4 elements of an uncontained carousel layout.](https://lh3.googleusercontent.com/p9Q_QbNpwi3QeDBOCZ64MWO3Vm83NIV7SFc6IqJ7BPGlsGidp5FJdTOq4yVq6zCZkqkSf03SLJ2pSEU4vrj7udhaxrBi10bGrtfAWev8AZWU=s0)

1. Container
2. Large carousel item

### Uncontained multi-aspect ratio

Same layout behavior as uncontained, but items can have various widths ranging from 9:16 (minimum) to 16:9 (maximum). Only use this layout when items genuinely have different aspect ratios.

![4 elements of an uncontained carousel layout](https://lh3.googleusercontent.com/FM3l_rU4tOFqCVj-gmDwOG9zyWk279AI0tz5aHQa5hRW5v3P4cS3ydvtXKwZMy_ClxODMX76POePAuI9k_ZsvZfZt3yxWISoKWkbSQhmw1M=s0)

1. Container
2. Carousel item (16:9)
3. Carousel item (9:16)
4. Carousel item (1:1)
5. Carousel item (3:4)

![Items of different widths in an uncontained multi-aspect ratio layout.](https://lh3.googleusercontent.com/fVj4DyPx6HxKN7gxkVrxReCeNppE22Favi2407XaDtWc5AiUxr-xvwqelWFXfRaQ2AayTCiBEwL06duEvTEptd1dEt1FWREyAV1d_2kMAf-MHQ=s0)

### Hero

The hero layout highlights one large item with a small preview of the next item. On larger screens, more large items appear. Use snap-scrolling so users cycle through items one at a time.

![3 elements of a hero carousel layout.](https://lh3.googleusercontent.com/I9ALEx4jwdluVMjRmR2zhTCFVHo3N05uccMHUOXxA1pAD-XMUdr9GNHJPfOT9mkNz862VyWH2ItNhseEOpdJsWv1RI-o6-sxxPuV4UG6coQdDg=s0)

1. Container
2. Large carousel item
3. Small carousel item

![Carousel in a contained layout with a large item and a small item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwur4ddz-3.png?alt=media&token=a42f76c5-c4fd-46fd-89a1-04b492638986=s0)

### Center-aligned hero

Adds an additional previewed item on the leading edge compared to the hero layout, centering the large carousel item between two small items.

![3 elements of a center-aligned hero carousel layout.](https://lh3.googleusercontent.com/4LmjbjezXxY7ctWR2bmLAa35m3No8ErHZO31L0jTLxRBc3ivUMC_DA5rDEEZRILu8VlJLE__deFfvXQxuvJ0hjhAuD4-MLc1D3RVqUF-7g=s0)

1. Container
2. Large carousel item
3. Small carousel item

### Full-screen

The full-screen layout shows one edge-to-edge large item, best for immersive experiences with visually rich content. Works only in portrait orientation on compact and medium windows — don't use in landscape. Text and other UI elements can be overlaid on the image. Snap-scrolling is required; do not use default scrolling.

![2 elements of a full-screen carousel layout.](https://lh3.googleusercontent.com/bn-epGZhbTWJijBRurEco_OYDKB-s-DEYMJgCwj7OSBbLJMEm34yEZY1AaKy2gEKjnMCT--UTHHqR0IOGlwj2p8aaPNPW3zdAENXMy5BwpT0SA=s0)

1. Container
2. Large carousel item

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuspl2g-20-don't.png?alt=media&token=71d2bacf-deaf-4fc7-84f2-7b8f5fd86747=s0" /><br/><b>Don't:</b> Avoid free scrolling on full-screen carousels — items must snap to edges</td>
</tr></table>

---

## Anatomy

![4 elements of a carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwushw0z-11.png?alt=media&token=0ec8f8d6-6910-47b8-af5e-aec914857c5e=s0)

1. **Container** — holds all carousel items; the number of visible items varies by layout and window size class
2. **Large carousel item** — primary content holder with an adjustable max width; must remain big enough to be easily understood
3. **Medium carousel item** — adjusts width dynamically based on carousel size and available space
4. **Small carousel item** — width constrained to 40–56dp, dynamically sized

![4 elements of a carousel (specs).](https://lh3.googleusercontent.com/Bfe7F5i-YHBu3MctH6XdfsSYD1VNZVWrAC2hTpG-vOuHgn1-npiiivwifJe1ddHkbRZxlXtKJuq0GV9ScQUHvelSAEkjsMkWnAUznOdSjSPG=s0)

### Container

The carousel container is a rectangle that can be stretched to any size. It holds all carousel items.

![An empty rectangle representing a carousel container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusikhn-12.png?alt=media&token=e53338c0-9e12-4500-a02a-6a3fa00a5be7=s0)

### Carousel items

Carousel items have no fixed width — their size changes depending on window size and position within the layout. There are three dynamic size categories:

![3 sizes of carousel items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusj1ii-13.png?alt=media&token=a8d53996-8396-4e21-a972-c74335739543=s0)

1. **Large** — max width is adjustable, affecting how all other items fit on screen
2. **Medium** — width adjusts dynamically to available space
3. **Small** — width range of 40–56dp

![2 sizes of carousel items for hero layouts.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusjjti-14.png?alt=media&token=405ab913-2f35-4d0e-aa46-07e957c4e947=s0)

When the large item's max width is narrow enough, more items appear on screen at once. In compact windows, this is only recommended for carousels with simple imagery.

![3 sizes of carousel items for multi-browse layouts. 2 large items are visible.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuslefr-15.png?alt=media&token=93b132b6-bb28-4e57-9a57-f1c02ac20115=s0)

### Item text (optional)

Carousel items are primarily visual. Text is optional and should be brief — avoid exceeding two lines in compact windows unless the background is simple (e.g., a single color). If items need extensive text, consider the uncontained layout or use cards instead.

Content within a carousel item adapts dynamically to the container and window size. Text should be understandable at each size; use brief labels on smaller items.

![Contained carousel items with 5 lines of content: a title, a description, and a label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusmns4-16.png?alt=media&token=11d776e8-048f-4e1e-81d9-1a265271a7a6=s0)

![A carousel item at 3 different sizes to show how text changes at each size.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusqbrm-17.png?alt=media&token=bcc4c752-6b49-4820-960e-c22af7c9591b=s0)

1. Large carousel item with full title and label text
2. Medium carousel item hiding the title text
3. Small carousel item abbreviating the label text

### Item dynamic widths

All carousel items dynamically adapt to the container width. Large items have a customizable maximum width used to optimally fit items into available space. Small items have a minimum width of 40dp and maximum of 56dp. Items change size as they move through the layout.

![Measurements for a small carousel item.](https://lh3.googleusercontent.com/l_O_4sY-OWT2K7Ot5jY_yhXxSErGV6Cu33URxwXPnt8D6oTDXh3oWlg5utAL2Iw0afdYNvkjpYZzLlsXjeONHtFJIqbO4dCEZO2xTzUvChjV=s0)

---

## Usage & When to Use

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuscosc-3-do.png?alt=media&token=ddae19a2-c2a5-4a4f-a57a-89ebf9924d44=s0" /><br/><b>Do:</b> Size items large enough so images and text are easy to read and recognize</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusd3wu-3-don't.png?alt=media&token=9d93fc2f-8f36-44df-b19e-3b541f3dc539=s0" /><br/><b>Don't:</b> Set items so small that the image isn't recognizable</td>
</tr></table>

- Carousels display a scrollable list of items emphasizing visuals, with optional brief text
- Items must be fully visible on-screen (except for the uncontained layout)
- When scrolled, items automatically resize and snap into place to maintain the layout
- Carousel items have a parallax effect when scrolled — content moves at a different speed than the item
- Items change shape dynamically as they scroll

### Scrolling modes

- **Default scrolling** — items stop anywhere in the container, no snapping. Use only with the uncontained layout.
- **Snap-scrolling** — items align to the layout grid after scrolling. Use with multi-browse, hero, and full-screen layouts.

### Accessibility requirement on scrolling pages

On vertically-scrolling pages, carousels need an accessible way to view all items without horizontal scrolling (this does not apply to full-screen carousels). Material recommends:

- A **Show all** button below the carousel, opening a vertically-scrolling page of all items
- If the carousel has a header, an **arrow icon button** next to the header instead

![Measurements of a "show all" button added below a carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwut0q8v-2.png?alt=media&token=fd99e7b1-4959-4151-a530-a820e6a115f6=s0)

The Show all button should have a padding of 4dp.

![Measurements of an arrow icon button added next to a carousel header.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwut172a-4.png?alt=media&token=79318ca5-9f6e-4973-ba50-09469633894b=s0)

Headers should align with the leading edge, and the arrow icon should be 48dp.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykx1vc-5a-don't.png?alt=media&token=88d824af-cca5-4743-a7f4-5dc1776d152e=s0" /><br/><b>Don't:</b> Add buttons into the carousel container or beside it — place them above or below</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykxhsn-5b-don't.png?alt=media&token=7253d6f2-ad26-4cd6-854c-e5b47725c499=s0" /><br/><b>Don't:</b> Cover carousel with buttons or other UI</td>
</tr></table>

---

## Measurements

### Multi-browse

![Measurements of a multi-browse carousel layout.](https://lh3.googleusercontent.com/Py7GKPNbLAGSs7Zx0w19v21_MWZgZSX5ztGYvSQ8bDM4DeZ-ilsU5Ra3bR2_24qAgkiEn8j7dTfdKO7YGmz8Jfd-cFR80M3rtWzzDt3nwUHtaQ=s0)

| Attribute                | Value                |
| ------------------------ | -------------------- |
| Alignment                | Vertically centered  |
| Leading/trailing padding | 16dp                 |
| Top/bottom padding       | 8dp                  |
| Padding between elements | 8dp                  |
| Large item width         | Dynamic, or user-set |
| Medium item width        | Dynamic              |
| Small item width         | 40–56dp, dynamic     |
| Item corner radius       | 28dp                 |

### Uncontained

![Measurements of an uncontained carousel layout.](https://lh3.googleusercontent.com/kHmHj0O9aT5Nlb2KyOQq6CWd8sRWmGjzg3TMKEzoHQLd9OG08KSdrH7g3vUxMkGebXOb17s3kAT6fh16dVWyzKDJrBkuFIedIZpi3H1rGBmtbg=s0)

Items bleed over the padding on each side when scrolling.

| Attribute                | Value               |
| ------------------------ | ------------------- |
| Alignment                | Vertically centered |
| Leading padding          | 16dp                |
| Top/bottom padding       | 8dp                 |
| Padding between elements | 8dp                 |
| Item corner radius       | 28dp                |

### Uncontained multi-aspect ratio

![Uncontained multi-aspect ratio carousels only have leading padding, with 8dp of padding between items.](https://lh3.googleusercontent.com/1SazYXoMFnNnFpmqXCe7pchjco1F_R03ws6GfweuJDv4cgafUAQ0l0P_8ELNDh-l8UEyycEhodtkGYJgG_s6Zn0GLzQ6IP4UwcSpCUW9O0N-=s0)

| Attribute                | Value               |
| ------------------------ | ------------------- |
| Alignment                | Vertically centered |
| Leading padding          | 16dp                |
| Top/bottom padding       | 8dp                 |
| Padding between elements | 8dp                 |
| Item corner radius       | 28dp                |

### Hero

![Measurements of a hero carousel layout.](https://lh3.googleusercontent.com/LOm-yrGl6Hmuxn-eQ995_1ZlFqkd90so8hX-xPss8PWGCyXWDJECAupl-paVut_4taB6DVA7OENO39mxBfDAgXcPC_kZXCNlPTdnCQxBYZ4=s0)

| Attribute                | Value               |
| ------------------------ | ------------------- |
| Alignment                | Vertically centered |
| Leading/trailing padding | 16dp                |
| Top/bottom padding       | 8dp                 |
| Padding between elements | 8dp                 |
| Large item width         | Dynamic             |
| Small item width         | 40–56dp, dynamic    |
| Item corner radius       | 28dp                |

### Center-aligned hero

![Measurements of a center-aligned hero carousel layout.](https://lh3.googleusercontent.com/SuFPyTcmkMVHYU4NubWqAMrraBaL0OAFzvUcuXPWlkmIsASj8fOjlwGNfNpl4LP9revB2iU8dc-oFBOXNlX3tfcFfD7ny6W2MrubF9hcGqH1=s0)

| Attribute                | Value               |
| ------------------------ | ------------------- |
| Alignment                | Vertically centered |
| Leading/trailing padding | 16dp                |
| Top/bottom padding       | 8dp                 |
| Padding between elements | 8dp                 |
| Large item width         | Dynamic             |
| Small item width         | 40–56dp, dynamic    |
| Item corner radius       | 28dp                |

### Full-screen

![Measurements of a full-screen carousel layout.](https://lh3.googleusercontent.com/qo38AJlGFDaPzNKJX24tQG5PrvIQ_PRl0ZEmeh-7YE8FvikHGuh96N5ggGpDoOStYSzbhUAg0-36VmHVC9QmpqGifut7G4QG3G1RCtu13UKO=s0)

| Attribute                | Value    |
| ------------------------ | -------- |
| Alignment                | Centered |
| Leading/trailing padding | 0dp      |
| Top/bottom padding       | 0dp      |
| Padding between elements | 16dp     |

---

## Color Tokens

![2 color roles of a carousel.](https://lh3.googleusercontent.com/Mzrpy7os0Evw3KGIkxaFfkon8IgFJgpyqGgYD2DIMMbywuPHponDXt8yaG9F6u0lJAhluoYHtJE1Sv2KYym2NJiXYSBSqOT6pMFsQMCdXZF77w=s0)

1. Container
2. Surface

### Enabled

**Outline (with outline variant)**

| Element       | Token                                              | Value                  |
| ------------- | -------------------------------------------------- | ---------------------- |
| Outline color | `md.comp.carousel-item.with-outline.outline.color` | `md.sys.color.outline` |
| Outline width | `md.comp.carousel-item.with-outline.outline.width` | —                      |

**Container**

| Element                            | Token                                                      | Value                             |
| ---------------------------------- | ---------------------------------------------------------- | --------------------------------- |
| Container color                    | `md.comp.carousel-item.container.color`                    | `md.sys.color.surface`            |
| Container elevation                | `md.comp.carousel-item.container.elevation`                | `md.sys.elevation.level0`         |
| Container shadow color             | `md.comp.carousel-item.container.shadow-color`             | `md.sys.color.shadow`             |
| Container surface tint layer color | `md.comp.carousel-item.container.surface-tint-layer.color` | `md.sys.color.surface-tint`       |
| Container shape                    | `md.comp.carousel-item.container.shape`                    | `md.sys.shape.corner.extra-large` |

### Hovered

**Container**

| Element             | Token                                             | Value                     |
| ------------------- | ------------------------------------------------- | ------------------------- |
| Container elevation | `md.comp.carousel-item.hover.container.elevation` | `md.sys.elevation.level1` |

**State layer**

| Element             | Token                                             | Value                                    |
| ------------------- | ------------------------------------------------- | ---------------------------------------- |
| State layer color   | `md.comp.carousel-item.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| State layer opacity | `md.comp.carousel-item.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

**Outline**

| Element       | Token                                                    | Value                  |
| ------------- | -------------------------------------------------------- | ---------------------- |
| Outline color | `md.comp.carousel-item.with-outline.hover.outline.color` | `md.sys.color.outline` |

### Focused

**Focus indicator**

| Element                   | Token                                                  | Value                                       |
| ------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| Focus indicator color     | `md.comp.carousel-item.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Focus indicator thickness | `md.comp.carousel-item.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Focus indicator offset    | `md.comp.carousel-item.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

**Outline**

| Element       | Token                                                    | Value                     |
| ------------- | -------------------------------------------------------- | ------------------------- |
| Outline color | `md.comp.carousel-item.with-outline.focus.outline.color` | `md.sys.color.on-surface` |

**Container**

| Element             | Token                                             | Value                     |
| ------------------- | ------------------------------------------------- | ------------------------- |
| Container elevation | `md.comp.carousel-item.focus.container.elevation` | `md.sys.elevation.level0` |

**State layer**

| Element             | Token                                             | Value                                    |
| ------------------- | ------------------------------------------------- | ---------------------------------------- |
| State layer color   | `md.comp.carousel-item.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| State layer opacity | `md.comp.carousel-item.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

### Pressed

**Outline**

| Element       | Token                                                      | Value                  |
| ------------- | ---------------------------------------------------------- | ---------------------- |
| Outline color | `md.comp.carousel-item.with-outline.pressed.outline.color` | `md.sys.color.outline` |

**Container**

| Element             | Token                                               | Value                     |
| ------------------- | --------------------------------------------------- | ------------------------- |
| Container elevation | `md.comp.carousel-item.pressed.container.elevation` | `md.sys.elevation.level0` |

**State layer**

| Element             | Token                                               | Value                                      |
| ------------------- | --------------------------------------------------- | ------------------------------------------ |
| State layer color   | `md.comp.carousel-item.pressed.state-layer.color`   | `md.sys.color.on-surface`                  |
| State layer opacity | `md.comp.carousel-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

### Disabled

**Container**

| Element             | Token                                                | Value                     |
| ------------------- | ---------------------------------------------------- | ------------------------- |
| Container elevation | `md.comp.carousel-item.disabled.container.elevation` | `md.sys.elevation.level0` |
| Container opacity   | `md.comp.carousel-item.disabled.container.opacity`   | 0.38                      |
| Container color     | `md.comp.carousel-item.disabled.container.color`     | `md.sys.color.surface`    |

**Outline**

| Element         | Token                                                         | Value                  |
| --------------- | ------------------------------------------------------------- | ---------------------- |
| Outline color   | `md.comp.carousel-item.with-outline.disabled.outline.color`   | `md.sys.color.outline` |
| Outline opacity | `md.comp.carousel-item.with-outline.disabled.outline.opacity` | 0.12                   |

---

## Interaction States

![5 states of a carousel in light and dark schemes.](https://lh3.googleusercontent.com/D7QutV1hQsVv50Nbn-UkT_BAJ4JRYAHLcohN50l4y2t5BDjn0pSq5jHk29phmxHU4H-UZszf7UaQoCPDkjWvVki1t4vlhxzzHfBL9vabMqo=s0)

| #   | State    | Visual changes                                               |
| --- | -------- | ------------------------------------------------------------ |
| 1   | Enabled  | Default appearance, level 0 elevation                        |
| 2   | Hovered  | Elevation rises to level 1, on-surface state layer appears   |
| 3   | Focused  | Focus indicator with secondary color, on-surface state layer |
| 4   | Pressed  | Touch ripple, on-surface state layer, level 0 elevation      |
| 5   | Disabled | 0.38 container opacity, 0.12 outline opacity                 |

### Touch

Tapping a carousel item changes its shape slightly and creates a touch ripple for interaction feedback.

### Cursor

The hover state provides a visual cue that the item is interactive. Clicking (in both active and inactive states) triggers a ripple for feedback.

---

## Responsive / Adaptive Design

As the carousel container size increases, more carousel items become visible. In compact window sizes, carousels comfortably show up to three items at once. As the window grows, additional items are added and scaled in size.

Full-screen carousels always show only one item.

![8 carousel items visible at once on a tablet in landscape orientation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuso0q8-18.png?alt=media&token=1ca63117-b627-4361-afb1-6730a8ee93d3=s0)

---

## Accessibility

### Touch & Cursor

- Tapping creates a ripple and subtle shape change for feedback
- Hover state visually indicates interactivity
- Click ripple appears in both active and inactive states

### Keyboard Navigation

| Key            | Action                                                                     |
| -------------- | -------------------------------------------------------------------------- |
| Tab or Arrows  | Move to the previous or next carousel item                                 |
| Space or Enter | Activate focused item                                                      |
| Up/Down arrows | Leave the carousel and focus the next page element (e.g., Show all button) |

### Initial Focus

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwut9phs-8.png?alt=media&token=b672b540-9326-4e15-9ce3-3696370d6a10=s0" /><br/><b>Do:</b> Set initial focus on the first carousel item, and use arrows to navigate items</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuta5uo-9.png?alt=media&token=4e12e7df-cf8a-4535-9dea-182a8767f066=s0" /><br/><b>Don't:</b> Focus on the carousel container instead of the first item</td>
</tr></table>

When navigating to a carousel via assistive technology, **Tab** places initial focus on the first carousel item. Then use **Tab** or arrow keys to navigate between items.

### Labeling

![Accessibility labels of a carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwutav24-10.png?alt=media&token=cdceb9da-aa24-499f-a5ad-e9d8a028493f=s0)

- The carousel container has the **container** role and an appropriate label
- Each item's label reads out the total number of items and the position of the current item in focus

![Accessibility labels of a carousel item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwutbdy7-11.png?alt=media&token=d28c067c-4591-44c8-93a0-ccb5adc4c497=s0)

### Reduced motion

When reduced motion settings are enabled:

- Remove the parallax effect
- Items should no longer expand as they come into view — all items are the same size
- Ensure carousels with reduced motion reach the window edges to avoid clipping visuals
- For hero carousels, the small item is only partially shown on screen

### Density

All interactive carousel items should meet the minimum 48dp touch target.

---

## M2 → M3 Differences

This component is new in Material 3.

| Aspect       | M2                       | M3                                                                                                             |
| ------------ | ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Availability | Not a standard component | New component                                                                                                  |
| Shape        | Static                   | Items change shape dynamically when scrolled                                                                   |
| Motion       | No parallax              | Items have a parallax effect (content moves at different speed)                                                |
| Interaction  | Free scrolling           | Snap-scrolling keeps items aligned to layout grid                                                              |
| Layouts      | —                        | Six layouts: multi-browse, uncontained, uncontained multi-aspect ratio, hero, center-aligned hero, full-screen |

### Updates

**November 2025** — New carousel layout: uncontained multi-aspect ratio

**2023** — Additional layouts and configurations: uncontained, full-screen, centered carousels, hero, multi-browse

---

## Availability & Resources

| Type           | Resource                                                                                                                  | Status      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Design         | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460)                                            | Available   |
| Implementation | [Flutter](https://api.flutter.dev/flutter/material/CarouselView-class.html)                                               | Available   |
|                | [Jetpack Compose](https://developer.android.com/develop/ui/compose/components/carousel)                                   | Available   |
|                | [MDC-Android](https://github.com/material-components/material-components-android/blob/master/docs/components/Carousel.md) | Available   |
|                | Web                                                                                                                       | Unavailable |
