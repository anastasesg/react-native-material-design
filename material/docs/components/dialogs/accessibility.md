---
url: https://m3.material.io/components/dialogs/accessibility
lastmod: 2025-12-01
crawled_at: 2026-03-08T00:28:00.000Z
category: components
section: dialogs
page_type: accessibility
status: complete
---

# Dialogs

Dialogs provide important prompts in a user flow

## Use cases

People should be able to use assistive technology to:

- Open and close a dialog
- Provide and submit other inputs if the dialog is interactive, such as a [text field](https://m3.material.io/components/text-fields) or selectable [list](https://m3.material.io/components/lists)
- Scroll the dialog to access all of its contents if that content extends beyond the container of the dialog

## Interaction & style

### Use sparingly

Dialogs are purposefully interruptive. This means they appear in front of app content and disrupt the flow of content for people who may, for example, be using a screen reader to navigate the page.

As such, dialogs should be used sparingly and only to provide critical information. Less critical information should be presented in a non-blocking way within the flow of app content.

![An inline tooltip doesn't block a photo app's content on a mobile screen. A modal dialog blocks the content of a photo app on a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgve0z-01_do.png?alt=media&token=15a731c6-5d4e-4b65-afb3-23b6275d0935=s0)

_Do: Present non-critical information using other UI within the flow of app content_

![A modal dialog blocks the content of a photo app on a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgvt7t-02_don't.png?alt=media&token=f88b6702-ef51-4b3b-97fc-c338539dc884=s0)

_Don't: Avoid putting non-critical information in a dialog_

### 200% text size

Avoid excessive text wrapping or truncation by choosing concise strings.

On Android, headlines should be kept concise enough to fit within **four** lines after the text size is increased to 200%. If a headline exceeds this limit and gets truncated, provide an alternative way to access the full content in a single tap.

![A dialog with 200% text wraps multiple times in the header and description. It covers most of the mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sh8mb2-03_caution.png?alt=media&token=f2a9bb8e-dfb7-46a9-a33f-20f895f8a834=s0)

_Caution: Avoid excessive text wrapping or truncation by choosing concise strings_

### Elements within dialogs

Because dialogs can contain various elements within them, refer to the relevant [accessibility](https://m3.material.io/foundations/overview/assistive-technology) guidelines for each element. Some common examples include:

- [Text fields](https://m3.material.io/components/text-fields)
- [Typography](https://m3.material.io/styles/typography)
- [Buttons](https://m3.material.io/components/buttons)

![3 elements of a full-screen dialog.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8x3m4cu-04.png?alt=media&token=4e645417-fc9a-48de-a66f-a3b5c5d16723=s0)

_Full-screen dialogs can contain various elements such as (1) text fields, (2) typography, and (3) buttons, which each may have their own accessibility guidelines_

## Initial focus

When a dialog appears, focus should automatically land on the first interactive element within the dialog.

![A modal dialog titled "Permanently delete?" whose second interactive element is focused by selecting the Tab key.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8wqpp2r-05.png?alt=media&token=d5214cf8-9fa2-458f-9e17-5db4e07235ba=s0)

_Initial focus lands on the first interactive element within a dialog. The tab key moves focus through the next interactive elements in a cycle._

![A modal dialog titled "Permanently delete?" whose previous interactive element is focused on by selecting both the Shift and Tab keys.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8wqq56l-06.png?alt=media&token=2eae0221-4a71-4ca5-b873-6d3bf94cbd23=s0)

_The shift and tab keys together move focus in the opposite direction. The space or enter key triggers or commits the action of the focused element._

## Keyboard navigation

| Keys           | Actions                                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Tab            | Focus lands on the next interactive element contained in the dialog, or the first element if focus is currently on the last element     |
| Shift + Tab    | Focus lands on the previous interactive element contained in the dialog, or the last element if focus is currently on the first element |
| Space or Enter | Triggers or commits the action of the [focused](https://m3.material.io/foundations/interaction/states/overview) element                 |
| Escape         | Closes the dialog                                                                                                                       |

## Labeling elements

The [accessibility](https://m3.material.io/foundations/overview/assistive-technology) label for a dialog is typically the same as the dialog's title or headline.

On web, basic dialogs should have the **alert dialog** role.

![An alert dialog with a title "Set up traffic updates?" Its label is "Set up traffic updates?" and its role as "Alert Dialog."](https://lh3.googleusercontent.com/lBX7M9XMiL98P1lM9cobZ7GLCzqaLJANo3iKDKkfG_RQRKbKZepzwsjLHXEDveGR3zjduX9QaCz-UIsW7qyHc2TqlHp_B-4RSR1BrYnZAPh-iw=s0)

_Basic dialogs are known as alert dialogs on web_

Components contained within the dialog, such as buttons, should be labeled according to the guidelines specific to those components. For common examples, see:

- [Buttons](https://m3.material.io/components/buttons)
- [Text fields](https://m3.material.io/components/text-fields)

![A full-screen dialog titled "New event" containing a "Save" button and a text field, both with their own accessibility labels.](https://lh3.googleusercontent.com/XhxNfz1cPdhx_FBTjgzNKRYc047mN_rLn5N3jQsdL7OCeMe61us_nf42-JVISOD0ZDkjPuXfKLMkPbfxfxPVEBmDdG_L2P1TvSx72RXXkGUV=s0)

_Elements within a dialog should be labeled according to their guidelines_
