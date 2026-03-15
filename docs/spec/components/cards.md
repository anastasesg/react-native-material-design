# Cards — M3 Component Reference

> Cards display content and actions about a single subject.

Sources: [Overview](https://m3.material.io/components/cards/overview) · [Specs](https://m3.material.io/components/cards/specs) · [Guidelines](https://m3.material.io/components/cards/guidelines) · [Accessibility](https://m3.material.io/components/cards/accessibility)

---

## Variants

![3 variants of cards](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuilyza-1.png?alt=media&token=f4bfb5e7-e96f-41b7-8c6e-e00ab2260001=s0)

1. Elevated card
2. Filled card
3. Outlined card

All three variants offer the same legibility and functionality; the choice between them is purely stylistic.

![3 variants of cards](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk16p3-7.png?alt=media&token=4bbc3151-4713-4962-85d3-2655c3656413=s0)

![Example elevated card](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk25nc-8.png?alt=media&token=c16cb758-7e06-4e65-a635-1d19c85413c7=s0)

**Elevated** cards have a drop shadow, providing more separation from the background than filled cards but less than outlined cards.

![Example filled card](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk2m44-9.png?alt=media&token=874c860e-a76b-47c2-a6b8-e1b9bee9354a=s0)

**Filled** cards use a tonal surface fill for subtle separation from the background. This has less visual emphasis than the other two variants.

![Example outlined card](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk337j-10.png?alt=media&token=94eedf65-056a-4352-a906-601748f7e531=s0)

**Outlined** cards use a visual border around the container, which can provide greater emphasis than the other variants.

---

## Anatomy

The card container is the only required element. All other elements are optional. Card layouts vary to support the kinds of content they contain.

![Diagram labeling the 6 parts of card anatomy](https://lh3.googleusercontent.com/-eiTnWJl-s5HUIjPs1tfHU9HJp4izquC1-CiHPmdGA3Eq1YAw82dWNDHWYoQN1aUiXKSQm1jkq8uHW8i2aR_xg8kUxVMmHW-tyV93R8gmc0=s0)

1. **Container** — holds all card elements; its size is determined by the space those elements occupy; elevation is expressed by the container
2. **Image** — photos, illustrations, or other graphics
3. **Button** — actions such as "Learn more" or "Add to cart"
4. **Supporting text** — body content such as an article summary or description
5. **Subhead** — smaller text element such as a byline or tagged location
6. **Headline** — communicates the subject of the card (e.g. album name, article title)

![Card size is determined by the elements it contains](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk4ddn-12.png?alt=media&token=3466c990-89bc-4904-9379-b926506469f6=s0)

---

## Usage & When to Use

Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant and actionable information. Place elements like text and images so that hierarchy is clear.

![Example card containing an image, title, text, and button](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwujyk5p-2.png?alt=media&token=27bccb24-2751-42f5-9ed6-a573c9637b1e=s0)

Cards can serve as entry points into deeper levels of detail or navigation, such as a music album or details on an upcoming vacation.

![Example world tour card](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwujz8zw-3.png?alt=media&token=f8b81a9b-d1c1-4104-b827-de3275cc35d7=s0)

![Card displaying connected details about a world tour](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwujzmmd-4.png?alt=media&token=03f44ff5-55ce-437d-b8e7-c956f44d54f5=s0)

Cards can be displayed together in a grid, vertical list, or carousel.

<table>
<tr>
<td>

![4 cards together in a grid layout](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk08jk-5.png?alt=media&token=f64f5002-eb4a-4af2-bf74-481bd4c3e36c=s0)

**Do:** Cards can be shown together in grids, lists, or carousels.

</td>
<td>

![5 albums in a vertical list of cards](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk0pob-6.png?alt=media&token=17c72a08-afc1-4ed3-afa6-cb04a3d880a1=s0)

**Don't:** Don't force content into cards when spacing, headlines, or dividers would create a simpler visual hierarchy.

</td>
</tr>
</table>

---

## Sub-elements

### Content blocks

Card contents are grouped into blocks. Content can have different levels of visual emphasis depending on importance.

![Diagram of card content blocks](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk4w24-13.png?alt=media&token=922c8fc3-b6be-443f-b583-307b41c04549=s0)

### Dividers

Dividers can separate regions in cards or indicate areas that can expand.

![A divider running the entire width of the card](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk5dl8-14.png?alt=media&token=167906e1-0d38-4e3b-9b6a-ae34e30896c8=s0)

1. Use full-width dividers for content that can be expanded.

![An inset divider indented from the edge of card](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk5r9g-15.png?alt=media&token=9fe4e4eb-940d-4879-b72a-5326475e2ad1=s0)

1. Use inset dividers (not running the full width) to separate related content.

### Media

- **Thumbnail** — Cards can include thumbnails for an avatar or logo.
- **Image** — Cards can include photos, illustrations, and other graphics (e.g. weather icons).
- **Video** — Cards can include video content.

![Cards with thumbnails, images, and video](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk7ixf-16.png?alt=media&token=8be9c48a-b857-4251-be30-27fb662351f7=s0)

### Text

- **Headline** — Communicates the card's subject (album name, article title).
- **Subhead** — Smaller text element (byline, tagged location).
- **Supporting text** — Body content (article summary, restaurant description).

![Headline, subhead, and supporting text in a card](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukrum6-17.png?alt=media&token=6a042f0c-08aa-4406-83ca-3ad8ed923fc7=s0)

#### Layering text, icons, and images

Placing text or icons directly on images is not recommended. If necessary, ensure the background image provides sufficient contrast to meet accessibility standards. Add a translucent scrim or bounding shape beneath the text or icon for proper contrast.

![Layered text contrasts with the background image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuke2rr-18.png?alt=media&token=1678fd07-8e19-478e-a63f-7c6883e05769=s0)

Caution: Ensure that text on images meets accessible contrast standards.

![Icon within a bounding shape placed on an image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukejwa-19.png?alt=media&token=e1f6b168-b200-4c74-b4db-6f14d5c9130a=s0)

Caution: When placing text or icons on images, consider using a bounding shape to ensure proper contrast.

### Actions

#### Primary action area

Cards can be one large touch target that triggers an expanded detail screen.

![The action area of a card contains rich media and supporting text](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukf67i-20.png?alt=media&token=2b6fc020-ea02-4eeb-b689-9dde4ba174d8=s0)

- **Buttons** — for actions like "Learn more" or "Add to cart".
- **Icon buttons** — for actions like "Save", "Heart", or "Rate".
- **Selection controls** — chips, sliders, checkboxes, and other controls.
- **Linked text** — a link within the card's supporting text.

![Supplemental text and actions at the top and bottom of the card](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukfjtw-21.png?alt=media&token=b45cbe2c-3206-4d87-b552-3919097b31cc=s0)

![Album card with star rating](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukg62l-22.png?alt=media&token=68263c29-c142-4fb6-b01b-0f0e53a5d7b9=s0)

![Card with choice chips for 3 event times](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukgix5-23.png?alt=media&token=05e68c11-3d87-4fea-9614-2e9815698e43=s0)

![Card with slider to control volume](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukgu3i-24.png?alt=media&token=1429bc3e-e20e-45f3-9d55-8a889683204a=s0)

#### Overflow menu

Overflow menus contain related actions and are typically placed in the upper-right or lower-right corner of a card.

![2 cards with overflow menus in different corners](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukh83p-25.png?alt=media&token=b0bcfe54-83e6-4668-b466-d4fba42975b9=s0)

---

## Placement

### Cards in a collection

Multiple cards can be grouped into collections displayed in a grid, list, or carousel. Cards in a collection are coplanar by default — they share the same resting elevation unless picked up or dragged.

![9 cards in a grid layout](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukhv18-26.png?alt=media&token=db2e3965-ccbc-474e-bbba-22ad76c67a3b=s0)

### Filtering and sorting

Card collections can be filtered by date, alphabetical order, etc. Filter or sorting options should be placed outside of the card collection.

![A sort-by-date option placed above a card collection](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukig38-27.png?alt=media&token=0bbb40be-5f28-4052-bdcb-ef201193bf6a=s0)

![Template for an 8-card collection layout](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukiwuu-28.png?alt=media&token=140d478a-a331-4060-9e2a-f3c1c0b6eb37=s0)

### Grid

Cards can be displayed in a grid. The default grid can be customized to show staggered or mosaic layouts.

![5 menu item cards in a mosaic grid](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukjfiq-30.png?alt=media&token=7c16205a-8284-4b8d-98d5-8cbb7eb0027d=s0)

![4 menu item cards in a staggered grid](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukk75c-31.png?alt=media&token=e4ead563-bccd-411b-9868-5710a67d212f=s0)

### Vertical list

Cards can be arranged in a vertical list.

### Carousel

Cards can be arranged in a horizontal row or carousel.

---

## Behavior

### Expanding

Cards can use a container transform transition to reveal additional content. Reserve this pattern for hero moments meant to be expressive. Expand the card to reveal information rather than scrolling within it.

<table>
<tr>
<td>

**Do:** Expand a card to reveal information.

</td>
<td>

**Don't:** Don't scroll within a card to reveal information.

</td>
</tr>
</table>

### Navigation

Cards can use a forward-and-backward transition pattern to navigate between screens at consecutive levels of hierarchy. This pattern has a simpler motion style compared to container transform, making it suitable for common navigation transitions.

### Gestures

#### Swipe

A swipe gesture can be performed on a single card at a time, anywhere on that card. Swipe can dismiss a card or change its state (e.g. flag or archive).

<table>
<tr>
<td>

**Do:** A card should only have one swipe action assigned to it.

</td>
<td>

**Don't:** Cards shouldn't contain content that can be swiped (e.g. image carousel or pagination). Swipe gestures shouldn't cause portions of cards to detach.

</td>
</tr>
</table>

#### Pick up and move

The pick-up-and-move gesture lets users reorder cards in a collection.

<table>
<tr>
<td>

**Do:** When moving a card, increase its elevation.

</td>
<td>

**Don't:** Don't let cards bump other elements out of the way. A picked-up card appears in front of all elements except app bars and navigation.

</td>
</tr>
</table>

#### Scrolling

Card content taller than the maximum card height is truncated and does not scroll internally. Content can be revealed by expanding the card's height. A card can expand beyond the screen height, in which case the card scrolls within the screen.

<table>
<tr>
<td>

**Do:** On mobile, cards can expand to reveal more content, scrolling within the screen. Content within cards does not scroll.

</td>
<td>

**Don't:** On mobile, cards can't internally scroll, as it could cause two scroll bars to appear.

</td>
</tr>
</table>

On desktop devices, card content can expand and scroll within a card.

---

## Measurements

![Diagram with card layout measurements](https://lh3.googleusercontent.com/el_YhKWDFNMsVV51gm6oChPgPeNh4NiZU7_jdajUv38w5rT3nVlzDXfArepuPH38d1er7SCslFJyrf-KaBtIap102w7_CFnOj_BVu43S-ds=s0)

| Attribute             | Value              |
| --------------------- | ------------------ |
| Shape                 | 12dp corner radius |
| Left/right padding    | 16dp               |
| Padding between cards | 8dp max            |
| Label text alignment  | Start-aligned      |

---

## Color Tokens

### Elevated card

![Diagram indicating elevated card container](https://lh3.googleusercontent.com/E3Vi9qZnejfvkANGxN7TTmb5Utn3gzxXo8tbngvR9A83WXhpvV-mK_p9erAn4wBXMFmFRXpw2SmD7N-mIEq_5nOkXuKc8LOzoFXj6Oa8G1lv=s0)

![Color diagram indicating elevated card surface color](https://lh3.googleusercontent.com/gOvzxWalOCyRSRq6I8AqYgS6Y-XJlhBZ7VW82pxtb3dFUccU5LHnNcaccQ4BVnHcQflh6KOXqswxajoIj-v_9S6huJlw4kvNscb4UZN6Zb0=s0)

**Enabled / Container**

| Name                                             | Token                                                      | Value                                |
| ------------------------------------------------ | ---------------------------------------------------------- | ------------------------------------ |
| Elevated card container color                    | `md.comp.elevated-card.container.color`                    | `md.sys.color.surface-container-low` |
| Elevated card container elevation                | `md.comp.elevated-card.container.elevation`                | `md.sys.elevation.level1`            |
| Elevated card container surface tint layer color | `md.comp.elevated-card.container.surface-tint-layer.color` | `md.sys.color.surface-tint`          |
| Elevated card container shape                    | `md.comp.elevated-card.container.shape`                    | `md.sys.shape.corner.medium`         |
| Elevated card container shadow color             | `md.comp.elevated-card.container.shadow-color`             | `md.sys.color.shadow`                |

**Enabled / Icon**

| Name                     | Token                              | Value                  |
| ------------------------ | ---------------------------------- | ---------------------- |
| Elevated card icon color | `md.comp.elevated-card.icon.color` | `md.sys.color.primary` |
| Elevated card icon size  | `md.comp.elevated-card.icon.size`  | 24dp                   |

**Disabled / Container**

| Name                                       | Token                                                | Value                     |
| ------------------------------------------ | ---------------------------------------------------- | ------------------------- |
| Elevated card disabled container elevation | `md.comp.elevated-card.disabled.container.elevation` | `md.sys.elevation.level1` |
| Elevated card disabled container opacity   | `md.comp.elevated-card.disabled.container.opacity`   | 0.38                      |
| Elevated card disabled container color     | `md.comp.elevated-card.disabled.container.color`     | `md.sys.color.surface`    |

### Filled card

![Diagram indicating filled card container](https://lh3.googleusercontent.com/RbaHdHqyYyeHjx_eq4Kbjc4e3WWtYoHRrwqEg2mnQUhLVLjtwyp3KtjjaHrV6kdyFRPu5O26lbeXiQwSA3kQSGeiiggAit3rHjrWhadLuwCU=s0)

![Color diagram indicating filled card surface color](https://lh3.googleusercontent.com/28sRV5HrMfndGdrvcX_VHMHcm9rf_kk7W_LC3Jom8_R9rtsrEJAMjjPVT552KXBmxiaMKszeZ5QenLT1ejk3anom5NgsKHr-02mDyG4VEuzl=s0)

**Enabled / Container**

| Name                                           | Token                                                    | Value                                    |
| ---------------------------------------------- | -------------------------------------------------------- | ---------------------------------------- |
| Filled card container color                    | `md.comp.filled-card.container.color`                    | `md.sys.color.surface-container-highest` |
| Filled card container elevation                | `md.comp.filled-card.container.elevation`                | `md.sys.elevation.level0`                |
| Filled card container shape                    | `md.comp.filled-card.container.shape`                    | `md.sys.shape.corner.medium`             |
| Filled card container shadow color             | `md.comp.filled-card.container.shadow-color`             | `md.sys.color.shadow`                    |
| Filled card container surface tint layer color | `md.comp.filled-card.container.surface-tint-layer.color` | `md.sys.color.surface-tint`              |

**Enabled / Icon**

| Name                   | Token                            | Value                  |
| ---------------------- | -------------------------------- | ---------------------- |
| Filled card icon color | `md.comp.filled-card.icon.color` | `md.sys.color.primary` |
| Filled card icon size  | `md.comp.filled-card.icon.size`  | 24dp                   |

**Disabled / Container**

| Name                                     | Token                                              | Value                          |
| ---------------------------------------- | -------------------------------------------------- | ------------------------------ |
| Filled card disabled container elevation | `md.comp.filled-card.disabled.container.elevation` | `md.sys.elevation.level0`      |
| Filled card disabled container opacity   | `md.comp.filled-card.disabled.container.opacity`   | 0.38                           |
| Filled card disabled container color     | `md.comp.filled-card.disabled.container.color`     | `md.sys.color.surface-variant` |

### Outlined card

![Diagram indicating outlined card container and outline](https://lh3.googleusercontent.com/mwuwAzgNXs1xArEeUNQ5ayKXGbsLGzverYdD2EPiqL9Nk2EoZb5LEVop_RyeltCreY-py6o6B5Ry1lndyG6bQ-7p8AvUYtNNmlu1D10dwqSU=s0)

![Outlined card color roles in light and dark themes](https://lh3.googleusercontent.com/X8jbeHzsvv736FiatKGB2IOlsdiGVljvmrVCHUTgi0Au8RPx_aVvF1UMhbbjcAu--WnKD3LAWI4hLZiLmW9Q4oO0BkuSR4HpsAmpqleifMA=s0)

**Enabled / Container**

| Name                                             | Token                                                      | Value                        |
| ------------------------------------------------ | ---------------------------------------------------------- | ---------------------------- |
| Outlined card container color                    | `md.comp.outlined-card.container.color`                    | `md.sys.color.surface`       |
| Outlined card container elevation                | `md.comp.outlined-card.container.elevation`                | `md.sys.elevation.level0`    |
| Outlined card container surface tint layer color | `md.comp.outlined-card.container.surface-tint-layer.color` | `md.sys.color.surface-tint`  |
| Outlined card container shape                    | `md.comp.outlined-card.container.shape`                    | `md.sys.shape.corner.medium` |

**Enabled / Outline**

| Name                                 | Token                                          | Value                          |
| ------------------------------------ | ---------------------------------------------- | ------------------------------ |
| Outlined card container shadow color | `md.comp.outlined-card.container.shadow-color` | `md.sys.color.shadow`          |
| Outlined card outline width          | `md.comp.outlined-card.outline.width`          | 1dp                            |
| Outlined card outline color          | `md.comp.outlined-card.outline.color`          | `md.sys.color.outline-variant` |

**Enabled / Icon**

| Name                     | Token                              | Value                  |
| ------------------------ | ---------------------------------- | ---------------------- |
| Outlined card icon color | `md.comp.outlined-card.icon.color` | `md.sys.color.primary` |
| Outlined card icon size  | `md.comp.outlined-card.icon.size`  | 24dp                   |

**Disabled / Container**

| Name                                       | Token                                                | Value                     |
| ------------------------------------------ | ---------------------------------------------------- | ------------------------- |
| Outlined card disabled container elevation | `md.comp.outlined-card.disabled.container.elevation` | `md.sys.elevation.level0` |

**Disabled / Outline**

| Name                                   | Token                                            | Value                  |
| -------------------------------------- | ------------------------------------------------ | ---------------------- |
| Outlined card disabled outline color   | `md.comp.outlined-card.disabled.outline.color`   | `md.sys.color.outline` |
| Outlined card disabled outline opacity | `md.comp.outlined-card.disabled.outline.opacity` | 0.12                   |

---

## Interaction States

### Elevated card states

![Diagram of 5 elevated card states](https://lh3.googleusercontent.com/8OD9zWeF6hOtcHP-XQEqSVrCYSmtOFcwnb19h4zkqIDtpszCMXho0opgebc5B_ukqbsOiK-Q_iMQoDf1Iz94KTS5kg3zH3qXyF8Ki9kZAo0_=s0)

1. Hovered
2. Focused
3. Pressed
4. Dragged
5. Disabled

**Hovered / Container**

| Name                                    | Token                                             | Value                     |
| --------------------------------------- | ------------------------------------------------- | ------------------------- |
| Elevated card hover container elevation | `md.comp.elevated-card.hover.container.elevation` | `md.sys.elevation.level2` |

**Hovered / State layer**

| Name                                    | Token                                             | Value                                    |
| --------------------------------------- | ------------------------------------------------- | ---------------------------------------- |
| Elevated card hover state layer color   | `md.comp.elevated-card.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| Elevated card hover state layer opacity | `md.comp.elevated-card.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

**Focused / Focus indicator**

| Name                                    | Token                                                  | Value                                       |
| --------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| Elevated card focus indicator color     | `md.comp.elevated-card.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Elevated card focus indicator thickness | `md.comp.elevated-card.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Elevated card focus indicator offset    | `md.comp.elevated-card.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

**Focused / Container**

| Name                                    | Token                                             | Value                     |
| --------------------------------------- | ------------------------------------------------- | ------------------------- |
| Elevated card focus container elevation | `md.comp.elevated-card.focus.container.elevation` | `md.sys.elevation.level1` |

**Focused / State layer**

| Name                                    | Token                                             | Value                                    |
| --------------------------------------- | ------------------------------------------------- | ---------------------------------------- |
| Elevated card focus state layer color   | `md.comp.elevated-card.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| Elevated card focus state layer opacity | `md.comp.elevated-card.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

**Pressed (ripple) / Container**

| Name                                      | Token                                               | Value                     |
| ----------------------------------------- | --------------------------------------------------- | ------------------------- |
| Elevated card pressed container elevation | `md.comp.elevated-card.pressed.container.elevation` | `md.sys.elevation.level1` |

**Pressed (ripple) / State layer**

| Name                                      | Token                                               | Value                                      |
| ----------------------------------------- | --------------------------------------------------- | ------------------------------------------ |
| Elevated card pressed state layer color   | `md.comp.elevated-card.pressed.state-layer.color`   | `md.sys.color.on-surface`                  |
| Elevated card pressed state layer opacity | `md.comp.elevated-card.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

**Dragged / Container**

| Name                                      | Token                                               | Value                     |
| ----------------------------------------- | --------------------------------------------------- | ------------------------- |
| Elevated card dragged container elevation | `md.comp.elevated-card.dragged.container.elevation` | `md.sys.elevation.level4` |

**Dragged / State layer**

| Name                                      | Token                                               | Value                                      |
| ----------------------------------------- | --------------------------------------------------- | ------------------------------------------ |
| Elevated card dragged state layer color   | `md.comp.elevated-card.dragged.state-layer.color`   | `md.sys.color.on-surface`                  |
| Elevated card dragged state layer opacity | `md.comp.elevated-card.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` |

### Filled card states

![Diagram of 5 filled card states](https://lh3.googleusercontent.com/dyvw6FZH2BO4dAPsybP7VtJyu3dvPM_SK6YtHcXcFOSbUXx2KFiOganJcT29S4R85p3ZNem11PKaAFjRQLg4nGHjca0CLE2MF2N4t9vUn0E=s0)

1. Hovered
2. Focused
3. Pressed
4. Dragged
5. Disabled

**Hovered / Container**

| Name                                  | Token                                           | Value                     |
| ------------------------------------- | ----------------------------------------------- | ------------------------- |
| Filled card hover container elevation | `md.comp.filled-card.hover.container.elevation` | `md.sys.elevation.level1` |

**Hovered / State layer**

| Name                                  | Token                                           | Value                                    |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------- |
| Filled card hover state layer color   | `md.comp.filled-card.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| Filled card hover state layer opacity | `md.comp.filled-card.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

**Focused / Focus indicator**

| Name                                  | Token                                                | Value                                       |
| ------------------------------------- | ---------------------------------------------------- | ------------------------------------------- |
| Filled card focus indicator color     | `md.comp.filled-card.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Filled card focus indicator thickness | `md.comp.filled-card.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Filled card focus indicator offset    | `md.comp.filled-card.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

**Focused / Container**

| Name                                  | Token                                           | Value                     |
| ------------------------------------- | ----------------------------------------------- | ------------------------- |
| Filled card focus container elevation | `md.comp.filled-card.focus.container.elevation` | `md.sys.elevation.level0` |

**Focused / State layer**

| Name                                  | Token                                           | Value                                    |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------- |
| Filled card focus state layer color   | `md.comp.filled-card.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| Filled card focus state layer opacity | `md.comp.filled-card.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

**Pressed (ripple) / Container**

| Name                                    | Token                                             | Value                     |
| --------------------------------------- | ------------------------------------------------- | ------------------------- |
| Filled card pressed container elevation | `md.comp.filled-card.pressed.container.elevation` | `md.sys.elevation.level0` |

**Pressed (ripple) / State layer**

| Name                                    | Token                                             | Value                                      |
| --------------------------------------- | ------------------------------------------------- | ------------------------------------------ |
| Filled card pressed state layer color   | `md.comp.filled-card.pressed.state-layer.color`   | `md.sys.color.on-surface`                  |
| Filled card pressed state layer opacity | `md.comp.filled-card.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

**Dragged / Container**

| Name                                    | Token                                             | Value                     |
| --------------------------------------- | ------------------------------------------------- | ------------------------- |
| Filled card dragged container elevation | `md.comp.filled-card.dragged.container.elevation` | `md.sys.elevation.level3` |

**Dragged / State layer**

| Name                                    | Token                                             | Value                                      |
| --------------------------------------- | ------------------------------------------------- | ------------------------------------------ |
| Filled card dragged state layer color   | `md.comp.filled-card.dragged.state-layer.color`   | `md.sys.color.on-surface`                  |
| Filled card dragged state layer opacity | `md.comp.filled-card.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` |

### Outlined card states

![Diagram of 5 outlined card states](https://lh3.googleusercontent.com/knnDmfc6SIH-85gkuLOhQRHJhvHpPRGu_OzMgaQMMtDnloC-fCR1jJl1PGG0AP72kt6sqmBKlZgIbQ80HKeubSnxa5_zUOYcA0-Ip1hiQV4=s0)

1. Hovered
2. Focused
3. Pressed
4. Dragged
5. Disabled

**Hovered / Container**

| Name                                    | Token                                             | Value                     |
| --------------------------------------- | ------------------------------------------------- | ------------------------- |
| Outlined card hover container elevation | `md.comp.outlined-card.hover.container.elevation` | `md.sys.elevation.level1` |

**Hovered / State layer**

| Name                                    | Token                                             | Value                                    |
| --------------------------------------- | ------------------------------------------------- | ---------------------------------------- |
| Outlined card hover state layer color   | `md.comp.outlined-card.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| Outlined card hover state layer opacity | `md.comp.outlined-card.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

**Hovered / Outline**

| Name                              | Token                                       | Value                          |
| --------------------------------- | ------------------------------------------- | ------------------------------ |
| Outlined card hover outline color | `md.comp.outlined-card.hover.outline.color` | `md.sys.color.outline-variant` |

**Focused / Focus indicator**

| Name                                    | Token                                                  | Value                                       |
| --------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| Outlined card focus indicator thickness | `md.comp.outlined-card.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Outlined card focus indicator offset    | `md.comp.outlined-card.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |
| Outlined card focus indicator color     | `md.comp.outlined-card.focus.indicator.color`          | `md.sys.color.secondary`                    |

**Focused / Container**

| Name                                    | Token                                             | Value                     |
| --------------------------------------- | ------------------------------------------------- | ------------------------- |
| Outlined card focus container elevation | `md.comp.outlined-card.focus.container.elevation` | `md.sys.elevation.level0` |

**Focused / State layer**

| Name                                    | Token                                             | Value                                    |
| --------------------------------------- | ------------------------------------------------- | ---------------------------------------- |
| Outlined card focus state layer color   | `md.comp.outlined-card.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| Outlined card focus state layer opacity | `md.comp.outlined-card.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

**Focused / Outline**

| Name                              | Token                                       | Value                     |
| --------------------------------- | ------------------------------------------- | ------------------------- |
| Outlined card focus outline color | `md.comp.outlined-card.focus.outline.color` | `md.sys.color.on-surface` |

**Pressed (ripple) / Container**

| Name                                      | Token                                               | Value                     |
| ----------------------------------------- | --------------------------------------------------- | ------------------------- |
| Outlined card pressed container elevation | `md.comp.outlined-card.pressed.container.elevation` | `md.sys.elevation.level0` |

**Pressed (ripple) / State layer**

| Name                                      | Token                                               | Value                                      |
| ----------------------------------------- | --------------------------------------------------- | ------------------------------------------ |
| Outlined card pressed state layer color   | `md.comp.outlined-card.pressed.state-layer.color`   | `md.sys.color.on-surface`                  |
| Outlined card pressed state layer opacity | `md.comp.outlined-card.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

**Pressed (ripple) / Outline**

| Name                                | Token                                         | Value                          |
| ----------------------------------- | --------------------------------------------- | ------------------------------ |
| Outlined card pressed outline color | `md.comp.outlined-card.pressed.outline.color` | `md.sys.color.outline-variant` |

**Dragged / Container**

| Name                                      | Token                                               | Value                     |
| ----------------------------------------- | --------------------------------------------------- | ------------------------- |
| Outlined card dragged container elevation | `md.comp.outlined-card.dragged.container.elevation` | `md.sys.elevation.level3` |

**Dragged / State layer**

| Name                                      | Token                                               | Value                                      |
| ----------------------------------------- | --------------------------------------------------- | ------------------------------------------ |
| Outlined card dragged state layer color   | `md.comp.outlined-card.dragged.state-layer.color`   | `md.sys.color.on-surface`                  |
| Outlined card dragged state layer opacity | `md.comp.outlined-card.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` |

**Dragged / Outline**

| Name                                | Token                                         | Value                          |
| ----------------------------------- | --------------------------------------------- | ------------------------------ |
| Outlined card dragged outline color | `md.comp.outlined-card.dragged.outline.color` | `md.sys.color.outline-variant` |

---

## Responsive/Adaptive Design

As cards scale to adapt to different window size classes, their position and alignment can change. Cards and their elements can align left, right, or center as the layout scales.

![2 cards on mobile expand to 4 cards on tablet](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukkvy8-34.png?alt=media&token=92195d5b-d44d-434e-98d5-dbe6c60d798b=s0)

### Ergonomics

Adjust card layout to meet the ergonomic needs of large screens. A horizontally-oriented card in a compact window may become a larger, vertically-oriented card in an expanded window, with more space for images and text.

![Card sizes change from mobile to tablet](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuklb57-35.png?alt=media&token=888f14f9-99d5-4ab6-8dae-282257f1f47e=s0)

### Visual presentation

Allow components like lists, cards, and images to optimize space while filling the region suitable for a device breakpoint's ergonomic needs.

![2 cards with optimized space: 1 narrow rectangle, 1 wide square](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukluzj-36.png?alt=media&token=ecf624d2-b9a0-4222-8159-044022c2bce0=s0)

![Same card with two different orientations and element positioning](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukmfqz-37.png?alt=media&token=b5f7ca2b-ac45-47fe-832f-0fe359568750=s0)

### Column-based layouts

On mobile, cards stretch to fill the full screen width. On larger screens with expanded window sizes, use multiple columns. Rearrange related cards into horizontal rows or carousels for better content organization.

![3 related cards in a carousel](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukn6ma-38.png?alt=media&token=98eabd10-f4cd-457d-a7fc-d4767ce3ef57=s0)

### Small screens

On smaller screens (compact window size), consider swapping cards for lists, which display images and text in a more compact form. Ensure that controls, actions, and other component-specific elements are maintained.

---

## Accessibility

### Interaction model

A card can be either a non-actionable container that holds actionable elements (buttons, links), or a directly actionable element with no nested actions. Avoid stacking actionable elements on an actionable surface.

![2 possible card interaction behaviors](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuobzmz-1.png?alt=media&token=43522d6c-0a33-4b98-8cf8-3e7db99cd337=s0)

1. Non-actionable card with buttons
2. Directly actionable card with no buttons

### Touch

Tapping a directly actionable card produces a ripple across the card as feedback. Non-actionable cards do not ripple.

### Dragging and dismissing

Any dragging and swiping interactions need a single-pointer alternative to meet accessibility standards. For example, tapping or pressing-and-holding should open a menu to change position in a list or delete the card.

![A menu over a card that doesn't totally obscure the card](https://lh3.googleusercontent.com/UtnmXzj_hGKzI5R_xHaZroWQFz8QVFP84FZQS0iNVQIeJqE0-5q6CQGAszShyOylV59mHPIT3kyfXHFxAmJ34OD3CcE0yO1anFh0UoEwXXo=s0)

Caution: Ensure that the menu doesn't cover the card.

### Cursor

When a directly actionable card is hovered, the hover state provides a visual cue that the element is interactive. Non-actionable cards do not have a hover state. Clicking a directly actionable card produces a ripple.

### Focus

All interactive elements of cards need a tab stop so they can be focused. Directly actionable cards are themselves tab stops. For non-actionable cards, the card itself is not a tab stop, but every actionable element within it is.

![The focus areas of a card with interactive elements](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuodgu3-5.png?alt=media&token=3f2cf54f-c991-49bf-bf2a-447a25e2657a=s0)

![Card layouts can change on different devices](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuoeob6-6.png?alt=media&token=be7c42c2-1676-4bb7-a654-8bdfcc83691b=s0)

### Keyboard navigation

| Keys              | Actions                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tab**           | Move to the next actionable element. Directly actionable cards: move to next card container. Non-actionable cards with actionable elements: move to next actionable element within card |
| **Space / Enter** | Confirm action                                                                                                                                                                          |

### Labeling elements

Informative card contents are verbalized by screen readers when navigated to. Purely decorative images should be hidden from screen readers. All actionable elements must receive both screen reader and keyboard focus.

Directly actionable cards can have the **button** or **link** role, depending on usage. Non-actionable cards are purely containers and do not need a role.

![Card elements annotated in screen reader tab order](https://lh3.googleusercontent.com/kRZc33v7W2dec-MuK-hHKuYiBNxg2bd94Nl5lLgVpvf6JgZqUcU41USNzujmZqRUy3FjNddyFflMj37GqpyDMartw2BuUumFsfwjSxepog_T=s0)

1. Heading
2. Image
3. Body text
4. Primary button
5. Secondary button

---

## M2 to M3 Differences

- **Color**: New color mappings and compatibility with dynamic color.
- **Elevation**: Lower elevation and no shadow by default.
- **Variants**: Three official card variants -- elevated, filled, and outlined.

![M3-style card](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuimnd8-2.png?alt=media&token=c9ef2b3a-985a-487b-b521-de02ce44c8e0=s0)
