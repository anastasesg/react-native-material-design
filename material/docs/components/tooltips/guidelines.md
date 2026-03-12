---
url: https://m3.material.io/components/tooltips/guidelines
lastmod: 2026-01-30
crawled_at: 2026-03-10T00:00:00.000Z
category: components
section: tooltips
page_type: guidelines
status: complete
---

# Tooltips

Tooltips display brief labels or messages

![A plain tooltip labeling a button, and a rich tooltip announcing new settings available.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qnzgx-01.png?alt=media&token=c4796854-42a4-4c7d-9431-f4328e29d320=s0)

_Plain and rich tooltips serve different purposes_

## Usage

A tooltip provides additional context for a UI element.

**Plain tooltips** briefly describe a UI element. They're best used for labelling UI elements with no text, like icon-only buttons and fields.

**Rich tooltips** provide additional context about a UI element. They can optionally contain a subhead, buttons, and hyperlinks.

Rich tooltips are best used for longer text like definitions or explanations.

![2 variants of tooltips.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qs96y-02.png?alt=media&token=793c9573-a7f8-4a87-a6b5-a49f92a22c0b=s0)

- Plain tooltip
- Rich tooltip

![Plain tooltip labeling an icon-only button in Google Meet as "Present now".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qu5gx-03-do.png?alt=media&token=54c7e12c-059a-40ad-b68f-e4f3b1946ff6=s0)

_Do: Use plain tooltips to label icon-only buttons_

![Button with an icon and label text saying "Edit". It has a plain tooltip on hover that also says "Edit".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6quvhe-04-dont.png?alt=media&token=466cc2dc-80ff-4403-8acb-f6b0d41e053d=s0)

_Don't: Plain tooltips aren't needed when the UI element already has label text_

![Rich tooltip describing a new button for adding people. It has a subhead, description, and a button to learn more.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qx7on-05-do.png?alt=media&token=50c9d4d6-aadf-417e-a29e-81b9e1d2cc79=s0)

_Do: Use rich tooltips to provide extra information and actions about a UI element or new feature_

![Rich tooltip explaining that an action is destructive and permanently deletes files.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qywbu-6-dont.png?alt=media&token=c5310581-00d7-418b-bbe9-029a15177797=s0)

_Don't: Don't hide critical information within tooltips as it's easy to miss. Use an interruptive dialog instead._

## Anatomy

### Plain tooltip

![2 elements of a plain tooltip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6r0a08-07.png?alt=media&token=2c7ae948-db69-4d73-afbd-3825d4d0435c=s0)

- Container
- Supporting text

### Supporting text

![Plain tooltip for an icon-only button shaped like a gear. The tooltip text is "Settings".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6r2ci0-08-do.png?alt=media&token=2c4dcc41-7aa5-4460-8420-5c5f7ed17184=s0)

_Do: Briefly describe a UI element_

![Plain tooltip for the account switcher. The supporting text includes the user's name and email address on new lines.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6r3rse-09-caution.png?alt=media&token=b4c31f25-226a-484f-8620-0972b9fa0e17=s0)

_Caution: Avoid wrapping text to multiple lines or including many pieces of information_

### Rich tooltip

![4 elements of a rich tooltip.](https://lh3.googleusercontent.com/Qrg3y9UWvNZtKfeefdMriNm0BUWNB_4KL5lW4pDAdtSVGnRbdnJq_bOmpBVvYt7o6eS-pUOtaKvGpPpVvtZqoueoaGb3xCJjE1zXjuYvf1o3=s0)

- Subhead (optional)
- Container
- Supporting text
- Text button (optional)

### Subhead (optional)

Keep subheads brief, ideally to one line. They should summarize or describe the message of the rich tooltip.

Subheads are important to include when the rich tooltip appears automatically, like when the page loads.

![Rich tooltip with a brief subhead, supporting text, and a text button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6r9edz-11-do.png?alt=media&token=c560ef69-f81e-4510-ba45-8426d28f9236=s0)

_Do: Summarize the message in a few words_

![Rich tooltip with a subhead wrapping to multiple lines.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ra39j-12-dont.png?alt=media&token=6ff1b6f2-1f88-4a08-8628-1f11e09ecf10=s0)

_Don't: Avoid wrapping to more than one line_

### Text buttons (optional)

Rich tooltips can have up to two text buttons. These should be brief and relevant to the message in the supporting text.

Keep buttons short so they can be side by side. Avoid stacking them when possible.

![Rich tooltip with 2 buttons stacked on each other.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6rdax0-13-Caution.png?alt=media&token=5ac76c53-02d0-4be4-aaf5-3387d8cf6672=s0)

_Caution: Avoid stacking buttons_

## Placement

### Plain tooltips

By default, plain tooltips are positioned directly above the parent element.

- If there's a visual boundary, like a button, the distance is 4dp
- If there's no visual boundary, like with text baselines, the distance is 8dp

If the element is in an app bar, the plain tooltip appears below the element at the same distance.

![Plain tooltip appearing 4dp below a button with a clear visual boundary.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6rg1hz-14.png?alt=media&token=c2d92bab-3dc6-4be2-9bac-836c1d2ada4b=s0)

_Plain tooltip with a 4dp distance between the target and tooltip_

### Rich tooltips

By default, rich tooltips are positioned to the bottom right of the parent element. They adjust position to avoid going off screen. Tooltips shouldn't cover the parent element.

**Dynamic positioning:** The position of the tooltip adjusts in increments of 8dp to avoid going off-screen.

**Desktop placement:** On desktop, tooltips may appear centered below the parent element and remain visible while moving within the target region.

![A rich tooltip in 4 different corners. It changes position to remain fully on screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6riq0z-15.png?alt=media&token=0b5c26d7-7287-4e8e-a53b-26450413f75a=s0)

_Four different rich tooltip locations based on dynamic positioning_

## Behavior

To show a tooltip, hover on the parent element on desktop, or tap and hold the element on mobile. Persistent rich tooltips only appear when clicked or tapped.

### Transient by default

Both plain and rich tooltips disappear 1.5 seconds after navigating away from the target region.

Triggering a new tooltip immediately closes any other open tooltip.

_Tooltips disappear after a 1.5 second delay when no other element is hovered_

![2 buttons both showing plain tooltips at once.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ro0ii-17-dont.png?alt=media&token=41b0681c-f04b-4767-b998-67f6b140a4ce=s0)

_Don't: Only display one tooltip at a time_

### Persistent rich tooltips

Persistent rich tooltips appear when either:

- The parent element is clicked
- The page loads and a new feature is being explained

Persistent rich tooltips remain active even when leaving the target region. They only disappear once a person interacts with another UI element. Hovering doesn't trigger the tooltip.

When appearing on page load, the tooltip can introduce and explain new features on various parent elements.

Avoid using persistent rich tooltips on icon buttons.

![Persistent rich tooltip about a new sharing feature in the Photos app. The button says "Learn more."](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6rq50p-18-dont.png?alt=media&token=bd1b821d-c434-4c6d-8591-2e6ce417a95d=s0)

_Don't: Don't use a persistent rich tooltip on icon buttons_
