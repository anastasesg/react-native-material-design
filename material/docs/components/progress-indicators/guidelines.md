---
url: https://m3.material.io/components/progress-indicators/guidelines
lastmod: '2026-02-27'
crawled_at: '2026-03-09T15:30:00.000Z'
category: components
section: progress-indicators
page_type: guidelines
status: complete
---

# Progress indicators

<!-- Video: Primary colored horizontal line fills a contrasting track from left to right and reaches the end when the app is loaded. -->

_Progress indicators communicate the status of an ongoing process_

## Usage

Use progress indicators to show the status of ongoing processes, such as loading an app, submitting a form, or saving updates.

When multiple items are loading, use a single progress indicator to show progress for the group. Don't add progress indicators to every activity.

<!-- Video: One progress indicator showing the loading progress for a page of podcasts. -->

_**Do.** Indicate overall progress of a group of items_

<!-- Video: Two progress indicators showing the loading progress of two podcasts. -->

_**Don't.** Don't show the progress of each activity in a group_

Choose a loading or progress indicator that corresponds to the expected wait time and kind of process.

If the wait is very long, consider allowing people to navigate away from the page while the process finishes up.

| Expected wait time           | Recommendation     |
| ---------------------------- | ------------------ |
| Instant (under 200ms)        | No indicator       |
| Short (between 200ms and 5s) | Loading indicator  |
| Long (Over 5s)               | Progress indicator |

<!-- Video: Screen without latency without progress indicator. -->

_**Instant (under 200ms):** Display the content immediately_

<!-- Video: Screen with slight lag with loading indicator. -->

_**Short (between 200ms and 5s):** Use a loading indicator_

<!-- Video: Screen with long lag and progress indicator. -->

_**Long (over 5s):** Use a progress indicator_

There are two variants of progress indicators:

- Linear
- Circular

**Linear** indicators are best when placed on the edge of a container.

**Circular** indicators are best when centered in an element.

A process should be represented by the same variant of progress indicator throughout the product. For example, if refreshing uses a circular indicator in one place, it should use circular indicators everywhere.

![1. A primary colored horizontal line fills a contrasting track from left to right. 2. A circle appears from 0 to 360 degrees.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep5ivu-07.png?alt=media&token=4c51b00b-6b08-4638-a331-1e6340c7d5ea=s0)

1. Linear indicator
2. Circular indicator

Progress indicators behave differently based on the time of progress being tracked:

- **Determinate**: Known progress and wait time
- **Indeterminate**: Unknown progress and wait time

When using a **determinate** indicator, the indicator must accurately represent the progress of what it's measuring.

Use **indeterminate** indicators to show that a process is happening, but the wait time is unknown.

<!-- Video: Linear and circular progress indicators show both determinate and indeterminate progress. -->

1. Determinate progress indicators fill from 0% to 100%
2. Indeterminate progress indicators move along a fixed track, growing and shrinking in size

As more information about a process becomes available, a progress indicator should change from **indeterminate** to **determinate**.

<!-- Video: On a track, a contrasting primary-colored horizontal line grows and shrinks, then fills it from left to right as app loads. -->

_A linear progress indicator changes from indeterminate to determinate while loading a screen_

## Anatomy

<!-- Video: 1. The track is a horizontal line. 2. A primary colored line over the contrasting colored track is the progress indicator. -->

1. Active indicator
2. Track
3. Stop indicator

### Active indicator

The active indicator shows the progress that has been made so far.

In indeterminate processes, it grows and shrinks along the track repeatedly.

<!-- Video: A primary colored horizontal line fills a contrasting line from left to right. -->

_Linear indicators animate from the leading to the trailing edge along the track. Circular indicators animate from the top of the track, clockwise by default._

The active indicator appears as soon as progress begins. At low percentages where space is limited, this should appear as a dot to help people understand that there's progress underway.

![A linear and circular progress indicator at 1% progress, where the active indicator has only just appeared.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep6b3j-12.png?alt=media&token=8aa71e47-95c1-48b7-9949-1b12b43093f6=s0)

_When progress first begins, the active indicator appears as a dot_

The active indicator has two shape options: **flat** and **wavy**. Use the shape that best fits the product's tone.

The wavy shape can make longer processes feel less static and is best used when a more expressive style is appropriate.

When using the wavy shape, the overall height of the component changes. At very small sizes, the wavy shape may not be as visible.

<!-- Video: Examples of flat and wavy active indicator. -->

_Wavy linear indicators increase the height of the overall container_

### Stop indicator

The stop indicator is a 4dp circle that marks the end of a linear determinate progress indicator to meet Material's accessibility standards.

It's not used for indeterminate or circular progress indicators.

The stop indicator is required if the track has a contrast below 3:1 with its container or the surface behind the container.

![A primary colored horizontal line fills a contrasting line from left to right.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep7pxt-16.png?alt=media&token=9f8c2fcb-6249-4ff4-bd3c-d8ee67658bf7=s0)

_**Do.** Use a stop indicator when placing the progress indicator inside a container with low contrast_

![An invisible circular track fills with color from 0 to 360 degrees.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep87pn-17.png?alt=media&token=c35ef411-e39f-4bc4-abe8-f4372b570d19=s0)

_**Caution.** Only remove the end stop indicator if there's a visual contrast of at least 3:1 with surrounding surfaces_

## Placement

Place a linear progress indicator along the edge of a container that's loading. If the container changes shape, place it on the edge that animates. It can also be placed in the middle of a container.

Use a single progress indicator at the top of a page to show progress of the whole group. Don't add one for every element unless they're activated independently.

<!-- Video: Progress indicator at top of screen, indicating page content is loading. -->

_When at the top of a screen, a progress indicator shows that all of the page content is loading_

<!-- Video: Progress indicator on a card, indicating that the card's content is loading. -->

_When attached to a card, a progress indicator shows that just the card content is loading_

<!-- Video: Linear indicator shows the loading progress of a selected news article in a list. -->

_A progress indicator on the expanding edge of a card shows that the edge may expand to show the loaded content_

Circular progress indicators should be centered directly on the container or page that's loading, such as a button or card.

When loading more items on a page, place the circular progress indicator in the empty space where the new content will appear, not overlapping existing content.

However, if the content does not take long to load, consider using a loading indicator instead.

<!-- Video: As content loads, the screen is blank except for a circular progress indicator. -->

_A circular progress indicator can show that the page is loading_

<!-- Video: As container content loads, the container is blank except for a circular progress indicator. -->

_A circular progress indicator can show where new items will appear on a page. A loading indicator also works well in this space._

### Progress indicators in buttons

A circular indicator can be placed in a button to show that the button's action is currently in progress.

In very small buttons, use the flat shape since the wavy shape is not as visible at that size.

To ensure a minimum 3:1 contrast ratio, change the active indicator color to be the same color as the button's icon or label text, and remove the track.

<!-- Video: Determinate circular indicator active for 2 seconds after download button is selected, reflecting download progress. -->

_**Do.** Use circular indicators for short, indeterminate activities under 5 seconds_

<!-- Video: Shows idea of indeterminate circular indicators active on multiple buttons as cluttered and confusing. -->

_**Don't.** Avoid applying progress indicators to every button in a list_

## Responsive layout

### Right-to-left languages

Linear progress indicators should be mirrored horizontally for products using right-to-left (RTL) languages.

Circular progress indicators don't need to be mirrored.

![Mirrored right-to-left progress indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep96rs-25.png?alt=media&token=75581f65-e1d4-4ac1-99a3-e8c371691127=s0)

_Linear progress indicators can flow from right to left in right-to-left (RTL) languages_

### Large screens

Circular progress indicators have flexible sizes. They can range from 24dp to 240dp, depending on the placement and the window size. Avoid exceeding the minimum and maximum sizes.

Reserve very large progress indicators for large and extra-large windows, such as desktop.

![Circular progress indicators can range in size from 24dps to 240dps.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep9qg1-26.png?alt=media&token=3406dfaa-947f-4dec-8e16-66b6c3da848f=s0)

_The waveform should scale with the size so the proportions look the same across sizes_

Linear progress indicators dynamically adjust to fit the width of the window or element they're placed within, such as a card. They shouldn't be used in any elements smaller than 40dp.

The padding on each end should be 4dp minimum, but can be modified.

![Linear progress indicators can dynamically adjust to any width.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepa8w9-27.png?alt=media&token=b5dada5d-07ab-408a-a520-1eee7956020e=s0)

_The linear progress indicator should always span the width of the UI element it's placed within_
