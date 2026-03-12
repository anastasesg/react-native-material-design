---
url: https://m3.material.io/components/time-pickers/specs
lastmod: 2025-09-26
crawled_at: 2026-03-10T13:10:00.000Z
category: components
section: time-pickers
page_type: specs
status: complete
---

# Time pickers - Specs

> Source: [Specs](https://m3.material.io/components/time-pickers/specs)

## Tokens & specs

Select a component type below to see its elements, attributes, tokens, and their values. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

---

### Time picker - Dial

#### Enabled / Container

| Token                                                   | Token ID                                                          | Value       |
| ------------------------------------------------------- | ----------------------------------------------------------------- | ----------- |
| Time picker clock dial color                            | `md.comp.time-picker.clock-dial.color`                            | #E6E0E9     |
| Time picker clock dial shape                            | `md.comp.time-picker.clock-dial.shape`                            | (shape)     |
| Time picker container color                             | `md.comp.time-picker.container.color`                             | #ECE6F0     |
| Time picker container elevation                         | `md.comp.time-picker.container.elevation`                         | (elevation) |
| Time picker surface tint layer color (deprecated)       | `md.comp.time-picker.surface-tint-layer.color`                    | #6750A4     |
| Time picker container shape                             | `md.comp.time-picker.container.shape`                             | (shape)     |
| Time picker time selector selected container color      | `md.comp.time-picker.time-selector.selected.container.color`      | #EADDFF     |
| Time picker time selector unselected container color    | `md.comp.time-picker.time-selector.unselected.container.color`    | #E6E0E9     |
| Time picker time selector container shape               | `md.comp.time-picker.time-selector.container.shape`               | (shape)     |
| Time picker period selector selected container color    | `md.comp.time-picker.period-selector.selected.container.color`    | #FFD8E4     |
| Time picker period selector container shape             | `md.comp.time-picker.period-selector.container.shape`             | (shape)     |
| Time picker period selector outline color               | `md.comp.time-picker.period-selector.outline.color`               | #79747E     |
| Time picker period selector outline width               | `md.comp.time-picker.period-selector.outline.width`               | 1dp         |
| Time picker clock dial color ignore (deprecated)        | `md.comp.time-picker.clock-dial.color.ignore`                     | #49454F     |
| Time picker clock dial shape ignore (deprecated)        | `md.comp.time-picker.clock-dial.shape.ignore`                     | (shape)     |
| Time picker clock dial selector handle container color  | `md.comp.time-picker.clock-dial.selector.handle.container.color`  | #6750A4     |
| Time picker clock dial selector handle container shape  | `md.comp.time-picker.clock-dial.selector.handle.container.shape`  | (shape)     |
| Time picker clock dial selector center container color  | `md.comp.time-picker.clock-dial.selector.center.container.color`  | #6750A4     |
| Time picker clock dial selector center container shape  | `md.comp.time-picker.clock-dial.selector.center.container.shape`  | (shape)     |
| Time picker clock dial selector track container color   | `md.comp.time-picker.clock-dial.selector.track.container.color`   | #6750A4     |
| Time picker time selector container width               | `md.comp.time-picker.time-selector.container.width`               | 96dp        |
| Time picker time selector 24h vertical container width  | `md.comp.time-picker.time-selector.24h-vertical.container.width`  | 114dp       |
| Time picker time selector container height              | `md.comp.time-picker.time-selector.container.height`              | 80dp        |
| Time picker period selector vertical container width    | `md.comp.time-picker.period-selector.vertical.container.width`    | 52dp        |
| Time picker period selector vertical container height   | `md.comp.time-picker.period-selector.vertical.container.height`   | 80dp        |
| Time picker period selector horizontal container width  | `md.comp.time-picker.period-selector.horizontal.container.width`  | 216dp       |
| Time picker period selector horizontal container height | `md.comp.time-picker.period-selector.horizontal.container.height` | 38dp        |
| Time picker clock dial container size                   | `md.comp.time-picker.clock-dial.container.size`                   | 256dp       |
| Time picker clock dial selector handle container size   | `md.comp.time-picker.clock-dial.selector.handle.container.size`   | 48dp        |
| Time picker clock dial selector center container size   | `md.comp.time-picker.clock-dial.selector.center.container.size`   | 8dp         |
| Time picker clock dial selector track container width   | `md.comp.time-picker.clock-dial.selector.track.container.width`   | 2dp         |

#### Enabled / Label text

| Token                                                   | Token ID                                                          | Value   |
| ------------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| Time picker time selector selected label text color     | `md.comp.time-picker.time-selector.selected.label-text.color`     | #4F378B |
| Time picker time selector unselected label text color   | `md.comp.time-picker.time-selector.unselected.label-text.color`   | #1D1B20 |
| Time picker time selector label text font               | `md.comp.time-picker.time-selector.label-text.font`               | Roboto  |
| Time picker time selector label text line height        | `md.comp.time-picker.time-selector.label-text.line-height`        | 64pt    |
| Time picker time selector label text size               | `md.comp.time-picker.time-selector.label-text.size`               | 57pt    |
| Time picker time selector label text weight             | `md.comp.time-picker.time-selector.label-text.weight`             | 400     |
| Time picker time selector label text tracking           | `md.comp.time-picker.time-selector.label-text.tracking`           | -0.25pt |
| Time picker time selector label text type               | `md.comp.time-picker.time-selector.label-text.type`               | Aa      |
| Time picker period selector selected label text color   | `md.comp.time-picker.period-selector.selected.label-text.color`   | #633B48 |
| Time picker period selector unselected label text color | `md.comp.time-picker.period-selector.unselected.label-text.color` | #49454F |
| Time picker period selector label text font             | `md.comp.time-picker.period-selector.label-text.font`             | Roboto  |
| Time picker period selector label text line height      | `md.comp.time-picker.period-selector.label-text.line-height`      | 24pt    |
| Time picker period selector label text size             | `md.comp.time-picker.period-selector.label-text.size`             | 16pt    |
| Time picker period selector label text weight           | `md.comp.time-picker.period-selector.label-text.weight`           | 500     |
| Time picker period selector label text tracking         | `md.comp.time-picker.period-selector.label-text.tracking`         | 0.15pt  |
| Time picker period selector label text type             | `md.comp.time-picker.period-selector.label-text.type`             | Aa      |
| Time picker clock dial selected label text color        | `md.comp.time-picker.clock-dial.selected.label-text.color`        | #FFFFFF |
| Time picker clock dial unselected label text color      | `md.comp.time-picker.clock-dial.unselected.label-text.color`      | #1D1B20 |
| Time picker clock dial label text font                  | `md.comp.time-picker.clock-dial.label-text.font`                  | Roboto  |
| Time picker clock dial label text line height           | `md.comp.time-picker.clock-dial.label-text.line-height`           | 24pt    |
| Time picker clock dial label text size                  | `md.comp.time-picker.clock-dial.label-text.size`                  | 16pt    |
| Time picker clock dial label text weight                | `md.comp.time-picker.clock-dial.label-text.weight`                | 400     |
| Time picker clock dial label text tracking              | `md.comp.time-picker.clock-dial.label-text.tracking`              | 0.5pt   |
| Time picker clock dial label text type                  | `md.comp.time-picker.clock-dial.label-text.type`                  | Aa      |

#### Enabled / Headline

| Token                            | Token ID                                   | Value   |
| -------------------------------- | ------------------------------------------ | ------- |
| Time picker headline color       | `md.comp.time-picker.headline.color`       | #49454F |
| Time picker headline font        | `md.comp.time-picker.headline.font`        | Roboto  |
| Time picker headline line height | `md.comp.time-picker.headline.line-height` | 16pt    |
| Time picker headline size        | `md.comp.time-picker.headline.size`        | 12pt    |
| Time picker headline weight      | `md.comp.time-picker.headline.weight`      | 500     |
| Time picker headline tracking    | `md.comp.time-picker.headline.tracking`    | 0.5pt   |
| Time picker headline type        | `md.comp.time-picker.headline.type`        | Aa      |

#### Enabled / Separator

| Token                                           | Token ID                                                  | Value   |
| ----------------------------------------------- | --------------------------------------------------------- | ------- |
| Time picker time selector separator color       | `md.comp.time-picker.time-selector.separator.color`       | #1D1B20 |
| Time picker time selector separator font        | `md.comp.time-picker.time-selector.separator.font`        | Roboto  |
| Time picker time selector separator line height | `md.comp.time-picker.time-selector.separator.line-height` | 64pt    |
| Time picker time selector separator size        | `md.comp.time-picker.time-selector.separator.size`        | 57pt    |
| Time picker time selector separator weight      | `md.comp.time-picker.time-selector.separator.weight`      | 400     |
| Time picker time selector separator tracking    | `md.comp.time-picker.time-selector.separator.tracking`    | -0.25pt |
| Time picker time selector separator type        | `md.comp.time-picker.time-selector.separator.type`        | Aa      |

#### Hovered / Label text

| Token                                                         | Token ID                                                                | Value   |
| ------------------------------------------------------------- | ----------------------------------------------------------------------- | ------- |
| Time picker time selector selected hover label text color     | `md.comp.time-picker.time-selector.selected.hover.label-text.color`     | #4F378B |
| Time picker time selector unselected hover label text color   | `md.comp.time-picker.time-selector.unselected.hover.label-text.color`   | #1D1B20 |
| Time picker period selector selected hover label text color   | `md.comp.time-picker.period-selector.selected.hover.label-text.color`   | #633B48 |
| Time picker period selector unselected hover label text color | `md.comp.time-picker.period-selector.unselected.hover.label-text.color` | #49454F |

#### Hovered / State layer

| Token                                                          | Token ID                                                                 | Value   |
| -------------------------------------------------------------- | ------------------------------------------------------------------------ | ------- |
| Time picker time selector selected hover state layer color     | `md.comp.time-picker.time-selector.selected.hover.state-layer.color`     | #4F378B |
| Time picker time selector unselected hover state layer color   | `md.comp.time-picker.time-selector.unselected.hover.state-layer.color`   | #1D1B20 |
| Time picker time selector hover state layer opacity            | `md.comp.time-picker.time-selector.hover.state-layer.opacity`            | 0.08    |
| Time picker period selector selected hover state layer color   | `md.comp.time-picker.period-selector.selected.hover.state-layer.color`   | #633B48 |
| Time picker period selector unselected hover state layer color | `md.comp.time-picker.period-selector.unselected.hover.state-layer.color` | #49454F |
| Time picker period selector hover state layer opacity          | `md.comp.time-picker.period-selector.hover.state-layer.opacity`          | 0.08    |

#### Focused / Label text

| Token                                                         | Token ID                                                                | Value   |
| ------------------------------------------------------------- | ----------------------------------------------------------------------- | ------- |
| Time picker time selector selected focus label text color     | `md.comp.time-picker.time-selector.selected.focus.label-text.color`     | #4F378B |
| Time picker time selector unselected focus label text color   | `md.comp.time-picker.time-selector.unselected.focus.label-text.color`   | #1D1B20 |
| Time picker period selector selected focus label text color   | `md.comp.time-picker.period-selector.selected.focus.label-text.color`   | #633B48 |
| Time picker period selector unselected focus label text color | `md.comp.time-picker.period-selector.unselected.focus.label-text.color` | #49454F |

#### Focused / State layer

| Token                                                          | Token ID                                                                 | Value   |
| -------------------------------------------------------------- | ------------------------------------------------------------------------ | ------- |
| Time picker time selector selected focus state layer color     | `md.comp.time-picker.time-selector.selected.focus.state-layer.color`     | #4F378B |
| Time picker time selector unselected focus state layer color   | `md.comp.time-picker.time-selector.unselected.focus.state-layer.color`   | #1D1B20 |
| Time picker time selector focus state layer opacity            | `md.comp.time-picker.time-selector.focus.state-layer.opacity`            | 0.1     |
| Time picker period selector selected focus state layer color   | `md.comp.time-picker.period-selector.selected.focus.state-layer.color`   | #633B48 |
| Time picker period selector unselected focus state layer color | `md.comp.time-picker.period-selector.unselected.focus.state-layer.color` | #49454F |
| Time picker period selector focus state layer opacity          | `md.comp.time-picker.period-selector.focus.state-layer.opacity`          | 0.1     |

#### Pressed (ripple) / Label text

| Token                                                           | Token ID                                                                  | Value   |
| --------------------------------------------------------------- | ------------------------------------------------------------------------- | ------- |
| Time picker time selector selected pressed label text color     | `md.comp.time-picker.time-selector.selected.pressed.label-text.color`     | #4F378B |
| Time picker time selector unselected pressed label text color   | `md.comp.time-picker.time-selector.unselected.pressed.label-text.color`   | #1D1B20 |
| Time picker period selector selected pressed label text color   | `md.comp.time-picker.period-selector.selected.pressed.label-text.color`   | #633B48 |
| Time picker period selector unselected pressed label text color | `md.comp.time-picker.period-selector.unselected.pressed.label-text.color` | #49454F |

#### Pressed (ripple) / State layer

| Token                                                            | Token ID                                                                   | Value   |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------- | ------- |
| Time picker time selector selected pressed state layer color     | `md.comp.time-picker.time-selector.selected.pressed.state-layer.color`     | #4F378B |
| Time picker time selector unselected pressed state layer color   | `md.comp.time-picker.time-selector.unselected.pressed.state-layer.color`   | #1D1B20 |
| Time picker time selector pressed state layer opacity            | `md.comp.time-picker.time-selector.pressed.state-layer.opacity`            | 0.1     |
| Time picker period selector selected pressed state layer color   | `md.comp.time-picker.period-selector.selected.pressed.state-layer.color`   | #633B48 |
| Time picker period selector unselected pressed state layer color | `md.comp.time-picker.period-selector.unselected.pressed.state-layer.color` | #49454F |
| Time picker period selector pressed state layer opacity          | `md.comp.time-picker.period-selector.pressed.state-layer.opacity`          | 0.1     |

---

### Time picker - Input

#### Enabled / Container

| Token                                               | Token ID                                                      | Value       |
| --------------------------------------------------- | ------------------------------------------------------------- | ----------- |
| Time input container color                          | `md.comp.time-input.container.color`                          | #ECE6F0     |
| Time input container elevation                      | `md.comp.time-input.container.elevation`                      | (elevation) |
| Time input surface tint layer color (deprecated)    | `md.comp.time-input.surface-tint-layer.color`                 | #6750A4     |
| Time input container shape                          | `md.comp.time-input.container.shape`                          | (shape)     |
| Time input time input field container color         | `md.comp.time-input.time-input-field.container.color`         | #E6E0E9     |
| Time input time input field container shape         | `md.comp.time-input.time-input-field.container.shape`         | (shape)     |
| Time input period selector selected container color | `md.comp.time-input.period-selector.selected.container.color` | #FFD8E4     |
| Time input period selector container shape          | `md.comp.time-input.period-selector.container.shape`          | (shape)     |
| Time input period selector outline color            | `md.comp.time-input.period-selector.outline.color`            | #79747E     |
| Time input period selector outline width            | `md.comp.time-input.period-selector.outline.width`            | 1dp         |
| Time input time input field container width         | `md.comp.time-input.time-input-field.container.width`         | 96dp        |
| Time input time input field container height        | `md.comp.time-input.time-input-field.container.height`        | 72dp        |
| Time input period selector container width          | `md.comp.time-input.period-selector.container.width`          | 52dp        |
| Time input period selector container height         | `md.comp.time-input.period-selector.container.height`         | 72dp        |

#### Enabled / Label text

| Token                                                  | Token ID                                                         | Value   |
| ------------------------------------------------------ | ---------------------------------------------------------------- | ------- |
| Time input time input field label text color           | `md.comp.time-input.time-input-field.label-text.color`           | #1D1B20 |
| Time input time input field label text font            | `md.comp.time-input.time-input-field.label-text.font`            | Roboto  |
| Time input time input field label text line height     | `md.comp.time-input.time-input-field.label-text.line-height`     | 52pt    |
| Time input time input field label text size            | `md.comp.time-input.time-input-field.label-text.size`            | 45pt    |
| Time input time input field label text weight          | `md.comp.time-input.time-input-field.label-text.weight`          | 400     |
| Time input time input field label text tracking        | `md.comp.time-input.time-input-field.label-text.tracking`        | 0       |
| Time input time input field label text type            | `md.comp.time-input.time-input-field.label-text.type`            | Aa      |
| Time input period selector selected label text color   | `md.comp.time-input.period-selector.selected.label-text.color`   | #633B48 |
| Time input period selector unselected label text color | `md.comp.time-input.period-selector.unselected.label-text.color` | #49454F |
| Time input period selector label text font             | `md.comp.time-input.period-selector.label-text.font`             | Roboto  |
| Time input period selector label text line height      | `md.comp.time-input.period-selector.label-text.line-height`      | 24pt    |
| Time input period selector label text size             | `md.comp.time-input.period-selector.label-text.size`             | 16pt    |
| Time input period selector label text weight           | `md.comp.time-input.period-selector.label-text.weight`           | 500     |
| Time input period selector label text tracking         | `md.comp.time-input.period-selector.label-text.tracking`         | 0.15pt  |
| Time input period selector label text type             | `md.comp.time-input.period-selector.label-text.type`             | Aa      |

#### Enabled / Headline

| Token                           | Token ID                                  | Value   |
| ------------------------------- | ----------------------------------------- | ------- |
| Time input headline color       | `md.comp.time-input.headline.color`       | #49454F |
| Time input headline font        | `md.comp.time-input.headline.font`        | Roboto  |
| Time input headline line height | `md.comp.time-input.headline.line-height` | 16pt    |
| Time input headline size        | `md.comp.time-input.headline.size`        | 12pt    |
| Time input headline weight      | `md.comp.time-input.headline.weight`      | 500     |
| Time input headline tracking    | `md.comp.time-input.headline.tracking`    | 0.5pt   |
| Time input headline type        | `md.comp.time-input.headline.type`        | Aa      |

#### Enabled / Supporting text

| Token                                                   | Token ID                                                          | Value   |
| ------------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| Time input time input field supporting text color       | `md.comp.time-input.time-input-field.supporting-text.color`       | #49454F |
| Time input time input field supporting text font        | `md.comp.time-input.time-input-field.supporting-text.font`        | Roboto  |
| Time input time input field supporting text line height | `md.comp.time-input.time-input-field.supporting-text.line-height` | 16pt    |
| Time input time input field supporting text size        | `md.comp.time-input.time-input-field.supporting-text.size`        | 12pt    |
| Time input time input field supporting text weight      | `md.comp.time-input.time-input-field.supporting-text.weight`      | 400     |
| Time input time input field supporting text tracking    | `md.comp.time-input.time-input-field.supporting-text.tracking`    | 0.4pt   |
| Time input time input field supporting text type        | `md.comp.time-input.time-input-field.supporting-text.type`        | Aa      |

#### Enabled / Separator

| Token                                             | Token ID                                                    | Value   |
| ------------------------------------------------- | ----------------------------------------------------------- | ------- |
| Time input time input field separator color       | `md.comp.time-input.time-input-field.separator.color`       | #1D1B20 |
| Time input time input field separator font        | `md.comp.time-input.time-input-field.separator.font`        | Roboto  |
| Time input time input field separator line height | `md.comp.time-input.time-input-field.separator.line-height` | 64pt    |
| Time input time input field separator size        | `md.comp.time-input.time-input-field.separator.size`        | 57pt    |
| Time input time input field separator weight      | `md.comp.time-input.time-input-field.separator.weight`      | 400     |
| Time input time input field separator tracking    | `md.comp.time-input.time-input-field.separator.tracking`    | -0.25pt |
| Time input time input field separator type        | `md.comp.time-input.time-input-field.separator.type`        | Aa      |

#### Hovered / Label text

| Token                                                        | Token ID                                                               | Value   |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- | ------- |
| Time input time input field hover label text color           | `md.comp.time-input.time-input-field.hover.label-text.color`           | #1D1B20 |
| Time input period selector selected hover label text color   | `md.comp.time-input.period-selector.selected.hover.label-text.color`   | #633B48 |
| Time input period selector unselected hover label text color | `md.comp.time-input.period-selector.unselected.hover.label-text.color` | #49454F |

#### Hovered / State layer

| Token                                                         | Token ID                                                                | Value   |
| ------------------------------------------------------------- | ----------------------------------------------------------------------- | ------- |
| Time input time input field hover state layer color           | `md.comp.time-input.time-input-field.hover.state-layer.color`           | #1D1B20 |
| Time input time input field hover state layer opacity         | `md.comp.time-input.time-input-field.hover.state-layer.opacity`         | 0.08    |
| Time input period selector selected hover state layer color   | `md.comp.time-input.period-selector.selected.hover.state-layer.color`   | #633B48 |
| Time input period selector unselected hover state layer color | `md.comp.time-input.period-selector.unselected.hover.state-layer.color` | #49454F |
| Time input period selector hover state layer opacity          | `md.comp.time-input.period-selector.hover.state-layer.opacity`          | 0.08    |

#### Focused / Focus indicator

| Token                                | Token ID                                            | Value   |
| ------------------------------------ | --------------------------------------------------- | ------- |
| Time input focus indicator color     | `md.comp.time-input.focus.indicator.color`          | #625B71 |
| Time input focus indicator thickness | `md.comp.time-input.focus.indicator.thickness`      | 3dp     |
| Time input focus indicator offset    | `md.comp.time-input.focus.indicator.outline.offset` | 2dp     |

#### Focused / Container

| Token                                             | Token ID                                                    | Value   |
| ------------------------------------------------- | ----------------------------------------------------------- | ------- |
| Time input time input field focus container color | `md.comp.time-input.time-input-field.focus.container.color` | #EADDFF |
| Time input time input field focus outline color   | `md.comp.time-input.time-input-field.focus.outline.color`   | #6750A4 |
| Time input time input field focus outline width   | `md.comp.time-input.time-input-field.focus.outline.width`   | 2dp     |

#### Focused / Label text

| Token                                                        | Token ID                                                               | Value   |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- | ------- |
| Time input time input field focus label text color           | `md.comp.time-input.time-input-field.focus.label-text.color`           | #4F378B |
| Time input period selector selected focus label text color   | `md.comp.time-input.period-selector.selected.focus.label-text.color`   | #633B48 |
| Time input period selector unselected focus label text color | `md.comp.time-input.period-selector.unselected.focus.label-text.color` | #49454F |

#### Focused / State layer

| Token                                                         | Token ID                                                                | Value   |
| ------------------------------------------------------------- | ----------------------------------------------------------------------- | ------- |
| Time input period selector selected focus state layer color   | `md.comp.time-input.period-selector.selected.focus.state-layer.color`   | #633B48 |
| Time input period selector unselected focus state layer color | `md.comp.time-input.period-selector.unselected.focus.state-layer.color` | #49454F |
| Time input period selector focus state layer opacity          | `md.comp.time-input.period-selector.focus.state-layer.opacity`          | 0.1     |

#### Pressed (ripple) / Label text

| Token                                                          | Token ID                                                                 | Value   |
| -------------------------------------------------------------- | ------------------------------------------------------------------------ | ------- |
| Time input period selector selected pressed label text color   | `md.comp.time-input.period-selector.selected.pressed.label-text.color`   | #633B48 |
| Time input period selector unselected pressed label text color | `md.comp.time-input.period-selector.unselected.pressed.label-text.color` | #49454F |

#### Pressed (ripple) / State layer

| Token                                                           | Token ID                                                                  | Value   |
| --------------------------------------------------------------- | ------------------------------------------------------------------------- | ------- |
| Time input period selector selected pressed state layer color   | `md.comp.time-input.period-selector.selected.pressed.state-layer.color`   | #633B48 |
| Time input period selector unselected pressed state layer color | `md.comp.time-input.period-selector.unselected.pressed.state-layer.color` | #49454F |
| Time input period selector pressed state layer opacity          | `md.comp.time-input.period-selector.pressed.state-layer.opacity`          | 0.1     |

---

## Anatomy

### Time picker dial

![Diagram indicating the 14 elements of a time picker dial.](https://lh3.googleusercontent.com/fEL90tTIe0i1cDIA4nKzUlbA5mbzo5VJxmQrzgNnf2RF1SiZXQ3szYwn4PancFx48zU5hY-Kx_GL_I1INZgv-o0h_V26mxPc_Zk3SVECTT9p0w=s0)

1. Headline
2. Time selector separator
3. Container
4. Period selector container
5. Period selector label text
6. Clock dial selector center
7. Clock dial selector track
8. Text button
9. Icon button
10. Clock dial selector container
11. Clock dial label text
12. Clock dial container
13. Time selector label text
14. Time selector container

### Time picker input

![Diagram indicating the 10 elements of a time picker input.](https://lh3.googleusercontent.com/oh1OcUsaz4lc3Bj48OezLBgBFvrMsglz1zYFK0mO9Cf8GuLmflhif0VpKC57fGOLp8xxpj2C9Vp9Dm4e9qFvNVOLuoXtlfobCQmFE0ov-7gIiQ=s0)

1. Headline
2. Time input field separator
3. Container
4. Period selector container
5. Period selector label text
6. Text button
7. Icon button
8. Time input field supporting text
9. Time input field label text
10. Time input field container

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview)

### Time picker dial color

![Side-by-side diagram indicating the 17 different color elements of a time picker dial.](https://lh3.googleusercontent.com/2yPFvDOYGLJVQZMR6u6XxQe0yKZcdjOxZisoE_nNHnj72E4dyq2I8vSihXm2jbqhEwmtUaHOdrrcangbqbKufbxy97LWIppPA4hGW5E7KJaP=s0)

Time picker dial color roles used for light and dark themes:

- On surface variant
- On surface
- Surface container highest
- On surface
- Tertiary container
- On tertiary container
- Surface container high
- Outline
- On surface
- Primary
- On primary
- Primary
- On surface variant
- On surface
- Surface container highest
- On primary container
- Primary container

### Time picker input color

![Side-by-side diagram indicating the 13 different color elements of a time picker input.](https://lh3.googleusercontent.com/5OUv797RnNR2XL9-3tT1sy3rKIjyxF2D4rnITJ4nURQm20-jzkT7Mygba3MDoShEFegMNRkNUE38mRg_kleVh970WS3cOJcm0KzkB1j8SEiIaA=s0)

Time picker input color roles used for light and dark themes:

- On surface variant
- On surface
- Surface container highest
- On surface
- Tertiary container
- On tertiary container
- Surface container high
- Outline
- On surface
- Primary
- On surface variant
- On primary container
- Primary container

## States

![Diagram showing the 4 interactive states of a time picker, in both light theme and dark theme.](https://lh3.googleusercontent.com/tS5QmHOdLQaGFzVS3OBV8hKVk1lcswec2uan7b-7CS_hhmglq3X45gYIkux28kcLyIRqYhetBz8xNkv8oi7LgI20dj-XT-jX2W4rJkdrAsFZ1g=s0)

1. Enabled
2. Hover
3. Focus
4. Pressed

[States specs can be found in the token module above](#tokens--specs)

## Measurements

### Time picker dial - vertical

![Diagram of vertical time picker dial measurements.](https://lh3.googleusercontent.com/FgpC_ZjE7NOxcqQBBUWoNg2IzyW6Wa2fUmWzGFf8nvuKlW2ZDSNovmYN5K645AAEsF9aGQKd904yRzx_fg9J6i0FHSroG9VFb6KmVvRd6ys=s0)

_Vertical time picker dial padding and size measurements_

| Element                    | Attribute                  | Value   |
| -------------------------- | -------------------------- | ------- |
| Container                  | Width                      | Dynamic |
| Container                  | Height                     | Dynamic |
| Container                  | Headline alignment         | Left    |
| Container                  | Top/bottom padding         | 24dp    |
| Container                  | Left/right padding         | 24dp    |
| Time selector container    | Width                      | 96dp    |
| Time selector container    | Width (24h vertical)       | 114dp   |
| Time selector container    | Height                     | 80dp    |
| Period selector container  | Width (vertical layout)    | 52dp    |
| Period selector container  | Height (vertical layout)   | 80dp    |
| Period selector container  | Width (horizontal layout)  | 216dp   |
| Period selector container  | Height (horizontal layout) | 38dp    |
| Clock dial container       | Size                       | 256dp   |
| Clock dial selector handle | Size                       | 48dp    |
| Clock dial selector center | Size                       | 8dp     |
| Clock dial selector track  | Width                      | 2dp     |

### Time picker dial - horizontal

![Diagram of horizontal time picker dial measurements.](https://lh3.googleusercontent.com/MwlBqM5KsVnml1NDvUxDoQA_7yMRkFhQYxC5VMUBe1FPGKPR0t1b7y9pIT5Rn-gjTZX3O6ju0vY7IC-ze75NYNACZagvjaTWeN8PBu9jXbxO=s0)

_Horizontal time picker dial padding and size measurements_

| Element                    | Attribute                  | Value   |
| -------------------------- | -------------------------- | ------- |
| Container                  | Width                      | Dynamic |
| Container                  | Height                     | Dynamic |
| Container                  | Headline alignment         | Left    |
| Container                  | Top/bottom padding         | 24dp    |
| Container                  | Left/right padding         | 24dp    |
| Time selector container    | Width                      | 96dp    |
| Time selector container    | Width (24h vertical)       | 114dp   |
| Time selector container    | Height                     | 80dp    |
| Period selector container  | Width (vertical layout)    | 52dp    |
| Period selector container  | Height (vertical layout)   | 80dp    |
| Period selector container  | Width (horizontal layout)  | 216dp   |
| Period selector container  | Height (horizontal layout) | 38dp    |
| Clock dial container       | Size                       | 256dp   |
| Clock dial selector handle | Size                       | 48dp    |
| Clock dial selector center | Size                       | 8dp     |
| Clock dial selector track  | Width                      | 2dp     |

### Time picker input

![Diagram of time picker input measurements.](https://lh3.googleusercontent.com/pTsIaFUPD07juD1tkEAvb1p0JJU1I0QmuQdvKL7rBgtjB7hWWTAGzoRFAag-kQi9AYqTpJixai14sAwU1UsBFsAJY4izUkwetewV66_oVBcw=s0)

_Time picker input padding and size measurements_

| Element                    | Attribute          | Value   |
| -------------------------- | ------------------ | ------- |
| Container                  | Width              | Dynamic |
| Container                  | Height             | Dynamic |
| Container                  | Headline alignment | Left    |
| Container                  | Top/bottom padding | 24dp    |
| Container                  | Left/right padding | 24dp    |
| Time input field container | Width              | 96dp    |
| Time input field container | Height             | 72dp    |
| Period selector container  | Width              | 52dp    |
| Period selector container  | Height             | 72dp    |

## Configurations

### Vertical orientation and horizontal orientation

![Comparing vertical and horizontal time picker dials.](https://lh3.googleusercontent.com/WmiYd7XEBckVcinYGeo-3xr2eeeOOIIWF9dZ0VTU4ajlR6R63EP3LMH9AakmYwtl5XlTulsT_uJXym_dOmVCWgTCX49b0aTPPU_3U66z8Ro=s0)

1. Vertical layout (default on mobile)
2. Horizontal layout

### 24-hour time picker dial

![2 24-hour time picker dials with vertical and horizontal layouts.](https://lh3.googleusercontent.com/SWtG7bnOOsaGYyC_KZbnqnO2SdcEIquR2TiLO6WAIdja0IDe8P8OQ9OehHUxTYAhf1vXNKGrjkMeJdgKkFfG-PqUTsDcH8sZ625V3ngYp1CFMA=s0)

1. 24h dial in vertical layout (default on mobile)
2. 24h dial in horizontal layout

### 12-hour and 24-hour time picker inputs

![Compare 12-hour and 24-hour time picker inputs.](https://lh3.googleusercontent.com/YLwHepIx8fINPXo6ZMe0kk0nFoE45b4o9Rvtdre11V6KVm_pbkSMOb4Ltiu4Sgk-NyG0M5t1Cs5ghFF62FC4iAImZ1o-zi-1jM1rilN5756f=s0)

1. 12h input
2. 24h input
