# Shape — M3 Style Reference

> The M3 shape system provides 35 original shapes, a 10-step corner radius scale, and built-in shape morphing for smooth transitions between shapes.

Sources: [Overview & Principles](https://m3.material.io/styles/shape/overview-principles) · [Corner Radius Scale](https://m3.material.io/styles/shape/corner-radius-scale) · [Shape Morph](https://m3.material.io/styles/shape/shape-morph)

---

## Overview

M3 shapes serve as expressive elements that add emphasis, decorative flair, and moments of delight. The shape system consists of three parts:

1. **Shape Library** — 35 predefined shapes (added in the M3 Expressive update, May 2025)
2. **Corner Radius Scale** — a 10-step scale defining rectangular corner rounding
3. **Shape Morph** — built-in transitions between any shapes in the library

Rectangular shapes are fully rounded in all corners by default. Individual corners can be adjusted independently to create asymmetrical shapes.

![Illustration of range of irregular shapes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c35amt-1.png?alt=media&token=ab563092-217d-4d71-986d-1b4d87b5ba3e=s0)

Abstract shapes help people express themselves

### Availability & Resources

| Type           | Resource                                                                                                            | Status    |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | --------- |
| Design         | [Shape library](http://figma.com/community/file/1035203688168086460/material-3-design-kit)                          | Available |
| Implementation | [Jetpack Compose](https://developer.android.com/reference/kotlin/androidx/compose/material3/MaterialShapes)         | Available |
|                | [MDC-Android](https://github.com/material-components/material-components-android/blob/master/docs/theming/Shape.md) | Available |

### M3 Expressive Update (May 2025)

The Expressive update added 35 new shapes and shape morphing to the [Material Shape Library](https://www.figma.com/community/file/1035203688168086460) (Figma) and [Jetpack Compose](https://developer.android.com/reference/kotlin/androidx/compose/material3/MaterialShapes), along with new shape principles and refreshed art direction.

New corner radii tokens added:

- Large increased (20dp)
- Extra large increased (32dp)
- Extra extra large (48dp)
- Fully rounded corners now use **full** instead of 50% of the component size

[More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

---

## Shape Library

![35 shapes in the shape set.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c3rf47-3.png?alt=media&token=1a6cef2c-83d4-4855-9b91-8121f8a8a0ae=s0)

M3 provides 35 shapes for use in designs

---

## Corner Radius Scale

Material components use a corner radius scale to define all rectangular shapes. The scale has 10 steps, named by the degree of roundedness applied to each corner.

![Illustration of range of shapes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c80f7i-1.png?alt=media&token=2bf0cf29-448a-4c9e-a5cf-6b61020ff7ed=s0)

Corner radii define both uniform and asymmetrical shapes

### Scale Values

| Step | Name                  | Value                 |
| ---- | --------------------- | --------------------- |
| 1    | None                  | 0dp                   |
| 2    | Extra small           | 4dp                   |
| 3    | Small                 | 8dp                   |
| 4    | Medium                | 12dp                  |
| 5    | Large                 | 16dp                  |
| 6    | Large increased       | 20dp                  |
| 7    | Extra large           | 28dp                  |
| 8    | Extra large increased | 32dp                  |
| 9    | Extra extra large     | 48dp                  |
| 10   | Full                  | Fully rounded corners |

![10 corner radii styles.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c881mj-1.png?alt=media&token=fcb5e003-c5d3-4208-af8a-8766b55ad7ee=s0)

Steps on the scale are named for the amount of roundedness applied to the corner

### Evolution from M2

M2 used a three-level shape scale based on container size. M3 expanded this to a ten-level scale based on corner roundedness, providing much finer control.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fc5xxg-3.png?alt=media&token=874497dc-6354-4952-9e46-cc37c088b431=s0" /><br/><b>M2:</b> Three-level shape scale based on component container size</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fc5nak-4.png?alt=media&token=76b165c6-fa5b-448c-abd8-cc7aef1c6bb4=s0" /><br/><b>M3:</b> Ten-level shape scale based on corner roundedness</td>
</tr></table>

### Shape Tokens

Material provides two types of shape tokens:

- **Corner tokens** — define all corners of a shape uniformly (e.g., `md.sys.shape.corner.medium` → 12dp)
- **Corner-value tokens** — define individual corners independently (for asymmetric shapes)

[Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

---

## Symmetry

Components can have either **symmetric** or **asymmetric** corner shapes:

- **Symmetric** — all four corners share the same value
- **Asymmetric** — corners have different values; used in closely-grouped items like menus and split buttons

Asymmetric corners are called **inner corners**. Inner corner component tokens always map to individual corner shape tokens. Both symmetric and asymmetric shapes use the same 10-step scale.

![3 shapes illustrating symmetrical and asymmetrical styles.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c8fgh9-2.png?alt=media&token=e9d62c5c-3f8c-44b3-b487-bfe8c1cc0d6c=s0)

Inner corner tokens map to individual corner shape tokens

---

## Customizing Shapes

Products should generally use M3 shape styles consistently, but customization is available (and encouraged for hero moments or custom components). Shapes can be customized at two levels:

### Style-Level Changes

Redefining a shape style (e.g., changing **medium** from 12dp to a different size) applies the change globally to all components mapped to that style, unless they have an override.

### Component-Level Changes

A specific component's shape can be changed by remapping it to a different shape style. For example, buttons default to **full** but can be remapped to **small** or **medium** for a less rounded appearance.

[Apply shape styles using tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Cut vs. Rounded Corners

The shape style family can be switched from **rounded** (curved) to **cut** (straight line). When using cut corners, add extra padding to avoid clipping content — a large cut corner on a card clips content and images more than a rounded corner of the same size.

### Do/Don't Guidance

![Carousel with images with rounded corners.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c9cdvx-8.png?alt=media&token=563b34cc-3146-49fc-bb3f-0f10e7721697=s0)

**Do:** Make shapes intentionally rounder for more visual variety

![Carousel with full rounded shapes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c9bsb5-9.png?alt=media&token=659af9fc-48eb-4dde-9246-1537ca7ca5fb=s0)

**Do:** Add unexpected moments by switching between square and fully rounded shapes

---

## Optical Roundness

When nesting rounded objects, avoid using the same corner radius for both inner and outer elements — it looks visually unbalanced. Instead, calculate **optical roundness**:

**Formula:** `outer radius − padding = inner radius`

**Example:** 48dp − 14dp = 34dp

![3 parts of corner radii to adjust.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c9fged-6-1.png?alt=media&token=e35e86ab-c7d6-4ade-bba4-9c151eb561f8=s0)

1. Padding
2. Outer radius
3. Inner radius

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c9h8uv-6.png?alt=media&token=896b2204-2886-49ac-82a3-bcd76cfce14e=s0" /><br/><b>Do:</b> Use different corner radii for nested components to achieve optical roundness</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c9j8dt-7.png?alt=media&token=56cb6075-ef00-4915-8792-6a95257a4d6d=s0" /><br/><b>Don't:</b> Use the same corner radius for nested objects</td>
</tr></table>

---

## Shape Morph

The Material shape library supports smooth transitioning (morphing) between any shapes. This is used in standard components like the **button group** and **loading indicator**.

Shape morphing uses the **expressive motion scheme** by default, but can be switched to the standard motion scheme.

### Platform Availability

- **Android**: Available via the [Shapes in Compose API](https://developer.android.com/reference/kotlin/androidx/compose/material3/MaterialShapes)
- **Web**: Not currently available

### Components Using Shape Morph

- **Button group** — uses shape morph to communicate interaction states
- **Loading indicator** — uses shape morph to show progress

---

## Design Principles

### Shape and Typography Harmony

Shapes are expressive elements that echo key visual attributes of [M3 typography](https://m3.material.io/m3/pages/typography/overview/). Use shape and type together for a cohesive, polished product feel.

![Fonts and mock UI screens showing a wide range of square, round, thin, and thick shapes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7pa01q8-4.png?alt=media&token=2bd24982-183f-4d94-8da0-d14252f165c4=s0)

M3 shapes and Google Sans Flex share roundness visual attributes

### Morph Shapes to Communicate

Shape morph improves understanding and adds delight. Use it to communicate:

- **Interaction states** — e.g., when a button is selected
- **Actions in progress** — e.g., a friend typing, a page loading
- **Environmental changes** — e.g., sound, temperature, or time of day

Consider how shapes could react to tapping, swiping, scrolling, releasing, and long pressing.

### Embrace Tension

Tension arises from unexpected shape changes — mixing square and rounded shapes, or using unconventional shapes. Material historically focused on rounded shapes, but adding sharp shapes creates more dynamic, memorable, and expressive design.

Use tension to convey states, draw attention, or improve visual aesthetics.

![Round and square shape side-by-side.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fc4dnp-6.png?alt=media&token=41b40132-0d83-4de4-9c1b-8b49902356e2=s0)

Create tension by combining round and square shapes

### Shape is Versatile, Not Semantic

Avoid making shapes literal or assigning fixed meaning to a single shape. For example, a wavy loading indicator doesn't mean waveforms always signify "progress" — waveforms can appear elsewhere (e.g., button containers), and progress can be shown with rotating shapes or shape morph.

### Use Abstract Shapes Sparingly

Be intentional with shapes in product UI. Don't sacrifice clarity for visual design. When incorporating diverse shapes, consider how they fit the overall composition and ensure they resonate with the product's narrative.

![8 shapes with icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c73wle-8.png?alt=media&token=f1bf9874-6d8e-43c4-ae44-c0d4912ca58b=s0)

**Caution:** Shapes without clear purpose add visual clutter rather than delight

### Emphasize Aesthetic Moments

Get creative with shape in graphics, photography cropping, personalized avatar masking, and other non-interactive elements. Decorative moments offer the most flexible and creative shape uses.

### Using the Shape Library

Use the M3 shape library to create more interesting containers, primarily for visual elements. Avoid applying unconventional shapes to text-heavy containers. Use shapes sparingly for stronger emphasis and moments of delight.

![Unexpected shapes in carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c9mtiu-Frame%202134280407.png?alt=media&token=b4a4f136-7509-4d92-b9f7-4c1e11e1a27e=s0)

Leverage the Material shape library for moments of delight

### Shape Can Be 2.5D

Shape and motion together can make 2D visuals feel three-dimensional, providing the illusion of depth and volume for more eye-catching, natural visuals. Apply motion and shape differently on each layer to create depth.
