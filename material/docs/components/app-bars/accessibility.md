---
url: https://m3.material.io/components/app-bars/accessibility
lastmod: 2025-09-26
crawled_at: 2026-02-03T12:00:00.000Z
category: components
section: app-bars
page_type: accessibility
status: complete
---

# App bars

App bars are placed at the top of the screen to help people navigate through a product.

## Use cases

People should be able to do the following using assistive technology:

- Understand what page they're currently visiting
- Take actions or navigate to a new page destination
- Maintain access to app bar actions when the content is scrolled

## Interaction & style

### Touch

When tapping on an icon button, a touch ripple appears, indicating interaction feedback.

### Cursor

When hovered, the hover state provides a visual cue to the user that the element is interactive.

When clicked (in both active and inactive states), a ripple appears to indicate feedback.

### Keyboard or switch

When navigating to an interactive element, a focus indicator appears to show that action can be taken.

When the element is selected, an action is then performed.

### Initial focus

Focus should initially land on the leading button, since it's the first interactive element of the app bar.

![The tab button is used to navigate from the first button to the second button in the app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmac2b5xn-04-do.png?alt=media&token=4a8d709f-d622-46cb-b5ad-2644e2e082ab=s0)

_Use **Tabs** to navigate through interactive items_

![The space or enter button activates the second action.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmacofhfz-05.png?alt=media&token=0e42d198-bb24-440e-b182-c708d660bfd8=s0)

_Use **Space** or **Enter** to activate actions_

## Color

On search app bars, use the default color roles when possible.

- Search container: **surface container**
- Search label: **on surface variant**

On darker backgrounds, search bar containers can use the **surface bright** role to maintain strong visual contrast.

If mapping to other color roles, make sure the text and container have 3:1 contrast to ensure readability.

![A search app bar with default dark text on a light container background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmac1q2wd-06-do.png?alt=media&token=0716280e-4985-442b-b14a-e5fcf09dd2b4=s0)

_**Do:** Make sure search bars and their labels have at least 3:1 contrast. Use the default colors when possible._

![A search app bar with custom light text on a light container background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmac1qlov-07-dont.png?alt=media&token=f402e34e-0bac-44a5-ab07-a04d05ec1d6e=s0)

_**Don't:** Avoid using custom color roles for the search bar container and search label text. If custom roles are necessary, make sure they have contrast of at least 3:1._

## Keyboard navigation

| Keys           | Actions                                    |
|----------------|--------------------------------------------|
| Tab            | Move focus to the next interactive element |
| Space or Enter | Activate the focused element               |

## Labeling elements

The accessibility label for a title should be the same as the content within the title. If needed, add additional context to the accessibility label to ensure users understand what page they're on or what content is being shown.

Screen readers will read the UI text followed by the component's role.

![The headline has accessibility role "Title".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmac2fot7-08.png?alt=media&token=6020c205-0ec8-4f0e-a126-27339414f18a=s0)

_An app bar's accessibility label can incorporate its UI text as well as additional context_

Label icon buttons according to their [accessibility guidelines](https://m3.material.io/components/icon-buttons/accessibility).

![The app bar icon button has the accessibility role "Button".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmacoisds-09.png?alt=media&token=05d5cd34-916e-42a9-b785-b74c8dbd19b7=s0)

_An icon button should be clearly labeled on the action it takes, like **View on map**_
