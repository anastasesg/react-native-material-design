---
url: https://m3.material.io/components/side-sheets/guidelines
lastmod: 2026-01-26
crawled_at: 2026-03-07T21:25:00.000Z
category: components
section: side-sheets
page_type: guidelines
status: complete
---

# Side sheets

Side sheets show secondary content anchored to the side of the screen

![Side by side comparison of a standard and a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqqqohk-01.png?alt=media&token=51d3df6c-574b-4aaf-bd7a-b70c47c82c6a=s0)

- Standard side sheet
- Modal side sheet

## Usage

Standard side sheets are supplementary surfaces used mostly in medium to expanded window sizes, like tablet and desktop. They provide a consistent and predictable surface for contextual actions and information.

Standard side sheets display content that complements the screen's primary content. They remain visible while people interact with primary content.

Common uses include:

- Displaying a list of actions that affect the screen's primary content, such as filters
- Displaying supplemental content and features

![Standard side sheet showing supplementary information about a photo.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqr6mnd-02.png?alt=media&token=8c90dc20-b3b0-4725-9130-ba118c870255=s0)

_Information about a photo in a standard side sheet_

Modal side sheets are preferred in compact window sizes, like mobile, due to limited screen size.

They can display the same kinds of content as standard side sheets, but must be dismissed in order to interact with the underlying content.

![Modal side sheet showing filter controls.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrab5f-03.png?alt=media&token=0729930f-cd91-430a-ad7a-3c74997f4771=s0)

_Modal side sheet with filter controls_

Side sheets have a fixed width and typically span the height of the screen.

Their dimensions depend on how the app's layout is subdivided into UI regions.

![A modal sheet at the right of a screen, with the correct inset.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrlvws-04-do.png?alt=media&token=1a29c903-cb7f-4b43-917f-8a584edc828b=s0)

_Do: Place side sheets along the edge of the screen, usually on the right side to avoid interference with any navigational components on the left edge. They can be slightly inset by 16dp._

![A modal side sheet at the right of the screen with the wrong inset.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrngv8-05-don't.png?alt=media&token=6167c058-b004-42fb-a408-c1f3f8bdea12=s0)

_Don't: Don't inset a side sheet from the screen edges far beyond the recommended margin. This makes the sheet's position and scroll behavior unclear, while obscuring primary content._

## Anatomy

![4 elements of a standard side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrqfpt-06.png?alt=media&token=b39ae6aa-ee8b-45cb-9d9b-c3aab1f16a67=s0)

1. Divider (optional)
2. Headline
3. Container
4. Close icon button

![7 elements of a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrrjh7-07.png?alt=media&token=989dc9f2-073d-4b86-8889-02ea9651aaf1=s0)

1. Back icon button (optional)
2. Headline
3. Container
4. Close icon button
5. Divider (optional)
6. Action buttons (optional)
7. Scrim

### Container

Side sheet containers hold all side sheet elements. Their size is determined by the space those elements occupy.

The container is the only required element of a side sheet.

![A modal side sheet's container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsampe-08.png?alt=media&token=6de272f2-1434-4002-8037-f40e904d54b8=s0)

1. Container

### Back icon button (optional)

Icon buttons can provide ways to exit a side sheet or move to a different experience.

Because the primary content behind or beside a side sheet is always visible, it's important to provide affordances for leaving a side sheet and returning to the primary content.

![Back icon button on the upper left of a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsgqgs-09.png?alt=media&token=77f536ad-a501-4715-9655-d5b7fdcab733=s0)

1. Back icon button

### Close icon button (optional)

A close affordance provides a consistent method for dismissing a side sheet.

A close icon button is highly recommended, increases accessibility, and makes focused side sheets easier to close.

![Close icon button on the upper right of a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsns8t-10.png?alt=media&token=94c3975a-172e-42aa-b2ab-a335f9c9e858=s0)

1. Close icon button

### Action buttons (optional)

Buttons represent actions available from a side sheet. Examples: **Save**, **Edit**, **Download**

Use elevation, fill, and tone to call attention to specific actions.

![Save and cancel buttons at the bottom of a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsw3fe-11.png?alt=media&token=4452e717-8e08-4dc3-b1aa-a63252feeae1=s0)

1. Action buttons

### Divider (optional)

Dividers can separate different kinds of content and create distinct regions in a side sheet.

Use a divider to separate:

- Action buttons from content
- User-generated content from system-generated content

![Horizontal divider on a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsz2ma-12.png?alt=media&token=7c14f328-775a-4c98-9513-1600f48affbe=s0)

1. Divider

### Content (optional)

Side sheets can display a wide variety of content and layouts, ranging from a list of actions to supplemental content in a tabular layout.

![2 side sheets with different content displayed side by side.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqt0pai-13.png?alt=media&token=9a10a8aa-ec40-4657-9bd9-b0447cbbb01e=s0)

_Form controls shown in a side sheet for app settings_

<!-- Video: Modal side sheets on smaller screens can transition to standard side sheets at larger screen sizes -->

_Modal side sheets on smaller screens can transition to standard side sheets at larger screen sizes_

## Adaptive design

Side sheets have a default width, but can be resized depending on the needs of the layout.

When a standard side sheet opens, the body area shrinks to accommodate the sheet's width while maintaining a margin on the body's trailing edge.

<!-- Video: Entrance of standard side sheets will cause the body area to adjust and accommodate the new content -->

_Entrance of standard side sheets will cause the body area to adjust and accommodate the new content_

### RTL language support

In right-to-left (RTL) languages, side sheets should appear on the left edge of the window with all elements reversed.

![Side sheet along the left edge of a screen. All buttons and icons are reversed.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqwb27c-16.png?alt=media&token=5b9ae114-f5ae-4f03-ada2-88ffe3f7f5c1=s0)

_Side sheet elements are reversed in RTL languages_

## Behavior

Side sheets can vertically scroll independent of the rest of the UI.

This allows their scroll position and content to persist while the page is scrolled, and vice versa.

Side sheets cannot scroll horizontally.

<!-- Video: Side sheets can vertically scroll internally when their content exceeds the screen height -->

_Do: Side sheets can vertically scroll internally when their content exceeds the screen height_

![A side sheet appears to scroll horizontally.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw8z3x56-19_don't.png?alt=media&token=b2f8c1b7-ea55-4f8a-b3de-6b9b51be72f9=s0)

_Don't: Don't allow horizontal scrolling or lay out the side sheet in a way that suggests horizontal scrolling. A side sheet's narrow width leaves limited space to fully view items._

### Predictive back

On Android, a gesture called [predictive back](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md) allows a person to swipe left or right on the side sheet.

When predictive back is used:

- The side sheet detaches from the top and bottom edges of the screen to signal it will close
- The previous screen is revealed in a preview
- The side sheet and its content always scales in the direction of the gesture

[Find a list of compatible components](https://m3.material.io/m3/pages/gestures#22462fb2-fbe8-4e0c-b3e7-9278bd18ea0d)

<!-- Video: Preview of the result of the gestures: release to commit, fling to commit, and cancel -->

_Preview of the result of the gestures: release to commit, fling to commit, and cancel_
