---
url: https://m3.material.io/components/date-pickers/guidelines
lastmod: 2026-02-05
crawled_at: 2026-03-10T13:23:00.000Z
category: components
section: date-pickers
page_type: guidelines
status: complete
---

# Date pickers

Date pickers let people select a date, or a range of dates

![A date picker opens in a form UI.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5o0x3j-01.png?alt=media&token=2fde5553-057a-47ca-9e87-19b956f2ad78=s0)

_Docked date picker on desktop_

## Usage

Date pickers let people select a date or range of dates. They should be suitable for the context in which they appear.

Date pickers can be embedded into:

1. Dialogs on compact [window sizes](https://m3.material.io/m3/pages/applying-layout/window-size-classes#2bb70e22-d09b-4b73-9c9f-9ef60311ccc8) like mobile
2. Text field drop-downs on medium and expanded window sizes like tablet and desktop

![2 date picker variations: a dialog on mobile and a dropdown within a text field on desktop.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sha07-02.png?alt=media&token=4d9b7796-166a-4e83-8a17-abf61a83c6ae=s0)

- Date picker dialog on mobile
- Date picker text field dropdown on desktop

There are three variants of date pickers:

1. Docked date picker
2. Modal date picker
3. Modal date input

![A docked date picker component.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5si8zx-03.png?alt=media&token=84db16d1-ec55-415e-b2d1-76214fa1336a=s0)

_1. Docked date picker_

![A modal date picker component.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sj3v5-04.png?alt=media&token=9c5f5c53-5d9c-4fc0-98ec-417a001994a1=s0)

_2. Modal date picker_

![A modal date input component.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme1yy2eb-05.png?alt=media&token=eb5f6437-120f-4436-8382-78df0df143f8=s0)

_3. Modal date input_

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

### Modal date input

![7 elements of a modal date input.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sng56-10.png?alt=media&token=5d099ed8-e13b-4f7d-8148-7564dd7c636e=s0)

1. Headline
2. Supporting text
3. Container
4. Icon button
5. Date input
6. Text buttons
7. Divider

### Full-screen date picker

![14 elements of a full-screen date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5srxxg-11.png?alt=media&token=342f4eea-5c39-4b69-b4f5-32d5ae50042b=s0)

1. Headline
2. Supporting text
3. Icon button
4. Container
5. Text button
6. Icon button
7. Divider
8. Day of week labels
9. Today's date
10. Selected date range
11. Unselected date
12. Text buttons
13. Selected date range start date
14. Month label

## Docked date picker

### Usage

Docked date pickers allow the selection of a specific date and year. The docked date picker displays a date input field by default, and a dropdown calendar appears when the user taps on the input field. Either form of date entry can be interacted with.

Docked date pickers are ideal for navigating dates in both the near future or past and the distant future or past, as they provide multiple ways to select dates.

![Docked date picker on a desktop screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwhhvs4s-12.png?alt=media&token=b3de10d4-789a-4203-b950-97a19de11e56=s0)

_Docked date picker on desktop_

### Behavior

Dates can be added by using a keyboard or by navigating the calendar UI; both options are immediately available when the docked date picker is accessed.

![Docked date picker with a text field and the UI picker showing the selected date.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5swv36-13.png?alt=media&token=e9e8a585-7d28-4714-b57c-8ad56ad35932=s0)

_Docked date picker_

<!-- Video: Docked date pickers adjust size dynamically -->

_Docked date pickers adjust size dynamically_

<!-- Video: The year selection menu replaces the calendar view -->

_The year selection menu replaces the calendar view_

### Month selection

Month selection can be navigated with the corresponding back and next arrows or by tapping the dropdown menu.

![Docked date picker with a list of months May through September. August is selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sxs60-16.png?alt=media&token=8e25c888-0ff4-41b3-bc49-bcb15ee42958=s0)

_Docked date picker month selection_

### Year selection

Year selection can be navigated with the corresponding back and next arrows or by tapping the dropdown menu.

![Docked date picker with a list of years 2025 to 2029. 2025 is selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t0t93-17.png?alt=media&token=62987e8d-906f-4598-bc57-2b24c75d6f99=s0)

_Docked date picker year selection_

## Modal date picker

### Behavior

Modal date pickers navigate across dates in several ways:

- To navigate across months, swipe horizontally
- To navigate across years, scroll vertically
- To access the year picker, tap the year

Don't use a modal date picker to prompt for dates in the distant past or future, such as a date of birth. In these cases, use a modal input picker or a docked date picker instead.

<!-- Video: To navigate across months, swipe horizontally -->

_To navigate across months, swipe horizontally_

<!-- Video: To navigate across years, tap the year picker and scroll vertically -->

_To navigate across years, tap the year picker and scroll vertically_

### Date range selection

Date range selection provides a start and end date. Common use cases include:

- Booking a flight
- Reserving a hotel

Modal date pickers navigate across date ranges in several ways:

- To select a range of dates, tap the start and end dates on the calendar
- To navigate across months, scroll vertically

<!-- Video: Modal date range picker -->

_Modal date range picker_

<!-- Video: Modal date range picker with vertical scroll -->

_Modal date range picker with vertical scroll_

## Modal date input

### Usage

Modal date inputs allow the manual entry of dates using the numbers on a keyboard. People can input a date or a range of dates in a dialog.

![A modal date input component.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t2vbx-22.png?alt=media&token=c323b202-962d-44d8-b4b5-fd7e3c3cf2f6=s0)

_Modal date with manual input_

![A modal date input component showing a day in 1979, which would be difficult to choose using UI.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t44vn-23-do.png?alt=media&token=ef86d677-f014-4215-877c-dc501c32eae2=s0)

_Do: For dates that don't require a calendar view, the modal date input can be the default view_

![A modal date input with hint text for entering the date.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t675k-24-do.png?alt=media&token=335d8130-c5c5-4080-a5c4-ba8454108840=s0)

_Do: Alternatively, a text field with appropriate hint text can prompt for dates, such as in a form_

### Behavior

You can swap between the modal date picker and modal date input using the edit or calendar icon.

<!-- Video: Switching from a modal date picker to a mobile date input for selecting ranges -->

_Switching from a modal date picker to a mobile date input for selecting ranges_

<!-- Video: Switching from a modal date picker to a modal date input for selecting a single date -->

_Switching from a modal date picker to a modal date input for selecting a single date_

### Compact window size

On compact [window sizes](https://m3.material.io/m3/pages/applying-layout/window-size-classes#2bb70e22-d09b-4b73-9c9f-9ef60311ccc8), such as mobile, a full-screen modal date picker is recommended to increase readability and touch target size. It can cover the entire screen.

![A full-screen view of modal date picker on a mobile device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t84q0-27.png?alt=media&token=05e79f57-4608-4f32-96b6-3731d33645ee=s0)

_A full-screen modal date picker on mobile_

### Medium and expanded window sizes

The docked date picker works best for medium and expanded window sizes. It displays a date input field by default, and a dropdown calendar appears when a person taps on the input field. A person can interact with either form of date entry.

Docked date pickers are ideal for navigating dates in both the near future or past, and in the distant future or past, as they provide multiple ways to select dates.

![A docked date picker displaying a full calendar view on a large screen device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t9e1o-28.png?alt=media&token=b002f7a4-2450-47c1-bba0-3475b334d19b=s0)

_A docked date picker with a full calendar view is best used on larger devices_

### Selection

Selection is indicated through color, drawing visual attention. In date ranges, start and end dates are selected, while dates in-between appear connected with a subtle highlight.

<!-- Video: Differences between the selected date range (August 17-23) and today's date (August 5) are shown through color and fill -->

_Differences between the selected date range (August 17-23) and today's date (August 5) are shown through color and fill_

### Appearing and disappearing

Like other kinds of dialogs, modal date pickers use an enter and exit transition pattern to appear on the screen.

To exit a date picker, the input can either be confirmed (**OK**) or dismissed (**Cancel**). Interacting outside of the dialog will also dismiss the time picker. Unless one of these actions is taken, a time picker will continue to retain focus. Mobile full-screen pickers also have an additional close affordance (x) icon button and **Save** confirmation.

Docked date pickers appear just below the input field.

<!-- Video: Modal date pickers can be dismissed through interacting with content outside the dialog, or with the action buttons in the lower right -->

_Modal date pickers can be dismissed through interacting with content outside the dialog, or with the action buttons in the lower right_

<!-- Video: Interacting with the input for a docked date picker makes the calendar view appear below -->

_Interacting with the input for a docked date picker makes the calendar view appear below_

### Responsive layout

The sizing of the docked and modal date picker components don't scale responsively to different window sizes.

![Docked date picker enlarged on a large screen responsively.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tb2d5-32.png?alt=media&token=ab567470-5b68-45ed-a913-8c80288f7894=s0)

_Don't: Don't scale the date picker responsively to a larger size_
