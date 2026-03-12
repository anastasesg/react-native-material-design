---
url: https://m3.material.io/components/radio-button/guidelines
lastmod: 2025-12-01
crawled_at: 2026-02-04T00:00:00.000Z
category: components
section: radio-button
page_type: guidelines
status: complete
---

# Radio button

Radio buttons let people select one option from a set of options

![1 radio button is selected from a list of 4 radio buttons of different ringtones.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc92xj30-01.png?alt=media&token=bc7a6af6-e440-4e83-9cf9-cd221f402f47=s0)

_Radio buttons_

## Usage

Radio buttons are the recommended way to allow users to make a single selection from a list of options.

Only one radio button can be selected at a time.

_Radio buttons should always be accompanied by clear inline labels_

Use radio buttons to:

- Select a single option from a set
- Expose all available options

![2 radio buttons are used for allowing or turning off notifications. 2 checkboxes are used for microphone and location access.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93t2tz-03.png?alt=media&token=7f07e07d-8370-4113-82b6-5721a31fd3dc=s0)

_Radio buttons are single-select, unlike checkboxes which are multi-select_

![Filter page with 4 sort by options as radio buttons. Relevance is selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93whon-04-do.png?alt=media&token=0cc566db-1677-4900-be3a-bc24c75d71c7=s0)

_Do: Use radio buttons when only one option can be selected from a list_

![Meal options page with the Additions item selected, along with 4 nested checkboxes for selecting various toppings. All checkboxes are selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93wr1q-05-do.png?alt=media&token=4b1a71e3-2793-49ef-ab32-3a6493886899=s0)

_Do: Use checkboxes when multiple options can be selected from a list_

Avoid nesting radio buttons or using radio buttons to select multiple options.

![Selected radio button with 2 nested radio buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93ykkg-06_dont.png?alt=media&token=4ec7a39d-a607-42d0-9d65-4f5aa1a5ff8d=s0)

_Don't: Don't nest radio buttons_

![2 radio buttons selected at once from a list of 3 buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93z4ss-07_dont.png?alt=media&token=0bc0f856-f056-4239-a7c7-81f173eb17f3=s0)

_Don't: Don't allow radio buttons to select multiple options_

### Alternate selection controls

Radio buttons are one of several selection controls, which allow people to make choices such as selecting options or switching settings on or off.

Switches and checkboxes are alternative selection controls that can be used to change settings or preferences.

![A selected and unselected switch.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc942yik-08.png?alt=media&token=4e62fb39-faac-4b27-a772-177524e99566=s0)

_Switches_

![An unselected and selected checkbox.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc942but-09.png?alt=media&token=d4f7cae0-6eea-4a17-b9d3-8fbb5c14152e=s0)

_Checkboxes_

Use radio buttons when there are five or fewer options.

Consider using a drop-down menu instead of radio buttons when it's important to save space on a screen. However, drop-down menus require additional steps for a person, both in the number of clicks and cognitive effort.

![A filter UI with 1 radio button selected from a list of 3 buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc944w0k-10-do.png?alt=media&token=aa3e3c6c-e2a9-403a-b6dd-0143c3cdd3cc=s0)

_Do: Use radio buttons when there are five or fewer options_

![A dropdown menu with a list of 4 options.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc945hgt-11-do.png?alt=media&token=8447a05a-5a0e-410b-8c1a-08854aa456b8=s0)

_Do: Consider using a drop-down menu instead of radio buttons when space is constrained_

## Anatomy

![3 elements of a radio button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0z4md9-12.png?alt=media&token=1f3f5d82-b6f9-4b8f-b457-1a4935648df0=s0)

1. Selected icon
2. Adjacent label text
3. Unselected icon

### Adjacent label text

Always pair radio buttons with an adjacent label describing what the radio button selects.

Because only one radio button can be selected at a time, each choice must have its own label.

_Radio button always need label text_

## Placement

Radio buttons are often arranged in stacked layouts.

![Settings page with 3 stacked radio buttons for selecting a language.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc949gf8-14.png?alt=media&token=452d1dc1-2c20-4637-a479-3659c8737df7=s0)

Radio buttons should be vertically listed and have one option always selected.

![3 radio buttons with 1 option selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc94bpsi-16_do.png?alt=media&token=b528a4f2-ab4a-40fc-bdf2-bbd1caa1d08c=s0)

_Do: Radio buttons should always have one option pre-selected_

![2 radio buttons side by side with 1 option selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwg86p38-16_caution.png?alt=media&token=e607157e-0a21-43aa-aa48-a01f13e6fb3b=s0)

_Caution: Avoid using horizontal radio button lists_

## Behavior

A radio button is successfully selected when a person clicks or taps either the radio button icon or the label.

_Radio buttons should take effect immediately, unless they're in a dialog or page that needs to be saved_
