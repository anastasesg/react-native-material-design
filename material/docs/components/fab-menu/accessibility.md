---
url: https://m3.material.io/components/fab-menu/accessibility
lastmod: 2025-09-26
crawled_at: 2026-02-04T00:00:00.000Z
category: components
section: fab-menu
page_type: accessibility
status: complete
---

# FAB menu

The floating action button (FAB) menu opens from a FAB to display multiple related actions

## Use cases

People should be able to do the following using assistive technology:

- Navigate and interact with the FAB menu
- Ensure focus is correct when navigating through the menu

## Interaction & style

FAB menu elements meet the minimum target size of 48dp.

![FAB menu measurement annotations. All elements are larger than the minimum target size.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am5xpn-01.png?alt=media&token=537719c2-9f5f-4d5d-ba85-2b59cdcd2c5b=s0)

_FAB menus have 48x48dp minimum width and sufficient spacing by default_

When the FAB menu can scroll, make sure the items scroll behind the close button.

The close button should always be easy to access and unobstructed.

![FAB menu items are scrolling behind the close button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am8l9a-02.png?alt=media&token=989423d2-f7cd-4b11-8ac1-115565b2ccc2=s0)

_Do: Allow the menu items to scroll behind the close button_

![FAB menu items are scrolling in front of the close button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am8ym2-03.png?alt=media&token=5fa58f68-9fae-4806-8754-4fe611b73f45=s0)

_Don't: Don't obstruct the close button in short screens like horizontal orientation_

## Initial focus

When the FAB is selected, the FAB menu opens, and initial focus remains on the close button, which takes the place of the original FAB.

Then the focus moves from the top menu item to the bottom.

![4 FAB menus with the focus order labelled. Focus moves from the close button at the bottom to the topmost menu item next.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaejeaf9-04.png?alt=media&token=d8a732b5-ad7b-4566-a92d-eccca8795f38=s0)

_Focus lands on the close button. People can then navigate through all the items._

Focus order:

1. Close button
2. First menu item
3. Second menu item
4. Third menu item

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Navigate to the next interactive element |
| Space or Enter | Activate the focused button or item |

## Labeling elements

The close button of the FAB menu should have the **button** role and label **close**.

![Accessibility labels for the close button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amemaw-05.png?alt=media&token=c723fed3-2d4d-4ca1-a34a-14899768c332=s0)

_Label the close button with the button role_

On mobile web, the items should have the **menu item** roles.

The menu items should have labels matching the UI text.

![Accessibility labels for the FAB menu items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ameviv-06.png?alt=media&token=861c3c91-6513-44ec-877a-bfa7c4cfc2ec=s0)

_Label each FAB menu item with the menu item role_
