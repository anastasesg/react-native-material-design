---
url: https://m3.material.io/components/loading-indicator/guidelines
lastmod: 2025-09-26
crawled_at: 2026-03-08T01:39:00.000Z
category: components
section: loading-indicator
page_type: guidelines
status: complete
---

# Loading indicator

Loading indicators show the progress for a short wait time

<!-- Video: Loading indicators are best for indicating a short, indeterminate wait time -->

_Loading indicators are best for indicating a short, indeterminate wait time_

## Usage

Loading indicators use animation to grab attention, mitigate perceived latency, and indicate that an activity is in progress.

They should be used when progress isn't detectable, or when it's not necessary to indicate how long an activity will take.

While similar in function to circular progress indicators, loading indicators are a better alternative for short processes between 200ms and 5s.

<!-- Video: Use a loading indicator when a background process is running -->

_Use a loading indicator when a background process is running_

Choose a loading or progress indicator that corresponds to the expected wait time and type of process.

If the wait is very long, consider allowing users to navigate away from the page while the process finishes up.

| Expected wait time | Recommendation |
| --- | --- |
| Instant (under 200ms) | No indicator |
| Short (between 200ms and 5s) | Loading indicator |
| Long (Over 5s) | Progress indicator |

<!-- Video: Instant (under 200ms): Display the content immediately -->

**Instant (under 200ms):** Display the content immediately

<!-- Video: Short (between 200ms and 5s): Use a loading indicator -->

**Short (between 200ms and 5s):** Use a loading indicator

<!-- Video: Long (over 5s): Use a progress indicator -->

**Long (over 5s):** Use a progress indicator

When a process can transition from indeterminate (unknown progress) to determinate (known remaining progress), transition between the corresponding progress indicators.

Don't transition a loading indicator into a progress indicator.

<!-- Video: Do - Transition from an indeterminate progress indicator to a determinate progress indicator -->

- **Do**: Transition from an indeterminate progress indicator to a determinate progress indicator

<!-- Video: Don't - Avoid transitioning from a loading indicator to a determinate progress indicator -->

- **Don't**: Avoid transitioning from a loading indicator to a determinate progress indicator

## Anatomy

![2 parts of an active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0cads86-7.png?alt=media&token=f27080ab-ebe2-410d-baa6-b0bc04ca5734=s0)

1. Active indicator
2. Container (optional)

### Active indicator

The active indicator is a looping shape morph sequence composed of seven unique Material 3 shapes.

[More about the Material shape library](https://m3.material.io/styles/shape/overview-principles#579dd4ba-39f3-4e60-bd9b-1d97ed6ef1bf)

![Active indicator with shape morph.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0cafeiy-8.png?alt=media&token=bdcb1b69-8492-4871-b07b-2449155b0d42=s0)

_The active indicator morphs shape to capture attention_

### Container (optional)

When the container is visible, the active indicator should change color from **primary** to **on-primary-container**.

The container should be visible when the loading indicator is placed over other content. This helps it stand out better by giving it a stronger contrast. It's not needed when the loading indicator is placed directly on a surface.

The container should be used with pull-to-refresh behavior.

![Active indicator with container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0caha9b-9.png?alt=media&token=b9bf2aaa-19dd-4aa4-80f7-0484809b74dd=s0)

_The container is a circle that provides extra contrast from body content_

## Placement

While loading a page or container, the loading indicator should be centered on the element.

<!-- Video: Center the loading indicator in the middle of the page or container -->

_Center the loading indicator in the middle of the page or container_

When loading more items on a page with existing content, place the loading indicator in the empty space where the new content will appear. Avoid overlapping existing content.

<!-- Video: Center the loading indicator in the empty space where content will appear -->

_Center the loading indicator in the empty space where content will appear_

Loading indicators can be placed within other components, such as buttons, to indicate that the action is ongoing, such as validating a form or checking for updates.

<!-- Video: Loading indicators can be placed in buttons that take a few seconds to take effect -->

_Loading indicators can be placed in buttons that take a few seconds to take effect_

<!-- Video: Use loading indicators to show progress without taking up much space -->

_Use loading indicators to show progress without taking up much space_

## Responsive layout

Loading indicators default to 48dp, but the size is flexible. It should be between 24dp to 240dp, depending on the placement and the window size. Avoid exceeding the minimum and maximum sizes.

The ratio between the container and the active indicator stays the same when resizing the loading indicator.

Reserve very large progress indicators for large and extra-large windows, like desktop.

![Loading indicators can range from 24dps to 240dps.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0caprda-12.png?alt=media&token=ac91d3fa-343a-4bc6-be14-466c85b2086d=s0)

_Loading indicators can range in size from 24-240dp_

### Larger windows

As the pane or window size grows, consider scaling the loading indicator as well, so it remains proportional in size to the empty space around it. The loading indicator shouldn't exceed 240dp.

<!-- Video: The loading indicator's default size is ideal for mobile and other compact windows. The loading indicator should scale up in larger windows. -->

_The loading indicator's default size is ideal for mobile and other compact windows. The loading indicator should scale up in larger windows._

## Behavior

### Pull-to-refresh

The loading indicator is used in [pull-to-refresh](https://developer.android.com/develop/ui/compose/components/pull-to-refresh) on Jetpack Compose only.

Pull-to-refresh is an Android system feature that manually refreshes screen content with an action or gesture. It's used at the beginning of lists, grid lists, and card collections where the most recent content appears.

It's best to use pull-to-refresh with dynamic content that can have frequent updates, where people have a high chance of seeing new content after refreshing.

<!-- Video: The loading indicator for pull-to-refresh can appear on top of the content or adjacent to it -->

_The loading indicator for pull-to-refresh can appear on top of the content or adjacent to it_

### Threshold requirements

To ensure intentional usage of the pull-to-refresh gesture, the loading indicator must pass a threshold before the app will refresh.

<!-- Video: After passing the threshold, completing the gesture initiates a refresh -->

_After passing the threshold, completing the gesture initiates a refresh_

<!-- Video: Reversing the gesture past the threshold will cancel the refresh action -->

_Reversing the gesture past the threshold will cancel the refresh action_

The loading indicator remains visible until the refresh activity completes and any new content is visible, or someone navigates away from the refreshing content.

<!-- Video: Do - Keep the loading indicator in view until the activity is completed to provide status of the refresh activity -->

- **Do**: Keep the loading indicator in view until the activity is completed to provide status of the refresh activity

<!-- Video: Don't - Don't scroll the loading indicator off-screen -->

- **Don't**: Don't scroll the loading indicator off-screen, as it hides the status of the refresh activity. It could imply that the refresh activity is associated with a specific component, such as a card, instead of the entire screen.
