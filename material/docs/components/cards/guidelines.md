---
url: https://m3.material.io/components/cards/guidelines
lastmod: 2025-09-26
crawled_at: 2026-03-08T00:00:00.000Z
category: components
section: cards
page_type: guidelines
status: complete
---

# Cards

Cards display content and actions about a single subject

![3 variants of cards: elevated, filled, and outlined.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwujy207-1.png?alt=media&token=8f53bf0b-4e76-4d15-a467-e79d95d585c8=s0)

## Usage

Use a card to display content and actions on a single topic.

Cards should be easy to scan for relevant and actionable information.

Elements like text and images should be placed on cards in a way that clearly indicates hierarchy.

![Example card containing an image, title, text, and button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwujyk5p-2.png?alt=media&token=27bccb24-2751-42f5-9ed6-a573c9637b1e=s0)

_Cards can display content and actions on a single topic_

Cards can serve as entry points into deeper levels of detail or navigation, such as a music album or details on an upcoming vacation.

![Example world tour card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwujz8zw-3.png?alt=media&token=f8b81a9b-d1c1-4104-b827-de3275cc35d7=s0)

_Card text and image show a clear hierarchy_

![Card displaying connected details about a world tour.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwujzmmd-4.png?alt=media&token=03f44ff5-55ce-437d-b8e7-c956f44d54f5=s0)

_Use cards to display related information on a single subject_

Cards can be displayed together in a grid, vertical list, or carousel.

![4 cards together in a grid layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk08jk-5.png?alt=media&token=f64f5002-eb4a-4af2-bf74-481bd4c3e36c=s0)

_Do: Cards can be shown together_

![5 albums in a vertical list of cards.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk0pob-6.png?alt=media&token=17c72a08-afc1-4ed3-afa6-cb04a3d880a1=s0)

_Don't: Don't force content into cards when spacing, headlines, or dividers would create a simpler visual hierarchy_

There are three card variants:

- Elevated
- Filled
- Outlined

Each provides the same legibility and functionality, so the variant you use depends on style alone.

![3 variants of cards.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk16p3-7.png?alt=media&token=4bbc3151-4713-4962-85d3-2655c3656413=s0)

_1. Elevated card 2. Filled card 3. Outlined card_

![Example elevated card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk25nc-8.png?alt=media&token=c16cb758-7e06-4e65-a635-1d19c85413c7=s0)

_Elevated cards have a drop shadow, providing more separation from the background than filled cards, but less than outlined cards_

![Example filled card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk2m44-9.png?alt=media&token=874c860e-a76b-47c2-a6b8-e1b9bee9354a=s0)

_Filled cards provide subtle separation from the background. This has less emphasis than elevated or outlined cards._

![Example outlined card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk337j-10.png?alt=media&token=94eedf65-056a-4352-a906-601748f7e531=s0)

_Outlined cards have a visual boundary around the container. This can provide greater emphasis than the other variants._

## Anatomy

The card container is the only required element in a card. Card layouts can vary to support the kinds of content they contain. Below is a common configuration of elements.

![Diagram labeling the 6 parts of card anatomy.](https://lh3.googleusercontent.com/-eiTnWJl-s5HUIjPs1tfHU9HJp4izquC1-CiHPmdGA3Eq1YAw82dWNDHWYoQN1aUiXKSQm1jkq8uHW8i2aR_xg8kUxVMmHW-tyV93R8gmc0=s0)

_1. Container 2. Image 3. Button 4. Supporting text 5. Subhead 6. Headline_

### Container

Card containers hold all card elements. Their size is determined by the space those elements occupy. Card elevation is expressed by the container.

The card container is the only required element of a card. All other elements are optional.

![3 card containers with various elements: 1 with all elements except a button. 1 with a container, headline, supporting text, button. 1 with a container, headline, supporting text, 2 buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk4ddn-12.png?alt=media&token=3466c990-89bc-4904-9379-b926506469f6=s0)

_Card size is determined by the elements it contains_

### Content blocks

Card contents are grouped into blocks. Content can have different levels of visual emphasis depending on importance.

Card layouts vary to support the kinds of content they contain.

![Diagram of card content blocks.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk4w24-13.png?alt=media&token=922c8fc3-b6be-443f-b583-307b41c04549=s0)

_Cards can contain a headline, subhead, supporting text, media, and actions_

### Dividers

[Dividers](https://m3.material.io/m3/pages/divider/specs) can separate regions in cards or indicate areas of a card that can expand.

![A divider running the entire width of the card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk5dl8-14.png?alt=media&token=167906e1-0d38-4e3b-9b6a-ae34e30896c8=s0)

_1. Use full-width dividers for content that can be expanded_

![An inset divider indented from the edge of card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk5r9g-15.png?alt=media&token=9fe4e4eb-940d-4879-b72a-5326475e2ad1=s0)

_1. Use inset dividers, which don't run the full width of a card, to separate related content_

### Media

**Thumbnail**: Cards can include thumbnails for an avatar or logo.

**Image**: Cards can include photos, illustrations, and other graphics, such as weather icons.

**Video**: Cards can include video.

![A mobile chat app with: 5 cards with images, 1 card with a thumbnail avatar, and 1 card with a video.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk7ixf-16.png?alt=media&token=8be9c48a-b857-4251-be30-27fb662351f7=s0)

_Cards can contain thumbnails, images, and video_

### Text

**Headline**: Headline text often communicates the subject of the card, such as the name of a photo album or article.

**Subhead**: Subheads are smaller text elements, such as an article byline or a tagged location.

**Supporting text**: Supporting text includes body content, such as an article summary or a restaurant description.

![A tablet email app with an email summary card with multiple text elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukrum6-17.png?alt=media&token=6a042f0c-08aa-4406-83ca-3ad8ed923fc7=s0)

_Headline, subhead, and supporting text in a card_

#### Layering text, icons, and images

It isn't recommended to place text or icons on images. If it's necessary, ensure the background image provides sufficient contrast for the text to meet accessibility standards.

Add a translucent scrim or bounding shape beneath the text or icon to help ensure proper contrast.

![Layered text contrasts with the background image.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuke2rr-18.png?alt=media&token=1678fd07-8e19-478e-a63f-7c6883e05769=s0)

_Caution: Ensure that text on images meets accessible contrast standards_

![Icon within a bounding shape, placed on an image.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukejwa-19.png?alt=media&token=e1f6b168-b200-4c74-b4db-6f14d5c9130a=s0)

_Caution: When placing text or icons on images, consider using a bounding shape to ensure proper contrast_

### Actions

#### Primary action area

Cards can be one large touch target triggering an expanded detail screen.

![The action area of a card contains rich media and supporting text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukf67i-20.png?alt=media&token=2b6fc020-ea02-4eeb-b689-9dde4ba174d8=s0)

_Cards can include a primary action area that expands into a full-screen view_

**Buttons**: Cards can include buttons for actions such as **Learn more** or **Add to cart**.

**Icon buttons**: Cards can include icon buttons for actions such as **Save**, **Heart**, or **Leave a 4-star review**.

**Selection controls**: Cards can also include chips, sliders, checkboxes, and other selection controls.

**Linked text**: There can be a link in the supporting text on a card.

![Supplemental text and actions at the top and bottom of the card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukfjtw-21.png?alt=media&token=b45cbe2c-3206-4d87-b552-3919097b31cc=s0)

_Cards can include multiple action areas containing buttons, links, and other controls_

![Album card with an option to give a star rating.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukg62l-22.png?alt=media&token=68263c29-c142-4fb6-b01b-0f0e53a5d7b9=s0)

_Cards can contain icon buttons like stars to rate content_

![Card to purchase tickets with choice chips for 3 event times.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukgix5-23.png?alt=media&token=05e68c11-3d87-4fea-9614-2e9815698e43=s0)

_Cards can contain choice chips in the action area_

![Card with slider to control a song's volume.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukgu3i-24.png?alt=media&token=1429bc3e-e20e-45f3-9d55-8a889683204a=s0)

_Cards can contain a slider control in the action area_

**Overflow menu**: Overflow menus contain related actions. They are typically placed in the upper-right or lower-right corner of a card.

![2 cards: 1 with an overflow menu in the upper-right corner, the other with it in the lower right.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukh83p-25.png?alt=media&token=b0bcfe54-83e6-4668-b466-d4fba42975b9=s0)

_Overflow menus are usually located in the upper-right or lower-right corner of a card_

## Cards in a collection

Multiple cards can be grouped together into collections displayed in a grid, list, or carousel.

By default, cards in a collection are coplanar. They share the same resting elevation unless they're picked up or dragged.

![9 cards in a grid layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukhv18-26.png?alt=media&token=db2e3965-ccbc-474e-bbba-22ad76c67a3b=s0)

_Multiple cards can be grouped into collections with a shared resting elevation_

#### Filtering and sorting

Card collections can be filtered in a variety of ways, including by date or alphabetical order. If a collection can be filtered, the filter must apply to each card in the collection.

Filter or sorting options should be placed outside of the card collection.

![A sort-by-date option placed above a card collection.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukig38-27.png?alt=media&token=0bbb40be-5f28-4052-bdcb-ef201193bf6a=s0)

_Card collections can be filtered in a variety of ways, including by date. A sort-by-date option is placed outside of the card collection._

Organize card collections so that they're easy to use. Their layout affects how they are perceived.

![A template for an 8-card collection layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukiwuu-28.png?alt=media&token=140d478a-a331-4060-9e2a-f3c1c0b6eb37=s0)

_Place cards in a collection in a straightforward, easy-to-use manner_

### Grid

Cards can be displayed together in a grid.

<!-- Video: Cards displayed in a grid -->

The default grid can be customized in code to show cards in staggered or mosaic grids.

![5 menu item cards in a mosaic grid.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukjfiq-30.png?alt=media&token=7c16205a-8284-4b8d-98d5-8cbb7eb0027d=s0)

_Custom mosaic grid_

![4 menu item cards in a staggered grid.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukk75c-31.png?alt=media&token=e4ead563-bccd-411b-9868-5710a67d212f=s0)

_Custom staggered grid_

### Vertical list

Cards can be displayed together in a vertical list.

<!-- Video: Cards can be shown in a vertical list -->

### Carousel

Cards can be displayed together in a horizontal row or carousel.

<!-- Video: Cards displayed together in a horizontal row or carousel -->

## Adaptive design

As cards scale to adapt to different [window size classes](https://m3.material.io/m3/pages/applying-layout/window-size-classes), their position and alignment can also change.

Cards and their elements can align left, right, or center as the layout scales.

![2 cards on a mobile screen row expand to 4 cards on a tablet screen row.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukkvy8-34.png?alt=media&token=92195d5b-d44d-434e-98d5-dbe6c60d798b=s0)

_Card position and alignment changes as the screen size changes_

### Ergonomics

Adjust the layout of cards to meet the ergonomic needs of large screens.

For example, a horizontally-oriented card in a compact window size may become a larger, vertically-oriented card in an expanded window size, with more space for images and text on the larger screen.

![Card sizes change from mobile to tablet, with larger images in the tablet layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuklb57-35.png?alt=media&token=888f14f9-99d5-4ab6-8dae-282257f1f47e=s0)

_Adjust the card layout so content remains the main focus on large screens_

### Visual presentation

To adjust the presentation of content-focused components, begin with spacing.

Allow components like lists, cards, and images to optimize space while filling the region of a screen that suits a device breakpoint's ergonomic needs.

![2 cards with optimized space: 1 narrow rectangle, 1 wide square.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukluzj-36.png?alt=media&token=ecf624d2-b9a0-4222-8159-044022c2bce0=s0)

_Spacing adjusts for components such as cards, lists, and images_

![2 examples of the same card: 1 vertical with an image at the top, 1 horizontal with an image on the left.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukmfqz-37.png?alt=media&token=b5f7ca2b-ac45-47fe-832f-0fe359568750=s0)

_Example of the same card with two different orientations and element positioning_

### Column-based layouts

In mobile layouts, components such as lists or cards are stretched to fit the full width of the screen without compromising visual quality or user experience. When designing for large screens with an expanded window size, use multiple columns to display content.

Avoid extending UI elements across the screen when possible. On larger screens, rearrange groups of related cards into horizontal rows or carousels, to allow for better content organization.

![3 related cards in a carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukn6ma-38.png?alt=media&token=98eabd10-f4cd-457d-a7fc-d4767ce3ef57=s0)

_When designing for large screens, use multiple columns to display content_

### Small screens

On smaller screens with the compact window size, consider swapping cards for lists, which can display images and text in a more compact form.

Make sure that controls, actions, and other component-specific elements are maintained.

<!-- Video: Certain devices or user contexts require different components to meet platform expectations -->

## Behavior

### Expanding

Cards can use a [container transform](https://m3.material.io/m3/pages/motion-transitions/transition-patterns#b67cba74-6240-4663-a423-d537b6d21187) transition pattern to reveal additional content. Reserve this pattern for hero moments that are meant to be expressive.

<!-- Video: A card expands to fill the full screen using a parent-child transition -->

_Do: Expand a card to reveal information_

_Don't: Don't scroll within a card to reveal information_

### Navigation

Cards can use a [forward and backward](https://m3.material.io/m3/pages/motion-transitions/transition-patterns#df9c7d76-1454-47f3-ad1c-268a31f58bad) transition pattern to navigate between screens at consecutive levels of hierarchy. This pattern has a simpler motion style compared to container transform, which makes it suitable for common navigation transitions.

<!-- Video: Cards can use a forward and backward transition pattern to navigate between screens -->

### Gestures

#### Swipe

A swipe gesture can be performed on a single card at a time, anywhere on that card.

It can be used to:

- Dismiss a card
- Change the state of a card, such as flagging or archiving it

_Do: A card should only have one swipe action assigned to it_

_Don't: Cards shouldn't contain content that can be swiped, such as an image carousel or pagination. Also, swipe gestures shouldn't cause portions of cards to detach upon swiping._

#### Pick up & move

The pick-up-and-move gesture allows users to move and reorder cards in a collection.

_Do: When moving a card, increase its elevation_

_Don't: Don't let cards bump other elements out of the way. When a card is picked up, it appears in front of all elements, except app bars and navigation._

#### Scrolling

Card content that's taller than the maximum card height is truncated and doesn't scroll, but can be displayed by expanding the height of a card.

A card can expand beyond the maximum height of the screen, in which case the card scrolls within the screen.

_Do: On a mobile device, cards can expand to reveal more content, scrolling within the screen. Content within cards doesn't scroll._

_Don't: On a mobile device, cards can't internally scroll, as it could cause two scroll bars to be displayed_

#### Scrolling on desktop

On a desktop device, card content can expand and scroll within a card.

<!-- Video: On a desktop, content can expand and scroll within a card -->
