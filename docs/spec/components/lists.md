# Lists — M3 Component Reference

> Vertical groups of text, icons, images, and other elements optimized for reading comprehension and item selection.

Sources: [Overview](https://m3.material.io/components/lists/overview) · [Specs](https://m3.material.io/components/lists/specs) · [Guidelines](https://m3.material.io/components/lists/guidelines) · [Accessibility](https://m3.material.io/components/lists/accessibility)

---

## Variants

### Expressive lists

The expressive variant introduces a segmented visual style with rounded corners, highlighted selection states, and customizable slots. Recommended for new designs.

![2 expressive lists: a photos list on a tablet, and a song list on mobile.](https://lh3.googleusercontent.com/za34_v9MVYFLgx4_LMophxugdmjrYW0gWSPfWtA_ntmDC74Lx_qID9YyOa7IEqJ73xCrYnCAXghjFmDugBK86DdvpEUUKbkfWTYCA2pV5iwt=s0)

### Baseline lists

The baseline variant remains available but lacks the latest visual style, selection treatment, and slot functionality.

![3 baseline list items with square corners.](https://lh3.googleusercontent.com/N4Dqm-y0qh8NW2KuKAqcRAmf_oyfUyeY2HgR3cHvoCwL-cM6j7fuAg97gGrX73Rs25WTv-POEG1ZSlXeyFPRkjhexmngaaSJMDJV0azeZXhV=s0)

| Variant           | M3        | M3 Expressive |
| ----------------- | --------- | ------------- |
| List (expressive) | —         | Available     |
| List (baseline)   | Available | Available     |

---

## Configurations

### Styles

Standard and segmented are purely visual choices that do not affect behavior.

![A standard list and segmented list in dark mode.](https://lh3.googleusercontent.com/AjWZ3hS3wVVBYsai8chTl-DhNYum8MkyLgX24Q1dLLV43O6P2gRIbTqcrvQMXwyFG9Jai3R-zExVwkBZ5A3QZGW4EryAzfylOS6N0FB1brD8=s0)

1. Standard
2. Segmented

### Selection modes

A list supports only one selection mode at a time. Switching modes (e.g. from single-action to multi-select) is allowed, but a list cannot combine modes simultaneously.

![A single-action list with 4 items and no additional actions.](https://lh3.googleusercontent.com/b5GgNFwCct9zCo3T-5FIclsjz95tsQWzwwptHqyfIs9ooGmMg8C4FLlknKKmivn_ho5bbYRLRnaxophUvZLmKrLqm1bkGF4tEyHNR4_CObV0og=s0)

![A list with 4 items. Each item has 2 trailing icons for additional actions.](https://lh3.googleusercontent.com/YZNJPefhDxEZHejO2AZtRcJlJmExP5SKLT5whDkHInauUNxfIgYBOXhlhXukAnjNfZRDhVUlk5fRz8QNgGAWqUaDPYkKANg3ZJ1vyK0GXZA=s0)

![A list with 1 item selected.](https://lh3.googleusercontent.com/N1XQO63f9X32oDtv-OfmhY2QXVt4JpIIbZVk7BmB_2FcLR7QDWORgKJOQkA81-R5pujkxNiZHTMRgjMuAcytlrMERtLFsohNDJDu888bY3g=s0)

![A list with 2 items selected.](https://lh3.googleusercontent.com/ANybLHYX4h2Z9SkeL_p_Pp1K3Wg9plho_Lbg3-Z5d7NwszrsXTlRm434BJIm0mbM1Km5s9XFun2jYrYZqVcj3vRF0rRY-Dk3ZpeQLYrzooMq=s0)

### Interactions

Lists can expand and collapse on Android, revealing or hiding nested items.

| Category        | Configuration                                            | M3        | M3 Expressive |
| --------------- | -------------------------------------------------------- | --------- | ------------- |
| Styles          | Standard                                                 | Available | Available     |
|                 | Segmented                                                | —         | Available     |
| Selection modes | Single-action, multi-action, single-select, multi-select | Available | Available     |
| Interactions    | Expand                                                   | Available | Available     |

---

## Anatomy

![Diagram with 10 elements that can be included in lists.](https://lh3.googleusercontent.com/Sa8xghsBnkEPnF8eS5BsRjuohsdTmqbkr_f1sENLSXj6Vvj60a-fAE32n9nUI8ErJeIbxkQPPl7wExD8qwxOM1aUbjPPV60s-E5vfR6EN6i7=s0)

1. **Container** — holds all list items; item height is determined by the tallest element within
2. **Overline** — optional small text above the label
3. **Label text** — primary text for the list item; can wrap or be truncated
4. **Trailing text** — supplemental meta-information (price, count, date)
5. **Supporting text** — secondary text below the label; limit to 1-3 lines
6. **Trailing icon** — communicates status or indicates an action (e.g. "show more")
7. **Divider** — separates list items or groups
8. **Leading avatar** — circular or expressive-shaped image representing a person or entity
9. **Leading icon** — quick visual cue related to the item's label
10. **Leading media** — image or video thumbnail

![List diagram with 10 elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiewsyte-06.png?alt=media&token=cf5f9795-d6a3-4dbd-a44b-b2496d59a9ef=s0)

### Flexibility & slots

The M3 Design Kit provides lists with custom slots for flexible item layouts. Each list item has three slots:

1. **Leading slot** — visual elements (avatar, icon, image, video), selection controls (checkbox, radio, switch), or customizations (badge, larger image)
2. **Content slot** — must be the largest-width slot; contains label text, supporting text, and optional add-ons (badge, icon, inline label)
3. **Trailing slot** — action elements (icon, icon button), trailing text, or selection controls

![A diagram with leading, content, and trailing slots.](https://lh3.googleusercontent.com/xpDca9BbXlTiv20zpU4gfBwt6MkKXaY5ZNLRcxAljGC5QsVXgH3mKaHiaEI6okSs2gUhacnLEdM2zCIC5raKpqBZl476yJ8Qchx5bxvt6Kywwg=s0)

![Slot diagram showing slot placement in the middle of the list.](https://lh3.googleusercontent.com/jx4zxtSR4RN6N-1sCYapnbcg_EJOMuolnJBIPdx5aR9tEJ3PB1VtfNmemVGd-IKUMyPhpg1xj2FOUwBYzeekhv1rOIX4bE33jmMPNbV10RTL8w=s0)

**Slot accessibility:** Slots are not accessible by default. Elements must follow standard list interaction patterns, use standard padding, maintain 48×48dp minimum target size, and avoid interactive elements that complicate screen reader navigation.

---

## Usage & When to Use

![1 list contains 3 items, each with a label text, supporting text, and trailing text. A music app shows list items with leading images.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8nxjh0-01.png?alt=media&token=c030c446-c1e4-46b4-b732-cf0f8bb19bd5=s0)

- Help people find a specific item and act on it
- Order items logically (alphabetical, numerical, etc.)
- Keep items short and scannable
- Show icons, text, and actions in a consistent format
- Use for communicating or selecting discrete items (e.g. choosing from a set of colors)

![A list of colors with Periwinkle selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiewi9tz-03.png?alt=media&token=7bc2a849-966d-418b-ac1b-ffaf6113e05e=s0)

### Content alignment

Place supporting visuals and primary text in the same position across all list items. Consistency is key for scannability.

![4 versions of the same list highlighting avatar and text alignment.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiewmxat-04.png?alt=media&token=0bc12f22-822f-4dca-a55e-cf803c736160=s0)

1. Sample list
2. Content placement in a row
3. Supporting visuals aligned for scanning
4. Primary text aligned for scanning

### Text line configurations

**Label text only** — single line; can wrap or truncate if needed.

**Label text with supporting text** — supporting text appears below the label; both can wrap or truncate. Limit supporting text to 1-3 lines.

![3 lists show items with label text only, label text with 1-line of supporting text, and label text with 2-lines of supporting text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiewpdzm-05.png?alt=media&token=83cc77fe-12ec-4e3f-a81a-3ca656b25f1a=s0)

1. Label text only
2. Label text with one line of supporting text
3. Label text with supporting text wrapping to two lines

---

## Sub-elements

### Container

List item size is determined by the tallest element within. When a list item features a leading image, consider using a content-based color scheme for the container.

### Label & supporting text

Keep label text brief. Limit supporting text to 1-3 lines and truncate depending on screen size.

![A list item with a leading image, concise label text "Art events", and 2 lines of truncated supporting text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiex0v5m-08.png?alt=media&token=1cb8a712-4266-4e50-a3df-fe0b9d04e5e8=s0)

### Icons

**Leading icon** — provides a quick visual cue related to the item's label, aiding scanability.

**Trailing icon** — typically communicates status or an action (e.g. "show more", navigation arrow).

![Leading icons should relate to the label text. A list of items with leading and trailing icons on a mobile device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexc5t2-9.png?alt=media&token=a485fa4a-9174-4c45-812c-23f19092eff9=s0)

1. Leading icons should relate to the label text
2. Trailing icons can communicate an action

### Leading media

List items can contain a leading avatar, image, or video. Anchor visuals to the leading edge for better scannability. Video thumbnails can open a player or play inline.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexhs7r-10.png?alt=media&token=bf90846b-653f-4e89-9cbe-5b429e162c37=s0" /><br/><b>Do:</b> Place supporting visuals like thumbnails at the leading edge to improve scannability</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexip9k-11.png?alt=media&token=c678f226-2089-493f-855d-5fc175e900bb=s0" /><br/><b>Caution:</b> Avoid placing visuals in the center of a row — it makes the list hard to scan</td>
</tr></table>

**Avatars** — use circular or expressive shapes for people/entities. Use square or rectangular images for other content (products, videos).

![List of contacts with avatars with a circular, expressive crop to indicate a person.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexkoay-12.png?alt=media&token=5e57234e-4437-4411-857f-dc0694d0f757=s0)

### Primary & secondary actions

Allocate more space to the primary action area. Place supplementary actions in the trailing position.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexnuvs-13.png?alt=media&token=a295b2a5-4ec4-435e-b6ef-8507e4c2a387=s0" /><br/>The primary action takes up more space:<br/>1. Primary action area<br/>2. Secondary action area</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexoaw7-14.png?alt=media&token=a19485e2-bb2e-4664-ba06-e59a0e1e969e=s0" /><br/>Align content by importance:<br/>1. More distinguishing content<br/>2. Less distinguishing content</td>
</tr></table>

### Trailing text

Provides additional meta-information like price, count, or date.

![The date "Nov 17" as trailing text in a concert ticket list item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiextt91-15.png?alt=media&token=31a353c9-dda5-4e57-9840-f0ad4606b291=s0)

### Selection controls

Position selection controls at the leading or trailing end:

- **Checkboxes** — for multi-select
- **Switches** — for toggling settings on/off
- **Radio buttons** — for single-select

![3 lists with different selection controls.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexzfsy-16.png?alt=media&token=18466d3e-1b66-4ddf-b1d6-ff1a9fe21e12=s0)

1. Checkboxes
2. Switches
3. Radio buttons

For selection lists, use only one selection interaction per list item.

<table><tr>
<td><img src="https://lh3.googleusercontent.com/_cCLtqaTv3_VJ2Su5-NcT91PPqYvyAFZeK-5w0av-NbLChQrKPvD3HSBWsc6adlc9M1DQGkIVd_eisASsmoVyA_2nO23ObPXfcuLp6O9sMU=s0" /><br/><b>Do:</b> Use only one selection interaction per list item</td>
<td><img src="https://lh3.googleusercontent.com/7ikqKMFSD3KqUsrjy_D0FguVESN7UimX34YCtDgR8Cqm5sbof9nysVBBnBgjQukuuXjAQooDRC5mtopWMuGcpNL6TIQDNjGzQ3fkSDJVFfLZrg=s0" /><br/><b>Don't:</b> Don't use multiple selection interactions in one item</td>
</tr></table>

### Gaps & dividers

Use **gaps** for contained/segmented lists — they leverage expressive shape and containment. Limit **dividers** to uncontained or complex lists where a stronger visual separation is necessary.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiezuscb-17_do.png?alt=media&token=84c1ee7c-a7e6-441c-ba3c-19442e4011f8=s0" /><br/><b>Do:</b> Use segmented gaps and filled list items to define a list group</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiezvi6d-18caution.png?alt=media&token=0398b3a8-3d8b-4e62-999b-0859fffaadcc=s0" /><br/><b>Caution:</b> Limit dividers to uncontained lists</td>
</tr></table>

---

## Behavior

### Selection modes

The selected state applies to the entire list item. For example, when a checkbox item is selected, both the item container and checkbox show the selected state.

**Single-select** — uses radio buttons. Items cannot have secondary nested actions and should not use checkboxes.

![A 3-item list with radio buttons, with 1 item selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmielqxgm-29.png?alt=media&token=01482923-26aa-4237-9ed7-8bf0c4cb52ac=s0)

**Multi-select** — pairs well with checkboxes and switches. Items cannot have secondary nested actions and should not use radio buttons.

![A 3-item list with checkboxes and 2 items selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmielw5u4-30.png?alt=media&token=452063d1-7f87-49ce-9bed-07fb0459add1=s0)

**Single-action** — the entire list item performs one action (e.g. navigation). No secondary nested actions, no persistent selected state.

![A 3-item list where each item is a single tappable area.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmielzpxu-31.png?alt=media&token=1b8831f3-1559-4969-ab1e-485277328d1c=s0)

**Multi-action** — supports multiple nested actions per item. The primary action occupies the leading and content positions; supplementary actions (bookmark, menu) go in the trailing position.

![A 3-item song list where each item has 2 trailing icons: a bookmark and overflow menu.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiem2107-32.png?alt=media&token=0f04fe0b-b4d8-44cc-8907-2cbd0369be87=s0)

**Non-interactive** — displays information in a scannable format without performing any actions or allowing selection.

![A 3-item non-interactive list showing a historic timeline of space travel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiem457u-33.png?alt=media&token=66743795-977c-4cb7-b968-2a513a62d024=s0)

### Expand & collapse

List items containing nested items can expand and collapse vertically. Tapping an expandable item triggers a container transform transition.

---

## Spec configurations

### Leading avatar

![1, 2, and 3-line list items with and without a leading avatar and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/YtV6g40j9-XQCPCAVu67QZhyyBxdzXse8Aq4zgVnIWxg5eL0YP-62b5XRWhoQFLGZ77XDbPLnnLnc6cQrbdVy0vdd5Qop9rt2L0vbVMrGlw=s0)

1. With leading avatar
2. With leading avatar and trailing checkbox

### Leading image or thumbnail

![1, 2, and 3-line list items with and without a leading image and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/7K4R5eQvQLtvBGZ8iDlPrwl6-HftUdcPx0S6MRj8QLMuQMLlHQXj0EYkvlawvcIQOlaTsf1CAq8GIXC-zPanjI8B5o0Wznt8P_Os0Bir_Fq92A=s0)

1. With leading image
2. With leading image and trailing checkbox

### Leading video

![1, 2, and 3-line list items with and without a leading video and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/811g1L2vKGQ0BTtqAoZPO-jApLgGPEDiV-7oi308iwDk-GrwrWTuQmCkNSok5-5XqCp7iNaldpc6cnpOL2Xe1RfUSfURXuucBF8O5k5WUomf=s0)

1. With leading video
2. With leading video and trailing checkbox

### Leading icon

![1, 2, and 3-line list items with and without a leading icon and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/F_D2HGWtWYSMxDVgfkIRpfgvy8O26m5Gq1uzE8tvEuo9m9sMLfRhcnuVfZSE6hyxoICYNuSzjIfA1yRVpcXvaJG1b02lEpkYn-l0scGCQTmt=s0)

1. With leading icon
2. With leading icon and trailing checkbox

### Text-only

![1, 2, and 3-line text only list items with and without a trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/0D-xONvUbyoPV0EMlMrBItgWHQXbW1IV2dBVpIslSFeHc0mUoHbJsP3y9on5ym7Ch1ICbFcFH7026UzSdnQvTABrsRQhYe8yRiG2imFaK00=s0)

1. With text only
2. With text and trailing checkbox

### Leading checkbox

![1, 2, and 3-line list items with and without a leading checkbox and trailing text, in dark mode.](https://lh3.googleusercontent.com/3pOgKx-2m1N3ewCJ-joHRZ0IFwf-GHaxzimTyF_4-SYx_80TL6UnaBywa7ogFoCCil_KQgEFXoNmwKuXP_6dGsFC0uMqCLGE5qQpUqHOGdrxZQ=s0)

1. With leading checkbox
2. With leading checkbox and trailing text

### Leading radio button

![1, 2, and 3-line list items with and without a leading radio button and trailing text, in dark mode.](https://lh3.googleusercontent.com/-Eph6i5PJ8k8D5ABIpITkh-WLe2a-gMsM-sq2qCDM1cFBVfQN3FGAYAwiryrXRkrF8-8Q3Exypco2Ir4iP0s0IRbZ_n-ZvFI2ZTuNUzz7bs=s0)

1. With leading radio button
2. With leading radio button and trailing text

### Trailing switch

![1, 2, and 3-line list items with and without a leading icon and trailing switch, in dark mode.](https://lh3.googleusercontent.com/6qcPlbTkPuUN2vByfw3QiZU3_haTWYgitgstbbYGI9ugO1r8LknZ2RPovveQ18B9EOKQNu5robyVqrQs0AvZchLuQXeckUeWZEn2meby2vkA=s0)

1. With trailing switch
2. With leading icon and trailing switch

---

## Measurements

### Expressive list items

![Size and padding measurements for list items.](https://lh3.googleusercontent.com/i93JWmCnwH8J71-rjNfpGP1SCy_v1gjfHOkLAph3y86kvhmpo9uT_x75vfDsKz_NxDbnt9C5GWA4xX0rba-hRzTmxtfWPw-zncFBcbmzKiLm=s0)

The icon button height is dynamic, automatically adjusting to fill the list item height.

### Baseline list layout

#### One-line lists

![Alignment, padding, and size specifications for baseline list items with 1 line of text.](https://lh3.googleusercontent.com/z9QvwXHZzQCURyxwHxCKWIzN9bFCueiLYqnmwebzTymL8CQV6SfHPmE39ptDMlyCdxfAYa3ymS7TFM3eWfJEHnzXOq7ndUBAoqGr211VXq-K=s0)

![Measurements for a 3-item list with 1 line each.](https://lh3.googleusercontent.com/khpu5JdGUDNFXqPEgOJ5ZWoXXvptYxD57jKRlck-ECQ1ge8a4pIcPdajOsbR3theeOCNLC8HoON7F71IWL5LsM5dFl_74zbveiiwPsZnriIqtQ=s0)

#### Two-line lists

![Alignment, padding, and size specifications for baseline list items with 2 lines of text.](https://lh3.googleusercontent.com/LxLM2jQt0STwJFF6mM7jaAxeP09Gu8KXxM8a2gg_tCprAziEoUSMbqhONXIWU-yKoahTjXATtmhpqTaSxfe7x7UoAhhTD157g0YkJwJS-tse=s0)

![Measurements for a 3-item list with 2 lines each.](https://lh3.googleusercontent.com/UIM_5cKOrqy1Jgy2wF6ND6qMT0cXmrXlqkqpSr1hUtJoShVECpFJt1jn39e7aoczco9L3ABwR7O4gd366Fdwg7tfQnWGas_8LRAM0LWM7z0NRg=s0)

#### Three-line lists

![Alignment, padding, and size specifications for baseline list items with 3 lines of text.](https://lh3.googleusercontent.com/eoubrmM-Nl9VlpagzZuJBlQ7Ze1c-LjzmdIfk2sIxw16gjTgSUXdPTTLa1P1o1klSZk9SP6JZjG3BrVkBCnvatvekRTyo1Qkq2SoN5eSHEWy=s0)

![Measurements for a 3-item list with 3 lines each.](https://lh3.googleusercontent.com/mX9bAsTDGyRcmgR60R9k2JBak4FqR4Iq5BHj_D9vHhsd3GwzcWjsnjvUzz4UDdrcd4KZE27gqKYtovW1ejGeDrnmqzdeoUULLnR8dLqTLZsf=s0)

### Layout measurements (baseline)

| Attribute                                                           | Value  |
| ------------------------------------------------------------------- | ------ |
| Label alignment                                                     | Center |
| Label alignment when height is 88dp or taller                       | Top    |
| Label left padding                                                  | 16dp   |
| Leading element alignment (vertical)                                | Center |
| Leading element alignment (vertical) when height is 88dp or taller  | Top    |
| Leading element left padding                                        | 16dp   |
| Leading icon alignment (vertical)                                   | Top    |
| Leading icon top padding                                            | 8dp    |
| Leading icon top padding when height is 88dp or taller              | 12dp   |
| Trailing element alignment (vertical)                               | Center |
| Trailing element alignment (vertical) when height is 88dp or taller | Top    |
| Trailing element left padding                                       | 16dp   |
| Trailing element right padding                                      | 24dp   |
| Padding above/below divider                                         | 0dp    |
| Targets                                                             | 48dp   |
| Divider full-width                                                  | 100%   |
| Divider inset left padding                                          | 16dp   |
| Divider inset right padding                                         | 24dp   |

---

## Color Tokens

### Expressive color roles

![10 list element color roles in light mode and dark mode.](https://lh3.googleusercontent.com/ARd2jFHJp7QY8tjQqnTd9qITF5sD6WqWXpapVsC25_-ej0okbpB1kkGYkJ8V7jSl-iFv0cW18ZGseOUM3x1CqZflXxkdU7T4znEQ0bJ3qCvx=s0)

1. Surface
2. On surface variant
3. On surface
4. On surface variant
5. On surface variant
6. On surface variant
7. Outline variant
8. Primary container
9. On primary container
10. On surface variant

### Baseline color roles

![9 baseline list element color roles in light and dark mode.](https://lh3.googleusercontent.com/c7bwcYNZe1HFiYuQW2r1uEEhDr_8PMPrgH911ney_P2AQnEZ64a34YKs47JbQnNjPbrtMfhw0FA7oQ3T1Euqx9HQ45ItoppUNl_7LUN5dX8=s0)

1. Surface
2. On surface
3. On surface variant
4. On surface variant
5. On surface variant
6. Outline variant
7. Primary container
8. On primary container
9. On surface variant

### Enabled

| Element                     | Token                                                   | Value                               |
| --------------------------- | ------------------------------------------------------- | ----------------------------------- |
| Container                   | `md.comp.list.list-item.container.color`                | `md.sys.color.surface`              |
| Segmented container         | `md.comp.list.list-item.segmented.container.color`      | `md.sys.color.surface`              |
| Label text                  | `md.comp.list.list-item.label-text.color`               | `md.sys.color.on-surface`           |
| Supporting text             | `md.comp.list.list-item.supporting-text.color`          | `md.sys.color.on-surface-variant`   |
| Overline                    | `md.comp.list.list-item.overline.color`                 | `md.sys.color.on-surface-variant`   |
| Divider                     | `md.comp.list.divider.color`                            | `md.sys.color.outline`              |
| Divider height              | `md.comp.list.divider.height`                           | 1dp                                 |
| Container height            | `md.comp.list.list-item.container.height`               | 56dp                                |
| One-line container height   | `md.comp.list.list-item.one-line.container.height`      | 56dp                                |
| Two-line container height   | `md.comp.list.list-item.two-line.container.height`      | 72dp                                |
| Three-line container height | `md.comp.list.list-item.three-line.container.height`    | 88dp                                |
| Leading icon                | `md.comp.list.list-item.leading-icon.color`             | `md.sys.color.on-surface-variant`   |
| Trailing icon               | `md.comp.list.list-item.trailing-icon.color`            | `md.sys.color.on-surface-variant`   |
| Unselected trailing icon    | `md.comp.list.list-item.unselected.trailing-icon.color` | `md.sys.color.on-surface`           |
| Trailing supporting text    | `md.comp.list.list-item.trailing-supporting-text.color` | `md.sys.color.on-surface-variant`   |
| Leading avatar              | `md.comp.list.list-item.leading-avatar.color`           | `md.sys.color.primary-container`    |
| Leading avatar label        | `md.comp.list.list-item.leading-avatar-label.color`     | `md.sys.color.on-primary-container` |
| Container elevation         | `md.comp.list.list-item.container.elevation`            | `md.sys.elevation.level0`           |

### Enabled — Selected

| Element                  | Token                                                            | Value                                 |
| ------------------------ | ---------------------------------------------------------------- | ------------------------------------- |
| Container                | `md.comp.list.list-item.selected.container.color`                | `md.sys.color.secondary-container`    |
| Label text               | `md.comp.list.list-item.selected.label-text.color`               | `md.sys.color.on-secondary-container` |
| Supporting text          | `md.comp.list.list-item.selected.supporting-text.color`          | `md.sys.color.on-secondary-container` |
| Trailing supporting text | `md.comp.list.list-item.selected.trailing-supporting-text.color` | `md.sys.color.on-secondary-container` |
| Leading icon             | `md.comp.list.list-item.selected.leading-icon.color`             | `md.sys.color.on-secondary-container` |
| Trailing icon            | `md.comp.list.list-item.selected.trailing-icon.color`            | `md.sys.color.on-secondary-container` |
| Overline                 | `md.comp.list.list-item.selected.overline.color`                 | `md.sys.color.on-secondary-container` |

### Disabled

| Element                 | Token                                                     | Value                     |
| ----------------------- | --------------------------------------------------------- | ------------------------- |
| State layer             | `md.comp.list.list-item.disabled.state-layer.color`       | `md.sys.color.on-surface` |
| State layer opacity     | `md.comp.list.list-item.disabled.state-layer.opacity`     | 0.1                       |
| Label text              | `md.comp.list.list-item.disabled.label-text.color`        | `md.sys.color.on-surface` |
| Label text opacity      | `md.comp.list.list-item.disabled.label-text.opacity`      | 0.38                      |
| Supporting text         | `md.comp.list.list-item.disabled.supporting-text.color`   | `md.sys.color.on-surface` |
| Supporting text opacity | `md.comp.list.list-item.disabled.supporting-text.opacity` | 0.38                      |
| Overline                | `md.comp.list.list-item.disabled.overline.color`          | `md.sys.color.on-surface` |
| Overline opacity        | `md.comp.list.list-item.disabled.overline.opacity`        | 0.38                      |
| Leading icon            | `md.comp.list.list-item.disabled.leading-icon.color`      | `md.sys.color.on-surface` |
| Leading icon opacity    | `md.comp.list.list-item.disabled.leading-icon.opacity`    | 0.38                      |
| Trailing icon           | `md.comp.list.list-item.disabled.trailing-icon.color`     | `md.sys.color.on-surface` |
| Trailing icon opacity   | `md.comp.list.list-item.disabled.trailing-icon.opacity`   | 0.38                      |

### Disabled — Selected

| Element                          | Token                                                                       | Value   |
| -------------------------------- | --------------------------------------------------------------------------- | ------- |
| Container                        | `md.comp.list.list-item.selected.disabled.container.color`                  | #1D1B20 |
| Container opacity                | `md.comp.list.list-item.selected.disabled.container.opacity`                | 0.38    |
| Label text                       | `md.comp.list.list-item.selected.disabled.label-text.color`                 | #1D1B20 |
| Label text opacity               | `md.comp.list.list-item.selected.disabled.label-text.opacity`               | 0.38    |
| Supporting text                  | `md.comp.list.list-item.selected.disabled.supporting-text.color`            | #1D1B20 |
| Supporting text opacity          | `md.comp.list.list-item.selected.disabled.supporting-text.opacity`          | 0.38    |
| Trailing supporting text         | `md.comp.list.list-item.selected.disabled.trailing-supporting-text.color`   | #1D1B20 |
| Trailing supporting text opacity | `md.comp.list.list-item.selected.disabled.trailing-supporting-text.opacity` | 0.38    |
| Overline                         | `md.comp.list.list-item.selected.disabled.overline.color`                   | #1D1B20 |
| Overline opacity                 | `md.comp.list.list-item.selected.disabled.overline.opacity`                 | 0.38    |
| State layer                      | `md.comp.list.list-item.selected.disabled.state-layer.color`                | #1D1B20 |
| State layer opacity              | `md.comp.list.list-item.selected.disabled.state-layer.opacity`              | 0.1     |
| Leading icon                     | `md.comp.list.list-item.selected.disabled.leading-icon.color`               | #1D1B20 |
| Leading icon opacity             | `md.comp.list.list-item.selected.disabled.leading-icon.opacity`             | 0.38    |
| Trailing icon                    | `md.comp.list.list-item.selected.disabled.trailing-icon.color`              | #1D1B20 |
| Trailing icon opacity            | `md.comp.list.list-item.selected.disabled.trailing-icon.opacity`            | 0.38    |

### Hovered

| Element             | Token                                                   | Value                                    |
| ------------------- | ------------------------------------------------------- | ---------------------------------------- |
| State layer         | `md.comp.list.list-item.hover.state-layer.color`        | `md.sys.color.on-surface`                |
| State layer opacity | `md.comp.list.list-item.hover.state-layer.opacity`      | `md.sys.state.hover.state-layer-opacity` |
| Label text          | `md.comp.list.list-item.hover.label-text.color`         | `md.sys.color.on-surface`                |
| Leading icon        | `md.comp.list.list-item.hover.leading-icon.icon.color`  | `md.sys.color.on-surface-variant`        |
| Trailing icon       | `md.comp.list.list-item.hover.trailing-icon.icon.color` | `md.sys.color.on-surface-variant`        |

### Hovered — Selected

| Element             | Token                                                       | Value                                    |
| ------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| State layer         | `md.comp.list.list-item.selected.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| State layer opacity | `md.comp.list.list-item.selected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Label text          | `md.comp.list.list-item.selected.hover.label-text.color`    | `md.sys.color.on-secondary-container`    |
| Leading icon        | `md.comp.list.list-item.selected.hover.leading-icon.color`  | `md.sys.color.on-surface`                |
| Trailing icon       | `md.comp.list.list-item.selected.hover.trailing-icon.color` | `md.sys.color.on-surface`                |

### Focused

| Element             | Token                                                   | Value                                    |
| ------------------- | ------------------------------------------------------- | ---------------------------------------- |
| State layer         | `md.comp.list.list-item.focus.state-layer.color`        | `md.sys.color.on-surface`                |
| State layer opacity | `md.comp.list.list-item.focus.state-layer.opacity`      | `md.sys.state.focus.state-layer-opacity` |
| Label text          | `md.comp.list.list-item.focus.label-text.color`         | `md.sys.color.on-surface`                |
| Leading icon        | `md.comp.list.list-item.focus.leading-icon.icon.color`  | `md.sys.color.on-surface-variant`        |
| Trailing icon       | `md.comp.list.list-item.focus.trailing-icon.icon.color` | `md.sys.color.on-surface-variant`        |

### Focus indicator

| Element   | Token                                         | Value                                       |
| --------- | --------------------------------------------- | ------------------------------------------- |
| Color     | `md.comp.list.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Thickness | `md.comp.list.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Offset    | `md.comp.list.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` |

### Focused — Selected

| Element             | Token                                                       | Value                                    |
| ------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| State layer         | `md.comp.list.list-item.selected.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| State layer opacity | `md.comp.list.list-item.selected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Label text          | `md.comp.list.list-item.selected.focus.label-text.color`    | `md.sys.color.on-secondary-container`    |
| Leading icon        | `md.comp.list.list-item.selected.focus.leading-icon.color`  | `md.sys.color.on-surface`                |
| Trailing icon       | `md.comp.list.list-item.selected.focus.trailing-icon.color` | `md.sys.color.on-surface`                |

### Pressed (ripple)

| Element             | Token                                                     | Value                                      |
| ------------------- | --------------------------------------------------------- | ------------------------------------------ |
| State layer         | `md.comp.list.list-item.pressed.state-layer.color`        | `md.sys.color.on-surface`                  |
| State layer opacity | `md.comp.list.list-item.pressed.state-layer.opacity`      | `md.sys.state.pressed.state-layer-opacity` |
| Label text          | `md.comp.list.list-item.pressed.label-text.color`         | `md.sys.color.on-surface`                  |
| Leading icon        | `md.comp.list.list-item.pressed.leading-icon.icon.color`  | `md.sys.color.on-surface-variant`          |
| Trailing icon       | `md.comp.list.list-item.pressed.trailing-icon.icon.color` | `md.sys.color.on-surface-variant`          |

### Pressed — Selected

| Element             | Token                                                         | Value                                      |
| ------------------- | ------------------------------------------------------------- | ------------------------------------------ |
| State layer         | `md.comp.list.list-item.selected.pressed.state-layer.color`   | `md.sys.color.on-surface`                  |
| State layer opacity | `md.comp.list.list-item.selected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Label text          | `md.comp.list.list-item.selected.pressed.label-text.color`    | `md.sys.color.on-secondary-container`      |
| Leading icon        | `md.comp.list.list-item.selected.pressed.leading-icon.color`  | `md.sys.color.on-surface`                  |
| Trailing icon       | `md.comp.list.list-item.selected.pressed.trailing-icon.color` | `md.sys.color.on-surface`                  |

### Dragged (baseline only)

| Element                      | Token                                                         | Value                                      |
| ---------------------------- | ------------------------------------------------------------- | ------------------------------------------ |
| Container elevation          | `md.comp.list.list-item.dragged.container.elevation`          | `md.sys.elevation.level4`                  |
| Label text                   | `md.comp.list.list-item.dragged.label-text.color`             | `md.sys.color.on-surface`                  |
| Selected label text          | `md.comp.list.list-item.selected.dragged.label-text.color`    | `md.sys.color.on-secondary-container`      |
| State layer                  | `md.comp.list.list-item.dragged.state-layer.color`            | `md.sys.color.on-surface`                  |
| State layer opacity          | `md.comp.list.list-item.dragged.state-layer.opacity`          | `md.sys.state.dragged.state-layer-opacity` |
| Selected state layer         | `md.comp.list.list-item.selected.dragged.state-layer.color`   | `md.sys.color.on-surface`                  |
| Selected state layer opacity | `md.comp.list.list-item.selected.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` |
| Leading icon                 | `md.comp.list.list-item.dragged.leading-icon.icon.color`      | `md.sys.color.on-surface-variant`          |
| Selected leading icon        | `md.comp.list.list-item.selected.dragged.leading-icon.color`  | `md.sys.color.on-surface`                  |
| Trailing icon                | `md.comp.list.list-item.dragged.trailing-icon.icon.color`     | `md.sys.color.on-surface-variant`          |
| Selected trailing icon       | `md.comp.list.list-item.selected.dragged.trailing-icon.color` | `md.sys.color.on-surface`                  |

---

## Spacing Tokens

| Element                | Token                                   | Value |
| ---------------------- | --------------------------------------- | ----- |
| Leading space          | `md.comp.list.list-item.leading-space`  | 16dp  |
| Trailing space         | `md.comp.list.list-item.trailing-space` | 16dp  |
| Top space              | `md.comp.list.list-item.top-space`      | 10dp  |
| Bottom space           | `md.comp.list.list-item.bottom-space`   | 10dp  |
| Between space          | `md.comp.list.list-item.between-space`  | 12dp  |
| Divider leading space  | `md.comp.list.divider.leading-space`    | 16dp  |
| Divider trailing space | `md.comp.list.divider.trailing-space`   | 16dp  |
| Divider top space      | `md.comp.list.divider.top-space`        | 0     |
| Divider bottom space   | `md.comp.list.divider.bottom-space`     | 0     |
| Segment gap            | `md.comp.list.segmented.gap`            | 2dp   |

---

## Shape Tokens

| Element                        | Token                                                                 | Value                             |
| ------------------------------ | --------------------------------------------------------------------- | --------------------------------- |
| List container                 | `md.comp.list.container.shape`                                        | `md.sys.shape.corner.large`       |
| Item container (baseline)      | `md.comp.list.list-item.container.shape`                              | `md.sys.shape.corner.none`        |
| Item container (expressive)    | `md.comp.list.list-item.container.expressive.shape`                   | `md.sys.shape.corner.extra-small` |
| Disabled (expressive)          | `md.comp.list.list-item.disabled.container.expressive.shape`          | `md.sys.shape.corner.extra-small` |
| Hovered (expressive)           | `md.comp.list.list-item.hovered.container.expressive.shape`           | `md.sys.shape.corner.medium`      |
| Focused (expressive)           | `md.comp.list.list-item.focused.container.expressive.shape`           | `md.sys.shape.corner.large`       |
| Pressed (expressive)           | `md.comp.list.list-item.pressed.container.expressive.shape`           | `md.sys.shape.corner.large`       |
| Dragged (expressive)           | `md.comp.list.list-item.dragged.container.expressive.shape`           | `md.sys.shape.corner.large`       |
| Selected (expressive)          | `md.comp.list.list-item.selected.container.expressive.shape`          | `md.sys.shape.corner.large`       |
| Selected disabled (expressive) | `md.comp.list.list-item.selected.disabled.container.expressive.shape` | `md.sys.shape.corner.large`       |
| Selected hovered (expressive)  | `md.comp.list.list-item.selected.hovered.container.expressive.shape`  | `md.sys.shape.corner.large`       |
| Selected focused (expressive)  | `md.comp.list.list-item.selected.focused.container.expressive.shape`  | `md.sys.shape.corner.large`       |
| Selected pressed (expressive)  | `md.comp.list.list-item.selected.pressed.container.expressive.shape`  | `md.sys.shape.corner.large`       |
| Selected dragged (expressive)  | `md.comp.list.list-item.selected.dragged.container.expressive.shape`  | `md.sys.shape.corner.large`       |
| Selected container (baseline)  | `md.comp.list.list-item.selected.container.shape`                     | `md.sys.shape.corner.large`       |
| Leading avatar                 | `md.comp.list.list-item.leading-avatar.shape`                         | `md.sys.shape.corner.full`        |
| Leading video                  | `md.comp.list.list-item.leading-video.shape`                          | `md.sys.shape.corner.small`       |
| Leading image (baseline)       | `md.comp.list.list-item.leading-image.shape`                          | `md.sys.shape.corner.none`        |
| Leading image (expressive)     | `md.comp.list.list-item.leading-image.expressive.shape`               | `md.sys.shape.corner.small`       |

---

## Size & Typography Tokens

| Element                          | Token                                                         | Value                                       |
| -------------------------------- | ------------------------------------------------------------- | ------------------------------------------- |
| Leading avatar size              | `md.comp.list.list-item.leading-avatar.size`                  | 40dp                                        |
| Leading avatar label font        | `md.comp.list.list-item.leading-avatar-label.font`            | `md.sys.typescale.title-medium.font`        |
| Leading avatar label line height | `md.comp.list.list-item.leading-avatar-label.line-height`     | `md.sys.typescale.title-medium.line-height` |
| Leading avatar label size        | `md.comp.list.list-item.leading-avatar-label.size`            | `md.sys.typescale.title-medium.size`        |
| Leading avatar label tracking    | `md.comp.list.list-item.leading-avatar-label.tracking`        | `md.sys.typescale.title-medium.tracking`    |
| Leading avatar label weight      | `md.comp.list.list-item.leading-avatar-label.weight`          | `md.sys.typescale.title-medium.weight`      |
| Leading icon size                | `md.comp.list.list-item.leading-icon.size`                    | 24dp                                        |
| Leading icon (expressive)        | `md.comp.list.list-item.leading-icon.expressive.size`         | 20dp                                        |
| Leading image                    | `md.comp.list.list-item.leading-image.width` × `height`       | 56dp × 56dp                                 |
| Leading video                    | `md.comp.list.list-item.leading-video.width`                  | 100dp                                       |
| Small leading video              | `md.comp.list.list-item.small.leading-video.width` × `height` | 100dp × 56dp                                |
| Large leading video              | `md.comp.list.list-item.large.leading-video.width` × `height` | 114dp × 64dp                                |
| One-line container               | `md.comp.list.list-item.one-line.container.height`            | 56dp                                        |
| Two-line container               | `md.comp.list.list-item.two-line.container.height`            | 72dp                                        |
| Three-line container             | `md.comp.list.list-item.three-line.container.height`          | 88dp                                        |
| Trailing icon size               | `md.comp.list.list-item.trailing-icon.size`                   | 24dp                                        |
| Trailing icon (expressive)       | `md.comp.list.list-item.trailing-icon.expressive.size`        | 20dp                                        |
| Label text                       | `md.comp.list.list-item.label-text.font`                      | `md.sys.typescale.body-large`               |
| Trailing supporting text         | `md.comp.list.list-item.trailing-supporting-text.font`        | `md.sys.typescale.label-small`              |
| Supporting text                  | `md.comp.list.list-item.supporting-text.font`                 | `md.sys.typescale.body-medium`              |
| Overline                         | `md.comp.list.list-item.overline.font`                        | `md.sys.typescale.label-small`              |

---

## Expand Tokens

Tokens for the expand/collapse interaction.

### Color

| Element                           | Token                                                                   | Value                            |
| --------------------------------- | ----------------------------------------------------------------------- | -------------------------------- |
| Expanded container                | `md.comp.list.expand.expanded.list-item.container.color`                | `md.sys.color.surface`           |
| Expanded segmented container      | `md.comp.list.expand.expanded.list-item.segmented.container.color`      | #FEF7FF                          |
| Collapsed trailing icon container | `md.comp.list.expand.collapsed.list-item.trailing-icon.container.color` | `md.sys.color.surface`           |
| Collapsed trailing icon           | `md.comp.list.expand.collapsed.list-item.trailing-icon.icon.color`      | `md.sys.color.on-surface`        |
| Expanded trailing icon container  | `md.comp.list.expand.expanded.list-item.trailing-icon.container.color`  | `md.sys.color.surface-container` |
| Expanded trailing icon            | `md.comp.list.expand.expanded.list-item.trailing-icon.icon.color`       | `md.sys.color.on-surface`        |

### Shape

| Element              | Token                                     | Value                       |
| -------------------- | ----------------------------------------- | --------------------------- |
| Expand container     | `md.comp.list.expand.container.shape`     | `md.sys.shape.corner.large` |
| Expand trailing icon | `md.comp.list.expand.trailing-icon.shape` | `md.sys.shape.corner.full`  |

---

## Interaction States

### Default list items

![6 default list states in light and dark mode.](https://lh3.googleusercontent.com/WfsQdzz9ydTMtaG8lRdHEb8GmuDilZ3RVX7fNys6QemgIc3Euv0bnB2eKnFMZNxvApj-l2ZNNVTtCrgdS3CfuR6FmBFEv8ppLObmmykaM6yO=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

### Selected list items

![6 selected list states in light and dark mode.](https://lh3.googleusercontent.com/plktb9RXA8a9SyxyQIpnF8qX_hMwZP0_SIXh-vuSRreRX9e8DbpLs90qXW4rIrtZyNyTmEbJTYmenlpK0EjS_q6HyaoZmb4ERojsZU2trNc=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

### Baseline states

![6 baseline list states in light and dark mode.](https://lh3.googleusercontent.com/5lf9R5VeSpT9MZ52tQ1Gr9G6LJSo3T61BAkwRTHYYL4e0_ymdXq3TFfAieV8fBpokbyEkAP1dql3Z23YsmOgHwTzZclYa1v5eLG9J7lTYcJu=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

---

## Responsive / Adaptive Design

### Line length

Avoid excessively long lines of text when expanding containers. The ideal line length is 40-60 characters, with up to 120 characters on large screens. If approaching 120 characters, increase line height for readability.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiezxs4c-19_do.png?alt=media&token=2e5e3f61-38e3-4ca9-8506-7a04a16c1d4d=s0" /><br/><b>Do:</b> Adjust margins to create comfortable line lengths for reading</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif01yxf-21_dont.png?alt=media&token=59608a8d-5309-4a91-9aca-ce653489c67f=s0" /><br/><b>Don't:</b> Scale components without adjusting text length — results in hard-to-read lines</td>
</tr></table>

![List items in a 2-column layout, with each item showing text preview.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiezzrzc-20_do.png?alt=media&token=6c164d25-b039-4125-98bc-961691f9c1e7=s0)

A multi-column layout can break up content on wider screens.

### Adapt list elements & layout

Lists can change layout to fit different window sizes by adjusting margins, spacing, or density. On larger screens, lists can show more content (supporting text, larger imagery).

### Swap components

Lists are compact compositions of images, text, and actions. On larger screens, consider swapping to cards or carousels that take advantage of the available space.

### Compact window size

Lists should extend edge-to-edge in compact windows. Selecting a list item opens a full-screen detail page.

### Medium & expanded window sizes

Tablet and desktop screens can display primary (list) and secondary (detail) content side-by-side. Lists may also transform into carousels or reveal more content as they scale up.

![A larger screen displays list items and a detailed expansion of one item on the same screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif0jzwl-26.png?alt=media&token=9614eb09-3217-4c62-82a3-958065860772=s0)

---

## Accessibility

### Indicate selection with more than color

Do not rely on color alone to indicate selection. Use an additional visual cue such as:

- Radio buttons or checkboxes
- Leading or trailing icons (e.g. checkmark)
- A non-color visual style (e.g. underlined text)

![A selected list item with a colored background, and a check as the leading icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif14iza-01.png?alt=media&token=140fabe0-eda0-43e7-8c49-95c7213f08f3=s0)

### Touch & cursor

A touch ripple appears on tap for interaction feedback. On hover, the hover state provides a visual cue that the item is interactive.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif1lpwx-03.png?alt=media&token=fde07ebe-f294-4921-b6b3-fcbe40f28691=s0" /><br/>Cursor: Hover</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif1n85t-04.png?alt=media&token=2e422eae-b219-462c-91d2-76f6af7da235=s0" /><br/>Cursor: Selected</td>
</tr></table>

### Focus behavior

#### Single-action lists

The first element receives focus, unless a selected element exists (in which case, focus goes to the selected item). After initial focus, arrow keys navigate within the list. **Space** or **Enter** activates the focused item.

![The first list item is automatically focused.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif1yik5-08.png?alt=media&token=e925d117-187b-4db5-a5fe-e21b9cab01ff=s0)

![A second list item focused using an arrow key.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif1z0du-09.png?alt=media&token=11096c65-8976-4b29-83d6-d0e6649c71f5=s0)

![List item with focus indicator and filled checkbox, selected using the Space or Enter key.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif21ldt-10.png?alt=media&token=36809b25-a375-4a87-9942-b8f1dda63fa4=s0)

#### Multi-action lists

Multi-action items contain a primary action and supplementary actions. The list item as a whole is not selectable — only individual actions are.

- **Tab** focuses the first element in the list item
- **Arrow keys** (Up/Down/Left/Right) move between all focusable elements
- **Space** or **Enter** activates the focused element

![The first element in a multi-action list is focused automatically.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8um9bl-11-VQA.png?alt=media&token=6a474f8b-d3ef-4f9f-b356-3c5f87f3662f=s0)

![The list action, a bookmark, is focused using the Down or Right arrow.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8uomf0-12-VQA.png?alt=media&token=c7508f6b-dd4b-4972-af0d-34a6010d313a=s0)

![A trailing bookmark icon is focused in the second list item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8uwmgu-13-VQA.png?alt=media&token=28964eee-ac95-4e56-947c-73a2864ec3cf=s0)

![Label text and supporting text of the second list item is in focus using the Up or Left arrow.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8v0dqs-14-VQA.png?alt=media&token=dba9d2e6-ae72-4a63-ae46-a5f5df07c3b6=s0)

![The Space or Enter key activates an overflow menu on a list item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8v14y1-15-VQA.png?alt=media&token=288e0e31-8107-42b1-917f-061f6ef3e824=s0)

### Keyboard navigation

| Key                | Action                                                             |
| ------------------ | ------------------------------------------------------------------ |
| Tab                | Move focus to first list item, last list item, or outside the list |
| Down / Right arrow | Move to next element; wraps to top if at the end                   |
| Up / Left arrow    | Move to previous element; wraps to bottom if at the start          |
| Space or Enter     | Select or activate the focused list item                           |

### Labeling

The accessibility label for a list item is typically the combined **label text** and **supporting text**. Some labels, roles, and states are platform-dependent.

![List item selected to show label of "Bread, sourdough or wheat".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif3ecf9-16.png?alt=media&token=f3d78d78-8ba2-402e-a069-ca0552ca6868=s0)

### Platform-specific labels

#### Single-select lists

| Trait      | Web                                                                               | MDC-Android                           | Jetpack Compose                       |
| ---------- | --------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------- |
| Aria label | Container label: describes selection type · List item: matches visible label text | List item: matches visible label text | List item: matches visible label text |
| Role       | Container: List box · List item: Option                                           | List item: Radio button               | List item: Radio button               |
| State      | Selected or Not-selected                                                          | Checked or Not-checked                | Checked or Not-checked                |

#### Multi-select lists

| Trait      | Web                                                                               | MDC-Android                           | Jetpack Compose                       |
| ---------- | --------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------- |
| Aria label | Container label: describes selection type · List item: matches visible label text | List item: matches visible label text | List item: matches visible label text |
| Role       | Container: List box · List item: Option                                           | List item: Checkbox                   | List item: Checkbox                   |
| State      | Selected or Not-selected                                                          | Checked or Not-checked                | Checked or Not-checked                |

On web, the list container's role is **List box** with a label describing the selection type. On Jetpack Compose, the role applies to the list item as a whole. If a list isn't selectable, the label text is read without a role. On MDC-Android, contained components follow their own accessibility guidelines (Checkbox, Radio button).

![A list container is selected, showing a label of "Select either bread, pita, or rice" and role of "List box."](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8wfvkj-17.png?alt=media&token=6abe0d86-e89d-46bf-b644-9c29820e651f=s0)

![A selected list item shows a label of "Bread, sourdough, or wheat" and role of "Checkbox."](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8wgxsf-18.png?alt=media&token=f2da7dd9-7edb-4a4e-ba75-861c0b9191bb=s0)

![Checkbox of a selected list item shows label of "Bread, sourdough or wheat" and role of "Checkbox."](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif3mprn-19.png?alt=media&token=eb532a0d-fff0-43bc-a056-3452ef435faf=s0)

### Density

All interactive targets must be at least 48×48dp.

---

## M2 → M3 Differences

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8q1tdh-03.png?alt=media&token=5845ac54-f92c-41e8-8290-fac24588b690=s0" /><br/>M2: Non-standard heights and alignments</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8q2xsp-04.png?alt=media&token=df0c89b9-3118-4fad-bd02-8b9bd51cc98f=s0" /><br/>M3 (baseline): Standardized heights and alignments</td>
</tr></table>

| Aspect                        | M2                         | M3                                                 |
| ----------------------------- | -------------------------- | -------------------------------------------------- |
| Color                         | Fixed color values         | New color mappings, dynamic color support          |
| Layout                        | Varied padding and spacing | Consistent, updated padding and spacing rules      |
| Height                        | Non-standard heights       | Determined by tallest element: 56dp, 72dp, or 88dp |
| Alignment (most cases)        | Varied                     | Middle-aligned                                     |
| Alignment (88dp+ or 3+ lines) | Varied                     | Top-aligned                                        |

### M3 Expressive update (December 2025)

![2 party planning lists with 2 completed list items each. In 1 list, the selected items are highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8pwbjv-02.png?alt=media&token=dc992ed3-06fd-4d06-aaab-249562097efc=s0)

- Added **expressive** list variant (recommended for new designs)
- New visual styles: standard and segmented
- Highlighted selection states
- Flexible slots for custom item layouts
- Baseline list remains available
