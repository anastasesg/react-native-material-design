---
url: https://m3.material.io/components/bottom-sheets/specs
lastmod: 2026-01-26
crawled_at: 2026-02-03T12:00:00.000Z
category: components
section: bottom-sheets
page_type: specs
status: complete
---

# Bottom sheets - Specs

Modal bottom sheets are above a scrim while standard bottom sheets don't have a scrim. Besides this, both variants of bottom sheets have the same specs.

![Diagram of container, drag handle, scrim](https://lh3.googleusercontent.com/zukI3AJrMtdfLMWQT4wlAlMvIUfkIHpc5QmTQNqYJpxh-cV8QEJcVsy9Yc198HJsK1Od4d-cEiCfOKkcY5nhzjVVmtfGd9e3Wy75vUnWqSE=s0)

_Container / Drag handle (optional) / Scrim_

## Tokens and specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Sheets - Bottom

#### Enabled / Container

| Element | Token | Value |
| --- | --- | --- |
| Sheet bottom docked container color | `md.comp.sheet.bottom.docked.container.color` | #F7F2FA |
| Sheet bottom docked container surface tint layer color (Deprecated) | `md.comp.sheet.bottom.docked.container.surface-tint-layer.color` | #6750A4 |
| Sheet bottom docked modal container elevation | `md.comp.sheet.bottom.docked.modal.container.elevation` | Level 1 |
| Sheet bottom docked standard container elevation | `md.comp.sheet.bottom.docked.standard.container.elevation` | Level 1 |
| Sheet bottom docked container shape | `md.comp.sheet.bottom.docked.container.shape` | 28dp (top corners) |
| Sheet bottom docked minimized container shape | `md.comp.sheet.bottom.docked.minimized.container.shape` | 0dp |

#### Enabled / Drag handle

| Element | Token | Value |
| --- | --- | --- |
| Sheet bottom docked drag handle color | `md.comp.sheet.bottom.docked.drag-handle.color` | #49454F |
| Sheet bottom docked drag handle opacity (Deprecated) | `md.comp.sheet.bottom.docked.drag-handle.opacity` | 0.4 |
| Sheet bottom docked drag handle width | `md.comp.sheet.bottom.docked.drag-handle.width` | 32dp |
| Sheet bottom docked drag handle height | `md.comp.sheet.bottom.docked.drag-handle.height` | 4dp |

#### Enabled / Focus indicator

| Element | Token | Value |
| --- | --- | --- |
| Sheet bottom focus indicator color | `md.comp.sheet.bottom.focus.indicator.color` | #625B71 |
| Sheet bottom focus indicator thickness | `md.comp.sheet.bottom.focus.indicator.thickness` | 3dp |
| Sheet bottom focus indicator offset | `md.comp.sheet.bottom.focus.indicator.outline.offset` | 2dp |

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

![Two diagrams featuring color opposites of scrim, container, drag handle](https://lh3.googleusercontent.com/DRToa14TKB2-AlRHwUn1aPr1fykKEPGlGiKLDxHYv9B9e5CeupNBR-mM7uQOfp_OK-ZHdqjgboBeyE7GhlNtsThqGvX87OLsiAoci2zkTRBo=s0)

_Bottom sheet color roles used for both light and dark schemes:_

- Scrim\*
- On surface variant
- Surface

_\*On Android platforms, the scrim color and opacity is automatically handled by the system UI._

## Measurements

![Bottom sheet on larger device with 56dp top and 56dp side margins](https://lh3.googleusercontent.com/gVNIjqiBu0DjSUv-lwnH3xIvACuZ6S4LWuUrUHe_KA0V_GlU3w-iwKPM-ka_6KfmjFuQJ1k6qrmm2b0y_6ZJcLd4alet31vP-0-nUdrpj_k=s0)

_Bottom sheet padding and size measurements_

Bottom sheets span the full window width up to 640dp. When the window width exceeds 640dp, bottom sheets adjust to have a top margin of 56dp and side margins of 56dp.

| Attribute | Value |
| --- | --- |
| Drag handle alignment (horizontal) | Center |
| Drag handle padding top/bottom | 22dp |
| Top margin | 72dp |
| Top margin (window width > 640dp) | 56dp |
| Start/end margin (window width > 640dp) | 56dp |
| Width | Full width, up to max-width 640dp |
| Height | Variable |
