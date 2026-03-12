---
url: https://m3.material.io/components/date-pickers/overview
lastmod: 2026-02-05
crawled_at: 2026-03-10T13:22:00.000Z
category: components
section: date-pickers
page_type: overview
status: complete
---

# Date pickers

Date pickers let people select a date, or a range of dates.

- Date pickers can display past, present, or future dates
- Three variants: docked, modal, modal input
- Clearly indicate important dates, such as current and selected days
- Follow common patterns, like a calendar view

![3 variants of date pickers side-by-side. The docked date picker has an outlined text field above a calendar view. The modal date picker allows people to select a date from a calendar view. The modal date input lets someone type in a date.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5mxu7o-01.png?alt=media&token=14c0b956-fdb9-439e-a756-23f4628ecc57=s0)

1. Docked date picker
2. Modal date picker
3. Modal date input

## Availability & resources

| Type           | Resource           | Status      |
| -------------- | ------------------ | ----------- |
| Design         |                    |             |
|                | Design Kit (Figma) | Available   |
| Implementation |                    |             |
|                | Flutter            | Available   |
|                | Jetpack Compose    | Available   |
|                | MDC-Android        | Available   |
|                | Web                | Unavailable |

## Differences from M2

- **Typography and spacing:** Titles and labels are larger and have increased spacing to accommodate 48dp target size
- **Color:** New color mappings and compatibility with dynamic color
- **Variants:** The three variants of date pickers have been renamed to not be device-dependent. The former desktop date picker is now known as the docked date picker. The former mobile date picker and date input are now known as modal date picker and modal date input to reinforce that the user must take an action.

![Old version of a date picker with a white background and shadows.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fle4qmou9-1P-datepicker_whatsnew_1.png?alt=media&token=771d7d4e-4ed2-4492-915e-9b82218f4848=s0)

_M2: Date pickers had a drop shadow and different color mappings_

![New version of date picker with a colorful background, rounded corners, and no shadows.](https://lh3.googleusercontent.com/HWA4owUgCVU0oIuTW-9x1wyLuHIA6m_aaks97Ih_BEz-wvMRKQqmb8-FsElnU5Jxck9-Hi-br9L52IDZBwYY22tVVJyY8NtOKnsOlqxB8gJdpQ=s0)

_M3: Date pickers have larger typography, no shadow, and new color mappings compatible with dynamic color_
