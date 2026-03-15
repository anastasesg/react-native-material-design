# Date Pickers — M3 Component Reference

> Date pickers let people select a date, or a range of dates, via a calendar view or keyboard input.

Sources: [Overview](https://m3.material.io/components/date-pickers/overview) · [Specs](https://m3.material.io/components/date-pickers/specs) · [Guidelines](https://m3.material.io/components/date-pickers/guidelines) · [Accessibility](https://m3.material.io/components/date-pickers/accessibility)

---

## Variants

![3 variants of date pickers side-by-side. The docked date picker has an outlined text field above a calendar view. The modal date picker allows people to select a date from a calendar view. The modal date input lets someone type in a date.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5mxu7o-01.png?alt=media&token=14c0b956-fdb9-439e-a756-23f4628ecc57=s0)

1. Docked date picker
2. Modal date picker
3. Modal date input

| Variant          | Description                                                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Docked           | Displays an outlined text field with a dropdown calendar beneath it; both keyboard entry and calendar UI are immediately available. Suited for medium/expanded windows. |
| Modal            | Full calendar view inside a dialog above a scrim; supports single date and date range selection. Ideal for compact/mobile contexts.                                     |
| Modal date input | Keyboard-only date entry inside a dialog; accessible from the modal date picker via the edit icon. Best for distant past/future dates (e.g. date of birth).             |

Date pickers can display past, present, or future dates. They clearly indicate important dates such as today and the selected day, and follow conventional calendar patterns.

---

## Anatomy

### Docked date picker

![7 elements of a docked date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5skthv-06.png?alt=media&token=4ef9f1b3-6e99-4787-8150-6c64b1808315=s0)

1. Text field
2. Menu button
3. Icon button
4. Label text
5. Menu
6. Text buttons
7. Container

![3 elements of a docked date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5slanf-07.png?alt=media&token=fbc898d0-972d-46fb-a595-ecb0db8f514c=s0)

1. Text field
2. Menu button
3. Menu

![Diagram indicating the 11 elements of a docked date picker.](https://lh3.googleusercontent.com/tETsEHo8OLEiIv-Aaw1wjb742B5Thac-7QZTp95nvITcOKMWXrSKJTl0gTnbAwyOiSl9EvWo8aMtz52MJtC8vm1VZx6EaOgPVWoP7AaDkvjs=s0)

1. **Outlined text field**
2. **Menu button: Month selection**
3. **Menu button: Year selection**
4. **Icon button**
5. **Weekdays label text**
6. **Unselected date**
7. **Today's date**
8. **Outside month date**
9. **Text buttons**
10. **Selected date**
11. **Container**

![Diagram indicating 8 elements of a docked date picker with an open dropdown menu showing the months May to November.](https://lh3.googleusercontent.com/MKNjpAopgtytl_kFpz85rnKyX4WdXng4gAvBAcQPMcDKWYzvwPrFzXEaKJoof31oj0KDhcCZLG0nBVwAlvpPlXrUf3UljRtKNCAjO4sC2K4w=s0)

1. **Outlined text field**
2. **Menu button: Month selection (pressed)**
3. **Menu button: Year selection (disabled)**
4. **Header**
5. **Menu**
6. **Selected list item**
7. **Unselected menu list item**
8. **Container**

### Modal date picker

![12 elements of a modal date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sma00-08.png?alt=media&token=1723a5d5-4cdc-4758-a1bc-bb362780ad84=s0)

1. Headline
2. Supporting text
3. Container
4. Icon button
5. Previous/next month buttons
6. Day of week labels
7. Today's date
8. Unselected date
9. Text buttons
10. Selected date
11. Menu button
12. Divider

![9 elements of a modal date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5smpl6-09.png?alt=media&token=e4cbb084-d156-4210-a569-37fcda9a9ad4=s0)

1. Headline
2. Supporting text
3. Container
4. Icon button
5. Unselected year
6. Selected year
7. Text buttons
8. Divider
9. Menu button

![Diagram indicating the 13 elements of a modal date picker in the day selection view.](https://lh3.googleusercontent.com/lTTHd1QoFOtnUn9kre2Ifx3m8tZlBEcNzwIbibxsbeIo3srW5t25mBOewAYkO5fFIFLzW4JA0uiDk-0srfUGaXKuUhnyTB29Xvx3prdUIZE=s0)

1. **Headline**
2. **Supporting text**
3. **Header**
4. **Container**
5. **Icon button**
6. **Icon buttons** (previous/next month)
7. **Weekdays**
8. **Today's date**
9. **Unselected date**
10. **Text buttons**
11. **Selected date**
12. **Menu button**
13. **Divider**

![10 elements of a modal date picker menu.](https://lh3.googleusercontent.com/MEsCpopd1hOL195tikhDp1oekUbo_Dgjj3C8uO-1DuhPneuxpqu6Rntq6FMue_xJj6Bg0cvUFGBr3nSvdonOPiJ2nLFHghJ9rUc_uLz--W3p=s0)

1. **Headline**
2. **Supporting text**
3. **Header**
4. **Container**
5. **Icon button**
6. **Unselected year**
7. **Selected year**
8. **Text buttons**
9. **Divider**
10. **Menu button**

![Diagram indicating the 15 elements of a modal date picker when selecting a range of dates.](https://lh3.googleusercontent.com/VAgYqCiSgxR776ucqoudANiddYBjkUwzrtQPxdVWC3vLAjapPUH0OjC_aHhHU1gX-a7jAtlSdyfL6nZ8zZTRi9UggwYWdkEnMXOdZfA-5Fk=s0)

1. **Headline**
2. **Supporting text**
3. **Icon button**
4. **Header**
5. **Text button**
6. **Icon button**
7. **Weekdays label text**
8. **Container**
9. **Today's date**
10. **Unselected date**
11. **In-range active indicator**
12. **In-range date**
13. **Month subhead**
14. **Selected date**
15. **Divider**

### Modal date input

![7 elements of a modal date input.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sng56-10.png?alt=media&token=5d099ed8-e13b-4f7d-8148-7564dd7c636e=s0)

1. Headline
2. Supporting text
3. Container
4. Icon button
5. Date input
6. Text buttons
7. Divider

![Diagram indicating the 8 elements of a modal date input.](https://lh3.googleusercontent.com/y_Bb20CqP7MSVjr8eJmNwxui08VclLGtULHxuZijAxVbdPmwcdepZbOoM1dKSK0YSXbOaKhGQqangV1Ol662UAR5TsDqKH0zzYB2hoLmkktz=s0)

1. **Headline**
2. **Supporting text**
3. **Header**
4. **Container**
5. **Icon button**
6. **Outlined text field**
7. **Text buttons**
8. **Divider**

### Full-screen date picker

![14 elements of a full-screen date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5srxxg-11.png?alt=media&token=342f4eea-5c39-4b69-b4f5-32d5ae50042b=s0)

1. **Headline**
2. **Supporting text**
3. **Icon button**
4. **Container**
5. **Text button**
6. **Icon button**
7. **Divider**
8. **Day of week labels**
9. **Today's date**
10. **Selected date range**
11. **Unselected date**
12. **Text buttons**
13. **Selected date range start date**
14. **Month label**

---

## Usage & When to Use

Date pickers let people select a date or range of dates. They should be appropriate for the context in which they appear. Date pickers can be embedded into:

1. Dialogs on compact window sizes (e.g. mobile)
2. Text field drop-downs on medium and expanded window sizes (e.g. tablet and desktop)

![2 date picker variations: a dialog on mobile and a dropdown within a text field on desktop.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sha07-02.png?alt=media&token=4d9b7796-166a-4e83-8a17-abf61a83c6ae=s0)

1. Date picker dialog on mobile
2. Date picker text field dropdown on desktop

There are three variants of date pickers:

![A docked date picker component.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5si8zx-03.png?alt=media&token=84db16d1-ec55-415e-b2d1-76214fa1336a=s0)

1. Docked date picker

![A modal date picker component.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sj3v5-04.png?alt=media&token=9c5f5c53-5d9c-4fc0-98ec-417a001994a1=s0)

2. Modal date picker

![A modal date input component.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme1yy2eb-05.png?alt=media&token=eb5f6437-120f-4436-8382-78df0df143f8=s0)

3. Modal date input

---

## Docked Date Picker

### Usage

Docked date pickers allow selection of a specific date and year. They display a date input field by default, with a dropdown calendar that appears when the user taps the input field. Both keyboard and calendar-based entry are immediately available. Docked date pickers work well for navigating dates in both the near and distant future or past, since they provide multiple ways to select dates.

![Docked date picker on a desktop screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwhhvs4s-12.png?alt=media&token=b3de10d4-789a-4203-b950-97a19de11e56=s0)

Docked date picker on desktop

### Behavior

Dates can be entered by typing on the keyboard or by interacting with the calendar UI; both options are available as soon as the docked date picker opens.

![Docked date picker with a text field and the UI picker showing the selected date.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5swv36-13.png?alt=media&token=e9e8a585-7d28-4714-b57c-8ad56ad35932=s0)

Docked date picker

The docked date picker adjusts its size dynamically as the user interacts with it. When the year selection menu opens, it replaces the calendar view within the same container.

### Month selection

Month selection can be navigated with the back/next arrows or by tapping the dropdown menu.

![Docked date picker with a list of months May through September. August is selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sxs60-16.png?alt=media&token=8e25c888-0ff4-41b3-bc49-bcb15ee42958=s0)

Docked date picker month selection

### Year selection

Year selection can be navigated with the back/next arrows or by tapping the dropdown menu.

![Docked date picker with a list of years 2025 to 2029. 2025 is selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t0t93-17.png?alt=media&token=62987e8d-906f-4598-bc57-2b24c75d6f99=s0)

Docked date picker year selection

---

## Modal Date Picker

### Behavior

Modal date pickers support several navigation methods:

- **Swipe horizontally** to navigate across months
- **Scroll vertically** to navigate across years
- **Tap the year** to open the year picker

Avoid using a modal date picker to prompt for dates in the distant past or future (e.g. date of birth). In those cases, use a modal date input or docked date picker instead.

Swiping horizontally cycles through months; tapping the year opens a vertically scrollable year picker.

### Date range selection

Date range selection provides a start and end date. Common use cases include booking flights and reserving hotels.

Modal date pickers support range selection in several ways:

- **Tap the start and end dates** on the calendar to define the range
- **Scroll vertically** to navigate across months in range mode

The modal date range picker shows a continuous vertical scrolling calendar. Users tap start and end dates, and dates in between receive a subtle range highlight.

---

## Modal Date Input

### Usage

Modal date inputs allow manual entry of dates via the keyboard. Users can input a single date or a range of dates inside a dialog.

![A modal date input component.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t2vbx-22.png?alt=media&token=c323b202-962d-44d8-b4b5-fd7e3c3cf2f6=s0)

Modal date with manual input

<table>
<tr>
<td>

![A modal date input component showing a day in 1979, which would be difficult to choose using UI.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t44vn-23-do.png?alt=media&token=ef86d677-f014-4215-877c-dc501c32eae2=s0)

**Do:** For dates that don't require a calendar view (e.g. distant past dates like a date of birth), the modal date input can serve as the default view.

</td>
<td>

![A modal date input with hint text for entering the date.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t675k-24-do.png?alt=media&token=335d8130-c5c5-4080-a5c4-ba8454108840=s0)

**Do:** Alternatively, an inline text field with appropriate hint text can prompt for dates, such as in a form.

</td>
</tr>
</table>

### Behavior

Users can switch between the modal date picker and modal date input using the edit (pencil) or calendar icon. This works for both single-date and date-range selection modes.

---

## Behavior

### Appearing and disappearing

Like other dialogs, modal date pickers use enter and exit transitions. To dismiss a date picker, the user can confirm (**OK**), cancel (**Cancel**), or interact outside the dialog. Until one of these actions is taken, the date picker retains focus. Full-screen mobile pickers also include a close (x) icon button and a **Save** confirmation button. Docked date pickers appear directly below their input field.

### Selection

Selection is communicated through color. In date ranges, start and end dates receive a selected state while in-between dates are connected with a subtle highlight. The difference between the selected range and today's date is communicated through distinct color and fill treatments.

### Responsive layout

The docked and modal date picker components do not scale responsively to different window sizes.

![Docked date picker enlarged on a large screen responsively.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tb2d5-32.png?alt=media&token=ab567470-5b68-45ed-a913-8c80288f7894=s0)

**Don't:** Don't scale the date picker responsively to a larger size.

---

## Adaptive Design

### Compact window size

On compact window sizes (e.g. mobile), a full-screen modal date picker is recommended to maximize readability and touch target size. It can cover the entire screen.

![A full-screen view of modal date picker on a mobile device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t84q0-27.png?alt=media&token=05e79f57-4608-4f32-96b6-3731d33645ee=s0)

A full-screen modal date picker on mobile

### Medium and expanded window sizes

The docked date picker is the recommended variant for medium and expanded window sizes. It displays a date input field by default, with a dropdown calendar that appears when the user taps the input field. Both keyboard and calendar entry are available. The docked variant works well for both near and distant date selection.

![A docked date picker displaying a full calendar view on a large screen device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t9e1o-28.png?alt=media&token=b002f7a4-2450-47c1-bba0-3475b334d19b=s0)

A docked date picker with a full calendar view on a larger device

### Density note

Interactive targets for all elements meet Material's 48x48dp minimum touch target requirement. Increasing density would negatively impact accessibility by limiting tappable/clickable targets.

---

## Configurations

### Docked date picker

![3 configurations of docked date picker.](https://lh3.googleusercontent.com/LpdT8F1acz-J6VISmCSL1-BMFHSFrOP0Ey9WkdUVp0xjdG_8xA4mWV3fz2aSuws2Sjq5YllidbsViN5M2T3XsG2mmOXzJAMlEwySnUG-GYY=s0)

1. Day selection
2. Month selection
3. Year selection

### Modal date picker

![3 configurations of a modal date picker shown in dark mode.](https://lh3.googleusercontent.com/X5qMWXDD7RFiXL6-gzkVulqL9pNGDfUX0efsHAsahVvpsZYW9bLkl-4UyWkXho6YWmAxoVSpz3dhhve7Rw_bFdsVFtCwp29xfoGlKrZlanIy=s0)

1. Single date selection
2. Date range selection
3. Year selection

### Modal date input

![2 configurations of modal date input.](https://lh3.googleusercontent.com/dL3RrXAFk0yAelVnpdVtEswLMzDgTjbDjVW1Ws00MppaklNXca5Dwx0PDdWkU6pc7SYy9I0xUXQ1ttwm38Oh7d5XCSTr6Kbph0EqGtMMgKtWbA=s0)

1. Single date input
2. Date range input

---

## Measurements

### Docked date picker

![Diagram of padding, size, and layout measurements.](https://lh3.googleusercontent.com/PTixdykCflNGubuMrHJpl5MMA4Gg3W9U8LDFn2SjrMoswSQ2F_uJAVkm8NtkjoxRvJbQsyUev55lyKIPDhTcgFQlGsMlruJKGYNfdOH9Lu0e1Q=s0)

Docked date picker padding and size measurements

### Docked date picker menu

![Diagram of padding, size, and layout measurements.](https://lh3.googleusercontent.com/MTNVLCkRAS7bSuaXx8wcn3u_6dmltsszWRSC3Qo7cnc_G2Lk1K_QkeULzwaGWNidXlO12HIxRvKnYspR2Z5ae9WC-V87xrRK6I9JqpwjnZOd=s0)

Docked date picker month menu padding and size measurements

### Modal date picker — day selection

![Diagram of size and padding measurements in day selection view.](https://lh3.googleusercontent.com/Qe-iPyRhBKhCxHScEGB4S8BssYvRdETO_pEbYIPRrGLewt2ObrK4fEJXcRN7DnsWZeAWSlL0J1fXPjVuBSfxUt3ZgeFKXuRIojAVlEClcuw=s0)

Modal date picker padding and size measurements

### Modal date picker — year selection

![Diagram of size and padding measurements in year selection view.](https://lh3.googleusercontent.com/LkaUY6KA1A3o2AsE0U9A8Yka862hS-QLjbWWC7etGxAi8UU55KnFHwor3AeHy814pTq_IJgpND4k_UN-UPlc8cRhALLZIh6tP88xh6Lneb0s=s0)

Modal date picker year selector padding and size measurements

### Modal date picker — date range

![Diagram of size and padding measurements when selecting a range of dates.](https://lh3.googleusercontent.com/-H_XlEpqZPu5-zavBZl448ZPXeg3RwDWwmtidrkSwPBcUKrXk0b_4uZrjvsdt-chOrMLLquYznzK0jWn8iZ_L4zJ3lR1zTkBIXwJrv3M283H=s0)

Modal date picker date range selector padding and size measurements

### Modal date input

![Diagram of the padding and size measurements of a modal date input.](https://lh3.googleusercontent.com/M_rfbkLJHuLrKAZGQQmuEVaZMyte_u_3ybmULmG8aiNvTnIcB9OmLtKv9dswOeVNC0NML5TtfQVSUop_Q9vz5pLqrwp9Xchth7vF4cumQCuN=s0)

Modal date input padding and size measurements

---

## Color Tokens

### Docked date picker color

![11 color roles of a docked date picker in light and dark themes.](https://lh3.googleusercontent.com/t5niu5LsIjOjw0wey4JXXcQ9J0PQuCxTW7cXasgVguRXLf1Sjuuv7VDs81XvQvD9GfrYj9CXwjPpij_rLi-ylLRJt6BIiv-Io_jGktOkZzY=s0)

1. Primary
2. On surface variant
3. On surface variant
4. On surface
5. On surface
6. Primary
7. On surface variant
8. Primary
9. Surface container high
10. Primary
11. On primary

![7 color roles of a docked date picker menu in light and dark themes.](https://lh3.googleusercontent.com/8dm3XqLpo47xIT6RMfiGCFeylnMi_-bxLabwkeigMuXB6e17c35Pf_uhK7ykl7vKRDm5NzrY5V_rracq3Uz8KYoMRrNKA_GejWGHbtR0jRM=s0)

1. Primary
2. On surface variant
3. On surface
4. Outline variant
5. Surface container high
6. Surface variant
7. On surface

#### Docked — Enabled / Container

| Name                                    | Token                                                                | Value                                 |
| --------------------------------------- | -------------------------------------------------------------------- | ------------------------------------- |
| Container color                         | `md.comp.date-picker.docked.container.color`                         | `md.sys.color.surface-container-high` |
| Container elevation                     | `md.comp.date-picker.docked.container.elevation`                     | `md.sys.elevation.level3`             |
| Container surface tint layer color      | `md.comp.date-picker.docked.container.surface-tint-layer.color`      | `md.sys.color.surface-tint`           |
| Container shape                         | `md.comp.date-picker.docked.container.shape`                         | `md.sys.shape.corner.large`           |
| Date container shape                    | `md.comp.date-picker.docked.date.container.shape`                    | `md.sys.shape.corner.full`            |
| Date today container outline color      | `md.comp.date-picker.docked.date.today.container.outline.color`      | `md.sys.color.primary`                |
| Date today container outline width      | `md.comp.date-picker.docked.date.today.container.outline.width`      | 1dp                                   |
| Date selected container color           | `md.comp.date-picker.docked.date.selected.container.color`           | `md.sys.color.primary`                |
| Menu button container shape             | `md.comp.date-picker.docked.menu-button.container.shape`             | `md.sys.shape.corner.full`            |
| Menu list item selected container color | `md.comp.date-picker.docked.menu.list-item.selected.container.color` | `md.sys.color.surface-variant`        |
| Container width                         | `md.comp.date-picker.docked.container.width`                         | 360dp                                 |
| Container height                        | `md.comp.date-picker.docked.container.height`                        | 456dp                                 |
| Date container width                    | `md.comp.date-picker.docked.date.container.width`                    | 48dp                                  |
| Date container height                   | `md.comp.date-picker.docked.date.container.height`                   | 48dp                                  |
| Menu button container height            | `md.comp.date-picker.docked.menu-button.container.height`            | 40dp                                  |
| Menu list item container height         | `md.comp.date-picker.docked.menu.list-item.container.height`         | 48dp                                  |

#### Docked — Enabled / Label text

| Name                                             | Token                                                                         | Value                                      |
| ------------------------------------------------ | ----------------------------------------------------------------------------- | ------------------------------------------ |
| Weekdays label text color                        | `md.comp.date-picker.docked.weekdays.label-text.color`                        | `md.sys.color.on-surface`                  |
| Weekdays label text font                         | `md.comp.date-picker.docked.weekdays.label-text.font`                         | `md.sys.typescale.body-large.font`         |
| Weekdays label text line height                  | `md.comp.date-picker.docked.weekdays.label-text.line-height`                  | `md.sys.typescale.body-large.line-height`  |
| Weekdays label text size                         | `md.comp.date-picker.docked.weekdays.label-text.size`                         | `md.sys.typescale.body-large.size`         |
| Weekdays label text weight                       | `md.comp.date-picker.docked.weekdays.label-text.weight`                       | `md.sys.typescale.body-large.weight`       |
| Weekdays label text tracking                     | `md.comp.date-picker.docked.weekdays.label-text.tracking`                     | `md.sys.typescale.body-large.tracking`     |
| Weekdays label text type style                   | `md.comp.date-picker.docked.weekdays.label-text.type`                         | Aa                                         |
| Date label text font                             | `md.comp.date-picker.docked.date.label-text.font`                             | `md.sys.typescale.body-large.font`         |
| Date label text line height                      | `md.comp.date-picker.docked.date.label-text.line-height`                      | `md.sys.typescale.body-large.line-height`  |
| Date label text size                             | `md.comp.date-picker.docked.date.label-text.size`                             | `md.sys.typescale.body-large.size`         |
| Date label text weight                           | `md.comp.date-picker.docked.date.label-text.weight`                           | `md.sys.typescale.body-large.weight`       |
| Date label text tracking                         | `md.comp.date-picker.docked.date.label-text.tracking`                         | `md.sys.typescale.body-large.tracking`     |
| Date label text type style                       | `md.comp.date-picker.docked.date.label-text.type`                             | Aa                                         |
| Date unselected label text color                 | `md.comp.date-picker.docked.date.unselected.label-text.color`                 | `md.sys.color.on-surface`                  |
| Date unselected outside month label text color   | `md.comp.date-picker.docked.date.unselected.outside-month.label-text.color`   | `md.sys.color.on-surface`                  |
| Date unselected outside month label text opacity | `md.comp.date-picker.docked.date.unselected.outside-month.label-text.opacity` | 0.38                                       |
| Date today label text color                      | `md.comp.date-picker.docked.date.today.label-text.color`                      | `md.sys.color.primary`                     |
| Date selected label text color                   | `md.comp.date-picker.docked.date.selected.label-text.color`                   | `md.sys.color.on-primary`                  |
| Menu button label text color                     | `md.comp.date-picker.docked.menu-button.label-text.color`                     | `md.sys.color.on-surface-variant`          |
| Menu button label text font                      | `md.comp.date-picker.docked.menu-button.label-text.font`                      | `md.sys.typescale.label-large.font`        |
| Menu button label text line height               | `md.comp.date-picker.docked.menu-button.label-text.line-height`               | `md.sys.typescale.label-large.line-height` |
| Menu button label text size                      | `md.comp.date-picker.docked.menu-button.label-text.size`                      | `md.sys.typescale.label-large.size`        |
| Menu button label text weight                    | `md.comp.date-picker.docked.menu-button.label-text.weight`                    | `md.sys.typescale.label-large.weight`      |
| Menu button label text tracking                  | `md.comp.date-picker.docked.menu-button.label-text.tracking`                  | `md.sys.typescale.label-large.tracking`    |
| Menu button label text type style                | `md.comp.date-picker.docked.menu-button.label-text.type`                      | Aa                                         |
| Menu list item label text color                  | `md.comp.date-picker.docked.menu.list-item.label-text.color`                  | `md.sys.color.on-surface`                  |
| Menu list item label text font                   | `md.comp.date-picker.docked.menu.list-item.label-text.font`                   | `md.sys.typescale.body-large.font`         |
| Menu list item label text line height            | `md.comp.date-picker.docked.menu.list-item.label-text.line-height`            | `md.sys.typescale.body-large.line-height`  |
| Menu list item label text size                   | `md.comp.date-picker.docked.menu.list-item.label-text.size`                   | `md.sys.typescale.body-large.size`         |
| Menu list item label text tracking               | `md.comp.date-picker.docked.menu.list-item.label-text.tracking`               | `md.sys.typescale.body-large.tracking`     |
| Menu list item label text weight                 | `md.comp.date-picker.docked.menu.list-item.label-text.weight`                 | `md.sys.typescale.body-large.weight`       |
| Menu list item label text type style             | `md.comp.date-picker.docked.menu.list-item.label-text.type`                   | Aa                                         |

#### Docked — Enabled / Icon

| Name                   | Token                                               | Value                             |
| ---------------------- | --------------------------------------------------- | --------------------------------- |
| Menu button icon color | `md.comp.date-picker.docked.menu-button.icon.color` | `md.sys.color.on-surface-variant` |
| Menu button icon size  | `md.comp.date-picker.docked.menu-button.icon.size`  | 18dp                              |

#### Docked — Enabled / Leading icon

| Name                                       | Token                                                                   | Value                     |
| ------------------------------------------ | ----------------------------------------------------------------------- | ------------------------- |
| Menu list item selected leading icon color | `md.comp.date-picker.docked.menu.list-item.selected.leading-icon.color` | `md.sys.color.on-surface` |
| Menu list item selected leading icon size  | `md.comp.date-picker.docked.menu.list-item.selected.leading-icon.size`  | 24dp                      |

#### Docked — Enabled / State layer

| Name                    | Token                                                | Value                      |
| ----------------------- | ---------------------------------------------------- | -------------------------- |
| Date state layer shape  | `md.comp.date-picker.docked.date.state-layer.shape`  | `md.sys.shape.corner.full` |
| Date state layer width  | `md.comp.date-picker.docked.date.state-layer.width`  | 40dp                       |
| Date state layer height | `md.comp.date-picker.docked.date.state-layer.height` | 40dp                       |

#### Docked — Enabled / Header

| Name          | Token                                      | Value |
| ------------- | ------------------------------------------ | ----- |
| Header height | `md.comp.date-picker.docked.header.height` | 64dp  |

#### Docked — Disabled / Label text

| Name                                    | Token                                                                | Value                     |
| --------------------------------------- | -------------------------------------------------------------------- | ------------------------- |
| Menu button disabled label text color   | `md.comp.date-picker.docked.menu-button.disabled.label-text.color`   | `md.sys.color.on-surface` |
| Menu button disabled label text opacity | `md.comp.date-picker.docked.menu-button.disabled.label-text.opacity` | 0.38                      |

#### Docked — Disabled / Icon

| Name                              | Token                                                          | Value                     |
| --------------------------------- | -------------------------------------------------------------- | ------------------------- |
| Menu button disabled icon color   | `md.comp.date-picker.docked.menu-button.disabled.icon.color`   | `md.sys.color.on-surface` |
| Menu button disabled icon opacity | `md.comp.date-picker.docked.menu-button.disabled.icon.opacity` | 0.38                      |

#### Docked — Hovered / Label text

| Name                                  | Token                                                              | Value                             |
| ------------------------------------- | ------------------------------------------------------------------ | --------------------------------- |
| Menu button hover label text color    | `md.comp.date-picker.docked.menu-button.hover.label-text.color`    | `md.sys.color.on-surface-variant` |
| Menu list item hover label text color | `md.comp.date-picker.docked.menu.list-item.hover.label-text.color` | `md.sys.color.on-surface`         |

#### Docked — Hovered / State layer

| Name                                     | Token                                                                 | Value                                    |
| ---------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| Date unselected hover state layer color  | `md.comp.date-picker.docked.date.unselected.hover.state-layer.color`  | `md.sys.color.on-surface-variant`        |
| Date selected hover state layer color    | `md.comp.date-picker.docked.date.selected.hover.state-layer.color`    | `md.sys.color.on-primary`                |
| Date today hover state layer color       | `md.comp.date-picker.docked.date.today.hover.state-layer.color`       | `md.sys.color.primary`                   |
| Date hover state layer opacity           | `md.comp.date-picker.docked.date.hover.state-layer.opacity`           | `md.sys.state.hover.state-layer-opacity` |
| Menu button hover state layer color      | `md.comp.date-picker.docked.menu-button.hover.state-layer.color`      | `md.sys.color.on-surface-variant`        |
| Menu button hover state layer opacity    | `md.comp.date-picker.docked.menu-button.hover.state-layer.opacity`    | `md.sys.state.hover.state-layer-opacity` |
| Menu list item hover state layer color   | `md.comp.date-picker.docked.menu.list-item.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| Menu list item hover state layer opacity | `md.comp.date-picker.docked.menu.list-item.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

#### Docked — Hovered / Icon

| Name                         | Token                                                     | Value                             |
| ---------------------------- | --------------------------------------------------------- | --------------------------------- |
| Menu button hover icon color | `md.comp.date-picker.docked.menu-button.hover.icon.color` | `md.sys.color.on-surface-variant` |

#### Docked — Hovered / Leading icon

| Name                                             | Token                                                                         | Value                             |
| ------------------------------------------------ | ----------------------------------------------------------------------------- | --------------------------------- |
| Menu list item selected hover leading icon color | `md.comp.date-picker.docked.menu.list-item.selected.hover.leading-icon.color` | `md.sys.color.on-surface-variant` |

#### Docked — Focused / Label text

| Name                                  | Token                                                              | Value                             |
| ------------------------------------- | ------------------------------------------------------------------ | --------------------------------- |
| Menu button focus label text color    | `md.comp.date-picker.docked.menu-button.focus.label-text.color`    | `md.sys.color.on-surface-variant` |
| Menu list item focus label text color | `md.comp.date-picker.docked.menu.list-item.focus.label-text.color` | `md.sys.color.on-surface`         |

#### Docked — Focused / State layer

| Name                                     | Token                                                                 | Value                                    |
| ---------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| Date unselected focus state layer color  | `md.comp.date-picker.docked.date.unselected.focus.state-layer.color`  | `md.sys.color.on-surface-variant`        |
| Date selected focus state layer color    | `md.comp.date-picker.docked.date.selected.focus.state-layer.color`    | `md.sys.color.on-primary`                |
| Date today focus state layer color       | `md.comp.date-picker.docked.date.today.focus.state-layer.color`       | `md.sys.color.primary`                   |
| Date focus state layer opacity           | `md.comp.date-picker.docked.date.focus.state-layer.opacity`           | `md.sys.state.focus.state-layer-opacity` |
| Menu button focus state layer color      | `md.comp.date-picker.docked.menu-button.focus.state-layer.color`      | `md.sys.color.on-surface-variant`        |
| Menu button focus state layer opacity    | `md.comp.date-picker.docked.menu-button.focus.state-layer.opacity`    | `md.sys.state.focus.state-layer-opacity` |
| Menu list item focus state layer color   | `md.comp.date-picker.docked.menu.list-item.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| Menu list item focus state layer opacity | `md.comp.date-picker.docked.menu.list-item.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

#### Docked — Focused / Icon

| Name                         | Token                                                     | Value                             |
| ---------------------------- | --------------------------------------------------------- | --------------------------------- |
| Menu button focus icon color | `md.comp.date-picker.docked.menu-button.focus.icon.color` | `md.sys.color.on-surface-variant` |

#### Docked — Focused / Leading icon

| Name                                             | Token                                                                         | Value                             |
| ------------------------------------------------ | ----------------------------------------------------------------------------- | --------------------------------- |
| Menu list item selected focus leading icon color | `md.comp.date-picker.docked.menu.list-item.selected.focus.leading-icon.color` | `md.sys.color.on-surface-variant` |

#### Docked — Pressed / Label text

| Name                                    | Token                                                                | Value                             |
| --------------------------------------- | -------------------------------------------------------------------- | --------------------------------- |
| Menu button pressed label text color    | `md.comp.date-picker.docked.menu-button.pressed.label-text.color`    | `md.sys.color.on-surface-variant` |
| Menu list item pressed label text color | `md.comp.date-picker.docked.menu.list-item.pressed.label-text.color` | `md.sys.color.on-surface`         |

#### Docked — Pressed / State layer

| Name                                       | Token                                                                   | Value                                      |
| ------------------------------------------ | ----------------------------------------------------------------------- | ------------------------------------------ |
| Date unselected pressed state layer color  | `md.comp.date-picker.docked.date.unselected.pressed.state-layer.color`  | `md.sys.color.on-surface-variant`          |
| Date selected pressed state layer color    | `md.comp.date-picker.docked.date.selected.pressed.state-layer.color`    | `md.sys.color.on-primary`                  |
| Date today pressed state layer color       | `md.comp.date-picker.docked.date.today.pressed.state-layer.color`       | `md.sys.color.primary`                     |
| Date pressed state layer opacity           | `md.comp.date-picker.docked.date.pressed.state-layer.opacity`           | `md.sys.state.pressed.state-layer-opacity` |
| Menu button pressed state layer color      | `md.comp.date-picker.docked.menu-button.pressed.state-layer.color`      | `md.sys.color.on-surface-variant`          |
| Menu button pressed state layer opacity    | `md.comp.date-picker.docked.menu-button.pressed.state-layer.opacity`    | `md.sys.state.pressed.state-layer-opacity` |
| Menu list item pressed state layer color   | `md.comp.date-picker.docked.menu.list-item.pressed.state-layer.color`   | `md.sys.color.on-surface`                  |
| Menu list item pressed state layer opacity | `md.comp.date-picker.docked.menu.list-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

#### Docked — Pressed / Icon

| Name                           | Token                                                       | Value                             |
| ------------------------------ | ----------------------------------------------------------- | --------------------------------- |
| Menu button pressed icon color | `md.comp.date-picker.docked.menu-button.pressed.icon.color` | `md.sys.color.on-surface-variant` |

#### Docked — Pressed / Leading icon

| Name                                               | Token                                                                           | Value                             |
| -------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------- |
| Menu list item selected pressed leading icon color | `md.comp.date-picker.docked.menu.list-item.selected.pressed.leading-icon.color` | `md.sys.color.on-surface-variant` |

---

### Modal date picker color

![12 color roles of a modal date picker day selection view.](https://lh3.googleusercontent.com/KtGAhuY4gAAooTlzNro5r28R-JqaNn-GIuLF784YUnV4r9xuN73HBLIGoK2ngiHQTkEBH3-Pv5i_KhcGI86MpUTOFXtNXKl44_CULQTkD_Acjw=s0)

1. On surface
2. On surface variant
3. Surface container high
4. On surface variant
5. On surface variant
6. On surface
7. Primary
8. On surface
9. Primary
10. Primary
11. On surface variant
12. Outline variant

![Diagram of 9 color roles of a modal date picker year selection view.](https://lh3.googleusercontent.com/z3NPv_bl1zhqrcVdxulXJmeLSWmbTfWTkIMYyQCoeXa4HbUQUuV3mm1rtgBDFRBxgZ__Q-YBLJ__9ffRDqk8d2anxULFonL4YcxS2u7fI12j=s0)

1. On surface
2. On surface variant
3. Surface container high
4. On surface variant
5. On surface variant
6. Primary
7. Primary
8. Outline variant
9. On surface variant

![Diagram of 14 color roles of a modal date picker when selecting a range of dates.](https://lh3.googleusercontent.com/KEpszqYIa1lMPVecD3eDqQDiYPTnl02lIWnD6vRP4EuLg1B1bCy9pvIWH567lYGjxPeOeC_Hdvm_CxRF8HXfi6WXlnrvKp3puWzqZxeq1g=s0)

1. On surface
2. On surface variant
3. On surface variant
4. Surface container high
5. Primary
6. On surface variant
7. On surface
8. Primary
9. On surface
10. Secondary container
11. On secondary container
12. Outline variant
13. On surface variant
14. Primary

#### Modal — Enabled / Container

| Name                                              | Token                                                                         | Value                                 |
| ------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------- |
| Container color                                   | `md.comp.date-picker.modal.container.color`                                   | `md.sys.color.surface-container-high` |
| Container elevation                               | `md.comp.date-picker.modal.container.elevation`                               | `md.sys.elevation.level3`             |
| Container surface tint layer color                | `md.comp.date-picker.modal.container.surface-tint-layer.color`                | `md.sys.color.surface-tint`           |
| Container shape                                   | `md.comp.date-picker.modal.container.shape`                                   | `md.sys.shape.corner.extra-large`     |
| Range selection container elevation               | `md.comp.date-picker.modal.range-selection.container.elevation`               | `md.sys.elevation.level0`             |
| Range selection container shape                   | `md.comp.date-picker.modal.range-selection.container.shape`                   | `md.sys.shape.corner.none`            |
| Date container shape                              | `md.comp.date-picker.modal.date.container.shape`                              | `md.sys.shape.corner.full`            |
| Date today container outline color                | `md.comp.date-picker.modal.date.today.container.outline.color`                | `md.sys.color.primary`                |
| Date today container outline width                | `md.comp.date-picker.modal.date.today.container.outline.width`                | 1dp                                   |
| Date selected container color                     | `md.comp.date-picker.modal.date.selected.container.color`                     | `md.sys.color.primary`                |
| Range selection active indicator container color  | `md.comp.date-picker.modal.range-selection.active-indicator.container.color`  | `md.sys.color.secondary-container`    |
| Range selection active indicator container shape  | `md.comp.date-picker.modal.range-selection.active-indicator.container.shape`  | `md.sys.shape.corner.full`            |
| Year selection year selected container color      | `md.comp.date-picker.modal.year-selection.year.selected.container.color`      | `md.sys.color.primary`                |
| Container width                                   | `md.comp.date-picker.modal.container.width`                                   | 360dp                                 |
| Container height                                  | `md.comp.date-picker.modal.container.height`                                  | 524dp                                 |
| Header container width                            | `md.comp.date-picker.modal.header.container.width`                            | 360dp                                 |
| Header container height                           | `md.comp.date-picker.modal.header.container.height`                           | 120dp                                 |
| Range selection header container height           | `md.comp.date-picker.modal.range-selection.header.container.height`           | 128dp                                 |
| Date container width                              | `md.comp.date-picker.modal.date.container.width`                              | 40dp                                  |
| Date container height                             | `md.comp.date-picker.modal.date.container.height`                             | 40dp                                  |
| Year selection year container width               | `md.comp.date-picker.modal.year-selection.year.container.width`               | 72dp                                  |
| Year selection year container height              | `md.comp.date-picker.modal.year-selection.year.container.height`              | 36dp                                  |
| Range selection active indicator container height | `md.comp.date-picker.modal.range-selection.active-indicator.container.height` | 40dp                                  |

#### Modal — Enabled / Label text

| Name                                            | Token                                                                       | Value                                     |
| ----------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| Weekdays label text color                       | `md.comp.date-picker.modal.weekdays.label-text.color`                       | `md.sys.color.on-surface`                 |
| Weekdays label text font                        | `md.comp.date-picker.modal.weekdays.label-text.font`                        | `md.sys.typescale.body-large.font`        |
| Weekdays label text line height                 | `md.comp.date-picker.modal.weekdays.label-text.line-height`                 | `md.sys.typescale.body-large.line-height` |
| Weekdays label text size                        | `md.comp.date-picker.modal.weekdays.label-text.size`                        | `md.sys.typescale.body-large.size`        |
| Weekdays label text weight                      | `md.comp.date-picker.modal.weekdays.label-text.weight`                      | `md.sys.typescale.body-large.weight`      |
| Weekdays label text tracking                    | `md.comp.date-picker.modal.weekdays.label-text.tracking`                    | `md.sys.typescale.body-large.tracking`    |
| Weekdays label text type style                  | `md.comp.date-picker.modal.weekdays.label-text.type`                        | Aa                                        |
| Date label text font                            | `md.comp.date-picker.modal.date.label-text.font`                            | `md.sys.typescale.body-large.font`        |
| Date label text line height                     | `md.comp.date-picker.modal.date.label-text.line-height`                     | `md.sys.typescale.body-large.line-height` |
| Date label text size                            | `md.comp.date-picker.modal.date.label-text.size`                            | `md.sys.typescale.body-large.size`        |
| Date label text weight                          | `md.comp.date-picker.modal.date.label-text.weight`                          | `md.sys.typescale.body-large.weight`      |
| Date label text tracking                        | `md.comp.date-picker.modal.date.label-text.tracking`                        | `md.sys.typescale.body-large.tracking`    |
| Date label text type style                      | `md.comp.date-picker.modal.date.label-text.type`                            | Aa                                        |
| Date unselected label text color                | `md.comp.date-picker.modal.date.unselected.label-text.color`                | `md.sys.color.on-surface`                 |
| Date today label text color                     | `md.comp.date-picker.modal.date.today.label-text.color`                     | `md.sys.color.primary`                    |
| Date selected label text color                  | `md.comp.date-picker.modal.date.selected.label-text.color`                  | `md.sys.color.on-primary`                 |
| Range selection date in range label text color  | `md.comp.date-picker.modal.range-selection.date.in-range.label-text.color`  | `md.sys.color.on-secondary-container`     |
| Year selection year label text font             | `md.comp.date-picker.modal.year-selection.year.label-text.font`             | `md.sys.typescale.body-large.font`        |
| Year selection year label text line height      | `md.comp.date-picker.modal.year-selection.year.label-text.line-height`      | `md.sys.typescale.body-large.line-height` |
| Year selection year label text size             | `md.comp.date-picker.modal.year-selection.year.label-text.size`             | `md.sys.typescale.body-large.size`        |
| Year selection year label text weight           | `md.comp.date-picker.modal.year-selection.year.label-text.weight`           | `md.sys.typescale.body-large.weight`      |
| Year selection year label text tracking         | `md.comp.date-picker.modal.year-selection.year.label-text.tracking`         | `md.sys.typescale.body-large.tracking`    |
| Year selection year label text type style       | `md.comp.date-picker.modal.year-selection.year.label-text.type`             | Aa                                        |
| Year selection year selected label text color   | `md.comp.date-picker.modal.year-selection.year.selected.label-text.color`   | `md.sys.color.on-primary`                 |
| Year selection year unselected label text color | `md.comp.date-picker.modal.year-selection.year.unselected.label-text.color` | `md.sys.color.on-surface-variant`         |

#### Modal — Enabled / Subhead

| Name                                      | Token                                                                 | Value                                      |
| ----------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------ |
| Range selection month subhead color       | `md.comp.date-picker.modal.range-selection.month.subhead.color`       | `md.sys.color.on-surface-variant`          |
| Range selection month subhead font        | `md.comp.date-picker.modal.range-selection.month.subhead.font`        | `md.sys.typescale.title-small.font`        |
| Range selection month subhead line height | `md.comp.date-picker.modal.range-selection.month.subhead.line-height` | `md.sys.typescale.title-small.line-height` |
| Range selection month subhead size        | `md.comp.date-picker.modal.range-selection.month.subhead.size`        | `md.sys.typescale.title-small.size`        |
| Range selection month subhead weight      | `md.comp.date-picker.modal.range-selection.month.subhead.weight`      | `md.sys.typescale.title-small.weight`      |
| Range selection month subhead tracking    | `md.comp.date-picker.modal.range-selection.month.subhead.tracking`    | `md.sys.typescale.title-small.tracking`    |
| Range selection month subhead type style  | `md.comp.date-picker.modal.range-selection.month.subhead.type`        | Aa                                         |

#### Modal — Enabled / Headline

| Name                                        | Token                                                                   | Value                                         |
| ------------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------- |
| Header headline color                       | `md.comp.date-picker.modal.header.headline.color`                       | `md.sys.color.on-surface-variant`             |
| Header headline font                        | `md.comp.date-picker.modal.header.headline.font`                        | `md.sys.typescale.headline-large.font`        |
| Header headline line height                 | `md.comp.date-picker.modal.header.headline.line-height`                 | `md.sys.typescale.headline-large.line-height` |
| Header headline size                        | `md.comp.date-picker.modal.header.headline.size`                        | `md.sys.typescale.headline-large.size`        |
| Header headline weight                      | `md.comp.date-picker.modal.header.headline.weight`                      | `md.sys.typescale.headline-large.weight`      |
| Header headline tracking                    | `md.comp.date-picker.modal.header.headline.tracking`                    | `md.sys.typescale.headline-large.tracking`    |
| Header headline type style                  | `md.comp.date-picker.modal.header.headline.type`                        | Aa                                            |
| Range selection header headline font        | `md.comp.date-picker.modal.range-selection.header.headline.font`        | `md.sys.typescale.title-large.font`           |
| Range selection header headline line height | `md.comp.date-picker.modal.range-selection.header.headline.line-height` | `md.sys.typescale.title-large.line-height`    |
| Range selection header headline size        | `md.comp.date-picker.modal.range-selection.header.headline.size`        | `md.sys.typescale.title-large.size`           |
| Range selection header headline weight      | `md.comp.date-picker.modal.range-selection.header.headline.weight`      | `md.sys.typescale.title-large.weight`         |
| Range selection header headline tracking    | `md.comp.date-picker.modal.range-selection.header.headline.tracking`    | `md.sys.typescale.title-large.tracking`       |
| Range selection header headline type style  | `md.comp.date-picker.modal.range-selection.header.headline.type`        | Aa                                            |

#### Modal — Enabled / Supporting text

| Name                              | Token                                                   | Value |
| --------------------------------- | ------------------------------------------------------- | ----- |
| Header supporting text type style | `md.comp.date-picker.modal.header.supporting-text.type` | Aa    |

#### Modal — Enabled / State layer

| Name                                   | Token                                                              | Value                      |
| -------------------------------------- | ------------------------------------------------------------------ | -------------------------- |
| Date state layer shape                 | `md.comp.date-picker.modal.date.state-layer.shape`                 | `md.sys.shape.corner.full` |
| Year selection year state layer shape  | `md.comp.date-picker.modal.year-selection.year.state-layer.shape`  | `md.sys.shape.corner.full` |
| Date state layer width                 | `md.comp.date-picker.modal.date.state-layer.width`                 | 40dp                       |
| Date state layer height                | `md.comp.date-picker.modal.date.state-layer.height`                | 40dp                       |
| Year selection year state layer width  | `md.comp.date-picker.modal.year-selection.year.state-layer.width`  | 72dp                       |
| Year selection year state layer height | `md.comp.date-picker.modal.year-selection.year.state-layer.height` | 36dp                       |

#### Modal — Enabled / Header

| Name                               | Token                                                          | Value                                      |
| ---------------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| Header supporting text color       | `md.comp.date-picker.modal.header.supporting-text.color`       | `md.sys.color.on-surface-variant`          |
| Header supporting text font        | `md.comp.date-picker.modal.header.supporting-text.font`        | `md.sys.typescale.label-large.font`        |
| Header supporting text line height | `md.comp.date-picker.modal.header.supporting-text.line-height` | `md.sys.typescale.label-large.line-height` |
| Header supporting text size        | `md.comp.date-picker.modal.header.supporting-text.size`        | `md.sys.typescale.label-large.size`        |
| Header supporting text weight      | `md.comp.date-picker.modal.header.supporting-text.weight`      | `md.sys.typescale.label-large.weight`      |
| Header supporting text tracking    | `md.comp.date-picker.modal.header.supporting-text.tracking`    | `md.sys.typescale.label-large.tracking`    |

#### Modal — Hovered / State layer

| Name                                                    | Token                                                                               | Value                                    |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------- |
| Date unselected hover state layer color                 | `md.comp.date-picker.modal.date.unselected.hover.state-layer.color`                 | `md.sys.color.on-surface-variant`        |
| Date selected hover state layer color                   | `md.comp.date-picker.modal.date.selected.hover.state-layer.color`                   | `md.sys.color.on-primary`                |
| Date today hover state layer color                      | `md.comp.date-picker.modal.date.today.hover.state-layer.color`                      | `md.sys.color.primary`                   |
| Date hover state layer opacity                          | `md.comp.date-picker.modal.date.hover.state-layer.opacity`                          | `md.sys.state.hover.state-layer-opacity` |
| Range selection date in range hover state layer color   | `md.comp.date-picker.modal.range-selection.date.in-range.hover.state-layer.color`   | `md.sys.color.on-primary-container`      |
| Range selection date in range hover state layer opacity | `md.comp.date-picker.modal.range-selection.date.in-range.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Year selection year unselected hover state layer color  | `md.comp.date-picker.modal.year-selection.year.unselected.hover.state-layer.color`  | `md.sys.color.on-surface-variant`        |
| Year selection year selected hover state layer color    | `md.comp.date-picker.modal.year-selection.year.selected.hover.state-layer.color`    | `md.sys.color.on-primary`                |
| Year selection year hover state layer opacity           | `md.comp.date-picker.modal.year-selection.year.hover.state-layer.opacity`           | `md.sys.state.hover.state-layer-opacity` |

#### Modal — Focused / State layer

| Name                                                    | Token                                                                               | Value                                    |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------- |
| Date unselected focus state layer color                 | `md.comp.date-picker.modal.date.unselected.focus.state-layer.color`                 | `md.sys.color.on-surface-variant`        |
| Date selected focus state layer color                   | `md.comp.date-picker.modal.date.selected.focus.state-layer.color`                   | `md.sys.color.on-primary`                |
| Date today focus state layer color                      | `md.comp.date-picker.modal.date.today.focus.state-layer.color`                      | `md.sys.color.primary`                   |
| Date focus state layer opacity                          | `md.comp.date-picker.modal.date.focus.state-layer.opacity`                          | `md.sys.state.focus.state-layer-opacity` |
| Range selection date in range focus state layer color   | `md.comp.date-picker.modal.range-selection.date.in-range.focus.state-layer.color`   | `md.sys.color.on-primary-container`      |
| Range selection date in range focus state layer opacity | `md.comp.date-picker.modal.range-selection.date.in-range.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Year selection year unselected focus state layer color  | `md.comp.date-picker.modal.year-selection.year.unselected.focus.state-layer.color`  | `md.sys.color.on-surface-variant`        |
| Year selection year selected focus state layer color    | `md.comp.date-picker.modal.year-selection.year.selected.focus.state-layer.color`    | `md.sys.color.on-primary`                |
| Year selection year focus state layer opacity           | `md.comp.date-picker.modal.year-selection.year.focus.state-layer.opacity`           | `md.sys.state.focus.state-layer-opacity` |

#### Modal — Pressed / State layer

| Name                                                      | Token                                                                                 | Value                                      |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------ |
| Date unselected pressed state layer color                 | `md.comp.date-picker.modal.date.unselected.pressed.state-layer.color`                 | `md.sys.color.on-surface-variant`          |
| Date selected pressed state layer color                   | `md.comp.date-picker.modal.date.selected.pressed.state-layer.color`                   | `md.sys.color.on-primary`                  |
| Date today pressed state layer color                      | `md.comp.date-picker.modal.date.today.pressed.state-layer.color`                      | `md.sys.color.primary`                     |
| Date pressed state layer opacity                          | `md.comp.date-picker.modal.date.pressed.state-layer.opacity`                          | `md.sys.state.pressed.state-layer-opacity` |
| Range selection date in range pressed state layer color   | `md.comp.date-picker.modal.range-selection.date.in-range.pressed.state-layer.color`   | `md.sys.color.on-primary-container`        |
| Range selection date in range pressed state layer opacity | `md.comp.date-picker.modal.range-selection.date.in-range.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Year selection year unselected pressed state layer color  | `md.comp.date-picker.modal.year-selection.year.unselected.pressed.state-layer.color`  | `md.sys.color.on-surface-variant`          |
| Year selection year selected pressed state layer color    | `md.comp.date-picker.modal.year-selection.year.selected.pressed.state-layer.color`    | `md.sys.color.on-primary`                  |
| Year selection year pressed state layer opacity           | `md.comp.date-picker.modal.year-selection.year.pressed.state-layer.opacity`           | `md.sys.state.pressed.state-layer-opacity` |

---

### Modal date input color

![Diagram indicating the 7 color roles of a modal date input.](https://lh3.googleusercontent.com/iefNrcoiuJ0ugSFq7Sr-IDU2JcAbmJPJqObTZJRuoEd3MIKOdAZZuy2PBx-hnXJEYrmXuN-BwMsIVLtdS2gzzaZrN9L_kfy-PyUDrocRjsNoYw=s0)

1. On surface
2. On surface variant
3. Surface container high
4. On surface variant
5. Primary
6. Primary
7. Outline variant

#### Modal input — Enabled / Container

| Name                               | Token                                                         | Value                                 |
| ---------------------------------- | ------------------------------------------------------------- | ------------------------------------- |
| Container color                    | `md.comp.date-input.modal.container.color`                    | `md.sys.color.surface-container-high` |
| Container elevation                | `md.comp.date-input.modal.container.elevation`                | `md.sys.elevation.level3`             |
| Container surface tint layer color | `md.comp.date-input.modal.container.surface-tint-layer.color` | `md.sys.color.surface-tint`           |
| Container shape                    | `md.comp.date-input.modal.container.shape`                    | `md.sys.shape.corner.extra-large`     |
| Container width                    | `md.comp.date-input.modal.container.width`                    | 328dp                                 |
| Container height                   | `md.comp.date-input.modal.container.height`                   | 512dp                                 |
| Header container width             | `md.comp.date-input.modal.header.container.width`             | 328dp                                 |
| Header container height            | `md.comp.date-input.modal.header.container.height`            | 120dp                                 |

#### Modal input — Enabled / Headline

| Name                        | Token                                                  | Value                                         |
| --------------------------- | ------------------------------------------------------ | --------------------------------------------- |
| Header headline color       | `md.comp.date-input.modal.header.headline.color`       | `md.sys.color.on-surface-variant`             |
| Header headline font        | `md.comp.date-input.modal.header.headline.font`        | `md.sys.typescale.headline-large.font`        |
| Header headline line height | `md.comp.date-input.modal.header.headline.line-height` | `md.sys.typescale.headline-large.line-height` |
| Header headline size        | `md.comp.date-input.modal.header.headline.size`        | `md.sys.typescale.headline-large.size`        |
| Header headline weight      | `md.comp.date-input.modal.header.headline.weight`      | `md.sys.typescale.headline-large.weight`      |
| Header headline tracking    | `md.comp.date-input.modal.header.headline.tracking`    | `md.sys.typescale.headline-large.tracking`    |
| Header headline type style  | `md.comp.date-input.modal.header.headline.type`        | Aa                                            |

#### Modal input — Enabled / Supporting text

| Name                               | Token                                                         | Value                                      |
| ---------------------------------- | ------------------------------------------------------------- | ------------------------------------------ |
| Header supporting text color       | `md.comp.date-input.modal.header.supporting-text.color`       | `md.sys.color.on-surface-variant`          |
| Header supporting text font        | `md.comp.date-input.modal.header.supporting-text.font`        | `md.sys.typescale.label-large.font`        |
| Header supporting text line height | `md.comp.date-input.modal.header.supporting-text.line-height` | `md.sys.typescale.label-large.line-height` |
| Header supporting text size        | `md.comp.date-input.modal.header.supporting-text.size`        | `md.sys.typescale.label-large.size`        |
| Header supporting text weight      | `md.comp.date-input.modal.header.supporting-text.weight`      | `md.sys.typescale.label-large.weight`      |
| Header supporting text tracking    | `md.comp.date-input.modal.header.supporting-text.tracking`    | `md.sys.typescale.label-large.tracking`    |
| Header supporting text type style  | `md.comp.date-input.modal.header.supporting-text.type`        | Aa                                         |

---

## Interaction States

![Diagram of 5 various states for date and year elements within date pickers.](https://lh3.googleusercontent.com/6XspP-OQE7aCNEQ93nEte0mKmgkyvY2j9jfFYbQHtiUK-tfwKvK1ncuufXe5RMFHSrGkqZSvzbPTExmW-sakoDgzKxiN0ebx-ZlcVaS_afDe=s0)

1. **Default (enabled)** — resting state with no interaction
2. **Disabled** — non-interactive, reduced opacity
3. **Hovered** — pointer is over the element
4. **Focused** — element has keyboard focus
5. **Pressed (ripple)** — element is being actively pressed

---

## Accessibility

### Use cases

People should be able to:

- Enter dates manually by typing text, without using the picker
- Use multiple input methods, making the component accessible to those using assistive technology

On the docked date picker, the text field can be used for direct input. On the modal date picker, the date input option should be available via the edit icon.

### Interaction and style

The edit icon indicates the ability to switch to the modal date input. All interactive targets meet Material's 48x48dp minimum touch target requirement.

![Date picker with the edit icon focused.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tcq2g-01.png?alt=media&token=c53d3a22-1ce5-4bfb-bf36-77548890bd4a=s0)

The edit icon indicates the ability to switch to the modal date input

![Touch target used to select September 17 to 23 on a date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tdrn3-02.png?alt=media&token=2770d845-5def-4bc1-a7a9-22b8d83f43ef=s0)

Touch targets are 48x48dp

### Date entry methods

The date entry component offers two ways to enter a date:

- Direct text entry into a text field
- Through the date picker calendar

The calendar icon is the exclusive entry point for the date picker. This improves efficiency for screen reader and keyboard users by making the calendar interaction optional and reducing the number of key presses needed. Each input is a separate tab stop, improving discoverability.

![Text input field next to a date picker icon provides a choice of how to enter the date.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwhl9jct-3.png?alt=media&token=ec79be27-46b7-4560-8c67-2ff253e3b94d=s0)

Entering a date either through direct text entry or the date picker

### Accessible date input

Format the date automatically only after the user hits Enter or navigates out of the text field. Do not use input masks (auto-inserting slashes or special characters while the user types), as this causes confusion for screen reader users by altering what they typed mid-entry.

To reduce errors, accept a range of formats including dashes, spaces, slashes, dots, and a leading zero before single-digit month/day values. This is especially helpful for assistive technology users who may be more prone to errors with complex inputs.

![Numeric entry 08172323 automatically formatted to 08/17/2023.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tjcxl-04.png?alt=media&token=5fa49d5e-5f45-4258-b90e-390d8e9aa4ed=s0)

The text field logic adapts to the user's actual input format, applying correct formatting after entry is complete

### Optional Clear button

If not needed for a given use case, remove the **Clear** button from the screen to reduce the number of tab stops for keyboard users.

![Optional clear button on lower left corner of a date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tl1kf-05.png?alt=media&token=2c6fd134-3e07-439b-a93f-1ae9cec2a1bf=s0)

Remove non-critical actions to reduce the number of tab stops for keyboard users

### Keyboard shortcuts with tooltips

Keyboard shortcuts should be readily discoverable for keyboard and screen reader users by including the shortcut key in the tooltip. The shortcut should also be included in the hint description to be read aloud by screen readers. When a navigation button receives focus, its tooltip displays the associated shortcut.

![Shift + Page up is the keyboard shortcut to go to the previous year on a date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tmhkf-06.png?alt=media&token=78a780bd-c455-4e42-a20d-fcb0ef5b1e3f=s0)

Keyboard tooltip example for date picker

### Truncated labels

Truncating labels is not ideal, but tooltips allow full text to be shown on hover or keyboard focus. Day-of-week labels are non-interactive and therefore not focusable via keyboard, so their tooltips appear only on pointer hover. The date picker relies on the conventionality of these abbreviations for assistive technology users.

![A pointer hover over the "T" day on a date picker produces the tooltip "Tuesday."](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tnt2t-07.png?alt=media&token=af48202f-5abc-49e2-8988-43052d0c84e0=s0)

Days of the week are not navigable via keyboard; the tooltip is shown only on pointer hover

### Color contrast

Dates should have a contrast ratio of at least 4.5:1 between link text colors and the background.

![A date picker's label text passes the color contrast minimum of 4.5:1.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tp1fs-08.png?alt=media&token=f5cf6a07-9a3b-400a-9cc6-7183fdc69832=s0)

Dates pass the 4.5:1 contrast minimum

### Keyboard navigation

| Keys                 | Actions                                          |
| -------------------- | ------------------------------------------------ |
| Enter/return         | Closes the calendar and saves the selected date  |
| Page up/down         | Move to the same date on next/previous month     |
| Home/End             | Move to the first day of the month               |
| Shift + Page up/down | Moves to the same date in the next/previous year |
| Shift + M            | Moves to the month list dropdown                 |
| Shift + Y            | Moves to the year list dropdown                  |

### Labeling elements

The text field's accessibility label should clearly state the purpose of the input (e.g. "event date" or "reservation date") and should match the placeholder text when the field is empty. The helper text below the text field should specify the date format (e.g. MM/DD/YYYY or YYYY/MM/DD) and act as a description for the text field. The default helper text is "MM/DD/YYYY" but can be customized.

![Text field accessibility labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tqs6i-09.png?alt=media&token=b7d6086d-5892-421e-96ed-a8da8de62ec7=s0)

The accessibility label clearly states the kind of input as an event date

| Element                        | A11y label    | Role   |
| ------------------------------ | ------------- | ------ |
| Previous / next month and year | "{label}"     | Button |
| Month and year dropdowns       | "{label}"     | Button |
| Days of the week               | Column header |        |
| Month grid                     | Grid          |        |

### Screen reader verbalizations

Labels enumerate the complete date so screen reader users hear the full context (e.g. "Monday, August 17") rather than just the number.

![Current date label providing day, month, and year for screen reader accessibility.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tw17z-10.png?alt=media&token=43c1af13-8f5b-439f-b238-443d703699d5=s0)

Screen readers will state the full day, month, date, and year instead of just the number 17

---

## M2 to M3 Differences

- **Typography and spacing:** Titles and labels are larger with increased spacing to accommodate the 48dp minimum touch target size.
- **Color:** New color mappings with full compatibility with dynamic color.
- **Variant renaming:** The three variants have been renamed to remove device-specific language. The former "desktop date picker" is now **docked date picker**. The former "mobile date picker" and "date input" are now **modal date picker** and **modal date input** to reinforce that the user must take an action.

![Old version of a date picker with a white background and shadows.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fle4qmou9-1P-datepicker_whatsnew_1.png?alt=media&token=771d7d4e-4ed2-4492-915e-9b82218f4848=s0)

M2: Date pickers had a drop shadow and different color mappings

![New version of date picker with a colorful background, rounded corners, and no shadows.](https://lh3.googleusercontent.com/HWA4owUgCVU0oIuTW-9x1wyLuHIA6m_aaks97Ih_BEz-wvMRKQqmb8-FsElnU5Jxck9-Hi-br9L52IDZBwYY22tVVJyY8NtOKnsOlqxB8gJdpQ=s0)

M3: Date pickers have larger typography, no shadow, and new color mappings compatible with dynamic color
