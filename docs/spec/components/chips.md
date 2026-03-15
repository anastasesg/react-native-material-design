# Chips — M3 Component Reference

> Chips help people enter information, make selections, filter content, or trigger actions.

Sources: [Overview](https://m3.material.io/components/chips/overview) · [Specs](https://m3.material.io/components/chips/specs) · [Guidelines](https://m3.material.io/components/chips/guidelines) · [Accessibility](https://m3.material.io/components/chips/accessibility)

---

## Variants

Chips come in four variants, each suited to a different purpose:

![4 chip variants: Assist, filter, input, and suggestion.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smcq59-01.png?alt=media&token=86cdedb7-2247-4e4b-a21c-3fc347cd550b=s0)

1. **Assist** — Smart or automated actions spanning multiple apps (e.g. "Add to calendar")
2. **Filter** — Tags or descriptive words to filter content (e.g. platform selectors)
3. **Input** — Discrete pieces of user-entered information (e.g. Gmail contacts in the To field)
4. **Suggestion** — Dynamically generated suggestions to narrow intent (e.g. suggested chat replies)

| Purpose                       | Variant    | Rationale                                                      | Example                          |
| ----------------------------- | ---------- | -------------------------------------------------------------- | -------------------------------- |
| Action                        | Assist     | Represents smart or automated actions spanning multiple apps   | Add to calendar action           |
| Filter                        | Filter     | Represents filters for a collection                            | Platform selector on material.io |
| Information, user-authored    | Input      | Represents discrete pieces of information entered by a person  | Gmail contact in the To field    |
| Information, product-authored | Suggestion | Narrows intent by presenting dynamically-generated suggestions | Suggested chat response          |

---

## Anatomy

![Diagram of 4 elements of a chip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjtuyd-10.png?alt=media&token=999b1920-2d6e-4cd7-b9c8-78ddde74c657=s0)

1. **Container** — Slightly rounded (8dp corners). Can be flat (outlined) or elevated.
2. **Label text** — Should be 20 characters or fewer, using `label-large` typography.
3. **Leading icon or image** (optional) — Icon, logo, or circular image. Circular images are sized larger (24dp) than icons (18dp).
4. **Trailing icon** (optional) — Required on input chips (remove action), optional on filter chips (remove or menu).

### Per-variant anatomy

| Variant    | Elements                                                      |
| ---------- | ------------------------------------------------------------- |
| Assist     | Container, label text, leading icon (optional)                |
| Filter     | Container, label text, leading icon, trailing icon            |
| Input      | Container, label text, leading icon, trailing icon (required) |
| Suggestion | Container, label text, leading icon (optional)                |

![Assist chip diagram numbering 3 elements.](https://lh3.googleusercontent.com/UipTazZY6lB09YYRrq_uydfwLG0Xj5EIIlJVA252BfyovfvZXXXPGP66wGx4ZT0jOXqI6eQ7OLB6zVCjzqJ8CCJEqPW8Gw34jd-gSSA7qHsdIQ=s0)

![Filter chip diagram numbering 4 elements.](https://lh3.googleusercontent.com/WczxPrTlNqVqk9HILdgclP7OR_TQ6sLWYPB9qIHvZ6QLGDS9Uo1Sjm30UFiVAJmo8DVAWcZPacF_gyj-dGZDZ1JROW93iccqf-sa_rjqQ-S7=s0)

![Input chip diagram numbering 4 elements.](https://lh3.googleusercontent.com/MFMFJhZqnlfNlT6wWDldzAYdPhLBn9OvPgeAyUmocIf1YooTBamJN4doylmVzztWcDYbjHmV2OSQEaOoefcOMS8Uu0hEuGTGbTJYCxLfXKSu=s0)

![Suggestion chip diagram numbering 2 elements.](https://lh3.googleusercontent.com/ytfZyslYlVSL6feuGZznpeG6Wi6YP9sPrNyN7IDDr8cClF4pFIS2gdMGmX6GAG6oYN2ZAHE4hitoYzO2MSs88zdrks6vikOU8NHwkOGHeWU=s0)

---

## Usage & When to Use

![3 assist chips in restaurant review app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smdd4g-02.png?alt=media&token=3fa9dd36-2c0c-43b7-9ff2-a5c82ce393d2=s0)

Chips appear as a group of interactive elements to help people accomplish their current task. They are contextual and dynamic — adapting to the situation rather than persisting as fixed calls to action.

### Chips vs. Buttons

Chips and buttons are visually similar but serve different roles:

- **Chips** represent forking paths — contextual, supplemental options for the current task. They appear dynamically in groups.
- **Buttons** represent linear steps — persistent, consistent calls to action that progress the user forward.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjonhj-3-do.png?alt=media&token=5c191d0f-005b-4934-bf3a-35e3bd671b25=s0" /><br/><b>Do:</b> Use chips to present contextual, supplemental options</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjp9f8-4-dont.png?alt=media&token=0efbb9dc-12ee-44da-b010-3180be80141b=s0" /><br/><b>Don't:</b> Don't replace major actions with chips. Actions that progress people forward should be buttons.</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjqmoj-5-do.png?alt=media&token=3cb399af-ba05-4e3a-b9c6-771322061d20=s0" /><br/><b>Do:</b> Use buttons for the final step in a task</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjqyzl-6-dont.png?alt=media&token=764c08a5-4a46-47a1-ab2d-b93f8a9c86fb=s0" /><br/><b>Don't:</b> Don't use chips to finish or progress a task</td>
</tr></table>

### Chip sets

Chips should always appear in groups — never display a single chip alone. Chip sets can scroll horizontally.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smf6wp-07_do.png?alt=media&token=4240c858-234f-4199-95d5-b29f64dcf2c8=s0" /><br/><b>Do:</b> Chips can be scrolled horizontally</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smfmgg-08_don't.png?alt=media&token=52f69bde-8de3-45e0-b6d1-cdbd51f10d1e=s0" /><br/><b>Don't:</b> Don't display a single chip by itself. Chips should appear in a set.</td>
</tr></table>

---

## Sub-elements

### Container

All chips have 8dp rounded corners. Containers can be either flat (outlined) or elevated.

![Diagram of rounded corner of chip container.](https://lh3.googleusercontent.com/vQmC7jK0blnznQXHhWp0CdSBv5rz2kM_HaE4_6bNjPYJZ7m8esMLk2mjsq3d_YYoNHL1DVWS0mNeggD2YPKFRWq7LmdauD2q4_QeqAhbh7ZFng=s0)

**Elevation:** Chip containers can be elevated when placed on images or dynamic backgrounds. On standard backgrounds, use the outlined (flat) style.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smkogw-14_do.png?alt=media&token=2e20d7c0-d7ae-4960-ae3d-3ea7dc9af20c=s0" /><br/><b>Do:</b> Use an outline to define the container edge on regular backgrounds</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sml3zk-15_do.png?alt=media&token=413b4ccf-6370-4b8c-b311-0ebfcccac584=s0" /><br/><b>Do:</b> Chips may use elevation when placed on an image</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smnajs-16_don't.png?alt=media&token=3b06b36e-ee77-4f2e-a619-9773f7844161=s0" /><br/><b>Don't:</b> Don't elevate chips on standard page backgrounds</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm9a01xre-17_don't.png?alt=media&token=525db271-6e30-413f-b3f4-d7c8d3bf0ae2=s0" /><br/><b>Don't:</b> Don't use elevation to indicate a pressed state. Use the visual ripple effect instead.</td>
</tr></table>

![3 elevated assist chips above image of restaurant photograph.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm99ytacz-13.png?alt=media&token=b7f1c500-c60e-43d5-b95d-3f930b4d211b=s0)

### Label text

Labels should be 20 characters or fewer, using the same typography as buttons (`label-large`). Skip articles ("a", "the") to save space.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjz5d8-17-do.png?alt=media&token=20092f2f-045e-4edf-8e14-9e78f9114f33=s0" /><br/><b>Do:</b> Keep chip labels short</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjzmjd-18-dont.png?alt=media&token=553c8425-a48e-4625-939b-3b1a4d3365dc=s0" /><br/><b>Don't:</b> Avoid labels longer than 20 characters</td>
</tr></table>

### Leading icon or image

Chips can contain a leading icon, logo, or circular image. Leading circular images (e.g. avatars) are sized at 24dp to provide more detail, while icons are 18dp.

![2 input chips, 1 with a leading circular avatar and the other with a leading icon.](https://lh3.googleusercontent.com/54paAbiWax0rtT9FkGkAokFuFZqCr77ChCZATiYDeSdKuytmj1yIEIO62QDdSfxj4J7O3l5DX-BNOXTkj8b7RTpJRIxe6Wvioy0UPzXRudFQ=s0)

The default unselected leading icon color role is **primary**, but **on-surface-variant** can be used when less emphasis is needed.

![2 screens of a restaurant page with chips labeled "Add photos" and "Add dishes." The leading icons are purple in 1, grey in the other.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztk48sd-20.png?alt=media&token=5d587b93-544d-4a45-9be9-542d6d0c639a=s0)

![2 input chips, 1 with a 24dp leading avatar and the other with an 18dp leading icon.](https://lh3.googleusercontent.com/iY2D7FmINqLpS43Y2mhnr_dlNru2sEZCNSyKFwJS_NVseYGAGlY-nRl_qYY4hn_zu4NTZV40NTysX2qaS3NPnh_J6StQbI4mlzvSQkQm3RU=s0)

### Trailing icon

Present only on input and filter chips. On input chips, it is required and must be used for removal. On filter chips, it is optional — used to remove the chip or open a menu.

Secondary actions (like a trailing remove icon) require a 48×48dp interaction target that doesn't overlap the chip's primary action. Achieve this by setting the minimum chip width to 88dp or the label text minimum width to 42dp.

![A chip with 88dp min width has 2 touch targets of 48x48dp.](https://lh3.googleusercontent.com/FF2wTImHI_AYyfSWhT1XCU8XZj6mbCYc84FMCxjtZZ_lLum6wzABXhazLjGsceEqE9PWB44gmD3DO-j7lbjTrqCa507LWu-t7hdlSLxXt-M=s0)

---

## Configurations

### Assist chips

Assist chips represent smart or automated actions that appear dynamically and contextually. They function as though the user asked an assistant to complete an action. Labels typically begin with a short verb ("Add", "Get", "Save"). Text can update dynamically to reflect state changes ("Save" → "Saved"). They are displayed after primary content.

![2 assist chips labeled "Add to my itinerary" and "12 mins from hotel" on map screen.](https://lh3.googleusercontent.com/uNDidhMjsDIxQhluaJHdkbRj_xJDpjTTfZN_YLW9tgVUwfShHRsuZgBfzSHWqjR4XJaPR-Hd1AqajUFnrPbtW1LW0c6NrrNYgNb5efdO7pbr=s0)

![2 assist chips labeled "Event location" and "Chat" on phone lock screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smwopa-25.png?alt=media&token=84a161d6-6b18-4acb-828c-8bff17399130=s0)

![Assist chip transformed into time picker with radio buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smx4qo-26.png?alt=media&token=7c211ee9-74de-4ba7-a008-9a62fc6fa312=s0)

Assist chips can trigger actions, show progress and confirmation, transform into modals, transition to full-screen views, or readjust to display more results inline.

![3 assist chips labeled "Turn on lights", "Set alarm", and "Close Blinds" on Welcome Home screen.](https://lh3.googleusercontent.com/uqMzoI8CijB6iWV4gF5J6aL2rQ4W7JhsIrcJN98krkKJzpyDj1q9Oij6s5VAl7NVQ_LKzVyXwPf3B12ssVbtX8qsCHB7JUmPYjP8nXwY2pWNpw=s0)

### Filter chips

Filter chips use tags or descriptive words to filter content. They can serve as alternatives to segmented buttons or checkboxes for lists and search results.

- Tapping a filter chip activates it and appends a leading checkmark icon
- Write labels as nouns describing the category to **include** (not negative phrases like "Exclude images")
- Multiple chips can be selected or unselected independently

![4 filter chips labeled "Docs" "Slides" "Sheets" and "Images" with "Slides" and "Sheets" selected](https://lh3.googleusercontent.com/_FpN2Q4Pn2ev44ZnzH3j7EUtUJdwZ7AqRLNVQjhY8btJIKk135AcrsJAjufT287fOoUU5QbPvcm586-RL9RJTPDGJSBQAW7WZ1QIQabJ5P1Naw=s0)

![5 filter chips representing popular electronics categories in a shopping app. The chip "Game consoles" is selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sn3s8s-32.png?alt=media&token=9227cae5-778a-44bf-8a7c-42f75b4835a6=s0)

![6 filter chips representing apartment amenities in a real estate app. 2 of the chips are selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sn4ehq-33.png?alt=media&token=02823c77-4aa6-4603-b3dc-22030f8fe1f3=s0)

![6 filter chips representing apartment amenities in a real estate app. 3 selected chips include checkmarks while 3 don't.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm9a0g8g2-34.png?alt=media&token=8e8879ac-09ef-444c-8340-d45d028571b9=s0)

![3 amenities chips are selected, and 2 neighborhoods.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm9a0gd06-35.png?alt=media&token=ff38ae5c-50b2-499f-9204-bfa0d3135145=s0)

**Single-select mode:** A single chip can be selected at a time, serving as an alternative to segmented buttons, radio buttons, or single-select menus. Do not mix single-select and multi-select chip sets on the same page.

**Trailing icon on filter chips:** In medium and expanded windows, filter chips may include a trailing icon to remove the chip or open a menu. In compact windows, the trailing icon target is too small — the whole chip should accomplish the action instead.

![Filter chip with trailing remove icon.](https://lh3.googleusercontent.com/AuxLEZb_nITl-CQputrqxzcMPXUeBkAvV1sFuT342wVPxav9dFEaTYNz201yWxHk9c6yEh-UInDpcA3h2-7znxXB9F3PCNiJIl5mzaTD3l0DFQ=s0)

![Filter chip with trailing menu icon.](https://lh3.googleusercontent.com/fi0lCD-KiEpAYuO3SZr2jI2I3WWk6us7PlDgn7VIJ2Q7BBCY9fy0LFaLaq3HFIm3JUbnOp8ULGZ5_QEXYFT27T6cbUGSVpuC8mDcsbWcjwiqzg=s0)

Filter chips can be used alongside search fields and sheets.

![4 filter chips below search field](https://lh3.googleusercontent.com/gVJ_TV4PsMN0Mhs-oAUEG47Gu9cYDp-T3LPvFLnsFv6yImHWTuuocs9l9en82TB_OrYoW31ffefMMp-rM8UQLo9RnXM5KCNjnbaC2cHrJNim=s0)

![Filter chips used as tags in a side sheet on a file application.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sni3vn-41.png?alt=media&token=cb763d98-2de3-4f8e-9abb-3c125699143d=s0)

![6 filter chips wrapping to 2 rows](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztl3mne-41.png?alt=media&token=c2820337-f5ab-4aff-8081-11d14f5773cd=s0)

![4 filter chips with right-most chip partly offscreen, indicating the chips are horizontally scrollable](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztl40h2-42.png?alt=media&token=10ac484e-eb3c-4dee-8271-fc90e5127357=s0)

![Single filter chip option beneath the header "Category"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztl535g-43-dont.png?alt=media&token=c3bec0f6-c82a-454e-8f19-7faa3755d2a7=s0)

✗ **Don't:** Filter chips should not present only a single option

### Input chips

Input chips represent discrete pieces of user-entered information (e.g. email contacts, filter terms). They convert text into chips for verification.

![Contacts transformed into 2 input chips in a draft event invite](https://lh3.googleusercontent.com/UDjFkP1FOVQtew8xhKWpOI1bUKi2OeWXXgjETDRqn-1ZKzXFw0YNX3UYDJgk_b5s0rKIdh4CJEsU9LARx6SyEmwlGQ8CeeNVyhDxNu1EcQze=s0)

**Editing:** Input chips support editing by reverting back to a text string when interacted with (select, then interact again). Backspacing before a chip selects it; pressing backspace again deletes it.

**Multi-chip fields:** A single field can contain multiple input chips, which can be reordered or moved between fields.

![2 input chips in the "To" field of an email draft](https://lh3.googleusercontent.com/RgxqbsfzegYgXFAqY6gFgnc_m2Y36fjQfW7cr4h2J7Ar-4eMA8m0sHuYBD9omPg3Fkq4HkU7pIYsAccWpS-kWnkS97zPCTRG7B6rcY7hQfE=s0)

![1 input chip moved from the "To" field to the "CC" field of an email draft](https://lh3.googleusercontent.com/ei0DgkxK6YByXQJYx-ZgaGig9oudQEyPHJ8RwkOQ5txRR4sS9ZrlCXyd0Q0Z2N7lQohHqVgD7hvMnuz21gYIfDzTZN3FrsZnHyvM0aPTsQNE=s0)

**Expansion:** Input chips can expand to show more information or options using a container transform transition.

**Icons:** Leading icon can be an icon, logo, or circular image. The trailing icon is always aligned to the container's end side (right for LTR, left for RTL).

![2 input chips, 1 with leading thumbnail, 1 with leading icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8snzt8q-60.png?alt=media&token=c295bcf6-1528-4244-90ce-1164046350c0=s0)

![2 input chips with trailing icons following the label text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztl8hee-55.png?alt=media&token=4f7aa05f-7c5f-48eb-a506-01bf4b00db3f=s0)

![3 input chips with trailing icons following the label text.](https://lh3.googleusercontent.com/OW0kvrMWhnBCzG4I54KY3xyHktBmFAy75DO82QINdcwZjOKXf4O1cd8TH6sxo2ptCx7Y7wkGkxDnPLfuaI-CLAcLAx-BbkdleTuyJDLH5fBw=s0)

**Overflow behavior:** Overflowed chips in a text field follow the same behavior as regular text. An unfocused field displays the beginning of input; tapping snaps to the end with cursor and keyboard active.

### Suggestion chips

Suggestion chips help narrow intent by presenting dynamically generated suggestions. Labels are typically nouns or short phrases (under 20 characters).

![3 suggestion chips offering ID options in a photo-recognition app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm99yzvnz-65.png?alt=media&token=2a4c37d4-4d71-4045-836a-2c8028cdb79a=s0)

![3 suggestion chips with automated reply options in a chat app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztlb0cw-60.png?alt=media&token=6853add2-195f-47e8-b902-eb3085d43868=s0)

![2 suggestion chips with search options "What song is this?" and "What are the lyrics?"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztlbx06-61.png?alt=media&token=b95c0757-168c-455a-9fc1-011ea38e927e=s0)

---

## Placement

### Chip set layout

Place chips inline as a row of options, not in a vertical list. Overflowing chips break to the next line, or scroll horizontally if the field is single-row.

- Minimum 8dp spacing between chips
- Minimum 48dp touch target per chip regardless of density
- Labels truncate when in wrapped layout or when wider than the window

![Diagram of margins between a set of chips.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztlcsh2-62.png?alt=media&token=812ad7a5-cf6b-44e5-bfb5-11e3a9037109=s0)

1. Margins between chips
2. Margin between each line

### Input chip placement

Input chips can appear:

- Inline with the cursor in a text field
- In a stacked list
- In a horizontally scrollable list

![4 input chips wrapping to 2 rows.](https://lh3.googleusercontent.com/6ESM4iq-ENjgdXPRgFeaoVpZE2mUv1aL6soIeRHZgDxwAUJTQ2HYdWnCUQSYjaWVl5l7kvSbi9Rtn7NICABYNrE_6230Wv7OxhfoXLs6uN5kSg=s0)

---

## Measurements

### Assist chip

![3 assist chips with measurements shown for variants with and without a leading icon.](https://lh3.googleusercontent.com/tDL76BxJhx73568XEIJ3nbFUBxkn1ac2zO3Vqrf0CmFLPBi3yuLhjPYhZHmEFv6_cfjXMg-16mB2O5c11x-0yDMvb9L4QB7oHVHVLm29QvCH=s0)

| Attribute                       | Value             |
| ------------------------------- | ----------------- |
| Height                          | 32dp              |
| Shape                           | 8dp corner radius |
| Icon size                       | 18dp              |
| Vertical label text alignment   | Center-aligned    |
| Horizontal label text alignment | Start-aligned     |
| Left/right padding              | 16dp              |
| Left/right padding with icon    | 8dp               |
| Padding between elements        | 8dp               |

### Filter chip

![3 filter chips with measurements shown for types with and without a leading icon and trailing icon.](https://lh3.googleusercontent.com/22fmoqWkQTxchSh4qTgO2nrZ76sooCtX3ywKPLhqba5suVk8PW60_IA03iQ1yUdTipCKCFx0mRHhnWRs9Hm2oGdr2s9K9J8uaKukdPjGkNoA=s0)

| Attribute                       | Value             |
| ------------------------------- | ----------------- |
| Container height                | 32dp              |
| Container shape                 | 8dp corner radius |
| Icon size                       | 18dp              |
| Vertical label text alignment   | Center-aligned    |
| Horizontal label text alignment | Start-aligned     |
| Left/right padding              | 16dp              |
| Left/right padding with icon    | 8dp               |
| Padding between elements        | 8dp               |

### Input chip

![2 input chips with measurements: 1 with a trailing icon only; 1 with an avatar as a leading icon and a trailing icon.](https://lh3.googleusercontent.com/LwwDa1dknxPJeGchp4qkldM7ofBH7mypUCmVb5VQRgeY0cICTc5_H0fHVUTbuY0TQ7VNaBlqfYrlPFwKL4FnRQL5N5chlOoz8EhVdkbmers=s0)

| Attribute                       | Value              |
| ------------------------------- | ------------------ |
| Container height                | 32dp               |
| Container shape                 | 8dp corner radius  |
| Icon size                       | 18dp               |
| Avatar shape                    | 12dp corner radius |
| Avatar size                     | 24dp               |
| Vertical label text alignment   | Center-aligned     |
| Horizontal label text alignment | Start-aligned      |
| Left padding for avatar         | 4dp                |
| Right padding for avatar        | 8dp                |
| Left/right padding for icon     | 8dp                |
| Padding between elements        | 8dp                |
| Target size for close icon      | Min 48dp           |

### Suggestion chip

![2 suggestion chips with measurements shown for variants with and without a leading icon.](https://lh3.googleusercontent.com/ToyBZvY6HgToxkWV0wPdYIHq3FzSkIz4HUsgSzJD-Q30jS8TQTzRzN81nagH7Q1XDitG-Lgzav9wephSlFzWHaJn24mnANMqlm3KUNaeCRt6=s0)

| Attribute                       | Value             |
| ------------------------------- | ----------------- |
| Container height                | 32dp              |
| Container shape                 | 8dp corner radius |
| Icon size                       | 18dp              |
| Vertical label text alignment   | Center-aligned    |
| Horizontal label text alignment | Start-aligned     |
| Left/right padding without icon | 16dp              |
| Left/right padding with icon    | 8dp               |
| Padding between elements        | 8dp               |

---

## Color Tokens

### Assist Chip

#### Assist chip color

![Assist chip diagram numbering 4 color elements.](https://lh3.googleusercontent.com/CgU4dUqBVfaebvIlmiYeW8i9Geq2Z3kASKWrVMHXl1kgDAx2tDJ40MrFVDf7tqkPEKuX4au-iLvzbSBoRQDxQokAEP5Y9-y3vwkFIyl6c0Hy=s0)

1. Surface container low (optional)
2. On surface
3. Outline
4. Primary

#### Enabled

**Container**

| Name                            | Token                                                    | Value                                |
| ------------------------------- | -------------------------------------------------------- | ------------------------------------ |
| Container shape                 | `md.comp.assist-chip.container.shape`                    | `md.sys.shape.corner.small`          |
| Container height                | `md.comp.assist-chip.container.height`                   | 32dp                                 |
| Container elevation             | `md.comp.assist-chip.flat.container.elevation`           | `md.sys.elevation.level0`            |
| Outline color                   | `md.comp.assist-chip.flat.outline.color`                 | `md.sys.color.outline-variant`       |
| Outline width                   | `md.comp.assist-chip.flat.outline.width`                 | 1dp                                  |
| Elevated container elevation    | `md.comp.assist-chip.elevated.container.elevation`       | `md.sys.elevation.level1`            |
| Elevated container color        | `md.comp.assist-chip.elevated.container.color`           | `md.sys.color.surface-container-low` |
| Elevated container shadow color | `md.comp.assist-chip.elevated.container.shadow-color`    | `md.sys.color.shadow`                |
| Container surface tint          | `md.comp.assist-chip.container.surface-tint-layer.color` | `md.sys.color.surface-tint`          |

**Label text**

| Name                   | Token                                        | Value                                      |
| ---------------------- | -------------------------------------------- | ------------------------------------------ |
| Label text font        | `md.comp.assist-chip.label-text.font`        | `md.sys.typescale.label-large.font`        |
| Label text line height | `md.comp.assist-chip.label-text.line-height` | `md.sys.typescale.label-large.line-height` |
| Label text size        | `md.comp.assist-chip.label-text.size`        | `md.sys.typescale.label-large.size`        |
| Label text weight      | `md.comp.assist-chip.label-text.weight`      | `md.sys.typescale.label-large.weight`      |
| Label text tracking    | `md.comp.assist-chip.label-text.tracking`    | `md.sys.typescale.label-large.tracking`    |
| Label text type style  | `md.comp.assist-chip.label-text.type`        | Aa                                         |
| Label text color       | `md.comp.assist-chip.label-text.color`       | `md.sys.color.on-surface`                  |

**Icon**

| Name       | Token                                      | Value                  |
| ---------- | ------------------------------------------ | ---------------------- |
| Icon size  | `md.comp.assist-chip.with-icon.icon.size`  | 18dp                   |
| Icon color | `md.comp.assist-chip.with-icon.icon.color` | `md.sys.color.primary` |

#### Disabled

**Container**

| Name                         | Token                                                       | Value                     |
| ---------------------------- | ----------------------------------------------------------- | ------------------------- |
| Outline color                | `md.comp.assist-chip.flat.disabled.outline.color`           | `md.sys.color.on-surface` |
| Outline opacity              | `md.comp.assist-chip.flat.disabled.outline.opacity`         | 0.12                      |
| Elevated container elevation | `md.comp.assist-chip.elevated.disabled.container.elevation` | `md.sys.elevation.level0` |
| Elevated container color     | `md.comp.assist-chip.elevated.disabled.container.color`     | `md.sys.color.on-surface` |
| Elevated container opacity   | `md.comp.assist-chip.elevated.disabled.container.opacity`   | 0.12                      |

**Label text**

| Name               | Token                                             | Value                     |
| ------------------ | ------------------------------------------------- | ------------------------- |
| Label text color   | `md.comp.assist-chip.disabled.label-text.color`   | `md.sys.color.on-surface` |
| Label text opacity | `md.comp.assist-chip.disabled.label-text.opacity` | 0.38                      |

**Icon**

| Name         | Token                                                 | Value                     |
| ------------ | ----------------------------------------------------- | ------------------------- |
| Icon color   | `md.comp.assist-chip.with-icon.disabled.icon.color`   | `md.sys.color.on-surface` |
| Icon opacity | `md.comp.assist-chip.with-icon.disabled.icon.opacity` | 0.38                      |

#### Hovered

**Container**

| Name                         | Token                                                    | Value                     |
| ---------------------------- | -------------------------------------------------------- | ------------------------- |
| Elevated container elevation | `md.comp.assist-chip.elevated.hover.container.elevation` | `md.sys.elevation.level2` |

**Label text**

| Name             | Token                                        | Value                     |
| ---------------- | -------------------------------------------- | ------------------------- |
| Label text color | `md.comp.assist-chip.hover.label-text.color` | `md.sys.color.on-surface` |

**State layer**

| Name                | Token                                           | Value                                    |
| ------------------- | ----------------------------------------------- | ---------------------------------------- |
| State layer color   | `md.comp.assist-chip.hover.state-layer.color`   | `md.sys.color.on-surface`                |
| State layer opacity | `md.comp.assist-chip.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

**Icon**

| Name       | Token                                            | Value                  |
| ---------- | ------------------------------------------------ | ---------------------- |
| Icon color | `md.comp.assist-chip.with-icon.hover.icon.color` | `md.sys.color.primary` |

#### Focused

**Focus indicator**

| Name      | Token                                                | Value                                       |
| --------- | ---------------------------------------------------- | ------------------------------------------- |
| Color     | `md.comp.assist-chip.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Thickness | `md.comp.assist-chip.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Offset    | `md.comp.assist-chip.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

**Container**

| Name                               | Token                                                    | Value                     |
| ---------------------------------- | -------------------------------------------------------- | ------------------------- |
| Focus outline color                | `md.comp.assist-chip.flat.focus.outline.color`           | `md.sys.color.on-surface` |
| Elevated focus container elevation | `md.comp.assist-chip.elevated.focus.container.elevation` | `md.sys.elevation.level1` |

**Label text**

| Name             | Token                                        | Value                     |
| ---------------- | -------------------------------------------- | ------------------------- |
| Label text color | `md.comp.assist-chip.focus.label-text.color` | `md.sys.color.on-surface` |

**State layer**

| Name                | Token                                           | Value                                    |
| ------------------- | ----------------------------------------------- | ---------------------------------------- |
| State layer color   | `md.comp.assist-chip.focus.state-layer.color`   | `md.sys.color.on-surface`                |
| State layer opacity | `md.comp.assist-chip.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

**Icon**

| Name       | Token                                            | Value                  |
| ---------- | ------------------------------------------------ | ---------------------- |
| Icon color | `md.comp.assist-chip.with-icon.focus.icon.color` | `md.sys.color.primary` |

#### Pressed

**Container**

| Name                                 | Token                                                      | Value                     |
| ------------------------------------ | ---------------------------------------------------------- | ------------------------- |
| Elevated pressed container elevation | `md.comp.assist-chip.elevated.pressed.container.elevation` | `md.sys.elevation.level1` |

**Label text**

| Name             | Token                                          | Value                     |
| ---------------- | ---------------------------------------------- | ------------------------- |
| Label text color | `md.comp.assist-chip.pressed.label-text.color` | `md.sys.color.on-surface` |

**State layer**

| Name                | Token                                             | Value                                      |
| ------------------- | ------------------------------------------------- | ------------------------------------------ |
| State layer color   | `md.comp.assist-chip.pressed.state-layer.color`   | `md.sys.color.on-surface`                  |
| State layer opacity | `md.comp.assist-chip.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

**Icon**

| Name       | Token                                              | Value                  |
| ---------- | -------------------------------------------------- | ---------------------- |
| Icon color | `md.comp.assist-chip.with-icon.pressed.icon.color` | `md.sys.color.primary` |

#### Dragged

**Container**

| Name                | Token                                             | Value                     |
| ------------------- | ------------------------------------------------- | ------------------------- |
| Container elevation | `md.comp.assist-chip.dragged.container.elevation` | `md.sys.elevation.level4` |

**Label text**

| Name             | Token                                          | Value                     |
| ---------------- | ---------------------------------------------- | ------------------------- |
| Label text color | `md.comp.assist-chip.dragged.label-text.color` | `md.sys.color.on-surface` |

**State layer**

| Name                | Token                                             | Value                                      |
| ------------------- | ------------------------------------------------- | ------------------------------------------ |
| State layer color   | `md.comp.assist-chip.dragged.state-layer.color`   | `md.sys.color.on-surface`                  |
| State layer opacity | `md.comp.assist-chip.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` |

**Icon**

| Name       | Token                                              | Value                  |
| ---------- | -------------------------------------------------- | ---------------------- |
| Icon color | `md.comp.assist-chip.with-icon.dragged.icon.color` | `md.sys.color.primary` |

---

### Filter Chip

#### Filter chip color

![Filter chip diagram numbering 4 color elements.](https://lh3.googleusercontent.com/RNTC_dI5aLvv326OQUVVogDooNsMC6TR_ZCoUF7-AMaq0UQwFLlEh_qfWXur5Qn5_BaM_Wasib1tgaOKBDVNPHe4BoJ2-UWSgnujBLv7tzo=s0)

1. Surface container low (optional)
2. On surface variant
3. On surface variant
4. Outline

#### Enabled

**Container**

| Name                                | Token                                                     | Value                                |
| ----------------------------------- | --------------------------------------------------------- | ------------------------------------ |
| Container shape                     | `md.comp.filter-chip.container.shape`                     | `md.sys.shape.corner.small`          |
| Container height                    | `md.comp.filter-chip.container.height`                    | 32dp                                 |
| Container shadow color              | `md.comp.filter-chip.container.shadow-color`              | `md.sys.color.shadow`                |
| Surface tint layer color            | `md.comp.filter-chip.container.surface-tint-layer.color`  | `md.sys.color.surface-tint`          |
| Container elevation                 | `md.comp.filter-chip.flat.container.elevation`            | `md.sys.elevation.level0`            |
| Unselected outline color            | `md.comp.filter-chip.flat.unselected.outline.color`       | `md.sys.color.outline-variant`       |
| Unselected outline width            | `md.comp.filter-chip.flat.unselected.outline.width`       | 1dp                                  |
| Selected container color            | `md.comp.filter-chip.flat.selected.container.color`       | `md.sys.color.secondary-container`   |
| Selected outline width              | `md.comp.filter-chip.flat.selected.outline.width`         | 0                                    |
| Elevated container elevation        | `md.comp.filter-chip.elevated.container.elevation`        | `md.sys.elevation.level1`            |
| Elevated shadow color               | `md.comp.filter-chip.elevated.container.shadow-color`     | `md.sys.color.shadow`                |
| Elevated unselected container color | `md.comp.filter-chip.elevated.unselected.container.color` | `md.sys.color.surface-container-low` |
| Elevated selected container color   | `md.comp.filter-chip.elevated.selected.container.color`   | `md.sys.color.secondary-container`   |

**Label text**

| Name                        | Token                                             | Value                                      |
| --------------------------- | ------------------------------------------------- | ------------------------------------------ |
| Label text font             | `md.comp.filter-chip.label-text.font`             | `md.sys.typescale.label-large.font`        |
| Label text line height      | `md.comp.filter-chip.label-text.line-height`      | `md.sys.typescale.label-large.line-height` |
| Label text size             | `md.comp.filter-chip.label-text.size`             | `md.sys.typescale.label-large.size`        |
| Label text weight           | `md.comp.filter-chip.label-text.weight`           | `md.sys.typescale.label-large.weight`      |
| Label text tracking         | `md.comp.filter-chip.label-text.tracking`         | `md.sys.typescale.label-large.tracking`    |
| Label text type style       | `md.comp.filter-chip.label-text.type`             | Aa                                         |
| Unselected label text color | `md.comp.filter-chip.unselected.label-text.color` | `md.sys.color.on-surface-variant`          |
| Selected label text color   | `md.comp.filter-chip.selected.label-text.color`   | `md.sys.color.on-secondary-container`      |

**Icon**

| Name                           | Token                                                                   | Value                                 |
| ------------------------------ | ----------------------------------------------------------------------- | ------------------------------------- |
| Icon size                      | `md.comp.filter-chip.with-icon.icon.size`                               | 18dp                                  |
| Selected leading icon color    | `md.comp.filter-chip.with-leading-icon.selected.leading-icon.color`     | `md.sys.color.on-secondary-container` |
| Unselected leading icon color  | `md.comp.filter-chip.with-leading-icon.unselected.leading-icon.color`   | `md.sys.color.primary`                |
| Selected trailing icon color   | `md.comp.filter-chip.with-trailing-icon.selected.trailing-icon.color`   | `md.sys.color.on-secondary-container` |
| Unselected trailing icon color | `md.comp.filter-chip.with-trailing-icon.unselected.trailing-icon.color` | `md.sys.color.on-surface-variant`     |
| Unselected icon color          | `md.comp.filter-chip.with-icon.unselected.icon.color`                   | `md.sys.color.on-surface-variant`     |
| Selected icon color            | `md.comp.filter-chip.with-icon.selected.icon.color`                     | `md.sys.color.on-secondary-container` |

#### Disabled

**Container**

| Name                         | Token                                                          | Value                     |
| ---------------------------- | -------------------------------------------------------------- | ------------------------- |
| Unselected outline color     | `md.comp.filter-chip.flat.disabled.unselected.outline.color`   | `md.sys.color.on-surface` |
| Unselected outline opacity   | `md.comp.filter-chip.flat.disabled.unselected.outline.opacity` | 0.12                      |
| Selected container color     | `md.comp.filter-chip.flat.disabled.selected.container.color`   | `md.sys.color.on-surface` |
| Selected container opacity   | `md.comp.filter-chip.flat.disabled.selected.container.opacity` | 0.12                      |
| Elevated container elevation | `md.comp.filter-chip.elevated.disabled.container.elevation`    | `md.sys.elevation.level0` |
| Elevated container color     | `md.comp.filter-chip.elevated.disabled.container.color`        | `md.sys.color.on-surface` |
| Elevated container opacity   | `md.comp.filter-chip.elevated.disabled.container.opacity`      | 0.12                      |

**Label text**

| Name               | Token                                             | Value                     |
| ------------------ | ------------------------------------------------- | ------------------------- |
| Label text color   | `md.comp.filter-chip.disabled.label-text.color`   | `md.sys.color.on-surface` |
| Label text opacity | `md.comp.filter-chip.disabled.label-text.opacity` | 0.38                      |

**Icon**

| Name                  | Token                                                                   | Value                     |
| --------------------- | ----------------------------------------------------------------------- | ------------------------- |
| Leading icon color    | `md.comp.filter-chip.with-leading-icon.disabled.leading-icon.color`     | `md.sys.color.on-surface` |
| Leading icon opacity  | `md.comp.filter-chip.with-leading-icon.disabled.leading-icon.opacity`   | 0.38                      |
| Trailing icon color   | `md.comp.filter-chip.with-trailing-icon.disabled.trailing-icon.color`   | `md.sys.color.on-surface` |
| Trailing icon opacity | `md.comp.filter-chip.with-trailing-icon.disabled.trailing-icon.opacity` | 0.38                      |
| Icon color            | `md.comp.filter-chip.with-icon.disabled.icon.color`                     | `md.sys.color.on-surface` |
| Icon opacity          | `md.comp.filter-chip.with-icon.disabled.icon.opacity`                   | 0.38                      |

#### Focused

**Focus indicator**

| Name      | Token                                                | Value                                       |
| --------- | ---------------------------------------------------- | ------------------------------------------- |
| Color     | `md.comp.filter-chip.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Thickness | `md.comp.filter-chip.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Offset    | `md.comp.filter-chip.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

**Container**

| Name                                 | Token                                                           | Value                             |
| ------------------------------------ | --------------------------------------------------------------- | --------------------------------- |
| Unselected focus outline color       | `md.comp.filter-chip.flat.unselected.focus.outline.color`       | `md.sys.color.on-surface-variant` |
| Elevated focus container elevation   | `md.comp.filter-chip.elevated.focus.container.elevation`        | `md.sys.elevation.level1`         |
| Selected focus container elevation   | `md.comp.filter-chip.flat.selected.focus.container.elevation`   | `md.sys.elevation.level0`         |
| Unselected focus container elevation | `md.comp.filter-chip.flat.unselected.focus.container.elevation` | `md.sys.elevation.level0`         |

**Label text**

| Name                        | Token                                                   | Value                                 |
| --------------------------- | ------------------------------------------------------- | ------------------------------------- |
| Unselected label text color | `md.comp.filter-chip.unselected.focus.label-text.color` | `md.sys.color.on-surface-variant`     |
| Selected label text color   | `md.comp.filter-chip.selected.focus.label-text.color`   | `md.sys.color.on-secondary-container` |

**State layer**

| Name                           | Token                                                      | Value                                    |
| ------------------------------ | ---------------------------------------------------------- | ---------------------------------------- |
| Unselected state layer color   | `md.comp.filter-chip.unselected.focus.state-layer.color`   | `md.sys.color.on-surface-variant`        |
| Unselected state layer opacity | `md.comp.filter-chip.unselected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Selected state layer color     | `md.comp.filter-chip.selected.focus.state-layer.color`     | `md.sys.color.on-secondary-container`    |
| Selected state layer opacity   | `md.comp.filter-chip.selected.focus.state-layer.opacity`   | `md.sys.state.focus.state-layer-opacity` |

**Icon**

| Name                           | Token                                                                         | Value                                 |
| ------------------------------ | ----------------------------------------------------------------------------- | ------------------------------------- |
| Selected leading icon color    | `md.comp.filter-chip.with-leading-icon.selected.focus.leading-icon.color`     | `md.sys.color.on-secondary-container` |
| Unselected leading icon color  | `md.comp.filter-chip.with-leading-icon.unselected.focus.leading-icon.color`   | `md.sys.color.primary`                |
| Selected trailing icon color   | `md.comp.filter-chip.with-trailing-icon.selected.focus.trailing-icon.color`   | `md.sys.color.on-secondary-container` |
| Unselected trailing icon color | `md.comp.filter-chip.with-trailing-icon.unselected.focus.trailing-icon.color` | `md.sys.color.on-surface-variant`     |
| Unselected icon color          | `md.comp.filter-chip.with-icon.unselected.focus.icon.color`                   | `md.sys.color.on-surface-variant`     |
| Selected icon color            | `md.comp.filter-chip.with-icon.selected.focus.icon.color`                     | `md.sys.color.on-secondary-container` |

#### Hovered

**Container**

| Name                                 | Token                                                           | Value                     |
| ------------------------------------ | --------------------------------------------------------------- | ------------------------- |
| Elevated hover container elevation   | `md.comp.filter-chip.elevated.hover.container.elevation`        | `md.sys.elevation.level2` |
| Selected hover container elevation   | `md.comp.filter-chip.flat.selected.hover.container.elevation`   | `md.sys.elevation.level1` |
| Unselected hover container elevation | `md.comp.filter-chip.flat.unselected.hover.container.elevation` | `md.sys.elevation.level0` |

**Label text**

| Name                        | Token                                                   | Value                                 |
| --------------------------- | ------------------------------------------------------- | ------------------------------------- |
| Unselected label text color | `md.comp.filter-chip.unselected.hover.label-text.color` | `md.sys.color.on-surface-variant`     |
| Selected label text color   | `md.comp.filter-chip.selected.hover.label-text.color`   | `md.sys.color.on-secondary-container` |

**State layer**

| Name                           | Token                                                      | Value                                    |
| ------------------------------ | ---------------------------------------------------------- | ---------------------------------------- |
| Unselected state layer color   | `md.comp.filter-chip.unselected.hover.state-layer.color`   | `md.sys.color.on-surface-variant`        |
| Unselected state layer opacity | `md.comp.filter-chip.unselected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Selected state layer color     | `md.comp.filter-chip.selected.hover.state-layer.color`     | `md.sys.color.on-secondary-container`    |
| Selected state layer opacity   | `md.comp.filter-chip.selected.hover.state-layer.opacity`   | `md.sys.state.hover.state-layer-opacity` |

**Icon**

| Name                           | Token                                                                         | Value                                 |
| ------------------------------ | ----------------------------------------------------------------------------- | ------------------------------------- |
| Selected leading icon color    | `md.comp.filter-chip.with-leading-icon.selected.hover.leading-icon.color`     | `md.sys.color.on-secondary-container` |
| Unselected leading icon color  | `md.comp.filter-chip.with-leading-icon.unselected.hover.leading-icon.color`   | `md.sys.color.primary`                |
| Selected trailing icon color   | `md.comp.filter-chip.with-trailing-icon.selected.hover.trailing-icon.color`   | `md.sys.color.on-secondary-container` |
| Unselected trailing icon color | `md.comp.filter-chip.with-trailing-icon.unselected.hover.trailing-icon.color` | `md.sys.color.on-surface-variant`     |
| Unselected icon color          | `md.comp.filter-chip.with-icon.unselected.hover.icon.color`                   | `md.sys.color.on-surface-variant`     |
| Selected icon color            | `md.comp.filter-chip.with-icon.selected.hover.icon.color`                     | `md.sys.color.on-secondary-container` |

#### Pressed

**Container**

| Name                                   | Token                                                             | Value                     |
| -------------------------------------- | ----------------------------------------------------------------- | ------------------------- |
| Elevated pressed container elevation   | `md.comp.filter-chip.elevated.pressed.container.elevation`        | `md.sys.elevation.level1` |
| Selected pressed container elevation   | `md.comp.filter-chip.flat.selected.pressed.container.elevation`   | `md.sys.elevation.level0` |
| Unselected pressed container elevation | `md.comp.filter-chip.flat.unselected.pressed.container.elevation` | `md.sys.elevation.level0` |

**Label text**

| Name                        | Token                                                     | Value                                 |
| --------------------------- | --------------------------------------------------------- | ------------------------------------- |
| Unselected label text color | `md.comp.filter-chip.unselected.pressed.label-text.color` | `md.sys.color.on-surface-variant`     |
| Selected label text color   | `md.comp.filter-chip.selected.pressed.label-text.color`   | `md.sys.color.on-secondary-container` |

**State layer**

| Name                           | Token                                                        | Value                                      |
| ------------------------------ | ------------------------------------------------------------ | ------------------------------------------ |
| Unselected state layer color   | `md.comp.filter-chip.unselected.pressed.state-layer.color`   | `md.sys.color.on-secondary-container`      |
| Unselected state layer opacity | `md.comp.filter-chip.unselected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Selected state layer color     | `md.comp.filter-chip.selected.pressed.state-layer.color`     | `md.sys.color.on-surface-variant`          |
| Selected state layer opacity   | `md.comp.filter-chip.selected.pressed.state-layer.opacity`   | `md.sys.state.pressed.state-layer-opacity` |

**Icon**

| Name                           | Token                                                                           | Value                                 |
| ------------------------------ | ------------------------------------------------------------------------------- | ------------------------------------- |
| Selected leading icon color    | `md.comp.filter-chip.with-leading-icon.selected.pressed.leading-icon.color`     | `md.sys.color.on-secondary-container` |
| Unselected leading icon color  | `md.comp.filter-chip.with-leading-icon.unselected.pressed.leading-icon.color`   | `md.sys.color.primary`                |
| Selected trailing icon color   | `md.comp.filter-chip.with-trailing-icon.selected.pressed.trailing-icon.color`   | `md.sys.color.on-secondary-container` |
| Unselected trailing icon color | `md.comp.filter-chip.with-trailing-icon.unselected.pressed.trailing-icon.color` | `md.sys.color.on-surface-variant`     |
| Unselected icon color          | `md.comp.filter-chip.with-icon.unselected.pressed.icon.color`                   | `md.sys.color.on-surface-variant`     |
| Selected icon color            | `md.comp.filter-chip.with-icon.selected.pressed.icon.color`                     | `md.sys.color.on-secondary-container` |

#### Dragged

**Container**

| Name                | Token                                             | Value                     |
| ------------------- | ------------------------------------------------- | ------------------------- |
| Container elevation | `md.comp.filter-chip.dragged.container.elevation` | `md.sys.elevation.level4` |

**Label text**

| Name                        | Token                                                     | Value                                 |
| --------------------------- | --------------------------------------------------------- | ------------------------------------- |
| Unselected label text color | `md.comp.filter-chip.unselected.dragged.label-text.color` | `md.sys.color.on-surface-variant`     |
| Selected label text color   | `md.comp.filter-chip.selected.dragged.label-text.color`   | `md.sys.color.on-secondary-container` |

**State layer**

| Name                           | Token                                                        | Value                                      |
| ------------------------------ | ------------------------------------------------------------ | ------------------------------------------ |
| Unselected state layer color   | `md.comp.filter-chip.unselected.dragged.state-layer.color`   | `md.sys.color.on-surface-variant`          |
| Unselected state layer opacity | `md.comp.filter-chip.unselected.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` |
| Selected state layer color     | `md.comp.filter-chip.selected.dragged.state-layer.color`     | `md.sys.color.on-secondary-container`      |
| Selected state layer opacity   | `md.comp.filter-chip.selected.dragged.state-layer.opacity`   | `md.sys.state.dragged.state-layer-opacity` |

**Icon**

| Name                           | Token                                                                           | Value                                 |
| ------------------------------ | ------------------------------------------------------------------------------- | ------------------------------------- |
| Selected leading icon color    | `md.comp.filter-chip.with-leading-icon.selected.dragged.leading-icon.color`     | `md.sys.color.on-secondary-container` |
| Unselected leading icon color  | `md.comp.filter-chip.with-leading-icon.unselected.dragged.leading-icon.color`   | `md.sys.color.primary`                |
| Selected trailing icon color   | `md.comp.filter-chip.with-trailing-icon.selected.dragged.trailing-icon.color`   | `md.sys.color.on-secondary-container` |
| Unselected trailing icon color | `md.comp.filter-chip.with-trailing-icon.unselected.dragged.trailing-icon.color` | `md.sys.color.on-surface-variant`     |
| Unselected icon color          | `md.comp.filter-chip.with-icon.unselected.dragged.icon.color`                   | `md.sys.color.on-surface-variant`     |
| Selected icon color            | `md.comp.filter-chip.with-icon.selected.dragged.icon.color`                     | `md.sys.color.on-secondary-container` |

---

### Input Chip

#### Input chip color

![Input chip diagram numbering 5 color elements.](https://lh3.googleusercontent.com/YmMzczrJL0g0MAMFwW2zs8up57xJzcAxNJraHceXpaVZVPAEN2ukdjQwHpuYnVjEKQrnC-KGaC09_KYKNpWgMXg5iqhm8xGleC3-wuG0E0XYwg=s0)

1. On surface variant
2. Surface container low (optional)
3. On surface variant
4. On surface variant
5. Outline variant
6. Primary
7. Secondary container
8. On secondary container
9. On secondary container

#### Enabled

**Avatar**

| Name         | Token                                         | Value                      |
| ------------ | --------------------------------------------- | -------------------------- |
| Avatar size  | `md.comp.input-chip.with-avatar.avatar.size`  | 24dp                       |
| Avatar shape | `md.comp.input-chip.with-avatar.avatar.shape` | `md.sys.shape.corner.full` |

**Container**

| Name                     | Token                                         | Value                              |
| ------------------------ | --------------------------------------------- | ---------------------------------- |
| Container shape          | `md.comp.input-chip.container.shape`          | `md.sys.shape.corner.small`        |
| Container height         | `md.comp.input-chip.container.height`         | 32dp                               |
| Container elevation      | `md.comp.input-chip.container.elevation`      | `md.sys.elevation.level0`          |
| Unselected outline color | `md.comp.input-chip.unselected.outline.color` | `md.sys.color.outline-variant`     |
| Unselected outline width | `md.comp.input-chip.unselected.outline.width` | 1dp                                |
| Selected container color | `md.comp.input-chip.selected.container.color` | `md.sys.color.secondary-container` |
| Selected outline width   | `md.comp.input-chip.selected.outline.width`   | 0                                  |
| Outline color            | `md.comp.input-chip.outline.color`            | `md.sys.color.outline`             |
| Outline width            | `md.comp.input-chip.outline.width`            | 1dp                                |

**Label text**

| Name                        | Token                                            | Value                                      |
| --------------------------- | ------------------------------------------------ | ------------------------------------------ |
| Label text font             | `md.comp.input-chip.label-text.font`             | `md.sys.typescale.label-large.font`        |
| Label text line height      | `md.comp.input-chip.label-text.line-height`      | `md.sys.typescale.label-large.line-height` |
| Label text size             | `md.comp.input-chip.label-text.size`             | `md.sys.typescale.label-large.size`        |
| Label text weight           | `md.comp.input-chip.label-text.weight`           | `md.sys.typescale.label-large.weight`      |
| Label text tracking         | `md.comp.input-chip.label-text.tracking`         | `md.sys.typescale.label-large.tracking`    |
| Label text type style       | `md.comp.input-chip.label-text.type`             | Aa                                         |
| Selected label text color   | `md.comp.input-chip.selected.label-text.color`   | `md.sys.color.on-secondary-container`      |
| Unselected label text color | `md.comp.input-chip.unselected.label-text.color` | `md.sys.color.on-surface-variant`          |
| Label text color            | `md.comp.input-chip.label-text.color`            | `md.sys.color.on-surface-variant`          |

**Leading icon**

| Name                          | Token                                                                | Value                             |
| ----------------------------- | -------------------------------------------------------------------- | --------------------------------- |
| Leading icon size             | `md.comp.input-chip.with-leading-icon.leading-icon.size`             | 18dp                              |
| Selected leading icon color   | `md.comp.input-chip.with-leading-icon.selected.leading-icon.color`   | `md.sys.color.primary`            |
| Unselected leading icon color | `md.comp.input-chip.with-leading-icon.unselected.leading-icon.color` | `md.sys.color.on-surface-variant` |
| Leading icon color            | `md.comp.input-chip.with-leading-icon.leading-icon.color`            | `md.sys.color.on-surface-variant` |

**Trailing icon**

| Name                           | Token                                                                  | Value                                 |
| ------------------------------ | ---------------------------------------------------------------------- | ------------------------------------- |
| Trailing icon size             | `md.comp.input-chip.with-trailing-icon.trailing-icon.size`             | 18dp                                  |
| Selected trailing icon color   | `md.comp.input-chip.with-trailing-icon.selected.trailing-icon.color`   | `md.sys.color.on-secondary-container` |
| Unselected trailing icon color | `md.comp.input-chip.with-trailing-icon.unselected.trailing-icon.color` | `md.sys.color.on-surface-variant`     |
| Trailing icon color            | `md.comp.input-chip.with-trailing-icon.trailing-icon.color`            | `md.sys.color.on-surface-variant`     |

#### Disabled

**Container**

| Name                       | Token                                                    | Value                     |
| -------------------------- | -------------------------------------------------------- | ------------------------- |
| Unselected outline color   | `md.comp.input-chip.disabled.unselected.outline.color`   | `md.sys.color.on-surface` |
| Unselected outline opacity | `md.comp.input-chip.disabled.unselected.outline.opacity` | 0.12                      |
| Selected container color   | `md.comp.input-chip.disabled.selected.container.color`   | `md.sys.color.on-surface` |
| Selected container opacity | `md.comp.input-chip.disabled.selected.container.opacity` | 0.12                      |
| Outline color              | `md.comp.input-chip.disabled.outline.color`              | `md.sys.color.on-surface` |
| Outline opacity            | `md.comp.input-chip.disabled.outline.opacity`            | 0.12                      |

**Label text**

| Name               | Token                                            | Value                     |
| ------------------ | ------------------------------------------------ | ------------------------- |
| Label text color   | `md.comp.input-chip.disabled.label-text.color`   | `md.sys.color.on-surface` |
| Label text opacity | `md.comp.input-chip.disabled.label-text.opacity` | 0.38                      |

**Leading icon**

| Name                 | Token                                                                | Value                     |
| -------------------- | -------------------------------------------------------------------- | ------------------------- |
| Leading icon color   | `md.comp.input-chip.with-leading-icon.disabled.leading-icon.color`   | `md.sys.color.on-surface` |
| Leading icon opacity | `md.comp.input-chip.with-leading-icon.disabled.leading-icon.opacity` | 0.38                      |

**Trailing icon**

| Name                  | Token                                                                  | Value                     |
| --------------------- | ---------------------------------------------------------------------- | ------------------------- |
| Trailing icon color   | `md.comp.input-chip.with-trailing-icon.disabled.trailing-icon.color`   | `md.sys.color.on-surface` |
| Trailing icon opacity | `md.comp.input-chip.with-trailing-icon.disabled.trailing-icon.opacity` | 0.38                      |

**Avatar**

| Name           | Token                                                    | Value |
| -------------- | -------------------------------------------------------- | ----- |
| Avatar opacity | `md.comp.input-chip.with-avatar.disabled.avatar.opacity` | 0.38  |

#### Hovered

**Label text**

| Name                        | Token                                                  | Value                                 |
| --------------------------- | ------------------------------------------------------ | ------------------------------------- |
| Unselected label text color | `md.comp.input-chip.unselected.hover.label-text.color` | `md.sys.color.on-surface-variant`     |
| Selected label text color   | `md.comp.input-chip.selected.hover.label-text.color`   | `md.sys.color.on-secondary-container` |
| Label text color            | `md.comp.input-chip.hover.label-text.color`            | `md.sys.color.on-surface-variant`     |

**State layer**

| Name                           | Token                                                     | Value                                    |
| ------------------------------ | --------------------------------------------------------- | ---------------------------------------- |
| Unselected state layer color   | `md.comp.input-chip.unselected.hover.state-layer.color`   | `md.sys.color.on-surface-variant`        |
| Unselected state layer opacity | `md.comp.input-chip.unselected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Selected state layer color     | `md.comp.input-chip.selected.hover.state-layer.color`     | `md.sys.color.on-secondary-container`    |
| Selected state layer opacity   | `md.comp.input-chip.selected.hover.state-layer.opacity`   | `md.sys.state.hover.state-layer-opacity` |
| State layer color              | `md.comp.input-chip.hover.state-layer.color`              | `md.sys.color.on-surface-variant`        |
| State layer opacity            | `md.comp.input-chip.hover.state-layer.opacity`            | `md.sys.state.hover.state-layer-opacity` |

**Leading icon**

| Name                          | Token                                                                      | Value                             |
| ----------------------------- | -------------------------------------------------------------------------- | --------------------------------- |
| Unselected leading icon color | `md.comp.input-chip.with-leading-icon.unselected.hover.leading-icon.color` | `md.sys.color.primary`            |
| Selected leading icon color   | `md.comp.input-chip.with-leading-icon.selected.hover.leading-icon.color`   | `md.sys.color.primary`            |
| Leading icon color            | `md.comp.input-chip.with-leading-icon.hover.leading-icon.color`            | `md.sys.color.on-surface-variant` |

**Trailing icon**

| Name                           | Token                                                                        | Value                                 |
| ------------------------------ | ---------------------------------------------------------------------------- | ------------------------------------- |
| Unselected trailing icon color | `md.comp.input-chip.with-trailing-icon.unselected.hover.trailing-icon.color` | `md.sys.color.on-surface-variant`     |
| Selected trailing icon color   | `md.comp.input-chip.with-trailing-icon.selected.hover.trailing-icon.color`   | `md.sys.color.on-secondary-container` |
| Trailing icon color            | `md.comp.input-chip.with-trailing-icon.hover.trailing-icon.color`            | `md.sys.color.on-surface-variant`     |

#### Focused

**Focus indicator**

| Name      | Token                                               | Value                                       |
| --------- | --------------------------------------------------- | ------------------------------------------- |
| Color     | `md.comp.input-chip.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Thickness | `md.comp.input-chip.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Offset    | `md.comp.input-chip.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

**Container**

| Name                           | Token                                               | Value                             |
| ------------------------------ | --------------------------------------------------- | --------------------------------- |
| Unselected focus outline color | `md.comp.input-chip.unselected.focus.outline.color` | `md.sys.color.on-surface-variant` |
| Focus outline color            | `md.comp.input-chip.focus.outline.color`            | `md.sys.color.on-surface-variant` |

**Label text**

| Name                        | Token                                                  | Value                                 |
| --------------------------- | ------------------------------------------------------ | ------------------------------------- |
| Unselected label text color | `md.comp.input-chip.unselected.focus.label-text.color` | `md.sys.color.on-surface-variant`     |
| Selected label text color   | `md.comp.input-chip.selected.focus.label-text.color`   | `md.sys.color.on-secondary-container` |
| Label text color            | `md.comp.input-chip.focus.label-text.color`            | `md.sys.color.on-surface-variant`     |

**State layer**

| Name                           | Token                                                     | Value                                    |
| ------------------------------ | --------------------------------------------------------- | ---------------------------------------- |
| Unselected state layer color   | `md.comp.input-chip.unselected.focus.state-layer.color`   | `md.sys.color.on-surface-variant`        |
| Unselected state layer opacity | `md.comp.input-chip.unselected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Selected state layer color     | `md.comp.input-chip.selected.focus.state-layer.color`     | `md.sys.color.on-secondary-container`    |
| Selected state layer opacity   | `md.comp.input-chip.selected.focus.state-layer.opacity`   | `md.sys.state.focus.state-layer-opacity` |
| State layer color              | `md.comp.input-chip.focus.state-layer.color`              | `md.sys.color.on-surface-variant`        |
| State layer opacity            | `md.comp.input-chip.focus.state-layer.opacity`            | `md.sys.state.focus.state-layer-opacity` |

**Leading icon**

| Name                          | Token                                                                      | Value                             |
| ----------------------------- | -------------------------------------------------------------------------- | --------------------------------- |
| Unselected leading icon color | `md.comp.input-chip.with-leading-icon.unselected.focus.leading-icon.color` | `md.sys.color.primary`            |
| Selected leading icon color   | `md.comp.input-chip.with-leading-icon.selected.focus.leading-icon.color`   | `md.sys.color.primary`            |
| Leading icon color            | `md.comp.input-chip.with-leading-icon.focus.leading-icon.color`            | `md.sys.color.on-surface-variant` |

**Trailing icon**

| Name                           | Token                                                                        | Value                                 |
| ------------------------------ | ---------------------------------------------------------------------------- | ------------------------------------- |
| Unselected trailing icon color | `md.comp.input-chip.with-trailing-icon.unselected.focus.trailing-icon.color` | `md.sys.color.on-surface-variant`     |
| Selected trailing icon color   | `md.comp.input-chip.with-trailing-icon.selected.focus.trailing-icon.color`   | `md.sys.color.on-secondary-container` |
| Trailing icon color            | `md.comp.input-chip.with-trailing-icon.focus.trailing-icon.color`            | `md.sys.color.on-surface-variant`     |

#### Pressed

**Label text**

| Name                        | Token                                                    | Value                                 |
| --------------------------- | -------------------------------------------------------- | ------------------------------------- |
| Unselected label text color | `md.comp.input-chip.unselected.pressed.label-text.color` | `md.sys.color.on-surface-variant`     |
| Selected label text color   | `md.comp.input-chip.selected.pressed.label-text.color`   | `md.sys.color.on-secondary-container` |
| Label text color            | `md.comp.input-chip.pressed.label-text.color`            | `md.sys.color.on-surface-variant`     |

**State layer**

| Name                           | Token                                                       | Value                                      |
| ------------------------------ | ----------------------------------------------------------- | ------------------------------------------ |
| Unselected state layer color   | `md.comp.input-chip.unselected.pressed.state-layer.color`   | `md.sys.color.on-surface-variant`          |
| Unselected state layer opacity | `md.comp.input-chip.unselected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Selected state layer color     | `md.comp.input-chip.selected.pressed.state-layer.color`     | `md.sys.color.on-secondary-container`      |
| Selected state layer opacity   | `md.comp.input-chip.selected.pressed.state-layer.opacity`   | `md.sys.state.pressed.state-layer-opacity` |
| State layer color              | `md.comp.input-chip.pressed.state-layer.color`              | `md.sys.color.on-surface-variant`          |
| State layer opacity            | `md.comp.input-chip.pressed.state-layer.opacity`            | `md.sys.state.pressed.state-layer-opacity` |

**Leading icon**

| Name                          | Token                                                                        | Value                             |
| ----------------------------- | ---------------------------------------------------------------------------- | --------------------------------- |
| Unselected leading icon color | `md.comp.input-chip.with-leading-icon.unselected.pressed.leading-icon.color` | `md.sys.color.primary`            |
| Selected leading icon color   | `md.comp.input-chip.with-leading-icon.selected.pressed.leading-icon.color`   | `md.sys.color.primary`            |
| Leading icon color            | `md.comp.input-chip.with-leading-icon.pressed.leading-icon.color`            | `md.sys.color.on-surface-variant` |

**Trailing icon**

| Name                           | Token                                                                          | Value                                 |
| ------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------- |
| Unselected trailing icon color | `md.comp.input-chip.with-trailing-icon.unselected.pressed.trailing-icon.color` | `md.sys.color.on-surface-variant`     |
| Selected trailing icon color   | `md.comp.input-chip.with-trailing-icon.selected.pressed.trailing-icon.color`   | `md.sys.color.on-secondary-container` |
| Trailing icon color            | `md.comp.input-chip.with-trailing-icon.pressed.trailing-icon.color`            | `md.sys.color.on-surface-variant`     |

#### Dragged

**Container**

| Name                | Token                                            | Value                     |
| ------------------- | ------------------------------------------------ | ------------------------- |
| Container elevation | `md.comp.input-chip.dragged.container.elevation` | `md.sys.elevation.level4` |

**Label text**

| Name                        | Token                                                    | Value                                 |
| --------------------------- | -------------------------------------------------------- | ------------------------------------- |
| Unselected label text color | `md.comp.input-chip.unselected.dragged.label-text.color` | `md.sys.color.on-surface-variant`     |
| Selected label text color   | `md.comp.input-chip.selected.dragged.label-text.color`   | `md.sys.color.on-secondary-container` |
| Label text color            | `md.comp.input-chip.dragged.label-text.color`            | `md.sys.color.on-surface-variant`     |

**State layer**

| Name                           | Token                                                       | Value                                      |
| ------------------------------ | ----------------------------------------------------------- | ------------------------------------------ |
| Unselected state layer color   | `md.comp.input-chip.unselected.dragged.state-layer.color`   | `md.sys.color.on-surface-variant`          |
| Unselected state layer opacity | `md.comp.input-chip.unselected.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` |
| Selected state layer color     | `md.comp.input-chip.selected.dragged.state-layer.color`     | `md.sys.color.on-secondary-container`      |
| Selected state layer opacity   | `md.comp.input-chip.selected.dragged.state-layer.opacity`   | `md.sys.state.dragged.state-layer-opacity` |
| State layer color              | `md.comp.input-chip.dragged.state-layer.color`              | `md.sys.color.on-surface-variant`          |
| State layer opacity            | `md.comp.input-chip.dragged.state-layer.opacity`            | `md.sys.state.dragged.state-layer-opacity` |

**Trailing icon**

| Name                           | Token                                                                          | Value                             |
| ------------------------------ | ------------------------------------------------------------------------------ | --------------------------------- |
| Unselected trailing icon color | `md.comp.input-chip.with-trailing-icon.unselected.dragged.trailing-icon.color` | `md.sys.color.primary`            |
| Selected trailing icon color   | `md.comp.input-chip.with-trailing-icon.selected.dragged.trailing-icon.color`   | `md.sys.color.primary`            |
| Trailing icon color            | `md.comp.input-chip.with-trailing-icon.dragged.trailing-icon.color`            | `md.sys.color.on-surface-variant` |

**Leading icon**

| Name                          | Token                                                                        | Value                                 |
| ----------------------------- | ---------------------------------------------------------------------------- | ------------------------------------- |
| Unselected leading icon color | `md.comp.input-chip.with-leading-icon.unselected.dragged.leading-icon.color` | `md.sys.color.on-surface-variant`     |
| Selected leading icon color   | `md.comp.input-chip.with-leading-icon.selected.dragged.leading-icon.color`   | `md.sys.color.on-secondary-container` |
| Leading icon color            | `md.comp.input-chip.with-leading-icon.dragged.leading-icon.color`            | `md.sys.color.on-surface-variant`     |

---

### Suggestion Chip

#### Suggestion chip color

![Suggestion chip diagram numbering 3 color elements.](https://lh3.googleusercontent.com/4Ni_EPMelCZDcAAcbhbIDdGj4ER5JGlUjPOtgO4Qx1IIooRh25eJo_y7LgMr7yD0tX-PcXu3vY6O7u-wlJRgFUK23JxG69NgKqYz6sSPywNx=s0)

1. Outline
2. Surface container low (optional)
3. On surface variant

#### Enabled

**Container**

| Name                            | Token                                                        | Value                                |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------------ |
| Container shape                 | `md.comp.suggestion-chip.container.shape`                    | `md.sys.shape.corner.small`          |
| Container height                | `md.comp.suggestion-chip.container.height`                   | 32dp                                 |
| Container elevation             | `md.comp.suggestion-chip.flat.container.elevation`           | `md.sys.elevation.level0`            |
| Outline color                   | `md.comp.suggestion-chip.flat.outline.color`                 | `md.sys.color.outline-variant`       |
| Outline width                   | `md.comp.suggestion-chip.flat.outline.width`                 | 1dp                                  |
| Elevated container elevation    | `md.comp.suggestion-chip.elevated.container.elevation`       | `md.sys.elevation.level1`            |
| Elevated container color        | `md.comp.suggestion-chip.elevated.container.color`           | `md.sys.color.surface-container-low` |
| Elevated container shadow color | `md.comp.suggestion-chip.elevated.container.shadow-color`    | `md.sys.color.shadow`                |
| Surface tint color              | `md.comp.suggestion-chip.container.surface-tint-layer.color` | `md.sys.color.surface-tint`          |

**Icon**

| Name               | Token                                                          | Value                  |
| ------------------ | -------------------------------------------------------------- | ---------------------- |
| Leading icon color | `md.comp.suggestion-chip.with-leading-icon.leading-icon.color` | `md.sys.color.primary` |
| Leading icon size  | `md.comp.suggestion-chip.with-leading-icon.leading-icon.size`  | 18dp                   |

**Label text**

| Name                   | Token                                            | Value                                      |
| ---------------------- | ------------------------------------------------ | ------------------------------------------ |
| Label text font        | `md.comp.suggestion-chip.label-text.font`        | `md.sys.typescale.label-large.font`        |
| Label text line height | `md.comp.suggestion-chip.label-text.line-height` | `md.sys.typescale.label-large.line-height` |
| Label text size        | `md.comp.suggestion-chip.label-text.size`        | `md.sys.typescale.label-large.size`        |
| Label text weight      | `md.comp.suggestion-chip.label-text.weight`      | `md.sys.typescale.label-large.weight`      |
| Label text tracking    | `md.comp.suggestion-chip.label-text.tracking`    | `md.sys.typescale.label-large.tracking`    |
| Label text type style  | `md.comp.suggestion-chip.label-text.type`        | Aa                                         |
| Label text color       | `md.comp.suggestion-chip.label-text.color`       | `md.sys.color.on-surface-variant`          |

#### Disabled

**Container**

| Name                         | Token                                                           | Value                     |
| ---------------------------- | --------------------------------------------------------------- | ------------------------- |
| Outline color                | `md.comp.suggestion-chip.flat.disabled.outline.color`           | `md.sys.color.on-surface` |
| Outline opacity              | `md.comp.suggestion-chip.flat.disabled.outline.opacity`         | 0.12                      |
| Elevated container elevation | `md.comp.suggestion-chip.elevated.disabled.container.elevation` | `md.sys.elevation.level0` |
| Elevated container color     | `md.comp.suggestion-chip.elevated.disabled.container.color`     | `md.sys.color.on-surface` |
| Elevated container opacity   | `md.comp.suggestion-chip.elevated.disabled.container.opacity`   | 0.12                      |

**Icon**

| Name                 | Token                                                                     | Value                     |
| -------------------- | ------------------------------------------------------------------------- | ------------------------- |
| Leading icon color   | `md.comp.suggestion-chip.with-leading-icon.disabled.leading-icon.color`   | `md.sys.color.on-surface` |
| Leading icon opacity | `md.comp.suggestion-chip.with-leading-icon.disabled.leading-icon.opacity` | 0.38                      |

**Label text**

| Name               | Token                                                 | Value                     |
| ------------------ | ----------------------------------------------------- | ------------------------- |
| Label text color   | `md.comp.suggestion-chip.disabled.label-text.color`   | `md.sys.color.on-surface` |
| Label text opacity | `md.comp.suggestion-chip.disabled.label-text.opacity` | 0.38                      |

#### Hovered

**Container**

| Name                               | Token                                                        | Value                     |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------- |
| Elevated hover container elevation | `md.comp.suggestion-chip.elevated.hover.container.elevation` | `md.sys.elevation.level2` |

**Icon**

| Name               | Token                                                                | Value                  |
| ------------------ | -------------------------------------------------------------------- | ---------------------- |
| Leading icon color | `md.comp.suggestion-chip.with-leading-icon.hover.leading-icon.color` | `md.sys.color.primary` |

**Label text**

| Name             | Token                                            | Value                             |
| ---------------- | ------------------------------------------------ | --------------------------------- |
| Label text color | `md.comp.suggestion-chip.hover.label-text.color` | `md.sys.color.on-surface-variant` |

**State layer**

| Name                | Token                                               | Value                                    |
| ------------------- | --------------------------------------------------- | ---------------------------------------- |
| State layer color   | `md.comp.suggestion-chip.hover.state-layer.color`   | `md.sys.color.on-surface-variant`        |
| State layer opacity | `md.comp.suggestion-chip.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |

#### Focused

**Focus indicator**

| Name      | Token                                                    | Value                                       |
| --------- | -------------------------------------------------------- | ------------------------------------------- |
| Color     | `md.comp.suggestion-chip.focus.indicator.color`          | `md.sys.color.secondary`                    |
| Thickness | `md.comp.suggestion-chip.focus.indicator.thickness`      | `md.sys.state.focus-indicator.thickness`    |
| Offset    | `md.comp.suggestion-chip.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` |

**Container**

| Name                               | Token                                                        | Value                             |
| ---------------------------------- | ------------------------------------------------------------ | --------------------------------- |
| Focus outline color                | `md.comp.suggestion-chip.flat.focus.outline.color`           | `md.sys.color.on-surface-variant` |
| Elevated focus container elevation | `md.comp.suggestion-chip.elevated.focus.container.elevation` | `md.sys.elevation.level1`         |

**Icon**

| Name               | Token                                                                | Value                  |
| ------------------ | -------------------------------------------------------------------- | ---------------------- |
| Leading icon color | `md.comp.suggestion-chip.with-leading-icon.focus.leading-icon.color` | `md.sys.color.primary` |

**Label text**

| Name             | Token                                            | Value                             |
| ---------------- | ------------------------------------------------ | --------------------------------- |
| Label text color | `md.comp.suggestion-chip.focus.label-text.color` | `md.sys.color.on-surface-variant` |

**State layer**

| Name                | Token                                               | Value                                    |
| ------------------- | --------------------------------------------------- | ---------------------------------------- |
| State layer color   | `md.comp.suggestion-chip.focus.state-layer.color`   | `md.sys.color.on-surface-variant`        |
| State layer opacity | `md.comp.suggestion-chip.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |

#### Pressed

**Container**

| Name                                 | Token                                                          | Value                     |
| ------------------------------------ | -------------------------------------------------------------- | ------------------------- |
| Elevated pressed container elevation | `md.comp.suggestion-chip.elevated.pressed.container.elevation` | `md.sys.elevation.level1` |

**Icon**

| Name               | Token                                                                  | Value                  |
| ------------------ | ---------------------------------------------------------------------- | ---------------------- |
| Leading icon color | `md.comp.suggestion-chip.with-leading-icon.pressed.leading-icon.color` | `md.sys.color.primary` |

**Label text**

| Name             | Token                                              | Value                             |
| ---------------- | -------------------------------------------------- | --------------------------------- |
| Label text color | `md.comp.suggestion-chip.pressed.label-text.color` | `md.sys.color.on-surface-variant` |

**State layer**

| Name                | Token                                                 | Value                                      |
| ------------------- | ----------------------------------------------------- | ------------------------------------------ |
| State layer color   | `md.comp.suggestion-chip.pressed.state-layer.color`   | `md.sys.color.on-surface-variant`          |
| State layer opacity | `md.comp.suggestion-chip.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |

#### Dragged

**Container**

| Name                | Token                                                 | Value                     |
| ------------------- | ----------------------------------------------------- | ------------------------- |
| Container elevation | `md.comp.suggestion-chip.dragged.container.elevation` | `md.sys.elevation.level4` |

**Icon**

| Name               | Token                                                                  | Value                  |
| ------------------ | ---------------------------------------------------------------------- | ---------------------- |
| Leading icon color | `md.comp.suggestion-chip.with-leading-icon.dragged.leading-icon.color` | `md.sys.color.primary` |

**Label text**

| Name             | Token                                              | Value                             |
| ---------------- | -------------------------------------------------- | --------------------------------- |
| Label text color | `md.comp.suggestion-chip.dragged.label-text.color` | `md.sys.color.on-surface-variant` |

**State layer**

| Name                | Token                                                 | Value                                      |
| ------------------- | ----------------------------------------------------- | ------------------------------------------ |
| State layer color   | `md.comp.suggestion-chip.dragged.state-layer.color`   | `md.sys.color.on-surface-variant`          |
| State layer opacity | `md.comp.suggestion-chip.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` |

---

## Interaction States

All four chip variants share the same six interaction states:

### Assist chip states

![36 assist chips illustrating combinations of styles, selection and non-selection, and 6 interaction states.](https://lh3.googleusercontent.com/s6LyjzP2TrQRGesL7fSbWcwEr94zeAaCTl8Zj7vDx6EsJ9Hn-9fNov0mtodXBs61mOtW6OnsmyPnirrfIzoRgYUxPDTIeH_4bXq-29iBOnxE=s0)

### Filter chip states

![24 filter chips showing combinations of elevated, non-elevated, selected, and non-selected styles, and 6 interaction states.](https://lh3.googleusercontent.com/KftllQmRE7STKHvBYUhxG13rWSMWMWOj_Y3mqpHMyKpj4Exvl-J7B4cBwB1_Cexx8oaCnXYw7hdPnk16YmZS-zyVWB7vbokHFJjfkahSM0Eo=s0)

### Input chip states

![33 input chips illustrating combinations of styles, selection and non-selection, and 6 interaction states.](https://lh3.googleusercontent.com/ganq0HIgyGsa-HH5bnqU95oJCYypADT4v0LOgsmwQ9ek5B45GtD6EgJCpd589BbA4-tDKOpNCksyDIkrq7krkMG8_nJ0eHSu30BIj7OCqFE=s0)

### Suggestion chip states

![24 suggestion chips illustrating combinations of styles across 6 interaction states.](https://lh3.googleusercontent.com/YYoIuUfDsUQqPR--eP-zfow9SJVnjSlY060t1WUqtVUdBkynNCTTe1IK16I4rpfBRRpHrZqDKEYftwwhLFa18FYaI3-aRJpqPTUpr1w5ekG0=s0)

| #   | State        | Visual changes                                        |
| --- | ------------ | ----------------------------------------------------- |
| 1   | **Enabled**  | Default appearance                                    |
| 2   | **Disabled** | Reduced opacity (outline 0.12, label/icon 0.38)       |
| 3   | **Hovered**  | State layer appears; elevated chips gain +1 elevation |
| 4   | **Focused**  | Focus indicator ring; state layer                     |
| 5   | **Pressed**  | State layer at pressed opacity; ripple effect         |
| 6   | **Dragged**  | Elevated to level 4                                   |

---

## Accessibility

### Interaction & Style

- Chip label text requires at least **3:1 contrast** with the background
- Action-performing chips should present the same semantics as a button to the platform's accessibility API

![The chip label needs to pass 3:1 contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm99z66s4-01.png?alt=media&token=f43b4651-be9f-4a1a-a7d2-4658f1096a47=s0)

### Horizontal Overflow

When chips overflow a single row, provide a way to display all at once and avoid scrolling:

**Reflow method:** Use a leading "Show all" filter chip that shifts content down and expands the row to show all chips.

**Menu method:** Use a leading button that opens a menu of all chip options. Avoids shifting content below. Do not use this method for chips with a secondary action (like a remove icon).

### Keyboard Navigation

| Key                 | Action                                            |
| ------------------- | ------------------------------------------------- |
| Tab                 | Moves focus to the chip set                       |
| Space or Enter      | Activates, selects, or deselects the focused chip |
| Backspace or Delete | Removes or triggers delete on a focused chip      |
| Arrow keys          | Moves focus between chips in the set              |

### Labeling

| Element                             | A11y label                                    | Role (Web)         | Role (Android)     | Role (Compose)     |
| ----------------------------------- | --------------------------------------------- | ------------------ | ------------------ | ------------------ |
| Image / Icon within chip            | Hidden (decorative)                           | -                  | -                  | -                  |
| Basic chip (one action)             | "{chip content}"                              | gridcell           | button             | button             |
| Selectable chip                     | "{chip content}"                              | gridcell           | radio button       | checkbox           |
| Remove icon (no other action)       | "Remove {chip content}"                       | -                  | -                  | -                  |
| Two actions (e.g., select + remove) | "{chip content}" then "Remove {chip content}" | button or checkbox | button or checkbox | button or checkbox |

The accessibility label for a chip is its label text. Additional actions (like remove) are labeled separately.

![Accessibility tags for a chip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmderzcwe-02.png?alt=media&token=75d7c645-1d21-4915-8290-080815f8529c=s0)

### Multi-select

In multi-select chip sets, **Space** or **Enter** selects the focused chip without deselecting others. The same keys also deselect a selected chip. Only one chip can hold focus at a time.

![Accessibility tags for a multi-select chip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmderoau5-25.png?alt=media&token=16369c04-2f10-46eb-b761-0d25cd0b85c7=s0)

### Drop-down list

The accessibility label should match each list item's text label. For items with both text and icon, mark the icon as decorative to avoid redundant verbalizations.

![Accessibility tags for a drop-down list chip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd78nzr3-04.png?alt=media&token=4e0b3550-1e77-44ea-82a9-cfafaacadf98=s0)

### Input chip remove action

Display the remove icon whenever a chip can be removed. On mobile, if remove is the only action, the icon can be omitted — the chip can be removed by selecting it and pressing **Delete**.

- If the chip only has a remove action: the entire chip and icon are one focusable element
- If the chip has a second action (like select): the chip content and remove icon are two separate focusable elements

![A focused remove action within a chip.](https://lh3.googleusercontent.com/6ogPU6jU6ecd-bIOHVBsztMIVbrMh9QFdEYLITFw2dbd9atxkbPCtGrNHZfykUnYCCmQUR4-XY9KTUDAeDG3GCh60nDvFFCG41_E8r2o88yq=s0)

### Density

Do not apply density to chips by default — this reduces touch targets below the recommended minimum of **48×48 CSS pixels**. Instead, let users opt into higher density through a layout setting or theme. Keep the control to revert density at minimum 48×48 pixels.

---

## M2 → M3 Differences

<table><tr>
<td><img src="https://lh3.googleusercontent.com/2QvL9BG6dybkEq8-MxokwRvnU_5-Yxey0SZtSxa9o6KlczyP2t5hAtUxTyZRJbGF9i7m6oOrZCWKJT4CQikVZP3D0cxsKj0yYaMJT4QjnE5q=s0" /><br/>M2: Variants are input, choice, filter, and action chips</td>
<td><img src="https://lh3.googleusercontent.com/3W0HJhJSBgfi_3TWYvZlXCPDg42elT_0VwxJmTTK5l61ZFdC9l9mPQPqPcUOBXNIce2r3aDWGNECHLcoe41RXvv2rr1bjDL6BsCCvjkxUto=s0" /><br/>M3: Variants updated to assist, filter, input, and suggestion chips</td>
</tr></table>

| Aspect       | M2                            | M3                                            |
| ------------ | ----------------------------- | --------------------------------------------- |
| Color        | Basic mappings                | Dynamic color compatible                      |
| Shape        | Rounded rectangle             | Rounded rectangle (8dp corners)               |
| Variants     | Input, choice, filter, action | Assist, filter, input, suggestion             |
| Stroke color | `outline`                     | `outline-variant` (softened, Aug 2024 update) |

![A chip with a clear outline is now a chip with a subtle outline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sdpshu-02.png?alt=media&token=66986121-1317-4638-8ba4-3119d622eada=s0)
