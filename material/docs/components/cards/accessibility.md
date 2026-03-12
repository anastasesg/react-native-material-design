---
url: https://m3.material.io/components/cards/accessibility
lastmod: 2025-09-26
crawled_at: 2026-03-08T00:00:00.000Z
category: components
section: cards
page_type: accessibility
status: complete
---

# Cards

Cards display content and actions about a single subject

## Use cases

People should be able to do the following using assistive technology:

- Navigate to a card and the elements within a card
- Get appropriate feedback based on input type documented under [Interaction & style](#interaction--style)

## Interaction & style

A card can be a non-actionable container that holds actions like buttons and links, or it can be directly actionable without any buttons or links. This is to avoid stacking actionable elements. An action shouldn't be placed on an actionable surface.

![2 possible card interaction behaviors.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuobzmz-1.png?alt=media&token=43522d6c-0a33-4b98-8cf8-3e7db99cd337=s0)

1. Non-actionable card with buttons
2. Directly actionable card with no buttons

### Touch

When a user taps on a directly actionable card, a touch ripple appears across the card, indicating feedback.

Non-actionable cards don't ripple.

<!-- Video: Touch: Tap -->

### Dragging and dismissing

To meet Material's accessibility standards, any dragging and swiping interactions need a single-pointer alternative, like selecting the same actions from a menu.

For example, tapping a card, or pressing and holding, should open a menu to change its position in a list. That menu could also contain an action to delete the card.

<!-- Video: Use containers like bottom sheets or menus to show single-pointer options -->

It isn't recommended to place menus on top of the card on the draggable state. If doing so is necessary, ensure that the interaction can be completed.

![A menu over a card that doesn't totally obscure the card.](https://lh3.googleusercontent.com/UtnmXzj_hGKzI5R_xHaZroWQFz8QVFP84FZQS0iNVQIeJqE0-5q6CQGAszShyOylV59mHPIT3kyfXHFxAmJ34OD3CcE0yO1anFh0UoEwXXo=s0)

_Caution: Ensure that the menu doesn't cover the card_

### Cursor

When a directly actionable card is hovered, the hover state provides a visual cue to the person that the element is interactive. Non-actionable cards don't have a hover state.

When a directly actionable card is clicked, a ripple appears, providing feedback.

<!-- Video: Cursor: Hover, Click -->

### Keyboard

A focus indicator appears around actionable elements when tabbing through cards. This provides a visual cue to a person that the destination is now focused and an action can be taken.

A person can **Tab** to navigate between actionable elements of the cards. If the cards are non-actionable, **Tab** navigates directly to the actionable buttons or links within the cards.

When engaging with a focused actionable card or element using the **Space** or **Enter** key, an action is performed or a secondary action is available, such as a menu.

Within the menu, a person is able to **Arrow** through the menu items, **Space** or **Enter** to select an item, or **Tab** to exit.

<!-- Video: Keyboard: Tab, Arrows -->

## Focus

All interactive elements of cards need a tab stop so they can be focused. Directly actionable cards are tab stops.

For non-actionable cards, the card itself is not a tab stop. However, every actionable element in the card is a tab stop so they're all visited before focus navigates to the next card.

![The focus areas of a card with interactive elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuodgu3-5.png?alt=media&token=3f2cf54f-c991-49bf-bf2a-447a25e2657a=s0)

_Use **Tab** to navigate through all buttons in a card_

![Cards forming a list on mobile and cards forming a gallery on tablet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuoeob6-6.png?alt=media&token=be7c42c2-1676-4bb7-a654-8bdfcc83691b=s0)

_Card layouts can change on different devices_

## Keyboard navigation

| Keys                   | Actions                                                                                                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tab**                | Move to the next actionable element. **Directly actionable cards:** Move to next card container. **Non-actionable cards with actionable elements:** Move to next actionable element |
| **Space** or **Enter** | Confirm action                                                                                                                                                                      |

## Labeling elements

The informative contents of a card are verbalized when navigating to them using a screen reader. If an image in a card is purely decorative, hide it from screen readers. All actionable elements must receive both screen reader and keyboard focus.

Directly actionable cards can have the **button** or **link** role, depending on how they're used.

Non-actionable cards are purely containers, so they don't need a role.

![Card elements annotated in the order that a screen reader tabs through them.](https://lh3.googleusercontent.com/kRZc33v7W2dec-MuK-hHKuYiBNxg2bd94Nl5lLgVpvf6JgZqUcU41USNzujmZqRUy3FjNddyFflMj37GqpyDMartw2BuUumFsfwjSxepog_T=s0)

_Non-actionable card elements are navigable, focused in order, and verbalized when in focus. In this example, the order is:_

1. Heading
2. Image
3. Body text
4. Primary button
5. Secondary button
