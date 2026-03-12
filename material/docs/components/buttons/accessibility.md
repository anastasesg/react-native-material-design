---
url: https://m3.material.io/components/buttons/accessibility
lastmod: 2025-11-27
crawled_at: 2026-02-03T00:00:00.000Z
category: components
section: buttons
page_type: accessibility
status: complete
---

# Buttons

Buttons prompt most actions in a UI

## Use cases

People should be able to do the following using assistive technology:

- Use a button to perform an action
- Navigate to and activate a button

## Interaction & style

### Color contrast

Enabled buttons need a 3:1 contrast ratio with the background to meet accessibility best practices.

This is measured from the container for elevated, filled, and tonal button styles, and the label text for outlined and text button styles.

![Diagram of color contrast ratios for buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmah4xmp9-1.png?alt=media&token=5db71bb4-7aa7-44a0-80e5-3500cbf19527=s0)

_Higher contrast helps differentiate elements_

### 200% text size

Avoid excessive text wrapping or truncation by choosing concise strings.

On Android, button labels should be kept concise enough to fit within two lines after the text size is increased to 200%. If a button label exceeds this limit and gets truncated, provide an alternative way to access the full content in a single tap.

![200% text size on a mobile screen. The overly long button text wraps to a second line: "Download playlist for offline access".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8x27kbt-2.png?alt=media&token=4cf85c66-b195-41c0-85cd-f516c70f50b4=s0)

_Caution: Avoid excessive text wrapping or truncation by choosing concise strings_

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Navigate to a button |
| Space or Enter | Activate a button |

## Labeling elements

The accessibility label for a button should match the visible label text on the button such as **Done**, **Send**, or **Reply**. It can contain extra contextual information if necessary.

![Accessibility tags for a text-only button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ghhzjt-4.png?alt=media&token=e25d75b4-2d6d-4532-b5e9-fdc04c79ed46=s0)
