---
url: https://m3.material.io/styles/motion/overview/specs
crawled_at: 2026-02-02T00:00:00.000Z
category: styles
section: motion
page_type: specs
status: complete
---

# Motion physics system

The motion physics system makes a UI expressive and easy to use.

## Cross-platform experiences

The motion physics system is available on Jetpack Compose and MDC-Android, and can be easily adapted to other platforms.

| Platform | Status | How to apply |
| --- | --- | --- |
| Jetpack Compose | Available | Use built-in components and spring tokens. |
| MDC-Android | Available. Not yet added to components. | Use built-in spring tokens. |
| Web | Compatible | Use springs when possible, otherwise use curves that mimic the springs for animations without interruptions or gestures. |

## Tokens and specs

The **spring composite** tokens are used in the motion physics system. These composites combine two **spring** tokens (damping and stiffness) into a single token for ease of use. The **easing**, **duration**, and **path** tokens are used by the legacy system, so can be ignored.

### Spring Composite Tokens

| Token | Description |
| --- | --- |
| `md.sys.motion.spring.fast.spatial` | Custom composite with 2 properties |
| `md.sys.motion.spring.fast.effects` | Custom composite with 2 properties |
| `md.sys.motion.spring.default.spatial` | Custom composite with 2 properties |
| `md.sys.motion.spring.default.effects` | Custom composite with 2 properties |
| `md.sys.motion.spring.slow.spatial` | Custom composite with 2 properties |
| `md.sys.motion.spring.slow.effects` | Custom composite with 2 properties |

### Spring Tokens (Standard, Android)

| Token | Value |
| --- | --- |
| `md.sys.motion.spring.fast.spatial.damping` | 0.9 |
| `md.sys.motion.spring.fast.spatial.stiffness` | 1400 |
| `md.sys.motion.spring.fast.effects.damping` | 1 |
| `md.sys.motion.spring.fast.effects.stiffness` | 3800 |
| `md.sys.motion.spring.default.spatial.damping` | 0.9 |
| `md.sys.motion.spring.default.spatial.stiffness` | 700 |
| `md.sys.motion.spring.default.effects.damping` | 1 |
| `md.sys.motion.spring.default.effects.stiffness` | 1600 |
| `md.sys.motion.spring.slow.spatial.damping` | 0.9 |
| `md.sys.motion.spring.slow.spatial.stiffness` | 300 |
| `md.sys.motion.spring.slow.effects.damping` | 1 |
| `md.sys.motion.spring.slow.effects.stiffness` | 800 |

### Easing Tokens

| Token | Name |
| --- | --- |
| `md.sys.motion.easing.emphasized` | Emphasized |
| `md.sys.motion.easing.emphasized.accelerate` | Emphasized accelerate |
| `md.sys.motion.easing.emphasized.decelerate` | Emphasized decelerate |
| `md.sys.motion.easing.standard` | Standard |
| `md.sys.motion.easing.standard.accelerate` | Standard accelerate |
| `md.sys.motion.easing.standard.decelerate` | Standard decelerate |
| `md.sys.motion.easing.legacy` | Legacy |
| `md.sys.motion.easing.legacy.accelerate` | Legacy accelerate |
| `md.sys.motion.easing.legacy.decelerate` | Legacy decelerate |
| `md.sys.motion.easing.linear` | Linear |

### Duration Tokens

| Token | Name |
| --- | --- |
| `md.sys.motion.duration.short1` | Short 1 |
| `md.sys.motion.duration.short2` | Short 2 |
| `md.sys.motion.duration.short3` | Short 3 |
| `md.sys.motion.duration.short4` | Short 4 |
| `md.sys.motion.duration.medium1` | Medium 1 |
| `md.sys.motion.duration.medium2` | Medium 2 |
| `md.sys.motion.duration.medium3` | Medium 3 |
| `md.sys.motion.duration.medium4` | Medium 4 |
| `md.sys.motion.duration.long1` | Long 1 |
| `md.sys.motion.duration.long2` | Long 2 |
| `md.sys.motion.duration.long3` | Long 3 |
| `md.sys.motion.duration.long4` | Long 4 |
| `md.sys.motion.duration.extra-long1` | Extra long 1 |
| `md.sys.motion.duration.extra-long2` | Extra long 2 |
| `md.sys.motion.duration.extra-long3` | Extra long 3 |
| `md.sys.motion.duration.extra-long4` | Extra long 4 |

### Style Tokens

| Token | Name |
| --- | --- |
| `md.sys.motion.path` | Motion path |

## Web: Convert springs to curves

| Spring | Curve |
| --- | --- |
| Expressive fast spatial | 0.42, 1.67, 0.21, 0.90. Duration = 350ms |
| Expressive default spatial | 0.38, 1.21, 0.22, 1.00. Duration = 500ms |
| Expressive slow spatial | 0.39, 1.29, 0.35, 0.98. Duration = 650ms |
| Expressive fast effects | 0.31, 0.94, 0.34, 1.00. Duration = 150ms |
| Expressive default effects | 0.34, 0.80, 0.34, 1.00. Duration = 200ms |
| Expressive slow effects | 0.34, 0.88, 0.34, 1.00. Duration = 300ms |
| Standard fast spatial | 0.27, 1.06, 0.18, 1.00. Duration = 350ms |
| Standard default spatial | 0.27, 1.06, 0.18, 1.00. Duration = 500ms |
| Standard slow spatial | 0.27, 1.06, 0.18, 1.00. Duration = 750ms |
| Standard fast effects | 0.31, 0.94, 0.34, 1.00. Duration = 150ms |
| Standard default effects | 0.34, 0.80, 0.34, 1.00. Duration = 200ms |
| Standard slow effects | 0.34, 0.88, 0.34, 1.00. Duration = 300ms |

## Easing and duration

The original easing and duration tokens are still available to use as a fallback, and are currently used for animating transitions. [View easing and duration system](https://m3.material.io/styles/motion/easing-and-duration/applying-easing-and-duration)
