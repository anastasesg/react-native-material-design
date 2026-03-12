---
url: https://m3.material.io/components/carousel/overview
lastmod: 2026-02-12
crawled_at: 2026-03-07T17:38:00.000Z
category: components
section: carousel
page_type: overview
status: complete
---

# Carousel

Carousels show a collection of items that can be scrolled on and off the screen

- Contain visual items like images or video, along with optional label text
- Six layouts: Multi-browse, uncontained, uncontained multi-aspect ratio, hero, center-aligned hero and full-screen
- Layouts can be start-aligned or center-aligned
- Item visuals have a parallax effect when scrolled
- Items change size as they move through the carousel

_Carousels can show items of various sizes_

## Availability & resources

| Type               | Resource    | Status |
| ------------------ | ----------- | ------ |
| Design             |             |        |
| Design Kit (Figma) | Available   |        |
| Implementation     |             |        |
| Flutter            | Available   |        |
| Jetpack Compose    | Available   |        |
| MDC-Android        | Available   |        |
| Web                | Unavailable |        |

## Updates

**November 2025**

New carousel layout:

- Uncontained multi-aspect ratio

**2023**

Additional layouts and configurations:

- Uncontained
- Full-screen
- Centered carousels
- Hero carousel layout
- Multi-browse layout

![Items of different widths in an uncontained multi-aspect ratio layout.](https://lh3.googleusercontent.com/fVj4DyPx6HxKN7gxkVrxReCeNppE22Favi2407XaDtWc5AiUxr-xvwqelWFXfRaQ2AayTCiBEwL06duEvTEptd1dEt1FWREyAV1d_2kMAf-MHQ=s0)

_New carousel layout: uncontained multi-aspect ratio_

## Differences from M2

This component is new in Material 3.

- **Shape**: Dynamic carousel items change shape when scrolled
- **Motion**: Carousel items move at a different speed than their content, creating a parallax effect
- **Interaction**: When scrolled, carousel items snap into place to maintain the same layout. Hero carousels swipe through one item at a time. Multi-browse carousels scroll through many items at once.

![Carousel in a contained layout with a large item and a small item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwur4ddz-3.png?alt=media&token=a42f76c5-c4fd-46fd-89a1-04b492638986=s0)

_Hero carousels scroll through one large item at a time_

## Research

The Material Research Team conducted two studies (quantitative and qualitative) with over 200 participants to understand their perspectives of five different carousel designs. The studies measured their understanding of how to interact with each carousel, their expectations of the number of items in each design, and how they expected carousels to be used.

**Summary of findings:**

- Participants thought carousels were a good way to explore many different kinds of content
- A previewed or squished item strongly indicated that there was more content to swipe through
- Participants expected around 10 items in a carousel that scrolled multiple items at once
- While some contexts were considered better for some carousel designs, all designs were considered similarly usable
