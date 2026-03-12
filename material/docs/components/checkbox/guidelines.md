---
url: https://m3.material.io/components/checkbox/guidelines
lastmod: 2025-12-01
crawled_at: 2026-02-03T00:00:00.000Z
category: components
section: checkbox
page_type: guidelines
status: complete
---

# Checkbox

Checkboxes let users select one or more items from a list, or turn an item on or off

![A list of burger additions represented with checkboxes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0yt1n6-1.png?alt=media&token=e687e377-f0e9-4a8c-8323-97b6f3b03b2d=s0)

_Checkboxes in a list of items_

## Usage

Use checkboxes to:

- Select one or more options from a list
- Present a list containing sub-selections
- Turn an item on or off in a desktop environment
- Visually group similar options together

![List of 80's songs indicating choice through checkbox selection.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vnl39-2.png?alt=media&token=a6b2f259-cb48-4e43-9699-e20e94c0d737=s0)

_Checkboxes select multiple, related options_

Checkboxes should be used instead of [switches](/components/switch) if multiple, related options can be selected from a list. Checkboxes visually group similar items effectively and take up less space than switches.

![List indicating choice with checkbox selection.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vok05-3_do.png?alt=media&token=6dd5d04d-babd-45cf-b7f8-a5e95ab275ff=s0)

_Do: Checkboxes let users select one or more options from a list. A parent checkbox allows for easy selection or deselection of all items._

![A list with multiple switches selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vwf9n-4_dont.png?alt=media&token=049701a4-cc33-442f-8e4e-db9c79aa40fa=s0)

_Don't: If a list consists of multiple options, don't use switches. Instead, use checkboxes. Checkboxes imply the items are related, and take up less visual space._

### Alternate selection controls

Checkboxes, [radio buttons](/components/radio-button), and switches are the three main types of selection controls. They all help people make choices, like selecting options or switching settings on or off.

Use checkboxes to select multiple related options in a list.

Use radio buttons to select a single option in a list.

Use switches to select standalone or more verbose options in a list, like settings.

![Diagram of 2 radio buttons, one selected and one unselected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcypcjyf-5.png?alt=media&token=e0bb850c-365e-424b-aaa7-703285e8a6ea=s0)

_Radio buttons_

![Diagram of 2 switches, one selected and one unselected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vwj88-6.png?alt=media&token=9323d5db-9e97-4df0-a4b0-2cf2136cf1d2=s0)

_Switches_

## Anatomy

![Diagram of checkbox indicating the 2 parts of its anatomy.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcypfx6t-7.png?alt=media&token=5f2b1048-7e0f-45f5-8f9b-3f09fab4e910=s0)

1. Container
2. Icon

## Responsive layout

In [expanded window sizes](/foundations/layout/applying-layout/window-size-classes), placing checkboxes within a contained region such as a [side sheet](/components/side-sheets) can help group related controls and available actions.

![Desktop screen showing music albums and a side sheet containing checkboxes for filtering music genres.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vp83b-8.png?alt=media&token=ccabbf13-9b61-4bec-938e-708c502111b0=s0)

_A side sheet can group related controls on larger screens_

## Behavior

Multiple checkboxes in a list can be selected.

_Selecting multiple items in a list using checkboxes_

Checkboxes can have a parent-child relationship with other checkboxes.

- When the parent checkbox is checked, all child checkboxes are checked
- If a parent checkbox is unchecked, all child checkboxes are unchecked
- If some, but not all, child checkboxes are checked, the parent checkbox becomes an indeterminate checkbox. Checking an indeterminate checkbox checks all child items.

_Use a parent checkbox to make it more efficient to select many items_

When selected, a checkbox clearly and instantly communicates its selected state.

If used to turn something on or off, the action should be immediately executed.

_Turning an item on or off using a checkbox_
