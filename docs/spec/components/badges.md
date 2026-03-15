# Badges — M3 Component Reference

> Badges show notifications, counts, or status information on navigation items and icons.

Sources: [Overview](https://m3.material.io/components/badges/overview) · [Specs](https://m3.material.io/components/badges/specs) · [Guidelines](https://m3.material.io/components/badges/guidelines) · [Accessibility](https://m3.material.io/components/badges/accessibility)

---

## Variants

![3 badge variants on navigation items](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8hopxl-01.png?alt=media&token=e9840156-17f4-4edf-b69a-eb62bd0b5c5c=s0)

1. Small badge on a navigation item
2. Large badge on a navigation item
3. Large badge with max characters on a navigation item

| Variant     | Description                                                         |
| ----------- | ------------------------------------------------------------------- |
| Small badge | Simple circle indicating an unread notification; no text            |
| Large badge | Contains label text with count information; expands width as needed |

![4 badges in different configurations on navigation bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wmkr4-01.png?alt=media&token=2a5ee969-d4fd-499e-8716-f5c028e7dc71=s0)

![4 badges on navigation bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wmphl-02.png?alt=media&token=1f32b375-fb78-43fe-a17e-8b92081ed44b=s0)

![Small badge](https://lh3.googleusercontent.com/Xnibw8kAnTzaV0TmLVU5oOfL5xZTO6E8gxqFFo843YlClRZ3TI3eTR7cGtDL76c7_3oQ6xVKU3l7NV0PxnLeYgRw3ATNSz91ytruFjCWBNSIhw=s0)

![Large badge with 4 characters](https://lh3.googleusercontent.com/UiES3FVbu4QTgh3y8L-WfQz6q2u2ao86ZpjIGDu6CxAIgDLxmu7zM-RC33uLQPuDaUJtgI1qqck8tM_bdeOfiZYNPg-PBiIsJD-7QV6gyc3a=s0)

---

## Anatomy

![Small and large badges on 2 icon buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvm8fkil-7.png?alt=media&token=3f431e5e-5e88-41bd-bbcd-052f2e6202fd=s0)

1. **Small badge** — circle with no text, indicates status change or notification
2. **Large badge container** — pill-shaped container that holds the count label
3. **Large badge label** — numeric or text content inside the large badge

### Navigation bar anatomy

![5 badge elements on a navigation bar](https://lh3.googleusercontent.com/1c2wjkW2_C9l1HmNkRT8GpeQ7WqSDcJdMKdNym4xk_wPBfFSgVP3NhSXBwBV52vI3L-Z7CAmnY7c-1WM1I9xfyj4EfI_ucXRgOhWSRvfLy5E=s0)

1. Small badge
2. Large badge container
3. Large badge label
4. Large badge maximum character count container
5. Large badge maximum character count label

### Navigation rail anatomy

![5 badge elements on a navigation rail](https://lh3.googleusercontent.com/9yjKmecr7ZJh2Tm71DBDcwftLy2cMEpCW2yl73CCr7kUctUtmKaW78yFdO-0ZUSBXShJh9CDLZtQhcOyVt9CmdNhywVGvneguYneZMeui26j=s0)

1. Small badge
2. Large badge container
3. Large badge label
4. Large badge maximum character count container
5. Large badge maximum character count label

---

## Usage & When to Use

- Indicate a notification, item count, or other information relating to a navigation destination
- Placed on the ending edge of icons, typically within other components
- Most commonly used within navigation bar, navigation rail, app bars, and tabs
- Hide the badge once the destination has been selected (for unread notification indicators)
- Limit content to **four characters**, including a `+` to indicate more
- Keep the default color mapping

![In navigation bars, hide the badge once the destination is selected](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvm8dp3k-5.png?alt=media&token=9e000d82-46f1-40c5-a9a7-e6b6046e04ae=s0)

---

## Sub-elements

### Container

Two container options:

- **Small badge**: no text, uses only shape to indicate a status change
- **Large badge**: displays a number within a container for quantifiable status changes

Badge containers are anchored inside the icon bounding box. As the number count increases, the large badge's width expands while maintaining the same placement.

![Small badge on navigation item](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0womos-07.png?alt=media&token=50e7d36f-b594-4edc-84bd-980b95aa1331=s0)

![Large badge with number 10 on navigation item](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8jybps-08.png?alt=media&token=9ceea2e2-7e57-4f49-add4-668242cc5b09=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8k2962-9-do.png?alt=media&token=532cb06e-da53-45d2-ba95-83ffc62ea499=s0" /><br/><b>Do:</b> Change the badge position for right-to-left languages</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8k2vet-10-dont.png?alt=media&token=6390c1de-9d89-42b8-b383-793abc96f691=s0" /><br/><b>Don't:</b> Badges have fixed positions — don't change arbitrarily or place over the icon</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wr0gz-11_do.png?alt=media&token=e91ea890-94ed-4e0b-a484-868b5f16308a=s0" /><br/><b>Do:</b> Use the default badge color</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wr4mw-12_dont.png?alt=media&token=c58658ac-aea9-4126-a88c-9e7ee6b76930=s0" /><br/><b>Don't:</b> Avoid custom color roles; if necessary, ensure at least 3:1 contrast</td>
</tr></table>

### Label text

Label large badges with counts or a status. Maximum four characters including a `+` to indicate more. Use the recommended max character count to ensure labels don't extend beyond the container.

![Large badges with one to four characters](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8ks60f-13.png?alt=media&token=55a2ca2d-c2a3-4849-ab90-d860253ad5c2=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wrqi2-14_do.png?alt=media&token=37353d5f-7e7f-4ef8-b6c4-866d5015b818=s0" /><br/><b>Do:</b> Truncate badge labels as needed</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wru4w-15_dont.png?alt=media&token=79eceaeb-887c-4b7a-b950-b2ba0a84a24e=s0" /><br/><b>Don't:</b> Don't let the badge get cut off or collide with another element</td>
</tr></table>

---

## Placement

![Do: large badge on navigation rail](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wsl1o-16_do.png?alt=media&token=85852fb2-22ac-43ad-90db-e27b958c792e=s0)

Use a large badge to show count information when visual collisions aren't an issue, such as in a navigation rail.

![Caution: small badge on app bar icon](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8kxkle-17_caution.png?alt=media&token=276fc105-e418-4f3f-887f-3a449899e5ee=s0)

Use a small badge in tightly constrained spaces like app bars — small badges won't run into screen edges.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8kyp7i-18_do.png?alt=media&token=83a75fa1-4971-49ed-8297-51b97ce1ca52=s0" /><br/><b>Do:</b> When an icon badge is followed by text, place the large badge at the trailing edge</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8kzbcm-19_dont.png?alt=media&token=b7e028e1-cddb-46f2-9efd-7c671e6dae6e=s0" /><br/><b>Don't:</b> Avoid large badges that overlap with trailing elements — use trailing edge placement or a small badge</td>
</tr></table>

---

## Configurations

Different badges appear on navigation destinations in various states (active, inactive, with/without label).

![15 badge configurations on navigation destinations](https://lh3.googleusercontent.com/dmnjAmE1Ol38Ijd8REgLVSvLNv733cEX_WngU88yFKfiKjSdwanYmhHnCGueyMQAzJRxRMrvdgtC2KPaNzyG_B4Rn3ptMP-22440icqyFFKmFA=s0)

1. Inactive with label — small badge
2. Inactive with label — large badge
3. Inactive with label — large badge max character count
4. Inactive — small badge
5. Inactive — large badge
6. Inactive — large badge max character count
7. Active with label — small badge
8. Active with label — large badge
9. Active with label — large badge max character count
10. Active nav bar no label — small badge
11. Active nav bar no label — large badge
12. Active nav bar no label — large badge max character count
13. Active nav rail no label — small badge
14. Active nav rail no label — large badge
15. Active nav rail no label — large badge max character count

---

## Measurements

![Badge sizes, padding, and measurements](https://lh3.googleusercontent.com/_9tsQOYHX4YH6bQJJwi1ylkI-nu2RJBNb84ivjXE8ksTqqpuE4w-riSO17Sh2gclSOMxjzlDHS_B2zKmb7uBo3Y1ZBPiLWi6UoHlHOAK9Zw=s0)

| Attribute                                                                                | Value             |
| ---------------------------------------------------------------------------------------- | ----------------- |
| Small badge shape                                                                        | 3dp corner radius |
| Small badge size (HxW)                                                                   | 6dp               |
| Large badge shape                                                                        | 8dp corner radius |
| Large badge one digit size (HxW)                                                         | 16dp              |
| Large badge max character count size (HxW)                                               | 16x34dp           |
| Small badge: distance from top trailing icon corner to bottom leading badge corner (HxW) | 6x6dp             |
| Large badge: distance from top trailing icon corner to bottom leading badge corner (HxW) | 14x12dp           |
| Large badge padding between badge and text container                                     | 4dp               |

---

## Color Tokens

### Navigation bar badge color

![5 badge color applications on navigation bar in light and dark](https://lh3.googleusercontent.com/GXqQAaWohBPLwvJAZUGaxFwy8CI_R4BLcAXPDq-e4P67CObmbEHL-GzwJbo6hBOmuqFuoV8QrPMXhmL2Zfca9_o5bTyMbxGhVxeM1Fwf7KU=s0)

1. Error
2. Error
3. On error
4. On error
5. Error

### Navigation rail badge color

![5 badge color applications on navigation rail in light and dark](https://lh3.googleusercontent.com/8-bcqHO-CggN9L5OTiWVxPDT-wPzcurO0xXI7dZeo5htfXRjDwMnoMl_Qco9Z8NGG9CE2_5qrO2QdLV-nmieRVopeqNZeeHavE0GJqJpLRA=s0)

1. Error
2. On error
3. Error
4. On error
5. Error

### Token tables

**Enabled / Container**

| Name              | Token                       | Value                    |
| ----------------- | --------------------------- | ------------------------ |
| Badge color       | `md.comp.badge.color`       | md.sys.color.error       |
| Badge shape       | `md.comp.badge.shape`       | md.sys.shape.corner.full |
| Badge size        | `md.comp.badge.size`        | 6dp                      |
| Badge large color | `md.comp.badge.large.color` | md.sys.color.error       |
| Badge large shape | `md.comp.badge.large.shape` | md.sys.shape.corner.full |
| Badge large size  | `md.comp.badge.large.size`  | 16dp                     |

**Enabled / Label text**

| Name                               | Token                                        | Value                                    |
| ---------------------------------- | -------------------------------------------- | ---------------------------------------- |
| Badge large label text color       | `md.comp.badge.large.label-text.color`       | md.sys.color.on-error                    |
| Badge large label text font        | `md.comp.badge.large.label-text.font`        | md.sys.typescale.label-small.font        |
| Badge large label text line height | `md.comp.badge.large.label-text.line-height` | md.sys.typescale.label-small.line-height |
| Badge large label text size        | `md.comp.badge.large.label-text.size`        | md.sys.typescale.label-small.size        |
| Badge large label text tracking    | `md.comp.badge.large.label-text.tracking`    | md.sys.typescale.label-small.tracking    |
| Badge large label text weight      | `md.comp.badge.large.label-text.weight`      | md.sys.typescale.label-small.weight      |
| Badge large label text type        | `md.comp.badge.large.label-text.type`        | Aa                                       |

---

## Accessibility

### Use cases

People should be able to use assistive technology to:

- Understand the dynamic information conveyed in badges (counts or labels)
- Address badge announcements by selecting corresponding navigation destinations

### Interaction & style

Badges are most commonly used within other components (navigation bar, navigation rail, app bars, tabs). When indicating an unread notification, the badge disappears once the destination is selected.

### Visual indicators

Badges use a color intended to stand out against surrounding elements. Use the default color mapping to avoid contrast issues.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0x2h51-02_do.png?alt=media&token=b6d4a7a7-0b46-4a00-84a8-96265cf1ef4b=s0" /><br/><b>Do:</b> Badges must use default color with at least 3:1 contrast</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0x2kti-03_dont.png?alt=media&token=5c3e26cc-09ca-4769-9f83-701d6e8d83cb=s0" /><br/><b>Don't:</b> Avoid custom color roles; if necessary, ensure at least 3:1 contrast</td>
</tr></table>

### Labeling

- The accessibility label for a badge is read after its navigation destination
- Numerical badges have their number read aloud
- Non-counting badges (small) announce "New notification"

![Numerical badge has its number read](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8l8lhl-04.png?alt=media&token=99d7e919-9bb3-45ed-a8b9-b961d31ef91c=s0)

![Non-counting badge announces "New notification"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8l9na6-05.png?alt=media&token=096422e0-2079-4674-8f91-1adb36552e46=s0)

---

## M2 → M3 Differences

| Aspect | M2                      | M3                                               |
| ------ | ----------------------- | ------------------------------------------------ |
| Color  | Previous color mappings | New color mappings compatible with dynamic color |

![Badges have new color mappings](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8hz0r2-02.png?alt=media&token=579d40e2-1895-4ed4-a074-22f71265f580=s0)
