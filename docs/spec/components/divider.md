# Divider — M3 Component Reference

> Dividers are thin lines that group content in lists or other containers.

Sources: [Overview](https://m3.material.io/components/divider/overview) · [Specs](https://m3.material.io/components/divider/specs) · [Guidelines](https://m3.material.io/components/divider/guidelines) · [Accessibility](https://m3.material.io/components/divider/accessibility)

---

## Anatomy

![Illustration of a divider](https://lh3.googleusercontent.com/PWseJ13-mt9cW2123ZzekkPFAqLgB998Vjq2SYtjrWMPrU6GPe3cu5JHXhYm9FyBUe7FhVf5WtzVRXEwPvRWYDqBNZIwgnUzzXch9vlLOns1=s0)

A divider is a single visual element:

1. **Divider** — a thin horizontal or vertical line

![Diagram of divider set on horizontal line](https://lh3.googleusercontent.com/oj7KVyynAuq1UwXg5w1-mMew6K5ScAJ6p3N8AitVYbECX8ZoEZM6gDLGiHWOvokrG3F4SRpj-DAJNsg0AiWRxqvLfsoWAyCPYh6vi2B1pjl5=s0)

---

## Variants

Dividers come in two orientations and three inset configurations:

### Full-width

Spans the entire width of a container. Use to separate larger, unrelated sections of content. Can be placed directly on a surface or inside components like cards and lists.

![Inbox app using full-width dividers to separate messages](https://lh3.googleusercontent.com/WDF7BBHGj8yQ1azq5jKExXR0QzYBWIOu6yObWLR6w-aLYAjQLT7WWi3da0oMmSl5Nsc2UxhiE8YvMUJWJ8Ke0SmpzOXbQrVsjNwA5H_wolf0=s0)

### Inset

Indented equally from both sides. Use to separate related content within a section. Should align with anchoring elements such as icons or avatars.

![Music app using inset dividers to separate songs in a playlist](https://lh3.googleusercontent.com/FgHeBjA2pgAJv-fZVU1JhTuAme8am-qHRLp7yzskrVdd9FsFxrwNBh8Qix8daXPUoszK8MDaLd1vZNub_ZijOJjvLRdTIe856ts-LGKDz9nmlg=s0)

### Middle-inset

Indented from the left side only (left margin of 16dp, right margin of 0dp). Not explicitly named in the guidelines, but defined in the measurements.

### Vertical

Arranged vertically to separate side-by-side content on larger screens, such as paragraph text alongside media.

![Image and text side-by-side, separated by a vertical divider on a large screen](https://lh3.googleusercontent.com/INRwkh2QYMmX3bMlDSOkNkd4VkmiTdrtfSTugzZRjpXg8AJmwBetxY8X0J7R6tO4BDjrbfccqoIyk1HzoV1IQVUmWiClLOTi0XH_hPRTzTQpnA=s0)

---

## Usage & When to Use

![Screen shot of five stacked dividers](https://lh3.googleusercontent.com/nt6TfZJ1hPz6HX6Pn1Lvf2_jMgg3cnIGfttwCupUGgry6V5DHR1JvdSdkkWIUdVopwjJ_BRzYTaANVIo4AczkVo0jKYD3B1J8NShIWhVlYY=s0)

- Make dividers visible but not bold
- Only use dividers if items cannot be grouped with open space alone
- Use dividers to group things, not to separate individual items

### Full-width dividers

Use to separate interactive areas from non-interactive areas. They visually group elements that are related from an interaction perspective.

![Inbox messages visually separated by full-width dividers](https://lh3.googleusercontent.com/_YTqmkqyO4zUBu2JzRnIRTQKqR-G3eVpUcSkIgZoEeAdrvF6IhcFv7zEkr_oheP2gc4IJLDWHpqZlMHQbknQHIHSiaf5oBdJmr0vjtr1bvzK=s0)

![Non-interactive card content and clickable link separated by a full-width divider](https://lh3.googleusercontent.com/8qy1TKw_O4CDgg-I21yl5m3LqA-zovoSJRXPBmNZrpjKwJOndAzvtwYQ6Ygcv8r1ZgKvNOZ1LyCOhhrFsyOEB9_sG2N9RvbsJxLI9kpijq_U=s0)

> **Do:** Use full-width divider lines to separate interactive and non-interactive areas of a container such as a card.

![Full-width dividers used after every piece of content on a page](https://lh3.googleusercontent.com/73z9FMjAg3kPm-IYbmoPDJ6fOmuspGFNCtmQEWgt8JLmF5oT4bjAP-A5Tcj4MVQ7ELxoXajWECc4pdB2jjIia12AzJPS-4MMIa60IPmJdeg=s0)

> **Caution:** Use full-width dividers sparingly. Too many divider lines make an interface look cluttered.

### Inset dividers

Use to separate related content within a section. Should align with anchoring elements like icons or avatars.

![2 different content sections separated by an inset divider](https://lh3.googleusercontent.com/uAlit0uWcMbAwUFNbD7Y8crsaxcYSRvlS-I_AR1iGqbOTa3nE8mVfIb0BHugHnsDP1tYEe6YClZbzNovc5GN9HnvQkeWlcJHfbr-m0xE8Llq=s0)

![3 types of related content separated by inset dividers on a mobile screen](https://lh3.googleusercontent.com/yRjwwhcfrgoa4HRyAnyy-06NN-uC6jQ232awWcwLrDqhqan4dM72d3fdBibiEqqPuQ0Y57iEPJjpsPd3wedgBdeqmxPzhB0KYgW8gaRBrGF9fQ=s0)

![Inset divider separating body text and selection chips](https://lh3.googleusercontent.com/4XBmZ8OFNWayERiVW6Fdq8UFj6GsBuDAedl24YkYLxpx4fK3tpJ_nQbAmqkGmZZMRila9X3oBJ724e6wILbESRs6vscG6ssM7Xg6-a7l8N2isw=s0)

Inset dividers can also be placed in the middle of a layout to separate elements such as body text from selection chips.

### Combining full-width and inset dividers

When both types appear in the same UI, they must reinforce information hierarchy:

1. Full-width dividers separate different kinds of content
2. Inset dividers separate nested content items within a section

![Dividers used to show content hierarchy: full-width for sections, inset for related items](https://lh3.googleusercontent.com/egzEzqVWWnBhzhHhro6zbSyUckQRrRFnJps3EwXXFbsN91CgCSkg9ZeDIccnwo_Btq7YJxUgt0UZy_SxBrMqJt9QuZAjL-tPtuBhU1naBcozDw=s0)

> **Do:** Use a combination of inset and full-width dividers to reflect information hierarchy.

### When dividers aren't needed

List items with repetitive formats may not need dividers at all — margins alone can provide sufficient visual separation.

![List with repetitive item formats, separated by margins only](https://lh3.googleusercontent.com/NSGvcJJazPdtNGNH-K6P-F91kufNOLf9qtNdySyBRGvYt1edvTYfXpo8Ig6-lOGNj4mtEGwJAp6rq2qvO8sR2hWt3wir_oKoIUAjNF5fj8s=s0)

> **Do:** Content may not require a divider line.

---

## Measurements

![Divider's measurement](https://lh3.googleusercontent.com/nlIs7BqldeOjL6zGRe-b05BxdussoGedN4o35xv0KouVO0agDSZ_X4Zza-CK00qaH3gG-EGfemhgjOYIpr5ikHHaXvlswDJPLMQpZXC6Q1q-hw=s0)

| Attribute                               | Value |
| --------------------------------------- | ----- |
| Divider full-width                      | 100%  |
| Divider inset left margin               | 16dp  |
| Divider inset right margin              | 0dp   |
| Divider middle-inset left margin        | 16dp  |
| Divider middle-inset right margin       | 16dp  |
| Space between divider & supporting-text | 4dp   |
| Divider right margin                    | 8dp   |
| Divider bottom margin                   | 8dp   |

---

## Color Tokens

![Divider on light background and dark background](https://lh3.googleusercontent.com/nAdfpj-iAPZ7Zohh6rLalqf_NXmdrLUmqhQTZkfAgJdp7OJdRTb82SMH0U5GOJF-yTm3P8nRpycQDWiJVXBCuwNwgNRaqZ8Jf9tNNZFs0-1nBw=s0)

1. Outline variant

### Enabled / Container

| Name              | Token                       | Value                          |
| ----------------- | --------------------------- | ------------------------------ |
| Divider thickness | `md.comp.divider.thickness` | 1dp                            |
| Divider color     | `md.comp.divider.color`     | `md.sys.color.outline-variant` |

---

## Accessibility

Dividers are **decorative elements** and have no contrast minimums. They reinforce grouping that is already communicated through spacing and typography.

![Divider separating messages in an inbox annotated as decorative](https://lh3.googleusercontent.com/OZaQfCJIkmhGm1J_JkXzYIWGRF0v5Iw-HUlrr30InFSeGfmwf4nksdVFgUdbht_b4-rCEarR8deQhOVO9UdlGZnAn8Kckwr2tlvt0EtyDatu=s0)

Since dividers are decorative, they should not convey information that isn't already available through other visual cues. Screen readers should treat them as presentational (`role="separator"` with `aria-hidden="true"` on web, or no accessibility announcement on native).

---

## M2 → M3 Differences

![Screen shot of three dividers with new color mappings](https://lh3.googleusercontent.com/XzLvQIFI1bPcY94jkG0wH0k2q5oq10abbZE3PxJTJv82onD1lYAfXmBbxIoicWGcqoYM2AKyvx95UTpFaVa20bDUBDfvIMwse1Q5SudzA8M9=s0)

| Aspect         | M2                   | M3                                        |
| -------------- | -------------------- | ----------------------------------------- |
| Color          | Fixed color mappings | Dynamic color via `outline-variant` token |
| Configurations | Horizontal only      | Horizontal and vertical orientations      |
