---
url: https://m3.material.io/components/app-bars/guidelines
lastmod: 2025-09-26
crawled_at: 2026-03-09T14:30:17.000Z
category: components
section: app-bars
page_type: guidelines
status: complete
---

# App bars

App bars are placed at the top of the screen to help people navigate through a product.

![4 app bars with headlines and action icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabfte6a-01.png?alt=media&token=f039ad4d-b92b-4cf3-8396-7322b8f798d4=s0)

_App bars show information about the page, key actions, and navigation actions like **Back** or **Menu**_

## Usage

Use an app bar to provide content and actions related to the current page, such as page navigation actions, headlines, images, and 1-2 essential actions.

The information and actions in the app bar should be contextual and specific to a page, but can also include global product controls, such as search or notifications.

![App bar with navigation icon buttons and a 2-line title.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabg0scb-02.png?alt=media&token=ae25e6ef-91f4-44b9-aec4-f8b750ef9d0d=s0)

_App bars provide content and actions related to the current page_

App bars should only have one action, two if necessary.

The primary action should alter or exit the entire page, like **Send**, **Save**, or **Edit**.

If the product has many actions, place those in a toolbar. Avoid placing an overflow menu in the app bar when possible.

![App bar with content below.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabg2xro-03.png?alt=media&token=a336c1e6-1efc-499a-bb61-9299f4864a63=s0)

_App bars can display one high visibility action to boost its prominence_

To boost visibility of a primary action, change the style of the icon button to filled or tonal, and consider using a wide icon button.

Avoid using multiple filled or tonal buttons.

![App bar with 1 filled button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabg56v7-04-do.png?alt=media&token=bbbd7048-feef-4ba0-97a6-ddbac54f9c2f=s0)

_Do: Use a filled or tonal button for important actions_

![App bar with 2 filled buttons, side by side.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabg6mji-05-dont.png?alt=media&token=4b17f3dd-c941-40bc-b77e-d222e9cf8b65=s0)

_Don't: Don't put multiple filled or tonal buttons in the app bar_

The four variants of app bars are:

- **Search app bar** - Use on home pages when search is key to the product.
- **Small** - Use in dense layouts or when a page is scrolled.
- **Medium flexible** - Use to display a larger headline. It can collapse into a small app bar on scroll.
- **Large flexible** - Use to emphasize the headline of the page.

![4 app bars.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabgdnit-06.png?alt=media&token=8c4781d8-2d16-4f29-af83-4006d81f8dfc=s0)

_Search app bar | Small | Medium flexible | Large flexible_

### Baseline app bars

There are two baseline app bars that are no longer recommended:

- **Medium** - Replace with medium flexible.
- **Large** - Replace with large flexible.

![2 baseline app bars.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabgl5t0-07.png?alt=media&token=a12827b0-959f-46eb-aeaa-9f22fca97bc8=s0)

_Medium | Large_

## Search app bar

Use a search app bar to provide an emphasized entry-point to open the search view.

![A search bar within an app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmacnpwvx-08.png?alt=media&token=3115751d-7ae4-4e71-ac21-040706088374=s0)

_Search app bars have a search field instead of heading text_

Search bars should always include the word **Search**. They can use various capitalization styles depending on the product.

- **Search**
- Searching a specific area - Example: **Search inbox**
- Search [Product] - Example: **Search Photos**

![3 examples of search text in an app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmacnq0z7-09.png?alt=media&token=3a376767-994f-4362-9e28-36f87a9a3ec4=s0)

_Use proper capitalization depending on what's being searched_

### Buttons in search app bar

In addition to a trailing avatar, search app bars can have up to two trailing icons on mobile.

Trailing icons can be placed inside or outside the search bar.

![2 icons placed in the search bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabh92hi-10.png?alt=media&token=2442910b-5ed2-4721-bac6-292b1485f704=s0)

_Put the most used actions on the left and least used on the right_

The leading element of a search app bar can be used for a product's logo to brand the app's overall experience.

This logo can be purely cosmetic, or can trigger an action like returning to the home screen or refreshing it.

Avoid using a logo to open an expanded navigation rail.

![A search app bar with a logo, search bar, and avatar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmacnsbj2-11.png?alt=media&token=899f05b7-7504-478c-b684-a7b1cdcedfb3=s0)

_The leading element can be a product logo_

Don't use more than two trailing icon buttons with an avatar.

If more actions are needed, place them in a toolbar instead.

![3 icons placed in a search app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabhfzir-12-Dont.png?alt=media&token=6e09e8c1-3abf-457e-a1e7-876acb2dbf5d=s0)

_Don't: Don't use three icons and an avatar in a search app bar_

### Large screens

The search app bar dynamically adapts to available width. There should be up to four trailing icons on larger screens. [More on app bar adaptive design](https://m3.material.io/m3/pages/app-bars/guidelines#68917063-5b90-4575-892e-ae84e7010cd5)

![4 actions placed in a search app bar on a large screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabhkal5-13.png?alt=media&token=5464ae9b-1b4a-4483-a4e2-cbaecceb5a41=s0)

_Increased horizontal space on larger screens allows for up to four trailing icons_

### Alternate color options

By default, search containers in app bars use the **surface container** color to distinguish it from the app background. If the background is darker, use a lighter container color on the search bar, like **surface bright**.

When choosing alternate colors, make sure the search text and container have at least 3:1 contrast for readability.

![App bar with a light search container color.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmacpjhwh-14.png?alt=media&token=9a9b67f7-ab30-4080-a014-39c57e661441=s0)

_Search app bars can use different colors, like **surface bright**, for improved contrast with surrounding elements_

## Anatomy

![Diagram of app bar layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0b55y7j-7.png?alt=media&token=d1cafbc3-7463-4454-9d0c-423bedabad2d=s0)

1. Container
2. Headline
3. Trailing icons
4. Subtitle
5. Leading button

### Container

The app bar container holds all information and actions at the top of a screen, including navigation icons, headlines, and buttons.

Avoid changing the position or shape of the container.

![App bar with square corners.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmacnymv5-16-do.png?alt=media&token=4812c4fe-d9f0-4c4c-889f-342289409ff7=s0)

_Do: Use straight corners for app bars_

![App bar with curved corners.](https://lh3.googleusercontent.com/421oxw8zbQeVCZcpPdzXOoS8a65SNhcoW8ERU2J5uhBeT0aC1nbzHTd8ErYPaXc-z9gakgyPFJuUdMdKxQoLigbcORt8-HvuWBa9jHg2ts8=s0)

_Don't: Don't use curved shapes. This implies that the container can expand upon interaction._

Always use the default height of the app bar, and make it span the full width of the window.

![App bar at default height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm06c5i9x-10.png?alt=media&token=46af9cf4-db0d-47a6-aaac-0611140fabf9=s0)

_Do: Default heights were chosen to ensure readability of on-screen elements_

![App bar with reduced height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm06c7pi2-11.png?alt=media&token=d5e7cc1e-a2d8-4821-85be-e853237e1162=s0)

_Don't: Don't make an app bar shorter than its default height_

### Adding logos

Image logos can be used in app bars to bolster brand identity or visual appeal.

The image should be high quality and pertinent, and shouldn't disrupt the app bar's functionality.

![A logo added to an app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm06cdo9d-12.png?alt=media&token=3526c1df-5219-4218-ae43-11b497b9676d=s0)

_Image logos can replace all text in small app bars, and appear above the text in other app bars_

### Leading button

The leading button should be used for navigating the product.

It typically is one of the following:

- A menu icon, which opens a modal expanded navigation rail
- A back arrow, which returns to the previous screen

![Leading navigation icon aligned on left of app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm06ci326-13.png?alt=media&token=c7dddf19-abfd-4d7a-b056-f6905546b57d=s0)

_Leading **Back** button_

### Headline

The headline can describe:

- The current page
- The current section
- The product

Headline text should be brief enough to easily fit in the app bar.

In medium flexible and large flexible app bars, the headline can wrap to a second line.

Don't truncate the headline text.

![App bar headline text set in 2 lines.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm06cnnzl-14.png?alt=media&token=258617d8-c560-4abf-b4ce-101afa4092e9=s0)

_Do: If headline text is long, use a medium flexible or large flexible app bar and wrap the headline to two lines maximum_

![Small app bar headline text wrapped on 2 lines.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm06dt1lh-15.png?alt=media&token=c7029143-f49d-457f-a1d5-4e579b389f76=s0)

_Don't: Don't wrap text in a small app bar_

Headlines can be aligned to the leading edge or centered.

The headline's typography size and style change depending on the app bar variant.

![Search, small, medium and large flexible app bars with headline styles.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabiahay-24.png?alt=media&token=75e39d75-84b5-438b-9ecd-cad1d5bd2be8=s0)

_Headline typography style for each app bar:_

- Search: Body large
- Small: Title large
- Medium flexible: Headline medium
- Large flexible: Display small

### Subtitle

Subtitles can add additional context to a page.

These can be leading-aligned or center-aligned with the headline text.

![Small to large flexible app bars with headline and subtitle styles.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0b5661m-17.png?alt=media&token=e8a3c162-2074-47b7-bfde-a8a68b2672ca=s0)

_Subtitle typography style for each app bar:_

- Small: Label medium
- Medium flexible: Label large
- Large flexible: Title medium

### Trailing icon buttons

Up to two icon buttons can be placed after the headline, aligned to the trailing edge of the app bar. Place most-used actions closest to the leading edge.

Avoid using these buttons to open a menu with more actions. If more actions are needed, place them in a toolbar instead.

If changing the icon button color style to filled or tonal, only use one icon button.

![2 icons placed to right of headline, from most to least used.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmac8ti72-26.png?alt=media&token=ec718ac8-cb40-4c54-bfcf-768a0d1c2979=s0)

_Put the most used actions on the left and least used on the right_

Use filled icons when possible for the best visibility. Outlined icons can also be used, particularly for unselected toggle buttons.

![App bar with 2 filled icons, "save" and "download."](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm06kz6lf-19.png?alt=media&token=79f4e280-6ccc-4ec8-94d4-94ac9e27348f=s0)

_Do: Use filled icons for clear, visible actions_

![App bar with 2 outlined icons, "save" and "download."](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm06l0j4v-20.png?alt=media&token=9de80920-41c7-4193-90be-2dec3589e047=s0)

_Caution: Outlined icons can be used as needed, or when using toggle buttons_

## Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. [More on adaptive design](https://m3.material.io/m3/pages/adaptive-design/)

### Resizing

The width of the app bar container responds to the view or device width.

It should always span 100% of the window width.

[Video: The app bar's container responds to always fill the window width](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6iewwr2-GM3-TopAppBar-Responsive_1P-v01.mp4?alt=media&token=78e8b27e-2026-4564-b32f-86020650baea)

Resizing may cause actions at the trailing edge of the app bar to collapse into an overflow menu at smaller window sizes.

These actions become visible again at larger sizes.

[Video: Actions at the trailing edge collapse into an overflow menu](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaco62fo-GM3_Adaptive_AppBar_Guidelines_25_IA_V01.mp4?alt=media&token=b95b82f8-cd29-4351-b159-3ef00dc7ed27)

The search container of the search app bar should fill 100% of the space between leading and trailing app bar elements until it reaches 312dp. Then, it should only grow further to fill 50% of that space.

[Video: The search field adapts to the amount of space between other elements in the app bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmbjhu8ua-GM3_App-bar_Guidelines_30_v05.mp4?alt=media&token=b1820f02-b84a-4522-8fa8-ee95f831dbfa)

### Presentation

The app bar automatically supports right-to-left (RTL) languages by aligning the layout of elements to the leading and trailing edges of the container.

This means that in RTL languages, the layout of the app bar is mirrored.

![App bar in RTL with Hebrew text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmacbhkra-31-key01.png?alt=media&token=3afd55f9-27a1-4654-8df4-36e6897c1621=s0)

_The app bar's layout is mirrored for right-to-left (RTL) languages_

## Behavior

### Scrolling

App bars should initially be the same color as the background, then fill with a contrasting color on scroll to provide visual separation from the background.

The app bar can remain on a page at all times, or can hide and reappear when scrolling.

[Video: Upon scrolling, an app bar container fills with contrasting color to create a visual separation](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0e8jm4h-TopAppBar-Scrolling_ContainerFill_240821.mp4?alt=media&token=b70b491b-49b5-4775-b111-8bb761245806)

To focus more on body content, consider setting the app bar container to be transparent on scroll. This allows the buttons to float above the content.

Make sure icon buttons have a container fill.

Consider using narrow-width icon buttons for actions, like **Back**, to reduce the amount of space they take up.

[Video: Upon scrolling, an app bar container remains transparent and actions inside become filled icon buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabinoxl-GM3_App-bar_Guideline_33_IA_v03.mp4?alt=media&token=06677e6c-ca98-4bc0-92d2-a8f17722a315)

Selecting the search bar should open the search view component.

[Video: When selected, a search app bar opens a search view](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabiqlb4-GM3_App-bar_Guidelines_34_IA_v01.mp4?alt=media&token=61fedce4-e015-42f1-a936-0a5dbc24b665)

When scrolled, **medium flexible** and **large flexible** app bars can transform into **small** app bars. They should remain small until the page is scrolled back to the top. Don't transform app bars into a **search app bar**.

[Video: The app bar can hide when scrolling up and reveal when scrolling down](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0e8hm4t-TopAppBar-Scrolling_Compress.mp4?alt=media&token=ca000601-1d7f-4dc0-b42c-a9bc33f2b1a0)

[Video: Medium and large flexible app bars can use the compress effect to transform into small app bars when scrolled](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6iexgk5-GM3-TopAppBar-Scrolling_Compact_1P-v02.mp4?alt=media&token=81f31088-20dc-49ea-92d5-65ab210f7058)
