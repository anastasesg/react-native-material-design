# Navigation Rail — M3 Component Reference

> Navigation rails let people switch between UI views on mid-sized devices.

Sources: [Overview](https://m3.material.io/components/navigation-rail/overview) · [Specs](https://m3.material.io/components/navigation-rail/specs) · [Guidelines](https://m3.material.io/components/navigation-rail/guidelines) · [Accessibility](https://m3.material.io/components/navigation-rail/accessibility)

---

## Variants

![2 variants of navigation rails.](https://lh3.googleusercontent.com/iQ9mPuq7sZfsnSF_EfYMxQdypYp9K_fDEGHm0-4zuKdHXU48Kf7zItSC0hxmu3QW_ugdX67kQeQlrkgs7GzF6Kpo1FFERw1SFlVd6DCQC5gm=s0)

1. Collapsed navigation rail
2. Expanded navigation rail

| Variant                    | M3        | M3 Expressive                                  |
| -------------------------- | --------- | ---------------------------------------------- |
| Collapsed navigation rail  | —         | Available                                      |
| Expanded navigation rail   | —         | Available                                      |
| Navigation rail (baseline) | Available | Not recommended. Use collapsed navigation rail |

The **collapsed** rail replaces the baseline navigation rail. The **expanded** rail replaces the navigation drawer. The baseline variant is no longer recommended.

![A collapsed and expanded navigation rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fsz2c4-2.png?alt=media&token=e1cbb29b-89b7-4662-9465-2c39f2bd9edd=s0)

The collapsed and expanded navigation rails match visually and can transition into each other.

![Baseline navigation rail.](https://lh3.googleusercontent.com/_GDghBF084KxFoboNpBiBukL7eC9btnn0Mb6Jk_768f3C75CzUZ_lS1sJyKteHLGeR2sa__sSE-baRgcdfAxgBR3jxoUV13DucOJj2FXrDM=s0)

The baseline navigation rail is no longer recommended.

---

## Anatomy

![9 elements of collapsed and expanded navigation rails.](https://lh3.googleusercontent.com/zju3SaKNZtIg8oswdNqjqbU2pgzAazbfcyzRL_wo1UneMQSp9D6yIVFbPDeEtmh09MwYuYYHofz5j6DGbwBVO9cBdpqUxwJehXqI242Tz80bUg=s0)

1. **Container** — runs along the leading edge of the window; color fill separates it from content
2. **Menu** (optional) — transitions between collapsed and expanded states
3. **FAB or Extended FAB** (optional) — anchored at the top of the rail, above navigation items
4. **Icon** — symbolizes the destination content (filled when active, outlined when inactive)
5. **Active indicator** — pill shape showing the currently active destination
6. **Label text** — short (1 word preferred), describes destination
7. **Large badge** (optional) — shows count of updates
8. **Large badge label** (optional) — text inside the large badge
9. **Small badge** (optional) — indicates an update exists

![10 elements of expanded and collapsed navigation rails.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fug0sy-05.png?alt=media&token=465bf07d-fe91-4cfa-97c3-e9624609ed50=s0)

The guidelines anatomy adds **Label text - inactive** as a distinct element (element 11).

---

## Usage & When to Use

![Colorful, purple navigation rail shown collapsed and expanded.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fueyh1-01.png?alt=media&token=c9edba18-9dee-44b1-9657-4dd1cdf2ff74=s0)

The navigation rail displays navigation items, an optional menu, and an optional FAB in a vertical orientation. It can contain **3-7 destinations** and should always remain in the same position across screens.

- Use in **medium, expanded, large, or extra-large** window sizes
- **Compact windows** should always use a navigation bar instead
- In medium windows with few destinations, consider using a navigation bar

### Collapsed

The collapsed rail runs along the leading edge of the window and should contain 3-7 navigation items. It should **not** be hidden.

![Collapsed navigation rail with "timer" icon on FAB.](https://lh3.googleusercontent.com/2h46aO3pI3H6sk6nAElUSXgQFeS-w8ASJc8WcVkSbZ4bM8FJoTDWdNodAqWyROvWADumQNodvIQiUGDoBjq162uNRm52qDDoSVxUvoCDeNDx=s0)

A navigation rail should be the only visible navigation element.

### Expanded

The expanded navigation rail can be **standard** or **modal**, and should always open from a menu icon. An expanded rail can reveal secondary destinations not visible when collapsed.

- **Standard** — placed beside body content, best for larger windows with lots of available space
- **Modal** — overlaps body content, opened from a menu icon. Use for information-dense layouts or products with many navigation items

![Expanded navigation rail shown expanded by default and expanded over screen content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuf9qz-03.png?alt=media&token=3377b89c-7c1c-4a94-8282-d48530c4d81e=s0)

A navigation rail can be expanded by default on larger screen sizes, or expanded over content on smaller screen sizes.

In immersive experiences, the expanded navigation rail can be hidden entirely, appearing only when the menu icon is selected. The collapsed navigation rail should not be hidden.

![Navigation rail and hidden navigation rail with menu icon button for expansion.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fufhuq-04.png?alt=media&token=e13c10f7-7c71-4702-a6e5-a4d6842ad1b9=s0)

---

## Configurations

![Standard and modal layouts of navigation rail.](https://lh3.googleusercontent.com/Q6opw4o2Z-4QOi0ydyk2R1MLywKayfVfAMWjKN6nvzz6OZzoJOGsl_BvoY_XaQp0dSV2iH4gwgEJ0tYqAXEKQKJy1Gko4-M5s1umRBx2MaHD=s0)

1. Expanded layout: standard
2. Expanded layout: modal

| Category          | Configuration       | M3                                                                 | M3 Expressive |
| ----------------- | ------------------- | ------------------------------------------------------------------ | ------------- |
| Expanded layout   | Standard (default)  | [More on navigation drawers](/m3/pages/navigation-drawer/overview) | Available     |
|                   | Modal               | [More on navigation drawers](/m3/pages/navigation-drawer/overview) | Available     |
| Expanded behavior | Hide when collapsed | —                                                                  | Available     |

### Common layouts

![4 common layouts of collapsed navigation rail.](https://lh3.googleusercontent.com/Q7TK1on1e6Srj9rXvfTaKHDKgYKSh07xaPRGq0zatThZiQkiwf-UMR1-H60g1esYikZSHRedr3h-lkPoU4ICPljobiH8pOBRjSINWIs7ANcD=s0)

![4 common layouts of expanded navigation rail.](https://lh3.googleusercontent.com/z_uzDW3EjZiO_WRnWUJem6qKFygJFreR0EX_C_F4b4gyUdaq1KV9KFpJqgJpBWstqQ1O-CdNp0N6b7mAK8Xp6CkIKHupoRyeHFQkqfLEpnI=s0)

1. Three navigation items
2. Three navigation items with a menu
3. Three navigation items with a FAB
4. Three navigation items with a menu and FAB

---

## Sub-elements

### Container

The navigation rail should be placed on the leading edge of the window — left side for LTR languages, right side for RTL languages. The container fill can be turned off so the rail appears directly on the surface, but all items must maintain a minimum of 3:1 color contrast.

![Right-to-left navigation rail in Hebrew, and left-to-right navigation rail in English.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fugb5b-06.png?alt=media&token=9bd7ddad-b14f-4131-bdd4-bbdb07283569=s0)

The navigation rail must always run vertically. Do not orient it horizontally — use a navigation bar for horizontal navigation.

![Horizontal navigation rail on timer screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmacys6lz-07.png?alt=media&token=274b5d1b-6978-4123-9456-4a822df58bc7=s0)

Navigation rail items can be aligned as a group to the **top** or **center** of a layout. On tablets, use center alignment to make items easier to reach. The menu icon and FAB should always be top-aligned.

![Navigation rails with different alignments.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuh0i5-08.png?alt=media&token=32641191-5400-4aba-829c-138e2f3c6d1e=s0)

### Menu (optional)

The menu button transitions between collapsed and expanded states. Once expanded, the rail can reveal secondary destinations. When expanded, the menu icon should change to represent that it can be collapsed.

![Expanded and collapsed navigation rails controlled by a menu icon button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuh7km-09.png?alt=media&token=ae84210a-74d7-4fac-82f1-f7a0356b23d0=s0)

### FAB (optional)

The navigation rail container is ideal for anchoring the FAB at the top of the screen, placing the app's key action above navigation destinations. When nested within the navigation rail, the FAB's resting elevation should be level 0.

<table><tr>
<td><img src="https://lh3.googleusercontent.com/oYiKoFrv-NTEJMP1NoGGpnlw0RTHmfpGWDm7KmDgeKzvpXq6tMZvMjBzUcZkXpnEK2Lb_cbeWRkwS4i4RGn1zfW0N4RcwSGVgltbcvmD6vY=s0" /><br/><b>Do:</b> A top-aligned FAB in the navigation rail</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuhrl8-11.png?alt=media&token=5e953e4b-20d1-4d7f-99f0-c89d39b052e9=s0" /><br/><b>Don't:</b> Avoid placing the FAB below navigation items</td>
</tr></table>

The top of the rail can also hold a logo, but avoid using logos that could be mistaken for buttons. Do not use a logo as a menu button to expand the rail.

![Navigation rail with Material design logo at the top of the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuhyto-12.png?alt=media&token=3e219498-f5cc-4a46-824c-4fb660bc7743=s0)

### Active indicator

The active indicator shows which page is currently displayed. It uses a pill shape and should only appear on one destination at a time. On selection, the indicator expands from the center of the icon.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuicr9-13.png?alt=media&token=7755879a-0c18-40e2-89c8-e51757d7c7b2=s0" /><br/><b>Do:</b> Use the active indicator only for the current open page</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fujiob-14.png?alt=media&token=ed0b9441-30cf-444e-9fde-c84be948b56d=s0" /><br/><b>Don't:</b> Use the active indicator for more than one navigation item at a time</td>
</tr></table>

In the expanded rail, the active indicator hugs the label text. To achieve a style similar to the baseline navigation drawer, consider modifying the indicator to fill the container. The target area should always span the full width.

![Navigation rail with active indicator that hugs the text and icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fujt7v-15.png?alt=media&token=8405c84a-2929-4d68-8bbd-97120c4c41ab=s0)

![Navigation rail with active indicator that is larger than the content within it.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fujxyu-16.png?alt=media&token=bb433446-a6c0-433d-bdcb-181431e6e126=s0)

### Icons

Navigation rail items must use icons that symbolize the content of their page. When a destination is selected, the icon fills and changes color. An active indicator appears behind the icon. If an icon has no filled style, use the semibold icon weight instead.

![Navigation rail with icons that fit the destinations, like a timer icon and label leading to a timer feature.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuk4ze-17.png?alt=media&token=8210a6c6-b488-46e3-aa46-ec3c18a3021d=s0)

![Icons with and without an active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fukavr-18.png?alt=media&token=fa0ab3db-3f7a-47ff-84c2-b0d63ac890f7=s0)

![Icon button with semibold weight, without filled options.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2kvazns-09.png?alt=media&token=91143806-b128-41b8-a02f-9c97f171d073=s0)

### Label text

Labels should be short (1 word preferred), meaningful descriptions. All navigation items require a label. Avoid wrapping long labels when possible — if necessary, break between words or hyphenate. Never truncate labels or shrink the type scale to fit longer text.

![Navigation rail with clear text labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fukhnw-19.png?alt=media&token=a2fe92ce-45d4-4c7b-8c51-5066b3cf7596=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fune8p-20.png?alt=media&token=aaa6d4fd-a007-4a85-ac3c-8063f4f0767e=s0" /><br/><b>Caution:</b> Break up longer phrases into two text lines if necessary</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0funlrw-21.png?alt=media&token=756fbcf4-1cf8-4157-8a41-69c43e76bc2e=s0" /><br/><b>Don't:</b> Truncate or display an ellipsis in place of label text</td>
</tr></table>

![Navigation rail with small text label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0funqlw-22.png?alt=media&token=f25512e4-0821-4d53-9b71-41f2870830fc=s0)

### Badges (optional)

Navigation rail icons can include badges to communicate dynamic information such as counts or status. In collapsed rails, the badge is placed in the upper right corner of the icon. In expanded rails, the badge should be placed next to the label text.

![Navigation rail with badges on each icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuomdi-23.png?alt=media&token=faa3cb30-f478-4450-946a-5be944155717=s0)

1. Small badge on a rail destination
2. Large badge with a number
3. Large badge with a maximum character count

### Divider (optional)

A vertical divider can separate the rail from app content. Position the divider on the edge of the rail container adjacent to the app's content area.

![Navigation rail with divider separating it from screen content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuouq0-24.png?alt=media&token=92b886dc-b887-4991-9487-e7b720f909a8=s0)

---

## Placement

In adaptive layouts, the navigation rail should be placed outside any panes, always along the leading edge of the window. Do not place it within body content. When the rail is hidden, body content can fill the remaining space as long as the menu icon is still accessible.

Tabs can be used alongside a navigation rail to create an extra layer of visible navigation.

Expanded navigation rails can open from menu buttons, including on mobile when the window is in a compact orientation.

---

## Behavior

### Scrolling

Destinations in the navigation rail should remain visible and fixed when scrolling vertically. If the layout scrolls horizontally, the rail can scroll off-screen or remain fixed. To distinguish that content is scrolling underneath the rail, use a divider or add elevation (level 1) to the rail.

### Selection

When a destination is tapped, the destination screen uses a top-level transition pattern. The icon becomes filled and the active indicator expands from the center of the icon.

### Expand/collapse

When the rail transitions from collapsed to expanded, the page contents should automatically adjust to fit. The contents of the rail also expand to fill the space — for example, the FAB should transition into an extended FAB. Extra destinations can appear in the expanded state.

### Back (predictive back)

On Android, predictive back allows people to swipe left or right to go back or dismiss modal components. The previous screen is revealed in a preview to signal the destination. Predictive back only applies to the **modal expanded** navigation rail.

---

## Measurements

![Padding and measurements for expanded and collapsed navigation rails.](https://lh3.googleusercontent.com/RTqY8bTqiMpwcsU_pJkWy9rMeFIjRoSs3m15t8w64kdPnvtTTTE6_Dklo68o5dm4vNj_CA14xM6FrVZkyBtYlf4hcPjBAMOTQ3rvBDY60BrmGw=s0)

### Baseline measurements

![Baseline nav rail size measurements.](https://lh3.googleusercontent.com/PsBusqTr-OE5bCxYRV_i7_t-UpABd6wh-bbKu-mzMDv5-O3eoKvh-B144jLbqI5sf4B63G0hAv5k0m_hf7qTNA6ktxvfRVdk0cILpP3kghqk=s0)

![Baseline nav rail padding and margin measurements.](https://lh3.googleusercontent.com/HCDSa0-MhFtUTT-jj2x4OG8rghWPku3boxc3_KKZzParDgXb2n-nNyXxh-eq8DyOgLXlqmxFHoc2sShKRMWf8m2DKVLHdtpCfsY9_7GGTFA=s0)

---

## Color Tokens

![Color roles of 9 elements of collapsed and expanded navigation rails in light and dark color schemes.](https://lh3.googleusercontent.com/3Tz7j_sy5EUFjFqA1zIOJlDlw9BQIKXjUhChsTlfUHEV8xEo4cPNSVGJOoAeQygkRUxqRK4GoRLPRAFXg_wUb06VbGEwc8VSpeP2PdnytRwt=s0)

1. `surface-container` (optional) — 2. `on-secondary-container` — 3. `secondary-container` — 4. `secondary` — 5. `on-surface-variant` — 6. `on-surface-variant` — 7. `error` — 8. `on-error` — 9. `error`

### Baseline color roles

![8 color roles of baseline navigation rail.](https://lh3.googleusercontent.com/bYdm_ngSm_bDBlh7cCiignDkbte5hHytBrpjYGp_9BfBLH1hF2zPxV-Oqdm6nn8fSHRROojsHBUwN5etdowcM8IHoq2XH1Qy7rRFtshsl5ca=s0)

1. `on-secondary-container` — 2. `secondary-container` — 3. `on-surface` — 4. `on-surface-variant` — 5. `on-surface-variant` — 6. `error` — 7. `on-error` — 8. `error`

---

## Interaction States

The navigation item's target area always spans the full width of the rail, even if the item container hugs its contents.

### Collapsed rail states

![4 states of collapsed navigation rails.](https://lh3.googleusercontent.com/1IxCo2XIMga54ROSNhrWET0gIRcndin6fwUN_DdJMu2VZ4PFpdW1-c-vio2nIOXxmj3p_tGkbBc1N0KGdzg6iuqMCS1_ZsgFG1FfzS6Fppk=s0)

### Expanded rail states

![4 states of expanded navigation rails.](https://lh3.googleusercontent.com/uvOYTNSaWtfWdqdoR0tVR9eCjmd4f-AEfdMVEacZJc0VwURGK8_8FeAvzOY4Kr3sV9YzZfIF-gguMC8haBwaeJB7tgykjwBvSFhlQtuC4AzahA=s0)

| #   | State       | Visual changes                                       |
| --- | ----------- | ---------------------------------------------------- |
| 1   | **Enabled** | Default appearance                                   |
| 2   | **Hovered** | State layer appears over the item                    |
| 3   | **Focused** | State layer appears; focus indicator visible         |
| 4   | **Pressed** | State layer appears; ripple passes through indicator |

### Baseline states

![8 states of baseline navigation rail.](https://lh3.googleusercontent.com/q4Ce0kmHkUU63AUNns9xbrnQx2UlJBT9dfmW-RzlP1iM5biz8sOwR4G7BU8pEmGTbMSy2nnmyYzPFBNwQdyM6b8tJ20dhgkmDEF86WcUpVE=s0)

1. Enabled (active) — 2. Hovered (active) — 3. Focused (active) — 4. Pressed (active) — 5. Enabled (inactive) — 6. Hovered (inactive) — 7. Focused (inactive) — 8. Pressed (inactive)

---

## Responsive / Adaptive Design

### Resizing

When moving from a large screen to a small screen, a navigation rail can transform into a navigation bar, providing the same quick access in a configuration better suited for smaller displays. Never use the navigation rail and navigation bar simultaneously.

| Window size                 | Recommendation                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Compact**                 | Use a navigation bar. Do not use a navigation rail due to space constraints                            |
| **Medium**                  | Use a navigation rail, especially if prioritizing persistent vertical navigation over vertical content |
| **Expanded to extra-large** | Use a navigation rail. Consider available horizontal space and destination count for standard vs modal |

![Navigation bar on a phone screen and navigation rail on a tablet screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fupcvd-26.png?alt=media&token=b1915086-e325-4b2a-946e-eb41d37a9ae7=s0)

If there are more than five destinations, consider using a modal expanded navigation rail instead.

### Presentation

When the rail transitions from collapsed to expanded, page contents should automatically adjust. The FAB should transition into an extended FAB. Extra destinations can be shown in an expanded rail. Use a standard expanded rail when there are secondary destinations or actions that have lower priority than the main navigation items.

---

## Accessibility

### Touch & Cursor

- **Touch**: tap shows active indicator; a ripple passes through the indicator; the icon switches from outlined to filled; icon and text change color
- **Cursor**: hover shows a visual cue that the destination is interactive; click triggers selection

![Colorful, purple navigation rail shown collapsed and expanded.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0guemtv-01-static.png?alt=media&token=3758e551-ad90-4db7-92a7-d8c19e95e973=s0)

![Tap indicator on a collapsed nav rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0guep9g-02-static.png?alt=media&token=bac52c48-506a-47e5-8124-90a1d960485a=s0)

The target area for expanded navigation rails spans the full width of the container, even though the active indicator visually hugs the content.

![Touch indicator on a nav rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gud02c-03-static.png?alt=media&token=e49fb92a-9671-4422-8c7f-25750ab3ca13=s0)

### Visual indicators

Use a filled icon for the active destination and outlined icons for inactive destinations. Active and inactive icon colors need sufficient contrast against the container.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fut28q-04.png?alt=media&token=2d41d871-683b-485e-befb-2770dfb712d6=s0" /><br/><b>Do:</b> Use the default color scheme to ensure proper contrast and emphasis on the active destination</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fut791-05.png?alt=media&token=c9ae906c-6e53-474e-83a7-c26f630a8eb5=s0" /><br/><b>Don't:</b> Use more than two colors for destinations or low-contrast colors in the navigation rail</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0futxf6-09.png?alt=media&token=813363dc-6ed6-40c4-951b-d996abdf8b44=s0" /><br/><b>Do:</b> Use a filled icon variant on the selected navigation item to differentiate from inactive items</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fv1bxc-10.png?alt=media&token=07e1a3b5-ec7f-48ef-b48b-d8e4c1aaa4e1=s0" /><br/><b>Don't:</b> Use the same unfilled icon style for both selected and unselected items</td>
</tr></table>

### Text scaling and truncation

When someone sets their device to show a larger text size, the navigation rail items should grow vertically to accommodate larger labels while retaining default padding. Scaled text can wrap in navigation items. Ensure the full label is always visible at up to **2x text sizing**. Beyond this size, text can truncate.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm36brxfu-04.png?alt=media&token=a23060fe-42ba-4e21-8eec-36fe12115a0d=s0" /><br/>Text scaled to 1.5x size</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm36bs1jw-05.png?alt=media&token=fd8f29ed-e05c-4397-8443-13902974567a=s0" /><br/>Text scaled to 2x size</td>
</tr></table>

### Initial focus

Initial focus lands directly on the first interactive item, whether it's the menu, the FAB, or the first navigation item. From the FAB or menu, **Tab** brings the person to the navigation items. **Tab** or **Arrows** then navigate between items.

![Arrows help people move between pages.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0futkj8-07.png?alt=media&token=96c198ca-69ed-4388-81d4-76785f7c7960=s0)

![Space/enter help people choose a navigation destination.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0futowb-08.png?alt=media&token=6a263d5a-f534-4cc7-b669-c5828633d338=s0)

### Keyboard navigation

| Key           | Action                                 |
| ------------- | -------------------------------------- |
| Tab / Arrows  | Navigate between interactive elements  |
| Space / Enter | Select the focused interactive element |

### Labeling

The accessibility label for a navigation item is typically the same as the adjacent text label. When the visible text is ambiguous (e.g. "Recent"), provide a more descriptive accessibility label to clarify intent (e.g. "Recent images"). Note: On MDC-Android, a more descriptive accessibility label is not available and the role is not announced.

!["Maps" is both the icon label text and the accessibility label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuvxlx-11.png?alt=media&token=ec0c7c6d-3c55-4515-81d8-6c0a220e1f92=s0)

---

## XR (Extended Reality)

> XR guidelines are rapidly evolving and primarily intended for designers. See the [design kit](https://www.figma.com/design/cVjQvQ0moD8wkPWH2rn2c6/XR?node-id=294149-10229&t=AFAz42CCMXa5470T-4) and [XR developer documentation](http://developer.android.com/design/ui/xr/guides/foundations) for more details.

### XR variants

There are two variants of navigation rail orbiters: **contained FAB** and **spatialized FAB**.

![Navigation bar orbiters with a contained FAB and a spatialized FAB.](https://lh3.googleusercontent.com/dPJqjYJCk9bPHeSRMvYPWuDtexUzZDMRBk6vNciqpu5z0dQG30QbaVle64vcI2dusE8aqPEUqFra47gf6R870mBGAhYghroP90OYqWugm180=s0)

1. Contained FAB rail
2. Spatialized FAB rail

### XR anatomy

![Diagram of navigation rail orbiter identifying 9 internal elements of the component.](https://lh3.googleusercontent.com/rU4TAGNiKzJj6z-L-jcKcfsZTlzzuIycA30T85HGQ_JyBo49apcjkI9TKY5yvPo4-heaO-X5nfrETlyizfZ9_FlQaV-z9BZQFNZ1S7N-MP-y=s0)

1. Container — 2. Active indicator — 3. Large badge (optional) — 4. Badge (optional) — 5. Large badge label (optional) — 6. Label text — 7. Icon — 8. Embedded or spatialized FAB (optional) — 9. Menu icon (optional)

### XR color & elevation

Color is used to highlight elevated UI elements and orbiters in XR. With spatial elevation, the navigation rail displays above the spatial panel on the Z-axis. Elevated navigation rails can use any of these color options:

![4 versions of elevation color strategy.](https://lh3.googleusercontent.com/M6OH6zh7_zTrkS1zUDj-eceTyjgUMahrpEPl6WDJMMAuoODDcaGHDbMtZDzxApkri7IjSHwtCZnBxQnucLJCwA_zJawPO2gSn5i8Qo7-DxNp=s0)

1. Surface container with tertiary FAB
2. Surface container high with tertiary fixed dim FAB
3. Surface container highest with tertiary fixed dim FAB
4. Tertiary container with primary FAB

### XR measurements

![Measurements and padding for navigation rail orbiter with contained FAB.](https://lh3.googleusercontent.com/rLe0xRyUvCeR1tXOPjPJ-hELWYJVzjkIMhHriNOGkHBiJEzAGt7hAMOrn9O5uGpAapq6A1uzhFSbP9u7GChXoBzMVpGj-MJ_q72tJBrP0X0avA=s0)

![Measurements and padding for navigation rail orbiter with spatialized FAB.](https://lh3.googleusercontent.com/VGWnkF5eQPdJ2RNo4C0VAmVigdGhBqswyXKAYq0cQgHfCPwPFHm7JKlRPkOgAHxPTtww-Wmm2TnRan4iae_giCyC0KgU76nsh_2z6K2-lW-7=s0)

### XR usage

In **full space**, a navigation rail can appear in an orbiter for a more immersive experience. Currently, spatial capabilities such as orbiters are only available in full space. In **home space**, use a regular navigation rail on the same plane as body content to mimic a 2D experience.

### XR behavior

- **Global context**: the navigation rail orbiter should be centered along the left or right edge of the app it controls. It stays anchored during layout or content changes to ensure controls are easy to find
- **Local context**: do not place a navigation rail orbiter in local context or between spatial panels. Local placement can make controls hard to find. Navigation rails are designed for app-level navigation and should only use global context

### XR placement

The position of the navigation rail orbiter should communicate its navigational context:

- **Offset positioning** — for global actions that affect the overall app experience
- **Inset positioning** — for local actions specific to a spatial panel

A navigation rail orbiter can either overlap or be positioned adjacent to spatial panels with a **20dp margin** for visual separation. An inset navigation rail orbiter should overlap spatial panels by **12dp** and no more than **half its width**.

The orbiter can be aligned to the **top**, **middle**, or **center** of spatialized panels. Its placement should not exceed the height of adjacent spatial panels.

Avoid placing a navigation rail orbiter **between spatial panels** — this negatively affects the interface structure. For layouts spanning more than two spatial panels, consider using a navigation bar orbiter instead.

### XR spatialized FAB

- **Contained FAB rail** — a contained FAB within the rail. Compact and familiar layout
- **Spatialized FAB rail** — the FAB becomes its own orbiter placed outside the navigation rail orbiter. Use for higher emphasis and a distinct spatial effect

Use the spatialized FAB rail to emphasize key actions and leverage XR hierarchy. Use the contained FAB rail for a more subtle approach that aligns with the baseline navigation bar.

Place the spatialized FAB in close proximity to the navigation rail orbiter. Material recommends a **20dp margin**. The spatialized FAB can be placed above or below the navigation rail orbiter. Keep spatialized FABs within the height of adjacent spatial panels.

### XR accessibility

XR accessibility guidelines are still evolving. XR navigation rails should follow applicable Material [navigation rail accessibility standards](https://m3.material.io/m3/pages/navigation-rail/accessibility).

---

## M2 → M3 Differences

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dtdapc-3.png?alt=media&token=643d52f9-213d-4aed-90fd-029c44fce678=s0" /><br/>M2: Icon color, weight, and fill to communicate which destination is active</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fszcgl-4.png?alt=media&token=8b26ebe5-396b-4148-b571-247ef9634f50=s0" /><br/>M3: Pill-shaped active indicator to communicate which destination is active</td>
</tr></table>

| Aspect        | M2                           | M3                                                            |
| ------------- | ---------------------------- | ------------------------------------------------------------- |
| Active state  | Icon color, weight, and fill | Pill-shaped active indicator + filled icon                    |
| Color         | Basic color mappings         | New color mappings, compatible with dynamic color             |
| Behavior      | —                            | Predictive back interaction (modal expanded only)             |
| M3 Expressive | —                            | Active label uses `secondary` instead of `on-surface-variant` |

### M3 Expressive update (May 2025)

- Baseline navigation rail no longer recommended
- Added **collapsed** navigation rail (replaces baseline)
- Added **expanded** navigation rail (replaces navigation drawer)
- Expanded rail supports **standard** and **modal** configurations
- Expanded behavior: transition to collapsed rail, or hide when collapsed
- Active label color changed from `on-surface-variant` to `secondary`

---

## Baseline Navigation Rail (Not Recommended)

The baseline navigation rail is no longer recommended. Use the collapsed navigation rail instead. These specs are preserved for reference.

### Baseline anatomy

![8 elements of baseline navigation rail.](https://lh3.googleusercontent.com/ADBFvMHXuRRv0_6Z-N3tRHlMrh88FQQszAdMrNhAM-p2IdU_v8QQRA0cezT6n2vPpVmhQ7R8saOYcTsI1okUonFMqT8GzmCfjymxB9hHPv8=s0)

1. Container — 2. Menu icon (optional) — 3. Icon — 4. Active indicator — 5. Label text — 6. Large badge label (optional) — 7. Large badge (optional) — 8. Badge (optional)

### Baseline configurations

![5 configurations of the baseline navigation rail.](https://lh3.googleusercontent.com/0ArxFOIUj1oF4bmcdt98kcylfvstmfHlWXRI2sVpFC5UG246qn6yr4185ERKim5I5IYDjTqDnWX_fMqGE_nrXr_7dJj5H7sCznQWP5SfkX4h=s0)

1. With a menu
2. With a FAB
3. With menu and FAB, without labels
4. All destinations with text labels
5. With menu, FAB, and label text for all destinations
