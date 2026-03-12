---
url: https://m3.material.io/components/carousel/guidelines
lastmod: 2025-11-26
crawled_at: 2026-03-07T17:41:00.000Z
category: components
section: carousel
page_type: guidelines
status: complete
---

# Carousel

Carousels show a collection of items that can be scrolled on and off the screen.

![Carousel items adapting dynamically to device size by shrinking and reducing in number.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusb1kq-1.png?alt=media&token=31e0f0e5-44dc-40dc-88a3-810d49d9d32a=s0)

_Carousel items adapt dynamically based on window size_

## Usage

Carousels display a scrollable list of items. Carousel items emphasize visuals, but can also contain brief text that adapts to the item size.

There are four carousel layouts:

- Multi-browse
- Uncontained
- Hero
- Full-screen

All of these layouts can be centered, though center-aligned hero is the most common centered carousel.

Carousels can scroll in two ways:

- **Default**: Standard scrolling. Recommended for uncontained layouts.
- **Snap-scrolling**: Scrolled items snap to the carousel's layout. Recommended for multi-browse, hero, and full-screen layouts.

![Contained carousel with a large, medium, and small item. Text is hidden on the small item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusbuoo-2.png?alt=media&token=fe9b4940-fc2b-453f-b10c-1eb4f1bb5250=s0)

_A carousel can contain different sized items_

Choose the best carousel layout for your product. Some layouts are more visual-focused, while others are more customizable.

| Layout              | Best used for                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------- |
| Multi-browse        | Browsing many visual items at once (like photos), dynamic designs                                 |
| Uncontained         | Highly-customized or text-heavy carousels, stacked imaged and text, traditional carousel behavior |
| Hero                | Spotlighting very large visual items (like a movie or featured app)                               |
| Center-aligned hero | Centered, large visual items                                                                      |
| Full-screen         | Vertically-scrolling video or image feeds, immersive experiences                                  |

Carousel items must be fully visible on-screen (except for the uncontained layout). When scrolled, items automatically change size and snap into place to maintain the same layout.

![Multi-browse carousel with all images and text easily legible.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuscosc-3-do.png?alt=media&token=ddae19a2-c2a5-4a4f-a57a-89ebf9924d44=s0)

_Do: Set the large carousel item size to ensure the images and text are easy to read and recognize_

![Multi-browse carousel with a very thin small item, making the image unrecognizable.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusd3wu-3-don't.png?alt=media&token=9d93fc2f-8f36-44df-b19e-3b541f3dc539=s0)

_Don't: Avoid setting carousel items so small that the image isn't recognizable_

### Accessibility requirements on scrolling pages

On vertically-scrolling pages, carousels require an accessible way to view all the items without horizontally scrolling. (This requirement doesn't apply to full-screen carousels.)

Material recommends adding a **Show all** button below the carousel, which opens a dedicated vertically-scrolling page of all carousel items.

If the carousel has a header, you can use an arrow icon button instead.

View the [accessibility tab](https://m3.material.io/components/carousel/accessibility) for more details and alternate solutions.

<!-- Video: Make sure users can scroll vertically through all carousel items -->

_Make sure users can scroll vertically through all carousel items_

### Multi-browse

The multi-browse layout is best for browsing many items at once, like photos or event feeds. Snap-scrolling is recommended to ensure items are recognizable and consistently sized.

On larger screens, more large and medium items are visible in this layout.

Avoid using this layout if the carousel items need lots of text or have complicated imagery.

<!-- Video: A multi-browse layout has different sized items within the carousel -->

_A multi-browse layout has different sized items within the carousel_

In compact windows, only show up to three carousel items if they have text.

If you need to show more than three items, make sure the images and content are easy to understand and recognize.

![Carousel on a phone. 2 large, 1 medium, and 1 small item are fully visible but thin. The items don't have text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusga4v-6.png?alt=media&token=79689475-2747-4ee9-839c-b8c1eecba850=s0)

_Caution: In compact windows, only show more than three items if the items are easy to understand and recognize_

### Uncontained

The uncontained layout is most similar to a traditional carousel, where items are a single size and flow past the edge of the screen.

Both default scrolling and snap-scrolling work well with this layout.

Since items don't change size, this layout can be customized to show more text or other UI above or below each item without the text being masked or cropped.

<!-- Video: Carousel items are all the same size in an uncontained layout -->

_Carousel items are all the same size in an uncontained layout_

### Uncontained multi-aspect ratio

The uncontained multi-aspect ratio carousel has the same layout as the uncontained carousel but contains items of various sizes.

Item widths can range anywhere between 9:16 for min width size to 16:9 for max width.

Only use this carousel layout if the items have various widths.

<!-- Video: Carousel items are of various sizes in an uncontained multi-aspect ratio layout -->

_Carousel items are of various sizes in an uncontained multi-aspect ratio layout_

### Hero

The hero layout is best for spotlighting content that needs more attention, like movie, shows, or other media thumbnails. It highlights one large image to focus on, while providing a sneak peek of what's next.

On larger screens, more large items are visible.

Use snap-scrolling so users can easily cycle through items one at a time.

<!-- Video: A hero carousel in compact windows should show one large item and one small item -->

_A hero carousel in compact windows should show one large item and one small item_

### Center-aligned hero

When the hero layout is center-aligned, it adds an additional previewed item on the leading edge, making the large carousel item centered.

<!-- Video: A centered hero carousel has two small carousel items, with a large item centered -->

_A centered hero carousel has two small carousel items, with a large item centered_

### Full-screen

The full-screen layout is best used for immersive experiences like video articles, featured headlines, or items that are visually rich. It can contain text and other UI elements on top of the image.

This layout works best with content that is taller than it is wide, and scrolls vertically. It only works in portrait orientation in compact and medium windows. Don't use this layout in landscape orientation.

Use snap-scrolling for full-screen layouts. Don't use default scrolling.

<!-- Video: Full-screen carousels fill the entire content area of the screen -->

_Full-screen carousels fill the entire content area of the screen_

## Anatomy

![4 elements of a carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwushw0z-11.png?alt=media&token=0ec8f8d6-6910-47b8-af5e-aec914857c5e=s0)

_Multi-browse carousel (left) and hero carousel (right):_

1. Container
2. Large carousel item
3. Medium carousel item
4. Small carousel item

### Container

The carousel container holds all carousel items. The number of carousel items visible in the container can change based on the carousel layout and the window size class.

![An empty rectangle representing a carousel container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusikhn-12.png?alt=media&token=e53338c0-9e12-4500-a02a-6a3fa00a5be7=s0)

_The carousel container is a rectangle. It can be used in many ways and stretched to any size._

### Carousel items

Carousel items hold content. A carousel item has no fixed width; it changes width depending on the window size or its position in the carousel's layout. There are three dynamic widths an item can be: **large**, **medium**, and **small**.

![3 sizes of carousel items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusj1ii-13.png?alt=media&token=a8d53996-8396-4e21-a972-c74335739543=s0)

1. Large carousel item
2. Medium carousel item
3. Small carousel item

Large items have a max width that can be adjusted. This changes how all other large, medium, and small carousel items fit on screen. Large items must remain big enough to be easy to understand and recognize.

Medium items adjust width dynamically to the carousel size and available space.

Small items have a width range of 40-56dp.

![2 sizes of carousel items for hero layouts.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusjjti-14.png?alt=media&token=405ab913-2f35-4d0e-aa46-07e957c4e947=s0)

1. Large item
2. Small item

When the large item's max width is narrow enough, more items can be shown on screen at once. In compact windows, this is only recommended for carousels with simple imagery.

![3 sizes of carousel items for multi-browse layouts. 2 large items are visible.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuslefr-15.png?alt=media&token=93b132b6-bb28-4e57-9a57-f1c02ac20115=s0)

1. Large item
2. Medium item
3. Small item

### Item text (optional)

Carousel items are primarily visual. Item text is optional and should be brief.

If your carousel items require a lot of text, consider using the **uncontained layout**, which can show more information, or use a series of cards instead.

![Contained carousel items with 5 lines of content: a title, a description, and a label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusmns4-16.png?alt=media&token=11d776e8-048f-4e1e-81d9-1a265271a7a6=s0)

_Caution: Avoid exceeding two lines of text in carousel items in compact windows unless the background is simple, like a single color._

Content within a carousel item can adapt dynamically based on the container and window size.

Text should always be understandable at each size. Consider adapting the text to use brief labels on smaller carousel items.

![A carousel item at 3 different sizes to show how text changes at each size.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusqbrm-17.png?alt=media&token=bcc4c752-6b49-4820-960e-c22af7c9591b=s0)

1. Large carousel item with the full title and label text
2. Medium carousel item hiding the title text
3. Small carousel item abbreviating the label text

## Responsive layout

As the carousel container size increases, so do the number of carousel items visible at a time.

In compact window sizes, carousels can comfortably show up to three carousel items at once.

As the window size grows, more carousel items are added and scale in size.

Full-screen carousels only ever show one item at once.

![8 carousel items visible at once on a tablet in landscape orientation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuso0q8-18.png?alt=media&token=1ca63117-b627-4361-afb1-6730a8ee93d3=s0)

_Carousels can show more items at once on larger screens_

## Behavior

### Scrolling

Carousel items have a parallax effect when they're scrolled.

The **default** scrolling behavior doesn't snap items to a layout grid. They can stop anywhere in the container. Only use this for the uncontained layout.

The **snap-scrolling** behavior aligns carousel items to the layout grid after they're scrolled. Items snap to the grid when released. Use this for multi-browse, hero, and full-screen layouts.

<!-- Video: Carousel items with snap-scrolling maintain the same layout when released -->

_Carousel items with snap-scrolling maintain the same layout when released_

In full-screen layouts, make sure the carousel items snap to the edges of the carousel container. Avoid letting them scroll freely or stop halfway.

Full-screen layouts must use snap-scrolling.

![Full-screen carousel with items stopping halfway off screen once scrolled.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuspl2g-20-don't.png?alt=media&token=71d2bacf-deaf-4fc7-84f2-7b8f5fd86747=s0)

_Don't: Avoid scrolling freely on full-screen carousels_
