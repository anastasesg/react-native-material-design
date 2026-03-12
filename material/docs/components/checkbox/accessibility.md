---
url: https://m3.material.io/components/checkbox/accessibility
lastmod: 2025-12-01
crawled_at: 2026-02-03T00:00:00.000Z
category: components
section: checkbox
page_type: accessibility
status: complete
---

# Checkbox

Checkboxes let users select one or more items from a list, or turn an item on or off

## Use cases

People should be able to use assistive technology to:

- Navigate to a checkbox
- Toggle the checkbox on and off
- Get appropriate feedback based on input type documented under [Interaction & style](#interaction--style)

## Interaction & style

Users should be able to select either the text label or the checkbox to select an option.

![In a list, checkboxes for 2 items are selected via their text labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vkh7s-1.png?alt=media&token=7e1977e6-bb1a-4a66-b82b-3e0fddb18e2f=s0)

_A checkbox selected via the text label_

The parent checkbox has three states: selected, unselected, and indeterminate.

Checkboxes can be selected or unselected regardless of the state of the other checkboxes in a group.

If some, but not all, child checkboxes are checked, the parent checkbox becomes indeterminate. Selecting an indeterminate parent checkbox will check all of its child checkboxes.

![In a list, a child checkbox for 1 item is selected and the parent checkbox is in indeterminate state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcyq4z51-2.png?alt=media&token=e2bf5c82-a9b2-403d-a5cd-fe09f708969a=s0)

_An indeterminate selection indicating that at least one checkbox is selected within a group_

## Avoid applying density by default

Don't apply density to checkboxes by default - this lowers their targets below our best practice of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure that this density setting can be easily reverted when it's active, keep all the targets to change it at minimum 48x48 CSS pixels each.

## Keyboard navigation

| Keys                   | Actions                                               |
|------------------------|-------------------------------------------------------|
| **Tab**                | Moves focus to enabled checkbox or checkbox group     |
| **Space** or **Enter** | Activates, selects, or deselects the focused checkbox |
| **Arrows**             | Moves focus between checkboxes                        |

## Labeling elements

If the UI text is correctly linked to the checkbox, assistive tech (such as a screen reader) will read the UI text followed by the component's role.

The accessibility label for an individual checkbox is typically the same as its adjacent text label.

![Accessibility labels of a checkbox.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vlqi0-3.png?alt=media&token=991b19e5-257d-4db0-9f2b-bc0ab092eeda=s0)

_The accessibility label clearly states the text label of the checkbox_
