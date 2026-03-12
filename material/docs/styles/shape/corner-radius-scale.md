---
url: https://m3.material.io/styles/shape/corner-radius-scale
lastmod: 2025-09-26
crawled_at: 2026-02-02T21:45:00.000Z
category: styles
section: shape
page_type: null
status: complete
---

# Shape

The M3 shape system includes original shapes, a corner radius scale, and built-in shape morphing.

Material components use a corner radius scale to define all rectangular shapes, such as buttons, carousels, and dialogs.

![Illustration of range of shapes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c80f7i-1.png?alt=media&token=2bf0cf29-448a-4c9e-a5cf-6b61020ff7ed=s0)

_M3 defines corner radii using a shape scale. This can be used to create both uniform and asymmetrical shapes._

## Shape tokens

Material has shape corner tokens to define all corners, and corner-value tokens for individual corners. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Shape Corner Tokens

| Token | Description |
| --- | --- |
| md.sys.shape.corner.full | Fully rounded |
| md.sys.shape.corner.extra-large.top | Extra large top rounding |
| md.sys.shape.corner.extra-large | Extra large rounding |
| md.sys.shape.corner.large.top | Large top rounding |
| md.sys.shape.corner.large.end | Large end rounding |
| md.sys.shape.corner.large.start | Large start rounding |
| md.sys.shape.corner.large | Large rounding |
| md.sys.shape.corner.medium | Medium rounding |
| md.sys.shape.corner.small | Small rounding |
| md.sys.shape.corner.extra-small.top | Extra small top rounding |
| md.sys.shape.corner.extra-small | Extra small rounding |
| md.sys.shape.corner.none | No rounding |
| md.sys.shape.corner.large-increased | Large increased rounding |
| md.sys.shape.corner.extra-large-increased | Extra large increased rounding |
| md.sys.shape.corner.extra-extra-large | Extra extra large rounding |

### Shape Corner Value Tokens

| Token | Value | Description |
| --- | --- | --- |
| md.sys.shape.corner-value.none | 0 | No corner value |
| md.sys.shape.corner-value.extra-small | 4dp | Extra small corner value |
| md.sys.shape.corner-value.small | 8dp | Small corner value |
| md.sys.shape.corner-value.medium | 12dp | Medium corner value |
| md.sys.shape.corner-value.large | 16dp | Large corner value |
| md.sys.shape.corner-value.large-increased | 20dp | Large increased corner value |
| md.sys.shape.corner-value.extra-large | 28dp | Extra large corner value |
| md.sys.shape.corner-value.extra-large-increased | 32dp | Extra large increased corner value |
| md.sys.shape.corner-value.extra-extra-large | 48dp | Extra extra large corner value |

### Corner radius scale

The Material 3 shape system uses a size-based scale with ten styles. Styles are assigned to components based on the desired amount of roundedness.

1. None - 0dp
2. Extra small - 4dp
3. Small - 8dp
4. Medium - 12dp
5. Large - 16dp
6. Large increased - 20dp
7. Extra large - 28dp
8. Extra large increased - 32dp
9. Extra extra large - 48dp
10. Full - fully rounded corners

[Apply shape styles using tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![10 corner radii styles.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c881mj-1.png?alt=media&token=fcb5e003-c5d3-4208-af8a-8766b55ad7ee=s0)

_Steps on the scale are named for the amount of roundedness applied to the corner_

![Components illustrating the old 3-level shape scale.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fc5xxg-3.png?alt=media&token=874497dc-6354-4952-9e46-cc37c088b431=s0)

_M2: Three-level shape scale based on the size of the component container_

![Components illustrating the new 10-level shape scale.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fc5nak-4.png?alt=media&token=76b165c6-fa5b-448c-abd8-cc7aef1c6bb4=s0)

_M3: Ten-level shape scale based on the roundedness of shape corners_

## Symmetry

Components can have either symmetric or asymmetric corner shapes. Symmetric shapes have the same values for all corners, while asymmetric shapes can have corners with different values.

Both symmetric and asymmetric shapes use the same 10-step scale.

Asymmetrical shapes are used in M3 components with closely-grouped items, such as menus and split buttons. These are called **inner corners**.

![3 shapes illustrating symmetrical and asymmetrical styles.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c8fgh9-2.png?alt=media&token=e9d62c5c-3f8c-44b3-b487-bfe8c1cc0d6c=s0)

_**Inner corner** component tokens always map to individual corner shape tokens_

## Customizing shapes

Generally, products should consistently use the Material 3 shape styles. However, customization is sometimes necessary, and even encouraged, for hero moments or custom components. Shapes can be customized at the **style** or **component** level.

### Style changes

The corner radius shape style, like **medium**, can be customized to be a different size.

This applies the change to all components mapped to that shape style, unless they have an override.

_Customizing the corner size of the medium style applies the change to all components using this style, such as cards and small FABs_

### Component changes

The style of a specific component, such as a button, can be changed by customizing which corner radius shape style it maps to.

For example, by default, buttons are mapped to the **full** corner radius shape style. If your product needs a less rounded shape, remap the token to another style in the shape scale, such as **small** or **medium**.

_Remapping the shape for a component to a different style applies the change to just that component across the UI_

The shape style family can be customized from **rounded** to **cut**. This makes the corner a straight line instead of curved.

Add extra padding to avoid cutting off content in information-dense components.

For example, a large cut corner on a card will clip content and images in the area more than a rounded corner of the same size.

> **Caution:** Be careful not to apply large or full corners to information-dense components, such as cards

![Carousel with images with rounded corners.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c9cdvx-8.png?alt=media&token=563b34cc-3146-49fc-bb3f-0f10e7721697=s0)

_**Do:** Shapes can be intentionally rounder to add more visual variety_

![Carousel with full rounded shapes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c9bsb5-9.png?alt=media&token=659af9fc-48eb-4dde-9246-1537ca7ca5fb=s0)

_**Do:** Add unexpected moments by switching between square and fully rounded shapes_

### Adjust for optical roundness

When nesting rounded objects, avoid using the same corner radii for both objects. This can make the corners look unbalanced.

Instead, adjust the corner radii to be proportional to each other; this is called optical roundness. To calculate optical roundness:

- Outer radius - padding = inner radius
- For example: 48dp - 14dp = 34dp

![3 parts of corner radii to adjust.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c9fged-6-1.png?alt=media&token=e35e86ab-c7d6-4ade-bba4-9c151eb561f8=s0)

_Padding, Outer radius, Inner radius_

![Nested carousel with optical roundness.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c9h8uv-6.png?alt=media&token=896b2204-2886-49ac-82a3-bcd76cfce14e=s0)

_**Do:** Use different corner radii values for nested components so they have optical roundness_

![Nested radii with the same roundness as its container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c9j8dt-7.png?alt=media&token=56cb6075-ef00-4915-8792-6a95257a4d6d=s0)

_**Don't:** Avoid using the same corner radius value for nested objects_

### Using the shape library

The Material 3 shape library can be used to create more interesting containers. Use the shape library for mostly visual elements. Avoid applying unconventional shapes to text-heavy containers.

Shapes should be used sparingly to provide a stronger emphasis and moments of delight.

![Unexpected shapes in carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c9mtiu-Frame%202134280407.png?alt=media&token=b4a4f136-7509-4d92-b9f7-4c1e11e1a27e=s0)

_Leverage the Material shape library for moments of delight_
