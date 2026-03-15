# App Bars — M3 Component Reference

> App bars sit at the top of the screen, providing page navigation, headlines, and essential actions.

Sources: [Overview](https://m3.material.io/components/app-bars/overview) · [Specs](https://m3.material.io/components/app-bars/specs) · [Guidelines](https://m3.material.io/components/app-bars/guidelines) · [Accessibility](https://m3.material.io/components/app-bars/accessibility)

---

## Variants

![4 variants of app bars](https://lh3.googleusercontent.com/MgtUMHWDy00vUnks39ztFGEG28QfDRkbQeSEcmqqCBT0K5FWc4uP_-7g3LLkrMJC-g76aUQW1xsZQ9AyyGhpc5G3-_Cs_d-CCP7HTCk6LlVi=s0)

1. Search app bar
2. Small
3. Medium flexible
4. Large flexible

| Variant           | M3        | M3 Expressive                                       |
| ----------------- | --------- | --------------------------------------------------- |
| Search app bar    | —         | Available                                           |
| Small             | Available | Available                                           |
| Center-aligned    | Available | Merged into small. Use centered-text configuration. |
| Medium (baseline) | Available | Not recommended. Use medium flexible.               |
| Medium flexible   | —         | Available                                           |
| Large (baseline)  | Available | Not recommended. Use large flexible.                |
| Large flexible    | —         | Available                                           |

The M3 Expressive update (May 2025) renamed the component from **top app bar** to **app bar**. The baseline **medium** and **large** variants are no longer recommended — use **medium flexible** and **large flexible** instead, which offer multi-line support, shorter height, and support for a wider variety of elements like images.

### Baseline app bars (deprecated)

![2 baseline app bar variants, medium and large](https://lh3.googleusercontent.com/4jbnUGWxs16YDyExE7HfAtikzuBERI0C_O6PT00TGtEezDt5SyYIv-V3mUOU_fOoUYk9hJ4uowBcG1c5bR86ChJqq1RQIhbX8Yp4YTMNnBP7CA=s0)

1. Medium
2. Large

---

## Anatomy

![Diagram of app bar layout](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnub2xp-15.png?alt=media&token=3c28ab87-33b2-4e09-b2b7-207d28656b2f=s0)

![5 elements of the component](https://lh3.googleusercontent.com/UCS56fBRH7I7KiKUuK_vBKPDUCV85-8G25OIOM9PxyVN3dgUEozWDPgj2liGjw8OI7X5PTD6n2Icr1V7sZOS-nxTjMPTIth4wlj9KfX7kUth=s0)

1. **Container** — holds all information and actions at the top of the screen; always uses straight corners and default height; spans full window width
2. **Headline** — describes the current page, section, or product; typography varies by variant
3. **Trailing elements** — up to two icon buttons aligned to the trailing edge; most-used action closest to the leading edge
4. **Subtitle** — optional additional context below the headline; can be leading-aligned or centered
5. **Leading button** — typically a menu icon (opens modal expanded navigation rail) or back arrow (returns to previous screen)

App bars can also include:

- An image or logo (can replace label text on small app bars)
- A filled or tonal icon button for a primary action
- A subtitle below the headline

![3 app bars: logo, subtitle, and filled icon button](https://lh3.googleusercontent.com/Fwsip8AL-32WvFsouymOxtfDAK9nsgZu6JggbrZsEe1uIQ8Tm8E48NLKY4SPX1C687pcmu65V9xyHu3pme-1kwEyl5YsC1OFfJAKZlLlAGmI=s0)

### Search app bar anatomy

![5 elements of the search app bar](https://lh3.googleusercontent.com/OCgIkeJ9Mk6ibxz6tz0uSYOLL4zgYINQJdBhE0uqKG_KivTrv_i-4wbgiz0sNLxmAymZPsvXyPnH2i49hWvgI39jvCv0yra8PF-vnxPR3xFt=s0)

1. **Container**
2. **Leading icon button**
3. **Hinted search text**
4. **Trailing icon or avatar**
5. **Search container**

![3 layouts of icons in the search app bar](https://lh3.googleusercontent.com/T7dF8lnMsgF-ctH-bJxhvlTFNYfNCtaKFJ3_kWhNeWOT70jVcz5e2K6dcCMdvyTEMMwCh0VusP7U_cQT5PbY5eBTpwClU8jQPYWIUhRPfLImPA=s0)

1. A leading element and a trailing element outside search
2. A leading element, a trailing element inside search, and a trailing element outside search
3. A leading element and two trailing elements outside search

### Baseline app bar anatomy (deprecated)

![4 elements of medium and large app bars](https://lh3.googleusercontent.com/spB1ibTSmb0Q0vxy5WCz5hWULWcRYZTwf1gzkHBzBAOOx1kjBmF9_rN3rFooHw8wbZdYdo2piv_rickk6jDEeIefd5ZOWM6Gq7kaaLqNRZib=s0)

1. Container
2. Leading button
3. Trailing icons
4. Headline

---

## Usage & When to Use

![App bar with navigation icon buttons and a 2-line title](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntdon8-02.png?alt=media&token=7474bc26-0192-42ed-9ae4-d429ee924607=s0)

- Provide content and actions related to the current page — navigation, headlines, images, and 1–2 essential actions
- The primary action should alter or exit the entire page (e.g. **Send**, **Save**, **Edit**)
- Information can be contextual to a page, or global (e.g. search, notifications)
- If many actions are needed, place them in a toolbar rather than the app bar

### When to use each variant

1. **Search app bar** — use on home pages when search is key to the product
2. **Small** — use in dense layouts or when a page is scrolled
3. **Medium flexible** — use to display a larger headline; can collapse into a small app bar on scroll
4. **Large flexible** — use to emphasize the headline of the page

![The 4 app bar variants](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntmieq-06.png?alt=media&token=c19118e7-becf-4020-9834-4808d65dff6e=s0)

### Primary action prominence

To boost visibility of a primary action, use a filled or tonal icon button style, and consider a wide icon button. Only use one filled/tonal button — avoid multiple.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntiy4b-04-do.png?alt=media&token=377f38d5-e584-48cc-bc4c-7b6924efb2bd=s0" /><br/><b>Do:</b> Use a filled or tonal button for important actions</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntjjnv-05-dont.png?alt=media&token=7edfa0f2-f8ca-4ccc-a273-8fc079488693=s0" /><br/><b>Don't:</b> Don't put multiple filled or tonal buttons in the app bar</td>
</tr></table>

---

## Configurations

### Text alignment

![4 variants of app bars with different text alignment](https://lh3.googleusercontent.com/BOvvsqx3bdHcU0IHwgEXTkgiwJuhU9DOQ6kiQLIdTQ8qiU9YfauXCNFb6HxOTs-PbX7r-OTeqQBlOav0aNXzUSe6JfDHP8zw2jDorA65wQo=s0)

Text labels (including supporting text) can be aligned to the leading edge or centered.

| Category       | Configuration          | M3        | M3 Expressive |
| -------------- | ---------------------- | --------- | ------------- |
| Text alignment | Leading edge (default) | Available | Available     |
|                | Centered               | —         | Available     |

### Headline typography by variant

![Search, small, medium and large flexible app bars with headline styles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnuwnod-24.png?alt=media&token=b7d50c26-4b22-499d-937e-b8a46da6c6d2=s0)

1. Search: Body large
2. Small: Title large
3. Medium flexible: Headline medium
4. Large flexible: Display small

### Subtitle typography by variant

![Small to large flexible app bars with subtitle styles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnvaru4-25.png?alt=media&token=2f11cf07-6128-4ce8-b884-25d866b7a3ab=s0)

1. Small: Label medium
2. Medium flexible: Label large
3. Large flexible: Title medium

### Subtitle configuration

![App bars configured with subtitles below their headlines](https://lh3.googleusercontent.com/v37338PXuQO2QKzvv6eDPG3ATToEprV5f1RbgAP6J85Kkk5uUpqPb3M3U7L3YgKxNTDd_UlhkKMBrpc3PYRL8WgyTS5aax6L2gOQWYwxfsRo=s0)

1. Small
2. Small with subtitle
3. Medium flexible
4. Medium flexible with subtitle
5. Large flexible
6. Large flexible with subtitle

### Image / logo

![Graphic replacing text headline content](https://lh3.googleusercontent.com/rM0ncqi1MU1B-iUCqpNvS1r6GIsPwybXwHKtPEB0hAo1k3NMLM3dqUpH_NK-k9vOlihsEFSneMWwVTYCaF5nWJOEPpRUupcrtmDHCB0C3d8a=s0)

Images can be placed in app bars. In small app bars, an image can replace the headline text entirely. In other variants, it appears above the headline.

![A logo added to an app bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnuliot-20.png?alt=media&token=adba677c-2152-4281-8bd4-f8716770b7af=s0)

### Filled trailing icon button

![App bars configured with filled trailing icons](https://lh3.googleusercontent.com/-4xgb9ld5H8Q6HnmK-ld1O5qM0mfNJy_2WtE_WggmW1lbxjvzZp6GwimCbCZ92GiXuzdak-pBH-hlzbZ-oyphKRiho2Myrlsaal8-7UtKjqa=s0)

The trailing icon buttons can be replaced with a single filled (primary or tonal) icon button in default or wide sizes.

---

## Sub-elements

### Container

The app bar container holds all information and actions. It should always use straight corners, the default height, and span the full window width.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnuf0r2-16-do.png?alt=media&token=1fb862a0-8a65-4d93-af58-23b8f45e9603=s0" /><br/><b>Do:</b> Use straight corners for app bars</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnugbt5-17-dont.png?alt=media&token=c7c569a5-2a81-4583-a069-489e9e24fba9=s0" /><br/><b>Don't:</b> Curved shapes imply the container can expand upon interaction</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnuiiym-18-Do.png?alt=media&token=9eb7bc81-3b55-4eea-bd7b-056e75806c41=s0" /><br/><b>Do:</b> Default heights ensure readability of on-screen elements</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnuja9a-19-Don't.png?alt=media&token=1545b8ba-fdf0-47ac-8a4a-ff46376cd5d3=s0" /><br/><b>Don't:</b> Don't make an app bar shorter than its default height</td>
</tr></table>

### Headline

- Describes the current page, section, or product
- Should be brief enough to fit comfortably
- In medium flexible and large flexible variants, the headline can wrap to a second line
- Never truncate headline text
- Can be leading-aligned or centered

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnurf1u-22-Do.png?alt=media&token=3a5b3bbb-92c1-4a5b-9bd1-7e14e49c3ad2=s0" /><br/><b>Do:</b> For long headlines, use a medium or large flexible app bar and wrap to two lines maximum</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnus8yg-23-Don't.png?alt=media&token=5fd85933-3b19-4bd6-8d78-f0740a229798=s0" /><br/><b>Don't:</b> Don't wrap text in a small app bar</td>
</tr></table>

### Trailing icon buttons

- Up to two icon buttons after the headline, aligned to the trailing edge
- Most-used action closest to the leading edge
- Avoid using these to open a menu with more actions — use a toolbar instead
- If changing to filled or tonal style, only use one icon button
- Prefer filled icons for best visibility; outlined icons can be used for unselected toggle buttons

![2 icons placed to right of headline](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnvbo80-26.png?alt=media&token=486aa96c-7657-4afe-9ef1-79af0f159f63=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnvcdyc-27-Do.png?alt=media&token=cdca83fa-7075-404b-aa93-c226a2252ef5=s0" /><br/><b>Do:</b> Use filled icons for clear, visible actions</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnvcyu3-28-Caution.png?alt=media&token=bc0b91fe-454e-4dcc-ba4c-37c03fd1633c=s0" /><br/><b>Caution:</b> Outlined icons can be used as needed, or for toggle buttons</td>
</tr></table>

---

## Search App Bar

![A search bar within an app bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntr0ls-08.png?alt=media&token=3d8eef75-94d0-4d8f-9ccf-fbda3f747b4e=s0)

The search app bar provides an emphasized entry point to open the search view component. It replaces heading text with a search field.

- Always include the word **Search** in the search bar
- Capitalization can vary: "Search", "Search inbox", "Search Photos"
- Up to two trailing icons on mobile (plus an optional avatar)
- Trailing icons can be placed inside or outside the search bar
- The leading element can be a product logo

![3 examples of search text](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntrvt2-09.png?alt=media&token=1cbbdac4-2b41-433c-a6f0-f9eaefdb7f86=s0)

![2 icons placed in the search bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntvpyq-10.png?alt=media&token=e8605375-74f6-4f86-95ba-3cbf97a0abb9=s0)

![A search app bar with a logo](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntz91y-11.png?alt=media&token=9075c294-0618-48e2-ad59-fa6c078f1d9f=s0)

![Don't: 3 icons and an avatar in a search app bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnu01cf-12-Dont.png?alt=media&token=0e553615-403a-4262-82e9-e288d7c660e0=s0)

### Large screens

The search app bar dynamically adapts to available width. Up to four trailing icons on larger screens.

![4 actions in a search app bar on a large screen](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnu4je0-13.png?alt=media&token=7e18830b-0ad8-4daf-bd6c-a4444703e399=s0)

### Alternate colors

By default, search containers use **surface container** color. On darker backgrounds, use a lighter color like **surface bright**. Always ensure at least 3:1 contrast between search text and container.

![App bar with a light search container color](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnu68g2-14.png?alt=media&token=1a01e007-1a24-4d4e-844e-2974b56e060b=s0)

---

## Behavior

### Scrolling

- App bars start with the same color as the background, then fill with a contrasting color on scroll for visual separation
- The app bar can remain visible at all times, or hide and reappear when scrolling
- **Medium flexible** and **large flexible** app bars can collapse into **small** app bars on scroll; they remain small until the page is scrolled back to the top
- Do not transform app bars into a search app bar on scroll
- Selecting the search bar should open the search view component

For a more content-focused experience, the app bar container can become transparent on scroll, letting buttons float above content. In this case, ensure icon buttons have a container fill and consider narrow-width icon buttons to reduce space.

### Search bar resize behavior

The search container should fill 100% of the space between leading and trailing elements until it reaches 312dp. Beyond that, it should only grow to fill 50% of the available space.

---

## Adaptive Design

### Resizing

The app bar container always spans 100% of the window width. On smaller screens, trailing actions may collapse into an overflow menu — they become visible again at larger sizes.

The app bar automatically supports right-to-left (RTL) languages by mirroring the layout of leading and trailing elements.

![App bar in RTL with Hebrew text](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlp6doc5-32.png?alt=media&token=c3eed041-8305-4c9b-94de-18360f723822=s0)

---

## Measurements

### Search app bar

![Search app bar padding and size measurements](https://lh3.googleusercontent.com/GLzA-Bs2FesMv8_iNKDnGK-rmtF4_QBlkamCvjO3g0PR4Ohvu51Whqg_8UDbMF2Be0V0fNt2yy_YIYhbkBa3RaH32GCEcE7CYs7Qk7aJDWg=s0)

### Small app bar

![Small app bar padding and size measurements](https://lh3.googleusercontent.com/ZwtGrnk6IwZVeEjENYgXaaBm1o78pMZeWbKEvSKrXMaC4EsY1x5d6AyMOmeP5xBxsEtomfWPfRQeyjo9aj5TUCZfqTZ6DExOrrf4lPD6skGwOQ=s0)

### Medium flexible app bar

![Medium flexible app bar padding and size measurements](https://lh3.googleusercontent.com/tO6HUsX_WzDWijRcUovy7YHYqXB9nFkpIdJ1rb9xRF1f53fb5lfigX2U4DhrYnf54WpJxf_VMpqs2fVNtnQwzv1gxreCwgyge4K5p9WC71BK=s0)

### Large flexible app bar

![Large flexible app bar padding and size measurements](https://lh3.googleusercontent.com/LZMvu4Uh6hlTMMN4lXncpG5Pl1yEm5A90QCK9BFFHrKogTsNr1PAWKpJ0su8E4BmXMOdKMzH3jk2BGZJcqrSGZ1AFOK40R6D9QHkBuhtEqgI=s0)

### Medium app bar (baseline)

![Medium app bar padding and size measurements](https://lh3.googleusercontent.com/iJPK4tOaZD9dNaqh6nZnimQR2kRKofGNS-fhCmjPY4mo8cyDKbIJg5nY8Osnxa7EVzTNNSIkA_3OqGAYWX8FJbOMxCThqTI6CocN1Ltci4sSaA=s0)

### Large app bar (baseline)

![Large app bar padding and size measurements](https://lh3.googleusercontent.com/JaHOGKnlXOrSArCuG_UGfPN8Muth2rZ_WwBu0ZlvUPFvU8HdVdkDWZoz1M3pm1GB7vw8o_IUE-So65otchOt2cHBpzKsOJTdm2N5uw2aBc-A=s0)

---

## Color Tokens

All app bars share the same color roles. On scroll, the container changes color to **surface container**.

### App bar color roles

![4 color roles of the leading edge app bar in light and dark scheme](https://lh3.googleusercontent.com/xpRALH4p7nwRTCrQbJRWXJjjKyr6SI9Lcz7DShFjgvTK8Zsvl45I69Y-m1OfJcWkp9Cc3cOV4UyCqZzo60kRaRSgGeatz80PbrGnGv1DQpXO=s0)

1. Surface
2. On surface
3. On surface variant
4. On surface
5. On surface variant
6. Surface container (on scroll)

![4 color roles of the center-aligned app bar in light and dark scheme](https://lh3.googleusercontent.com/VsxxC6080HgD_QsQ6TLzafi0UFXVHAU3R4k2NDE144aZQBU9CYNjEOCd7tPTV3ur_gcYzZJO3LezRLYaNLoPcQnYpyuyQyH-C8KLRv1eIC2C=s0)

1. Surface
2. On surface variant
3. On surface variant
4. On surface variant
5. Surface container
6. Surface container
7. Surface container highest

### Scroll states

![Color roles for app bars when flat and on scroll](https://lh3.googleusercontent.com/tRaHBa-YYJoR3wAF4m6Sr9plFPu3juGtThHBYYsKPfs-6nHxwPrhg7vEpJfwSA6hfyjHrl6k4Tzh4Z6WC95kDllNp9Q5nYiRXO_KpYBKsrIqiQ=s0)

1. Flat
2. On scroll

### App bar — Common tokens

**Color**

| Name                                  | Token                                              | Value                                  |
| ------------------------------------- | -------------------------------------------------- | -------------------------------------- |
| App bar container color               | `md.comp.app-bar.container.color`                  | md.sys.color.surface                   |
| Search container color                | `md.comp.app-bar.search.container.color`           | md.sys.color.surface-container         |
| Search label color                    | `md.comp.app-bar.search.label.color`               | md.sys.color.on-surface-variant        |
| App bar container color on scroll     | `md.comp.app-bar.on-scroll.container.color`        | md.sys.color.surface-container         |
| Search container color on scroll      | `md.comp.app-bar.search.on-scroll.container.color` | md.sys.color.surface-container-highest |
| App bar container elevation           | `md.comp.app-bar.container.elevation`              | md.sys.elevation.level0                |
| App bar container elevation on scroll | `md.comp.app-bar.on-scroll.container.elevation`    | md.sys.elevation.level2                |
| App bar title text                    | `md.comp.app-bar.title.color`                      | md.sys.color.on-surface                |
| App bar subtitle text                 | `md.comp.app-bar.subtitle.color`                   | md.sys.color.on-surface-variant        |
| App bar leading icon                  | `md.comp.app-bar.leading-icon.color`               | md.sys.color.on-surface                |
| App bar trailing icon                 | `md.comp.app-bar.trailing-icon.color`              | md.sys.color.on-surface-variant        |

**Spacing**

| Name                  | Token                                   | Value |
| --------------------- | --------------------------------------- | ----- |
| App bar left padding  | `md.comp.app-bar.leading-space`         | 4dp   |
| App bar right padding | `md.comp.app-bar.trailing-space`        | 4dp   |
| App bar icon spacing  | `md.comp.app-bar.icon-button-space`     | 0     |
| Search left padding   | `md.comp.app-bar.search.leading-space`  | 8dp   |
| Search right padding  | `md.comp.app-bar.search.trailing-space` | 8dp   |

**Shape**

| Name                    | Token                             | Value                    |
| ----------------------- | --------------------------------- | ------------------------ |
| App bar container shape | `md.comp.app-bar.container.shape` | md.sys.shape.corner.none |

**Size**

| Name                | Token                         | Value |
| ------------------- | ----------------------------- | ----- |
| App bar avatar size | `md.comp.app-bar.avatar.size` | 32dp  |
| App bar icon size   | `md.comp.app-bar.icon.size`   | 24dp  |

---

## Search Component Tokens

The default search component tokens are used in the search app bar.

### Search — View

**Color**

| Name                                       | Token                                              | Value                               |
| ------------------------------------------ | -------------------------------------------------- | ----------------------------------- |
| Search view container color                | `md.comp.search-view.container.color`              | md.sys.color.surface-container-high |
| Search view contained background color     | `md.comp.search-view.contained.background.color`   | #F7F2FA                             |
| Search view container background elevation | `md.comp.search-view.container.elevation`          | md.sys.elevation.level3             |
| Search view header supporting text color   | `md.comp.search-view.header.supporting-text.color` | md.sys.color.on-surface-variant     |
| Search view header input text color        | `md.comp.search-view.header.input-text.color`      | md.sys.color.on-surface             |
| Search view header leading icon color      | `md.comp.search-view.header.leading-icon.color`    | md.sys.color.on-surface             |
| Search view header trailing icon color     | `md.comp.search-view.header.trailing-icon.color`   | md.sys.color.on-surface-variant     |
| Search view divider color                  | `md.comp.search-view.divider.color`                | md.sys.color.outline                |

**Layout — Contained (expressive)**

| Name                                                   | Token                                                            | Value                      |
| ------------------------------------------------------ | ---------------------------------------------------------------- | -------------------------- |
| Search view contained leading margin                   | `md.comp.search-view.contained.leading-margin`                   | 12dp                       |
| Search view contained trailing margin                  | `md.comp.search-view.contained.trailing-margin`                  | 12dp                       |
| Search view contained docked bar results gap           | `md.comp.search-view.contained.docked.bar-results.gap`           | 2dp                        |
| Search view contained docked results shape             | `md.comp.search-view.contained.docked.results.shape`             | md.sys.shape.corner.medium |
| Search view contained docked bar shape                 | `md.comp.search-view.contained.docked.bar.shape`                 | md.sys.shape.corner.full   |
| Search view contained full screen bar container height | `md.comp.search-view.contained.full-screen.bar.container.height` | 56dp                       |
| Search view contained icon label gap                   | `md.comp.search-view.contained.icon-label.gap`                   | 4dp                        |

**Layout — Divided (baseline)**

| Name                                                | Token                                                         | Value                           |
| --------------------------------------------------- | ------------------------------------------------------------- | ------------------------------- |
| Search view docked container shape                  | `md.comp.search-view.docked.container.shape`                  | md.sys.shape.corner.extra-large |
| Search view full screen header container height     | `md.comp.search-view.full-screen.header.container.height`     | 72dp                            |
| Search view docked header container height          | `md.comp.search-view.docked.header.container.height`          | 56dp                            |
| Search view leading space                           | `md.comp.search-view.leading-space`                           | 16dp                            |
| Search view trailing space                          | `md.comp.search-view.trailing-space`                          | 16dp                            |
| Search view leading icon leading icon label space   | `md.comp.search-view.leading-icon.leading-icon-label-space`   | 16dp                            |
| Search view trailing icon label trailing icon space | `md.comp.search-view.trailing-icon.label-trailing-icon-space` | 16dp                            |

**Layout — Common**

| Name                                           | Token                                                    | Value                                   |
| ---------------------------------------------- | -------------------------------------------------------- | --------------------------------------- |
| Search view full screen container shape        | `md.comp.search-view.full-screen.container.shape`        | md.sys.shape.corner.none                |
| Search view header supporting text type        | `md.comp.search-view.header.supporting-text.type`        | Aa                                      |
| Search view header supporting text font        | `md.comp.search-view.header.supporting-text.font`        | md.sys.typescale.body-large.font        |
| Search view header supporting text line height | `md.comp.search-view.header.supporting-text.line-height` | md.sys.typescale.body-large.line-height |
| Search view header supporting text size        | `md.comp.search-view.header.supporting-text.size`        | md.sys.typescale.body-large.size        |
| Search view header supporting text weight      | `md.comp.search-view.header.supporting-text.weight`      | md.sys.typescale.body-large.weight      |
| Search view header supporting text tracking    | `md.comp.search-view.header.supporting-text.tracking`    | md.sys.typescale.body-large.tracking    |
| Search view header input text type             | `md.comp.search-view.header.input-text.type`             | Aa                                      |
| Search view header input text font             | `md.comp.search-view.header.input-text.font`             | md.sys.typescale.body-large.font        |
| Search view header input text line height      | `md.comp.search-view.header.input-text.line-height`      | md.sys.typescale.body-large.line-height |
| Search view header input text size             | `md.comp.search-view.header.input-text.size`             | md.sys.typescale.body-large.size        |
| Search view header input text weight           | `md.comp.search-view.header.input-text.weight`           | md.sys.typescale.body-large.weight      |
| Search view header input text tracking         | `md.comp.search-view.header.input-text.tracking`         | md.sys.typescale.body-large.tracking    |

### Search — Bar

**Color / Enabled**

| Name                             | Token                                      | Value                               |
| -------------------------------- | ------------------------------------------ | ----------------------------------- |
| Search bar container color       | `md.comp.search-bar.container.color`       | md.sys.color.surface-container-high |
| Search bar container elevation   | `md.comp.search-bar.container.elevation`   | md.sys.elevation.level3             |
| Search bar leading icon color    | `md.comp.search-bar.leading-icon.color`    | md.sys.color.on-surface             |
| Search bar trailing icon color   | `md.comp.search-bar.trailing-icon.color`   | md.sys.color.on-surface-variant     |
| Search bar supporting text color | `md.comp.search-bar.supporting-text.color` | md.sys.color.on-surface-variant     |
| Search bar input text color      | `md.comp.search-bar.input-text.color`      | md.sys.color.on-surface             |

**Color / Hovered**

| Name                                   | Token                                            | Value                                  |
| -------------------------------------- | ------------------------------------------------ | -------------------------------------- |
| Search bar hover state layer color     | `md.comp.search-bar.hover.state-layer.color`     | md.sys.color.on-surface                |
| Search bar hover state layer opacity   | `md.comp.search-bar.hover.state-layer.opacity`   | md.sys.state.hover.state-layer-opacity |
| Search bar hover supporting text color | `md.comp.search-bar.hover.supporting-text.color` | md.sys.color.on-surface-variant        |

**Color / Pressed**

| Name                                     | Token                                              | Value                                    |
| ---------------------------------------- | -------------------------------------------------- | ---------------------------------------- |
| Search bar pressed state layer color     | `md.comp.search-bar.pressed.state-layer.color`     | md.sys.color.on-surface                  |
| Search bar pressed state layer opacity   | `md.comp.search-bar.pressed.state-layer.opacity`   | md.sys.state.pressed.state-layer-opacity |
| Search bar pressed supporting text color | `md.comp.search-bar.pressed.supporting-text.color` | md.sys.color.on-surface-variant          |

**Color / Focused**

| Name                                 | Token                                               | Value                                     |
| ------------------------------------ | --------------------------------------------------- | ----------------------------------------- |
| Search bar focus indicator color     | `md.comp.search-bar.focus.indicator.color`          | md.sys.color.secondary                    |
| Search bar focus indicator thickness | `md.comp.search-bar.focus.indicator.thickness`      | md.sys.state.focus-indicator.thickness    |
| Search bar focus indicator offset    | `md.comp.search-bar.focus.indicator.outline.offset` | md.sys.state.focus-indicator.outer-offset |

**Layout — Contained (expressive)**

| Name                                                 | Token                                                          | Value |
| ---------------------------------------------------- | -------------------------------------------------------------- | ----- |
| Search bar contained pane leading margin             | `md.comp.search-bar.contained.leading-margin`                  | 24dp  |
| Search bar contained pane trailing margin            | `md.comp.search-bar.contained.trailing-margin`                 | 24dp  |
| Search bar contained motion                          | `md.comp.search-bar.contained.motion.spring`                   |       |
| Search bar contained leading space                   | `md.comp.search-bar.contained.leading-space`                   | 4dp   |
| Search bar contained trailing space                  | `md.comp.search-bar.contained.trailing-space`                  | 4dp   |
| Search bar contained no actions leading space        | `md.comp.search-bar.contained.no-actions.leading-space`        | 16dp  |
| Search bar contained no actions trailing space       | `md.comp.search-bar.contained.no-actions.trailing-space`       | 16dp  |
| Search bar contained icon label gap                  | `md.comp.search-bar.contained.icon-label.gap`                  | 4dp   |
| Search bar contained avatar target size              | `md.comp.search-bar.contained.avatar.target-size`              | 48dp  |
| Search bar contained trailing actions gap            | `md.comp.search-bar.contained.trailing-actions.gap`            | 0     |
| Search bar contained trailing actions leading space  | `md.comp.search-bar.contained.trailing-actions.leading-space`  | 4dp   |
| Search bar contained trailing actions trailing space | `md.comp.search-bar.contained.trailing-actions.trailing-space` | 4dp   |

**Layout — Baseline**

| Name                                               | Token                                                        | Value |
| -------------------------------------------------- | ------------------------------------------------------------ | ----- |
| Search bar leading space                           | `md.comp.search-bar.leading-space`                           | 16dp  |
| Search bar trailing space                          | `md.comp.search-bar.trailing-space`                          | 16dp  |
| Search bar leading icon leading icon label space   | `md.comp.search-bar.leading-icon.leading-icon-label-space`   | 16dp  |
| Search bar trailing icon label trailing icon space | `md.comp.search-bar.trailing-icon.label-trailing-icon-space` | 16dp  |

**Layout — Common**

| Name                                          | Token                                                   | Value                                   |
| --------------------------------------------- | ------------------------------------------------------- | --------------------------------------- |
| Search bar container height                   | `md.comp.search-bar.container.height`                   | 56dp                                    |
| Search bar container shape                    | `md.comp.search-bar.container.shape`                    | md.sys.shape.corner.full                |
| Search bar avatar size                        | `md.comp.search-bar.avatar.size`                        | 30dp                                    |
| Search bar avatar shape                       | `md.comp.search-bar.avatar.shape`                       | md.sys.shape.corner.full                |
| Search bar icon size                          | `md.comp.search-bar.icon.size`                          | 24dp                                    |
| Search bar supporting text type               | `md.comp.search-bar.supporting-text.type`               | Aa                                      |
| Search bar supporting text font               | `md.comp.search-bar.supporting-text.font`               | md.sys.typescale.body-large.font        |
| Search bar supporting text line height        | `md.comp.search-bar.supporting-text.line-height`        | md.sys.typescale.body-large.line-height |
| Search bar supporting text size               | `md.comp.search-bar.supporting-text.size`               | md.sys.typescale.body-large.size        |
| Search bar supporting text weight             | `md.comp.search-bar.supporting-text.weight`             | md.sys.typescale.body-large.weight      |
| Search bar supporting text tracking           | `md.comp.search-bar.supporting-text.tracking`           | md.sys.typescale.body-large.tracking    |
| Search bar input text type                    | `md.comp.search-bar.input-text.type`                    | Aa                                      |
| Search bar input text font                    | `md.comp.search-bar.input-text.font`                    | md.sys.typescale.body-large.font        |
| Search bar input text line height             | `md.comp.search-bar.input-text.line-height`             | md.sys.typescale.body-large.line-height |
| Search bar input text size                    | `md.comp.search-bar.input-text.size`                    | md.sys.typescale.body-large.size        |
| Search bar input text weight                  | `md.comp.search-bar.input-text.weight`                  | md.sys.typescale.body-large.weight      |
| Search bar input text tracking                | `md.comp.search-bar.input-text.tracking`                | md.sys.typescale.body-large.tracking    |
| Search bar container surface tint layer color | `md.comp.search-bar.container.surface-tint-layer.color` | md.sys.color.surface-tint               |

---

## Baseline App Bar Tokens (Deprecated)

### [Deprecated] Top app bar — Small

**Container**

| Name                                                   | Token                                                          | Value                          |
| ------------------------------------------------------ | -------------------------------------------------------------- | ------------------------------ |
| Top app bar (small) container color                    | `md.comp.top-app-bar.small.container.color`                    | md.sys.color.surface           |
| Top app bar (small) on-scroll container color          | `md.comp.top-app-bar.small.on-scroll.container.color`          | md.sys.color.surface-container |
| Top app bar (small) container shape                    | `md.comp.top-app-bar.small.container.shape`                    | md.sys.shape.corner.none       |
| Top app bar (small) container height                   | `md.comp.top-app-bar.small.container.height`                   | 64dp                           |
| Top app bar (small) container elevation                | `md.comp.top-app-bar.small.container.elevation`                | md.sys.elevation.level0        |
| Top app bar (small) container surface tint layer color | `md.comp.top-app-bar.small.container.surface-tint-layer.color` | md.sys.color.surface-tint      |
| Top app bar (small) on scroll container shadow color   | `md.comp.top-app-bar.small.on-scroll.container.shadow-color`   | md.sys.color.shadow            |

**Leading icon**

| Name                                   | Token                                          | Value                   |
| -------------------------------------- | ---------------------------------------------- | ----------------------- |
| Top app bar (small) leading icon size  | `md.comp.top-app-bar.small.leading-icon.size`  | 24dp                    |
| Top app bar (small) leading icon color | `md.comp.top-app-bar.small.leading-icon.color` | md.sys.color.on-surface |

**Trailing icon**

| Name                                    | Token                                           | Value                           |
| --------------------------------------- | ----------------------------------------------- | ------------------------------- |
| Top app bar (small) trailing icon size  | `md.comp.top-app-bar.small.trailing-icon.size`  | 24dp                            |
| Top app bar (small) trailing icon color | `md.comp.top-app-bar.small.trailing-icon.color` | md.sys.color.on-surface-variant |

**Headline**

| Name                                  | Token                                            | Value                                    |
| ------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| Top app bar (small) headline font     | `md.comp.top-app-bar.small.headline.font`        | md.sys.typescale.title-large.font        |
| Top app bar (small) headline height   | `md.comp.top-app-bar.small.headline.line-height` | md.sys.typescale.title-large.line-height |
| Top app bar (small) headline size     | `md.comp.top-app-bar.small.headline.size`        | md.sys.typescale.title-large.size        |
| Top app bar (small) headline tracking | `md.comp.top-app-bar.small.headline.tracking`    | md.sys.typescale.title-large.tracking    |
| Top app bar (small) headline weight   | `md.comp.top-app-bar.small.headline.weight`      | md.sys.typescale.title-large.weight      |
| Type style                            | `md.comp.top-app-bar.small.headline.type`        | Aa                                       |
| Top app bar (small) headline color    | `md.comp.top-app-bar.small.headline.color`       | md.sys.color.on-surface                  |

**On scroll**

| Name                                              | Token                                                     | Value                   |
| ------------------------------------------------- | --------------------------------------------------------- | ----------------------- |
| Top app bar (small) on scroll container elevation | `md.comp.top-app-bar.small.on-scroll.container.elevation` | md.sys.elevation.level2 |

### [Deprecated] Top app bar — Medium

**Container**

| Name                                                    | Token                                                           | Value                     |
| ------------------------------------------------------- | --------------------------------------------------------------- | ------------------------- |
| Top app bar (medium) container color                    | `md.comp.top-app-bar.medium.container.color`                    | md.sys.color.surface      |
| Top app bar (medium) container shape                    | `md.comp.top-app-bar.medium.container.shape`                    | md.sys.shape.corner.none  |
| Top app bar (medium) container height                   | `md.comp.top-app-bar.medium.container.height`                   | 112dp                     |
| Top app bar (medium) container elevation                | `md.comp.top-app-bar.medium.container.elevation`                | md.sys.elevation.level0   |
| Top app bar (medium) container surface tint layer color | `md.comp.top-app-bar.medium.container.surface-tint-layer.color` | md.sys.color.surface-tint |

**Leading icon**

| Name                                    | Token                                           | Value                   |
| --------------------------------------- | ----------------------------------------------- | ----------------------- |
| Top app bar (medium) leading icon size  | `md.comp.top-app-bar.medium.leading-icon.size`  | 24dp                    |
| Top app bar (medium) leading icon color | `md.comp.top-app-bar.medium.leading-icon.color` | md.sys.color.on-surface |

**Trailing icon**

| Name                                     | Token                                            | Value                           |
| ---------------------------------------- | ------------------------------------------------ | ------------------------------- |
| Top app bar (medium) trailing icon size  | `md.comp.top-app-bar.medium.trailing-icon.size`  | 24dp                            |
| Top app bar (medium) trailing icon color | `md.comp.top-app-bar.medium.trailing-icon.color` | md.sys.color.on-surface-variant |

**Headline**

| Name                                   | Token                                             | Value                                       |
| -------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| Top app bar (medium) headline font     | `md.comp.top-app-bar.medium.headline.font`        | md.sys.typescale.headline-small.font        |
| Top app bar (medium) headline height   | `md.comp.top-app-bar.medium.headline.line-height` | md.sys.typescale.headline-small.line-height |
| Top app bar (medium) headline size     | `md.comp.top-app-bar.medium.headline.size`        | md.sys.typescale.headline-small.size        |
| Top app bar (medium) headline tracking | `md.comp.top-app-bar.medium.headline.tracking`    | md.sys.typescale.headline-small.tracking    |
| Top app bar (medium) headline weight   | `md.comp.top-app-bar.medium.headline.weight`      | md.sys.typescale.headline-small.weight      |
| Type style                             | `md.comp.top-app-bar.medium.headline.type`        | Aa                                          |
| Top app bar (medium) headline color    | `md.comp.top-app-bar.medium.headline.color`       | md.sys.color.on-surface                     |

### [Deprecated] Top app bar — Large

**Container**

| Name                                                   | Token                                                          | Value                     |
| ------------------------------------------------------ | -------------------------------------------------------------- | ------------------------- |
| Top app bar (large) container color                    | `md.comp.top-app-bar.large.container.color`                    | md.sys.color.surface      |
| Top app bar (large) container shape                    | `md.comp.top-app-bar.large.container.shape`                    | md.sys.shape.corner.none  |
| Top app bar (large) container height                   | `md.comp.top-app-bar.large.container.height`                   | 152dp                     |
| Top app bar (large) container elevation                | `md.comp.top-app-bar.large.container.elevation`                | md.sys.elevation.level0   |
| Top app bar (large) container surface tint layer color | `md.comp.top-app-bar.large.container.surface-tint-layer.color` | md.sys.color.surface-tint |

**Leading icon**

| Name                                   | Token                                          | Value                   |
| -------------------------------------- | ---------------------------------------------- | ----------------------- |
| Top app bar (large) leading icon size  | `md.comp.top-app-bar.large.leading-icon.size`  | 24dp                    |
| Top app bar (large) leading icon color | `md.comp.top-app-bar.large.leading-icon.color` | md.sys.color.on-surface |

**Trailing icon**

| Name                                    | Token                                           | Value                           |
| --------------------------------------- | ----------------------------------------------- | ------------------------------- |
| Top app bar (large) trailing icon size  | `md.comp.top-app-bar.large.trailing-icon.size`  | 24dp                            |
| Top app bar (large) trailing icon color | `md.comp.top-app-bar.large.trailing-icon.color` | md.sys.color.on-surface-variant |

**Headline**

| Name                                  | Token                                            | Value                                        |
| ------------------------------------- | ------------------------------------------------ | -------------------------------------------- |
| Top app bar (large) headline font     | `md.comp.top-app-bar.large.headline.font`        | md.sys.typescale.headline-medium.font        |
| Top app bar (large) headline height   | `md.comp.top-app-bar.large.headline.line-height` | md.sys.typescale.headline-medium.line-height |
| Top app bar (large) headline size     | `md.comp.top-app-bar.large.headline.size`        | md.sys.typescale.headline-medium.size        |
| Top app bar (large) headline tracking | `md.comp.top-app-bar.large.headline.tracking`    | md.sys.typescale.headline-medium.tracking    |
| Top app bar (large) headline weight   | `md.comp.top-app-bar.large.headline.weight`      | md.sys.typescale.headline-medium.weight      |
| Type style                            | `md.comp.top-app-bar.large.headline.type`        | Aa                                           |
| Top app bar (large) headline color    | `md.comp.top-app-bar.large.headline.color`       | md.sys.color.on-surface                      |

### [Deprecated] Top app bar — Small, Center-aligned

**Avatar**

| Name                                       | Token                                             | Value                    |
| ------------------------------------------ | ------------------------------------------------- | ------------------------ |
| Top app bar (small) on scroll avatar size  | `md.comp.top-app-bar.small.centered.avatar.size`  | 30dp                     |
| Top app bar (small) on scroll avatar shape | `md.comp.top-app-bar.small.centered.avatar.shape` | md.sys.shape.corner.full |

**Container**

| Name                                                            | Token                                                                   | Value                          |
| --------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------ |
| Top app bar (small centered) on-scroll container color          | `md.comp.top-app-bar.small.centered.on-scroll.container.color`          | md.sys.color.surface-container |
| Top app bar (small centered) container color                    | `md.comp.top-app-bar.small.centered.container.color`                    | md.sys.color.surface           |
| Top app bar (small centered) container shape                    | `md.comp.top-app-bar.small.centered.container.shape`                    | md.sys.shape.corner.none       |
| Top app bar (small centered) container height                   | `md.comp.top-app-bar.small.centered.container.height`                   | 64dp                           |
| Top app bar (small centered) container elevation                | `md.comp.top-app-bar.small.centered.container.elevation`                | md.sys.elevation.level0        |
| Top app bar (small centered) container surface tint layer color | `md.comp.top-app-bar.small.centered.container.surface-tint-layer.color` | md.sys.color.surface-tint      |
| Top app bar (small) on scroll container shadow color            | `md.comp.top-app-bar.small.centered.on-scroll.container.shadow-color`   | md.sys.color.shadow            |

**Leading icon**

| Name                                            | Token                                                   | Value                   |
| ----------------------------------------------- | ------------------------------------------------------- | ----------------------- |
| Top app bar (small centered) leading icon size  | `md.comp.top-app-bar.small.centered.leading-icon.size`  | 24dp                    |
| Top app bar (small centered) leading icon color | `md.comp.top-app-bar.small.centered.leading-icon.color` | md.sys.color.on-surface |

**Trailing icon**

| Name                                             | Token                                                    | Value                           |
| ------------------------------------------------ | -------------------------------------------------------- | ------------------------------- |
| Top app bar (small centered) trailing icon size  | `md.comp.top-app-bar.small.centered.trailing-icon.size`  | 24dp                            |
| Top app bar (small centered) trailing icon color | `md.comp.top-app-bar.small.centered.trailing-icon.color` | md.sys.color.on-surface-variant |

**Headline**

| Name                                           | Token                                                     | Value                                    |
| ---------------------------------------------- | --------------------------------------------------------- | ---------------------------------------- |
| Top app bar (small centered) headline font     | `md.comp.top-app-bar.small.centered.headline.font`        | md.sys.typescale.title-large.font        |
| Top app bar (small centered) headline height   | `md.comp.top-app-bar.small.centered.headline.line-height` | md.sys.typescale.title-large.line-height |
| Top app bar (small centered) headline size     | `md.comp.top-app-bar.small.centered.headline.size`        | md.sys.typescale.title-large.size        |
| Top app bar (small centered) headline tracking | `md.comp.top-app-bar.small.centered.headline.tracking`    | md.sys.typescale.title-large.tracking    |
| Top app bar (small centered) headline weight   | `md.comp.top-app-bar.small.centered.headline.weight`      | md.sys.typescale.title-large.weight      |
| Type style                                     | `md.comp.top-app-bar.small.centered.headline.type`        | Aa                                       |
| Top app bar (small centered) headline color    | `md.comp.top-app-bar.small.centered.headline.color`       | md.sys.color.on-surface                  |

**On scroll**

| Name                                              | Token                                                              | Value                   |
| ------------------------------------------------- | ------------------------------------------------------------------ | ----------------------- |
| Top app bar (small) on scroll container elevation | `md.comp.top-app-bar.small.centered.on-scroll.container.elevation` | md.sys.elevation.level2 |

### Baseline app bar color

![4 color roles of the medium top app bar](https://lh3.googleusercontent.com/a4e5waYXECuiUcxK2FX7nimSG7veFWYYiISRWkojPDXodUOqnLT2npaBpJhmc1AUBfOr9G3hcZ4TmUi9jLCRUdP0IqDw5pTdSCFYgc-zXcs=s0)

1. Surface
2. On surface
3. On surface
4. On surface variant

---

## Accessibility

### Use cases

People should be able to do the following using assistive technology:

- Understand what page they're currently visiting
- Take actions or navigate to a new page destination
- Maintain access to app bar actions when the content is scrolled

### Touch & Cursor

- **Touch**: tapping an icon button shows a touch ripple for interaction feedback
- **Cursor**: hover state indicates interactivity; click shows a ripple

### Keyboard Navigation

| Key            | Action                                     |
| -------------- | ------------------------------------------ |
| Tab            | Move focus to the next interactive element |
| Space or Enter | Activate the focused element               |

### Initial focus

Focus should initially land on the leading button, since it's the first interactive element.

![Use Tabs to navigate through interactive items](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos7r6g-04.png?alt=media&token=2389b948-f4b3-420d-9e6e-34f543525c2f=s0)

![Use Space or Enter to activate actions](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos8gq8-05.png?alt=media&token=bafd0e8c-7cfe-4ee8-844e-d45367dc8a61=s0)

### Labeling

- The accessibility label for the title should match its visible content; add additional context if needed so users understand what page they're on
- Screen readers read the UI text followed by the component's role
- Label icon buttons according to their [accessibility guidelines](https://m3.material.io/m3/pages/icon-buttons/accessibility)

![App bar headline with accessibility role "Title"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos1na5-08.png?alt=media&token=ad772624-922f-47f4-9bba-45c4e4129396=s0)

![Icon button with accessibility role "Button"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos0avb-09.png?alt=media&token=ea50a8f1-f6ec-4c0d-9693-c381e6b86ed0=s0)

### Color contrast for search bars

- Use default color roles when possible: container = **surface container**, label = **on surface variant**
- On darker backgrounds, use **surface bright** for the search container
- Always ensure at least 3:1 contrast between text and container

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos5etv-06-do.png?alt=media&token=e55a083f-5a33-4ecc-9fef-d5946838d02d=s0" /><br/><b>Do:</b> Use default colors; ensure at least 3:1 contrast for search bars and labels</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos65h6-07-dont.png?alt=media&token=0281bfc2-6d34-4c43-b2d3-e55f3b4e1e07=s0" /><br/><b>Don't:</b> Avoid custom color roles that reduce contrast below 3:1</td>
</tr></table>

---

## XR (Extended Reality)

> Guidelines are primarily intended for designers. XR capabilities are still evolving.

XR interfaces use a specialized app bar **orbiter** that floats above spatial panels in 3D space. Currently only available in full space mode; in home space, use a regular 2D app bar.

### Types & configurations

One app bar orbiter type, aligned with the small app bar. Center-aligned or left-aligned.

![Center and left-aligned app bar orbiters](https://lh3.googleusercontent.com/PYHwyx3K5m9cJiev6I-MKCs6A60Tc5AZcpBzBcqqGQLSQMnOmNCuR1s8uzfsiZI_Yh3_LoLN1rFIo5dUEv89LWBnr3n7Qobo3yHChEb5_MJK_A=s0)

### XR Anatomy

![App bar orbiter anatomy](https://lh3.googleusercontent.com/O1YVMPmvL54Qi15A17QmKNzQhv18CgDcmtGdGFtfK60IHEQNqSPp3BAdAJjZugpdBhS_ZoF3t3xcuyZcTP9McxR1FEaLkkluyBbkYPRVDnLduQ=s0)

1. Container
2. Headline
3. Trailing icons
4. Leading icon

### XR Color & Elevation

XR uses color to communicate elevation. With spatial elevation, the app bar displays above the spatial panel on the Z-axis.

![3 versions of app bar elevation color strategy](https://lh3.googleusercontent.com/7PoV7x7SsxMju6tTGEHlmT5PdcZ8VVSnzTFYcEIZlLBeIUXbp9RB9T0zphIoaYJFyzQfZyOa2AOpYIANWae0FLpDv1_lqMawI9R0TgXvjcA5=s0)

1. Surface container
2. Surface container high
3. Surface container highest

### XR Measurements

![App bar orbiter measurements and padding](https://lh3.googleusercontent.com/_ROPguXE9EGmEjUSfBAPGksGu_cWhxmyKG7GLSG_qlgGQIpuD8cgrumMEgAPKdaXuxLWFZOqfUEnu6WAqapCHjBPbx1ytlUpSG7_nD0LgA2Z=s0)

### XR Behavior

- **Global context**: orbiter centered at the top of the app; stays anchored during layout changes
- **Local context**: orbiter centered at the top of the spatial panel it controls; repositions in response to layout changes
- In most cases, use only one app bar orbiter in global context

### XR Placement

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmagu63wr-01-do.png?alt=media&token=6ea69c41-408e-4447-9022-00afd977765b=s0" /><br/><b>Do:</b> Include a 20dp margin to visually separate orbiter from spatial panel</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmagu6wj2-01-dont.jpg?alt=media&token=98bc178f-4bd0-4f16-b054-f3d4d1a15771=s0" /><br/><b>Don't:</b> Don't overlap the app bar orbiter and spatial panel</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmagu80gp-02-do.png?alt=media&token=72fa7f6a-68a6-4e8f-97f9-7b8f8e35cd8f=s0" /><br/><b>Do:</b> Align orbiter within the bounds of nearby spatial panels</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmagu91ed-02-dont.png?alt=media&token=4c8684ea-2bac-47bf-a409-8dc87db814ce=s0" /><br/><b>Don't:</b> Orbiter shouldn't exceed the width of adjacent spatial panels</td>
</tr></table>

- By default, orbiters are center-aligned to the spatial panel; width and placement can be adjusted for ergonomics or RTL languages
- Keep orbiters within the user's field of view for easy navigation
- In local context, the orbiter can expand to match the spatial panel width — test for usability

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaguc0nf-01-do.png?alt=media&token=fd37ce05-82c0-4b99-8edf-2f0fda94034b=s0" /><br/><b>Do:</b> Adjust orbiter width to fit in the user's field of view</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmagv5qxq-02-dont.png?alt=media&token=30b6f21c-4aa4-4768-92ac-014e1dded8a1=s0" /><br/><b>Don't:</b> Don't expand beyond the panel width and user's field of view</td>
</tr></table>

---

## M2 → M3 Differences

| Aspect     | M2                                   | M3                                                        |
| ---------- | ------------------------------------ | --------------------------------------------------------- |
| Name       | Top app bar                          | App bar                                                   |
| Color      | Static color mappings                | New color mappings, dynamic color compatible              |
| On scroll  | Elevation + drop shadow              | Color fill overlay, no drop shadow                        |
| Typography | Smaller default text                 | Larger default text                                       |
| Layout     | Taller default height                | Shorter default height                                    |
| Variants   | Small, center-aligned, medium, large | Search, small (with center option), medium/large flexible |

<table><tr>
<td><img src="https://lh3.googleusercontent.com/cBekWt7xDa8xEu5XXaem1OHo1sbSYkWtpPf8V_6QeBgGzxia-Ba6WoZDfUkaUvywiflh3J89oatLV3Zpqv4DupaDfVyy41vXxkxpDAnEqvaGtw=s0" /><br/><b>M2:</b> Elevation and drop shadow raise the app bar when content is present underneath</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlkui2vk-07.png?alt=media&token=ab974573-5f3b-469a-9779-173b3101e1f0=s0" /><br/><b>M3:</b> On scroll, a color fill overlay separates the app bar from content beneath</td>
</tr></table>
