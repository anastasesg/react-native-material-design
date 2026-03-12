---
url: https://m3.material.io/components/carousel/accessibility
lastmod: 2026-02-12
crawled_at: 2026-03-07T17:50:25.000Z
category: components
section: carousel
page_type: accessibility
status: complete
---

# Carousel

Carousels show a collection of items that can be scrolled on and off the screen

## Use cases

Users should be able to do the following with assistive technology:

- Navigate to the carousel container
- Navigate between different carousel items
- Activate a carousel item
- Skip over the carousel items

## Requirements on scrolling pages

On vertically-scrolling pages, carousels require an accessible way to view all the items without horizontally scrolling. (This requirement doesn't apply to full-screen carousels.)

Material recommends adding a **Show all** button below the carousel, which opens a dedicated vertically-scrolling page of all carousel items.

<!-- Video: Carousel on mobile has a "show all" button that opens a page with all carousel items. -->

_Carousels without headers should use a Show all button to view all carousel items_

![Measurements of a "show all" button added below a carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwut0q8v-2.png?alt=media&token=fd99e7b1-4959-4151-a530-a820e6a115f6=s0)

_The **Show all** button should have a padding of 4dp_

If the carousel has a header, you can use an arrow icon button instead. Place the arrow icon directly next to the header or in the same row.

Make sure the header is also displayed on the page of all carousel items.

<!-- Video: Carousels in a list on mobile with headers have an arrow icon that opens a page with all carousel items. -->

_Carousels with headers should use an arrow to view all carousel items_

![Measurements of an arrow icon button added next to a carousel header.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwut172a-4.png?alt=media&token=79318ca5-9f6e-4973-ba50-09469633894b=s0)

_Headers should align with the leading edge, and the arrow icon should have a size of 48dp_

Avoid customizing the accessibility solution when possible. However, if your product needs an alternative solution, consider adding a **Show all** button in nearby navigation, or add alternative control buttons close to the carousel.

Avoid adding UI elements, like arrows or other icons, within or beside the carousel.

![Arrow icons on the left and right of the carousel, reducing container width.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykx1vc-5a-don't.png?alt=media&token=88d824af-cca5-4743-a7f4-5dc1776d152e=s0)

_Don't: Avoid adding buttons into the carousel container or beside it. Place any buttons above or below the carousel._

![Arrow icons floating on top of the carousel edge, concealing items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykxhsn-5b-don't.png?alt=media&token=7253d6f2-ad26-4cd6-854c-e5b47725c499=s0)

_Don't: Don't cover the carousel with buttons or other UI_

## Interaction & style

### Touch

Tapping on a carousel item changes the shape slightly, and creates a touch ripple for interaction feedback.

<!-- Video: Carousel providing a ripple feedback when being tapped. -->

_Touch: Tap_

### Cursor

The hover state provides a visual cue that the carousel item is interactive.

When the carousel item is clicked (in both active and inactive states), a ripple appears for interaction feedback.

<!-- Video: Carousel changing state when hovered. -->

_Cursor: Hover, click_

### Initial focus

When navigating to a carousel using assistive technology, use **Tab** to place initial focus on the first carousel item. Then, use **Tab** or the arrow keys to navigate the carousel items.

Use the up and down arrow keys to leave the carousel and focus on the next element on the page, like the **Show all** button.

![Diagram of how to navigate a carousel using assistive technology.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwut9phs-8.png?alt=media&token=b672b540-9326-4e15-9ce3-3696370d6a10=s0)

_Do: Set initial focus on the first carousel item, and use arrows to navigate items_

![Diagram of how not to navigate a carousel using assistive technology.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuta5uo-9.png?alt=media&token=4e12e7df-cf8a-4535-9dea-182a8767f066=s0)

_Don't: Avoid focusing on the carousel container_

## Keyboard navigation

| Keys                   | Actions                                     |
| ---------------------- | ------------------------------------------- |
| **Tab** or **Arrows**  | Moves to the previous or next carousel item |
| **Space** or **Enter** | Activates the focused carousel item         |

## Labeling elements

The carousel container has the **container** role.

![Accessibility labels of a carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwutav24-10.png?alt=media&token=cdceb9da-aa24-499f-a5ad-e9d8a028493f=s0)

_The carousel container is labelled appropriately and has the **container** role_

Each carousel may have a different number of items, so the label reads out the total amount of items and the current item in focus.

![Accessibility labels of a carousel item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwutbdy7-11.png?alt=media&token=d28c067c-4591-44c8-93a0-ccb5adc4c497=s0)

_The carousel item label indicates the current item in focus and the total number of items_

## Reduced motion

When reduced motion settings are turned on, the parallax effect should be removed and carousel items should no longer expand as they come into view. All items are the same size.

Make sure carousels with reduced motion reach the edges of the window to avoid clipping visuals.

<!-- Video: Comparison of a multi-browse carousel with the reduced motion setting off and on. -->

- Default carousel for multi-scroll
- Carousel with reduced motion settings turned on

For hero carousels with reduced motion, the small carousel item is only partially shown on screen.

<!-- Video: Comparison of a hero carousel with the reduced motion setting off and on. -->

- Default carousel for single-scroll
- Carousel with reduced motion settings turned on
