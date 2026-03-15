# Bottom Sheets — M3 Component Reference

> Bottom sheets show secondary content anchored to the bottom of the screen.

Sources: [Overview](https://m3.material.io/components/bottom-sheets/overview) · [Specs](https://m3.material.io/components/bottom-sheets/specs) · [Guidelines](https://m3.material.io/components/bottom-sheets/guidelines) · [Accessibility](https://m3.material.io/components/bottom-sheets/accessibility)

---

## Variants

![Two variants of bottom sheets.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7eqa7-1.png?alt=media&token=7a1b0b63-7f7a-48b1-9be2-7d0b84457733=s0)

| Variant      | Description                                                                                                                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Standard** | Co-exists with the screen's main UI region. People can view and interact with both the sheet and primary content simultaneously. Best for complementary content such as an audio player in a music app.           |
| **Modal**    | Appears in front of all app content with a scrim, disabling other app functionality until the sheet is dismissed or an action is taken. Used on mobile only, as an alternative to inline menus or simple dialogs. |

1. Standard bottom sheet
2. Modal bottom sheet

![Side by side view of standard bottom sheet and modal bottom sheet](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp3m82k-1.png?alt=media&token=57a51bb9-a0b7-40f2-b057-0afe7d122a59=s0)

---

## Anatomy

![3 elements of a bottom sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7l25p-4.png?alt=media&token=26b70d10-837b-47dc-8c19-66941c28cf55=s0)

1. **Container** — holds all bottom sheet elements; the only required element. Size is determined by the content it holds.
2. **Drag handle** (optional) — allows resizing the sheet by dragging or tapping. Has an accessible 48dp touch target at the top of the sheet.
3. **Scrim** (modal only) — semi-transparent overlay behind the modal sheet that blocks interaction with the main content.

![Diagram of container, drag handle, scrim](https://lh3.googleusercontent.com/zukI3AJrMtdfLMWQT4wlAlMvIUfkIHpc5QmTQNqYJpxh-cV8QEJcVsy9Yc198HJsK1Od4d-cEiCfOKkcY5nhzjVVmtfGd9e3Wy75vUnWqSE=s0)

---

## Usage & When to Use

Bottom sheets display supplementary content and actions on mobile screens. They can contain a wide variety of information and layouts including menu items (in list or grid layouts), actions, and supplemental content.

- Use for secondary or additional content — not the app's main content
- Use in compact and medium window sizes
- Can be dismissed to interact with the main content
- On expanded window sizes (desktop), consider swapping for a [side sheet](https://m3.material.io/components/side-sheets/overview) instead

![Photo sharing bottom sheet with contact list, app icons, and action buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7jb72-2.png?alt=media&token=56a1f44f-75e1-4b64-b89a-af51f31743bf=s0)

### Standard bottom sheets

Use standard bottom sheets to display content that complements the screen's primary content, especially when the main UI region is frequently scrolled or panned. Both regions remain interactive simultaneously.

At full-screen height, standard bottom sheets should contain a collapse icon in an app bar to return to their initial position. They can contain supplementary content that continues below the screen (e.g., location information over a map).

![Bottom sheet with music player controls visible while browsing albums.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7ubva-9.png?alt=media&token=bc8efc23-0926-4ab3-8f15-284858ef6d08=s0)

Standard bottom sheets can have preset positions from full-screen height to a collapsed preview. They can be dragged or toggled between these positions.

### Modal bottom sheets

Modal bottom sheets block all other app functionality when they appear, similar to dialogs. They remain on screen until confirmed, dismissed, or a required action has been taken. Used on mobile only.

Use modal bottom sheets as an alternative to inline menus or simple dialogs, especially when offering a long list of action items, or when items need longer descriptions and icons.

![A modal sheet with filter options to categorize files in the app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7yz9g-11.png?alt=media&token=88ce960b-06e9-49fb-85cf-e02a44792b1c=s0)

![A modal bottom sheet displayed as an alternative to a traditional menu, presenting a list of actions.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvqcnuc5-12.png?alt=media&token=5f8e64bf-e732-4bf6-a53b-bfda05089971=s0)

#### Visibility

The initial vertical position of modal bottom sheets is capped at 50% of the screen height to ensure access to top actions. Sheets with content exceeding 50% can then be pulled to full screen and scrolled internally.

![A modal bottom sheet covering half of the screen, so both images and actions are accessible.](https://lh3.googleusercontent.com/0hAPkL3uzyvqMvvRWFno-49bG4xDEWveRgFgP06QiwL9TTPtIatzwZnFBVZI70GmAn_NyU9lVQQ-8JkRQ8Zo7385AFopIBou3f5sD8YuZLIT=s0)

#### Dismissal

Modal bottom sheets can be dismissed by:

- Tapping a menu item or action within the sheet
- Tapping the scrim
- Swiping the sheet down
- Using a close affordance within the sheet's app bar (if available)

A close affordance should be displayed in full-screen modal bottom sheets.

![A modal bottom sheet disappearing by tapping the scrim.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp80k55-14.png?alt=media&token=9201f643-2086-4620-b7d0-0bc4c1f60ce8=s0)

![A modal bottom sheet disappearing by swiping the sheet down.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp81a31-Bottom_sheet_dismiss_swipe.png?alt=media&token=d0275463-fc3a-459f-b4c0-b0285236638e=s0)

---

## Sub-elements

### Container

The container is the only required element. It adapts to the content and available space.

![Empty bottom sheet container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7llpd-5.png?alt=media&token=8dd51782-efbc-480d-b8d1-fc9703331372=s0)

### List items (optional)

Bottom sheets can contain continuous groups of text or images. List items may include label text, icons, and text buttons among other elements.

![A bottom sheet displaying a list of actions for a song.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7m0a5-6.png?alt=media&token=f5e46b6c-e4a2-4691-8be7-6531cac198f8=s0)

### Dividers (optional)

Dividers separate related content regions within the sheet.

![Bottom sheet with image action buttons and contact list separated by an inset divider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7t324-7.png?alt=media&token=3415430e-1af4-44bb-9b80-a419efd68993=s0)

### Media (optional)

Bottom sheets can include various media:

- **Thumbnails** — avatars or logos
- **Images** — photos, illustrations, graphics (e.g., weather icons)
- **Video** — embedded video content

![A bottom sheet displaying various media formats, including thumbnails, images, and video.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7tqb3-8.png?alt=media&token=ec559377-ab42-40ae-b622-14e39ed36b06=s0)

---

## Behavior

### Expansion

Bottom sheets can offer an expansion option where the sheet toggles between collapsed and expanded states. This provides a predictable footprint and can be set by the system or toggled by the user.

<table><tr>
<td>

![Bottom sheet fully raised, showing photo actions, sharing options, and albums to add the photo to.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp87qvd-18.png?alt=media&token=d9e9bffb-5011-41e2-b919-66246450697f=s0)

Fully raised bottom sheet showing all sharing options

</td>
<td>

![Collapsed bottom sheet, showing focused set of options.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp8870t-19.png?alt=media&token=3f9b36b6-7621-48f9-bec4-8260503c7e75=s0)

Collapsed bottom sheet showing a focused set of actions

</td>
</tr></table>

### Custom positioning

The drag handle can be dragged or tapped to change the sheet's height. Sheets should cycle through preset heights and close completely without requiring a drag gesture. Tapping the drag handle toggles through preset heights or closes the sheet, while tapping the scrim always closes a modal bottom sheet.

If a bottom sheet has multiple preset heights but cannot use a drag handle, a single-pointer alternative (such as a button) must be provided.

<table><tr>
<td>

![Bottom sheet with a visible drag handle that can be used to adjust its height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp8argg-20.png?alt=media&token=231c71e3-b060-4163-907b-540125d26d9d=s0)

Tapping the drag handle moves the sheet through preset heights

</td>
<td>

![Bottom sheet resized using the visible drag handle.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp8b6u5-21.png?alt=media&token=787093f2-94a4-49fd-92a5-b12b6020c915=s0)

The sheet automatically resizes to the next preset height

</td>
</tr></table>

### Scrolling

Bottom sheets can be horizontally scrolled, independent of the rest of the screen's content. Vertical scrolling should be enabled when sheet content exceeds the initial viewable height.

![Bottom sheet that can be scrolled horizontally.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp8bo42-22.png?alt=media&token=7d24f701-094b-47fe-9a78-5712e0e61cde=s0)

### Predictive back (Android)

On Android, the predictive back gesture allows swiping left or right on the bottom sheet:

- The sheet detaches from the left and right edges to signal it will close
- The previous screen is revealed in a preview

---

## Measurements

![Bottom sheet on larger device with 56dp top and 56dp side margins](https://lh3.googleusercontent.com/gVNIjqiBu0DjSUv-lwnH3xIvACuZ6S4LWuUrUHe_KA0V_GlU3w-iwKPM-ka_6KfmjFuQJ1k6qrmm2b0y_6ZJcLd4alet31vP-0-nUdrpj_k=s0)

Bottom sheets span the full window width up to 640dp. When the window width exceeds 640dp, the sheet adjusts to have top and side margins of 56dp.

| Attribute                               | Value                             |
| --------------------------------------- | --------------------------------- |
| Drag handle alignment (horizontal)      | Center                            |
| Drag handle padding top/bottom          | 22dp                              |
| Top margin                              | 72dp                              |
| Top margin (window width > 640dp)       | 56dp                              |
| Start/end margin (window width > 640dp) | 56dp                              |
| Width                                   | Full width, up to max-width 640dp |
| Height                                  | Variable                          |

### Drag handle

| Attribute | Value |
| --------- | ----- |
| Width     | 32dp  |
| Height    | 4dp   |

---

## Color Tokens

![Two diagrams featuring color opposites of scrim, container, drag handle](https://lh3.googleusercontent.com/DRToa14TKB2-AlRHwUn1aPr1fykKEPGlGiKLDxHYv9B9e5CeupNBR-mM7uQOfp_OK-ZHdqjgboBeyE7GhlNtsThqGvX87OLsiAoci2zkTRBo=s0)

1. Scrim
2. On surface variant
3. Surface container low

### Enabled / Container

| Name                                                   | Token                                                            | Value                                 |
| ------------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------- |
| Sheet bottom docked container color                    | `md.comp.sheet.bottom.docked.container.color`                    | `md.sys.color.surface-container-low`  |
| Sheet bottom docked container surface tint layer color | `md.comp.sheet.bottom.docked.container.surface-tint-layer.color` | `md.sys.color.surface-tint`           |
| Sheet bottom docked modal container elevation          | `md.comp.sheet.bottom.docked.modal.container.elevation`          | `md.sys.elevation.level1`             |
| Sheet bottom docked standard container elevation       | `md.comp.sheet.bottom.docked.standard.container.elevation`       | `md.sys.elevation.level1`             |
| Sheet bottom docked container shape                    | `md.comp.sheet.bottom.docked.container.shape`                    | `md.sys.shape.corner.extra-large.top` |
| Sheet bottom docked minimized container shape          | `md.comp.sheet.bottom.docked.minimized.container.shape`          | `md.sys.shape.corner.none`            |

### Enabled / Drag handle

| Name                                    | Token                                             | Value                             |
| --------------------------------------- | ------------------------------------------------- | --------------------------------- |
| Sheet bottom docked drag handle color   | `md.comp.sheet.bottom.docked.drag-handle.color`   | `md.sys.color.on-surface-variant` |
| Sheet bottom docked drag handle opacity | `md.comp.sheet.bottom.docked.drag-handle.opacity` | 0.4                               |
| Sheet bottom docked drag handle width   | `md.comp.sheet.bottom.docked.drag-handle.width`   | 32dp                              |
| Sheet bottom docked drag handle height  | `md.comp.sheet.bottom.docked.drag-handle.height`  | 4dp                               |

### Enabled / Focus indicator

| Name                                   | Token                                                 | Value                                       |
| -------------------------------------- | ----------------------------------------------------- | ------------------------------------------- |
| Sheet bottom focus indicator color     | `md.comp.sheet.bottom.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Sheet bottom focus indicator thickness | `md.comp.sheet.bottom.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Sheet bottom focus indicator offset    | `md.comp.sheet.bottom.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

---

## Responsive / Adaptive Design

### Compact window size

On compact screens (mobile), bottom sheets extend across the full width and are elevated above the primary content.

![A bottom sheet extended to the width of a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp86bt1-15.png?alt=media&token=9f8beb94-0e17-4f0d-991f-ba04bb46270d=s0)

### Medium and expanded window sizes

On larger screens, bottom sheets have a default max-width of 640dp to prevent awkward spacing. This can be overridden if needed. For complex tasks and flows, consider using a non-transient surface such as a floating sheet.

![A bottom sheet extended to its max-width on a large screen device, not spanning the full screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp86pgb-16.png?alt=media&token=52847dda-fc2f-4c38-9d06-6cd94604456b=s0)

On expanded window sizes (desktop), a bottom sheet can be replaced with a side sheet that shows similar content.

![A side sheet on desktop.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp877lp-17.png?alt=media&token=3c16d91e-e6ee-4f55-8677-253ce146a929=s0)

---

## Accessibility

### Touch target area

The top 48dp of the bottom sheet is interactive when user-initiated resizing is available and the drag handle is present. This ensures touch target accessibility for resize interactions.

![Touch target area of a bottom sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp8g5p9-1.png?alt=media&token=8e64004e-3857-4101-b39c-99d3a1202671=s0)

### Initial focus

The drag handle can be focused in the tab order and interacted with using non-touch inputs (keyboard, switch controls).

![Focus on the drag handle of a bottom sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp8gmd5-bottom-sheet-focus.png?alt=media&token=cdb9816d-b6f1-4f2d-a6c9-57c7f19adf6a=s0)

### Dragging

A single-pointer alternative must be provided for any action completable by dragging. The drag handle should cycle through available heights when selected. If no drag handle is present, a button must serve this purpose.

<table><tr>
<td>

![Bottom sheet with focused drag handle at lower preset height.](https://lh3.googleusercontent.com/oTYgjX2EiyzXtztzy6pKLtl4orLwt83InSn2nHXrJuSKwwBhO-R1pllkNzYnilWk-qI5_eNNob5zUMIP1SSUAOOPOspSu6g7aWhV4--hKz0=s0)

Drag handle at lower preset height

</td>
<td>

![Bottom sheet with drag handle at higher preset height.](https://lh3.googleusercontent.com/Qbh70YFT_L81Y-982OVil6qLEB90imUJs9wbRQLdxVkcYIPlYik995maTieLEuP8Oc-T1-2WrcTuO_ZBCd2kwc9yD-9SgngSP2FvrpqzCubGcw=s0)

Automatically resized to higher preset height

</td>
</tr></table>

### Keyboard Navigation

| Keys          | Actions                           |
| ------------- | --------------------------------- |
| Tab           | Focus lands on drag handle        |
| Space / Enter | Toggles between available heights |

### Labeling

- Label only the drag handle
- The accessibility role for the drag handle is **button**

![Labeled drag handle with role of button.](https://lh3.googleusercontent.com/rQnID5aS5_ORuWh7Yp2LhBOLLPZQrEvPmowQpgTLFeBfTwyBEMJjvvOYIo991CA4BiA9o4uEZBALyTu1klLA5adv9b49GO3gJuCp_2IIQxsBVQ=s0)

---

## Availability & Resources

| Type           | Resource                                                                                                                     | Status      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Design         | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460)                                               | Available   |
| Implementation | [Flutter](https://api.flutter.dev/flutter/material/BottomSheet-class.html)                                                   | Available   |
|                | [MDC-Android](https://github.com/material-components/material-components-android/blob/master/docs/components/BottomSheet.md) | Available   |
|                | [Jetpack Compose](https://developer.android.com/develop/ui/compose/components/bottom-sheets)                                 | Available   |
|                | Web                                                                                                                          | Unavailable |

---

## M2 → M3 Differences

| Aspect | M3 Change                                                                    |
| ------ | ---------------------------------------------------------------------------- |
| Color  | New color mappings and compatibility with dynamic color                      |
| Shape  | 28dp top corner radius (`md.sys.shape.corner.extra-large.top`)               |
| Layout | New max-width of 640dp; optional drag handle with accessible 48dp hit target |

![M3 bottom sheet with updated styling](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp3mrmz-2.png?alt=media&token=156bba60-2635-4d1e-a928-cd2e4012f499=s0)
